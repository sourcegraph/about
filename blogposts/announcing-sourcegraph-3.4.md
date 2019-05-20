---
title: 'Sourcegraph 3.4: Performance and configuration enhancements for managing 30,000+ repositories'
author: Ryan Blunden and Christina Forney
publishDate: 2019-05-20T10:00-07:00
tags: [
  blog
]
slug: sourcegraph-3.4
heroImage: /sourcegraph-mark.png
published: true
---

We're excited to announce Sourcegraph 3.4. Sourcegraph is a code search and navigation tool (self-hosted, open-source, and cross-repository). Read on for the details, and thanks to our customers and community for reporting issues and providing feedback. You’re helping to make each Sourcegraph release the best one yet!

This release makes Sourcegraph more flexible and configurable to meet the needs of [large enterprises](https://about.sourcegraph.com/), such as Uber, Lyft and Yelp. Our customers rely on Sourcegraph syncing and searching 30,000 plus repositories, with thousands of daily users.

To meet these needs, this release focussed on improving search performance, adding new configuration options, enhanced repository syncing logic to reduce code host API calls, and providing customers with a standard set of monitoring, tracing and diagnostic tools to help them resolve issues faster.

<div style="padding-left: 2rem">

[**🗺 Browser extension now supports repository path mapping**](#browser-extension-now-supports-repository-path-mapping)<br />
Get shorter repository path URLs in Sourcegraph.

[**🛠 Code host sync improvements for AWS CodeCommit and Gitolite**](#code-host-sync-improvements-for-aws-codecommit-and-gitolite)<br />
Easily manage thousands of repositories, plus AWS CodeCommit gets new gitCredentials field.

[**🗂 Optionally loading config from the file system or K8s ConfigMap**](#optionally-loading-config-from-the-file-system-or-k8s-configmap)<br />
For teams wanting code review for config changes, instead of saving directly to the database.

[**⏰ Controlling upgrade notifications for patch releases**](#controlling-upgrade-notifications-for-patch-releases)<br />
Patch release upgrade notifications for admins can now be disabled

[**🔎 Higher information density in search results**](#higher-information-density-in-search-results)<br />
See more content above the fold

[**📝 Changelog**](#340-changelog)<br />
Every detail that changed in this release

[**🎖️ Thank you**](#thank-you)<br />
Sourcegraph couldn’t be what it is without the community.

</div>

**Deploy or upgrade:** [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

**Insiders:** Want to try pre-release development builds? Change the Docker image tag to `sourcegraph:insiders`.

## Browser extension now supports repository path mapping

<p class="container">
<div style="padding:56.25% 0 0 0;position:relative;">
  <iframe src="https://player.vimeo.com/video/336923053?color=0CB6F4&amp;title=0&amp;byline=" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
</div>
<p style="text-align: center"><a href="https://vimeo.com/336923053" target="_blank">View on Vimeo</a></p>
</p>

By default, the URL path to a repository on Sourcegraph includes the code host, plus the path to the repository, e.g. `/github.com/kubernetes/kubernetes`. Unless you have multiple code hosts with the same `owner/repository` combinations, the hostname in the path is unnecessary. You’ll especially want to remove it if your code host hostname is long, such as `devtools.githubenterprise.internal`.

To reduce the path to `owner/repository`,  the GitHub external service configuration would be altered to include:

```json
"repositoryPathPattern": "{nameWithOwner}"
```

In Sourcegraph 3.4, the browser extension is now aware of repository name mappings, so you can now accurately jump to Sourcegraph from your code host, or from your code host to Sourcegraph.

## Code host sync improvements for AWS CodeCommit and Gitolite

Sourcegraph 3.3 saw the introduction of [config based repository selection](https://about.sourcegraph.com/blog/sourcegraph-3.3#config-based-repository-selection) (for [GitHub](https://docs.sourcegraph.com/admin/external_service/github), [GitLab](https://docs.sourcegraph.com/admin/external_service/gitlab) and [Bitbucket Server](https://docs.sourcegraph.com/admin/external_service/bitbucket_server)), and 3.4 brings the same model to [AWS CodeCommit](al_service/aws_codecommit), and [Gitolite](https://docs.sourcegraph.com/admin/external_service/gitolite).

As a result, AWS CodeCommit and Gitolite get a new `exclude` field, plus AWS CodeCommit now supports the `gitCredentials` option for using a static username and password tied to an IAM user.

[See the changelog](#340-changelog) for more details

## Optionally loading config from the file system or K8s ConfigMap

Storing site and critical configuration in the database (as of Sourcegraph 3.0), suits most deployments, but for teams requiring config changes to go through code review, Sourcegraph now provides the option of loading configuration from a file or ConfigMap.

[Site config](https://docs.sourcegraph.com/admin/config/site_config), [critical config](https://docs.sourcegraph.com/admin/config/critical_config), or [external services](https://docs.sourcegraph.com/admin/external_service) config can be loaded from the file system or ConfigMap if the following environment variables are set on the server:

```bash
CRITICAL_CONFIG_FILE=critical.json
SITE_CONFIG_FILE=site.json
EXTSVC_CONFIG_FILE=extsvc.json
```

For [cluster (Kubernetes)](https://github.com/sourcegraph/deploy-sourcegraph) deployments, an admin is responsible for creating and applying the ConfigMap values into the frontend container.

## Controlling upgrade notifications for patch releases

<p class="container">
<div style="padding:56.25% 0 0 0;position:relative;">
  <iframe src="https://player.vimeo.com/video/336927042?color=0CB6F4&amp;title=0&amp;byline=" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
</div>
<p style="text-align: center"><a href="https://vimeo.com/336927042" target="_blank">View on Vimeo</a></p>
</p>

Sourcegraph detects when a new version is available and shows a dismissable notification to site admins. In Sourcegraph 3.4, admins can now control if they want to see patch release notifications by adding the following configuration to global, organization, or user settings:

```json
{
  ...
  “alerts.showPatchUpdates": false,
  ...
}
```

**Note:** Upgrade notifications are always shown for major.minor releases.

## Higher information density in search results

We're tightening up the Sourcegraph UI to remove unnecessary whitespace, so you can see more information without scrolling. This release ships with a cleaner search results interface, and higher information density.

![](/blog/3.4-density-2.png)

![](/blog/3.4-density-1.png)

## 3.4 Changelog

### Added

- When `repositoryPathPattern` is configured, paths from the full long name will redirect to the configured name. Extensions will function with the configured name. `repositoryPathPattern` allows administrators to configure "nice names". For example `sourcegraph.example.com/github.com/foo/bar` can configured to be `sourcegraph.example.com/gh/foo/bar` with `"repositoryPathPattern": "gh/{nameWithOwner}"`. (#462)
- Admins can now turn off site alerts for patch version release updates using the `alerts.showPatchUpdates` setting. Alerts will still be shown for major and minor version updates.
- The new `gitolite.exclude` setting in [Gitolite external service config](https://docs.sourcegraph.com/admin/external_service/gitolite#configuration) allows you to exclude specific repositories by their Gitolite name so that they won't be mirrored. Upon upgrading, previously "disabled" repositories will be automatically migrated to this exclusion list.
- The new `aws_codecommit.exclude` setting in [AWS CodeCommit external service config](https://docs.sourcegraph.com/admin/external_service/aws_codecommit#configuration) allows you to exclude specific repositories by their AWS name or ID so that they won't be synced. Upon upgrading, previously "disabled" repositories will be automatically migrated to this exclusion list.
- Added a new, _required_ `aws_codecommit.gitCredentials` setting to the [AWS CodeCommit external service config](https://docs.sourcegraph.com/admin/external_service/aws_codecommit#configuration). These Git credentials are required to create long-lived authenticated clone URLs for AWS CodeCommit repositories. For more information about Git credentials, see the AWS CodeCommit documentation: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_ssh-keys.html#git-credentials-code-commit. For detailed instructions on how to create the credentials in IAM, see this page: https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-gc.html
- Added support for specifying a URL formatted `gitolite.host` setting in [Gitolite external service config](https://docs.sourcegraph.com/admin/external_service/gitolite#configuration) (e.g. `ssh://git@gitolite.example.org:2222/`), in addition to the already supported SCP like format (e.g `git@gitolite.example.org`)
- Added support for overriding critical, site, and external service configurations via files. Specify `CRITICAL_CONFIG_FILE=critical.json`, `SITE_CONFIG_FILE=site.json`, and/or `EXTSVC_CONFIG_FILE=extsvc.json` on the `frontend` container to do this.

### Changed

- Kinds of external services in use are now included in [server pings](https://docs.sourcegraph.com/admin/pings).
- Bitbucket Server: An actual Bitbucket icon is now used for the jump-to-bitbucket action on repository pages instead of the previously generic icon.
- Default config for GitHub, GitHub Enterprise, GitLab, Bitbucket Server, and AWS Code Commit external services has been revised to make it easier for first time admins.

### Removed

- Fields related to Repository enablement have been deprecated. Mutations are now NOOPs, and for repositories returned the value is always true for Enabled. The enabled field and mutations will be removed in 3.6. Mutations: `setRepositoryEnabled`, `setAllRepositoriesEnabled`, `updateAllMirrorRepositories`, `deleteRepository`. Query parameters: `repositories.enabled`, `repositories.disabled`. Field: `Repository.enabled`.
- Global saved searches are now deprecated. Any existing global saved searches have been assigned to the Sourcegraph instance's first site admin's user account.
- The `search.savedQueries` configuration option is now deprecated. Existing entries remain in user and org settings for backward compatibility, but are unused as saved searches are now stored in the database.

### Fixed

- Fixed a bug where submitting a saved query without selecting the location would fail for non-site admins (#3628).
- Fixed settings editors only having a few pixels height.
- Fixed a bug where browser extension and code review integration usage stats were not being captured on the site-admin Usage Stats page.
- Fixed an issue where in some rare cases PostgreSQL starting up slowly could incorrectly trigger a panic in the `frontend` service.
- Fixed an issue where the management console password would incorrectly reset to a new secure one after a user account was created.
- Fixed a bug where gitserver would leak file descriptors when performing common operations.
- Substantially improved the performance of updating Bitbucket Server external service configurations on instances with thousands of repositories, going from e.g. several minutes to about a minute for ~20k repositories (#4037).
- Fully resolved the search performance regression in v3.2.0, restoring performance of search back to the same levels it was before changes made in v3.2.0.
- Fix a bug where using a repo search filter with the prefix `github.com` only searched for repos whose name starts with `github.com`, even though no `^` was specified in the search filter. (#4103)

The [changelog for this and previous releases](https://github.com/sourcegraph/sourcegraph/blob/master/CHANGELOG.md#3.4) is available on GitHub.

## Thank you

Thank you to the many people who contributed to Sourcegraph since the last release!

- [@akshetpandey](https://github.com/akshetpandey)
- [@IntelDan](https://github.com/IntelDan)
- [@wxio](https://github.com/wxio)
- [@b-j-p](https://github.com/b-j-p)
- [@sriniCA](https://github.com/sriniCA)
- [@JP3BGY](https://github.com/JP3BGY)
- [@MaxLeiter](https://github.com/MaxLeiter)
- [@jlangston](https://github.com/jlangston)
- [@siddharthab](https://github.com/siddharthab)
- [@aisbaa](https://github.com/aisbaa)
- [@yevbar](https://github.com/yevbar)
- [@anishhegde](https://github.com/anishhegde)
- [@calvn](https://github.com/calvn)
- [@kevinchen94](https://github.com/kevinchen94)
- [@chadasapp](https://github.com/chadasapp)
- [@thewarpaint](https://github.com/thewarpaint)
- [@djuarezg](https://github.com/djuarezg)
- [@GotenXiao](https://github.com/GotenXiao)
- [@sslavian812](https://github.com/sslavian812)
- [@craffert0](https://github.com/craffert0)
- [@keremgocen](https://github.com/keremgocen)
- [@jamidwyer](https://github.com/jamidwyer)
- [@sickyoon](https://github.com/sickyoon)
- [@carloslfu](https://github.com/carloslfu)
- [@JoshuaKGoldberg](https://github.com/JoshuaKGoldberg)
- [@sfllaw](https://github.com/sfllaw)
- [@thinktopdown](https://github.com/thinktopdown)
- [@kofoworola](https://github.com/kofoworola)
- [@postables](https://github.com/postables)
- [@jacks0n](https://github.com/jacks0n)
- [@markus-wa](https://github.com/markus-wa)
- [@abeyerpath](https://github.com/abeyerpath)

## Deploy or upgrade

[Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

Upgrading from 2.x or 3.0? [See the migration guide](https://docs.sourcegraph.com/admin/migration/3_0)

---

From the entire Sourcegraph team ([@srcgraph](https://twitter.com/srcgraph)), happy coding!
