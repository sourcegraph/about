---
title: "Sourcegraph 4.0"
publishDate: 
description: Announcing Sourcegraph 4.0
tags: [blog, release]
slug: "release/4.0"
published: false
heroImage: 
socialImage: 
changelogItems:
---

# Sourcegraph 4.0

> NOTE: This post is very WIP. It's a rough draft of what individual teams intend to ship.

- [From code search toward a code intelligence platform](/blog/code-search-to-code-intelligence) - the longer-term vision/story
- [Secure, easy, and scalable Sourcegraph Cloud managed instances for the enterprise](/blog/enterprise-cloud) - the Cloud announcement (including SOC2 Type 2, etc.) that coincides with 4.0

## TL;DR

`TODO(sqs): The section headers with emojis are what I think we should use, but the wording of the bullet points within are WIP`

##### 🌅 Code intelligence: more useful, more times daily for every dev

### A faster, simpler search experience 
We’ve improved the search UI to make the platform more intuitive with small usability improvements while making it easier for new users to get started with tips and recommendations on the revamped homepage. Performance across the platform saw a boost by using the latest in React, lazy loading, and priority rendering. These usability and performance enhancements help you get quick answers about your codebase and get unblocked faster. 

Media: provide a screenshot, gif, or video to help support the copy

[Code Search]

Docs: provide a link to the updated docs

### Understand usage and search structure with high-level aggregations of search results
High-level aggregations of search results powered by Code Insights are now displayed in addition to results. Responses to the query are now grouped by location (repo or file), author, and arbitrary capture group pattern to help answer to questions such as:
- Which files have the majority of these search results?
- Which repositories is this library used in most?
- Which library components are used most? By who?
- What are all the possible arguments we pass to this function? 
- And a number of [other examples](TODO ADD LINK TO SEARCH AGGREGATIONS TEMPLATES DOC – coming by late August after we test live on the feature). 
- Aggregation can easily be reused by saving the visualization to your Code Insights dashboard.

To answer these questions, you can choose to show your search results grouped by location (repo or file), author, and arbitrary capture group pattern. 

Media: provide a screenshot, gif, or video to help support the copy

[Code Insights]

[Docs](https://docs.sourcegraph.com/code_insights/explanations/search_results_aggregations)

### Configure precise code navigation for 9 languages in a matter of minutes with auto-indexing
Code navigation allows you to quickly jump to symbol definitions, find references, dependencies, and more, so you can spend more time shipping code. Precise code navigation is the most powerful version of code navigation and it works cross-repository. We now support 9 languages including Ruby, Rust, Go, Java, Scala, Kotlin, Python, TypeScript, JavaScript. Auto-indexing makes precise code navigation work across all of your code, automatically, and it’s turned on by default for our Cloud customers. 

<Video 
  source={{
    webm: 'blog/release-post/4.0/ruby-precise',
    mp4: 'blog/release-post/4.0/ruby-precise'
  }}
  loop={true}
  title="Ruby precise code navigation"
  caption="Precise code navigation with Ruby"
/>

[Code Navigation]

[Docs](https://docs.sourcegraph.com/code_navigation/references/indexers)

### Your favorite extensions are now available by default 
The most used extensions including code navigation, git-extras, open-in-editor and, search-exports are now default functionality. These enhancements help streamline your workflow and easily switch between tools when needed. Additionally, the current Sourcegraph extensions framework will be deprecated as we work towards a new model of integrations that provides functionality throughout our entire code intelligence platform. Please note, these changes **do not** impact our IDE extensions.


![Git Blame](https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.0/git_blame.png "Git Blame")

[Extensions]

Docs: provide a link to the updated docs	

##### 🏗️ High-leverage ways to improve your entire codebase

### Make changes across all of your codebases at enterprise scale with server-side Batch Changes (beta)
Batch Changes can now run across thousands of repositories with a better development experience. Previously, you had to run src-cli locally to create batch changes. That could take an impractical amount of time or be brittle for large or resource-intensive batch changes. By running Batch Changes server-side you can:

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

[Batch Changes]

[Docs](https://docs.sourcegraph.com/batch_changes/explanations/server_side)


##### ☁️ Dedicated Sourcegraph Cloud instances for enterprise

### Get started with Sourcegraph faster than ever
After many years of building Sourcegraph into a secure and highly-scalable solution, we're ready to bring it to the cloud. Sourcegraph Cloud now offers dedicated, single-tenant instances of Sourcegraph, making it easier than ever for new teams to get started. You can read more in our announcement blog here[/blog/enterprise-cloud].

[Docs](https://docs.sourcegraph.com/cloud)

##### 💖 For admins

### View usage and measure the value of our platform with new and enhanced in-product analytics
With 3.42, we introduced an all-new analytics including [XYZ]. Our new analytics make it easier for admins to understand user engagement, measure efficiency in terms of time saved, and help calculate the value of utilizing Sourcegraph and its features. We’ve significantly improved our in-product analytics to include the projected value and dev-time-saved for all Sourcegraph features, the ability to export data, individual user usage table, and much more. 

Media: provide a screenshot, gif, or video to help support the copy

[Admin]

Docs: provide a link to the updated docs

### Easily export traces using OpenTelemetry

[OpenTelemetry (OTEL)](https://opentelemetry.io/) is an open specification for exporting observability data into a user’s preferred systems. We aim to make OpenTelmetry the default way to quickly and easily export observability data from Sourcgraph, starting with tracing in Sourcegraph 4.0. This is a breaking change since we now require customers to export tracing using the [OpenTelemetry collector](https://opentelemetry.io/docs/collector/), which will now be deployed by default in all Sourcegraph deployment methods, replacing the Jaeger agents and collectors we used to ship by default.

[Admin]

[Docs](https://docs.sourcegraph.com/admin/observability/opentelemetry)

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

[Admin]

[Docs](https://docs.sourcegraph.com/admin/updates#multi-version-upgrades)


### Quickly see the status on your repository and sync permissions
With Sourcegraph 4.0, we have introduced more than X quality of life improvements to help admins understand the current state of repository and permissions syncing. This helps to ensure users have the appropriate to repositories so they can understand, fix, and automate the codebase, while admins can XYZ. 

Media: provide a screenshot, gif, or video to help support the copy

[Admin]

Docs: provide a link to the updated docs

### Gain knowledge about precise code navigation with improved analytics
Get a better understanding of precise navigation coverage and access precise code graph data configured for all of your repositories with the improved code navigation dashboard.

Media: provide a screenshot, gif, or video to help support the copy

[Admin]

Docs: provide a link to the updated docs

### Uncover developer time saved using Browser and IDE extensions 
Admins can now understand the adoption and amount of time saved from using IDE and Browser extensions across your organization. Additionally, to make it faster and easier to roll out our VS Code extension organization wide, we've created an example Batch Change that adds the extension to your repository’s recommended extensions. Once added, users will be recommended the Sourcegraph extension when opening the repository if they don't have it installed already. We’ve also updated our instructions on how to automatically install our Browser extensions for users in your Google Workspace organization. 

Media: provide a screenshot, gif, or video to help support the copy

[Admin]

Docs: provide a link to the updated docs

### Quickly access answers withing your codebase with a revamped reference panel 
We've enhanced the code navigation experience with a new version of the reference panel. Updates include a new preview panel, the conslidation of definitions and references in the same tab, and allows for easier navigation through filters.

[Code Navigation]
[Docs](https://docs.sourcegraph.com/code_navigation/explanations/features#find-references)


