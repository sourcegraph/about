---
title: "Cody for VS Code v1.18: Now with GPT-4o support"
authors:
  - name: Alex Isken
    url: https://handbook.sourcegraph.com/team/#alex-isken
  - name: Justin Dorfman
    url: https://handbook.sourcegraph.com/team/#justin-dorfman
  - name: Chris Sev
    url: https://x.com/chris__sev
publishDate: 2024-05-15T10:00-01:00
description: "Cody for VS Code v1.18 is now available. We’ve added GPT-4o support for Cody Pro users, plus a new way to add files to chat context directly from your file tree."
tags: [blog]
slug: 'cody-vscode-1-18-0-release'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-18-release/cody-vscode-1.18.0-og-image.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-18-release/cody-vscode-1.18.0-og-image.jpg
---

[Cody for VS Code v1.18](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) is now available. This update adds GPT-4o support for Cody Pro users, the super-fast new model from OpenAI. We’ve also added a new way for you to add files to Cody chat context directly from your file tree.

## GPT-4o support for Cody Pro

[OpenAI just unveiled ](https://openai.com/index/hello-gpt-4o/)its latest flagship model, GPT-4o. It’s two times faster than GPT-4 Turbo while beating its general reasoning benchmark scores.

From our (very early) testing, GPT-4o is a super fast and powerful model to use with Cody, so we’ve rolled it out as an option for Cody Pro users. You can now select it from the model dropdown for chat + commands.

We’ll roll out GPT-4o to Cody Enterprise users in a future release. You can also try out GPT-4o in [s0.dev](https://s0.dev/).

[GIF of 4o]

## Add files as context directly from the file tree

Like human developers, Cody is more capable when using context relevant to a task. Choosing context for Cody should be as easy as possible to make sure it always performs to its max potential.

You can now add files as context for Cody directly from the file tree. Just right-click a file → `Add File to Cody Chat`, and the file path will populate as an `@-mention `in the chat window.

If you don’t already have a Cody chat window open, this option will appear as `right-click` → `New Chat with File.`

[Feature GIF]

## Changelog

See the [changelog](https://github.com/sourcegraph/cody/releases/tag/vscode-v1.18.0) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.

## Thank you

Cody wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

We would love your feedback in our [support forum](https://community.sourcegraph.com/) and on [Discord](https://discord.com/servers/sourcegraph-969688426372825169). Happy Codying!

---

**To get started with Cody [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai)**
