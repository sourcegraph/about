---
title: "Strange Loop 2019 - Building Haskell Programs with Fused Effects"
description: "Haskell is a purely functional programming language: by default, Haskell functions do not cause side effects such as system I/O, nondeterminism, or exception handling. As such, Haskell programs are generally expressed in terms of monad transformers, which provide the facility to compose different side effects into a single interface powerful enough to express the programmer's needs. The monad transformer library, mtl, is mature and powerful, but complicates and in some cases constrains the construction and generalization of user-specified monads."
author: Blogy McBlogerson
authorUrl: https://heresblogy.com/
publishDate: 2019-09-14T00:00-11:20
tags: [
  strange-loop
]
slug: strange-loop-2019-building-haskell-programs-with-fused-effects
heroImage: https://about.sourcegraph.com/blog/strange-loop-thumbnail-square-v2.jpg
published: false
---

<div className="container p-0 liveblog-presenters d-flex w-100 text-center">
  <div className="row m-0 w-100">
      <p className=" mr-12 m-0 w-100">
        <span className="liveblog-presenters__name">Patrick Thomson</span>
        <a href="https://twitter.com/importantshock" target="_blank" title="Twitter"><i className="fa fa-twitter pr-2"></i></a>
        <a href="https://github.com/patrickt" target="_blank" title="GitHub"><i className="fa fa-github pr-2"></i></a>
        <a href="https://blog.sumtypeofway.com" target="_blank" title="Speaker's site"><i className="fa fa-globe pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

Haskell is a purely functional programming language: by default, Haskell functions do not cause side effects such as system I/O, nondeterminism, or exception handling. As such, Haskell programs are generally expressed in terms of monad transformers, which provide the facility to compose different side effects into a single interface powerful enough to express the programmer's needs. The monad transformer library, mtl, is mature and powerful, but complicates and in some cases constrains the construction and generalization of user-specified monads.

---

AWESOME LIVEBLOG CONTENT HERE!
