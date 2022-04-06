---
title: "Sourcegraph 3.23 release"
publishDate: 2020-12-20T10:00-07:00
description: "Sourcegraph 3.23 is released."
tags: [blog, release]
slug: "release/3.23"
published: true
changelogItems:
  - description: "Various additions to syntax highlighting and hover tooltips in the search query bar (e.g., regular expressions). Can be disabled with `{ \"experimentalFeatures\": { \"enableSmartQuery\": false } }` in case of unlikely adverse effects."
    url: https://github.com/sourcegraph/sourcegraph/pull/16742
    category: Search
  - description: "Experimental: `transformChanges` in campaign specs is now available as a feature preview to allow users to create multiple changesets in a single repository."
    url: https://docs.sourcegraph.com/campaigns/references/campaign_spec_yaml_reference#transformchanges
    category: Campaigns
  - description: "Extensions can now add decorations to files on the sidebar tree view and tree page through the experimental `FileDecoration` API."
    url: https://docs.sourcegraph.com/extensions/authoring/tutorials/file_decorations
    category: Extensions
  - description: "Search queries may now scope subexpressions across repositories and files, and also allow greater freedom for combining search filters."
    url: https://docs.sourcegraph.com/code_search/tutorials/search_subexpressions
    category: Search
  - description: The total size of all Git repositories and the total lines of code for indexed branches are now displayed in the site admin overview.
    url: https://github.com/sourcegraph/sourcegraph/issues/15125
    category: Admin
  - description: Extensions can now easily query the Sourcegraph GraphQL API through a dedicated API method.
    url: https://github.com/sourcegraph/sourcegraph/pull/15566
    category: API
  - description: "Licensing is now enforced for campaigns: creating a campaign with more than five changesets requires a valid license*."
    url: https://github.com/sourcegraph/sourcegraph/issues/15715
    category: Campaigns
---
