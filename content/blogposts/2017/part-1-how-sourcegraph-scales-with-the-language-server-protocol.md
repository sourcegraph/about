---
title: 'Part 1: How Sourcegraph scales with the Language Server Protocol'
authors:
  - name: Beyang Liu
    url: https://twitter.com/beyang
publishDate: 2017-02-27T00:00-07:00
tags: [
  "blog"
]
slug: part-1-how-sourcegraph-scales-with-the-language-server-protocol
description: 'Sourcegraph lets you view any line of code in your web browser with all the navigation features of an IDE and more. That includes both classic abilities — like jump-to-definition, find-references, tooltips, and symbol search — and novel superpowers like cross-repository jump-to-definition and global usage examples. The sum of these parts is a quick, frictionless way to discuss or make sense of code.'
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
---



## The problem of Code Intelligence and the need for an open standard

_Update:_ [_Part 2 of this series is now published_](https://about.sourcegraph.com/blog/part-2-how-sourcegraph-scales-with-the-language-server-protocol)_._

Sourcegraph lets you view any line of code in your web browser with all the navigation features of an IDE and more. That includes both classic abilities — like jump-to-definition, find-references, tooltips, and symbol search — and novel superpowers like cross-repository jump-to-definition and global usage examples. The sum of these parts is a quick, frictionless way to discuss or make sense of code.

Underneath the hood is a complex system that parses and analyzes source code on the fly and provides the underlying code navigation capabilities to the UI. These capabilities we collectively call “Code Intelligence.” Code Intelligence is not a marketing term. We use it to mean something very specific:

> **Code Intelligence** is the set of auto-navigation and auto-generation primitives that use a semantic understanding of code to enable a human programmer to efficiently read and write source code.

Let's break that down:

*   _“auto-navigation and auto-generation primitives”_ — in other words, basic capabilities that make it possible to easily jump around and type less.
*   _“semantic understanding”_ — because humans should be free to focus on the substance of the code, rather than the rote mechanics of navigation and typing. Text-based tools like grep leave too much of the burden on you.
*   _“a human programmer”_ — this is not about building a fully autonomous code-writing A.I., because we aren't snake oil salesmen.
*   _“efficiently read and write source code”_ — because that's what your job is as a programmer. And reading code is as important (if not more important) as writing it.

In other words, Code Intelligence is shorthand for “jump-to-def + find-references + symbol-search + tooltips + autocomplete + more.” Code Intelligence is what makes the experience of using Sourcegraph magical. In a series of posts starting with this one, I'm going to explain how the magic works, starting with how the technical challenges of Code Intelligence have led us to adopt the Language Server Protocol as a key layer in our architecture. We think the Language Server Protocol is the future of Code Intelligence — both on Sourcegraph and inside every editor, and we believe that every plugin and IDE author should check it out.

### Separation of concerns

Pick at random a repository, a commit, and a file in one of the languages we support. (If you can't think of one, [this one will do](https://sourcegraph.com/github.com/opentracing/opentracing-go@6edb48674bd9467b8e91fda004f2bd7202d60ce4/-/blob/gocontext.go#L21:6-21:21).) Visit that file in Sourcegraph and in a matter of seconds, you will be able to jump to where things are defined, find everywhere they are used, jump across dependency boundaries, and view usage examples drawn from other projects.

[![](https://cdn-images-1.medium.com/max/800/1*jgQPOsRZn-hPDGGcdtixiw.png)](https://sourcegraph.com/github.com/opentracing/opentracing-go@6edb48674bd9467b8e91fda004f2bd7202d60ce4/-/blob/gocontext.go#L21:6-21:21)Instant Code Intelligence on Sourcegraph

IDEs like Eclipse, IntelliJ, and Visual Studio are massively complex tools that often only support Code Intelligence well on a few languages. Sourcegraph aims to support every programming language. In order to make this gigantic undertaking tractable, we made a key architectural decision early on to define a clear protocol between the language analyzer and the code viewing frontend. Separating these concerns means no language-specific code at the application layer. The folks working on the frontend can focus on user experience without worrying about language semantics. The folks working on language analysis have a clear interface and don't have to worry about the mechanics of the frontend.

We've experimented with different protocols to satisfy our needs along the way. We created a protocol and library called srclib, designed for batch offline language analysis, which powered most of our Code Intelligence in the early days. But over time, as our users and customers began to rely on Sourcegraph more and more, they demanded real-time Code Intelligence in more places (code review, in their editor, etc.) across a larger number of repositories and revisions. To address their needs, we needed a protocol that allowed for real-time analysis. We found what we were looking for in the Language Server Protocol.

### The Language Server Protocol

The [Language Server Protocol](https://github.com/Microsoft/language-server-protocol) (LSP) is an open protocol originally created and open sourced by Microsoft that defines a set of standard Code Intelligence capabilities for editor plugins. Here is a subset that will be familiar to any professional programmer:

*   Jump to definition
*   Find all references
*   Hover-over-symbol tooltips
*   Autocompletion
*   Symbol search

![0-dfLDwCJbsrLWI63Q](//images.contentful.com/le3mxztn6yoo/2FxIw5zjk46e2a62SaYic8/738b01cc83f47bf63599ed3dae58807c/0-dfLDwCJbsrLWI63Q.png)

An example of the protocol in use, from the <a href='https://github.com/Microsoft/language-server-protocol/blob/master/README.md'>official README</a>.

Sourcegraph is not an editor, but we view IDE-level Code Intelligence as table stakes for any tool for viewing and making sense of code. Moreover, we want to bring that level of Code Intelligence to every language in every editor. But a multitude of IDEs and editor plugins already exist—why the need for new plugins, much less a new standard?

#### The M x N problem

We originally wrote about the M x N problem back in 2013, when we created srclib, our open source offline language analysis library. It is the problem of having M editors (Emacs, Vim, Sublime, Visual Studio Code, Atom, etc.) and N programming languages (JavaScript, Java, Go, Python, Rust, TypeScript, etc.) Each of the editors has editing capabilities (buffer management, file navigation, keyboard shortcuts, look-and-feel, etc.) that should be orthogonal to choice of language. In the perfect world, you should be able to stick with your editor of choice no matter what language you work in.

But that's not the world we live in. Why not? Because to make every editor support Code Intelligence for every language, you'd need to build M x N editor plugins, each of which needs to integrate with the plugin API of a specific editor _and_ understand the compiler-level semantics of the language.

![1*deSfeuQZchkOAbI5v7KKCg](//images.contentful.com/le3mxztn6yoo/6CTRlgdnHiEqWaUCa888aG/86696a83591fbde83caba8413c0f93f6/1_deSfeuQZchkOAbI5v7KKCg.png)

M x N

LSP defines a communication protocol that sits between editor plugins and the underlying analysis libraries. You build one language server for each language and one plugin for each editor. Each editor plugin that speaks LSP will now have support for every single language server. you've reduced the M x N problem to an M + N problem.

![1*ws2LYhzfuHpEimlb9-knWQ](//images.contentful.com/le3mxztn6yoo/5fAE4L5xKEM2wOE6WGsMyY/18126663e1f38d946fcfae2b06c2cd88/1_ws2LYhzfuHpEimlb9-knWQ.png)

M + N

This is, of course, all good in theory, but how many languages are actually supported by an LSP-based language server today? [A lot.](http://langserver.org/)

#### Just-in-time and good enough

Another key feature of LSP is the lack of any real data model for code. The protocol has no notion of namespaces, class hierarchies, definitions, or references. How does one represent “jump to definition” with no notion of a definition? In the case of LSP, the input is merely a filename, line number, and column—the location of the reference—and the output is… a filename, line number, and column—the location of the definition.

LSP does not attempt to model the semantic relationships in code at all. But if we are trying to build Code Intelligence, shouldn't our protocol be aware of at least the basic semantic relationships in code? The answer is no for two reasons:

1.  Coming up with a language-agnostic data model is hard. Some languages are imperative. Others are functional. Some languages permit complex class hierarchies. Other languages don't even have inheritance. Coming up with a data model that is both general enough to encompass every language feature in the wild and specific enough to be useful for answering user queries is incredibly tricky.
2.  As the old saying goes, there are only two hard things in Computer Science, and one of them is naming things. (The other one is cache invalidation, which is another fun topic for us at Sourcegraph, but I digress.) Naming is hard and naming things in code is no exception. As an exercise, try coming up with a truly unique universal identifier for a symbol in code. “Universal” in this case means across all the code in the world, not just your local disk, because we no longer live in a world where the code on your disk is the only code that matters. LSP solves the problem by bypassing it completely.

None of this precludes building a semantic data model on top of LSP. In fact, at Sourcegraph, we've done exactly that for some of our more advanced features. But all of that is possible because we build on top of a layer that does not impose oversimplifying assumptions about the code.

#### Extensibility

The last important feature of LSP that I'll touch upon in this post is extensibility. The creators of LSP foresaw that in the future, people would desire new functionality out of language servers beyond what was defined in the original spec. Sourcegraph needs to support features like cross-repository jump-to-definition and global usage examples that no editor or IDE currently offers. The primitive capabilities we require to support these features also happen to be useful to editor plugins in many cases. To that end, we've [extended](https://github.com/sourcegraph/language-server-protocol/blob/master/extension-cache.md) [the](https://github.com/sourcegraph/language-server-protocol/blob/master/extension-files.md) [protocol](https://github.com/sourcegraph/language-server-protocol/blob/master/extension-workspace-references.md). I'll dive into specifics in a later post, but for now, I'll just note that it is easy to add new functionality to LSP without breaking backwards compatibility. Indeed, there is a vibrant, open source community that continues to contribute changes to the protocol while maintaining backwards compatibility with existing LSP plugins.

### The future of Code Intelligence

History has taught us that when it comes to creating technology, it's overwhelmingly the technologies that save developers time that win. Sourcegraph's [mission](https://handbook.sourcegraph.com/company/strategy) revolves around saving developers time. To that end, we've invested deeply in Code Intelligence, because we believe it is a huge multiplier of developer productivity and, as a corollary, a multiplier of the overall rate of technological progress.

We believe that LSP will bring a new wave of Code-Intelligence-powered editor plugins, IDEs, and developer tools. We hope other companies, organizations, and individuals building tools for programmers will join us in adopting and promoting this standard for the benefit of programmers everywhere.

Hopefully, I've given you a better idea of the technical problems we're solving at Sourcegraph and why they matter to the greater software community. In subsequent posts, I'll dive into extensions we've made to LSP to enable novel Code Intelligence abilities (cross-dependency jump-to-def and global usage examples), and I'll describe implementation details of language servers that we think will be broadly useful and interesting. If you are like us and find this interesting, [start contributing](https://github.com/Microsoft/language-server-protocol) and [sign up for Sourcegraph](https://sourcegraph.com/).

### Part 2: How Sourcegraph scales with the Language Server Protocol
[Making Code Intelligence “just work”](https://about.sourcegraph.com/blog/part-2-how-sourcegraph-scales-with-the-language-server-protocol)

### About the author

_Beyang Liu is the CTO and co-founder of Sourcegraph. Beyang studied Computer Science at Stanford, where he published research in probabilistic graphical models and computer vision at the Stanford AI Lab. You can chat with Beyang on Twitter [@beyang](https://twitter.com/beyang) or our community [Discord](https://discord.com/invite/vqsBW8m5Y8)._
