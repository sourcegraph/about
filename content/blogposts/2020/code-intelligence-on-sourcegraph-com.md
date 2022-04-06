---
title: 'Code intelligence on sourcegraph.com'
author: 'Michael Fromberger'
publishDate: 2020-04-14T00:00-07:00
tags: [
  "blog"
]
slug: code-intelligence-on-sourcegraph-com
heroImage: /blog/blog-code-intelligence.png
published: true
---

At Sourcegraph we are working toward a long term goal of making code intelligence results both fast and precise. Today, Sourcegraph provides basic code intelligence for many languages [using our search engine](https://docs.sourcegraph.com/code_intelligence/basic_code_intelligence). It's fast, requires zero configuration, and covers many use cases, but the results are not guaranteed to be completely accurate.  To get more precise answers we also use language-specific indexers to generate data in [Language Server Index Format](https://code.visualstudio.com/blogs/2019/02/19/lsif) (LSIF), for important navigation queries like Go-to-Definition and Find References. Indexers already exist for several languages, including C++, Go, TypeScript, and Dart, and more are in-progress (visit https://lsif.dev for a list of indexers).

For historical reasons, we also run separate language servers for Go and TypeScript code. As part of our indexing work, we've changed the default settings on Sourcegraph.com to use _only_ LSIF or basic code intelligence for those languages. Repositories that don't contain Go or TypeScript are completely unaffected by this. For repositories that _do_ contain Go or TypeScript code, it's easy to set up indexing. If you're interested, check out our [LSIF Quick Start guide](https://docs.sourcegraph.com/code_intelligence/lsif_quickstart), and the README files for [the Go indexer](https://github.com/sourcegraph/lsif-go) and [the TypeScript indexer](https://github.com/sourcegraph/lsif-node).

We don't expect this change to have a big impact on your use of Sourcegraph. If for some reason you do run into problems, however, please [file an issue to let us know](https://github.com/sourcegraph/sourcegraph/issues/new?assignees=&labels=&template=question.md&title=)! We would like to understand and help you fix or work around any issues you may encounter.
