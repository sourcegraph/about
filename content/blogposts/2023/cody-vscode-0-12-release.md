---
title: "Cody for VS Code v0.12 release"
authors:
  - name: Kalan Chan
    url: https://handbook.sourcegraph.com/team/#kalan-chan
  - name: Tim Lucas
    url: https://handbook.sourcegraph.com/team/#tim-lucas
publishDate: 2023-09-20T0:00-07:00
description: "Command menu UX improvements, JSON export, JSON format changes to custom commands, autocomplete rate limit visibility, and streamed autocomplete responses."
tags: [blog]
slug: "cody-vscode-0-12-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.10.0-og-image.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.10.0-og-image.jpg
---

[Cody for VS Code](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) v0.12 is now available and includes a new onboarding & sign in experience, more custom configuration options, and improved Cody performance.

### User Onboarding and Sign-in Experience

// TODO


### Cody Pre-Instructions

You can now export and inspect your chat history as JSON using the new "Export" button in Chat History:

You can now add set a custom starter message that prepend chat requests to Cody by setting the `cody.chat.preInstruction` configuration in `settings.json`.

```json
{
    "cody.chat.preInstruction": "My name is Jeff."
}
```


### Changelog

See the [changelog](https://github.com/sourcegraph/cody/blob/main/vscode/CHANGELOG.md) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.

### Thank you

Cody is [open source](https://github.com/sourcegraph/cody), and wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

<hr style={{marginTop:"2rem",marginBottom:"2rem"}}/>

To get started with Cody, [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai).
