---
title: "Sourcegraph 3.28 release"
publishDate: 2021-05-20T10:00-07:00
description: "Sourcegraph 3.28 release"
tags: [blog, release]
slug: "release/3.28"
published: true
changelogItems:
  # Added
  - description: "Added `select:commit.diff.added` and `select:commit.diff.removed` for `type:diff` search queries. These selectors return commit diffs only if a pattern matches in `added` (respectively, `removed`) lines."
    url: https://github.com/sourcegraph/sourcegraph/pull/20328
    category: Search
  - description: "Additional language autocompletions for the `lang:` filter in the search bar."
    url: https://github.com/sourcegraph/sourcegraph/pull/20535
    category: Search
  - description: "Steps in batch specs can now have an `if:` attribute to enable conditional execution of different steps."
    url: https://github.com/sourcegraph/sourcegraph/pull/20701
    category: Batch Changes
  - description: "Extensions can now log messages through `sourcegraph.app.log` to aid debugging user issues."
    url: https://github.com/sourcegraph/sourcegraph/pull/20474
    category:
  # Changed
  - description: "User and site credentials used in Batch Changes are now encrypted in the database if encryption is enabled with the `encryption.keys` config."
    url: https://github.com/sourcegraph/sourcegraph/issues/19570
    category: Batch Changes
  - description: "All Sourcegraph images within [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph) now specify the registry. Thanks! @k24dizzle #2901."
    url: "https://github.com/sourcegraph/deploy-sourcegraph/pull/2901"
    category:
  - description: Default reviewers are now added to Bitbucket Server PRs opened by Batch Changes.
    url: https://github.com/sourcegraph/sourcegraph/pull/20551
    category: Batch Changes
  - description: Only site admins can now list users on an instance.
    url: https://github.com/sourcegraph/sourcegraph/pull/20619
    category: Admin
  - description: "Repository permissions can now be enabled for site admins via the `authz.enforceForSiteAdmins` setting."
    url: https://github.com/sourcegraph/sourcegraph/pull/20674
    category: Admin
  - description: Site admins can no longer view user added code host configuration.
    url: https://github.com/sourcegraph/sourcegraph/pull/20851
    category: Admin
  - description: Site admins cannot add access tokens for any user by default.
    url: https://github.com/sourcegraph/sourcegraph/pull/20988
    category: Admin
  # Fixed
  - description: "Indexed search failed when the `master` branch needed indexing but was not the default."
    url: https://github.com/sourcegraph/sourcegraph/pull/20260
    category: Search
  - description: "`repo:contains(...)` built-in did not respect parameters that affect repo filtering (e.g., `repogroup`, `fork`). It now respects these."
    url: https://github.com/sourcegraph/sourcegraph/pull/20339
    category: Repositories
  - description: "An issue where duplicate results would render for certain `or`-expressions."
    url: https://github.com/sourcegraph/sourcegraph/pull/20480
    category:
  - description: "Issue where the search query bar suggests that some `lang` values are not valid."
    url: https://github.com/sourcegraph/sourcegraph/pull/20534
    category: Search
  - description: Pull request event webhooks received from GitHub with unexpected actions no longer cause panics.
    url: https://github.com/sourcegraph/sourcegraph/pull/20571
    category:
  - description: "Repository search patterns like `^repo/(prefix-suffix|prefix)$` now correctly match both `repo/prefix-suffix` and `repo/prefix`."
    url: https://github.com/sourcegraph/sourcegraph/issues/20389
    category: Search
  - description: Ephemeral storage requests and limits now match the default cache size to avoid Symbols pods being evicted. The symbols pod now requires 10GB of ephemeral space as a minimum to scheduled.
    url: "https://github.com/sourcegraph/deploy-sourcegraph/pull/2369"
    category:
---

Sourcegraph 3.28 is now available!
