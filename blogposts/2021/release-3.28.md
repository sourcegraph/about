---
title: "Sourcegraph 3.28 release"
publishDate: 2021-05-20T10:00-07:00
description: "Sourcegraph 3.28 release"
tags: [blog, release]
slug: "release/3.28"
published: true
changelogItems:
  - description: "Added `select:commit.diff.added` and `select:commit.diff.removed` for `type:diff` search queries. These selectors return commit diffs only if a pattern matches in `added` (respectively, `removed`) lines."
    url: https://github.com/sourcegraph/sourcegraph/pull/20328
    category: Search
  - description: "Bulk comments on many changesets are now available in Batch Changes."
    url: https://github.com/sourcegraph/sourcegraph/pull/20361
    category: Batch Changes
  - description: "The default memory requirements for the `redis-*` containers have been raised by 1GB (to a new total of 7GB). This change allows Redis to properly run its key-eviction routines (when under memory pressure) without getting killed by the host machine. This affects both the docker-compose and Kubernetes deployments."
    url: "https://github.com/sourcegraph/deploy-sourcegraph/pull/2898"
    category:
 - description: "The extension registry main page has a new visual design that better conveys the most useful information about extensions, and individual extension pages have better information architecture."
    url: https://github.com/sourcegraph/sourcegraph/pull/20822
    category: Extensions
  - description: "Added 15 additional language autocompletions for the `lang:` filter in the search bar."
    url: https://github.com/sourcegraph/sourcegraph/pull/20535
    category: Search
  - description: "Steps in batch specs can now have an `if:` attribute to enable conditional execution of different steps."
    url: https://github.com/sourcegraph/sourcegraph/pull/20701
    category: Batch Changes
  - description: "User and site credentials used in Batch Changes are now encrypted in the database if encryption is enabled with the `encryption.keys` config."
    url: https://github.com/sourcegraph/sourcegraph/issues/19570
    category: Batch Changes
  - description: Default reviewers are now added to Bitbucket Server PRs opened by Batch Changes.
    url: https://github.com/sourcegraph/sourcegraph/pull/20551
    category: Batch Changes
  - description: "Added security enhancements, including 1) only site admins can list users on an instance, 2) repository permissions can now be enabled for site admins via the `authz.enforceForSiteAdmins` setting, 3) site admins can no longer view user added code host configuration, and 4) site admins cannot add access tokens for any user by default."
    url: https://github.com/sourcegraph/sourcegraph/pull/20619
    category: Admin
  - description: "Repository search patterns like `^repo/(prefix-suffix|prefix)$` now correctly match both `repo/prefix-suffix` and `repo/prefix`."
    url: https://github.com/sourcegraph/sourcegraph/issues/20389
    category: Search
  - description: Ephemeral storage requests and limits now match the default cache size to avoid Symbols pods being evicted. The symbols pod now requires 10GB of ephemeral space as a minimum to scheduled.
    url: "https://github.com/sourcegraph/deploy-sourcegraph/pull/2369"
    category:
---

Sourcegraph 3.28 is now available!
