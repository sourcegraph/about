---
title: 'Sourcegraph 3.26 release'
publishDate: 2021-03-20T10:00-07:00
description: 'Sourcegraph 3.26 is released.'
tags: [blog, release]
slug: 'release/3.26'
published: true
changelogItems:
  - description: 'Batch Changes is now generally available. Check out the blog post to learn how Batch Changes can help you automate code changes across all of your repositories.'
    url: https://about.sourcegraph.com/blog/introducing-batch-changes/
    category: Batch Changes
  - description: 'Campaigns has been renamed to Batch Changes. Backward compatibility has been preserved for folks using it in previous releases. See #18771 for details.'
    url: https://github.com/sourcegraph/sourcegraph/issues/18771
    category: Batch Changes
  - description: 'Upcoming requirement: Starting in the next release, Sourcegraph 3.27, Postgres 12 will be considered a minimum requirement for Sourcegraph to run.'
    url: https://docs.sourcegraph.com/admin/postgres
    category: Admin
  - description: 'You can now customize the location of your code insights using new boolean settings. Options include the home page, insights page, and directory pages.'
    url: https://github.com/sourcegraph/sourcegraph/pull/18979
    category: Code Insights
  - description: 'Code monitoring is now available by default for all Enterprise customers.'
    url: https://docs.sourcegraph.com/code_monitoring
    category: Code Monitoring
  - description: 'Sourcegraph is now built with Go 1.16.'
    url: https://github.com/sourcegraph/sourcegraph/pull/18447
    category: Admin
  - description: 'Syntax highlighting added for 9 additional languages: Elixir, Elm, REG, Julia, Move, Nix, Puppet, VimL, and Coq.'
    url: https://github.com/sourcegraph/sourcegraph/pull/19282
    category: Syntax
  - description: 'Code intelligence results now have clearer precision indicators (i.e. semantic vs. search-based) in both the hover overlay and definition and references panel.'
    url: https://github.com/sourcegraph/sourcegraph/pull/18843
    category: Code Intelligence
  - description: Searches are streamed into Sourcegraph by default.
    url: https://github.com/sourcegraph/sourcegraph/pull/19300
    category: Search
  - description: 'New query field `select` enables returning only results of the desired type.'
    url: https://docs.sourcegraph.com/code_search/reference/language#select
    category: Search
---
