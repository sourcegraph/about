---
title: "Sourcegraph 4.3 release"
publishDate: 2022-12-15T10:00-07:00
description: "Sourcegraph 4.3 introduces..."
tags: [blog, release]
slug: "release/4.3"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.2/sourcegraph-4-3-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.2/sourcegraph-4-3-hero.png
changelogItems:
# Added
  - description: "A \"copy path\" button has been added to file content, path, and symbol search results on hover or focus, next to the file path. The button copies the relative path of the file in the repo, in the same way as the \"copy path\" button in the file and repo pages."
    url: https://github.com/sourcegraph/sourcegraph/pull/42721
    category: Search
  - description: "Unindexed search now uses the index for files that have not changed between the unindexed commit and the indexed commit. The result is faster unindexed search in general. If you are noticing issues you can disable by setting the feature flag `search-hybrid` to false."
    url: https://github.com/sourcegraph/sourcegraph/issues/37112
    category: Search
  - description: "The number of commits listed in the History tab can now be customized for all users by site admins under Configuration -\u003e Global Settings from the site admin page by using the config `history.defaultPageSize`. Individual users may also set `history.defaultPagesize` from their user settings page to override the value set under the Global Settings."
    url: https://github.com/sourcegraph/sourcegraph/pull/44651
    category: Admin
  - description: "Batch Changes: Mounted files can be accessed via the UI on the executions page."
    url: https://github.com/sourcegraph/sourcegraph/pull/43180
    category: Batch Changes
  - description: "Added \"Outbound request log\" feature for site admins"
    url: https://github.com/sourcegraph/sourcegraph/pull/44286
    category: Admin
  - description: "[search.largeFiles](https://docs.sourcegraph.com/admin/config/site_config#search-largeFiles) accepts an optional prefix `!` to negate a pattern. The order of the patterns within search.largeFiles is honored such that the last pattern matching overrides preceding patterns. For patterns that begin with a literal `!` prefix with a backslash, for example, `\\!fileNameStartsWithExcl!.txt`. Previously indexed files that become excluded due to this change will remain in the index until the next reindex"
    url: https://github.com/sourcegraph/sourcegraph/pull/45318
    category: Search
  - description: "When one or more changesets are selected, we now display all bulk operations but disable the ones that aren't applicable to the changesets."
    url: https://github.com/sourcegraph/sourcegraph/pull/44617
    category: Batch Changes
  - description: "When the setting `batchChanges.enforceForks` is enabled, Batch Changes will now prefix the name of the fork repo it creates with the original repo's namespace name in order to prevent repo name collisions. [#43681](https://github.com/sourcegraph/sourcegraph/pull/43681), [#44458](https://github.com/sourcegraph/sourcegraph/pull/44458), [#44548](https://github.com/sourcegraph/sourcegraph/pull/44548),"
    url: https://github.com/sourcegraph/sourcegraph/pull/44924
    category: Batch Changes
  - description: "Removed legacy GraphQL field `dirtyMetadata` on an insight series. `insightViewDebug` can be used as an alternative."
    url: https://github.com/sourcegraph/sourcegraph/pull/44416
    category: API
  - description: "Removed the experimental feature setting `showComputeComponent`. Any notebooks that used the compute component will no longer render the block. The block will be deleted from the database the next time a notebook that uses it is saved."
    url: https://github.com/sourcegraph/sourcegraph/pull/45360
    category: Notebooks
---

Sourcegraph 4.3 is here! This month...

Here's what's new in Sourcegraph 4.3:

<Badge link="/code-search" text="Code Search" color="cerise" size="small" />

#### Instantly navigate repositories, files, and symbols by name with fuzzy finder 

