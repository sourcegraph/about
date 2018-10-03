---
layout: markdown
title: Integrations
permalink: docs/integrations
---

Sourcegraph integrates with code hosts and code review tools to power code intelligence on code files and code review diffs.

To get started, follow the documentation for [installing and configuring the browser extension](/docs/features/browser-extension).

![GitHub pull request integration](./images/GitHubDiff.png)

## Other integrations

We also offer other integrations for Sourcegraph users, and an API to build on top of Sourcegraph:

- [Editor plugins](/docs/integrations/editor-plugins)
- [Browser extension](/docs/features/browser-extension)
- [Search shortcuts](/docs/features/search-shortcuts)
- [API](/docs/features/api)

## Privacy

Sourcegraph integrations never send any logs, pings, usage statistics, or telemetry to Sourcegraph.com. They will only connect to Sourcegraph.com as required to provide code intelligence or other functionality on public code. As a result, no private code, private repository names, usernames, or any other specific data is sent to Sourcegraph.com.

If connected to a private, self-hosted Sourcegraph instance, Sourcegraph browser extensions will send notifications of usage to that private Sourcegraph instance only. This allows the site admins to see usage statistics.
