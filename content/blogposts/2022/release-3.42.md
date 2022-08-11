---
title: "Sourcegraph 3.42 release"
publishDate: 2022-07-25T10:00-07:00
description: "Sourcegraph 3.42 introduces new admin analytics, a new search UI in Beta, alternate search suggestions, and upgrades for Code Insights running on repo lists and monorepos."
tags: [blog, release]
slug: "release/3.42"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/3.42/sourcegraph-3-42.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/3.42/sourcegraph-3-42.png
changelogItems:
  - description: 'We further improved search-based code navigation for Python using tree-sitter. The upgrades to jump-to-definition have been extended to more kinds of variables, such as class fields, for more accurate cross-file navigation.'
    url: https://github.com/sourcegraph/sourcegraph/pull/38459
    category: Search
  - description: 'The homepage UI has been cleaned up, and panels such as recent searches are no longer visible by default. They can be re-enabled by setting "experimentalFeatures.showEnterpriseHomePanels" to true.'
    url: https://github.com/sourcegraph/sourcegraph/pull/37984
    category: Search
  - description: 'We have moved to CodeMirror from Monaco for all our search query inputs, resulting in faster and better quality search suggestions. You can switch back to Monaco by setting "experimentalFeatures.editor": "monaco" in the config.'
    url: https://github.com/sourcegraph/sourcegraph/pull/38584
    category: Search
  - description: 'Added experimental support for exporting traces to an OpenTelemetry collector by adding "observability.tracing": { "type": "opentelemetry" } to the config.'
    url: https://github.com/sourcegraph/sourcegraph/pull/37984
    category: Admin
  - description: 'Gitserver endpoint access logs can now be enabled for added visbility by adding "log": { "gitserver.accessLogs": true } to the config.'
    url: https://github.com/sourcegraph/sourcegraph/pull/
    category: Admin
---

<Alert>
  <strong>Update as of July 29:</strong> Patch 3.42.1 has been released, which fixes the issue below. If you previously download 3.42.0 and turned off `sgm`, we recommend upgrading to 3.42.1 and turning on `sgm` to fix any repo corruption.
</Alert>

<Alert>
  <strong>Update as of July 27:</strong> We identified a bug in Sourcegraph 3.42 that can cause issues with gitserver. We are working to fix this in an upcoming patch. In the meantime, we recommend running version 3.41.
</Alert>

Sourcegraph 3.42 is now available! For this release, we introduced:

## Measure the value of Sourcegraph with admin analytics

We believe providing a world-class admin experience is critical for the success of Sourcegraph customers. This starts with enabling administrators to measure and track the value of Sourcegraph within their organization.

Historically, Sourcegraph administrators relied on word-of-mouth feedback from developers, leading to a poor understanding of the value of Sourcegraph within an organization. 

In 3.42, we are releasing a completely redesigned analytics experience for administrators. These visualizations will make it easier to understand developer engagement, identify power users, and measure the value of Sourcegraph. 

![Admin analytics page](https://storage.googleapis.com/sourcegraph-assets/blog/release-post/3.42/admin_analytics_v2.png)

## New search UI, now in Beta

We're fixing UX papercuts and working to improve the core search experience. 3.42 includes a new, optional Beta UI, which can be enabled via a toggle in the avatar menu. Filters have moved to the right and are now collapsible, search results are more compact and individually expandable, and buttons in the header have been combined to reduce clutter.

This UI is disabled by default but we encourage you to give it a try. We think you'll find it cleaner and easier to use. You can find the toggle below the theme dropdown in the avatar menu.

![](https://storage.googleapis.com/sourcegraph-assets/docs/images/code_search/beta-ui.gif)

## Search by repository descriptions

We've introduced a new search predicate that enables searching by repository description, for example: `repo:has.description(machine learning)`. Now you can search for interesting repository topics, even if you don't know their names.

This is especially useful for engineers joining new teams or onboarding to a codebase at a new company, so you can quickly find repositories without knowing exactly what you're looking for.

![Search for repository by description](https://storage.googleapis.com/sourcegraph-assets/docs/images/code_search/repo-description-search.png)

## Code Insights load faster and include more historical datapoints

<Video
  title="Faster code insights"
  source={{
    mp4: "blog/3.42/3.42InsightsSpeedImprovements",
    webm: "blog/3.42/3.42InsightsSpeedImprovements"
  }}
  loop={true}
/>

Insights running over an explicit list of repos now behave like insights running over all repositories. 

They: 
- Backfill 12 historical datapoints (instead of 7)
- Now load 3-10x faster on future page visits thanks to persisting their datapoints
- Better handle large results sets and repositories
- Take daily snapshots of the current state and save it at your defined interval

## Code Insights better supports large monorepos 

Code Insights now better supports running insights over large monorepos. Insights now use our streaming endpoints to avoid being limited by global network timeouts, have improved retry behavior, and send insights running over explicitly-listed individual monorepos to our persistent backend (see prior highlight above). 
