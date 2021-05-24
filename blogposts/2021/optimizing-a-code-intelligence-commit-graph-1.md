---
title: "Optimizing a code intelligence commit graph (Part 1)"
author: Eric Fritz
authorUrl: https://eric-fritz.com
publishDate: 2021-05-12T18:00-07:00
tags: [blog]
slug: optimizing-a-code-intel-commit-graph
heroImage: https://sourcegraphstatic.com/blog/lsif-go/lsif-go-improvements.png
published: true
---

Since the first version of Sourcegraph, precise code navigation has been a first-order concern. Its ability to provide compiler-accurate code navigation in a web-based interface is a superpower for our users.

![Cross-repository jump to definition](https://sourcegraphstatic.com/precise-xrepo-j2d.gif)

The [journey to our current implementation](/evolution-of-the-precise-code-intel-backend/) began in February 2019 when we shifted our efforts from running Language Servers along side Sourcegraph to pre-indexing source code via the Language Server Index Format (LSIF) and uploading it to Sourcegraph. This change introduced a new requirement of the user: they are now responsible for producing and uploading the LSIF index.

The method in which a user produces an LSIF index is highly variable and depends on many factors. If a repository is not too large, a user may wish to create a new index on every commit in their CI. If a repository is very large (the monorepo case), or an organization has a large number of repositories, it may be advantageous to instead index code periodically and upload a refreshed index. Google uses such a scheduled job to refresh their monorepo's index twice a day.

Regardless of the indexing method, it is always possible for a user to find themselves browsing a commit for which Sourcegraph has not received an index. This can happen due to a slow job in a continuous integration server, a backed-up indexing processing queue, or the commit may simply be skipped in the case of a periodic refresh.

This is a glaring hole in the feature. The majority of users are exploring code on the tip of a branch, which is the _least_ likely commit to have an index immediately after it's been pushed to the code host.

In order to plug this hole, we determine the set of nearby commits for which Sourcegraph has received an index, query these indexes on behalf of the requested commit, then adjust the resulting locations (file paths and ranges within a document) using the Git diff between the commits as a guide. This enables Sourcegraph to respond with precise results to requests on commits missing an index.

## Tracking cross-commit index visibility

The first step in this process is to [track how commits of a repository relate to one another](https://github.com/sourcegraph/sourcegraph/pull/5691). Unfortunately, the service providing the code intelligence features was separated (by design) from the rest of the product. We had only recently [gained access to the Sourcegraph PostgreSQL database](https://github.com/sourcegraph/sourcegraph/pull/5740) used by the rest of the application, and no other team was tracking commit information. The source of truth for that data was gitserver, which required both an RPC call and a subprocess to access.

Our initial stab at this problem was to introduce 2 new tables to PostgreSQL: `commits` and `lsif_data_markers`.

The `commits` table stores data similar to a flattened version of the output from `git log --all --pretty='%H %P'` (a commit followed by a list of its parents), for each repository. Example values for this table are shown below to aid our running example. This table would generally store the full 40-character commit ID—we are abbreviating them for brevity here.

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

Together, these 2 tables enable us to recursively search up and down the commit graph starting at a particular requested commit, and stop the search once we reach a commit that has index data. The following [recursive common table expression](https://www.postgresql.org/docs/13/queries-with.html) does just that.

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

Unfortunately, our first stab at an implementation had a number of rather disappointing performance characteristics, as first stabs typically do. The query above is basically a SQL translation of an imperative graph-walking algorithm. Thinking of the query in these terms makes it easier to see that the runtime cost of the query will increase proportionally to the distance travelled through the graph.

The following query plan shows an execution trace that visited around 10 commits (the resulting commit was 5 commits away, and we search in both directions). This query takes about 40ms, which is already a high cost for a query that runs every time a user hovers over an identifier.

![fast query plan](https://sourcegraphstatic.com/blog/commit-graph-optimizations/fast.png)

The following query plan shows an execution trace that visited around 100 commits (the resulting commit was 44 commits away). This query takes about 330ms, which is well over the [noticeable latency threshold](https://www.computer.org/csdl/pds/api/csdl/proceedings/download-article/12OmNyQYtlZ/pdf).

![slow query plan](https://sourcegraphstatic.com/blog/commit-graph-optimizations/slow.png)

[Adding additional indexes](https://github.com/sourcegraph/sourcegraph/pull/5946) to the `commits` table helped a bit, but did not fundamentally change the performance characteristics of the query. An even larger pathology was discovered in repositories with a large number of merge commits. In order to understand the performance issue, it's important first to understand how the recursive query evaluation works in the case of duplicates, which was initially unintuitive to us. Paraphrasing the [PostgreSQL documentation](https://www.postgresql.org/docs/13/queries-with.html), recursive queries are evaluated with the following steps (emphasis ours):

1. Evaluate the non-recursive term and **discard duplicate rows**
1. Insert rows into result set as well as a temporary working table
1. While the working table is not empty:
    1. Evaluate the recursive term by substituting the recursive self-reference with the working table and **discard duplicate rows**
    1. Insert rows into result set as well as a new temporary intermediate table table
    1. Replace the working table with the intermediate table and empty the intermediate table

A row is a duplicate of another row (from PostgreSQL's point of view) if they both contain the same set of values. However, from our point of view, a row is a duplicate of another row if only their commit values match. After all, we're running a breadth-first search over a graph and by the time we've seen a commit for the second time, we've already seen it via the shortest path. This mismatch in expectations don't cost us correctness, but it does cause performance problems and the pain that comes with it.

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

What we _wanted_ to happen was for the "duplicate rows" not to be inserted into the working table at all. Unfortunately, each record in this example is distinct due to the differing path lengths—a detail we glossed over when designing this query in the first place. Another classic case of the computer doing what you _told_ it to do instead of what you _wanted_ it to do. 🙄

---

Our [first attempt to optimize this query](https://github.com/sourcegraph/sourcegraph/pull/5980) directly tackled the problem of duplicate rows in the worktable, as shown in the above example. This change simply removes the direction column from the lineage table expression. The "duplicates" that we now throw out are records for commits that have already been seen via a shorter path. This required that we take the limiting condition out of the table expression and into the select, which changes the behavior very slightly (it now limits by working set size, not by distance, which was an acceptable trade-off for the performance increase).

[Additional efforts to optimize this query](https://github.com/sourcegraph/sourcegraph/pull/5984) were highly successful. The following chart compares the query latency of the original query (_quadratic_, blue) and the optimized query (_fast linear_, green), and we've *very clearly* removed the term that was creating the quadratic behavior.

<div class="no-shadow">
  <img src="https://user-images.githubusercontent.com/1387653/66709486-a9813900-ed22-11e9-9519-d9a9c098b37d.png" alt="query latency comparison">
</div>

The culprit is the index scan within the nested loop. Ignore the sequential scan block here, which is a red herring. The sequential scan happens in favor of an index because of the small size of the `lsif_data_markers` dataset. When the table becomes larger, it is replaced with an efficient index scan.

**But index scans are supposed to be fast!** Well, they _are_ faster than a sequential scan, but may not be as fast as an index scan that uses a different index, or uses an index in a slightly different way. This particular scan fetches rows from the commits table using only `c.repository = l.repository` as the index condition. This pulls back literally the entire commit graph for the repository and each row is then filtered based on the remaining conditions. There are two multicolumn indexes that _could_ conceivably be used here: one on (`repository`, `commit`) and one on (`repository`, `parent_commit`). However, the following filter conditions would require the use of _both_ indexes, which PostgreSQL seems unable to do, or unwilling to do due to an inaccurate query cost estimate.

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

<!-- TODO - transition to next post -->

[Part 2](/blog/optimizing-a-code-intel-commit-graph-part-2/)
