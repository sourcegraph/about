---
title: "Cody for VS Code v0.12 release"
authors:
  - name: Kalan Chan
    url: https://handbook.sourcegraph.com/team/#kalan-chan
  - name: Tim Lucas
    url: https://handbook.sourcegraph.com/team/#tim-lucas
  - name: Beatrix Woo
    url: https://handbook.sourcegraph.com/team/#beatrix-woo  
publishDate: 2023-09-20T10:00-07:00
description: "Improved unit test generation, customizable chat pre-instructions, new custom command documentation, a new claude-instant-infill autocomplete model, experimental code graph context support for autocomplete, and a new sign in experience."
tags: [blog]
slug: "cody-vscode-0-12-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.12.0-og-image.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.12.0-og-image.jpg
---

[Cody for VS Code](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) v0.12 is now available and includes improved unit test generation, customizable chat pre-instructions, new custom command documentation, a new claude-instant-infill autocomplete model, and a new sign in experience.

### Improved unit test generation (/test)

Unit test generation now better detects your testing framework, adds any dependency imports as needed, and includes the necessary stubs and test setup code:

<img alt="Screenshot of an improved unit test" src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-0-12-release/generate-unit-test-2.png" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:628}} />

### Chat pre-instructions

We've added a new `cody.chat.preInstruction` setting you can use instruct Cody at the beginning of every chat. For example, to have Cody output TypeScript you would set the pre-instruction to `Prefer TypeScript over JavaScript`:

<img alt="Screenshot of chat output with a pre-instruction set" src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-0-12-release/pre-instructions.png" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:737}} />

To set a pre-instruction, in your VS Code user or workspace settings configure the `cody.chat.preInstruction` setting.

### New custom commands documentation and menu improvements

We added [new documentation](https://docs.sourcegraph.com/cody/custom-commands) for the experimental custom commands feature:

<a href="https://docs.sourcegraph.com/cody/custom-commands"><img alt="Screenshot of the new custom Commands documentation" src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-0-12-release/custom-commands-docs.png" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:995}} /></a>

The "New Custom Command…" menu has been updated and allows you to choose where to save your new command, and a button for showing the generated JSON.

<img alt="Screenshot of the New Custom Command menu save location" src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-0-12-release/custom-commands-save-location.png" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:623}} />

<img alt="Screenshot of the New Custom Command menu JSON button" src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-0-12-release/custom-commands-json-button.png" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:473}} />

### Insert at cursor no longer replaces selection

When you use the "Insert at Cursor" button in Cody's chat view and have code selected in your editor, the code will be inserted before your selection instead of replacing the selected code.

### New claude-instant-infill autocomplete model

We've migrated to an all-new `claude-instant-infill` autocomplete model that can produce higher quality autocompletions using the context of surrounding code. For example, it performs better at autocompleting function documentation, and suggesting variable names that are not already in use. This new model is enabled by default.

### Code graph context for autocomplete

We've added experimental code graph context fetching support for autocomplete. This is a complete reimagining of context retrieval for autocomplete, and uses the underlying language server and temporal heuristics (recently viewed symbols) to populate the context for autocomplete suggestions. It's currently supports JavaScript, TypeScript, and Go, and we'll be testing how it performs against embeddings and local keyword context.

### Manually request an autocomplete

In cases where autocompletions don't automatically trigger, you can now request them manually using `opt + \` on Mac, or `alt + \` on Windows and Linux.

### New sign in experience

For new users, you can now sign in to Cody directly using a GitHub, GitLab or Google account:

<img alt="Screenshot of the new sign in page" src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-0-12-release/sign-in.png" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:246}} />

### Changelog

See the [changelog](https://github.com/sourcegraph/cody/blob/main/vscode/CHANGELOG.md) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.

### Thank you

Cody is [open source](https://github.com/sourcegraph/cody), and wouldn't be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

<hr style={{marginTop:"2rem",marginBottom:"2rem"}} />

To get started with Cody, [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai).
