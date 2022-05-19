---
title: "Strange Loop 2019 - Unison: a new distributed programming language"
description: "Unison is an open source functional programming language with special support for building distributed, elastic systems. It began as an experiment: rethink all aspects of the programming experience, including the core language, runtime, tooling, as well as code versioning and publishing, and then do whatever is necessary to eliminate needless complexity and make building software once again delightful, or at the very least, reasonable."
authors:
  - name: Sneha Inguva
    url: http://www.snehainguva.com/
publishDate: 2019-09-14T00:00-13:30
tags: [
  strange-loop
]
slug: strange-loop-2019-unison-a-new-distributed-programming-language
heroImage: https://about.sourcegraph.com/blog/strange-loop-thumbnail-square-v2.jpg
published: true
---

<div className="container p-0 liveblog-presenters d-flex w-100 text-center">
  <div className="row m-0 w-100">
      <p className=" mr-12 m-0 w-100">
        <span className="liveblog-presenters__name">Paul Chiusano</span>
        <a href="https://twitter.com/pchiusano" target="_blank" title="Twitter"><i className="fa fa-twitter pr-2"></i></a>
        <a href="https://github.com/pchiusano" target="_blank" title="GitHub"><i className="fa fa-github pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

Unison is an open source functional programming language with special support for building distributed, elastic systems. It began as an experiment: rethink all aspects of the programming experience, including the core language, runtime, tooling, as well as code versioning and publishing, and then do whatever is necessary to eliminate needless complexity and make building software once again delightful, or at the very least, reasonable.

---

## Background

Unison is a new programming language with special support for building distributed systems.
Specifically, it is an open source statically-typed, functional language that was Influenced
in party by Haskell, Erlang, and another research language called Frank. Unison has been a research language for several years but it is in public alpha now.

## Goals

The primary goals of Unison were to re-make a language from first principles while abiding by the
following core tenets:

1. Identify definitions by the hash of the content, NOT the name.

For example, consider factorial n = product ( range 1 (n+1)).
- A hash of the exact definition of this function is stored.
- The name of a function is just separately stored metadata.
- Unlike names, Unison hashes uniquely identify the exact definition.

2. For each hash, store a serialized abstract syntax tree (AST).

## Benefits

1. No dependency conflicts
Dependency conflicts typically happen with diamonds in the dependency graph,
i.e. two different people want some different version of a library.
But, if we are using content hashing, then it is no longer an issue.

2. Easy renames and test caching

Tests are associated with a hash, as a result, we can cache test results quite
easily. (The AST, type, and evaluted hash is stored.)

3. Can have unison programs deploy themselves (be entire elastic distributed systems)

Note that this is something that is in progress for Unison. The idea is that
distributed programming should just be a library. Engineers should define set of operators,
and then define different “interpreters” to handle these operations.

## Append-only

A lot of the aforementioned benefits of Unison are possible because the code-base
is append-only. A definition is never mutated; a NEW definition just happens to be created.
For a particular hash, the definition will never change.

Definition for a hash never changes
We can cache all kinds of info
This makes it easier for your IDE in a way (i.e. cache-invalidation, etc.)
