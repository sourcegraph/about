---
title: "Search the top 10,000 open source repositories on Sourcegraph.com"
description: "How Sourcegraph.com became easier to use, by setting the default search scope to the top ten thousand open source repositories on GitHub."
author: Issac Trotts, Software Engineer at Sourcegraph
publishDate: 2019-08-16T00:00-11:55
tags: [
 blog
]
slug: Search-the-top-10000-open-source-repositories-Sourcegraph-com
heroImage: /blog/sourcegraph-com-usage.png
published: true
---

<p style="text-align: center">
 <img src="/blog/sourcegraph-com-usage.png" />
 <br/><small>Sourcegraph.com stats as of August 2019</small>
</p>

Wouldn't it be awesome if you could scope a code search to find usage examples from the top ten thousand open source repositories on GitHub? You can, using [Sourcegraph.com](https://sourcegraph.com), and we've now made it easier to use!

## Using Sourcegraph.com like a regular search engine

[Sourcegraph.com](https://sourcegraph.com) has always allowed developers to browse any open source repository from GitHub, but it wasn't possible to perform a search without adding a `repo` filter to limit the number of repositories that needed to be searched (private Sourcegraph instances don't have this limitation). This meant [Sourcegraph.com](https://sourcegraph.com) was missing a crucial use case—finding usage examples for a library, class, method, or function, from a set or reputable, and predefined open source repositories.

Let's say you've recently heard about Google's [Distroless container image](https://github.com/GoogleContainerTools/distroless), and are curious about its usage. Previously, without specifying any repositories, your search would've returned this:

![](/blog/too-many-matching-repos.png)

After some [Sourcegraph.com](https://sourcegraph.com) specific code changes ([#4959](https://github.com/sourcegraph/sourcegraph/pull/4959/files) and [#5062](https://github.com/sourcegraph/sourcegraph/pull/5062/files)
), Sourcegraph (by default), will now search the top 10,000 open source repositories from GitHub (ordered by watch count) if a [`repo` filter](https://docs.sourcegraph.com/user/search/queries) was not provided. This means a query for a [distroless based Dockerfile](https://sourcegraph.com/search?q=file:Dockerfile+FROM+gcr.io/distroless) now returns a useful set of results to explore.

![](/blog/distroless-image-results.png)

## Sourcegraph.com as a research and usage discovery tool

Let's explore some research and usage possibilities, such as examples of [Python's Pipenv within Dockerfiles](https://sourcegraph.com/search?q=pipenv+f:Dockerfile):

![](/blog/pipenv-search.png)

Or how developers are using [React in Typescript](https://sourcegraph.com/search?q=react%5C.+lang:typescript):

![](/blog/react-typescript-search.png)

We're excited by the increased discoverability of code on [Sourcegraph.com](https://sourcegraph.com) for languages, packages, libraries, and frameworks. There is also the added benefit of [Sourcegraph.com](https://sourcegraph.com) working for a first time user (when they don't necessarily know the [`repo` filter](https://docs.sourcegraph.com/user/search/queries) exists).

Here are some additional searches:

 - [Dockerfile's for Python Flask apps using uwsgi: `file:Dockerfile ^FROM\s+python\: uwsgi flask`](https://sourcegraph.com/search?q=file:Dockerfile+%5EFROM%5Cs%2Bpython%5C:+uwsgi+flask+timeout:1000s+count:100)
 - [TypeScript examples using `tap` from RxJS: `lang:typescript rxjs tap\( timeout:1000s count:100`](https://sourcegraph.com/search?q=lang:typescript+rxjs+tap%5C%28+timeout:1000s+count:100)
 - [CockroachDB usage in Java: `cockroachdb lang:java`](https://sourcegraph.com/search?q=cockroachdb+lang:java)
 - [Prometheus client usage in Go: `lang:go ^\s*\"github.com/prometheus/client_golang`](https://sourcegraph.com/search?q=lang:go+%5E%5Cs*%5C%22github.com/prometheus/client_golang)
 - [References to Donald Knuth and "literate programming"](https://sourcegraph.com/search?q=knuth%5Cs*donald%7Cdonald%5Cs*knuth%7Cliterate%5Cs*programming+timeout:1000s+count:100)

## Want to help us build the ultimate open source code search engine?

We are a small, remote-first team of mostly engineers who love to code. Technologies that we use: Go, TypeScript, React, RxJS, GraphQL, Docker + Kubernetes.

If you are passionate about making the world better through software:

<a href="https://github.com/sourcegraph/careers/" class="btn btn-primary mt-4">Apply for a Sourcegraph engineering role now!</a>
