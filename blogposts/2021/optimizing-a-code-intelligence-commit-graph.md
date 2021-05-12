---
title: "Optimizing a code intelligence commit graph"
author: Eric Fritz
authorUrl: https://eric-fritz.com
publishDate: 2021-02-03T18:00-07:00
tags: [blog]
slug: optimizing-a-code-intel-commit-graph
heroImage: https://sourcegraphstatic.com/blog/lsif-go/lsif-go-improvements.png
published: true
---

Since the first version of Sourcegraph, precise code navigation has been a first-order concern. Its ability to provide compiler-accurate code navigation in a web-based interface is a superpower for our users.

![Cross-repository jump to definition](https://sourcegraphstatic.com/precise-xrepo-j2d.gif)

The [journey](/evolution-of-the-precise-code-intel-backend/) to our current implementation began in February 2019 when we shifted our efforts from running Language Servers along side Sourcegraph to pre-indexing source code via the Language Server Index Format (LSIF) and uploading it to Sourcegraph. This change introduced a new requirement on the user: they are now responsible for producing and uploading the LSIF index.

The method in which a user produces an LSIF index is highly variable and depends on many factors. If a repository is not too large, a user may wish to create a new index on every commit in their CI. If a repository is very large (the monorepo case), or an organization has a large number of repositories, it may be advantageous to instead index code periodically and upload a refreshed index. Google uses such a scheduled job to refresh their monorepo's index twice a day.

Regardless of the indexing method, it is always possible for a user to find themselves browsing a commit for which Sourcegraph has not received an index. This can happen due to a slow job in a continuous integration server, a backed-up indexing processing queue, or the commit may simply be skipped in the case of a periodic refresh.

This is a glaring hole in the feature. The majority of users are exploring code on the tip of a branch, which is the _least_ likely commit to have an index immediately after it's been pushed to the code host.

In order to plug this hole, we determine the set of nearby commits for which Sourcegraph has received an index, query these indexes on behalf of the requested commit, then adjust the resulting locations (file paths and ranges within a document) using the Git diff between the commits as a guide. This enables Sourcegraph to respond with precise results to requests on commits missing an index.

## Tracking cross-commit index visibility

The [first step](https://github.com/sourcegraph/sourcegraph/pull/5691) in this process is to track how commits of a repository relate to one another. Unfortunately, the service providing the code intelligence features was separated (by design) from the rest of the product. We had only recently [gained access](https://github.com/sourcegraph/sourcegraph/pull/5740) to the Sourcegraph Postgres database used by the rest of the application, and no other team was tracking commit information. The source of truth for that data was gitserver, which required both an RPC call and a subprocess to access.

Our initial stab at this problem was to introduce two new tables to Postgres: `commits` and `lsif_data_markers`.

The `commits` table stores data similar to a flattened version of the output from `git log --all --pretty='%H %P'` (a commit followed by a list of its parents), for each repository. Example values for this table are shown below to aid our running example. This table would generally store the full 40-character revhash - we are abbreviating them for brevity here.

| id  | repository                    | commit              | parent_commit       |
| --- | ----------------------------- | ------------------- | ------------------- |
| 1   | github.com/sourcegraph/sample | <code>a36064</code> | <code>f4fb06</code> |
| 2   | github.com/sourcegraph/sample | <code>f4fb06</code> | <code>4c8d9d</code> |
| 3   | github.com/sourcegraph/sample | <code>313082</code> | <code>4c8d9d</code> |
| 3   | github.com/sourcegraph/sample | <code>6a06fc</code> | <code>313082</code> |
| 4   | github.com/sourcegraph/sample | <code>4c8d9d</code> | <code>d67b8d</code> |
| 5   | github.com/sourcegraph/sample | <code>d67b8d</code> | <code>323e23</code> |
| 6   | github.com/sourcegraph/sample | <code>323e23</code> |                     |

This table is synchronized with the source of truth in gitserver whenever we receive a request or an index for a commit that we didn't know about previously. A row present in the `lsif_data_markers` table denotes that an index was uploaded for a particular commit. Example values for this table are also shown below.

| repository                    | commit              |
| ----------------------------- | ------------------- |
| github.com/sourcegraph/sample | <code>f4fb06</code> |
| github.com/sourcegraph/sample | <code>d67b8d</code> |
| github.com/sourcegraph/sample | <code>0eed16</code> |

Together, these two tables enable us to recursively search up and down the commit graph starting at a particular requested commit, and stop the search once we reach a commit that has index data. The following [recursive common table expression](https://www.postgresql.org/docs/13/queries-with.html) does just that.

```sql
-- lineage is a table expression that traverses the commit graph for the given
-- repository starting at the given commit, and returns the set of commit records
-- reachable via ancestor and descendant paths supplemented with an additional
-- column, has_lsif_data, indicating whether or not that commit has an associated
-- code intelligence index.
WITH RECURSIVE lineage(repository, "commit", parent_commit, has_lsif_data, distance, direction) AS (
    -- Non-recursive term: Seed the lineage table with the commit we're starting
    -- the traversal from.

    SELECT l.* FROM (
        -- seed ancestor search
        SELECT c.*, 0, 'A' FROM commits_with_lsif_data_markers c UNION
        -- seed descendant search
        SELECT c.*, 0, 'D' FROM commits_with_lsif_data_markers c
    ) l
    WHERE l.repository = $1 AND l."commit" = $2

    UNION

    -- Recursive term: Find the "frontier" of lineage, which is the direct parents
    -- of each commit currently in lineage when searching in the ancestor direction,
    -- and the direct children of each commit searching in the descendant direction.

    SELECT
        c.*,
        l.distance + 1,
        l.direction
    FROM
        lineage l
    JOIN
        commits_with_lsif_data_markers c
    ON
        c.repository = l.repository AND (
            -- parent coming from child
            (l.direction = 'A' AND c."commit" = l.parent_commit) OR
            -- child coming from parent
            (l.direction = 'D' AND c.parent_commit = l."commit")
        )
    -- limit traversal distance
    WHERE l.distance < $3
)

-- Select the first row from lineage with LSIF data. This will return such a commit
-- with a minimized distance, as the table expression has the same ordering as the
-- traversal by construction.
SELECT l."commit" FROM lineage l WHERE l.has_lsif_data LIMIT 1
```

This query maintains a worklist (the query-local `lineage` table) seeded by the requested commit, and grows by finding untracked commits that are either a parent (the ancestor `A` direction) or a child (the descendant `D` direction) of a commit already in the worklist and inserting it. The table is implicitly ordered by its insertions, so the final select returns the commit with index data that also has the smallest commit distance to the requested commit. The `WHERE` clause inside of the CTE is there to limit size of the working table, which can be pathologically large in the case of a large commit graph and no uploads visible from a given commit.

#### Example

The values of the tables above represent the following hypothetical commit graph, where `a36064` is the head of the `main` branch, `6106fc` is the head of the feature branch `feat/x`, and the commits with uploads (`f4fb06` and `d67b8d`) are drawn in blue.

<div class="no-shadow">
  <img src="https://sourcegraphstatic.com/blog/commit-graph-optimizations/graph1.png" alt="sample commit graph">
</div>

Running the query above from the commit `313082` produces the following CTE results over three iterations before halting, and ultimately returns `d67b8d` as the nearest commit visible to the target query.

| iteration | commit              | parent_commit       | has\_lsif\_data | distance | direction |
| --------- |-------------------- | ------------------- | ------------- | -------- | --------- |
| 1         | <code>313082</code> | <code>4c8d9d</code> | false         | 0        | A         |
| 1         | <code>313082</code> | <code>4c8d9d</code> | false         | 0        | D         |
| 2         | <code>4c8d9d</code> | <code>d67b8d</code> | false         | 1        | A         |
| 2         | <code>6a06fc</code> | <code>313082</code> | false         | 1        | D         |
| 3         | <code>d67b8d</code> | <code>323e23</code> | true          | 2        | A         |

Of particular note is that we don't visit _sibling_ commits: once we reach a commit by travelling in the ancestor direction, we can't suddenly flip direction. Maintaining the direction heading during traversal ensures that the algorithm will eventually terminate.

## Performance improvements

Unfortunately, our first stab at an implementation had a number of rather disappointing performance characteristics, as first stabs typically do. The query above is basically a SQL translation of an imperative graph-walking algorithm. Thinking of the query in these terms makes it easier to see that the runtime cost of the query will increase proportional to the distance travelled through the graph.

The following query plan shows an execution trace that visited around 10 commits (the resulting commit was 5 commits away, and we search in both directions). This query takes about 40ms, which is already a high cost for a query that runs every time a user hovers over an identifier.

![fast query plan](https://sourcegraphstatic.com/blog/commit-graph-optimizations/fast.png)

The following query plan shows an execution trace that visited around 100 commits (the resulting commit was 44 commits away). This query takes about 330ms, which is well over the [noticeable latency threshold](https://www.computer.org/csdl/pds/api/csdl/proceedings/download-article/12OmNyQYtlZ/pdf).

![slow query plan](https://sourcegraphstatic.com/blog/commit-graph-optimizations/slow.png)

[Adding additional indexes](https://github.com/sourcegraph/sourcegraph/pull/5946) to the `commits` table helped a bit, but did not fundamentally change the performance characteristics of the query. An even larger pathology was discovered in repositories with a large number of merge commits. In order to understand the performance issue, it's important to understand how the recursive query evaluation works in the case of duplicates, which was initially un-intuitive to us. Paraphrasing the [Postgres documentation](https://www.postgresql.org/docs/13/queries-with.html), recursive queries are evaluated with the following steps (emphasis ours):

1. Evaluate the non-recursive term and **discard duplicate rows**
1. Insert rows into result set as well as a temporary working table
1. While the working table is not empty:
    1. Evaluate the recursive term by substituting the recursive self-reference with the working table and **discard duplicate rows**
    1. Insert rows into result set as well as a new temporary intermediate table table
    1. Replace the working table with the intermediate table and empty the intermediate table

A row is a duplicate of another row (from Postgres's point of view) if they both contain the same set of values. However, from our point of view, a row is a duplicate of another row if only their commit values match. After all, we're running a breadth-first search over a graph and by the time we've seen a commit for the second time, we've already seen it via the shortest path. This mismatch in expectations don't cost us correctness, but it does cause performance problems and the pain that comes with it.

#### Example

The following hypothetical commit graph contains a number of feature branches that are eventually merged back into mainline, unlike our previous example where all commits had at most one parent.

<div class="no-shadow">
  <img src="https://sourcegraphstatic.com/blog/commit-graph-optimizations/graph2.png" alt="sample commit graph">
</div>

Running the query above from the commit `703e33` produces the following CTE results over the first four iterations.

<table>
<tr><th>iteration</th><th>commit</th><th>parent_commit</th><th>has_lsif_data</th><th>distance</th><th>direction</th></tr>
<tr><td>1</td><td><code>703e33</code></td><td><code>6307e6</code></td><td>false</td><td>0</td><td>A</td></tr>
<tr><td>1</td><td><code>703e33</code></td><td><code>6307e6</code></td><td>false</td><td>0</td><td>D</td></tr>
<tr><td>1</td><td><code>703e33</code></td><td><code>5a24e4</code></td><td>false</td><td>0</td><td>A</td></tr>
<tr><td>1</td><td><code>703e33</code></td><td><code>5a24e4</code></td><td>false</td><td>0</td><td>D</td></tr>
<tr><td>2</td><td><code>5a24e4</code></td><td><code>3d2f27</code></td><td>false</td><td>1</td><td>A</td></tr>
<tr><td>2</td><td><code>6307e6</code></td><td><code>4a848f</code></td><td>false</td><td>1</td><td>A</td></tr>
<tr class="workingtable-highlight"><td>3</td><td><code>3d2f27</code></td><td><code>09210f</code></td><td>false</td><td>2</td><td>A</td></tr>
<tr class="workingtable-highlight"><td>3</td><td><code>3d2f27</code></td><td><code>2190d3</code></td><td>false</td><td>2</td><td>A</td></tr>
<tr><td>3</td><td><code>4a848f</code></td><td><code>3d2f27</code></td><td>false</td><td>2</td><td>A</td></tr>
<tr><td>4</td><td><code>09210f</code></td><td></td><td>false</td><td>3</td><td>A</td></tr>
<tr><td>4</td><td><code>2190d3</code></td><td><code>1f64f9</code></td><td>false</td><td>3</td><td>A</td></tr>
<tr class="workingtable-highlight"><td>4</td><td><code>3d2f27</code></td><td><code>09210f</code></td><td>false</td><td>3</td><td>A</td></tr>
<tr class="workingtable-highlight"><td>4</td><td><code>3d2f27</code></td><td><code>2190d3</code></td><td>false</td><td>3</td><td>A</td></tr>
</table>

Notice that there are two ways to get from commit `7033ee` to commit `3d2f27`, therefore the entries for `3d2f27` are duplicated in the CTE results (and therefore the working table). Also notice that the number of _new_ rows per iteration is growing as the iteration count rises in such graphs. **For some configuration of input, this query is [quadratic](https://accidentallyquadratic.tumblr.com/) instead of linear.**

What we _wanted_ to happen was for the "duplicate rows" not to be inserted into the working table at all. Unfortunately, each record in this example is distinct due to the differing path lengths - a detail we glossed over when designing this query in the first place. Another classic case of the computer doing what you _told_ it to do instead of what you _wanted_ it to do. 🙄

---

Our [first attempt](https://github.com/sourcegraph/sourcegraph/pull/5980) to optimize this query directly tackled the problem of duplicate rows in the worktable, as shown in the above example. This change simply removes the direction column from the lineage table expression. The "duplicates" that we now throw out are records for commits that have already been seen via a shorter path. This required that we take the limiting condition out of the table expression and into the select, which changes the behavior very slightly (it now limits by working set size, not by distance, which was an acceptable trade-off for the performance increase).

Additional [efforts](https://github.com/sourcegraph/sourcegraph/pull/5984) to optimize this query were highly successful. The following chart compares the query latency of the original query (_quadratic_, blue) and the optimized query (_fast linear_, green), and we've *very clearly* removed the term that was creating the quadratic behavior.

<div class="no-shadow">
  <img src="https://user-images.githubusercontent.com/1387653/66709486-a9813900-ed22-11e9-9519-d9a9c098b37d.png" alt="query latency comparison">
</div>

The culprit is the index scan within the nested loop. Ignore the sequential scan block here, which is a red herring. The sequential scan happens in favor of an index because of the small size of the `lsif_data_markers` dataset. When the table becomes larger, it is replaced with an efficient index scan.

**But index scans are supposed to be fast!** Well, they _are_ faster than a sequential scan, but may not be as fast as an index scan that uses a different index, or uses an index in a slightly different way. This particular scan fetches rows from the commits table using only `c.repository = l.repository` as the index condition. This pulls back literally the entire commit graph for the repository and each row is then filtered based on the remaining conditions. There are two multicolumn indexes that _could_ conceivably be used here: one on (`repository`, `commit`) and one on (`repository`, `parent_commit`). However, the following filter conditions would require the use of _both_ indexes, which Postgres seems unable to do, or unwilling to do due to an inaccurate query cost estimate.

```sql
(l.direction = 'A' AND c.commit = l.parent_commit) OR (l.direction = 'D' AND c.parent_commit = l.commit)
```

To reduce the cost of this index scan, we rewrote the recursive term within the table expression above (the second term of the `UNION`). Instead of using a `SELECT` with an `OR` condition (which had trouble using our existing set of indexes), we use `UNION` to combine the results matching each side of the `OR` clause.

```sql
SELECT c.*, l.distance + 1, l.direction
FROM lineage l
JOIN commits_with_lsif_data_markers c
ON c.repository = l.repository AND l.direction = 'A' AND c."commit" = l.parent_commit

UNION

SELECT c.*, l.distance + 1, l.direction
FROM lineage l
JOIN commits_with_lsif_data_markers c
ON c.repository = l.repository AND l.direction = 'D' AND c.parent_commit = l."commit"
```

The query plan for this new query, shown below, seems more complex at first glance. However, this query is **drastically** more efficient. The same input that required 330ms to evaluate now takes under 1ms to evaluate.

![super fast query plan](https://sourcegraphstatic.com/blog/commit-graph-optimizations/super-fast.png)

Even though we're now executing a greater number of steps, each step can be evaluated efficiently. The old inefficient index scan has been broken into two different index scans: one that traverses the ancestor direction, and another that traverses the descendant direction. The simple conditionals in each query can be evaluated _without an index filter_ by each of the multicolumn indexes above. Instead of pulling back the entire commit graph on each iteration of the table expression, we pull exactly the set of rows that need to be added to the working table.

This change makes the query efficient enough that we no longer have to worry about caching results, as running it on every request only contributes a negligible amount of time. Thus solving the problem [once and for all](https://www.youtube.com/watch?v=IjmtVKOAHPM)!

## Scalability improvements

Well, it solves the problem once and for all _at a particular scale_. There is an entire class of enterprise customers we would like to target to benefit from this feature as well, except the speed at which the code moves is a huge obstacle to overcome using this technique of calculating visible uploads on demand.

In order to prevent queries which must travel a large distance over the commit graph before finding a visible upload from timing out or affecting the stability of the database, we still keep a hard limit on the number of commits we will visit during the graph traversal. The benefit of this limit is stability to the Sourcegraph instance by limiting the maximum load a single query can put on the database. The downside of this limit is that there are many shapes of commit graphs and data markers that will fail to find a visible upload, even if the distance is not too large.

Since we stopped tracking distance to increase the number of duplicate rows, we no longer have a limit on _distance_, but on the number of total commits. This means that one query will travel a smaller distance on a commit graph with a large number of merge commits and a larger distance on a commit graph that is mostly linear.

Another issue is high commit velocity. Suppose that we have a hard limit of viewing 50 commits. We will then be able to look (approximately) 25 commits in a single direction. If the process for uploading LSIF data only happens every 50 commits, on average, then there will be pockets of commits that cannot see far enough to spot a relative commit with an upload. This turns out to be common in the case of large development teams working on single repository.

In this circumstance, bounded traversals are a fundamental design flaw. In order to get rid of this constraint, we turn to a technique that was very successful in the past: index the result of the queries out of band. This technique forms the basis of our search: we create a series of n-gram indexes over source text so we can quickly look inside text documents. This technique also forms the basis of our code intelligence: we create [indexes](https://microsoft.github.io/language-server-protocol/specifications/lsif/0.5.0/specification) that contain the answers to all the relevant language server queries that could be made about code at a particular revision.

In the same spirit, we eschew graph traversal at query time and calculate the set of visible uploads for each commit ahead of time (whenever the commit graph or set of uploads for a repository changes). This reduces the complexity of the query in the request path into a simple single-record lookup.

This [change](https://github.com/sourcegraph/sourcegraph/issues/12098) was made in our 3.20 release and introduced two new tables: `lsif_nearest_uploads` and `lsif_dirty_repositories`.

The `lsif_nearest_uploads` table stores what you would expect. For each commit that has a visible upload, there is a row in the table indicating the source commit, the identifier of the visible upload, and the distance between the source commit and the commit on which the upload is defined. Multiple uploads may be visible from a single commit as we look in both ancestor and descendant directions. There may also be multiple visible uploads in the case of different languages or different directories at index time, but we'll hand-wave around these particular details for now.

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

The `lsif_dirty_repositories` table tracks which repositories need their commit graphs updated. When we receive an upload for a repository, or get a request for a commit that we don't currently track, we bump the `dirty_token` value attached to that repository. When we are about to refresh the graph, we note the dirty token, calculate the set of visible uploads for each commit, write it to the database, and set the `update_token` to the value of the dirty token we noted earlier. This ensures that we avoid a particular class of race conditions that occur when we receive an upload at the same time we're re-calculating the commit graph from a previous upload.

| repository                    | dirty_token | update_token |
| ----------------------------- | ----------- | ------------ |
| github.com/sourcegraph/sample | 42          | 42           |

#### Example

For this example, we'll use the same graph as we did above, where commits `80c800`, `c85b4b`, and `3daedb` define uploads #1, #2, and #3, respectively.

<div class="no-shadow">
  <img src="https://sourcegraphstatic.com/blog/commit-graph-optimizations/graph3.png" alt="sample commit graph">
</div>

The first step to the algorithm is to [topologically sort](https://en.wikipedia.org/wiki/Topological_sorting) each commit so that a commit is processed only after all of its parents are processed. Then we perform a simple [greedy process](https://en.wikipedia.org/wiki/Greedy_algorithm) to determine which uploads are visible at each stage of the commit. If a commit defines an upload, it is visible to that commit. Otherwise, the set of visible uploads for the commit is the same as the uploads visible from each parent (just at a higher distance).

Because each parent can see a different set of uploads, we need to specify what happens when these sets _merge_. Take commit `e8331f` as an example. This commit can see both upload #3 via commit `3daedb`), as well as upload #1 via commit `9d9c37`. This yields a visible set `{(id=1, dist=4), (id=3 dist=1)}`. As part of the merge operation, we throw out the uploads that are farther away in favor of the ones that are closer. Similarly, we may see different uploads that tie in distance (as is the case with commit `69a5ed`, which can see both uploads #1 and #2 at the same distance). In these cases, we break ties deterministically by favoring the upload with the smallest identifier.

We want to search the graph in both directions, so we perform the operation again but visit the commits in the reverse order. The set of forward-visible uploads and backwards-visible uploads can then be merged using the same rules as stated above. The complete set of visible uploads for each commit for this example commit graph are shown below.

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

The topological ordering of the commit graph and each traversal takes time linear to the size of the commit graph, making this entire procedure a linear time operation.

## The neglected scaling dimension

Well, it's not _quite_ linear time if you take into account some of the stuff we claimed we could hand-wave away earlier: index files for different root directories.

Many large repositories are built up of smaller, self-contained projects. Or, at least independently analyzable units of code. This enables a fairly coarse caching scheme: each time the repository is indexed on git push or periodically, only the units fo code that have had explicitly changed since the last indexed commit needs to be re-indexed.

This means that there is no single nearest upload per commit: there is a nearest upload _per distinct indexing root directory_. To show the difference in output, we'll use the following commit graph, where:

- Commit `80c800` defines upload #1 rooted at the directory `/foo`
- Commit `d9c29f` defines upload #2 rooted at the directory `/bar`
- Commit `c85b4b` defines upload #3 rooted at the directory `/foo`
- Commit `3daedb` defines upload #4 rooted at the directory `/baz`
- Commit `69a5ed` defines upload #5 rooted at the directory `/bonk`

<div class="no-shadow">
  <img src="https://sourcegraphstatic.com/blog/commit-graph-optimizations/graph4.png" alt="sample commit graph">
</div>

<table>
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
</table>

The size of the table here (relative to the simple table produced by a single-root repository) is the thing to note. Let's say a repository has _n_ commits and _m_ distinctly indexable directories. Each commit then can see up to _m_ uploads, which drastically balloons the cost of merging two sets of visible uploads. This is further impacts performance in the presence of many merge commits.

**We drastically underestimated the value of _m_ for some enterprise customers.**

One of our large enterprise customers, who is also one of our earliest adopters of LSIF-base code intelligence at scale, had completed an upgraded from Sourcegraph 3.17 to 3.20. After the upgrade, they realized they were no longer getting refreshed precise code intelligence and sent us this poorly drawn Sydney Opera House of a graph, indicating that something was deeply wrong.

![worker OOM](https://sourcegraphstatic.com/blog/commit-graph-optimizations/oom.png)

The precise code intelligence worker process, which converts LSIF data uploaded by the user into our internal representation and writes it to our code intelligence data store, was ballooning in memory as jobs were processed. The extra memory hunger was extreme enough that the workers were consistently crashing with an out of memory exception towards the end of each job. No job was completing successfully.

After grabbing additional screenshots of our monitoring system, output to a few SQL queries, and a few pprof traces from the offending Go process, we proved that the culprit was [this function](https://stackoverflow.com/questions/12699781/how-can-i-pass-multiple-source-files-to-the-typescript-compiler) and knew we needed to find a way to reduce the resident memory required to calculate the full table of visible uploads for each commit.

To give a sense of this user's scale:

- Their commit graph contained ~40k commits
- They had ~18k LSIF uploads scattered throughout the graph
- Over all LSIF uploads, there were ~8k known distinct root directories

While the commit graph itself was relatively small (the [k8s/k8s](https://github.com/kubernetes/kubernetes) commit graph is twice that size and could be processed without issue), the number of distinct roots was very large.

As a emergency [first attempt](https://github.com/sourcegraph/sourcegraph/pull/16086) to reduce memory usage, we were able to cut the amount of memory required to calculate visible uploads down by a factor of four (with the side effect of doubling the time it took to compute the commit graph). This was an acceptable trade-off, especially for a background process, and especially in a patch release meant to restore code intelligence to a private instance.

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
Two commit graph views must be created per repository: one traversing the commit graph in each direction. Each instance of an `UploadMeta` struct occupies 56 bytes in memory (calculated via `unsafe.Sizeof(UploadMeta{})`). At the scale above, these structs occupy nearly 30GB of memory, which excludes the values in the `Root` and `Indexer` fields. The values of the root field, in particular, were quite large (file paths up to 200, characters, the average hovering around 75 characters) and repeated very frequently. This was by far the dominating factor, as confirmed by the customer's Go heap trace.

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

The first change is the introduction of the `Flags` field, which encodes the data previous stored in the `Distance`, `AncestorVisible`, and `Overwritten` fields. We encode the value of the booleans by setting the highest two bits on the 32-bit integer, and keep the remaining 30 lower bits to encode the distance. This still gives us enough room to encode a commit distance of over one billion, which ... if you're looking that far back in your git history I guarantee you're going to get garbage out-of-date results. Now, the `UploadMeta` struct occupies only 16 bytes.

The second change is the replacement of the root and indexer fields by a map from upload identifiers to a _hash_ of the indexer and root fields. Remember that we use these values only to determine which uploads shadow other uploads. We don't care about the actual values - we only care if they're equivalent or not. Our chosen hash always occupies 128 bits, which is a fraction of the size required by storing the full path string (75 characters take 600 bits to encode).

This also greatly reduces the _multiplicity_ of these strings in memory. Before, we were duplicating each indexer and root values for every _visible_ upload. Now, we only need to store them for each _upload_, as the values do not change depending on where in the commit graph you are looking. Logically, this was simply a [string interning](https://en.wikipedia.org/wiki/String_interning) optimization.

## Hitting a moving target

While we were busy preparing a patch release to restore code intelligence to our customer, they had upgraded to the next version to fix an unrelated error they were experiencing in Sourcegraph's search code.

This made things **far** worse. In Sourcegraph 3.22, we moved the code that calculated the commit graph from the precise-code-intel-worker into the frontend in an effort to consolidate background and period processes into the same package. Our first stab at memory reduction wasn't quite _enough_, and now the frontend pods were taking turns using all available memory and crashing.

This made their entire instance unstable, and this series of events escalated us from a priority zero event to a [priority now](https://devblogs.microsoft.com/oldnewthing/20081121-00/?p=20123) event.

We attacked the problem again, starting out again by tackling some low-hanging fruit by ignoring large amounts of unneeded data. When we pull back the commit graph for a repository, it's unlikely that we need the _entire_ commit graph. There's little sense in filling out the visibility of the long tale of historic commits, especially as its distance to the oldest LSIF upload grows over time. Now, we [entirely ignore](https://github.com/sourcegraph/sourcegraph/pull/16140) the portion of the commit graph that existed _before_ the oldest known LSIF upload fro that repository.

In the same spirit, we can remove the explicit step of topologically sorting the commit graph in the application by instead [sorting it via the git command](https://github.com/sourcegraph/sourcegraph/pull/16270). This is basically the same win as replacing a `sort` call in your webapp with an `ORDER BY` clause in your SQL query. This further reduces the required memory as we're no longer taking large amounts of stack space to traverse long chains of commits in the graph.

Our [last change](https://github.com/sourcegraph/sourcegraph/pull/16368), however, was the real heavy hitter. So far, we've been storing our commit graph in a map from commits to the set of uploads visible from that commit. When the number of distinct roots is large, these lists are also quite large. Most notably, this makes the merge operation between two lists quite expensive in terms of both CPU (the original merge procedure compares each pair of elements from the list in a trivial but quadratic nested loop) and memory (merging two lists creates a third, all of which are live at the same time).

At a slight expense of memory, we can greatly optimize CPU time by instead slightly altering this mapping. Note that looking in a single direction, each commit can see at most one upload for a particular indexer and root. Then, instead of storing a flat list of visible uploads per commit, we can store a map from the indexer/root values to the visible upload with those properties. Merge operations now become linear in the size of the input lists.

Finally, we stop pre-calculating the set of visible uploads for **every** commit at once. We make the observation that for a large class of commits, the set of visible uploads are simply redundant information.

<div class="no-shadow">
  <img src="https://sourcegraphstatic.com/blog/commit-graph-optimizations/graph5.png" alt="sample commit graph">
</div>

In the preceding commit graph, commits `91a565`, `52811d`, `7b1a18`, and `dd8578` are considered "trivial" and can be easily and efficiently recalculated by performing a very fast single-path traversal up the graph to find a unique ancestor (or, descendant in the other direction) for which we store the set of visible uploads. The re-calculated visible uploads are then the visible uploads of this ancestor with an adjusted distance.

The visibility for the remaining commits cannot be recalculated on the fly so easily due to one of the following conditions:

1. The commit defines an upload,
1. The commit has multiple parents; this would require a merge when traversing forwards,
1. The commit has multiple children; this would require a merge when traversing backwards, or
1. The commit has a sibling, _i.e._, its parents have other children or its children have other parents. We ensure that we calculate the set of visible uploads to make downstream calculations easier. For example, we keep track of the visible uploads for commit `e43f5b` so that when we ask for the visible uploads from _both_ parents of `599611` we do not have to perform a traversal.

It turns out that 80% of our problematic commit graph can be recalculated in this way, meaning that we only need to keep 20% of the commit graph resident in memory at any given time.

This last change turned out to be a **huge** win. When we started, the commit graph could only be calculated in 5 **hours** using 21GB of memory. Now, it takes 5 **seconds** and a single gigabyte. This is a ~3600x reduction in CPU and a ~20x reduction in memory.

![cpu and memory reduction](https://sourcegraphstatic.com/blog/commit-graph-optimizations/cpu-mem-fix.png)

But of course the story isn't over. We're battling with the [triple constraint](https://en.wikipedia.org/wiki/Project_management_triangle) of latency, memory, and disk usage here. And since we've optimized two of these properties, the third must necessarily suffer. Improvements in software often deal with similar time/space trade-offs. Removing a bad performance property of a system often doesn't _remove_ the bad property completely - it just pushes it into a corner that is less noticeable.

In this case, it was **very** noticeable.

![critical db size](https://sourcegraphstatic.com/blog/commit-graph-optimizations/full-disk.png)

## Pick 3: low latency, low memory usage, low disk usage, and developer sanity

Home stretch - we can do this. To summarize:

1. The speed at which we produce the commit graph is no longer a problem, and
1. The resources we require to produce the commit graph is no longer a problem, but
1. The amount of data we're writing into Postgres _is_ a problem.

Our [final and successful effort](https://github.com/sourcegraph/sourcegraph/pull/16636) to fix these time and space issues attacked the problem in two parts.

First, we've changed the commit graph traversal behavior to look only at ancestors. Since we started to ignore the bulk of the commit graph that existed before the first commit with LSIF data, looking into the _future_ for LSIF data now has limited applicability. Generally, users will be on the tip of a branch (either the default branch, or a feature branch if reviewing a pull request). We can still answer code intelligence queries for these commits, as they necessarily occur after _some_ LSIF data has been uploaded. Additionally, an unrelated [bug fix](https://github.com/sourcegraph/sourcegraph/pull/16733) caused descendant-direction traversals to increase memory usage. So at this point, it just seemed sensible to stop worrying about this reverse case, which was never truly necessary from a usability standpoint. Looking in one direction reduces the amount of data we need to store by about 50%.

Second, we re-applied our tricks described in the previous section. We had good luck at throwing out huge amounts of data which we could efficiently recalculate when necessary, and save the resources that would otherwise be required to store them. This concept is known as [rematerialization](https://en.wikipedia.org/wiki/Rematerialization) in the compiler ecosystem, where values may be computed multiple times instead of storing and loading the already-computed value from memory in the case where a load/store pair is more expensive than the computation itself, or if it would otherwise increase register pressure.

Instead of writing the set of visible uploads per commit, what if we only store the visible uploads for commits that can't trivially recomputed? We've already determined the set of commits that can be easily rematerialized - we can just move the rematerialization from database insertion time to query time.

However, it's not as easy as just throwing out the data we don't need - we still need to encode some additional bookkeeping metadata to enable us to recalculate these values cheaply (without pulling back and traversing the entire commit graph on each query).

We introduced a new table, `lsif_nearest_uploads_links`, which stores a link from each commit that can be trivially recomputed to its nearest ancestor with LSIF data. Queries are still now a simply constant-time lookup:

- If the commit exists in `lsif_nearest_uploads`, we simply use those visible uploads, otherwise
- If the commit exists in `lsif_nearest_upload_links`, we use the visible uploads attached to the ancestor.

#### Example

We'll use the following commit graph again for our example. Here, commit `68acd3` defines upload #1, and `67e0bf` defines upload #2 (both with distinct indexing root directories).

<div class="no-shadow">
  <img src="https://sourcegraphstatic.com/blog/commit-graph-optimizations/graph5.png" alt="sample commit graph">
</div>

The `lsif_nearest_uploads` table associates a commit with its visible uploads, just as before. But now, the number of records in the table is much, much smaller. The commits present in this table satisfy one of the properties described above that make the commit non-trivial to recompute.

| repository                    | commit              | upload_ids          |
| ----------------------------- | ------------------- | ------------------- |
| github.com/sourcegraph/sample | <code>4a8a33</code> | <code>[]</code>     |
| github.com/sourcegraph/sample | <code>68acd3</code> | <code>[1]</code>    |
| github.com/sourcegraph/sample | <code>e43f5b</code> | <code>[1]</code>    |
| github.com/sourcegraph/sample | <code>67e0bf</code> | <code>[2]</code>    |
| github.com/sourcegraph/sample | <code>599611</code> | <code>[1, 2]</code> |

Luckily, some benefits compound one another here, and after we started ignoring traversing the graph in both directions, we can simplify these properties to only account for ancestor-direction traversals. Notably, a commit whose parent has multiple children (`7e0471`, for example) were necessary to store for the descendant-direction traversal, but no longer need to be stored. This further increases the number of trivially recomputable commits, saving even more space.

The `lsif_nearest_uploads_links` table stores a _forwarding pointer_ to the ancestor that has the same set of visible uploads.

| repository                    | commit              | ancestor_commit     |
| ----------------------------- | ------------------- | ------------------- |
| github.com/sourcegraph/sample | <code>91a565</code> | <code>68acd3</code> |
| github.com/sourcegraph/sample | <code>7e0471</code> | <code>4a8a33</code> |
| github.com/sourcegraph/sample | <code>52811d</code> | <code>7e0471</code> |
| github.com/sourcegraph/sample | <code>7b1a18</code> | <code>599611</code> |
| github.com/sourcegraph/sample | <code>dd8578</code> | <code>599611</code> |

Note that for our instances with a large number of distinct indexing roots, this saves a **massive** amount of storage space. The majority of commits (> 80%) can link to an ancestor, which requires only referencing a fixed-size commit hash. The remaining minority of commits must explicitly list their visible uploads, of which there may be many thousands.

<!--
digraph G {
  rankdir="LR";
  node [fontname="monospace"];
  edge[arrowhead=none];

  main[shape=box,label="main",color=grey];
  branch[shape=box,label="feat/x",color=grey];

  g[label="323e23",group=main];
  f[label="d67b8d",group=main, color=blue];
  c[label="4c8d9d",group=main];
  a[label="f4fb06",group=main, color=blue];
  b[label="a36064",group=main];
  d[label="313082",group=branch];
  e[label="6a06fc",group=branch];

  g -> f; f -> c; c -> a; a -> b; b -> main;
  c -> d; d -> e; e-> branch;
}

digraph G {
  rankdir="LR";
  node [fontname="monospace"];
  edge[arrowhead=none];
  graph[nodesep=0.5];

  main[shape=box,label="main",color=grey,group=main];
  branch1[shape=box,label="feat/x",color=grey,group=branch];
  branch2[shape=box,label="feat/y",color=grey,group=branch2];

  a[label="09210f",group=main,color=blue];
  b[label="3d2f27",group=main];
  e[label="1f64f9",group=branch1];
  l[label="2190d3",group=branch1];
  f[label="4a848f",group=main];
  g[label="5a24e4",group=branch2];
  j[label="703e33",group=main];
  k[label="6307e6",group=main];

  a -> b -> f -> k -> j;
  a -> e -> l -> b;
  b -> g -> j;

  j -> main;
  l -> branch1;
  g -> branch2;
}

digraph G {
  rankdir="LR";
  node [fontname="monospace"];
  edge[arrowhead=none];
  graph[nodesep=0.5];

  a[label="80c800",group=main,color=blue];
  b[label="69a5ed",group=main];
  c[label="d9c29f",group=branch1];
  d[label="c85b4b",group=branch1,color=blue];
  e[label="063211",group=main];
  f[label="f9727d",group=branch1];
  g[label="3daedb",group=branch1,color=blue];
  h[label="9d9c37",group=main];
  j[label="e8331f",group=main];

  a -> b -> e -> h -> j;
  a -> c -> d -> b;
  b -> f -> g -> j;
}

digraph G {
  rankdir="LR";
  node [fontname="monospace"];
  edge[arrowhead=none];
  graph[nodesep=0.5];

  c[label="d9c29f",group=branch1, color=red];
  d[label="c85b4b",group=branch1, color=blue];
  a[label="80c800",group=main, color=blue];
  b[label="69a5ed",group=main, color=gold];
  e[label="063211",group=main];
  f[label="f9727d",group=branch2];
  g[label="3daedb",group=branch2, color=green];

  b -> e;
  a -> c -> d -> b;
  a -> f -> g -> b;
}

digraph G {
  rankdir="LR";
  node [fontname="monospace"];
  edge[arrowhead=none];
  graph[nodesep=0.5];

  a[label="4a8a33",group=main];
  b[label="68acd3",group=main, color=blue];
  c[label="91a565",group=main];
  d[label="e43f5b",group=main];
  e[label="599611",group=main];
  f[label="7b1a18",group=main];
  g[label="7e0471",group=branch1];
  h[label="52811d",group=branch1];
  j[label="67e0bf",group=branch1,color=red];
  i[label="dd8578",group=main];

  a -> g -> h -> j -> e;
  a -> b -> c -> d -> e -> f -> i;
}
-->

<style>
  .blog-post__html .no-shadow img { box-shadow: none; }
  .workingtable-highlight { color: #ffffff; background-color: #005cb9; }
</style>
