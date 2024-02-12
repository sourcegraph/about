---
title: "Cody for VS Code v1.4.0 release"
authors:
  - name: Tim Lucas
    url: https://handbook.sourcegraph.com/team/#tim-lucas
  - name: Justin Dorfman
    url: https://handbook.sourcegraph.com/team/#justin-dorfman
  
publishDate: 2024-02-07T10:00-01:00
description: "Cody for VS Code v1.4.0 is now available and includes a completely reworked Generate Unit Tests command, a new code editing menu, Ask Cody to Explain support for terminal output, easier access to Cody commands from chat, faster autocomplete, and more."
tags: [blog]
slug: "cody-vscode-1-4-0-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-1.4.0/cody-vscode-1.4.0-og-image.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-1.4.0/cody-vscode-1.4.0-og-image.png
--- 

Cody for VS Code v1.4.0 is now available and includes a completely reworked Generate Unit Tests command, a new code editing menu, Ask Cody to Explain support for terminal output, easier access to Cody commands from chat, faster autocomplete, and more.

## Generate Unit Tests: File creation

We’ve redeveloped the Generate Unit Tests command so instead of outputting the test code into chat it now uses the LLM to automatically find or generate the matching unit test file, and streams the result directly into the file. No more copy and pasting from chat.

<Video
  source={{
    mp4: 'blog/cody-1.4.0/generate-unit-tests-file-creation-v3'
  }}
  loop={true}
  title="Generate Unit Tests: File creation"
/>


## Edit: Keyboard shortcut hints

There are two new keyboard shortcuts when you’re in an editor: Alt/Opt+K to Edit, and Alt/Opt+L to Chat. You can also now enable hints for these commands in the settings menu:

<Video
  source={{
    mp4: 'blog/cody-1.4.0/edit-keyboard-shortcut-hints'
  }}
  loop={true}
  title="Edit: Keyboard shortcut hints"
/>

## Edits: New code editing options

When you trigger a code edit we now show a menu that allows you to choose the range for your code edit, and try out different LLMs.

<Video
  source={{
    mp4: 'blog/cody-1.4.0/edits-new-code-editing-options'
  }}
  loop={true}
  title="Edits: New code editing options"
/>

## Chat: Ask Cody to Explain terminal output

You can now ask Cody to explain terminal output, such as error messages, without needing to copy and paste, using the new Ask Cody to Explain option. To use it, select some terminal output, right click, and select “Ask Cody to Explain”.


<Video
  source={{
    mp4: 'blog/cody-1.4.0/chat-ask-cody-to-explain-terminal-output'
  }}
  loop={true}
  title="Edits: New code editing options"
/>

## Chat: Access Cody commands from chat

You can now access the Cody command palette using the Cody button at the top of any Cody chat window:


<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-1.4.0/chat-access-cody-commands-from-chat-v2.png"
  alt=" Chat: Access Cody commands from chat"
/>



## Autocomplete: Faster suggestions

After a number of optimizations in autocomplete logic, and improved traffic routing between the extension and LLM providers, autocompletions for Cody Free & Cody Pro are now 12.10% faster for single line completions, and 11.86% faster for multi-line completions.  


<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-1.4.0/autocomplete-performance-graph-v4.png"
  alt="Autocomplete: Faster suggestions"
/>


## Autocomplete: Easier access to settings

We’ve added a settings button for autocomplete, providing quicker access to your Cody autocomplete settings. There’s also a new setting for disabling completions in code comments.

<Video
  source={{
    mp4: 'blog/cody-1.4.0/autocomplete-easier-access-to-settings'
  }}
  loop={true}
  title="Autocomplete: Easier access to settings"
/>

## Autocomplete: Improved multi-line completion quality

We’ve changed the multi-line suggestion algorithm to reduce lower quality completions. Multi-line completions are now only generated for the following file types: c, cpp, csharp, css, dart, elixir, go, html, java, javascript, javascriptreact, php, python, rust, svelte, typescript, typescriptreact, vue.


## Changelog

See the [changelog](https://github.com/sourcegraph/cody/releases/tag/vscode-v1.4.0) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.


## Thank you

Cody wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

As always, we value your feedback in [Discord](https://discord.com/servers/sourcegraph-969688426372825169) and [GitHub](https://github.com/sourcegraph/cody/discussions). Happy Codying!


<hr style={{marginTop:"2rem",marginBottom:"2rem"}} />

To get started with Cody, [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai).
