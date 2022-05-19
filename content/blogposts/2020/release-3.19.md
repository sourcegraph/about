---
title: "Sourcegraph 3.19 release"
publishDate: 2020-08-20T10:00-07:00
description: "Sourcegraph 3.19 is released."
tags: [blog, release]
slug: "release/3.19"
published: true
changelogItems:
  - description: Faster indexed search queries over a large number of repositories. Searching 100k+ repositories is now ~400ms faster and uses much less memory.
    url: https://github.com/sourcegraph/sourcegraph/pull/12546
    category: Search
  - description: "The Sourcegraph CLI's new `src serve-git` subcommand can serve local repositories for Sourcegraph to clone. This capability was previously provided by a separate tool called `src-expose`."
    url: https://docs.sourcegraph.com/admin/external_service/src_serve_git
    category: Repositories
  - description: "You can exclude files containing a specific term with the `NOT` operator in search queries. Requires `\"search.migrateParser\": true` in settings. Currently only supported for literal and regexp queries on indexed repositories."
    url: https://github.com/sourcegraph/sourcegraph/pull/12412
    category: Search
  - description: "Saved search emails now include a link to the user's saved searches page."
    url: https://github.com/sourcegraph/sourcegraph/pull/11651
    category: Search
  - description: Password reset links will be emailed to newly created users when created by the site admin, instead of requiring the site admin to manually send the user the link.
    url: https://github.com/sourcegraph/sourcegraph/pull/12803
    category: Admin
  - description: "Repository permissions are now always checked and updated asynchronously (in the background) instead of blocking each operation. The site config option `permissions.backgroundSync` (which enabled this behavior in previous versions) is now a no-op and is deprecated."
    url: "https://docs.sourcegraph.com/admin/repo/permissions#background-permissions-syncing"
    category: Repositories
  - description: "Fixed an issue where duplicate search results would show for queries with `or`-expressions."
    url: https://github.com/sourcegraph/sourcegraph/pull/12531
    category: Search
  - description: Campaigns can now be synced using GitLab webhooks.
    url: https://github.com/sourcegraph/sourcegraph/pull/12139
    category: Campaigns
---
