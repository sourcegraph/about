---
title: 'Sourcegraph 3.35 release'
publishDate: 2021-12-21T10:00-07:00
description: 'Sourcegraph 3.35 introduces...'
tags: [blog, release]
slug: 'release/3.35'
published: false
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.35/sourcegraph-3-35-release.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.35/sourcegraph-3-35-release.png
changelogItems:
  # Added
  - description: 'Individual batch changes can publish multiple changesets to the same repository by specifying multiple target branches using the [`on.branches`](https://docs.sourcegraph.com/batch_changes/references/batch_spec_yaml_reference#on-repository) attribute.'
    url: https://github.com/sourcegraph/sourcegraph/issues/25228
    category: Batch Changes
  - description: 'Low resource overlay added. NOTE: this is designed for internal-use only. Customers can use the `minikube` overlay to achieve similar results.#4012'
    url: 'https://github.com/sourcegraph/deploy-sourcegraph/pull/4012'
    category:
  - description: 'Code Insights has a new insight `Detect and Track` which will generate unique time series from the matches of a pattern specified as a regular expression capture group. This is currently limited to insights scoped to specific repositories. docs'
    url: https://docs.sourcegraph.com/code_insights/explanations/automatically_generated_data_series
    category: Repositories
  - description: 'Code Insights is persisted entirely in the `codeinsights-db` database. A migration will automatically be performed to move any defined insights and dashboards from your user, org, or global settings files.'
    url:
    category: Admin
  - description: The GraphQL API for Code Insights has entered beta. docs
    url: https://docs.sourcegraph.com/code_insights/explanations/code_insights_graphql_api
    category: API
  - description: "The `SRC_GIT_SERVICE_MAX_EGRESS_BYTES_PER_SECOND` environment variable to control the egress throughput of gitserver's git service (e.g. used by zoekt-index-server to clone repos to index). Set to -1 for no limit."
    url: https://github.com/sourcegraph/sourcegraph/pull/29197
    category: Repositories
  - description: More explicit Terms of Service and Privacy Policy consent has been added to Sourcegraph Server.
    url: https://github.com/sourcegraph/sourcegraph/issues/28716
    category:
  # Changed
  - description: 'The `ALLOW_DECRYPT_MIGRATION` environment variable is now read by the `worker` service, not the `frontend` service as in previous versions.'
    url:
    category: Admin
  - description: External services will stop syncing if they exceed the user / site level limit for total number of repositories added. It will only continue syncing if the extra repositories are removed or the corresponding limit is increased, otherwise it will stop syncing for the very first repository each time the syncer attempts to sync the external service again.
    url: https://github.com/sourcegraph/sourcegraph/pull/28674
    category: Repositories
  - description: Sourcegraph services now listen to SIGTERM signals. This allows smoother rollouts in kubernetes deployments.
    url: https://github.com/sourcegraph/sourcegraph/pull/27958
    category:
  - description: 'The sourcegraph-frontend ingress now uses the networking.k8s.io/v1 api. This adds support for k8s v1.22 and later, and deprecates support for versions older than v1.18.x'
    url: 'https://github.com/sourcegraph/deploy-sourcegraph/pull/4029'
    category:
  - description: 'Non-bare repositories found on gitserver will be removed by a janitor job.'
    url: https://github.com/sourcegraph/sourcegraph/pull/28895
    category: Repositories
  - description: "The search bar is no longer auto-focused when navigating between files. This change means that the keyboard shortcut Cmd+LeftArrow (or Ctrl-LeftArrow) now goes back to the browser's previous page instead of moving the cursor position to the first position of the search bar."
    url: https://github.com/sourcegraph/sourcegraph/pull/28943
    category: Search
  - description: Code Insights series over all repositories can now be edited
    url:
    category: Repositories
  - description: Code Insights series over all repositories now support a custom time interval and will calculate with 12 points starting at the moment the series is created and working backwards.
    url:
    category: Repositories
  - description: 'Minio service upgraded to RELEASE.2021-12-10T23-03-39Z.'
    url: https://github.com/sourcegraph/sourcegraph/pull/29188
    category:
  - description: Code insights creation UI form query field now supports suggestions and syntax highlighting.
    url: https://github.com/sourcegraph/sourcegraph/pull/28130
    category:
  - description: 'Using `select:repo` in search queries will now stream results incrementally, greatly improving speed and reducing time-to-first-result.'
    url: https://github.com/sourcegraph/sourcegraph/pull/28920
    category: Search
  # Fixed
  - description: Moving a changeset from draft state into published state was broken on GitLab code hosts.
    url: https://github.com/sourcegraph/sourcegraph/pull/28239
    category:
  - description: The shortcuts for toggling the History Panel and Line Wrap were not working on Mac.
    url: https://github.com/sourcegraph/sourcegraph/pull/28574
    category:
  - description: 'Suppresses docker-on-mac warning for Kubernetes, Docker Compose, and Pure Docker deployments.'
    url: https://github.com/sourcegraph/sourcegraph/pull/28821
    category:
  - description: 'Fixed an issue where certain regexp syntax for repository searches caused the entire search, including non-repository searches, to fail with a parse error (issue affects only version 3.34).'
    url: https://github.com/sourcegraph/sourcegraph/pull/28826
    category: Search
  - description: Modifying changesets on Bitbucket Server could previously fail if the local copy in Batch Changes was out of date. That has been fixed by retrying the operations in case of a 409 response.
    url: https://github.com/sourcegraph/sourcegraph/pull/29100
    category: Batch Changes
  # Removed
  - description: 'Settings files (user, org, global) as a persistence mechanism for Code Insights are now deprecated.'
    url:
    category:
---

Sourcegraph 3.35 is now available! Here are some highlights from this release:

## Batch Changes

Several customers requested that Batch Changes should be able to publish changesets to several branches in the same repository, instead of just one branch, and [we made it happen](https://docs.sourcegraph.com/batch_changes/references/batch_spec_yaml_reference#on-repository)! This is particularly useful, for example, when long-lived branches are used to define versions or releases: bumping up a dependency or changing boilerplate in several branches of the same repository is painful, repetitive work that's a great candidate for a batch change.

## Code Intelligence

We are excited to announce that Sourcegraph now provides precise code navigation for Java, Scala, and Kotlin! More precisely, this means you can get compiler-accurate “Go to definition” and “Find references” within a git repository and all transitive dependencies of your codebase. You can find Kotlin or Scala usages from Java code and vice-versa, which is particularly useful for mixed language repositories. We'll be posting more about this soon, so stay tuned and make sure to check our [lsif-java documentation](https://sourcegraph.github.io/lsif-java/) for detailed setup instructions and build-tooling compatibility.
<img class="blog-image" title="JVM precise code intelligence" alt="This image shows an example of the find references feature being used in a Kotlin source file and returning examples in Scala." src="https://storage.googleapis.com/sourcegraph-assets/blog/3.35/preciseJVMintelligence.png">
