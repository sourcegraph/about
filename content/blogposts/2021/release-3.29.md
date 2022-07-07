---
title: 'Sourcegraph 3.29 release'
publishDate: 2021-06-23T10:00-07:00
description: 'The Sourcegraph 3.29 release introduces improved search results ranking and includes support for bulk actions with Batch Changes.'
tags: [blog, release]
slug: 'release/3.29'
published: true
changelogItems:
  - description: 'The GraphQL `Site` `SettingsSubject` type now has an `allowSiteSettingsEdits` field to allow clients to determine whether the instance uses the `GLOBAL_SETTINGS_FILE` environment variable.'
    url: https://github.com/sourcegraph/sourcegraph/pull/21827
    category: API
  - description: A new bulk operation to retry many changesets at once has been added to Batch Changes.
    url: https://github.com/sourcegraph/sourcegraph/pull/21173
    category: Batch Changes
  - description: Added featured Sourcegraph extensions query to the GraphQL API, as well as a section in the extension registry to display featured extensions.
    url: https://github.com/sourcegraph/sourcegraph/pull/21665
    category: API
  - description: 'The search page now has a `create insight` button to create search-based insights based on your search query.'
    url: https://github.com/sourcegraph/sourcegraph/pull/21943
    category: Search
  - description: Added support for Terraform syntax highlighting.
    url: https://github.com/sourcegraph/sourcegraph/pull/22040
    category: Search
  - description: A new bulk operation to merge many changesets at once has been added to Batch Changes.
    url: https://github.com/sourcegraph/sourcegraph/pull/21959
    category: Batch Changes
  - description: SSH public keys generated to access code hosts with batch changes now include a comment indicating they originated from Sourcegraph.
    url: https://github.com/sourcegraph/sourcegraph/issues/20523
    category: Batch Changes
  - description: 'The copy query button is now permanently enabled and `experimentalFeatures.copyQueryButton` setting has been deprecated.'
    url: https://github.com/sourcegraph/sourcegraph/pull/21364
    category: Search
  - description: 'Search streaming is now permanently enabled and `experimentalFeatures.searchStreaming` setting has been deprecated.'
    url: https://github.com/sourcegraph/sourcegraph/pull/21522
    category: Search
  - description: 'Sourcegraph will now refuse to start if there are unfinished [out-of-band-migrations](https://docs.sourcegraph.com/admin/migrations) that are deprecated in the current version. See the [upgrade documentation](https://docs.sourcegraph.com/admin/updates) for changes to the upgrade process.'
    url: https://github.com/sourcegraph/sourcegraph/pull/20967
    category: Admin
  - description: 'Stricter validation of structural search queries. The `type:` parameter is not supported for structural searches and returns an appropriate alert.'
    url: https://github.com/sourcegraph/sourcegraph/pull/21487
    category: Search
  - description: Batch changeset specs that are not attached to changesets will no longer prematurely expire before the batch specs that they are associated with.
    url: https://github.com/sourcegraph/sourcegraph/pull/21678
    category: Batch Changes
  - description: 'Correctly handle field aliases in the query (like `r:` versus `repo:`) when used with `contains` predicates.'
    url: https://github.com/sourcegraph/sourcegraph/pull/22105
    category: Repositories
  - description: 'The undocumented `index` filter was removed from search type-ahead suggestions.'
    url: https://github.com/sourcegraph/sourcegraph/issues/18806
    category: Search
  - description: "Code host connection tokens aren't used for creating changesets anymore when the user is site admin and no credential has been specified."
    url: https://github.com/sourcegraph/sourcegraph/issues/16814
    category: Admin
---

Sourcegraph 3.29 is now available! For this release, we introduced search results ranking and added support for bulk actions with Batch Changes.

## Search results ranking

We're making search results more relevant, starting with better prioritization of repos vs. code in your search results. Search results and suggestions are now ranked by descending star count on sourcegraph.com and customer instances (for repos with stars), making it easier to find specific repos. Start searching on sourcegraph.com to experience the new ranking.

## New visual design for the Sourcegraph UI

We are proud to bring you an entirely new visual design for the Sourcegraph UI. The new visual design was developed to help users find references, troubleshoot errors, gain insight, make changes on a massive scale, and read code. Check out our recent blog post to [learn more about the new Sourcegraph UI](/blog/introducing-sourcegraphs-new-ui/).

<Figure 
  src="https://sourcegraphstatic.com/blog/redesign/r_search_results.png" 
  alt="refined search results design screenshot"
/>

## Batch Changes

### New bulk actions: retry and merge (experimental)

Last release we introduced [bulk actions](https://about.sourcegraph.com/blog/release/3.28/#Batch-changes), allowing users to comment on hundreds of changesets in a few clicks. We've added two more bulk actions in this release: retry errored changesets and merge.

Merge is released as an experimental feature. It supports merge commit and squash merge on GitHub and GitLab, and merge commit on Bitbucket. For example, you can now filter all changesets that have passed checks and review, and merge them all in a few clicks. [Read more about bulk operations](https://docs.sourcegraph.com/batch_changes/how-tos/bulk_operations_on_changesets#supported-types-of-bulk-operations).
