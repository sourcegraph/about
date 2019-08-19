---
title: "Search the top 10,000 open source repositories on Sourcegraph.com"
description: "How a hack week project made Sourcegraph.com easier to use, by searching the top 10k open source repositories on GitHub by default."
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

Wouldn't it be awesome if you could review, browse, and search code from the top ten thousand open source repositories on GitHub? You can, using [Sourcegraph.com](https://sourcegraph.com), and we've now made it easier to use!

## Using Sourcegraph.com like a regular search engine

[Sourcegraph.com](https://sourcegraph.com) indexes over 4 million open source repositories on GitHub! The only problem, was that a [`repo` filter](https://docs.sourcegraph.com/user/search/queries) was required to narrow the repository set to a manageable number, the downside of which, meant you had to know what repositories to search. This meant [Sourcegraph.com](https://sourcegraph.com) was missing out on a key use case⁠—random usage discovery.

Let's say you've recently heard about Google's [Distroless container image](https://github.com/GoogleContainerTools/distroless), and are curious about its usage. Previously, without specifying any repsoitories, your search would've returned this:

![](/blog/too-many-matching-repos.png)

After some [Sourcegraph.com](https://sourcegraph.com) specific code and infrastructure changes, Sourcegraph (by default), will now search the top 10,000 open source repositories from GitHub (ordered by watch count) if a [`repo` filter](https://docs.sourcegraph.com/user/search/queries) was not provided. This means a query for a [distroless based Dockerfile](https://sourcegraph.com/search?q=file:Dockerfile+FROM+gcr.io/distroless) now returns a useful set of results to explore.

![](/blog/distroless-image-results.png)

## Sourcegraph.com as a research and usage discovery tool

This exposes a huge amount of code discovery possibilities, such as examples of [Python's Pipenv within Dockerfiles](https://sourcegraph.com/search?q=pipenv+f:Dockerfile):

![](/blog/pipenv-search.png)

Or how developers are using [React in Typescript](https://sourcegraph.com/search?q=react%5C.+lang:typescript):

![](/blog/react-typescript-search.png)

We're excited by the increased discoverability of code on [Sourcegraph.com](https://sourcegraph.com) for languages, packages, libraries, and frameworks. There is also the added benefit of [Sourcegraph.com](https://sourcegraph.com) working for a first time user (when they don't necesssarily know the [`repo` filter](https://docs.sourcegraph.com/user/search/queries) exists).

Here are some additional searches:

- [Find code written by or inspired by Donald Knuth](https://sourcegraph.com/search?q=knuth)
- [Learn about blockchain](https://sourcegraph.com/search?q=blockchain)
- [Find code about deep learning](https://sourcegraph.com/search?q=%22deep+learning%22)
- [See examples of dynamic programming](https://sourcegraph.com/search?q=%22dynamic+programming%22)

## Want to help us build the ultimate open source code search engine?

We are a small, remote first, distributed team of mostly engineers who love to code. Technologies that we use: Go, TypeScript, React, RxJS, GraphQL, Docker + Kubernetes.

If you are passionate about making the world better through software:

<a href="https://github.com/sourcegraph/careers/" class="btn btn-primary mt-4">Apply for a Sourcegraph engineering role now!</a>
