---
title: "Cody for VS Code v1.24: Inline diffs for code edits, context chips, and Claude 3.5 Sonnet"
authors:
  - name: Alex Isken
    url: https://handbook.sourcegraph.com/team/#alex-isken
  - name: Justin Dorfman
    url: https://x.com/jdorfman
  - name: Chris Sev
    url: https://x.com/chris__sev
publishDate: 2024-06-26T10:00-01:00
description: "Cody now shows inline diffs when code edits are complete. The chat UI is also updated with new context chips and we added Claude 3.5 Sonnet to the list of LLM options."
tags: [blog]
slug: 'cody-vscode-1-24-0-release'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-24-release/cody-vscode-1.24-og-image.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-24-release/cody-vscode-1.24-og-image.png
---

[Cody for VS Code v1.24](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) is now available. This update introduces a new way of showing code edits, displaying inline diffs after edits are complete. We’ve also updated the chat UI with context chips, added Claude 3.5 Sonnet to the list of LLMs, and more.

## Inline diff view and animation for Cody’s inline edits

When you run a command that involves editing code inline, you’ll now see a progressive animation as Cody makes edits. You’ll also see inline diffs directly in your file as soon as the command finishes so you can see exactly what happened and accept or decline the edit.

Prior to v1.24, this is how code edits appeared:
<Video
  source={{
    mp4: 'blog/cody-vscode-1-24-release/edits-changes-before'
  }}
  loop={true}
/>

Now, Cody will show inline diffs when the edit is complete:
<Video
  source={{
    mp4: 'blog/cody-vscode-1-24-release/edits-changes-after'
  }}
  loop={true}
/>

## @-mentions are now chips in the chat UI

We’ve beautified the chat UI with new context chips. The context you @-mention will appear in the chat window with a chip and a symbol indicating the type of context it is (like repo, file, symbol, or webpage context).

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-24-release/context-chips.png"
  alt="Context chips in the chat UI"
/>

## ICYMI: Claude 3.5 Sonnet is here

Last week, we [released Claude 3.5 Sonnet for Cody Pro](https://sourcegraph.com/blog/claude-3.5-sonnet-now-available-in-cody). Cody supports the **best models**, and Anthropic’s latest flagship is already showing [impressive benchmarks](https://www.anthropic.com/news/claude-3-5-sonnet), surpassing Claude 3 Opus in some benchmarks while being far faster. Cody Pro users can now select Claude 3.5 Sonnet for chat and commands (this was shipped in VS Code v1.22.4, but is also available in v1.24.0).

## Changelog

See the [changelog](https://github.com/sourcegraph/cody/releases/tag/vscode-v1.24.0) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.

## Thank you

Cody wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

We value your feedback in our [support forum](https://community.sourcegraph.com/c/cody/5), [Discord](https://discord.com/servers/sourcegraph-969688426372825169), and [GitHub](https://github.com/sourcegraph/cody/discussions). Happy Codying!

---

To get started with Cody, [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai).
