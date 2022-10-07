---
title: 'Sourcegraph 3.40 release'
publishDate: 2022-05-24T10:00-07:00
description: 'Sourcegraph 3.40 introduces dependencies search for Python, faster local navigation for several languages, Batch Changes for Bitbucket Cloud, and direct sharing for Code Insights visualizations.'
tags: [blog, release]
slug: 'release/3.40'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.40/sourcegraph-3-40-release.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.40/sourcegraph-3-40-release.png
changelogItems:
  - description: 'Code Insights will now automatically generate queries with a default value of `fork:no` and `archived:no` if these fields are not specified by the user. This removes the need to manually add these fields to have consistent behavior from historical to non-historical results.'
    url: https://github.com/sourcegraph/sourcegraph/pull/30204
    category: Code Insights
  - description: '`type:commit` and `type:diff` searches containing `and`, `or`, and `not` queries have been optimized, and now return results significantly faster.'
    url: https://github.com/sourcegraph/sourcegraph/pull/34595
    category: Search
  - description: '`-language` is a valid filter, but the web app previously displayed it as invalid. This bug has been fixed to reflect it as valid.'
    url: https://github.com/sourcegraph/sourcegraph/pull/34949
    category: Search
  - description: '`search.largeFiles` now supports recursive globs. For example, it is now possible to configure `search.largeFiles` with a pattern like `**/*.lock` to index all lock files in a repository and make them searchable, even when they are larger than 1 MB each.'
    url: https://docs.sourcegraph.com/code_search/explanations/search_details
    category: Search
  - description: 'The `setRepositoryPermissionsUnrestricted` mutation was added, which allows you to explicitly mark a repo as available to all Sourcegraph users on your instance. This allows you to open up repositories to all new users on your instance without needing to add new users individually when they join.'
    url: https://github.com/sourcegraph/sourcegraph/pull/35378
    category: Admin
---

<Alert>
  <strong>Update as of May 31:</strong> Patch 3.40.1 has been released, which fixes the issue below. We recommend GitLab users upgrade to this patch. In the unlikely event you still see GitLab repositories missing, you can log out of Sourcegraph via GitLab and then log back in to refresh your OAuth token.
</Alert>

<Alert>
  <strong>Update as of May 24:</strong> GitLab 15.0 no longer supports OAuth tokens that don’t expire, which can cause authorization between Sourcegraph and GitLab to fail. We are working to fix compatibility with GitLab 15.0 (and support expiring OAuth tokens) in an upcoming patch.
</Alert>

Sourcegraph 3.40 is now available! Here are some highlights from this release:

## Search your Python dependencies

Sourcegraph [dependencies search](https://docs.sourcegraph.com/code_search/how-to/dependencies_search) now supports Python packages. You can now search through the Python dependencies of your repositories to easily identify the root cause of an error coming from the source code of a dependency or determine if any of your repository dependencies have a security vulnerability. We currently have support for poetry.lock and pipfile.lock files. Check out [this example search on Sourcegraph Cloud](https://sourcegraph.com/search?q=context:global+repo:deps%28%5Egithub%5C.com/textualize/rich%24%29+&patternType=literal).

## Local navigation for the top 8 languages is now faster and more accurate

We [previously improved navigation speed for Java code](https://about.sourcegraph.com/blog/release/3.39/#Local-navigation-for-Java-code-is-now-faster-and-more-accurate) in Sourcegraph 3.39 by using [tree-sitter](https://tree-sitter.github.io/tree-sitter/). We’re now using tree-sitter for Go, C#, Python, JavaScript, TypeScript, C/C++, and Ruby as well. Hover tooltips for local variables in those languages will now populate far faster and the results will be more precise, so you can navigate through files quickly and with more confidence in the tooltip information.

## Batch Changes on Bitbucket Cloud (experimental)

Batch Changes is now available on Bitbucket Cloud as an experimental feature. Batch Changes was previously only available on self-hosted deployments of Bitbucket; now, you can programmatically define changes across all of your Bitbucket repositories.

## Share links to Code Insights charts

![code_insights_link_sharing](https://storage.googleapis.com/sourcegraph-assets/blog/3.40/code_insights_link_sharing.png)

You can now link to individual Code Insights charts directly via the context menu on each insight and share individual insights with teammates rather than entire dashboards. When you click to share an insight, it will indicate which other groups of users can see the insight. To share an insight chart, it will need to be on at least one global or org-wide dashboard, and the share link will enforce the permissions of the dashboard(s) with the insight. You can read more about [Code Insights link sharing](https://docs.sourcegraph.com/code_insights/explanations/viewing_code_insights#sharing-links-to-individual-insights) in our docs.
