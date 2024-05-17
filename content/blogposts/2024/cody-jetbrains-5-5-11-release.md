---
title: 'Cody for JetBrains v5.5.11: New edit, test, and document commands plus GPT-4o'
authors:
  - name: Justin Dorfman
    url: https://handbook.sourcegraph.com/team/#justin-dorfman
  - name: Alex Isken
    url: https://handbook.sourcegraph.com/team/#alex-isken
publishDate: 2024-05-17T10:00-01:00
description: 'This update overhauls Cody’s command functionality with new unit test, documentation, and code edit commands. We’ve also added GPT-4o support.'
tags: [blog]
slug: 'cody-jetbrains-5-5-1-release'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/jetbrains-5.5.11/cody-jetbrains-5.5.11-og-image.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/jetbrains-5.5.11/cody-jetbrains-5.5.11-og-image.jpg
---

[Cody for JetBrains v5.5.11](https://plugins.jetbrains.com/plugin/9682-cody-ai-coding-assistant-with-autocomplete--chat) is now available! This update overhauls Cody’s command functionality with new unit test, documentation, and code edit commands. We’ve also added GPT-4o support, giving you a super-fast LLM option for chat, commands, and inline edits.

## Fix and refactor code with inline code edits

Cody in JetBrains has grown beyond the chat window and can now edit code directly in your files! You can prompt Cody to perform direct edits, like refactors or bug fixes, to any selection of code.

Select a code snippet (or entire file) to edit and press <kbd>Shift + Ctrl + Enter</kbd>. This will pop open a floating edit box where you can describe the change you want to make. You can also reposition the edit box on your screen.

Once you submit your prompt, Cody will implement the change. You can accept, undo, or view a diff for the change. You can also iterate on your prompt and have Cody retry the change.

<Video
source={{
    mp4: 'blog/jetbrains-5.5.11/cody-jetbrains-inline-code-edits'
  }}
loop={true}
title="Cody editing code inline with the code edit command"
/>

## Generate code-aware unit tests

We’ve rebuilt Cody’s unit testing command using the new code edit functionality. Now, when you prompt Cody to generate unit tests, it will:

- Check if you’re using a test framework
- Check if you already have a test file created
- Insert new unit tests directly in the existing test file or create a new file if none exists

Try out the new command in the Cody sidebar or with the <kbd>Shift + Ctrl + T</kbd> hotkey.

<Video
source={{
    mp4: 'blog/jetbrains-5.5.11/cody-jetbrains-generate-unit-tests'
  }}
loop={true}
title="Cody generate unit tests command"
/>

## Ask Cody to document your code

We’ve also rebuilt Cody’s documentation command. Now, instead of generating documentation in a sidebar chat window, Cody will insert documentation directly into your file.

You can trigger the documentation command with the <kbd>Shift + Ctrl + H</kbd> hotkey.

<Video
source={{
    mp4: 'blog/jetbrains-5.5.11/cody-jetbrains-new-document-code'
  }}
loop={true}
title="Cody generate documentation command"
/>

## GPT-4o support for Cody Pro

OpenAI’s latest model, [GPT-4o](https://openai.com/index/hello-gpt-4o/), is now available for Cody Pro users in JetBrains. It’s two times faster than GPT-4 Turbo while beating its general reasoning benchmark scores.

You can use GPT-4o for chat and commands, and the model's speed makes it a great option for code edit commands. You can also try it out in [s0.dev](https://s0.dev/).

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/jetbrains-5.5.11/jetbrains-4o-option.png"
/>

## Changelog

See the [changelog](https://github.com/sourcegraph/jetbrains/releases/tag/v5.5.11) and [GitHub releases](https://github.com/sourcegraph/jetbrains/releases) for a complete list of changes.

## Thank you

Cody wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

As always, we value your feedback in our [support forum](https://community.sourcegraph.com/) and on [Discord](https://discord.com/servers/sourcegraph-969688426372825169). Happy Codying!

---

**To get started with Cody, [install it from the JetBrains Marketplace](https://plugins.jetbrains.com/plugin/9682-cody-ai-coding-assistant-with-autocomplete--chat).**
