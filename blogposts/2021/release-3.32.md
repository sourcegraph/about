---
title: 'Sourcegraph 3.32 release'
publishDate: 2021-09-23T10:00-07:00
description: 'Sourcegraph 3.32 introduces Code Insights in Public Beta, a new search sidebar for navigating revisions, improved search results caching, and custom LSIF data retention policies.'
tags: [blog, release]
slug: 'release/3.32'
published: false
heroImage:
socialImage:
changelogItems:
  - description: The search sidebar now shows a revisions section when all search results are from a single repository. This makes it easier to search in and switch between different revisions.
    url: https://github.com/sourcegraph/sourcegraph/pull/23835
    category: Search
  - description: The various alerts overview panels in Grafana can now be clicked to go directly to the relevant panels and dashboards.
    url: https://github.com/sourcegraph/sourcegraph/pull/24920
    category: Admin
  - description: '`allowGroupsPermissionsSync` in the GitHub authorization provider is now required to enable the experimental GitHub teams and organization permissions caching.'
    url: https://github.com/sourcegraph/sourcegraph/pull/24561
    category: Admin
  - description: Fixed a number of issues where repository permissions sync may fail for instances with very large numbers of repositories.
    url: https://github.com/sourcegraph/sourcegraph/pull/24972
    category: Repositories
  - description: 'Fixed excessive re-rendering of the web application on every keypress in the search query input.'
    url: https://github.com/sourcegraph/sourcegraph/pull/24844
    category: Search
  - description: 'The `PRECISE_CODE_INTEL_DATA_TTL` environment variable is no longer read by the worker service. Instead, global and repository-specific data retention policies configurable in the UI by site-admins will control the length of time LSIF uploads are considered _fresh_.'
    url: https://github.com/sourcegraph/sourcegraph/pull/24793
    category: Admin
---

Sourcegraph 3.32 is now available! Here are some highlights from this release:

## Code Insights is available in Public Beta

Code Insights is a new analytics tool that lets you track and understand what’s in your code and how it changes over time. You can find it via “Insights” in the main nav bar. It is free while in beta through 2021. When Code Insights is officially released, we may disable your use of it or charge for using it. We're still polishing Code Insights, so we appreciate if you [share any bugs or feedback about your experience](mailto:feedback@sourcegraph.com).

## Revisions sidebar

In the left sidebar of your search results, you can now see both branches and tags associated with a repository you’re viewing. When you add a search literal, such as “auth”, the search term will persist across searches, allowing you to quickly search between branches or tags for that search term.

## Result caching and improved back button behavior

We’re now caching search results so that when you click into a file from the search results page and then navigate back to the results, the search results will no longer be reordered.

## Compute API endpoint

For Code Insights and API users, we’ve exposed a new compute endpoint that allows you to extract and aggregate data based on a regex. For example, you can search for React as a dependency in `package.json` and group your results by version number.

## LSIF data retention is now configurable via our UI

We've changed the way we think about LSIF data retention. Previously, precise code intelligence data was capped by a maximum age configured by the PRECISE_CODE_INTEL_DATA_TTL environment variable. This means that, regardless of how important some data was, it would be removed after it passed its expiry.

Now, site-admins can configure global and repository-specific data retention policies in the UI and can control the length of time LSIF uploads are considered fresh. Read more about how to [configure precise code intelligence data retention policies](https://docs.sourcegraph.com/code_intelligence/how-to/configure_data_retention) in our docs.
