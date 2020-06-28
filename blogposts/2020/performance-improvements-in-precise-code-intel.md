---
title: "How we made code navigation twice as fast in Sourcegraph 3.17"
description: Read about how we used a memory and CPU profiler, creative thinking, and a lot of developer elbow grease to optimize our semantic code indexing system to give users twice-as-fast tooltips, go-to-definition, and references.
author: Eric Fritz
authorUrl: https://eric-fritz.com
publishDate: 2020-06-17T10:00-08:00
tags: [blog]
slug: performance-improvements-in-precise-code-intel
heroImage: /blog/flying-brain.png
published: true
---

When it comes to developer tools, speed is a critical feature. The difference between a 100ms, 1s, and 10s delay fundamentally alters user psychology—it's the difference between coding at the speed of thought vs. losing focus as your mind wanders while waiting for the UI to respond.

One of Sourcegraph's magic powers is its ability to provide compiler-accurate code navigation in completely web-based interfaces: Sourcegraph.com, private Sourcegraph instances, [GitHub PRs, GitLab MRs, and Bitbucket PRs](https://chrome.google.com/webstore/detail/sourcegraph/dgjhfomjieaadpoljlnidmbgkdffpack).

[TODO: link to or show a screenshot of an evocative demo here showing how lightning fast things are]

While compiler-level accuracy is great, one painpoint has been performance on larger codebases. The desire for speed motivated our switch from language servers to use of the Language Server Index Format (LSIF). Indexing vastly improves query latency by precomputing the data needed to serve doc tooltips, go-to-definition, and find-references requests—without sacrificing accuracy. Since adding support for LSIF, we've continued to optimize our indexing backend. In [Sourcegraph 3.16](/blog/sourcegraph-3.16#performance-improvements-for-precise-code-intelligence), we rewrote our indexing backend from TypeScript to Go with the aim of optimizing performance. In [3.17](/blog/sourcegraph-3.17), we made good on these plans.

With the guidance of the Go memory and CPU profiler, we implemented optimizations that fell into three areas:

* Eliminating unnecessary layers of abstraction
* Parallelization
* Doing less stuff: reducing I/O, CPU usage, and memory allocations

## Identifying bottlenecks

Premature optimization is the root of all evil, so we initiated our optimization efforts by using a CPU and memory profiler to identify performance bottlenecks in our existing system.

[TODO(efritz): embed CPU and heap profiles]

These profiles revealed a number of hotspots in the code, and we combined these results with a high-level understanding of the system architecture to come up with a list of changes that would have a substantial impact on both indexing and query performance.

[TODO(efritz): link to and embed architecture diagram in docs here]

These efforts yielded a 2x speedup in query latency, a 2x speedup in indexing latency, and a nearly 50% reduction in memory and disk load, which we'll evaluate in more detail later in this post.

## Eliminating unnecessary abstraction layers

The CPU profiling revealed a substantial amount of time was being spent in the API server. This service receives the LSIF upload from the API user and writes it to disk. A separate background worker service later converts the on-disk LSIF data into a SQLite bundle. On a user query, the API server receives the requests, queries the bundle manager server, which in turn uses the SQLite bundle to respond to the API server, which then forwards that response to the user.

The "middleman" nature of the API server when serving user requests was an artifact of the initial architecture of the indexed precise code system. After porting this system to go in 3.16, it became apparent that the API server was a *very* thin wrapper around the bundle manager API, so in 3.17, we decided to remove it altogether.

The way we did this was a bit of a kludge, which we might revisit and clean up later. In essence, we wanted to eliminate an unnecessary network call between the precise code navigation API server client (the Sourcegraph frontend service) and the API server. However, we didn't want to have to write a bunch of new code to define an API service and client for the bundle manager directly, so what we did was we kept the existing API server and client as-is, but replaced the actual network calls with function calls to the HTTP handler functions directly.

