---
title: 'Sourcegraph 3.35 release'
publishDate: 2021-12-21T10:00-07:00
description: 'Sourcegraph 3.35 introduces...'
tags: [blog, release]
slug: 'release/3.35'
published: false
heroImage: (insert)
socialImage: (insert)
changelogItems:
---

Sourcegraph 3.35 is now available! Here are some highlights from this release:

## Feature

## Batch Changes

Several customers requested that Batch Changes should be able to publish changesets to several branches in the same repository, instead of just one branch, and [we made it happen](https://docs.sourcegraph.com/batch_changes/references/batch_spec_yaml_reference#on-repository)! This is particularly useful, for example, when long-lived branches are used to define versions or releases: bumping up a dependency or changing boilerplate in several branches of the same repository is painful, repetitive work that's a great candidate for a batch change.
