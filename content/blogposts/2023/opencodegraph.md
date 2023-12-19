---
title: "Hack with us on OpenCodeGraph, an experimental OSS project for code context"
authors:
  - name: Quinn Slack
    url: https://handbook.sourcegraph.com/team/#sts=Quinn%20Slack
publishDate: 2023-12-19T22:00-07:00
description: "See contextual info about code from your dev tools in your editor, in code review, and anywhere else you read code."
tags: [blog]
slug: 'opencodegraph'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/opencodegraph-blog.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/opencodegraph-blog.png
---

In time for holiday hacking, we’re releasing an experiment we’re calling [OpenCodeGraph](https://opencodegraph.org/), a way for you to see contextual info about code from your dev tools in your editor, in code review, and anywhere else you read code.

For example, you can click from your editor to production metrics dashboards:

TODO SCREENSHOT/GIF

<!-- TODO add from https://github.com/sourcegraph/sourcegraph/pull/58166/files -->

Or you can see what a React component looks like in your storybook component library:

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/screencast-vscode-storybook-v0.gif" width="800" height="547" alt="See what a React component looks like, using OpenCodeGraph" />

Or you can make it so everyone who opens a repository in VS Code sees doc links alongside your custom-set code patterns (if you want people to stop asking you the same question and get them to actually RTFM):

TODO SCREENSHOT/GIF

It’s easy to add support for:

- more providers: any service that knows stuff about code: logging, o11y, static analysis, docs, infra, etc.
- more clients: today it supports [VS Code](https://opencodegraph.org/docs/clients/vscode), [GitHub](https://opencodegraph.org/docs/clients/github) (in code and PR views via a Chrome extension) and [Sourcegraph Code Search](https://opencodegraph.org/docs/clients/sourcegraph), and soon it’ll support [Cody](https://opencodegraph.org/docs/clients/cody)

We’re building a platform on top of Sourcegraph to give Cody context beyond just the code, and this project is another step for us to explore more ways to give devs _all_ the information they need to do their job.

All this contextual info about code is obviously helpful for humans, but it will be even more helpful for code AI tools such as [Cody](https://cody.dev) that will eventually consume this information as we build out OpenCodeGraph. After all, a code AI tool probably needs to see the error logs (not just the code) to fix the damn bug, etc.

Get started at [opencodegraph.org](https://opencodegraph.org), hack on it with us in the [sourcegraph/opencodegraph](https://github.com/sourcegraph/opencodegraph) repository (Apache 2-licensed), and join #opencodegraph in the [Sourcegraph Discord](https://about.sourcegraph.com/community) to chat. We’ll be hacking on it over the holidays, adding support for a lot more context providers and clients. (And if this OpenCodeGraph experiment goes well, it’ll make Sourcegraph Code Search and Cody better in the future.)