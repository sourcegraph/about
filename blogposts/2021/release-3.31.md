---
title: "Sourcegraph 3.31 release"
publishDate: 2021-08-20T10:00-07:00
description: "Sourcegraph 3.31 introduces UPDATE"
tags: [blog, release]
slug: "release/3.31"
published: false
heroImage: 
socialImage: 
changelogItems:
  - description: "Backend Code Insights GraphQL queries now support arguments `includeRepoRegex` and `excludeRepoRegex` to filter on repository names."
    url: https://github.com/sourcegraph/sourcegraph/pull/23256
    category: Code Insights
  - description: Operator documentation has been added to the Search Reference sidebar section.
    url: https://github.com/sourcegraph/sourcegraph/pull/23116
    category: Search
  - description: Syntax highlighting is now supported for CUE.
    url: https://cuelang.org
    category: Search
  - description: Reintroduced a revised version of the Search Types sidebar section.
    url: https://github.com/sourcegraph/sourcegraph/pull/23170
    category: Search
  - description: "Added support for [`git p4`'s `--use-client-spec` option](https://git-scm.com/docs/git-p4#Documentation/git-p4.txt---use-client-spec) can now be enabled by configuring the `p4.client` field in the Perforce integration."
    url: https://docs.sourcegraph.com/batch_changes/how-tos/publishing_changesets#within-the-ui
    category: Admin
  - description: "Batch Changes changesets can now be set to published when previewing new or updated batch changes."
    url: https://github.com/sourcegraph/sourcegraph/issues/22912
    category: Batch Changes
  - description: "Code Insights drill-down filters now allow filtering insights data on the dashboard page using repo: filters."
    url: https://github.com/sourcegraph/sourcegraph/issues/23186
    category: Code Insights
  - description: "Code Insights feature flag `DISABLE_CODE_INSIGHTS` environment variable has moved from the `repo-updater` service to the `worker` service. Any users of this flag will need to update their `worker` service configuration to continue using it."
    url: https://github.com/sourcegraph/sourcegraph/pull/23050
    category: Repositories
  - description: "The Docker Compose Jaeger container's `SAMPLING_STRATEGIES_FILE` now has a default value. If you are currently using a custom sampling strategies configuration, you may need to make sure your configuration is not overridden by the change when upgrading."
    url: "https://github.com/sourcegraph/deploy-sourcegraph-docker/pull/489"
    category: Admin
  - description: The copy icon displayed next to files and repositories will now copy the file or repository path. Previously, this action copied the URL to clipboard.
    url: https://github.com/sourcegraph/sourcegraph/pull/23390
    category: Repositories
  - description: "For Docker-Compose and Kubernetes users, the built-in main Postgres and codeintel databases have switched to an alpine Docker image. This requires re-indexing the entire database. This process can take up to a few hours on systems with large datasets."
    url: https://github.com/sourcegraph/sourcegraph/pull/23697
    category: Repositories
  - description: "All commit search results for `and`-expressions are now highlighted."
    url: https://github.com/sourcegraph/sourcegraph/pull/23336
    category: Search
  - description: Fixed a result streaming throttling issue that was causing significantly increased latency for some searches.
    url: https://github.com/sourcegraph/sourcegraph/pull/23736
    category: Search
  - description: Updating draft merge requests on GitLab from batch changes no longer removes the draft status.
    url: https://github.com/sourcegraph/sourcegraph/issues/23944
    category: Batch Changes
  - description: Email notifications for saved searches are now deprecated in favor of Code Monitoring. Email notifications can no longer be enabled for saved searches. Saved searches that already have notifications enabled will continue to work, but there is now a button users can click to migrate to code monitors. Notifications for saved searches will be removed entirely in the future.
    url: https://github.com/sourcegraph/sourcegraph/pull/23275
    category: Search
  - description: "The experimental `codeInsightsAllRepos` feature flag has been removed."
    url: https://github.com/sourcegraph/sourcegraph/pull/23850
    category: Repositories
  
---

Sourcegraph 3.31 is now available! For this release, we introduced:

## Code Insights is now in Private Beta

With the ability to now run code insights over thousands of repositories – and a new way to filter and explore your insights live – Code Insights is now in Private Beta. Track the historical and future trend of anything you can run a Sourcegraph search for, from code migrations to API usage to linter overrides. 

### Code Insights runs over all your repositories

Code insights now runs over all repositories – we've removed the the ~50-70 repo limit.

<div style="text-align:center"><video autoplay loop muted playsinline style="width:625px">
  <source src="https://sourcegraphstatic.com/blog/3.31/insight_all_repos.mp4" type="video/mp4">
</video></div>

### Filter Code Insights down to subsets of repositories 

Once your code insights have backfilled your historical data, you can instantly explore and filter to just the repositories you care about using `repo:` and `-repo:` regular expressions, and even [save your filtered views](https://docs.sourcegraph.com/code_insights/explanations/code_insights_filters#filter-persistance-and-sharing). 

<div style="text-align:center"><video autoplay loop muted playsinline style="width:625px">
  <source src="https://sourcegraphstatic.com/blog/3.31/filter_code_insights.mp4" type="video/mp4">
</video></div>

## We're now indexing the open source universe for Sourcegraph cloud

Sourcegraph is indexing every open source GitHub and GitLab repository with 1 or more stars. Users can search this index of open source code on [Sourcegraph cloud](www.sourcegraph.com), and you can read about why we're doing this [on our blog](https://about.sourcegraph.com/blog/why-index-the-oss-universe/).

Also, if you'd like utilize this open source index with your Sourcegraph deployment, you can [set up federation for your instance](https://docs.sourcegraph.com/admin/federation/public_repositories). 