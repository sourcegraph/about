---
title: "Deprecating Language Server support"
author: Eric Fritz
authorUrl: https://eric-fritz.com
description: "We're dropping support for Language Server-based code intelligence from our product effective on 2021-08-20. Note that this will affect all instances that are not running a private extension registry, not just those upgrading to Sourcegraph 3.31."
publishDate: 2021-08-10T12:00-00:00
tags: [blog]
slug: deprecating-lsp
heroImage: /blog/optimizing-code-intelligence-commit-graph.png
socialImage: https://about.sourcegraph.com/blog/optimizing-code-intelligence-commit-graph.png
published: true
---

Sketch below

We’ve sunset LSP
What: Removing language server support from code intel extensions. A lil' about how code intel extensions work and what language servers were and what we do now.
Why: It’s been deprecated for quite some time now and we’ve done some cleaning in our codebase.
Does this affect me?: Probably not! Check for deployment and/or settings. Here’s an upgrade path.
