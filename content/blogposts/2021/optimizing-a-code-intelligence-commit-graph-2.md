---
title: 'Optimizing a code intelligence commit graph (Part 2)'
authors:
  - name: Eric Fritz
    url: https://eric-fritz.com
description: "We enabled Sourcegraph to resolve code intelligence requests for commits missing an index, but ran into scalability challenges when dealing with large commit graphs. Here's how we unearthed and resolved the problem."
publishDate: 2021-06-03T18:00-07:00
tags: [blog]
slug: optimizing-a-code-intel-commit-graph-part-2
heroImage: /blog/optimizing-code-intelligence-commit-graph.png
socialImage: https://about.sourcegraph.com/blog/optimizing-code-intelligence-commit-graph.png
published: true
---

![Optimizing code intelligence commit graph graphic](/blog/optimizing-code-intelligence-commit-graph.png)

In [Part 1 of this optimization story](/blog/optimizing-a-code-intel-commit-graph/), we detailed how Sourcegraph can resolve code intelligence queries using data from older commits when data on the requested commit is not yet available. The implementation lies completely within PostgreSQL, and the queries run with very low latency (< 1ms). We boldly claimed that our fears of scalability were no longer cause for concern.

Turns out that claim was a half-truth (if not a lie) as Sourcegraph solves the problem well, but only at a particular scale. There is an entire class of enterprise customers who could benefit from this feature as well, but the speed at which the code moves is a huge obstacle to overcome when calculating visible uploads on demand.

Because our implementation relies on a graph traversal within PostgreSQL triggered frequently by user action, we need to limit the distance each query can travel in the commit graph. This is to guarantee that single requests are not taking a disproportionate amount of application or database memory and causing issues for other users. The introduction of this limit brings stability to the Sourcegraph instance by capping the maximum load a single query can put on the database. But there is a downside: there are many shapes of commit graphs that will fail to find a visible upload traversing a limited commit graph, even if the distance is not too large.

