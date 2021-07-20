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

### Batch Changes: Publish and unpublish changests from the GUI

Batch Changes features a powerful idempotent [spec-based workflow](https://docs.sourcegraph.com/batch_changes/explanations/batch_changes_design), where the spec file defines the batch change. In particular, the [`published`](https://docs.sourcegraph.com/batch_changes/references/batch_spec_yaml_reference#changesettemplate-published) property defines if changesets are published to the codehost or not.

This workflow is great for reproducibility and having a completely CLI-based workflow, and we are keeping it!

_In addition_, we are allowing changesets to be published and unpublished directly from the GUI, to make the workflow more approachable to new users. Simply omit the `published` field in the specs, and the GUI will become the source of truth for publishing changesets.

<!--TODO a small GIF showing a user publishing specs from the GUI (select a few changesets, click the publish bulk action) -->

### New code search reference

* We've added a new search reference to the search results sidebar. The search reference lists search filters which can be expanded to display documentation and examples. The reference can be used to learn about filters or as a shortcuts to using the fitlers in queries. 

<!--TODO a small GIF a user clicking a repo: filter and using autocomplete to resolve github.com\/sourcegraph/sourcgraph$ -->

### Code Insights Dashboards 

<!--TODO a small GIF of adding code insights to a dashboard and viewing that dashboard -->

You can now add your code insights to individual dashboard pages, in order to group and share a contextual subest of all created insights. Dashboards can have one of three possible visibility scopes: private, users in your organization, or global. For more on dashboards, [see the docs](TODO_ADD_DOCS_LINK). 
