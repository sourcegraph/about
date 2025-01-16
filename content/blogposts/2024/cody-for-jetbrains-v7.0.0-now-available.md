---
title: "Cody for JetBrains v7.0.0 now available"
authors:
  - name: Kelvin Yap
    url: https://x.com/KelvinYap
  - name: Justin Dorfman
    url: https://x.com/jdorfman
publishDate: 2024-09-04T10:00-01:00
description: "v7.0.0 brings our biggest update for JetBrains yet with a new side panel, prompts and Prompt Library,  Smart Apply, and various context improvements."
tags: [blog]
slug: 'cody-for-jetbrains-v7.0.0-now-available'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-jetbrains-7-0-0-release/cody-jetbrains-7-0-0.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-jetbrains-7-0-0-release/cody-jetbrains-7-0-0.png
---

<br />
The [general availability of Cody for JetBrains IDEs](https://sourcegraph.com/blog/cody-for-jetbrains-is-generally-available) brought new features as well as performance and stability improvements, and in the months since GA we've been adding additional functionality to improve the day-to-day use of Cody for JetBrains users. Today's update is the biggest one yet for JetBrains, and we're excited to not only launch new UI improvements but also introduce a raft of new features that will feel intuitive and helpful as you work in your IDE.
<br />

## Prompts and Prompt Library

<br />
Introduced in VS Code last month, prompts are the exciting evolution of commands, and they are now available in JetBrains. Prompts function in a similar fashion to  commands, allowing you to create custom prompts tailored to your development workflow in an easy and repeatable manner.
<br />

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-jetbrains-7-0-0-release/jb-prompts.png"
  alt="Prompts in JetBrains IDE"
/>
<br />

Prompts can be created and discovered via the web UI in the new Prompt Library, making it easier to create, edit, share and discover prompts you've created or have been shared within your organization.
<br />

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-jetbrains-7-0-0-release/jb-prompt-library.png"
  alt="Prompt Library"
/>
<br />

For more information about how to create and edit prompts in the prompt library, please read our [VS Code blog](https://sourcegraph.com/blog/cody-vscode-1-30-0-release).
<br />

## Smart Apply

<br />
Hot on the heels of its [availability in VS Code](https://sourcegraph.com/blog/cody-vscode-1-32-0-release), Smart Apply is now available in JetBrains and allows for the dynamic insertion of code from Cody chat into your files.

Whenever Cody provides a code block as a suggestion in chat, press Apply, and Cody will analyze your open code file, find where the suggested code should live, and introduce a diff.
<br />

<Video
  source={{
    mp4: 'blog/cody-jetbrains-7-0-0-release/jetbrains-smart-apply'
  }}
  controls={true}
  loop={true}
  title="Smart Apply in JetBrains"
/>
<br />

## Context Improvements

<br />
An AI code assistant is only as good as the context you provide it. In this JetBrains release we've made numerous changes to how you can work with the context you provide Cody, making it easier to understand what context Cody is or isn't using and giving you more flexibility to choose what Cody uses.

**Support for more context types**

<br />
You can now add directories, web URLs, and code you've highlighted in the editor as context.
<br />

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-jetbrains-7-0-0-release/jb-context-types.png"
  alt="Selecting context types in JetBrains"
/>
<br />

**Add additional context**

<br />
JetBrains users can now use the @ button at the bottom of the chat box to easily add additional context to a prompt.
<br />

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-jetbrains-7-0-0-release/jb-add-context.png"
  alt="Add additional context to a prompt in JetBrains"
/>
<br />

**Default context**

<br />
When you create a new chat, the current project and file you have open will be used as context by default and you'll see them as ‘chips' in the chat input. If you don't want to use them as context it's simple to delete the chips and just chat with the LLM.
<br />

**Try again with different context**

<br />
Want to change the context you provided in a chat prompt? You can now try the prompt again with different context.
<br />

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-jetbrains-7-0-0-release/jb-try-again-context.png"
  alt="Try a prompt again with different context in JetBrains"
/>
<br />

## A new, unified Cody side panel

<br />
In our efforts to reduce cognitive load and to create a consistent experience when using Cody we recently introduced a new Cody side panel experience to [Cody for VS Code](https://sourcegraph.com/blog/cody-vscode-1-28-0-release) and on the web. In this release JetBrains adopts the same side panel, and with it improvements to the UX such as:

**Chat lives directly in the side panel**

<br />
Chatting with Cody happens primarily in the side panel, with the option to open a dedicated chat window.
<br />

**Dedicated tabs in the side panel**

<br />
Toggle between chat, history, prompt library, setting, and account at the top of the sidebar, making it easier to navigate between commonly performed actions.
<br />

<Video
  source={{
    mp4: 'blog/cody-jetbrains-7-0-0-release/jetbrains-dedicated-tabs-side-panel'
  }}
  controls={true}
  loop={true}
  title="Dedicated tabs in the side panel"
/>
<br />

**Prompts are easier to discover and use**

<br />
The new prompts and prompt library appear underneath the chat, making it easier to use and create prompts while chatting with Cody.
<br />

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-jetbrains-7-0-0-release/jb-prompt-use-and-discovery.png"
  alt="Prompts appear underneath Cody chat in JetBrains"
/>
<br />

## Updated chat experience

<br />
It's common when working with AI that you sometimes don't get the answer you need on the first try or need to continue a conversation to get the answer or code you want. With that in mind, we've improved the Cody chat experience in JetBrains to:

- **Edit and resubmit a previous chat:** We've improved the iterative chat experience for JetBrains users, who can now edit and resubmit a previous chat if they want a different response to their original prompt.
- **Improved UI:** We've made it easier to distinguish between your prompts, the context from Sourcegraph, and the response from Cody.
- **Easier code insertion options:** You can now Copy, Insert at Cursor, or Add to new file when you want to insert code that Cody provides in a chat response.

<Video
  source={{
    mp4: 'blog/cody-jetbrains-7-0-0-release/jetbrains-easier-code-insertion-options'
  }}
  controls={true}
  loop={true}
  title="Easier code insertion options in JetBrains"
/>
<br />

### JetBrains compatibility notes

<br />
Users must be on JetBrains version 2023.2 or above in order to get these changes and future update. We'll continue to support Cody in JetBrains versions below 2023.2 but only with critical bug fixes, and will not be adding new features or improvements to those older versions.
<br />

## Thank you

<br />
This is a huge update for Cody for JetBrains and a sign of things to come. Cody wouldn't be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

We value your feedback in our [**support forum**](https://community.sourcegraph.com/c/cody/5), [**Discord**](https://discord.com/servers/sourcegraph-969688426372825169), and [**GitHub**](https://github.com/sourcegraph/cody). Happy Codying!
<br />
