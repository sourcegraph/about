---
title: "Sourcegraph 5.0"
publishDate: 2023-03-23T10:00-07:00
description: Announcing Sourcegraph 5.0. The latest release includes 20+ updates, including updates to Sourcegraph's sc.
tags: [blog, release]
slug: "release/5.0"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/5.0/sourcegraph-5-0-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/5.0/sourcegraph-5-0-hero.png
---

Sourcegraph 5.0 includes more than 20 updates and new features. 5.0 continues to build on Sourcegraph as a code intellingence platform while also improving the speed and scale of Sourcegraph's core features.

In addition to the new features including in 5.0, today we are also releasing [the Sourcegraph app](about.sourcegraph.com/app). The app is a super-fast, lightweight version of Sourcegraph that can be downloaded and installed locally in minutes. It's the best way for new users to get started with Sourcegraph's free tier and run it on their local machine alongside their IDE.

Read on to discover everything included in Sourcegraph 5.0.
<br/>

<Badge link="/own" text="Code Search" color="green" size="small" />
#### Sourcegraph Own preview

Sourcegraph Own manages code ownership for your entire codebase across every repository and code host. React to incidents faster and increase productivity by making it easy to find who owns any code quickly.

We are launching a preview of Sourcegraph Own as an experimental feature and will iterate over the coming months to deliver our full roadmap vision to every customer. [Read more in the full announcement for Sourcegraph Own](about.sourcegraph.com/blog/inroducing-sourcegraph-own).

<a href="" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>

<br/>


<Badge link="/code-search" text="Code Search" color="cerise" size="small" />
#### Intelligent search ranking

Previously, Sourcegraph ordered search results in a simple way that could make it hard to find the most relevant files. In version 4.6, we're releasing two significant improvements to search ranking:

- Search results are no longer grouped by repository. Instead, we return the most relevant files first. This helps prevent users from requiring workarounds to find what they’re looking for, for example updating the search to exclude certain repositories.
- Search now incorporates a "file importance" score to help boost high quality, commonly-used files. This score is based on the code dependency graph, and is only available when precise code intelligence is enabled.

These improvements are being released together as a limited beta. 

<a href="" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>

<br/>

<Badge link="/code-search" text="Code Search" color="cerise" size="small" />
#### Improved code exploration experience

5.0 includes a number of improvements to the code exploration experience.For the March Starship we’ve made a bunch of exciting code exploration experience improvements. 

First and foremost, we've shipped the CodeMirror editor as the default blob viewer. This new editor is much more efficient with large files, making it easier and faster than ever to explore code. It also has great extensibility potential enabling us to bring more IDE-like code exploration features in future.

We've also enhanced the blob view by adding the keyboard navigation. This means users can move around the codebase quickly and efficiently, without ever having to take your hands off the keyboard. We’ve also added keyboard shortcuts for switching between the code editor, files, and symbols trees (behind the feature flag for now).

We're shipping new accessible files and symbols trees with drastically improved accessibility and slick browsing experience.

We've also made a number of improvements to the repo and directory pages. For example, we're now rendering the README file if there is one in the directory, so you can get a quick overview of what's inside. We've also added a linear file browser, which shows diff stats over the past month, so you can quickly see what's changed recently. And, we're now showing recent commits and contributors, so you can get a sense of who's been working on the codebase.

Finally, we've made some improvements to the git blame decorations. We've improved the design, and now show the file in the previous revision. And where possible, we're linking to GitHub issues and pull requests, so you can quickly jump to relevant discussions.

All of these improvements add up to a more streamlined, efficient, and powerful code exploration experience. We're excited to see how they'll help our users better understand and work with the codebase!

<Video 
  source={{
    webm: 'blog/keyboard-nav',
    mp4: 'blog/keyboard-nav'
  }}
  loop={true}
  title="New keyboard navigation experience in Sourcegraph"
/><br/>

<Badge link="/code-search" text="Code Search" color="cerise" size="small" />
#### A comnpletely re-imagined search input

The search input has been redesigned to greatly improve usability. New contextual suggestions help users learn the Sourcegraph query language as they search. These powerful suggestions react to the user’s current query to suggest related filters. How suggestions are displayed has been unified across contexts and filters, and the history mode has been integrated directly in input. Lastly, improved and expanded keyboard shortcuts also make navigation much easier.

<div className="mb-sm">
  <Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/5.0/reimagined-search-input.png"
    alt="The new search UI"
    catpion="A re-imagined search input."
  />
</div>

<Badge link="/code-search" text="Code Intelligence" color="cerise" size="small" />

#### Improved auto-indexing setup experience

We've made significant improvements to Sourcegraph's auto-indexing setup experience to make it easier for users to enable precise code intelligence. Previously, the configuration options were somewhat opaque and could be intimidating for users to configure, even for engineers at Sourcegraph.

In the 5.0 release, we've redesigned the auto-indexing configuration pages to be more intuitive and self-documenting. We've added helpful descriptions and visualizations to make the options and their impacts more understandable. We've also added new dashboards so users can monitor the code intelligence coverage for their repositories and instances:

- Repository code intelligence coverage dashboard: See the coverage status for a specific repository, including which files/directories are indexed and which are pending indexing. Easily trigger re-indexing of specific paths or the entire repository.
- Instance code intelligence coverage dashboard (for site administrators): Get an overview of indexing coverage across all repositories in the instance. See repositories with low coverage and trigger indexing jobs to improve coverage.

Additionally, we've added more "code intelligence health" indicators to the Sourcegraph UI so users can quickly see if their code intelligence is up-to-date or if there are any issues they can address.

These improvements make it easier to enable precise code intelligence on Sourcegraph and ensure users can rely on the best possible coding experience. Give the new auto-indexing setup experience a try and monitor your code intelligence coverage/health with the new dashboards. As always, we welcome your feedback!


<Badge text="Code Insights" link="/code-insights" color="green" size="small" />
<Badge link="/code-search" text="Code Search" color="cerise" size="small" />
<Badge link="/batch-changes" text="Batch Changes" color="blue" size="small" />
<Badge link="https://docs.sourcegraph.com/admin/external_service" text="Admin" color="violet" size="small" />