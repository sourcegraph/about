---
title: "Sourcegraph 3.30 release"
publishDate: 2021-07-20T10:00-07:00
description: "Sourcegraph 3.30 introduces support for publishing batch changes from the UI, Code Insights dashboards, a new search reference in the search sidebar, and experimental API docs."
tags: [blog, release]
slug: "release/3.30"
published: true
heroImage: https://sourcegraphstatic.com/blog/3.30/sourcegraph-3-30-live.png
socialImage: https://sourcegraphstatic.com/blog/3.30/sourcegraph-3-30-live.png
changelogItems:
  - description: "Batch Changes changesets can now be published from the Sourcegraph UI."
    url: https://docs.sourcegraph.com/batch_changes/how-tos/publishing_changesets#within-the-ui
    category: Batch Changes
  - description: Code Insights can now be grouped into dashboards.
    url: https://github.com/sourcegraph/sourcegraph/issues/22215
    category: Code Insights
  - description: Search References is a new search sidebar section to simplify learning about the available search filters directly where they are used.
    url: https://github.com/sourcegraph/sourcegraph/issues/21539
    category: Search
  - description: "API docs is enabled by default in Sourcegraph 3.30.0. It can be disabled by adding `\"apiDocs\": false` to the `experimentalFeatures` section of user settings."
    url: https://about.sourcegraph.com/blog/api-documentation-for-all-your-code/
    category: API Docs
  - description: "Repository syncing is now done in streaming mode by default. Customers with many repositories should notice code host updates much faster, with repo-updater consuming less memory. Using the previous batch mode can be done by setting the `ENABLE_STREAMING_REPOS_SYNCER` environment variable to `false` in `repo-updater`. That environment variable will be deleted in the next release."
    url: https://github.com/sourcegraph/sourcegraph/pull/22756
    category: Performance
  - description: "Added support for `select:file.directory` in search queries, which returns unique directory paths for results that satisfy the query."
    url: https://github.com/sourcegraph/sourcegraph/pull/22449
    category: Search
  - description: "Added `file:contains.content(regexp)` predicate, which filters only to files that contain matches of the given pattern."
    url: https://github.com/sourcegraph/sourcegraph/pull/22666
    category: Search
  - description: You can now use a new bulk operation to close many changesets at once in Batch Changes.
    url: https://github.com/sourcegraph/sourcegraph/pull/22547
    category: Batch Changes
  - description: All `.frugal` files will now be displayed with Thrift syntax highlighting.
    url: https://github.com/sourcegraph/sourcegraph/pull/22625
    category: Code Browsing
  - description: Enabled the ability to query Batch Changes changesets, changesets stats, and file diff stats for an individual repository via the Sourcegraph GraphQL API.
    url: https://github.com/sourcegraph/sourcegraph/pull/22744/
    category: Batch Changes
  - description: The repository page now has a new button to view Batch Change changesets created in that specific repository, with a badge indicating how many changesets are currently open.
    url: https://github.com/sourcegraph/sourcegraph/pull/22804
    category: Batch Changes
  - description: "Experimental: Search-based Code Insights can run over all repositories on the instance. To enable, use the feature flag `\"experimentalFeatures\": { \"codeInsightsAllRepos\": true }`."
    url: https://github.com/sourcegraph/sourcegraph/issues/22759
    category: Code Insights
  - description: "Search queries now disallow specifying `rev:` without `repo:`. Note that to search across potentially multiple revisions, a query like `repo:.* rev:\u003crevision\u003e` remains valid."
    url: https://github.com/sourcegraph/sourcegraph/pull/22705
    category: Search
  - description: The extensions status bar on diff pages has been redesigned and now shows information for both the base and head commits.
    url: https://github.com/sourcegraph/sourcegraph/pull/22123/files
    category: Extensions
  - description: Search queries now return up to 80 suggested filters. Previously we returned up to 24.
    url: https://github.com/sourcegraph/sourcegraph/pull/22863
    category: Search
  - description: "The `lang:` filter suggestions now show all supported, matching languages as the user types a language name."
    url: https://github.com/sourcegraph/sourcegraph/pull/22765
    category: Search
---

Sourcegraph 3.30 is now available! For this release, we introduced:

## Batch Changes: Publish and unpublish changesets from the GUI

Batch Changes features a powerful idempotent [spec-based workflow](https://docs.sourcegraph.com/batch_changes/explanations/batch_changes_design), where the spec file defines the batch change. In particular, the [`published`](https://docs.sourcegraph.com/batch_changes/references/batch_spec_yaml_reference#changesettemplate-published) property defines if changesets are published to the codehost or not.

This workflow is great for reproducibility and having a completely CLI-based workflow, and we are keeping it!

_In addition_, we are allowing changesets to be published and unpublished directly from the GUI, to make the workflow more approachable to new users. Simply omit the `published` field in the specs, and the GUI will become the source of truth for publishing changesets.

<p>
  <img src="https://storage.googleapis.com/sourcegraph-assets/blog/3.30/publish-from-gui.gif" width="625" alt="Publish changesets from GUI demo">
</p>

## Code Insights dashboards

You can now add your code insights to individual dashboard pages, in order to group and share a contextual subset of all created insights. Dashboards can have one of three possible visibility scopes: private, users in your organization, or global. For more on dashboards, [see the docs](https://docs.sourcegraph.com/code_insights/explanations/viewing_code_insights#insights-dashboards).

<p><video autoplay loop muted playsinline style="width:625px">
  <source src="https://sourcegraphstatic.com/blog/3.30/insights_dashboards.mp4" type="video/mp4">
</video></p>

## New code search reference

We've added a new search reference to the search results sidebar. The search reference lists search filters which can be expanded to display documentation and examples. The reference can be used to learn about filters or as a shortcut to using the filters in queries.

<p>
  <img src="https://storage.googleapis.com/sourcegraph-assets/blog/redesign/search-ref.gif" width="625" alt="Search reference demo">
</p>

## Introducing API docs

Try out our brand new experimental feature that builds on top of Sourcegraph's semantic understanding of your code to analyze and generate API documentation. We're starting with Golang and would love to hear from you what language we should tackle next.

Read the [Sneak peek: API documentation generated for all your code](./api-documentation-for-all-your-code.md) blog post for more details.

<p>
  <img src="https://sourcegraphstatic.com/blog/api-docs/api-docs.png" width="625" alt="Sourcegraph's new API docs feature">
</p>
