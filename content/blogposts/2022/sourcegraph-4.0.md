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

- Smarter code search - blocked for 4.0
### Understand usage and search structure with high-level aggregations of search results
High-level aggregations of search results powered by Code Insights are now displayed in addition to results. Responses to the query are now grouped by location (repo or file), author, and arbitrary capture group pattern to help answer to questions such as:

- Which files have the bulk of these search results?
- Which repositories is this library used in most?
- Which subcomponents are used most from this library?
- Who is using our new innersource library?
- Which areas of the code were added back in these regressions?
- What are all the possible arguments we can pass to this function?
- Aggregation can easily be reused by saving the visualization to your Code Insights dashboard.

Media: provide a screenshot, gif, or video to help support the copy

[Code Insights]

Docs: provide a link to the updated docs
### Configure precise code navigation for 9 languages in a matter of minutes with auto-indexing
Code navigation allows you to quickly jump to symbol definitions, find references, dependencies, and more, so you can spend more time shipping code. Precise code navigation is the most powerful version of code navigation and it works cross-repository. We now support 9 languages including Ruby, Rust, Go, Java, Scala, Kotlin, Python, TypeScript, JavaScript. Auto-indexing makes precise code navigation work across all of your code, automatically, and it’s turned on by default for our Cloud customers. 

Media: provide a screenshot, gif, or video to help support the copy

[Code Navigation]

Docs: provide a link to the updated docs	

### Access code context while staying within the developer workflow 
Top used extensions, including code navigation, git-extras, open-in-editor, and search-exports, are now part of the core functionality. These enhancements provide developers code context while staying in the flow within their preferred tools. Additionally, the current Sourcegraph extensions framework will be deprecated so that we can make way for a new model that allows a deeper integration throughout our entire code intelligence platform. Please note, these changes do not impact our IDE extensions. 

Media: provide a screenshot, gif, or video to help support the copy

[Integrations]

Docs: provide a link to the updated docs	
##### 🏗️ High-leverage ways to improve your entire codebase

### Make changes across all of your codebases at enterprise scale with server-side Batch Changes (beta)
Batch Changes can now run across thousands of repositories with a better development experience. Previously, you had to run src-cli locally to create batch changes. That could take an impractical amount of time or be brittle for large or resource-intensive batch changes. By running Batch Changes server-side you can:

- Run large-scale or resource-intensive batch changes without clogging your local machine
- Run large batch changes quickly by distributing them across an autoscaled pool of compute instances
- Get a better debugging experience with the streaming of logs directly into Sourcegraph.

