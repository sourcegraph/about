---
title: "Cody for VS Code v0.12 release"
authors:
  - name: Kalan Chan
    url: https://handbook.sourcegraph.com/team/#kalan-chan
  - name: Tim Lucas
    url: https://handbook.sourcegraph.com/team/#tim-lucas
  - name: Beatrix Woo
    url: https://handbook.sourcegraph.com/team/#beatrix-woo  
publishDate: 2023-10-04T10:00-07:00
description: "inline /doc generation, new custom command modes, smart selection context, and saving chat code to files."
tags: [blog]
slug: "cody-vscode-0-14-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.14.0-og-image.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.14.0-og-image.jpg
---

[Cody for VS Code](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) v0.14 is now available and includes improvements to the `/doc` and `/test` commands, a new mode configuration for custom commands, and experimental smart selection.

## Inline Documentation with /doc

The `/doc` command now adds the generated documentation directly above your selected code. You no longer need to copy and paste the generated documentation from the chat view.

<!-- TODO add example screenshot here -->

## Smart selection for `/doc` and `/test`

You can now use the `/doc` and `/test` commands without selecting any code first, and Cody will use the position of your cursor to guess out what you're wanting to document or code.

(image)

This feature is still under development, and doesn't yet handle cases xyz. Please give it a test and provide feedback.

<!-- TODO add example screenshot here -->

## New custom command modes 

Custom commands now support a new `mode` configuration field that allows commands to be customized for how Cody should execute them:

- `inline` (default) - Runs the prompt in the inline chat window 
- `edit` - Runs the prompt on the selected code for refactoring workflows
- `insert` - Runs the prompt and inserts the response on top of the selection

This enables custom commands to be tailored for specific use cases like refactoring or documentation generation.

<!-- TODO add example screenshot here -->

## New code block actions in chat

We added a new "Save to File..." button on code blocks in the chat view. This allows you to easily extract and save code Cody generates to a file in your project.

<!-- TODO add example screenshot here -->


### Changelog

See the [changelog](https://github.com/sourcegraph/cody/blob/main/vscode/CHANGELOG.md) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.

### Thank you

Cody is [open source](https://github.com/sourcegraph/cody), and wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

<hr style={{marginTop:"2rem",marginBottom:"2rem"}} />

To get started with Cody, [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai).
