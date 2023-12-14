---
title: 'Sourcegraph Cody is Generally Available'
authors:
  - name: 'Author'
publishDate: 2023-12-13T10:00-07:00
description: 'Today, we announce the general availability of Cody 1.0, a new AI coding assistant that uses intelligent code context to answer technical questions, generate code, and suggest completions in your editor.'
tags: [blog]
slug: 'cody-is-generally-available'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-is-generally-available/cody-is-ga-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-is-generally-available/cody-is-ga-hero.png
---

Today, we announce the general availability of Cody 1.0, a new AI coding assistant that uses intelligent code context to answer technical questions, generate code, and suggest completions in your editor.

Unlike traditional AI coding tools that have only simple local context, Cody searches and navigates your code to integrate relevant context into its responses, similar to how a savvy human developer would (but of course at robot speeds).

Cody's context engine also differs from agent-based context fetchers in some other assistants, which employ a sequence of decisions orchestrated by a language model. The issue we've found with this approach is that it compounds the latency and randomness of multiple serial inference requests, leading to poor and unreliable context quality.

The Cody context engine makes use of the institutional knowledge we've acquired over the past decade at Sourcegraph building fast and deep code context for developers. Indeed, the name, "Sourcegraph", is a reference to our knowledge graph of code, which provides crucial context for both developers and AI code assistants alike. We'll cover more of the technical details of our approach below, but first, an overview of Cody's features.

Cody is available as an editor extension for VS Code (GA), JetBrains (beta), and Neovim (experimental). It provides the following in your editor:

- Code completions as you type using a context-enhanced open-source LLM (StarCoder)
- Context-aware chat that provides the option of using GPT-4 Turbo, Claude 2, GPT-3.5 Turbo, Claude Instant...**and now Mixtral-8x7B!**
- Doc and unit test generation, along with AI quick fixes for common coding errors
- AI-enhanced natural language code search

Cody's chat can also be enabled for use in the Sourcegraph Code Search app.

With this GA announcement, Cody is officially ready for both personal and professional coding. Cody is available in two tiers: Cody Free and Cody Pro. Cody Free is identical to Cody Pro but has rate limits on use. Cody Pro will be free through the holidays until February 2024, after which it will be $9/month.

