---
title: "Sourcegraph 4.0"
publishDate: 2022-09-27T10:00-07:00
description: Announcing Sourcegraph 4.0
tags: [blog, release]
slug: "release/4.0"
published: true
heroImage: 
socialImage: 
changelogItems:
---

# Sourcegraph 4.0

Sourcegraph 4.0, the latest version of our code intelligence platform, is now available. It includes more than 12 new features and enhancements to help you spend more time in flow and less time manually grokking your codebase. 

Our code intelligence platform semantically indexes and analyzes code and its underlying structure to help you derive knowledge from the codebase. It provides devs and engineering leaders with a complete understanding of the codebase to make faster and better decisions. Our platform enables anyone who creates or interacts with code to save time by helping you understand, fix, and automate changes across your entire codebase.

Read on to discover more details about the improvement with Sourcegraph 4.0.  

##### 🌅 Code intelligence platform for everyday use

### A faster, simpler search experience 
The search interface has been streamlined and simplified to help make the platform more intuitive. It’s easier than ever for you to get started with real data on the homepage from your instance including repository names, file names, and authors. These details, along with contextual tips and recommendations, help you uncover necessary information to run a successful search query, faster. 

Search results are now front and center with the improved interface. The search sidebar has moved to the right of the screen and several non-essential elements have been removed to ensure the information you’re looking for is easy to access. Filters make it easier and faster for you to extract the answer you need, and the side bar can be collapsed altogether to reduce noise. 

Performance across the platform saw a boost and search results are now returned faster than before by using the latest in React, lazy loading, and priority rendering. 

![UI Improvements](https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.0/Search%20UI%20Improvements.png "UI Improvements")

<Badge text="Code Search" color="cerise" size="small" onClick={() => window.open("/code-search", "_self")} />


### Understand usage and search structure with high-level aggregations of search results
It’s now easier for you to get high-level knowledge from the codebase and answer questions with aggregations of search results powered by Code Insights. In the chart that appears on the search results page, you can choose to group your search results by location (repo or file), author, or arbitrary capture group pattern.

The new aggregations answer:
- How many different versions of a library or package are present in your code, and which is most common? 
- Which files have the majority of these search results?
- Which repositories is this library used in most?
- Which library components are used most? By who?
- What are all the possible arguments we pass to this function? 

<Video 
  source={{
    webm: 'blog/release-post/4.0/Search_Aggregations_4.0',
    mp4: 'blog/release-post/4.0/Search_Aggregations_4.0'
  }}
  loop={true}
  title="High-level aggregations"
  caption="High-level aggregations of search results"
/>
  

<Badge text="Code Insights" color="green" size="small" onClick={() => window.open("/code-insights", "_self")} />

