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
  - description: "Unindexed search now use the index for files that have not changed between the unindexed commit and the indexed commit. The result is faster unindexed search in general. If you are noticing issues you can disable by setting the feature flag `search-hybrid` to false."
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
  - description: "Code Insights: the data series API now provides information about incomplete datapoints during processing"
    url: 
    category: 
  - description: "Added a best-effort migration such that existing Code Insights will display zero results instead of missing points at the start and end of a graph."
    url: https://github.com/sourcegraph/sourcegraph/pull/44928
    category: Admin
  - description: More complete stack traces for Outbound request log
    url: https://github.com/sourcegraph/sourcegraph/pull/45151
    category: 
  - description: A new status message now reports how many repositories have already been indexed for search.
    url: https://github.com/sourcegraph/sourcegraph/pull/45246
    category: Search
  - description: "Search contexts can now be starred (favorited) in the search context management page. Starred search contexts will appear before other contexts in the context dropdown menu next to the search box."
    url: https://github.com/sourcegraph/sourcegraph/pull/45230
    category: Search
  - description: Search contexts now let you set a context as your default. The default will be selected every time you open Sourcegraph and will appear near the top in the context dropdown menu next to the search box.
    url: https://github.com/sourcegraph/sourcegraph/pull/45387
    category: Search
  - description: "[search.largeFiles](https://docs.sourcegraph.com/admin/config/site_config#search-largeFiles) accepts an optional prefix `!` to negate a pattern. The order of the patterns within search.largeFiles is honored such that the last pattern matching overrides preceding patterns. For patterns that begin with a literal `!` prefix with a backslash, for example, `\\!fileNameStartsWithExcl!.txt`. Previously indexed files that become excluded due to this change will remain in the index until the next reindex"
    url: https://github.com/sourcegraph/sourcegraph/pull/45318
    category: Search
  - description: "[Webhooks](https://docs.sourcegraph.com/admin/config/webhooks) have been overhauled completely and can now be found under **Site admin \u003e Repositories \u003e Incoming webhooks**. Webhooks that were added via code host configuration are deprecated and will be removed in 4.6.0."
    url: "https://docs.sourcegraph.com/admin/config/webhooks#deprecation-notice"
    category: Admin
  - description: "Added support for receiving webhook `push` events from GitHub which will trigger Sourcegraph to fetch the latest commit rather than relying on polling."
    url: 
    category: 
# Changed
  - description: "Batch Change: When one or more changesets are selected, we now display all bulk operations but disable the ones that aren't applicable to the changesets."
    url: https://github.com/sourcegraph/sourcegraph/pull/44617
    category: Batch Changes
  - description: "Gitserver's repository purge worker now runs on a regular interval instead of just on weekends, configurable by the `repoPurgeWorker` site configuration."
    url: https://github.com/sourcegraph/sourcegraph/pull/44753
    category: Repositories
  - description: "Editing the presentation metadata (title, line color, line label) or the default filters of a scoped Code Insight will no longer trigger insight recalculation. [#44769](https://github.com/sourcegraph/sourcegraph/pull/44769),"
    url: https://github.com/sourcegraph/sourcegraph/pull/44797
    category: 
  - description: "Indexed Search's `memory_map_areas_percentage_used` alert has been modified to alert earlier than it used to. It now issues a warning at 60% (previously 70%) and issues a critical alert at 80% (previously 90%)."
    url: 
    category: Search
  - description: Saving a new view of a scoped Code Insight will no longer trigger insight recalculation.
    url: https://github.com/sourcegraph/sourcegraph/pull/44679
    category: 
# Fixed
  - description: "The Code Insights commit indexer no longer errors when fetching commits from empty repositories when sub-repo permissions are enabled."
    url: https://github.com/sourcegraph/sourcegraph/pull/44558
    category: Repositories
  - description: Unintended newline characters that could appear in diff view rendering have been fixed.
    url: https://github.com/sourcegraph/sourcegraph/pull/44805
    category: 
  - description: "Signing out doesn't immediately log the user back in when there's only one OAuth provider enabled. It now redirects the user to the Sourcegraph login page."
    url: https://github.com/sourcegraph/sourcegraph/pull/44803
    category: 
  - description: An issue causing certain kinds of queries to behave inconsistently in Code Insights.
    url: https://github.com/sourcegraph/sourcegraph/pull/44917
    category: 
  - description: "When the setting `batchChanges.enforceForks` is enabled, Batch Changes will now prefix the name of the fork repo it creates with the original repo's namespace name in order to prevent repo name collisions. [#43681](https://github.com/sourcegraph/sourcegraph/pull/43681), [#44458](https://github.com/sourcegraph/sourcegraph/pull/44458), [#44548](https://github.com/sourcegraph/sourcegraph/pull/44548),"
    url: https://github.com/sourcegraph/sourcegraph/pull/44924
    category: Batch Changes
  - description: "Code Insights: fixed an issue where certain queries matching sequential whitespace characters would overcount."
    url: https://github.com/sourcegraph/sourcegraph/pull/44969
    category: 
  - description: "GitHub fine-grained Personal Access Tokens can now clone repositories correctly, but are not yet officially supported."
    url: https://github.com/sourcegraph/sourcegraph/pull/45137
    category: Repositories
  - description: "Detect-and-track Code Insights will now return data for repositories without sub-repo permissions even when sub-repo permissions are enabled on the instance."
    url: https://github.com/sourcegraph/sourcegraph/pull/45361
    category: Repositories
# Removed
  - description: "Removed legacy GraphQL field `dirtyMetadata` on an insight series. `insightViewDebug` can be used as an alternative."
    url: https://github.com/sourcegraph/sourcegraph/pull/44416
    category: API
  - description: "Removed `search.index.enabled` site configuration setting. Search indexing is now always enabled."
    url: 
    category: Search
  - description: "Removed the experimental feature setting `showSearchContextManagement`. The search context management page is now available to all users with access to search contexts."
    url: https://github.com/sourcegraph/sourcegraph/pull/45230
    category: Search
  - description: "Removed the experimental feature setting `showComputeComponent`. Any notebooks that made use of the compute component will no longer render the block. The block will be deleted from the databse the next time a notebook that uses it is saved."
    url: https://github.com/sourcegraph/sourcegraph/pull/45360
    category: 
---

Sourcegraph 4.3 is here! This month...

Here's what's new in Sourcegraph 4.3:

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
<Badge link="/code-search" text="Code Search" color="cerise" size="small" />

#### Webhooks for Repository and Permissions syncing 

Sourcegraph predominantly uses pull-based models for repository and permissions updates from the code host and webhooks have been hidden away in our external service config. Polling code hosts to check for changes can often create significant strain on code hosts, and syncs take longer as the Sourcegraph instance grows. In 4.3, webhooks have received a significant update making it easier for admins to configure webhooks for repository and permissions syncing including a new UI for creating, updating and deleting webhooks and improved handling of permissions webhooks. What this means is that your Sourcegraph instance will mirror your code host changes much more closely, ensuring that users always see the latest versions of what they need to see. For now, our webhook updates are limited to GitHub customers.
