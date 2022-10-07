---
title: 'Sourcegraph 3.33 release'
publishDate: 2021-10-25T10:00-07:00
description: 'Sourcegraph 3.33 introduces general availability for search contexts as well as Code Intelligence status data for all non-admin users.'
tags: [blog, release]
slug: 'release/3.33'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.33/sourcegraph-3-33-release.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.33/sourcegraph-3-33-release.png
changelogItems:
  - description: Search contexts are now enabled by default in Sourcegraph Enterprise. Search contexts allow users to build custom groups of repositories and revisions for efficient cross-repository searching.
    url: https://about.sourcegraph.com/blog/introducing-search-contexts/
    category: Search
  - description: Search query validation has been improved for various search types and filters so that users get faster feedback on issues within their query.
    url: https://github.com/sourcegraph/sourcegraph/pull/24747
    category: Search
  - description: For short search queries containing the name of a supported programming language, the UI now automatically provides suggestions to run the query with a language filter.
    url: https://github.com/sourcegraph/sourcegraph/pull/25792
    category: Search
  - description: "Fixed an issue where clicking on a link in the 'Revisions' search sidebar would result in an invalid query if the query didn't already contain a 'repo:' filter."
    url: https://github.com/sourcegraph/sourcegraph/pull/25076
    category: Search
  - description: "Fixed an issue where links to jump to Bitbucket Cloud wouldn't render in the UI."
    url: https://github.com/sourcegraph/sourcegraph/pull/25533
    category: Search
  - description: Fixed an issue where Batch Change changeset diffs would sometimes render incorrectly when previewed from the UI if they contained deleted empty lines.
    url: https://github.com/sourcegraph/sourcegraph/pull/25866
    category: Batch Changes
---

Sourcegraph 3.33 is now available! Here are some highlights from this release:

## Search only the code you care about with search contexts

Search contexts allow any users to create custom groupings of repositories and revisions for scoped, cross-repository searching. This expands on the functionality of version contexts and repogroups, which functioned similarly but could only be created by admins. As a result, we have deprecated version contexts and repogroups in Sourcegraph 3.33, and we will be removing them in Sourcegraph 3.34.

Search contexts can be used in all kinds of situations to scope searches. For example, you may want to [search only PHP, Kotlin, and Python repos](https://sourcegraph.com/search?q=context:%40benvenker/langs+&patternType=literal) to scope search results to specific services. You can also create search contexts specific to your team or business unit to narrow search results to relevant repositories.

You can read more about this change and how to migrate your version contexts to search contexts in [this blog post](https://about.sourcegraph.com/blog/introducing-search-contexts/). Going forward, search contexts will only be available for enterprise customers; if you are currently using Sourcegraph OSS, you will need to become an enterprise customer to use this feature.

<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/introducing-search-contexts/search-context-dropdown.png" 
  alt="The search context dropdown embedded in the search bar" 
/>

## All users can now visualize and track the status of their LSIF data

Previously, the Code Intelligence UI was only available to site-admins (except for hovers and reference panels). This conflicted with our users' need to add precise Code Intelligence to their own repositories. They could upload LSIF data and get precise Code Intelligence results, but couldn't visualize the status of that data. We now allow users to see uploads and indexes for repositories they have access to, helping them easily keep track of the status of all their LSIF data.

<Figure 
  src="https://user-images.githubusercontent.com/1657213/137551018-de2aaa21-7afe-46ed-9040-f62af536d53c.png" 
  alt="The Code Intelligence uploads UI"
/>
