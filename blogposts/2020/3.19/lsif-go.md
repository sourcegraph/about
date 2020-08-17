---
title: "lsif-go improvements"
author: Eric Fritz
publishDate: 2020-08-17T08:00-07:00
tags: [blog]
slug: todo
heroImage: /blog/3.19-todo.png
published: true
---

The release of Sourcegraph 3.19 happens to coincide with the [one-point-oh release](https://github.com/sourcegraph/lsif-go/releases/tag/v1.0.0) of [lsif-go](https://github.com/sourcegraph/lsif-go). This release boasts impressive speed improvements that brings intelligence to your Go code faster than ever before.

The code intelligence is hard at work trying to bring the _time to intelligence_ as close to zero as possible. We want your code to always have up-to-date precise code intelligence on the newest commits to help aid users browsing unfamiliar code and code reviewers trying to understand new code in pull requests. Indexing speed is a _huge_ part of this, and we've made a great leap here.

As an illustrative example, checkout the visual difference between indexing our [main repository](https://github.com/sourcegraph/sourcegraph) with lsif-go v0.9 and indexing it with lsif-go v1.0.

#### Old and busted (v0.9.0)

![lsif-go v0.9](https://storage.googleapis.com/sourcegraph-assets/blog/3.19/lsif-go-ss-0.9.gif)

#### The new hotness (v1.0.0)

![lsif-go v1.0](https://storage.googleapis.com/sourcegraph-assets/blog/3.19/lsif-go-ss-1.0.gif)

# Performance comparison

Unfortunately, indexing our own code isn't so worthy of celebration. It's a medium-sized repository home to 258k lines of Go code. The old busted tool did a fine job at this small scale, even with its many inefficiencies.

![a repo for ants?](https://i.imgflip.com/4bs5q7.jpg)

What we need to do is go **big**.

Our goal is to _efficiently_ bring code intelligence to the massive engineering teams with a mind-boggling amount of code and a breathtaking frequency of updates to that code. Our goal is to help humans effectively navigate code bases with a constantly changing topology so they can be sure of their footing and concentrate on the task at hand.

So how do we perform at scale?

<div class="no-shadow">
  <img src="https://storage.googleapis.com/sourcegraph-assets/blog/3.19/lsif-go-perf-3.png" alt="performance comparison">
</div>

Much better now, thanks for asking.

In v0.9, it took around 7 1/2 minutes to index the [Go AWS SDK](https://sourcegraph.com/github.com/aws/aws-sdk-go); in v1.0, it takes 24 seconds. In v0.9, it took nearly 7 hours to index 56 million lines of code; in v1.0, it takes under 20 minutes.

**The indexer takes only 5% of the time it used to.**

Indexing speed is _so_ important for code bases undergoing constant change. Stale, hours-old code intelligence on a monorepo at scale is about as useful as using a map of Pangea to find your way home. This is why the code intelligence team is dedicated to [increasing the efficiency of every part of the stack](https://about.sourcegraph.com/blog/optimizing-a-code-intel-backend) to make sure your maps are always accurate.

<style>
  .blog-post__body img { margin: 0; }
  .blog-post__body .no-shadow img { box-shadow: none; }
</style>