This feature requires admins to set up executors (much like CI agents), which Sourcegraph will use to offload expensive tasks. Executors can also be used to run [Code Intelligence auto-indexing](https://github.com/sourcegraph/about/blob/bf341aafde75450c295aaec064470017020cdcd8/content/blogposts/2022/sourcegraph-4.0.md#TODO-link-to-section-or-docs) as well. One or more executors are available by default on Cloud instances of Sourcegraph.

[Batch Changes]

[Docs](https://docs.sourcegraph.com/batch_changes/explanations/server_side)

- New packaging updates

##### ☁️ Enterprise Cloud dedicated(/managed?) instances

- [Secure, easy, and scalable Sourcegraph Cloud dedicated(/managed?) instances for the enterprise](/blog/enterprise-cloud)

Headline: [Do X] with [Z]
Description: 2 - 4 sentences on the feature, functionality and benefits
Media: provide a screenshot, gif, or video to help support the copy
Tag by product: [Code Search], [Batch Changes], [Code Navigation], [Code Insights], [Admin]
Docs: provide a link to the updated docs

##### 💖 For admins

- Admin analytics
- 1-click log export
- OpenTelemetry
- Easier repo config


### Run batch changes server-side (Beta)

{/* @malomarrec: The title is the feature, as opposed to the benefit, because there's multiple benefits. Another angle would be to focus on the primary benefit and title this "Run batch changes at large scales" */}

Batch Changes can now run across thousands of repositories, and features a much better development experience. Until now, you had to run `src-cli` locally to create batch changes: `src-cli` would pull repo archives through Sourcegraph, and kick off docker containers locally to run your batch change. For large amounts of repositories or resource-intensive code rewrites, running src-cli locally could take an impractical amount of time or be brittle.

We're moving the ability to run batch changes server-side instead of locally to Beta, which means you can:
- Run large-scale or resource intensive batch changes without clogging your local machine.
- Run large batch changes fast by distributing them across an autoscaled pool of compute instances.
- Get a better debugging experience, with logs being streamed directly into Sourcegraph.
- Simplify setup for end users.

<video loop autoPlay muted playsInline>
  <source src="https://storage.googleapis.com/sourcegraph-assets/blog/4.0/side-by-side.mp4" type="video/mp4" data-cookieconsent="ignore" />
</video>


This feature requires admins to set up executors (much like CI agents), which Sourcegraph will use to offload expensive tasks. Executors can also be used to run [Code Intelligence auto-indexing](#TODO-link-to-section-or-docs). If you're on cloud, one or more executors are available by default on your instance.

### See high-level aggregations of your search results set, to quickly answer questions about usage and structure

Sourcegraph returns an exhaustive list of search results – but sometimes you need to know things like: 

- Which files have the majority of these search results? 
- Which repos is this library used in most? 
- Which library components are used most? By who?
- What are all the possible arguments we pass to this function? 
- And a number of [other examples](TODO ADD LINK TO SEARCH AGGREGATIONS TEMPLATES DOC – coming by late August after we test live on the feature). 

To answer these questions, you can choose to show your search results grouped by location (repo or file), author, and arbitrary capture group pattern.

### Best-in-class performance

{/* @taylorsperry within the next couple weeks, we'll have a better understanding of the performance claims we can make against our competition */}
Sourcegraph is now faster than ever. We're using the latest in React, lazy loading, and priority rendering to deliver best-in-class performance across the app. Faster rendering means faster answers to any question about your code.

{/* TODO before/after or sg/gh comparison gifs */}

### DevX: OpenTelemetry and Sourcegraph 4.0

{/* @jhchabran @bobheadxi Here is draft for the blog post. */}

Today we have a myriad of tooling-specific ways for exporting observability data. OpenTelemetry (OTEL) is an open standard and set of tools that enable adopters to easily switch between different platforms for observability data, as well as extend it to fit their own backends. By adopting OpenTelemetry as a default, changing the way we export observability data, and updating various deployment methods accordingly, we can unify our internal infrastructure, eliminate technical debt, and enable customers to easily feed observability data into their own systems.

This will be a breaking change for customers - for example, for tracing today, we only export Jaeger-specific traces and ship Sourcegraph with Jaeger-specific sidecars and agents. By adopting OpenTelemetry, we would swap this out with an OpenTelemetry instance, and remove the need to have Jaeger shipped with every deployment of Sourcegraph, making Jaeger an opt-in deployment, and prompting customers to bring their own tracing backend by default.

In the future we can leverage a similar OpenTelemetry-by-default approach to integrate logs, metrics, and more in the same manner.

{/* @macraig: this is a draft */} 
### Precise IDE-like code navigation across 9 different languages
- Go, Java, Scala, Kotlin, Python, TypeScript, JavaScript
- New: Ruby, Rust

### New code navigation admin analytics
Introducing an improved version of the code navigation admin dashboard that helps admins understand their percentage of precise navigation coverage and get precise code graph data configured for all repositories.

### Auto-indexing is now available by default for all Cloud customers
Auto-indexing allows customers to set up precise code navigation for any chosen repositories with the click of a button in the Sourcegraph UI. Now, all Cloud teams can enjoy precise code navigation with only minutes of setup, and any member of a team can configure it for their respective repositories.

### New version of the reference panel 
TBD

### Introducing multi-version upgrades
Upgrading a Sourcegraph instance has historically been an eventful and hands-on process for site admins. This means that a considerable amount of our customers struggle to upgrade their instances, and are missing out on a lot of the improvements and new features we've shipped in our latest versions. Starting in 4.0, customers will be able to seamlessly upgrade from any 3.29+ version to 4.0 onwards.
{/* First cut from integrations team */}
### Sunsetting of the Sourcegraph extensions

We will be deprecating our current Sourcegraph extensions framework so that we can make way for a new model that allows a deeper integration throughout our entire code intelligence platform.

In this release your favorite extensions (git-extras, open-in-editor and search-exports) will become part of the core application. Making them faster, more discoverable and ensuring they continue to be improved upon.

### Promoting usage of Browser and IDE extensions

We've added a page to our admin analytics to help you understand the adoption and amount of time saved from using IDE and Browser extensions across your organization. 

To make it easier to roll out our VS Code extension organization wide, we've created an example batch change that adds the extension to your repository’s recommended extensions. Once added, users will be recommended the Sourcegraph extension when opening the repository if they don't have it installed already. 


{/* First cut from Repo/IAM/Admin Analytics team */}

### Complete Admin Analytics

With 3.42, we introduced an all-new admin analytics including. Now with 4.0, we're significantly improving on the initial release. 4.0 includes dozens of updates including pages for all Sourcegraph features, annual projections for dev-time-saved, data exports, individual user usage table, and much more. 

### 1-click log export 

We would love if everything always worked with Sourcegraph, but no matter how much you test, bugs will always arise. With the introduction of 1-click log exports, we're making it simple to export all logs associated with Sourcegraph to ease the debugging process. 

### Repo config Experience (such as Repo syncing status)

Configuring code host connections and permissions syncing is a core part of the admin experience, and historically, it has been painful to do. With Sourcegraph 4.0, we have introduced more than X quality of life improvements to help admins understand the current state of repository and permissions syncing. 

### GitHub App for Site-level codehost config

GitHub Apps are the recommended way to connect with GitHub leveraging more security and flexibility than a basic OAuth connection. Sourcegraph admins can now leverage this new connection type to sync repositories and permissions from GitHub instances. 


{/* @benvenker Search Product and core workflow draftt */}
### Smarter code search
Search is now more intelligent by defaul and automtically generates and runs alternative queries when your initial query doesn't have many results. This can be disabled so you still get only literal or structural matches when you need to, but in many cases the new smarter search is likely to be better. This will especially benefit new users of Sourcegraph who don't yet know the query syntax. The default query syntax is also simplified, allowing you to combine literal search terms and regular expressions with `/`'s like so: `authentication /^my|regex$/`.

### Simplified UI
We've made a number of small usabilty improvements to simplify the search UI and make Sourcegraph feel less complex.


### More helpfpul homepage content
Improved helpers on the homepage make it easier for new users to get started with Sourcegraph and get tips on how to use the query language.

### Improved search history
Search history will be accessible from the search bar instead of only on the search homepage, making it easier to access.


## Install Docker Compose on AWS with 1 Click
Customers now enjoy a simplified installation process via Sourcegraph's 3 new Docker Compose Amazon Machine Images (AMI). With one click, Sourcegraph's intelligent code search installs on their AWS infrastructure. The 3 sizes of AMIs (Small, Medium, and Large) will be able to cater to instances that support up to thousands of concurrent users. Customers can expect other cloud images to be supported in the future.

