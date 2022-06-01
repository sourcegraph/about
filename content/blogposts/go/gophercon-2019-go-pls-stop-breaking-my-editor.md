---
title: "GopherCon 2019 - Go, pls stop breaking my editor"
description: "The Go community has built many amazing tools to improve the Go developer experience. However, when a maintainer disappears or a new Go release wreaks havoc, the Go development experience becomes frustrating and complicated. This talk will cover the details behind a new tool to solve these issues: gopls (pronounced 'go please'). This tool is currently in development by the Go team and community, and it will ultimately serve as the backend for your Go editor."
authors:
  - name: Vanessa Nicole Naff for the GopherCon 2019 Liveblog
publishDate: 2019-07-25T00:00-11:20
tags: [
  gophercon
]
slug: gophercon-2019-go-pls-stop-breaking-my-editor
heroImage: https://about.sourcegraph.com/gophercon2019.png
published: true
---

Presenter: Rebecca Stambler

Liveblogger: [Vanessa Nicole Naff](https://twitter.com/axiomista)

## Overview

The Go community has built many amazing tools to improve the Go developer experience. However, when a maintainer disappears or a new Go release wreaks havoc, the Go development experience becomes frustrating and complicated. This talk will cover the details behind a new tool to solve these issues: gopls (pronounced 'go please'). This tool is currently in development by the Go team and community, and it will ultimately serve as the backend for your Go editor.

---

## Introduction

When Rebecca first started writing code in Go, she was using Sublime, and she was fighting with her editor.
Which extensions should she install to support her coding?
Mystifying error messages were discouraging, and other editors were no less frustrating.

Now, after 3 years on the Go core team, she's figured it out.
So how is the Go core team working to improve the experience for you?

_First, we are asking:_

## What do I want from a Go editor?

- Show me **errors**, like unused variables or typos
- **autocomplete** would be nice
- **function signature** help, because I'll often forget
- While we're at it, hover-accessible **"tooltip" documentation** in general
- Help me **jump to a variable** I need to see
- An **outline** of my package structure

Editors don't always have these features, which can slow us down.
Rebecca learned a few years ago that even some engineers on the Go team at Google had never enabled autocomplete because it was so much overhead to figure out how.

_So what are users doing and saying?_

## Categorizing feedback

Rebecca and the core team categorized feedback responses from the Go community and identified some consistently-mentioned issues:

- Configuring and installing tools is difficult to figure out, and often not well-documented
- Tool performance can be poor with large projects
- Flaky features: it worked yesterday!
- Tooling falls behind the language, with features lost every update

Overall, we're living with editors that don't fit our needs.

_So let's deep-dive into some issues, but first:_

## A step back: How does my editor even work?

Rebecca used VSCode as an example:

The Go extension is written in Typescript, so it's not doing direct analysis on our Go code.

It calls out to tools, like [`godef`](https://godoc.org/github.com/rogpeppe/godef). You could use CLI to do this yourself. It returns a position, and VSCode will move your cursor to that position.
But every tool has its own CLI, *and* return message format, *and* is maintained differently.

**The VSCode extension uses 24 different Go tools.**

We need it to be easier for all different editors to use all these tools.

![Every editor uses every tool](/gophercon-2019/gopls-editors-tools.png)

Inefficiency is a major concern here. The VSCode Go extension doesn't set up a persistent server, so we create a new `godef` process _every time_, starting from scratch. No work is shared for each request to `godef`, even from a single file.

`File is read -> Package found -> Dependency tree found -> All parsed and read`

This works for a small package, but it can take _multiple seconds_ to find all references for a large package.

We need a shared infrastructure between these tools to cache results and work faster!

## New Go releases break features

![This is fine](/gophercon-2019/gopls-thisisfine.png)

_image credit: [KC Green](http://gunshowcomic.com/648)_

Rebecca used `gocode` as a real example here.
It was written in 2014 by the community, and is the default autocomplete tool for VSCode and vim.
But Go 1.10 added a build cache, which is incompatible with the way that `gocode` worked!
It had to be [forked](https://github.com/mdempsky/gocode) and rewritten to fix the broken user experience for Go version>=1.10.

Then it happened *again* with the introduction of go modules, which broke autocompletion and all tools, essentially.
The core team had to [fork `gocode` again](https://github.com/stamblerre/gocode) and rewrite for modules support.
Now the VSCode extension has to choose between three forks of `gocode` to provide autocomplete..

![Three forks of gocode](/gophercon-2019/gopls-gocode-forks.png)

**Key takeaway:** The core team should invest effort not to break the engineer and maintainer experience with Go when releasing.

Rebecca explained that `gocode` and all these other tools kept breaking because of the dependency on the behavior of `go build`.
A tool should change when language changes, you'd think, but the core team had previously not managed the toolset directly, so the community had to catch up with the core team's release.
All the current stable Go developer tools mimic the go build system for parsing, typechecking, etc, and then provide helpful logic. Essentially, they are reverse-engineering the build process on the fly.

There is switching inside `go build` so that it knows what to specifically to use for your build system! Are you using modules? dep? If your tool doesn't know where to look for your dependencies, it won't be able to typecheck anything.

## Finding a solution

We as a community want to stop tools from relying on reverse-engineering `go build`.
Rebecca asserted that the Go core team needs to commit to supporting tools and the people that work with them.
The core team first took this on explicitly when they broke everyone's tools with the release of modules-- they began assisting the fixes for commonly-used community tools.

## How do we make sure our tools continue to work?

Rebecca here introduced the creation of a layer that will work with all types of dependency trees to avoid the dependency on `go build` behavior.
It communicates with the Go packages driver, so we don't have to care about how dependencies are managed by the build. This reduces tool maintenance significantly, since now we can fix the server layer's interaction with the driver *once* instead of fixing 24+ tools if there's a breaking change from a language update.

## How do we improve usability?

What are the essential features for editor support; what should be supported? The core team had to ask these questions first.

Fortunately, there is a standard answer! [The Language Server Protocol (LSP)](https://langserver.org/) already solves this problem in a standard way.

The LSP already defines core features to answer the questions the editor asks.
A language server can then just route your request to the correct server when your language is identified, so if we have one for Go, we can support all the editors that already know how to use LSP. (That's mostly all of them.)

![Every editor uses the Go language server](/gophercon-2019/gopls-editors-langserver.png)

## gopls is the Go language server

It is:

- Built on the Go language API and LSP
- Collaborated on by the Go team and Go community
- Pronounced "go please", not "goppels"
- In alpha, so no stable release yet
- A long-running server with a memory cache, so much faster 

Its speed doesn't degrade with modules!

`gopls` will be easier to improve upon than other go toolsets: you just have to add a new function to add a new feature.
Rebecca also talked about a plan to add some other really cool support. Here's a sneak preview:

- Additional diagnostics beyond `go build` and `go vet`, e.g. `golint`
- Quickfix suggestions that can be auto-applied
- Autocompletion for un-imported packages

It will also be reliable.
You can hold the Go core team accountable for any issues simple by using the issue tracker.

Since the Go core team and the Go community are supporting and maintaining `gopls`, you know it will be reliably worked. This tool wouldn't exist without the community!
The current development team is working to keep communication lines open:

- In [Gopher slack](https://invite.slack.golangbridge.org/), there is a channel `#gopls`
- The tools team is hosting a regular video chat where you can demo and discuss tools features

**Rebecca asked that you please send feature requests, feedback, and (if you want) contributions to `gopls`!**

Get the most stable alpha and try it out if you wish: `go get golang.org/x/tools/gopls@latest`

--

[The `gopls` wiki](https://github.com/golang/go/wiki/gopls)
