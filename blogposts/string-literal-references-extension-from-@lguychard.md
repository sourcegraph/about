---
title: String literal references extension from @lguychard
description: How a developer built a Sourcegraph extension and you can too.
author: Ryan Blunden, Developer Advocate at Sourcegraph
publishDate: 2018-10-24T00:00-07:00
tags: [
  blog
]
slug: string-literal-references-extension-from-@lguychard
heroImage: https://about.sourcegraph.com/sourcegraph-mark.png
published: false
---

# String literal references extension from @lguychard

 [Loïc Guychard (lguychard)](https://github.com/lguychard) has created an awesome extension that [searches for string references throughout a repository](https://github.com/lguychard/sourcegraph-string-references). Here's how it came about.

## It started with an extension request

<!-- TODO(ryan): The sourcegraph-extension-api repository was archived, so the issue link is no longer a good idea to use here. Find a way to rephrase this without needing to link to the issue. -->

A Sourcegrapher, [Nick Snyder (@nicksnyder)](https://github.com/nicksnyder), created an issue in the Sourcegraph extension API repository about an extension he wanted to see built.

After some discussion with other Sourcegraph team members in the thread, Loïc chimed in, saying "I would like to tackle this!".

Two days later, his extension is now [published on Sourcegraph.com](https://sourcegraph.com/extensions/lguychard/string-references) and because of the [Sourcegraph browser extension](https://docs.sourcegraph.com/integration/browser_extension), it also works on GitHub.

![Sourcegraph String References Extension](https://raw.githubusercontent.com/lguychard/sourcegraph-string-references/master/demo.gif)

## Want to build an extension?

[View the list of extension requests](https://github.com/sourcegraph/sourcegraph/labels/extension-request) and [check out the extension authoring documentation](https://github.com/sourcegraph/sourcegraph-extension-docs).
