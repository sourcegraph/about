---
title: "Cody for VS Code v0.18 release"
authors:
  - name: Taylor Sperry
    url: https://handbook.sourcegraph.com/team/#taylor-sperry
  - name: Tim Lucas
    url: https://handbook.sourcegraph.com/team/#tim-lucas
  - name: Kalan Chan
    url: https://handbook.sourcegraph.com/team/#kalan-chan
  - name: Justin Dorfman
    url: https://handbook.sourcegraph.com/team/#justin-dorfman
  
publishDate: 2023-12-05T10:00-01:00
description: "The Cody for VS Code v0.18.0 update introduces a new chat interface, allowing for side-by-side chat windows and improved context control, and more."
tags: [blog]
slug: "cody-vscode-0-18-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/blog-vscode-v018-release/cody-vscode-v0-18-og.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/blog-vscode-v018-release/cody-vscode-v0-18-og.png
---

The Cody for VS Code v0.18.0 update introduces a new chat interface, allowing for side-by-side chat windows and improved context control, including a reworked context dropdown that shows file names and line ranges, and an Enhanced Context button for better LLM responses.


## New Chat Interface

Chats now open alongside your code, in a larger window, without needing the Cody sidebar open. This means you can have multiple chats open side-by-side and configure them to give more space to read longer code blocks. You can also manage your chats directly in the sidebar.

<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/blog-vscode-v018-release/blog-v018-new-chat-interface-001.gif"
  alt="Cody for VS Code v0.18.0 Release"
  caption="Optional image caption"
/>



## Context Controls

Cody’s chat view has a completely reworked context dropdown that shows not just the file names but also the exact line ranges that Cody used to provide a chat response. This helps you understand exactly what additional context was included. You can also click any of the context items to open the file with line range selected.

<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/blog-vscode-v018-release/blog-v018-context-controls-002.gif"
  alt="Cody for VS Code v0.18.0 Release"
  caption="Optional image caption"
/>


You can now control whether Cody fetches additional context (e.g. Embeddings), using the new Enhanced Context button in the chat message text input. When enabled, Cody fetches embeddings and includes them with your message to get the best responses from the LLM. When disabled, only @-included files or symbols with be included as context.


<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/blog-vscode-v018-release/blog-v018-mention-003.png"
  alt="Cody for VS Code v0.18.0 Release"
  caption="Optional image caption"
/>


We’ve also updated @-mentioning a file or symbol (@#-) in chat so it now supports fuzzy filename searching, letting you quickly find the context you’d like Cody to  include:


<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/blog-vscode-v018-release/blog-v018-discord-004.png"
  alt="Cody for VS Code v0.18.0 Release"
  caption="Optional image caption"
/>



## Autocomplete Improvements


<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/blog-vscode-v018-release/blog-v018-autocomplete-multiline-005.jpg"
  alt="Cody for VS Code v0.18.0 Release"
  caption="We listened to your community feedback and worked on adding multi-line autocompletes."
/>


__

Autocomplete is now better at detecting when you need to generate a block of code, giving you a single multi-line suggestion instead of needing to generate it line-by-line:


<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/blog-vscode-v018-release/blog-v018-autocomplete-multiline-006.jpg"
  alt="Cody for VS Code v0.18.0 Release"
  caption="Optional image caption"
/>


We also extended these multi-line completions to code within brackets, so Cody now generates fully expanded parameters for you in a single suggestion:


<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/blog-vscode-v018-release/blog-v018-trigger-007.png"
  alt="Cody for VS Code v0.18.0 Release"
  caption="Optional image caption"
/>


If you want to request an autocompletion suggestion manually, we’ve updated the command so it now appears properly labeled in the VS Code command palette and keybindings:


<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/blog-vscode-v018-release/blog-v018-editing-008.jpg"
  alt="Cody for VS Code v0.18.0 Release"
/>



## Code Editing Improvements

We’ve made a huge range of improvements to Cody’s code editing command, including increased quality of generated code, auto-applying of edits, auto-formatting of code, streaming responses, a new “Retry” option to retry an edit with an updated prompt, and 3 new code actions:



* Ask Cody to Edit
* Ask Cody to Generate
* Ask Cody to Document


<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/blog-vscode-v018-release/cody-vscode-v0-18-010.png"
  alt="Cody for VS Code v0.18.0 Release"
  caption="Ask Cody to Generate"
/>


<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/blog-vscode-v018-release/blog-v018-trigger-009.jpg"
  alt="Cody for VS Code v0.18.0 Release"
/>



## Inline Chat Removed

We've removed inline chat as part of the new chat interface changes. Inline chat was built on top of VS Code’s File Commenting API, which proved too difficult to provide a reliable and intuitive chat experience and provide high-quality chat responses. We’ll continue to revisit inline chat experiences as the VS Code team releases non-private APIs available for others to use.


## Changelog


See the [changelog](https://github.com/sourcegraph/cody/releases/tag/vscode-v0.18.0) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.


## Thank you

Cody wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.


<hr style={{marginTop:"2rem",marginBottom:"2rem"}} />

To get started with Cody, [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai).
