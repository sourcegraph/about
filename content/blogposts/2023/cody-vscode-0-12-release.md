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
description: "A new sign in experience, the ability to set custom pre-instructions, improved unit test generation, and a new autocomplete model."
tags: [blog]
slug: "cody-vscode-0-12-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.12.0-og-image.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.12.0-og-image.jpg
---

[Cody for VS Code](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) v0.12 is now available and includes a new onboarding & sign in experience, more custom configuration options, and improved Cody performance.

### Improved unit test generation

The `/test` command output has been hugely improved in this release. Unit test generation now better detects your testing framework, adds any dependency imports as needed, and includes the necessary stubs and test setup code:

(image)

### New chat pre-instruction setting

We’ve added a new pre-instruction setting you can use to provide Cody with instructions to follow in every chat.

```json
{
    "cody.chat.preInstruction": "Prefer TypeScript over JavaScript"
}
```

<img alt="TODO" src="https://github.com/sourcegraph/cody/assets/153/f11a52d9-4966-4ca0-9538-2d00b114531c" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:737}} />

To set a pre-instruction, set your VS Code `cody.chat.preInstruction` setting in your VS Code user or workspace settings.

### Custom commands docs and menu improvements

We added [new documentation](https://docs.sourcegraph.com/cody/custom-commands) for the experimental custom commands feature:

<a href="https://docs.sourcegraph.com/cody/custom-commands"><img alt="Custom Commands documentation" src="https://github.com/sourcegraph/cody/assets/153/b0c17095-7f3c-45e8-aecf-1b604652a930" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:995}} /></a>

The "New Custom Command…" menu was also updated with new labels, the option to choose where to save your new command, and a button for showing the generated JSON.

<img alt="New Custom Command menu" src="https://github.com/sourcegraph/cody/assets/153/6ec03b67-0647-4339-8621-634eea0651b6" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:623}} />

### Insert at cursor no longer replaces selection

When you use the "Insert at Cursor" button in Cody’s chat view, the selected text in your editor will no longer be replaced.

### New autocomplete model and manual triggering support

We've added support for a new autocomplete model that has more context of surrounding code, and produces higher quality autocompletions (such as avoiding suggesting variable names that are already in use).

(image)

To try it out this new autocomplete model now, set your VS Code `cody.autocomplete.advanced.model` setting to `claude-instant-infill` in your VS Code user or workspace settings.

Autocompletions can also now be triggered manually using `alt + \`. Move your cursor to a block of code, press `alt + \`, and Cody will provide autocomplete suggestions. 

### New sign in experience

New users getting started with Cody can now sign in directly using their Github and Gitlab accounts:

(image)

For now, we’ve removed the ability to log into Cody App to use private embeddings, but we’ll be re-introducing support for Cody App in the next release.

This can be set in your VS Code user settings if it's personal, or in your workspace (repository) settings if it's specific to your project.

### Changelog

See the [changelog](https://github.com/sourcegraph/cody/blob/main/vscode/CHANGELOG.md) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.

### Thank you

Cody is [open source](https://github.com/sourcegraph/cody), and wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

<hr style={{marginTop:"2rem",marginBottom:"2rem"}}/>

To get started with Cody, [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai).
