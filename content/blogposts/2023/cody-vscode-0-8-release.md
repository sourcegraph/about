---
title: "Cody for VS Code v0.8 release"
authors:
  - name: Kalan
    url: https://handbook.sourcegraph.com/team/#kalan-chan
  - name: Tim
    url: https://handbook.sourcegraph.com/team/#tim-lucas
publishDate: 2023-08-21T10:00-07:00
description: "Faster autocomplete, improved recipes (now commands), new chat layout, improved code smell detection, custom commands, and more."
tags: [blog]
slug: "cody-vscode-0-8-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.8.0-og-image.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.8.0-og-image.jpg
---

We've just released [Cody for VS Code](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) v0.8, with faster autocomplete, improved recipes (now commands), new chat layout, improved code smell detection, custom commands, and more.

Here's what's new in v0.8, and a few of the improvements we've made since the [June release](https://about.sourcegraph.com/blog/cody-in-sourcegraph-5-1). 

See [here](https://github.com/sourcegraph/cody/releases/tag/vscode-v0.8.0) for the full v0.8 release notes.

### Improved autocomplete

This release builds on a number of autocomplete improvements we've made since June:

* Reduced single-line completion p75 response time by 40% to &lt;1300ms
* Autocomplete is now using Claude Instant 1.2
* Increased response quality by 10% (as measured by our acceptance rate) by better use of embeddings and code snippets for context, using the latest coding models, and new post-processing heuristics (e.g. avoiding duplicate code and unhelpful bracket insertion)
* Added a new autocomplete cache for more deterministic and stable results

### New chat layout

We've updated the chat layout to be more compact and focused on the conversation. The input now correctly handles multi-line wrapping, has a Commands button, and better supports high contrast themes:

<img alt="Screenshot of new Cody v0.8 chat layout" src="https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.8.0-new-chat-layout.png" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:263}} />

### Recipes are now Commands

Recipes are now called commands, and they have a new home in the redesigned chat input. Instead of the big blue buttons you now run commands using a command-line/REPL-like interface in the chat window:

<img alt="Screenshot of new Cody v0.8 command popover" src="https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.8.0-commands.png" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:251}} />

You can also invoke commands directly in your code editor using the new Cody command (keyboard shortcut: Option+c on Mac, or Alt+c on Windows):

<img alt="Screenshot of new Cody v0.8 command menu" src="https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.8.0-commands2.png" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:570}} />

### Code Actions support

You can now ask Cody to fix and explain any problems highlighted by VS Code's Code Actions:

<img alt="Screenshot of new Cody v0.8 Code Actions support" src="https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.8.0-code-actions.png" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:373}} />

You can also use it directly from your Problems tab:

<img alt="Screenshot of new Cody v0.8 Code Actions support in the problems tab" src="https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.8.0-code-actions2.png" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:500}} />

### Improved Generate Unit Tests
The Generate unit tests command now uses context from file dependencies and existing tests as examples to generate higher quality test stubs. It is recommended to set up test files before running the command to get optimal results.

### Improved Code Smell detection

The Code Smells command uses a new prompt that is programming language aware, and provides better advice on whether code is idiomatic. It also provides more accurate recommendations for readability, maintainability, performance, and security.

### Custom Commands (Experimental)

Included in the changes from recipes to commands, we included support for adding your own custom commands.

<img alt="Screenshot of new Cody v0.8 custom command" src="https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.8.0-custom-commands.png" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:700}} />

Custom Commands are defined in JSON and allow you to call out to CLI tools, write custom prompts, and configure what context is sent to the LLM. They can be stored locally and available across all your projects, or checked into your repository to share with teammates. To test them out and provide feedback, see the [Custom Commands documentation](https://sourcegraph.com/notebooks/Tm90ZWJvb2s6MzA1NQ==#experimental-feature-editor-title-icon-cec8e75d-14ed-46c0-95e7-527fe520b32a).

### Cody Code Lens (Experimental)

The new Code Lens setting places a Cody button above every top-level function in a file, and let's you run command commands on the block of code:

<img alt="Screenshot of new Cody v0.8 code lens" src="https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.8.0-code-lens.png" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:450}} />

### Editor Title Icon (Experimental)

The new Editor Title Icon setting (off by default) adds a Cody button in the top right corner of your editor for easier access to the Cody Commands menu:

<img alt="Screenshot of new Cody v0.8 editor title icon" src="https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.8.0-title-icon.png" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:350}} />

### Changelog

See the [changelog](https://github.com/sourcegraph/cody/blob/main/vscode/CHANGELOG.md) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.

### Thank you

Cody is [open source](https://github.com/sourcegraph/cody), and it wouldn't be what it is without our amazing contributors. A big thank you to everyone who contributed, filed issues, and sent us feedback.

<hr style={{marginTop:"2rem",marginBottom:"2rem"}}/>

To try Cody, [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai).
