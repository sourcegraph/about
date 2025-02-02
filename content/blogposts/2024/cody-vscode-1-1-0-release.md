---
title: "Cody for VS Code v1.1.0 release"
authors:
  - name: Alex Isken
    url: https://handbook.sourcegraph.com/team/#alex-isken
  - name: Ara Khan
    url: https://github.com/arafatkatze
  - name: Justin Dorfman
    url: https://handbook.sourcegraph.com/team/#justin-dorfman
  
publishDate: 2024-01-12T10:00-01:00
description: "Introducing Cody v1.1.0: Enhanced Edit Code Command with Contextual Awareness, Offline Autocomplete with Code Llama Integration, and Improved Chat @-Mentions, aimed at boosting coding productivity in VS Code."
tags: [blog]
slug: "cody-vscode-1.1.0-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.1.0-og-image.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.1.0-og-image.png
---

We're thrilled to announce the release of Cody v1.1.0, our latest update to our VS Code extension. This release is packed with new features and improvements designed to streamline coding workflows and enhance productivity.


#### Edit Code Command with Contextual Awareness

Cody now supports an enhanced Edit Code command. With this update, you can provide additional context to your coding queries. 

Cody now has an enhanced Edit Code command. With this update, you can add additional context when prompting Cody to make direct edits to your code. This results in Cody better understanding your code so that the edits it makes are more accurate. To do this, simply use the "`@`" symbol to include entire files or "`@#`" to include specific symbols. This powerful feature allows Cody to understand your code in a more holistic manner, leading to more accurate and context-aware responses.

<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.1.0-at-bang-1.gif"
  alt="Edit Code Command with Contextual Awareness"
  caption="Edit Code Command with Contextual Awareness"
/>

#### Autocomplete with Code Llama Integration

In our ongoing quest to expand the horizons of AI-enhanced coding, we're excited to unveil a groundbreaking experimental feature - Cody's offline mode! With the assistance of Ollama, developers can now harness the capabilities of large language models directly on their own machines. This innovative approach allows for the integration of Code Llama's LLM into your local VS Code workspace, providing real-time, inline suggestions as you code.

**Try it:** 
1. Download, Install, and run [Ollama](https://ollama.ai/download)
1. Download Code Llama model: `ollama pull codellama:7b-code`
1. Update Cody's VS Code settings to use the `unstable-ollama` autocomplete provider.

<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.1.0-ollama-2.gif"
  alt="Autocomplete with the help of Ollama"
  caption="Autocomplete with the help of Ollama"
/>

#### Improved Chat @-Mentions

We've listened to your feedback and made improvements to the chat @-mention feature. Folders named 'bin/' are no longer filtered out; instead, they are ranked lower, ensuring that your most relevant code is prioritized. 

<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.1.0-bin-3.png"
  alt="Improved Chat @-Mentions"
  caption="Improved Chat @-Mentions"
/>

### Changelog

See the [changelog](https://github.com/sourcegraph/cody/compare/vscode-v1.0.5...vscode-v1.1.0) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.

**Update:** We have had 2 patches since the `1.1.0` release (`v1.1.1` and `v1.1.2`).

### Thank you

Cody wouldn't be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

As always, we value your feedback in [Discord](https://discord.com/servers/sourcegraph-969688426372825169) and [GitHub](https://github.com/sourcegraph/cody/issues/new/choose). Happy Codying!

---

**To get started with Cody [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai)**


---

Previous release: [Cody for VS Code v0.18](/blog/cody-vscode-0-18-release)