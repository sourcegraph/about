---
title: "Accept and reject block-level diffs for granular control"
authors:
  - name: Alex Isken
    url: https://x.com/AlexanderIsken
    avatar: https://avatars.githubusercontent.com/u/13739780?s=400&u=fa4488f167a8bcef3bb8ad74fdb463c2319bb75f&v=4
publishDate: 2024-08-21T10:00-02:00
description: "Chat-Oriented Programming (CHOP) allows users to interact with AI to solve problems and write code directly through chat. The new Smart Apply feature enables quick conversion of AI suggestions into code diffs. By pressing Apply, Cody intelligently inserts suggested code directly into code files, streamlining the process from chat to implementation."
tags: [VS Code, Cody]
version: [v1.32]
slug: 'vscode-smart-apply'
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
