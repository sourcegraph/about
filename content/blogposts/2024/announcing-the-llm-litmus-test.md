---
title: "Announcing the LLM Litmus Test"
publishDate: 2024-04-16T19:00-07:00
authors:
  - name: Chris Sev
    url: https://twitter.com/chris__sev
tags: [blog]
slug: 'announcing-the-llm-litmus-test'
published: true 
description: "Cody gets even better with multi-repo context support, faster completions, improved commands, and much more. Read on for all the details."
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/announcing-the-llm-litmus-test/llm-litmus-test-og-image.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/announcing-the-llm-litmus-test/llm-litmus-test-og-image.png
---

Today, I'm excited to announce that we're launching a new initiative called [Sourcegraph Labs](https://s0.dev). It's our place to run AI experiments that can help make us more productive coders.

The first AI experiment we've created is called the [LLM Litmus Test](https://s0.dev)! This is a tool that lets you compare different large language models (LLMs) like GPT-4 Turbo, Mixtral 8x22b, and Claude 3 Opus.

We've given you the choice of which LLM, but today we're providing a tool to help you pick YOUR LLM.

## What can you do with the LLM Litmus Test?

These are the main things that you would find valuable with this tool:

1.  **Compare LLMs**: Ask any general coding question to two different LLMs and see which is better
2.  **Chat with a Repo**: Add any public repo and ask questions. How to get started with a repo? Where to find certain components... Even where to look to solve an issue

[Try out the LLM Litmus Test ->](https://s0.dev)

[![s0.dev LLM Litmus Test](https://storage.googleapis.com/sourcegraph-assets/blog/announcing-the-llm-litmus-test/s0.png)](https://s0.dev)

## Comparing LLMs for Coding Assistance

Here at Sourcegraph, we believe in giving users the choice of which LLM to use for their coding tasks.

When you use Cody, we let you pick your LLM for:

-   Chatting with your code
-   Editing your code inline
-   Creating custom commands

We're a big believer in being LLM agnostic. Each LLM has its own strengths for specific tasks. But we've always gotten the question:

> Which LLM is right for me?

As with almost all things in software development, the answer is "it depends". Now that the [LLM Litmus Test](https://s0.dev) has been launched, we can say "try them all out for yourself".

## Personalized code suggestions with Cody Context

In addition to comparing LLMs, you can also add a GitHub repo, or repos, and turn on Cody Context. This means that we will search that repo for relevant code snippets to pass to an LLM so that you can get the most accurate and relevant answers.

[![LLM with Cody Context](https://storage.googleapis.com/sourcegraph-assets/blog/announcing-the-llm-litmus-test/llm-cody-context.png)](https://s0.dev)

You can compare the same LLM with and without Cody Context to see how big of a difference having the correct context makes in your answers.

## What LLMs can I compare?

Right now, you can compare the following LLMs.

-   Claude 3 Opus
-   Claude 3 Sonnet
-   Claude 3 Haiku
-   Claude 2.1
-   GPT-4 Turbo (April 2024)
-   GPT-3.5 Turbo
-   Mixtral 8x7B
-   Mixtral 8x22B Preview

![Supported LLMs](https://storage.googleapis.com/sourcegraph-assets/blog/announcing-the-llm-litmus-test/llms-supported.png)

## Real-world use cases

Here are some examples that we've created so that you can dive right in and see LLM comparisons.

### Example 1: Explaining React's useCallback() vs useMemo()
This example is using Claude 2.1 vs Claude 3 Opus.

[Try it out yourself ->](https://s0.dev/share/0653557d-d185-4386-9363-d6c3c67dac4a)

[![LLM Litmus Test React Example](https://storage.googleapis.com/sourcegraph-assets/blog/announcing-the-llm-litmus-test/llm-litmus-test-example-1.png)](https://s0.dev/share/0653557d-d185-4386-9363-d6c3c67dac4a)

### Example 2: Implementing a pie chart

In this example, I am comparing GPT-4 Turbo (April 2024) vs Claude 3 Opus. I have added the recharts library which is a React charting library.

[Try it out yourself ->](https://s0.dev/share/779d024e-67d5-47cc-9552-3d85364d6be9)

[![LLM Litmus Test Chart Example](https://storage.googleapis.com/sourcegraph-assets/blog/announcing-the-llm-litmus-test/llm-litmus-test-example-2.png)](https://s0.dev/share/779d024e-67d5-47cc-9552-3d85364d6be9)

## What's next?

We have plenty of AI experiments coming up next. We want Sourcegraph Labs to be a place we can iterate quickly to create practical AI projects that you would actually want to use.

Here's a few experiments we're noodling on:

-   **Repo Ramp-Up**: Onboard new users or open source contributors do your repo with an AI generated FAQ
-   **Issue Sherpa**: Use AI to get guidance on how to solve a specific issue

## Try it out and share your feedback

We think the LLM Litmus Test will be a handy tool to have in your developer toolbox. It can help you choose the right AI assistant for your needs and even teach you new techniques from your own code. 

The LLM Litmus Test is available starting today - just head over to [s0.dev](https://s0.dev) to take it for a spin. Let us know what you think!