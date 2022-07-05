---
title: 'Postgres text search: balancing query time and relevancy'
description: 'How do you balance query time and relevance with Postgres text search? Stephen Gutekanst, an engineer working on Sourcegraph’s API docs feature, shares tips for stirring code analysis with search indexing'
authors:
  - name: Stephen Gutekanst
    url: https://slimsag.com
publishDate: 2021-10-13T10:00-07:00
tags: [blog, code, search, software, engineering, postgres, trigrams, ranking, relevance]
slug: postgres-text-search-balancing-query-time-and-relevancy
heroImage: https://user-images.githubusercontent.com/3173176/137389515-bc672c66-e7f6-4cbb-9ef9-0e060177c9bf.png
socialImage: https://user-images.githubusercontent.com/3173176/137389515-bc672c66-e7f6-4cbb-9ef9-0e060177c9bf.png
published: true
---

![Graphic: Postgres text search, balancing query time and relevancy. Code analysis + Postgres = love](https://user-images.githubusercontent.com/3173176/137389515-bc672c66-e7f6-4cbb-9ef9-0e060177c9bf.png)

I’ve worked at Sourcegraph for nearly 7 years, and during that time I’ve worked with various search backends, such as Google’s [Zoekt](https://github.com/google/zoekt/) (“Fast trigram code search”), Postgres search, and a slew of other homegrown search backends. Outside of Sourcegraph, I [also research and develop search engines](https://github.com/slimsag).

I enjoy Postgres quite a lot: it’s great software, and the pg_trgm extension for it, which provides trigram search indexing, is something that I love playing around with. In my spare time, I regularly experiment with [pushing it to its limits](https://devlog.hexops.com/2021/postgres-regex-search-over-10000-github-repositories).

## What is pg_trgm?

[pg_trgm](https://www.postgresql.org/docs/current/pgtrgm.html) is an official extension to Postgres. pg_trgm enables trigram indexing and search over Postgres text columns.

> A trigram is a group of three consecutive characters taken from a string. We can measure the similarity of two strings by counting the number of trigrams they share. This simple idea turns out to be very effective for measuring the similarity of words in many natural languages.

Trigram indexes are great for implementing text search, and they’re the backbone of Sourcegraph’s indexed search (although we use Zoekt, not Postgres, for reasons I’ll get into below.)

The difference between pg\*trgm (Trigram indexing) and FTS (Full Text Search, tsvector) is that the former is an index over all characters, while the latter is an index over _words_. **If you can get away with indexing words and only matching whole words (or prefixes of words), FTS / tsvector is usually much faster because it is indexing far less data.** When searching for code, though, we care a lot about punctuation symbols, for example–each character matters.

One particularly nice property of trigram indexes is that they can partially index regular expression searches–a property code search engines like to utilize:

```SQL
SELECT * FROM test_trgm WHERE t ~ '(foo|bar)';
```

The more trigrams that can be extracted from the regexp’s terms, the more effective the index is. In the worst case (e.g. `.*`) it would result in a full table scan.

## Search result relevance in the pg_trgm world

Another nice property of Postgres trigram search is the ability to order results by similarity to the actual search terms, i.e. to get relevant results. For example, we can go beyond getting back results that are similar but not relevant to our search terms `Package json`:

```SQL
sg=> SELECT label FROM lsif_data_documentation_search_public WHERE label <<% 'Package json' LIMIT 10;
     label
---------------
 Package main
 Package mocks
 Package lib
 Package main
 Package main
 Package main
 Package main
 Package main
 Package s3
 Package mocks
(10 rows)

```

We can instead ask Postgres to count the number of matching trigrams between our `label` text column and our search query terms (`Package json`) and give us an indication of how similar they are. This returns a number between zero and one, where zero is a perfect match and one is a poor match:

```SQL
sg=> select label, label <<<-> 'Package json' as label_dist from lsif_data_documentation_search_public WHERE label <<% 'Package json' ORDER BY label_dist LIMIT 10;
      label      | label_dist
-----------------+-------------
 Package json    |           0
 Package p       | 0.111111104
 Package pac     | 0.111111104
 Package page    | 0.111111104
 Package json_v2 |      0.1875
 Package a       |  0.19999999
 Package b       |  0.19999999
 Package c       |  0.19999999
 Package d       |  0.19999999
 Package e       |  0.19999999
(10 rows)

```

Using this search, we get better matches that are more relevant to our query terms.

## The problem: performance

One major problem with using pg\*trgm’s relevancy ordering– i.e. `ORDER BY` with a trigram match distance–is that it often _substantially_ harms query time. We’ve traded our ultra-fast search results, which were often completely irrelevant, for very relevant results suffering from super slow query times:

```SQL
sg=> SELECT label FROM lsif_data_documentation_search_public WHERE label <<% 'Package json' LIMIT 1;
    label
--------------
 Package main
(1 row)

Time: 83.221 ms
```

```SQL
sg=> select label, label <<<-> 'Package json' as label_dist from lsif_data_documentation_search_public WHERE label <<% 'Package json' ORDER BY label_dist LIMIT 1;
    label     | label_dist
--------------+------------
 Package json |          0
(1 row)

Time: 6926.863 ms (00:06.927)

```

The difference between 80ms and 6.9 _seconds_ is shown on a quite small data set of just 54 MB of text across 1 million rows. With larger data sets, the difference is _far worse_.

And that’s where things get tricky: pg\*trgm really can’t know how similar our query `Package json` is to potential matches unless it actually calculates that for each match in the trigram index–and there can be _many_ matching rows. For some query terms, you could match nearly all trigrams in the entire index and devolve into a full table scan–super slow!

## Why is relevance important in code search?

Systems like Google’s [Zoekt](https://github.com/google/zoekt/) (“Fast trigram code search”) work around this performance issue by ranking results using [various signals at indexing time](https://github.com/google/zoekt/blob/f7d54faa261b31f7258a2d1291531ebd89ce8ee5/doc/design.md#ranking) to order documents in shards so that the more important documents are searched first, also locating a larger number of candidate results and then sorting those candidates to match the query before returning a subset of those candidates. A partial consideration of ranking.

Sourcegraph does something similar to Zoekt, but we apply some ranking on top at higher level units of code based on things like repo stars and offer `repo:`, `file:`, and more filtering capabilities. In general, most code search systems rely on query-time filtering syntax to work around the issue of relevance being costly. A typical workflow in Sourcegraph looks like:

![Graphic: Sourcegraph search today, a search begins by getting lots of results. These results match your literal query, or regexp query, etc. but you get too many results. There is a lack of relevance. Then you apply advanced filtering, more filtering, etc. to get to a desired result.](https://user-images.githubusercontent.com/3173176/137390361-145c8315-b4c6-4ee9-a45a-223e93f424db.png)

If you’ve worked with code search tools like Sourcegraph, Zoekt, OpenGrok before then this workflow can make _a lot of sense._ There is a great deal of power that comes with the filtering capabilities in these systems. In many situations, the filtering capabilities are better than having a Google-esque “we think this result is most relevant to you” decision being made for you–a decision you cannot change.

Still, many people who’ve never used such a tool before will search for specific code, such as a repository name, a function name, or a class in hopes of finding that specific code so they can explore it further. In these cases, it would be nice to be able to accurately answer these types of queries. Think of it as the “I’m feeling lucky” of code search:

![Graphic: Sourcegraph search over API docs, a search begins by locating the best 1-3 results. These are relevant results due to searching over symbols not entire code files, fuzzier so you chuck in what you know and we try to match it, logical so e.g. "go package net/" shows all net/ packages. You get desired results right out of the gate.](https://user-images.githubusercontent.com/3173176/137226418-8b0fbf66-fcf6-42ff-9166-e3d4c9f54351.png)

## The need for balancing time and result relevance

As I build this system for Sourcegraph–integrating the code analysis data we have for generating API docs for your code into our search backend–I’ve chosen to use Postgres.
One reason why is the effective similarity matching between previously mentioned: it’s perfect for this use case, where we want a user to type in a query like `github.com/my/repo`, or a partial repo name, a Go package name, a function name, or a type signature and get back an “I’m feeling lucky” type result.

The challenge, as mentioned previously, is that we have to decide between query times being fast or results being relevant. The worst of tradeoffs!

I’m certainly not the only one facing that–just a bit of Googling will reveal this is a common problem:

- [“Slow query times for similarity searches with pg_trgm indices”](https://dba.stackexchange.com/questions/208346/slow-query-times-for-similarity-searches-with-pg-trgm-indices)
- [“Optimizing ORDER BY in a full text search query”](https://dba.stackexchange.com/questions/16437/optimizing-order-by-in-a-full-text-search-query?rq=1)

There are lots of things you can do to try improving the performance here, such as reconsidering a GIN vs GIST index, [altering work_mem configuration](https://stackoverflow.com/a/44853236) and [my recommendations here for using pg_trgm](https://devlog.hexops.com/2021/postgres-regex-search-over-10000-github-repositories#conclusions) such as [enabling parallel querying and parallel indexing of Trigram indexes via table splitting](https://devlog.hexops.com/2021/postgres-regex-search-over-10000-github-repositories#table-splitting)

But none of these will fully eliminate the possibility of `ORDER BY` similarity devolving into a slow query. Why does that happen, and can we prevent that?

## Trigram index poisoning

The reason `ORDER BY` with trigram similarity ordering can often devolve into a slow query is because of the number of rows Postgres must compare for similarity.

This usually isn’t all rows in the table, but it can be a significant portion of them. The reason this happens is because of trigram index poisoning.

Consider this: you have a table of GitHub repository names (or email addresses) with a pg_trgm index for the column. If every row in the table has a common set of trigrams (a shared string of characters):

0. **github.com/**sourcegraph/sourcegraph
1. **github.com/**golang/go
2. **github.com/**kubernetes/kubernetes
3. stash.company.com/foo/bar
4. ...

A query for `github.com/foo/bar` against such a table will find the first three entries because the shared `github.com/` prefixes are similar. If they’re similar enough to pass your query’s `WHERE <<% ‘query terms’` clause, then all such rows need to have their similarity compared and ordered–even if you plan to just `LIMIT` the result set in the end. This can end up being quite a lot of rows.

Also, imagine a table of email addresses with a common `@gmail.com` suffix, and then searching for an email `anything@gmail.com`. You can imagine almost all rows being similar enough to need ordering. This is what I mean when I say “trigram index poisoning”: we’ve very nearly rendered our trigram index useless.

You can avoid trigram index poisoning by ensuring that entries don’t have common/shared substrings, but in practice, trigram index poisoning is hard to avoid and is often just an artifact of using trigram indexes altogether that one must live with and work around.

## Limiting query time

One option for preventing queries from taking a long time is to keep our `ORDER BY` similarity–which is expensive–and apply [a statement timeout](https://blog.crunchydata.com/blog/control-runaway-postgres-queries-with-statement-timeout). A statement timeout protects our database against runaway poison-pill queries: If the trigram index finds few enough results to complete within the statement timeout, you get good results. The downside, of course, is that if the statement timeout is hit, you don’t just get worse results–you get _no results at all_. Bummer.

What other options do we have?

## Choosing a similarity threshold

pg_trgm provides the ability for us to replace our `WHERE <<% ‘query terms’` condition, which defaults to a strict word similarity threshold of 0.5, with our own threshold value. In effect, instead of using `ORDER BY` similarity we can just ask Postgres to only give us more similar results–don’t include the others.–his can be much faster because it doesn’t need to sort so many results while still giving good relevance. Swapping the default 0.5 with 0.9 gives us what we’d expect:

```SQL
sourcegraph=# select label, label <<<-> 'Package json' as label_dist from lsif_data_documentation_search_public WHERE strict_word_similarity(label, 'Package json') > 0.9 LIMIT 10;
    label     | label_dist
--------------+------------
 Package json |          0
(1 row)

```

But this isn’t a silver bullet either: how do we know which threshold value to choose? There are a couple of problems:

If results are completely irrelevant (say, under the default threshold of 0.5 similarity) then we’d like to discard the results. That’s easy. But what if we use a similarity threshold of 0.9, or even 1.0,and find no results because our matching threshold is too strict? It’d be nice to fall back to a less strict threshold and give the user some results.
With a stricter similarity threshold comes more work for Postgres: although vastly cheaper than ORDER BY similarity, there is always a chance that the terms we’re searching for only has a few similar matching rows.That means pg_trgm is going to spend a lot of time searching for those. Some queries could return in milliseconds and others could take minutes.

An application-side solution for this might be to execute multiple queries in parallel, each with different similarity thresholds (such as 1.0, 0.9, 0.75, 0.5) and then, after your maximum query time return the results from the “best” threshold, it can cancel any requests that have not yet completed. The benefit of this is that you get pretty relevant results in a reasonable amount of query time; the downside is that you’re issuing 4x queries against your DB.

## What’s the solution?

Really, there isn’t a perfect solution.

The Postgres docs also acknowledge this is a tricky issue: in section ["12.3.3. Ranking Search Results"](https://www.postgresql.org/docs/current/textsearch-controls.html#TEXTSEARCH-RANKING) which talks about tsvector search, it says:

> Ranking can be expensive since it requires consulting the tsvector of each matching document, which can be I/O bound and therefore slow. Unfortunately, it is almost impossible to avoid since practical queries often result in large numbers of matches.

It would be nice if Postgres had some sort of `LIMIT BY INTERVAL '00:00:05'` functionality to indicate “find as many rows as you can, until you exceed this duration of time”. We could use that functionality in a subquery to find candidates and then `ORDER BY` similarity on the candidate matches that we managed to find in our budgeted amount of query time. But alas, this does not exist. Maybe one day?

Issuing multiple queries in parallel with different similarity thresholds, as previously mentioned, is not a bad approach. And issuing 4x queries against your DB, while it sounds bad, is in practice (1) cheaper than `ORDER BY` similarity by a long shot and (2) may be handled quite efficiently in terms of in-memory caching because they’re queries against the same table and rows and these queries are often I/O bound.

If you can get away with whole word (or prefix of words) matching in your use case, you can ditch pg_trgm entirely and instead use the FTS / tsvector functionality, which is far faster as it indexes much less data. One should also be mindful of the fact that with that better performance you can locate many more candidate matches to perform an `ORDER BY` on, potentially ending up with better results than if you'd stuck with pg_trgm similarity matching. It's all a game of tradeoffs.

## Extensions that may solve this

(amendment Oct 21, 2021) [Adrien Nayrat](https://twitter.com/Adrien_nayrat), PostgreSQL Expert & Freelancer, reached out to suggest the Rum index extension may help with this:

> Hello,
> I read your article https://about.sourcegraph.com/blog/postgres-text-search-balancing-query-time-and-relevancy/
> Indeed, ranking is a known issue.
> Did you consider using Rum indexes? This kind of index will be much larger but are designed to be fast for ranking.
> More sources on this:
>
> - slides 62-63 https://www.postgresql.eu/events/pgconfeu2018/sessions/session/2116/slides/137/pgconf.eu-2018-fts.pdf
> - https://postgrespro.com/blog/pgsql/4262305
> - https://github.com/postgrespro/rum

This looks super promising and may well address many of the reasons I / others at Sourcegraph have not used Postgres FTS, so will definitely be investigating this more in the future. One challenge is AWS/GCP Postgres offerrings not supporting this extension currently, though. Thanks for sharing!

## Thanks for reading

If you got this far, thanks for reading! The search backend I describe here has not yet made its way into a full production rollout, but will soon. If you’re interested in trying it out, please follow the [Sourcegraph Twitter account](https://twitter.com/sourcegraph) for updates.

Also consider trying my work on generating [API docs for your code](https://docs.sourcegraph.com/code_intelligence/apidocs), which works on any Go repository today!

## About the author

[Stephen Gutekanst](https://github.com/slimsag) is one of Sourcegraph’s earliest engineers, and has authored many parts of Sourcegraph including the src CLI, monitoring architecture, managed instances, and editor extensions to name a few. Stephen has worked with most of Sourcegraph’s largest customers, and enjoys solving the most critical and technically challenging issues users face in our effort to improve the lives of developers everywhere. Outside of Sourcegraph, Stephen [researches and develops search engine and video game technology](https://github.com/slimsag).

## More posts like this

- [A 5x reduction in RAM usage with Zoekt memory optimizations](https://about.sourcegraph.com/blog/zoekt-memory-optimizations-for-sourcegraph-cloud/)
- [How we used universal code search to eliminate secrets from our codebase](https://about.sourcegraph.com/blog/eliminate-secrets-from-codebase-with-universal-code-search/)
- [How not to break a search engine or: What I learned about unglamorous engineering](https://about.sourcegraph.com/blog/how-not-to-break-a-search-engine-unglamorous-engineering/)
