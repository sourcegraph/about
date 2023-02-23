---
title: "Sourcegraph 4.5 release"
publishDate: 2023-02-23T10:00-07:00
description: "Sourcegraph 4.5 introduces further support for Gerrit as a code host and a new Code Insights UI to make it easier to create repository-scoped insights."
tags: [blog, release]
slug: "release/4.5"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.5/sourcegraph-4-5-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.5/sourcegraph-4-5-hero.png
changelogItems:
  - description: "Zoekt now bypasses the regex engine for common queries, such as `\\bLITERAL\\b case:yes`. This can lead to a significant speed-up for \"Find references\" and \"Find implementations\" if precise code navigation is not available."
    url: https://github.com/sourcegraph/zoekt/pull/526
    category: Search
  - description: "Code Insights has a new display option: \"Max number of series points to display.\" This setting controls the number of data points you see per series on an insight."
    url: https://github.com/sourcegraph/sourcegraph/pull/46653
    category: Code Insights
  - description: "You can now export all data for a code insight from the card menu or the standalone page."
    url: https://github.com/sourcegraph/sourcegraph/pull/46694
    category: Code Insights
  - description: Added Gerrit as an officially supported code host with permissions syncing.
    url: https://github.com/sourcegraph/sourcegraph/pull/46763
    category: Admin
  - description: "The searcher monitoring dashboard now contains more detailed request metrics as well as information on interactions with the local cache (via gitserver)."
    url: https://github.com/sourcegraph/sourcegraph/pull/47654
    category: Admin
  - description: "Zoekt has a new opt-in feature, \"shard merging.\" Shard merging consolidates small index files into larger ones, which reduces Zoekt-webserver's memory footprint, especially for users with many small and rarely update repositories."
    url: https://docs.sourcegraph.com/code_search/explanations/search_details#shard-merging
    category: Admin
---

<Badge link="https://docs.sourcegraph.com/code_insights" text="Code Insights" color="green" size="small" />

#### The new Code Insights UI makes it easier to run insights over specific repositories

We've introduced a new UI for insights creation. You can now use Sourcegraph query syntax to select repositories for an insight to run over. Previously, if you wanted an insight to run over more than a few repositories, you had to create an insight that ran over *all* of them. This change makes it possible to select only the repositories that are relevant to the insights you are creating.

This makes it especially easy to create insights for related groups of repositories, for example, ones that follow a naming convention such as `-infrastructure`.

The new system allows you to use any of the `repo:` filter options such as:
- `repo:`
- `-repo:`
- `repo:has.path()`
- `repo:has.file()`
- `repo:has.commit.after()`  
  
<Video 
  source={{
    mp4: 'blog/release-post/4.5/code-insights-ui',
  }}
  loop={true}
  title="The Code Insights UI."
/>  
  
<br />
<Badge link="https://docs.sourcegraph.com/admin/workers" text="Admin" color="violet" size="small" />

#### Upgrades to the Gerrit code host integration

When admins sync repositories from Gerrit, permissions can now also be synced to control who has access to each repository in Sourcegraph. This allows Gerrit repositories to function similar to [other Sourcegraph-supported code hosts](https://docs.sourcegraph.com/admin/external_service). You can find instructions to configure Gerrit permissions [in our docs](https://docs.sourcegraph.com/admin/external_service/gerrit).

<br />
