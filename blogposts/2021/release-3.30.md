---
title: "Sourcegraph 3.30 release"
publishDate: 2021-07-20T10:00-07:00
description: "The Sourcegraph 3.30 release introduces support for publishing or unpublishing changesets from the GUI, a new search reference to the search results sidebar, and Code Insights dashboards."
tags: [blog, release]
slug: "release/3.30"
published: false
changelogItems:
  - description: "Added support for `select:file.directory` in search queries, which returns unique directory paths for results that satisfy the query."
    url: https://github.com/sourcegraph/sourcegraph/pull/22449
    category: Search
  - description: You can now use a new bulk operation to close many changesets at once in Batch Changes.
    url: https://github.com/sourcegraph/sourcegraph/pull/22547
    category: Batch Changes
  - description: Backend Code Insights will aggregate viewable repositories based on the authenticated user.
    url: https://github.com/sourcegraph/sourcegraph/pull/22471
    category: Repositories
  - description: All `.frugal` files will now be displayed with Thrift syntax highlighting.
    url:
    category:
  - description: "Added `file:contains.content(regexp)` predicate, which filters only to files that contain matches of the given pattern."
    url: https://github.com/sourcegraph/sourcegraph/pull/22666
    category: Search
  - description: "Repository syncing is now done in streaming mode by default. Customers with many repositories should notice code host updates much faster, with repo-updater consuming less memory. Using the previous batch mode can be done by setting the `ENABLE_STREAMING_REPOS_SYNCER` environment variable to `false` in `repo-updater`. That environment variable will be deleted in the next release."
    url: https://github.com/sourcegraph/sourcegraph/pull/22756
    category: Batch Changes
  - description: Enabled the ability to query Batch Changes changesets, changesets stats, and file diff stats for an individual repository via the Sourcegraph GraphQL API.
    url: https://github.com/sourcegraph/sourcegraph/pull/22744/
    category: Batch Changes
  - description: "Added \"Groovy\" to the initial `lang:` filter suggestions in the search bar."
    url: https://github.com/sourcegraph/sourcegraph/pull/22755
    category: Search
  - description: "The `lang:` filter suggestions now show all supported, matching languages as the user types a language name."
    url: https://github.com/sourcegraph/sourcegraph/pull/22765
    category: Search
  - description: Code Insights can now be grouped into dashboards.
    url: https://github.com/sourcegraph/sourcegraph/issues/22215
    category:
  - description: "Batch Changes changesets can now be published from the Sourcegraph UI."
    url: https://docs.sourcegraph.com/batch_changes/how-tos/publishing_changesets#within-the-ui
    category: Batch Changes
  - description: The repository page now has a new button to view Batch Change changesets created in that specific repository, with a badge indicating how many changesets are currently open.
    url: https://github.com/sourcegraph/sourcegraph/pull/22804
    category: Batch Changes
  - description: "Experimental: Search-based Code Insights can run over all repositories on the instance. To enable, use the feature flag `\"experimentalFeatures\": { \"codeInsightsAllRepos\": true }`."
    url: https://github.com/sourcegraph/sourcegraph/issues/22759
    category: Search
  - description: "Experimental: Search-based code insights can run over all repositories on the instance. To enable, use the feature flag `\"experimentalFeatures\": { \"codeInsightsAllRepos\": true }` and tick the checkbox in the insight creation/edit UI."
    url: https://github.com/sourcegraph/sourcegraph/issues/22759
    category: Search
  - description: Search References is a new search sidebar section to simplify learning about the available search filters directly where they are used.
    url: https://github.com/sourcegraph/sourcegraph/issues/21539
    category: Search
  - description: Backend Code Insights only fills historical data frames that have changed to reduce the number of searches required.
    url: https://github.com/sourcegraph/sourcegraph/pull/22298
    category: Search
  - description: Backend Code Insights displays data points for a fixed 6 months period in 2 week intervals, and will carry observations forward that are missing.
    url: https://github.com/sourcegraph/sourcegraph/pull/22298
    category:
  - description: Backend Code Insights now aggregate over 26 weeks instead of 6 months.
    url: https://github.com/sourcegraph/sourcegraph/pull/22527
    category:
  - description: "Search queries now disallow specifying `rev:` without `repo:`. Note that to search across potentially multiple revisions, a query like `repo:.* rev:\u003crevision\u003e` remains valid."
    url: https://github.com/sourcegraph/sourcegraph/pull/22705
    category: Search
  - description: The extensions status bar on diff pages has been redesigned and now shows information for both the base and head commits.
    url: https://github.com/sourcegraph/sourcegraph/pull/22123/files
    category:
  - description: "The `applyBatchChange` and `createBatchChange` mutations now accept an optional `publicationStates` argument to set the publication state of specific changesets within the batch change. [#22485](https://github.com/sourcegraph/sourcegraph/pull/22485) and"
    url: https://github.com/sourcegraph/sourcegraph/pull/22854
    category: Batch Changes
  - description: Search queries now return up to 80 suggested filters. Previously we returned up to 24.
    url: https://github.com/sourcegraph/sourcegraph/pull/22863
    category: Search
  - description: "GitHub code host connections can now include `repositoryQuery` entries that match more than 1000 repositories from the GitHub search API without requiring the previously document work-around of splitting the query up with `created:` qualifiers, which is now done automatically."
    url: https://github.com/sourcegraph/sourcegraph/issues/2562
    category: Search
  - description: Listing Github Entreprise org repos now returns internal repos as well.
    url: https://github.com/sourcegraph/sourcegraph/pull/22339
    category: Repositories
  - description: "Jaeger works in Docker-compose deployments again."
    url: https://github.com/sourcegraph/sourcegraph/pull/22691
    category: Admin
  - description: "A bug where the pattern `)` makes the browser unresponsive."
    url: https://github.com/sourcegraph/sourcegraph/pull/22738
    category:
  - description: "An issue where using `select:repo` in conjunction with `and` patterns did not yield expected repo results."
    url: https://github.com/sourcegraph/sourcegraph/pull/22743
    category: Repositories
  - description: "The `isLocked` and `isDisabled` fields of GitHub repositories are now fetched correctly from the GraphQL API of GitHub Enterprise instances. Users that rely on the `repos` config in GitHub code host connections should update so that locked and disabled repositories defined in that list are actually skipped."
    url: https://github.com/sourcegraph/sourcegraph/pull/22788
    category: API
  - description: "Homepage no longer fails to load if there are invalid entries in user's search history."
    url: https://github.com/sourcegraph/sourcegraph/pull/22857
    category: Search
  - description: An issue where regexp query highlighting in the search bar would render incorrectly on Firefox.
    url: https://github.com/sourcegraph/sourcegraph/pull/23043
    category: Search
