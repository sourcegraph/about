---
title: 'Sourcegraph 3.36 release'
publishDate: 2022-01-21T10:00-07:00
description: 'Sourcegraph 3.36 introduces...'
tags: [blog, release]
slug: 'release/3.36'
published: false
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.36/sourcegraph-3-36-release.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.36/sourcegraph-3-36-release.png
changelogItems:
# Added
  - description: "Search contexts can now be defined with a restricted search query as an alternative to a specific list of repositories and revisions. This feature is _beta_ and may change in the following releases. Allowed filters: `repo`, `rev`, `file`, `lang`, `case`, `fork`, `visibility`. `OR`, `AND` expressions are also allowed. To enable this feature to all users, set `experimentalFeatures.searchContextsQuery` to true in global settings. You'll then see a \"Create context\" button from the search results page and a \"Query\" input field in the search contexts form. If you want revisions specified in these query based search contexts to be indexed, set `experimentalFeatures.search.index.query.contexts` to true in site configuration."
    url: https://github.com/sourcegraph/sourcegraph/pull/29327
    category: Search
  - description: More explicit Terms of Service and Privacy Policy consent has been added to Sourcegraph Server.
    url: https://github.com/sourcegraph/sourcegraph/issues/28716
    category: 
  - description: "Batch changes will be created on forks of the upstream repository if the new `batchChanges.enforceForks` site setting is enabled."
    url: https://github.com/sourcegraph/sourcegraph/issues/17879
    category: Batch Changes
  - description: "Symbolic links are now searchable. Previously it was possible to navigate to symbolic links in the repository tree view, however the symbolic links were ignored during searches. [#29567](https://github.com/sourcegraph/sourcegraph/pull/29567),"
    url: https://github.com/sourcegraph/zoekt/pull/237
    category: Search
  - description: "Maximum number of references/definitions shown in panel can be adjusted in settings with `codeIntelligence.maxPanelResults`. If not set, a hardcoded limit of 500 was used."
    url: https://github.com/sourcegraph/sourcegraph/29629
    category: 
  - description: "Search notebooks are now fully persistable. You can create notebooks through the WYSIWYG editor and share them via a unique URL. We support two visibility modes: private (only the creator can view the notebook) and public (everyone can view the notebook). This feature is _beta_ and may change in the following releases."
    url: https://github.com/sourcegraph/sourcegraph/issues/27384
    category: Search
# Changed
  - description: "Sourcegraph's API (streaming search, GraphQL, etc.) may now be used from any domain when using an access token for authentication, or with no authentication in the case of Sourcegraph.com."
    url: https://github.com/sourcegraph/sourcegraph/pull/28775
    category: Search
  - description: "The endpoint `/search/stream` will be retired in favor of `/.api/search/stream`. This requires no action unless you have developed custom code against `/search/stream`. We will support both endpoints for a short period of time before removing `/search/stream`. Please refer to the documentation for more information."
    url: https://docs.sourcegraph.com/api/stream_api
    category: Search
  - description: "When displaying the content of symbolic links in the repository tree view, we will show the relative path to the link's target instead of the target's content. This behavior is consistent with how we display symbolic links in search results."
    url: https://github.com/sourcegraph/sourcegraph/pull/29687
    category: Search
  - description: "A new janitor job, \"sg maintenance\" was added to gitserver. The new job replaces \"garbage collect\" with the goal to optimize the performance of git operations for large repositories. You can choose to enable \"garbage collect\" again by setting the environment variables \"SRC_ENABLE_GC_AUTO\" to \"true\" and \"SRC_ENABLE_SG_MAINTENANCE\" to \"false\" for gitserver. Note that you must not enable both options at the same time. #28224."
    url: https://github.com/sourcegraph/sourcegraph/pull/28224
    category: Repositories
  - description: "Search results across repositories are now ordered by repository rank by default. By default the rank is the number of stars a repository has. An administrator can inflate the rank of a repository via `experimentalFeatures.ranking.repoScores`. If you notice increased latency in results, you can disable this feature by setting `experimentalFeatures.ranking.maxReorderQueueSize` to 0."
    url: https://github.com/sourcegraph/sourcegraph/pull/29856
    category: Search
# Fixed
  - description: "Issue preventing searches from completing when certain patterns contain `@`."
    url: https://github.com/sourcegraph/sourcegraph/pull/29489
    category: Search
  - description: "The grafana dashboard for \"successful search request duration\" reports the time for streaming search which is used by the browser. Previously it reported the GraphQL time which the browser no longer uses."
    url: https://github.com/sourcegraph/sourcegraph/pull/29625
    category: Search
  - description: "A regression introduced in 3.35 causing Code Insights that are run over all repositories to not query against repositories that have permissions enabled. (Restricted repositories are and remain filtered based on user permissions when a user views a chart, not at query time.) This may cause global Insights to undercount for data points generated after upgrading to 3.35 and before upgrading to 3.36. [](https://github.com/sourcegraph/sourcegraph/pull/29725)"
    url: 
    category: Repositories
  - description: "Renaming repositories now removes the old indexes on Zoekt's disks. This did not affect search results, only wasted disk space. This was a regression introduced in Sourcegraph 3.33."
    url: https://github.com/sourcegraph/sourcegraph/issues/29685
    category: Search
# Removed
  - description: Removed unused backend service from Kubernetes deployments.
    url: "https://github.com/sourcegraph/deploy-sourcegraph/pull/4050"
    category: 
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
