---
title: 'Sourcegraph 3.27 release'
publishDate: 2021-04-27T10:00-07:00
description: 'Sourcegraph 3.27 release includes Batch Changes updates, changes to the minimum required version of Postgres, and added a new seach feature.'
tags: [blog, release]
slug: 'release/3.27'
published: true
changelogItems:
  - description: 'Batch Changes now ignore repositories that contain a `.batchignore` file.'
    url: 'https://github.com/sourcegraph/src-cli/pull/509'
    category: Batch Changes
  - description: 'The diff view commit visualization now supports both split and unified views, including hovers, go-to-definition, and find-references.'
    url: https://github.com/sourcegraph/sourcegraph/pull/19553
    category: Application UX
  - description: 'The site configuration now supports defining batch change rollout windows, which can be used to slow or disable pushing changesets at particular times of day or days of the week.'
    url: https://github.com/sourcegraph/sourcegraph/pull/19951
    category: Batch Changes
  - description: 'Bumped the minimum supported version of Postgres from `9.6` to `12`. The upgrade procedure is mostly automated for existing deployments, but may require action if using the single-container deployment or an external database. See the upgrade documentation for your deployment type for detailed instructions.'
    url: https://docs.sourcegraph.com/admin/updates
    category: Admin
  - description: "Changesets in batch changes will now be marked as archived instead of being detached when a new batch spec that doesn't include the changesets is applied. Once they're archived users can manually detach them in the UI."
    url: https://github.com/sourcegraph/sourcegraph/pull/19527
    category: Batch Changes
  - description: 'Creating changesets through Batch Changes as a site-admin without configured Batch Changes credentials has been deprecated. To avoid any interruptions in changeset creation, please configure user or global credentials before Sourcegraph 3.29.'
    url: https://github.com/sourcegraph/sourcegraph/pull/20143
    category: Admin
  - description: 'New changes of a Perforce depot will now be reflected in `master` branch after the initial clone.'
    url: https://github.com/sourcegraph/sourcegraph/pull/19718
    category: Admin
  - description: 'You can now search for repos containing multiple patterns using the built-in `contains` predicate: `repo:contains(...)`, `repo:contains.file(...)`, `repo:contains.content(...)`, and `repo:contains.commit.after(...)`.'
    url: https://github.com/sourcegraph/sourcegraph/issues/18584
    category: Search
  - description: 'User auth data can now be encrypted in the database using the `encryption.keys` config.'
    url: https://docs.sourcegraph.com/admin/encryption
    category: Admin
  - description: 'We now respect the `disableAutoGitUpdates` setting when cloning or fetching repos on demand and during cleanup tasks that may re-clone old repos.'
    url: https://github.com/sourcegraph/sourcegraph/pull/20194
    category: Repositories
---

Sourcegraph 3.27 is now available! For this release, we focused on making Sourcegraph Batch Changes even better, upgraded our minimum supported version of Postgres from 9.6 to 12, and added a new `contains` functionality to search.

## Batch Changes updates

[Batch Changes](https://about.sourcegraph.com/batch-changes/) allows you to automate large-scale code changes with a single declarative file. With a simple UI, Batch Changes makes it easy to track and manage all of your changesets from checks to code reviews until each change is merged.
As part of this release you can now define batch change rollout windows allowing you to better control when changes are rolled out, and we added the ability to mark changesets as “archived” when a new batch spec is created.

## Postgres update

We updated the minimum supported version of Postgres from 9.6 to 12. If you are maintaining an external database and your Postgres version is older than Postgres 12, you will need to update your database instance prior to upgrading from Sourcegraph 3.26 to 3.27.
[Read more about why we made this change](https://about.sourcegraph.com/blog/postgres-version-update/).

## New "contains" functionality

Contains is a new query built-in that enables you to conditionally filter repositories based on the repository contents. For example, you can now search across repositories only if those repositories contain a particular file (like a README), or a particular file with some content (like a CHANGELOG file that includes the word fix).

<div className="container my-4 video-embed embed-responsive embed-responsive-16by9">
    <iframe className="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/hKXoMVzBZ5E?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=0&amp;rel=0" allowFullScreen="" allow="accelerometer; autoPlay; encrypted-media; gyroscope; picture-in-picture"frameBorder="0"></iframe>
</div>
