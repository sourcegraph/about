---
title: 'Sourcegraph 3.40 release'
publishDate: 2022-05-20T10:00-07:00
description: 'Sourcegraph 3.40 introduces...'
tags: [blog, release]
slug: 'release/3.40'
published: false
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.40/sourcegraph-3-40-release.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.40/sourcegraph-3-40-release.png
changelogItems:
  - description:
    url:
    category:
---

Sourcegraph 3.40 is now available! Here are some highlights from this release:

# Local navigation for the top 8 languages is now faster and more accurate

We [previously improved Java](https://about.sourcegraph.com/blog/release/3.39/#Local-navigation-for-Java-code-is-now-faster-and-more-accurate), and since then we’ve added support for Go, C#, Python, JavaScript, TypeScript, C/C++, and Ruby.

## Search your Python dependencies

Sourcegraph [dependencies search](https://docs.sourcegraph.com/code_search/how-to/dependencies_search) now supports python. You can now natively search your python dependencies to quickly determine if any dependency across your code has a security vulnerability. We currently have support for poetry.lock and pipfile.lock files. Check out [this example search on Sourcegraph Cloud](https://sourcegraph.com/search?q=context:global+repo:deps%28%5Egithub%5C.com/textualize/rich%24%29+&patternType=literal).

## Share links to code insights

[img placeholder]

You can now link to individual code insight charts directly via the context menu on each insight. When you click to share an insight, the product indicates what other groups – global or individual Sourcegrpah organizations – can see the insight. To share an insight chart, it will need to be on at least one global or org-wide dashboard, and the share link will enforce the permissions of the dashboard(s) with the insight.

## Batch Changes on Bitbucket Cloud

Batch Changes is now available on Bitbucket Cloud. It was previously only available on self-hosted deployments of BitBucket.


## [placeholder -- reminder to keep the "insights fork archive discrepancy" changelog entry in the changelog section of the post]
