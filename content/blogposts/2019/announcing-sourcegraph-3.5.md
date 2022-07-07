---
title: 'Sourcegraph 3.5: Powerful new search filters, improved configuration, and Bitbucket Server repository permissions'
authors:
  - name: Ryan Blunden
    url: https://twitter.com/ryan_blunden
  - name: Christina Forney
    url: https://handbook.sourcegraph.com/team/#christina-forney
publishDate: 2019-06-20T10:00-07:00
tags: [
  blog
]
slug: sourcegraph-3.5
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
description: 'Sourcegraph 3.5: Powerful new search filters, improved configuration, and Bitbucket Server repository permissions'
---

<p className="text-center">
  <b>Happy Pride Month 🏳️‍🌈 from all of us at Sourcegraph!</b>
</p>

[Sourcegraph](https://about.sourcegraph.com/) is the standard developer platform for code search and navigation at many of the largest and most exacting technology companies. With Sourcegraph, every company has access to the same kind of tools that Google and Facebook developers use every day.

<div style={{paddingLeft: '2rem'}}>

[**⏎ Multi-line search with newline (`\n`) characters**](#multi-line-search-with-newline-n-characters)<br />

[**📅 Restrict search results to repositories with recent activity**](#restrict-search-results-to-repositories-with-recent-activity)<br />

[**📂 Restrict search to repositories with or without a specific filename**](#restrict-search-to-repositories-with-or-without-a-specific-filename)<br />

[**🔒 Introducing Bitbucket Server repository permissions**](#introducing-bitbucket-server-repository-permissions)<br />
Enforce repository permissions defined in Bitbucket Server.

[**🌈 Improved code reviews with line decorations in pull requests**](#improved-code-reviews-with-line-decorations-in-pull-requests)<br />
Use extensions like Codecov, Sentry, Datadog, and more to put info in context of a code review.

[**💾 Powering code alerts with saved searches**](#powering-code-alerts-with-saved-searches)<br />
Improved UI to separate User and Organization saved searches.

[**🛠 New `orgs` field to optimize repository syncing for GitHub organizations**](#new-code-classNamelanguage-textorgscode-field-to-optimize-repository-syncing-for-github-organizations)<br />
Easier configuration for cloning all repos in an organization.

[**💡 Repository syncing status for site admins**](#repository-syncing-status-for-site-admins)<br />
Experimental feature to convey the status of cloning repositories.

[**📝 Changelog**](#35-changelog)<br />

[**🎖️ Thank you**](#thank-you)<br />

</div>

**Deploy or upgrade:** [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

## Multi-line search with newline (`\n`) characters

Sourcegraph now supports multi-line searches by matching on `\n`, providing new search use cases. For example, to identify usage of Python decorators at the module and className level:

```text
lang:python ^\s*@.*\n\s*def
```

**Note:** multi-line search is currently only supported on indexed repositories (and, inherently, default branches). We’re [working to improve this](https://github.com/sourcegraph/sourcegraph/issues/4518).

## Restrict search results to repositories with recent activity

When you’re searching over 10,000+ repositories in an enterprise setting, it’s common to get results from old repositories with no active maintainers. You can now exclude repositories with no recent commits (to their default branch) with the beta `repohascommitafter` [search filter](https://docs.sourcegraph.com/code_search/reference/queries).

Examples:

- Find Dockerfiles requiring upgrades from an obsolete version of Debian so you can contact the maintainers:

    ```text
    file:Dockerfile FROM debian\:jessie|8 repohascommitafter:”1 month ago”
    ```

- Find Terraform files with an `aws_instance` resource to analyze EBS volume configuration:

    ```text
    aws_instance lang:hcl repohascommitafter:"1 month ago"
    ```

**Note:** `repohascommitafter` is considered beta as performance degrades significantly on very large repository sets. We are [addressing this in 3.6](https://github.com/sourcegraph/sourcegraph/issues/4614).

## Restrict search to repositories with or without a specific filename

Sometimes, you want to search repositories based on the existence or absence of a file. This is now possible with the new `repohasfile` [search filter](https://docs.sourcegraph.com/code_search/reference/queries) which comes in two forms, `repohasfile` and `-repohasfile`.

Examples:

- Find applications with a Dockerfile, written in Go, that use Travis CI:

    ```text
    repohasfile:Dockerfile file:\.travis.yml "language: go"
    ```

- Find applications with a Dockerfile that do not contain a `.dockerignore` file:

    ```text
    -repohasfile:\.dockerignore file:Dockerfile
    ```

- Find Python applications using `pytest` without a pytest.ini or pytest.conf file:

    ```text
    -repohasfile:(pytest\.ini|pytest\.conf) lang:python "import pytest"
    ```

## Introducing Bitbucket Server repository permissions

_Note: [GitHub](https://docs.sourcegraph.com/admin/repo/permissions#github) and [GitLab](https://docs.sourcegraph.com/admin/repo/permissions#gitlab) repository permissions are already supported._

Configuring Sourcegraph to enforce Bitbucket Server repository permissions for code search and navigation is now available for instances with < 2,500 repositories.

Making this possible, is the new `authorization` field, which enables Sourcegraph to communicate with the Bitbucket Server through an application link. Check out the [configuring Bitbucket Server and Sourcegraph guide](https://docs.sourcegraph.com/admin/repo/permissions#bitbucket-server) for requirements and end to end configuration.

We are working closely with our customers who have larger Sourcegraph instances to improve performance beyond 10,000+ repositories.

## Improved code reviews with line decorations in pull requests

<div className="container">
<div style={{padding:'56.25% 0 0 0', position:'relative'}}>
  <iframe src="https://player.vimeo.com/video/343070976?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
</div>
<p style={{textAlign: 'center'}}><a href="https://vimeo.com/343070976" target="_blank">View on Vimeo</a></p>
</div>

Line decorations enhance code views with Sourcegraph extensions such as [Codecov](https://sourcegraph.com/extensions/sourcegraph/codecov), [Sentry](https://sourcegraph.com/extensions/sourcegraph/sentry), and [Datadog](https://sourcegraph.com/extensions/sourcegraph/datadog-metrics). In 3.5, line decorations are now available on pull/merge requests on GitHub, Bitbucket Server, and GitLab.

## Powering code alerts with saved searches

<div className="container">
<div style={{padding:'56.25% 0 0 0', position:'relative'}}>
  <iframe src="https://player.vimeo.com/video/342111852?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
</div>
<p style={{textAlign: 'center'}}><a href="https://vimeo.com/342111852" target="_blank">View on Vimeo</a></p>
</div>

User-level and organization-level saved searches are now separate. You can view and manage saved searches in the user and organization profile areas, respectively.

[Saved searches](https://docs.sourcegraph.com/code_search/how-to/saved_searches) can be used to bookmark your frequently used searches. Additionally, you can monitor critical parts of your code by turning on saved search email notifications.

## New `orgs` field to optimize repository syncing for GitHub organizations

For customers using GitHub with 1,000+ repositories, Sourcegraph sometimes exceeds GitHub’s search API rate limit during syncing, and may result in an incomplete set of cloned repositories.

To address this, a [new `orgs` field](https://docs.sourcegraph.com/admin/external_service/github#selecting-repositories-for-code-search) has been added for customers who want to sync all repositories for their organization. This uses a different GitHub API that is not subject to rate limiting.

The `orgs` field is a list of GitHub organizations:

```json
“orgs”: [
    “gorilla”
]
```

If filtering the list of repositories is required, e.g. `archived:no  forked:no` the `repositoryQuery` should be used instead of `orgs`. If the result of a query entry in `repositoryQuery` exceeds 1,000 repositories, it will need to be split out over multiple entries. Please [contact support](mailto:support@sourcegraph.com) if you require assistance.

Here is an example of the configuration to sync all repositories for the Gorilla organization:

![3.5 org settings](/blog/3.5-org-settings.png)

This is the resulting set of repositories from the above configuration:

![3.5 org repos](/blog/3.5-org-repos.png)

## Repository syncing status for site admins

<div className="container">
<div style={{padding:'56.25% 0 0 0', position:'relative'}}>
  <iframe src="https://player.vimeo.com/video/343706613?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
</div>
<p style={{textAlign: 'center'}}><a href="https://vimeo.com/343706613" target="_blank">View on Vimeo</a></p>
</div>

To give more visibility into the status of repository syncing and updating operations, we added an experimental status indicator in the navigation bar.

To enable the repository syncing status indicator, add this setting to your site configuration:

```json
"experimentalFeatures": { "statusIndicator": "enabled" }
```

Due to the experimental status of this feature, Sourcegraph instances with 500+ repositories may experience confusing status updates.

## 3.5 changelog

### Added

- Indexed search now supports matching consecutive literal newlines, with queries like e.g. `foo\nbar.*` to search over multiple lines. [#4138](https://github.com/sourcegraph/sourcegraph/issues/4138)
- The `orgs` setting in [GitHub external service config](https://docs.sourcegraph.com/admin/external_service/github) allows admins to select all repositories from the specified organizations to be synced.
- A new experimental search filter `repohascommitafter:"30 days ago"` allows users to exclude stale repositories that don't contain commits (to the branch being searched over) past a specified date from their search query.
- The `authorization` setting in the [Bitbucket Server external service config](https://docs.sourcegraph.com/admin/external_service/bitbucket_server#permissions) enables Sourcegraph to enforce the repository permissions defined in Bitbucket Server.
- A new, experimental status indicator in the navigation bar allows admins to quickly see whether the configured repositories are up to date or how many are currently being updated in the background. You can enable the status indicator with the following site configuration: `"experimentalFeatures": { "statusIndicator": "enabled" }`.

### Changed

- The saved searches UI has changed. There is now a saved searches page in the user and organizations settings area. A saved search appears in the settings area of the user or organization it is associated with.

### Fixed

- Fixed repository search patterns which contain `.*`. Previously our optimizer would ignore `.*`, which in some cases would lead to our repository search excluding some repositories from the results.
- Fixed an issue where the Phabricator native integration would be broken on recent Phabricator versions. This fix depends on v1.2 of the [Phabricator extension](https://github.com/sourcegraph/phabricator-extension).
- Fixed an issue where the "Empty repository" banner would be shown on a repository page when starting to clone a repository.
- Prevent data inconsistency on cached archives due to restarts. (#4366)
- On the /extensions page, the UI is now less ambiguous when an extension has not been activated. (#4446)

See the [full Sourcegraph changelog](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md).

## Thank you

Thank you to the many people who contributed to Sourcegraph since the last release!

- [@aisbaa](https://github.com/aisbaa)
- [@jacks0n](https://github.com/jacks0n)
- [@dobrou](https://github.com/dobrou)
- [@wxio](https://github.com/wxio)
- [@djuarezg](https://github.com/djuarezg)
- [@majapw](https://github.com/majapw)
- [@ceecurvin](https://github.com/ceecurvin)
- [@jlangston](https://github.com/jlangston)
- [@CH-JosephBironas](https://github.com/CH-JosephBironas)
- [@machbio](https://github.com/machbio)
- [@neculaesei](https://github.com/neculaesei)
- [@kevinchen94](https://github.com/kevinchen94)
- [@b-j-p](https://github.com/b-j-p)
- [@thinktopdown](https://github.com/thinktopdown)
- [@akshetpandey](https://github.com/akshetpandey)
- [@hsluoyz](https://github.com/hsluoyz)
- [@craffert0](https://github.com/craffert0)
- [@francisschmaltz](https://github.com/francisschmaltz)
- [@goddardcm](https://github.com/goddardcm)
- [@hillba](https://github.com/hillba)
- [@mcdan](https://github.com/mcdan)
- [@bastiankoetsier](https://github.com/bastiankoetsier)
- [@ijsnow](https://github.com/ijsnow)
- [@IntelDan](https://github.com/IntelDan)
- [@masatake](https://github.com/masatake)
- [@yevbar](https://github.com/yevbar)

---

**Deploy or upgrade:** [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

From the entire Sourcegraph team ([@sourcegraph](https://twitter.com/sourcegraph)), happy coding!
