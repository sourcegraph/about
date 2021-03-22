---
title: "Sourcegraph 3.26 release"
publishDate: 2021-03-20T10:00-07:00
description: "Sourcegraph 3.26 is released."
tags: [blog, release]
slug: "release/3.26"
published: true
changelogItems:
  - description: "Campaigns has been renamed to Batch Changes. If you were already using it under the previous name (campaigns), backwards compatibility has been preserved. See #18771 for a detailed log on what has been renamed."
    url: https://github.com/sourcegraph/sourcegraph/issues/18771
    category: Batch Changes
  - description: "From 3.27 onwards, Postgres 12 will be considered a minimum requirement for Sourcegraph to run."
    url: https://docs.sourcegraph.com/admin/postgres
    category: Admin
  - description: "Control where code insights are displayed through the boolean settings `insights.displayLocation.homepage`, `insights.displayLocation.insightsPage` and `insights.displayLocation.directory`."
    url: https://github.com/sourcegraph/sourcegraph/pull/18979
    category: Code Insights
     - description: Users can now create changesets in batch changes on repositories that are cloned using SSH.
    url: https://github.com/sourcegraph/sourcegraph/issues/16888
    category: Batch Changes
  - description: Code monitoring is now available by default for all Enterprise customers.
    url: https://docs.sourcegraph.com/code_monitoring
    category: Code Monitoring
  - description: "Sourcegraph is now built with Go 1.16."
    url: https://github.com/sourcegraph/sourcegraph/pull/18447
    category: Admin
  - description: "Syntax highlighting for Elixir, Elm, REG, Julia, Move, Nix, Puppet, VimL, and Coq is now supported."
    url: https://github.com/sourcegraph/sourcegraph/pull/19282
    category:
  - description: "New query field `select` enables you to specify the result type from the set of search results."
    url: https://docs.sourcegraph.com/code_search/reference/language#select
    category: Search
  - description: "Precision class indicators have been improved for code intelligence results in both the hover overlay as well as the definition and references locations panel."
    url: https://github.com/sourcegraph/sourcegraph/pull/18843
    category: Code Intelligence
- description: Searches are streamed into Sourcegraph by default.
    url: https://github.com/sourcegraph/sourcegraph/pull/19300
    category: Search
  - description: Opsgenie API keys can now be added via an environment variable.
    url: https://github.com/sourcegraph/sourcegraph/pull/18662
    category:
  - description: "New query field `select` enables returning only results of the desired type. See [documentation](https://docs.sourcegraph.com/code_search/reference/language#select) for details."
    url: https://github.com/sourcegraph/sourcegraph/pull/19236
    category: Search
  - description: "A repository's `remote.origin.url` is not stored on gitserver disk anymore. Note: if you use the experimental feature `customGitFetch` your setting may need to be updated to specify the remote URL."
    url: https://github.com/sourcegraph/sourcegraph/pull/18535
    category: Repositories
  - description: Repositories and files containing spaces will now render with escaped spaces in the query bar rather than being
    url:
    category: Repositories
  - description: "Cursor hover information in the search query bar will now display after 150ms (previously 0ms)."
    url: https://github.com/sourcegraph/sourcegraph/pull/18916
    category: Search
  - description: "The `repo.cloned` column is deprecated in favour of `gitserver_repos.clone_status`. It will be removed in a subsequent release."
    url:
    category: Repositories
  - description: Auto complete suggestions for repositories and files containing spaces will now be automatically escaped when accepting the suggestion.
    url: https://github.com/sourcegraph/sourcegraph/issues/18635
    category: Repositories
  - description: Closing a batch change now correctly closes the entailed changesets, when requested by the user.
    url: https://github.com/sourcegraph/sourcegraph/pull/18957
    category: Batch Changes
---
\* Please [contact Sourcegraph](https://about.sourcegraph.com/contact/sales/) with any licensing questions.
