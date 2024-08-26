---
title: "Dynamically insert code from Cody chat into your files with Smart Apply"
authors:
  - name: Alex Isken
    url: https://x.com/AlexanderIsken
    avatar: https://storage.googleapis.com/sourcegraph-assets/blog/alex_avatar.png
publishDate: 2024-08-21T10:00-02:00
description: "Chat-Oriented Programming (CHOP) allows users to interact with AI to solve problems and write code directly through chat. The new Smart Apply feature enables quick conversion of AI suggestions into code diffs. By pressing Apply, Cody intelligently inserts suggested code directly into code files, streamlining the process from chat to implementation."
tags: [Cody, VS Code, Chat]
version: [v1.32]
slug: 'vscode-smart-apply'
published: true
relatedTopics:
  - title: Read Cody docs
    url: https://sourcegraph.com/docs/cody
  - title: Download Cody for VS Code
    url: https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-a
---

[Chat-oriented programming (CHOP)](https://sourcegraph.com/blog/chat-oriented-programming-in-action) is a new paradigm for chatting with AI to work through problems, write code, and build solutions. CHOP is now even more powerful with the Smart Apply feature, which lets you take suggestions from Cody in the chat and near-instantly turn them into diffs in your code.

Whenever Cody provides a code block as a suggestion in chat, press Apply, and Cody will analyze your open code file, find where that relevant code should live, and introduce a diff. For chat messages where Cody presents multiple code suggestions, you can apply each in sequence to go from chat suggestions to written code in only a few seconds.

<YouTube
  id="9SMa8NJdJlg"
  showTitle={true}
/>
