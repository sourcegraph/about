---
title: "@-mention directories for Cody Web and Enterprise"
authors:
  - name: Kelvin Yap
    url: https://x.com/kelvinyap
    avatar: https://storage.googleapis.com/sourcegraph-assets/blog/kelvin_avatar.png
publishDate: 2024-09-04T21:15-02:00
description: "Alongside files and repos Cody now lets developers @-mention directories as context, making it easier for users working with larger, more complex repos like monorepos to ensure they're including the best context with their prompts."
tags: [Enterprise, VS Code, JetBrains]

version: [v5.7.0]
versionIcon: /assets/changelog/cody.svg

slug: 'at-mention-directories'

published: true

---

Cody chat lets developers @ mention specific repos or files as context in a prompt to improve the quality of the answer it provides. This works well for codebases made up of multiple repos or if you know the exact file you wish to work with, but we've heard feedback from users that quality of results suffered when working with larger, more complex repos like monorepos and you're not sure of or need to reference more than one file.

We're happy to announce an experimental feature that offers users the ability to mention directories when using Cody chat, starting with Enterprise users referencing remote repositories, and for open source repos when using Cody Web. Users can now define context for a prompt one level deeper than a repo without referencing specific files, improving the quality of answers Cody provides from the get-go.

When using Cody Web, you can reference open source directories by selecting the Directories option:

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/changelog/at-mention-directories/at-mention-directories.png"
  alt="@-mention directories as context when using Cody chat"
/>
<br />

For Enterprise users in their IDE, they can select Remote Directories:

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/changelog/at-mention-directories/at-mention-remote-directory.png"
  alt="@-mention directories as context in the IDE for Enterprise users"
/>
<br />

Note: Directory mentions currently do not support local repositories and are not available for Cody Free or Pro users wanting to reference local directories as context.
