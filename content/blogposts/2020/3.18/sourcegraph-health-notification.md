---
title: "Getting notified about the health of Sourcegraph is now easier"
authors:
  - name: Robert Lin
    url: https://handbook.sourcegraph.com/company/team#robert-linRobert Lin
publishDate: 2020-07-20T06:00-07:00
tags: [blog]
slug: sourcegraph-health-notification
heroImage: /blog/3.18-sourcegraph-health-notification.png
published: true
---

We continue to make improvements to Sourcegraph’s out-of-the-box instrumentation and monitoring. You can now configure critical alerts to go to Slack, PagerDuty, Opsgenie, webhooks, or email, so it's easier than ever before to get notified about critical issues.

Alerts are now delivered with detailed information and include links to potential solutions:

![Sourcegraph health alerts](https://storage.cloud.google.com/sourcegraph-assets/blog/3.18/healthy-sourcegraph.png "Sourcegraph health alerts")

Additionally, we now monitor container health and over/under-provisioning in all deployment modes, so you will get alerts if Sourcegraph needs more resources or could do with less.

To get started with alerting, refer to [our documentation](https://docs.sourcegraph.com/admin/observability/alerting). If you run into any issues or questions, please [let us know](https://github.com/sourcegraph/sourcegraph/issues/new/choose)!

GitHub issue: [#11452](https://github.com/sourcegraph/sourcegraph/issues/11452)
