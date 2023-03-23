---
title: "Sourcegraph 4.4 release"
publishDate: 2023-01-20T10:00-07:00
description: "Sourcegraph 4.4 introduces improvements to BitBucket Cloud support and a new background job dashboard for debugging."
tags: [blog, release]
slug: "release/4.4"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.4/sourcegraph-4-4-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.4/sourcegraph-4-4-hero.png
changelogItems:
  - description: "Added a \"Reindex now\" button to the index status page. Admins can now force an immediate reindex of a repository."
    url: https://github.com/sourcegraph/sourcegraph/pull/45533
    category: Admin
  - description: "Added an \"Unlock user\" button to the actions dropdown on the Site Admin Users page. Admins can unlock user accounts that were locked after too many sign-in attempts."
    url: https://github.com/sourcegraph/sourcegraph/pull/45650
    category: Admin
  - description: "Added a log of repository corruption events. The Admin repositories page now shows when a repository has been detected as corrupt along with that repository's history of corruption."
    url: https://github.com/sourcegraph/sourcegraph/pull/46004
    category: Admin
  - description: "Added a `Corrupted` statistic which will show how many repositories are currently corrupt. The statistic will only be shown if there are any corrupt repositories, otherwise the value will be hidden."
    url: https://github.com/sourcegraph/sourcegraph/pull/46412
    category: Admin
  - description: "You can now exclude a repository from one or all code hosts with the click of a button. Admins can exclude repositories directly on the Repository Options page instead of needing to manually edit the code host configuration."
    url: https://github.com/sourcegraph/sourcegraph/issues/40504
    category: Admin
  - description: "Added a code host details page and separated it from the code host edit page. The new page contains information about a code host, its sync jobs, configuration, the number of synced repositories, and a link to access the list of synced repositories."
    url: https://github.com/sourcegraph/sourcegraph/pull/46327
    category: Admin
  - description: "Added visibility for code host sync progress to the code host list page."
    url: https://github.com/sourcegraph/sourcegraph/pull/46148
    category: Admin
  - description: "Added a \"Test\" button to the code host details page. Now admins can check Sourcegraph's connection to a configured code host directly from the UI."
    url: https://github.com/sourcegraph/sourcegraph/pull/45972
    category: Admin
  - description: "Updates to the site configuration from the Site Admin panel will now record the user id of the author in the database in the critical_and_site_config.author_user_id column."
    url: https://github.com/sourcegraph/sourcegraph/pull/46150
    category: Admin
  - description: "The `site { monitoringStatistics { alerts } }` GraphQL query has been deprecated and will no longer return data. The query will be removed entirely in a future release."
    url: https://github.com/sourcegraph/sourcegraph/pull/46299
    category: API
---

<Badge link="https://docs.sourcegraph.com/admin/external_service/bitbucket_cloud" text="Admin" color="violet" size="small" />

#### Upgrades for BitBucket Cloud connections

We're improving support for BitBucket Cloud in two meaningful ways. First, BitBucket Cloud can now be added as an authentication provider. This allows you to log in to Sourcegraph via BitBucket Cloud so you can maintain one unified login. 

Second, we are introducing permissions syncing for BitBucket Cloud to give admins even more confidence that developers who store their code on BitBucket Cloud only see the code they have permissions to see. Together, these updates will help enterprises index all of their code, across any code host, confidently and securely. 

<br />
<Badge link="https://docs.sourcegraph.com/admin/workers" text="Admin" color="violet" size="small" />

#### Speed up debugging with the background job dashboard

Our new dashboard  greatly improves visibility into the 50+ background jobs running in Sourcegraph. This dashboard makes it far easier for admins to find and debug problems, identify slow-running jobs, and troubleshoot errors. Teams & enterprises can confidently manage their code while knowing what's happening behind the scenes.

This dashboard can be found under `Site Admin` > `Maintenance` > `Background jobs`.

<br />
<Badge link="" text="AI" color="blue" size="small" />

#### Cody: AI coding assistant preview

We've been using Anthropic's new language model, Claude, to build an in-editor coding assistant called Cody that helps you understand code and reduces day-to-day sources of programmer toil. We see huge potential for integrating the natural language abilities of LLMs with Sourcegraph's code intelligence. The early results are already promising, and we're just getting started.

Cody will roll out soon in private beta. If you're interested in early access to Cody, you can [submit this form](https://sourcegraph.typeform.com/cody-signup).

<video controls playsinline mute title="Cody demo" caption="Sourcegraph's new AI coding assistant">
  <source src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.4/cody-demo.mp4" />
</video>