[Start using Cody for free today](https://sourcegraph.com/cody). If you’re already using Cody, make sure to update to the latest extension version to get the latest features.

## Context-enhanced code completions

Cody provides fast single and multi-line completions.

<Video 
  source={{
    mp4: 'blog/cody-is-generally-available/cody-autocomplete-tsx'
  }}
  loop={true}
  title="Cody multiline autocomplete"
/>

Cody's code completions differ from standard AI code completions through the use of an open source LLM enhanced with Cody's context engine. Specifically, we've found the type of context that helps a lot with completions is graph context. Graph context takes advantage of Sourcegraph’s expertise in parsing code and producing a graph that captures semantic understanding of your code. Pulling in this semantic code graph into context reduces the rate of common LLM hallucinations like type errors and imaginary function names.

By using the open source StarCoder LLM, we've been able to make completion latency very low. It also gives us access to signals such as token-level log probabilities, which we can incorporate into end-user signals.

The combination of these qualities allows us to hit a Completion Acceptance Rate of 30% or higher, depending on the scenario. And we’re just getting started. Upcoming versions of Cody will integrate more of Sourcegraph's universal code graph into the context engine. Users of Cody will see these improvements in the coming weeks and months.

As just one example of the work we’re doing to continue to improve quality, Cody will soon use deeper graph context to make autocomplete suggestions based on symbols defined elsewhere in your codebase. Here you can see the results of our internal testing of Cody (with deeper graph context) next to Copilot. Cody is able to reference the JavaScript `person` interface to determine what variables to pass into the `personMessage` function.

JavaScript definitions of `person` and `personMessage`
<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-is-generally-available/cody-person-interface.png"
/>

Copilot
<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-is-generally-available/copilot-autocomplete.png"
/>

Cody
<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-is-generally-available/cody-bfg-autocomplete.png"
/>

Stay tuned to get this and more in a Cody update coming your way soon!

## Codebase-aware chat

There is an increasing awareness within the AI community that context awareness (i.e., Retrieval Augmented Generation) is a critical component of AI systems for knowledge work. Tools like Perplexity have outpaced both traditional search engines and contextless AI chatbots thanks to the speed and accuracy of their context engines. Cody's chat brings this sort of context awareness to your editor.

Chat in Cody makes use of a hybrid dense-sparse vector retrieval system that is tailored for code and documentation. How can you tell the difference that context quality makes for chat? Benchmarks are tricky to establish because answer quality is more subjective than it is, say, with pure code generation. We have a benchmark suite we hope to release soon, but in the meantime, we've developed a simple test we call the Squirrel Test.

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-is-generally-available/squirrel-test-hero.png"
/>

The Turing Test determines whether a human can tell the difference between AI- and human-generated text. The Squirrel Test determines whether an AI can accurately answer a simple question, "What is Squirrel?" For context (see what we did there?), Squirrel is a subsystem of Sourcegraph Code Search that is responsible for serving code navigation actions like "Go to definition" and "Find references." Any human can answer this question accurately with a [single code search](https://sourcegraph.com/search?q=repo%3A%5Egithub%5C.com%2Fsourcegraph%2Fsourcegraph%24+squirrel). Let's see which of these AI assistants can:

<Video 
  source={{
    mp4: 'blog/cody-is-generally-available/cody-squirrel-test'
  }}
  loop={true}
  title="Cody squirrel test"
/>

## Emergent use cases: v0.dev for user-specified libraries

The incorporation of code context into chat LLMs has yielded some interesting emergent use cases of Cody that we didn't anticipate. In addition to asking questions about how your code works, you can also use chat to generate context-aware code. When you ask Cody to generate code, it will perform a code search that pulls in relevant context that gives Cody awareness of the libraries and packages in use and the patterns in the codebase.

Pointing Cody at the [React](https://github.com/facebook/react) repository and a [charting library](https://github.com/chartjs/Chart.js), you can speak into existence a single-page web application that renders various charts in seconds.

<Video 
  source={{
    mp4: 'blog/cody-is-generally-available/cody-building-app'
  }}
  loop={true}
  title="Cody using specified libraries"
/>

Note: this example points Cody to multiple repositories, a feature that is available in Cody within Sourcegraph Code Search today and coming soon to Cody editor extensions.

## Issue planning

Another emergent use case is sketching out an implementation plan for a feature request or bug report. Given the context of an issue description, Cody can search the codebase for files and docs relevant to the issue and suggest a rough plan of attack to implement the new feature or resolve the bug report:

<Video 
  source={{
    mp4: 'blog/cody-is-generally-available/cody-issue-planning'
  }}
  loop={true}
  title="Cody issue planning"
/>

## Design principles: transparency and freedom of choice

Finally, a note on our design philosophy. We've designed Cody's chat to be as transparent as possible. One of our principles is "no invisible magic," so Cody exposes the context used in each request to the user, which is useful for gut-checking Cody's responses and also narrowing in on specific files and functions to modify.

Context goes a long way toward boosting the accuracy of Cody's responses, but it doesn't bring hallucinations down to zero. Some have pointed out that, at some level, [all LLMs do is hallucinate](https://twitter.com/karpathy/status/1733299213503787018). Cody's context engine helps the LLM hallucinate far more accurately and usefully.

Cody is also designed to be able to make use of multiple LLMs. As the model landscape evolves, Cody will integrate the best-in-class LLMs for each type of task, whether completions, chat, or whatever new types of models emerge on the horizon.

## Toil-reducing commands

Cody provides a set of commands that target tedious, toilsome tasks that are important and useful but too often ignored. These include:

- Writing documentation
- Generating unit tests
- Applying simple transformations and edits to code
- Identifying and resolving code smells (i.e., pieces of code that don't follow best practices and therefore don't "smell" right)
- Explaining code

These commands also use Cody's context engine where applicable to generate code and pull in code snippets that are relevant to generating high-quality responses. Take a look at the quality of tests generated by Cody:

<Video 
  source={{
    mp4: 'blog/cody-is-generally-available/cody-unit-test'
  }}
  loop={true}
  title="Cody unit test generation"
/>

We also realized that we could not anticipate every single potential LLM-enhanced command that would be useful to our users. So, we've also provided a way for users to create, save, and share custom commands. The Cody user community has already contributed some commands like the following:

- [Improve variable names](https://github.com/deepak2431/awesome-cody-commands/blob/main/improve-variable-names)
- [Generate release notes](https://github.com/deepak2431/awesome-cody-commands/blob/main/generate-release-notes)
- [Convert HTML to Markdown](https://github.com/deepak2431/awesome-cody-commands/blob/main/html-to-markdown)
- [Convert HTML to Emmet Abbreviation](https://github.com/deepak2431/awesome-cody-commands/blob/main/html-to-emmet-abbr)
- [Explain with Security Analysis](https://github.com/deepak2431/awesome-cody-commands/blob/main/explain-with-security)
- [Write the commit message](https://github.com/sourcegraph/cody/pull/2306)

<Video 
  source={{
    mp4: 'blog/cody-is-generally-available/cody-tailwind'
  }}
  loop={true}
  title="Cody Tailwind custom command"
/>

Cody also enhances VS Code's Code Actions menu (triggered through the appearance of the inline lightbulb icon) with options to quick-fix common issues.

<Video 
  source={{
    mp4: 'blog/cody-is-generally-available/cody-actions'
  }}
  loop={true}
  title="Cody Code Actions"
/>

## AI-enhanced code search

The same context engine that powers Cody's code generation and question-answering capabilities is also used to provide natural language code search.

One of the most frustrating things with traditional code search engines is the inability to find fuzzy or approximate matches to user queries that don't contain a precise string match. Regular expressions can help—but only to a point, and they come with their own bag of annoyances. Cody's natural language search box, still in beta, is a great tool for finding those pieces of code where you can't *quite* remember the function or file name. It’s based on the same expertise we’ve been building from our Code Search product for a decade; think of it as bringing the power of our enterprise-grade tools into your hands, no matter what size your engineering team is.

<Video 
  source={{
    mp4: 'blog/cody-is-generally-available/cody-NLS'
  }}
  loop={true}
  title="Cody natural language search"
/>

We've intentionally made the UI of Cody's natural language search match that of the standard search box. This provides a native editor experience that is information-dense and allows the user to scan the set of possible results quickly. You can use keyboard shortcuts to navigate through the results list, and the results will automatically show up as highlighted in the editor pane.

## Thank you to our community

We’d like to thank our many partners and collaborators.

- To the team at Anthropic, thank you for partnering with us as you build Claude and supporting us in figuring out how to tap it to its full potential. We `<`3 long context windows!
- To OpenAI, thank you for pushing the edge on code generation. GPT-4 is an amazing model, and we're looking forward to incorporating more multi-modal capabilities into Cody soon.
- Thank you to Fireworks for providing a blazing-fast inference environment and being very reactive to our feedback and requests.
- Huge thanks to HuggingFace and ServiceNow for building and releasing StarCoder, which we have adopted as the default model for Cody completions.
- Thank you to the folks at Meta Research for Llama and for pushing for the freedom to innovate and develop open models.

And thank you to the active members of our user and contributor community, with special shoutouts to Arafat Khan, Catalin Pit, Momil Ijaz, Son Luong Ngoc, Tino Wening, Vadim Peretokin, and Deepak Kumar. You are all amazing, and we feel privileged to have you as partners in building Cody. Thank you for reporting bugs, providing detailed feedback, submitting PRs, and, above all, giving Cody a shot when it was still very early.

[Install Cody for free](https://sourcegraph.com/cody)
