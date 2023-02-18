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
  - description: ""
    url: 
    category: 
  - description: ""
    url: 
    category: 
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

#### Highlight 2

Highlight 2 copy

<br />
<Badge link="" text="AI" color="blue" size="small" />

#### Highlight 3

Highlight 3 copy
