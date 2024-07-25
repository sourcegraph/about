---
title: "Cody for JetBrains v6.0.16: Shortcut display updates and bug fixes"
authors:
  - name: Alex Isken
    url: https://x.com/AlexanderIsken
  - name: Justin Dorfman
    url: https://x.com/jdorfman
publishDate: 2024-07-25T10:00-01:00
description: "This release includes quality-of-life updates to how shortcuts are displayed in the plugin and several bug fixes."
tags: [blog]
slug: "cody-jetbrains-6-0-16-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-jetbrains-6-0-16-release/cody-for-jetbrains-v6.0.16-og.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-jetbrains-6-0-16-release/cody-for-jetbrains-v6.0.16-og.jpg
--- 

[Cody for JetBrains v6.0.14](https://plugins.jetbrains.com/plugin/9682-cody-ai-coding-assistant-with-autocomplete--chat) is now available! This release includes quality-of-life updates to how shortcuts are displayed in the plugin and several bugfixes.

## Updates to shortcut hints

We’ve made several changes to keyboard shortcut hints to make sure they’re helpful without being distracting.

### Shortcuts on startup

The plugin now displays a welcome message with shortcut hints on startup to help new and returning users jump back into using Cody.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-jetbrains-6-0-16-release/welcome-hotkeys-jetbrains.png"
  alt="Welcome message with keyboard shortcuts"
/>

### Edit command actions now show shortcuts after running

After running an Edit Code action, Cody presents four options:

- Accept 
- Undo
- Edit & Retry (adjust your edit prompt)
- Show Diff

The post-edit UI now shows the keyboard shortcuts for each action.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-jetbrains-6-0-16-release/code-edit-shortcuts-jetbrains.png"
  alt="Code Edit command showing keyboard shortcuts"
/>

### Removed inline edit command hints

Previously, Cody displayed an Edit Code hint (`Ctrl + Alt + ↵ to Edit`) inline with any code you had highlighted. We heard your feedback that this shortcut was often distracting, so we’ve removed it.

## Bug fixes

### Cmd+Enter correctly triggers code edits

The `Cmd + ↵ shortcut` for running the Edit Code command was not working for some users. This bug is now fixed.

### "Cody is disabled on this file" messaged

The message “Cody is disabled on this file” appeared in error for some users. This message pertains to Context Filters, a Cody Enterprise feature, and it should only appear when an admin has restricted files. This bug is now fixed.

## Changelog

See the [changelog](https://github.com/sourcegraph/jetbrains/releases/tag/v6.0.16) and [GitHub releases](https://github.com/sourcegraph/jetbrains/releases) for a complete list of changes.

## Thank you

Cody wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

As always, we value your feedback in our [support forum](https://community.sourcegraph.com/) and on [Discord](https://discord.com/servers/sourcegraph-969688426372825169). Happy Codying!

---

**To get started with Cody, [install it from the JetBrains Marketplace](https://plugins.jetbrains.com/plugin/9682-cody-ai-coding-assistant-with-autocomplete--chat).**
