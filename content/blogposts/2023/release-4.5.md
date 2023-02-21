---
title: "Sourcegraph 4.5 release"
publishDate: 2023-02-22T10:00-07:00
description: "Sourcegraph 4.5 introduces..."
tags: [blog, release]
slug: "release/4.5"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.5/sourcegraph-4-5-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.5/sourcegraph-4-5-hero.png
changelogItems:
# Added
  - description: "Endpoint environment variables (`SEARCHER_URL`, `SYMBOLS_URL`, `INDEXED_SEARCH_SERVERS`, `SRC_GIT_SERVERS`) now can be set to replica count values in Kubernetes, Kustomize, Helm and Docker Compose environments. This avoids the need to use service discovery or generating the respective list of addresses in those environments."
    url: https://github.com/sourcegraph/sourcegraph/pull/45862
    category: Search
  - description: The default author and email for changesets will now be pulled from user account details when possible.
    url: https://github.com/sourcegraph/sourcegraph/pull/46385
    category: 
  - description: "Code Insights has a new display option: \"Max number of series points to display\". This setting controls the number of data points you see per series on an insight."
    url: https://github.com/sourcegraph/sourcegraph/pull/46653
    category: 
  - description: "Added out-of-band migration that will migrate all existing data from LSIF to SCIP (see additional [migration documentation](https://docs.sourcegraph.com/admin/how-to/lsif_scip_migration))."
    url: https://github.com/sourcegraph/sourcegraph/pull/45106
    category: Admin
  - description: "Code Insights has a new search-powered repositories field that allows you to select repositories with Sourcegraph search syntax."
    url: https://github.com/sourcegraph/sourcegraph/pull/45687
    category: Search
  - description: "You can now export all data for a Code Insight from the card menu or the standalone page. [#46795](https://github.com/sourcegraph/sourcegraph/pull/46795),"
    url: https://github.com/sourcegraph/sourcegraph/pull/46694
    category: 
  - description: Added Gerrit as an officially supported code host with permissions syncing.
    url: https://github.com/sourcegraph/sourcegraph/pull/46763
    category: 
  - description: "Markdown files now support `\u003cpicture\u003e` and `\u003cvideo\u003e` elements in the rendered view."
    url: https://github.com/sourcegraph/sourcegraph/pull/47074
    category: 
  - description: "Batch Changes: Log outputs from execution steps are now paginated in the web interface."
    url: https://github.com/sourcegraph/sourcegraph/pull/46335
    category: Batch Changes
  - description: "Monitoring: the searcher dashboard now contains more detailed request metrics as well as information on interactions with the local cache (via gitserver)."
    url: https://github.com/sourcegraph/sourcegraph/pull/47654
    category: Search
  - description: Renders GitHub pull request references in the commit list.
    url: https://github.com/sourcegraph/sourcegraph/pull/47593
    category: 
  - description: "Added a new background permissions syncer \u0026 scheduler which is backed by database, unlike the old one that was based on an in-memory processing queue. The new system is enabled by default, but can be disabled. Revert to the in-memory processing queue by setting the feature flag `database-permission-sync-worker` to `false`."
    url: https://github.com/sourcegraph/sourcegraph/pull/47783
    category: 
  - description: "Zoekt introduces a new opt-in feature, \"shard merging\". Shard merging consolidates small index files into larger ones, which reduces Zoekt-webserver's memory footprint documentation"
    url: "https://docs.sourcegraph.com/code_search/explanations/search_details#shard-merging"
    category: 
  - description: "Blob viewer is now backed by the CodeMirror editor. Previous table-based blob viewer can be re-enabled by setting `experimentalFeatures.enableCodeMirrorFileView` to `false`."
    url: https://github.com/sourcegraph/sourcegraph/pull/47563
    category: 
  - description: Code folding support for the CodeMirror blob viewer.
    url: https://github.com/sourcegraph/sourcegraph/pull/47266
    category: 
  - description: "CodeMirror blob keyboard navigation as experimental feature. Can be enabled in settings by setting `experimentalFeatures.codeNavigation` to `selection-driven`."
    url: https://github.com/sourcegraph/sourcegraph/pull/44698
    category: 
