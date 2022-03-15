---
title: 'Sourcegraph 3.38 release'
publishDate: 2022-03-21T10:00-07:00
description: 'Sourcegraph 3.38 introduces...'
tags: [blog, release]
slug: 'release/3.38'
published: false
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.38/sourcegraph-3-38-release.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.38/sourcegraph-3-38-release.png
changelogItems:
  - description: ''
    url:
    category:
---

Sourcegraph 3.38 is now available! For this release, we introduced:

## Rockskip

Rockskip is a new backend for search-based code intelligence, the symbol sidebar, and symbol search. Rockskip was architected with monorepos in mind, and it can index new commits much faster than the existing SQLite backend.

From 3.38 onwards, Rockskip can be turned on for specific repositories and it will make the symbol sidebar and search-based code intelligence much faster. If you're interested in turning this on for your repos, read more in the [docs](https://docs.sourcegraph.com/code_intelligence/explanations/rockskip) or [contact us](mailto:support@sourcegraph.com).

![Rockskip chart](https://storage.googleapis.com/sourcegraph-assets/docs/images/code-intelligence/rockskip-chart.png)

## Feature

Description
