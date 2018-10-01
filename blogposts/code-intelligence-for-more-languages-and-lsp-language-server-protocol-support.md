---
title: 'Code intelligence for 13 more languages, with first-class LSP support'
author: 'Geoffrey Gilmore'
publishDate: 2018-05-22T09:00-07:00
tags: [
  "blog"
]
slug: code-intelligence-for-more-languages-and-lsp-language-server-protocol-support
heroImage: //images.ctfassets.net/le3mxztn6yoo/t4Qpcq5kA0AYM24Ws4mOk/4edf5502a936bbec90c262fa00355aed/sourcegraph-mark.png
published: true
---


With code intelligence on Sourcegraph, you can navigate code more easily with hovers, 
definitions, references, implementations, etc. It's all powered by language servers based on the [Language Server Protocol (LSP)](http://langserver.org) standard (Microsoft's [official LSP site](https://microsoft.github.io/language-server-protocol/) also has more information).

Now, thanks to the amazing contributions of hundreds of developers in the LSP ecosystem, Sourcegraph 2.8 has support for 13 more languages. You can also [connect any other LSP-compliant language server](/docs/code-intelligence/adapting-language-servers) to Sourcegraph.

While any spec-compliant language server will work with Sourcegraph, we're focusing testing and development on 13 new languages. That brings the full list of languages with code intelligence on Sourcegraph 19, including the 6 already supported languages:

*   [Go](/docs/code-intelligence/go)
*   [JavaScript](/docs/code-intelligence/javascript)
*   [TypeScript](/docs/code-intelligence/typescript)
*   [Python](/docs/code-intelligence/python)
*   [Java](/docs/code-intelligence/java)
*   [PHP](/docs/code-intelligence/php)
*   [Bash](/docs/code-intelligence/experimental-language-servers) (experimental)
*   [Clojure](/docs/code-intelligence/experimental-language-servers) (experimental)
*   [C++](/docs/code-intelligence/experimental-language-servers) (experimental)
*   [C#](/docs/code-intelligence/experimental-language-servers) (experimental)
*   [CSS](/docs/code-intelligence/experimental-language-servers) (experimental)
*   [Dockerfile](/docs/code-intelligence/experimental-language-servers) (experimental)
*   [Elixir](/docs/code-intelligence/experimental-language-servers) (experimental)
*   [HTML](/docs/code-intelligence/experimental-language-servers) (experimental)
*   [Lua](/docs/code-intelligence/experimental-language-servers) (experimental)
*   [OCaml](/docs/code-intelligence/experimental-language-servers) (experimental)
*   [R](/docs/code-intelligence/experimental-language-servers) (experimental)
*   [Ruby](/docs/code-intelligence/experimental-language-servers) (experimental)
*   [Rust](/docs/code-intelligence/experimental-language-servers) (experimental)

## Use these new languages in Sourcegraph

1. Install or upgrade to [Sourcegraph 2.8](/).
1. On Sourcegraph, in the site admin area, visit the **Code intelligence** page (`/site-admin/code-intelligence`) to see a list of all available language servers.
1. Click **Enable** to enable a language server.

If you're not a site admin, ask your friendly site admin to follow these steps for you.

See documentation on [using experimental language servers](/docs/code-intelligence/experimental-language-servers#using-an-experimental-language-server-on-sourcegraph-server) for more information.

Here's a GIF of the experimental C# support:

<img src="https://cl.ly/2R1f0D2e1I1w/csharp.gif" />

## Status: experimental

This enhanced LSP support and language coverage is experimental. We'll be working with the LSP community, sponsoring maintainers, and submitting patches ourselves to improve the state of code intelligence as quickly as possible for these languages.

We'll remove the "experimental" label from a language server when we have confidence it's fast and reliable for a wide variety of codebases. In the meantime, see the [caveats of experimental language servers](/docs/code-intelligence/experimental-language-servers#caveats-of-experimental-language-servers).

To help us improve code intelligence, when using Sourcegraph, please report any issues you see:

- If code intelligence isn't working on your repository, consult the language server's README for any language-specific required configuration or limitations. Treat it as though you were using an editor plugin for the language. You might need to add a config file, or slightly standardize your build system config, to make it work. It'll be worth it!
- If the problem seems specific to the language server, report it on the language server's own issue tracker. Otherwise, report it on the [Sourcegraph issue tracker](https://github.com/sourcegraph/issues) (and we'll file and often fix an upstream issue if appropriate).

For more information, see ["Code intelligence overview"](/docs/code-intelligence).

## Notes for language server developers

For developers interested in hacking on language servers, adapting a language server for use with Sourcegraph is straightforward. It massively increases the potential audience of your language server to all developers on the web, regardless of editor and without the need to install/configure it individually. Any organization running Sourcegraph internally will be able to use it on all of their code, and we'll deploy it to Sourcegraph.com for use on all open-source code.

See [how to adapt a language server for use with Sourcegraph](/docs/code-intelligence/adapting-language-servers).

We're also eager to sponsor people to build and improve open-source, LSP-based language servers. [Contact us](/contact) if you're interested, either as a part-time effort or to [join our team](https://github.com/sourcegraph/careers) as a full-time member.
