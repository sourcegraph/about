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
  - description: Creating access tokens is now tracked in the security events.
    url: https://github.com/sourcegraph/sourcegraph/pull/43226
    category: 
  - description: "Added `codeIntelAutoIndexing.indexerMap` to site-config that allows users to update the indexers used when inferring precise code intelligence auto-indexing jobs (without having to overwrite the entire inference scripts). For example, `\"codeIntelAutoIndexing.indexerMap\": {\"go\": \"my.registry/sourcegraph/lsif-go\"}` will casue Go projects to use the specified container (in a alternative Docker registry)."
    url: https://github.com/sourcegraph/sourcegraph/pull/43199
    category: 
  - description: Code Insights data points that do not contain any results will display zero instead of being omitted from the visualization. Only applies to insight data created after 4.2.
    url: https://github.com/sourcegraph/sourcegraph/pull/43166
    category: 
  - description: "Sourcegraph ships with node-exporter, a Prometheus tool that provides hardware / OS metrics that helps Sourcegraph scale your deployment. See your deployment update for more information:"
    url: 
    category: 
  - description: A structural search diagnostic to warn users when a language filter is not set.
    url: https://github.com/sourcegraph/sourcegraph/pull/43835
    category: Search
  - description: GitHub/GitLab OAuth success/fail attempts are now a part of the audit log.
    url: https://github.com/sourcegraph/sourcegraph/pull/43886
    category: 
  - description: When rendering a file which is backed by Git LFS, we show a page informing the file is LFS and linking to the file on the codehost. Previously we rendered the LFS pointer.
    url: https://github.com/sourcegraph/sourcegraph/pull/43686
    category: 
  - description: "Batch changes run server-side now support secrets."
    url: https://github.com/sourcegraph/sourcegraph/issues/27926
    category: Batch Changes
  - description: OIDC success/fail login attempts are now a part of the audit log.
    url: https://github.com/sourcegraph/sourcegraph/pull/44467
    category: 
  - description: "A new experimental GraphQL query, `permissionsSyncJobs`, that lists the states of recently completed permissions sync jobs and the state of each provider. The TTL of entries retrained can be configured with `authz.syncJobsRecordsTTL`. [#44387](https://github.com/sourcegraph/sourcegraph/pull/44387),"
    url: https://github.com/sourcegraph/sourcegraph/pull/44258
    category: API
  - description: The search input has a new search history button and allows cycling through recent searches via up/down arrow keys.
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
# Fixed
  - description: Fixed a bug where path matches on files in the root directory of a repository were not highlighted.
    url: https://github.com/sourcegraph/sourcegraph/pull/43275
    category: Repositories
  - description: "Fixed a bug where a search query wouldn't be validated after the query type has changed."
    url: https://github.com/sourcegraph/sourcegraph/pull/43849
    category: Search
  - description: "Fixed a bug where Open in Editor didn't work well with `\"repositoryPathPattern\" = \"{nameWithOwner}\"`"
    url: https://github.com/sourcegraph/sourcegraph/pull/44475
    category: Repositories
# Removed
  - description: "Remove the older `log.gitserver.accessLogs` site config setting. The setting is succeeded by `log.auditLog.gitserverAccess`."
    url: https://github.com/sourcegraph/sourcegraph/pull/43174
    category: 
  - description: "Remove `LOG_ALL_GRAPHQL_REQUESTS` env var. The setting is succeeded by `log.auditLog.graphQL`."
    url: https://github.com/sourcegraph/sourcegraph/pull/43181
    category: API
  - description: "Removed support for setting `SRC_ENDPOINTS_CONSISTENT_HASH`. This was an environment variable to support the transition to a new consistent hashing scheme introduced in 3.31.0."
    url: https://github.com/sourcegraph/sourcegraph/pull/43528
    category: 
  - description: "Removed legacy environment variable `ENABLE_CODE_INSIGHTS_SETTINGS_STORAGE` used in old versions of Code Insights to fall back to JSON settings based storage. All data was previously migrated in version 3.35 and this is no longer supported."
    url: 
    category: 
---

<Badge link="" text="Feature Name" color="blue" size="small" />

#### Highlight 1

<br />
<Badge link="" text="Feature name" color="cerise" size="small" />

#### Highlight 2

<br />
Sourcegraph 4.2 is now available to download. For Sourcegraph Cloud users, instances will be upgraded to 4.2 beginning (Date).
