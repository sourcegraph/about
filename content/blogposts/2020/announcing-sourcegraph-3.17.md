---
title: "Sourcegraph 3.17: Faster and automatic precise code intelligence, and AND/OR queries for searching file contents"
authors:
  - name: Adam Herzog
publishDate: 2020-06-20T10:00-07:00
tags: [
  blog
]
slug: sourcegraph-3.17
heroImage: /blog/3.17-release-blog-img.jpg
published: true
description: "Sourcegraph 3.17: Faster and automatic precise code intelligence and AND/OR queries for searching file contents"
---

We've shipped Sourcegraph 3.17 with many improvements to help you explore, navigate, and understand your code with universal code search:

<div style={{paddingLeft: '2rem'}}>

[**🧠 Faster and automatic precise code intelligence**](#faster-and-automatic-precise-code-intelligence)<br />
Precise code intelligence is now 35% faster than in 3.16. The experimental feature of automatic precise code intelligence will bring precise results to more repositories faster.

[**🔎 AND/OR operators for code search**](#introducing-andor-operators-for-code-search)<br />
AND/OR queries are included in the recently added literal search mode, and enabled for all users (no longer considered experimental).

[**🛠 Sourcegraph admin features**](#sourcegraph-admin-features)<br />
Easier alerting configuration, default repository permission syncing, updated Gitolite exclude pattern, improved debugging, and out-of-date notifications.

[**📝 Changelog**](#changelog)<br />
Includes every detail that changed in this release.

[**🎖️ Thank you**](#thank-you)<br />
Sourcegraph couldn't be what it is without our contributors.

</div>

[**Install Sourcegraph 3.17**](https://docs.sourcegraph.com/admin/install) or [update to Sourcegraph 3.17](https://docs.sourcegraph.com/admin/updates).

---

## Faster and automatic precise code intelligence

### 35% faster than in 3.16, 50% faster than in 3.15

Precise code intelligence queries are now faster. The following chart shows the decrease in query latency while running our [integration test suite](https://github.com/sourcegraph/sourcegraph/tree/5f51043ad2130a1acdcfca8b969f907cd03a220d/internal/cmd/precise-code-intel-test) compared to the previous two Sourcegraph releases. Sourcegraph 3.17 is 50% faster than in Sourcegraph 3.15, and 35% faster than in Sourcegraph 3.16.

<Figure 
  src="https://sourcegraphstatic.com/lsif-query-latency-317.png" 
  alt="Precise code intel query latency chart" 
/>

In [Sourcegraph 3.16](https://about.sourcegraph.com/blog/sourcegraph-3.16#performance-improvements-for-precise-code-intelligence), our precise code intelligence backend was rewritten from TypeScript to Go. This was part of a larger effort to aggressively optimize conversion and querying of LSIF data. That effort is now well underway!

The task of uploading and processing precise code intelligence bundles, which has previously been a sticking point on private instances with large repositories, has also been improved (around 45% faster than Sourcegraph 3.16 and 48% faster than Sourcegraph 3.15). The following chart shows the time required to upload the indexes for our integration test suite. This includes three commits from [etcd-io/etcd](https://github.com/etcd-io/etcd), [pingcap/tidb](https://github.com/pingcap/tidb), and [distributedio/titan](https://github.com/distributedio/titan), and two commits from [uber-go/zap](https://github.com/uber-go/zap).

<Figure 
  src="https://sourcegraphstatic.com/lsif-processing-latency-317.png" 
  alt="Precise code intel index processing latency chart" 
/>

We’ve also poured some love into the on-disk format of precise code intel bundles (each bundle is now 30-50% smaller than the previous release). This should be helpful in private instances with large, frequent index uploads and constrained disk, where frequent eviction of recent bundles was previously an issue.

<Figure 
  src="https://sourcegraphstatic.com/tidb-bundle-size.png" 
  alt="tidb bundle process code intel bundle (processed index) size on disk chart" 
/>

<Figure 
  src="https://sourcegraphstatic.com/etcd-bundle-size.png" 
  alt="etcd bundle process code intel bundle (processed index) size on disk chart" 
/>

<Figure 
  src="https://sourcegraphstatic.com/titan-bundle-size.png" 
  alt="titan bundle process code intel bundle (processed index) size on disk chart" 
/>

<Figure 
  src="https://sourcegraphstatic.com/zap-bundle-size.png" 
  alt="zap bundle process code intel bundle (processed index) size on disk chart" 
/>

<style>
{`
  .blog-post__body .benchmark-results img { box-shadow: none; display: inline; margin: 10px auto; }
`}
</style>

We plan to continue on this path of performance improvements, and the next release will focus on processing multiple bundles concurrently in order to multiply the benefit of this release’s raw latency gains.

### Automatic precise code intelligence

<YouTube
  title="Automatic precise code intelligence in Sourcegraph"
  id="BHYka1CT700"
/>

An experimental feature on [sourcegraph.com/search](https://sourcegraph.com/search) will automatically create an [LSIF index](https://docs.sourcegraph.com/code_intelligence/explanations/precise_code_intelligence) for eligible repositories based on their popularity, so that the repository will have precise results on hover, definition, and reference operations. We are currently able to index Go repositories containing a go.mod file that do not require additional build steps, and are working on expanding the set of eligible repositories to support additional languages and more sophisticated repository structures.

To see this experiment in action, find a Go repository hosted on GitHub that has not been picked up by Sourcegraph. Then, visit that repository on [sourcegraph.com/search](https://sourcegraph.com/search). After navigating through the codebase for a while, you should see the hover tooltips and definition results become more accurate.

Currently, a repository will need 50 navigation events (hovers, jump to definition, find references) to trigger the auto-indexing procedure. We are continually tuning these heuristics to bring precise results to more repositories faster.

## AND/OR operators for code search

<YouTube
  title="AND/OR Operators in Universal Code Search"
  id="Iye0yZVr1Ro"
/>

In [Sourcegraph 3.15](https://about.sourcegraph.com/blog/sourcegraph-3.15#experimental-andor-operators-for-search-contents), we introduced experimental AND/OR queries for file content in regular expressions and structural search modes. Now in Sourcegraph 3.17, AND/OR queries are included in the recently added literal search mode, and enabled for all users (no longer considered experimental).

Initially, AND/OR operators support searching file contents. Operators for filters like `repo:` and `file:` will be supported in upcoming releases.

## Sourcegraph admin features

### Easier alerting configuration

Configure Sourcegraph to send alerts about its health to [notifiers like Slack, PagerDuty, and webhooks](https://docs.sourcegraph.com/admin/observability/alerting#setting-up-alerting). Set `observability.alerts` in your Sourcegraph configuration to automatically have alerts set up and subscribed to relevant notifiers in Grafana:

```json
"observability.alerts": {
  "id": "my-alert",
  "level": "critical",
  "notifier": { "type": "slack", /* ... */ }
}
```

For more information, see the [Sourcegraph alerting documentation](https://docs.sourcegraph.com/admin/observability/alerting).

### Repository permission syncing on by default

[Sourcegraph 3.14](https://about.sourcegraph.com/blog/sourcegraph-3.14#faster-syncing-of-gitlab-and-bitbucket-server-repository-permissions) and [Sourcegraph 3.15](https://about.sourcegraph.com/blog/sourcegraph-3.15#faster-syncing-of-github-repository-permissions) introduced a faster and more scalable permissions syncing solution that could be enabled for your code host integrations. This background permissions syncing is now on by default for GitHub, Bitbucket Server, and GitLab for any integration with repository permissions configured. Please [read our documentation for more details](https://docs.sourcegraph.com/admin/repo/permissions#background-permissions-syncing).

### Gitolite exclude pattern

The Gitolite `exclude` setting in the [Gitolite external service configuration](https://docs.sourcegraph.com/admin/external_service/gitolite#configuration) now supports a regular expression through the pattern field. Adding this regex support improves Gitolite’s pattern matching abilities.

This is consistent with how we exclude in other external services, and is a replacement for the deprecated configuration.

```json
{
   "exclude": [
     // Exclude a single repository by name
     {
       "name": "github.com/my-team/repository-with-all-our-secrets"
     },
     // Exclude all repositories matching a regexp
     {
       "pattern": ".*/security-team/.*"
     }
   ]
}
```

### Improved debugging experience

A unified set of container metrics, compatible across both Kubernetes and Docker Compose deployment types, provides the following information about containers through Grafana dashboards and alerting in both deployment types:

![container-monitoring](/blog/3-17-container_monitoring_sourcegraph.png "container-monitoring")

Recent alerts history is now included when filing a bug report from the report-a-bug-page (for example, [https://sourcegraph.example.com/site-admin/report-bug](https://sourcegraph.example.com/site-admin/report-bug)) to better enable us to diagnose issues.

We have added experimental support for detecting if your instance is over or under-provisioned through a set of new dashboards and warning-level alerts.

### Notifications when Sourcegraph is out of date

Sourcegraph now shows update notifications to site admins (at 1 month out-of-date), and to users (at 4 months out-of-date). This will help encourage admins to keep their Sourcegraph instance current with the latest bug fixes, security updates, and new features and functionalities. Keeping Sourcegraph current ensures that you don’t run into issues due to running on a stale version.

These notifications start out as subtle informational alerts, and at 6+ months out-of-date, they will appear as red dismissible banners:

![admin-notifications](/blog/3-17-admin_notifications_sourcegraph.png "admin-notifications")

### Seeing 10x more code in your organization than 5 years ago?

We are running a [survey](https://www.surveygizmo.com/s3/5628315/SG) to understand how companies are dealing with massive amounts of code (aka Big Code).

## Changelog

### Added

- The search results page now shows a small UI notification if either repository forks or archives are excluded, when `fork` or `archived` options are not explicitly set. [#10624](https://github.com/sourcegraph/sourcegraph/pull/10624)
- Prometheus metric `src_gitserver_repos_removed_disk_pressure` which is incremented everytime we remove a repository due to disk pressure. [#10900](https://github.com/sourcegraph/sourcegraph/pull/10900)
- `gitolite.exclude` setting in [Gitolite external service config](https://docs.sourcegraph.com/admin/external_service/gitolite#configuration) now supports a regular expression via the `pattern` field. This is consistent with how we exclude in other external services. Additionally this is a replacement for the deprecated `blacklist` configuration. [#11403](https://github.com/sourcegraph/sourcegraph/pull/11403)
- Notifications about Sourcegraph being out of date will now be shown to site admins and users (depending on how out-of-date it is).
- Alerts are now configured using `observability.alerts` in the site configuration, instead of via the Grafana web UI. This does not yet support all Grafana notification channel types, and is not yet supported on `sourcegraph/server` ([#11473](https://github.com/sourcegraph/sourcegraph/issues/11473)). For more details, please refer to the [Sourcegraph alerting guide](https://docs.sourcegraph.com/admin/observability/alerting).
- Experimental basic support for detecting if your Sourcegraph instance is over or under-provisioned has been added through a set of dashboards and warning-level alerts based on container utilization.
- Query [operators](https://docs.sourcegraph.com/code_search/reference/queries#operators) `and` and `or` are now enabled by default in all search modes for searching file content. [#11521](https://github.com/sourcegraph/sourcegraph/pull/11521)

### Changed

- Repository search within a version context will link to the revision in the version context. [#10860](https://github.com/sourcegraph/sourcegraph/pull/10860)
- Background permissions syncing becomes the default method to sync permissions from code hosts. Please [read our documentation for things to keep in mind before upgrading](https://docs.sourcegraph.com/admin/repo/permissions#background-permissions-syncing). [#10972](https://github.com/sourcegraph/sourcegraph/pull/10972)
- The styling of the hover overlay was overhauled to never have badges or the close button overlap content while also always indicating whether the overlay is currently pinned. The styling on code hosts was also improved. [#10956](https://github.com/sourcegraph/sourcegraph/pull/10956)
- Previously, it was required to quote most patterns in structural search. This is no longer a restriction and single and double quotes in structural search patterns are interpreted literally. Note: you may still use `content:"structural-pattern"` if the pattern without quotes conflicts with other syntax. [#11481](https://github.com/sourcegraph/sourcegraph/pull/11481)

### Fixed

- Dynamic repo search filters on branches which contain special characters are correctly escaped now. [#10810](https://github.com/sourcegraph/sourcegraph/pull/10810)
- Forks and archived repositories at a specific commit are searched without the need to specify "fork:yes" or "archived:yes" in the query. [#10864](https://github.com/sourcegraph/sourcegraph/pull/10864)
- The git history for binary files is now correctly shown. [#11034](https://github.com/sourcegraph/sourcegraph/pull/11034)
- Links to AWS Code Commit repositories have been fixed after the URL schema has been changed. [#11019](https://github.com/sourcegraph/sourcegraph/pull/11019)
- A link to view all repositories will now always appear on the Explore page. [#11113](https://github.com/sourcegraph/sourcegraph/pull/11113)
- The Site-admin > Pings page no longer incorrectly indicates that pings are disabled when they aren't. [#11229](https://github.com/sourcegraph/sourcegraph/pull/11229)
- Match counts are now accurately reported for indexed search. [#11242](https://github.com/sourcegraph/sourcegraph/pull/11242)
- When background permissions syncing is enabled, it is now possible to only enforce permissions for repositories from selected code hosts (instead of enforcing permissions for repositories from all code hosts). [#11336](https://github.com/sourcegraph/sourcegraph/pull/11336)
- When more than 200+ repository revisions in a search are unindexed (very rare), the remaining repositories are reported as missing instead of Sourcegraph issuing e.g. several thousand unindexed search requests which causes system slowness and ultimately times out - ensuring searches are still fast even if there are indexing issues on a deployment of Sourcegraph. This does not apply if `index:no` is present in the query.

### Removed

- Automatic syncing of Campaign webhooks for Bitbucket Server. [#10962](https://github.com/sourcegraph/sourcegraph/pull/10962)
- The `blacklist` configuration option for Gitolite is DEPRECATED and will be removed in 3.19. Use `exclude.pattern` instead.

The [changelog for this and previous releases](https://github.com/sourcegraph/sourcegraph/blob/main/CHANGELOG.md#{VERSION}) is available on GitHub.

## Thank you

A big thank you to everyone who contributed to Sourcegraph since the last release!

- [@zahassanyum](https://github.com/zahassanyum)
- [@smaifullerton-wk](https://github.com/smaifullerton-wk)
- [@tbodt](https://github.com/tbodt)
- [@PostPollux](https://github.com/PostPollux)
- [@svrx](https://github.com/svrx)
- [@yaohui-wyh](https://github.com/yaohui-wyh)
- [@gerbal](https://github.com/gerbal)
- [@abeyerpath](https://github.com/abeyerpath)
- [@danielpops](https://github.com/danielpops)
- [@imba-tjd](https://github.com/imba-tjd)
- [@jjlin](https://github.com/jjlin)
- [@saurabh-hirani](https://github.com/saurabh-hirani)
- [@yg](https://github.com/yg)
- [@Bobloblaw74329479279](https://github.com/Bobloblaw74329479279)
- [@philippe-granet](https://github.com/philippe-granet)
- [@DolceTriade](https://github.com/DolceTriade)
- [@terinjokes](https://github.com/terinjokes)
- [@ceecurvin](https://github.com/ceecurvin)
- [@caarlos0](https://github.com/caarlos0)
- [@mholt](https://github.com/mholt)
- [@aisbaa](https://github.com/aisbaa)
- [@chunliu](https://github.com/chunliu)

[**Install Sourcegraph 3.17**](https://docs.sourcegraph.com/admin/install) or [update to Sourcegraph 3.17](https://docs.sourcegraph.com/admin/updates).

## Share your feedback

We want to hear what you think about Sourcegraph and the new updates in 3.17. Post on Twitter (remember to include ([@sourcegraph](https://twitter.com/sourcegraph)) and we'll send you Sourcegraph swag!

Any questions about Sourcegraph? Get in touch on Twitter [@sourcegraph](https://twitter.com/sourcegraph), file an issue in our [public issue tracker](https://github.com/sourcegraph/sourcegraph/issues), or email [feedback@sourcegraph.com](mailto:feedback@sourcegraph.com). We look forward to hearing from you!

From the [entire Sourcegraph team](https://handbook.sourcegraph.com/company/team), happy coding!
