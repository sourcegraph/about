---
title: "Sourcegraph 3.9: Literal search by default, multi-project LSIF code intelligence, Grafana dashboards, and configuration"
authors:
  - name: Quinn Slack
    url: https://twitter.com/sqs
publishDate: 2019-10-20T10:00-07:00
tags: [
  blog
]
slug: sourcegraph-3.9
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
description: "Sourcegraph 3.9: Literal search by default, multi-project LSIF code intelligence, Grafana dashboards, and configuration"
---

Sourcegraph is the standard developer platform for code search and navigation at many of the largest and most advanced technology companies. With Sourcegraph, every company has access to the same kind of tools that Google and Facebook developers use every day.

We're excited to announce Sourcegraph 3.9. This release contains lots of behind-the-scenes work, both foundational and forward-looking.

<div style={{paddingLeft: '2rem'}}> 

[**🔎 Search queries are now literal (not regexp) by default**](#search-queries-are-now-literal-not-regexp-by-default)

[**🤖 Manage cross-repository PR campaigns**](#manage-cross-repository-pr-campaigns)

[**📊 Monitor the health of your Sourcegraph instance**](#monitor-the-health-of-your-sourcegraph-instance)

[**🧠 LSIF-based code intelligence for multi-language repositories**](#lsif-based-code-intelligence-for-multi-language-repositories)

[**🛠 Faster repository cloning on large instances**](#faster-repository-cloning-on-large-instances)

[**⚙️ Export settings for easier bug reporting**](#export-settings-for-easier-bug-reporting)

[**📑 Experimental paginated search API**](#experimental-paginated-search-api)

[**⚓️ Kubernetes: migration to using StatefulSets**](#kubernetes-migration-to-using-statefulsets)

[**📝 Changelog**](#changelog) (everything that changed in this release)

`{/*<!-- [**🎖️ Thank you**](#thank-you) to everyone who helped with this release. -->*/}`

</div>

**Deploy or upgrade:** [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)


## Search queries are now literal (not regexp) by default

In Sourcegraph 3.9, search query terms are interpreted literally instead of as regular expressions by default. You can toggle this behavior using the `.*` icon in the search field.

We made this change to better match the expectations of most users (after a ton of feedback). Special characters such as `*`, `(`, and `.` are matched literally, so you can search for things like `import { foo }` or `*MyType` without needing to escape or quote your query.

Regular expressions are still supported, and we expect some users to prefer regexps for all of their queries. To default to regexp queries for a single user or for all users, set the `search.defaultPatternType` setting in user settings (`/settings`) or global settings (`/site-admin/global-settings`), respectively.

Other backcompat notes:

- Existing saved searches will continue to work, retaining regexp interpretation.
- API and CLI endpoints will continue to interpret search patterns as regexp. New API and CLI consumers can use the `patternType` flag in their queries to specify the desired behavior.
- Browser omni bar search now defaults to literal search. To override this, use `patternType:regexp` in the query.
- `repo:` and `file:` filters continue to accept regexps.

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/367330377?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/367330377" target="_blank">View on Vimeo</a></p>
</div>


## Cross-repository code change management

Keeping your code secure and up-to-date often requires making changes and merging pull requests across  many repositories. As a step toward shipping support for [large-scale code change campaigns](https://about.sourcegraph.com/product/code-change-management#see-it-in-action), Sourcegraph now lets you track status and activity on campaigns of pull requests across repositories for GitHub and Bitbucket Server.

For example, if you've applied a critical security fix to 1,000 repositories, Sourcegraph makes it easy to see which and how many PRs are open/merged/closed, and you can monitor comments and review activity to see how to help get the fix approved and deployed.

Next, we plan to ship the ability to create branches and PRs across hundreds or thousands of repositories for common use cases (such as fixing security issues, upgrading dependencies, and refactoring usage of deprecated APIs).

Code change management campaigns are in private beta. [Watch the code change management screencasts](https://about.sourcegraph.com/product/code-change-management#see-it-in-action) to see what we have planned, and [apply for early access](https://about.sourcegraph.com/contact/request-code-change-management-demo/) to this feature.

## Monitor the health of your Sourcegraph instance

Sourcegraph's built-in monitoring with Grafana and Prometheus has been enhanced with default dashboards and alerts to help you confidently assess the health of your Sourcegraph instance. Sourcegraph is one of the most-used internal tools inside many large customers, and we've incorporated our learnings from these high-scale deployment environments. See [monitoring and tracing documentation](https://docs.sourcegraph.com/admin/monitoring_and_tracing) for more information.

![Grafana dashboard for monitoring Sourcegraph instance health](/blog/3.9-grafana-dashboard.png "Grafana dashboard for monitoring Sourcegraph instance health")


## LSIF-based code intelligence for multi-language repositories

LSIF-based code intelligence now works on repositories with multiple projects and languages. Languages currently supported for LSIF include Go, TypeScript, Python, and C/C++, with support for Java currently in development. [Enable LSIF-powered code intelligence](https://docs.sourcegraph.com/code_intelligence/explanations/precise_code_intelligence) for your repositories by adding a simple step to your CI build process.

See the new [lsif.dev](https://lsif.dev/) site for list of languages with LSIF indexers (which means you can get precise, LSIF-based code intelligence on Sourcegraph).

![LSIF code intelligence comparison](/blog/3.9-lsif-multi-project-code-intel.gif "LSIF-based multi-language code intelligence comparison")


## Faster repository cloning on large instances

Sourcegraph now reacts more quickly to changes in the external services you configure (such as the code hosts to mirror repositories from). For example, when you add a new code host to Sourcegraph, its repositories will become available more quickly for searching and browsing.

(We made this improvement by applying external service updates in a streaming, not serial, fashion. Repositories are now added to Sourcegraph’s database and cloned immediately and one-by-one, instead of first loading the entire list of repositories from the code host and then syncing the entire list to the database. On large Sourcegraph instances that mirror 10,000s+ of repositories from code hosts, the first repositories will show up much more quickly than before.)


## Export settings for easier bug reporting

Sourcegraph settings and configuration can now be viewed on a single page for easier exporting when reporting a bug. To view, go to ‘Report a bug’ on the site admin side panel or navigate to `/site-admin/report-bug`.

Note that secrets and tokens are not automatically redacted. Please review the full settings export before sharing externally.


## Experimental paginated search API

To enable better programmatic consumption of search results, Sourcegraph 3.9 introduces the ability to consume an entire search result set via multiple paginated search requests. The results will be returned with a stable order. This [new paginated search API](https://docs.sourcegraph.com/api/graphql/search#sourcegraph-3-9-experimental-paginated-search) is experimental and is not yet ready for production use, but we are eager to hear feedback from early adopters as we work to further improve it. (If you're interested, see the [paginated search documentation](https://docs.sourcegraph.com/api/graphql/search#sourcegraph-3-9-experimental-paginated-search) and [architecture design document](https://docs.sourcegraph.com/dev/background-information/architecture/search-pagination))


## Kubernetes: migration to using StatefulSets

For Sourcegraph users and customers that deploy using Kubernetes, our [Kubernetes deployment](https://github.com/sourcegraph/deploy-sourcegraph) manifest for indexed-search pods has changed from a Deployment to a StatefulSet. This is to enable future work on horizontally scaling indexed search.

To retain your existing indexes, follow the [migration guide](https://github.com/sourcegraph/deploy-sourcegraph/blob/master/docs/migrate.md#39). If you upgrade without following these instructions, Sourcegraph’s indexed search will be temporarily unavailable (and overall search performance will suffer) while your code is reindexed.


## Changelog

### 3.9.0

#### Added

- Our external service syncing model will stream in new repositories to Sourcegraph. Previously we could only add a repository to our database and clone it once we had synced all information from all external services (to detect deletions and renames). Now adding a repository to an external service configuration should be reflected much sooner, even on large instances. [#5145](https://github.com/sourcegraph/sourcegraph/issues/5145)
- There is now an easy way for site admins to view and export settings and configuration when reporting a bug. The page for doing so is at /site-admin/report-bug, linked to from the site admin side panel under "Report a bug".
- An experimental search pagination API to enable better programmatic consumption of search results is now available to try. For more details and known limitations see [the documentation](https://docs.sourcegraph.com/api/graphql/search).
- Search queries can now be interpreted literally.
  - There is now a dot-star icon in the search input bar to toggle the pattern type of a query between regexp and literal.
  - There is a new `search.defaultPatternType` setting to configure the default pattern type, regexp or literal, for searches.
  - There is a new `patternType:` search token which overrides the `search.defaultPatternType` setting, and the active state of the dot-star icon in determining the pattern type of the query.
- Added support for GitHub organization webhooks to enable faster updates of metadata used by [campaigns](https://about.sourcegraph.com/product/code-change-management/), such as pull requests or issue comments. See the [GitHub webhook documentation](https://docs.sourcegraph.com/admin/external_service/github#webhooks) for instructions on how to enable webhooks.
- Added burndown chart to visualize progress of campaigns.
- Added ability to edit campaign titles and descriptions.

#### Changed

- **Recommended Kubernetes Migration:** The [Kubernetes deployment](https://github.com/sourcegraph/deploy-sourcegraph) manifest for indexed-search pods has changed from a Deployment to a StatefulSet. This is to enable future work on horizontally scaling indexed search. To retain your existing indexes there is a [migration guide](https://github.com/sourcegraph/deploy-sourcegraph/blob/master/docs/migrate.md#39).
- Allow single trailing hyphen in usernames and org names [#5680](https://github.com/sourcegraph/sourcegraph/pull/5680)
- Indexed search won't spam the logs on startup if the frontend API is not yet available. [zoekt#30](https://github.com/sourcegraph/zoekt/pull/30), [#5866](https://github.com/sourcegraph/sourcegraph/pull/5866)
- Search query fields are now case insensitive. For example `repoHasFile:` will now be recognized, not just `repohasfile:`. [#5168](https://github.com/sourcegraph/sourcegraph/issues/5168)
- Search queries are now interpreted literally by default, rather than as regular expressions. [#5899](https://github.com/sourcegraph/sourcegraph/pull/5899)
- The `search` GraphQL API field now takes a two new optional parameters: `version` and `patternType`. `version` determines the search syntax version to use, and `patternType` determines the pattern type to use for the query. `version` defaults to "V1", which is regular expression searches by default, if not explicitly passed in. `patternType` overrides the pattern type determined by version.
- Saved searches have been updated to support the new patternType filter. All existing saved searches have been updated to append `patternType:regexp` to the end of queries to ensure deterministic results regardless of the patternType configurations on an instance. All new saved searches are required to have a `patternType:` field in the query.
- Allow text selection in search result headers (to allow for e.g. copying filenames)

#### Fixed

- Web app: Fix paths with special characters (#6050)
- Fixed an issue that rendered the search filter `repohascommitafter` unusable in the presence of an empty repository. [#5149](https://github.com/sourcegraph/sourcegraph/issues/5149)
- An issue where `externalURL` not being configured in the management console could go unnoticed. [#3899](https://github.com/sourcegraph/sourcegraph/issues/3899)
- Listing branches and refs now falls back to a fast path if there are a large number of branches. Previously we would time out. [#4581](https://github.com/sourcegraph/sourcegraph/issues/4581)
- Sourcegraph will now ignore the ambiguous ref HEAD if a repository contains it. [#5291](https://github.com/sourcegraph/sourcegraph/issues/5291)

#### Removed

### 3.8.2

#### Fixed

- Sourcegraph cluster deployments now run a more stable syntax highlighting server which can self-recover from rarer failure cases such as getting stuck at high CPU usage when highlighting some specific files. [#5406](https://github.com/sourcegraph/sourcegraph/issues/5406) This will be ported to single-container deployments [at a later date](https://github.com/sourcegraph/sourcegraph/issues/5841).

### 3.8.1

#### Added

- Add `nameTransformations` setting to GitLab external service to help transform repository name that shows up in the Sourcegraph UI.


## Thank you

**Deploy or upgrade:** [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

From the entire Sourcegraph team ([@sourcegraph](https://twitter.com/sourcegraph)), happy coding!

### About the author

_Quinn Slack is the CEO and co-founder of Sourcegraph, the code intelligence platform for dev teams and making coding more accessible to more people. Prior to Sourcegraph, Quinn co-founded Blend Labs, an enterprise technology company dedicated to improving home lending and was an egineer at Palantir, where he created a technology platform to help two of the top five U.S. banks recover from the housing crisis. Quinn has a BS in Computer Science from Stanford, you can chat with him on Twitter [@sqs](https://twitter.com/sqs)._
