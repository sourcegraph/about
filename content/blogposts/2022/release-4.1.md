---
title: "Sourcegraph 4.1 release"
publishDate: 2022-10-21T10:00-07:00
description: "Sourcegraph 4.1 introduces..."
tags: [blog, release]
slug: "release/4.1"
published: true
heroImage: 
socialImage: 
changelogItems:
  - description: 
    url:
    category:
  - description:
    url:
    category:
  - description: 
    url: 
    category: 
---

Sourcegraph 4.1 is now available! For this release, we introduced:

#### Batch Changes

We're iterating on running batch changes server-side as we head towards GA, and adding the last features that are missing for server-side runs to support all features of local runs.
- (experimental) You can now mount files on batch change steps containers when running server-side ([docs](https://docs.sourcegraph.com/batch_changes/how-tos/server_side_file_mounts)). This is very useful when your batch change needs to run long scripts, or binaries that change frequently and can't be built 
into the step container.
- Server-side runs can now be created in an organization namespace. Previously server-side runs could only be created in a user namespace.

