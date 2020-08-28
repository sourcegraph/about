---
title: "Optimizing a code intelligence indexer"
author: Eric Fritz
authorUrl: https://eric-fritz.com
publishDate: 2020-08-17T08:00-07:00
tags: [blog]
slug: optimizing-a-code-intel-indexer
heroImage: https://sourcegraphstatic.com/blog/lsif-go/lsif-go-improvements.png
published: true
---

We've finally tagged the [one-point-oh release](https://github.com/sourcegraph/lsif-go/releases/tag/v1.0.0) of [lsif-go](https://github.com/sourcegraph/lsif-go), boasting impressive speed improvements that bring intelligence to your Go code faster than ever before.

The code intelligence team is hard at work trying to bring the _time to intelligence_ (the time between pushing your code to upstream and when you can precisely navigate that code on Sourcegraph) as close to zero as possible. We want your code to always have precise and up-to-date code intelligence when you're browsing and reviewing unfamiliar code. Indexing speed is a huge part of this, and we've made a great leap here.

As an illustrative example, checkout the visual difference between indexing our [main repository](https://github.com/sourcegraph/sourcegraph) with lsif-go v0.9 (above) and indexing it with lsif-go v1.0 (below).

[![asciicast](https://asciinema.org/a/pKTby2O4N1KC9RqXBkOO7JgBw.svg)](https://asciinema.org/a/pKTby2O4N1KC9RqXBkOO7JgBw)
[![asciicast](https://asciinema.org/a/eEmncpfVa40yqhoB2ta0C8leR.svg)](https://asciinema.org/a/eEmncpfVa40yqhoB2ta0C8leR)

### Performance comparison

Unfortunately, indexing our own code isn't so worthy of celebration. It's a medium-sized repository home to 258k lines of Go code. The old version of the indexer did a fine job at this small scale, even with its many inefficiencies.

![a repo for ants?](https://i.imgflip.com/4bs5q7.jpg)

What we need to do is go **big**.

Our goal is to _efficiently_ bring code intelligence to the massive engineering teams with a mind-boggling amount of code and a breathtaking frequency of updates to that code. Our goal is to help humans effectively navigate code bases with a constantly changing topology so they can be sure of their footing and concentrate on the task at hand.

So how do we perform at scale? In v0.9, it took around 7 1/2 minutes to index the [Go AWS SDK](https://sourcegraph.com/github.com/aws/aws-sdk-go); in v1.0, it takes 24 seconds. In v0.9, it took nearly 7 hours to index 56 million lines of code; in v1.0, it takes under 20 minutes. See [below](#reviewing-results) for a graphical comparison between the last three versions of the indexer.

**[The indexer takes only 5% of the time it used to.](https://github.com/sourcegraph/lsif-go/tree/master/benchmark.md)**

Indexing speed is _so_ important for code bases undergoing constant change. Stale, hours-old code intelligence on a monorepo at scale is about as useful as using a map of Pangea to find your way home. This is why the code intelligence team is dedicated to [increasing the efficiency of every part of the stack](https://about.sourcegraph.com/blog/optimizing-a-code-intel-backend) to make sure your maps are always accurate.

## The optimization story

Fans of Sourcegraph also seem like the kind of folks that love a good optimization story - so here we go.

### Where was v0.9.0 spending all its time?

I think describing the inefficiencies of lsif-go v0.9.0 is best illustrated by a likely familiar but incredibly relevant story by [Joel Spolsky](https://www.joelonsoftware.com/2001/12/11/back-to-basics/) about a simple worker named Shlemiel.

<div class="quote-container">
  <blockquote>
    Shlemiel gets a job as a street painter, painting the dotted lines down the middle of the road. On the first day he takes a can of paint out to the road and finishes 300 yards of the road. "That’s pretty good!" says his boss, "you’re a fast worker!" and pays him a kopeck.
    <br /><br />
    The next day Shlemiel only gets 150 yards done. "Well, that’s not nearly as good as yesterday, but you’re still a fast worker. 150 yards is respectable," and pays him a kopeck.
    <br /> <br />
    The next day Shlemiel paints 30 yards of the road. "Only 30!" shouts his boss. "That’s unacceptable! On the first day you did ten times that much work! What’s going on?"
    <br /><br />
    "I can’t help it," says Shlemiel. "Every day I get farther and farther away from the paint can!"
  </blockquote>
</div>

Shlemiel and lsif-go v0.9.0 both spent a lot of time needlessly re-executing the same operations in a way that did not help progress the task. Because an operation of non-constant cost was snuck into the lower levels of the process - into a method that was itself called a non-constant number of times - they both found themselves in a process that is [accidentally quadratic](https://accidentallyquadratic.tumblr.com/).

lsif-go v0.9.0's walk to the paint can was actually a [traversal of an abstract syntax tree](https://github.com/sourcegraph/lsif-go/blob/1ac006466179176711e61e89dbf136d49e9fab34/internal/index/helper.go#L241).

This particular line of code looks fairly innocuous, but only without considering the context from which the enclosing function is called: `findComments` is called on **every** identifier being indexed. This function is called for every type definition, every field, every function, every parameter, every local variable, and every type. Every identifier causes another traversal of the tree. Again and again, lsif-go v0.9.0 would trace the same set of edges only find itself at a node on a path only _slightly_ different from a previous traversal.

The following shows a _very_ reduced Go AST for the EKS API from the Go AWS SDK (click to enlarge). Here we're going to concentrate on the definition of the struct [`CreateClusterInput`](https://sourcegraph.com/github.com/aws/aws-sdk-go@a3411680ac767bb37ff50c73e58c53e2426fd80a/-/blob/service/eks/api.go#L2769:6).

<div class="no-shadow">
  <a href="https://sourcegraphstatic.com/blog/lsif-go/lsif-go-ast.svg" target="_blank">
    <img src="https://sourcegraphstatic.com/blog/lsif-go/lsif-go-ast.svg" alt="Go AST">
  </a>
</div>

This struct contains 9 fields, meaning that there are 18 identifiers within the struct body: one for the field name and one for the field type. To find each of these nodes, the same three edges (`File` to `GenDecl`, `GenDecl` to `TypeSpec`, `TypeSpec` to `FieldList`) need to be traversed. In addition, this file contains definitions for 94 constants, 76 other struct types, 510 methods, and 21 functions. Each traversal needs to exclude these non-relevant subtrees when searching for a particular node, which also costs a non-negligible amount of time. Walking the same tree for a file with tens or hundreds of thousands of identifiers can really put a dent in the indexer's throughput.

The [solution](https://github.com/sourcegraph/lsif-go/pull/66) we implemented instead performs a single walk of the AST of each file and caches the comments attached to each identifier node along the way. Then each node can simply look up its own comment in a shared, pre-populated cache during the relevant indexing step. This was the only major change between v0.9.0 and v0.10.0, and it cut indexing time of the Go AWS SDK by 4x.

### Where was v0.10.0 spending all its time?

After such a large leap in performance we hang up our hat proudly and call it a day, right?

**No!** We keep going to find out how fast this thing can get.

![Wanna see me do it again?](https://i.imgflip.com/4bw5m9.jpg)

#### Stop making the same mistakes

It turns out that lsif-go v0.10.0 was _still_ traversing syntax trees multiple times in order to generate a unique moniker identifier for symbols. For example, keeping the spirit of the examples above:

<p class="text-center">
  <code class="language-text">github.com/aws/aws-sdk-go/service/eks:CreateClusterInput.ResourcesVpcConfig</code>
</p>

These AST traversals were also [easy enough to optimize](https://github.com/sourcegraph/lsif-go/pull/77). While performing the walk of the AST to cache comments attached to nodes, we also keep track of the qualified names on the path down to a node (names of types containing fields, receiver types attached to functions) and cache those.

#### Stop looking at the stuff that doesn't matter

We've greatly reduced the number of AST traversals that we perform, but that doesn't mean that the traversals we're still doing are efficient. When we traverse an AST to gather comments and construct monikers, we do so only for nodes that define a symbol (symbols that are not a definition will use the hover text and moniker of the symbol they reference).

One of the inputs of the traversal is an ordered list of token positions for each definition in the file. When a node is visited, we check to see if the node encloses a position in the list. If it doesn't, the subtree can be skipped. If it does, then the node's children should be visited as the node's subtree contains a definition. If a node's position _equals_ a position in the list, then the node itself is a definition and a hover text and moniker entry should be set for that node.

Because the list of positions are ordered, we can use binary search to efficiently determine which of these three conditions are true for a node. But efficient does not equate to _most efficient_. Each layer of the tree received the same list of positions, meaning that the binary search operation for every node had the same cost.

It is [much more efficient](https://github.com/sourcegraph/lsif-go/pull/84) to instead pass along only the positions which can match a subtree. This change means that the binary search for a node decreases as its depth increases: the leaves of the tree have to search a much smaller list. Because the number of nodes in the tree (generally) increases with depth, this cost savings is compounded.

#### Don't do lots of little work; do little lots of work

An LSIF indexer is a tool that spits out an index file. The index file is generally larger than input source code due to making the implicit definition and reference relationships explicit. It stands to reason that the performance of the indexer will eventually be dependent on the performance of formatting the output and writing to disk.

The LSIF index file is formatted as sequence of newline-separated JSON elements. These elements are generally pretty small with the exception of hover content vertexes and contains edges adjacent to large documents. From a dump of 14 million lines, the median line contained only 91 characters (a line with 48 characters being the smallest).

Unfortunately, we were writing each line to an unbuffered file. Without a buffer, writing each element requires a [syscsall](https://man7.org/linux/man-pages/man2/write.2.html) to commit a small amount of data to the target file. With a [buffer](https://hashrocket.com/blog/posts/go-performance-observations#buffered-io), the writes are batched so that 4096 characters are written to disk at a time. This reduces the number of syscalls, and therefore number of userland/kernel context switches, by 98%.

This [change](https://github.com/sourcegraph/lsif-go/pull/79) significantly improved performance.

#### Use the compute that's ready for the taking

The implementation of the indexer has historically been single-threaded for simplicity.

![All my idle cores](https://i.imgflip.com/4bwccv.jpg)

This design decision has recently become a heavier weight on our shoulders ever since we noticed one of our enterprise customers give their engineers [m5.24xlarge EC2 instances](https://aws.amazon.com/ec2/instance-types/).

There's no way we're going to miss the opportunity to see all 96 of those cores light up the next time we chat. So we made everything that can run at the same time [run at the same time](https://github.com/sourcegraph/lsif-go/pull/91). Unfortunately, parallelizing workloads in general is not a trivial task.

##### You have to protect shared state

We did this by introducing a mutex around each shared map and slice that can be read from and written to concurrently. We use [double-checked locking](https://en.wikipedia.org/wiki/Double-checked_locking) where exclusive access to the datastructure for writing is required:

```go
func ensureValue(key string, f func() string) string {
    // fast path
    mutex.RLock()
    value, ok := m[key]
    mutex.RUnlock()
    if !ok {
        return value
    }

    // slow path
    mutex.Lock()
    defer mutex.Unlock()

    if value, ok := m[key]; ok{
        return value
    }

    // note: f() can be moved outside of critical
    // section if it's expensive/side-effect free
    value = f()
    m[key] = value
    return value
}
```

This pattern first acquires a cheap read lock on `mutex` and checks the likely condition that the data has already been cached in the shared map `m`. If the value exists, it can be returned. Otherwise, a value needs to be generated and written to the shared map for later readers. In order to handle the race condition between releasing the read lock and acquiring the write lock, we check for the value in the map again after exclusive access has been acquired.

Each shared datastructure has its own mutex so that contention from one resource does not bleed into a less-contended resource. However, it's easy to take this pattern too far. We have a shared two-layer hierarchical map whose access is protected by a [striped mutex](https://guava.dev/releases/19.0/api/docs/com/google/common/util/concurrent/Striped.html). A striped mutex is basically an array of shared mutexes, where a resource `r` is locked if the mutex at index `hash(r)` is locked (modulo the configured number of mutexes). This is a good middle-ground between having one mutex for a highly contended resource, and having `n` distinct mutexes for a map with `n` keys. The former will decrease the throughput of of the indexer as every routine is waiting on the same lock, and the latter will blow up memory usage, as `n` can be very large even for relatively small code bases.

##### You have to be sure that there are no hidden data dependencies

When we index references, we assume that our map of definitions is already populated. Our solution is to parallelize the workload in distinct steps (first index all definitions, then index all references), where each step can rely on data calculated by hte previous step which was parallelized individually.

Alternative solutions here require pushing back tasks whose dependencies have not yet been met, pre-determining a dependency graph, or recursively submitting duplicate work to the queue. Each of these solutions have a down side and decrease code clarity.

##### You have to choose the right level of work to parallelize

You can't throw work into a parallel executor and guarantee that your program runs faster. In fact, the first few attempts at parallelizing lsif-go wasn't fruitful because we tried to index each _file_ in parallel rather than each _package_. The cost of indexing a single file was low enough that the overhead of setting up the goroutines and queueing the work negated any benefit of executing the work in multiple cores.

The cost of indexing an entire package is high enough that there is obvious, tangible benefit of indexing multiple packages in different cores. This benefit far outweighs the any of the setup and queueing overhead.

<div class="no-shadow">
  <img src="https://sourcegraphstatic.com/blog/lsif-go/lsif-go-parallel.svg" alt="Parallelism diagram">
</div>

In lsif-go v1.0.0, all writes to the file are synchronized by a single goroutine controlling the output buffer. This ensures that for any single goroutine emitting elements, the order of the elements they emit will hit disk in the same order. This is important as LSIF requires that edges refer only to a vertex that has already been indexed.r

Each non-trivial task is broken into package-level work, queued into a channel, and then distributed over a number of goroutines (that scales depending on the number of physical cores on the indexing machine). A task finishes once the entire input channel has been consumed and each worker goroutines has exited. Each task makes a fresh set of goroutines.

## Reviewing results

The following charts show the comparison between the last three versions of the indexer: v0.9.0, v0.10.0, and v1.0.0.

<div class="no-shadow">
  <img src="https://sourcegraphstatic.com/blog/lsif-go/lsif-go-perf-3.png" alt="performance comparison">
  <img src="https://sourcegraphstatic.com/blog/lsif-go/lsif-go-perf-2.png" alt="performance comparison">
  <img src="https://sourcegraphstatic.com/blog/lsif-go/lsif-go-perf-1.png" alt="performance comparison">
</div>

We plan to continue on this path of performance improvements. This is just the latest chapter in our continuing effort to bring fast, precise code navigation to every language, every codebase, and every programmer. If you thought this post was interesting or valuable, we'd appreciate it if you'd share it with others!

To read another optimization story similar to this one, see our previous discussion about optimizing the [code intelligence backend](/blog/optimizing-a-code-intel-backend/), which concentrates on reducing the latency of the other half of the system that contributes to delays in code intelligence.

<style>
  .blog-post__body .no-shadow img { box-shadow: none; }
  .blog-post__body .inline-images img { margin-left: 0; margin-right: 0; padding: 0; border: 0; display: inline; width: 49.5% }
  .quote-container { width: 100%; }
  blockquote { margin: 20px 0px; padding-top: 20px; padding-left: 20px; padding-bottom: 20px; margin-left: 20px; font-style: italic; }
</style>
