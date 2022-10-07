---
title: "Sourcegraph 3.14: Faster repository permissions, excluding forks and archived repositories by default, and Docker Compose deployment"
authors:
  - name: Christina Forney
    url: https://handbook.sourcegraph.com/team/#christina-forney
publishDate: 2020-03-20T10:00-07:00
tags: [
  blog, GitLab, Bitbucket, "Docker Compose", "Kubernetes deployments"
]
slug: sourcegraph-3.14
heroImage: https://about.sourcegraph.com/blog/3.14-release-blog-img.jpg
published: true
description: "Sourcegraph 3.14: Faster repository permissions, excluding forks and archived repositories by default, and Docker Compose deployment"
---

Explore, navigate, and better understand all code, everywhere, faster with Sourcegraph Universal Code Search. Uber, Lyft, Yelp, and other enterprises rely on Sourcegraph to improve developer productivity and manage large-scale code changes.

<div style={{paddingLeft: '2rem'}}>

[**🔑 Faster syncing of GitLab and Bitbucket Server repository permissions**](#faster-syncing-of-gitlab-and-bitbucket-server-repository-permissions)<br />

[**🍴 Forks and archived repositories are excluded from search results by default**](#forks-and-archived-repositories-are-excluded-from-search-results-by-default)<br />

[**✍️ Go to definition in PRs and simplified sign in with the browser extension**](#go-to-definition-in-prs-and-simplified-sign-in-with-the-browser-extension)<br />

[**🐳 Deploy and scale Sourcegraph with Docker Compose**](#deploy-and-scale-sourcegraph-with-docker-compose)<br />

[**📣 Campaigns are easier to create and manage and have reduced the load on code hosts**](#campaigns-are-easier-to-create-and-manage-and-have-reduced-the-load-on-code-hosts)<br />

[**⚠️ IMPORTANT: Required migration for Kubernetes deployments**](#important-required-migration-for-kubernetes-deployments)<br />
Sourcegraph is easier to deploy in environments with strict security requirements.

[**📈 Improved debugging of Kubernetes deployments with profiling and tracing**](#improved-debugging-of-kubernetes-deployments-with-profiling-and-tracing)<br />

[**🚨 Search insights and alerts added to admin monitoring**](#search-insights-and-alerts-added-to-admin-monitoring)<br />

[**🧮 Estimate required resources for your Sourcegraph instance**](#estimate-required-resources-for-your-sourcegraph-instance)<br />

[**🙅‍♀️ Option to exclude all forks/archives from syncing to Sourcegraph for GitHub**](#option-to-exclude-all-forksarchives-from-syncing-to-sourcegraph-for-github)<br />

[**🧠 Improved performance and coverage for code intelligence**](#improved-performance-and-coverage-for-code-intelligence)<br />

[**🛎 Aggregated search data added to Sourcegraph pings**](#aggregated-search-data-added-to-sourcegraph-pings)<br />

[**🔎 Experimental smart search bar**](#experimental-smart-search-bar)<br />

[**📝 Changelog**](#changelog)<br />
Every detail that changed in this release

[**🎖️ Thank you**](#thank-you)<br />
Sourcegraph couldn't be what it is without the community

</div>

**Deploy or upgrade:** [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

---

Watch the recording of the 3.14 release livestream with Product Manager Christina Forney.

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://www.youtube-nocookie.com/embed/2tBUzBbiZJ4" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
</div>

## Faster syncing of GitLab and Bitbucket Server repository permissions

Sourcegraph permissions syncing is now more sophisticated to better handle repository permissions at scale. Rather than updating a user’s permissions when they log in and potentially blocking them from seeing search results, Sourcegraph now syncs these permissions opportunistically, as part of a background service. Users are now able to see results from their search queries immediately. Currently, this improvement is supported for GitLab and Bitbucket Server, with GitHub and other code hosts coming soon. See the [documentation for more details](https://docs.sourcegraph.com/admin/repo/permissions#background-permissions-syncing).

Enable this feature by adding `"permissions.backgroundSync": {"enabled": true}` in your site configuration settings.

## Forks and archived repositories are excluded from search results by default

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/398759697?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/398759697" target="_blank">View on Vimeo</a></p>
</div>

The default setting for including forks and archived repositories in your search results has changed from including by default to excluding by default. This is because most often, users want to see the active and original repositories in their queries. You can still use `archived:yes` or `fork:yes` filters to show results that include archived and forked repositories.

## Go to definition in PRs and simplified sign in with the browser extension

![Sign in without refresh](/blog/3-14-extension-sign-in.gif)

It is now easier to sign in with the Sourcegraph browser extension or native integrations - no need to refresh your code host window! Additionally, we've added support for staying on a pull request when a go to definition is defined within the visible context. For native integration users, these improvements come with an upgrade to Sourcegraph 3.14. Browser extension users can get this by updating to the latest release.

## Deploy and scale Sourcegraph with Docker Compose

Sourcegraph 3.14 introduces a new [docker-compose deployment model](https://docs.sourcegraph.com/admin/install/docker-compose). This is useful for organizations that want to scale Sourcegraph, but don’t use Kubernetes. For any customers running a single Docker container and have experienced instability or issues with scaling, Docker Compose is likely the right solution for you!

## Campaigns are easier to create and manage and have reduced the load on code hosts

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/398878670?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/398878670" target="_blank">View on Vimeo</a></p>
</div>

Behind the scenes, campaign changesets are now kept up to date using a heuristic solution that reduces the load placed on the code host. Previously, each changeset was updated during regularly scheduled update processes. The new implementation prioritizes syncing changesets based on when last they changed and is also aware of real-time changes that arrive via webhooks.

The overall experience of generating diffs, creating and reviewing a campaign, and then managing the changes to closure has been improved.

Using the `src-cli` to generate diffs and create a campaign plan has been improved:

* It is now easier to create a campaign plan for successful patches when other patches fail for some repositories.
* The dependencies on the external diff and unzip tools have been removed. Instead, git is used to produce diffs.
* `.gitignore` files are now respected when creating patches.
* On macOS, `src` CLI can [now be installed with Homebrew.](https://github.com/sourcegraph/homebrew-src-cli)

Take a look at the [improved documentation](https://docs.sourcegraph.com/campaigns) for usage and examples.

When creating your campaign in Sourcegraph, it is now clearer what state the campaign is in and is easier to differentiate between draft patches and changesets that have been created on the code host. Additionally, you can now filter the changesets to quickly find which ones need follow-up.

Code change management campaigns are in private beta. [Watch the campaigns screencasts](https://about.sourcegraph.com/product/code-change-management#see-it-in-action) to see what we have planned, and [apply for early access](https://about.sourcegraph.com/contact/request-code-change-management-demo/) to campaigns for your organization.

## IMPORTANT: Required migration for Kubernetes deployments

A manual migration is required for Kubernetes deployments. As is usual, please refer to the documentation for your deployment type for upgrading:

- [Kubernetes upgrade documentation](https://github.com/sourcegraph/deploy-sourcegraph/blob/master/docs/migrate.md#migrations)
- [Docker Compose upgrade documentation](https://docs.sourcegraph.com/admin/updates/docker_compose)
- [Single-container `sourcegraph/server` upgrade documentation](https://docs.sourcegraph.com/admin/updates)

## Improved debugging of Kubernetes deployments with profiling and tracing

Kubernetes deployments now also have additional debug / instrumentation information available under **Site Admin** → **Instrumentation**. This information will primarily be used in the event that support needs to, for example, request a performance profile for a specific service of Sourcegraph in order to debug an issue you are facing.

## Search insights and alerts added to admin monitoring

![Admin monitoring and alerts](/blog/3-14-monitoring_improvements.gif)

The frontend dashboard now shows how search is behaving overall and in detail. Additionally, admins can now be proactively notified when critical parts of Sourcegraph are not working as expected.

Alerts are in place for when:

* Hard search errors (both timeouts and general errors) are high.
* Partial search timeouts are high.
* Search 90th and 99th percentile request duration is high.
* Users are being shown an abnormally large amount of search alert user suggestions and no results.
* The internal indexed and unindexed search services are returning bad responses.
* `gitserver` may be under heavy load due to many concurrent command executions or under-provisioning.

## Estimate required resources for your Sourcegraph instance

![Resource estimator](/blog/3-14-resource-estimator.png)

The new [resource estimator](https://docs.sourcegraph.com/admin/install/resource_estimator) helps admins of new and growing Sourcegraph instances determine the right resources and deployment strategy for their custom scenario. CPU and memory needs are calculated for each service based on the number of repositories, users, large monorepos, and engagement rate of your users.

## Option to exclude all forks/archives from syncing to Sourcegraph for GitHub

Some organizations do not want to include any forks or archived repositories in their Sourcegraph instance. Admins can now exclude GitHub forks and/or archived repositories from the set of repositories being mirrored in Sourcegraph. The GitHub repository management can be updated with `"exclude": [{"forks": true}]` or `"exclude": [{"archived": true}]` to utilize this feature.

## Improved performance and coverage for code intelligence

![Improved Go hover text](/blog/3-14-go-hovertext.png)

- Greatly improved the performance of the Go LSIF indexer (indexing time reduced by 60% for `aws/aws-sdk-go`).
- The Go LSIF indexer now provides hovertext for packages and external symbols.
- Added basic code intelligence for Thrift schema files.

## Aggregated search data added to Sourcegraph pings

Sourcegraph collects a small amount of high-level and aggregate data from each instance – you can see the complete list of the [data we collect](https://docs.sourcegraph.com/admin/pings), and our [ping philosophy and rules](https://handbook.sourcegraph.com/engineering/adding_ping_data#ping-philosophy). New usage statistics –  specifically, aggregate search latencies, aggregated counts of users and searches for search mode types, and aggregated counts of search filter usage – will be sent to Sourcegraph via pings by default. The aggregated event count metrics can be disabled via the site admin flag `disableNonCriticalTelemetry`.

## Experimental smart search bar

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/392761379?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/392761379" target="_blank">View on Vimeo</a></p>
</div>

In Sourcegraph 3.13, we introduced the smart search bar as an experimental feature. Many improvements have been made, but it will stay marked as experimental as we continue to solicit feedback. If you or your team are interested in trying this feature, add the following setting to your user, organization, or global settings on your Sourcegraph instance: `{ "experimentalFeatures": { "smartSearchField": true } }`. Tweet [@sourcegraph](https://twitter.com/sourcegraph) or email feedback@sourcegraph.com with your feedback.

## Changelog

### Added

- Site-Admin/Instrumentation is now available in the Kubernetes cluster deployment [8805](https://github.com/sourcegraph/sourcegraph/pull/8805).
- Extensions can now specify a `baseUri` in the `DocumentFilter` when registering providers.
- Admins can now exclude GitHub forks and/or archived repositories from the set of repositories being mirrored in Sourcegraph with the `"exclude": [{"forks": true}]` or `"exclude": [{"archived": true}]` GitHub external service configuration. [#8974](https://github.com/sourcegraph/sourcegraph/pull/8974)
- Campaign changesets can be filtered by State, Review State and Check State. [#8848](https://github.com/sourcegraph/sourcegraph/pull/8848)
- Counts of users of and searches conducted with interactive and plain text search modes will be sent back in pings, aggregated daily, weekly, and monthly.
- Aggregated counts of daily, weekly, and monthly active users of search will be sent back in pings.
- Counts of number of searches conducted using each filter will be sent back in pings, aggregated daily, weekly, and monthly.
- Counts of number of users conducting searches containing each filter will be sent back in pings, aggregated daily, weekly, and monthly.
- Added more entries (Bash, Erlang, Julia, OCaml, Scala) to the list of suggested languages for the `lang:` filter.
- Permissions background sync is now supported for GitLab and Bitbucket Server via site configuration `"permissions.backgroundSync": {"enabled": true}`.
- Indexed search exports more prometheus metrics and debug logs to aid debugging performance issues. [#9111](https://github.com/sourcegraph/sourcegraph/issues/9111)
- monitoring: the Frontend dashboard now shows in excellent detail how search is behaving overall and at a glance.
- monitoring: added alerts for when hard search errors (both timeouts and general errors) are high.
- monitoring: added alerts for when partial search timeouts are high.
- monitoring: added alerts for when search 90th and 99th percentile request duration is high.
- monitoring: added alerts for when users are being shown an abnormally large amount of search alert user suggestions and no results.
- monitoring: added alerts for when the internal indexed and unindexed search services are returning bad responses.
- monitoring: added alerts for when gitserver may be under heavy load due to many concurrent command executions or under-provisioning.

### Changed

- The "automation" feature was renamed to "campaigns".
  - `campaigns.readAccess.enabled` replaces the deprecated site configuration property `automation.readAccess.enabled`.
  - The experimental feature flag was not renamed (because it will go away soon) and remains `{"experimentalFeatures": {"automation": "enabled"}}`.
- The [Kubernetes deployment](https://github.com/sourcegraph/deploy-sourcegraph) for **existing** installations requires a
  [migration step](https://github.com/sourcegraph/deploy-sourcegraph/blob/master/docs/migrate.md) when upgrading
  past commit [821032e2ee45f21f701](https://github.com/sourcegraph/deploy-sourcegraph/commit/821032e2ee45f21f701caac624e4f090c59fd259) or when upgrading to 3.14.
  New installations starting with the mentioned commit or with 3.14 do not need this migration step.
- Aggregated search latencies (in ms) of search queries are now included in [pings](https://docs.sourcegraph.com/admin/pings).
- The [Kubernetes deployment](https://github.com/sourcegraph/deploy-sourcegraph) frontend role has added services as a resource to watch/listen/get.
  This change does not affect the newly-introduced, restricted Kubernetes config files.
- Archived repositories are excluded from search by default. Adding `archived:yes` includes archived repositories.
- Forked repositories are excluded from search by default. Adding `fork:yes` includes forked repositories.
- CSRF and session cookies now set `SameSite=None` when Sourcegraph is running behind HTTPS and `SameSite=Lax` when Sourcegraph is running behind HTTP in order to comply with a [recent IETF proposal](https://web.dev/samesite-cookies-explained/#samesitenone-must-be-secure). As a side effect, the Sourcegraph browser extension and GitLab/Bitbucket native integrations can only connect to private instances that have HTTPS configured. If your private instance is only running behind HTTP, please configure your instance to use HTTPS in order to continue using these.
- The Bitbucket Server rate limit that Sourcegraph self-imposes has been raised from 120 req/min to 480 req/min to account for Sourcegraph instances that make use of Sourcegraphs' Bitbucket Server repository permissions and campaigns at the same time (which require a larger number of API requests against Bitbucket Server). The new number is based on Sourcegraph consuming roughly 8% the average API request rate of a large customers' Bitbucket Server instance. [#9048](https://github.com/sourcegraph/sourcegraph/pull/9048/files)
- If a single, unambiguous commit SHA is used in a search query (e.g., `repo@c98f56`) and a search index exists at this commit (i.e., it is the `HEAD` commit), then the query is searched using the index. Prior to this change, unindexed search was performed for any query containing an `@commit` specifier.

### Fixed

- Zoekt's watchdog ensures the service is down upto 3 times before exiting. The watchdog would misfire on startup on resource constrained systems, with the retries this should make a false positive far less likely. [#7867](https://github.com/sourcegraph/sourcegraph/issues/7867)
- A regression in repo-updater was fixed that lead to every repository's git clone being updated every time the list of repositories was synced from the code host. [#8501](https://github.com/sourcegraph/sourcegraph/issues/8501)
- The default timeout of indexed search has been increased. Previously indexed search would always return within 3s. This lead to broken behaviour on new instances which had yet to tune resource allocations. [#8720](https://github.com/sourcegraph/sourcegraph/pull/8720)
- Bitbucket Server older than 5.13 failed to sync since Sourcegraph 3.12. This was due to us querying for the `archived` label, but Bitbucket Server 5.13 does not support labels. [#8883](https://github.com/sourcegraph/sourcegraph/issues/8883)
- monitoring: firing alerts are now ordered at the top of the list in dashboards by default for better visibility.
- monitoring: fixed an issue where some alerts would fail to report in for the "Total alerts defined" panel in the overview dashboard.

### Removed

- The v3.11 migration to merge critical and site configuration has been removed. If you are still making use of the deprecated `CRITICAL_CONFIG_FILE`, your instance may not start up. See the [migration notes for Sourcegraph 3.11](https://docs.sourcegraph.com/admin/migration/3_11) for more information.

The [changelog for this and previous releases](https://github.com/sourcegraph/sourcegraph/blob/main/CHANGELOG.md#3.14) is available on GitHub.

## Thank you

Thank you to the many people who contributed to Sourcegraph since the last release!

- [@souldzin](https://github.com/souldzin)
- [@philjones](https://github.com/philjones)
- [@brentshermana](https://github.com/brentshermana)
- [@prayashm](https://github.com/prayashm)
- [@analogue](https://github.com/analogue)
- [@kwangil-ha](https://github.com/kwangil-ha)
- [@mipearson](https://github.com/mipearson)
- [@machbio](https://github.com/machbio)
- [@daxmc99](https://github.com/daxmc99)
- [@eculver](https://github.com/eculver)
- [@mntky](https://github.com/mntky)
- [@h1nk](https://github.com/h1nk)
- [@craffert0](https://github.com/craffert0)
- [@zgrimshell](https://github.com/zgrimshell)
- [@Antoine98](https://github.com/Antoine98)

**Deploy or upgrade:** [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

From the entire Sourcegraph team ([@sourcegraph](https://twitter.com/sourcegraph)), happy coding!
