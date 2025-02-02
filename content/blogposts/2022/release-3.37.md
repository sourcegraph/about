---
title: 'Sourcegraph 3.37 release'
publishDate: 2022-02-22T10:00-07:00
description: 'Sourcegraph 3.37 introduces Code Insights, performance improvements for Code Intelligence, sharing for Notebooks, and a new UI for creating search contexts.'
tags: [blog, release]
slug: 'release/3.37'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.37/sourcegraph-3-37-release.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.37/sourcegraph-3-37-release.png
changelogItems:
  - description: 'Code Insights is now Generally Available. Track anything that can be expressed with a Sourcegraph search query: migrations, package use, version adoption, code smells, codebase size, and much more, across 1,000s of repositories.'
    url: https://docs.sourcegraph.com/code_insights
    category: Code Insights
  - description: 'Code in search results is now selectable for easier copying and reuse. You can still click on the code to open the corresponding file.'
    url: https://github.com/sourcegraph/sourcegraph/pull/30033
    category: Search
  - description: 'Query-based search contexts are now enabled by default as a beta feature, making it easier to scope queries for monorepos or large codebases.'
    url: https://docs.sourcegraph.com/code_search/how-to/search_contexts#beta-query-based-search-contexts
    category: Search
  - description: 'GraphQL API: The order of events returned by `MonitorTriggerEventConnection` has been reversed so newer events are returned first. The `after` parameter has been modified accordingly to return events older than the one specified, to allow for pagination.'
    url: https://github.com/sourcegraph/sourcegraph/pull/31219
    category: API
  - description: Fixed a race condition in the precise Code Intelligence upload expiry process that prematurely expired new uploads.
    url: https://github.com/sourcegraph/sourcegraph/pull/30546
    category: Code Intelligence
  - description: 'Fixed performance issue in LSIF upload processing, reducing the latency between uploading an LSIF index and accessing precise Code Intelligence in the UI.'
    url: https://github.com/sourcegraph/sourcegraph/pull/31143
    category: Code Intelligence
---

Sourcegraph 3.37 is now available! For this release, we introduced:

## Track what really matters to you and your team with Code Insights

[Code Insights](https://docs.sourcegraph.com/code_insights) is now generally available. Code Insights transforms any search query into customizable, visual dashboards in seconds. Code Insights reveals high-level information about your codebase, based on both how your code changes over time and its current state.

If you're already using Sourcegraph, upgrade to 3.37 for a limited trial of Code Insights or reach out to your account team to purchase access to the full version.

<div className="container my-4 video-embed embed-responsive embed-responsive-16by9">
  <iframe
    className="embed-responsive-item"
    src="https://www.youtube-nocookie.com/embed/fMCUJQHfbUA?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
   allowFullScreen={true}
    allow="accelerometer; autoPlay; encrypted-media; gyroscope; picture-in-picture"
   frameBorder="0"
    title="Sourcegraph Code Insights demo"
  ></iframe>
</div>

## Code Intelligence LSIF indexing time has improved 30x (from 15m to 30s)

LSIF index processing just got a whole lot faster, so you can upload your indexes and start utilizing precise Code Intelligence immediately. Previously, certain LSIF indexes, especially for Javascript and Typescript, could take over 30 minutes to process. This meant that a long queue would build up with frequent uploads, such as those from a CI job that runs on every commit on a development branch. Now, most indexes should be processed in a few seconds instead of minutes so that you can access precise Code Intelligence soon after uploading an index.

<Figure 
  alt="Comparative chart before and after processing improvements." 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/3.37/lsif-upload-speedup.png"
/>

The symbols sidebar also got a significant performance boost. Previously, the symbols sidebar would search for symbols in the whole directory tree, even if you were only looking at a subdirectory or file, which would cause it to time out and show an error message on big monorepos. Now prefix queries like `^src/app` are better optimized and subdirectory searches are much faster and less likely to time out.

<Figure 
  alt="Comparative chart before and after symbol improvements." 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/3.37/symbols-sidebar-improvement.png"
/>

## Share Notebooks with your organization

Notebooks are now shareable within organizations. Previously, you could only share Notebooks with your entire instance (or share them publicly, in the case of Sourcegraph Cloud). This update allows you to create Notebooks with specific relevance to your organization, such as documentation of preferred engineering patterns or anti-patterns. Your organization's shared Notebooks will now show up in their own tabs on the [Notebooks home page](https://sourcegraph.com/notebooks).

<Figure
  alt="Image of Notebooks sharing modal." 
  src="https://storage.googleapis.com/sourcegraph-assets/docs/images/notebooks/notebook_sharing.png"
/>

## Import and export Notebooks as Markdown

Notebooks can now be created by uploading a Markdown file, so if you're already working with Markdown documentation files, you can simply upload those files to add Sourcegraph snippets and turn them into full-fledged Notebooks. You can also export Notebooks to Markdown, allowing you to turn Sourcegraph Notebooks into repo-based Markdown files.

## Create search contexts with the new UI

The search contexts creation UI has received visual tweaks, making it easier to understand if you're using search queries or JSON to define your contexts. We've also added guidance on valid expressions for query-based contexts to make the creation process clearer.

<Figure 
  alt="Screenshot of search contexts configuration UI." 
  src="https://storage.googleapis.com/sourcegraph-assets/docs/images/search_contexts/select_context_type.png"
/>

## Upgrading Sourcegraph is now easier with the new migrator service

Previously, failed database migrations were a common cause of pain when upgrading Sourcegraph. We've introduced a new `migrator` service and made several changes to make these database failures far less common. [You can read more here](https://about.sourcegraph.com/blog/introducing-migrator-service/).
