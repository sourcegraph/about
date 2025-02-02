---
title: 'Sourcegraph, code intelligence, and the Language Server Protocol'
authors:
  - name: Beyang Liu
    url: https://twitter.com/beyang
publishDate: 2017-05-15T00:00-07:00
tags: [
  "blog"
]
slug: sourcegraph-code-intelligence-and-the-language-server-protocol
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
---



Pick your favorite Java repository and a revision and file at random (or [try this one](https://sourcegraph.com/github.com/apache/commons-io@70b9170cac5a47f6d55cdced51e94ac9a8fec28a/-/blob/src/main/java/org/apache/commons/io/IOUtils.java#L99:18)). Visit that file in [Sourcegraph](https://sourcegraph.com) and within seconds, you can jump to definition (Ctrl/⌘-click), find all references (right click), search for symbols (Ctrl/⌘-p), and view usage examples drawn from other projects.

How does the magic work? A big part of it is a new open standard called the **Language Server Protocol** (LSP). We think LSP will benefit almost every code editor and plugin, and we'd like to explain why with examples of how Sourcegraph has used it to scale to millions of repositories across many different languages.

[![](https://cdn-images-1.medium.com/max/1000/1*LOyxNByJZg-9xdHVQWotbw.png)](https://sourcegraph.com/github.com/junit-team/junit4@d07ed0bf79efd81c260f327854a02097f59fffb2/-/blob/src/main/java/org/junit/Test.java#L66:20)

### Code intelligence

Jump-to-definition, find references, and symbol search are crucial tools for the everyday tasks of understanding and working with code. Their importance is obvious to users of IDEs like the Eclipse IDE, and there's a constant effort to build plugins that provide these features for more and more languages.

The [Language Server Protocol](https://github.com/Microsoft/language-server-protocol), originally released by Microsoft, is an open standard that makes it much easier to write editor plugins that work across many languages. And beyond the code in your editor, it has enabled Sourcegraph to bring such features to all the other places programmers view code, including your [web browser](https://sourcegraph.com/github.com/junit-team/junit4@d07ed0bf79efd81c260f327854a02097f59fffb2/-/blob/src/main/java/org/junit/Test.java#L66:20), [code review tool](https://docs.sourcegraph.com/integration/browser_extension?hl=en), and [code search](https://text.sourcegraph.com/introducing-code-search-in-sourcegraph-5944a3b75df7).

![0-dfLDwCJbsrLWI63Q](//images.contentful.com/le3mxztn6yoo/2FxIw5zjk46e2a62SaYic8/738b01cc83f47bf63599ed3dae58807c/0-dfLDwCJbsrLWI63Q.png)

An example of the protocol in use, from the <a href='https://github.com/Microsoft/language-server-protocol/blob/master/README.md'>README</a>.

Sourcegraph is designed to be a quick, frictionless way to make sense of code. It's faster than OpenGrok and as smart as your IDE when it comes to things like finding all references to a symbol. Underneath the hood is a complex system that parses and analyzes source code on the fly to provide underlying capabilities that we call **code intelligence**. “Code Intelligence” is just shorthand for language-aware productivity boosters like:

*   Jump to definition
*   Find references
*   Symbol search
*   Hover tooltips
*   Autocomplete

But such features have existed in tools like the Eclipse platform for decades. Why the need now for a new open standard? The reason has to do with tractability.

### O(M·N) problem

IDEs like the Eclipse IDE are complex systems that often support Code Intelligence on a certain set of languages. Sourcegraph aims to support every language. LSP makes both these undertakings far more tractable.

Historically, the problem of supporting multiple languages in multiple editors has been O(M·N). You have M editors (Eclipse IDE, Visual Studio Code, Sublime, Atom, Emacs, Vim, etc.) and N languages (Java, JavaScript, Go, TypeScript, Python, etc.). Historically, you need a separate Code Intelligence plugin for each combination of editor and language. Such plugins are expensive to write — you have to understand compiler internals _and_ integrate with different build systems _and_ figure out UI subtleties. As a result, you end up in a world in which there are far fewer than M·N plugins — a world in which your choice of language severely constrains your choice of editor and vice versa. In the perfect world, you should be able to stick with your editor of choice no matter what language you work in.

![1*deSfeuQZchkOAbI5v7KKCg](//images.contentful.com/le3mxztn6yoo/6CTRlgdnHiEqWaUCa888aG/86696a83591fbde83caba8413c0f93f6/1_deSfeuQZchkOAbI5v7KKCg.png)

 O(M·N) problem

Defining a clear protocol between the language analyzer and the code viewer/editor is crucial. Separating these concerns means no language-specific code at the application layer. The folks working on the frontend can focus on user experience without worrying about language semantics. The folks working on language analysis have a clear interface and don't have to worry about the mechanics of the frontend.

LSP defines such a protocol that sits between editor plugins and the underlying analysis libraries. You build one language server for each language and one plugin for each editor. Each editor plugin that speaks LSP will now have support for every single language server. You've reduced a O(M·N) problem to a O(M+N) problem.

![1*ws2LYhzfuHpEimlb9-knWQ](//images.contentful.com/le3mxztn6yoo/5fAE4L5xKEM2wOE6WGsMyY/18126663e1f38d946fcfae2b06c2cd88/1_ws2LYhzfuHpEimlb9-knWQ.png)

O(M + N)

The theory translates well into practice. Currently, [there is a LSP implementation for almost every major programming language](http://langserver.org/). And that means if your editor plugin speaks LSP, you have access to Code Intelligence across many languages all without having to write a single line of parsing or type-checking code.

### Just-in-time and good enough

Another key feature of LSP is the lack of a strict model for code structure. The protocol has no notion of namespaces, class hierarchies, definitions, or references. How does one represent “jump to definition” with no notion of a definition? In the case of LSP, the input is merely the location of the reference (a filename, line number, and column) and the output is the location of the definition (also a filename, line number, and column).

LSP does not attempt to model the semantic relationships in code at all. But if we are trying to build Code Intelligence, shouldn't our protocol be aware of at least the basic semantic relationships in code? Surprisingly, the answer is “no” for two reasons:

1.  Coming up with a language-agnostic data model is hard. Some languages are imperative. Others are functional. Some languages permit complex class hierarchies. Other languages don't even have inheritance. Coming up with a data model that is both general enough to cover every language feature in the wild and specific enough to be useful for answering user queries is very tricky.
2.  As the old saying goes, there are only two hard things in Computer Science, and one of them is naming things. (The other one is cache invalidation, which is another fun topic for us at Sourcegraph, but that's for another article.) Naming is hard and naming in code is no exception. As an exercise, try coming up with a truly unique universal identifier for a symbol in code. “Universal” in this case means across all the code in the world, not just your local disk, because we no longer live in a world where the code on your disk is the only code that matters. LSP solves the problem by bypassing it completely.

None of this precludes building a semantic data model on top of LSP. In fact, at Sourcegraph, we've done exactly that for more advanced features. But all of that is possible because we build on top of a layer that does not make premature oversimplifications about the code.

### Extensibility

The last feature of LSP that I'll mention in this post is extensibility. The creators of LSP foresaw that in the future, people would desire new functionality from language servers beyond what was defined in the original spec. Sourcegraph needs to support features like cross-repository jump-to-definition and global usage examples that no editor or IDE currently offers.

The primitive capabilities we require to support these features also happen to be useful to editor plugins in many cases. To that end, we've [extended](https://github.com/sourcegraph/language-server-protocol/blob/master/extension-cache.md) [the](https://github.com/sourcegraph/language-server-protocol/blob/master/extension-files.md) [protocol](https://github.com/sourcegraph/language-server-protocol/blob/master/extension-workspace-references.md). It's easy to add new functionality to LSP. Indeed, there is a vibrant, open source community that continues to contribute changes to the protocol while maintaining backwards compatibility with existing LSP plugins.

### Code Intelligence for every language, every editor, and everywhere you view code

I'd love to live in a world where it's as easy to use the Eclipse IDE to write Python or JavaScript as it is to write Java. I'd also love a world where exploring code in any language with IDE-like superpowers was as easy as sharing [this hyperlink](https://sourcegraph.com/github.com/junit-team/junit4@d07ed0bf79efd81c260f327854a02097f59fffb2/-/blob/src/main/java/org/junit/Test.java#L66:22).

We think the Language Server Protocol will enable both these dreams to become reality. Code intelligence is what makes the experience of using your IDE magical, and LSP makes that magic far more tractable to implement. We've used it to great success so far at [Sourcegraph](https://sourcegraph.com/) and we'd highly encourage you to check it out for your IDE and editor plugins.

Questions, comments, or feedback about Sourcegraph or LSP? [Let us know](https://twitter.com/sourcegraph)!

### About the author

_Beyang Liu is the CTO and co-founder of Sourcegraph. Beyang studied Computer Science at Stanford, where he published research in probabilistic graphical models and computer vision at the Stanford AI Lab. You can chat with Beyang on Twitter [@beyang](https://twitter.com/beyang) or our community [Discord](https://discord.com/invite/vqsBW8m5Y8)._
