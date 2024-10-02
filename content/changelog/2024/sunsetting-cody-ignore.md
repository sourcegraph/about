---
title: "Sunsetting the experimental Cody Ignore feature"
authors:
  - name: Alex Isken
    url: https://x.com/AlexanderIsken
    avatar: https://storage.googleapis.com/sourcegraph-assets/blog/alex_avatar.png
publishDate: 2024-10-02T10:00-02:00
description: "We are sunsetting Cody Ignore in this release. Cody Ignore was an experimental feature that was off by default for all users, only enabled via the experimental feature setting in the Cody extension. It lets users specify files or folders in a .cody/ignore file which were then ignored by Cody and disregarded from context."
tags: [Cody, VS Code]
version: [v1.36]
versionIcon: /assets/changelog/vscode.svg
slug: 'sunsetting-cody-ignore'
published: true
---

We are sunsetting Cody Ignore in this release. Cody Ignore was an experimental feature that was off by default for all users, only enabled via the experimental feature setting in the Cody extension. It lets users specify files or folders in a `.cody/ignore` file which were then ignored by Cody and disregarded from context.

Although we’re not moving this feature into beta, Cody Enterprise users who are interested in excluding files from context can also do this using Context Filters. Context Filters support both exclusion and inclusion rules for determining what files can be used as context, and those rules can be set account-wide. [Read more about Context Filters](https://sourcegraph.com/docs/cody/capabilities/ignore-context).