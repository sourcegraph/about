---
title: "Accept and reject block-level diffs for granular control"
authors:
  - name: Alex Isken
    url: https://x.com/AlexanderIsken
    avatar: https://storage.googleapis.com/sourcegraph-assets/blog/alex_avatar.png
publishDate: 2024-08-21T10:00-02:00
description: "You can now control which parts of a multi-line edit to accept with more granularity. When you ask Cody to edit a block of code, the presented diff will be split into discrete code blocks, and you can accept or reject each diff separately."
tags: [Cody, VS Code]
version: [v1.32]
slug: 'accept-reject-block-diffs'
published: true
---

You can now control which parts of a multi-line edit to accept with more granularity. When you ask Cody to edit a block of code, the presented diff will be split into discrete code blocks, and you can accept or reject each diff separately.

Huge thank you to [Justin Milner](https://github.com/justinmilner1) for making this contribution! ✨ 🫶

<Video
  source={{
    mp4: 'blog/cody-vscode-1-32-release/accept-reject-block-level-diffs'
    }}
  controls={true}
  loop={true}
  title="Accept and reject block-level diffs"
/>
