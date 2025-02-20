---
title: "Sourcegraph 3.11: Structural search, removed management console, language statistics, and NPM credentials campaign"
authors:
  - name: Christina Forney
    url: https://handbook.sourcegraph.com/team/#christina-forney
publishDate: 2019-12-20T10:00-07:00
tags: [blog]
slug: sourcegraph-3.11
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
description: "Sourcegraph 3.11: Structural search, removed management console, language statistics, and NPM credentials campaign"
---

Sourcegraph is the standard developer platform for code search and navigation at many of the largest and most advanced technology companies. With Sourcegraph, every company has access to the same kind of tools that Google and Facebook developers use every day.

<div style={{paddingLeft: '2rem'}}>

[**🏗 Introducing code-aware structural search**](#introducing-code-aware-structural-search)<br />

[**🛠 Management console removed to simplify configuration**](#management-console-removed-to-simplify-configuration)<br />

[**📊 Comprehensive overhaul of instance health monitoring and dashboards**](#high-level-health-monitoring)<br />

[**⚙️ Global settings now configurable via local file**](#global-settings-now-configurable-via-local-file)<br />

[**🤖 Find and remove leaked NPM credentials**](#find-and-remove-leaked-npm-credentials)<br />

[**🔎 Search query language statistics**](#search-query-language-statistics)<br />

[**🗞 In other news**](#in-other-news)<br />
How Lyft used Sourcegraph during its monolith to microservice decomposition and Sourcegraph proudly sponsoring GitLab Commit.

[**📝 Changelog**](#changelog)<br />
Every detail that changed in this release.

[**🎖️ Thank you**](#thank-you)<br />
Sourcegraph couldn't be what it is without the community.

</div>

**Deploy or upgrade:** [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

## Introducing code-aware structural search

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/380662673?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/380662673" target="_blank">View on Vimeo</a></p>
</div>

Sourcegraph 3.11 introduces [structural search](https://docs.sourcegraph.com/code_search/reference/structural), a code-aware search syntax that can identify structural patterns in code. This enables advanced code search to specifically match patterns inside code structures such as function parameters and loop bodies.

It can be awkward or difficult to match code blocks or nested expressions with regexp. To meet this challenge we've introduced a new and easier way to search code that operates more closely on the parse tree of the input using [Comby syntax](https://comby.dev/) for structural matching.

For example, this can be used to [find all the places that `fmt.Sprintf` are unnecessary](https://sourcegraph.com/search?q=repo:sourcegraph/sourcegraph%24+%27fmt.Sprintf%28%22:%5Bstr%5D%22%29%27&patternType=structural):

```text
patterntype:structural 'fmt.Sprintf(":[str]")'
```

Or to [identify all the places an `http.Client` is created with a `Transport`](https://sourcegraph.com/search?q=repo:sourcegraph/sourcegraph%24+%22http.Client%7B:%5Ba%5D+Transport:+:%5Bb%5D+:%5Bc%5D%7D%22+count:1000&patternType=structural):

```text
patterntype:structural "http.Client{:[a] Transport: :[b] :[c]}"
```

In these examples, the `:[str]` part is a hole with a descriptive name `str` that matches code. The important part is that these patterns understand that the structural pieces (e.g. parentheses and braces) are balanced.

Known limitations:

- Only indexed repositories will show results for structural search. On [Sourcegraph](https://sourcegraph.com/search), we index approximately 10,000 of the most popular repositories on GitHub.
- To use this query syntax you must include `patterntype:structural` to activate the search type.
- See [additional functionality and limitations](https://docs.sourcegraph.com/code_search/reference/structural#current-functionality-and-restrictions)

## Management console removed to simplify configuration

The management console has been completely removed and there is now a single site configuration on the **Site admin** -> **Configuration** page. The current management console configuration will be automatically merged into your site configuration after upgrading your instance.

In the rare event that your Sourcegraph instance is misconfigured and causes the UI to become inaccessible, we have added an [escape hatch file](https://docs.sourcegraph.com/admin/config/site_config#editing-your-site-configuration-if-you-cannot-access-the-web-ui) that allows you to edit your site configuration without the web UI. Upon saving, the updated configuration will be synchronized from the file and applied to your Sourcegraph instance.

<Alert type="warning">
  <div>
    <strong>NOTE:</strong>
    If you're using the <code>CRITICAL_CONFIG_FILE</code> or <code>SITE_CONFIG_FILE</code> environment variables please see our <a href="https://docs.sourcegraph.com/admin/migration/3_11#management-console-removal">management console migration guide</a> for more details.
  </div>
</Alert>

## High-level health monitoring

Recent Sourcegraph versions [introduced standardized Prometheus and Grafana monitoring](https://about.sourcegraph.com/blog/sourcegraph-3.8) bundled with Sourcegraph. Sourcegraph 3.11 introduces a new set of dashboards and high-level health metrics that make it easier to understand the health of your Sourcegraph instance at a glance:

![Health monitoring overview screenshot](/blog/3-11-monitoring-overview.png "Health monitoring overview")

These dashboards are built using a new set of combinatorial alerting metrics we have introduced for each service. These allow site admins to measure the number of critical and warning-class alerts their Sourcegraph instance is facing:

![Health monitoring alerts screenshot](/blog/3-11-monitoring-alerts.png "Health monitoring alerts")

Alerting can be configured easily through these metrics, so admins can get Email, Slack, PagerDuty, ([and many more](https://grafana.com/docs/grafana/latest/alerting/notifications/)) alerts when an instance is unhealthy.

Future versions will add more exhaustive alert definitions and more detailed information on these dashboards, so please stay tuned!

## Global settings now configurable via local file

Some teams prefer updating Sourcegraph configuration in version control rather than through the Site admin UI. In Sourcegraph 3.11, admins can configure their instance to [load global settings](https://docs.sourcegraph.com/admin/config/advanced_config_file#global-settings) from a file on-disk using the new `GLOBAL_SETTINGS_FILE` environment variable. Sourcegraph 3.4 enabled this functionality for [external services](https://docs.sourcegraph.com/admin/config/advanced_config_file#external-services-configuration) and [site configuration](https://docs.sourcegraph.com/admin/config/advanced_config_file#site-configuration).

## Find and remove leaked NPM credentials

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/380663070?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/380663070" target="_blank">View on Vimeo</a></p>
</div>

Credential leaks compromise organization code and are a top concern for security teams and developers alike. Sourcegraph 3.11 introduces a new campaign type to find and remove leaked NPM credentials across all repositories at your organization. The leaked credentials campaign type allows you to preview the proposed changes, create pull requests on your code hosts, and track the PRs in a burndown chart to ensure they are merged.

Code change management campaigns are in private beta. [Watch the campaigns screencasts](https://about.sourcegraph.com/product/code-change-management#see-it-in-action) to see what we have planned, and [apply for early access](https://about.sourcegraph.com/contact/request-code-change-management-demo/) to campaigns for your organization.

## Search query language statistics

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/380662321?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/380662321" target="_blank">View on Vimeo</a></p>
</div>

A new experimental feature has been added to show [language statistics about your search query](https://docs.sourcegraph.com/code_search/explanations/features#statistics). Search result pages now have a **Stats** link to a visual breakdown of the languages that comprise the results for the query. This data is also available through our [GraphQL API](https://docs.sourcegraph.com/api/graphql).

Language analysis is computationally expensive, so this feature is currently behind a feature flag. To enable, update your global, organization, or user settings to include `{ “experimentalFeatures”: { “searchStats”: true } }`.

## In other news

### How Sourcegraph helped Lyft go from monolith to microservices

This month we published a [new case study](https://about.sourcegraph.com/case-studies/lyft-monolith-to-microservices) showing how Sourcegraph code search helped ensure production stability at Lyft during their monolith to microservices decomposition.

![Lyft case study preview](/blog/3-11-lyft.png "Lyft case study preview")

### See you at GitLab Commit 2020 in San Francisco

Sourcegraph is sponsoring [GitLab Commit](https://about.gitlab.com/events/commit/) in San Francisco this January. We're looking forward to speaking with GitLab users about the importance of [IDE quality code intelligence when browsing and reviewing code on GitLab](https://about.sourcegraph.com/blog/gitlab-integrates-sourcegraph-code-navigation-and-code-intelligence). We'd love to see you there! Come say hello and pick up some great swag at our booth on level 1.

![GitLab and Sourcegraph logos](/blog/gitlab-integration-banner-dark.png "GitLab and Sourcegraph logos")

## Changelog

## 3.11.0

**Important:** If you use `SITE_CONFIG_FILE` or `CRITICAL_CONFIG_FILE`, please be sure to follow the steps in: [migration notes for Sourcegraph v3.11+](https://docs.sourcegraph.com/doc/admin/migration/3_11.md) after upgrading.

### Added

- Language statistics by commit are available via the API. [#6737](https://github.com/sourcegraph/sourcegraph/pull/6737)
- Added a new page that shows [language statistics for the results of a search query](https://docs.sourcegraph.com/code_search/explanations/features#statistics).
- Global settings can be configured from a local file using the environment variable `GLOBAL_SETTINGS_FILE`.
- High-level health metrics and dashboards have been added to Sourcegraph's monitoring (found under the **Site admin** -> **Monitoring** area). [#7216](https://github.com/sourcegraph/sourcegraph/pull/7216)
- Logging for GraphQL API requests not issued by Sourcegraph is now much more verbose, allowing for easier debugging of problematic queries and where they originate from. [#5706](https://github.com/sourcegraph/sourcegraph/issues/5706)
- A new campaign type finds and removes leaked NPM credentials. [#6893](https://github.com/sourcegraph/sourcegraph/pull/6893)
- Campaigns can now be retried to create failed changesets due to ephemeral errors (e.g. network problems when creating a pull request on GitHub). [#6718](https://github.com/sourcegraph/sourcegraph/issues/6718)
- The initial release of [structural code search](https://docs.sourcegraph.com/code_search/reference/structural).

### Changed

- `repohascommitafter:` search filter uses a more efficient git command to determine inclusion. [#6739](https://github.com/sourcegraph/sourcegraph/pull/6739)
- `NODE_NAME` can be specified instead of `HOSTNAME` for zoekt-indexserver. `HOSTNAME` was a confusing configuration to use in [Pure-Docker Sourcegraph deployments](https://github.com/sourcegraph/deploy-sourcegraph-docker). [#6846](https://github.com/sourcegraph/sourcegraph/issues/6846)
- The feedback toast now requests feedback every 60 days of usage (was previously only once on the 3rd day of use). [#7165](https://github.com/sourcegraph/sourcegraph/pull/7165)
- The lsif-server container now only has a dependency on Postgres, whereas before it also relied on Redis. [#6880](https://github.com/sourcegraph/sourcegraph/pull/6880)
- Renamed the GraphQL API `LanguageStatistics` fields to `name`, `totalBytes`, and `totalLines` (previously the field names started with an uppercase letter, which was inconsistent).
- Detecting a file's language uses a more accurate but slower algorithm. To revert to the old (faster and less accurate) algorithm, set the `USE_ENHANCED_LANGUAGE_DETECTION` env var to the string `false` (on the `sourcegraph/server` container, or if using the cluster deployment, on the `sourcegraph-frontend` pod).
- Diff and commit searches that make use of `before:` and `after:` filters to narrow their search area are now no longer subject to the 50-repository limit. This allows for creating saved searches on more than 50 repositories as before. [#7215](https://github.com/sourcegraph/sourcegraph/issues/7215)

### Fixed

- Changes to external service configurations are reflected much faster. [#6058](https://github.com/sourcegraph/sourcegraph/issues/6058)
- Deleting an external service will not show warnings for the non-existent service. [#5617](https://github.com/sourcegraph/sourcegraph/issues/5617)
- Suggested search filter chips are quoted if necessary. [#6498](https://github.com/sourcegraph/sourcegraph/issues/6498)
- Remove potential panic in gitserver if heavily loaded. [#6710](https://github.com/sourcegraph/sourcegraph/issues/6710)
- Multiple fixes to make the preview and creation of campaigns more robust and a smoother user experience. [#6682](https://github.com/sourcegraph/sourcegraph/pull/6682) [#6625](https://github.com/sourcegraph/sourcegraph/issues/6625) [#6658](https://github.com/sourcegraph/sourcegraph/issues/6658) [#7088](https://github.com/sourcegraph/sourcegraph/issues/7088) [#6766](https://github.com/sourcegraph/sourcegraph/issues/6766) [#6717](https://github.com/sourcegraph/sourcegraph/issues/6717) [#6659](https://github.com/sourcegraph/sourcegraph/issues/6659)
- Repositories referenced in campaigns that are removed in an external service configuration change won't lead to problems with the syncing process anymore. [#7015](https://github.com/sourcegraph/sourcegraph/pull/7015)
- The Searcher dashboard (and the `src_graphql_search_response` Prometheus metric) now properly account for search alerts instead of them being incorrectly added to the `timeout` category. [#7214](https://github.com/sourcegraph/sourcegraph/issues/7214)
- In the experimental search pagination API, the `cloning`, `missing`, and other repository fields now return a well-defined set of results. [#6000](https://github.com/sourcegraph/sourcegraph/issues/6000)

### Removed

- The management console has been removed. All critical configuration previously stored in the management console will be automatically migrated to your site configuration. For more information about this change, or if you use `SITE_CONFIG_FILE` / `CRITICAL_CONFIG_FILE`, please see the [migration notes for Sourcegraph v3.11+](https://docs.sourcegraph.com/@3.11/admin/migration/3_11).

The [changelog for this and previous releases](https://github.com/sourcegraph/sourcegraph/blob/main/CHANGELOG.md#3.11) is available on GitHub.

## Thank you

Thank you to the many people who contributed to Sourcegraph since the last release!

- [@Antoine98](https://github.com/Antoine98)
- [@terinjokes](https://github.com/terinjokes)
- [@dbentley](https://github.com/dbentley)
- [@zapp42](https://github.com/zapp42)
- [@zurp](https://github.com/zurp)
- [@saurabh-hirani](https://github.com/saurabh-hirani)
- [@Warchant](https://github.com/Warchant)
- [@sfllaw](https://github.com/sfllaw)
- [@mipearson](https://github.com/mipearson)

**Deploy or upgrade:** [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

From the entire [@sourcegraph](https://twitter.com/sourcegraph) team, happy coding!
