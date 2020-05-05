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

<div class="container p-0 liveblog-presenters">
  <div class="row m-0">
      <p class=" mr-12 m-0">
        <span class="liveblog-presenters__name">Patrick Thomson</span>
        <a href="https://twitter.com/importantshock" target="_blank" title="Twitter"><i class="fa fa-twitter pr-2"></i></a>
        <a href="https://github.com/patrickt" target="_blank" title="GitHub"><i class="fa fa-github pr-2"></i></a>
        <a href="https://blog.sumtypeofway.com" target="_blank" title="Speaker's site"><i class="fa fa-globe pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

Haskell is a purely functional programming language: by default, Haskell functions do not cause side effects such as system I/O, nondeterminism, or exception handling. As such, Haskell programs are generally expressed in terms of monad transformers, which provide the facility to compose different side effects into a single interface powerful enough to express the programmer's needs. The monad transformer library, mtl, is mature and powerful, but complicates and in some cases constrains the construction and generalization of user-specified monads.

---

AWESOME LIVEBLOG CONTENT HERE!

<!-- Note on images
  Images (e.g. my_image.jpg) should be put in the `website/static/blog/strange-loop-2019` directory, with the path to the image in your post being `/blog/strange-loop-2019/my_image.jpg`. If you'd rather host the images somewhere else for ease of use, that's fine too.

  Please also try to keep your images to a reasonable size by:
    - Using JPEG compression, unless image is mostly solid color 
    - JPEG compression set between 60%-80%
    - Resizing the image to be no wider then 750px
    - If PNG, use a tool like ImageOptim (https://imageoptim.com/mac) to optimize the file size

  I suggest re-sizing and compressing all the images in one batch as a last step.
-->  
