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

Sourcegraph 3.33 is now available! Here are some highlights from this release:

## Search contexts are now GA for everyone

Search contexts allows any users to create custom groupings of repositories and revisions for scoped, cross-repository searching. This expands on the functionality of version contexts and repogroups, which functioned similarly but could only be created by admins. As a result, we have deprecated version contexts and repogroups in Sourcegraph 3.33, and we will be removing them in Sourcegraph 3.34. You can read more about this change and how to migrate your version contexts to search contexts in [this blog post](https://about.sourcegraph.com/blog/introducing-search-contexts/).

## All users can now visualize and track the status of their LSIF data

Previously, the code intelligence UI was only available to site-admins (except for hovers and reference panels). This conflicted with our users' need to add precise code intelligence to their own repositories. They could upload LSIF data and get precise code intelligence results, but couldn't visualize the status of said data. We now allow users to see uploads and indexes for repositories they have access to, helping them easily keep track of the status of all their LSIF data.

<img width="1148" alt="Code intelligence uploads page" src="https://user-images.githubusercontent.com/1657213/137551018-de2aaa21-7afe-46ed-9040-f62af536d53c.png">