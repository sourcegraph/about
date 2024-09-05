---
title: "Code Monitor Webhooks generally available"

authors:
  - name: Kelvin Yap
    url: https://x.com/kelvinyap
    avatar: https://storage.googleapis.com/sourcegraph-assets/blog/kelvin_avatar.png

publishDate: 2024-09-04T21:04-02:00

description: "Webhooks for Code Monitors are now generally available, alerting users whenever a new search result or change appears via a webhook receiver."

tags: [Enterprise, Code Search, Code Monitors]

version: [v5.7.0]

slug: 'code-monitors-ga'

published: true

---

Code Monitors are user-defined queries that alert users whenever a new search result or change appears, and they can trigger actions to run automatically via email, Slack notification, or  webhook. Slack notifications were made generally available in [July’s release](https://sourcegraph.com/blog/release/july-2024), and in this month’s release we are now making webhooks generally available.

You can configure a Code Monitor to send webhook notifications by first creating a webhook receiver that accepts an HTTP POST request with the contents of the webhook notification. Then create or edit an existing Code Monitor and select “Call a webhook”, pasting the webhook URL into the appropriate “Webhook URL” field and saving the Code Monitor.

Read more about how to set up Code Monitor Webhooks in our [docs](https://sourcegraph.com/docs/code_monitoring/how-tos/webhook).