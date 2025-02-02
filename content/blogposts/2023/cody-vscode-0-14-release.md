---
title: "Cody for VS Code v0.14 release"
authors:
  - name: Kalan Chan
    url: https://handbook.sourcegraph.com/team/#kalan-chan
  - name: Tim Lucas
    url: https://handbook.sourcegraph.com/team/#tim-lucas
publishDate: 2023-10-04T10:00-01:00
description: "Smart selection for /doc and /test, improvements to /doc, a new mode configuration for custom commands, and updated code block action buttons in chat."
tags: [blog]
slug: "cody-vscode-0-14-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-0-14-release/cody-vscode-0.14.0-og-image.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-0-14-release/cody-vscode-0.14.0-og-image.jpg
---

[Cody for VS Code](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) v0.14 is now available and includes improvements to the `/doc` and `/test` commands, a new mode configuration for custom commands, and experimental smart selection.


## Smart selection for /doc and /test

You can now use the `/doc` and `/test` commands without selecting any code first, and Cody will use the position of your cursor to guess out what you're wanting to document or code.

For unit tests, it means you can now generate them by right clicking on a function name and selecting "Cody → Generate Unit Tests". Or using the keyboard, anywhere in a function, by pressing option-c (Mac) or alt-c (Windows/Linux) and running `/test`.

<img alt="Screenshot of an smart selection" src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-0-14-release/smart-select.png" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:628}} />

This feature is still under development, please give it a test and provide feedback.
## Improvements to /doc

The `/doc` command now adds the generated documentation directly above your selected code. You no longer need to copy and paste the generated documentation from the chat view.

 <img alt="Screenshot of an inline doc generation" src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-0-14-release/inline-doc-2.png" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:628}} />
 
We've also improved the `/doc` command's underlying prompt so it now better matches your existing comment styles, generates more concise explanations, and better understands when to use a docstring-style API comment vs a plain code comment.

## New custom command modes 

Custom commands now support a new `mode` configuration field that allows commands to be customized for how Cody should execute them:

- `inline` (default) - Runs the prompt in the inline chat window 
- `edit` - Runs the prompt on the selected code for refactoring workflows
- `insert` - Runs the prompt and inserts the response on top of the selection

See the [custom commands documentation](https://docs.sourcegraph.com/cody/custom-commands) for details on the new `mode` property.

## New Copy, Insert and Save to File buttons

The "Copy" and "Insert at Cursor" actions on chat code blocks are now always visible, accessible via a new bar on the bottom of the code blocks.

We've also added a new "Save to File..." button, allowing you to save the code block directly to a new file in your project.

<img alt="Screenshot of an Save To File in chat" src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-0-14-release/save-to-file.png" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:628}} />


### Changelog

See the [changelog](https://github.com/sourcegraph/cody/blob/main/vscode/CHANGELOG.md) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.

### Thank you

Cody is [open source](https://github.com/sourcegraph/cody), and wouldn't be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

---

**To get started with Cody [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai)**
