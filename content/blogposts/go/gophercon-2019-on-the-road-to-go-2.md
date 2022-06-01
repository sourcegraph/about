---
title: "GopherCon 2019 - On the road to Go 2"
description: "We're on the road to Go 2. But where exactly are we? Where are we headed? Come find out."
authors:
  - name: Alan Braithwaite for the GopherCon Liveblog
publishDate: 2019-07-25T00:00-09:10
tags: [
  gophercon
]
slug: gophercon-2019-on-the-road-to-go-2
heroImage: https://about.sourcegraph.com/gophercon2019.png
published: true
---

Presenter: Russ Cox

Liveblogger: [Alan Braithwaite](https://www.abraithwaite.net)

## Overview

We're on the road to Go 2. But where exactly are we? Where are we headed? Come find out.

## Summary

Development on Go has been a loop consisting of the following stages:

- experiment
- simplify
- ship

As we develop Go, we experiment and solicit feedback from the community to
gauge whether or not that experiment will actually help simplify development
and benefit the language.  If it does, we will adopt that experiment.

The main areas of focus for Go2 are:

- Error handling
- Generics
- Dependency Management
- Tooling

## Introduction

![introduction](/gophercon-2019/introduction.jpg)

Development on Go began with a loop consisting of the following stages:

- Experiment
- Simplify

The 4 Rs of simplifying guide the process:

- Reshaping
- Redefining
- Removing
- Restricting

Let's see some examples.

### Reshaping

We reshaped the go command from many binaries into a single binary.

### Redefining

During early development, we noticed that appendToList was being rewritten
frequently.  This led to redefining those functions into the function we now
know as `append`.  It initially only supported bytes slices, but was extended
to support all slices.

### Removing

If something isn't useful to the language or an experiment didn't work, we
remove it.

### Restricting

All Go files must be utf-8.  Other encodings are not supported.  This simplifies
the toolchain by not having to support a wide range of encoding formats.

The initial development process was too simple however, because eventually we
have to ship.  That was added as an explicit step to enable shipping of
production Go code and to allow users to experiment with the language.

The loop now becomes:

- Experiment
- Simplify
- Ship

![ship-process](/gophercon-2019/ship-process.jpg)

After Go1.0, any simplification must not include breaking changes.

## The path to Go2

The path to Go2 is much like the path to Go1: Experiment, simplify, ship.

The main areas of focus for Go2 are:

- Error handling
- Generics
- Dependency Management
- Tooling

## Error Handling

Writing a program correctly without errors is hard.  Writing a program
correctly accounting for errors and external dependencies is much more
difficult.

### History of the error type

Circa 2008: Original syscall error was just an int.

![First Error](/gophercon-2019/first-error.png)

This evolved and as the standard library was written, more context was needed
for the higher level libraries to determine how to handle errors properly.

2h after writing that initial code, we had an error type:

![Early Error Type](/gophercon-2019/early-error-type.png)

This API lasted 7 months.  It was eventually reshaped into the error type that
we know today.

As we developed the higher level libraries more, we noticed a pattern emerge of
handling nested errors that many helper packages implemented.

![Before Unwrap](/gophercon-2019/before-unwrap.png)

### Errors in Go1.13

Thanks to these experiments, Go1.13 introduces the following error handling helpers:

- an optional Unwrap interface.
- errors.Is
- errors.As

The Unwrap interface remains optional, and aims to help library authors expose
more information about the errors they return.

![Unwrap Interface](/gophercon-2019/unwrap-interface.png)

Go1.13 also introduces errors.Is and errors.As, helper functions to simplify
using Unwrap.

![Errors Is Errors As](/gophercon-2019/errors-is-errors-as.png)

Another concern that the community raised was readability of code which handled
many errors.  This is important to us because as programmers the more error
branches we have to keep track of, the harder it is to reason about the code.

This concern eventually led to the Check proposal.  This simplified Go by
simplifying error handling readability and removing lines of code.

![Check Syntax](/gophercon-2019/check-syntax.png)

The check proposal eventually became try.

![Try Syntax](/gophercon-2019/try-syntax.png)

However the try proposal was abandon. The community was concerned that removing
the if statement would hurt debuggability (with print statements), readability,
and break visibility of coverage tools into those blocks of error handling
code.  Ultimately it wasn't clear that the try proposal would actually simplify
Go overall.

## Generics

"Let's talk about something less controversial: Generics" - Russ Cox

We wrote and rejected the first generics proposal in 2010.  3 more experiments
were done and rejected by 2013.

We started exploring a new design in 2018: contracts.  We're working with
programming language theory experts on the problem to help refine the proposal.
However, we may still abandon the experiment if it doesn't fit well into the
language.

Ian Taylor will present the latest design in his talk tomorrow.

## Dependency Management

With Go, we wanted to explicitly refer to dependencies similar to Java.

We started with goinstall which downloaded the dependencies into $GOROOT.

In 2011, we introduced GOPATH to separate the distribution from the actual
dependencies so that users could run multiple different distributions and to
separate the concerns of the distribution from the external libraries.

We initially left out versioning on purpose to focus on other problems like
package installation.  We encouraged package authors to adopt the same
philosophy around compatibility that the Go team uses:

- Don't make breaking API changes
- New functionality should receive new names
- New import paths should be defined for breaking changes

gopkg.in was a great experiment allowing for importing different changes.

We also had a lot of other great experiments in dependency management early on:

![Version Experiments](/gophercon-2019/version-experiments.png)

In 2015, we introduced the go vendor spec as a result of how many of these
tools operated in practice.  By formalizing the vendor directory, we hoped that
it would simplify dependency management implementations.  In practice, it
didn't work as well as we had hoped.

In 2016, we formed the dependency working group.  This team started work on
dep: a tool to reshape all the existing tools into one.

The problem with dep and the vendor directory is that multiple distinct
incompatible versions of a dependency are represented by one import path.  We
now call this the "Import Compatibility Rule".

We took what worked well and learned from what didn't to create `VGo`. `VGo`
provides package uniqueness without breaking builds. `VGo` dictates different
paths for importing incompatible package versions.

We took this, grouped similar packages and gave these groups a name: Modules.
The `VGo` system is now go modules.  It now integrates directly with the Go
command.

The challenge presented going forward is mostly around updating everything to
use modules.  Everything needs to be updated to work with the new conventions
to work well.

Many tools use the `go/build` package in their dependency management tooling.
This doesn't work well with both modules, GOPATH and vendor, so we created
`golang.org/x/tools/go/packages`.  This may eventually be merged into the
standard library.

One immediate benefit of Go modules is module proxies. There are a few out
there right now, and there are a few talks this year where you can learn more:

![Module Proxies](/gophercon-2019/module-proxies.png)

Modules are at a point where we're confident they will support most users.
However, we're not ready to shutdown GOPATH just yet. We've got a decade of
experience with GOPATH and we're not ready to throw that away.

Please take a look at modules in Go1.13.  Kubernetes, a fairly complex project,
has already made the move, so it's likely you can too!  If you can't, please
let the Go team know.

## Tools

Finally, as a result of all these changes, we can distill and refine the Go
toolchain.

One example of this happening right now is `go pls` or "Go Please".  Go please
aims to create a smoother, standard interface to integrate with all editors,
IDEs, continuous integration and others.  See the talk about "Go Please" later
today to learn more!

## Conclusion

Each time we release a new experiment, even if we don't adopt it, we learn.
Eventually we'll learn that we've experimented enough, and we'll have Go2.

