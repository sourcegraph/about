---
title: "OpenCtx update (May 2024): @-mentions and information from your dev tools, shown everywhere you read/write code"
authors:
  - name: Quinn Slack
    url: https://slack.org
publishDate: 2024-05-20T08:00-07:00
description: "It's annoying for humans to bop between tools while coding. It's impossible for code AI. We're trying to solve both problems with the OpenCtx open standard."
tags: [blog]
slug: 'openctx-at-mentions-for-code-ai'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/OpenCtx-May2024/openctx-og-image.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/OpenCtx-May2024/openctx-og-image.png
---

For devs, it’s quite annoying to switch among tons of different tools when coding: open the issue in Linear or Jira, jump into Figma, find the PR, look up the error on Sentry, check the traces on Jaeger, and so on.

A few months ago we set out to improve that with an experiment we call [OpenCtx](https://openctx.org) (Apache 2.0 OSS), a super simple standard for bringing tiny links and info chips from all these tools into anywhere you read code...

In your editor:

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/screencast-vscode-storybook-v0.gif" width="800" height="547" alt="See what a React component looks like, using OpenCtx" style={{marginTop:"10px"}} />

In code review:

<img src="https://storage.googleapis.com/sourcegraph-assets/opencodegraph/screenshot-github-pr-prometheus-browser-v1.png" width="635" height="261" alt="Click on a metric in code to see the Prometheus dashboard" style={{marginTop:"10px"}} /> {/* From https://github.com/sourcegraph/sourcegraph/pull/58166/files */}

And in code search:

<img src="https://storage.googleapis.com/sourcegraph-assets/openctx/screenshot-codesearch-grafana-v0.png" width="562" height="283" alt="See Prometheus dashboard links from Sourcegraph" style={{marginTop:"10px"}} />

Yes, you *could* install editor extensions for all those tools in just the right way to get something similar in your editor, but that’ll be a lot of work and doesn’t help you in your code review tool. And even if *you* got it set up just right, good luck getting your entire team to do the same.

As we hacked on it and shared it with other devs and customers, we heard some things over and over again:

- Pretty much every dev admits to sometimes being too lazy to check the expensive observability tools their company pays for when debugging an issue where they’d probably be helpful.
- Most devs need to check their internal docs or ask someone on team chat to get the current way (not the deprecated way) to check user analytics or feature flag stats for a certain feature.
- Most companies have some internal dev tools that are poorly integrated and will remain so because it’s not worth it to build good editor extensions for them.

OpenCtx can help with all of these things by making other dev tools’ information visible right in the editor or code review.

(While it's still an experimental project, it's been heavily validated by devs and our customers, and we're working hard to ship an OpenCtx beta in Sourcegraph's [code search](https://sourcegraph.com/code-search) and [Cody](https://cody.dev) that you all will love.)

# Next: @-mentions for code AI to consume

But the problem's getting worse. Now it’s not just human devs who need to bop between all their dev tools. Code AI tools (like our [Cody](https://cody.dev)) also need to tap all these tools for context:

- To fix the damn bug, the code AI needs to see the error message from Sentry or Splunk or Datadog.
- To build a new feature, the code AI needs to see the Linear or Jira or GitHub issue and the Figma mocks.
- To suggest API changes, the code AI needs to see all call sites and runtime traces.
- To review code, the code AI needs to see your design docs in Google Docs or Notion.
- To write idiomatic code, the code AI needs to see your coding standards doc in your wiki or Confluence.

Sure, code AI often gets lucky and performs surprisingly well on these tasks *without* the right context. But given better context, the same LLM can solve more complex problems. Everyone calls this technique "RAG" now, but I much prefer how [Steve Yegge referred to it as "cheating."](https://sourcegraph.com/blog/cheating-is-all-you-need)

(By the way, more context improves the one-shot performance of models. But you can also feed context about the correctness of code back into the system and perform repeated iterations to get to the final correct code. This is what I call the [ƒ(code)](https://slack.org/context-first), and [Steve Yegge calls it the self-driving IDE](https://sourcegraph.com/blog/the-self-driving-ide-is-coming).)

So, as planned, we're extending OpenCtx to also support @-mentions of any information in other dev tools. That means in [Cody](https://cody.dev) and other OpenCtx-supported clients, when you're chatting about code with AI, you can @-mention an issue, logs, docs, mocks, traces, etc., and the content will be shown to the AI alongside your chat message to give you a better answer.

Today, we're shipping some experimental pieces to push this forward (all open-source under the Apache 2.0 license):

- An @-mention [context provider for web pages](https://openctx.org/docs/providers/web), so you can include the contents of any web page in a code AI chat.
- Support for OpenCtx @-mentions in [Cody](https://cody.dev) chat, which supports GPT-4o, Claude 3 Opus, Gemini 1.5 Pro, Mixtral 8x22B, and Ollama local models. (The Cody client is [open source](https://github.com/sourcegraph/cody).)
- The [Cody for VS Code](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) prerelease build due later today on the marketplace will support web page @-mentions for all users in Cody chat.
- [`@openctx/vscode-lib`](https://www.npmjs.com/package/@openctx/vscode-lib), an npm package that makes it easy to add support for OpenCtx in any other VS Code extension that does code AI chat. (See [how Cody uses it](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/cody%24+%40openctx/vscode-lib&patternType=keyword&sm=0).)
- [2 new OpenCtx protocol methods](https://openctx.org/docs/creating-a-provider) to support these features: `meta` (to show which dev tools you can @-mention) and `mentions` (to query for mentionable things after the user types `@`).

There are tons of cool demos that could be made about OpenCtx @-mentions, but we want to get feedback from our own usage and community members' usage before pitching this experimental feature to end users. Tone down the hype, you might say. We're excited to hear your feedback and see what kinds of OpenCtx providers (to bring in information from other dev tools) and clients (to integrate with more editors, code hosts, etc.) you build!

## OpenCtx is an open standard

Not only is OpenCtx open source (Apache 2), it's designed to be open. [OpenCtx providers are just URLs](https://openctx.org/docs/faq) that implement an open standard, so everybody can participate freely and equally. This is important because devs deserve to be able to use the best tools and integrate them with each other.

---

Check out [openctx.org](https://openctx.org), see the code in [sourcegraph/openctx](https://github.com/sourcegraph/openctx) (Apache 2.0), [follow @sqs](https://twitter.com/sqs) for updates, and discuss stuff in the [forum](https://community.sourcegraph.com/).

Also: we're hosting an in-person hack week May 25-31 in Singapore, so if you're around and want to build OpenCtx support for your favorite dev tools or editor, [hit us up](https://x.com/Sourcegraph)!
