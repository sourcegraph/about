---
title: Breaking change to the Go Sourcegraph extension
author: Chris Wendt
publishDate: 2019-06-3T10:00-07:00
tags: [
  blog
]
slug: breaking-change-go-sourcegraph-extension
heroImage: /sourcegraph-mark.png
published: false

---

A backwards incompatible change is required for the [Sourcegraph Go langserver extension](https://github.com/sourcegraph/sourcegraph-go), with Monday June 10 being the tentative publish date.

To upgrade, you must bump your `sourcegraph/lang-go` Docker image to `(TODO) $VERSION`, otherwise go code intelligence will stop working on your private instance. This applies to all 3.x instances.

All customers using the Go lang server extension will be contacted individually and guided through the upgrade process.
