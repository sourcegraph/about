---
title: "Sourcegraph 3.13: Interactive search mode, structural search toggle, and campaigns with custom code execution"
authors:
  - name: Christina Forney
    url: https://handbook.sourcegraph.com/team/#christina-forney
publishDate: 2020-02-20T10:00-07:00
tags: [
  blog
]
slug: sourcegraph-3.13
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
description: "Sourcegraph 3.13: Interactive search mode, structural search toggle, and campaigns with custom code execution"
---

Quickly explore and better understand all the code everywhere with Sourcegraph Universal Code Search. With Sourcegraph, every company has access to the same kind of tools that Google and Facebook developers use every day.

<div style={{paddingLeft: '2rem'}}>

[**🔎 Interactive search mode**](#interactive-search-mode)<br />

[**🏗 Code-aware structural search toggle**](#code-aware-structural-search-toggle)<br />

[**📣 Campaigns with custom code execution using `src-cli`**](#campaigns-with-custom-code-execution-using-code-classlanguage-textsrc-clicode)<br />

[**🧠 Basic code intelligence support reaches 32 languages**](#basic-code-intelligence-support-reaches-32-languages)<br />

[**🎯 LSIF-based precise code intelligence for Dart**](#lsif-based-precise-code-intelligence-for-dart)<br />

[**🕵️‍♀️ New `content` search keyword**](#new-code-classlanguage-textcontentcode-search-keyword)<br />

[**🏷 Campaign UI updates**](#custom-branch-names-and-github-labels-for-campaigns)<br />
Custom branch names and GitHub labels

[**📌 Changes to Sourcegraph’s upgrade policy**](#changes-to-sourcegraphs-upgrade-policy)<br />

[**🛠 Customization settings**](#customization-settings)<br />

[**🛎 Code intelligence and campaigns data added to Sourcegraph pings**](#code-intelligence-and-campaigns-data-added-to-sourcegraph-pings)<br />

[**🧪 Experimental features**](#experimental-features)<br />
Smart search field in plain text mode, custom git fetch commands, and importing code from any code host with `src-expose`

[**📝 Changelog**](#changelog)<br />
Every detail that changed in this release

[**🎖️ Thank you**](#thank-you)<br />
Sourcegraph couldn't be what it is without the community

</div>

**Deploy or upgrade:** [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

## Interactive search mode

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/392614914?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/392614914" target="_blank">View on Vimeo</a></p>
</div>

Interactive search mode helps users construct queries using UI elements, and is now enabled by default for all users. In this mode, search filters are more discoverable and the query input is simplified to the search query pattern. A dropdown to the left of the search bar allows users to switch between interactive and plain text modes.

The option to use interactive search mode can be disabled by adding `{ "experimentalFeatures": { "splitSearchModes": false } }` in global settings.

## Code-aware structural search toggle

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/392724955?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/392724955" target="_blank">View on Vimeo</a></p>
</div>

Sourcegraph 3.13 adds a UI toggle <svg className="mdi-icon " style={{border:'1px solid #2f9cf1', borderRadius:'2px', fill: '#2b2b2b', background: '#cbd4e2'}} width="24" height="24" viewBox="0 0 24 24"><path d="M15,4V6H18V18H15V20H20V4M4,4V20H9V18H6V6H9V4H4Z"></path></svg> for structural search, a code-aware search syntax. Structural search was introduced in Sourcegraph 3.11 and was previously enabled using the `patternType:structural` query parameter. When enabled, the regexp and case sensitivity toggles will be disabled, since the search types work independently. Structural code search lets you match nested expressions and whole code blocks that can be difficult or awkward to match using regular expressions. Read more about structural search and see examples in our recent blog post ["Going beyond regular expressions with structural code search"](https://about.sourcegraph.com/blog/going-beyond-regular-expressions-with-structural-code-search).

## Campaigns with custom code execution using `src-cli`

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/390882141?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/390882141" target="_blank">View on Vimeo</a></p>
</div>

Sourcegraph campaigns now support running arbitrary code over all your repositories using the [Sourcegraph CLI](https://github.com/sourcegraph/src-cli). This is helpful when you need to run a series of steps over your code, or run a formatter after making an update.

The `src-cli` takes your custom `action.json` file, containing a `scopeQuery` and series of commands as `steps`, as input. It then programmatically downloads zips of each repository that match the `scopeQuery`, applies each command step, and generates a diff with the changes. The resulting diff file can then be sent to Sourcegraph so you can preview the changes and create the campaign.

For example, if I wanted to bump the version of RxJS in several repositories, my [`action.json`](https://github.com/sourcegraph/campaign-examples/tree/master/rxjs-upgrade) using a Docker container could be:

```json
{
  "scopeQuery": "repohasfile:yarn.lock file:^package.json$ archived:no fork:no rxjs",
  "steps": [
    {
      "type": "docker",
      "image": "sourcegraph/rxjs-upgrade:latest"
    }
  ]
}
```

See [our documentation](https://docs.sourcegraph.com/campaigns) for more details and examples.

Code change management campaigns are in private beta. [Watch the campaigns screencasts](https://about.sourcegraph.com/product/code-change-management#see-it-in-action) to see what we have planned, and [apply for early access](https://about.sourcegraph.com/contact/request-code-change-management-demo/) to campaigns for your organization.

## Basic code intelligence support reaches 32 languages

![Sourcegraph basic code intelligence languages](/blog/3-13-language-extensions.png)

With the addition of GraphQL, Groovy, Objective-C, Pascal, Protobufs, Verilog, and VHDL, Sourcegraph basic code intelligence now supports 32 languages. Every Sourcegraph instance comes enabled with basic code intelligence provided by search based heuristics. For fast and precise code intelligence see our [LSIF documentation](https://docs.sourcegraph.com/code_intelligence/explanations/precise_code_intelligence).

## LSIF-based precise code intelligence for Dart

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/392760161?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/392760161" target="_blank">View on Vimeo</a></p>
</div>

The [Dart LSIF indexer](https://github.com/sourcegraph/lsif-dart) makes precise code intelligence available for Dart projects. LSIF (Language Server Index Format) is a file format for precomputed code intelligence data that you can upload to your Sourcegraph instance for your projects. Follow the [LSIF quickstart guide](https://docs.sourcegraph.com/code_intelligence/lsif_quickstart) to get started and see the most up-to-date information on languages with LSIF indexers at [lsif.dev](https://lsif.dev/).

## New `content` search keyword

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/392639232?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/392639232" target="_blank">View on Vimeo</a></p>
</div>

We added a new `content:` search keyword to help you search for patterns that might clash with other parts of the query. For example, if you want to search for `file:file` in javascript files, you can now use the following query: `file:.js content:"file:file"`. This parameter overrides any other search patterns in a query.

## Campaign UI updates

![Campaign branch name](/blog/campaigns-branch-name.png)

- Users can now specify the branch name during campaign creation. When using the GraphQL API to create a campaign, the branch name is now required.
- Campaign changesets now display labels from code hosts. GitHub labels are currently supported and Bitbucket Server labels are coming soon.

## Changes to Sourcegraph’s upgrade policy

Our upgrade policy previously supported upgrades from two minor version increments. We have updated our policy to restrict upgrading to one minor version at a time (e.g., `3.12` -> `3.13`). Please reach out to support@sourcegraph.com if you would like assistance upgrading from a much older version of Sourcegraph. This [upgrade policy](https://docs.sourcegraph.com/#upgrading-sourcegraph) is now enforced by the `sourcegraph-frontend` on startup to prevent admins from mistakenly jumping too many versions.

## Customization settings

Sourcegraph 3.13 introduces two new customization settings:

- Users who prefer not to see search autocompletion suggestions can hide them by setting `search.hideSuggestions` to `true` in their user settings.
- Admins can now set a minimum password length on their instance. Add `auth.minPasswordLength` to the site config to enforce the password length when users create accounts or update passwords.

## Code intelligence and campaigns data added to Sourcegraph pings

Sourcegraph collects a small amount of high-level and aggregate data from each instance. See the complete list of the [data we collect](https://docs.sourcegraph.com/admin/pings), and our [ping philosophy and rules](https://handbook.sourcegraph.com/engineering/adding_ping_data#ping-philosophy). New usage statistics—specifically, aggregate counts of the numbers of hover, go to definition, and find references actions, aggregated 50th, 95th, and 99th percentile latencies for the same actions, and a total count of code change campaigns created, will be sent to Sourcegraph via pings by default. The aggregated event count metrics can be disabled via the site admin flag `disableNonCriticalTelemetry`.

## Experimental features

This release contains several new experimental features. We look forward to hearing your feedback about them! Tweet [@sourcegraph](https://twitter.com/sourcegraph) or email [feedback@sourcegraph.com](mailto:feedback@sourcegraph.com) with your thoughts.

### Smart search field in plain text mode

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/392761379?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/392761379" target="_blank">View on Vimeo</a></p>
</div>

The plain text mode search query input field now provides syntax highlighting, hover tooltips, and diagnostics on filters. Set the user or global settings value `{ "experimentalFeatures": { "smartSearchField": true } }` to take advantage of this feature.

### Custom git fetch commands

A new experimenal field `experimentalFeatures.customGitFetch` allows defining custom git fetch commands for code hosts and repositories with special settings.

### Import code from any code host with src-expose

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/368923038?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/368923038" target="_blank">View on Vimeo</a></p>
</div>

[src-expose](https://docs.sourcegraph.com/admin/external_service/other#experimental-src-expose) is a new tool that enables admins to import code from any code host. This makes it possible to bring code from other version control systems or textual artifacts from non-version controlled systems (e.g., configuration) into Sourcegraph.

### Certificate handling

The new `certificates` field allows you to add certificates to trust when communicating with a code host (via API or git+http). This is useful for configurations using internal certificate authorities or self-signed certificates. Add  `{ "experimentalFeatures" { "tls.external": { "certificates": ["<CERT>"] } } }` to your site config.

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

The [changelog for this and previous releases](https://github.com/sourcegraph/sourcegraph/blob/main/CHANGELOG.md#3.13) is available on GitHub.

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

From the entire Sourcegraph team ([@sourcegraph](https://twitter.com/sourcegraph)), happy coding!
