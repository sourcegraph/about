---
sessionId: 1
title: "Strange Loop 2019 - Riding the stream processing wave"
description: "At LinkedIn, we run several thousands of stream processing applications which, coupled with our scale, has exposed us to some unique challenges. We will talk about the 3 kinds of applications that have made the most impact on our stream processing platform.  Machine Learning applications are driving some of the latest innovations for streaming. The current trend is to train a model in batch environments and do inference in online environments. We built some native capabilities such as \"side-inputs\" for handling large state, while allowing features to be continuously pushed from offline grids to streaming environments. Data Scientists prefer DSL's for feature generation and access. Consequently, we built the ability to convert a machine learning DSL to a streaming job and use it for feature engineering. We will talk about this capability and how this can be extended to convert Hive, Pig or other custom DSL to streaming applications.  We have observed the emergence of applications that are moving from batch processing mode to nearline processing mode as well as operating on both batch (HDFS) and streaming (Kafka) datasets (e.g Experimentation). At LinkedIn, we use Samza for stream processing, and Samza applications can achieve offline-online convergence of stream and batch processing by simply switching the streaming input systems like Kafka with HDFS-based input. Apache Beam integration for Samza enables the capability to execute in different environments. Streaming applications now maintain very large local state, and during deployments, application or node failures it is critical to restore this state to its previous version. We will talk about the impact of these failures on large stateful applications and some of the recent improvements we have made in host affinity, state restore and our new standby container solution."
author: Blogy McBlogerson
authorUrl: https://heresblogy.com/
publishDate: 2019-09-13T00:00-14:30
tags: [
  strange-loop
]
slug: strange-loop-2019-riding-the-stream-processing-wave
heroImage: /blog/strange-loop-thumbnail-square-v2.jpg
published: false
---

<div class="container p-0 liveblog-presenters">
  <div class="row m-0">
      <p class=" mr-12 m-0">
        <span class="liveblog-presenters__name">Samarth Shetty</span>
        
      </p>
  </div>
</div>

---

## Overview

At LinkedIn, we run several thousands of stream processing applications which, coupled with our scale, has exposed us to some unique challenges. We will talk about the 3 kinds of applications that have made the most impact on our stream processing platform.  Machine Learning applications are driving some of the latest innovations for streaming. The current trend is to train a model in batch environments and do inference in online environments. We built some native capabilities such as \"side-inputs\" for handling large state, while allowing features to be continuously pushed from offline grids to streaming environments. Data Scientists prefer DSL's for feature generation and access. Consequently, we built the ability to convert a machine learning DSL to a streaming job and use it for feature engineering. We will talk about this capability and how this can be extended to convert Hive, Pig or other custom DSL to streaming applications.  We have observed the emergence of applications that are moving from batch processing mode to nearline processing mode as well as operating on both batch (HDFS) and streaming (Kafka) datasets (e.g Experimentation). At LinkedIn, we use Samza for stream processing, and Samza applications can achieve offline-online convergence of stream and batch processing by simply switching the streaming input systems like Kafka with HDFS-based input. Apache Beam integration for Samza enables the capability to execute in different environments. Streaming applications now maintain very large local state, and during deployments, application or node failures it is critical to restore this state to its previous version. We will talk about the impact of these failures on large stateful applications and some of the recent improvements we have made in host affinity, state restore and our new standby container solution.

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
