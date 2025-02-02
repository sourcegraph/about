---
title: 'Sourcegraph 3.32 release'
publishDate: 2021-09-24T10:00-07:00
description: 'Sourcegraph 3.32 introduces a new search sidebar for navigating revisions, improved search results caching, and custom LSIF data retention policies.'
tags: [blog, release]
slug: 'release/3.32'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.32/sourcegraph-3-32-release.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.32/sourcegraph-3-32-release.png
changelogItems:
  - description: The search sidebar now shows a revisions section when all search results are from a single repository. This makes it easier to search in and switch between different revisions.
    url: https://github.com/sourcegraph/sourcegraph/pull/23835
    category: Search
  - description: The various alerts overview panels in Grafana can now be clicked on to go directly to the relevant panels and dashboards.
    url: https://github.com/sourcegraph/sourcegraph/pull/24920
    category: Admin
  - description: '`allowGroupsPermissionsSync` in the GitHub authorization provider is now required to enable the experimental GitHub teams and organizations permissions caching. Permissions caching can significantly reduce the amount of time it takes to perform a full permissions sync.'
    url: https://docs.sourcegraph.com/admin/repo/permissions#teams-and-organizations-permissions-caching
    category: Admin
  - description: Fixed a number of issues where repository permissions sync may fail for instances with very large numbers of repositories.
    url: https://github.com/sourcegraph/sourcegraph/pull/24972
    category: Repositories
  - description: 'Fixed excessive re-rendering of the web application on every keypress in the search query input.'
    url: https://github.com/sourcegraph/sourcegraph/pull/24844
    category: Search
  - description: 'The `PRECISE_CODE_INTEL_DATA_TTL` environment variable is no longer read by the worker service. Instead, site admins can configure global and repository-specific data retention policies in the UI to control the length of time LSIF uploads are considered _fresh_.'
    url: https://github.com/sourcegraph/sourcegraph/pull/24793
    category: Admin
---

Sourcegraph 3.32 is now available! Here are some highlights from this release:

## Revisions sidebar

In the left sidebar of your search results, you can now see both branches and tags associated with a repository you're viewing. When you add a search literal, such as “auth,” the search term will persist across searches, allowing you to search quickly between branches or tags for that search term.

<div style={{textAlign:'center'}}><video autoPlay loop muted playsInline style={{width:'625px'}}>
  <source src="https://storage.googleapis.com/sourcegraph-assets/blog/3.32/search_revisions_sidebar.mp4" type="video/mp4" data-cookieconsent="ignore"/>
</video></div>

## Search caching and improved back button behavior

We're now caching search results for an improved user experience. When you click into a file from the search results page and then navigate back, the results will now always appear in the same order they appeared previously.

## LSIF data retention is now configurable via our UI

We've changed the way we think about LSIF data retention. Previously, precise Code Intelligence data was capped by a maximum age configured by the PRECISE_CODE_INTEL_DATA_TTL environment variable. This means that, regardless of how important some data was, it would be removed after it passed its expiry.

Now, site admins can configure global and repository-specific data retention policies in the UI and can control the length of time LSIF uploads are considered fresh. This allows teams to match data retention policies against the specific commit and merge workflows of each repository. Read more about how to [configure precise Code Intelligence data retention policies](https://docs.sourcegraph.com/code_intelligence/how-to/configure_data_retention) in our docs.
