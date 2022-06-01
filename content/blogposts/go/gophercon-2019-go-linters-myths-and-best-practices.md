---
title: "GopherCon 2019 - Go Linters: Myths and best practices"
description: "Go contains over 50 different linters. For linter adepts, I'll reveal how to use their full power, as well as little-known tips and tricks to get ahead. For linters beginners, this presentation explains what they are, the benefit of their use, and the best way to introduce them into a workflow."
authors:
  - name: John Reese for the GopherCon 2019 Liveblog
publishDate: 2019-07-26T00:00-14:00
tags: [
  gophercon
]
slug: gophercon-2019-go-linters-myths-and-best-practices
heroImage: https://about.sourcegraph.com/gophercon2019.png
published: true
---

Presenter: [Denis Isaev](https://twitter.com/jirfag) | Liveblogger: [John Reese](https://reese.dev)

## Overview

Go contains over 50 different linters. For linter adepts, I'll reveal how to use their full power, as well as little-known tips and tricks to get ahead. For linters beginners, this presentation explains what they are, the benefit of their use, and the best way to introduce them into a workflow.

---

To begin his talk, Denis first defined what a linter was. A tool that can be used to correct styling problems within an application, as well as identify potential bugs early in the development life cycle.

Denis then went on to dispel five myths surrounding linters in Go.

## Myth #1


>No **real bugs** can be found by linters

Denis quickly went on to provide three counter examples to showcase that using a linter in Go can find errors that would introduce regressions into the project.

Both **go vet** and **go-critic** were given as examples.

**go vet** identified an issue where a call to `cancel()` prematurely exited out of a routine, and **go-critic** was able to identify a case in which a comparison operator was used to compare a value to itself.

## Myth #2 

> Linters do more harm than good

Denis defended the use of linters by explaining that they are able to detect issues earlier in the development lifecycle than otherwise possible. The earlier you find a bug in during development, the cheaper it will be to fix.

He also highlights that linting is able to speed up code reviews through automation. Having real people highlight styling issues and otherwise trivial problems, is a problem better suited to a tool. Freeing up developers to spend more time on what they actually want to do. Code.

## Myth #3

> There are over 50 linters, but only 2-3 are useful

While it is true that the Go community has written a mountain of linters, Denis states that they all serve a specific purpose.

While there are way too many to list and explain in a blog post (that could be a topic all on its own!), Denis provided a helpful GitHub repository that lists a large collection of linters for Go and their purpose.

Check it out! [https://github.com/golangci/awesome-go-linters](https://github.com/golangci/awesome-go-linters)

The important take away is that while there are a lot of linters, you may not need them all. Denis stresses that you and your team should simply turn on all linters by default, and through trial and error find out which combination of linters and settings work for you.

Who knows, maybe 2-3 would only be useful for your team. Others may find value in all 50.

## Myth #4

> Running linters is too slow

Given that there are a lot of linters, using all of them does seem like it would take too much time to be able to use them all.

However, Denis showcases that tools like **gometalinter** and **golangci-lint** are able to run linters in *parallel*. This approach can greatly increase the completion time of running all of the linters you would like to run.

Not to mention, **golangci-lint** includes all of the linters! There's no need to download each individual linter yourself and manage their versions. Simply download a single tool, and let that be the executable you interact with for all of your linting needs.

## Myth #5

> It's too late to introduce linters into my project

Not all Gophers have the luxury of working on greenfield projects. Much of our development time is spent on large codebases that may include a lot of linting errors that we simply cannot address at this point in time. However, we should stop the bleeding! Do not let ourselves introduce any *more* errors into our codebase.

Denis points out that there exists a feature called `--new-from-rev` that allows you to only consider linting errors from a specific revision and beyond.

This approach allows you to introduce linting to your project without being bombarded with a slew of unmanageable linting errors.

That said, it's never too late to introducing linting into your project!

After busting all of the myths around Go and linting, Denis gives his thoughts on some best practices when leveraging linting tools.

## Use a linting configuration

Not all organizations write Go in the exact same style. Everyone has their own approach to how Go code should look. As an organization, you should leverage a linting configuration that your team can configure to fit your needs. Don't try to fit the needs of others.

This config can then be shared across your organization, creating a consistent experience across the entire company.

## Pin the version of your linters in CI

Running your linting rules during your CI process has many benefits. It ensures that the developer ran the tooling locally, and that the code is of the quality that you expect.

Running `go get` in your CI to get the linters could be problematic if a version is not specified. It can result in an inconsistent experience as the linters themselves could have regressions in them as updates are made, or simply add or remove linting rules you once depended on.

## Automate!

Lastly, as these tools really do not need any human intervention, linting should be an automated step in your CI process. 

Denis took this even furter by introducing tools like **ReviewDog** and **SonarQube** that have the capability of replying directly to the originating pull request. This lets the developer immediately, and more importantly, easily figure out the problems with his code. There's no need to go digging through logs!

In closing, Denis gave us four things that we should all do *tomorrow* in regards to linting:

- Introduce golangci-lint and enable new linters
- Add golangci-lint to our CI process, IDE, and enable pre-commit hooks for linting
- Use `--new-from-rev` to easily integrate with existing projects
- Use a tool like ReviewDog, GolangCI, or SonarQube to really push the envelope on automation

Denis has proved that linting your Go code adds a lot of value and is something that we as developers should add to our development processes.
