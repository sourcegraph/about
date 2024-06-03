---
title: "Cody for JetBrains is now generally available"
authors:
  - name: Alex Isken
    url: https://handbook.sourcegraph.com/team/#alex-isken
  - name: Justin Dorfman
    url: https://x.com/jdorfman
  - name: Chris Sev
    url: https://x.com/chris__sev
publishDate: 2024-06-04T10:00-01:00
description: "Cody for JetBrains is now generally available. The extension has improved performance, plus new commands and inline edits to help you stay in flow while writing code in any JetBrains IDE."
tags: [blog]
slug: 'cody-for-jetbrains-is-generally-available'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-for-jetbrains-is-generally-available/jetbrains-ga-blog-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-for-jetbrains-is-generally-available/jetbrains-ga-blog-hero.png
---

Cody for JetBrains IDEs is now generally available for all users. It offers better performance, increased stability, and new features to help you stay in flow and reduce day-to-day toil in your workflow.

The JetBrains extension now supports new commands, inline code edits, and all of Cody’s staple features like multi-line autocomplete, hot-swappable LLMs, and multi-repo context search.

[Download Cody for Jetbrains here.](https://plugins.jetbrains.com/plugin/9682-cody-ai-coding-assistant-with-autocomplete--chat) 

<YouTube
  id=""
/>

## Better autocomplete with more hotkeys

Cody provides multi-line autocomplete as you type. We’ve squashed some visual and performance bugs, and the autocomplete experience is much more polished.

We’ve also added new hotkeys for using autocomplete:

- <kbd>Tab</kbd> to accept a suggestion
- <kbd>Alt + \[ </kbd> (Windows) or <kbd>Opt + \[</kbd> (macOS) to cycle suggestions
- <kbd>Alt + \ </kbd> (Windows) or <kbd>Opt + \ </kbd> (macOS) to manually trigger autocomplete 

<Video
  source={{
    mp4: 'blog/cody-for-jetbrains-is-generally-available/jetbrains-cody-autocomplete-ga.mp4'
  }}
  loop={true}
/>

## Chat with multi-repo context

We’ve updated Cody’s sidebar chat interface and improved the UX for selecting repositories to use as context. 

You will now see an interface in the sidebar for selecting chat context, and you can toggle local project context on or off. 

If you’re a Cody Enterprise user, you will also have the option of adding remote repositories from your Sourcegraph instance. You can type the name of your repos into this interface and select up to 10. Cody will search against those repos and retrieve relevant files to answer your chat prompts.

<Video
  source={{
    mp4: 'blog/cody-for-jetbrains-is-generally-available/jetbrains-cody-multi-repo-chat-ga.mp4'
  }}
  loop={true}
/>

## LLM switching

Cody is designed around the principle of choice; it works with multiple IDEs, any git code host, and various LLMs to fit your preferences.

Cody Pro users can hot-swap between multiple of the latest models from the extension, including GPT-4o, Claude 3 Opus, Mixtral 8x22B, and others.

<Video
  source={{
    mp4: 'blog/cody-for-jetbrains-is-generally-available/jetbrains-cody-llm-switching-ga.mp4'
  }}
  loop={true}
/>

## Refreshed Chat and Edit commands to keep you in flow

Cody has grown beyond the chat window and can now edit code directly in your files. We’ve used this functionality to rebuild Cody’s commands and split them into two categories: **edit commands** and **chat commands**.

Chat commands are the commands you are already using. They return outputs from Cody in the chat window. These are:

- Explain Code: explains a code snippet or file at a high level, including key properties, arguments, and algorithms.
- Smell Code: analyzes a selected code snippet and provides suggestions for how to improve quality.

Edit commands are new and trigger code edits directly in your files (and sometimes in net-new files). These commands are new in this release and include:

- Edit Code
- Document code
- Generate unit tests

### Edit code

This command lets you prompt Cody to perform direct edits (like refactors or bug fixes) on any code selection.

Select the code you want to edit and press <kbd>Shift + Ctrl + Enter</kbd>. This hotkey opens a floating edit box where you can describe the change you want to make. You can also reposition and adjust the edit box size on your screen. Use the <kbd>Up</kbd> arrow to cycle through previous prompts.

Once you submit your prompt, Cody will implement the change. You can accept, undo, or view a diff for the change or iterate on your prompt and have Cody retry the change. 

You can also place the cursor on a blank line in your file without highlighting any code. In this case, the command will insert code at the cursor according to your prompt.

<Video
  source={{
    mp4: 'blog/cody-for-jetbrains-is-generally-available/jetbrains-cody-edit-code-ga.mp4'
  }}
  loop={true}
/>

### Generate unit tests

This command replaces Cody’s old unit testing command, which was limited to outputting test code in the chat window. Now, when you prompt Cody to generate unit tests, it will:

* Determine if you’re using a test framework
* Determine if you already have a test file created 
* Insert new unit tests directly in the existing test file or create a new file if none exists

Try the new command in the Cody sidebar or with the <kbd>Shift + Ctrl + T</kbd> hotkey.

<YouTube
  id=""
/>

### Document code

We’ve also rebuilt Cody’s documentation command, and Cody will insert docs directly into your file instead of generating docs in a sidebar chat window.

You can trigger the documentation command with the <kbd>Shift + Ctrl + H</kbd> hotkey.

<Video
  source={{
    mp4: 'blog/cody-for-jetbrains-is-generally-available/jetbrains-cody-document-code-ga.mp4'
  }}
  loop={true}
/>

## GPT-4o support for Pro and Enterprise

OpenAI’s latest model, [GPT-4o](https://openai.com/index/hello-gpt-4o/), is now available for Pro and Enterprise users. It’s two times faster than GPT-4 Turbo and beats its general reasoning benchmark scores.

You can use GPT-4o for chat and commands, and the model's speed makes it an excellent option for code edit commands. Cody Pro users will see GPT-4o as an option in the LLM dropdown menu today. Cody Enterprise admins can choose GPT-4o as an option for their teams once they update their Sourcegraph instance to the latest version (coming later this week).

You can also try it in our [LLM Litmus Test](https://s0.dev/) at Sourcegraph Labs.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-for-jetbrains-is-generally-available/cody-gpt-4o-ga.png"
  alt="LLM selection dropdown"
/>

## Expanded context windows

For anyone who missed it, we rolled out new context windows for Cody Free and Cody Pro users in [v5.5.8](https://sourcegraph.com/blog/cody-jetbrains-5-5-8-release). Cody now supports _way more context_ when used with Claude 3 models. This means a few things:

- You send more context to Cody when asking questions. You can `@-mention` more and larger files that would’ve previously gone over the context limit.
- You can have far longer back-and-forth chats with Cody before it forgets the context from earlier in the conversation. Previously, Cody would tend to “forget” context early in a conversation when the total amount of context was too large.

We’ve also expanded Cody’s output token limit, meaning answers won’t get cut off mid-text anymore. You can read more about [context token limits in the docs](https://sourcegraph.com/docs/cody/core-concepts/token-limits).

## Stability and performance improvements

We’ve squashed some bugs and significantly improved the JetBrains extension's performance and stability. We expect all JetBrains users to feel these improvements, and Apple Silicon users will see much greater stability.

## Thank you to our community

**Thank you** to all of our JetBrains beta users. Your feedback has allowed us to bring JetBrains to GA. We appreciate all of your thoughtful insights, requests, and support. 

If you’re new to Cody, we’d love your feedback too! You can submit feedback along with questions and comments to [our support forum](community.sourcegraph.com).

## Get started with Cody

Users with existing Free, Pro, or Enterprise accounts can [install Cody for JetBrains here](https://plugins.jetbrains.com/plugin/9682-cody-ai-coding-assistant-with-autocomplete--chat). 

If you don’t yet have a Cody account, [create one for free](https://sourcegraph.com/cody).
