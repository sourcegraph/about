---
<!--- Product/Eng planning for 4.0 found here: https://docs.google.com/spreadsheets/d/1fy0A659qSvVP9-7Y-p2VrJKJfph3LI0DTvYMUJ82Iu0/edit#gid=0 -->
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

# Sourcegraph 4.0 Release Post

## Section 1

## Section 2


### Run batch changes server-side

<!-- @malomarrec: The title is the feature, as opposed to the benefit, because there's multiple benefits. Another angle would be to focus on the primary benefit and title this "Run batch changes at large scales" -->

Batch Changes can now run across thousands of repositories, and features a much better development experience. Until now, you had to run `src-cli` locally to create batch changes: `src-cli` would pull repo archives through Sourcegraph, and kick off docker containers locally to run your batch change. For large amounts of repositories or resource-intensive code rewrites, running src-cli locally could take an impractical amount of time or be brittle.

We're introducing the ability to run batch changes server-side instead of locally, which means you can:
- Run large-scale or resource intensive batch changes without clogging your local machine.
- Run large batch changes fast by distributing them across an autoscaled pool of compute instances.
- Get a better debugging experience, with logs being streamed directly into Sourcegraph.
- Simplify setup for end users.

<video loop autoPlay muted playsInline>
  <source src="https://storage.googleapis.com/sourcegraph-assets/blog/4.0/side-by-side.mp4" type="video/mp4" data-cookieconsent="ignore" />
</video>


This feature requires admins to set up executors (much like CI agents), which Sourcegraph will use to offload expensive tasks. Executors can also be used to run [Code Intelligence auto-indexing](#TODO-link-to-section-or-docs). If you're on cloud, one or more executors are available by default on your instance.

### Find and replace that feels like an IDE, across all your code

IDEs can find and replace strings across your local files. Sourcegraph can find and replace strings across _all_ your code. Change boilerplate, fix typos, or update configuration across all your code, without having to write a script or pull your code locally!

Just run a search query, provide a pattern to find and replace, and get a live preview of the diff. If the changes look good, Batch Changes can send them to your team for review, then automatically and safely open changesets across all your repositories, and let you track them until they get merged. 

<!-- @malomarrec: this is a placeholder -->
<img width="1497" alt="placeholder-sourcegraph-find-and-replace" src="https://user-images.githubusercontent.com/25070988/181726971-13007592-c3b9-4f69-a8f3-54e0cf13b7ea.png">

### See high-level aggregations of your search results set, to quickly answer questions about usage and structure

Sourcegraph returns an exhaustive list of search results – but sometimes you need to know things like: 

- Which files have the bulk of these search results? 
- Which repos is this library used in most? 
- Which subcomponents are used most from this library?
- Who is using our new innersource library?  
- Which areas of the code added back in these regressions? 
- What are all the possible arguments we can pass to this function? 

To answer these questions, Sourcegraph now shows you your search results grouped by location (repo or file), author, and arbitrary capture group pattern. If you want to save any aggregations for future reference, you can 1-click save the results to a code insights dashboard.

### Best-in-class performance

<!-- @taylorsperry within the next couple weeks, we'll have a better understanding of the performance claims we can make against our competition -->
Sourcegraph is now faster than ever. We're using the latest in React, lazy loading, and priority rendering to deliver best-in-class performance across the app. Faster rendering means faster answers to any question about your code.

<!-- TODO before/after or sg/gh comparison gifs -->

### DevX: OpenTelemetry and Sourcegraph 4.0
<!--@jhchabran @bobheadxi Here is draft for the blog post.-->
Today we have a myriad of tooling-specific ways for exporting observability data. OpenTelemetry (OTEL) is an open standard and set of tools that enable adopters to easily switch between different platforms for observability data, as well as extend it to fit their own backends. By adopting OpenTelemetry as a default, changing the way we export observability data, and updating various deployment methods accordingly, we can unify our internal infrastructure, eliminate technical debt, and enable customers to easily feed observability data into their own systems.

This will be a breaking change for customers - for example, for tracing today, we only export Jaeger-specific traces and ship Sourcegraph with Jaeger-specific sidecars and agents. By adopting OpenTelemetry, we would swap this out with an OpenTelemetry instance, and remove the need to have Jaeger shipped with every deployment of Sourcegraph, making Jaeger an opt-in deployment, and prompting customers to bring their own tracing backend by default.

In the future we can leverage a similar OpenTelemetry-by-default approach to integrate logs, metrics, and more in the same manner.

<!-- @macraig: this is a draft --> 
### Precise IDE-like code navigation across 9 different languages
- Go, Java, Scala, Kotlin, Python, TypeScript, JavaScript
- New: Ruby, Rust

### New code navigation admin analytics
Introducing an improved version of the code navigation admin dashboard that helps admins understand their percentage of precise navigation coverage and get precise code graph data configured for all repositories.

### Auto-indexing is now available by default for all Cloud customers
Auto-indexing allows customers to set up precise code navigation for any chosen repositories with the click of a button in the Sourcegraph UI. Now, all Cloud teams can enjoy precise code navigation with only minutes of setup, and any member of a team can turn it on for their respective repositories.

<!-- First cut from integrations team -->
### Sunsetting of the Sourcegraph extensions

We will be deprecating our current Sourcegraph extensions framework so that we can make way for a new model that allows a deeper integration throughout our entire code intelligence platform.

In this release your favorite extensions (git-extras, open-in-editor and search-exports) will become part of the core application. Making them faster, more discoverable and ensuring they continue to be improved upon.

### Promoting usage of Browser and IDE extensions

We've added a page to our admin analytics to help you understand the adoption and amount of time saved from using IDE and Browser extensions across your organization. 

To make it easier to roll out our VS Code extension organization wide, we've created an example batch change that adds the extension to your repository’s recommended extensions. Once added, users will be recommended the Sourcegraph extension when opening the repository if they don't have it installed already. 


<!-- First cut from Repo/IAM/Admin Analytics team -->

### Complete Admin Analytics

With 3.42, we introduced an all-new admin analytics including. Now with 4.0, we're significantly improving on the initial release. 4.0 includes dozens of updates including pages for all Sourcegraph features, annual projections for dev-time-saved, data exports, individual user usage table, and much more. 

### 1-click log export 

We would love if everything always worked with Sourcegraph, but no matter how much you test, bugs will always arise. With the introduction of 1-click log exports, we're making it simple to export all logs associated with Sourcegraph to ease the debugging process. 

### Repo config Experience (such as Repo syncing status)

Configuring code host connections and permissions syncing is a core prat of the admin experience, and historically, it has been painful to do. With Sourcegraph 4.0, we have introduced more than X quality of life improvements to help admins understand the current state of repository and permissions syncing. 

<!-- @benvenker Search Product and core workflow draftt -->
### Smarter code search
Search is now more intelligent by defaul and automtically generates and runs alternative queries when your initial query doesn't have many results. This can be disabled so you still get only literal or structural matches when you need to, but in many cases the new smarter search is likely to be better. This will especially benefit new users of Sourcegraph who don't yet know the query syntax. The default query syntax is also simplified, allowing you to combine literal search terms and regular expressions with `/`'s like so: `authentication /^my|regex$/`.

### Simplified UI
We've made a number of small usabilty improvements to simplify the search UI and make Sourcegraph feel less complex.


### More helpfpul homepage content
Improved helpers on the homepage make it easier for new users to get started with Sourcegraph and get tips on how to use the query language.

### Improved search history
Search history will be accessible from the search bar instead of only on the search homepage, making it easier to access.

