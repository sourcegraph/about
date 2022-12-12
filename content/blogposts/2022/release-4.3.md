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
  - description: 
    url: 
    category: Search
  - description: 
    url: 
    category: Search
---

Sourcegraph 4.3 is here! This month...

Here's what's new in Sourcegraph 4.3:

#### Instantly navigate repositories, files, and symbols by name with fuzzy finder 

[Fuzzy finder](https://docs.sourcegraph.com/code_search/explanations/features) helps you quickly navigate to a repository, symbole or file. To open the fuzzy finder, press 'Cmd+K' (macOS) or "Ctrl+K' (Linux/Windows) from any page, and each tab has a dedicated shortcut:

- Repos: Cmd+I (macOS), Ctrl+K (Linux/Windows)
- Symbols: Cmd+O (macOS), Cmd+Shift+O (macOS Safari), Ctrl+O (Linux/Windows)
- Files: Cmd+P (macOS), Ctrl+P (Linux/Windows)

Fuzzy finder is an experiemental feature, and we welcome your feedback and input. 

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

[Search contexts](https://docs.sourcegraph.com/code_search/how-to/search_contexts) help you search the code you care about by representing a set of rpositories that will be targed by a search query. For example, you can narrow the scope of your seach query by creating a context for specific services or  all the code your team owns. Now, you can set your most used or helpful search contexts as favorites using the star icon, and your favorite contexts will be listed at the top of your saved contexts for faster access. Additionaly, you can customize the default search context for any new search query, helping to ensure the scope of each search query the most relevant to your work. Your default search context is clearly marked in the search contex dropdown, and it can be easily updated using the seach context management pages and your individual search context page. 

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.3/Search%20Contexts.png alt="Search Contexts">

<a href="https://docs.sourcegraph.com/code_search/how-to/search_contexts)" className="tw-not-italic tw-flex tw-items-center tw-mb-sm">Docs<OpenInNewIcon className="tw-ml-xxs" size={18} /></a>

<br />
<Badge link="/code-search" text="Code Search" color="cerise" size="small" />

#### Webhooks for Repository and Permissions syncing 

Sourcegraph predominatntly uses pull-based models for repository and permissions updates from the code host and webhooks have been hidden away in our external service config. But this can often create significant strain on code hosts and mean delays between syncs. In 4.3, webhooks have received a significant update making it easier for admins to configure webhooks for repository and permissions syncing including a new UI for creating, updating and deleting webhooks and improved handling of permissions webhooks. For now, our webhook updates are limited to GitHub customers. 
