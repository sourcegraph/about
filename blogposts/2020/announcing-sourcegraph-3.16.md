---
title: "Sourcegraph 3.16: Version contexts, campaigns, and major syntax highlighting improvements"
author: Christina Forney
publishDate: 2020-05-20T10:00-07:00
tags: [
  blog
]
slug: sourcegraph-3.16
heroImage: https://about.sourcegraph.com/sourcegraph-mark.png
published: true
---

Explore, navigate, and better understand all code, everywhere, faster with Sourcegraph Universal Code Search. Uber, Lyft, Yelp, and other enterprises rely on Sourcegraph to improve developer productivity and manage large-scale code changes.

<div style="padding-left: 2rem">

[**📌 Introducing version contexts to search past releases**](#introducing-version-contexts-to-search-past-releases)<br />

[**📣 Smoother getting started experience for campaigns**](#smoother-getting-started-experience-for-campaigns)<br />

[**🎨 Best in class syntax highlighting**](#best-in-class-syntax-highlighting)<br />

[**👀 Easier to read queries in plain text mode**](#easier-to-read-queries-in-plain-text-mode)<br />

[**🧠 Performance improvements for precise code intelligence**](#performance-improvements-for-precise-code-intelligence)<br />

[**🕵️‍♀️ Discover useful scopes with `repogroup` autocompletion**](#discover-useful-scopes-with-code-classlanguage-textrepogroupcode-autocompletion)<br />

[**🔑 Check syncing status of repository and user permissions**](#check-syncing-status-of-repository-and-user-permissions)<br />

[**📊 Understanding user activity of your instance**](#understanding-user-activity-of-your-instance)<br />

[**ⓘ Improvements to basic code intelligence for several languages**](#improvements-to-basic-code-intelligence-for-several-languages)<br />

[**📝 Changelog**](#changelog)<br />
Every detail that changed in this release

[**🎖️ Thank you**](#thank-you)<br />
Sourcegraph couldn't be what it is without the community.

</div>

**Deploy or upgrade:** [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

<div class="alert alert-info">
  <p>
    <strong>LEARN MORE:</strong><br />
    <a href="https://info.sourcegraph.com/online-meetup-may21?utm_source=blog">
      Online meetup: Sourcegraph 3.16 - Thursday, May 21 at 10AM PDT
    </a>
  </p>
</div>

## Introducing version contexts to search past releases

<div class="my-4 video-embed embed-responsive embed-responsive-16by9 ">
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/S_gj44k97CA?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=0&amp;rel=0" allowfullscreen="" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" frameborder="0"></iframe>
</div>

Many large organizations have old versions of code running in production and need to search across all the code for that release. Sourcegraph 3.16 introduces the ability to create a context consisting of many repositories with specific revisions to be searched. As you explore search results, you might need to navigate your code. Version contexts are respected by code intelligence hovers (go to definition and find references), and allow you to quickly traverse the specific code revisions you care about.

In this release, any non-master branches that are specified in the context will use our non-indexed search. This means that results may be slow for larger deployments. We are working on adding support for indexing additional branches that are specified within the context, and will include this in a future release.

To take advantage of of this feature, add a `versionContexts` block to the experimental features in your site configuration:

```json
"experimentalFeatures": [
  "versionContexts": [
    {
      "name": "srcgraph 3.16",
      "revisions": [
        {
          "repo": "github.com/sourcegraph/sourcegraph",
          "rev": "v3.16.0"
        },
        {
          "repo": "github.com/sourcegraph/zoekt",
          "rev": "b56036a3b745033badc48807bd67e91cd8d73bdf"
        }
      ]
    }
  ]
]
```

## Smoother getting started experience for campaigns

<p class="container">
  <div style="padding:56.25% 0 0 0;position:relative;">
    <iframe src="https://www.youtube.com/embed/aqcCrqRB17w" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
  </div>
  <p style="text-align: center"><a href="https://youtu.be/aqcCrqRB17w" target="_blank">View on YouTube</a></p>
</p>

Besides multiple smaller bug fixes and performance improvements, we aimed to make it easier and more straightforward to start using campaigns on your own Sourcegraph instance by providing clearer instructions in the onboarding process.

We also made it easier to setup the [campaigns webhooks](https://docs.sourcegraph.com/user/campaigns/getting_started), which we highly recommend to reduce load on the code host and to improve the speed with which campaigns are updated in Sourcegraph.

The [documentation for campaigns](https://docs.sourcegraph.com/user/campaigns) has also undergone a complete overhaul and now features a video that explains what campaigns can do and is included above.

Campaign changeset usage counts including changesets created, added, and merged will be sent back in pings.

## Best in class syntax highlighting

TODO: Erik is creating screenshots

We have made major improvements to syntax highlighting throughout Sourcegraph. In addition to general improvements, six new languages are supported (Smarty, Ethereum / Solidity / Vyper, Cuda, COBOL, vb.NET, and ASP.NET), and 30 new file extensions are now detected. 

Additionally, this release adds best-in-class syntax highlighting to code diffs. This richer view of diffs can easily be accessed from your pull request (or merge request) using the Sourcegraph browser extension by clicking on the Sourcegraph button in a file header. Alternatively, you can compare revisions directly from Sourcegraph by going to the compare section from a repository page. You can also see this in action on your [campaigns](#campaigns) to make changes across all the repositories at your organization. 

Take a look at the syntax highlighting on a diff that &lt;WHAT IS THIS DIFF ABOUT> in the Sourcegraph repository.

## Easier to read queries in plain text mode

TODO: video

<!--
<p class="container">
  <div style="padding:56.25% 0 0 0;position:relative;">
    <iframe src="https://www.youtube.com/embed/{VIDEO_ID}" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
  </div>
  <p style="text-align: center"><a href="https://youtu.be/{VIDEO_ID}" target="_blank">View on YouTube</a></p>
</p>
-->

We introduced the smart search bar for plain text mode that provides syntax highlighting, hover tooltips, and diagnostics on search queries in [Sourcegraph 3.13](https://about.sourcegraph.com/blog/sourcegraph-3.13#smart-search-field-in-plain-text-mode). This means that Sourcegraph can provide useful hints, such as fixing invalid quotes, to get to search results faster. Sourcegraph 3.16 removes the feature flag and makes this the standard experience for all users in plain text mode.

## Performance improvements for precise code intelligence

![performance-improvements-code-intel](/blog/3-16-ts-to-go-lsif.png "performance-improvements-code-intel")

As of Sourcegraph 3.16, our precise code intelligence backend has been rewritten from TypeScript to Go. This effort is part of a larger effort to aggressively optimize conversion and querying of LSIF data, which will start becoming more apparent in upcoming releases. Even with this initial improvement, we’re seeing improvements on precise code intelligence query performance. The following graph shows the five-run average duration of our [integration test](https://github.com/sourcegraph/sourcegraph/tree/5f51043ad2130a1acdcfca8b969f907cd03a220d/internal/cmd/precise-code-intel-test) before and after the rewrite.

## Discover useful scopes with `repogroup` autocompletion

<img src="https://storage.googleapis.com/sourcegraph-assets/repogroup_completion.gif" alt="Repogroup autocompletion">

<!--
<p class="container">
  <div style="padding:56.25% 0 0 0;position:relative;">
    <iframe src="https://www.youtube.com/embed/{VIDEO_ID}" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
  </div>
  <p style="text-align: center"><a href="https://youtu.be/{VIDEO_ID}" target="_blank">View on YouTube</a></p>
</p>
-->

The `repogroup` filter is useful for creating collections of repositories to search over within Sourcegraph. However, there wasn’t an easy way for users to learn what `repogroups` were available. Now, Sourcegraph provides autocompletion to help you discover available options. This happens automatically when you start typing, or can be triggered using the ctrl-spacebar keyboard shortcut. Try it out in the new smart search bar for plain text mode or in interactive mode!

## Check syncing status of repository and user permissions

![repository-permissions](https://user-images.githubusercontent.com/2946214/82042090-dd1eaa00-96db-11ea-9fd7-99e0e82a3d0b.png)

Sourcegraph 3.14 and 3.15 introduced a more performant background permissions syncing solution for Bitbucket Server, GitLab, and GitHub repository permissions. Sourcegraph 3.16 adds new permissions pages to user and repository settings when background permissions syncing is enabled. These pages allow admins to check the last time permissions were synced and manually trigger the syncing process for an immediate refresh to the user or repository’s permissions.

Enable this feature by adding ` "permissions.backgroundSync": {"enabled": true}` in your site configuration settings.

## Understanding user activity of your instance

![usage-activity-histogram](/blog/3-16-activity-histogram.png "usage activity histogram")

We want to better understand the activity of users on a Sourcegraph instance while still upholding our commitment to only collecting anonymized, aggregated, and non-specific information (see our [ping philosophy](https://about.sourcegraph.com/handbook/engineering/adding_ping_data#ping-philosophy)). Many admins have asked to better understand the engagement of users on their instances, and in Sourcegraph 3.16 we provide a way to export this data. We will be adding an activity histogram and other visualizations to the admin area in future releases. You may also opt to share this data with Sourcegraph to help us make product decisions that make Sourcegraph even better, and we’ll share the results with you.

## Improvements to basic code intelligence for several languages

The out-of-the-box search-based code intelligence was broken on indexed commits for Haskell, JSONNet, Kotlin, Scala, Swift, Thrift, and TypeScript for several releases. Our symbol indexer did not know how to extract symbols for these languages, even though our unindexed symbol service did. This has been fixed and users with code in these languages should expect to see code intelligence hovers for their code once again!

Additionally, Cobol and Tcl have been added to our growing list of languages supported via Sourcegraph’s basic code intelligence. Every Sourcegraph instance comes enabled with basic code intelligence provided by search-based heuristics. For fast and precise code intelligence, see our [LSIF documentation](https://docs.sourcegraph.com/user/code_intelligence/lsif).

## Changelog

### Added

- Autocompletion for `repogroup` filters in search queries. [#10141](https://github.com/sourcegraph/sourcegraph/pull/10286)
- If the experimental feature flag `codeInsights` is enabled, extensions can contribute content to directory pages through the experimental `ViewProvider` API. [#10236](https://github.com/sourcegraph/sourcegraph/pull/10236)
  - Directory pages are then represented as an experimental `DirectoryViewer` in the `visibleViewComponents` of the extension API. **Note: This may break extensions that were assuming `visibleViewComponents` were always `CodeEditor`s and did not check the `type` property.** Extensions checking the `type` property will continue to work. [#10236](https://github.com/sourcegraph/sourcegraph/pull/10236)
- [Major syntax highlighting improvements](https://github.com/sourcegraph/syntect_server/pull/29), including:
  - 228 commits / 1 year of improvements to the syntax highlighter library Sourcegraph uses ([syntect](https://github.com/trishume/syntect)).
  - 432 commits / 1 year of improvements to the base syntax definitions for ~36 languages Sourcegraph uses ([sublimehq/Packages](https://github.com/sublimehq/Packages)).
  - 30 new file extensions/names now detected.
  - Likely fixes other major instability and language support issues. #9557
  - Added [Smarty](#2885), [Ethereum / Solidity / Vyper)](#2440), [Cuda](#5907), [COBOL](#10154), [vb.NET](#4901), and [ASP.NET](#4262) syntax highlighting.
  - Fixed OCaml syntax highlighting #3545
  - Bazel/Starlark support improved (.star, BUILD, and many more extensions now properly highlighted). #8123
- New permissions page in both user and repository settings when background permissions syncing is enabled (`"permissions.backgroundSync": {"enabled": true}`). [#10473](https://github.com/sourcegraph/sourcegraph/pull/10473) [#10655](https://github.com/sourcegraph/sourcegraph/pull/10655)
- A new dropdown for choosing version contexts appears on the left of the query input when version contexts are specified in `experimentalFeatures.versionContext` in site configuration. Version contexts allow you to scope your search to specific sets of repos at revisions.
- Campaign changeset usage counts including changesets created, added and merged will be sent back in pings. [#10591](https://github.com/sourcegraph/sourcegraph/pull/10591)
- Diff views now feature syntax highlighting and can be properly copy-pasted. [#10437](https://github.com/sourcegraph/sourcegraph/pull/10437)
- Admins can now download an anonymized usage statistics ZIP archive in the **Site admin > Usage stats**. Opting to share this archive with the Sourcegraph team helps us make the product even better. [#10475](https://github.com/sourcegraph/sourcegraph/pull/10475)
- Extension API: There is now a field `versionContext` and subscribable `versionContextChanges` in `Workspace` to allow extensions to respect the instance's version context.
- The smart search field, providing syntax highlighting, hover tooltips, and validation on filters in search queries, is now activated by default. It can be disabled by setting `{ "experimentalFeatures": { "smartSearchField": false } }` in global settings.

### Changed

- The `userID` and `orgID` fields in the SavedSearch type in the GraphQL API have been replaced with a `namespace` field. To get the ID of the user or org that owns the saved search, use `namespace.id`. [#5327](https://github.com/sourcegraph/sourcegraph/pull/5327)
- Tree pages now redirect to blob pages if the path is not a tree and vice versa. [#10193](https://github.com/sourcegraph/sourcegraph/pull/10193)
- Files and directories that are not found now return a 404 status code. [#10193](https://github.com/sourcegraph/sourcegraph/pull/10193)
- The site admin flag `disableNonCriticalTelemetry` now allows Sourcegraph admins to disable most anonymous telemetry. Visit https://docs.sourcegraph.com/admin/pings to learn more. [#10402](https://github.com/sourcegraph/sourcegraph/pull/10402)

### Fixed

- In the OSS version of Sourcegraph, authorization providers are properly initialized and GraphQL APIs are no longer blocked. [#3487](https://github.com/sourcegraph/sourcegraph/issues/3487)
- Previously, GitLab repository paths containing certain characters could not be excluded (slashes and periods in parts of the paths). These characters are now allowed, so the repository paths can be excluded. [#10096](https://github.com/sourcegraph/sourcegraph/issues/10096)
- Symbols for indexed commits in languages Haskell, JSONNet, Kotlin, Scala, Swift, Thrift, and TypeScript will show up again. Previously our symbol indexer would not know how to extract symbols for those languages even though our unindexed symbol service did. [#10357](https://github.com/sourcegraph/sourcegraph/issues/10357)
- When periodically re-cloning a repository it will still be available. [#10663](https://github.com/sourcegraph/sourcegraph/pull/10663)

### Removed

- The deprecated feature discussions has been removed. [#9649](https://github.com/sourcegraph/sourcegraph/issues/9649)

The [changelog for this and previous releases](https://github.com/sourcegraph/sourcegraph/blob/master/CHANGELOG.md#3.16) is available on GitHub.

## Thank you

Thank you to the many people who contributed to Sourcegraph since the last release!

- [@blanet](https://github.com/blanet)
- [@dobrou](https://github.com/dobrou)
- [@yg](https://github.com/yg)
- [@souldzin](https://github.com/souldzin)
- [@YouveGotMeowxy](https://github.com/YouveGotMeowxy)
- [@b-j-p](https://github.com/b-j-p)
- [@jlangston](https://github.com/jlangston)
- [@yaohui-wyh](https://github.com/yaohui-wyh)
- [@eight04](https://github.com/eight04)
- [@marco-c](https://github.com/marco-c)
- [@jhutchings1](https://github.com/jhutchings1)
- [@philjones](https://github.com/philjones)

**Deploy or upgrade:** [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

From the entire Sourcegraph team ([@srcgraph](https://twitter.com/srcgraph)), happy coding!
