---
title: Loïc Guychard's Sourcegraph String References Extension
description: How a developer built a Sourcegraph extension and you can too.
author: Ryan Blunden, Developer Advocate at Sourcegraph
publishDate: 2018-10-24T00:00-07:00
tags: [
  blog
]
slug: sourcegraph-string-references-extension
heroImage: //images.ctfassets.net/le3mxztn6yoo/t4Qpcq5kA0AYM24Ws4mOk/4edf5502a936bbec90c262fa00355aed/sourcegraph-mark.png
published: false
---

# The Sourcegraph string references extension

Sourcegraph extensions at time of writing are still in alpha, but that didn't stop [Loïc Guychard](https://github.com/lguychard) creating an awesome extension that [searches for string references throughout a repository](https://github.com/lguychard/sourcegraph-string-references).

While our [documentation for Sourcegraph extensions](https://github.com/sourcegraph/sourcegraph-extension-docs/) and tooling is always improving (e.g., using `npm init @sourcegraph/extension` to generate the skeleton of an extension), we love it when developers see an opportunity to build something and let nothing stand in their way.

## It started with an idea

Head of Engineering at Sourcegraph [Nick Snyder](https://github.com/nicksnyder), created an [issue on the Sourcegraph extension API](https://github.com/sourcegraph/sourcegraph-extension-api/issues/85) about an extension he wanted to see built.

After some discussion with other Sourcegraph team members in the thread, Loïc chimed in, saying "I would like to tackle this!".

![Sourcegraph String References Extension](https://raw.githubusercontent.com/lguychard/sourcegraph-string-references/master/demo.gif)

Two days later, his extension is now [published on Sourcegraph.com](https://sourcegraph.com/extensions/lguychard/string-references) and because of the [Sourcegraph browser extension](https://docs.sourcegraph.com/integration/browser_extension), it also works on GitHub.

## Sourcegraph is now a platform for you to build the dev tools you've always wanted

We can't wait to see what the community builds! Sourcegraph extensions allow you, whether you're an individual or an organization to build whatever tooling should be available for code hosts and editors everywhere.

Want to get involved? [View the list of extension requests](https://github.com/sourcegraph/sourcegraph-extension-api/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Aext-request+) (growing daily) and [check out the extension authoring documentation](https://github.com/sourcegraph/sourcegraph-extension-docs/).
