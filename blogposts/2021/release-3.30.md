---
title: "Sourcegraph 3.30 release"
<!-- publishDate: 2021-06-18T10:00-07:00
description: "The Sourcegraph 3.29 release includes."
tags: [blog, release]
slug: "release/3.29"
published: false
changelogItems: -->

---

Sourcegraph 3.30 is now available! For this release, we added

## Batch Changes

### Publish Batch Changes from the dashboard
The batch changes specs allows for [detailed control](https://docs.sourcegraph.com/batch_changes/how-tos/publishing_changesets#publishing-a-subset-of-changesets) of which changesets are published to the codehost, and which are kept unpublished. This model is very powerful when you want to keep your batch spec declarative, and use them as a reproducible source of truth for a batch change. However, it requires back and forth between the dashboard and the CLI and can feel tedious for users that want to take a shortcut and don't need the spec to be the source of truth.

With this release, you can either choose to control the publishing status with the `publish` spec field (the only available option currently), or omit it and control publishing from the GUI.  

TODO: video

## Other
* Search scopes are now named search snippets
