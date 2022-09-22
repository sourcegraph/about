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

Sourcegraph 4.0, the latest version of our code intelligence platform, is now available. Our code intelligence platform includes a dozen new features to grok code, spend more time in flow, and execute big decisive refactors across your codebase.

A code intelligence platform indexes and understands all of your organization's code, no matter where it's stored or what language it's in. With Sourcegraph, devs and engineering leaders have a complete understanding of their codebase, so they can learn about code and operate more effeciently. 

Read on to discover everything that shipped in Sourcegraph 4.0.  

### 🧠 Code intelligence: uplevel your code search

<br />
<a href="/code-insights"><Badge text="Code Insights" color="green" size="small" /></a>

#### Understand usage and search structure with Code Insights dashboards within the search UI
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
  caption="The power of Code Insights is now within the search UI to surface usage patterns about your code"
/>
<a href="https://docs.sourcegraph.com/code_insights/explanations/search_results_aggregations" className="tw-not-italic tw-flex tw-items-center tw-mb-sm">Docs<OpenInNewIcon className="tw-ml-xxs" size={18} /></a>
  
<br />
<a href="/code-search"><Badge text="Code Search" color="cerise" size="small" /></a>

#### A faster, simpler search experience 
We streamlined and simplified the search user interface to make the platform more intuitive. The search homepage now has contextual tips and recommendations using real data from your instance, including repository names, file names, and authors. This information makes it easier and faster than ever to run a successful search query. 

Search results are now front and center with the improved interface. The search sidebar has moved to the right side of the screen, and we eliminated several non-essential elements to ensure the information you need is easy to access. Filters make it effortless for you to answer questions about your code, and the sidebar can be collapsed altogether to reduce noise. 

Major performance improvements make rendering search results, files and blobs, and repository pages faster than ever.

<div className="tw-mb-sm">
  <Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.0/New-Search-UI.png"
    alt="UI Improvements"
  />
</div>

<br />
<a href="/code-search"><Badge text="Code Search" color="cerise" size="small" /></a>

#### Configure precise code navigation for 9 languages in a matter of minutes with auto-indexing
Code navigation allows you to quickly jump to symbol definitions, find references, dependencies, and more, so you can spend more time shipping code. Precise code navigation is the most powerful version of code navigation and it works cross-repository. 

