---
title: "Cody for VS Code v0.12 release"
authors:
  - name: Kalan Chan
    url: https://handbook.sourcegraph.com/team/#kalan-chan
  - name: Tim Lucas
    url: https://handbook.sourcegraph.com/team/#tim-lucas
publishDate: 2023-10-04T10:00-07:00
description: "Smart selection for `/doc` and `/test`, Inline Documentation with /doc, New custom command modes, New code block actions in chat"
tags: [blog]
slug: "cody-vscode-0-14-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-0-14-release/cody-vscode-0.14.0-og-image.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-0-14-release/cody-vscode-0.14.0-og-image.jpg
---

[Cody for VS Code](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) v0.14 is now available and includes improvements to the `/doc` and `/test` commands, a new mode configuration for custom commands, and experimental smart selection.


## Smart selection for `/doc` and `/test`

You can now use the `/doc` and `/test` commands without selecting any code first, and Cody will use the position of your cursor to guess out what you're wanting to document or code.

<img alt="Screenshot of an smart selection" src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-0-14-release/smart-select.png" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:628}} />

This feature is still under development, please give it a test and provide feedback.
## Inline Documentation with /doc

The `/doc` command now adds the generated documentation directly above your selected code. You no longer need to copy and paste the generated documentation from the chat view.

<img alt="Screenshot of an inline doc generation" src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-0-14-release/inline-doc-2.png" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:628}} />


## New custom command modes 

Custom commands now support a new `mode` configuration field that allows commands to be customized for how Cody should execute them:

- `inline` (default) - Runs the prompt in the inline chat window 
- `edit` - Runs the prompt on the selected code for refactoring workflows
- `insert` - Runs the prompt and inserts the response on top of the selection

This enables custom commands to be tailored for specific use cases like refactoring or documentation generation.

<!-- TODO add link to updated docs here -->

## New code block actions in chat

We added a new "Save to File..." button on code blocks in the chat view. This allows you to easily extract and save code Cody generates to a file in your project.

<img alt="Screenshot of an Save To File in chat" src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-0-14-release/save-to-file.png" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:628}} />


### Changelog

See the [changelog](https://github.com/sourcegraph/cody/blob/main/vscode/CHANGELOG.md) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.

### Thank you

Cody is [open source](https://github.com/sourcegraph/cody), and wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

<hr style={{marginTop:"2rem",marginBottom:"2rem"}} />

To get started with Cody, [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai).
