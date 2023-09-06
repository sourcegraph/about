---
title: "Cody for VS Code v0.10 release"
authors:
  - name: Tim Lucas
    url: https://handbook.sourcegraph.com/team/#tim-lucas
publishDate: 2023-09-04T10:00-07:00
description: "Command menu UX improvements, JSON export, JSON format changes to custom commands, autocomplete rate limit visibility, and streamed autocomplete responses."
tags: [blog]
slug: "cody-vscode-0-10-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.10.0-og-image.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.10.0-og-image.jpg
---

[Cody for VS Code](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) v0.10 is now available, and includes command menu UX improvements, JSON export, JSON format changes to custom commands, autocomplete rate limit visibility, and streamed autocomplete responses.

### Command menu UX improvements

The Cody command menu (accessible with Opt-C or Alt-C) has been reorganized to show the slash name for each command, and which commands take arguments:

<img alt="Screenshot of Cody v0.10 command menu" src="https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.10.0-command-quickpick.png" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:610}} />

We've also improved being able to quickly ask a question or perform a code edit by typing directly into the Cody command menu input:

<img alt="Screenshot of Cody v0.10 command fallbacks" src="https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.10.0-command-quickpick-fallback.png" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:609}} />

The chat command menu was also updated to more clearly separate the built-in commands and custom commands:

<img alt="Screenshot of Cody v0.10 chat view command popover" src="https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.10.0-chat-menu.png" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:361}} />

### Chat history JSON export

You can now export and inspect your chat history as JSON using the new "Export" button in Chat History:

<img alt="Screenshot of Cody v0.10 chat JSON export buttton" src="https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.10.0-chat-export.png" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:306}} />

The export includes the full conversation between Cody and the LLM allowing you to see how Cody works, send your chat history to Sourcegraph support, or more easily develop custom commands.

```json
{
    "Sun, 03 Sep 2023 14:00:44 GMT": {
        "id": "2023-09-03T14:00:44.696Z",
        "interactions": [
            {
                "humanMessage": { ... },
                "assistantMessage": { ... },
                "fullContext": [
                    { ... }
                ]
            }
        ]
        
    }
}
```

### Updated custom command JSON format

Custom Cody Commands is an experimental feature for extending and customizing Cody. They can be configured locally, or shared with your team by checking them in to your repository.

We updated the JSON configuration format so it now requires a slash command. Now the command is defined by the JSON object key rather than in a special field. We removed the old `slashCommand` field and added a new `description` field that describes the usage for each command.

```diff
{
    "commands": {
-       "My Custom Command": {
+       "my-custom-command": {
-           "slashCommand": "/my-custom-command",
+           "description": "My custom command",
            "command": "node my-custom-context.js",
            "prompt": "My custom prompt"
        }
    }
}
```

Old configuration files will be automatically updated to the new format. It's recommended you also update your custom command descriptions to use sentence case, to match the built-in Cody commands.

### Autocomplete rate limit visibility

We’ve improved the visibility of [autocompletion rate limits](https://docs.sourcegraph.com/cody/troubleshooting#autocomplete-rate-limits). When a rate limit is being applied the Cody status bar icon now changes color. The settings menu also provides information about the rate limit, and links through to the documentation.

<img alt="Screenshot of Cody v0.10 showing an autocomplete warning" src="https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.10.0-autocomplete-rate-limit.png" style={{marginTop:"1rem",marginBottom:"1.5rem",marginLeft:0,maxWidth:613}} />

### Streamed autocomplete responses

Autocompletions now accept a streamed response from the server, and terminate the stream processing as soon as possible. These two changes have resulted in a 40% speed up of multi-line completions, and 10% speedup for single-line completions.

### Changelog

See the [changelog](https://github.com/sourcegraph/cody/blob/main/vscode/CHANGELOG.md) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.

### Thank you

Cody is [open source](https://github.com/sourcegraph/cody), and wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

<hr style={{marginTop:"2rem",marginBottom:"2rem"}}/>

To get started with Cody, [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai).
