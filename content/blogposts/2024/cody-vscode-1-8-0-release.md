---
title: "Cody for VS Code v1.8.0 release"
authors:
  - name: Kalan Chan
    url: https://handbook.sourcegraph.com/team/#kalan-chan
  - name: Beatrix Woo
    url: https://handbook.sourcegraph.com/team/#beatrix-woo
publishDate: 2024-03-06T10:00-01:00
Cody for VS Code v1.8.0 is now available and includes support for Claude 3, local Ollama models, @-mentioning line numbers, keybindings for custom commands, and automatic updating of the local search index.
tags: [blog]
slug: "cody-vscode-1-8-0-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.8.0/cody-vscode-1.8.0-og-image.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.8.0/cody-vscode-1.8.0-og-image.png
--- 

[Cody for VS Code](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) v1.8.0 is now available and includes support for Claude 3, local Ollama models, @-mentioning line numbers, keybindings for custom commands, and automatic updating of the local search index.


## Support for Claude 3

For Cody Pro users, Cody now supports the new [Claude 3](https://www.anthropic.com/news/claude-3-family) models Claude 3 Opus and Claude 3 Sonnet for Chat, Code Editing and Commands.

Claude 3 Sonnet is the faster model, but produces answers with a lower level of intelligence. Claude 3 Opus is the most powerful model, providing the highest quality code output and answer quality.



![](https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.8.0/claude3.png)



## Local Ollama models for chat and commands (experimental)

Cody now supports using [Ollama](https://ollama.com) to run local models for chat and commands, available for Cody Pro users.

To setup Cody chat to use Ollama:

1. Download Ollama from https://ollama.com/download
2. Launch Ollama (ensure the Ollama logo appears in your menu bar)
3. Pull a model down from the [Ollama Library](https://ollama.com/library) (e.g. `ollama pull gemma:7b-instruct-q4_K_M`)
4. In your Cody VS Code extension settings, set `cody.experimental.ollamaChat` to `true`
5. Open a new chat in Cody
6. In the new chat panel, you should see the chat model you've pulled in the dropdown list



![](https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.8.0/localollama.png)


## @-File now supports line numbers

You can now specify line numbers when you @-mention files in chat, by appending ':line-range' after the file name, allowing you to @-mention parts of large files. We've also updated the Explain Code and Find Code Smells commands to take advantage of this, so it's clearer what lines of code the commands are referencing.

![](https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.8.0/@file-line-numbers.gif)



## Keybinding Support for Custom Commands

Any user-defined custom command can now have a keyboard shortcut assigned. Simply search for `cody.command.custom.CUSTOM_COMMAND_NAME` (e.g. `cody.command.custom.commit`) in the Keyboard Shortcuts editor to add keybinding.


![](https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.8.0/keybindings.png)


## Automatic updating of local search index

The local search index, used by Cody Free & Cody Pro, now automatically updates every 24 hours to ensure up-to-date code is used for context, reducing the number of confusing or inaccurate responses.

## Changelog

See the [changelog](https://github.com/sourcegraph/cody/releases/tag/vscode-v1.8.0) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.


## Thank you

Cody wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

As always, we value your feedback in [Discord](https://discord.com/servers/sourcegraph-969688426372825169) and [GitHub](https://github.com/sourcegraph/cody/discussions). Happy Codying!


<hr style={{marginTop:"2rem",marginBottom:"2rem"}} />

To get started with Cody, [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai).
