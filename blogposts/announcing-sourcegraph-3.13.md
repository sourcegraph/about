---
title: "Sourcegraph 3.13: Interactive search mode, structural search toggle, and campaigns with custom code execution"
author: Christina Forney
publishDate: 2020-02-20T10:00-07:00
tags: [
  blog
]
slug: sourcegraph-3.13
heroImage: https://about.sourcegraph.com/sourcegraph-mark.png
published: true
---

Ship better software faster with Sourcegraph Universal Code Search, including code navigation, code intelligence, and code change management. With Sourcegraph, every company has access to the same kind of tools that Google and Facebook developers use every day.

<div style="padding-left: 2rem">

[**🔎 Interactive search mode**](#)<br />

[**🏗 Find code patterns with the structural search toggle**](#)<br />

[**📣 Create campaigns to run arbitrary code over all your repositories using the `src-cli`**](#)<br />

[**🧠 Basic code intelligence support reaches 33 languages**](#)<br />

[**🎯 LSIF-based precise code intelligence for Dart**](#)<br />

[**🕵️‍♀️ New `content` search keyword**](#)<br />

[**📌 Changes to Sourcegraph’s upgrade policy**](#)<br />

[**Syntax highlighting for Scala and Perl**](#)<br />

[**🛠 Customizations**](#)<br />

[**🛎 Addition of code intelligence data to Sourcegraph pings**](#)<br />

[**🧪 Experimental features**](#)<br />
One line summary

[**📝 Changelog**](#changelog)<br />
Every detail that changed in this release

[**🎖️ Thank you**](#thank-you)<br />
Sourcegraph couldn't be what it is without the community

</div>

**Deploy or upgrade:** [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

## Interactive search mode

<p class="container">
  <div style="padding:56.25% 0 0 0;position:relative;">
    <iframe src="https://player.vimeo.com/video/392614914?color=0CB6F4&amp;title=0&amp;byline=" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
  </div>
  <p style="text-align: center"><a href="https://vimeo.com/392614914" target="_blank">View on Vimeo</a></p>
</p>

Interactive search mode helps users construct queries using UI elements and is now enabled by default for all users. In this mode, query filters are more discoverable, and the query input is simplified by extracting filters as UI elements. A dropdown to the left of the search bar allows users to switch between interactive and plain text modes.

The option to use interactive search mode can be disabled by adding `{ "experimentalFeatures": { "splitSearchModes": false } }` in global settings.

## Find code patterns with the structural search toggle

TODO: video

<!-- <p class="container">
  <div style="padding:56.25% 0 0 0;position:relative;">
    <iframe src="https://player.vimeo.com/video/392614914?color=0CB6F4&amp;title=0&amp;byline=" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
  </div>
  <p style="text-align: center"><a href="https://vimeo.com/392614914" target="_blank">View on Vimeo</a></p>
</p> -->

Sourcegraph 3.13 adds a UI toggle <svg class="mdi-icon " style="border:1px solid #2f9cf1; border-radius: 2px; fill:#2b2b2b; background:#cbd4e2" width="24" height="24" viewBox="0 0 24 24"><path d="M15,4V6H18V18H15V20H20V4M4,4V20H9V18H6V6H9V4H4Z"></path></svg> for structural search. Structural search, a code-aware search syntax, was introduced in Sourcegraph 3.11 and previously enabled using the `patternType:structural` query parameter. When enabled, the regexp and case sensitivity toggles will be disabled, since the search types work independently. Structural code search lets you match nested expressions and whole code blocks that can be difficult or awkward to match using regular expressions. Read more about structural search and see examples in our [recent blog post](https://about.sourcegraph.com/blog/going-beyond-regular-expressions-with-structural-code-search).

## Create campaigns to run arbitrary code over all your repositories using the `src-cli`

<p class="container">
  <div style="padding:56.25% 0 0 0;position:relative;">
    <iframe src="https://player.vimeo.com/video/390882141?color=0CB6F4&amp;title=0&amp;byline=" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
  </div>
  <p style="text-align: center"><a href="https://vimeo.com/390882141" target="_blank">View on Vimeo</a></p>
</p>

Sourcegraph code change campaigns now support running arbitrary code over all your repositories. Using the `src-cli`, you will generate a diff from customized steps. This means that you can now run series of steps in your campaigns, such as a find and replace action, then running a linter over the changed code. 

Simply provide an `action.json` with a scope query and command steps. The CLI will programmatically download zips of each of your repositories that match the scope query, and apply each command to each of those repositories. The result will be a diff to be uploaded to Sourcegraph for previewing and creating a campaign.

For example, if I wanted to bump the version of a library my `action.json` would be:

```json

TO DO

```

GitHub labels associated with campaigns are now displayed. Support for Bitbucket Server labels is coming soon. 

When creating a campaign, users can now specify the branch name that will be used on code host. This is also a breaking change for users of the GraphQL API since the `branch` attribute is now required in `CreateCampaignInput` when a `plan` is also specified.

## Basic code intelligence support reaches 32 languages

![Sourcegraph basic code intelligence languages](/images/3-13-language-extensions.png "Sourcegraph basic code intelligence languages")

With the addition of GraphQL, Groovy, Objective-C, Pascal, Protobufs, Verilog, and VHDL, Sourcegraph basic code intelligence now supports 32 languages. Every Sourcegraph instance comes enabled with basic code intelligence provided by search based heuristics. For fast and precise code intelligence see our [LSIF documentation](https://docs.sourcegraph.com/user/code_intelligence/lsif).

## LSIF-based precise code intelligence for Dart

TODO: screenshots

The [Dart LSIF indexer](https://github.com/sourcegraph/lsif-dart) makes precise code intelligence available for Dart projects. LSIF (Language Server Index Format) is a file format for precomputed code intelligence data that you can upload to your Sourcegraph instance for your projects. Follow the [LSIF quickstart guide](https://docs.sourcegraph.com/user/code_intelligence/lsif_quickstart) to get started and see the most up-to-date information on languages with LSIF indexers at [lsif.dev](https://lsif.dev/).

## New `content` search keyword

TODO: video

<!-- <p class="container">
  <div style="padding:56.25% 0 0 0;position:relative;">
    <iframe src="https://player.vimeo.com/video/392614914?color=0CB6F4&amp;title=0&amp;byline=" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
  </div>
  <p style="text-align: center"><a href="https://vimeo.com/392614914" target="_blank">View on Vimeo</a></p>
</p> -->

We added a new `content:` search keyword to help with searching for patterns that might clash with other parts of the query. For example, if you want to search for `file:file` in javascript files, you can now use the following query: `file:.js content:”file:file”`. This parameter overrides any other search patterns in a query.

## Changes to Sourcegraph’s upgrade policy

Upgrading Sourcegraph is officially supported for one minor version increment (e.g., `3.12` -> `3.13`). Previously, upgrades from two minor version increments were supported. Please reach out to support@sourcegraph.com if you would like assistance upgrading from a much older version of Sourcegraph. Our [upgrade policy](https://docs.sourcegraph.com/#upgrading-sourcegraph) is now enforced by the `sourcegraph-frontend` on startup to prevent admins from mistakenly jumping too many versions. 

## Syntax highlighting in hover tooltips for Scala and Perl

TODO: image

Hover tooltips for Scala and Perl files now have syntax highlighting.

## Customization settings

Added a setting `search.hideSuggestions`, which when set to `true`, will hide search suggestions in the search bar.

Added a setting `auth.minPasswordLength`, which when set, causes a minimum password length to be enforced when users sign up or change passwords. [#7521](https://github.com/sourcegraph/sourcegraph/issues/7521)

Repositories with bad object packs or bad objects are automatically repaired. We now detect suspect output of git commands to mark a repository for repair. [#6676](https://github.com/sourcegraph/sourcegraph/issues/6676)

## Addition of code intelligence data to Sourcegraph pings

The privacy of our customers is incredibly important to us, and we only collect data that is aggregated and anonymized, see our [ping philosophy](https://about.sourcegraph.com/handbook/engineering/adding_ping_data#ping-philosophy). Code intelligence usage statistics will be sent back via pings by default. Aggregated event counts can be disabled via the site admin flag `disableNonCriticalTelemetry`. This data addition to our pings is in support of building better code intelligence.

## Experimental features

This release contains several new features that have been released as experimental. We look forward to hearing your feedback about them! Tweet [@srcgraph](https://twitter.com/srcgraph) or email [feedback@sourcegraph.com](mailto:feedback@sourcegraph.com) with your thoughts.

### Smart search field

Experimental: the search query input now provides syntax highlighting, hover tooltips, and diagnostics on filters in search queries. Requires the global settings value `{ "experimentalFeatures": { "smartSearchField": true } }`.

### Custom git fetch commands

Experimental: Added new field `experimentalFeatures.customGitFetch` that allows defining custom git fetch commands for code hosts and repositories with special settings. [#8435](https://github.com/sourcegraph/sourcegraph/pull/8435)

### Import code from any code host with src-expose

A new tool [src-expose](https://docs.sourcegraph.com/admin/external_service/other#experimental-src-expose) enables admins to import code from any code host. This is a useful way to get code from other version control systems or textual artifacts from non-version controlled systems (e.g., configuration) into Sourcegraph.

### Certificate handling

Experimental: Added new field `certificates` as in `{ "experimentalFeatures" { "tls.external": { "certificates": ["&lt;CERT>"] } } }`. This allows you to add certificates to trust when communicating with a code host (via API or git+http). We expect this to be useful for adding internal certificate authorities/self-signed certificates. [#71](https://github.com/sourcegraph/sourcegraph/issues/71)

## Changelog

### Added

- Experimental: Added new field `experimentalFeatures.customGitFetch` that allows defining custom git fetch commands for code hosts and repositories with special settings. [#8435](https://github.com/sourcegraph/sourcegraph/pull/8435)
- Experimental: the search query input now provides syntax highlighting, hover tooltips, and diagnostics on filters in search queries. Requires the global settings value `{ "experimentalFeatures": { "smartSearchField": true } }`.
- Added a setting `search.hideSuggestions`, which when set to `true`, will hide search suggestions in the search bar. [#8059](https://github.com/sourcegraph/sourcegraph/pull/8059)
- Experimental: A tool, [src-expose](https://docs.sourcegraph.com/admin/external_service/other#experimental-src-expose), can be used to import code from any code host.
- Experimental: Added new field `certificates` as in `{ "experimentalFeatures" { "tls.external": { "certificates": ["<CERT>"] } } }`. This allows you to add certificates to trust when communicating with a code host (via API or git+http). We expect this to be useful for adding internal certificate authorities/self-signed certificates. [#71](https://github.com/sourcegraph/sourcegraph/issues/71)
- Added a setting `auth.minPasswordLength`, which when set, causes a minimum password length to be enforced when users sign up or change passwords. [#7521](https://github.com/sourcegraph/sourcegraph/issues/7521)
- GitHub labels associated with code change campaigns are now displayed. [#8115](https://github.com/sourcegraph/sourcegraph/pull/8115)
- When creating a campaign, users can now specify the branch name that will be used on code host. This is also a breaking change for users of the GraphQL API since the `branch` attribute is now required in `CreateCampaignInput` when a `plan` is also specified. [#7646](https://github.com/sourcegraph/sourcegraph/issues/7646)
- Added an optional `content:` parameter for specifying a search pattern. This parameter overrides any other search patterns in a query. Useful for unambiguously specifying what to search for when search strings clash with other query syntax. [#6490](https://github.com/sourcegraph/sourcegraph/issues/6490)
- Interactive search mode, which helps users construct queries using UI elements, is now made available to users by default. A dropdown to the left of the search bar allows users to toggle between interactive and plain text modes. The option to use interactive search mode can be disabled by adding `{ "experimentalFeatures": { "splitSearchModes": false } }` in global settings. [#8461](https://github.com/sourcegraph/sourcegraph/pull/8461)
- Our [upgrade policy](https://docs.sourcegraph.com/#upgrading-sourcegraph) is now enforced by the `sourcegraph-frontend` on startup to prevent admins from mistakenly jumping too many versions. [#8157](https://github.com/sourcegraph/sourcegraph/pull/8157) [#7702](https://github.com/sourcegraph/sourcegraph/issues/7702)
- Repositories with bad object packs or bad objects are automatically repaired. We now detect suspect output of git commands to mark a repository for repair. [#6676](https://github.com/sourcegraph/sourcegraph/issues/6676)
- Hover tooltips for Scala and Perl files now have syntax highlighting. [#8456](https://github.com/sourcegraph/sourcegraph/pull/8456) [#8307](https://github.com/sourcegraph/sourcegraph/issues/8307)

### Changed

- `experimentalFeatures.splitSearchModes` was removed as a site configuration option. It should be set in global/org/user settings.
- Sourcegraph now waits for `90s` instead of `5s` for Redis to be available before quitting. This duration is configurable with the new `SRC_REDIS_WAIT_FOR` environment variable.
- Code intelligence usage statistics will be sent back via pings by default. Aggregated event counts can be disabled via the site admin flag `disableNonCriticalTelemetry`.
- The Sourcegraph Docker image optimized its use of Redis to make start-up significantly faster in certain scenarios (e.g when container restarts were frequent). ([#3300](https://github.com/sourcegraph/sourcegraph/issues/3300), [#2904](https://github.com/sourcegraph/sourcegraph/issues/2904))
- Upgrading Sourcegraph is officially supported for one minor version increment (e.g., 3.12 -> 3.13). Previously, upgrades from 2 minor versions previous were supported. Please reach out to support@sourcegraph.com if you would like assistance upgrading from a much older version of Sourcegraph.
- The GraphQL mutation `previewCampaignPlan` has been renamed to `createCampaignPlan`. This mutation is part of campaigns, which is still in beta and behind a feature flag and thus subject to possible breaking changes while we still work on it.
- The GraphQL field `CampaignPlan.changesets` has been deprecated and will be removed in 3.15. A new field called `CampaignPlan.changesetPlans` has been introduced to make the naming more consistent with the `Campaign.changesetPlans` field. Please use that instead. [#7966](https://github.com/sourcegraph/sourcegraph/pull/7966)
- Long lines (>2000 bytes) are no longer highlighted, in order to prevent performance issues in browser rendering. [#6489](https://github.com/sourcegraph/sourcegraph/issues/6489)
- No longer requires `read:org` permissions for GitHub OAuth if `allowOrgs` is not enabled in the site configuration. [#8163](https://github.com/sourcegraph/sourcegraph/issues/8163)

### Fixed

- The syntax highlighter (syntect-server) no longer fails when run in environments without IPv6 support. [#8463](https://github.com/sourcegraph/sourcegraph/pull/8463)
- After adding/removing a gitserver replica the admin interface will correctly report that repositories that need to move replicas as cloning. [#7970](https://github.com/sourcegraph/sourcegraph/issues/7970)
- Show download button for images. [#7924](https://github.com/sourcegraph/sourcegraph/issues/7924)
- gitserver backoffs trying to re-clone repositories if they fail to clone. In the case of large monorepos that failed this lead to gitserver constantly cloning them and using many resources. [#7804](https://github.com/sourcegraph/sourcegraph/issues/7804)
- It is now possible to escape spaces using `\` in the search queries when using regexp. [#7604](https://github.com/sourcegraph/sourcegraph/issues/7604)
- Clicking filter chips containing whitespace is now correctly quoted in the web UI. [#6498](https://github.com/sourcegraph/sourcegraph/issues/6498)
- **Monitoring:** Fixed an issue with the **Frontend** -> **Search responses by status** panel which caused search response types to not be aggregated as expected. [#7627](https://github.com/sourcegraph/sourcegraph/issues/7627)
- **Monitoring:** Fixed an issue with the **Replacer**, **Repo Updater**, and **Searcher** dashboards would incorrectly report on a metric from the unrelated query-runner service. [#7531](https://github.com/sourcegraph/sourcegraph/issues/7531)
- Deterministic ordering of results from indexed search. Previously when refreshing a page with many results some results may come and go.
- Spread out periodic git reclones. Previously we would reclone all git repositories every 45 days. We now add in a jitter of 12 days to spread out the load for larger installations. [#8259](https://github.com/sourcegraph/sourcegraph/issues/8259)
- Fixed an issue with missing commit information in graphql search results. [#8343](https://github.com/sourcegraph/sourcegraph/pull/8343)

### Removed

- All repository fields related to `enabled` and `disabled` have been removed from the GraphQL API. These fields have been deprecated since 3.4. [#3971](https://github.com/sourcegraph/sourcegraph/pull/3971)
- The deprecated extension API `Hover.__backcompatContents` was removed.

The [changelog for this and previous releases](https://github.com/sourcegraph/sourcegraph/blob/master/CHANGELOG.md#3.13) is available on GitHub.

## Thank you

Thank you to the many people who contributed to Sourcegraph since the last release!

- [@machbio](https://github.com/machbio)
- [@AndreKR](https://github.com/AndreKR)
- [@philjones](https://github.com/philjones)
- [@mipearson](https://github.com/mipearson)
- [@Reagankm](https://github.com/Reagankm)
- [@marco-c](https://github.com/marco-c)
- [@aeb-sia](https://github.com/aeb-sia)
- [@b-j-p](https://github.com/b-j-p)
- [@CH-JosephBironas](https://github.com/CH-JosephBironas)
- [@Akarshit](https://github.com/Akarshit)
- [@Donboscow](https://github.com/Donboscow)
- [@Antoine98](https://github.com/Antoine98)

**Deploy or upgrade:** [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

From the entire Sourcegraph team ([@srcgraph](https://twitter.com/srcgraph)), happy coding!
