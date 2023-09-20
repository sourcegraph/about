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
description: "new onboarding & sign in experience, more custom configuration options, and improved Cody performance"
tags: [blog]
slug: "cody-vscode-0-12-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.12.0-og-image.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.12.0-og-image.jpg
---

[Cody for VS Code](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) v0.12 is now available and includes a new onboarding & sign in experience, more custom configuration options, and improved Cody performance.

### User Onboarding and Sign-in Experience

New users can now sign up and sign in for Cody using their Github and Gitlab accounts. 

### Cody Pre-Instructions

You can now add a custom starter message that prepend chat requests to Cody by setting the `cody.chat.preInstruction` configuration in `settings.json`.

```json
{
    "cody.chat.preInstruction": "I am a frontend engineer."
}
```

### Smarter Autocompletions with Increased Context Awareness

Cody now has greater awareness of the surrounding code context when providing completions. This increased context awareness results in smarter completions like useful docstrings in addition to avoiding variable name duplication. Cody can now provide more relevant suggestions based on what comes after your cursor.

To enable, set `cody.autocomplete.advanced.model` to `claude-instant-infill`.

### Higher Quality Unit Tests Generation

We've enhanced unit test generation with framework detection and contextual scaffolding.

The improved tests should now:
- Use the correct testing framework - The tests will automatically detect and use the testing framework in your project, whether it’s PyTest, UnitTest, etc.
- Include imports - The command will intelligently add necessary imports for the test code, avoiding common issues like missing imports. 
- Add relevant context - The generated tests will include stubs and setup code to put the tests in context, instead of just isolated assertions.

### Manually Trigger Autocompletions

Autocompletions can now be triggered manually using `alt + \`. Move your cursor to a block of code, press `alt + \`, and Cody will provide autocomplete suggestions. 

### Changelog

See the [changelog](https://github.com/sourcegraph/cody/blob/main/vscode/CHANGELOG.md) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.

### Thank you

Cody is [open source](https://github.com/sourcegraph/cody), and wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

<hr style={{marginTop:"2rem",marginBottom:"2rem"}}/>

To get started with Cody, [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai).