In [Part 1](/blog/optimizing-a-code-intel-commit-graph/#Performance-improvements), we stopped tracking the distance between commits as a performance optimization. Because of this, we no longer have a way to limit by commit _distance_. Instead, we enforce a limit on the number of total commits seen during the traversal. This means that one query will travel a smaller distance on a commit graph with a large number of merge commits, and a larger distance on a commit graph that is mostly linear.

The following Git commit graph illustrates this difference. Searching from commit `g`, we could find index data on commits `a` and `m`, both only two steps away. However, if we had a limit of 10, we would see only the commits directly adjacent to `g` and would hit our limit before expanding outwards.

<Figure
    src="https://sourcegraphstatic.com/blog/commit-graph-optimizations/graph6.png" 
    alt="High-merge commit graph"
    caption={<>A Git commit graph with a large number of paths from <code>a</code> to <code>g</code> and <code>g</code> to <code>m</code>.</>}
/>

Another issue is high commit velocity. Suppose that we have a hard limit of viewing 50 commits. We will then be able to look (approximately) 25 commits in a single direction. If the process for uploading LSIF data only happens every 50 commits, on average, then there will be pockets of commits that cannot see far enough to spot a relative commit with an upload. This turns out to be common in the case of large development teams working on a single repository.

The following Git commit graph illustrates this, where commit `b` could simply be stranded on both sides by ancestor and descendant commits with code intelligence data just out of reach.

<Figure
    src="https://sourcegraphstatic.com/blog/commit-graph-optimizations/graph7.png" 
    alt="Flat commit graph"
    caption="A Git commit graph with large distances between code intelligence indexes."
/>

## A better design

In these circumstances, bounded traversals are a fundamental design flaw. To get rid of this constraint, we turn to a technique that was very successful in the past: index the result of the queries out of band. This technique forms the basis of our search: we create a series of n-gram indexes over source text so we can quickly look inside text documents. This technique also forms the basis of our code intelligence: we create [indexes](https://microsoft.github.io/language-server-protocol/specifications/lsif/0.5.0/specification) that contain the answers to all the relevant language server queries that could be made about code at a particular revision.

In the same spirit, we eschew graph traversal at query time and calculate the set of visible uploads for each commit ahead of time (whenever the commit graph or set of uploads for a repository changes). This reduces the complexity of the query in the request path into a simple single-record lookup.

This [change](https://github.com/sourcegraph/sourcegraph/issues/12098) was made in our 3.20 release and introduced 2 new tables: `lsif_nearest_uploads` and `lsif_dirty_repositories`.

The `lsif_nearest_uploads` table stores what you would expect. For each commit that has a visible upload, there is a row in the table indicating the source commit, the identifier of the visible upload, and the distance between the source commit and the commit on which the upload is defined. Multiple uploads may be visible from a single commit as we look in both ancestor and descendant directions. There may also be multiple visible uploads in the case of different languages or different directories at index time, but we'll hand-wave around these particular details for now.

<TableWrapper>
| repository                    | commit              | upload_id | distance |
| ----------------------------- | ------------------- | --------- | -------- |
| github.com/sourcegraph/sample | <code>323e23</code> | 1         | 1        |
| github.com/sourcegraph/sample | <code>d67b8d</code> | 1         | 0        |
| github.com/sourcegraph/sample | <code>4c8d9d</code> | 1         | 1        |
| github.com/sourcegraph/sample | <code>4c8d9d</code> | 2         | 1        |
| github.com/sourcegraph/sample | <code>f4fb06</code> | 2         | 0        |
| github.com/sourcegraph/sample | <code>a36064</code> | 2         | 1        |
| github.com/sourcegraph/sample | <code>313082</code> | 1         | 2        |
| github.com/sourcegraph/sample | <code>6a06fc</code> | 1         | 3        |
</TableWrapper>

The `lsif_dirty_repositories` table tracks which repositories need their commit graphs updated. When we receive an upload for a repository, or get a request for a commit that we don't currently track, we bump the `dirty_token` value attached to that repository. When we are about to refresh the graph, we note the dirty token, calculate the set of visible uploads for each commit, write it to the database, and set the `update_token` to the value of the dirty token we noted earlier. This ensures that we avoid a particular class of race conditions that occur when we receive an upload at the same time we're re-calculating the commit graph from a previous upload.

<TableWrapper>
| repository                    | dirty_token | update_token |
| ----------------------------- | ----------- | ------------ |
| github.com/sourcegraph/sample | 42          | 42           |
</TableWrapper>

#### Example

For this example, we'll use the following commit graph, where commits `80c800`, `c85b4b`, and `3daedb` define uploads #1, #2, and #3, respectively.

<Figure
    src="https://sourcegraphstatic.com/blog/commit-graph-optimizations/graph3.png" 
    alt="Sample commit graph"
    caption={<>A Git commit graph with code intelligence indexes attached to commits <code>80c800</code>, <code>c85b4b</code>, and <code>3daedb</code>.</>}
/>

The first step of the algorithm is to [topologically sort](https://en.wikipedia.org/wiki/Topological_sorting) each commit so that a commit is processed only after all of its parents are processed. Then we perform a simple [greedy process](https://en.wikipedia.org/wiki/Greedy_algorithm) to determine which uploads are visible at each stage of the commit. If a commit defines an upload, it is visible to that commit. Otherwise, the set of visible uploads for the commit is the same as the uploads visible from each parent (just at a higher distance).

Because each parent can see a different set of uploads, we need to specify what happens when these sets _merge_. Take commit `e8331f` as an example. This commit can see both upload #3 via commit `3daedb`), as well as upload #1 via commit `9d9c37`. This yields a visible set `{(id=1, dist=4), (id=3 dist=1)}`. As part of the merge operation, we throw out the uploads that are farther away in favor of the ones that are closer. Similarly, we may see different uploads that tie in distance (as is the case with commit `69a5ed`, which can see both uploads #1 and #2 at the same distance). In these cases, we break ties deterministically by favoring the upload with the smallest identifier.

We want to search the graph in both directions, so we perform the operation again but visit the commits in the reverse order. The set of forward-visible uploads and backwards-visible uploads can then be merged using the same rules as stated above. The complete set of visible uploads for each commit for this example commit graph are shown below.

<TableWrapper>
| Commit              | Descendant visibility         | Ancestor visibility           | Combined visibility           | Nearest upload |
| ------------------- | ----------------------------- | ----------------------------- | ----------------------------- | -------------- |
| <code>80c800</code> | <code>{(id=1, dist=0)}</code> | <code>{(id=1, dist=0)}</code> | <code>{(id=1, dist=0)}</code> | #1             |
| <code>d9c29f</code> | <code>{(id=2, dist=1)}</code> | <code>{(id=1, dist=1)}</code> | <code>{(id=1, dist=1)}</code> | #1             |
| <code>c85b4b</code> | <code>{(id=2, dist=0)}</code> | <code>{(id=2, dist=0)}</code> | <code>{(id=2, dist=0)}</code> | #2             |
| <code>69a5ed</code> | <code>{(id=3, dist=2)}</code> | <code>{(id=1, dist=1)}</code> | <code>{(id=1, dist=1)}</code> | #1             |
| <code>063211</code> | <code>{}</code>               | <code>{(id=1, dist=2)}</code> | <code>{(id=1, dist=2)}</code> | #1             |
| <code>9d9c37</code> | <code>{}</code>               | <code>{(id=1, dist=3)}</code> | <code>{(id=1, dist=3)}</code> | #1             |
| <code>f9727d</code> | <code>{(id=3, dist=1)}</code> | <code>{(id=1, dist=2)}</code> | <code>{(id=3, dist=1)}</code> | #3             |
| <code>3daedb</code> | <code>{(id=3, dist=0)}</code> | <code>{(id=3, dist=0)}</code> | <code>{(id=3, dist=0)}</code> | #3             |
| <code>e8331f</code> | <code>{}</code>               | <code>{(id=3, dist=1)}</code> | <code>{(id=3, dist=1)}</code> | #3             |
</TableWrapper>

The topological ordering of the commit graph and each traversal takes time linear to the size of the commit graph, making this entire procedure a linear time operation.

## The neglected scaling dimension

Well, it's not _quite_ linear time if you take into account some of the stuff we claimed we could hand-wave away earlier: index files for different root directories.

Many large repositories are built up of smaller, self-contained projects. Or, at least independently analyzable units of code. This enables a fairly coarse caching scheme: each time the repository is indexed (on `git push`, or periodically), only the units of code that have had explicitly changed since the last indexed commit need to be re-indexed.

This means that there is no single nearest upload per commit: there is a nearest upload _per distinct indexing root directory_. To show the difference in output, we'll use the following commit graph, where:

- Commit `80c800` defines upload #1 rooted at the directory `/foo`
- Commit `d9c29f` defines upload #2 rooted at the directory `/bar`
- Commit `c85b4b` defines upload #3 rooted at the directory `/foo`
- Commit `3daedb` defines upload #4 rooted at the directory `/baz`
- Commit `69a5ed` defines upload #5 rooted at the directory `/bonk`

<Figure
    src="https://sourcegraphstatic.com/blog/commit-graph-optimizations/graph4.png"
    alt="Sample commit graph"
    caption="A Git commit graph with code intelligence indexes rooted at different subdirectories."
/>

<TableWrapper>
    <table>
        <tbody>
            <tr>
                <th>Commit</th>
                <th>Descendant visibility</th>
                <th>Ancestor visibility</th>
                <th>Combined visibility</th>
            </tr>
            <tr>
                <td><code>80c800</code></td>
                <td>
                    <code>(id=1, root=foo/, dist=0)</code>
                </td>
                <td>
                    <code>(id=1, root=foo/, dist=0)</code><br />
                    <code>(id=2, root=bar/, dist=1)</code><br />
                    <code>(id=4, root=bnk/, dist=2)</code><br />
                    <code>(id=5, root=baz/, dist=3)</code>
                </td>
                <td>
                    <code>(id=1, root=foo/, dist=0)</code><br />
                    <code>(id=2, root=bar/, dist=1)</code><br />
                    <code>(id=4, root=bnk/, dist=2)</code><br />
                    <code>(id=5, root=baz/, dist=3)</code>
                </td>
            </tr>
            <tr>
                <td><code>d9c29f</code></td>
                <td>
                    <code>(id=1, root=foo/, dist=1)</code><br />
                    <code>(id=2, root=bar/, dist=0)</code>
                </td>
                <td>
                    <code>(id=2, root=bar/, dist=0)</code><br />
                    <code>(id=3, root=foo/, dist=1)</code><br />
                    <code>(id=5, root=baz/, dist=2)</code>
                </td>
                <td>
                    <code>(id=1, root=foo/, dist=1)</code><br />
                    <code>(id=2, root=bar/, dist=0)</code><br />
                    <code>(id=5, root=baz/, dist=2)</code>
                </td>
            </tr>
            <tr>
                <td><code>c85b4b</code></td>
                <td>
                    <code>(id=2, root=bar/, dist=1)</code><br />
                    <code>(id=3, root=foo/, dist=0)</code>
                </td>
                <td>
                    <code>(id=3, root=foo/, dist=0)</code><br />
                    <code>(id=5, root=baz/, dist=1)</code>
                </td>
                <td>
                    <code>(id=2, root=bar/, dist=1)</code><br />
                    <code>(id=3, root=foo/, dist=0)</code><br />
                    <code>(id=5, root=baz/, dist=1)</code>
                </td>
            </tr>
            <tr>
                <td><code>69a5ed</code></td>
                <td>
                    <code>(id=2, root=bar/, dist=2)</code><br />
                    <code>(id=3, root=foo/, dist=1)</code><br />
                    <code>(id=4, root=bnk/, dist=1)</code><br />
                    <code>(id=5, root=baz/, dist=0)</code>
                </td>
                <td>
                    <code>(id=5, root=baz/, dist=0)</code>
                </td>
                <td>
                    <code>(id=2, root=bar/, dist=2)</code><br />
                    <code>(id=3, root=foo/, dist=1)</code><br />
                    <code>(id=4, root=bnk/, dist=1)</code>
                </td>
            </tr>
            <tr>
                <td><code>f9727d</code></td>
                <td>
                    <code>(id=1, root=foo/, dist=1)</code>
                </td>
                <td>
                    <code>(id=4, root=bnk/, dist=1)</code><br />
                    <code>(id=5, root=baz/, dist=2)</code>
                </td>
                <td>
                    <code>(id=1, root=foo/, dist=1)</code><br />
                    <code>(id=4, root=bnk/, dist=1)</code><br />
                    <code>(id=5, root=baz/, dist=2)</code>
                </td>
            </tr>
            <tr>
                <td><code>3daedb</code></td>
                <td>
                    <code>(id=1, root=foo/, dist=2)</code><br />
                    <code>(id=4, root=bnk/, dist=0)</code>
                </td>
                <td>
                    <code>(id=4, root=bnk/, dist=0)</code><br />
                    <code>(id=5, root=baz/, dist=1)</code>
                </td>
                <td>
                    <code>(id=1, root=foo/, dist=2)</code><br />
                    <code>(id=4, root=bnk/, dist=0)</code><br />
                    <code>(id=5, root=baz/, dist=1)</code>
                </td>
            </tr>
            <tr>
                <td><code>063211</code></td>
                <td>
                    <code>(id=2, root=bar/, dist=3)</code><br />
                    <code>(id=3, root=foo/, dist=2)</code><br />
                    <code>(id=4, root=bnk/, dist=2)</code><br />
                    <code>(id=5, root=baz/, dist=1)</code>
                </td>
                <td></td>
                <td>
                    <code>(id=2, root=bar/, dist=3)</code><br />
                    <code>(id=3, root=foo/, dist=2)</code><br />
                    <code>(id=4, root=bnk/, dist=2)</code><br />
                    <code>(id=5, root=baz/, dist=1)</code>
                </td>
            </tr>
        </tbody>
    </table>
</TableWrapper>

The size of the table here (relative to the simple table produced by a single-root repository) is the thing to note. Let's say a repository has _n_ commits and _m_ distinctly indexable directories. Each commit then can see up to _m_ uploads, which drastically balloons the cost of merging 2 sets of visible uploads. This further impacts performance in the presence of many merge commits.

**We drastically underestimated the value of _m_ for some enterprise customers.**

One of our large enterprise customers, who is also one of our earliest adopters of LSIF-based code intelligence at scale, had completed an upgrade from Sourcegraph 3.17 to 3.20. After the upgrade, they realized they were no longer getting refreshed precise code intelligence and sent us this cubist Sydney Opera House of a graph, indicating that something was deeply wrong.

<Figure
    src="https://sourcegraphstatic.com/blog/commit-graph-optimizations/oom.png"
    alt="Worker OOM"
    caption="Worker memory usage exploding, then falling suddenly after the process crashes."
/>

The precise code intelligence worker process, which converts LSIF data uploaded by the user into our internal representation and writes it to our code intelligence data store, was ballooning in memory as jobs were processed. The extra memory hunger was extreme enough that the workers were consistently crashing with an "out of memory" exception towards the end of each job. No job was completing successfully.

After grabbing additional screenshots of our monitoring system, output to a few SQL queries, and a few pprof traces from the offending Go process, we proved that the culprit was [the function that determined the set of uploads visible at each commit](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@dc8beddf4066e30198c5ea368e6ee1092a6f4560/-/blob/enterprise/internal/codeintel/stores/dbstore/commit_graph.go#L37:6) and knew we needed to find a way to reduce the resident memory required to do so.

To give a sense of this user's scale:

- Their commit graph contained ~40k commits
- They had ~18k LSIF uploads scattered throughout the graph
- Over all LSIF uploads, there were ~8k known distinct root directories

While the commit graph itself was relatively small (the [k8s/k8s](https://github.com/kubernetes/kubernetes) commit graph is twice that size and could be processed without issue), the number of distinct roots was very large.

## Memory reduction attempts

As an emergency [first attempt to reduce memory usage](https://github.com/sourcegraph/sourcegraph/pull/16086), we were able to cut the amount of memory required to calculate visible uploads down by a factor of 4 (with the side effect of doubling the time it took to compute the commit graph). This was an acceptable trade-off, especially for a background process, and especially in a patch release meant to restore code intelligence to a high-volume private instance.

The majority of the memory was being taken up by the following `UploadMeta` structure, which was the bookkeeping metadata we tracked for each visible commit at each upload. The root and indexer fields denote the directory where the indexer was run and the name of the indexing tool, respectively. An index with a smaller commit distance can _shadow_ another only if these values are equivalent.

```go
type UploadMeta struct {
    UploadID        int    // identity part 1
    Root            string // identity part 2
    Indexer         string // identity part 3
    Distance        int
    AncestorVisible bool   // visible via parent?
    Overwritten     bool   // (more hand waving)!
}

type CommitGraphView map[string][]UploadMeta // commit -> visible uploads
```

Two commit graph views must be created per repository: one traversing the commit graph in each direction. Each instance of an `UploadMeta` struct occupies 56 bytes in memory (calculated via `unsafe.Sizeof(UploadMeta{})`). At the scale above, these structs occupy nearly 30GB of memory, which excludes the values in the `Root` and `Indexer` fields. The values of the root field, in particular, were quite large (file paths up to 200 characters, the average hovering around 75 characters) and repeated very frequently. This was by far the dominating factor, as confirmed by the customer's Go heap trace.

We replaced the struct with the following set of data structures, which yields a much smaller yet semantically equivalent encoding to the commit graph view defined above.

```go
type UploadMeta struct {
    UploadID int
    Flags    uint32 // distance + boolean flags above
}

const FlagAncestorVisible uint32 = (1 << 30)
const FlagOverwritten     uint32 = (1 << 29)

type CommitGraphView struct {
    Meta   map[string][]UploadMeta // commit -> visible uploads
    Tokens map[int]string          // upload -> md5(<root>:<indexer>)
}
```

The first change is the introduction of the `Flags` field, which encodes the data previously stored in the `Distance`, `AncestorVisible`, and `Overwritten` fields. We encode the value of the booleans by setting the highest 2 bits on the 32-bit integer, and keep the remaining 30 lower bits to encode the distance. This still gives us enough room to encode a commit distance of over a billion, which... if you're looking that far back in your Git history I guarantee you're going to get garbage out-of-date results. Now, the `UploadMeta` struct occupies only 16 bytes.

The second change is the replacement of the root and indexer fields by a map from upload identifiers to a _hash_ of the indexer and root fields. Because we use these values only to determine which uploads shadow other uploads, we don't care about the actual values—we only care if they're equivalent or not. Our chosen hash always occupies 128 bits, which is a fraction of the size required by storing the full path string (75 characters take 600 bits to encode).

This also greatly reduces the _multiplicity_ of these strings in memory. Before, we were duplicating each indexer and root values for every _visible_ upload. Now, we only need to store them for each _upload_, as the values do not change depending on where in the commit graph you are looking. Logically, this was simply a [string interning](https://en.wikipedia.org/wiki/String_interning) optimization.

## Hitting a moving target

While we were busy preparing a patch release to restore code intelligence to our customer, they had upgraded to the next version to fix an unrelated error they were experiencing in Sourcegraph's search code.

This made things **far** worse. In Sourcegraph 3.22, we moved the code that calculated the commit graph from the precise-code-intel-worker into the frontend in an effort to consolidate background and periodic processes into the same package. Our first stab at memory reduction wasn't quite enough, and now the frontend pods were taking turns using all available memory and crashing.

This made their entire instance unstable, and this series of events escalated us from a priority zero event to a [priority now](https://devblogs.microsoft.com/oldnewthing/20081121-00/?p=20123) event.

We attacked the problem again, this time by ignoring large amounts of unneeded data. When we pull back the commit graph for a repository, it's unlikely that we need the _entire_ commit graph. There's little sense in filling out the visibility of the long tail of historic commits, especially as its distance to the oldest LSIF upload grows over time. Now, we [entirely ignore](https://github.com/sourcegraph/sourcegraph/pull/16140) the portion of the commit graph that existed _before_ the oldest known LSIF upload for that repository.

In the same spirit, we can remove the explicit step of topologically sorting the commit graph in the application by instead [sorting it via the Git command](https://github.com/sourcegraph/sourcegraph/pull/16270). This is basically the same win as replacing a `sort` call in your webapp with an `ORDER BY` clause in your SQL query. This further reduces the required memory as we're no longer taking large amounts of stack space to traverse long chains of commits in the graph.

Our [last change](https://github.com/sourcegraph/sourcegraph/pull/16368), however, was the real heavy hitter and comes in 2 parts.

### Part 1: Using a more compact data structure

We've so far been storing our commit graph in a map from commits to the set of uploads visible from that commit. When the number of distinct roots is large, the lists under each commit can also become quite large. Most notably, this makes the merge operation between 2 lists quite expensive in terms of both CPU and memory. CPU is increased as the merge procedure compares each pair of elements from the list in a trivial but quadratic nested loop. Memory is increased as merging 2 lists creates a third, all of which are live at the same time before any are a candidate for garbage collection.

```go
var visibleUploads map[string /* commit */][]Upload /* unsorted slice of visible uploads */
```

We make the observation that looking in a single direction, each commit can see at most 1 upload for a particular indexer and root. Instead of storing a flat list of visible uploads per commit, we can store a map from the indexer/root values to the visible upload with those properties. Merge operations now become linear (instead of quadratic) in the size of the input lists.

```go
var visibleUploads map[string /* commit */]map[string /* indexer+root */]Upload /* sole upload visible at root */
```

### Part 2: Ignoring uninteresting data

We stop pre-calculating the set of visible uploads for **every** commit at once. We make the observation that for a large class of commits, the set of visible uploads are simply redundant information.

<Figure
    src="https://sourcegraphstatic.com/blog/commit-graph-optimizations/graph5.png"
    alt="Sample commit graph"
    caption={<>A Git commit graph with code intelligence attached to commits <code>68acd3</code> and <code>67e0bf</code>.</>}
/>

In the preceding commit graph, commits `91a565`, `52811d`, `7b1a18`, and `dd8578` are considered "trivial" and can be easily and efficiently recalculated by performing a very fast single-path traversal up the graph to find a unique ancestor (or, descendant in the other direction) for which we store the set of visible uploads. The re-calculated visible uploads are then the visible uploads of this ancestor with an adjusted distance.

The visibility for the remaining commits cannot be recalculated on the fly so easily due to one of the following conditions:

1. The commit defines an upload,
1. The commit has multiple parents; this would require a merge when traversing forwards,
1. The commit has multiple children; this would require a merge when traversing backwards, or
1. The commit has a sibling, _i.e._, its parents have other children or its children have other parents. We ensure that we calculate the set of visible uploads of these commits to make downstream calculations easier. For example, we keep track of the visible uploads for commit `e43f5b` so that when we ask for the visible uploads from _both_ parents of `599611` we do not have to perform a traversal.

It turns out that 80% of our problematic commit graph can be recalculated in this way, meaning that we only need to keep 20% of the commit graph resident in memory at any given time.

This last change turned out to be a **huge** win. When we started, the commit graph could only be calculated in 5 **hours** using 21GB of memory. Now, it takes 5 **seconds** and a single gigabyte. This is a ~3600x reduction in CPU and a ~20x reduction in memory.

<Figure
    src="https://sourcegraphstatic.com/blog/commit-graph-optimizations/cpu-mem-fix.png"
    alt="CPU and memory reduction"
    caption={<>CPU and memory usage drastically after skipping calculation of visible uploads for "trivial" commits.</>}
/>

But of course the story isn't over. We're battling with the [triple constraint](https://en.wikipedia.org/wiki/Project_management_triangle) of latency, memory, and disk usage here. And since we've optimized two of these properties, the third must necessarily suffer. Improvements in software often deal with similar time/space trade-offs. Removing a bad performance property of a system often doesn't _remove_ the bad property completely—it just pushes it into a corner that is less noticeable.

In this case, it was **very** noticeable.

<Figure
    src="https://sourcegraphstatic.com/blog/commit-graph-optimizations/full-disk.png"
    alt="Critical db size"
    caption="Sorry about your disk."
/>

## Pick 3: low latency, low memory usage, low disk usage, or developer sanity

Home stretch—we can do this. To summarize:

1. The speed at which we produce the commit graph is no longer a problem, and
1. The resources we require to produce the commit graph is no longer a problem, but
1. The amount of data we're writing into PostgreSQL _is_ a problem.

Our [final and successful effort](https://github.com/sourcegraph/sourcegraph/pull/16636) to fix these time and space issues attacked the problem, once again, in 2 parts.

First, we've changed the commit graph traversal behavior to look only at ancestors. Since we started to ignore the bulk of the commit graph that existed before the first commit with LSIF data, looking into the _future_ for LSIF data now has limited applicability. Generally, users will be on the tip of a branch (either the default branch, or a feature branch if reviewing a pull request). We can still answer code intelligence queries for these commits, as they necessarily occur after _some_ LSIF data has been uploaded. Additionally, an unrelated [bug fix](https://github.com/sourcegraph/sourcegraph/pull/16733) caused descendant-direction traversals to increase memory usage. So at this point, it just seemed sensible to stop worrying about this reverse case, which was never truly necessary from a usability standpoint. Looking in one direction reduces the amount of data we need to store by about 50%.

Second, we re-applied our [tricks](#Part-2-Ignoring-uninteresting-data) described in the previous section. We had good luck with throwing out huge amounts of data which we could efficiently recalculate when necessary, and save the resources that would otherwise be required to store them. This concept is known as [rematerialization](https://en.wikipedia.org/wiki/Rematerialization) in compiler circles, where values may be computed multiple times instead of storing and loading the already-computed value from memory. This is useful in the case where a load/store pair is more expensive than the computation itself, or if the load/stores would otherwise increase register pressure.

Instead of writing the set of visible uploads per commit, what if we only store the visible uploads for commits that can't be trivially recomputed? We've already determined the set of commits that can be easily rematerialized—we can just move the rematerialization from database insertion time to query time.

However, it's not as easy as just throwing out the data we don't need. We were previously able to rematerialize the data we didn't store because we still had access to the commit graph from which it was originally calculated. To recalculate the values cheaply (without pulling back the entire commit graph at query time) we need to encode some additional bookkeeping metadata in the database.

We introduced a new table, `lsif_nearest_uploads_links`, which stores a link from each commit that can be trivially recomputed to its nearest ancestor with LSIF data. Queries are now a simple, constant-time lookup:

- If the commit exists in `lsif_nearest_uploads`, we simply use those visible uploads, otherwise
- If the commit exists in `lsif_nearest_upload_links`, we use the visible uploads attached to the ancestor.

#### Example

We'll use the following commit graph again for our example. Here, commit `68acd3` defines upload #1, and `67e0bf` defines upload #2 (both with distinct indexing root directories).

<Figure
    src="https://sourcegraphstatic.com/blog/commit-graph-optimizations/graph5.png"
    alt="Sample commit graph"
    caption={<>A Git commit graph with code intelligence attached to commits <code>68acd3</code> and <code>67e0bf</code>.</>}
/>

The `lsif_nearest_uploads` table associates a commit with its visible uploads, just as before. But now, the number of records in the table is much, much smaller. The commits present in this table satisfy one of the properties described above that make the commit non-trivial to recompute.

<TableWrapper>
| repository                    | commit              | upload_ids          |
| ----------------------------- | ------------------- | ------------------- |
| github.com/sourcegraph/sample | <code>4a8a33</code> | <code>[]</code>     |
| github.com/sourcegraph/sample | <code>68acd3</code> | <code>[1]</code>    |
| github.com/sourcegraph/sample | <code>e43f5b</code> | <code>[1]</code>    |
| github.com/sourcegraph/sample | <code>67e0bf</code> | <code>[2]</code>    |
| github.com/sourcegraph/sample | <code>599611</code> | <code>[1, 2]</code> |
</TableWrapper>

Luckily, some benefits compound one another here, and after we started ignoring traversing the graph in both directions, we can simplify these properties to only account for ancestor-direction traversals. Notably, commits whose parent has multiple children (`7e0471`, for example) no longer need to be stored because they were useful only in descendant-direction traversals (unless they are non-trivial for another reason). This further increases the number of trivially recomputable commits, saving even more space.

The `lsif_nearest_uploads_links` table stores a _forwarding pointer_ to the ancestor that has the same set of visible uploads.

<TableWrapper>
| repository                    | commit              | ancestor_commit     |
| ----------------------------- | ------------------- | ------------------- |
| github.com/sourcegraph/sample | <code>91a565</code> | <code>68acd3</code> |
| github.com/sourcegraph/sample | <code>7e0471</code> | <code>4a8a33</code> |
| github.com/sourcegraph/sample | <code>52811d</code> | <code>7e0471</code> |
| github.com/sourcegraph/sample | <code>7b1a18</code> | <code>599611</code> |
| github.com/sourcegraph/sample | <code>dd8578</code> | <code>599611</code> |
</TableWrapper>

Note that for our instances with a large number of distinct indexing roots, this saves a **massive** amount of storage space. The majority of commits (> 80%) can link to an ancestor, which requires only referencing a fixed-size commit hash. The remaining minority of commits must explicitly list their visible uploads, of which there may be many thousands.

This set of changes finally reduces disk usage from 100% to a much more reasonable 3-5%. 🎉

And things _seem_ to be remaining calm...

## Lessons learned (part 2)

In [Part 1](/blog/optimizing-a-code-intel-commit-graph/#Lessons-learned) we pointed out that databases are a hugely deep subject and knowing your tools deeply can get you fairly far in terms of performance. Unfortunately, with the wrong data model, it doesn't matter how fast you can read or write it from the storage layer. You're optimizing the wrong thing and missing the forest for the trees.

In Part 2, we presented a fantastic way to "optimize the database" by reducing the size of our data set. Taking a step back away from the nitty-gritty details of an existing implementation to determine the shape of the data surrounding a problem can reveal much more straightforward and efficient ways to analyze and manipulate that data. This is especially true in a world with changing assumptions.

### More posts like this

- [A 5x reduction in RAM usage with Zoekt memory optimizations](/blog/zoekt-memory-optimizations-for-sourcegraph-cloud/)
- [How not to break a search engine or: What I learned about unglamorous engineering](/blog/how-not-to-break-a-search-engine-unglamorous-engineering/)
- [Avoiding the pitfalls of iteration-based development, explained in 5 pull requests](/blog/avoiding-the-pitfalls-of-iteration-based-development/)
