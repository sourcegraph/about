---
title: "Sourcegraph 4.2 release"
publishDate: 2022-11-22T10:00-07:00
description: "Sourcegraph 4.2 introduces..."
tags: [blog, release]
slug: "release/4.2"
published: false
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.2/sourcegraph-4-2-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.2/sourcegraph-4-2-hero.png
changelogItems:
# Added
  - description: Creating access tokens is now part of the audit log.
    url: https://github.com/sourcegraph/sourcegraph/pull/43226
    category: Admin
  - description: "Added `codeIntelAutoIndexing.indexerMap` to site-config that allows users to update the indexers used when inferring precise code intelligence auto-indexing jobs (without having to overwrite the entire inference scripts). For example, `\"codeIntelAutoIndexing.indexerMap\": {\"go\": \"my.registry/sourcegraph/lsif-go\"}` will casue Go projects to use the specified container (in a alternative Docker registry)."
    url: https://github.com/sourcegraph/sourcegraph/pull/43199
    category: 
  - description: Code Insights data points that do not contain any results will display zero instead of being omitted from the visualization for clarity. Only applies to insight data created after 4.2.
    url: https://github.com/sourcegraph/sourcegraph/pull/43166
    category: Code Insights
  - description: A structural search diagnostic to warn users when a language filter is not set.
    url: https://github.com/sourcegraph/sourcegraph/pull/43835
    category: Search
  - description: GitHub and GitLab OAuth login attempts are now recorded in the audit log.
    url: https://github.com/sourcegraph/sourcegraph/pull/43886
    category: Admin
  - description: When rendering a file which is backed by Git LFS, we show a page informing the file is LFS and linking to the file on the codehost. Previously we rendered the LFS pointer.
    url: https://github.com/sourcegraph/sourcegraph/pull/43686
    category: 
  - description: OIDC success/fail login attempts are now a part of the audit log.
    url: https://github.com/sourcegraph/sourcegraph/pull/44467
    category: Admin
  - description: "A new experimental GraphQL query, `permissionsSyncJobs`, that lists the states of recently completed permissions sync jobs and the state of each provider. The TTL of entries retrained can be configured with `authz.syncJobsRecordsTTL`. [#44387](https://github.com/sourcegraph/sourcegraph/pull/44387),"
    url: https://github.com/sourcegraph/sourcegraph/pull/44258
    category: API
  - description: The search input has a new search history button, and search history can be cycled via the up/down arrow keys for quick access to previous searches.
    url: https://github.com/sourcegraph/sourcegraph/pull/44544
    category: Search
  - description: Repositories can now be ordered by size on the repo admin page.
    url: https://github.com/sourcegraph/sourcegraph/pull/44360
    category: Admin
# Changed
  - description: "Updated minimum required version of `git` to 2.38.1 in `gitserver` and `server` Docker image. This addresses: https://github.blog/2022-04-12-git-security-vulnerability-announced/ and https://lore.kernel.org/git/d1d460f6-e70f-b17f-73a5-e56d604dd9d5@github.com/."
    url: https://github.com/sourcegraph/sourcegraph/pull/43615
    category: 
  - description: "When a `content:` filter is used in a query, only file contents will be searched (previously any of file contents, paths, or repos were searched). However, as before, if `type:` is also set, the `content:` filter will search for results of the specified `type:`."
    url: https://github.com/sourcegraph/sourcegraph/pull/43442
    category: Search
---

<Badge link="" text="Feature Name" color="blue" size="small" />

#### Secrets in server-side Batch Changes (Beta)

It's common to use secrets in batch changes steps: for example, to authenticate to a private registry to install packages, to create tickets from within a batch change, or to make authentified API calls to other services. In local runs, secrets can be either hardcoded in the spec or loaded from environment variables using [`step.env`](https://docs.sourcegraph.com/batch_changes/references/batch_spec_yaml_reference#steps-env), but until now there was no robust and secure way to manage secrets for server-side runs.

That's why we're releasing [executor secrets](https://docs.sourcegraph.com/admin/executor_secrets). You can now define secrets to be passed to server-side runs. They can then be referenced as `env` variables in the batch change spec.

Sourcegraph supports two types of secrets: namespaced secrets that can only be accessed by their owner, and global secets that site-admins can set and make available to all users on the instance. 

This feature is in Beta, and feedback is very welcome. Tweet at us, or drop a comment in this [issue](https://github.com/sourcegraph/sourcegraph/issues/44597)!

<br />
<Badge link="" text="Feature name" color="cerise" size="small" />

#### Highlight 2

<br />
Sourcegraph 4.2 is now available to download. For Sourcegraph Cloud users, instances will be upgraded to 4.2 beginning (Date).
