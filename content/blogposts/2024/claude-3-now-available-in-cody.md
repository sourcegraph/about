---
title: "Claude 3 is now available for all Cody users"
publishDate: 2024-04-10T19:00-07:00
description: "Claude 3, the latest family of LLMs from Anthropic, is now available to all Cody users at no additional cost. "
authors:
  - name: Alex Isken
    url: https://handbook.sourcegraph.com/team/#alex-isken
  - name: Ado Kukic
    url: https://twitter.com/adocomplete
  - name: Chris Sev
    url: https://x.com/chris__sev
tags: [blog]
slug: 'claude-3-now-available-in-cody'
published: true 
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/claude-3-now-available-in-cody/claude-3-now-available-in-cody-hero.png 
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/claude-3-now-available-in-cody/claude-3-now-available-in-cody-hero.png 

---

New Large Language Models (LLMs) launch nearly every week, and hardly a month goes by without a new model pushing performance benchmarks to new heights. For [Cody](https://sourcegraph.com/cody), we always want to provide the latest and greatest models to users—which is why LLM interoperability is a core feature of the product.

LLM interoperability helps with two things:

* Integrating with the latest models lets Cody become smarter and more capable in short order after new models are released
* As a user, you’re able to choose the models you prefer since Cody supports multiple options interchangeably

Earlier in March, we saw this trend continue with the announcement of the Claude 3 family of models, and today, we’re announcing that **Claude 3 models are now available to all Cody users**.


### Why Claude 3?

Cody has supported Anthropic models since its first release, including Claude 2.0, Claude 2.1, and Claude Instant. In Anthropic’s recent announcement blog, they shared that the Claude 3 family [shows lots of improvements to prior Claude models in the benchmarks](https://www.anthropic.com/news/claude-3-family).

The Claude 3 family includes three models: Haiku (the fastest model), Opus (the most intelligent model), and Sonnet (the in-between model). Anthropic’s blog goes into depth on where each of them shines, but we’ll share some specifics from their blog on why they’re good candidates for Cody:

* All Claude 3 models show better performance in code generation
* Sonnet is comparable in intelligence to Claude 2.1 while being 2x faster
* Opus is a similar speed to Claude 2.1 while being far more intelligent
* Opus excels at the Needle in a Haystack (NIAH) evaluation, which tests the model’s ability to recall information from a large amount of data. This translates to Cody’s need to pull information out of large amounts of code used as context

The Claude 3 models also offer a _huge_ 200K token context window. Cody doesn’t use this entire context window today; we limit [Cody’s context window to roughly 7K tokens](https://sourcegraph.com/docs/cody/core-concepts/token-limits). We do this to ensure Cody doesn’t use _too much_ context and lose track of the most useful context in the process, hurting response quality. Since Claude 3’s Needle in a Haystack performance is improved, and it can more accurately recall relevant information from a large amount of context, we’ll be dramatically expanding Cody’s context window in the coming weeks.

Tl;dr: the Claude 3 models are impressive, and they’re now another option that Cody users can select from as we continue to make Cody more customizable for devs’ preferences.


### Cody’s performance with Claude 3

We rolled out Claude 3 models to our Cody Pro users in March, and we’ve been collecting feedback since then. So far, we’ve seen extremely encouraging signs pointing to the models’ capability when used with Cody.

We also recently launched an AI experiment tool called [LLM Litmus Test](https://s0.dev) to help you compare and contrast different models. You can test Claude 3 vs. Claude 2.1 or even Claude 3 vs. GPT-4 Turbo and generate shareable links with your results.

Using the litmus test, we can see some examples of Claude 3 Opus in action.


**Example 1: Explaining a coding concept (React)**

Here, you can see how Claude 3 Opus does a great job explaining code concepts. Claude 3 explained how to use React’s useContext() in a step-by-step tutorial. Compare that to Claude 2.1, which dropped all the example code in a single code block with less detailed instructions.

<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/claude-3-now-available-in-cody/react-useContext.png"
  alt="Claude explaining React code"
/>

<a href="https://s0.dev/share/f51e6205-0dcb-42d3-8d10-75e6c38cdd22" target="_blank">Check it out yourself →</a>

**Example 2: Explaining a coding concept (Axum)**

We can also compare Claude 3 Opus with GPT-4 Turbo. We asked both models to explain another concept: creating a route in Axum. Both models provided a code block, but Claude 3 Opus did a distinctly better job explaining the code step-by-step.

<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/claude-3-now-available-in-cody/axum-explanation.png"
  alt="Claude explaining Axum code"
/>

<a href="https://s0.dev/share/91ee2667-63b2-4d81-bc72-842fb8567bd7" target="_blank">Check it out yourself →</a>

**Example 3: Explaining existing code**

Let’s also look at an example in the IDE. Here, we asked Cody to explain how an authentication component in our codebase works. Claude 2.1 gave a good (if a little truncated) explanation of how the component works, starting with the props the component receives. Claude 3 Opus gave a much more detailed explanation of how the component works, and it structured the information in a way that was easy to follow. It also went into more detail on the props for the component and which of them are optional. 

<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/claude-3-now-available-in-cody/claude-2.1-auth.png"
  alt="Claude 2.1 explaining code"
/>

<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/claude-3-now-available-in-cody/claude-3-auth.png"
  alt="Claude 3 explaining code"
/>

You can also [check out our recent video from Chris Sev](https://www.youtube.com/watch?v=hDSaeVFmglM) for more examples of Claude 3 + Cody.


### How to access Claude 3 in Cody

Claude 3 models are now available to all Cody users:

**For Claude Free users:** Sonnet is now the default model powering chat and commands for Free users, replacing Claude 2.0. This change was made in the latest VS Code and JetBrains extension versions ([VS Code v1.12.0](https://sourcegraph.com/blog/cody-vscode-1-12-0-release) and [JetBrains v5.5.2](https://sourcegraph.com/blog/cody-jetbrains-5-5-2-release)).

**For Cody Pro users:** Haiku, Sonnet, and Opus are now available as options for chat and commands. Pro users can find them in the model dropdown selector in the latest extension versions.

**For Cody Enterprise users:** Haiku, Sonnet, and Opus models are now options to use for Cody chat and commands. Sourcegraph instance admins are able to switch to Claude 3 models once they upgrade to the latest Sourcegraph release (5.3.9104). [Check out the April release blog for more information](https://sourcegraph.com/blog/release/April-2024).
