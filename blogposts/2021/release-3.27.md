---
title: "Sourcegraph 3.27 release"
publishDate: 2021-04-20T10:00-07:00
description: "Sourcegraph 3.27 is released."
tags: [blog, release]
slug: "release/3.27"
published: true
changelogItems:
  - description: "Batch Changes now ignore repositories that contain a `.batchignore` file."
    url: "https://github.com/sourcegraph/src-cli/pull/509"
    category: Batch Changes
  - description: "The diff view commit visualization now supports both split and unified views, including hovers, go-to-definition, and find-references."
    url: https://github.com/sourcegraph/sourcegraph/pull/19553
    category: Application UX
  - description: "The site configuration now supports defining batch change rollout windows, which can be used to slow or disable pushing changesets at particular times of day or days of the week."
    url: https://github.com/sourcegraph/sourcegraph/pull/19951
    category: Batch Changes
  - description: "Bumped the minimum supported version of Postgres from `9.6` to `12`. The upgrade procedure is mostly automated for existing deployments, but may require action if using the single-container deployment or an external database. See the upgrade documentation for your deployment type for detailed instructions."
    url: https://docs.sourcegraph.com/admin/updates
    category: Admin
  - description: "Changesets in batch changes will now be marked as archived instead of being detached when a new batch spec that doesn't include the changesets is applied. Once they're archived users can manually detach them in the UI."
    url: https://github.com/sourcegraph/sourcegraph/pull/19527
    category: Batch Changes
  - description: "Creating changesets through Batch Changes as a site-admin without configured Batch Changes credentials has been deprecated. To avoid any interruptions in changeset creation, please configure user or global credentials before Sourcegraph 3.29."
    url: https://github.com/sourcegraph/sourcegraph/pull/20143
    category: Admin
  - description: "New changes of a Perforce depot will now be reflected in `master` branch after the initial clone."
    url: https://github.com/sourcegraph/sourcegraph/pull/19718
    category: Admin
---

Sourcegraph 3.27 is now available! For this release, we focused on making Sourcegraph Batch Changes even better and upgraded our minimum supported version of Postgres from 9.6 to 12.

## Batch Changes Updates

[Batch Changes](https://about.sourcegraph.com/batch-changes/) allows you to automate large-scale code changes with a single declarative file. With a simple UI, Batch Changes makes it easy to track and manage all of your changesets from checks to code reviews until each change is merged.
As part of this release you can now define batch change rollout windows allowing you to better control when changes are rolled out, and we added the ability to mark changesets as “archived” when a new batch spec is created.

## Postgres update

We updated the minimum supported version of Postgres from 9.6 to 12. If you are maintaining an external database and your Postgres version is older than Postgres 12, you will need to update your database instance prior to upgrading from Sourcegraph 3.26 to 3.27.
[Read more about why we made this change](https://about.sourcegraph.com/blog/postgres-version-update/).
