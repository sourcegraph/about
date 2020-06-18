---
title: "Performance improvements in precise code intel"
description: This post outlines many of the higher-level changes that were made in a direct effort to increase the performance of precise code intel queries, increase the performance of raw LSIF upload processing, and decrease the size of precise code intel bundles on disk.
author: Eric Fritz
authorUrl: https://eric-fritz.com
publishDate: 2020-06-17T10:00-08:00
tags: [blog]
slug: performance-improvements-in-precise-code-intel
heroImage: /blog/flying-brain.png
published: true
---

In [Sourcegraph 3.16](/blog/sourcegraph-3.16#performance-improvements-for-precise-code-intelligence), we mentioned a rewrite of the services composing the precise-code-intel backend from TypeScript to Go. There were many reasons for this rewrite, but there's one particular reason that I'd like to explore here: _We as a team know how to improve Go code that operates on large-scale data and we have less experience doing the same for TypeScript on the server side_.

This is **not** to say anything negative about TypeScript - the language is a surprising joy to work in, I'll admit after nearly a year. This is **not** to say that it's impossible to write code that performs well in a Node.js environment - V8 is a true beast of engineering. This is **not** to say that there is a lack of tools to help developers profile and improve their code.

This **is** to say that I think it was good move to perform the rewrite to allow the backend team to play to our strengths. Rewriting this code in a language for which we have a better mental model of semantics and performance, a better grasp of the ecosystem, and _actual_ experience writing high-performance code allows us to move with enough velocity in the future that the time spent rewriting will be paid off in short order. Opening the code up to all other backend developers at Sourcegraph where Go is a core competency is obviously a move in the correct direction.

---

This post outlines many of the higher-level changes that were made in a direct effort to increase the performance of precise code intel queries, increase the performance of raw LSIF upload processing, and decrease the size of precise code intel bundles on disk.

The following graph shows the decrease in query latency while running our [integration test suite](https://github.com/sourcegraph/sourcegraph/tree/5f51043ad2130a1acdcfca8b969f907cd03a220d/internal/cmd/precise-code-intel-test) compared to the previous two Sourcegraph releases. The test suite is querying cross-repo definitions and references over three commits from [etcd-io/etcd](https://github.com/etcd-io/etcd), [pingcap/tidb](https://github.com/pingcap/tidb), and [distributedio/titan](https://github.com/distributedio/titan), and two commits from [uber-go/zap](https://github.com/uber-go/zap).

<div class="text-center benchmark-results">
  <img src="https://storage.googleapis.com/sourcegraph-assets/lsif-query-latency-317.png" width="70%">
</div>

This next graph shows the time required to upload and process the indexes.

<div class="text-center benchmark-results">
  <img src="https://storage.googleapis.com/sourcegraph-assets/lsif-processing-latency-317.png" width="50%">
</div>

These last graphs show the size of the converted bundle on disk after conversion.

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

With all the changes discussed in this post combined, the latency for queries and upload processing was cut by a factor of two, as was the size of bundles on disk, compared to Sourcegraph 3.15.

Hopefully this post can be used as a source of performance improvement inspiration for non-Sourcegraphers, and can serve as a historic commit document for current and future Sourcegraphers which is more useful than my usual commit patterns:

![eric's general commit message quality](https://storage.googleapis.com/sourcegraph-assets/efritz-commit-log.png)

--- 

## Fiddle with the architecture

This section describes changes that were made at the architectural level, altering which services communicate with what, what data is owned by what service, and what responsibilities services have.

### Collapse network boundaries

**PRs**:
- [codeintel: Call handleEnqueue from lsifserver proxy (#10871)](https://github.com/sourcegraph/sourcegraph/pull/10871)
- [codeintel: Call query methods from from lsifserver client (#10872)](https://github.com/sourcegraph/sourcegraph/pull/10872)

Before the port to Go, there were three services written in TypeScript composing the precise code intel backend:

1. _precise-code-intel-api-server_, which is the interface to the precise-code-intel database records,
2. _precise-code-intel-bundle-manager_, which is the interface directly above SQLite bundles, and
3. _precise-code-intel-worker_, which converts raw LSIF input into a SQLite file readable by the bundle manager.

After the port to Go, the API server became a pretty thin wrapper over queries to the bundle manager. Regardless of the performance outcome, this service was destined to be removed in favor of directly querying the bundle manager from the frontend (the only consumer of the API).

In order to do this with a minimal diff, we replace the network calls to the api-server by [calling the HTTP handlers directly](https://github.com/sourcegraph/sourcegraph/pull/10872/files#diff-7c26d1b2bd39d2fa821872a65e774652R40) with a fake HTTP request. This allowed us to collapse the network boundary without touching much of the api-server client, or the HTTP handler code in the api-server. This is a pretty neat trick!

Additional steps were required to reduce these layers into a direct function call, but the remaining steps were only to increase the hygiene of the code and were not huge performance boosters.

## Increase parallelism

This section describes a handful of changes that were made to split work so that parts of it can be done concurrently (switching to another pending task when the current task is blocked) or in parallel (performed at the same time on physical different cores).

### Efficient input streaming

**PRs**:
- [codeintel: Refactor lsif input parsing (#10935)](https://github.com/sourcegraph/sourcegraph/pull/10935)
- [codeintel: LSIF line reader (#10990)](https://github.com/sourcegraph/sourcegraph/pull/10990)

Even after decreasing the CPU time and allocation pressure due to JSON parsing, it remained the bottleneck. The lines fed into the correlator process were consumed almost immediately, making this an issue of a slow-producer/fast-consumer (which is a much more manageable problem than a slow consumer).

In order to increase read throughput, we need to parallelize parsing of JSON lines while keeping the order the same (which matters to the correlator). Using channels as bounded queues allows us to break the problem into several parts, as illustrated below.

![concurrency diagram](https://storage.googleapis.com/sourcegraph-assets/lsif-reader-parallelism.png)

We continue to read raw data line-by-line as fast as the input allows and as fast as the consumer can take input. Using a channel here acts as a read-ahead buffer. A number of unmarshaller routines read lines from the channel, parse it, and place the result onto an output channel. A batcher process consumes the items from the element channel in batches, reordering them by the input id (not order it was sent to the channel) so that the order is consistent with the raw LSIF input. After the batch receives the expected number of values from the channel, a signal is sent to the unmarshallers freeing them to resume work. This signaling procedure ensures that one unmarshaller is not looking for work past the the batching window. Each completed batch is free to be passed to the correlator.

### Writing data to SQLite in parallel

**PR**: [codeintel: SQLite batch write (#11240)](https://github.com/sourcegraph/sourcegraph/pull/11240)

The data persisted in a precise code intel bundle falls into four categories:

1. _document data_, which is specific to a source range within a particular file,
2. _result chunk_, which is shared between documents sharded by a hashed identifier,
3. _definition data_, which acts as a lookup table for ranges by their export monikers, and
4. _reference data_, which acts as a lookup table for ranges by their import monikers.

Prior to this change, the worker process would start four goroutines, one for each category, and would sequentially [write batches](https://github.com/sourcegraph/sourcegraph/blob/master/internal/sqliteutil/batch_inserter.go) of data into the target table. The SQLite batcher inserter utility is about as fast as it can be: it sets the correct pragmas, uses a single transaction, and minimizes the number of commands by squeezing as many rows in each insert statement as possible.

![concurrency diagram (before)](https://storage.googleapis.com/sourcegraph-assets/lsif-writer-concurrency-before.png)

To increase write throughput, we moved the parallelism into the writer layer so that it could be more closely controlled. After this change, document data, result chunk data, definition data, and reference data would be written to the bundle in sequence, but each write operation would send data to _n_ batches in parallel. This increases the parallelism of writes proportionally to the number of cores.

![concurrency diagram (after)](https://storage.googleapis.com/sourcegraph-assets/lsif-writer-concurrency-after.png)

This structure also has a similar benefit to the the [efficient input streaming](#efficient-input-streaming) change detailed above. Before writing a row to a batch it has to be serialized into the correct data format. Prior to the change, each document row was serialized in sequence in a single goroutine. After the change, _n_ rows could be serialized in parallel and sent to distinct batches.

## Other code changes: doing _fewer_ things

This section describes a handful of changes that were made to simply spend _less compute time_ in order to decrease the latency of operations. Each of the sections below identifies a portion of code in which redundant or unnecessary work was being done and how the code can be changed to skip the operations that waste those cycles.

### Reduce rows written to SQLite

**PR**: [codeintel: Change representation of moniker lookups in bundle files (#11112)](https://github.com/sourcegraph/sourcegraph/pull/11112)

Prior to this change, definition and reference data, as described [above](#writing-data-to-sqlite-in-parallel), was written into the SQLite file as individual rows. Each row consists of an auto-generated unique identifier, moniker data (scheme and identifier), and a source location associated with that moniker (a relative file path, a start line, start character, end line, and end character), totaling eight values per row. For fast lookup by moniker, there is an index on the scheme and identifier columns. There can be _many **many**_ (multiple millions) rows in bundles that export many identifiers, or use many external packages.

This PR changes the definition and reference tables to group data by unique monikers and serialize all of the source locations associated with that moniker into a single compressed payload. This reduces the number of rows written to these tables by several orders of magnitude. We use this same technique for document data and result chunk data. Each row now consists of a moniker scheme and identifier column (which is a composite primary key), and a data blob column.

We lose nothing in the query path as the previous query pattern retrieved all source locations associated with a given moniker. This reduces the bundle size significantly (around 50% for the majority of the bundles used in the initial tests), as the data we're storing is smaller when compacted rather than stored as individual tuple values.

As an added benefit, we are able to insert more definition and reference rows in a single query (from 124 rows to 333 rows per query), decreasing the time required to write a bundle. See the definition of [SQLITE_MAX_VARIABLE_NUMBER](https://www.sqlite.org/limits.html) for hard insertion limits in SQLite.

### Faster, smaller serialization

**PR**: [codeintel: Gob serialization (#11230)](https://github.com/sourcegraph/sourcegraph/pull/11230)

This change replaces the gzipped JSON-encoded bundle payloads with gzipped [gob-encoded](https://golang.org/pkg/encoding/gob/) structures. This change made small improvements in time, reduces allocations, reduced bundle sizes, and more importantly, freed us from some tech debt caused by an incrementally degraded shape of data.

### Reduce allocations

**PR**: [codeintel: Reduce allocations in serializer (#10997)](https://github.com/sourcegraph/sourcegraph/pull/10997)

When you create trash, _someone_ is going to have to clean that up. Go uses a non-generational [tri-color mark-and-sweep](https://en.wikipedia.org/wiki/Tracing_garbage_collection#Tri-color_marking) collector, which means that the sweep phase takes time proportional to the entire heap. The more allocations you make, the more that needs to get swept.

#### The low-hanging fruit

One place where short-lived allocations can be avoided is in the creation of collections. Directly after the port to Go, many collections were initialized without a capacity:

```go
rangePairs := []interface{}{}
```

Appending to a slice or assigning values to a map causes the underlying structure to resize if the size of the collection exceeds the capacity of the collection. The capacity of the collection doubles on each adjustment and each insertion can be done in _amortized_ constant time. However, each resize also abandons the previous heap data, which will need to be swept at some point in the future. In this workload, the number of insertions per collection can be very large, which causes short-lived allocations to pile up.

If you can estimate the number of elements that will be inserted into the structure (or at least get close to it), you can save the runtime from allocating space for all of the intermediate collections.

```go
rangePairs := make([]interface{}, 0, len(d.Ranges))
```

This did not make a _huge_ impact, but did make _some_ and it's very low-hanging fruit to consider (with the added benefit of providing additional hints to the reader about what the purpose of the collection is - something that should always be welcomed by your fellow developers).

#### The sweeter fruit

The larger payoff was due to a small change in the data passed to [`json.Marshal`](https://golang.org/pkg/encoding/json/#Marshal). Directly after the port to Go, the serialization code looked like something similar to the following.

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

The code was originally written this way in order to maintain read/write compatibility with the bundles generated by the old version of the service, without being too verbose in the ported code. Bugs like to hide in verbosity. Properties of this payload are serialized as tagged datatypes in order to support [serialization of sets](https://stackoverflow.com/questions/31190885/json-stringify-a-set), which multiplied the verbosity in Go while it was rather concise to write in TypeScript.

Defining proper structs for these payloads decreased the number of short-lived heap-allocated maps that needed to be allocated by instead allocating _value_ types on the stack.

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

### Reduce data movement

**PR**: [codeintel: Refactor resolvers package (#11450)](https://github.com/sourcegraph/sourcegraph/pull/11450)

Hidden in this PR (which completely **obliterates** the old code intel-related GraphQL code) is a series of changes that _add up **fast**_. The GraphQL resolvers deal with a lot of data, and naturally contain a lot of loops - many of them with a shape similar to the following.

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

The `locations` slice holds (non-pointer) struct values, each with nearly 20 fields. On each iteration, the memory range on the heap composing the value at that index must be copied into a similarly sized region of memory in the current function's activation record on the stack.

Enabling go-lint gives the following warning for many of these loops, which is quite ignorable if you blindly subscribe to the core principles of the "value semantics == fast" cult.

```
rangeValCopy: each iteration copies 216 bytes (consider pointers or indexing) (gocritic) go-lint
```

This prompts us to make the following small but significant modification.

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

Now, instead of copying 216 bytes into a temporary variable (`location`) and then _again_ into the activation record of the `resolveLocation` call on every iteration, it only does the latter copy and effectively cuts the number of bytes moved by half. It was initially surprising how much of an effect this change had on the query path latency. Then again, you can fit 27 64-bit integers in the space of those 216 bytes, which actually does seem like a lot.

### Efficient JSON parsing

**PR**: [codeintel: Replace encoding/json with json-iterator/go for reading LSIF (#10992)](https://github.com/sourcegraph/sourcegraph/pull/10992)

Raw LSIF data is read line-by-line with a [`bufio.Scanner`](https://golang.org/pkg/bufio/#Scanner.Split), parsed into an envelope vertex or edge struct with [`json.Unmarshal`](https://golang.org/pkg/encoding/json/#Unmarshal), and passed to the correlator process that would build an in-memory representation of the LSIF graph.

The correlation process does little to no I/O: it just inserts identifiers into the proper map, slice, and set structures for the next step of processing. Profiling showed that the most CPU time at this phase of processing was spent in the `"encoding/json"` package (due to its heavy use of reflection). Similarly, the highest number of allocations were also from decoding values into structs (followed closely by serialization of different structs on write).

The input we accept is not easily changeable: the LSIF protocol defines the output format, and we'd like to be able to accept any protocol-confirming indexer output. It's a non-starter to require a Sourcegraph-specific input format, which would limit the available indexers to those that are written specifically for Sourcegraph and break backwards compatibility with existing users.

Instead, we looked into alternative libraries to parse JSON input. We chose [json-iterator/go](https://github.com/json-iterator/go), which is a high-performance drop-in replacement. Switching to this library was a very minimal change and gave a very nice speed boost. This library is particular faster at decoding small structures, and most LSIF vertex and edge definitions are very small (with the exception of some high-degree _contains_ edges, as is the case with very long files).

Alternative libraries we considered include [easyjson](https://github.com/mailru/easyjson), [fastjson](https://github.com/valyala/fastjson), and [ffjson](https://github.com/pquerna/ffjson) among a few others. Some of these libraries required additional engineering effort as the API was not equivalent to the API defined by the `"encoding/json"` package.

### Reduce disk writes

**PR**: [codeintel: GetUpload should return reader, not file (#11042)](https://github.com/sourcegraph/sourcegraph/pull/11042)

The bundle manager is the keeper of all things persistent in the precise code intel world. When a worker needs to process raw LSIF data, the data needs to request the data from the bundle manager. Symmetrically, once a worker serializes a bundle, it is passed back to the bundle manager for permanent storage.

Prior to this change, the bundle manager client would request the data through an HTTP request, write it to disk, then pass the filename to the worker process. The worker would open and read the file for processing.

We can reduce I/O by simply passing the HTTP response reader back to the worker instead of requiring that it hit disk. This also saves us the time required to wait for the entire transfer to complete and flush to disk before beginning to process the data. As raw LSIF indexes can be quite large (multi-gigabyte), this provides a non-negligible boost in many cases.

----

We plan to continue on this path of performance improvements, and the next release will focus specifically on processing multiple bundles concurrently in order to multiply the benefit of these recent performance gains.

If you found the material in this article interesting, come help us squeeze even more performance of the precise code intel services! [We're hiring](https://jobs.lever.co/sourcegraph/91ee5178-6daf-4a84-be02-048cd8aa2aa0/apply).
