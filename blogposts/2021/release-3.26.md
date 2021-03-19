---
title: "Sourcegraph 3.26 release"
publishDate: 2021-03-20T10:00-07:00
description: "Sourcegraph 3.26 is released."
tags: [blog, release]
slug: "release/3.26"
published: true
changelogItems:
  - description: "From 3.27 onwards Postgres 12 will be considered a minimum requirement for Sourcegraph to run."
    url: https://docs.sourcegraph.com/admin/postgres
    category: Admin
  - description: "Opsgenie API keys can now be added via an environment variable."
    url: https://github.com/sourcegraph/sourcegraph/pull/18662
    category: Admin
  - description: "It's now possible to control where code insights are displayed through the boolean settings `insights.displayLocation.homepage`, `insights.displayLocation.insightsPage` and `insights.displayLocation.directory`."
    url: https://github.com/sourcegraph/sourcegraph/pull/18979
    category: Code Insights
  - description: "Campaigns has been renamed to Batch Changes. If you were already using the functionality under the previous name (campaigns), backwards compatibility has been preserved. See #18771 for a detailed log on what has been renamed."
    url: https://github.com/sourcegraph/sourcegraph/issues/18771
    category: Batch Changes
  - description: "A repository's `remote.origin.url` is not stored on gitserver disk anymore. Note: if you use the experimental feature `customGitFetch` your setting may need to be updated to specify the remote URL."
    url: https://github.com/sourcegraph/sourcegraph/pull/18535
    category: Repositories
  - description: Repositories and files containing spaces will now render with escaped spaces in the query bar rather than being
    url:
    category: Repositories
  - description: Sourcegraph is now built with Go 1.16.
    url: https://github.com/sourcegraph/sourcegraph/pull/18447
    category: Admin
  - description: "Cursor hover information in the search query bar will now display after 150ms (previously 0ms)."
    url: https://github.com/sourcegraph/sourcegraph/pull/18916
    category: Search
  - description: Auto complete suggestions for repositories and files containing spaces will now be automatically escaped when accepting the suggestion.
    url: https://github.com/sourcegraph/sourcegraph/issues/18635
    category: Repositories
  - description: Closing a batch change now correctly closes the entailed changesets, when requested by the user.
    url: https://github.com/sourcegraph/sourcegraph/pull/18957
    category: Batch Changes
# Removed
  - description: "Removed the deprecated GraphQL fields `SearchResults.repositoriesSearched` and `SearchResults.indexedRepositoriesSearched`."
    url:
    category: Search
  - description: "Removed the deprecated search field `max`"
    url:
    category: Search
---
\* Please [contact Sourcegraph](https://about.sourcegraph.com/contact/sales/) with any licensing questions.
