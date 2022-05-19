---
title: "Strange Loop 2019 - Makings of a Modern ACID Compliant Distributed Database"
description: "There's plenty of distributed databases on the market these days. There's only a few that are both distributed and provide ACID guarantees. In this talk, I'll be shedding light on some of the more interesting aspects of the internal design of FaunaDB, one such database that I also happen to work on. We'll look at Calvin, the protocol that ensures deterministic transaction application in a distributed environment with very little coordination (much less than two- or three-phase commit protocols.) We'll see how we can scale Calvin for throughput. We'll look at how you can make a distributed transaction system independent of clocks. (It's never good to have a distributed system depend on clocks for correctness, yet many databases do. This one does not.) We'll talk about how you can take a correctly operating database and make it fast too with judicious application of control theory: into what points of the system can you plug in either a PID controller or a Kálmán filter to further reduce latencies. We learned (and are still learning) a lot while implementing FaunaDB, and in this talk, we want to share some of what we learned so far with you!"
author: Blogy McBlogerson
authorUrl: https://heresblogy.com/
publishDate: 2019-09-13T00:00-10:20
tags: [
  strange-loop
]
slug: strange-loop-2019-makings-of-a-modern-acid-compliant-distributed-database
heroImage: https://about.sourcegraph.com/blog/strange-loop-thumbnail-square-v2.jpg
published: false
---

<div className="container p-0 liveblog-presenters d-flex w-100 text-center">
  <div className="row m-0 w-100">
      <p className=" mr-12 m-0 w-100">
        <span className="liveblog-presenters__name">Attila Szegedi</span>
        <a href="https://twitter.com/asz" target="_blank" title="Twitter"><i className="fa fa-twitter pr-2"></i></a>
        <a href="https://github.com/szegedi" target="_blank" title="GitHub"><i className="fa fa-github pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

There's plenty of distributed databases on the market these days. There's only a few that are both distributed and provide ACID guarantees. In this talk, I'll be shedding light on some of the more interesting aspects of the internal design of FaunaDB, one such database that I also happen to work on. We'll look at Calvin, the protocol that ensures deterministic transaction application in a distributed environment with very little coordination (much less than two- or three-phase commit protocols.) We'll see how we can scale Calvin for throughput. We'll look at how you can make a distributed transaction system independent of clocks. (It's never good to have a distributed system depend on clocks for correctness, yet many databases do. This one does not.) We'll talk about how you can take a correctly operating database and make it fast too with judicious application of control theory: into what points of the system can you plug in either a PID controller or a Kálmán filter to further reduce latencies. We learned (and are still learning) a lot while implementing FaunaDB, and in this talk, we want to share some of what we learned so far with you!

---

AWESOME LIVEBLOG CONTENT HERE!