Auto-indexing allows you to set up precise code navigation for any chosen repositories with the click of a button, and it automatically keeps your repositories indexed and your [code graph data](https://docs.sourcegraph.com/code_navigation/explanations/uploads) up-to-date for accurate code navigation. With the release of 4.0, auto-indexing is now supported for 9 languages including Ruby, Rust, Go, Java, Scala, Kotlin, Python, TypeScript, JavaScript, and it's turned on by default for our Cloud customers.

<Video 
  source={{
    webm: 'blog/release-post/4.0/Auto-Indexing%20and%20Code%20Navigation',
    mp4: 'blog/release-post/4.0/Auto-Indexing%20and%20Code%20Navigation'
  }}
  loop={true}
  title="Ruby precise code navigation"
  caption="Auto-indexing is now supported for 9 languages and allows you to set up precise code navigation, automatically"
/>

<a href="https://docs.sourcegraph.com/code_navigation/references/indexers" className="tw-not-italic tw-flex tw-items-center tw-mb-sm">Docs<OpenInNewIcon className="tw-ml-xxs" size={18} /></a>

<br />
<a href="https://docs.sourcegraph.com/integration"><Badge text="Extensions" color="vermillion" size="small" /></a>

#### Your favorite extensions are now available by default 
Top used extensions, including code navigation, git-extras, open-in-editor, and search-exports, are now part of the platform and no longer require you to  enable on your own. Essential code context is surfaced during the ideal moments in your workflow and knowledge about the codebase from the extensions can be found in the sidebar, when hovering over code, and after clicking on "more actions."

Now that top extensions are part of the core functionality, there will be greater support and functionality over time. With this change, you will no longer be able to access the extensions registry or create extensions on a private registry. Note: if you still need access to extensions or create extensions on a private registry, you can enable a feature flag to do so until early 2023.

This update *does not* impact our IDE extensions, which will continue to allow you to search and navigate across all of your repositories without ever leaving your IDE or checking them out locally.

<div className="tw-mb-sm">
  <Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.0/Blame.png"
    alt="Git Blame"
  />
</div>

<br />
<a href="/code-search"><Badge text="Code Search" color="cerise" size="small" /></a>

#### Quickly access answers within your codebase with a revamped reference panel 
Your code navigation experience just got better with a refreshed version of the reference panel. Stay within your workflow with a new preview panel that helps you navigate references without having to leave the file. The consolidation of definitions, references, and implementations in the same tab reduces the number of clicks needed to get pertinent information. You can find the references you're looking for much faster with new filters instead of having to scroll through the page, which is particularly challenging for navigating symbols with a large number of results.

<Video 
  source={{
    webm: 'blog/release-post/4.0/Reference%20panel',
    mp4: 'blog/release-post/4.0/Reference%20panel'
  }}
  loop={true}
  title="Reference panel refresh"
  caption="Stay within your workflow and quickly access references with the revamped reference panel"
/>

<a href="https://docs.sourcegraph.com/code_navigation/explanations/features#find-references" className="tw-not-italic tw-flex tw-items-center">Docs<OpenInNewIcon className="tw-ml-xxs" size={18} /></a>



### 🏗️ High-leverage ways to improve your entire codebase
<br />
<a href="/batch-changes"><Badge text="Batch Changes" color="blue" size="small" /></a>

#### Make changes across your codebase at enterprise scale with server-side Batch Changes (beta)
Previously, you had to run src-cli locally to create batch changes, which could take an impractical amount of time or be brittle for large or resource-intensive batch changes. Now, with server side Batch Changes, large-scale changes can be run across thousands of repositories with a better development experience. By running Batch Changes server-side you can:

- Run large-scale or resource-intensive batch changes without clogging your local machine
- Run large batch changes quickly by distributing them across an autoscaled pool of compute instances
- Get a better debugging experience by streaming logs directly into Sourcegraph

This feature requires admins to set up executors (much like CI agents), which Sourcegraph will use to offload expensive tasks. Executors can also be used to run [code navigation auto-indexing](https://github.com/sourcegraph/about/blob/bf341aafde75450c295aaec064470017020cdcd8/content/blogposts/2022/sourcegraph-4.0.md#TODO-link-to-section-or-docs). All Sourcegraph Cloud instances have one or more executors available by default. 

<Video 
  source={{
    webm: 'blog/release-post/4.0/Server%20Side%20Batch%20Changes%20',
    mp4: 'blog/release-post/4.0/Server%20Side%20Batch%20Changes%20'
  }}
  loop={true}
  title="Server-side Batch Changes"
  caption="Large-scale changes can be run across thousands of repositories with server-side Batch Changes"
/>

<a href="https://docs.sourcegraph.com/batch_changes/explanations/server_side" className="tw-not-italic tw-flex tw-items-center">Docs<OpenInNewIcon className="tw-ml-xxs" size={18} /></a>

### ☁️ Dedicated Sourcegraph Cloud instances for enterprise

<br />
<a href="https://docs.sourcegraph.com/cloud"><Badge text="Admin" color="violet" size="small" /></a>

#### Scale confidently with a dedicated and secure instance of Sourcegraph Cloud
After almost a decade of developing self-hosted Sourcegraph, we’ve gained the trust of some of the most sophisticated companies and development teams in the world, allowing us to work with their most sensitive IP: their code. Today—after years of building trust and engineering rigor—we are excited to move confidently to the Cloud with a highly secure and scalable solution.

Dedicated, single-tenant Sourcegraph Cloud instances are now generally available, and the best way for new teams to use Sourcegraph. You can read more in our announcement blog here[/blog/enterprise-cloud].

<a href="https://docs.sourcegraph.com/cloud" className="tw-not-italic tw-flex tw-items-center tw-mb-sm">Docs<OpenInNewIcon className="tw-ml-xxs" size={18} /></a>
  
<br />
<a href="https://docs.sourcegraph.com/cloud"><Badge text="Admin" color="violet" size="small" /></a>

#### SOC 2 Type II certification for Sourcegraph Cloud
Sourcegraph continues our commitment to the security of your most valuable IP—your code—through our security operations, compliance measures, and best practices. With our recent SOC 2 Type II attestation for Soucegraph Cloud, we met the high standards of the third-party audit, and you can be confident that Sourcegraph controls for the security and availability of your sensitive data. 

<a href="https://security.sourcegraph.com/" className="tw-not-italic tw-flex tw-items-center">Docs<OpenInNewIcon className="tw-ml-xxs" size={18} /></a>

### 📈 Advanced admin capabilities
<br />
<a href="https://docs.sourcegraph.com/admin/updates#multi-version-upgrades"><Badge text="Admin" color="violet" size="small" /></a>

#### Save time upgrading to Sourcegraph 4.0 with multi-version upgrades
We know that upgrading Sourcegraph can be a time-intensive process, especially if you fall a few versions behind. Sourcegraph 4.0 supports multi-version upgrades so you can upgrade to 4.0 directly from version 3.20 or higher.

<Video 
  source={{
    webm: 'blog/release-post/4.0/Multi-version%20upgrades%20final',
    mp4: 'blog/release-post/4.0/Multi-version%20upgrades%20final'
  }}
  loop={true}
  title="Multi-version upgrades"
  caption="Upgrade to 4.0 directly from version 3.20 or higher with multi-version upgrades"
/>

<a href="https://docs.sourcegraph.com/admin/updates#multi-version-upgrades" className="tw-not-italic tw-flex tw-items-center tw-mb-sm">Docs<OpenInNewIcon className="tw-ml-xxs" size={18} /></a>

<br />
<a href="https://docs.sourcegraph.com/admin/analytics"><Badge text="Admin" color="violet" size="small" /></a>

#### Understand usage and quantify the value of using Sourcegraph with in-product analytics
Our new in-product analytics help admins to understand user engagement, measure efficiency in terms of time saved, and calculate the value of Sourcegraph and its features. 

These analytics work across all of our products and provide ROI-based metrics such as:

- The number of searches developers have run in Sourcegraph, and how many hours of development time have been saved as a result.
- How many code insights have been created, viewed, and interacted with.
- The number of changesets that have been created and merged via batch changes, and how much time has been saved as a result.
- How frequently code navigation has been used by developers to more quickly understand code.
- How often IDE and Browser extensions are used across your organization, and how much time has been saved as a result.
- The nubmer of navigation events and the percentage of your repositories that allow precise code navigation

Admins can select a specific date range and customize the assumpted to align with how the platform is used. 

<div className="tw-mb-sm">
  <Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.0/Search.png"
    alt="In-product analytics"
    caption="Docs"
    link="https://docs.sourcegraph.com/admin/analytics"
    linkIcon={true}
  />
</div>

<br />
<a href="https://docs.sourcegraph.com/admin/observability/opentelemetry"><Badge text="Admin" color="violet" size="small" /></a>

#### Easily export traces using OpenTelemetry

[OpenTelemetry (OTEL)](https://opentelemetry.io/) is an open specification for exporting observability data into a user’s preferred systems. We aim to make OpenTelmetry the default way to quickly and easily export observability data from Sourcgraph, starting with tracing in Sourcegraph 4.0. This is a breaking change as we now require you to export tracing with the [OpenTelemetry collector](https://opentelemetry.io/docs/collector/). This is deployed by default in all Sourcegraph deployment methods and replaces the Jaeger agents and collectors that was previously the default. 

<a href="https://docs.sourcegraph.com/admin/observability/opentelemetry" className="tw-not-italic tw-flex tw-items-center tw-mb-sm">Docs<OpenInNewIcon className="tw-ml-xxs" size={18} /></a>

<br />
<a href="https://docs.sourcegraph.com/admin/external_service"><Badge text="Admin" color="violet" size="small" /></a>

#### Quickly see the status on your repository and permissions syncing
New enhancements to the repositoiry status page help admins better understand the current state of repository and permissions syncing. A new header displays an up-to-date count of repositories (total, not cloned, cloned, cloning, failed fetch/clone), notifications are more actionable, and new filters help Admins drill down into specific repositories. These improvements make it easier for admins to understand the current state of repositories synced with Sourcegraph and pinpoint syncing errors when they arise. 

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.0/Repositories.png"
  alt="Repository Status"
  caption="Docs"
  link="https://docs.sourcegraph.com/admin/external_service"
  linkIcon={true}
/>


<style>
{`
  h3 { letter-spacing: -0.03em; margin-top: 48px; }
  h4 { letter-spacing: -0.03em; margin-top: 8px; }
`}
</style>
