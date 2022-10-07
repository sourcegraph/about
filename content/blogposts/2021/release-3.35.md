---
title: 'Sourcegraph 3.35 release'
publishDate: 2021-12-21T10:00-07:00
description: 'Sourcegraph 3.35 introduces precise Code Intelligence for Java, Scala, and Kotlin, plus the ability to publish changesets to multiple branches of a repository with a single batch change.'
tags: [blog, release]
slug: 'release/3.35'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.35/sourcegraph-3-35-release.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.35/sourcegraph-3-35-release.png
changelogItems:
  - description: Individual batch changes can publish multiple changesets to the same repository by specifying multiple target branches using the `on.branches` attribute. This allows you to efficiently update long-lived branches for recent changes or upgraded dependencies.
    url: https://docs.sourcegraph.com/batch_changes/references/batch_spec_yaml_reference#on-repository
    category: Batch Changes
  - description: The search bar is no longer auto-focused when navigating between files. This allows you to use the keyboard shortcut Cmd+LeftArrow (or Ctrl-LeftArrow) to go back to the browser's previous page instead of moving the cursor to the first position of the search bar.
    url: https://github.com/sourcegraph/sourcegraph/pull/28943
    category: Search
  - description: 'Using `select:repo` in search queries will now stream results incrementally, greatly improving speed and reducing time-to-first-result.'
    url: https://github.com/sourcegraph/sourcegraph/pull/28920
    category: Search
  - description: External services will now stop syncing if they exceed the user- or site-level limit for total number of repositories added. They will only continue syncing if the extra repositories are removed or the corresponding limit is increased. Previously, they attempted to retry syncing indefinitely.
    url: https://github.com/sourcegraph/sourcegraph/pull/28674
    category: Repositories
  - description: Non-bare repositories found on Gitserver will now be removed by a janitor job. Since non-bare repositories fail to fetch when you have a working copy, this will prevent clutter from repositories that are unable to update.
    url: https://github.com/sourcegraph/sourcegraph/pull/28895
    category: Repositories
  - description: Fixed a bug where moving a changeset from draft state into published state did not work on GitLab repositories.
    url: https://github.com/sourcegraph/sourcegraph/pull/28239
    category: Batch Changes
  - description: Fixed a bug where modifying changesets on Bitbucket Server could previously fail if the local copy in Batch Changes was out of date.
    url: https://github.com/sourcegraph/sourcegraph/pull/29100
    category: Batch Changes
  - description: Fixed a bug introduced in 3.34 where certain regexp syntax for repository searches caused the entire search, including non-repository searches, to fail.
    url: https://github.com/sourcegraph/sourcegraph/pull/28826
    category: Search
---

Sourcegraph 3.35 is now available! Here are some highlights from this release:

## Precise Code Intelligence for Java, Scala, and Kotlin

Sourcegraph now provides precise Code Intelligence for Java, Scala, and Kotlin. You can now get compiler-accurate “Go to definition” and “Find references” within a Git repository and all transitive dependencies of your codebase. You can find Kotlin or Scala usages from Java code and vice versa, which is particularly useful for mixed-language repositories. [Read more about precise Code Intelligence for Java, Scala, and Kotlin in our blog post](https://about.sourcegraph.com/blog/java-scala-kotlin-code-intelligence/), and check out our [lsif-java documentation](https://sourcegraph.github.io/lsif-java/) for detailed setup instructions and build-tooling compatibility.

<Figure
  alt="An example of the find references feature being used in a Kotlin source file and returning examples in Scala." 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/3.35/preciseJVMintelligence.png"
/>

## Efficiently update multiple branches of a repository with Batch Changes

Bumping up a dependency or changing boilerplate code in several branches of the same repository is painful, repetitive work that's a great candidate for a batch change. Batch Changes now allows you to publish changesets to [several branches in the same repository](https://docs.sourcegraph.com/batch_changes/references/batch_spec_yaml_reference#on-repository), rather than a single branch per repository. This is particularly useful, for example, when long-lived branches are used to define versions or releases.
