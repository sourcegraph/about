---
title: "Cody for JetBrains v5.5.2 release"
authors:
  - name: Justin Dorfman
    url: https://handbook.sourcegraph.com/team/#justin-dorfman
  - name: Alex Isken
    url: https://handbook.sourcegraph.com/team/#alex-isken
publishDate: 2024-04-04T10:00-01:00
description: "Cody for JetBrains v5.5.2 is now available, including fixes for autocomplete formatting bugs, a new chat export function, and Claude 3 Sonnet for Cody Free users."
tags: [blog]
slug: "cody-jetbrains-5-5-2-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/jetbrains-5.5.2/cody-jetbrains-5.5.2-og-image.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/jetbrains-5.5.2/cody-jetbrains-5.5.2-og-image.png
--- 

[Cody for JetBrains v5.5.2](https://plugins.jetbrains.com/plugin/9682-cody-ai-coding-assistant-with-autocomplete--chat) is now available! This update includes fixes for autocomplete formatting bugs, a new chat export function, and Claude 3 Sonnet for Cody Free users.

## Claude 3 Sonnet is the new default model for Cody Free users

We’re expanding Claude 3 support! Claude 3 Sonnet is now the default model used for all chats and commands for Cody Free users (in addition to Claude 3 models being available for Cody Pro users).

According to Anthropic, Sonnet is as intelligent as Claude 2.0 while being roughly twice as fast, and Free users should see those speed improvements when chatting with Cody.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/jetbrains-5.5.2/cody-jetbrains-5.5.2-claude-3.png"
/>

## New chat export functionality

You can now export your chat history from your JetBrains IDE, letting you save or share prompts you’ve used in the past.

You can do this from the Chat History panel. Select a chat log, then right-click -> `Export Chat As JSON`.

<Video 
  source={{
    mp4: 'blog/jetbrains-5.5.2/cody-jetbrains-5.5.2-export-chat-json'
  }}
  loop={true}
  title="Exporting chat logs to JSON"
/>

## Improved autocomplete stability and formatting fixes

We’ve fixed some common bugs with autocomplete, including issues where Cody would occasionally return [redundant](https://github.com/sourcegraph/jetbrains/issues/1133) or blank completions.

Autocomplete is now more stable, with consistent suggestion formatting.

## Support forum

We made our support forum on Discord read-only this week, meaning you can no longer ask support-related questions there. Instead, we have launched a new [support forum](https://community.sourcegraph.com/) that provides better tools to help answer your questions more quickly. Please note that Discord is not going away; it will still be available for chatting with other community members. 🙂

If you have a Pro or Enterprise account, we encourage you to email support@sourcegraph.com with any issues related to your account, especially billing or other sensitive account information.

## Changelog

See the [changelog](https://github.com/sourcegraph/jetbrains/releases/tag/v5.5.2) and [GitHub releases](https://github.com/sourcegraph/jetbrains/releases) for a complete list of changes.

## Thank you

Cody wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

As always, we value your feedback in our [support forum](https://community.sourcegraph.com/), [Discord](https://discord.com/servers/sourcegraph-969688426372825169) and [GitHub](https://github.com/sourcegraph/cody/discussions). Happy Codying!

---

**To get started with Cody, [install it from the JetBrains Marketplace](https://plugins.jetbrains.com/plugin/9682-cody-ai-coding-assistant-with-autocomplete--chat).**
