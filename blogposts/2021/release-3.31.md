---
title: 'Sourcegraph 3.31 release'
publishDate: 2021-09-02T10:00-07:00
description: 'Sourcegraph 3.31 introduces the ability to automatically migrate saved search notifications to code monitors.'
tags: [blog, release]
slug: 'release/3.31'
published: true
heroImage: https://sourcegraphstatic.com/blog/3.31/sourcegraph-3-31-release.png
socialImage: https://sourcegraphstatic.com/blog/3.31/sourcegraph-3-31-release.png
changelogItems:
  - description: Operator documentation has been added to the Search Reference sidebar section.
    url: https://github.com/sourcegraph/sourcegraph/pull/23116
    category: Search
  - description: Syntax highlighting is now supported for CUE.
    url: https://cuelang.org
    category: Search
  - description: Reintroduced a revised version of the Search Types sidebar section, making the quick links for search types (for example, diff searches) more intuitive to use.
    url: https://github.com/sourcegraph/sourcegraph/pull/23170
    category: Search
  - description: "The Perforce integration has a new `p4.client` field that can be used to avoid cloning unimportant files by using git p4's `--use-client-spec`."
    url: https://github.com/sourcegraph/sourcegraph/pull/23845
    category: Admin
  - description: 'Batch Changes changesets can now be set to published when previewing new or updated batch changes.'
    url: https://docs.sourcegraph.com/batch_changes/how-tos/publishing_changesets#within-the-ui
    category: Batch Changes
  - description: "The Docker Compose Jaeger container's `SAMPLING_STRATEGIES_FILE` now has a default value. If you are using a custom sampling strategies configuration, you may need to make sure your configuration is not overridden by the change when upgrading."
    url: 'https://github.com/sourcegraph/deploy-sourcegraph-docker/pull/489'
    category: Admin
  - description: The copy icon displayed next to files and repositories will now copy the file or repository path. Previously, this action copied the URL to clipboard.
    url: https://github.com/sourcegraph/sourcegraph/pull/23390
    category: Search
  - description: Fixed a result streaming throttling issue that was causing significantly increased latency for some searches. This should improve the time to first rendered results for those searches.
    url: https://github.com/sourcegraph/sourcegraph/pull/23736
    category: Search
  - description: Updating draft merge requests on GitLab from batch changes no longer removes the draft status.
    url: https://github.com/sourcegraph/sourcegraph/issues/23944
    category: Batch Changes
---

Sourcegraph 3.31 is now available! Here are some highlights from this release:

## We're moving to Alpine-based database images

We've switched our built-in main Postgres and codeintel databases to an Alpine-based Docker image to resolve vulnerabilities found in Debian. This requires re-indexing the database when upgrading to 3.31, which can take up to a few hours on systems with large datasets. [Read more on how to prepare for the update here](https://docs.sourcegraph.com/admin/migration/3_31).

## Saved search notifications are migrating to code monitoring

Email notifications for saved searches are being deprecated in favor of code monitoring notifications. Similar to email notifications for saved searches, code monitoring allows you to keep track of and get notified about changes in your code. Some use cases for code monitors include getting notifications for potential secrets, anti-patterns, or common typos committed to your codebase. Read more about [code monitoring](https://docs.sourcegraph.com/code_monitoring).

If you are using email notifications for existing saved searches, there is now a button to automatically migrate to code monitoring. Note that existing email notifications for saved searches will be removed in the future.

## We're working to index the open source universe on Sourcegraph cloud

Sourcegraph is working to index every open source GitHub and GitLab repository with 1 or more stars. Users can search this index of open source code on [Sourcegraph cloud](https://www.sourcegraph.com), and you can read about [why we're doing this on our blog](https://about.sourcegraph.com/blog/why-index-the-oss-universe/).

Also, if you'd like utilize this open source index with your Sourcegraph deployment, you can [set up federation for your instance](https://docs.sourcegraph.com/admin/federation/public_repositories).
