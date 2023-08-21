---
title: "Cody for VS Code v0.8 Release"
authors:
  - name: Kalan
    url: https://handbook.sourcegraph.com/team/#kalan-chan
  - name: Tim
    url: https://handbook.sourcegraph.com/team/#tim-lucas
publishDate: 2023-08-20T10:00-07:00
description: "Cody Update //todo - improvement"
tags: [blog]
slug: "cody-vscode-0-8-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/all-you-need-is-cody/all-you-need-is-cody.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/all-you-need-is-cody/all-you-need-is-cody.png
---

We’ve just released [Cody for VS Code](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) v0.8, with improved recipes (now commands), a refreshed UI, and faster autocomplete. Here’s what’s new in v0.8, and a few of the improvements we’ve made since the [June release](https://about.sourcegraph.com/blog/cody-in-sourcegraph-5-1).

### Improved autocomplete

This release builds on a number of autocomplete improvements we’ve made since June:

* Reduced p75 response time by 40% to &lt;1300ms, with autocomplete now using Claude Instant 1.2
* Increased response quality by 10% (as measured by our acceptance rate) by better use of embeddings and code snippets for context, using the latest coding models, and new post-processing heuristics (e.g. avoiding duplicate code and unhelpful bracket insertion)
* Added a new autocomplete cache for more deterministic and stable results

### New chat layout

We’ve updated the chat layout to be more compact and focused on the conversation. The input now correctly handles multi-line wrapping, has a Commands button, and better supports high contrast themes:

<img src="https://github.com/sourcegraph/cody/assets/153/4a99ce43-42a3-48e9-8ddd-e88229e9f28c" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:263}} />

### Recipes are now Commands

Recipes are now called commands, and they have a new home in the redesigned chat input. Instead of the big blue buttons you now run commands using a command-line/REPL-like interface in the chat window:

<img src="https://github.com/sourcegraph/cody/assets/153/391a9475-332e-46d6-b8e0-c8433fcfcb18" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:251}} />

You can also invoke commands directly in your code editor using the new Cody command (keyboard shortcut: Option+c on Mac, or Alt+c on Windows):

<img src="https://github.com/sourcegraph/cody/assets/153/bac553fb-f0a7-4895-9fb2-2af52ec7c5b3" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:570}} />

### Code Action support

You can now ask Cody to fix and explain any problems highlighted by VS Code’s Code Actions:

<img src="https://github.com/sourcegraph/cody/assets/153/7cc293a8-08f1-4869-a3ad-bc6f938fef05" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:373}} />

You can also use it directly from your Problems tab:

<img src="https://github.com/sourcegraph/cody/assets/153/7d4fc58e-9fa7-431b-8b80-6a351f597545" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:500}} />

### Improved Code Smell detection

The Code Smells command uses a new prompt that is programming language aware, and provides better advice on whether code is idiomatic. It also provides more accurate recommendations for readability, maintainability, performance, and security.

### Custom Commands (Experimental)

Included in the changes from recipes to commands, we included support for adding your own custom commands.

<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/68532117/258562457-45bd1d4b-a0b3-4eb3-9146-30be370847c5.png" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:700}} />

Custom Commands are defined in JSON and allow you to call out to CLI tools, write custom prompts, and configure what context is sent to the LLM. They can be stored locally and available across all your projects, or checked into your repository to share with teammates. To test them out and provide feedback, see the [Custom Commands documentation](https://sourcegraph.com/notebooks/Tm90ZWJvb2s6MzA1NQ==#experimental-feature-editor-title-icon-cec8e75d-14ed-46c0-95e7-527fe520b32a).

### Cody Code Lens (Experimental)

The new Code Lens setting places a Cody button above every top-level function in a file, and let’s you run command commands on the block of code:

<img src="https://github.com/sourcegraph/cody/assets/153/c96d9800-2978-4624-9410-65c586c9ed3a" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:450}} />

### Editor Title Icon (Experimental)

The new Editor Title Icon setting adds a Cody button in the top right corner of your editor for easier access to the Code Commands menu:

<img src="https://github.com/sourcegraph/cody/assets/153/1b00e91d-6d4f-4827-ad9a-64177ddc42b1" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:350}} />

### Changelog

See the [changelog](https://github.com/sourcegraph/cody/blob/main/vscode/CHANGELOG.md) for a complete list of changes, or the notes on the [GitHub release](https://github.com/sourcegraph/cody/releases).

### Thank you

Cody is [open source](https://github.com/sourcegraph/cody), and it wouldn’t be what it is without our amazing contributors. A big thank you to everyone who contributed, filed issues, and sent us feedback.

<hr style={{marginTop:"2rem",marginBottom:"2rem"}}/>

To try Cody, [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai).