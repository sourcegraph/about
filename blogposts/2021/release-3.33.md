---
title: 'Sourcegraph 3.33 release'
publishDate: 2021-10-22T10:00-07:00
description: 'Sourcegraph 3.33 introduces UPDATE'
tags: [blog, release]
slug: 'release/3.33'
published: false
heroImage:
socialImage:
changelogItems:
---

Sourcegraph 3.33 is now available! For this release, we introduced:

## Feature

## All users can now visualize and track the status of their LSIF data
<img width="1148" alt="Screenshot 2021-10-15 at 17 34 29" src="https://user-images.githubusercontent.com/1657213/137551018-de2aaa21-7afe-46ed-9040-f62af536d53c.png">



Up to now, the entire code intelligence UI (except for hovers and reference panels) was available to site-admins only. This conflicted with our users' need to add precise code intelligence to their own repositories. They could upload LSIF data and get precise code intelligence results, but couldn't visualize the status of said data. We now allow users to see uploads and indexes for repositories they have access to, helping them easily keep track of the status of all their LSIF data.

