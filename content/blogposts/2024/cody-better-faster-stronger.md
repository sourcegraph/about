---
title: "Cody - better, faster, stronger"
publishDate: 2024-02-15T19:00-07:00
authors:
  - name: Ado Kukic
    url: https://twitter.com/adocomplete
tags: [blog]
slug: 'cody-better-faster-stronger'
published: true 
description: "Cody Feb 15 tktktktk"
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/blog-from-slow-to-simd-og.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/blog-from-slow-to-simd-og.png
---

Alongside the [general availability of Cody Enterprise today](http://sourcegraph.com/blog/cody-is-enterprise-ready), we're highlighting some updates that are now available to all Cody users. [Cody](https://sourcegraph.com/cody) is a coding assistant that uses AI and a deep understanding of your codebase to help you write and understand code faster.

The main focus for Cody since the general availability (GA) release back in December has been twofold:

1. Incorporate everything we've learned so far about how developers use AI in the wild into Cody's user experience and

2. [Improve context quality](http://sourcegraph.com/blog/how-cody-understands-your-codebase).

Cody's goal remains to reduce toil in the developer [inner loop](https://sourcegraph.com/blog/developer-productivity-thoughts) by providing intuitive onramps to AI-powered features and the freedom to incorporate the best LLMs, editors, code hosts, and other Software Development Lifecycle (SDLC) tools for the job at hand.

We are building Cody out in [public](https://github.com/sourcegraph/cody), but we are adding proprietary code where needed. We're here to be your pragmatic partner in exploring the use of LLM technology to increase developer productivity. We want to move AI coding assistants from hype to everyday helpfulness.

As we've [noted](https://sourcegraph.com/blog/cheating-is-all-you-need) from the very start, along with model training data, context is the single biggest determinant of response quality in AI coding tools.

![Context](https://lh7-us.googleusercontent.com/YLbTX0xKB_A6WL9sZluilR-P0VoaAgBQIvJDBX4UZ4M21xn7fLlAzikHkp_BxVVb8zLEFY-MTV_MejRLift9f5wCwrK0Ru7yDJwBsMWkylzQa6Mucpf_Rb0bopH6xxvHz-8V5SIASVkPFkuIb6UidVY)

We are constantly experimenting with various context sources ranging from embeddings to SPLADE and Sourcegraph search. Check out a more detailed post on [how Cody knows your entire codebase here](http://sourcegraph.com/blog/how-cody-understands-your-codebase). In this post, we wanted to share our design philosophy on how we are approaching the evolution of Cody, from context to AI-native user experiences and more.

## AI-native UX

We built Cody to seamlessly integrate into your workflow. You can interact with Cody in three ways: **autocomplete**, **chat**, and **commands**.

## Autocomplete / Code Completion

Autocomplete allows Cody to intelligently provide single and multi-line code completion suggestions as you write code in Visual Studio Code. Accepting the suggestions is as simple as hitting the tab key.

<Video
  source={{
    mp4: 'blog/cody-1.4.0/chat-ask-cody-to-explain-terminal-output'
  }}
  loop={true}
  title="Edits: New code editing options"
/>

For autocomplete, our team has been laser-focused on ensuring Cody delivers the highest quality completions with industry-leading speed.

### Faster completions

After a number of optimizations in autocomplete logic, and improved traffic routing between the extension and LLM providers, autocompletions are now **24.1%** faster for single line completions, and **24.9%** faster for multi-line completions.

<Video
  source={{
    mp4: 'blog/cody-1.4.0/chat-ask-cody-to-explain-terminal-output'
  }}
  loop={true}
  title="Edits: New code editing options"
/>

### Improved multi-line completion quality

We've changed the multi-line suggestion algorithm to reduce lower-quality completions.

Today we support multi-line completions for the following file types: `c`, `cpp`, `csharp`, `css`, `dart`, `elixir`, `go`, `html`, `java`, `javascript`, `react`, `php`, `python`, `rust`, 
`svelte`, `typescript`, and `vue`.

### Local inference with Ollama (Experimental)

Cody allows you to run local inference with [Ollama](https://ollama.com/). This means that you can leverage Cody offline and in air-gapped environments. [Community members](https://www.youtube.com/watch?v=gY_E3QBZ-NE) have taken notice and started testing various local LLMs to compare and improve their workflows.

<Video
  source={{
    mp4: 'blog/cody-1.4.0/chat-ask-cody-to-explain-terminal-output'
  }}
  loop={true}
  title="Edits: New code editing options"
/>

## Chat

Chat allows developers to ask technical questions while Cody automatically fetches additional context to help the underlying LLM provide the best possible answer. Cody's chat design philosophy is maximum transparency and choice. We've made a lot of improvements to both the functionality and user experience of the Cody Chat UI.

### Multi-repo context support

For Cody Enterprise users, we are adding the ability to add multiple repositories as a source of context for Cody. While you are typically writing code or making changes in a single repository, you often need to interface with code across multiple repositories. Wouldn't it be great to be able to ask Cody what data you need to pass to a specific API without ever leaving your editor, even though the API implementation lives elsewhere? With multi-repo support, you can.

<Video
  source={{
    mp4: 'blog/cody-1.4.0/chat-ask-cody-to-explain-terminal-output'
  }}
  loop={true}
  title="Edits: New code editing options"
/>

### LLM Choice

Cody allows you to switch between Claude 2.0, Claude 2.1 Preview, Claude Instant, GPT-4 Turbo Preview, GPT-3.5 Turbo, and Mixtra 8x7bl with the click of a button. We are continuously evaluating LLMs and will be adding more options in the future.

Our philosophy when it comes to the underlying LLM is that we want to put you in control. While Claude and GPT-4 remain the 'smartest' models on the market, some of our users have noted how blazing fast Mixtral is and prefer that. We've also noticed that Claude tends to explain code better, while GPT-4 does a better job at generating code examples. At the end of the day, we want to give you the option to choose the best LLM for the task you are performing.

<Video
  source={{
    mp4: 'blog/cody-1.4.0/chat-ask-cody-to-explain-terminal-output'
  }}
  loop={true}
  title="Edits: New code editing options"
/>

For Cody Enterprise users, your admin may select a subset of LLMs for your specific instance that matches your company's needs.

### Cody enhanced context

Cody always cites its sources. This means that you as the developer can inspect the context that was used to generate the response and easily navigate to the relevant code.

<Video
  source={{
    mp4: 'blog/cody-1.4.0/chat-ask-cody-to-explain-terminal-output'
  }}
  loop={true}
  title="Edits: New code editing options"
/>

### Better control over context

You can explicitly tell Cody to use a file for context by mentioning the file using the `@{filename}` convention. At-mentioning a file tells Cody to prioritize and use the specified file as context. If you'd rather use a specific symbol, instead of the whole file, you can use the `@#{symbol}` syntax to tell Cody to use the specified symbol rather than the entire file for context.

<Video
  source={{
    mp4: 'blog/cody-1.4.0/chat-ask-cody-to-explain-terminal-output'
  }}
  loop={true}
  title="Edits: New code editing options"
/>

### New Shortcuts

For Chat, we've added new keyboard shortcuts to streamline the process of starting new chats and revising previous chats:

- Opt + L (Alt + L on Windows) to start a new chat. If you have code highlighted when you hit Opt + L (Alt + L on Windows), the chat context will automatically include that code as its context.

- Cmd + K (Windows + K on Windows) to revise a previous chat, for when you want to rephrase your existing prompt.

- Cmd + / (Windows + / on Windows) to start a new chat within the chat panel.

![](https://lh7-us.googleusercontent.com/bI3StoqAa8PVBK3jAGKLp2-axMPH0y70p4VYV6wr67OpFYbxKSSnBijMF9u5vQCz-KWgNCOL3VDJ1ePpx2BYi9dFLPKf_nsFSVt3v95-Z4kpUgIuL8ioJ9T7LaA0BdkO2oePyXZj2s2_aOcm_8CCfAE)


## Commands

Since the early days of Cody, we've always had a concept of being able to execute repetitive tasks with ease. We are developers after all and we do not like to type the same thing twice if we can help it. Thus Commands were born. Commands allow you to generate, test, and fix code with one-click. With [Custom Commands](https://sourcegraph.com/docs/cody/capabilities/commands#custom-commands), you are able to create your own reusable prompts to accomplish any code AI-related task.

### The Cody command palette

Cody has a redesigned command palette that makes it fast to grok and edit specific selections of code. The palette is accessible through the (configurable) shortcut Opt + K (Alt + K on Windows).

<Video
  source={{
    mp4: 'blog/cody-1.4.0/chat-ask-cody-to-explain-terminal-output'
  }}
  loop={true}
  title="Edits: New code editing options"
/>

The new command palette gives you more control over the code you want the command to execute on. Additionally, with the new command palette you can have the same context selection capabilities as with chat, so using the at-mention to bring in specific files or symbols works the same as well as the ability to choose which LLM model you want to use.

The legacy command palette can still be accessed via the Opt + C (Alt + C on windows) shortcut. Originally, you could run commands directly from the chat window, but it confused users because it wasn't clear where the input for that command came from, e.g. which code do you want to edit? In this release, that's been removed in favor of a much clearer option of making your select code in the editor and then executing a command by clicking on the Cody logo in the top right corner of the Chat window.

<Video
  source={{
    mp4: 'blog/cody-1.4.0/chat-ask-cody-to-explain-terminal-output'
  }}
  loop={true}
  title="Edits: New code editing options"
/>

### Streamlined Test Generation

Our beloved Cody command to generate unit tests has also become much easier to use. Now when you run the Generate Unit Tests command, Cody will automatically create the proper file for your language in the right location. No more copying and pasting tests from the Chat window. Additionally, you can have Cody generate additional tests for more complete coverage of your code.

<Video
  source={{
    mp4: 'blog/cody-1.4.0/chat-ask-cody-to-explain-terminal-output'
  }}
  loop={true}
  title="Edits: New code editing options"
/>

## Cody for JetBrains IDE

Cody for JetBrains features many improvements in core UX and reliability. Cody for JetBrains now supports many of the features we covered above including multi-repo context for enterprise users, LLM choice, and at-mentioned files. Other popular features finding their way into Cody for JetBrains include enhanced local context, improved context visibility, and easy access to chat history.

<Video
  source={{
    mp4: 'blog/cody-1.4.0/chat-ask-cody-to-explain-terminal-output'
  }}
  loop={true}
  title="Edits: New code editing options"
/>

## We're just getting started!

We are shipping new features and improvements to Cody continuously and are proud of the progress we've made so far but there is more to do! We'll continue to iterate and improve the experience for developers.

Stay tuned for more updates and if you haven't already, give [Cody](https://sourcegraph.com/cody) a try today.