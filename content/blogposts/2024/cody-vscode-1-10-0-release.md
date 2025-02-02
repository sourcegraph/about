---
title: "Cody for VS Code v1.10.0 release"
authors:
  - name: Kalan Chan
    url: https://handbook.sourcegraph.com/team/#kalan-chan
  - name: Justin Dorfman
    url: https://handbook.sourcegraph.com/team/#justin-dorfman
publishDate: 2024-03-21T10:00-01:00
description: "Cody for VS Code v1.10.0 is now available, this release includes support for Claude 3 Haiku, several improvements to doc string generation, and debugging."
tags: [blog]
slug: "cody-vscode-1-10-0-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.10.0-og-image-2x.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.10.0-og-image-2x.png
--- 

[Cody for VS Code](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) v1.10.0 is now available, this release includes support for Claude 3 Haiku, several improvements to doc string generation, and debugging. 


## Support links for Cody Pro and Enterprise

We have made it easier for Cody Pro and Enterprise users to get assistance when needed, support links are now more prominently displayed so users can easily access help. Cody Pro and Enterprise users can now get more timely responses by filling out a support form. 

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.10.0/support1.png"
  alt="Support link in the settings panel"
/>

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.10.0/support2.png"
  alt="Support link in the Cody settings panel"
/>

## New debug options

We've made it easier to generate and access Cody's debug logs, allowing you to debug issues and more easily share that information with Sourcegraph's support team. Please include logs in your bug reports when possible.

- Debug commands are now grouped in command palette under "Cody Debug"
- Added an "Open Output Channel" sidebar menu item, that opens the VS Code output panel with "Cody by Sourcegraph" selected
- Added a debug button in the top right of the Cody settings panel, which sets `{"cody.debug.verbose": true}` and opens the VS Code output panel


<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.10.0/debugging-settings.png"
  alt="debugging options in the settings"
  caption="Export logs and open output channel in the settings panel"
/>


<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.10.0/debugging-command-palette.png"
  alt="debugging options in the command palette"
  caption="All debug commands are also grouped together and are available through the command palette"
/>

## Improved Document Command

Generating documentation from code has been improved to automatically detect documentable code blocks and provide hints to quickly generate doc strings. When your cursor is on a documentable symbol in JavaScript, TypeScript, Go or Python, a "Opt/Alt+D to Document" ghost text will appear. Pressing <kbd>Opt</kbd> / <kbd>Alt</kbd> + <kbd>D</kbd> will immediately generate documentation for that code block.

<Video 
  source={{
    mp4: 'blog/vscode-v1-10-Improved-Document-Command-v2'
  }}
  loop={true}
  title="Improved Document Command"
/>

## GPT-4 Turbo upgrade
For Cody Pro users, [GPT-4 Turbo](https://platform.openai.com/docs/models/gpt-4-and-gpt-4-turbo) now uses the `gpt-4-0125-preview` model. 

## Claude 3 Haiku is now available for Cody Pro 

For Cody Pro users we've added Anthropic's latest AI model, [Claude 3 Haiku](https://www.anthropic.com/news/claude-3-haiku), alongside Sonnet and Opus. This new model offers significantly faster speeds while maintaining quality and coherence. To start using Claude 3 Haiku start a new chat and select it from the list of models:

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.10.0/claude3-haiku.png"
  alt="Claude3 Haiku in the LLM Selection dropdown"
/>



## Changelog

See the [changelog](https://github.com/sourcegraph/cody/releases/tag/vscode-v1.8.0) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.

## Thank you

Cody wouldn't be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

As always, we value your feedback in [Discord](https://discord.com/servers/sourcegraph-969688426372825169) and [GitHub](https://github.com/sourcegraph/cody/issues/new/choose). Happy Codying!

---

**To get started with Cody [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai)**

---

Previous release: [Cody for VS Code v1.6.0](/blog/cody-vscode-1-6-0-release)
