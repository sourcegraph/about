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

## Code Insights is generally available

[Code Insights](https://docs.sourcegraph.com/code_insights) became generally available on March 10th. Code Insights reveals high-level information about your codebase, based on both how your code changes over time and its current state. You can learn more about why we built Code Insights in [the announcement from our CEO](https://about.sourcegraph.com/blog/announcing-code-insights/).

Any Sourcegraph instance can create up to two code insights, even without a trial or license.

<div class="container my-4 video-embed embed-responsive embed-responsive-16by9">
  <iframe
    class="embed-responsive-item"
    src="https://www.youtube-nocookie.com/embed/fMCUJQHfbUA?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
    allowfullscreen="true"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    frameborder="0"
    title="Sourcegraph Code Insights demo"
  ></iframe>
</div>

## Notebooks (Beta)

Notebooks continue their rapid beta evolution with some exciting new features:
- Copy any existing Notebook to your own Notebooks and modify it
- A new symbol block type that lets you find any symbol in a repository and create a block that will display it no matter where it moves within its file
- Code Intelligence is now available in Notebook blocks, making Notebooks even more valuable for onboarding and learning about your codebase
- Embedding Notebooks is here. You can easily embed Notebooks from Sourcegraph.com or your on-prem instance by embedding an iFrame anywhere, and setting the `src` to https://sourcegraph.com/notebooks/embed/<notebook_uuid/>

## Code mmonitoring
- Code monitoring has a new logs page (in Beta for all users) which shows the history and successes (or errors) of your code monitors
