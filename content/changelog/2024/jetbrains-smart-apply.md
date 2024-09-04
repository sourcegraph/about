---
title: "Smart Apply available in JetBrains"

authors:
  - name: Kelvin Yap
    url: https://x.com/kelvinyap
    avatar: https://storage.googleapis.com/sourcegraph-assets/blog/kelvin_avatar.png

publishDate: 2024-09-04T22:21-02:00

description: "Smart Apply is now available for JetBrains, allowing users to take suggestions from the Cody chat window and near-instantly turning them into diffs in your code."

tags: [JetBrains, Enterprise, Cody]

version: [v7.0.0]

slug: 'jetbrains-smart-apply'

published: true

---

[Announced for VS Code users](https://sourcegraph.com/blog/cody-vscode-1-32-0-release) in the last IDE release (v1.32), Smart Apply is now available for JetBrains and allows users to take suggestions from the Cody chat window and near-instantly turn them into diffs in your code. Every code block presented in a chat window will now have a new “Apply” button shown to the user and when clicked, Cody will automatically analyze your open code file, find where that relevant code should live, and add a diff.

<br />
<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/changelog/jetbrains-smart-apply/jb-smart-apply.png"
  alt="Smart Apply code suggestions with Cody"
/>
<br />