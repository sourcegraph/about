---
title: "Cody for VS Code v1.6.0 release"
authors:
  - name: Kalan Chan
    url: https://handbook.sourcegraph.com/team/#kalan-chan
  - name: Justin Dorfman
    url: https://handbook.sourcegraph.com/team/#justin-dorfman
  - name: Tom Ross
    url: https://handbook.sourcegraph.com/team/#tom-ross
  - name: Philipp Spiess
    url: https://handbook.sourcegraph.com/team/#philipp-spiess
  - name: Ado Kukic
    url: https://handbook.sourcegraph.com/team/#ado-kukic
publishDate: 2024-02-21T10:00-01:00
description: "This release includes several keyboard shortcuts, enabling login in VSCodium, reducing autocomplete latency, and fixing issues with chat stealing editor focus and displaying file ranges."
tags: [blog]
slug: "cody-vscode-1-6-0-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.6.0/cody-vscode-1.6.0-og-image.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.6.0/cody-vscode-1.6.0-og-image.png
--- 

We're thrilled to announce the release of Cody v1.6.0, our latest update to our VS Code extension. This release includes several keyboard shortcuts, enabling login in VSCodium, reducing autocomplete latency, and fixing issues with chat stealing editor focus and displaying file ranges. Notable new features include warning users to select large `@-file` mentions in chat and removing leading slashes from command names. 


## @-file mention improvements


##### Size limits

We implemented stricter file filtering, size limits, and user warnings. We filtered the file results to remove non-file items and oversized entries over 1 MB from making it into results. Additionally, we check file token counts against our parsing limits and flag files as large if they contain too many tokens to process.

Finally, we added user warnings - when a user attempts to use a `@-file` mention, Cody checks the size and displays a warning below the file name alerting them if it exceeds size restrictions before inclusion.


![](https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.6.0/image-001.png)



##### In the middle 

No longer do you need to start with an `@-file` mention. You can now mention any file under 1 MB in the middle of your prompt using chat.


<Video
  source={{
    mp4: 'blog/cody-vscode-1.6.0/image-002-b'
  }}
  loop={true}
  title="@-file mention improvements"
/>



## New Keyboard Shortcuts

Code edits are now entirely keyboard accessible. Whether you are documenting code, generating tests, or just editing code via instruction, you can now create, accept, retry, or undo the edit without touching your mouse.


![](https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.6.0/image-003.png)



##### Shortcut reference


| &nbsp; Command      | macOS                       | Windows/Linux                 |
| ------------------- | --------------------------- | ----------------------------- |
| &nbsp; Accept       | <kbd>⌥</kbd> + <kbd>A</kbd> | <kbd>Alt</kbd> + <kbd>A</kbd> |
| &nbsp; Edit & Retry | <kbd>⌥</kbd> + <kbd>R</kbd> | <kbd>Alt</kbd> + <kbd>R</kbd> |
| &nbsp; Undo         | <kbd>⌥</kbd> + <kbd>X</kbd> | <kbd>Alt</kbd> + <kbd>X</kbd> |


## Updated Command Menu

Previously, many of Cody's commands contained forward slashes like `/ask`. These have been removed to create command names with icons that are easier to read at a glance.


##### Before

![](https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.6.0/image-004.png)

##### After

![](https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.6.0/image-005.png)

As you can see, the new command menu has a clean, consistent visual design so you can scan and find commands faster than before.

## Continued work on autocomplete performance

This release includes further performance enhancements for autocomplete, building on the work we started in the [last release](https://sourcegraph.com/blog/cody-vscode-1-4-0-release).

Improvements include:

* Earlier start time for context retrieval logic
* Reductions in time spent processing cached completions
* New request throttling logic that we will start testing soon

We will follow up with numbers in the next release post!

## Changelog

See the [changelog](https://github.com/sourcegraph/cody/releases/tag/vscode-v1.6.0) and [GitHub releases](https://github.com/sourcegraph/cody/releases) for a complete list of changes.


## Thank you

Cody wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

As always, we value your feedback in [Discord](https://discord.com/servers/sourcegraph-969688426372825169) and [GitHub](https://github.com/sourcegraph/cody/issues/new/choose). Happy Codying!


---

**To get started with Cody [install it from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai)**


---

Previous release: [Cody for VS Code v1.4.0](/blog/cody-vscode-1-4-0-release)