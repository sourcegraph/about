---
title: 'Sourcegraph 3.35 release'
publishDate: 2021-12-21T10:00-07:00
description: 'Sourcegraph 3.35 introduces the ability to publish individual Batch Changes changesets to several branches of a repository along with precise code intelligence for Java, Scala, and Kotlin.'
tags: [blog, release]
slug: 'release/3.35'
published: false
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.35/sourcegraph-3-35-release.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.35/sourcegraph-3-35-release.png
changelogItems:
  - description: 'Individual batch changes can publish multiple changesets to the same repository by specifying multiple target branches using the [`on.branches`](https://docs.sourcegraph.com/batch_changes/references/batch_spec_yaml_reference#on-repository) attribute.'
    url: https://github.com/sourcegraph/sourcegraph/issues/25228
    category: Batch Changes
  - description: External services will now stop syncing if they exceed the user / site level limit for total number of repositories added. They will only continue syncing if the extra repositories are removed or the corresponding limit is increased.
    url: https://github.com/sourcegraph/sourcegraph/pull/28674
    category: Repositories
  - description: 'Non-bare repositories found on gitserver will now be removed by a janitor job.'
    url: https://github.com/sourcegraph/sourcegraph/pull/28895
    category: Repositories
  - description: "The search bar is no longer auto-focused when navigating between files. This allows you to utilize the keyboard shortcut Cmd+LeftArrow (or Ctrl-LeftArrow) to go back to the browser's previous page instead of moving the cursor to the first position of the search bar."
    url: https://github.com/sourcegraph/sourcegraph/pull/28943
    category: Search
  - description: 'Using `select:repo` in search queries will now stream results incrementally, greatly improving speed and reducing time-to-first-result.'
    url: https://github.com/sourcegraph/sourcegraph/pull/28920
    category: Search
  - description: Fixed a bug where moving a changeset from draft state into published state did not work on GitLab code hosts.
    url: https://github.com/sourcegraph/sourcegraph/pull/28239
    category: Batch Changes
  - description: Fixed a bug introduced in 3.34 where certain regexp syntax for repository searches caused the entire search, including non-repository searches, to fail.
    url: https://github.com/sourcegraph/sourcegraph/pull/28826
    category: Search
  - description: Fixed a bug where modifying changesets on Bitbucket Server could previously fail if the local copy in Batch Changes was out of date.
    url: https://github.com/sourcegraph/sourcegraph/pull/29100
    category: Batch Changes
---

Sourcegraph 3.35 is now available! Here are some highlights from this release:

## Batch Changes

Several customers requested that Batch Changes should be able to publish changesets to several branches in the same repository, instead of just one branch, and [we made it happen](https://docs.sourcegraph.com/batch_changes/references/batch_spec_yaml_reference#on-repository)! This is particularly useful, for example, when long-lived branches are used to define versions or releases: bumping up a dependency or changing boilerplate in several branches of the same repository is painful, repetitive work that's a great candidate for a batch change.

## Code Intelligence

We are excited to announce that Sourcegraph now provides precise code navigation for Java, Scala, and Kotlin! More precisely, this means you can get compiler-accurate “Go to definition” and “Find references” within a git repository and all transitive dependencies of your codebase. You can find Kotlin or Scala usages from Java code and vice-versa, which is particularly useful for mixed language repositories. We'll be posting more about this soon, so stay tuned and make sure to check our [lsif-java documentation](https://sourcegraph.github.io/lsif-java/) for detailed setup instructions and build-tooling compatibility.
<img class="blog-image" title="JVM precise code intelligence" alt="An example of the find references feature being used in a Kotlin source file and returning examples in Scala." src="https://storage.googleapis.com/sourcegraph-assets/blog/3.35/preciseJVMintelligence.png">