[In the code](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@bc072662500da3ce0bc7b5820bf0f63fb59182fb/-/blob/internal/codeintel/lsifserver/client/proxy.go#L40-46), we use the `httptest.NewRecorder` function to record the handler response, and then return this request to the caller as if it came from an actual over-the-network HTTP client call. Not the cleanest code in the world, but this addressed the immediate performance bottleneck and we were eager to move onto the others. We plan to revisit this abstraction boundary in the future to clean it up.

<!-- **PRs**: -->
<!-- - [codeintel: Call handleEnqueue from lsifserver proxy (#10871)](https://github.com/sourcegraph/sourcegraph/pull/10871) -->
<!-- - [codeintel: Call query methods from from lsifserver client (#10872)](https://github.com/sourcegraph/sourcegraph/pull/10872) -->

## Parallelization

Parsing and I/O occupied a large amount of time spent in the indexing process. Parallelization provided a way to speed up both of these sections of the indexing pipeline:

![concurrency diagram](https://storage.googleapis.com/sourcegraph-assets/lsif-reader-parallelism.png)

[TODO(efritz): description of the pipeline. In particular, wth is the correlator?]

### Parallel parsing

<!-- **PRs**: -->
<!-- - [codeintel: Refactor lsif input parsing (#10935)](https://github.com/sourcegraph/sourcegraph/pull/10935) -->
<!-- - [codeintel: LSIF line reader (#10990)](https://github.com/sourcegraph/sourcegraph/pull/10990) -->

LSIF data is uploaded as JSON, and we can split this JSON into different chunks that can be parsed in parallel. At the end, we assemble the parsed results in their original order.

Parallelization increases throughput, but of course any speedup is pointless if the subsequent step in the pipeline cannot consume the output fast enough. So we dug deeper into the behavior of the code by [TODO(efritz): how did we do this?]. This indicated that this was indeed a slow-produce/fast-consumer situation and that increasing the throughput of the JSON parsing phase would decrease the latency of the overall indexing process.

In the implementation, we used channels as bounded queues to break up the parsing into separate jobs that can be processed in parallel. The channel acts as a read-ahead buffer:
* The unmarshaller goroutines read lines from an input channel, parse it, and place the result into an output element channel. [TODO(efritz): link to section in code here].
* A batcher process then consumes the items from the element channel in batches, reordering them by input ID to be consistent with the original order in the LSIF data [TODO(efritz): link to code]
* After the batch receives the expected number of values from the channel, it sends a signal to the unmarshallers to free them to resume work. This signalling procedure ensures that no unmarshaller looks for work past the current batching window (which would be pointless and wasteful). [TODO(efritz): link to code]
* Each completed batch is then passed to the correlator [TODO(efritz): link to code]

### Writing to SQLite in parallel

<!-- **PR**: [codeintel: SQLite batch write (#11240)](https://github.com/sourcegraph/sourcegraph/pull/11240) -->

The output of the indexing system is a SQLite bundle, which contains 4 categories of data:

* **Document data:** specific to a source range within a particular file
* **Eesult chunk:** shared between documents sharded by a hashed identifier
* **Definition data:** acts as a lookup table for ranges by their export monikers
* **Reference data:** acts as a lookup table for ranges by their import monikers

[TODO(efritz): The reader has no idea what the significance of these 4 categories of data is. Explain]

Prior to this change, the worker process would start four goroutines, one for each category, and
would sequentially [write batches](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@master/-/blob/internal/sqliteutil/batch_inserter.go)
of data into the target table. The SQLite batcher inserter utility is about as fast as it can be: it
sets the correct pragmas, uses a single transaction, and minimizes the number of commands by
squeezing as many rows into each insert statement as possible.


![concurrency diagram (before)](https://storage.googleapis.com/sourcegraph-assets/lsif-writer-concurrency-before.png)

To increase write throughput, we moved the parallelism into the writer layer. After this change, document data, result chunk data, definition data, and reference data could be written to the bundle in sequence, but each write operation would send data to _n_ batches in parallel. This more evenly distributes the serialize-and-write load across the available number of cores.

![concurrency diagram (after)](https://storage.googleapis.com/sourcegraph-assets/lsif-writer-concurrency-after.png)

[TODO(efritz): can we show data showing what improved after every optimization?]



## Other code changes: doing _fewer_ things

In addition to simplifying the architecture and parallelizing critical tasks, we also made numerous targeted updates to be smarter (thriftier) to reduce the amount of data allocated in memory, serialized, and persisted.

### Collapse rows in SQLite

<!-- **PR**: [codeintel: Change representation of moniker lookups in bundle files (#11112)](https://github.com/sourcegraph/sourcegraph/pull/11112) -->

Prior to Sourcegraph 3.17, each definition and reference mapped to its own row in the SQLite table. Each such row consisted of the following:
* An auto-generated numerical UUID
* LSIF moniker (scheme and identifier) [TODO(efritz): give example]
* A source location (file path, file offset range)

In total, this was 8 columns (1 for the UUID, 2 for the moniker, 5 for the location). An index on the schema and identifier columns enabled fast lookup by moniker. In a given codebase, there can be many millions of such rows.

Because there can be many references to a single definition, there will be many rows with duplicate values for the moniker, which means a lot of redundancy in the SQLite table. Since we are looking up by moniker anyway, it makes sense to group the data by moniker. In 3.17, we did just that, serializing all of the source locations associated with a particular moniker into a single compressed data blob. This reduced the number of rows by several orders of magnitude [TODO(efritz): can we be a bit more precise?].

We applied the same principle for document data and result chunk data. This reduced overall SQLite bundle size by around 50%.

Due to the reduced size of data, we are also able to insert more definition and references per SQL update query, further decreasing the overall time it takes to write a bundle. (SQLite imposes a hard insertion limit, [SQLITE\_MAX\_VARIABLE\_NUMBER](https://www.sqlite.org/limits.html).)



### Faster, smaller serialization

<!-- **PR**: [codeintel: Gob serialization (#11230)](https://github.com/sourcegraph/sourcegraph/pull/11230) -->

We replaced the gzipped JSON-encoded bundle payloads with gzipped [gob-encoded](https://golang.org/pkg/encoding/gob/) structures. This reduced heap allocations, reduced overall bundle size, and yielded small improvements in overall indexing time. Most importantly, however, this allowed us to remove some tech debt caused by data structures that had evolved to become more complex over time.

[TODO(efritz): can we give an example of what we mean by "tech debt caused by data shape degraded over time"? Not exactly sure what that means.]


### Empty slice allocations

<!-- **PR**: [codeintel: Reduce allocations in serializer (#10997)](https://github.com/sourcegraph/sourcegraph/pull/10997) -->

After porting the LSIF indexing system from TypeScript to Go, our code was littered with empty slice allocations like this one:

```go
rangePairs := []interface{}{}
```

In Go, the size of a slice is tied to two fields: size and capacity. Size corresponds to the number of elements in the slice and capacity corresponds to the number of elements for which memory has been allocated in the slice. When the size exceeds the capacity, more memory must be allocated.

In Go, this is done by allocating a block of memory twice the size of the original and copying over the slice contents from the old memory block to the new one. This behavior does yield *amortized* constant time insertion, but the copying is expensive, and each memory block that is abandoned will need to be garbage collected at some point. This cost is exacerbated if the number of insertions into an originally empty slice is quite large, causing short-lived allocations to pile up.

If you can estimate the number of elements that will be inserted into the slice, you can save the runtime from a lot of intermediate allocations:

```go
rangePairs := make([]interface{}, 0, len(d.Ranges))
```

In our case, rewriting empty slice allocations to have non-zero capacities did not make a huge impact on overall performance, but it was easy to do and yielded better readability by making the purpose of new empty slices clearer.

### Maps vs. structs

In TypeScript, the most common associative data structure that maps from key to value is a JavaScript object (`{}`). The closest analog that Go has is a map from string to interface (`map[string]interface{}`). However, if the set of key values and the corresponding value types are known at compile time, Go has another data structure, the struct, which has different runtime characteristics.

After the rewrite from TypeScript to Go, the serialization code passed a `map[string]interface{}` instance to the `json.Marshal` function:

```go
func (*defaultSerializer) MarshalDocumentData(d types.DocumentData) ([]byte, error) {
    // ...

    encoded, err := json.Marshal(map[string]interface{}{
        "ranges":             map[string]interface{}{"type": "map", "value": rangePairs},
        "hoverResults":       map[string]interface{}{"type": "map", "value": hoverResultPairs},
        "monikers":           map[string]interface{}{"type": "map", "value": monikerPairs},
        "packageInformation": map[string]interface{}{"type": "map", "value": packageInformationPairs},
    }

    // ...
}
```

In Sourcegraph 3.17, the map instances became typed struct instances:

```go
type SerializingTaggedValue struct {
	Type  string      `json:"type"`
	Value interface{} `json:"value"`
}

func (*jsonSerializer) MarshalDocumentData(d types.DocumentData) ([]byte, error) {
    // ...

    encoded, err := json.Marshal(SerializingDocument{
        Ranges:             SerializingTaggedValue{Type: "map", Value: rangePairs},
        HoverResults:       SerializingTaggedValue{Type: "map", Value: hoverResultPairs},
        Monikers:           SerializingTaggedValue{Type: "map", Value: monikerPairs},
        PackageInformation: SerializingTaggedValue{Type: "map", Value: packageInformationPairs},
    }

    // ...
}
```

In Go, map values are allocated on the heap, while non-pointer struct instances are allocated on the stack. The switch from heap allocation to stack allocation for this data yielded substantial improvements in performance.

### Reducing data movement

<!-- **PR**: [codeintel: Refactor resolvers package (#11450)](https://github.com/sourcegraph/sourcegraph/pull/11450) -->

The conventional wisdom holds that stack allocation is often more efficient than heap allocation, but this is not always the case. For example, there are cases where naive stack allocation will result in unnecessary copying. Consider the following for-loop, which is representative of a pattern that was quite common in our code:

```go
resolvedLocations := make([]gql.LocationResolver, 0, len(locations))
for _, location := range locations {
    resolver, err := resolveLocation(ctx, locationResolver, location)
    if err != nil {
        return nil, err
    }
    if resolver == nil {
        continue
    }

    resolvedLocations = append(resolvedLocations, resolver)
}
```

The `locations` slice holds non-pointer struct values, each of which has around 20 fields. On each iteration of the loop, one of these values is copied into the portion of the stack allocated to hold the loop variable `location`. go-lint warns us about this:

```
rangeValCopy: each iteration copies 216 bytes (consider pointers or indexing) (gocritic) go-lint
```

This prompts a small, but significant change:

```go
resolvedLocations := make([]gql.LocationResolver, 0, len(locations))
for i := range locations {
    resolver, err := resolveLocation(ctx, locationResolver, location[i])
    if err != nil {
        return nil, err
    }
    if resolver == nil {
        continue
    }

    resolvedLocations = append(resolvedLocations, resolver)
}
```

At runtime, this eliminates the need to copy the 216 bytes of each slice element into an intermediate `location` variable before copying it again into the activation record of the `resolveLocation` function call. This yielded a surprising impact on overall query latency [TODO(efritz): can we specify how much?].

### Efficient JSON parsing

<!-- **PR**: [codeintel: Replace encoding/json with json-iterator/go for reading LSIF (#10992)](https://github.com/sourcegraph/sourcegraph/pull/10992) -->

The Go standard library's JSON parser is reliable and has an easy-to-use API. However, it is not hyper-optimized for performance. Profiling showed that the most CPU time in the correlation phase of indexing was spent in the `"encoding/json"` package, due to its heavy use of reflection.

We looked at several other options for JSON parsing in Go ([easyjson](https://github.com/mailru/easyjson), [fastjson](https://github.com/valyala/fastjson), [ffjson](https://github.com/pquerna/ffjson)) before finally settling on json-iterator/go, a high-performance drop-in replacement for the standard library's `encoding/json` package. The low switching cost and the efficiency of decoding small structures (which are common in LSIF vertex and edge definitions) were the key considerations that motivated our choice.

[TODO(efritz): what perf impact did this have?]

### Avoid unnecessary disk writes

<!-- **PR**: [codeintel: GetUpload should return reader, not file (#11042)](https://github.com/sourcegraph/sourcegraph/pull/11042) -->

The bundle manager acts as a sort of hub in the code navigation indexing system, fetching LSIF data and serving it to workers, which then convert it into SQLite bundles that are then passed back to the bundle to write to disk.

Previously, when a worker requested LSIF data, the bundle manager would request the data using an HTTP request, write it to disk, and then pass the filename to the worker process.

This disk-write turned out to be unnecessary, as we could simply pass the HTTP response reader back to the worker directly. Not only did this eliminate the need to write the data out to disk, it also enabled a streaming data processing model, as the worker could begin consuming the data from the HTTP response reader without blocking on serializing the entire data structure.

This yielded a performance boost that became more significant the larger the codebase and corresponding LSIF data.


## Reviewing results

The following chart shows the decrease in query latency while running our [integration test suite](https://github.com/sourcegraph/sourcegraph/tree/5f51043ad2130a1acdcfca8b969f907cd03a220d/internal/cmd/precise-code-intel-test) compared to the previous two Sourcegraph releases. The test suite is querying cross-repo definitions and references over three commits from [etcd-io/etcd](https://github.com/etcd-io/etcd), [pingcap/tidb](https://github.com/pingcap/tidb), and [distributedio/titan](https://github.com/distributedio/titan), and two commits from [uber-go/zap](https://github.com/uber-go/zap).

<div class="text-center benchmark-results">
  <img src="https://storage.googleapis.com/sourcegraph-assets/lsif-query-latency-317.png" width="70%">
</div>

This next chart shows the time required to upload and process the indexes.

<div class="text-center benchmark-results">
  <img src="https://storage.googleapis.com/sourcegraph-assets/lsif-processing-latency-317.png" width="50%">
</div>

These last charts show the size of the converted bundle on disk after conversion.

<div class="text-center benchmark-results">
  <img src="https://storage.googleapis.com/sourcegraph-assets/tidb-bundle-size.png" width="48%">
  <img src="https://storage.googleapis.com/sourcegraph-assets/etcd-bundle-size.png" width="48%">
  <br />
  <img src="https://storage.googleapis.com/sourcegraph-assets/titan-bundle-size.png" width="48%">
  <img src="https://storage.googleapis.com/sourcegraph-assets/zap-bundle-size.png" width="48%">
</div>

<style>
  .blog-post__body .benchmark-results img { box-shadow: none; display: inline; margin: 10px auto; }
</style>

With all the changes discussed in this post combined, the latency for queries and upload processing has been cut by a factor of two, as has the size of bundles on disk, compared to Sourcegraph 3.15.

We plan to continue on this path of performance improvements, and the next release will focus specifically on processing multiple bundles in parallel in order to multiply the benefit of these recent performance gains. This is just the latest chapter in our continuing effort to bring fast, precise code navigation to every language, every codebase, and every programmer. If you thought this post was interesting or valuable, we'd appreciate it if you'd share it with others!
