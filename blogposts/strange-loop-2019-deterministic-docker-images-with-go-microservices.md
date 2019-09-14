---
title: "Strange Loop 2019 - Deterministic Docker Images with Go Microservices"
description: "At Samsara, we continuously deploy more than a hundred different microservices, all of which we wanted to do as easily and automatically as possible. We wanted to make this even better by bringing our deploy times to under 20 minutes while minimizing disruption, as this would also mean that we would start to deploy nearly our entire stack about 3 times a hour. Our solution to that: deterministically building our services in our deployed images to minimize time spent building services, network costs with moving images around, but most importantly, being able to automatically figure out which of our services have actually changed and only deploying those."
author: Blogy McBlogerson
authorUrl: https://heresblogy.com/
publishDate: 2019-09-13T00:00-14:30
tags: [
  strange-loop
]
slug: strange-loop-2019-deterministic-docker-images-with-go-microservices
heroImage: https://about.sourcegraph.com/blog/strange-loop-thumbnail-square-v2.jpg
published: false
---

<div class="container p-0 liveblog-presenters">
  <div class="row m-0">
      <p class=" mr-12 m-0">
        <span class="liveblog-presenters__name">Jon San Miguel</span>
        <a href="https://github.com/jsm" target="_blank" title="GitHub"><i class="fa fa-github pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

At Samsara, we continuously deploy more than a hundred different microservices, all of which we wanted to do as easily and automatically as possible. We wanted to make this even better by bringing our deploy times to under 20 minutes while minimizing disruption, as this would also mean that we would start to deploy nearly our entire stack about 3 times a hour. Our solution to that: deterministically building our services in our deployed images to minimize time spent building services, network costs with moving images around, but most importantly, being able to automatically figure out which of our services have actually changed and only deploying those.

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
