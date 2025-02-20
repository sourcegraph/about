---
title: "Sourcegraph 3.12: Match case toggle, draft campaigns, and exciting experimental features"
authors:
  - name: Christina Forney
    url: https://handbook.sourcegraph.com/team/#christina-forney
publishDate: 2020-01-20T10:00-07:00
tags: [
  blog
]
slug: sourcegraph-3.12
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
description: "Sourcegraph 3.12: Match case toggle, draft campaigns, and exciting experimental features"
---

Sourcegraph is the standard developer platform for code search and navigation at many of the largest and most advanced technology companies. With Sourcegraph, every company has access to the same kind of tools that Google and Facebook developers use every day.

We're excited to announce Sourcegraph 3.12. In addition to the usual updates, this release includes powerful experimental features. We're looking forward to your feedback!

<div style={{paddingLeft: '2rem'}}>

[**⌨️ Search bar match case toggle**](#search-bar-match-case-toggle)<br />

[**🤖 Create draft campaigns**](#create-draft-campaigns)<br />

[**🚫 Exclude archived Bitbucket Server repositories in queries**](#exclude-archived-bitbucket-server-repositories-in-queries)<br />

[**⬇️ Download files from code views**](#download-files-from-code-views)<br />

[**🛠 GitHub authentication now supports org membership restriction**](#github-authentication-now-supports-org-membership-restriction)<br />

[**🔎 Search-based code intelligence indicator**](#search-based-code-intelligence-indicator)<br />

[**🧪 Experimental features**](#experimental-features)<br />
Interactive search mode, search across multiple revisions, repository permissions API, and faster permissions fetching on Bitbucket Server

[**📝 Changelog**](#changelog)<br />
Every detail that changed in this release

[**🎖️ Thank you**](#thank-you)<br />
Sourcegraph couldn't be what it is without the community

</div>

**Deploy or upgrade:** [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

## Search bar match case toggle

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/385925610?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/385925610" target="_blank">View on Vimeo</a></p>
</div>

Quickly toggle between case sensitive and case insensitive queries using the `Aa` icon in the search field. Previously, this filter was applied by adding `case:yes` to the search query. The toggle simplifies and standardizes this functionality.

## Create draft campaigns

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/386036051?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/386036051" target="_blank">View on Vimeo</a></p>
</div>

When rolling out organization-wide changes, it is desirable to review campaigns with your teammates. Campaigns can now be created and saved as drafts prior to publishing the campaign and creating changesets (i.e. pull requests) on your code hosts. Changes can be published individually while in draft mode to verify the change with a subset of owners.

Code change management campaigns are in private beta. [Watch the campaigns screencasts](https://about.sourcegraph.com/product/code-change-management#see-it-in-action) to see what we have planned, and [apply for early access](https://about.sourcegraph.com/contact/request-code-change-management-demo/) to campaigns for your organization.

## Exclude archived Bitbucket Server repositories in queries

You can now exclude archived repositories from Bitbucket Server using the `archived:no` [query syntax](https://docs.sourcegraph.com/code_search/reference/queries). Archived repositories are designated with the label `archived` in Bitbucket Server. This is helpful when searching for repositories with specific characteristics such as all repositories in my organization with Gradle build files that are not archived (i.e. `archived:no repohasfile:build.gradle`).

## Download files from code views

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/385925514?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/385925514" target="_blank">View on Vimeo</a></p>
</div>

Quickly download files from Sourcegraph using the new download icon in the file header.

## GitHub authentication now supports org membership restriction

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/385925276?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/385925276" target="_blank">View on Vimeo</a></p>
</div>

Organizations using GitHub for authentication can now limit access to a list of GitHub organizations for enhanced security and configuration. In the site configuration `auth.providers`, find the GitHub section (or add it using the ‘Add GitHub sign-in' quick config button). Add the new `allowOrgs` setting, and list the organizations whose members should have access to your Sourcegraph instance.

## Search-based code intelligence indicator

![Code intel indicator](/blog/3-12-code-intel-indicator.png "Code intel indicator")

Hover tooltips and find reference results now display a badge to indicate when a [result is search-based](https://docs.sourcegraph.com/code_intelligence/explanations/basic_code_intelligence). These indicators can be disabled by adding `{ "experimentalFeatures": { "showBadgeAttachments": false } }` to your user, organization, or global settings.

## Experimental features

This release contains many exciting new improvements to the Sourcegraph UI, configuration, and search capabilities. We look forward to hearing your feedback about them! Tweet [@sourcegraph](https://twitter.com/sourcegraph) or email [feedback@sourcegraph.com](mailto:feedback@sourcegraph.com) with your thoughts.

### Interactive search mode

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/386108600?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/386108600" target="_blank">View on Vimeo</a></p>
</div>

A new interactive search mode has been added to help users construct queries using UI elements. The new UI components help to narrow down search results as you iterate on your search. The existing plain text search mode and the query builder are still available via the dropdown menu to the left of the search bar.

To enable this feature add `{ "experimentalFeatures": { "splitSearchModes": true } }` to your user, org, or global settings.

### Search across multiple revisions

To search across multiple revisions of the same repository, list multiple branch names (or other revspecs) separated by `:` in your query, as in `repo:myrepo@branch1:branch2:branch2`. To search all branches, use `repo:myrepo@*refs/heads/`. To enable this feature, add `{ "experimentalFeatures": { "searchMultipleRevisionsPerRepository": true } }` to the site configuration. Previously this was only supported for diff and commit searches.

### Repository permissions API for managing ACLs in Sourcegraph

Sourcegraph now provides a GraphQL API for setting repository permissions. Teams with complex permissioning requirements (e.g., multiple code hosts), will benefit from setting up access controls directly in Sourcegraph. To enable Sourcegraph repository permissions, add `{ "permissions.userMapping" { "enabled": true, "bindID": "email" } }` to your site configuration. See the [explicit permissions API](https://docs.sourcegraph.com/admin/repo/permissions#explicit-permissions-api) documentation for more details.

### Faster permissions fetching on Bitbucket Server

![Faster permissions fetching chart](/blog/3-12-faster-permissions.png "Faster permissions fetching chart")

Previously, fetching ACL data from Bitbucket Server was limited by API constraints. Enhancements to the [Sourcegraph Bitbucket Server plugin](https://docs.sourcegraph.com/integration/bitbucket_server#sourcegraph-native-code-intelligence-plugin) have made fetching Bitbucket Server ACL data faster. To take advantage of this improvement, install the Bitbucket Server plugin and add `{ "experimentalFeatures": { "bitbucketServerFastPerm": "enabled" } }` to your site configuration.

## Changelog

### Added

- Bitbucket Server repositories with the label `archived` can be excluded from search with `archived:no` [syntax](https://docs.sourcegraph.com/code_search/reference/queries). [#5494](https://github.com/sourcegraph/sourcegraph/issues/5494)
- Add button to download file in code view. [#5478](https://github.com/sourcegraph/sourcegraph/issues/5478)
- The new `allowOrgs` site config setting in GitHub `auth.providers` enables admins to restrict GitHub logins to members of specific GitHub organizations. [#4195](https://github.com/sourcegraph/sourcegraph/issues/4195)
- Support case field in repository search. [#7671](https://github.com/sourcegraph/sourcegraph/issues/7671)
- Skip LFS content when cloning git repositories. [#7322](https://github.com/sourcegraph/sourcegraph/issues/7322)
- Hover tooltips and _Find Reference_ results now display a badge to indicate when a result is search-based. These indicators can be disabled by adding `{ "experimentalFeatures": { "showBadgeAttachments": false } }` in global settings.
- Campaigns can now be created as drafts, which can be shared and updated without creating changesets (pull requests) on code hosts. When ready, a draft can then be published, either completely or changeset by changeset, to create changesets on the code host. [#7659](https://github.com/sourcegraph/sourcegraph/pull/7659)
- Experimental: feature flag `BitbucketServerFastPerm` can be enabled to speed up fetching ACL data from Bitbucket Server instances. This requires [Bitbucket Server Sourcegraph plugin](https://github.com/sourcegraph/bitbucket-server-plugin) to be installed.
- Experimental: A site configuration field `{ "experimentalFeatures" { "tls.external": true } }` which allows you to configure SSL/TLS settings for Sourcegraph contacting your code hosts. Currently just supports turning off TLS/SSL verification. [#71](https://github.com/sourcegraph/sourcegraph/issues/71)
- Experimental: To search across multiple revisions of the same repository, list multiple branch names (or other revspecs) separated by `:` in your query, as in `repo:myrepo@branch1:branch2:branch2`. To search all branches, use `repo:myrepo@*refs/heads/`. Requires the site configuration value `{ "experimentalFeatures": { "searchMultipleRevisionsPerRepository": true } }`. Previously this was only supported for diff and commit searches.
- Experimental: interactive search mode, which helps users construct queries using UI elements. Requires the site configuration value `{ "experimentalFeatures": { "splitSearchModes": true } }`. The existing plain text search format is still available via the dropdown menu on the left of the search bar.
- A case sensitivity toggle now appears in the search bar.
- Add explicit repository permissions support with site configuration field `{ "permissions.userMapping" { "enabled": true, "bindID": "email" } }`.

### Changed

- The "Files" tab in the search results page has been renamed to "Filenames" for clarity.
- The search query builder now lives on its own page at `/search/query-builder`. The home search page has a link to it.
- User passwords when using builtin auth are limited to 256 characters. Existing passwords longer than 256 characters will continue to work.
- GraphQL API: Campaign.changesetCreationStatus has been renamed to Campaign.status to be aligned with CampaignPlan. [#7654](https://github.com/sourcegraph/sourcegraph/pull/7654)

### Fixed

- The experimental search pagination API no longer times out when large repositories are encountered. [#6384](https://github.com/sourcegraph/sourcegraph/issues/6384)
- We resolve relative symbolic links from the directory of the symlink, rather than the root of the repository. [#6034](https://github.com/sourcegraph/sourcegraph/issues/6034)
- Show errors on repository settings page when repo-updater is down. [#3593](https://github.com/sourcegraph/sourcegraph/issues/3593)
- Remove benign warning that verifying config took more than 10s when updating or saving an external service. [#7176](https://github.com/sourcegraph/sourcegraph/issues/7176)
- repohasfile search filter works again (regressed in 3.10). [#7380](https://github.com/sourcegraph/sourcegraph/issues/7380)
- Structural search can now run on very large repositories containing any number of files. [#7133](https://github.com/sourcegraph/sourcegraph/issues/7133)

### Removed

- The deprecated GraphQL mutation `setAllRepositoriesEnabled` has been removed. [#7478](https://github.com/sourcegraph/sourcegraph/pull/7478)
- The deprecated GraphQL mutation `deleteRepository` has been removed. [#7483](https://github.com/sourcegraph/sourcegraph/pull/7483)

The [changelog for this and previous releases](https://github.com/sourcegraph/sourcegraph/blob/main/CHANGELOG.md#3.12) is available on GitHub.

## Thank you

Thank you to the many people who contributed to Sourcegraph since the last release!

- [@henryaj](https://github.com/henryaj)
- [@philjones](https://github.com/philjones)
- [@kamadoatfluid](https://github.com/kamadoatfluid)
- [@sfllaw](https://github.com/sfllaw)
- [@grahamperrin](https://github.com/grahamperrin)
- [@devops81](https://github.com/devops81)
- [@remcoros](https://github.com/remcoros)
- [@shadyabhi](https://github.com/shadyabhi)
- [@Antoine98](https://github.com/Antoine98)
- [@Phrohdoh](https://github.com/Phrohdoh)

**Deploy or upgrade:** [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

From the entire Sourcegraph team ([@sourcegraph](https://twitter.com/sourcegraph)), happy coding!
