---
title: "Cody for VS Code v1.32: Faster, more accurate autocomplete plus Smart Apply"
authors:
  - name: Alex Isken
    url: https://x.com/AlexanderIsken
  - name: Justin Dorfman
    url: https://x.com/jdorfman
publishDate: 2024-08217T10:00-01:00
description: "Dynamically edit code based on chat suggestions with the new Smart Apply feature. Plus, autocomplete is now faster, more accurate, and powered by DeepSeek V2."
tags: [blog]
slug: 'cody-vscode-1-32-0-release'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-32-release/cody-vscode-og-image.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-32-release/cody-vscode-og-image.png
---

## Autocomplete is faster, more accurate, and powered by DeepSeek V2

Autocomplete has been overhauled with multiple under-the-hood changes, making it both faster and more accurate:

* P75 latency is down by 350 milliseconds
* Multi-line completions are significantly more accurate and relevant to the surrounding context
* The average completion acceptance rate (CAR) for early users is up by >4%

These updates are powered by several server-side and client-side optimizations. We’ve also updated the default autocomplete model from StarCoder to [DeepSeek V2](https://huggingface.co/deepseek-ai/DeepSeek-V2), significantly improving responsiveness and accuracy.

These updates are available now for Free and Pro users. We’ve rolled out some autocomplete updates to Enterprise users, but the most significant updates (including moving to DeepSeek V2) will roll out to Enterprise users soon.

[Read more about the autocomplete updates]().

## Dynamically insert code from Cody chat into your files with Smart Apply

[Chat-oriented programming (CHOP)](https://sourcegraph.com/blog/chat-oriented-programming-in-action) is a new paradigm for chatting with AI to work through problems, write code, and build solutions. CHOP is now even more powerful with the Smart Apply feature, which lets you take suggestions from Cody in the chat and near-instantly turn them into diffs in your code.

Whenever Cody provides a code block as a suggestion in chat, press Apply, and Cody will analyze your open code file, find where that relevant code should live, and introduce a diff. For chat messages where Cody presents multiple code suggestions, you can apply each in sequence to go from chat suggestions to written code in only a few seconds.

<YouTube
  id="9SMa8NJdJlg"
  showTitle={true}
/>

## Accept and reject block-level diffs for more granular control

You can now control which parts of a multiline edit to accept with more granularity. When you ask Cody to edit a block of code, the presented diff will be split into discrete code blocks, and you can accept or reject each block diff separately.

<Video
  source={{
    mp4: 'blog/cody-vscode-1-32-release/accept-reject-block-level-diffs'
  }}
  controls={true}
  loop={true}
  title="Accept and reject block-level diffs"
/>

## Chat now uses the full sidebar width

We heard from users that the chat wasn’t using the full sidebar width, and the chat text was narrower than needed. We’ve updated this to make chat more space-efficient.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-32-release/chat-width.png"
  alt="Chat width in the sidebar viewport"
/>

## Changelog

See the [changelog](https://github.com/sourcegraph/cody/releases/tag/vscode-v1.32.0) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.

## Thank you

Cody wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

We value your feedback in our [support forum](https://community.sourcegraph.com/c/cody/5), [Discord](https://discord.com/servers/sourcegraph-969688426372825169), and [GitHub](https://github.com/sourcegraph/cody). Happy Codying!

---

To get started with Cody, [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai).
