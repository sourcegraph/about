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
  # Added
  - description: More rules have been added to the search query validation so that user get faster feedback on issues with their query.
    url: https://github.com/sourcegraph/sourcegraph/pull/24747
    category: Search
  - description: "Bloom filters have been added to the zoekt indexing backend to accelerate queries with code fragments matching `\\w{4,}`. zoekt#126"
    url: https://github.com/sourcegraph/zoekt/pull/126
    category:
  - description: For short search queries containing no filters but the name of a supported programming language we are now suggesting to run the query with a language filter.
    url: https://github.com/sourcegraph/sourcegraph/pull/25792
    category: Search
  - description: The API scope used by GitLab OAuth can now optionally be configured in the provider.
    url: https://github.com/sourcegraph/sourcegraph/pull/26152
    category:
  # Changed
  - description: Search context management pages are now only available in the Sourcegraph enterprise version. Search context dropdown is disabled in the OSS version.
    url: https://github.com/sourcegraph/sourcegraph/pull/25147
    category: Search
  - description: Search contexts GQL API is now only available in the Sourcegraph enterprise version.
    url: https://github.com/sourcegraph/sourcegraph/pull/25281
    category: Search
  - description: 'When running a commit or diff query, the accepted values of `before` and `after` have changed from "whatever git accepts" to a [slightly more strict subset](https://docs.sourcegraph.com/code_search/reference/language#before) of that.'
    url: https://github.com/sourcegraph/sourcegraph/pull/25414
    category: Search
  - description: 'Repogroups and version contexts are deprecated in favor of search contexts. Read more about the deprecation and how to migrate to search contexts in the [blog post](https://about.sourcegraph.com/blog/introducing-search-contexts).'
    url: https://github.com/sourcegraph/sourcegraph/pull/25676
    category: Search
  - description: Search contexts are now enabled by default in the Sourcegraph enterprise version.
    url: https://github.com/sourcegraph/sourcegraph/pull/25674
    category: Search
  - description: 'Code Insights background queries will now retry a maximum of 10 times (down from 100).'
    url: https://github.com/sourcegraph/sourcegraph/pull/26057
    category:
  - description: 'Our `sourcegraph/cadvisor` Docker image has been upgraded to cadvisor version `v0.42.0`.'
    url: https://github.com/sourcegraph/sourcegraph/pull/26126
    category:
  - description: 'Our `jaeger` version in the `sourcegraph/sourcegraph` Docker image has been upgraded to `1.24.0`.'
    url: https://github.com/sourcegraph/sourcegraph/pull/26215
    category: Admin
  # Fixed
  - description: 'A search regression in 3.32.0 which caused instances with search indexing _disabled_ (very rare) via `"search.index.enabled": false,` in their site config to crash with a panic.'
    url: https://github.com/sourcegraph/sourcegraph/pull/25321
    category: Search
  - description: 'An issue where the default `search.index.enabled` value on single-container Docker instances would incorrectly be computed as `false` in some situations.'
    url: https://github.com/sourcegraph/sourcegraph/pull/25321
    category: Search
  - description: StatefulSet service discovery in Kubernetes correctly constructs pod hostnames in the case where the ServiceName is different from the StatefulSet name.
    url: https://github.com/sourcegraph/sourcegraph/pull/25146
    category:
  - description: "An issue where clicking on a link in the 'Revisions' search sidebar section would result in an invalid query if the query didn't already contain a 'repo:' filter."
    url: https://github.com/sourcegraph/sourcegraph/pull/25076
    category: Search
  - description: "An issue where links to jump to Bitbucket Cloud wouldn't render in the UI."
    url: https://github.com/sourcegraph/sourcegraph/pull/25533
    category:
  - description: 'Fixed some code insights pings being aggregated on `anonymous_user_id` instead of `user_id`.'
    url: https://github.com/sourcegraph/sourcegraph/pull/25926
    category:
  - description: 'Code insights running over all repositories using a commit search (`type:commit` or `type:diff`) would fail to deserialize and produce no results.'
    url: https://github.com/sourcegraph/sourcegraph/pull/25928
    category: Search
  - description: 'Fixed an issue where code insights queries could produce a panic on queued records that did not include a `record_time`'
    url: https://github.com/sourcegraph/sourcegraph/pull/25929
    category:
  - description: Fixed an issue where Batch Change changeset diffs would sometimes render incorrectly when previewed from the UI if they contained deleted empty lines.
    url: https://github.com/sourcegraph/sourcegraph/pull/25866
    category: Batch Changes
  - description: 'An issue where `repo:contains.commit.after()` would fail on some malformed git repositories.'
    url: https://github.com/sourcegraph/sourcegraph/issues/25974
    category: Repositories
  - description: Fixed primary email bug where users with no primary email set would break the email setting page when trying to add a new email.
    url: https://github.com/sourcegraph/sourcegraph/pull/25008
    category:
  - description: 'An issue where keywords like `and`, `or`, `not` would not be highlighted properly in the search bar due to the presence of quotes.'
    url: https://github.com/sourcegraph/sourcegraph/pull/26135
    category: Search
  - description: 'An issue where frequent search indexing operations led to incoming search queries timing out. When these timeouts happened in quick succession, `zoekt-webserver` processes would shut themselves down via their `watchdog` routine. This should now only happen when a given `zoekt-webserver` is under-provisioned on CPUs.'
    url: https://github.com/sourcegraph/sourcegraph/issues/25872
    category: Search
  # Removed
  - description: Batch Changes changeset specs stored the raw JSON used when creating them, which is no longer used and is not exposed in the API. This column has been removed, thereby saving space in the Sourcegraph database.
    url: https://github.com/sourcegraph/sourcegraph/issues/25453
    category: Batch Changes
  - description: 'The query builder page experimental feature, which was disabled in 3.21, is now removed. The setting `{ "experimentalFeatures": { "showQueryBuilder": true } }` now has no effect.'
    url: https://github.com/sourcegraph/sourcegraph/pull/26125
    category:
---

Sourcegraph 3.33 is now available! Here are some highlights from this release:

## Search contexts are now GA for everyone

Search contexts allows any users to create custom groupings of repositories and revisions for scoped, cross-repository searching. This expands on the functionality of version contexts and repogroups, which functioned similarly but could only be created by admins. As a result, we have deprecated version contexts and repogroups in Sourcegraph 3.33, and we will be removing them in Sourcegraph 3.34. You can read more about this change and how to migrate your version contexts to search contexts in [this blog post](https://about.sourcegraph.com/blog/introducing-search-contexts/).

## All users can now visualize and track the status of their LSIF data

Previously, the code intelligence UI was only available to site-admins (except for hovers and reference panels). This conflicted with our users' need to add precise code intelligence to their own repositories. They could upload LSIF data and get precise code intelligence results, but couldn't visualize the status of said data. We now allow users to see uploads and indexes for repositories they have access to, helping them easily keep track of the status of all their LSIF data.

<img width="1148" alt="Code intelligence uploads page" src="https://user-images.githubusercontent.com/1657213/137551018-de2aaa21-7afe-46ed-9040-f62af536d53c.png">
