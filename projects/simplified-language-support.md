---
title: Simplified architecture for language support in Sourcegraph
description: Simplified architecture for language support in Sourcegraph
author: Chris Wendt
publishDate: 2018-11-01T00:00-07:00
tags: [
  blog
]
slug: simplified-architecture-for-language-support-in-sourcegraph
heroImage: //images.ctfassets.net/le3mxztn6yoo/t4Qpcq5kA0AYM24Ws4mOk/4edf5502a936bbec90c262fa00355aed/sourcegraph-mark.png
published: false
---

Sourcegraph has a storied history of language support, with many custom components built along the way. Now that Sourcegraph extensions are capable of providing a lot of the same functionality, we have simplified the way that code intelligence on Sourcegraph works to make it easier to understand and build on.

TODO mention lsp-proxy, lsp-adapter, freedom to pick the protocol between Sourcegraph extensions and external services, etc.
