---
title: 'Sourcegraph 3.36 release'
publishDate: 2022-01-21T10:00-07:00
description: 'Sourcegraph 3.36 introduces Notebooks and query-based search contexts in Beta, a new file fuzzy finder, and the ability to push branches from batch changes to forks.'
tags: [blog, release]
slug: 'release/3.36'
published: false
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.36/sourcegraph-3-36-release.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.36/sourcegraph-3-36-release.png
changelogItems:
  # Added
  - description: 'Search contexts can now be defined with a restricted search query, allowing them to be used for subsections of monorepos or selective groupings of repos. Allowed filters: `repo`, `rev`, `file`, `lang`, `case`, `fork`, `visibility`. `OR`, `AND` expressions are also allowed. This is a `Beta` feature and may change in following releases.'
    url: https://docs.sourcegraph.com/code_search/how-to/search_contexts#beta-query-based-search-contexts
    category: Search
  - description: 'Batch changes will be created on forks of the upstream repository if the new `batchChanges.enforceForks` site setting is enabled, allowing users with restricted repository access to take advantage of Batch Changes.'
    url: https://github.com/sourcegraph/sourcegraph/issues/17879
    category: Batch Changes
  - description: 'Notebooks are now fully persistable and can be shared via a unique URL. We support two visibility modes: private (only the creator can view the notebook) and public (everyone can view the notebook). This is a `Beta` feature and may change in following releases.'
    url: https://github.com/sourcegraph/sourcegraph/issues/27384
    category: Search
  - description: 'Search results across repositories are now ordered by repository rank to make results more relevant. By default the rank is the number of stars a repository has. An administrator can inflate the rank of a repository via `experimentalFeatures.ranking.repoScores`. If you notice increased latency in results, you can disable this feature by setting `experimentalFeatures.ranking.maxReorderQueueSize` to 0.'
    url: https://github.com/sourcegraph/sourcegraph/pull/29856
    category: Search
  - description: 'Symbolic links are now searchable to make files easier to find. Previously it was possible to navigate to symbolic links in the repository tree view, however the symbolic links were ignored during searches.'
    url: https://github.com/sourcegraph/zoekt/pull/237
    category: Search
  - description: "Sourcegraph's API (streaming search, GraphQL, etc.) may now be used from any domain when using an access token for authentication, or with no authentication in the case of Sourcegraph.com."
    url: https://github.com/sourcegraph/sourcegraph/pull/28775
    category: API
  - description: 'The endpoint `/search/stream` will be retired in favor of `/.api/search/stream`. This requires no action unless you have developed custom code against `/search/stream`. We will support both endpoints for a short period of time before removing `/search/stream`. Please refer to the documentation for more information.'
    url: https://docs.sourcegraph.com/api/stream_api
    category: API
---

Sourcegraph 3.36 is now available! Here are some highlights from this release:

## Push new branches from Batch Changes to forks

Before this release, creating a batch change required you (or your service-account) to have write-access to every target repository. This was incompatible with having tight repository access control, and was impractical at a large scale; you want all users to be able to create batch changes on all repositories, but also not grant them overly broad write permissions.

That's why we are introducing [batch changes on forks](https://docs.sourcegraph.com/admin/config/batch_changes), which makes it possible for branches created by Batch Changes to be pushed to a fork of the repository rather than the repository itself. This solves those access control challenges and lets you safely enable Batch Changes for everyone. In Sourcegraph 3.36, this is an instance setting that can be turned either on or off for all users, and is off by default.

## Find repo files faster with fuzzy finder

We're excited to introduce a new fuzzy file finder which can help you quickly open a file from your repository. The keyboard shortcut to activate it is Cmd+K on macOS, or Ctrl+K on Linux/Windows. Note that it will only activate when you're on repository-related pages, such as the repository overview page for example.

<img class="blog-image" title="Fuzzy finder" alt="An example of using fuzzy finder to navigate to test files within the sourcegraph/sourcegraph repo." src="https://storage.googleapis.com/sourcegraph-assets/blog/3.36/fuzzyfinder.gif">

## Document your code searches with Notebooks

We're excited to announce that [Notebooks](https://sourcegraph.com/notebooks) have moved out of Experimental and into Beta! Notebooks are a great way to document code and codebases to onboard new team members, keep track of bug resolutions, or record search examples to share with teammates. Recently, we published a public [Notebook](https://sourcegraph.com/notebooks/Tm90ZWJvb2s6MQ==) to identify log4j dependencies. Notebooks are shareable, and you can star ones you find useful to keep track of them or to help others find useful Notebooks.

To try them out, make sure Notebooks are enabled in your settings (by setting `showSearchNotebook` to `true` under the `experimentalFeatures` property.) Once you have Notebooks enabled, go ahead and [explore](https://sourcegraph.com/notebooks?tab=explore) some public notebooks.

## Scope searches on monorepos and large codebases with query-based search contexts

Search contexts can now be defined with a restricted search query as an alternative to a specific list of repositories and revisions, a new feature we're launching in Beta.

What does this mean for users? First, this provides search context support for monorepos. Second, and just as impactful, users with thousands of repositories and different teams or sub-organizations can easily define dynamic search contexts with a query. No more specifying dozens or hundreds (or more!) repositories and keeping the list up to date.

You can also now create new search contexts right from the search results page. Once you've enabled query-based search contexts, you'll see a Create context button above the search results. Check the [docs](https://docs.sourcegraph.com/code_search/how-to/search_contexts#beta-query-based-search-contexts) to learn more about how to enable and use query-based search contexts.
