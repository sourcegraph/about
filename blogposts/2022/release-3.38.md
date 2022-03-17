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
  - description: Code Insights will now periodically clean up data series that are not in use. There is a 1 hour grace period where the series can be reattached to a view, after which all of the time series data and metadata will be deleted.
    url: https://github.com/sourcegraph/sourcegraph/pull/32094
    category: Code Insights
  - description: 'Code Insights critical telemetry total count now only includes insights that are not frozen (limited by trial mode restrictions).'
    url: https://github.com/sourcegraph/sourcegraph/pull/32529
    category: Code Insights
  - description: 'Notebooks from private enterprise instances can now be embedded in external sites by enabling the `enable-embed-route` feature flag.'
    url: https://docs.sourcegraph.com/notebooks/notebook-embedding
    category: Notebooks
  - description: LSIF upload pages now include a section listing the reasons and retention policies resulting in an upload being retained and not expired.
    url: https://github.com/sourcegraph/sourcegraph/pull/30864
    category: Code Intelligence
  - description: 'Code monitoring now has a Logs tab enabled as a [Beta feature](https://docs.sourcegraph.com/admin/beta_and_experimental_features). This lets you see recent runs of your code monitors and determine if any notifications were sent or if there were any errors during the run.'
    url: https://github.com/sourcegraph/sourcegraph/pull/32292
    category: Admin
  - description: 'Searching for the pattern `//` with regular expression search is now interpreted literally and will search for `//`. Previously, the `//` pattern was interpreted as our regular expression syntax `/<regexp>/` which would in turn be intrpreted as the empty string. Since searching for an empty string offers little practical utility, we now instead interpret `//` to search for its literal meaning in regular expression search.'
    url: https://github.com/sourcegraph/sourcegraph/pull/31520
    category: Search
---

Sourcegraph 3.38 is now available! For this release, we introduced:

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

## Notebooks are improved with a host of new features

Notebooks have several new features in 3.38 to help your team better understand your codebase.

- You can now copy any existing Notebook to your own collection of Notebooks.
- We've created a new symbol block type. This block lets you find any symbol in a repository, and the block will display that symbol no matter where it moves within a file.
- Code Intelligence is now available in Notebook blocks, making Notebooks more intuitive to be used for onboarding and learning about your codebase.
- Embedding Notebooks is here. You can easily embed Notebooks from any Sourcegraph instance by embedding an iFrame anywhere, and setting `src` to `https://sourcegraph.com/notebooks/embed/<notebook_uuid/>`.

## Improved Code Intelligence performance for large repositories

We're introducing a new backend service, Rockskip, for search-based Code Intelligence, the symbol sidebar, and symbol search. Rockskip was architected with monorepos in mind, and it can index new commits much faster than the existing SQLite backend.

From 3.38 onwards, Rockskip can be turned on for specific repositories and it will make the symbol sidebar and search-based code intelligence much faster. If you're interested in turning this on for your repos, read more in the [docs](https://docs.sourcegraph.com/code_intelligence/explanations/rockskip) or [contact us](mailto:support@sourcegraph.com).

<img class="blog-image" title="Rockskip performance improvement" alt="Comparative chart showing impact of incremental indexing" src="https://storage.googleapis.com/sourcegraph-assets/docs/images/code-intelligence/rockskip-chart.png">

## Search your project dependencies for better incident resolution

[Dependencies search](https://docs.sourcegraph.com/code_search/how-to/dependencies_search) is a new beta feature that lets you search through the dependency packages of your repositories, and it is available for all users on 3.38. Looking into the code of your dependencies is particularly useful when you're trying to resolve incidents as fast as possible.

Dependencies search currently supports NPM, and more dependency repositories are coming soon.

## Configure custom language highlighting for file & extensions

In the past, it was not possible to configure what language a file was highlighted as without sending a Pull Request to Sourcegraph to update our global configuration for language detection. Now, if you have specific extensions or files that you want highlighted as a particular language, you can easily configure that in the site settings. This allows you to get accurate highlighting for custom languages, for example.

To learn more and set up custom language highlight, see our [documentation](https://docs.sourcegraph.com/dev/how-to/add_support_for_a_language#syntax-highlighting-support).
