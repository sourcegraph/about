---
title: "Cody v1.38: Improved chat performance"
authors:
  - name: Alex Isken
    url: https://x.com/AlexanderIsken
    avatar: https://storage.googleapis.com/sourcegraph-assets/blog/alex_avatar.png
publishDate: 2024-10-14T10:00-02:00
description: "Cody v1.38 brings significant improvements to chat performance and updates to the autocomplete provider. This release focuses on enhancing the user experience in long chats and streamlining autocomplete functionality."
tags: [Cody, VS Code]
version: [v1.38]
versionIcon: /assets/changelog/vscode.svg
slug: 'long-chats-improvements'
published: true
---

We're excited to announce the release of Cody v1.38, which brings notable improvements to chat performance.

## Improved chat performance

In previous versions of Cody, some users experienced slowness with the Chat interface, particularly when conversations became lengthy or when Cody was responding with long replies. We've heard your feedback, and we're pleased to announce that these issues have been addressed in this release.

We've made significant enhancements to the webview performance in long chats. These improvements are designed to provide a smoother and more responsive experience, especially when dealing with extended conversations. The changes implemented in [pull/5866](https://github.com/sourcegraph/cody/pull/5866), [pull/5875](https://github.com/sourcegraph/cody/pull/5875), and [pull/5879](https://github.com/sourcegraph/cody/pull/5879) collectively contribute to a more efficient chat interface, allowing users to navigate and interact with long chat histories more easily.

You should now experience a much smoother chat interaction, even during prolonged coding sessions or when receiving detailed responses from Cody. This improvement aims to enhance your productivity and overall experience with Cody.

## Autocomplete provider update

We've made an important change to our autocomplete functionality. Support for the deprecated `experimental-openaicompatible` provider has been removed. Users should now use the `openaicompatible` provider instead. 

We encourage all users to update their configurations if they were using the deprecated provider. This change will help maintain consistency and improve the overall autocomplete experience.
