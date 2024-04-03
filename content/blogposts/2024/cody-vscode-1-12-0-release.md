---
title: "Cody for VS Code v1.12.0 release"
authors:
  - name: Alex Isken
    url: https://handbook.sourcegraph.com/team/#alex-isken
  - name: Justin Dorfman
    url: https://handbook.sourcegraph.com/team/#justin-dorfman
publishDate: 2024-04-03T10:00-01:00
description: "Cody for VS Code v1.12.0 is now available. This release brings Claude 3 Sonnet to Cody Free users as the new default model plus several improvements for context handling."
tags: [blog]
slug: "cody-vscode-1-12-0-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.12.0-og-image.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.12.0-og-image.png
--- 

[Cody for VS Code](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) v1.12.0 is now available! This release includes several improvements focused on context handling, particularly around large files. It also includes model upgrades to improve the chat experience for both Free and Enterprise users, including Claude 3 Sonnet becoming the new default model for all Free users.


## Model upgrades and chat improvements

### Claude 3 Sonnet is the new default model for Cody Free users

We’re rolling out Claude 3 to even more users! Claude 3 Sonnet is now the default model used for all chats and commands for Cody Free users.

[According to Anthropic](https://www.anthropic.com/news/claude-3-family), Sonnet is as intelligent as Claude 2.0 while being roughly twice as fast, and Free users should see those speed improvements when chatting with Cody.


### Reduced frequency of “Unfortunately….” responses in chat for Cody Enterprise 

We saw an increasing number of Cody chat responses starting with “Unfortunately…” and we were able to tie that behavior back to Claude 2.1’s [more conservative approach](https://www.anthropic.com/news/claude-2-1-prompting) to answering questions. We’ve switched the default model for Cody Enterprise users to Claude 2.0 to counteract this. Impacted users should see a drastically reduced rate of “Unfortunately…” responses in chat going forward.

This change will impact Cody Enterprise users who are running Sourcegraph Cloud and don’t have a model explicitly selected. We’ll also add the option to use Claude 3 models in Cody Enterprise in an upcoming release.


## Improvements to context handling

### Include larger files with line ranges

Files that cause Cody’s context window to exceed our token limit couldn’t be added at all to query context (using @-mention) previously. Now you can specify line ranges by @-mentioning a file and appending a number range to the filename (e.g. @filepath/filename:1-10).  This should allow more flexibility for customizing Cody’s context, even when the full file exceeds the token limits.


### @-mention file lookups are now faster

When you @-mention files to add them to Cody’s context window, the file lookup now respects `files.exclude`, `search.exclude`, and `.gitgnore` files. The file search is now much faster too (going from >1 second to &lt;100ms in our tests).


### Cody now tracks @-mentioned files against the max context window

As you @-mention files, Cody will now track the number of characters in those files against the context window limit of our system. As you @-mention multiple files, Cody will calculate how many tokens of the context window are remaining. As the remaining context window shrinks, you’ll eventually see “File too large” errors when trying to @-mention more files.  Over the coming weeks we expect to drastically increase the available context window, stay tuned!


### Improved context quality for JS, TS, Python, and Go

Cody will now more intelligently select context used for chat and inline edit functions in JavaScript, TypeScript, Python, and Go. Cody will look at the cursor position and select context based on the surrounding code's syntax instead of the surrounding code's indentation.

This small change should lead to a noticeable improvement in context quality for some scenarios, particularly for inline edits. One example of this is in JavaScript tests. If you run an inline edit for an `it` block, Cody would previously expand to select the entire `describe` block. This bug is fixed using syntactic context selection.


## Quality of life improvements to the login flow

We’ve removed some of the back-and-forth steps required to log in to Cody in your IDE. Previously, logging in required several hops between the IDE and the browser and back, and this process is now much faster and simpler when logging in.


## Support forum

This week, we have made our support forum on Discord read-only, meaning you can no longer ask support-related questions there. Instead, we have launched a new [support forum](https://community.sourcegraph.com/) that provides better tools to help answer your questions more quickly. Please note that Discord is not going away; it will still be available for chatting with other community members. 🙂

If you have a Pro or Enterprise account, we encourage you to email [support@sourcegraph.com](mailto:support@sourcegraph.com) with any issues related to your account, especially billing or other sensitive account information.


## Changelog

See the [changelog](https://github.com/sourcegraph/cody/releases/tag/vscode-v1.12.0) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.


## Thank you

Cody wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

As always, we value your feedback in our [support forum](https://community.sourcegraph.com/), [Discord](https://discord.com/servers/sourcegraph-969688426372825169) and [GitHub](https://github.com/sourcegraph/cody/discussions). Happy Codying!


---

**To get started with Cody [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai)**

To get started with Cody, [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai).
