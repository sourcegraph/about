---
title: "Cody for VS Code v1.30: Introducing prompts and the Prompt Library"
authors:
  - name: Kelvin Yap
    url: https://x.com/KelvinYap
  - name: Justin Dorfman
    url: https://x.com/jdorfman
publishDate: 2024-08-07T10:00-01:00
description: "We're excited to announce the evolution of commands in Cody - prompts. Both prompts and the new Prompt Library are now available for Free, Pro, and Enterprise users."
tags: [blog]
slug: 'cody-vscode-1-30-0-release'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-30-release/cody-vscode-v1.3.0-og.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-30-release/cody-vscode-v1.3.0-og.jpg
---

<br />
Cody currently offers users quick, ready-to-use commands for common actions to write, describe, fix, and smell code, as well as the ability to create their own custom commands tailored to your development workflow. We've heard from customers how valuable commands are and received lots of feedback on how to improve them.

With that in mind we are excited to share the evolution of commands in Cody, beginning with VS Code: prompts. Prompts function the same as commands but have been renamed to easier understand their usefulness in the context of existing AI chat terminology. Prompts can be created and discovered via the web UI in the new Prompt Library, making it easier to create, edit, share, and discover prompts you've created or have been shared within your organization.
<br />

## Introducing the Prompt Library

<br />
The Prompt Library can be found in Cody's web UI and is where you can view, create or edit a prompt. We have listened to your feedback and improved sharing and discovery in particular - it is now much easier to share and view than it was previously with commands.
<br />

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-30-release/prompt-library.png"
  alt="The new Prompt Library"
/>
<br />

You can search for prompts and filter the list to find a specific prompt by owner and sort by name or recently updated.
<br />

### Creating and editing prompts

<br />
Creating a prompt now occurs inside the web UI and users in the IDE wishing to create a prompt will be directed to the web UI.
<br />

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-30-release/new-prompt.png"
  alt="Creating a new prompt"
/>
<br />

Prompts can be marked as draft to let others know they shouldn't use it yet, and you can either create the prompt for your personal use or assign your organization as the owner, who can then make it shareable with others.

Editing a prompt is now easier than ever and there's no need to mess with a JSON file in your IDE anymore. Simply click on the Edit button associated with the relevant prompt in the Prompt Library to make the relevant changes, and you can also transfer ownership of the prompt or delete it from this view as well.
<br />

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1-30-release/transfer-ownership.png"
  alt="Transfer ownership of a prompt"
/>
<br />

### Using prompts

<br />
Prompts function similarly to commands in the IDE, but we've made it accessible as a dropdown in the chat so it's easier to select and to use.
<br />

<Video
  source={{
    mp4: 'blog/cody-vscode-1-30-release/cody-vscode-new-prompts'
  }}
  loop={true}
  caption="Using prompts in VS Code"
/>
<br />

### What's next for commands

<br />
Prompts and the Prompt Library are available in VS Code 1.30.0 today and will eventually replace commands in the coming months. Commands will still be supported in the meantime to ensure backwards compatibility, and we'll gradually shift functionality over from commands so that prompts can do everything commands can, and more. 

<br />

## Changelog

See the [changelog](https://github.com/sourcegraph/cody/releases/tag/vscode-v1.30.0) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.

## Thank you

Cody wouldn't be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

We value your feedback in our [support forum](https://community.sourcegraph.com/c/cody/5), [Discord](https://discord.com/servers/sourcegraph-969688426372825169), and [GitHub](https://github.com/sourcegraph/cody). Happy Codying!

---

To get started with Cody, [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai).
