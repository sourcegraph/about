---
title: "Sourcegraph 3.23 release"
publishDate: 2020-12-20T10:00-07:00
description: "Sourcegraph 3.23 is released."
tags: [blog, release]
slug: "release/3.23"
published: true
changelogItems:
  - description: "Password reset link expiration can be customized via `auth.passwordResetLinkExpiry` in the site config."
    url: https://github.com/sourcegraph/sourcegraph/issues/13999
    category: Admin
  - description: "Campaign steps may now include environment variables from outside of the campaign spec using [array syntax](http://docs.sourcegraph.com/campaigns/references/campaign_spec_yaml_reference#environment-array)."
    url: https://github.com/sourcegraph/sourcegraph/issues/15822
    category: Campaigns
  - description: The total size of all Git repositories and the lines of code for indexed branches are displayed in the site admin overview.
    url: https://github.com/sourcegraph/sourcegraph/issues/15125
    category: Admin
  - description: "Extensions can now add decorations to files on the sidebar tree view and tree page through the experimental `FileDecoration` API."
    url: https://github.com/sourcegraph/sourcegraph/pull/15833
    category:
  - description: Extensions can now easily query the Sourcegraph GraphQL API through a dedicated API method.
    url: https://github.com/sourcegraph/sourcegraph/pull/15566
    category: API
  - description: Individual changesets can now be downloaded as a diff.
    url: https://github.com/sourcegraph/sourcegraph/issues/16098
    category:
  - description: The campaigns preview page is much more detailed now, especially when updating existing campaigns.
    url: https://github.com/sourcegraph/sourcegraph/pull/16240
    category: Campaigns
  - description: When a newer version of a campaign spec is uploaded, a message is now displayed when viewing the campaign or an outdated campaign spec.
    url: https://github.com/sourcegraph/sourcegraph/issues/14532
    category: Campaigns
  - description: Changesets in a campaign can now be searched by title and repository name.
    url: https://github.com/sourcegraph/sourcegraph/issues/15781
    category: Search
  - description: "Experimental: [`transformChanges` in campaign specs](https://docs.sourcegraph.com/campaigns/references/campaign_spec_yaml_reference#transformchanges) is now available as a feature preview to allow users to create multiple changesets in a single repository."
    url: https://github.com/sourcegraph/sourcegraph/pull/16235
    category: Campaigns
  - description: "The `gitUpdateInterval` site setting was added to allow custom git update intervals based on repository names."
    url: https://github.com/sourcegraph/sourcegraph/pull/16765
    category: Repositories
  - description: "Various additions to syntax highlighting and hover tooltips in the search query bar (e.g., regular expressions). Can be disabled with `{ \"experimentalFeatures\": { \"enableSmartQuery\": false } }` in case of unlikely adverse effects."
    url: https://github.com/sourcegraph/sourcegraph/pull/16742
    category: Search
  - description: "Search queries may now scope subexpressions across repositories and files, and also allow greater freedom for combining search filters. See the updated documentation on [search subexpressions](https://docs.sourcegraph.com/code_search/tutorials/search_subexpressions) to learn more."
    url: https://github.com/sourcegraph/sourcegraph/pull/16866
    category: Search
# Changed
  - description: "Search indexer tuned to wait longer before assuming a deadlock has occurred. Previously if the indexserver had many cores (40+) and indexed a monorepo it could give up."
    url: https://github.com/sourcegraph/sourcegraph/pull/16110
    category: Search
  - description: The total size of all Git repositories and the lines of code for indexed branches will be sent back in pings as part of critical telemetry.
    url: https://github.com/sourcegraph/sourcegraph/pull/16188
    category: Repositories
  - description: "The `gitserver` container now has a dependency on Postgres. This does not require any additional configuration unless access to Postgres requires a sidecar proxy / firewall rules."
    url: https://github.com/sourcegraph/sourcegraph/pull/16121
    category:
  - description: "Licensing is now enforced for campaigns: creating a campaign with more than five changesets requires a valid license. Please [contact Sourcegraph with any licensing questions](https://about.sourcegraph.com/contact/sales/)."
    url: https://github.com/sourcegraph/sourcegraph/issues/15715
    category: Campaigns
# Fixed
  - description: "Syntax highlighting on files with mixed extension case (e.g. `.CPP` vs `.cpp`) now works as expected."
    url: https://github.com/sourcegraph/sourcegraph/issues/11327
    category:
  - description: After applying a campaign, some GitLab MRs might have had outdated state shown in the UI until the next sync with the code host.
    url: https://github.com/sourcegraph/sourcegraph/pull/16100
    category: Campaigns
  - description: The web app no longer sends stale text document content to extensions.
    url: https://github.com/sourcegraph/sourcegraph/issues/14965
    category:
  - description: The blob viewer now supports multiple decorations per line as intended.
    url: https://github.com/sourcegraph/sourcegraph/issues/15063
    category:
  - description: Repositories with plus signs in their name can now be navigated to as expected.
    url: https://github.com/sourcegraph/sourcegraph/issues/15079
    category: Repositories
---
