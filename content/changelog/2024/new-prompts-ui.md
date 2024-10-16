---
title: "New, sleeker prompts UI"
authors:
  - name: Alex Isken
    url: https://x.com/AlexanderIsken
    avatar: https://storage.googleapis.com/sourcegraph-assets/blog/alex_avatar.png
publishDate: 2024-10-16T10:00-02:00
description: "Cody has a new, sleeker interface for selection prompts from the sidebar."
tags: [Cody, VS Code]
version: [v1.38]
versionIcon: /assets/changelog/vscode.svg
slug: 'new-prompts-ui'
published: true
---

Prompts are predefined, ready-to-use actions that you can run from the Cody sidebar, which we [recently introduced in VS Code alongside the Prompt Library](https://sourcegraph.com/blog/cody-vscode-1-30-0-release).

In this update, we've made improvements to the Cody sidebar, cleaning up the interface and making it easier to find and use prompts. The 'Chat' tab of the sidebar now shows a shortlist of your commonly-used prompts and commands. The 'Prompts & Commands' tab now shows a list of all available custom prompts, custom commands, and out-of-the-box commands.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-38-release/chat-tab.png"
  alt="Chat tab view"
/>
<br />
<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-38-release/prompts-tab.png"
  alt="Prompts & Commands tab"
/>

You may notice that the functionality of prompts largely overlap with commands. We intend to phase out commands in a coming release as we build out prompts to have more robust functionality.
