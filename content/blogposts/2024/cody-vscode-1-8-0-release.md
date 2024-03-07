---
title: "Cody for VS Code v1.8.0 release"
authors:
  - name: Kalan Chan
    url: https://handbook.sourcegraph.com/team/#kalan-chan
  - name: Beatrix Woo
    url: https://handbook.sourcegraph.com/team/#beatrix-woo
  - name: Tim Lucas
    url: https://handbook.sourcegraph.com/team/#tim-lucas
publishDate: 2024-03-06T10:00-01:00
description: "Cody for VS Code v1.8.0 is now available and includes support for Claude 3, local Ollama models, @-mentioning line numbers, keybindings for custom commands, and automatic updating of the local search index."
tags: [blog]
slug: "cody-vscode-1-8-0-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.8.0/cody-vscode-1.8.0-og-image.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.8.0/cody-vscode-1.8.0-og-image.png
--- 

[Cody for VS Code](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) v1.8.0 is now available and includes support for Claude 3, local Ollama models, @-mentioning line numbers, keybindings for custom commands, and automatic updating of the local search index.


## Support for Claude 3

For Cody Pro users, Cody now supports the new [Claude 3](https://www.anthropic.com/news/claude-3-family) models Opus and Sonnet for Chat, Code Editing and Commands.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.8.0/claude3-2.png"
  alt="Choosing Claude 3 Opus in Cody for VS Code Chat"
/>

Claude 3 Sonnet is the faster model, but produces answers with a lower level of intelligence.

Claude 3 Opus (recommended) is the most powerful model, providing the highest quality code output and answer quality.

## Local Ollama models for chat and commands (experimental)

Cody now supports using [Ollama](https://ollama.com) to run local models for chat and commands, available for Cody Pro users. To setup Cody chat to use Ollama:

1. [Download Ollama](https://ollama.com/download)
2. Launch Ollama (ensure the Ollama logo appears in your menu bar)
3. Pull a model down from the [Ollama Library](https://ollama.com/library) (e.g. `ollama pull gemma:7b-instruct-q4_K_M`)
4. In your Cody VS Code extension settings, set `cody.experimental.ollamaChat` to `true`
5. Open a new chat in Cody
6. In the new chat panel, you should see the chat model you've pulled in the dropdown list

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.8.0/localollama.png"
  alt="Choosing an Ollama model in Cody for VS Code Chat"
/>

## @-file now supports line numbers

You can now specify line numbers when you @-mention files in chat, by appending ':line-range' after the file name. This allows you to @-mention parts of large files, and makes it clearer what code Explain Code and Find Code Smells commands are referring to.

![Specifying line numbers in @-mentions in Cody for VS Code](https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.8.0/@file-line-numbers.gif)

## Keybinding support for custom commands

You can now bind keyboard shortcuts to quickly run your custom commands. To bind a keyboard shortcut, open the Keyboard Shortcuts editor and search for "cody.command.custom." to see the list of your custom commands.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.8.0/keybindings.png"
  alt="Setting custom command keybindings in Cody for VS Code"
/>

## Automatic updating of local search index

The local search index, used by Cody Free & Cody Pro, now automatically updates every 24 hours to ensure up-to-date code is used for context, reducing the number of confusing or inaccurate responses.

## Changelog

See the [changelog](https://github.com/sourcegraph/cody/releases/tag/vscode-v1.8.0) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.


## Thank you

Cody wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

As always, we value your feedback in [Discord](https://discord.com/servers/sourcegraph-969688426372825169) and [GitHub](https://github.com/sourcegraph/cody/issues/new/choose). Happy Codying!


---

**To get started with Cody [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai)**


---

Previous release: [Cody for VS Code v1.6.0](/blog/cody-vscode-1-6-0-release)