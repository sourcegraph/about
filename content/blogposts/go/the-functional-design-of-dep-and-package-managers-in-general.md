---
title: 'The Functional Design of Dep (and Package Managers in General)'
authors:
  - name: Sam Boyer (speaker)
publishDate: 2017-11-06T23:59+01:00
tags: [
  "dotGo"
]
slug: the-functional-design-of-dep-and-package-managers-in-general
heroImage: https://images.ctfassets.net/le3mxztn6yoo/6Wtkah53tCQO4kIaCm40ak/862ae4e0f3aea940269778b19a799277/IMG_0024.JPG
published: true
---

[Sam Boyer (@sdboyer)](https://github.com/sdboyer) is a Site Reliability Engineer at VividCortex who, among other things, also works on the official [dep dependency management tool](https://github.com/golang/dep). Beyond his work in the Go community, Sam helps coordinate package management improvement efforts at [package.community](http://package.community).

Go isn't a functional language, but we can still use principles from functional programming when designing Go programs. In this talk, Sam demonstrates how these principles apply to dep, the Go package management tool, and all package managers in general. He discusses the concepts of memoization and immutability as applied to package management.

Note: This post was live-blogged at [dotGo 2017](https://www.dotgo.eu/). Let us know on Twitter ([@sourcegraph](https://twitter.com/sourcegraph)) if we missed anything. All content is from the talk; any mistakes or misrepresentations are our fault, not the speaker's.

## Memoization

Memoization is best defined as "function-level caching." It's when you create a cache of a function's outputs given the set of inputs that have already been seen. By avoiding recomputing the output for a given input, you can see significant speedups in certain types of algorithms (such as computing the Fibonacci sequence).

In general, only pure functions can be memoized without loss of correctness.

When thinking about package management, Sam asked himself, "Can I construct this system from function relations?" In the next part of the talk, Sam reveals that the answer is "yes" and lays out how he models the system.

## What's generally true in dependency management?

You can think of a package manager as a mapping:

```text
Project source code -> Dependency source code
```

In practice, it's a bit more complex. Sometimes you need to specify additional metadata (beyond what's in source code) about what dependency versions should be used:

```text
Project src + (Metadata) -> Deps src
```

It's useful to think of the metadata as consisting of a "manifest" and "lock," conceptually:

```text
Project src + Manifest + Lock -> Deps src
```

A common anti-pattern is for dependency managers to use `Deps src` as input to the `Lock` step. This adds complexity and relaxes the guarantee of determinism and reproducibility that the system can provide. It also makes certain optimizations (such as memoization) much more difficult. This is bad!

### In dep

In [dep](https://github.com/golang/dep), this looks like:

```go
Project src  \
              +----- Gopkg.lock -----> Deps src
Gopkg.toml   /
```

The code is essentially as follows:

```go
// Read imports, Gopkg.toml and Gopkg.lock from disk to populate a SolveParameters
params := SolveParameters{...}

// Prepare and run a solver from these parameters
solver := Prepare(params)
solution := solver.Solve()

// A Solution literally is a Lock; populate vendor/ from the solution.
WriteDepTree("path/to/vendor", solution)
```

### Introducing memoization

Producing `Gopkg.lock` from `Project src` and `Gopkg.toml` is a resource-intensive task. But by adhering to the conceptual model above (and treating `Deps src` as a sink, not as an input), we can use memoization to speed this task up.

To do this, we need to assume that the function that produces `Gopkg.lock` is a pure function, even though it's not. It depends on the file system and possibly the network. To make this assumption safely, we need to design the entire dependency system correctly.

That concludes his talk, but if you're interested in more, Sam discussed these design principles in his well-known 2016 blog post: [So you want to write a package manager](https://medium.com/@sdboyer/so-you-want-to-write-a-package-manager-4ae9c17d9527#.740o43vxi).
