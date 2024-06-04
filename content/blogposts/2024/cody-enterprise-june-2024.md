---
title: "Cody Enterprise: Introducing Context Filters plus updates to context windows and LLM choice"
authors:
  - name: Kelvin Yap
    url: https://handbook.sourcegraph.com/team/#kelvin-yap
publishDate: 2024-06-04T10:00-01:00
description: "Cody Enterprise is getting an upgrade, making it more secure for sensitive code, improving its use of context, and adding support for the latest GPT-4o LLM."
tags: [blog]
slug: 'cody-enterprise-june-2024'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-enterprise-june-2024/cody-enterprise-june-2024-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-enterprise-june-2024/cody-enterprise-june-2024-hero.png
---

This week, we’re rolling out several improvements to Cody Enterprise, making it more secure for sensitive code and improving its use of context.

We’re introducing Context Filters, safeguards to prevent sensitive code from being sent to third-party LLM providers. We’re also increasing the amount of context that can be passed into Cody, so users can ask questions about larger files (or larger portions of their codebase) that previously exceeded Cody’s context limit. The JetBrains IDE extension has also been significantly upgraded and is now generally available.

## Safeguard your code with Cody Context Filters

A common refrain we hear from enterprises interested in AI coding assistants is their concerns about data privacy, IP protection, and the risk of exposing or compromising sensitive code. They don’t want their most sensitive data sent to third-party LLM providers, where it could get leaked or used for training purposes.

Cody Context Filters let you choose which repositories Cody can and cannot use as the context in its requests. More importantly, they prevent sensitive code from being passed to third-party LLMs.

By default, Cody Enterprise has no restrictions on the repos it can use for context in requests to third-party LLMs, but admins can configure Context Filters via the `cody.contextFilters` field with `include` or `exclude` rules.

* **Include:** Cody can only use content from repositories with names matching specified patterns.
* **Exclude:** Cody can use all repositories for context except for those with names matching the specific patterns.

When both `include` and `exclude` rules are specified, Cody will use content from any repository that matches the `include` patterns but does not match any `exclude` filter. In the example below, Cody can access content from repositories with names starting with `github.com/sourcegraph`, but it will exclude files from the `/cloud` repository.


```json
"cody.contextFilters": {
  "include": [
    {
      "repoNamePattern": "^github\\.com\\/sourcegraph\\/.+"
    }
  ],
  "exclude": [
    {
      "repoNamePattern": "^github\\.com\\/sourcegraph\\/cloud$"
    }
  ]
}
```



Context Filters are available for Cody Enterprise customers in JetBrains, VS Code, and the Cody web client. To access it, you’ll need to meet the following requirements:



* A valid Cody Enterprise license and running Sourcegraph version >=5.4.0
* A Cody client meeting the following version specs: VS Code >=1.20.0 or JetBrains >=6.0.0
* The `cody-context-filters-enabled` feature flag set to true

You can find more information on Context Filters and requirements [in the docs](https://sourcegraph.com/docs/cody/capabilities/ignore-context).

## ChatGPT-4o is now available for Cody Enterprise

In a fast-moving field like LLMs, it’s important to have access to the latest and greatest on the market. This access to LLMs is core to how we build Cody, and for security-conscious enterprises, we provide the same data privacy and protections regardless of the LLM you use.

Hot on the heels of our [support for Claude 3](https://sourcegraph.com/blog/claude-3-now-available-in-cody), Cody Enterprise now supports [ChatGPT-4o](https://openai.com/index/hello-gpt-4o/). ChatGPT-4o is OpenAI’s latest model. It’s two times faster than GPT-4 Turbo and performs better than its general reasoning benchmark score.

ChatGPT-4o will be available in the Sourcegraph release coming later this week, and admins can [configure their instance](https://sourcegraph.com/docs/cody/core-concepts/cody-gateway#configuring-custom-models) to use it once they’ve upgraded. You can also try it out and compare it against other models today in our [LLM Litmus Test](https://s0.dev/) at Sourcegraph Labs.

## Smarter and larger context windows for Claude 3 Opus, Sonnet, and ChatGPT-4o

We [recently announced](https://sourcegraph.com/blog/cody-vscode-1-14-0-release) larger context windows for Cody Free and Cody Pro users, and we’re bringing these updated context windows to Cody Enterprise in this week’s Sourcegraph release.

For Claude 3 Sonnet and Opus models, we’ve increased the maximum input and output context limits:

* 30,000 input tokens of user-defined context (user @-mentioned files)
* 15,000 input tokens of continuous context (user messages and context that is sent to the LLM to help it recall earlier parts of a continuous conversation)

This update means two things:

* You can now push way more context into Cody, including multiple large files, so that you can ask questions about larger amounts of code
* You can have much longer back-and-forth chats with Cody before it starts to forget the context from earlier in the conversation

We’ve also increased the output token limit to 4,000 tokens for all messages generated by Cody’s underlying LLMs. This means you shouldn’t see Cody's responses getting cut off mid-answer anymore. This output limit update applies to all models.

Note for BYOK customers: the increase in context limits can increase the number of tokens per response, leading to higher LLM costs. You can optionally set your own context limits in the site admin configuration.

## Cody is now generally available for JetBrains IDEs

Another core philosophy behind building Cody is ensuring it works where you work. Specifically for enterprises, we know many of you get your work done in JetBrains IDEs, and we’re excited to announce that Cody for JetBrains is now generally available.

The GA extension brings a long list of updates to JetBrains, including all-new commands, inline code editing, multi-repo context search, and many improvements to performance and stability. We’ve also added proxy support for enterprise environments.

For more information about all of the updates to the JetBrains extension, [read our announcement blog](https://sourcegraph.com/blog/cody-for-jetbrains-is-generally-available).

## Get started with Cody Enterprise

If you’re interested in using Cody Enterprise, [contact us](https://sourcegraph.com/contact/request-info). Existing Cody Enterprise customers should upgrade to the latest Sourcegraph release, available later this week, to take advantage of the new features we’ve announced today.
