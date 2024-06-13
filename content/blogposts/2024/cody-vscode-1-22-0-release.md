---
title: "Cody for VS Code v1.22: Introducing Gemini 1.5 Flash and Pro support"
authors:
  - name: Alex Isken
    url: https://handbook.sourcegraph.com/team/#alex-isken
  - name: Justin Dorfman
    url: https://x.com/jdorfman
  - name: Chris Sev
    url: https://x.com/chris__sev
publishDate: 2024-06-12T10:00-01:00
description: "Cody for VS Code v1.22 adds Gemini 1.5 Flash and Pro models, new buttons for adding file and codebase context to the chat, and UI updates to show exactly what context is used and when."
tags: [blog]
slug: 'cody-vscode-1-22-0-release'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-22-release/cody-vscode-1.22-og-image.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-22-release/cody-vscode-1.22-og-image.jpg
---

[Cody for VS Code v1.22](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) is now available. This update supports two of Google’s latest Gemini 1.5 models, Flash and Pro. It also adds buttons for quickly adding the current codebase or file context to your chat and some UI tweaks to clearly show what files Cody is using as context.

## Support for Gemini 1.5 Flash + Gemini 1.5 Pro

Google recently announced new models in the Gemini family, including Gemini 1.5 Flash and Gemini 1.5 Pro. Both models are now available to Cody Pro and Enterprise users in VS Code.

[Gemini 1.5 Flash](https://deepmind.google/technologies/gemini/flash/) is a lightweight model built for speed and efficiency. [Gemini 1.5 Pro](https://deepmind.google/technologies/gemini/pro/) is a larger model optimized for high performance across many tasks. Flash is under the “Optimized for Speed” LLM menu, and Pro is under “Optimized for Accuracy.” 

Both Gemini models use expanded context windows (the same ones we introduced for the Claude 3 models in [v1.14.0](https://sourcegraph.com/blog/cody-vscode-1-14-0-release)):

* 30,000 tokens of user-defined context
* 15,000 tokens of input context

Try them out, and let us know what you think!

<Video
  source={{
    mp4: 'blog/cody-vscode-1-22-release/cody-gemini-flash'
  }}
  loop={true}
  caption="Cody chat with Gemini 1.5 Flash"
/>

## Quickly add @repository and @file to chat

While using chat in Cody, you can prompt it to use specific context by typing @\<repository\> or @\<file\>. When you start a _new_ chat with Cody, your current repository and file are pre-populated in the chat window.

We’re making it easier to add these @-mentions to the chat window for follow-up messages (or in case you accidentally delete them).

When you type `@` in the chat window, you’ll see “Repository“ and “Current File” in the dropdown. Clicking them adds the respective @-mentions to the chat.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-22-release/cody-context-buttons-2.png"
  alt="Cody's current codebase and current file context buttons"
/>

## See the exact context used for follow-up messages

When you start a new chat in Cody, you’ll see a message showing the context used to respond to the first question. For follow-up messages after that point, only _net-new_ context was shown as a line item in the chat previously.  The chat would actually use all previous and new contexts, but this wasn’t clear.

Now, Cody shows net-new context and mentions that prior messages are also being used as context, making it more evident that prior context in a thread is preserved for follow-ups.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-22-release/cody-prior-context.png"
  alt="Cody showing that prior context was used in chat"
/>

## Changelog

See the [changelog](https://github.com/sourcegraph/cody/releases/tag/vscode-v1.22.0) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.

## Thank you

Cody wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

We value your feedback in our [support forum](https://community.sourcegraph.com/c/cody/5), [Discord](https://discord.com/servers/sourcegraph-969688426372825169), and [GitHub](https://github.com/sourcegraph/cody/discussions). Happy Codying!

---

To get started with Cody, [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai).
