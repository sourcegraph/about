---
title: "Execute terminal commands with Smart Apply"
authors:
  - name: Kelvin Yap
    url: https://x.com/kelvinyap
    avatar: https://storage.googleapis.com/sourcegraph-assets/blog/kelvin_avatar.png
publishDate: 2024-10-02T17:49-07:00
description: "Smart Apply now supports the executing of commands in the terminal, allowing users to execute a suggestion Cody provides with the simple click of a button."
tags: [Cody, VS Code]
version: [v1.36]
versionIcon: /assets/changelog/vscode.svg
slug: 'smart-apply-terminal-commands'
published: true

---

Smart Apply lets Cody users take suggestions from the Cody chat window and near-instantly take action with a simple click of the button. Previously focused on code suggestions and turning them into diffs in your code, Smart Apply now supports the executing of commands in the terminal. When you ask Cody a question related to terminal commands, you can now execute the suggestion in your terminal by clicking the `Execute` button in the chat window.

<Video
  source={{
    mp4: 'changelog/smart-apply-terminal-commands/cody-vscode-1.36-command-execute'
  }}
  controls={true}
  loop={true}
  title="Executing a terminal command with Smart Apply"
/>
<br />

Executing commands using Smart Apply is available to all VS Code users working in a trusted workspace, and is available in the latest version of VS Code (v1.36).