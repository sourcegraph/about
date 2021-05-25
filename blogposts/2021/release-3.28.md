---
title: "Sourcegraph 3.28 release"
publishDate: 2021-05-24T10:00-07:00
description: "The Sourcegraph 3.28 release includes new security enhancements and the redesigned extensions registry."
tags: [blog, release]
slug: "release/3.28"
published: true
changelogItems:
    - description: "Added security enhancements, including 1) only site admins can list users on an instance, 2) repository permissions can now be enabled for site admins via the `authz.enforceForSiteAdmins` setting, 3) site admins can no longer view user added code host configuration, and 4) site admins cannot add access tokens for any user by default."
     url: https://github.com/sourcegraph/sourcegraph/pull/20619
    category: Admin
  - description: "Bulk comments on many changesets are now available in Batch Changes."
    url: https://github.com/sourcegraph/sourcegraph/pull/20361
    category: Batch Changes
  - description: "Steps in batch specs can now have an `if:` attribute to enable conditional execution of different steps."
    url: https://github.com/sourcegraph/sourcegraph/pull/20701
    category: Batch Changes
  - description: "Default reviewers are now added to Bitbucket Server PRs opened by Batch Changes."
    url: https://github.com/sourcegraph/sourcegraph/pull/20551
    category: Batch Changes 
  - description: "The extension registry main page has a new visual design that better conveys the most useful information about extensions, and individual extension pages have better information architecture."
    url: https://github.com/sourcegraph/sourcegraph/pull/20822
    category: Extensions  
  - description: "Added `select:commit.diff.added` and `select:commit.diff.removed` for `type:diff` search queries. These selectors return commit diffs only if a pattern matches in `added` (respectively, `removed`) lines."
    url: https://github.com/sourcegraph/sourcegraph/pull/20328
    category: Search
  - description: "Added 15 additional language autocompletions for the `lang:` filter in the search bar."
    url: https://github.com/sourcegraph/sourcegraph/pull/20535
    category: Search 
---

Sourcegraph 3.28 is now available! For this release, we added new security enhancements and redesigned the extensions registry.

## Extensions registry update 

Extensions allow you to connect all your other tools to get functionality like test coverage, 1-click open file in editor, custom highlighting, and information from your other favorite services all in one place on Sourcegraph. The [extensions registry main page](https://sourcegraph.com/extensions?category=All) has a new visual design that better conveys the most useful information about extensions. Individual extension pages now have better information architecture.
