---
title: "New, sleeker Prompts interface"
authors:
  - name: Alex Isken
    url: https://x.com/AlexanderIsken
    avatar: https://storage.googleapis.com/sourcegraph-assets/blog/alex_avatar.png
publishDate: 2024-10-15T10:00-02:00
description: "Cody has a new interface for quickly selecting Prompts and commands from the sidebar."
tags: [Cody, VS Code]
version: [v1.38]
versionIcon: /assets/changelog/vscode.svg
slug: 'new-prompts-ui'
published: true
relatedTopics:
  - title: Read Cody docs
    url: https://sourcegraph.com/docs/cody
  - title: Download Cody for VS Code
    url: https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai
---

Prompts are predefined, ready-to-use actions that you can run from the Cody sidebar, which we [recently introduced in VS Code alongside the Prompt Library](https://sourcegraph.com/blog/cody-vscode-1-30-0-release).

In this update, we've made improvements to the Cody sidebar, cleaning up the interface and making it easier to find and use Prompts. The 'Chat' tab of the sidebar now shows a shortlist of your commonly-used Prompts and commands. The 'Prompts & Commands' tab now shows a list of all available custom Prompts, custom commands, and out-of-the-box commands.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-38-release/chat-tab.png"
  alt="Chat tab view"
/>
<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-38-release/prompts-tab.png"
  alt="Prompts & Commands tab"
/>

You may notice that the functionality of Prompts largely overlap with commands. We intend to phase out commands in a coming release as we build out Prompts to have more robust functionality.
