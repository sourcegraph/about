---
title: "GopherCon 2019 - Contributing to the os Package: How deep do you Go?"
description: "When the core of a language fails you, and you can't remove a file, how can you fix it? Oliver will share his contribution journey from bug to merge in a crucial part of Golang: the os package. Discover how Golang manages platform independence and how even novices can contribute Unix system calls."
authors:
  - name: Issac Trotts for the GopherCon 2019 Liveblog
publishDate: 2019-07-25T00:00-16:25
tags: [
  gophercon
]
slug: gophercon-2019-contributing-to-the-os-package-how-deep-do-you-go
heroImage: https://about.sourcegraph.com/gophercon2019.png
published: true
---

Presenter: Oliver Stenbom

Liveblogger: Issac Trotts

## Overview

When the core of a language fails you, and you can't remove a file, how can you fix it? Oliver will share his contribution journey from bug to merge in a crucial part of Golang: the os package. Discover how Golang manages platform independence and how even novices can contribute Unix system calls.

---

## Go contribution guide

Lots hidden between the lines, like what can I offer to Go, what can it contribute to me, and the contribution experience.

## The problem

At one point, long file paths with many nested directories could not be removed with `os.RemoveAll`. Such long names are created by accident or malicious intent.

## The solution

Our first attempt at solving this was to shell out to `rm -rf`, but it wasn't such a great solution. In addition to not working on Windows, it didn't tell us 
anything about what caused the problem.

The real cause was that `Open`, `Stat`, and `Remove` were all failing with long filenames.

Using `Openat`, `Statat`, and `Removeat` solves this problem.
Their signature looks like for example `Removeat(directory, path)` where `directory` is a file descriptor.

Just replace `Stat()`/`Remove()` with `*at()` versions.

We did this in own code base and it solved our problem, but we wanted to help the Go community so we decided to contribute our fix to the Go standard library.

We created an issue, with a snippet of code reproducing the problem etc.

Main hurdles:

1. The Golang Test Suite
2. Understanding how tests are made
3. Make one or more tests of our own
4. Focus a test

## Cross-platform compatibility

* Previous `RemoveAll` was simple, platform independent
* But the `*at` sys call version is unix specific.
* Use the more general solution if you can, make it more specific if you have to
	* Part of language maturity
	* Use build comments to do different things on different platforms

## Stumbled on our next problem: non-existent sys calls

* `Stat`, `Open`, `Remove` are all system calls under the hood.
* A system call is
	* A special instruction
	* Number + arguments
	* Number of args is different on each system
* `*at` not on Go on all systems

## At this point, we asked ourselves: how deep should we go?

Ian Taylor said to implement the basic version, then let the community help you with the rest. Trying to do it all at once makes it less likely for your contribution to succeed.

Long and meandering path to getting the solution merged. Problem, solution, development, discussion, improvement, merge, revert, merge.

## Why it was tough

* Time zone issue from being in Europe, so slower progress.
* Go freezing deadline was coming up.
* Go has extremely high standards.
* Didn't’t turn out as expected.

## Rewards

 * Became knowledgeable in:
  * the os package
	* Unix system calls
	* High quality Go

## Progression of solutions

Original `rm -rf`: 46 additions

Local solution without shelling out: 226 additions.

Solution contributed to Go standard library: over 600 additions.
