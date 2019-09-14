---
title: "Strange Loop 2019 - Empowering people to build a digital bank"
description: "We are going to talk about how we built, maintain and scale our microservices architecture. We are a fast-growing digital bank with a lot of challenges regarding scalability, operability and reliability and we would like to present a structured talk about the key components of our ecosystem and also how they interact with each other. Since day-one we architectured our entire infrastructure to run on cloud and to be platform agnostic, that gave us the ability of growing fast and ensuring our high standards reliability. Nowadays we decouple our infrastructure from EC2 Amazon instances to Kubernetes where we gained the desired agnosticism. There's a few characteristics that are not so usual and gives us a lot of leverage when compared to our competitors, things like Sharding and Homogeneous Codebase, using functional programming as our main paradigm. Also, we build and maintain abstractions that help our engineering team to smoothly operate and constantly improve their microservices, and furthermore the products we offer to customers. One of things we use to achieve high levels of resilience and reliability is Kubernetes with our own developed tooling and abstractions, which allows us to provide fast interaction cycle and an even more optimized way to deploy services and other infrastructure parts. For instance, we deploy things like Thanos, Prometheus and Grafana using those abstractions to ensure fast-ish manner to release and control software versioning."
author: Blogy McBlogerson
authorUrl: https://heresblogy.com/
publishDate: 2019-09-13T00:00-10:20
tags: [
  strange-loop
]
slug: strange-loop-2019-empowering-people-to-build-a-digital-bank
heroImage: https://about.sourcegraph.com/blog/strange-loop-thumbnail-square-v2.jpg
published: false
---

<div class="container p-0 liveblog-presenters">
  <div class="row m-0">
      <p class=" mr-6 m-0">
        <span class="liveblog-presenters__name">Eric Yoshimura</span>
        <a href="https://twitter.com/ericyoshimura_" target="_blank" title="Twitter"><i class="fa fa-twitter pr-2"></i></a>
        <a href="https://github.com/ericyoshimura" target="_blank" title="GitHub"><i class="fa fa-github pr-2"></i></a>
      </p>
  <p class=" mr-6 m-0">
        <span class="liveblog-presenters__name">Riad Vargas</span>
        <a href="https://twitter.com/riadvargas" target="_blank" title="Twitter"><i class="fa fa-twitter pr-2"></i></a>
        <a href="https://github.com/riadvargas" target="_blank" title="GitHub"><i class="fa fa-github pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

We are going to talk about how we built, maintain and scale our microservices architecture. We are a fast-growing digital bank with a lot of challenges regarding scalability, operability and reliability and we would like to present a structured talk about the key components of our ecosystem and also how they interact with each other. Since day-one we architectured our entire infrastructure to run on cloud and to be platform agnostic, that gave us the ability of growing fast and ensuring our high standards reliability. Nowadays we decouple our infrastructure from EC2 Amazon instances to Kubernetes where we gained the desired agnosticism. There's a few characteristics that are not so usual and gives us a lot of leverage when compared to our competitors, things like Sharding and Homogeneous Codebase, using functional programming as our main paradigm. Also, we build and maintain abstractions that help our engineering team to smoothly operate and constantly improve their microservices, and furthermore the products we offer to customers. One of things we use to achieve high levels of resilience and reliability is Kubernetes with our own developed tooling and abstractions, which allows us to provide fast interaction cycle and an even more optimized way to deploy services and other infrastructure parts. For instance, we deploy things like Thanos, Prometheus and Grafana using those abstractions to ensure fast-ish manner to release and control software versioning.

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
