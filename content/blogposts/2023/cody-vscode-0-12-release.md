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
description: "Improved unit test generation, customizable chat pre-instructions, new custom command documentation, a new claude-instant-infill autocomplete model, and a new sign in experience."
tags: [blog]
slug: "cody-vscode-0-12-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.12.0-og-image.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.12.0-og-image.jpg
---

[Cody for VS Code](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) v0.12 is now available and includes improved unit test generation, customizable chat pre-instructions, new custom command documentation, a new claude-instant-infill autocomplete model, and a new sign in experience.

### Improved unit test generation

The `/test` command has seen improvements with this release. Unit test generation now better detects your testing framework, adds any dependency imports as needed, and includes the necessary stubs and test setup code:


<img alt="TODO" src="https://github.com/sourcegraph/about/assets/153/a722d10f-b4bf-453b-98a9-fcbb3c6ece67" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:388}} />

### Chat pre-instructions

We’ve added a new `cody.chat.preInstruction` setting you can use instruct Cody at the beginning of every chat. For example, to have Cody output TypeScript you would set the pre-instruction to `Prefer TypeScript over JavaScript`:

<img alt="TODO" src="https://github.com/sourcegraph/cody/assets/153/f11a52d9-4966-4ca0-9538-2d00b114531c" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:737}} />

To set a pre-instruction, in your VS Code user or workspace settings configure the `cody.chat.preInstruction` setting.

### New custom commands documentation and menu improvements

We added [new documentation](https://docs.sourcegraph.com/cody/custom-commands) for the experimental custom commands feature:

<a href="https://docs.sourcegraph.com/cody/custom-commands"><img alt="Custom Commands documentation" src="https://github.com/sourcegraph/cody/assets/153/b0c17095-7f3c-45e8-aecf-1b604652a930" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:995}} /></a>

The "New Custom Command…" menu has been updated and allows you to choose where to save your new command, and a button for showing the generated JSON.

<img alt="New Custom Command menu" src="https://github.com/sourcegraph/cody/assets/153/6ec03b67-0647-4339-8621-634eea0651b6" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:623}} />

<img alt="New Custom Command menu" src="https://github.com/sourcegraph/cody/assets/153/6ec03b67-0647-4339-8621-634eea0651b6" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:473}} />

### Insert at cursor no longer replaces selection

When you use the "Insert at Cursor" button in Cody’s chat view and have code selected in your editor, the code will be inserted before your selection instead of replacing the selected code.

### New autocomplete model: clause-instant-infill

We've added an additional autocomplete model `clause-instant-infill` that can produce higher quality autocompletions using the context of surrounding code. For example, it performs better at autocompleting function documentation, and suggesting variable names that are not already in use.

To try out the new model, in your VS Code user or workspace settings configure the `cody.autocomplete.advanced.model` setting to `claude-instant-infill`.

### Manually request an autocomplete

In cases where autocompletions don't automatically trigger, you can now request them manually using `opt + \` on Mac, or `alt + \` on Windows and Linux.

### New sign in experience

For new users, you can now sign in to Cody directly using a Github, Gitlab or Google account:

<img alt="" src="https://github.com/sourcegraph/about/assets/153/c201438f-98fb-4e20-a6d3-7c929b0786d9" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:246}} />

For now, we’ve removed the ability to log into Cody App to use private embeddings, but we’ll be re-introducing support for Cody App in the next release.

### Changelog

See the [changelog](https://github.com/sourcegraph/cody/blob/main/vscode/CHANGELOG.md) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.

### Thank you

Cody is [open source](https://github.com/sourcegraph/cody), and wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

<hr style={{marginTop:"2rem",marginBottom:"2rem"}} />

To get started with Cody, [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai).
