---
title: "Sourcegraph 4.5 release"
publishDate: 2023-02-22T10:00-07:00
description: "Sourcegraph 4.5 introduces..."
tags: [blog, release]
slug: "release/4.5"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.5/sourcegraph-4-5-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.5/sourcegraph-4-5-hero.png
changelogItems:
  - description: "Zoekt now bypasses the regex engine for common queries, such as `\\bLITERAL\\b case:yes`. This can lead to a significant speed-up for \"Find references\" and \"Find implementations\" if precise code navigation is not available."
    url: https://github.com/sourcegraph/zoekt/pull/526
    category: Search
  - description: "Code Insights has a new display option: \"Max number of series points to display\". This setting controls the number of data points you see per series on an insight."
    url: https://github.com/sourcegraph/sourcegraph/pull/46653
    category: Code Insights
  - description: "You can now export all data for a code insight from the card menu or the standalone page."
    url: https://github.com/sourcegraph/sourcegraph/pull/46694
    category: Code Insights
- description: Added Gerrit as an officially supported code host with permissions syncing.
    url: https://github.com/sourcegraph/sourcegraph/pull/46763
    category: Admin
  - description: "Monitoring: the searcher dashboard now contains more detailed request metrics as well as information on interactions with the local cache (via gitserver)."
    url: https://github.com/sourcegraph/sourcegraph/pull/47654
    category: Admin
  - description: "Zoekt has a new opt-in feature, \"shard merging\". Shard merging consolidates small index files into larger ones, which reduces Zoekt-webserver's memory footprint, especially for users with many small and rarely update repositories."
    url: https://docs.sourcegraph.com/code_search/explanations/search_details#shard-merging
    category: Admin
---

<Badge link="https://docs.sourcegraph.com/code_insights" text="Code Insights" color="green" size="small" />

#### The new Code Insights UI makes it easier to run insights over specific repositories

We've introduced a new UI for Code Insights creation. You can now use Sourcegraph query syntax to select repositories for an insight to run over. Previously, repositories had to be explicitly listed. This change makes it easier to select very specific and large repository groups to run insights over.

The new query system allows you to select repositories with these filters:
- `repo:`
- `-repo:`
- `repo:has.path()`
- `repo:has.file()`
- `repo:has.commit.after()`
- `repo:.*`


<br />
<Badge link="https://docs.sourcegraph.com/admin/workers" text="Admin" color="violet" size="small" />

#### Upgrades for Gerrit as a code host

We're improving support for Gerrit-based repositories. Gerrit can now be used as an authentication provider for Sourcegraph so that teams can authenticate direcvtly to Sourcegraph with a shared login.

We're also releasing permissions syncing for Gerrit. Admins can sync repositories to Sourcegraph from Gerrit, and permissions from Gerrit will also sync to Sourcegraph to control who has access to each repository in Sourcegraph.

<br />