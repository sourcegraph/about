---
title: "Cody for VS Code v1.26: Claude 3.5 Sonnet as default, new offline mode, and autocomplete improvements"
authors:
  - name: Alex Isken
    url: https://x.com/AlexanderIsken
  - name: Justin Dorfman
    url: https://x.com/jdorfman
  - name: Ado Kukic
    url: https://x.com/adocomplete
publishDate: 2024-07-10T10:00-01:00
description: "We introduced a new offline mode for using Cody + Ollama, and Claude 3.5 Sonnet is the new default for commands and edits in Cody."
tags: [blog]
slug: 'cody-vscode-1-26-0-release'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-26-release/cody-vscode-1.26-v2-og-image.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-26-release/cody-vscode-1.26-v2-og-image.jpg
---
### Claude 3.5 Sonnet is now the default model for commands and code edits

Just one hour after Anthropic released Claude 3.5 Sonnet in June, we [released a new version of Cody supporting it](https://sourcegraph.com/blog/claude-3.5-sonnet-now-available-in-cody). Now, Claude 3.5 Sonnet is the default model for inline editing and commands for new users.

![Claude 3.5 Sonnet Picker](https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-26-release/claude-3.5-sonnet-picker-1.png)

This default change applies to new users only (but Claude 3.5 Sonnet is [available to both Cody Free and Cody Pro users](https://sourcegraph.com/blog/making-cody-free-10x-better)). If you're already a Cody user, just select Claude 3.5 Sonnet from the model dropdown list.

![](https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-26-release/claude-3.5-sonnet-picker-2.png)

### Support for running Cody offline with local Ollama models

You can now use Cody no matter where you are, with or without an internet connection.

This update includes a new offline mode for Cody using Ollama. You can now boot Cody with Ollama without having to sign in to your Sourcegraph account. When you open Cody offline, you can simply click the button below the Ollama logo to enter offline mode.

![Cody offline switcher](https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-26-release/cody-offline-switcher.png)

You will still have the option to switch to your Sourcegraph account whenever you want to use the Sourcegraph-provided models such as Claude 3.5 Sonnet, GPT-4o, Gemini, and others.

![Cody offline mode](https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-26-release/cody-offline-mode.png)

For those who are wondering, "Ollama whaaaat?" no worries, we've put together a blog post on how to [use Ollama with Cody for VS Code](https://sourcegraph.com/blog/local-code-completion-with-ollama-and-cody)! 🙌

### Autocomplete

We have listened to feedback and spent a lot of time improving and speeding up autocomplete. Here is a list of performance fixes for autocomplete coming in this update: 

* Fixed hot-streak cache keys for long documents.
* Restricted the number of lines awaited during hot-streak completion generation.
* Added an extra abort call to ensure request cancellation.
* Added a caching layer to Jaccard Similarity to reduce context gathering load.
* Added a new experimental throttling mechanism to decrease latency.
* Changed caching behavior for last completion candidate when not applicable at the current position.

Also did you know Cody Free now has unlimited code completions? We scrapped the limit on code completions. Every tier of Cody, including Cody Free, now gets unlimited AI-generated autocomplete.

### 🧪 Experimental: Generate Git commit messages

A while back we introduced an experimental feature that has become increasingly popular with our Discord community, and we want to share it with more users.With just a click of a button (or in the sidebar), Cody will now generate the perfect Git commit message for you, allowing you to push your code to your Git server more quickly. Let us know what you think!

<Video
  source={{
    mp4: 'blog/cody-vscode-1-26-release/cody-git-commit-message'
  }}
  loop={true}
  caption="Cody generating a Git commit message"
/>

To enable this feature, go to the Cody settings and enable the `commit message generation` setting.

![Enable Git commit message generation in Cody](https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-26-release/image-007.png)

<Badge text="Can't find it?" size="small" color="vermillion" />

Experimental features only show up in pre-release versions, but you can still turn them on manually by adding the setting below in your `settings.json` file:

`"cody.experimental.commitMessage": true,`

## Changelog

See the [changelog](https://github.com/sourcegraph/cody/releases/tag/vscode-v1.26.0) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.

## Thank you

Cody wouldn't be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

We value your feedback in our [support forum](https://community.sourcegraph.com/c/cody/5), [Discord](https://discord.com/servers/sourcegraph-969688426372825169), and [GitHub](https://github.com/sourcegraph/cody). Happy Codying!

---

To get started with Cody, [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai).
