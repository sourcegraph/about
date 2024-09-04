---
title: "@-mentioning Directories as Context"
authors:
  - name: Kelvin Yap
    url: https://x.com/kelvinyap
    avatar: https://storage.googleapis.com/sourcegraph-assets/blog/kelvin_avatar.png
publishDate: 2024-09-04T21:15-02:00
description: "Alongside files and repos Cody now lets developers @-mention directories as context, making it easier for users working with larger, more complex repos like monorepos to ensure they're including the best context with their prompts."
tags: [Enterprise, VS Code, JetBrains]

version: []

slug: 'at-mention-directories'

published: true

---

Cody chat lets developers @ mention specific repos or files as context in a prompt to improve the quality of the answer it provides. This works well for codebases made up of multiple repos or if you know the exact file you wish to work with, but we’ve heard feedback from users that quality of results suffered when working with larger, more complex repos like monorepos and you’re not sure of or need to reference more than one file.

We’re happy to announce we’ve added the ability to mention directories when using Cody chat. Users can now define context for a prompt one level deeper than a repo without referencing specific files, improving the quality of answers Cody provides from the get-go.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/changelog/at-mention-directories/at-mention-directories.png"
  alt="@-mention directories as context when using Cody chat"
/>
<br />

Directory mentions are available for Cody chat in VS Code, JetBrains, and the web view, and only work for remote repositories.