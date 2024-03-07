---
title: "Cody for VS Code v1.2.0 release"
authors:
  - name: Tim Lucas
    url: https://handbook.sourcegraph.com/team/#tim-lucas
  - name: Justin Dorfman
    url: https://handbook.sourcegraph.com/team/#justin-dorfman
  
publishDate: 2024-01-25T10:00-01:00
description: "Cody for VS Code v1.2.0 is now available and includes updated chat history navigation, redesigned chat message editing, improved chat context limit handling, and a number of other bug fixes and improvements."
tags: [blog]
slug: "cody-vscode-1-2-0-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/vscode-v1-2-0-blog/cody-vscode-1.2.0-og-image.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/vscode-v1-2-0-blog/cody-vscode-1.2.0-og-image.png
---

[Cody for VS Code](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) v1.2.0 is now available and includes updated chat history navigation, redesigned chat message editing, improved chat context limit handling, and a number of other bug fixes and improvements.

## Chat: Updated chat list and a new history button

The chats sidebar now groups your chats by when they were last updated, so you can more easily find your recent chats at a glance:

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/vscode-v1-2-0-blog/image-001.png"
  alt="Cody v1.2.0: updated chat list and a new history button"
/>

We’ve also added a new Chat History button at the top of your chat tabs, so you can navigate between chats (and search chats) without opening the Cody sidebar:

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/vscode-v1-2-0-blog/image-002.png"
  alt="Cody v1.2.0: Chat history"
/>

A big thank you to [Deepak Kumar](https://github.com/deepak2431) for contributing to these changes!

## Chat: Removal of slash commands in chat

We have removed slash commands from the chat interface; however, they are still executable from the Cody sidebar, command palette, and context menu.

This also means that typing '/' in chat no longer displays a list of commands.

When executing a default command, you can see the underlying prompt instead of the command name. This enhancement offers improved visibility by allowing you to discern the underlying prompt when executing a default command. This increased visibility enables you to adjust the prompt using the new editing process.

## Chat: Redesigned chat editing

We’ve updated the chat interface to make it easier to edit chat messages or start a new chat quickly:

<Video
  source={{
    mp4: 'blog/vscode-v1-2-0-blog/video-001'
  }}
  loop={true}
  title="Chat: Redesigned chat editing"
/>

You can now hit Enter to edit your message immediately without waiting for the stream to finish. This allows for quicker experimentation and iteration and less dependence on sending follow-up messages to clarify your question (which can also fill up your chat’s context window).

We’ve also fixed several chat editing bugs, including the ability to @-include files, run slash commands, and show the edit buttons more consistently in the transcript:

<Video
  source={{
    mp4: 'blog/vscode-v1-2-0-blog/video-002'
  }}
  loop={true}
  title="Chat: Redesigned chat editing"
/>

## Chat: Improved context window handling

We’ve made several changes to the handling of the context window behind chats:

* The allocation of the LLM context window used for transcript messages has been expanded, so chats are now better at remembering past contexts.
* The context limit error-like notifications in chat have been removed while we investigate better ways of giving you visibility on what is included or excluded from context.


## Edits: Relabeled action buttons

The action buttons that appear after performing a Cody code edit have been relabeled to be clear, and “Edits Applied” is now called “Show Diff”:

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/vscode-v1-2-0-blog/image-003.png"
  alt="Cody v1.2.0: Clearer Edit action buttons"
/>

## Custom command (beta) updates

We’ve made some changes to custom commands:

* Support for running custom edit commands from the chat window has been fixed.
* Removed the `context.codebase` custom command property based on low usage.

Please continue [sending us feedback](https://github.com/sourcegraph/cody/issues/new?assignees=&labels=clients%2Fvscode%2Cfeedback&projects=sourcegraph%2F387&template=feedback.yml&title=feedback%3A+) on custom commands while they’re in beta. Need some inspiration for custom commands? Make sure to check out [Codyception by Kynlo](https://cody.kynlo.co.uk/).


## Changelog

See the [changelog](https://github.com/sourcegraph/cody/releases/tag/vscode-v1.2.0) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.


## Thank you

If you missed it above, we mentioned two individuals in this post, **Deepak and Kynlo**. They make Cody better by contributing code and answering new user questions, ​​among other things. We want to ensure they know how much we appreciate their contributions and the other Cody Experts like **Rayykuun, Tino, and k8grl**. [Join us in Discord](https://discord.com/servers/sourcegraph-969688426372825169), and give them a thanks!

💖 Also, a big thank you to everyone else who contributed, filed issues and sent us feedback. 


---

**To get started with Cody [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai)**


---

Previous release: [Cody for VS Code v1.1.0](/blog/cody-vscode-1.1.0-release)