[Docs](https://docs.sourcegraph.com/code_insights/explanations/search_results_aggregations)

### Configure precise code navigation for 9 languages in a matter of minutes with auto-indexing
Code navigation allows you to quickly jump to symbol definitions, find references, dependencies, and more, so you can spend more time shipping code. Precise code navigation is the most powerful version of code navigation and it works cross-repository. Auto-indexing allows you to set up precise code navigation for any chosen repositories with the click of a button, and it makes precise code navigation work across all of your code, automatically. Auto-indexing is supported for 9 languages including Ruby, Rust, Go, Java, Scala, Kotlin, Python, TypeScript, JavaScript, and it is turned on by default for our Cloud customers.

<Video 
  source={{
    webm: 'blog/release-post/4.0/ruby-precise',
    mp4: 'blog/release-post/4.0/ruby-precise'
  }}
  loop={true}
  title="Ruby precise code navigation"
  caption="Precise code navigation with Ruby"
/>

<Badge text="Code navigation" color="lemon" size="small" onClick={() => window.open("URL_GOES_HERE", "_self")} />

[Docs](https://docs.sourcegraph.com/code_navigation/references/indexers)

### Your favorite extensions are now available by default 
The most used extensions including code navigation, git-extras, open-in-editor and, search-exports are now default functionality. These enhancements help streamline your workflow and easily switch between tools when needed. Additionally, the current Sourcegraph extensions framework will be deprecated as we work towards a new model of integrations that provides functionality throughout our entire code intelligence platform. Please note, these changes **do not** impact our IDE extensions.


![Git Blame](https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.0/git_blame.png "Git Blame")

[Extensions]

### Quickly access answers within your codebase with a revamped reference panel 
We've enhanced the code navigation experience with a new version of the reference panel. Updates include a new preview panel, the conslidation of definitions and references in the same tab, and allows for easier navigation through filters.

<Badge text="Code navigation" color="lemon" size="small" onClick={() => window.open("URL_GOES_HERE", "_self")} />

[Docs](https://docs.sourcegraph.com/code_navigation/explanations/features#find-references)

##### 🏗️ High-leverage ways to improve your entire codebase

### Make changes across all of your codebases at enterprise scale with server-side Batch Changes (beta)
Batch Changes allows you to programmatically define changes across the codebase with a single declarative file. Now, changes can be run across thousands of repositories with a better development experience. Previously, you had to run src-cli locally to create batch changes, which could take an impractical amount of time or be brittle for large or resource-intensive batch changes. By running Batch Changes server-side you can:

- Run large-scale or resource-intensive batch changes without clogging your local machine
- Run large batch changes quickly by distributing them across an autoscaled pool of compute instances
- Get a better debugging experience with the streaming of logs directly into Sourcegraph.

This feature requires admins to set up executors (much like CI agents), which Sourcegraph will use to offload expensive tasks. Executors can also be used to run [Code Intelligence auto-indexing](https://github.com/sourcegraph/about/blob/bf341aafde75450c295aaec064470017020cdcd8/content/blogposts/2022/sourcegraph-4.0.md#TODO-link-to-section-or-docs) as well. One or more executors are available by default on Cloud instances of Sourcegraph.

<Video 
  source={{
    webm: 'blog/release-post/4.0/Batch_Changes_Side_by_Side',
    mp4: 'blog/release-post/4.0/Batch_Changes_Side_by_Side'
  }}
  loop={true}
  title="Server-side Batch Changes"
  caption="Side by side comparison of deploying Batch Changes locally vs. server-side"
/>

<Badge text="Batch Changes" color="blue" size="small" onClick={() => window.open("/batch-changes", "_self")} />

[Docs](https://docs.sourcegraph.com/batch_changes/explanations/server_side)


##### ☁️ Dedicated Sourcegraph Cloud instances for enterprise

### Get started with Sourcegraph faster than ever
After many years of building Sourcegraph into a secure and highly-scalable solution, we're ready to bring it to the cloud. Sourcegraph Cloud now offers dedicated, single-tenant instances of Sourcegraph, making it easier than ever for new teams to get started. You can read more in our announcement blog here[/blog/enterprise-cloud].

<Badge text="Admin" color="violet" size="small" onClick={() => window.open("URL_GOES_HERE", "_self")} />

[Docs](https://docs.sourcegraph.com/cloud)

##### 💖 Advanced admin capabilities

### Save time upgrading to Sourcegraph 4.0 with multi-version upgrades
Multi-version upgrades help to reduce the burden and time required to upgrade to the latest version of Sourcegraph. Customers will now be able to seamlessly upgrade from any 3.20+ version to Sourcegraph 4.0 in just a few simple steps. With faster upgrades, customers can quickly start using the new features and enhancements that are released every month. 

<Video 
  source={{
    webm: 'blog/release-post/4.0/Multi-version%20Upgrades',
    mp4: 'blog/release-post/4.0/Multi-version%20Upgrades'
  }}
  loop={true}
  title="Multi-version upgrades"
  caption="Demo of multi-version upgrades"
/>

<Badge text="Admin" color="violet" size="small" onClick={() => window.open("URL_GOES_HERE", "_self")} />

[Docs](https://docs.sourcegraph.com/admin/updates#multi-version-upgrades)

### View usage and measure the value of our platform with new and enhanced in-product analytics
Our new analytics, introduced with version 3.42, make it easier for admins to understand user engagement, measure efficiency in terms of time saved, and help calculate the value of utilizing Sourcegraph and its features. In-product analytics now include ROI-based metrics such as projected value and dev-time-saved for all Sourcegraph features, and individual user usage. Admins can access the analytics, configure the date range from one week to three months, and export the details. 

Media: provide a screenshot, gif, or video to help support the copy

<Badge text="Admin" color="violet" size="small" onClick={() => window.open("URL_GOES_HERE", "_self")} />

[Docs](https://docs.sourcegraph.com/admin/analytics)
### Uncover developer time saved using Browser and IDE extensions 
Admins can now understand the adoption and amount of time saved from using IDE and Browser extensions across your organization. Additionally, to make it faster and easier to roll out our VS Code extension organization wide, we've created an example Batch Change that adds the extension to your repository’s recommended extensions. Once added, users will be recommended the Sourcegraph extension when opening the repository if they don't have it installed already. We’ve also updated our instructions on how to automatically install our Browser extensions for users in your Google Workspace organization. 

Media: provide a screenshot, gif, or video to help support the copy

<Badge text="Admin" color="violet" size="small" onClick={() => window.open("URL_GOES_HERE", "_self")} />

Docs: provide a link to the updated docs

### Easily export traces using OpenTelemetry

[OpenTelemetry (OTEL)](https://opentelemetry.io/) is an open specification for exporting observability data into a user’s preferred systems. We aim to make OpenTelmetry the default way to quickly and easily export observability data from Sourcgraph, starting with tracing in Sourcegraph 4.0. This is a breaking change since we now require customers to export tracing using the [OpenTelemetry collector](https://opentelemetry.io/docs/collector/), which will now be deployed by default in all Sourcegraph deployment methods, replacing the Jaeger agents and collectors we used to ship by default.

<Badge text="Admin" color="violet" size="small" onClick={() => window.open("URL_GOES_HERE", "_self")} />

[Docs](https://docs.sourcegraph.com/admin/observability/opentelemetry)

### Quickly see the status on your repository and permissions syncing
With Sourcegraph 4.0, we have introduced many quality of life improvements to help admins understand the current state of repository and permissions syncing. These improvements make it easier for admins to understand the current state of repositories synced with Sourcegraph as well as understand syncing errors when they arise. 

Media: provide a screenshot, gif, or video to help support the copy

<Badge text="Admin" color="violet" size="small" onClick={() => window.open("URL_GOES_HERE", "_self")} />

Docs: provide a link to the updated docs

### Gain knowledge about precise code navigation with improved analytics
Get a better understanding of precise navigation coverage and access precise code graph data configured for all of your repositories with the improved code navigation dashboard.

Media: provide a screenshot, gif, or video to help support the copy

<Badge text="Admin" color="violet" size="small" onClick={() => window.open("URL_GOES_HERE", "_self")} />

Docs: provide a link to the updated docs