[Fuzzy finder](https://docs.sourcegraph.com/code_search/explanations/features) helps you quickly navigate to a repository, symbol or file. To open the fuzzy finder, press 'Cmd+K' (macOS) or "Ctrl+K' (Linux/Windows) from any page, and each tab has a dedicated shortcut:

- Repos: Cmd+I (macOS), Ctrl+K (Linux/Windows)
- Symbols: Cmd+O (macOS), Cmd+Shift+O (macOS Safari), Ctrl+O (Linux/Windows)
- Files: Cmd+P (macOS), Ctrl+P (Linux/Windows)

Fuzzy finder is an experimental feature, and we welcome your feedback and input.

<Video 
  source={{
    webm: '/blog/release-post/4.3/Fuzzy%20finder',
    mp4: '/blog/release-post/4.3/Fuzzy%20finder'
  }}
  loop={true}
  title="Fuzzy Finder"
  caption="New, powerful fuzzy finder for searching repositories, symbols, and files by name."
/>
<a href="https://docs.sourcegraph.com/code_search/explanations/features" className="tw-not-italic tw-flex tw-items-center tw-mb-sm">Docs<OpenInNewIcon className="tw-ml-xxs" size={18} /></a>

<br />
<Badge link="/code-search" text="Code Search" color="cerise" size="small" />

#### Quickly define the scope of your search query with search context favorites and default contexts

[Search contexts](https://docs.sourcegraph.com/code_search/how-to/search_contexts) help you search the code you care about by representing a set of repositories that will be targeted by a search query. For example, you can narrow the scope of your search query by creating a context for specific services or  all the code your team owns. Now, you can set your most used or helpful search contexts as favorites using the star icon, and your favorite contexts will be listed at the top of your saved contexts for faster access. Additionally, you can customize the default search context for any new search query, helping to ensure the scope of each search query the most relevant to your work. Your default search context is clearly marked in the search context dropdown, and it can be easily updated using the search context management pages and your individual search context page. 

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.3/Search%20Contexts.png alt="Search Contexts">

<a href="https://docs.sourcegraph.com/code_search/how-to/search_contexts)" className="tw-not-italic tw-flex tw-items-center tw-mb-sm">Docs<OpenInNewIcon className="tw-ml-xxs" size={18} /></a>

<br />
<Badge link="https://docs.sourcegraph.com/admin/config/webhooks" text="Admin" color="violet" size="small" />

#### Webhooks for Repository and Permissions syncing 

Sourcegraph predominantly uses pull-based models for repository and permissions updates from the code host and webhooks have been hidden away in our external service config. Polling code hosts to check for changes can often create significant strain on code hosts, and syncs take longer as the Sourcegraph instance grows. In 4.3, webhooks have received a significant update making it easier for admins to configure webhooks for repository and permissions syncing including a new UI for creating, updating and deleting webhooks and improved handling of permissions webhooks. What this means is that your Sourcegraph instance will mirror your code host changes much more closely, ensuring that users always see the latest versions of what they need to see. For now, our webhook updates are limited to GitHub customers.

<a href="https://docs.sourcegraph.com/admin/config/webhooks" className="tw-not-italic tw-flex tw-items-center tw-mb-sm">Docs<OpenInNewIcon className="tw-ml-xxs" size={18} /></a>

<br />
<Badge text="Code Insights" link="/code-insights" color="green" size="small" />

#### Code Insights are faster and even more reliable

[Code Insights](https://docs.sourcegraph.com/code_insights) turns your codebase into a database, so you can track migrations, version spread, tooling, and any other custom metric from the source of truth – the code – directly. We made significant improvements to the backfiller that populates your data, making your insights faster and more reliable, including: 

- Faster calculation times thanks to reduced contention in the work queue from separate insights
- Graceful error handling to surface information to the user if there are any incomplete data points
- Faster insight creation with more efficient background processing
- Improved visibility into the state of background processes for easier troubleshooting and problem solving

<a href="https://docs.sourcegraph.com/code_insights" className="tw-not-italic tw-flex tw-items-center tw-mb-sm">Docs<OpenInNewIcon className="tw-ml-xxs" size={18} /></a>