---
title: "Cody for VS Code v0.16 release"
authors:
  - name: Justin Dorfman
    url: https://handbook.sourcegraph.com/team/#justin-dorfman
  - name: Bee Woo
    url: https://handbook.sourcegraph.com/team/#beatrix-woo
  - name: Tim Lucas
    url: https://handbook.sourcegraph.com/team/#tim-lucas
  - name: Kalan Chan
    url: https://handbook.sourcegraph.com/team/#kalan-chan
  
publishDate: 2023-11-16T10:00-01:00
description: "The latest release improves the chat experience with more control over context and AI models, while also enhancing commands by allowing additional user input instructions."
tags: [blog]
slug: "cody-vscode-0-16-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/vscode-v0-16-release/cody-vscode-0.16.0-og-image.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/vscode-v0-16-release/cody-vscode-0.16.0-og-image.jpg
---

We're excited to announce the release of [Cody for VS Code](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) v0.16! This release includes completions, editing, interfaces, chat, commands, and more improvements. 


## Quicker fixes

One of the most used commands in Cody is "Ask Cody to Fix." To improve the user experience for this command, we optimized it by skipping fetching context files, which rarely helps for this specific flow. This change makes the "Ask Cody to Fix" command faster and more efficient. 


![](https://storage.googleapis.com/sourcegraph-assets/blog/vscode-v0-16-release/image1.png)


## More powerful & flexible commands

A new feature has been added to allow flexibility in how chat commands are invoked during a conversation. Previously, chat commands like `/explain` or custom commands only supported the command name as input. Now, users can provide additional text after the command, which will be interpreted as extra instruction or context for how the command should be carried out.

For example, you could input `/explain in French` or `/test generate 5 test cases`, and Cody will parse the command name (`/explain` or `/example`) along with the trailing text ("in French" or "generate 5 test cases") and use this to tailor its response accordingly. Providing this extra instructional input allows you to make your intent clearer with the pre-defined prompt and get responses better suited to your specific needs at different time when executing commands.


![alt_text](https://storage.googleapis.com/sourcegraph-assets/blog/vscode-v0-16-release/image6.png "image_tooltip")


## Experimental new chat UI

We’ve been working on a whole new Cody chat experience, which can be enabled via the experimental setting `cody.experimental.chatPanel` to `enable`. It’s not ready for production use, but we’d love your feedback. It lets you open chats in an editor tab for more space, has a new panel icon, a dropdown menu to change the AI model, and the ability to pass context files using `@`. 



![alt_text](https://storage.googleapis.com/sourcegraph-assets/blog/vscode-v0-16-release/image5.png "image_tooltip")

<small><center>Did someone say GPT-4?</center></small>

## @ your context command

Users can now select which context files are used for each chat question. A new “source” field identifies the purpose of each context file, such as embeddings or searches by keyword or filename. These changes provide users with more visibility into how context files are selected and used to inform chat conversations in Cody.


![alt_text](https://storage.googleapis.com/sourcegraph-assets/blog/vscode-v0-16-release/image3.png "image_tooltip")


<small><center>It’s like Twitter/X but for your files.</center></small><br />


Users can now toggle on/off, adding codebase context for each question.  Only local files and embeddings are available as context at the moment.

![](https://storage.googleapis.com/sourcegraph-assets/blog/vscode-v0-16-release/image4.png)

## New Cody natural language search panel 

We found that some use Cody chat for “search” use cases and wind up with disappointing results. To solve this, we now build a local search index of a user’s open project and allow users to input a natural language search term and search for it within their project.

![](https://storage.googleapis.com/sourcegraph-assets/blog/vscode-v0-16-release/image2.png)


## Changelog

See the [changelog](https://github.com/sourcegraph/cody/releases/tag/vscode-v0.16.0) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.


### Thank you

Cody is [open source](https://github.com/sourcegraph/cody), and wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

<hr style={{marginTop:"2rem",marginBottom:"2rem"}} />

To get started with Cody, [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai).
