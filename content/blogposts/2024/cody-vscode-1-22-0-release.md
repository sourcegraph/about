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

[Cody for VS Code v1.22](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) is now available. This update brings support for two of Googe’s latest Gemini 1.5 models, Flash and Pro. It also adds buttons for quickly adding current codebase or file context to your chat, plus some UI tweaks to clearly show what files Cody is using as context.

## Support for Gemini 1.5 Flash + Gemini 1.5 Pro

Google recently announced new models in the Gemini family, including Gemini 1.5 Flash and Gemini 1.5 Pro. Both of these models are now available to Cody Pro users in VS Code.

[Gemini 1.5 Flash](https://deepmind.google/technologies/gemini/flash/) is a lightweight model built for speed and efficiency. [Gemini 1.5 Pro](https://deepmind.google/technologies/gemini/pro/) is a larger model optimized for high performance across many tasks. You’ll find Flash under the “Optimzed for Speed” LLM menu and Pro under “Optimized for Accuracy.” 

Both Gemini models use expanded context windows (the same ones we introduced for the Claude 3 models in [v1.14.0](https://sourcegraph.com/blog/cody-vscode-1-14-0-release)):

* 30,000 tokens of user-defined context
* 15,000 tokens of input context

Try them out and let us know what you think!

<Video
  source={{
    mp4: 'blog/cody-vscode-1-22-release/cody-gemini-flash'
  }}
  loop={true}
  caption="Cody chat with Gemini 1.5 Flash"
/>

## Quickly add @codebase and @file to chat

As you’re chattingwith Cody, oucan prompt Cody to use specific context by typing @&lt;repository> or @&lt;file>. When you start a _new_ chat with Cody, both your current repository and current file are pre-populated in the chat window. 

We’re making it easier to add these @-mentions to the chat window for followup messages (or in case you accidentally delete them).

When you type `@` in the chat window, you’ll now see “Current Codebase’ and “Current File” in the dropdown, and clicking them adds the respective @-mentions to the chat.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-22-release/cody-context-buttons.png"
  alt="Cody's current codebase and current file context buttons"
/>

## See the exact context used for followup messages

When you start a new chat in Cody, you’ll see a message showing the context that’s used to respond to the first question. For followup messages after that point, only _net-new_ context would be shown as a line item in the chat. This was meant to show that all previous context _plus_ the new context was used, but this wasn’t super clear.

Now, Cody shows net-new context and will mention that prior messages are also being used as context, making it super clear that context used earlier in a thread is not lost of discarded for followups.

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
