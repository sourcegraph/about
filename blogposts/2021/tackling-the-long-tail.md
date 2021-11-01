---
title: How we tackle the long tail of tiny repos with shard merging
description: Sourcegraph is on track to index 5 million repositories by the end of 2021. Here’s how we’re merging the long tail of small, stale, infrequently searched repositories into more efficient, larger representations on disk.
author: Stefan Hengl
publishDate: 2021-11-02T10:00-07:00
tags: [blog]
slug: the-blog-slug
heroImage: /blog/thumbnail-image.jpg
socialImage: https://about.sourcegraph.com/blog/sourcegraph-social-img.png
published: true
---

In this post we give you a brief overview of how we tackle the long tail of tiny
repositories by introducing shard merging to Zoekt, in our [quest to index the
OSS universe](https://about.sourcegraph.com/blog/why-index-the-oss-universe/).

## What is Zoekt?

[Zoekt](https://github.com/sourcegraph/zoekt) is a code search engine originally created by Han-Wen Niehuys that
performs trigram-based regex search. It is fast, easy to deploy and easy to maintain, which makes it a great choice for
our self-hosted customer deployments.

## Why not just scale out?

Naturally, Zoekt's size of the index scales with the size of the input data. Zoekt’s index is about 2 to 3 times larger than the input data. Some of that data, like the trigrams, is kept in memory. At the scale of the open source
universe, it quickly becomes too costly to just scale out. Luckily, Zoekt still has a lot of untapped potential when it
comes to more efficient data structures. For example, in
a [previous post](https://about.sourcegraph.com/blog/zoekt-memory-optimizations-for-sourcegraph-cloud/), Ryan Hitchman
explained how we changed one of Zoekt's core data structures to reduce memory by 5x.

The core idea of this project is to merge the long tail of small, stale
repositories into more efficient representations on disk and in memory. To
motivate this idea we have to first understand Zoekt's data model.

## Zoekt’s data model

Zoekt indexes repositories and stores the index in one or more files on disk. A repository contains a hierarchy of
documents, such as source code, binaries, text files and so forth. At
index-time [documents are added, one at a time, to the index builder](https://sourcegraph.com/github.com/sourcegraph/zoekt@6a4adda25a6c5a7c6612e309249420102c587b4d/-/blob/gitindex/index.go?L498-505)
. Once we cross a threshold of input data, currently configured to be 100 MiB, the
builder [flushes the index to a file on disk](https://sourcegraph.com/github.com/sourcegraph/zoekt@6a4adda25a6c5a7c6612e309249420102c587b4d/-/blob/build/builder.go?L455-457)
. This file is called a shard. For small repositories, there is a 1:1 relationship between the repository and its shard.
Larger repositories, such as [Kubernetes](https://sourcegraph.com/github.com/kubernetes/kubernetes) or the [Linux Kernel](https://sourcegraph.com/github.com/torvalds/linux) map to several shards. At query time, shards are treated independently.

## The long tail

Most repositories are tiny and fit within a single shard. The following
histogram shows the distribution of shard sizes on one of our production
instances.

![Distribution of shard sizes](https://storage.googleapis.com/sourcegraph-assets/blog/tackling-long-tail/tackling-long-tail-histogram.png)

75% of the shards in our sample are smaller than 2.1 MiB. Each shard contains, among other data, the trigrams we created
during indexing. On
startup, [Zoekt loads those trigrams into memory](https://sourcegraph.com/github.com/sourcegraph/zoekt@6a4adda/-/blob/read.go?L210)
. Trigrams for content and file names make up more than 70% of the heap of Zoekt’s web server. The more unique trigrams a shard
has, the more costly its in-memory representation is.

The two charts below show the number of trigrams in a shard vs. the shard's
size. Plot A shows that most shards have less than 500k trigrams. Plot B shows a
subset of the data in A (red box).

![Number of trigrams vs. shard size](https://storage.googleapis.com/sourcegraph-assets/blog/tackling-long-tail/tackling-long-tail-trigrams.png)

We can see that even tiny shards can have a lot of trigrams. As is to be
expected, there is a positive correlation (the [spearman correlation](https://en.wikipedia.org/wiki/Spearman%27s_rank_correlation_coefficient) is 0.94) but
the slope is very small. Effectively, we are paying a premium for small shards
as they take up a lot of memory per byte of input data.

The key insight is that there is a non-zero overlap between sets of trigrams
from different shards. This presents a huge opportunity to save memory by
merging small shards into much larger compound shards. The median
intersection-over-union for two random shards in our sample is 0.13, which is a
lower bound on the overlap between a random shard and a compound shard.

By merging several smaller shards, we are trading a smaller memory footprint for a potentially higher latency during
search. We can fine-tune this trade-off with merge policies, for example by adjusting the target size of the compound
shard and excluding some repositories from merging based on characteristics such as update frequency, ranking and
repository size. An obvious first choice is to merge those shards that are small, rarely accessed and rarely updated.

The following diagram shows how the number of trigrams in a shard changes
depending on how many repositories we merge into a compound shard.

![Number of trigrams vs. size of compound shard](https://storage.googleapis.com/sourcegraph-assets/blog/tackling-long-tail/tackling-long-tail-compression.png)

The distance between the two curves is a measure of the compression we can
achieve.

## What’s next?

We are currently working on adding support for compound shards to Zoekt. First experiments indicate that we can expect
an overall reduction in memory of about 50% for a target compound shard size of 2 GiB. We will make sure to follow up
with a blog post and the final numbers once the project concludes.
