---
title: "Sourcegraph 4.4 release"
publishDate: 2022-01-20T10:00-07:00
description: "Sourcegraph 4.4 introduces..."
tags: [blog, release]
slug: "release/4.4"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.3/sourcegraph-4-4-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.3/sourcegraph-4-4-hero.png
changelogItems:
  - description: "User and organization auto-defined search contexts have been permanently removed along with the `autoDefinedSearchContexts` GraphQL query. The only auto-defined context now is the `global` context."
    url: https://github.com/sourcegraph/sourcegraph/pull/46083
    category: Search
  - description: "Permanently removed the legacy panels on the homepage (such as recent searches) and removed the setting `experimentalFeatures.showEnterpriseHomePanels`."
    url: https://github.com/sourcegraph/sourcegraph/pull/45705
    category: Search
  - description: "Added a \"Reindex now\" button to the index status page. Admins can now force an immediate reindex of a repository."
    url: https://github.com/sourcegraph/sourcegraph/pull/45533
    category: Admin
  - description: "Added an \"Unlock user\" button to the actions dropdown on the Site Admin Users page. Admins can unlock user accounts that were locked after too many sign-in attempts."
    url: https://github.com/sourcegraph/sourcegraph/pull/45650
    category: Admin
  - description: "Added a log of repository corruption events. The Admin repositories page now shows when a repsository has been detected as corrupt along with that repository's history of corruption."
    url: https://github.com/sourcegraph/sourcegraph/pull/46004
    category: Admin
  - description: "Added a `Corrupted` status filter on the Admin repositories page, allowing Administrators to filter the list of repositories to only those that have been detected as corrupt."
    url: https://github.com/sourcegraph/sourcegraph/pull/46415
    category: Admin
  - description: "The `site { monitoringStatistics { alerts } }` GraphQL query has been deprecated and will no longer return data. The query will be removed entirely in a future release."
    url: https://github.com/sourcegraph/sourcegraph/pull/46299
    category: API
---

<Badge link="/code-search" text="Code Search" color="cerise" size="small" />

#### BitBucket Cloud code host connection improvements

We're improving our support for BitBucket Cloud in two meaningful ways. First, BitBucket Cloud can now be added as an authentication provider allowing developers to log in via BitBucket Cloud syncing accounts with one single login. Second, we are introducing permissions syncing for BitBucket Cloud giving admins even more confidence that developers who store their code on BitBucket Cloud only see the code they have permissions to see. Combined these represent a step forward towards helping enterprises index all of their code, confidently. 

<br />
<Badge link="/code-search" text="Code Search" color="cerise" size="small" />

#### Highlight 2

<br />
<Badge text="Code Insights" link="/code-insights" color="green" size="small" />

#### Highlight 3


#### Keyboard nav (todo)
