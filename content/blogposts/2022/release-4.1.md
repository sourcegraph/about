---
title: "Sourcegraph 4.1 release"
publishDate: 2022-10-21T10:00-07:00
description: "Sourcegraph 4.1 introduces..."
tags: [blog, release]
slug: "release/4.1"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.1/sourcegraph-4-1.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.1/sourcegraph-4-1.png
changelogItems:
  - description: Added repository sync counters to the code host details page to give visibility into external service sync progress.
    url: https://github.com/sourcegraph/sourcegraph/pull/43039
    category: Repositories
  - description: "Added a new button in the repository settings, under \"Mirroring\", to delete a repository from disk and reclone it. This prevents the need to manually delete failed repositories from the Git server."
    url: https://github.com/sourcegraph/sourcegraph/pull/42177
    category: Repositories
  - description: "GraphQL request logs are now compliant with the audit logging format. The old GraphQl logging based on `LOG_ALL_GRAPHQL_REQUESTS` env var is now deprecated and scheduled for removal."
    url: https://github.com/sourcegraph/sourcegraph/pull/42550
    category: Admin
  - description: "Git server access logs are now compliant with the audit logging format. This introduces a breaking change: The 'actor' field is now nested under the 'audit' field."
    url: https://github.com/sourcegraph/sourcegraph/pull/41865
    category: Admin
  - description: Security events are now included in the audit log by default.
    url: https://github.com/sourcegraph/sourcegraph/pull/42653
    category: Admin
  - description: "Security events (in the audit log) can now optionally omit internal actor traffic to reduce noise."
    url: https://github.com/sourcegraph/sourcegraph/pull/42946
    category: Admin
---

Sourcegraph 4.1 is now available! For this release, we introduced:

<Badge link="/batch-changes" text="Batch Changes" color="blue" size="small" />

#### Batch Changes

We're iterating on running batch changes server-side as we head towards GA, and adding the last features that are missing for server-side runs to support all features of local runs.
- (experimental) You can now mount files on batch change steps containers when running server-side ([docs](https://docs.sourcegraph.com/batch_changes/how-tos/server_side_file_mounts)). This is very useful when your batch change needs to run long scripts, or binaries that change frequently and can't be built 
into the step container.
- Server-side runs can now be created in an organization namespace. Previously server-side runs could only be created in a user namespace.

<a href="https://docs.sourcegraph.com/batch_changes/how-tos/server_side_file_mounts" className="tw-not-italic tw-flex tw-items-center tw-mb-sm">Docs<OpenInNewIcon className="tw-ml-xxs" size={18} /></a>