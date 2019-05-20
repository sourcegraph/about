---
title: 'Sourcegraph 3.4: Metrics, observability, and scaling past 30,000 repos'
author: Ryan Blunden
publishDate: 2019-05-20
tags: [
  blog
]
slug: sourcegraph-3.4
heroImage: /blog/sourcegraph-mark
published: false
---

<!--
  Don't forget to check this against the ../STYLEGUIDE.md
-->

*Sourcegraph is an open-source, self-hosted, cross-repository code search and navigation tool, with an efficient web interface and "feels-like-native" integration into your code host. [Install or upgrade Sourcegraph](#install-or-upgrade).*

This release is all about making Sourcegraph more configurable and flexible to meet the unique needs of [large enterprises](https://about.sourcegraph.com/) with 30,000+ repositories who rely on Sourcegraph every day. We love 🥰our site admins who run Sourcegraph for hundreds to thousands of their colleagues every day.

- [Link to each section](#section-link)
- [Changelog](#changelog)

## SECTION

<!--
Each section should have a screencast when possible, usually without sound as they only for 30s max.

  <p class="container">
    <div style="padding:56.25% 0 0 0;position:relative;">
      <iframe src="https://player.vimeo.com/video/$VIMEO_VIDEO_ID?color=0CB6F4&amp;title=0&amp;byline=0&amp;portrait=0&autoplay=1&loop=1" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
    </div>
    <p style="text-align: center"><a href="https://vimeo.com/VIMEO_VIDEO_ID" target="_blank">View on Vimeo</a></p>
  </p>
-->

## Controlling upgrade notifications for patch releases

Sourcegraph detects when a new version is available and shows a dismissable notification to site admins. In Sourcegraph 3.4, admins can now control if they want to see patch release notifications by adding the following configuration to global, organization, or user settings:

```
“alerts.showPatchUpdates": false
```

**Note:** Notifications will still display for major.minor releases.

## Code host sync improvements for AWS CodeCommit and Gitolite

Sourcegraph 3.3 saw the introduction of [config based repository selection](https://about.sourcegraph.com/blog/sourcegraph-3.3#config-based-repository-selection) (for GitHub, GitLab and Bitbucket Server), and 3.4 brings the same model to AWS CodeCommit, and Gitolite.

As a result, AWS CodeCommit and Gitolite get a new `exclude` field, plus AWS CodeCommit now supports the `gitCredentials` option for using a static username and password tied to an IAM user.

[See the changelog] for more details


## Optionally loading config from the file system or K8s ConfigMap

Storing site and critical configuration in the database (as of Sourcegraph 3.0), suits most deployments, but for teams requiring config changes to go through code review, Sourcegraph now provides the option of loading configuration from a file or ConfigMap.

[Site config], [critical config], or [external services] config can be loaded from the file system or ConfigMap if the following environment variables are set on the server:

```
CRITICAL_CONFIG_FILE=critical.json
SITE_CONFIG_FILE=site.json
EXTSVC_CONFIG_FILE=extsvc.json
```

For cluster (Kubernetes) deployments, an admin is responsible for creating and applying the ConfigMap values into the frontend container.

## Browser extension now supports repository path mapping

By default, the URL path to a repository on Sourcegraph includes the code host, plus the path to the repository, e.g. `/github.com/kubernetes/kubernetes`. Unless you have multiple code hosts with the same `owner/repository` combinations, the hostname in the path is unnecessary. You’ll especially want to remove it if your code host hostname is long, such as `devtools.githubenterprise.internal`.

To reduce the path to `owner/repository`,  the GitHub external service configuration would be altered to include:

```
"repositoryPathPattern": "{nameWithOwner}"
```

In Sourcegraph 3.4, the browser extension is now aware of repository name mappings, so you can now accurately jump to Sourcegraph from your code host, or from your code host to Sourcegraph.

## Higher information density

We're tightening up the Sourcegraph UI to remove unnecessary whitespace, so you can see more information without scrolling. This release ships with a cleaner search results interface, and higher information density.

## Changelog

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

The [changelog for this and previous releases](https://github.com/sourcegraph/sourcegraph/blob/master/CHANGELOG.md) is available on GitHub.

## Thank you

Thank you to the many people who contributed to make Sourcegraph better since the last release!

- [@akshetpandey](https://github.com/akshetpandey)
- [@IntelDan](https://github.com/IntelDan)
- [@wxio](https://github.com/wxio)
- [@b-j-p](https://github.com/b-j-p)
- [@sriniCA](https://github.com/sriniCA)
- [@JP3BGY](https://github.com/JP3BGY)
- [@MaxLeiter](https://github.com/MaxLeiter)
- [@jlangston](https://github.com/jlangston)
- [@renovate[bot]](https://github.com/apps/renovate)
- [@ijsnow](https://github.com/ijsnow)
- [@siddharthab](https://github.com/siddharthab)
- [@aisbaa](https://github.com/aisbaa)
- [@yevbar](https://github.com/yevbar)
- [@anishhegde](https://github.com/anishhegde)
- [@calvn](https://github.com/calvn)
- [@kevinchen94](https://github.com/kevinchen94)
- [@chadasapp](https://github.com/chadasapp)
- [@thewarpaint](https://github.com/thewarpaint)
- [@djuarezg](https://github.com/djuarezg)
- [@francisschmaltz](https://github.com/francisschmaltz)
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
- [@todo[bot]](https://github.com/apps/todo)
- [@postables](https://github.com/postables)
- [@jacks0n](https://github.com/jacks0n)
- [@markus-wa](https://github.com/markus-wa)
- [@abeyerpath](https://github.com/abeyerpath)

## Install or upgrade

Ready to install? [Install Sourcegraph 3.2](https://docs.sourcegraph.com/)

Upgrading from 2.x or 3.0? [See the migration guide](https://docs.sourcegraph.com/admin/migration/3_0)

---

From the entire Sourcegraph team ([@srcgraph](https://twitter.com/srcgraph)), happy coding!
