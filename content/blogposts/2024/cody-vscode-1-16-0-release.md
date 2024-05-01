---
title: "Cody for VS Code v1.16: More powerful custom commands plus Claude 3 models as the new default"
authors:
  - name: Alex Isken
    url: https://handbook.sourcegraph.com/team/#alex-isken
  - name: Justin Dorfman
    url: https://handbook.sourcegraph.com/team/#justin-dorfman
  - name: Chris Sev
    url: https://x.com/chris__sev
publishDate: 2024-05-01T10:00-01:00
description: "Cody for VS Code v1.16 is now available. You can now create more powerful custom commands to edit or insert code directly. We’ve also made quality-of-life updates to Cody’s Ollama compatibility and deprecated Claude 2 models in favor of Claude 3."
tags: [blog]
slug: "cody-vscode-1-16-0-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-16-release/cody-vscode-1.16.0-og-image.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-16-release/cody-vscode-1.16.0-og-image.jpg
--- 

[Cody for VS Code v1.16](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) is now available. This update includes expanded functionality for custom commands, quality-of-life updates to Cody’s Ollama compatibility, and two new experimental features for power users.


## Insert and edit code with more powerful custom commands

[Custom commands](https://sourcegraph.com/docs/cody/capabilities/commands#custom-commands) let you create predefined actions to run on demand. They were previously limited to chat-based commands that return your output in a chat window. Now, you can create commands to edit or insert code directly in your working file.

When you create a new command, you’ll now choose a command mode:

* `Ask`: Your command prompt is answered in a chat window
* `Edit`: Your prompt is treated as an edit command, and it will directly replace code selections
* `Insert`: Your prompt response is inserted at the top of the code selection

<Video 
  source={{
    mp4: 'blog/cody-vscode-1-16-release/create-a-custom-command'
  }}
  loop={true}
  title="Creating a custom command with the new edit and insert modes"
/>

If you haven’t tried custom commands yet, [check out our video](https://www.youtube.com/watch?v=ruVgjt0zIzk) to get started. We’d also love your feedback on how you’re using custom commands [in our forum](https://community.sourcegraph.com/c/cody/5)!


## Ollama chat is now available by default for Cody Pro

We heard your feedback that the [Ollama chat feature](https://sourcegraph.com/blog/local-chat-with-ollama-and-cody) was difficult to enable since it required editing the settings.json file. We’ve updated Cody to turn on Ollama support by default. Cody Pro users will now see Ollama as an option in the chat dropdown menu whenever Ollama is running on your local machine.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-16-release/ollama-models.png"
  alt="Cody's model selector with Ollama options"
/>


## Submit chats without enhanced context using the Alt/Opt hotkey

You can now use a hotkey to turn off enhanced context for individual messages. Hold down the <kbd>Alt</kbd> or <kbd>Opt</kbd> key while submitting a chat message, and Cody won’t pull extra code context into its response. Cody will still use any context that you’ve explicitly `@-mentioned`.

This hotkey makes it easier to ask general coding questions or questions where you _only_ want Cody to use `@-mentioned` context. 


## We’ve upgraded Cody Pro users on Claude 2 to Claude 3 Sonnet

Claude 2 model support has been removed in favor of the newer Claude 3 models on Cody Free and Pro tiers. If you’re a Cody Pro user with Claude 2 as your default model, you’ll automatically be upgraded to Claude 3 Sonnet when you update your extension. All chats that used Claude 2 will also be upgraded to Claude 3.


## Experimental features 🧪

We’re shipping two experimental features this week. These projects are very fresh and are less stable than Cody’s production-ready features. We don’t recommend adding them to your daily workflow yet, but if you’re interested in trying out the newest features, we welcome your feedback!


### Cody CLI

You can now trigger chat from the command line. You can ask general questions just like you would in your IDE, and Enterprise users can also ask questions that include codebase context. 

<Video 
  source={{
    mp4: 'blog/cody-vscode-1-16-release/cody-cli-experimental'
  }}
  loop={true}
  title="Using Cody CLI to learn how to convert input.mov to output.mp4"
  caption="Using Cody CLI to learn how to convert input.mov to output.mp4"
/>

The CLI is only intended for human interactive usage. Please [read our thread in the community forum](https://community.sourcegraph.com/t/feedback-on-cody-cli-experimental-feature/78) for known issues and usage limitations before [getting started](https://github.com/sourcegraph/cody/blob/main/cli/README.md). You can also find installation instructions in the thread, and if you have feedback, we’d love for you to share it there.


### ContextMentionProvider API: BYO context sources

We’ve exposed a new ContextMentionProvider API. You can use it to build new context sources that you can `@-mention` in chat. You can define `triggerPrefixes`, like `@npm:`, then use those prefixes to select context to pass to Cody.

This API is off by default and only enabled when you set `cody.experimental.noodle` to `true` in VS Code settings. Note that this API and the context provider implementation are subject to change.

[Read the pull request](https://github.com/sourcegraph/cody/pull/3883) for more details.


## Changelog

See the [changelog](https://github.com/sourcegraph/cody/releases/tag/vscode-v1.14.0) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.


## Thank you

Cody wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

We value your feedback in our [support forum](https://community.sourcegraph.com/), [Discord](https://discord.com/servers/sourcegraph-969688426372825169) and [GitHub](https://github.com/sourcegraph/cody/discussions). Happy Codying!

---

**To get started with Cody [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai)**
