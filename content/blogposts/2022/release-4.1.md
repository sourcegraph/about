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
  - description: "Fixed a bug with GitHub code hosts that did not label archived repos correctly when using the "public" repositoryQuery keyword."
    url: https://github.com/sourcegraph/sourcegraph/pull/41461
    category: Admin
---

Sourcegraph 4.1 is now available! For this release, we introduced:

<Badge link="/batch-changes" text="Batch Changes" color="blue" size="small" />

#### Batch Changes

We're iterating on running batch changes server-side as we prepare it to move from beta to GA. In 4.1, we're  adding the last features to bring server-side runs up to feature parity with local runs.
- (Experimental) You can now mount files on batch change steps containers when running them server-side. This is useful when your batch change needs to run long scripts or binaries that change frequently and can't be built. By mounting the files or binaries to the container, rather than baking them into it, you can iterate on them without needing to rebuild the container every time. You can read more about this feature in [release post 3.41](https://about.sourcegraph.com/blog/release/3.41) where it was first introduced.
into the step container.
- Server-side runs can now be created in an organization namespace, which allows any member of that organization to edit or delete the batch change. Previously server-side runs could only be created in a user namespace.

<a href="https://docs.sourcegraph.com/batch_changes/how-tos/server_side_file_mounts" className="tw-not-italic tw-flex tw-items-center tw-mb-sm">Docs<OpenInNewIcon className="tw-ml-xxs" size={18} /></a>