---
title: "Sourcegraph 4.0"
publishDate: 2022-09-27T10:00-07:00
description: Announcing Sourcegraph 4.0. The latest release includes over a dozen updates and new features, and it is the first step toward Sourcegraph becoming a code intelligence platform. 
tags: [blog, release]
slug: "release/4.0"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/4.0/release.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/4.0/release.png
changelogItems:
---

We've spent 9 years building the underlying foundation of code search to be fast, secure, and scalable across ~10<sup>11</sup> lines of code for the world's most demanding software teams. Now, we’re making Sourcegraph even smarter.

Sourcegraph 4.0 includes over a dozen updates and new features, and it is the first step toward Sourcegraph becoming a [code intelligence platform](/blog/code-search-to-code-intelligence). A code intelligence platform indexes and understands all of your organization’s code, so instead of just *matching lines in code*, you can *answer questions and learn about code*. 

Today, we're also launching [Sourcegraph Cloud:](/blog/enterprise-cloud) secure, scalable, dedicated Sourcegraph instances on the cloud. Sourcegraph Cloud is the best way to start using Sourcegraph on your organization's code. [Sign up now](https://about.sourcegraph.com/get-started?t=enterprise) to experience Sourcegraph 4.0.



**Read on to discover everything in Sourcegraph 4.0:**
* [🧠 Code intelligence: uplevel your code search](#code-intelligence-uplevel-your-code-search)
* [🏗️ High-leverage ways to improve your entire codebase](#high-leverage-ways-to-improve-your-entire-codebase)
* [☁️ Dedicated Sourcegraph Cloud instances for enterprise](#dedicated-sourcegraph-cloud-instances-for-enterprise)
* [📈 Advanced admin capabilities](#advanced-admin-capabilities)


### <a id="code-intelligence-uplevel-your-code-search"></a> 🧠 Code intelligence: uplevel your code search

<br />
<Badge text="Code Insights" link="/code-insights" color="green" size="small" />

#### Understand usage and code structure with Code Insights in the search UI
[Code Insights](/code-insights) turns your code into a queryable database to create customizable, visual dashboards. We're bringing the power of Code Insights directly into the search UI to surface high-level information from your codebase, help you answer questions about your code, and refine your search results.  

Search aggregation charts appear on the search results page to answer questions like:
- How many different versions of a library or package are present in your code, and which is most common? 
- Which files have the majority of these search results?
- Which repositories is this library used in most?
- Which library components are used most? By who?
- What are all the possible arguments we pass to this function? 

You can choose to group your search results by location (repository or file), author, or arbitrary capture group pattern. Here are some [example search aggregations to get started with.](https://docs.sourcegraph.com/code_insights/references/search_aggregations_use_cases)

<Video 
  source={{
    webm: 'blog/release-post/4.0/Search%20Aggregations',
    mp4: 'blog/release-post/4.0/Search%20Aggregations'
  }}
  loop={true}
  title="High-level aggregations"
  caption="The power of Code Insights is now within the search UI to surface usage patterns about your code"
/>
<a href="https://docs.sourcegraph.com/code_insights/explanations/search_results_aggregations" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>
  
<br />
<Badge link="/code-search" text="Code Search" color="cerise" size="small" />

#### A faster, simpler search experience 
We streamlined and simplified the search user interface to make the platform more intuitive. The search homepage, for customer instances of Sourcegraph, now has contextual tips and recommendations using real data from your instance, including repository names, file names, and authors. This information makes it easier and faster than ever to run a successful search query.

Search results are now front and center with the improved interface. The search sidebar has moved to the right side of the screen, matches in file and respository names are now highlighted, and we eliminated several non-essential elements to ensure the information you need is easy to access. Filters make it effortless for you to answer questions about your code, and the sidebar can be collapsed altogether to reduce noise. 

We also made major performance improvements to make rendering search results, files, and repositories faster than ever. 

<div className="mb-sm">
  <Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.0/New-Search-UI.png"
    alt="UI Improvements"
    catpion="A streamlined and simplified the search user interface"
  />
</div>

<br />
<Badge link="/code-search" text="Code Search" color="cerise" size="small" />

#### Configure precise code navigation for 9 languages in a matter of minutes with auto-indexing
Code navigation allows you to quickly jump to symbol definitions, find references, and more, so you can understand your code and its dependencies. Precise code navigation is the most powerful version of code navigation and it works cross-repository. 

Auto-indexing allows you to set up precise code navigation for any chosen repositories with the click of a button, and it automatically keeps your repositories indexed and your [code graph data](https://docs.sourcegraph.com/code_navigation/explanations/uploads) up to date for accurate code navigation. With the release of 4.0, auto-indexing is now supported for 9 languages including Ruby, Rust, Go, Java, Scala, Kotlin, Python, TypeScript, and JavaScript, and it's turned on by default for Cloud customers.

<Video 
  source={{
    webm: 'blog/release-post/4.0/Auto-Indexing%20and%20Code%20Navigation',
    mp4: 'blog/release-post/4.0/Auto-Indexing%20and%20Code%20Navigation'
  }}
  loop={true}
  title="Ruby precise code navigation"
  caption="Auto-indexing is now supported for 9 languages and allows you to set up precise code navigation, automatically"
/>

<a href="https://docs.sourcegraph.com/code_navigation/explanations/auto_indexing" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>

<br />
<Badge link="https://docs.sourcegraph.com/integration" text="Extensions" color="vermillion" size="small" />

#### Your favorite extensions are now available by default 

Top used extensions, including code navigation, git-extras, open-in-editor, and search-exports, are now part of the platform as native functionality and no longer require you to enable them on your own as "extensions."

Now that top extensions are part of the core functionality, there will be greater support and continued improvements over time. With this change, you will no longer be able to access the extensions registry or create extensions on a private registry. Note: If you still need access to extensions or create extensions on a private registry, you can enable a feature flag to do so until early 2023.

This update *does not* impact our IDE extensions, which will continue to allow you to search and navigate across all of your repositories without ever leaving your IDE or checking them out locally. Our browser extensions will continue to have code navigation support, but other functionality to the code host will be discontinued (e.g. code coverage information).

<div className="mb-sm">
  <Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.0/Blame.png"
    alt="Git Blame"
    caption="Git-extras is now part of the platform and core functionality"
  />
</div>

<br />
<Badge link="/code-search" text="Code Search" color="cerise" size="small" />

#### Find answers faster with a revamped reference panel 
Your code navigation experience just got better with a refreshed version of the reference panel. Stay within your workflow with a new preview panel that helps you [navigate references](https://docs.sourcegraph.com/code_navigation/explanations/features#find-references) without having to leave the file. The consolidation of definitions, references, and implementations in the same tab reduces the number of clicks needed to get pertinent information. You can find the references you're looking for much faster using the new file name filter, so you'll no longer need to scroll through dozens of results.

<Video 
  source={{
    webm: 'blog/release-post/4.0/Reference%20panel',
    mp4: 'blog/release-post/4.0/Reference%20panel'
  }}
  loop={true}
  title="Reference panel refresh"
  caption="Stay within your workflow and quickly access references with the revamped reference panel"
/>

<a href="https://docs.sourcegraph.com/code_navigation/explanations/features#find-references" className="not-italic flex items-center">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>



### <a id="high-leverage-ways-to-improve-your-entire-codebase"></a> 🏗️ High-leverage ways to improve your entire codebase
<br />
<Badge link="/batch-changes" text="Batch Changes" color="blue" size="small" />

#### Make changes across your codebase at enterprise scale with server-side Batch Changes (beta)
[Batch Changes](/batch-changes) allows you to automate code changes across your entire codebase. Previously, you had to run `src-cli` locally to create batch changes, which could take an impractical amount of time or be brittle for large or resource-intensive batch changes. Now, with server-side Batch Changes, large-scale changes can be run across thousands of repositories with a better development experience. With server-side Batch Changes, you can:

- Run large-scale or resource-intensive batch changes without clogging your local machine.
- Run large batch changes quickly by distributing them across an autoscaled pool of compute instances.
- Get a better debugging experience by streaming logs directly into Sourcegraph.

This feature requires admins to set up executors (much like CI agents), which Sourcegraph uses for running large-scale changes. Executors can also be used to run [code navigation auto-indexing](https://docs.sourcegraph.com/code_navigation/explanations/auto_indexing). All Sourcegraph Cloud instances have one or more executors available by default. 

<Video 
  source={{
    webm: 'blog/release-post/4.0/Server%20Side%20Batch%20Changes%20',
    mp4: 'blog/release-post/4.0/Server%20Side%20Batch%20Changes%20'
  }}
  loop={true}
  title="Server-side Batch Changes"
  caption="Large-scale changes can be run across thousands of repositories with server-side Batch Changes"
/>

<a href="https://docs.sourcegraph.com/batch_changes/explanations/server_side" className="not-italic flex items-center">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>

### <a id="dedicated-sourcegraph-cloud-instances-for-enterprise"></a> ☁️ Dedicated Sourcegraph Cloud instances for enterprise

<br />
<Badge link="https://docs.sourcegraph.com/cloud" text="Admin" color="violet" size="small" />

####  Sourcegraph Cloud, our single-tenant cloud offering, is now generally available
After almost a decade of developing self-hosted Sourcegraph, we’ve gained the trust of some of the most sophisticated companies and development teams in the world. Today—after years of building trust and engineering rigor—we are excited to move confidently to the cloud with a highly secure and scalable solution.

Dedicated, single-tenant Sourcegraph Cloud instances are now generally available and the best way for teams to use Sourcegraph. You can read more in our announcement blog [here](/blog/enterprise-cloud), or [sign up for a 15-day trial for your organization](https://about.sourcegraph.com/get-started?t=enterprise).

<a href="https://docs.sourcegraph.com/cloud" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>
  
<br />
<Badge link="https://docs.sourcegraph.com/cloud" text="Admin" color="violet" size="small" />

#### SOC 2 Type II attestation for Sourcegraph Cloud

We know that your code is one of your most important and sensitive assets. Every component of Sourcegraph was designed with security in mind. As part of our ongoing commitment to security, we recently received our SOC 2 Type II attestation for Sourcegraph Cloud. When you use Sourcegraph, you can be confident that Sourcegraph controls the security and confidentiality of your sensitive data.

Check out our [Security Portal](https://security.sourcegraph.com/) to access the report and learn more about our security program.

<a href="https://security.sourcegraph.com/" className="not-italic flex items-center">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>

### <a id="advanced-admin-capabilities"></a> 📈 Advanced admin capabilities
<br />
<Badge link="https://docs.sourcegraph.com/admin/updates#multi-version-upgrades" text="Admin" color="violet" size="small" />

#### Upgrade directly to Sourcegraph 4.0 from earlier versions of Sourcegraph
We know that upgrading Sourcegraph can be a time-intensive process, especially if you fall a few versions behind. Sourcegraph 4.0 supports [multi-version upgrades](https://docs.sourcegraph.com/admin/updates#multi-version-upgrades) so you can upgrade to 4.0–and any future version–directly from version 3.20 or higher.

<Video 
  source={{
    webm: 'blog/release-post/4.0/Multi-version%20upgrades%20final',
    mp4: 'blog/release-post/4.0/Multi-version%20upgrades%20final'
  }}
  loop={true}
  title="Multi-version upgrades"
  caption="Upgrade to 4.0 directly from version 3.20 or higher with multi-version upgrades"
/>

<a href="https://docs.sourcegraph.com/admin/updates#multi-version-upgrades" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>

<br />
<Badge link="https://docs.sourcegraph.com/admin/analytics" text="Admin" color="violet" size="small" />

#### Understand usage and quantify the value of using Sourcegraph with in-product analytics
[In-product analytics](https://docs.sourcegraph.com/admin/analytics) helps admins understand user engagement, measure efficiency in terms of time saved, and calculate the value of utilizing Sourcegraph.

These analytics show the exact usage of your Sourcegraph instance so you can see which features are most used across your organization. The usage data is also used to quantify how much time developers have saved as they use Sourcegraph to search and understand code, run batch changes, create insights, and more. You can also customize the default time-saved values to reflect how your team uses Sourcegraph. 

With in-product analytics, you can now report on:
- The number of searches developers have run in Sourcegraph, and how much development time has been saved as a result.
- How many Code Insights charts have been created, viewed, and interacted with.
- The number of changesets that have been created and merged via Batch Changes, and how much time has been saved as a result.
- How frequently code navigation has been used by developers to quickly understand code.
- How often IDE and browser extensions are used across your organization, and how much time has been saved as a result.
- The number of navigation events and the percentage of your repositories that allow precise code navigation.

<div className="mb-sm">
  <Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.0/Search.png"
    alt="In-product analytics"
    caption="Understand usage and quantify the value of using Sourcegraph with in-product analytics"
  />
</div>

<a href="https://docs.sourcegraph.com/admin/analytics" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>

<br />
<Badge link="https://docs.sourcegraph.com/admin/observability/opentelemetry" text="Admin" color="violet" size="small" />

#### Easily export traces using OpenTelemetry

[OpenTelemetry (OTEL)](https://opentelemetry.io/) is an open specification for exporting observability data. We’ve added OpenTelemetry support in Sourcegraph 4.0 so you can easily export tracing data from Sourcegraph into your preferred observability solution. This is a breaking change as we now require you to export tracing with the [OpenTelemetry collector](https://opentelemetry.io/docs/collector/). This is deployed by default in all Sourcegraph deployment methods and replaces the Jaeger agents and collectors that was previously the default.

<a href="https://docs.sourcegraph.com/admin/observability/opentelemetry" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>

<br />
<Badge link="https://docs.sourcegraph.com/admin/external_service" text="Admin" color="violet" size="small" />

#### Quickly see the status on your repositories being synced
New enhancements to the repository status page help you better understand the current state of [repository and permissions syncing](https://docs.sourcegraph.com/admin/external_service?_ga=2.212906964.1999310251.1663878766-858725936.1663878766). A new header displays an up-to-date count of repositories (total, not cloned, cloned, cloning, failed to fetch/clone), notifications are more actionable, and new filters help you drill down into specific repositories. These improvements make it easier for you to understand the current state of repositories synced with Sourcegraph and pinpoint syncing errors if they arise. 

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.0/Repositories.png"
  alt="Repository Status"
  caption="See the current state of your repositories being synced"
/>

<a href="https://docs.sourcegraph.com/admin/external_service" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>

<style>
{`
  h3 { letter-spacing: -0.03em; margin-top: 48px; }
  h4 { letter-spacing: -0.03em; margin-top: 8px; }
`}
</style>
