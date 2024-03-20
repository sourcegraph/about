---
title: "Cody for VS Code v1.10.0 release"
authors:
  - name: Kalan Chan
    url: https://handbook.sourcegraph.com/team/#kalan-chan
publishDate: 2024-03-020T10:00-01:00
description: "Cody for VS Code v1.10.0 is now available, this release includes support for Claude 3 Haiku, several improvements to doc string generation, and debugging."
tags: [blog]
slug: "cody-vscode-1-10-0-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.10.0/cody-vscode-1.10.0-og-image.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.10.0/cody-vscode-1.10.0-og-image.png
--- 

[Cody for VS Code](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) v1.10.0 is now available, this release includes support for Claude 3 Haiku, several improvements to doc string generation, and debugging. 


## Support links for Cody Pro and Enterprise

We have made it easier for Cody Pro and Enterprise users to get assistance when needed, support links are now more prominently displayed so users can easily access help. Cody Pro and Enterprise users can now get more timely responses by filling out a support form. 

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.8.0/claude3-2.png"
  alt="Choosing Claude 3 Opus in Cody for VS Code Chat"
/>

Claude 3 Sonnet is the faster model, but produces answers with a lower level of intelligence.

Claude 3 Opus (recommended) is the most powerful model, providing the highest quality code output and answer quality.

## Improved Document Command

Generating documentation from code has been improved to automatically detect documentable code blocks and provide hints to quickly generate doc strings. When your cursor is on a documentable symbol in JavaScript, TypeScript, Go or Python, a "Opt/Alt+D to Document" ghost text will appear. Pressing Opt/Alt+D will immediately generate documentation for that code block.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.8.0/localollama.png"
  alt="Choosing an Ollama model in Cody for VS Code Chat"
/>

## Claude 3 Haiku is now available for Cody Pro 

Cody Pro users now have access to Anthropic’s latest AI model - Claude 3 Haiku. This new model offers significantly faster speeds while maintaining quality and coherence. Claude 3 Haiku is available in the LLM selection dropdown, read more about Claude 3 Haiku [here](https://www.anthropic.com/news/claude-3-haiku). 

## Better Debugging for Cody

We've added new commands and shortcuts to make debugging Cody easier, these improvements enable debugging and accessing logs. 

- Debug commands now grouped in command palette under "Cody Debug"
- New sidebar menu item to open the output channel
- New settings menu button to enable debug mode and output channel


<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.8.0/keybindings.png"
  alt="Setting custom command keybindings in Cody for VS Code"
/>



## Changelog

See the [changelog](https://github.com/sourcegraph/cody/releases/tag/vscode-v1.8.0) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.


## Thank you

Cody wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

As always, we value your feedback in [Discord](https://discord.com/servers/sourcegraph-969688426372825169) and [GitHub](https://github.com/sourcegraph/cody/issues/new/choose). Happy Codying!


---

**To get started with Cody [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai)**


---

Previous release: [Cody for VS Code v1.6.0](/blog/cody-vscode-1-6-0-release)