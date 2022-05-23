---
title: 'Sourcegraph 3.40 release'
publishDate: 2022-05-20T10:00-07:00
description: 'Sourcegraph 3.40 introduces dependencies search for Python, faster local navigation for several languages, Batch Changes for Bitbucket Cloud, and direct sharing for individual code insights.'
tags: [blog, release]
slug: 'release/3.40'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.40/sourcegraph-3-40-release.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.40/sourcegraph-3-40-release.png
changelogItems:
  - description: 'Code Insights will now automatically generate queries with a default value of `fork:no` and `archived:no` if these fields are not specified by the user. This removes the need to manually add these fields to have consistent behavior from historical to non-historical results.'
    url: https://github.com/sourcegraph/sourcegraph/pull/30204
    category: Code Insights
  - description: 'Search-based Code Intelligence now recognizes local variables in Python, Java, JavaScript, TypeScript, C/C++, C#, Go, and Ruby. This provides a better code navigation experience out-of-the-box.'
    url: https://github.com/sourcegraph/sourcegraph/pull/33689
    category: Code Intelligence
  - description: '`type:commit` and `type:diff` searches containing `and`, `or`, and `not` queries have been optimized, and now return results significantly faster.'
    url: https://github.com/sourcegraph/sourcegraph/pull/34595
    category: Search
  - description: '`-language` is a valid filter, but the web app previously displayed it as invalid. This bug has been fixed to reflect it as valid.'
    url: https://github.com/sourcegraph/sourcegraph/pull/34949
    category: Search
  - description: '`search.largeFiles` now supports recursive globs. For example, it is now possible to specify a pattern like `**/*.lock` to match a lock file anywhere in a repository.'
    url: https://docs.sourcegraph.com/code_search/explanations/search_details
    category: Search
  - description: 'The `setRepositoryPermissionsUnrestricted` mutation was added, which allows you to explicitly mark a repo as available to all Sourcegraph users.'
    url: https://github.com/sourcegraph/sourcegraph/pull/35378
    category: Admin
---

Sourcegraph 3.40 is now available! Here are some highlights from this release:

## Search your Python dependencies

Sourcegraph [dependencies search](https://docs.sourcegraph.com/code_search/how-to/dependencies_search) now supports Python packages. You can now search through the Python dependencies of your repositories to easily identify the root cause of an error coming from the source code of a dependency or determine if any of your repository dependencies has a security vulnerability. We currently have support for poetry.lock and pipfile.lock files. Check out [this example search on Sourcegraph Cloud](https://sourcegraph.com/search?q=context:global+repo:deps%28%5Egithub%5C.com/textualize/rich%24%29+&patternType=literal).

## Local navigation for the top 8 languages is now faster and more accurate

We [previously improved navigation speed for Java code](https://about.sourcegraph.com/blog/release/3.39/#Local-navigation-for-Java-code-is-now-faster-and-more-accurate) in Sourcegraph 3.39. We’ve now made the same improvements for Go, C#, Python, JavaScript, TypeScript, C/C++, and Ruby, so you can navigate your code more quickly and precisely.

## Batch Changes on Bitbucket Cloud

Batch Changes is now available on Bitbucket Cloud. Batch Changes was previously only available on self-hosted deployments of Bitbucket; now, you can programmatically define changes across all of your Bitbucket repositories.

## Share links to code insights

[img placeholder]

You can now link to individual code insight charts directly via the context menu on each insight. When you click to share an insight, the product indicates what other groups – global or individual Sourcegraph organizations – can see the insight. To share an insight chart, it will need to be on at least one global or org-wide dashboard, and the share link will enforce the permissions of the dashboard(s) with the insight. You can read more about [Code Insights viewing & sharing in our docs](https://docs.sourcegraph.com/code_insights/explanations/viewing_code_insights).
