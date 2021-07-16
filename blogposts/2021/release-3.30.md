---
title: "Sourcegraph 3.30 release"
publishDate: 2021-07-20T10:00-07:00
description: "The Sourcegraph 3.30 release introduces"
tags: [blog, release]
slug: "release/3.30"
published: false
changelogItems:


---

Sourcegraph 3.30 is now available! For this release, we introduced

## Update

### Batch Changes: Publish and unpublish changests from the Guide

Batch Changes features a powerful idempotent [spec-based workflow](https://docs.sourcegraph.com/batch_changes/explanations/batch_changes_design), where the spec file defines the batch change. In particular, the [`published`](https://docs.sourcegraph.com/batch_changes/references/batch_spec_yaml_reference#changesettemplate-published) field defines if changesets are published to the codehost or not.

This workflow is great for reproducibility and having a completely CLI-based workflow, and we are keeping it!

_In addition_, we are allowing changesets to be published and unpublished directly from the GUI, to make the workflow more approachable to new users. Simply omit the `published` field in the specs, and the GUI will become the source of truth for publishing changesets.

<!--TODO a small GIF showing a user publishing specs from the GUI (select a few changesets, click the publish bulk action) -->
