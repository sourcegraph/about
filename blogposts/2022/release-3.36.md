---
title: 'Sourcegraph 3.65 release'
publishDate: 2022-01-21T10:00-07:00
description: 'Sourcegraph 3.36 introduces...'
tags: [blog, release]
slug: 'release/3.36'
published: false
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.36/sourcegraph-3-36-release.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.36/sourcegraph-3-36-release.png
changelogItems:
---

Sourcegraph 3.36 is now available! Here are some highlights from this release:

## Batch Changes on forks

Before this release, creating a batch change required the user (or a service-account) to have write-access to every target repository. This was incompatible with having tight repository access control and impractical at a large scale. There used to be competing priorities: you want all users to be able to create batch changes on all repositories, but not grant them overly broad write permissions.
That's why we are introducing [batch changes on forks](https://docs.sourcegraph.com/admin/config/batch_changes): branches created by Batch Changes can now be pushed to a fork of the repository instead of a branch. This solves common access control challenges, and allows companies to safely enable Batch Changes for all users. In this version, this is an instance setting that is either on for all users, or off.
