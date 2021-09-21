---
title: 'Sourcegraph 3.32 release'
publishDate: 2021-09-20T10:00-07:00
description: 'Sourcegraph 3.32 introduces UPDATE'
tags: [blog, release]
slug: 'release/3.32'
published: false
heroImage:
socialImage:
changelogItems:
  # Added
  - description: The search sidebar shows a revisions section if all search results are from a single repository. This makes it easier to search in and switch between different revisions.
    url: https://github.com/sourcegraph/sourcegraph/pull/23835
    category: Search
  - description: The various alerts overview panels in Grafana can now be clicked to go directly to the relevant panels and dashboards.
    url: https://github.com/sourcegraph/sourcegraph/pull/24920
    category:
  - description: 'Added a `Documentation` tab to the Site Admin Maintenance panel that links to the official Sourcegraph documentation.'
    url: https://github.com/sourcegraph/sourcegraph/pull/24917
    category: Admin
  - description: Code Insights that run over all repositories now generate a moving daily snapshot between time points.
    url: https://github.com/sourcegraph/sourcegraph/pull/24804
    category: Repositories
  - description: The Code Insights GraphQL API now restricts the results to user, org, and globally scoped insights. Insights will be synced to the database with access associated to the user or org setting containing the insight definition.
    url: https://github.com/sourcegraph/sourcegraph/pull/25017
    category: API
  # Changed
  - description: '`allowGroupsPermissionsSync` in the GitHub authorization provider is now required to enable the experimental GitHub teams and organization permissions caching.'
    url: https://github.com/sourcegraph/sourcegraph/pull/24561
    category:
  - description: GitHub external code hosts now validate if a corresponding authorization provider is set, and emits a warning if not.
    url: https://github.com/sourcegraph/sourcegraph/pull/24526
    category:
  - description: Sourcegraph is now built with Go 1.17.
    url: https://github.com/sourcegraph/sourcegraph/pull/24566
    category:
  - description: Code Insights is now available only in the Sourcegraph enterprise.
    url: https://github.com/sourcegraph/sourcegraph/pull/24741
    category:
  - description: 'Prometheus in Sourcegraph with Docker Compose now scrapes Postgres and Redis instances for metrics. deploy-sourcegraph-docker#580'
    url: 'https://github.com/sourcegraph/deploy-sourcegraph-docker/pull/580'
    category:
  - description: Symbol suggestions now leverage optimizations for global searches.
    url: https://github.com/sourcegraph/sourcegraph/pull/24943
    category: Search
  # Fixed
  - description: 'Fixed a number of issues where repository permissions sync may fail for instances with very large numbers of repositories. [#24852](https://github.com/sourcegraph/sourcegraph/pull/24852),'
    url: https://github.com/sourcegraph/sourcegraph/pull/24972
    category: Repositories
  - description: 'Fixed excessive re-rendering of the whole web application on every keypress in the search query input.'
    url: https://github.com/sourcegraph/sourcegraph/pull/24844
    category: Search
  - description: 'Code Insights line chart now supports different timelines for each data series (lines).'
    url: https://github.com/sourcegraph/sourcegraph/pull/25005
    category:
  - description: Postgres exporter now exposes pg_stat_activity account to show the number of active DB connections.
    url: https://github.com/sourcegraph/sourcegraph/pull/25086
    category:
  # Removed
  - description: 'The `PRECISE_CODE_INTEL_DATA_TTL` environment variable is no longer read by the worker service. Instead, global and repository-specific data retention policies configurable in the UI by site-admins will control the length of time LSIF uploads are considered _fresh_.'
    url: https://github.com/sourcegraph/sourcegraph/pull/24793
    category: Admin
  - description: 'The `repo.cloned` column was removed as it was deprecated in 3.26.'
    url: https://github.com/sourcegraph/sourcegraph/pull/25066
    category: Repositories
---

Sourcegraph 3.32 is now available! For this release, we introduced:

## Feature

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

Now, site-admins can configure global and repository-specific data retention policies in the UI and can control the length of time LSIF uploads are considered fresh. You can read more about how to protect your precise code intelligence data in our [Configure precise code intelligence data retention policies](https://docs.sourcegraph.com/code_intelligence/how-to/configure_data_retention) documentation.
