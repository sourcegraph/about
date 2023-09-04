---
title: "Cody for VS Code v0.10 release"
authors:
  - name: Tim
    url: https://handbook.sourcegraph.com/team/#tim-lucas
publishDate: 2023-09-04T10:00-07:00
description: "[ody for VS Code v0.10 is now available, and includes command menu UX improvements, JSON export, JSON format changes to custom commands, autocomplete rate limit visibility, and autocomplete TLS connection reuse."
tags: [blog]
slug: "cody-vscode-0-10-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.10.0-og-image.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/cody-vscode-0.10.0-og-image.jpg
---

[Cody for VS Code](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) v0.10 is now available, and includes command menu UX improvements, JSON export, JSON format changes to custom commands, autocomplete rate limit visibility, and autocomplete TLS connection reuse.

### Command UX improvements

The Cody command menu (accessible anywhere using the keyboard shortcut Opt-C or Alt-C) has been improved to xyz:

(gif)

### JSON export of chat history

The new "Export JSON" button in Chat History allows you to export and inspect your chat history as JSON:

(image)

The export includes the full conversation between Cody and the LLM, allowing you to see how Cody works, send your chat history to Sourcegraph support, and more easily develop custom commands.

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

[Custom Cody commands](TODO) are an experimental feature for extending and customizing Cody. They can be configured locally, or checked into your repository and shared with your collaborators.

We’ve updated the JSON configuration format to make the `slashCommand` property required, use the slash command as the configuration key, and switched a sentence-cased `description`:

```diff
{
    "commands": {
-       "My Custom Command": {
-           "slashCommand": "/my-custom-command",
+       "/my-custom-command": {
+           "description": "My custom command",
            "command": "node my-custom-context.js",
            "prompt": "My custom prompt"
        }
    }
}
```

Old configuration files will be automatically updated to the new format, but we recommend updating your command descriptions to sentence case to match the built-in Cody commands.

### Autocomplete rate limit visibiity

We’ve improved the visiblity of [autocompletion rate limits](TODO). When a rate limit is being applied the Cody statusbar icon now changes color. The settings menu also provides information about the rate limit, and links through to the documentation.

(image of yellow statusbar icon)

(image of quickpick w/ error)

### Increased autocomplete speed with TLS connection reuse

We added support for reusing TLS connections, resulting in a 5-10% speed up of autocomplete responses. Due to VS Code limitations, to enable TLS connection reuse you must configure your VS Code "Http: Proxy Support" setting to "off":

```json
{
    "http.proxySupport": "off"
}
```

### Changelog

See the [changelog](https://github.com/sourcegraph/cody/blob/main/vscode/CHANGELOG.md) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.

### Thank you

Cody is [open source](https://github.com/sourcegraph/cody), and wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback 🙏

<hr style={{marginTop:"2rem",marginBottom:"2rem"}}/>

To get started with Cody, [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai).
