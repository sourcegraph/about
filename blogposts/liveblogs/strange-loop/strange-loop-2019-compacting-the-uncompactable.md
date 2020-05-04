---
title: "Strange Loop 2019 - Compacting the Uncompactable"
description: "Programs written in C/C++, can suffer from serious memory fragmentation, leading to low utilization of memory, degraded performance, and application failure due to memory exhaustion. This problem extends to languages like Ruby and Python, where the standard interpreters for these languages are themselves C programs. This talk introduces Mesh, a plug-in replacement for malloc that, for the first time, eliminates fragmentation in unmodified C/C++ applications through compaction. A key challenge is that, unlike in garbage-collected environments, the addresses of allocated objects in C and C++ are directly exposed to programmers, and applications may do things like stash addresses in integers or store flags in the low bits of aligned addresses. This hostile environment makes it impossible to safely relocate objects, as the runtime cannot precisely locate and update pointers. Mesh combines novel randomized algorithms with widely-supported virtual memory operations to provably reduce fragmentation, breaking long-established worst-case bounds on memory efficiency with high probability. Mesh generally matches the runtime performance of state-of-the art memory allocators while reducing memory consumption and eliminating pathological cases; in particular, Mesh reduces the memory of consumption of Firefox by 16% and Redis by 39%. There are efforts underway to incorporate Mesh's approach to eliminate fragmentation into existing allocators, like jemalloc."
author: Blogy McBlogerson
authorUrl: https://heresblogy.com/
publishDate: 2019-09-14T00:00-11:20
tags: [
  strange-loop
]
slug: strange-loop-2019-compacting-the-uncompactable
heroImage: https://about.sourcegraph.com/blog/strange-loop-thumbnail-square-v2.jpg
published: false
---

<div class="container p-0 liveblog-presenters">
  <div class="row m-0">
      <p class=" mr-12 m-0">
        <span class="liveblog-presenters__name">Bobby Powers</span>
        <a href="https://twitter.com/lilbobbypowers" target="_blank" title="Twitter"><i class="fa fa-twitter pr-2"></i></a>
        <a href="https://github.com/bpowers" target="_blank" title="GitHub"><i class="fa fa-github pr-2"></i></a>
        <a href="https://bpowers.net" target="_blank" title="Speaker's site"><i class="fa fa-globe pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

Programs written in C/C++, can suffer from serious memory fragmentation, leading to low utilization of memory, degraded performance, and application failure due to memory exhaustion. This problem extends to languages like Ruby and Python, where the standard interpreters for these languages are themselves C programs. This talk introduces Mesh, a plug-in replacement for malloc that, for the first time, eliminates fragmentation in unmodified C/C++ applications through compaction. A key challenge is that, unlike in garbage-collected environments, the addresses of allocated objects in C and C++ are directly exposed to programmers, and applications may do things like stash addresses in integers or store flags in the low bits of aligned addresses. This hostile environment makes it impossible to safely relocate objects, as the runtime cannot precisely locate and update pointers. Mesh combines novel randomized algorithms with widely-supported virtual memory operations to provably reduce fragmentation, breaking long-established worst-case bounds on memory efficiency with high probability. Mesh generally matches the runtime performance of state-of-the art memory allocators while reducing memory consumption and eliminating pathological cases; in particular, Mesh reduces the memory of consumption of Firefox by 16% and Redis by 39%. There are efforts underway to incorporate Mesh's approach to eliminate fragmentation into existing allocators, like jemalloc.

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
