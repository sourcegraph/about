---
title: "Sourcegraph 3.24 release"
publishDate: 2021-01-20T10:00-07:00
description: "Sourcegraph 3.24 is released."
tags: [blog, release]
slug: "release/3.24"
published: true
changelogItems:
  - description: Monitoring dashboards now include links to relevant documentation and annotation overlays for alerts and version changes.
    url: https://docs.sourcegraph.com/admin/observability/metrics#grafana
    category: Admin
  - description: Suggested filters in the search results page can now be scrolled.
    url: https://github.com/sourcegraph/sourcegraph/pull/17097
    category: Search
  - description: Dashboard links included in monitoring alerts are now more specific.
    url: https://docs.sourcegraph.com/admin/observability/alerting
    category: Admin
  - description: "Added `serviceKind` field of the `ExternalServiceKind` type to `Repository.externalURLs` GraphQL API, `serviceType` field is deprecated and will be removed in the future releases."
    url: https://github.com/sourcegraph/sourcegraph/issues/14979
    category: API
  - description: "The minimum Kubernetes version required to use the [Kubernetes deployment option](https://docs.sourcegraph.com/admin/install/kubernetes) is now v1.15 (released June 2019)."
    url: "https://kubernetes.io/blog/2019/06/19/kubernetes-1-15-release-announcement/"
    category: Admin
  - description: "The endpoint for \"Open in Sourcegraph\" functionality in editor extensions now uses code host connection information to resolve the repository, which makes it more correct and respect the `repositoryPathPattern` setting."
    url: https://github.com/sourcegraph/sourcegraph/pull/16846
    category: Repositories
  - description: "Interactive mode has now been removed."
    url: https://github.com/sourcegraph/sourcegraph/pull/16868
    category: Search
---
\* Please [contact Sourcegraph](https://about.sourcegraph.com/contact/sales/) with any licensing questions.
