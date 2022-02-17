---
title: 'Sourcegraph 3.37 release'
publishDate: 2021-09-20T10:00-07:00
description: 'Sourcegraph 3.37 introduces UPDATE'
tags: [blog, release]
slug: 'release/3.37'
published: false
heroImage:
socialImage:
changelogItems:
---

Sourcegraph 3.37 is now available! For this release, we introduced:

## Feature

### Code intelligence just got a whole lot faster!

We're pleased to announce that LSIF index processing and the symbols sidebar just got a whole lot faster! Earlier, certain LSIF indexes, especially for Javascript and Typescript, could take over 30 minutes to process. This meant that a long queue would build up with frequent uploads, such as those from a CI job that runs on every commit on a development branch. Now, that's no longer the case! Most indices should be processed in a few seconds instead of minutes so that you can access precise code intelligence soon after uploading an index.

<img class="blog-image" title="LSIF upload speedup" alt="Comparative chart before and after processing improvements." src="https://storage.googleapis.com/sourcegraph-assets/blog/3.37/lsif-upload-speedup.png">

The symbols sidebar also got a significant performance boost. Previously, the symbols sidebar would search for symbols in the whole directory tree even if you were only looking at a subdirectory or file, which would cause it to time out and show an error message on big monorepos. Now prefix queries like `^src/app` are better optimized and subdirectory searches are much faster and less likely to time out.
