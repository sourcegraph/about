---
title: Improving language support in 2019
description: Improving language support in 2019
author: Chris Wendt
publishDate: 2018-12-21T00:00-07:00
tags: [
  blog
]
slug: improving-language-support-in-2019
heroImage: //images.ctfassets.net/le3mxztn6yoo/t4Qpcq5kA0AYM24Ws4mOk/4edf5502a936bbec90c262fa00355aed/sourcegraph-mark.png
published: false
---

TODO introductory sentence about committing to code intelligence (make this grab your attention). This directly aligns with our [Sourcegraph master plan](https://about.sourcegraph.com/plan) of bringing basic code intelligence to every devloper wherever you see code.

Despite deploying a ton of experimental language servers in 2018, language support has not improved much in the past year - why?

- Wrapping language servers gave us remote execution of the language server, but lsp-adapter did not solve more fundamental problems related to incompatible compiler and package manager versions, not installing dependencies, slow initialization, and poor quality in general
- lsp-proxy was complex and no single Sourcegrapher fully understood how lsp-proxy, lsp-adapter, and indexer worked
- Aside from Swift, we simply didn’t prioritize work on language servers (partly because of the complexity of lsp-proxy, partly because of other priorities)

Since we removed lsp-proxy and added Sourcegraph extensions, the landscape has changed:

- With [Sourcegraph extensions](https://docs.sourcegraph.com/extensions), it’s easier to understand how code intelligence on Sourcegraph works, which makes it easier to build on and all you need to understand is the Sourcegraph extension API (no need to understand xfiles/xcontents, xcache, lsp-adapter, lsp-proxy, etc.) in order to add language support
- There’s a new [Swift language server](https://github.com/apple/sourcekit-lsp)
- There’s a new [Python language server](https://github.com/Microsoft/python-language-server)
- We’ve learned that it’s practical (technically) to add zip archive fetching and WebSocket support directly to language servers (implemented for Go, TypeScript, and Python), and zip archives of the whole repository are usually fast enough for our purposes (whether or not these will be upstreamed is mentioned under risks below)
- We’ve learned that a poorly implemented language server is worse than no language server at all (forever loading hover tooltip spinner wastes time, empty or trivial hover tooltip is distracting, jump-to-definition not working is frustrating, and all of this reflected poorly on Sourcegraph)

These principles will guide future improvements:

- Prioritize languages by a combination of popularity and ease of analysis
- Focus on quality over quantity
- Fund improvements to language servers it means language support will improve faster
- UI/UX ergonomics matter

Sourcegraph believes that there will be one canonical language server per language, and we will be investing effort in the language server that is likely to succeed and become adopted by the respective language community.

We will assess and test language servers roughly on these aspects:

- Basic features such as hover tooltips, jump-to-definition, and find-references in simple and popular repositories
- Initialization time and response time
- Cross-repository code intelligence

If you're interested in language analysis and want to add language support to Sourcegraph, we want to hear from you! Tweet at @srcgraph. Sourcegraph is willing to sponsor work on language servers and Sourcegraph language extensions, provide technical advice, and gather feedback.
