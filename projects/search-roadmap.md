---
title: Search Roadmap
description: Document potential directions for search in Sourcegraph
authors:
  - Keegan Carruthers-Smith
startdate: 2018-10-04
releasedate: yyyy-mm-dd
publishdate: yyyy-mm-dd
published: false
---
# Search Roadmap

This is a draft document about how we will evolve the search project. It
contains ideas about potential avenues we will explore.

## Hierarchical Search

Note: This project has started. TODO link to blog about Hierarchical Search
project.

Also known as pipeline search. This is about improving the power of search in
Sourcegraph via adding sub-queries and logical operators (AND, OR, NOT). These
sort of queries are not uncommon via the shell. Usually done by mixing shell
pipelines, `find`, `grep -L` and `grep -l`. Examples of things you can achieve:

* Make it possible to find all repositories which do not contain a Dockerfile.
* Make it possible to find results which match X, but only if the repository contains the word Y.
* Make it possible to find results which match X, but only if the file contains the word Y.

Here are some example queries in our proposed syntax to achieve the above:

* `type:repo f:Dockerfile`
* `type:repo -f:Dockerfile`
* `(type:repo langserver) cxp`
* `(type:file Copyright) Redistribution`
* `(type:repo file:^license BSD) (type:repo (type:file -f:Dockerfile)) test`

## Ranking repositories

Problem: On Sourcegraph.com you have to put a repo filter in, since we can't
search over all OSS repositories since we do not index every repository.

Problem: For large customers a common query will return results from 100s of
repos, but we will only show a random subset.

The proposed solution to both is to rank repositories, but tailored to a
user. For sourcegraph.com we can then use the top ranked repos for a user if
no repo filter is specified.

## Index top repositories on Sourcegraph.com

Problem: On Sourcegraph.com you have to put a repo filter in, since we can't
search over all OSS repositories since we do not index every repository.

We index the global top 10,000 repositories. If no repo filter is specified,
we consult the index and specify to the user we are only searching the top 10k
repositories.

## Dependency Search

Problem: I want to search for an error string in my project, but it is coming
from a dependency.

A search filter which includes dependency repositories. We already compute
most of this information for cross repository references, so we need to hook
the two up. Additionally our LSP extensions include methods which return this
information.

We have never properly felt this pain at Sourcegraph when developing go code
since we commit our dependencies (the `vendor` directory). However, with go
modules we will likely stop doing that so will want a solution.
