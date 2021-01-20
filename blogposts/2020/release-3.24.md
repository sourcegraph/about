---
title: "Sourcegraph 3.24 release"
publishDate: 2021-01-20T10:00-07:00
description: "Sourcegraph 3.24 is released."
tags: [blog, release]
slug: "release/3.24"
published: true
changelogItems:
  - description: Panels in the Sourcegraph monitoring dashboards now
    url: https://docs.sourcegraph.com/admin/observability/metrics#grafana
    category: 
  - description: Suggested filters in the search results page can now be scrolled.
    url: https://github.com/sourcegraph/sourcegraph/pull/17097
    category: Search
  - description: Dashboard links included in monitoring alerts now
    url: https://docs.sourcegraph.com/admin/observability/alerting
    category: 
  - description: "Added `serviceKind` field of the `ExternalServiceKind` type to `Repository.externalURLs` GraphQL API, `serviceType` field is deprecated and will be removed in the future releases."
    url: https://github.com/sourcegraph/sourcegraph/issues/14979
    category: API
  - description: "Deprecated the GraphQL fields `SearchResults.repositoriesSearched` and `SearchResults.indexedRepositoriesSearched`."
    url: 
    category: Search
  - description: "The minimum Kubernetes version required to use the [Kubernetes deployment option](https://docs.sourcegraph.com/admin/install/kubernetes) is now v1.15 (released June 2019)."
    url: "https://kubernetes.io/blog/2019/06/19/kubernetes-1-15-release-announcement/"
    category: Admin
  - description: "Imported changesets acquired an extra button to download the \"generated diff\", which did nothing, since imported changesets don't have a generated diff. This button has been removed."
    url: https://github.com/sourcegraph/sourcegraph/issues/16778
    category: 
  - description: "Quoted global filter values (case, patterntype) are now properly extracted and set in URL parameters."
    url: https://github.com/sourcegraph/sourcegraph/issues/16186
    category: 
  - description: "The endpoint for \"Open in Sourcegraph\" functionality in editor extensions now uses code host connection information to resolve the repository, which makes it more correct and respect the `repositoryPathPattern` setting."
    url: https://github.com/sourcegraph/sourcegraph/pull/16846
    category: Repositories
  - description: "Fixed an issue that prevented search expressions of the form `repo:foo (rev:a or rev:b)` from evaluating all revisions"
    url: https://github.com/sourcegraph/sourcegraph/pull/16873
    category: Search
  - description: "Updated language detection library. Includes language detection for `lang:starlark`."
    url: https://github.com/sourcegraph/sourcegraph/pull/16900
    category: 
  - description: Fixed retrieving status for indexed tags and deduplicated main branches in the indexing settings page.
    url: https://github.com/sourcegraph/sourcegraph/issues/13787
    category: 
  - description: "Specifying a ref that doesn't exist would show an alert, but still return results"
    url: https://github.com/sourcegraph/sourcegraph/issues/15576
    category: 
  - description: Fixed search highlighting the wrong line.
    url: https://github.com/sourcegraph/sourcegraph/issues/10468
    category: Search
  - description: "Fixed an issue where searches of the form `foo type:file` returned results of type `path` too."
    url: https://github.com/sourcegraph/sourcegraph/issues/17076
    category: Search
  - description: "Fixed queries like `(type:commit or type:diff)` so that if the query matches both the commit message and the diff, both are returned as results."
    url: https://github.com/sourcegraph/sourcegraph/issues/16899
    category: 
  - description: Fixed container monitoring and provisioning dashboard panels not displaying metrics in certain deployment types and environments. If you continue to have issues with these panels not displaying any metrics after upgrading, please open an issue.
    url: https://github.com/sourcegraph/sourcegraph/issues/new
    category: 
  - description: "Fixed a nonexistent field in site configuration being marked as \"required\" when configuring PagerDuty alert notifications."
    url: https://github.com/sourcegraph/sourcegraph/pull/17277
    category: 
  - description: Fixed cases of incorrect highlighting for symbol definitions in the definitions panel.
    url: https://github.com/sourcegraph/sourcegraph/pull/17258
    category: 
  - description: "Interactive mode has now been removed. #16868."
    url: https://github.com/sourcegraph/sourcegraph/pull/16868
    category: 
---
\* Please [contact Sourcegraph](https://about.sourcegraph.com/contact/sales/) with any licensing questions.