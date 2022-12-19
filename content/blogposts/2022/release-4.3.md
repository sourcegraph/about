---
title: "Sourcegraph 4.3 release"
publishDate: 2022-12-16T10:00-07:00
description: "Sourcegraph 4.3 introduces the fuzzy finder, search context favorites, webhooks for repository syncing, and faster and more reliable code insights."
tags: [blog, release]
slug: "release/4.3"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.3/sourcegraph-4-3-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.3/sourcegraph-4-3-hero.png
changelogItems:
  - description: "A \"copy path\" button has been added to file content, path, and symbol search results on hover or focus, next to the file path. The button copies the relative path of the file in the repo in the same way as the \"copy path\" button in the file and repo pages."
    url: https://github.com/sourcegraph/sourcegraph/pull/42721
    category: Search
  - description: "Unindexed search now uses the index for files that have not changed between the unindexed commit and the indexed commit. The result is faster unindexed search in general. If you are noticing issues you can disable by setting the feature flag `search-hybrid` to false."
    url: https://github.com/sourcegraph/sourcegraph/issues/37112
    category: Search
  - description: "Mounted files in batch changes can now be viewed via the UI on the executions page."
    url: https://github.com/sourcegraph/sourcegraph/pull/43180
    category: Batch Changes
  - description: "When the setting `batchChanges.enforceForks` is enabled, Batch Changes will now prefix the name of the fork repo it creates with the original repo's namespace in order to prevent repo name collisions."
    url: https://docs.sourcegraph.com/admin/config/batch_changes#forks
    category: Batch Changes
  - description: "Removed the experimental feature setting `showComputeComponent`. Any notebooks that used the compute component will no longer render the block. The block will be deleted from the database the next time a notebook that uses it is saved."
    url: https://github.com/sourcegraph/sourcegraph/pull/45360
    category: Notebooks
  - description: "We'll be making a breaking change to the search query syntax with the upcoming 4.5 release in Februrary. We will be deprecating the fields `repohasfile` and `repohascommitafter` in favor of `repo:has.path()`."
    url: https://github.com/sourcegraph/sourcegraph/issues/45625
    category: Code search
---

<Badge link="/code-search" text="Code Search" color="cerise" size="small" />

#### Instantly navigate repositories, files, and symbols by name with fuzzy finder 

[Fuzzy finder](https://docs.sourcegraph.com/code_search/explanations/features) helps you quickly navigate to a repository, symbol, or file. To open the fuzzy finder, press 'Cmd+K' (macOS) or 'Ctrl+K' (Linux/Windows) from any page, and each tab has a dedicated shortcut:

- Repos: Cmd+I (macOS), Ctrl+I (Linux/Windows)
- Symbols: Cmd+O (macOS), Cmd+Shift+O (macOS Safari), Ctrl+O (Linux/Windows)
- Files: Cmd+P (macOS), Ctrl+P (Linux/Windows)

Fuzzy finder is an experimental feature, and we welcome your feedback and input. You can [tweet at us](https://twitter.com/sourcegraph) or [send us an email](mailto:feedback@sourcegraph.com).

<video controls playsinline title="Fuzzy Finder" caption="New, powerful fuzzy finder for searching repositories, symbols, and files by name.">
  <source src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.3/Fuzzy-finder.webm" type="video/webm" />
  <source src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.3/Fuzzy-finder.mp4" type="video/mp4" />
</video>
<a href="https://docs.sourcegraph.com/code_search/explanations/features" className="tw-not-italic tw-flex tw-items-center tw-mb-sm">Docs<OpenInNewIcon className="tw-ml-xxs" size={18} /></a>

<br />
<Badge link="/code-search" text="Code Search" color="cerise" size="small" />

#### Quickly define the scope of your search query with search context favorites and default contexts

[Search contexts](https://docs.sourcegraph.com/code_search/how-to/search_contexts) help you search the code you care about by representing a set of repositories that will be targeted by a search query. For example, you can narrow the scope of your search query by creating a context for specific services or  all the code your team owns. Now you can set your most used or helpful search contexts as favorites using the star icon, and your favorite contexts will be listed at the top of your saved contexts for faster access. You can also customize the default search context for any new search query, helping to ensure the scope of each search query the most relevant to your work. Your default search context is clearly marked in the search context dropdown, and it can be easily updated using the search context management pages and your individual search context page. 

<div className="tw-mb-sm">
  <Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.3/Search%20Contexts.png"
    alt="Search Contexts"
    caption=""
  />
</div>

<a href="https://docs.sourcegraph.com/code_search/how-to/search_contexts" className="tw-not-italic tw-flex tw-items-center tw-mb-sm">Docs<OpenInNewIcon className="tw-ml-xxs" size={18} /></a>

<br />
<Badge text="Code Insights" link="/code-insights" color="green" size="small" />

#### Insights are faster and even more reliable

[Code Insights](https://docs.sourcegraph.com/code_insights) turns your codebase into a database, so you can track migrations, version spread, tooling, and any other custom metric from the source of truth—the code—directly. We made significant improvements to the backfiller that populates your data, making your insights faster and more reliable, including: 

- Faster calculation times thanks to reduced contention in the work queue from separate insights.
- Graceful error handling to surface information to the user if there are any incomplete data points.
- Faster insight creation with more efficient background processing.
- Improved visibility into the state of background processes for easier troubleshooting and problem solving.

<a href="https://docs.sourcegraph.com/code_insights" className="tw-not-italic tw-flex tw-items-center tw-mb-sm">Docs<OpenInNewIcon className="tw-ml-xxs" size={18} /></a>

<br />
<Badge link="https://docs.sourcegraph.com/admin/config/webhooks" text="Admin" color="violet" size="small" />

#### Webhooks for repository and permissions syncing 

Sourcegraph predominantly uses pull-based models for repository and permissions updates from the code host, and webhooks have been hidden away in our external service config. Polling code hosts to check for changes can often create significant strain on code hosts, and syncs take longer as the Sourcegraph instance grows.

In 4.3, webhooks have received a significant update making it easier for admins to configure webhooks for repository and permissions syncing. We're introducing a new UI for creating, updating, and deleting webhooks, and there is now improved handling of permissions webhooks. As a result, your Sourcegraph instance will mirror your code host changes much more closely, ensuring that users always see the latest versions of what they need to see. These webhook updates are currently limited to the GitHub code host. See [the docs](https://docs.sourcegraph.com/admin/config/webhooks) for instructions on configuring new webhooks.

<a href="https://docs.sourcegraph.com/admin/config/webhooks" className="tw-not-italic tw-flex tw-items-center tw-mb-sm">Docs<OpenInNewIcon className="tw-ml-xxs" size={18} /></a>

<br />
<Badge link="https://docs.sourcegraph.com/admin/config/webhooks" text="Admin" color="violet" size="small" />

#### Inspect all outbound requests from your Sourcegraph instance

Sourcegraph admins want to understand how their instance is interacting with other systems, especially when debugging. Previously, it was difficult to reliably see all of the outbound requests generated by a Sourcegraph instance since it required manually finding and digging into logs. 

We've introduced a new page in the web UI where instance admins can see all outbound requests generated by an instance. This makes it easy to quickly see how Sourcegraph is interacting with other systems, such as code hosts, from the UI. Debugging code host connections is now much faster. This feature is off by default, but can be enabled in site config. See the docs for more information.

<a href="https://docs.sourcegraph.com/admin/observability/outbound-request-log" className="tw-not-italic tw-flex tw-items-center tw-mb-sm">Docs<OpenInNewIcon className="tw-ml-xxs" size={18} /></a>
