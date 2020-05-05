---
title: "Strange Loop 2019 - Parser Parser Combinators for Program Transformation"
description: "Multi-language tool support for syntax transformation is hard due to heterogeneous representations in syntax and abstract syntax trees (ASTs). Regex-based search-and-replace falls short of recognizing syntax that fundamentally delineates tree data structures. Recent approaches develop new strategies that overcome the limitations of regex matching but remain underdeveloped for easily changing code. Our work goes one step further, focusing on the problem of enabling lightweight program transformation in every language for every programmer. We show that the problem can be decomposed where (1) a common grammar expresses the central context-free language properties shared by many contemporary languages (e.g., balanced parentheses) and (2) open extension points in the grammar customizes syntax handling (e.g., for language-specific comments) with smaller parsers. We introduce Parser Parser Combinators (PPCs), our key mechanism implementing these ideas. PPCs are parser combinators that produce parsers from user-supplied patterns. Generated parsers run directly on program source to match syntax of interest (we don't define or use any AST), thereby lifting syntax rewriting to a modularly-defined parsing problem. We share large-scale results from rewriting code across 12 languages (Go, Rust, Scala, and Elm to name but a few) for top-100 most popular GitHub repositories (per language). We show over 50 syntactic changes merged into 40+ of these projects using our tool, and give a demo."
author: Blogy McBlogerson
authorUrl: https://heresblogy.com/
publishDate: 2019-09-14T00:00-13:30
tags: [
  strange-loop
]
slug: strange-loop-2019-parser-parser-combinators-for-program-transformation
heroImage: https://about.sourcegraph.com/blog/strange-loop-thumbnail-square-v2.jpg
published: false
---

<div class="container p-0 liveblog-presenters">
  <div class="row m-0">
      <p class=" mr-12 m-0">
        <span class="liveblog-presenters__name">Rijnard van Tonder</span>
        <a href="https://twitter.com/rvtond" target="_blank" title="Twitter"><i class="fa fa-twitter pr-2"></i></a>
        <a href="https://github.com/rvantonder" target="_blank" title="GitHub"><i class="fa fa-github pr-2"></i></a>
        <a href="https://www.cs.cmu.edu/~rvantond/" target="_blank" title="Speaker's site"><i class="fa fa-globe pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

Multi-language tool support for syntax transformation is hard due to heterogeneous representations in syntax and abstract syntax trees (ASTs). Regex-based search-and-replace falls short of recognizing syntax that fundamentally delineates tree data structures. Recent approaches develop new strategies that overcome the limitations of regex matching but remain underdeveloped for easily changing code. Our work goes one step further, focusing on the problem of enabling lightweight program transformation in every language for every programmer. We show that the problem can be decomposed where (1) a common grammar expresses the central context-free language properties shared by many contemporary languages (e.g., balanced parentheses) and (2) open extension points in the grammar customizes syntax handling (e.g., for language-specific comments) with smaller parsers. We introduce Parser Parser Combinators (PPCs), our key mechanism implementing these ideas. PPCs are parser combinators that produce parsers from user-supplied patterns. Generated parsers run directly on program source to match syntax of interest (we don't define or use any AST), thereby lifting syntax rewriting to a modularly-defined parsing problem. We share large-scale results from rewriting code across 12 languages (Go, Rust, Scala, and Elm to name but a few) for top-100 most popular GitHub repositories (per language). We show over 50 syntactic changes merged into 40+ of these projects using our tool, and give a demo.

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
