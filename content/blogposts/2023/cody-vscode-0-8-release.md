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

We’ve just released Cody for VS Code v0.8.0, featuring big improvements to Cody’s autocomplete, an all new UI, and support for Commands. Here’s what’s changed in Cody v0.0.8, as well as some of the improvements we’ve made since the [June release](https://about.sourcegraph.com/blog/cody-in-sourcegraph-5-1).

## Autocomplete improvements

We’ve been continuing to improve Cody’s autocomplete, and 0.8.0 includes a number of changes since the June release that have resulted in much faster response times, and higher  quality code completions:

* Reduced the p75 response time down by 40% to <1300ms, with autocomplete now using Claude Instant 1.2
* Increased the response quality by 10% (as measured by our acceptance rate) using a number of improvements across the entire stack: using embeddings and more relevant code snippets during context retrieval, using the latest coding models, and new post-processing techniques (for example, we now better detect if a suggestion is already part of the document or avoid unhelpful bracket insertion)
* A new autocomplete cache for more deterministic and stable results.

Protip: if you want to accept only part of autocomplete, you can repeatedly use Command + ➡️ to accept each next word:

(image)

## Recipes are now Commands

Recipes are now called commands, and they have a new home in our completely redesigned chat input. Instead of the big blue buttons you now run commands using a command-line/REPL-like interface in the chat window:

(image)

We’ve added a Cody Commands menu that is accessible in code via a keyboard shortcut (Option+c on Mac, or Alt+c on Windows), so you can run Cody commands without leaving your code editor:

(image)

### An improved Code Smells command

The Code Smells command was updated with a prompt that is now programming language aware, and provides much more accurate recommendations for detecting problems with readability, maintainability, performance, and security. The command also now better handles cases where Cody doesn’t have any strong recommendations for improving the code.

## Chat UI Improvements

We’ve updated the chat message input so it now correctly handles multi-line wrapping, includes a button for showing the command list, correctly shows a keyboard focus outline, and has better support for high contrast themes:

(image)

## New Experimental Features

### Custom Commands

Included in the changes from recipes to commands, we added _experimental support_ for adding your own [custom commands](https://sourcegraph.com/notebooks/Tm90ZWJvb2s6MzA1NQ==#experimental-feature-editor-title-icon-cec8e75d-14ed-46c0-95e7-527fe520b32a).

https://github-production-user-asset-6210df.s3.amazonaws.com/68532117/258562457-45bd1d4b-a0b3-4eb3-9146-30be370847c5.png

Custom Commands are defined in JSON and allow you to call out to CLI commands, write custom prompts, and tune exactly what context is sent to the LLM. They can be stored locally and available across all your projects, or checked into your repositories and shared with your collaborators.

We'd love you to test out custom commands, provide feedback, and file issues

### Cody Code Lens

The new Code Lens setting places a Cody button above every top-level function in a file, and let’s you run command commands on it without having to select the code:

<img width="688" alt="Screenshot 2023-08-21 at 8 27 55 pm" src="https://github.com/sourcegraph/cody/assets/153/c96d9800-2978-4624-9410-65c586c9ed3a">

### Editor Title Icon

The new Editor Title Icon setting adds a Cody button in the top right corner of your editor for easier access to the Code Commands menu:

<img width="493" alt="Screenshot 2023-08-21 at 8 34 26 pm" src="https://github.com/sourcegraph/cody/assets/153/1b00e91d-6d4f-4827-ad9a-64177ddc42b1">

## Thank You

Cody is [open source](https://github.com/sourcegraph/cody), and it wouldn’t be what it is without our amazing contributors. A big thank you to @x, @y, and @z for contributing to this release, and everyone who filed issues and sent us feedback.

## Try Cody

Cody is free to use in beta. To try Cody, [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai).