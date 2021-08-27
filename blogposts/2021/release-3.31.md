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
# Added
  - description: "Backend Code Insights GraphQL queries now support arguments `includeRepoRegex` and `excludeRepoRegex` to filter on repository names."
    url: https://github.com/sourcegraph/sourcegraph/pull/23256
    category: API
  - description: Operator documentation has been added to the Search Reference sidebar section.
    url: https://github.com/sourcegraph/sourcegraph/pull/23116
    category: Search
  - description: Syntax highlighting support for the Cue language.
    url: https://cuelang.org
    category: 
  - description: Reintroduced a revised version of the Search Types sidebar section.
    url: https://github.com/sourcegraph/sourcegraph/pull/23170
    category: Search
  - description: Improved usability where filters followed by a space in the search query will warn users that the filter value is empty.
    url: https://github.com/sourcegraph/sourcegraph/pull/23646
    category: Search
  - description: "Perforce: [`git p4`'s `--use-client-spec` option](https://git-scm.com/docs/git-p4#Documentation/git-p4.txt---use-client-spec) can now be enabled by configuring the `p4.client` field. [#23833](https://github.com/sourcegraph/sourcegraph/pull/23833),"
    url: https://github.com/sourcegraph/sourcegraph/pull/23845
    category: 
  - description: "Code Insights will do a one-time reset of ephemeral insights specific database tables to clean up stale and invalid data. Insight data will regenerate automatically. 23791"
    url: https://github.com/sourcegraph/sourcegraph/pull/23791
    category: 
  - description: "Perforce: added basic support for Perforce permission table path wildcards."
    url: https://github.com/sourcegraph/sourcegraph/pull/23755
    category: 
  - description: Added autocompletion and search filtering of branch/tag/commit revisions to the repository compare page.
    url: https://github.com/sourcegraph/sourcegraph/pull/23977
    category: Search
  - description: "Batch Changes changesets can now be [set to published when previewing new or updated batch changes](https://docs.sourcegraph.com/batch_changes/how-tos/publishing_changesets#within-the-ui)."
    url: https://github.com/sourcegraph/sourcegraph/issues/22912
    category: Batch Changes
  - description: "Added Python3 to server and gitserver images to enable git-p4 support."
    url: https://github.com/sourcegraph/sourcegraph/pull/24204
    category: 
  - description: "Code Insights drill-down filters now allow filtering insights data on the dashboard page using repo: filters."
    url: https://github.com/sourcegraph/sourcegraph/issues/23186
    category: Repositories
# Changed
  - description: Code Insights will now always backfill from the time the data series was created.
    url: https://github.com/sourcegraph/sourcegraph/pull/23430
    category: 
  - description: Code Insights queries will now extract repository name out of the GraphQL response instead of going to the database.
    url: https://github.com/sourcegraph/sourcegraph/pull/23388
    category: API
  - description: "Code Insights backend has moved from the `repo-updater` service to the `worker` service."
    url: https://github.com/sourcegraph/sourcegraph/pull/23050
    category: Repositories
  - description: "Code Insights feature flag `DISABLE_CODE_INSIGHTS` environment variable has moved from the `repo-updater` service to the `worker` service. Any users of this flag will need to update their `worker` service configuration to continue using it."
    url: https://github.com/sourcegraph/sourcegraph/pull/23050
    category: Repositories
  - description: "Updated Docker-Compose Caddy Image to v2.0.0-alpine."
    url: "https://github.com/sourcegraph/deploy-sourcegraph-docker/pull/468"
    category: 
  - description: Code Insights historical samples will record using the timestamp of the commit that was searched.
    url: https://github.com/sourcegraph/sourcegraph/pull/23520
    category: Search
  - description: Authorization checks are now handled using role based permissions instead of manually altering SQL statements. 23398
    url: https://github.com/sourcegraph/sourcegraph/pull/23398
    category: 
  - description: "Docker Compose: the Jaeger container's `SAMPLING_STRATEGIES_FILE` now has a default value. If you are currently using a custom sampling strategies configuration, you may need to make sure your configuration is not overridden by the change when upgrading. sourcegraph/deploy-sourcegraph#489"
    url: "https://github.com/sourcegraph/deploy-sourcegraph-docker/pull/489"
    category: Admin
  - description: Code Insights historical samples will record using the most recent commit to the start of the frame instead of the middle of the frame.
    url: https://github.com/sourcegraph/sourcegraph/pull/23573
    category: 
  - description: The copy icon displayed next to files and repositories will now copy the file or repository path. Previously, this action copied the URL to clipboard.
    url: https://github.com/sourcegraph/sourcegraph/pull/23390
    category: Repositories
  - description: "Sourcegraph's Prometheus dependency has been upgraded to v2.28.1. 23663"
    url: https://github.com/sourcegraph/sourcegraph/pull/23663
    category: 
  - description: "Sourcegraph's Alertmanager dependency has been upgraded to v0.22.2. 23663"
    url: https://github.com/sourcegraph/sourcegraph/pull/23714
    category: 
  - description: Code Insights will now schedule sample recordings for the first of the next month after creation or a previous recording.
    url: https://github.com/sourcegraph/sourcegraph/pull/23799
    category: 
  - description: Code Insights now stores data in a new format. Data points will store complete vectors for all repositories even if the underlying Sourcegraph queries were compressed.
    url: https://github.com/sourcegraph/sourcegraph/pull/23768
    category: Repositories
  - description: Code Insights rate limit values have been tuned for a more reasonable performance.
    url: https://github.com/sourcegraph/sourcegraph/pull/23860
    category: 
  - description: "Code Insights will now generate historical data once per month on the first of the month, up to the configured `insights.historical.frames` number of frames."
    url: https://github.com/sourcegraph/sourcegraph/pull/23768
    category: 
  - description: Code Insights will now schedule recordings for the first of the next calendar month after an insight is created or recorded.
    url: https://github.com/sourcegraph/sourcegraph/pull/23799
    category: 
  - description: Code Insights will attempt to sync insight definitions from settings to the database once every 10 minutes. 23805
    url: https://github.com/sourcegraph/sourcegraph/pull/23805
    category: 
  - description: "Code Insights exposes information about queries that are flagged `dirty` through the `insights` GraphQL query."
    url: https://github.com/sourcegraph/sourcegraph/pull/23857/
    category: API
  - description: "Code Insights GraphQL query `insights` will now fetch 12 months of data instead of 6 if a specific time range is not provided."
    url: https://github.com/sourcegraph/sourcegraph/pull/23786
    category: API
  - description: Code Insights will now generate 12 months of historical data during a backfill instead of 6.
    url: https://github.com/sourcegraph/sourcegraph/pull/23860
    category: 
  - description: "The `sourcegraph-frontend.Role` in Kubernetes deployments was updated to permit statefulsets access in the Kubernetes API. This is needed to better support stable service discovery for stateful sets during deployments, which isn't currently possible by using service endpoints. [#3670](https://github.com/sourcegraph/deploy-sourcegraph/pull/3670)"
    url: https://github.com/sourcegraph/sourcegraph/pull/23889
    category: 
  - description: "For Docker-Compose and Kubernetes users, the built-in main Postgres and codeintel databases have switched to an alpine Docker image. This requires re-indexing the entire database. This process can take up to a few hours on systems with large datasets."
    url: https://github.com/sourcegraph/sourcegraph/pull/23697
    category: 
  - description: Results are now streamed from searcher by default, improving memory usage and latency for large, unindexed searches.
    url: https://github.com/sourcegraph/sourcegraph/pull/23754
    category: Search
  - description: "[`deploy-sourcegraph` overlays](https://docs.sourcegraph.com/admin/install/kubernetes/configure#overlays) now use `resources:` instead of the [deprecated `bases:` field] -(https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/bases/) for referencing Kustomize bases. deploy-sourcegraph#3606"
    url: "https://github.com/sourcegraph/deploy-sourcegraph/pull/3606"
    category: Admin
  - description: "The `deploy-sourcegraph-docker` Pure Docker deployment scripts and configuration has been moved to the `./pure-docker` subdirectory. deploy-sourcegraph-docker#454"
    url: "https://github.com/sourcegraph/deploy-sourcegraph-docker/pull/454"
    category: 
  - description: "In Kubernetes deployments, setting the `SRC_GIT_SERVERS` environment variable explicitly is no longer needed. Addresses of the gitserver pods will be discovered automatically and in the same numerical order as with the static list. Unset the env var in your `frontend.Deployment.yaml` to make use of this feature."
    url: https://github.com/sourcegraph/sourcegraph/pull/24094
    category: 
  - description: "The consistent hashing scheme used to distribute repositories across indexed-search replicas has changed to improve distribution and reduce load discrepancies. In the next upgrade, indexed-search pods will re-index the majority of repositories since the repo to replica assignments will change. This can take a few hours in large instances, but searches should succeed during that time since a replica will only delete a repo once it has been indexed in the new replica that owns it. You can monitor this process in the Zoekt Index Server Grafana dashboard - the \"assigned\" repos in \"Total number of repos\" will spike and then reduce until it becomes the same as \"indexed\". As a fail-safe, the old consistent hashing scheme can be enabled by setting the `SRC_ENDPOINTS_CONSISTENT_HASH` env var to `consistent(crc32ieee)` in the `sourcegraph-frontend` deployment."
    url: https://github.com/sourcegraph/sourcegraph/pull/23921
    category: Search
  - description: "GitHub repository permissions can now leverage caching of team and organization permissions for user permissions syncing. Caching behaviour can be enabled via the `authorization.groupsCacheTTL` field in the code host config. This can significantly reduce the amount of time it takes to perform a full permissions sync due to reduced instances of being rate limited by the code host."
    url: https://github.com/sourcegraph/sourcegraph/pull/23978
    category: Repositories
  - description: "In Kubernetes deployments an emptyDir (`/dev/shm`) is now mounted in the `pgsql` deployment to allow Postgres to access more than 64KB shared memory. This value should be configured to match the `shared_buffers` value in your Postgres configuration. deploy-sourcegraph#3784"
    url: "https://github.com/sourcegraph/deploy-sourcegraph/pull/3784/"
    category: 
# Fixed
  - description: The search reference will now show matching entries when using the filter input.
    url: https://github.com/sourcegraph/sourcegraph/pull/23224
    category: Search
  - description: "Graceful termination periods have been added to database deployments. [#3358](https://github.com/sourcegraph/deploy-sourcegraph/pull/3358) \u0026"
    url: "https://github.com/sourcegraph/deploy-sourcegraph-docker/pull/477"
    category: 
  - description: "All commit search results for `and`-expressions are now highlighted."
    url: https://github.com/sourcegraph/sourcegraph/pull/23336
    category: Search
  - description: "Email notifiers in `observability.alerts` now correctly respect the `email.smtp.noVerifyTLS` site configuration field."
    url: https://github.com/sourcegraph/sourcegraph/issues/23636
    category: Admin
  - description: "Alertmanager (Prometheus) now respects `SMTPServerConfig.noVerifyTLS` field."
    url: https://github.com/sourcegraph/sourcegraph/issues/23636
    category: Admin
  - description: Clicking on symbols in the left search pane now renders hover tooltips for indexed repositories.
    url: https://github.com/sourcegraph/sourcegraph/pull/23664
    category: Search
  - description: Fixed a result streaming throttling issue that was causing significantly increased latency for some searches.
    url: https://github.com/sourcegraph/sourcegraph/pull/23736
    category: Search
  - description: GitCredentials passwords stored in AWS CodeCommit configuration is now redacted.
    url: https://github.com/sourcegraph/sourcegraph/pull/23832
    category: Admin
  - description: "Patched a vulnerability in `apk-tools`."
    url: https://github.com/sourcegraph/sourcegraph/pull/23917
    category: 
  - description: Line content was being duplicated in unindexed search payloads, causing memory instability for some dense search queries.
    url: https://github.com/sourcegraph/sourcegraph/pull/23918
    category: Search
  - description: Updating draft merge requests on GitLab from batch changes no longer removes the draft status.
    url: https://github.com/sourcegraph/sourcegraph/issues/23944
    category: Batch Changes
  - description: Report highlight matches instead of line matches in search results.
    url: https://github.com/sourcegraph/sourcegraph/issues/21443
    category: Search
  - description: "Force the `codeinsights-db` database to read from the `configMap` configuration file by explicitly setting the `POSTGRESQL_CONF_DIR` environment variable to the `configMap` mount path. deploy-sourcegraph#3788"
    url: "https://github.com/sourcegraph/deploy-sourcegraph/pull/3788"
    category: 
# Removed
  - description: "The old batch repository syncer was removed and can no longer be activated by setting `ENABLE_STREAMING_REPOS_SYNCER=false`."
    url: https://github.com/sourcegraph/sourcegraph/pull/22949
    category: Batch Changes
  - description: Email notifications for saved searches are now deprecated in favor of Code Monitoring. Email notifications can no longer be enabled for saved searches. Saved searches that already have notifications enabled will continue to work, but there is now a button users can click to migrate to code monitors. Notifications for saved searches will be removed entirely in the future.
    url: https://github.com/sourcegraph/sourcegraph/pull/23275
    category: Search
  - description: "The `sg_service` Postgres role and `sg_repo_access_policy` policy on the `repo` table have been removed due to performance concerns."
    url: https://github.com/sourcegraph/sourcegraph/pull/23622
    category: Repositories
  - description: "Deprecated site configuration field `email.smtp.disableTLS` has been removed."
    url: https://github.com/sourcegraph/sourcegraph/pull/23639
    category: Admin
  - description: "Deprecated language servers have been removed from `deploy-sourcegraph`. deploy-sourcegraph#3605"
    url: "https://github.com/sourcegraph/deploy-sourcegraph/pull/3605"
    category: 
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