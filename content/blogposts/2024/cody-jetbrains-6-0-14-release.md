---
title: "Cody for JetBrains v6.0.14: Claude 3.5 Sonnet, Gemini 1.5, experimental Ollama support, and more"
authors:
  - name: Justin Dorfman
    url: https://handbook.sourcegraph.com/team/#justin-dorfman
  - name: Alex Isken
    url: https://handbook.sourcegraph.com/team/#alex-isken
publishDate: 2024-07-16T10:00-01:00
description: "The Cody plugin has new models from Anthropic and Google, better feature discoverability, updated UI hints, experimental Ollama support, and more."
tags: [blog]
slug: "cody-jetbrains-6-0-14-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-jetbrains-6-0-14-release/cody-for-jetbrains-v6.0.14-og.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-jetbrains-6-0-14-release/cody-for-jetbrains-v6.0.14-og.jpg
--- 

[Cody for JetBrains v6.0.14](https://plugins.jetbrains.com/plugin/9682-cody-ai-coding-assistant-with-autocomplete--chat) is now available! This plugin version has new models from Anthropic and Google, better feature discoverability, updated UI hints, experimental Ollama support, and more.

## New models: Claude 3.5 Sonnet + Gemini 1.5 Flash & Pro

Cody for JetBrains now includes new flagship models from both Anthropic and Google, including:

* Claude 3.5 Sonnet, a model with the reasoning skills of Claude 3 Opus while being roughly 2x as fast
* Gemini 1.5 Flash, a lightweight model built for speed and efficiency
* Gemini 1.5 Pro, a larger model optimized for high performance across many tasks

These models are available for chat and commands for _all_ Cody users, including Free, Pro, and Enterprise. 

## ICYMI: Cody Free is now 10x better with no limit on completions

We recently [upgraded Cody’s free tier](https://sourcegraph.com/blog/making-cody-free-10x-better), and it now includes:

* **Model choice with Claude 3.5 Sonnet**: Cody Free users can now choose which model to use, including Mixtral, Gemini 1.5, Claude 3 Haiku, and even Claude 3.5 Sonnet
* **Unlimited code completions**: We’re scrapping the limit on code completions. Every tier of Cody, including Cody Free, now gets unlimited AI-generated autocomplete
* **10x more chats and commands**: You now get 200 chats and commands every month, up from 20

These changes are already live for all user. Cody Pro is still available for $9/month for devs wanting unlimited chat and commands plus access to the best flagship models.

## Find Cody features using Search Everywhere 

You can now more easily find and discover Cody actions using the Search Everywhere feature in JetBrains.

Press <kbd>Shift</kbd> twice to open the Search Everywhere window. Then, type in the <kbd>Cody:</kbd> prefix to get a list of all supported Cody actions.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-jetbrains-6-0-14-release/search-everywhere-cody.png"
/>

## Updates to Cody’s UI hints

When you highlight a code selection, Cody provides an inline hint — `Ctrl + Alt + ↵ to Edit` — next to your selection. This hint is now shown _below_ the last line of the selection to be less intrusive. It also isn’t shown when you only select a single line of code, which prevents it from appearing when you’re not intentionally editing a code selection (such as when you use Find/Replace and highlight multiple single-line selections).

<Video 
  source={{
    mp4: 'blog/cody-jetbrains-6-0-14-release/ui-hint-WebStorm'
  }}
  loop={true}
  title="UI hints for edits in JetBrains"
/>

You can also turn off this UI hint in the Cody settings.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-jetbrains-6-0-14-release/ui-hint.png"
/>

## Better notifications when hitting rate limits

We understand that hitting rate limits can be frustrating when reaching the limit isn’t made obvious. For clarity, we’ve added notifications in the status bar to indicate when you’ve hit the chat and command rate limit.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-jetbrains-6-0-14-release/rate-limit-notification.png"
/>

## 🧪 Experimental: Ollama model support

You can now power Cody’s chat and commands off Ollama models running on your local machine. This lets you chat without sending messages over the internet to an LLM provider so that you can use Cody offline. You can code with an AI coding assistant wherever you are, even on an airplane!

You’ll need to install Ollama and download a chat model such as CodeGemma or Llama3. [The README provides full setup instructions](https://sourcegraph.com/github.com/sourcegraph/jetbrains/-/blob/README.md#use-ollama-models-for-chat--commands).

<Video 
  source={{
    mp4: 'blog/cody-jetbrains-6-0-14-release/ollama-jetbrains'
  }}
  loop={true}
  title="Cody with Ollama"
/>


## Changelog

See the [changelog](https://github.com/sourcegraph/jetbrains/releases/tag/v6.0.14) and [GitHub releases](https://github.com/sourcegraph/jetbrains/releases) for a complete list of changes.


## Thank you

Cody wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

As always, we value your feedback in our [support forum](https://community.sourcegraph.com/) and on [Discord](https://discord.com/servers/sourcegraph-969688426372825169). Happy Codying!

---

**To get started with Cody, [install it from the JetBrains Marketplace](https://plugins.jetbrains.com/plugin/9682-cody-ai-coding-assistant-with-autocomplete--chat).**
