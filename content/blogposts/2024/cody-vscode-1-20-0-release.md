---
title: "Cody for VS Code v1.20: New chat UX plus automatic context retrieval"
authors:
  - name: Alex Isken
    url: https://handbook.sourcegraph.com/team/#alex-isken
  - name: Justin Dorfman
    url: https://x.com/jdorfman
  - name: Chris Sev
    url: https://x.com/chris__sev
publishDate: 2024-05-31T10:00-01:00
description: "Cody for VS Code v1.20 is now available and includes big updates to the chat sidebar, including a new UX, more user-friendly context retrieval, and retry buttons for quickly re-running prompts with new context."
tags: [blog]
slug: 'cody-vscode-1-20-0-release'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-20-release/cody-vscode-1.20-og-image.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-20-release/cody-vscode-1.20-og-image.jpg
---

[Cody for VS Code v1.20](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) is now available. This update makes big updates to Cody’s chat sidebar with a new UX, smarter context retrieval, and more intuitive ways to retry prompts with different contexts to get the results you’re looking for. We’re also introducing experimental support for OpenCtx context providers.

If you want to watch a walkthrough of the new features, check out our new YouTube video:

<YouTube
  id="W_wjCwbxjX4"
/>

## New chat UX

The chat sidebar has a fresh new UX. The initial chat input now lives at the top of the panel, and the first message in any chat log will stay pinned to the top of the chat. After the first message, the chat input box moves to the bottom of the sidebar.

Since your first message to Cody anchors the conversation, you can return to the top chat box anytime, edit your prompt, or re-run it using a different model.

<Video
  source={{
    mp4: 'blog/cody-vscode-1-20-release/media-001-new-chat-ux-update'
  }}
  loop={true}
  caption="Trying a prompt again with a different LLM"
/>

## Smarter and more intuitive context retrieval

We’re making the way Cody uses context more intuitive, user-friendly, and easily editable.

Previously, Cody automatically sourced its context. It would use your chat input to search against your open repository, find file chunks, and use those file chunks as context.

Now, Cody defaults to showing `@-mention` context chips for all the context it intends to use. When you open a new chat, Cody will show context chips for your current repository and current file (or file selection if you have code highlighted).

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-20-release/media-002.png"
  alt="Example of context chips + a prompt"
  caption="Example of context chips + a prompt"
/>

You can delete these context chips if this isn’t the context you want to use. Submitting a chat with no context chips will direct Cody to use no codebase context. If you know the exact context you want Cody to use—like a specific file—you can `@-mention` it (or replace the existing context chips with your own).

When you have both a repository and files @-mentioned, Cody will search the repository for context while prioritizing the mentioned files.

<Video
  source={{
    mp4: 'blog/cody-vscode-1-20-release/media-002-v-auto-context-retrieval'
  }}
  loop={true}
  caption="Example of using just a prompt vs using context chips + a prompt"
/>

[Read the docs](https://sourcegraph.com/docs/cody/clients/install-vscode#selecting-context-with--mentions) for more information.

## Retry prompts with new context

Sometimes, Cody doesn’t answer chat correctly on the first attempt. In these cases, we want to make it easier to re-run prompts quickly with slight tweaks to context.

Now, when you chat with Cody, you’ll see buttons to retry prompts with different contexts:

* **Automatic code context** (Cody will search for its own context to use)
* **Public knowledge only** (Cody will not use context; it’ll only use knowledge from the base model)
* **Choose file** (You can manually select a file to use as context)

<Video
  source={{
    mp4: 'blog/cody-vscode-1-20-release/media-003-retry-new-context'
  }}
  loop={true}
  caption="Retry prompt with new context (file and symbol)"
/>

## 🧪 Experimental: new `@-mention` context providers with OpenCtx

We recently [announced OpenCtx](https://sourcegraph.com/blog/openctx-at-mentions-for-code-ai), an open standard for bringing contextual info about code into your dev tools. Using code AI with context from your other dev tools opens up all new possibilities and use cases for being more productive from your IDE.

Today, we’re releasing experimental functionality to use OpenCtx context providers in Cody. You can now configure Cody to use context like:

* [Webpages (via URL)](https://openctx.org/docs/providers/web)
* [Jira tickets](https://openctx.org/docs/providers/jira)
* [Linear issues](https://openctx.org/docs/providers/linear-issues)
* [Notion pages](https://openctx.org/docs/providers/notion)
* [Google docs](https://openctx.org/docs/providers/google-docs)
* [Sourcegraph code search](https://openctx.org/docs/providers/sourcegraph-search)

To try it out, add context providers to your VS Code settings. For example, to use the [DevDocs provider](https://openctx.org/docs/providers/devdocs), add the following to your `settings.json`:

```javascript
"openctx.providers": {
    "https://openctx.org/npm/@openctx/provider-devdocs": {
        "urls": ["https://devdocs.io/go/", "https://devdocs.io/angular~16/"]
    }
},
```

<Badge text="EXPERIMENTAL" color="vermillion" size="large" />

Note that this is early and experimental functionality. If you have any OpenCtx feedback or questions, please [visit our support forum](https://community.sourcegraph.com/c/openctx/10).

This functionality is also _not_ dependent on the separate OpenCtx VS Code extension, which adds inline context from providers to your code. We recommend uninstalling the OpenCtx extension before trying this feature in Cody.

<Video
  source={{
    mp4: 'blog/cody-vscode-1-20-release/media-004-new-context-providers'
  }}
  loop={true}
  caption="Using code search as a context provider!"
/>

## Changelog

See the [changelog](https://github.com/sourcegraph/cody/releases/tag/vscode-v1.20.0) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.

## Thank you

Cody wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

We value your feedback in our [support forum](https://community.sourcegraph.com/c/cody/5), [Discord](https://discord.com/servers/sourcegraph-969688426372825169), and [GitHub](https://github.com/sourcegraph/cody/discussions). Happy Codying!

---

To get started with Cody, [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai).
