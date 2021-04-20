---
title: "Sourcegraph 3.27 release"
publishDate: 2021-04-20T10:00-07:00
description: "Sourcegraph 3.27 is released."
tags: [blog, release]
slug: "release/3.27"
published: true

Sourcegraph 3.27 is now available! For this release, we focused on making Sourcegraph Batch Changes even better and upgraded our minimum supported version of Postgres from 9.6 to 12.

**Batch Changes Updates** 
[Batch Changes](https://about.sourcegraph.com/batch-changes/) allows you to automate large-scale code changes with a single declarative file. With a simple UI, Batch Changes makes it easy to track and manage all of your changesets from checks to code reviews until each change is merged. 
As part of this release you can now define batch change rollout windows allowing you to better control when changes are rolled out, and we added the ability to mark changesets as “archived” when a new batch spec is created. 

**Postgres update**
We updated the minimum supported version of Postgres from 9.6 to 12. If you are maintaining an external database and your Postgres version is older than Postgres 12, you will need to update your database instance prior to upgrading from Sourcegraph 3.26 to 3.27. 
[Read more about why we made this change](https://about.sourcegraph.com/blog/postgres-version-update/). 

changelogItems:
  # Added
  - description: "`count:` now supports \"all\" as value. Queries with `count:all` will return up to 999999 results."
    url: https://github.com/sourcegraph/sourcegraph/pull/19756
    category:
  - description: Credentials for Batch Changes are now validated when adding them.
    url: https://github.com/sourcegraph/sourcegraph/pull/19602
    category: Batch Changes
  - description: "Batch Changes now ignore repositories that contain a `.batchignore` file. [#19877](https://github.com/sourcegraph/sourcegraph/pull/19877) and src-cli#509"
    url: "https://github.com/sourcegraph/src-cli/pull/509"
    category: Batch Changes
  - description: "Side-by-side diff for commit visualization."
    url: https://github.com/sourcegraph/sourcegraph/pull/19553
    category:
  - description: "The site configuration now supports defining batch change rollout windows, which can be used to slow or disable pushing changesets at particular times of day or days of the week. [#19796](https://github.com/sourcegraph/sourcegraph/pull/19796), [#19797](https://github.com/sourcegraph/sourcegraph/pull/19797), and #19951."
    url: https://github.com/sourcegraph/sourcegraph/pull/19951
    category: Batch Changes
# Changed
  - description: "Bumped the minimum supported version of Postgres from `9.6` to `12`. The upgrade procedure is mostly automated for existing deployments, but may require action if using the single-container deployment or an external database. See the upgrade documentation for your deployment type for detailed instructions."
    url: https://docs.sourcegraph.com/admin/updates
    category:
  - description: "Changesets in batch changes will now be marked as archived instead of being detached when a new batch spec that doesn't include the changesets is applied. Once they're archived users can manually detach them in the UI."
    url: https://github.com/sourcegraph/sourcegraph/pull/19527
    category: Batch Changes
  - description: "The default replica count on `sourcegraph-frontend` and `precise-code-intel-worker` for Kubernetes has changed from `1` -\u003e `2`."
    url:
    category:
  - description: Changes to code monitor trigger search queries
    url: https://github.com/sourcegraph/sourcegraph/pull/19680
    category: Search
  - description: "Deprecated the GraphQL `icon` field on `GenericSearchResultInterface`. It will be removed in a future release."
    url: https://github.com/sourcegraph/sourcegraph/pull/20028/files
    category: Search
  - description: "Creating changesets through Batch Changes as a site-admin without configured Batch Changes credentials has been deprecated. Please configure user or global credentials before Sourcegraph 3.29 to not experience any interruptions in changeset creation."
    url: https://github.com/sourcegraph/sourcegraph/pull/20143
    category: Admin
# Fixed
  - description: "A regression caused by search onboarding tour logic to never focus input in the search bar on the homepage. Input now focuses on the homepage if the search tour isn't in effect."
    url: https://github.com/sourcegraph/sourcegraph/pull/19678
    category: Search
  - description: "New changes of a Perforce depot will now be reflected in `master` branch after the initial clone."
    url: https://github.com/sourcegraph/sourcegraph/pull/19718
    category:
  - description: Gitolite and Other type code host connection configuration can be correctly displayed.
    url: https://github.com/sourcegraph/sourcegraph/pull/19976
    category:
  - description: Fixed a regression that caused user and code host limits to be ignored.
    url: https://github.com/sourcegraph/sourcegraph/pull/20089
    category:
---
\* Please [contact Sourcegraph](https://about.sourcegraph.com/contact/sales/) with any licensing questions.
