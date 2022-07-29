---
title: "Sourcegraph 4.0"
publishDate: 
description: Announcing Sourcegraph 4.0
tags: [blog, release]
slug: "release/4.0"
published: false
heroImage: 
socialImage: 
changelogItems:
---

# Sourcegraph 4.0 Release Post

## Section 1

## Section 2



### Run batch changes server-side

<!-- @malomarrec: The title is the feature, as opposed to the benefit, because there's multiple benefits. Another angle would be to focus on the primary benefit and title this "Run batch changes at large scales" -->

Batch Changes can now run across thousands of repositories, and features a much better development experience. Until now, you had to run `src-cli` locally to create batch changes: `src-cli` would pull repo archives through Sourcegraph, and kick off docker containers locally to run your batch change. For large amounts of repositories or resource-intensive code rewrites, running src-cli locally could take an impractical amount of time or be brittle.

We're introducing the ability to run batch changes server-side instead of locally, which means you can:
- Run large-scale or resource intensive batch changes without clogging your local machine.
- Run large batch changes fast by distributing them across an autoscaled pool of compute instances.
- Get a better debugging experience, with logs being streamed directly into Sourcegraph.
- Simplify setup for local users (no local src-cli) by having the Sourcegraph admin manage server-side setup.

![Server-side](https://storage.googleapis.com/sourcegraph-assets/blog/4.0/side-by-side.mp4)

This feature requires admins to set up executors (much like CI agents), which Sourcegraph will use to offload expensive tasks. Executors can also be used to run [Code Intelligence auto-indexing](#TODO-link-to-section-or-docs). If you're on cloud, one or more executors are available by default on your instance.

### Find and replace that feels like an IDE, across all your code

IDEs can find and replace strings across you local files. Sourcegraph can find and replace strings across all your _code_. Change boilerplate, fix typos, or update configuration across all your code, without having to write a script or pull your code locally!

Just run a search query, provide a pattern to find and replace, and get a live preview of the diff. If the changes look good, Batch Changes can send them for review to your team, then automatically and safely open changesets across all your repositories, and let you track them until they get merged. 

<!-- @malomarrec: this is a placeholder -->
<img width="1497" alt="placeholder-sourcegraph-find-and-replace" src="https://user-images.githubusercontent.com/25070988/181726971-13007592-c3b9-4f69-a8f3-54e0cf13b7ea.png">

