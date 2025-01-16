---
title: 'Sourcegraph 3.34 release'
publishDate: 2021-11-24T10:00-07:00
description: "Sourcegraph 3.34 introduces helpful search tips when no results are returned, along with 'Find Implementations' support for Go."
tags: [blog, release]
slug: 'release/3.34'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.34/sourcegraph-3-34-release.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.34/sourcegraph-3-34-release.png
changelogItems:
  - description: 'Added a help page providing search tips if a search returns no results, making it easier to troubleshoot your query.'
    url: https://github.com/sourcegraph/sourcegraph/pull/26154
    category: Search
  - description: 'In order to reduce load on the Gitserver service on installations with a large number of repositories, the search indexer only polls repositories that have been marked as changed. If you notice index staleness you can try disabling by setting the environment variable `SRC_SEARCH_INDEXER_EFFICIENT_POLLING_DISABLED` on `sourcegraph-frontend`.'
    url: https://github.com/sourcegraph/sourcegraph/issues/27058
    category: Search
  - description: 'To help site admins debug issues with webhook delivery, we have added logging of incoming Batch Changes webhooks. By default, sites without encryption will log webhooks for three days and sites with encryption will not log webhooks.'
    url: https://docs.sourcegraph.com/admin/config/batch_changes#incoming-webhooks
    category: Admin
  - description: 'To allow writing to the `.github` directory in repositories, Batch Changes now requests the `workflow` scope on GitHub personal access tokens. If you have already configured a GitHub PAT for Batch Changes, we suggest adding this scope.'
    url: https://docs.sourcegraph.com/batch_changes/how-tos/configuring_credentials
    category: Batch Changes
  - description: "To increase search speed, the search UI's repository count and the GraphQL API's `search().repositories`/`search().repositoriesCount` have changed semantics from being the set of searchable repositories to the set of repositories with matches. In a future release, we'll introduce separate fields for searchable repositories."
    url: https://github.com/sourcegraph/sourcegraph/issues/26995
    category: Search
  - description: 'Version contexts and `repogroup` filters (deprecated in v3.33) have been removed in favor of search contexts.'
    url: https://about.sourcegraph.com/blog/introducing-search-contexts/
    category: Search
  - description: 'Saved search notifications (deprecated in v3.31.0) have been removed in favor of code monitoring.'
    url: https://docs.sourcegraph.com/code_monitoring
    category: Search
---

Sourcegraph 3.34 is now available! Here are some highlights from this release:

## Troubleshoot your searches with the "no results" page

Searches that return no results can result in a confusing experience. When this occurs, we now display helpful tips on how to use search, examples of how to solve common query issues, and links to tutorial videos addressing common use cases.

<Figure 
  alt="This image shows the new no results page, with resources available to troubleshoot your search when no results are returned." 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/3.34/no_results_page.png"
/>

## Quickly navigate your Go code with Find Implementations

If you have precise code intelligence enabled for your Go repositories, you can now click on "Find Implementations" to navigate to a symbol's interface definition. If you're at the interface definition itself, clicking on the same button will show all the places where the interface is being implemented, allowing you to explore how it's being used by other users across repositories. It can also show you which interfaces a struct implements.

<Figure 
  alt="Find implementations for Go" 
  src="https://user-images.githubusercontent.com/1657213/142938393-7aed0c41-28b8-4cab-bf0d-2f9fd7f1078c.png"
/>
