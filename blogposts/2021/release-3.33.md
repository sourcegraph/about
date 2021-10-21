---
title: 'Sourcegraph 3.33 release'
publishDate: 2021-10-22T10:00-07:00
description: 'Sourcegraph 3.33 introduces UPDATE'
tags: [blog, release]
slug: 'release/3.33'
published: false
heroImage:
socialImage:
changelogItems:
  - description: Search query validation has been improved for various search types and filters so that user get faster feedback on issues within their query.
    url: https://github.com/sourcegraph/sourcegraph/pull/24747
    category: Search
  - description: For short search queries containing no filters but the name of a supported programming language we are now suggesting to run the query with a language filter.
    url: https://github.com/sourcegraph/sourcegraph/pull/25792
    category: Search
  - description: The API scope used by GitLab OAuth can now optionally be configured in the provider.
    url: https://github.com/sourcegraph/sourcegraph/pull/26152
    category: Admin
  - description: Search context management pages are now only available in the Sourcegraph enterprise version. Search context dropdown is disabled in the OSS version.
    url: https://github.com/sourcegraph/sourcegraph/pull/25147
    category: Search
  - description: Search contexts GQL API is now only available in the Sourcegraph enterprise version.
    url: https://github.com/sourcegraph/sourcegraph/pull/25281
    category: Search
  - description: "Fixed an issue where clicking on a link in the 'Revisions' search sidebar would result in an invalid query if the query didn't already contain a 'repo:' filter."
    url: https://github.com/sourcegraph/sourcegraph/pull/25076
    category: Search
  - description: "Fixed an issue where links to jump to Bitbucket Cloud wouldn't render in the UI."
    url: https://github.com/sourcegraph/sourcegraph/pull/25533
    category: Search

  - description: 'Code insights running over all repositories using a commit search (`type:commit` or `type:diff`) would fail to deserialize and produce no results.'
    url: https://github.com/sourcegraph/sourcegraph/pull/25928
    category: Search
  - description: 'Fixed an issue where code insights queries could produce a panic on queued records that did not include a `record_time`'
    url: https://github.com/sourcegraph/sourcegraph/pull/25929
    category:
  - description: Fixed an issue where Batch Change changeset diffs would sometimes render incorrectly when previewed from the UI if they contained deleted empty lines.
    url: https://github.com/sourcegraph/sourcegraph/pull/25866
    category: Batch Changes
---

Sourcegraph 3.33 is now available! Here are some highlights from this release:

## Search contexts are now GA for everyone

Search contexts allows any users to create custom groupings of repositories and revisions for scoped, cross-repository searching. This expands on the functionality of version contexts and repogroups, which functioned similarly but could only be created by admins. As a result, we have deprecated version contexts and repogroups in Sourcegraph 3.33, and we will be removing them in Sourcegraph 3.34. You can read more about this change and how to migrate your version contexts to search contexts in [this blog post](https://about.sourcegraph.com/blog/introducing-search-contexts/).

## All users can now visualize and track the status of their LSIF data

Previously, the code intelligence UI was only available to site-admins (except for hovers and reference panels). This conflicted with our users' need to add precise code intelligence to their own repositories. They could upload LSIF data and get precise code intelligence results, but couldn't visualize the status of said data. We now allow users to see uploads and indexes for repositories they have access to, helping them easily keep track of the status of all their LSIF data.

<img width="1148" alt="Code intelligence uploads page" src="https://user-images.githubusercontent.com/1657213/137551018-de2aaa21-7afe-46ed-9040-f62af536d53c.png">
