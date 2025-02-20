---
title: Improving language support in 2019
description: Improving language support in 2019
authors:
  - name: Chris Wendt
publishDate: 2019-01-15T00:00-06:00
tags: [
  blog
]
slug: improving-language-support-in-2019
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
---

Sourcegraph's [master plan](https://handbook.sourcegraph.com/company/strategy) is to bring basic code intelligence to every devloper wherever you see code. Despite deploying [a ton of experimental language servers in 2018](https://about.sourcegraph.com/blog/sourcegraph-2-8-19-languages-ridiculously-huge-monorepos-lsp-a-graphql-api), language support has not improved much in the past year - why?

- Wrapping language servers gave us remote execution of the language server, but [lsp-adapter](https://github.com/sourcegraph/lsp-adapter) did not solve more fundamental problems related to incompatible compiler and package manager versions, not installing dependencies, slow initialization, and poor quality in general
- lsp-proxy was complex and no single Sourcegrapher fully understood how lsp-proxy, lsp-adapter, and indexer worked
- Aside from Swift, we simply didn't prioritize work on language servers (partly because of the complexity of lsp-proxy, partly because of other priorities)

Many things have changed in the last year to make it possible to improve language support now:

- With [Sourcegraph extensions](https://docs.sourcegraph.com/extensions), it's easier to understand how code intelligence on Sourcegraph works, which makes it easier to build on and all you need to understand is the Sourcegraph extension API (no need to understand [xfiles/xcontents](https://github.com/sourcegraph/language-server-protocol/blob/master/extension-files.md), [xcache](https://github.com/sourcegraph/language-server-protocol/blob/master/extension-cache.md), [lsp-adapter](https://github.com/sourcegraph/lsp-adapter), lsp-proxy, etc.) in order to add language support
- There's a new [Swift language server (apple/sourcekit-lsp)](https://github.com/apple/sourcekit-lsp)
- There's a new [Python language server (Microsoft/python-language-server)](https://github.com/Microsoft/python-language-server)
- We've learned that it's fairly easy to patch existing language servers (Go, TypeScript, and Python) to support zip archive fetching and WebSockets. This results in a more maintainable and "pure" language server than wrapping a language server with lsp-adapter.
- We've learned that shipping experimental language servers is not an effective way to attract community/contractor help or useful feedback. (We [deactivated experimental language servers](https://about.sourcegraph.com/blog/java-php-experimental_language_servers-temporarily-unavailable).)

Based on these learnings, the following principles will guide future improvements:

- Prioritize languages by a combination of popularity, ease of analysis, and Sourcegraph customer needs (statically-typed languages, ones that already have solid language servers, ones that customers are asking for, etc.)
- Focus on quality over quantity (already tried quantity in 2018 with lsp-adapter and cold emails, and this stagnated)
- Fund improvements to language servers if it means language support will improve faster
- UI/UX ergonomics matter: suppress non-actionable errors and indicate when some analysis is taking a long time

Sourcegraph believes that there will be one canonical language server per language, and we will be investing effort in the language server that is likely to succeed and become adopted by the respective language community.

We will assess and test language servers roughly on these aspects:

- Basic features such as hover tooltips, jump-to-definition, and find-references in simple and popular repositories
- Initialization time and response time
- Cross-repository code intelligence

Here are the first languages that we plan to put effort towards:

- Python: [Microsoft/python-language-server](https://github.com/Microsoft/python-language-server) - [tracking issue](https://github.com/sourcegraph/sourcegraph/issues/959)
- Swift: [apple/sourcekit-lsp](https://github.com/apple/sourcekit-lsp) - [tracking issue](https://github.com/sourcegraph/sourcegraph/issues/1557)

If you're interested in language analysis and want to add language support to Sourcegraph, we want to hear from you! Tweet at @sourcegraph. Sourcegraph is willing to sponsor work on language servers and Sourcegraph language extensions, provide technical advice, and gather feedback.
