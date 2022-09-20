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

Sourcegraph 4.0, the latest version of our code intelligence platform, is now available. It includes more than 12 new features and enhancements to help you spend more time in flow and less time manually grokking your codebase. 

Our code intelligence platform semantically indexes and analyzes code and its underlying structure to help you derive knowledge from the codebase. It provides devs and engineering leaders with a complete understanding of the codebase to make faster and better decisions. Our platform enables anyone who creates or interacts with code to save time by helping you understand, fix, and automate changes across your entire codebase.

Read on to discover everything that shipped in Sourcegraph 4.0.  

### 🌅 Code intelligence: more useful, more times daily for every dev

<a href="/code-insights"><Badge text="Code Insights" color="green" size="small" /></a>

#### Understand usage and search structure with high-level aggregations of search results
[Code Insights](https://about.sourcegraph.com/code-insights) turns your code into a queryable database to create customizable, visual dashboards. We're bringing the power of Code Insights directly into the search UI to surface high-level information about your code, help you answer questions about your code, and refine your search results.  

Search aggregation charts appear on the search results page to help you answer questions, like:
- How many different versions of a library or package are present in your code, and which is most common? 
- Which files have the majority of these search results?
- Which repositories are this library used in most?
- Which library components are used most? By who?
- What are all the possible arguments we pass to this function? 

You can choose to group your search results by location (repo or file), author, or arbitrary capture group pattern. Here are some [example search aggregations to get started with.](https://docs.sourcegraph.com/code_insights/references/search_aggregations_use_cases)

<Video 
  source={{
    webm: 'blog/release-post/4.0/Search_Aggregations_4.0',
    mp4: 'blog/release-post/4.0/Search_Aggregations_4.0'
  }}
  loop={true}
  title="High-level aggregations"
  caption="High-level aggregations of search results"
/>

  <a href="https://docs.sourcegraph.com/code_insights/explanations/search_results_aggregations" className="tw-not-italic tw-flex tw-items-center">
      <p className="tw-m-0 tw-mr-2">Docs</p>
      <OpenInNewIcon className="tw-inline" size={18} />
  </a>
  

<a href="/code-search"><Badge text="Code Search" color="cerise" size="small" /></a>

#### A faster, simpler search experience 
We streamlined and simplified the search user interface to make the platform more intuitive. The search homepage now includes contextual tips and recommendations using real data from your instance, including repository names, file names, and authors. This information makes it easier than ever run a successful search query, faster.

Search results are now front and center with the improved interface. The search sidebar is now on the right side of the screen and we removed several non-essential elements to ensure the information you need is easy to access. Filters make it easier and faster for you to answer questions about your code, and the sidebar can be collapsed altogether to reduce noise. 

Major performance improvements make rendering search results, files and blobs, and repository pages faster than ever.

![UI Improvements](https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.0/Search%20UI%20Improvements.png "UI Improvements")


<a href="/code-search"><Badge text="Code Search" color="cerise" size="small" /></a>

#### Configure precise code navigation for 9 languages in a matter of minutes with auto-indexing
Code navigation allows you to quickly jump to symbol definitions, find references, dependencies, and more, so you can spend more time shipping code. Precise code navigation is the most powerful version of code navigation and it works cross-repository. Auto-indexing allows you to set up precise code navigation for any chosen repositories with the click of a button, and it makes precise code navigation work across all of your code, automatically. Auto-indexing is now supported for 9 languages including Ruby, Rust, Go, Java, Scala, Kotlin, Python, TypeScript, JavaScript, and it's now turned on by default for our Cloud customers.

<Video 
  source={{
    webm: 'blog/release-post/4.0/ruby-precise',
    mp4: 'blog/release-post/4.0/ruby-precise'
  }}
  loop={true}
  title="Ruby precise code navigation"
  caption="Precise code navigation with Ruby"
/>

<a href="https://docs.sourcegraph.com/code_navigation/references/indexers" className="tw-not-italic tw-flex tw-items-center">
      <p className="tw-m-0 tw-mr-2">Docs</p>
      <OpenInNewIcon className="tw-inline" size={18} />
  </a>


<a href="https://docs.sourcegraph.com/integration"><Badge text="Extensions" color="vermillion" size="small" /></a>

#### Your favorite extensions are now available by default 
we’re investing in a new model for integrations that supports deeper integrations with our code intelligence platform and makes it easier to surface code context during the ideal moments in your workflow. Top used extensions, including code navigation, git-extras, open-in-editor, and search-exports, are now part of the core functionality. 

By default, you won't be able to access the extensions registry to use or enable extensions, and you will no longer be able to create extensions on a private registry. Note: if you still need access to extensions or create extensions on a private registry, you can enable a feature flag to do so until early 2023.

This update *does not* impact our IDE extensions, which will continue to allow you to search and navigate across all of your repositories without ever leaving your IDE or checking them out locally


![Git Blame](https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.0/git_blame.png "Git Blame")


<a href="/code-search"><Badge text="Code Search" color="cerise" size="small" /></a>

#### Quickly access answers within your codebase with a revamped reference panel 
Your code navigation experience just got better with a new version of the reference panel. Updates include a new preview panel, the conslidation of definitions and references in the same tab, and allows for easier navigation through filters.

![Reference panel revamp](https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.0/Reference%20Panel%20Image.png "Refernce panel revamp")

 <a href="https://docs.sourcegraph.com/code_navigation/explanations/features#find-references" className="tw-not-italic tw-flex tw-items-center">
      <p className="tw-m-0 tw-mr-2">Docs</p>
      <OpenInNewIcon className="tw-inline" size={18} />
  </a>


### 🏗️ High-leverage ways to improve your entire codebase

<a href=/batch-changes"><Badge text="Batch Changes" color="blue" size="small" /></a>

#### Make changes across all of your codebase at enterprise scale with server-side Batch Changes (beta)
Previously, you had to run src-cli locally to create batch changes, which could take an impractical amount of time or be brittle for large or resource-intensive batch changes. Now, with servier side Batch Changes, large-scale changes can be run across thousands of repositories with a better development experience. By running Batch Changes server-side you can:

- Run large-scale or resource-intensive batch changes without clogging your local machine
- Run large batch changes quickly by distributing them across an autoscaled pool of compute instances
- Get a better debugging experience with the streaming of logs directly into Sourcegraph.

This feature requires admins to set up executors (much like CI agents), which Sourcegraph will use to offload expensive tasks. Executors can also be used to run [code navigation auto-indexing](https://github.com/sourcegraph/about/blob/bf341aafde75450c295aaec064470017020cdcd8/content/blogposts/2022/sourcegraph-4.0.md#TODO-link-to-section-or-docs) as well. All Sourcegraph Cloud instance have one or more executors available by default. 

<Video 
  source={{
    webm: 'blog/release-post/4.0/Batch_Changes_Side_by_Side',
    mp4: 'blog/release-post/4.0/Batch_Changes_Side_by_Side'
  }}
  loop={true}
  title="Server-side Batch Changes"
  caption="Side by side comparison of deploying Batch Changes locally vs. server-side"
/>

 <a href="https://docs.sourcegraph.com/batch_changes/explanations/server_side" className="tw-not-italic tw-flex tw-items-center">
      <p className="tw-m-0 tw-mr-2">Docs</p>
      <OpenInNewIcon className="tw-inline" size={18} />
  </a>


### ☁️ Dedicated Sourcegraph Cloud instances for enterprise


<a href=https://docs.sourcegraph.com/cloud"><Badge text="Admin" color="violet" size="small" /></a>

#### Get started with Sourcegraph faster than ever
After many years of building Sourcegraph into a secure and highly-scalable solution, we're ready to bring it to the cloud. Sourcegraph Cloud now offers dedicated, single-tenant instances of Sourcegraph, making it easier than ever for new teams to get started. You can read more in our announcement blog here[/blog/enterprise-cloud].

<a href="https://docs.sourcegraph.com/cloud" className="tw-not-italic tw-flex tw-items-center">
      <p className="tw-m-0 tw-mr-2">Docs</p>
      <OpenInNewIcon className="tw-inline" size={18} />
  </a>


### 💖 Advanced admin capabilities

<a href=https://docs.sourcegraph.com/admin/updates#multi-version-upgrades"><Badge text="Admin" color="violet" size="small" /></a>

#### Save time upgrading to Sourcegraph 4.0 with multi-version upgrades
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

<a href="https://docs.sourcegraph.com/admin/updates#multi-version-upgrades" className="tw-not-italic tw-flex tw-items-center">
      <p className="tw-m-0 tw-mr-2">Docs</p>
      <OpenInNewIcon className="tw-inline" size={18} />
  </a>


<a href=https://docs.sourcegraph.com/admin/analytics"><Badge text="Admin" color="violet" size="small" /></a>

#### View usage and measure the value of our platform with new and enhanced in-product analytics
Our new analytics, introduced with version 3.42, make it easier for admins to understand user engagement, measure efficiency in terms of time saved, and help calculate the value of utilizing Sourcegraph and its features. In-product analytics now include ROI-based metrics such as projected value and dev-time-saved for all Sourcegraph features, and individual user usage. Admins can access the analytics, configure the date range from one week to three months, and export the details. 

![In-product anlaytics](https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.0/Search.png "In-product analytics")

<a href="https://docs.sourcegraph.com/admin/analytics" className="tw-not-italic tw-flex tw-items-center">
      <p className="tw-m-0 tw-mr-2">Docs</p>
      <OpenInNewIcon className="tw-inline" size={18} />
  </a>

<a href=https://docs.sourcegraph.com/admin/analytics"><Badge text="Admin" color="violet" size="small" /></a>

#### Uncover developer time saved using Browser and IDE extensions 
Admins can now understand the adoption and amount of time saved from using IDE and Browser extensions across your organization. Additionally, to make it faster and easier to roll out our VS Code extension organization wide, we've created an example Batch Change that adds the extension to your repository’s recommended extensions. Once added, users will be recommended the Sourcegraph extension when opening the repository if they don't have it installed already. We’ve also updated our instructions on how to automatically install our Browser extensions for users in your Google Workspace organization. 

![Browser and IDE extensions analytics](https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.0/Browser.png "Browser and IDE extensions analytics")

<a href="https://docs.sourcegraph.com/admin/analytics" className="tw-not-italic tw-flex tw-items-center">
      <p className="tw-m-0 tw-mr-2">Docs</p>
      <OpenInNewIcon className="tw-inline" size={18} />
  </a>

<a href=https://docs.sourcegraph.com/admin/observability/opentelemetry"><Badge text="Admin" color="violet" size="small" /></a>

#### Easily export traces using OpenTelemetry

[OpenTelemetry (OTEL)](https://opentelemetry.io/) is an open specification for exporting observability data into a user’s preferred systems. We aim to make OpenTelmetry the default way to quickly and easily export observability data from Sourcgraph, starting with tracing in Sourcegraph 4.0. This is a breaking change since we now require customers to export tracing using the [OpenTelemetry collector](https://opentelemetry.io/docs/collector/), which will now be deployed by default in all Sourcegraph deployment methods, replacing the Jaeger agents and collectors we used to ship by default.

<a href="https://docs.sourcegraph.com/admin/observability/opentelemetry" className="tw-not-italic tw-flex tw-items-center">
      <p className="tw-m-0 tw-mr-2">Docs</p>
      <OpenInNewIcon className="tw-inline" size={18} />
  </a>


<a href=https://docs.sourcegraph.com/admin/external_service"><Badge text="Admin" color="violet" size="small" /></a>

#### Quickly see the status on your repository and permissions syncing
With Sourcegraph 4.0, we have introduced many quality of life improvements to help admins understand the current state of repository and permissions syncing. These improvements make it easier for admins to understand the current state of repositories synced with Sourcegraph as well as understand syncing errors when they arise. 

![Repository Status](https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.0/Repository%20Status%20Image.png "Repository Status")

<a href="https://docs.sourcegraph.com/admin/external_service" className="tw-not-italic tw-flex tw-items-center">
      <p className="tw-m-0 tw-mr-2">Docs</p>
      <OpenInNewIcon className="tw-inline" size={18} />
  </a>



<a href=https://docs.sourcegraph.com/admin/analytics"><Badge text="Admin" color="violet" size="small" /></a>

#### Measure precise code navigation coverage with an enhanced analytics dashboard
Get a better understanding of precise navigation coverage and access precise code graph data configured for all of your repositories with the improved code navigation dashboard.

![Precise code navigation analytics](https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.0/Precise%20Code%20Navigation%20Analytics.png "Precise code naviagion anlaytics")

<a href="https://docs.sourcegraph.com/admin/analytics" className="tw-not-italic tw-flex tw-items-center">
      <p className="tw-m-0 tw-mr-2">Docs</p>
      <OpenInNewIcon className="tw-inline" size={18} />
  </a>
