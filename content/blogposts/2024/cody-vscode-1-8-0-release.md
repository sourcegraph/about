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


## Claude 3.0 is now available!

For Cody Pro users, Cody now supports the new [Claude 3](https://www.anthropic.com/news/claude-3-family) models Claude 3 Opus and Claude 3 Sonnet for Chat, Code Editing and Commands.

Claude 3 Sonnet is the faster model, but produces answers with a lower level of intelligence. Claude 3 Opus is the most powerful model, providing the highest quality code output and answer quality.



![](https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.8.0/claude3.png)



## Local Ollama models for Chat and Commands

Cody now supports Ollama models for offline usage within chat and commands. Users can now pull open-source Ollama models locally and utilize them from your local environment. 

Here's how to activate this feature:
1. Download Ollama from https://ollama.com/download
2. Launch Ollama (ensure the Ollama logo appears in your menu bar)
3. Choose a chat model (e.g., gemma:7b-instruct-q4_K_M) from the [Ollama Library](https://ollama.com/library)
4. Pull the chat model locally (e.g., ollama pull gemma:7b-instruct-q4_K_M)
5. Enable the cody.experimental.ollamaChat configuration
6. Open a new chat in Cody
7. In the new chat panel, you should see the chat model you've pulled in the dropdown list



![](https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.8.0/localollama.png)


## @-File now supports line numbers

Users can now add line number context to their @-mentioned queries by appending ':line-range' after file names. The line range will be parsed and used to generate more precise code links.

![](https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.8.0/@file-line-numbers.gif)



## Keybinding Support for Custom Commands

Any user-defined custom command can now have a keyboard shortcut assigned. Simply search for `cody.command.custom.CUSTOM_COMMAND_NAME` (e.g. `cody.command.custom.commit`) in the Keyboard Shortcuts editor to add keybinding.


![](https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.8.0/keybindings.png)


## Local Context is now refreshed daily

We have implemented automated daily rebuilds for stale local context indexes used by Symf. The service now checks daily whether the codebase and Git metadata has changed compared to the latest indexed state.

This ensures Cody has an up to date representation of the codebase, and should see fewer confusing or inaccurate responses. 

## Changelog

See the [changelog](https://github.com/sourcegraph/cody/releases/tag/vscode-v1.8.0) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.


## Thank you

Cody wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

As always, we value your feedback in [Discord](https://discord.com/servers/sourcegraph-969688426372825169) and [GitHub](https://github.com/sourcegraph/cody/discussions). Happy Codying!


<hr style={{marginTop:"2rem",marginBottom:"2rem"}} />

To get started with Cody, [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai).