# Removed
  - description: "The experimental paginated search feature (the `stable:` keyword) has been removed, to be replaced with streaming search."
    url: https://github.com/sourcegraph/sourcegraph/pull/22428
    category: Search
  - description: The experimental extensions view page has been removed.
    url: https://github.com/sourcegraph/sourcegraph/pull/22565
    category:
  - description: "A search query diagnostic that previously warned the user when quotes are interpreted literally has been removed. The literal meaning has been Sourcegraph's default search behavior for some time now."
    url: https://github.com/sourcegraph/sourcegraph/pull/22892
    category: Search
  - description: "API docs is enabled by default in Sourcegraph 3.30.0. It can be disabled by adding `\"apiDocs\": false` to the `experimentalFeatures` section of user settings."
    url:
    category: API Docs
---

Sourcegraph 3.30 is now available! For this release, we introduced:

## Update

### Batch Changes: Publish and unpublish changesets from the GUI

Batch Changes features a powerful idempotent [spec-based workflow](https://docs.sourcegraph.com/batch_changes/explanations/batch_changes_design), where the spec file defines the batch change. In particular, the [`published`](https://docs.sourcegraph.com/batch_changes/references/batch_spec_yaml_reference#changesettemplate-published) property defines if changesets are published to the codehost or not.

This workflow is great for reproducibility and having a completely CLI-based workflow, and we are keeping it!

_In addition_, we are allowing changesets to be published and unpublished directly from the GUI, to make the workflow more approachable to new users. Simply omit the `published` field in the specs, and the GUI will become the source of truth for publishing changesets.

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/3.30/publish-from-gui.gif" alt="Publish changesets from GUI demo" />

### New code search reference

* We've added a new search reference to the search results sidebar. The search reference lists search filters which can be expanded to display documentation and examples. The reference can be used to learn about filters or as a shortcuts to using the fitlers in queries. 

<!--TODO a small GIF a user clicking a repo: filter and using autocomplete to resolve github.com\/sourcegraph/sourcgraph$ -->

### Code Insights dashboards 

<p><video autoplay loop muted playsinline style="width:600px">
  <source src="https://sourcegraphstatic.com/blog/3.30/insights_dashboards.mp4" type="video/mp4">
 </video></p>

You can now add your code insights to individual dashboard pages, in order to group and share a contextual subest of all created insights. Dashboards can have one of three possible visibility scopes: private, users in your organization, or global. For more on dashboards, [see the docs](TODO_ADD_DOCS_LINK). 
