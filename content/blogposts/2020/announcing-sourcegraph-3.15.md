---
title: "Sourcegraph 3.15: Campaigns beta available, GitHub repository permissions, experimental AND/OR operators, and improved observability"
authors:
  - name: Christina Forney
    url: https://handbook.sourcegraph.com/team/#christina-forney
publishDate: 2020-04-20T10:00-07:00
tags: [
  blog
]
slug: sourcegraph-3.15
heroImage: /blog/3.15-release-blog-img.jpg
published: true
description: "Sourcegraph 3.15: Campaigns beta available, GitHub repository permissions, experimental AND/OR operators, and improved observability"
---

Explore, navigate, and better understand all code, everywhere, faster with Sourcegraph Universal Code Search. Uber, Lyft, Yelp, and other enterprises rely on Sourcegraph to improve developer productivity and manage large-scale code changes.

<div style={{paddingLeft: '2rem'}}>

[**📣 Campaigns beta available to all site admins**](#campaigns-beta-available-to-all-site-admins)<br />

[**🔑 Faster syncing of GitHub repository permissions**](#faster-syncing-of-github-repository-permissions)<br />

[**🔎 Experimental AND/OR operators for search contents**](#experimental-andor-operators-for-search-contents)<br />

[**📈 Improved observability**](#improved-observability)<br />

[**👀 New visibility filter for scoping searches to public or private repositories**](#new-visibility-filter-for-scoping-searches-to-public-or-private-repositories)<br />

[**🏁 Getting started prompt contains more context**](#getting-started-prompt-contains-more-context)<br />

[**🧩 Extension and code intelligence UI improvements**](#extension-and-code-intelligence-ui-improvements)<br />

[**⚙️ User event logs available in user settings**](#user-event-logs-available-in-user-settings)<br />

[**🧪 Experimental deterministic search results**](#experimental-deterministic-search-results)<br />

[**🍴 Setting to include forked and archived repositories**](#setting-to-include-forked-and-archived-repositories)<br />

[**🔒 Deploy Sourcegraph behind a proxy**](#deploy-sourcegraph-behind-a-proxy)<br />

[**📝 Changelog**](#changelog)<br />
Every detail that changed in this release

[**🎖️ Thank you**](#thank-you)<br />
Sourcegraph couldn't be what it is without the community.

</div>

**Deploy or upgrade:** [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

---

Go in-depth with the 3.15 release by watching the recorded livestream with Product Manager [Christina Forney](https://twitter.com/christina4nee) and CTO [Beyang Liu](https://twitter.com/beyang).

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://www.youtube-nocookie.com/embed/EJ221hdssDw" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
</div>

**NOTE**: Sourcegraph site admins should definitely check out [Beyang discussing improvements to monitoring, observability, and alerting](https://youtu.be/EJ221hdssDw?t=507).

---


## Campaigns beta available to all site admins

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://www.youtube-nocookie.com/embed/ju0XEFU31W0" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://youtu.be/ju0XEFU31W0" target="_blank">View on YouTube</a></p>
</div>

Campaigns are available for general use in beta by any Sourcegraph instance admin. Users of Sourcegraph.com will need to run a private Sourcegraph instance with their repositories added to try running campaigns on their code. Sourcegraph admins can enable campaigns on their instance by adding `{"experimentalFeatures": { "automation": "enabled" }}”` to their site configuration settings.

We are excited to hear about the campaigns you run, answer questions you have, and hear your feedback! Get in touch on Twitter [@sourcegraph](https://twitter.com/sourcegraph), file an issue in our [public issue tracker](https://github.com/sourcegraph/sourcegraph/issues), or email [feedback@sourcegraph.com](mailto:feedback@sourcegraph.com).

Campaigns are currently in beta. During the beta period, campaigns are free to use. After the beta period, campaigns will be available as a paid add-on. Please [contact us](mailto:sales@sourcegraph.com) for more information.

## Faster syncing of GitHub repository permissions

Sourcegraph 3.15 adds faster repository permissions syncing at scale for GitHub. This functionality was previously [introduced for GitLab and Bitbucket Server](https://about.sourcegraph.com/blog/sourcegraph-3.14#faster-syncing-of-gitlab-and-bitbucket-server-repository-permissions) in Sourcegraph 3.14. Rather than syncing a user's permissions when they log in and potentially blocking them from seeing search results, Sourcegraph syncs these permissions asynchronously in the background, opportunistically refreshing them in a timely manner. See the [documentation for more details](https://docs.sourcegraph.com/admin/repo/permissions#background-permissions-syncing).

Enable this feature by adding `"permissions.backgroundSync": {"enabled": true}` in your site configuration settings.

## Experimental AND/OR operators for search contents

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://www.youtube-nocookie.com/embed/PAsZP6wv3Gg" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://youtu.be/PAsZP6wv3Gg" target="_blank">View on YouTube</a></p>
</div>

Search for file contents using AND and OR expressions in queries. These operators enable more expressive searches in regexp and structural search modes. [The documentation](https://docs.sourcegraph.com/code_search/reference/queries#operators) includes more details about how to these operators and their precedence and grouping.

For example, if you want to find all of the places where two functions are within the same file, you can use the AND operator: `conf.Get( and log15.Error(` &mdash; [see example query results](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+conf.Get%28+and+log15.Error%28&patternType=regexp).

Or, if you want to find everywhere two functions are used whether or not the other is present, you would use the OR operator: `conf.Get( or log15.Error(` &mdash; [see example query results](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+conf.Get%28+or+log15.Error%28&patternType=regexp).

You can even use them together: `("conf.Get(" or "log15.Error(") and after` &mdash; [see example query results](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+%28%22conf.Get%28%22+or+%22log15.Error%28%22%29+and+after&patternType=regexp).

Currently, operators only support searching file contents and do not apply to search scopes - you will see an alert if your query is not supported.

Enable this feature by adding `{"experimentalFeatures": {"andOrQuery": "enabled"}}` to site configuration settings.

## Improved observability

We continue to invest heavily in making Sourcegraph easier to monitor and debug out-of-the-box.

### Monitoring

- **Sourcegraph now has pre-defined alerts for 93 metrics across 14 services for improved monitoring.** For now, these new alerts are warning-level alerts. In the future, they will be elevated to critical-level alerts when there is more confidence in their accuracy.
- 8 bug fixes to alerting and dashboards.
- 11 changes to improve the legibility and visibility of dashboards.

Additionally:

- All dashboard panels now show an orange/red background when a metric is reaching its warning/critical threshold, making it easy to see which metrics are most interesting.
- Search error rate and latency is now broken down by type on the frontend dashboard:
  - Search at a glance (browser web UI).
  - Search-based code intelligence at a glance.
  - Search API usage at a glance.

**IMPORTANT:** If you have previously configured alert thresholds on the frontend dashboard manually (instead of on the Grafana home dashboard as typically recommended), you will need to reconfigure those alert thresholds again after upgrading.

![image](https://user-images.githubusercontent.com/3173176/79792360-9e2b4d80-8303-11ea-91e5-cb7e9c972358.png)

### Debugging

We've added a new tool to all Sourcegraph deployments by default: Distributed tracing. It is a powerful tool for investigating performance issues. You can enable tracing selectively per-request and capture detailed information about, for example, a search request which can then easily be inspected to find out what the slowest parts were within the inner-workings of Sourcegraph.

To use tracing, please see our [documentation](https://docs.sourcegraph.com/admin/observability/tracing).

Additionally, it is now possible to log all search and GraphQL requests slower than N milliseconds, using the new site configuration options `observability.logSlowGraphQLRequests` and `observability.logSlowSearches`. When Sourcegraph's monitoring (or your instances' users) inform you that queries are slow, this allows you to see the exact details of the search or GraphQL request needed to reproduce it.

## New visibility filter for scoping searches to public or private repositories

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://www.youtube-nocookie.com/embed/Q2ZWPwMmbOI" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://youtu.be/Q2ZWPwMmbOI" target="_blank">View on YouTube</a></p>
</div>

The new `visibility:` search scope enables filtering based on a repository's shared state on the code host. Scope options include any, public, or private, and defaults to `visibility:any` when the scope is not specified.

## Getting started prompt contains more context

![Getting started with more context](/blog/3-15-getting-started.png)

When using Sourcegraph for the first time on a private instance, a getting started section is shown to help admins and users make sure their Sourcegraph instance is properly configured, and that they know how to perform a search. The getting started steps now include more context about how to complete each step.

## Extension and code intelligence UI improvements

![Extension UI improvements](https://user-images.githubusercontent.com/10532611/79908315-50a20400-841b-11ea-9311-66030a2fd64f.gif)

Even small things can have a large impact on user experience, and we are working on improving how users interact with Sourcegraph. For this release, we cleaned up the design of buttons contributed by [extensions](https://docs.sourcegraph.com/extensions) in the Sourcegraph webapp and on code host [integrations](https://docs.sourcegraph.com/integration). In addition, we reworked our logic for when we display loading indicators in hover tooltips that sometimes caused tooltips to not show up reliably. These changes provide a more consistent experience with visual elements and component interactions.

## User event logs available in user settings

![user event log](/blog/3-15-user-event-log.png)

Users and site administrators can now view a log of their actions/events in user settings. This enables site admins to perform rough audits of users and also helps users better understand the information Sourcegraph logs.

## Experimental deterministic search results

A new experimental search scope `stable:true` has been added to provide results with a deterministic search result order. This search scope only applies to file contents and is limited to 5,000 maximum results. You should consider using the paginated search API if you need more than 5,000 results.

## Setting to include forked and archived repositories

Sourcegraph 3.14 removed archived and forked repositories from search results by default. While this was an improvement to most users, some organizations have a configuration that necessitates searching these repositories. Sourcegraph 3.15 enables those organizations to add a global setting to their instance to always include forks or archived repositories in searches. Enable this in global, organization, or user settings with `"search.includeForks": true` or `"search.includeArchived": true` respectively.

## Deploy Sourcegraph behind a proxy

For organizations that need to run Sourcegraph behind a proxy, `git fetch` and `git clone` now inherit the parent process environment variables. This allows site admins to set HTTPS_PROXY or [git http configurations](https://git-scm.com/docs/git-config/2.26.0#Documentation/git-config.txt-httpproxy) via environment variables. For cluster environments, site admins should set this on the gitserver container.

## Changelog

### Added

- Users and site administrators can now view a log of their actions/events in the user settings. [#9141](https://github.com/sourcegraph/sourcegraph/pull/9141)
- With the new `visibility:` filter, search results can now be filtered based on a repository's visibility (possible filter values: `any`, `public` or `private`). [#8344](https://github.com/sourcegraph/sourcegraph/issues/8344)
- [`sourcegraph/git-extras`](https://sourcegraph.com/extensions/sourcegraph/git-extras) is now enabled by default on new instances. [#3501](https://github.com/sourcegraph/sourcegraph/issues/3501)
- The Sourcegraph Docker image will now copy `/etc/sourcegraph/gitconfig` to `$HOME/.gitconfig`. This is a convenience similiar to what we provide for [repositories that need HTTP(S) or SSH authentication](https://docs.sourcegraph.com/admin/repo/auth). [#658](https://github.com/sourcegraph/sourcegraph/issues/658)
- Permissions background syncing is now supported for GitHub via site configuration `"permissions.backgroundSync": {"enabled": true}`. [#8890](https://github.com/sourcegraph/sourcegraph/issues/8890)
- Search: Adding `stable:true` to a query ensures a deterministic search result order. This is an experimental parameter. It applies only to file contents, and is limited to max. 5,000 results (consider using [the paginated search API](https://docs.sourcegraph.com/api/graphql/search#sourcegraph-3-9-experimental-paginated-search) if you need more than that.). [#9681](https://github.com/sourcegraph/sourcegraph/pull/9681).
- After completing the Sourcegraph user feedback survey, a button may appear for tweeting this feedback at [@sourcegraph](https://twitter.com/sourcegraph). [#9728](https://github.com/sourcegraph/sourcegraph/pull/9728)
- `git fetch` and `git clone` now inherit the parent process environment variables. This allows site admins to set `HTTPS_PROXY` or [git http configurations](https://git-scm.com/docs/git-config/2.26.0#Documentation/git-config.txt-httpproxy) via environment variables. For cluster environments, site admins should set this on the gitserver container. [#250](https://github.com/sourcegraph/sourcegraph/issues/250)
- Experimental: Search for file contents using `and`- and `or`-expressions in queries. This is enabled via the global settings value `{"experimentalFeatures": {"andOrQuery": "enabled"}}`. [#8567](https://github.com/sourcegraph/sourcegraph/issues/8567)
- Always include forks or archived repositories in searches via the global/org/user settings with `"search.includeForks": true` or `"search.includeArchived": true` respectively. [#9927](https://github.com/sourcegraph/sourcegraph/issues/9927)
- Observability (debugging): It is now possible to log all search and GraphQL requests slower than N milliseconds, using the new site configuration options `observability.logSlowGraphQLRequests` and `observability.logSlowSearches`.
- Observability (monitoring): **More metrics monitored and alerted on, more legible dashboards**
  - Dashboard panels now show an orange/red background color when the defined warning/critical alert threshold has been met, making it even easier to see what is in a bad state on a dashboard.
  - Symbols: Failing `symbols` -> `frontend-internal` requests are now monitored. [#9732](https://github.com/sourcegraph/sourcegraph/issues/9732)
  - Frontend dashboard: Search error types are now broken into distinct panels for improved visibility/legibility.
    - **IMPORTANT**: If you have previously configured alerting on any of these panels or on "hard search errors", you will need to reconfigure it after upgrading.
  - Frontend dashboard: Search error and latency are now broken down by type: Browser requests, search-based code intel requests, and API requests.
- Observability (debugging): **Distributed tracing is a powerful tool for investigating performance issues.** The following changes have been made with the goal of making it easier to use distributed tracing with Sourcegraph:

  - The site configuration field `"observability.tracing": { "sampling": "..." }` allows a site admin to control which requests generate tracing data.
    - `"all"` will trace all requests.
    - `"selective"` (recommended) will trace all requests initiated from an end-user URL with `?trace=1`. Non-end-user-initiated requests can set a HTTP header `X-Sourcegraph-Should-Trace: true`. This is the recommended setting, as `"all"` can generate large amounts of tracing data that may cause network and memory resource contention in the Sourcegraph instance.
    - `"none"` (default) turns off tracing.
  - Jaeger is now the officially supported distributed tracing system. The following is the recommended site configuration to connect Sourcegraph to a Jaeger agent (which must be deployed on the same host and listening on the default ports):

    ```json
    "observability.tracing": {
      "sampling": "selective"
    }
    ```

  - Jaeger is now included in the Sourcegraph deployment configuration by default if you are using Kubernetes, Docker Compose, or the pure Docker cluster deployment model. It is not yet included in the single Docker container distribution. Jaeger will be included as part of upgrading to 3.15 in these deployment models, unless disabled.
  - The site configuration field, `useJaeger`, is deprecated in favor of `observability.tracing`.
  - Support for configuring Lightstep as a distributed tracer is deprecated and will be removed in a subsequent release. Instances that use Lightstep with Sourcegraph are encouraged to migrate to Jaeger (directions for running Jaeger alongside Sourcegraph are included in the installation instructions).

### Changed

- Multiple backwards-incompatible changes in the parts of the GraphQL API related to Campaigns [#9106](https://github.com/sourcegraph/sourcegraph/issues/9106):
  - `CampaignPlan.status` has been removed, since we don't need it anymore after moving execution of campaigns to src CLI in [#8008](https://github.com/sourcegraph/sourcegraph/pull/8008).
  - `CampaignPlan` has been renamed to `PatchSet`.
  - `ChangesetPlan`/`ChangesetPlanConnection` has been renamed to `Patch`/`PatchConnection`.
  - `CampaignPlanPatch` has been renamed to `PatchInput`.
  - `Campaign.plan` has been renamed to `Campaign.patchSet`.
  - `Campaign.changesetPlans` has been renamed to `campaign.changesetPlan`.
  - `createCampaignPlanFromPatches` mutation has been renamed to `createPatchSetFromPatches`.
- Removed the scoped search field on tree pages. When browsing code, the global search query will now get scoped to the current tree or file. [#9225](https://github.com/sourcegraph/sourcegraph/pull/9225)
- Instances without a license key that exceed the published user limit will now display a notice to all users.

### Fixed

- `.*` in the filter pattern were ignored and led to missing search results. [#9152](https://github.com/sourcegraph/sourcegraph/pull/9152)
- The Phabricator integration no longer makes duplicate requests to Phabricator's API on diff views. [#8849](https://github.com/sourcegraph/sourcegraph/issues/8849)
- Changesets on repositories that aren't available on the instance anymore are now hidden instead of failing. [#9656](https://github.com/sourcegraph/sourcegraph/pull/9656)
- Observability (monitoring):
  - **Dashboard and alerting bug fixes**
    - Syntect Server dashboard: "Worker timeouts" can no longer appear to go negative. [#9523](https://github.com/sourcegraph/sourcegraph/issues/9523)
    - Symbols dashboard: "Store fetch queue size" can no longer appear to go negative. [#9731](https://github.com/sourcegraph/sourcegraph/issues/9731)
    - Syntect Server dashboard: "Worker timeouts" no longer incorrectly shows multiple values. [#9524](https://github.com/sourcegraph/sourcegraph/issues/9524)
    - Searcher dashboard: "Search errors on unindexed repositories" no longer includes cancelled search requests (which are expected).
    - Fixed an issue where NaN could leak into the `alert_count` metric. [#9832](https://github.com/sourcegraph/sourcegraph/issues/9832)
    - Gitserver: "resolve_revision_duration_slow" alert is no longer flaky/non-deterministic. [#9751](https://github.com/sourcegraph/sourcegraph/issues/9751)
    - Git Server dashboard: There is now a panel to show concurrent command executions to match the defined alerts. [#9354](https://github.com/sourcegraph/sourcegraph/issues/9354)
    - Git Server dashboard: Adjusted the critical disk space alert to 15% so it can now fire. [#9351](https://github.com/sourcegraph/sourcegraph/issues/9351)
  - **Dashboard visiblity and legibility improvements**
    - All: "frontend internal errors" are now broken down just by route, which makes reading the graph easier. [#9668](https://github.com/sourcegraph/sourcegraph/issues/9668)
    - Frontend dashboard: Panels no longer show misleading duplicate labels. [#9660](https://github.com/sourcegraph/sourcegraph/issues/9660)
    - Syntect Server dashboard: Panels are no longer compacted, for improved visibility. [#9525](https://github.com/sourcegraph/sourcegraph/issues/9525)
    - Frontend dashboard: Panels are no longer compacted, for improved visibility. [#9356](https://github.com/sourcegraph/sourcegraph/issues/9356)
    - Searcher dashboard: "Search errors on unindexed repositories" is now broken down by code instead of instance for improved readability. [#9670](https://github.com/sourcegraph/sourcegraph/issues/9670)
    - Symbols dashboard: Metrics are now aggregated instead of per-instance, for improved visibility. [#9730](https://github.com/sourcegraph/sourcegraph/issues/9730)
    - Firing alerts are now correctly sorted at the top of dashboards by default. [#9766](https://github.com/sourcegraph/sourcegraph/issues/9766)
    - Panels at the bottom of the home dashboard no longer appear clipped/cut off. [#9768](https://github.com/sourcegraph/sourcegraph/issues/9768)
    - Git Server dashboard: Disk usage now shown in percentages to match the alerts that can fire. [#9352](https://github.com/sourcegraph/sourcegraph/issues/9352)
    - Git Server dashboard: The 'echo command duration test' panel now properly displays units in seconds. [#7628](https://github.com/sourcegraph/sourcegraph/issues/7628)
    - Dashboard panels showing firing alerts no longer over-count firing alerts due to the number of service replicas. [#9353](https://github.com/sourcegraph/sourcegraph/issues/9353)

The [changelog for this and previous releases](https://github.com/sourcegraph/sourcegraph/blob/main/CHANGELOG.md#3.15) is available on GitHub.

## Thank you

Thank you to the many people who contributed to Sourcegraph since the last release!

- [@francisjeanneau](https://github.com/francisjeanneau)
- [@craffert0](https://github.com/craffert0)
- [@carloslfu](https://github.com/carloslfu)
- [@bastiankoetsier](https://github.com/bastiankoetsier)
- [@aisbaa](https://github.com/aisbaa)
- [@mofr](https://github.com/mofr)
- [@Akarshit](https://github.com/Akarshit)
- [@maxhallinan](https://github.com/maxhallinan)
- [@Warchant](https://github.com/Warchant)
- [@amarsiingh](https://github.com/amarsiingh)
- [@KGmajor](https://github.com/KGmajor)
- [@remcoros](https://github.com/remcoros)
- [@dwgillies](https://github.com/dwgillies)
- [@shyim](https://github.com/shyim)
- [@mntky](https://github.com/mntky)
- [@shadyabhi](https://github.com/shadyabhi)
- [@Antoine98](https://github.com/Antoine98)
- [@JoshuaKGoldberg](https://github.com/JoshuaKGoldberg)
- [@jlangston](https://github.com/jlangston)
- [@wangbinyq](https://github.com/wangbinyq)
- [@CSharperMantle](https://github.com/CSharperMantle)
- [@danielpops](https://github.com/danielpops)
- [@khoslaventures](https://github.com/khoslaventures)
- [@sixhobbits](https://github.com/sixhobbits)
- [@zgrimshell](https://github.com/zgrimshell)
- [@wrakky](https://github.com/wrakky)
- [@caarlos0](https://github.com/caarlos0)
- [@DoomGerbil](https://github.com/DoomGerbil)
- [@nathanverrilli](https://github.com/nathanverrilli)
- [@yaohui-wyh](https://github.com/yaohui-wyh)
- [@abeyerpath](https://github.com/abeyerpath)
- [@saurabh-hirani](https://github.com/saurabh-hirani)
- [@marco-c](https://github.com/marco-c)
- [@gbrik](https://github.com/gbrik)
- [@benhansenslc](https://github.com/benhansenslc)
- [@Reagankm](https://github.com/Reagankm)

**Deploy or upgrade:** [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

From the entire Sourcegraph team ([@sourcegraph](https://twitter.com/sourcegraph)), happy coding!
