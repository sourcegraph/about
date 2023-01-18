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
  - description: "Added support of excluding a repository from one or all code hosts with a click of a button. Admins don't have to manually edit Code Host configuration now and can exclude repositories directly on a Repository Options page."
    url: https://github.com/sourcegraph/sourcegraph/issues/40504
    category: Admin
  - description: "Added Code Host details page and separated it from Code Host edit page. New page contains information about a Code Host, its sync jobs, configuration a number of synced repositories and a link to quickly access a list of repositories synced for current Code Host."
    url: https://github.com/sourcegraph/sourcegraph/pull/46327
    category: Admin
  - description: "Added visibility to Code Host sync process on Code Host list page. Now admins can get an insight about sync being started/in progress/finished not only on Code Host details page, but also on a page with an overview of all configured Code Hosts."
    url: https://github.com/sourcegraph/sourcegraph/pull/46148
    category: Admin
  - description: "Added a way to test the code host connection from the newly added Code host details page. Now admins can check if Sourcegraph can connect to their configured code host directly from the UI."
    url: https://github.com/sourcegraph/sourcegraph/pull/45972
    category: Admin
  - description: "Updates to the site configuration from the site admin panel will now also record the user id of the author in the database in the critical_and_site_config.author_user_id column."
    url: https://github.com/sourcegraph/sourcegraph/pull/46150
    category: Admin
---

<Badge link="/code-search" text="Code Search" color="cerise" size="small" />

#### BitBucket Cloud code host connection improvements

We're improving our support for BitBucket Cloud in two meaningful ways. First, BitBucket Cloud can now be added as an authentication provider allowing developers to log in via BitBucket Cloud syncing accounts with one single login. Second, we are introducing permissions syncing for BitBucket Cloud giving admins even more confidence that developers who store their code on BitBucket Cloud only see the code they have permissions to see. Combined these represent a step forward towards helping enterprises index all of their code, confidently. 

<br />
<Badge link="/code-search" text="Code Search" color="cerise" size="small" />

#### Background job dashboard

We're adding a new feature that will greatly improve visibility into background jobs. The new dashboard will make it easy for admins to find and debug problems, identify slow-running jobs, and troubleshoot errors. With 50+ background jobs running in Sourcegraph, this is a huge visibility boost that will help both our support engineers and our customers quickly identify and resolve issues. This new feature is a step forward toward helping enterprises confidently manage their code while knowing what's happening behind the scenes.

<br />
<Badge link="https://docs.sourcegraph.com/admin/workers" text="Admin" color="violet" size="small" />

#### Cody: AI coding assistant

We've been using Anthropic's new language model, Claude, to build an in-editor coding assistant called Cody that helps you understand code and reduces day-to-day sources of programmer toil. We see huge potential for integrating the natural language abilities of LLMs with Sourcegraph's code search and intelligence. The early results are already super useful and we're only just getting started.

We're rolling out Cody in a limited beta soon, fill out the [form](https://sourcegraph.typeform.com/to/pIXTgwrd) if you would like early access.

<br />
<Badge text="Code Insights" link="/code-insights" color="green" size="small" />

#### Highlight 3


#### Keyboard nav (todo)
