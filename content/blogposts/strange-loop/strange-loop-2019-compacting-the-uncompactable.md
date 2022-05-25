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

<div className="container p-0 liveblog-presenters d-flex w-100 text-center">
  <div className="row m-0 w-100">
      <p className=" mr-12 m-0 w-100">
        <span className="liveblog-presenters__name">Bobby Powers</span>
        <a href="https://twitter.com/lilbobbypowers" target="_blank" title="Twitter"><i className="fa fa-twitter pr-2"></i></a>
        <a href="https://github.com/bpowers" target="_blank" title="GitHub"><i className="fa fa-github pr-2"></i></a>
        <a href="https://bpowers.net" target="_blank" title="Speaker's site"><i className="fa fa-globe pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

Programs written in C/C++, can suffer from serious memory fragmentation, leading to low utilization of memory, degraded performance, and application failure due to memory exhaustion. This problem extends to languages like Ruby and Python, where the standard interpreters for these languages are themselves C programs. This talk introduces Mesh, a plug-in replacement for malloc that, for the first time, eliminates fragmentation in unmodified C/C++ applications through compaction. A key challenge is that, unlike in garbage-collected environments, the addresses of allocated objects in C and C++ are directly exposed to programmers, and applications may do things like stash addresses in integers or store flags in the low bits of aligned addresses. This hostile environment makes it impossible to safely relocate objects, as the runtime cannot precisely locate and update pointers. Mesh combines novel randomized algorithms with widely-supported virtual memory operations to provably reduce fragmentation, breaking long-established worst-case bounds on memory efficiency with high probability. Mesh generally matches the runtime performance of state-of-the art memory allocators while reducing memory consumption and eliminating pathological cases; in particular, Mesh reduces the memory of consumption of Firefox by 16% and Redis by 39%. There are efforts underway to incorporate Mesh's approach to eliminate fragmentation into existing allocators, like jemalloc.

---

AWESOME LIVEBLOG CONTENT HERE!
