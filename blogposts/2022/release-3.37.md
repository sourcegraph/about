---
title: 'Sourcegraph 3.37 release'
publishDate: 2022-02-22T10:00-07:00
description: 'Sourcegraph 3.37 introduces performance improvements for Code Intelligence, sharing for Notebooks, and a new UI for creating search contexts.'
tags: [blog, release]
slug: 'release/3.37'
published: false
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.37/sourcegraph-3-37-release.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.37/sourcegraph-3-37-release.png
changelogItems:
  - description: 'Code in search results is now selectable (e.g. for copying). Just clicking on the code continues to open the corresponding file as it did before.'
    url: https://github.com/sourcegraph/sourcegraph/pull/30033
    category: Search
  - description: 'Query-based search contexts are now enabled by default as a beta feature, making it easier to scope queries for monorepos or large codebases.'
    url: https://docs.sourcegraph.com/code_search/how-to/search_contexts#beta-query-based-search-contexts
    category: Search
  - description: 'Search Notebooks now support importing and exporting Markdown-formatted files.'
    url: https://github.com/sourcegraph/sourcegraph/issues/28586
    category: Search
  - description: 'GraphQL API: The order of events returned by `MonitorTriggerEventConnection` has been reversed so newer events are returned first. The `after` parameter has been modified accordingly to return events older the one specified, to allow for pagination. TODO'
    url: https://github.com/sourcegraph/sourcegraph/pull/
    category: API
  - description: Fixed a race condition in the precise code intel upload expiry process that prematurely expired new uploads.
    url: https://github.com/sourcegraph/sourcegraph/pull/30546
    category: Code Intelligence
  - description: 'Fixed performance issue in LSIF upload processing, reducing the latency between uploading an LSIF index and accessing precise code intel in the UI.'
    url: https://github.com/sourcegraph/sourcegraph/pull/31143
    category: Code Intelligence
  - description: 'Removed `experimentalFeature.showCodeMonitoringTestEmailButton`. Test emails can still be sent by editing the code monitor and expanding the "Send email notification" section.'
    url: https://github.com/sourcegraph/sourcegraph/pull/29953
    category: Code Monitors
---

Sourcegraph 3.37 is now available! For this release, we introduced:

## Code intelligence just got a whole lot faster

We're pleased to announce that LSIF index processing just got a whole lot faster! Earlier, certain LSIF indexes, especially for Javascript and Typescript, could take over 30 minutes to process. This meant that a long queue would build up with frequent uploads, such as those from a CI job that runs on every commit on a development branch. Now, most indexes should be processed in a few seconds instead of minutes so that you can access precise code intelligence soon after uploading an index.

<img class="blog-image" title="LSIF upload speedup" alt="Comparative chart before and after processing improvements." src="https://storage.googleapis.com/sourcegraph-assets/blog/3.37/lsif-upload-speedup.png">

The symbols sidebar also got a significant performance boost. Previously, the symbols sidebar would search for symbols in the whole directory tree even if you were only looking at a subdirectory or file, which would cause it to time out and show an error message on big monorepos. Now prefix queries like `^src/app` are better optimized and subdirectory searches are much faster and less likely to time out.

## Share Notebooks with your organization

Notebooks are now shareable within organizations. Previously, you could only share Notebooks with your entire instance (or share them publicly, in the case of Sourcegraph Cloud). This update allows you to create Notebooks with specific relevance to your organization, such as documentation of preferred engineering patterns or anti-patterns. Organizations' shared notebooks will now show up in their own tabs on the [Notebooks home page](https://sourcegraph.com/notebooks).

<img class="blog-image" title="Notebooks sharing" alt="Image of Notebooks sharing modal." src="https://storage.googleapis.com/sourcegraph-assets/docs/images/notebooks/notebook_sharing.png">

## Import and export Notebooks as markdown

Notebooks can now be created by uploading a markdown file, so if you're already working with markdown documentation files, you can simply upload those files to add Sourcegraph snippets and turn them into full-fledged Notebooks. You can also export Notebooks to markdown, allowing you to turn Sourcegraph Notebooks into repo-based markdown files.

## Create search contexts with the new UI

The search contexts creation UI has received visual tweaks, making it easier to understand if you're using search queries or JSON to define your contexts. We've also added guidance on valid expressions for query-based contexts to make the creation process clearer.

<img class="blog-image" title="Search contexts type selection" alt="Screenshot of search contexts configuration UI." src="https://storage.googleapis.com/sourcegraph-assets/docs/images/search_contexts/select_context_type.png">