# Changed
  - description: Archived and deleted changesets are no longer counted towards the completion percentage shown in the Batch Changes UI.
    url: https://github.com/sourcegraph/sourcegraph/pull/46831
    category: Batch Changes
  - description: "Code Insights has a new UI for the \"Add or remove insights\" view, which now allows you to search code insights by series label in addition to insight title."
    url: https://github.com/sourcegraph/sourcegraph/pull/46538
    category: Search
  - description: "When SMTP is configured, users created by site admins via the \"Create user\" page will no longer have their email verified by default - users must verify their emails by using the \"Set password\" link they get sent, or have their emails verified by a site admin via the \"Emails\" tab in user settings or the `setUserEmailVerified` mutation. The `createUser` mutation retains the old behaviour of automatically marking emails as verified. To learn more, refer to the [SMTP and email delivery](https://docs.sourcegraph.com/admin/config/email) documentation."
    url: https://github.com/sourcegraph/sourcegraph/pull/46187
    category: Admin
  - description: Connection checks for code host connections have been changed to talk to code host APIs directly via HTTP instead of doing DNS lookup and TCP dial. That makes them more resistant in environments where proxies are used.
    url: https://github.com/sourcegraph/sourcegraph/pull/46918
    category: 
  - description: "Expiration of licenses is now handled differently. When a license is expired promotion to site-admin is disabled, license-specific features are disabled (exceptions being SSO \u0026 permission syncing), grace period has been replaced with a 7-day-before-expiration warning."
    url: https://github.com/sourcegraph/sourcegraph/pull/47251
    category: Admin
  - description: "Searcher will now timeout searches in 2 hours instead of 10 minutes. This timeout was raised for batch use cases (such as code insights) searching old revisions in very large repositories. This limit can be tuned with the environment variable `PROCESSING_TIMEOUT`."
    url: https://github.com/sourcegraph/sourcegraph/pull/47469
    category: Search
  - description: "Zoekt now bypasses the regex engine for queries that are common in the context of search-based code intelligence, such as `\\bLITERAL\\b case:yes`. This can lead to a significant speed-up for \"Find references\" and \"Find implementations\" if precise code intelligence is not available. zoekt#526"
    url: https://github.com/sourcegraph/zoekt/pull/526
    category: Search
  - description: "The Sourcegraph Free license has undergone a number of changes. Please contact support@sourcegraph.com with any questions or concerns."
    url: https://github.com/sourcegraph/sourcegraph/pull/46504
    category: 
  - description: Expired Sourcegraph licenses no longer allow continued use of the product.
    url: https://github.com/sourcegraph/sourcegraph/pull/47251
    category: 
# Fixed
  - description: Resolved issue which would prevent Batch Changes from being able to update changesets on forks of repositories on Bitbucket Server created prior to version 4.2.
    url: https://github.com/sourcegraph/sourcegraph/pull/47397
    category: Batch Changes
  - description: "Fixed a bug where changesets created on forks of repositories in a personal user's namespace on GitHub could not be updated after creation."
    url: https://github.com/sourcegraph/sourcegraph/pull/47397
    category: Repositories
  - description: "Fixed a bug where saving default Sort \u0026 Limit filters in Code Insights did not persist"
    url: https://github.com/sourcegraph/sourcegraph/pull/46653
    category: 
  - description: "Restored the old syntax for `repo:contains` filters that was previously removed in version 4.0.0. For now, both the old and new syntaxes are supported to allow for smooth upgrades. Users are encouraged to switch to the new syntax, since the old one may still be removed in a future version."
    url: 
    category: Repositories
  - description: "Fixed a bug where removing an auth provider would render a user's Account Security page inaccessible if they still had an external account associated with the removed auth provider."
    url: https://github.com/sourcegraph/sourcegraph/pull/47092
    category: 
  - description: "Fixed a bug where the `repo:has.description()` parameter now correctly shows description of a repository synced from a Bitbucket server code host connection, while previously it used to show the repository name instead"
    url: https://github.com/sourcegraph/sourcegraph/pull/46752
    category: Repositories
  - description: "Fixed a bug where permissions syncs consumed more rate limit tokens than required. This should lead to speed-ups in permission syncs, as well as other possible cases where a process runs in repo-updater."
    url: https://github.com/sourcegraph/sourcegraph/pull/47374
    category: Repositories
  - description: Fixes UI bug where folders with single child were appearing as child folders themselves.
    url: https://github.com/sourcegraph/sourcegraph/pull/46628
    category: 
# Removed
  - description: "The Code insights \"run over all repositories\" mode has been replaced with search-powered repositories filed syntax."
    url: https://github.com/sourcegraph/sourcegraph/pull/45687
    category: Search
  - description: "The settings `search.repositoryGroups`, `codeInsightsGqlApi`, `codeInsightsAllRepos`, `experimentalFeatures.copyQueryButton`,, `experimentalFeatures.showRepogroupHomepage`, `experimentalFeatures.showOnboardingTour`, `experimentalFeatures.showSearchContextManagement` and `codeIntelligence.autoIndexRepositoryGroups` have been removed as they were deprecated and unsued."
    url: https://github.com/sourcegraph/sourcegraph/pull/47481
    category: Search

---

<Badge link="https://docs.sourcegraph.com/code_insights" text="Code Insights" color="green" size="small" />

#### The new Code Insights UI makes it easier to run insights over specific repositories

We've introduced a new UI for Code Insights creation. You can now use Sourcegraph query syntax to select repositories for an insight to run over. Previously, repositories had to be explicitly listed. This change makes it easier to select very specific and large repository groups to run insights over.

The new query system allows you to select repositories with these filters:
- `repo:`
- `-repo:`
- `repo:has.path()`
- `repo:has.file()`
- `repo:has.commit.after()`
- `repo:.*`


<br />
<Badge link="https://docs.sourcegraph.com/admin/workers" text="Admin" color="violet" size="small" />

#### Highlight 2

Highlight 2 copy

<br />
<Badge link="" text="AI" color="blue" size="small" />

#### Highlight 3

Highlight 3 copy
