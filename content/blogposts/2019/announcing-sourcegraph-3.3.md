---
title: 'Sourcegraph 3.3: Improving the user experience for site admins'
authors:
  - name: Ryan Blunden
    url: https://twitter.com/ryan_blunden
publishDate: 2019-04-22T10:00-07:00
tags: [
  blog
]
slug: sourcegraph-3.3
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
description: 'Sourcegraph 3.3: Improving the user experience for site admins'
---

We're excited to announce Sourcegraph 3.3. Sourcegraph is a code search and navigation tool (self-hosted, open source, and cross-repository). Read on for the details, and thanks to our customers and community for reporting issues and providing feedback. You’re helping to make each Sourcegraph release the best one yet!

<div style={{paddingLeft: '2rem'}}>

[**🛠️ Config-based repository selection**](#config-based-repository-selection)<br />
Define add/exclude lists in external services instead of enabling/disabling.

**[🔌 Bitbucket Server integration](#bitbucket-server-integration)**<br />
Better PR code reviews on Bitbucket Server with hover tooltips and "go to definition".

**[✔️Grant permissions on your code host](#grant-permissions-on-your-code-host)**<br />
When using code hosts other than GitHub.com.

[**🧭 "Go to definition" using dependency graph**](#go-to-definition-using-dependency-graph)<br />
`import` / `require` statements are used to help find the right definition.

[**🦅 Swift code navigation**](#swift-code-navigation)<br />
Fly around Swift code on Sourcegraph.com or your code host.

[**🗄 Symbols for the current file**](#symbols-for-the-current-file)<br />
The symbols sidebar is now scoped to the current file/directory you’re viewing.

`{/*TODO(ryan): Show once 3.3 is available on DigitalOcean[**🚢 Deployments secure by default with TLS pre-configured**](#deployments)<br />AWS and DigitalOcean deployments with TLS via self-signed certs.*/}`

[**🔎 Handle common search queries containing (unintended) invalid regexp**](#handle-common-search-queries-containing-unintended-invalid-regexp)<br />
Searching for function call sites such as `open(` now work as expected.

[**📣 Tips for making Sourcegraph a part of your dev tools stack**](#making-sourcegraph-a-part-of-your-dev-tools-stack)<br />
Documentation on integrating Sourcegraph and code search into your team's workflow.

[**🧯 Jump to Sentry issue from your code**](#jump-to-sentry-issue-from-your-code)<br/>
Your error and exception handling code, annotated with Sentry links.

[**📝 Changelog**](#330-changelog)<br />
Every detail that changed in this release

[**🎖️ Thank you**](#thank-you)<br />
Sourcegraph couldn’t be what it is without the community.

</div>

**Deploy or upgrade:** [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) `{/*<!--| [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c)-->*/}`| [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

**Insiders:** Want to try pre-release development builds? Change the Docker image tag to `sourcegraph:insiders`.

## Config-based repository selection

Prior to 3.3, integrating with a code host and selecting which repositories to use was a manual process:

![Old Sourcegraph repository management flow](/blog/old-repository-sync.png)

While it was simple, it presented some problems:
Sourcegraph would fetch and list all repositories accessible to the token which often included both an account’s private repositories, as well as the repositories from associated GitHub organizations.

### Why manual enabling and disabling was problematic

Once dealing with more than a few dozen repositories (most of our customers have many thousands), manually enabling each repository was time-consuming, and often resulted in scripted GraphQL queries with selection logic.

From 3.3 onwards, selecting which repositories to search and mirror from GitHub, GitLab or Bitbucket Server is now part of the external service configuration for each code host.

This configuration exclusively determines which repositories are used, eliminating the manual process of enabling, disabling and deleting individual repositories.

Additionally, if a repository is deleted from the code host or if it is no longer accessible to the provided token, it will be deleted from Sourcegraph automatically. Renames of upstream repositories are also gracefully detected and handled.

![New Sourcegraph repository management via configuration](/blog/new-repository-sync.png)

For example, here are the fields for repository selection for the GitHub external service.

<TableWrapper>
  <table>
    <thead>
      <tr>
        <th>Field</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>repos</td>
        <td>List of repositories to add "owner/name" format ([view in schema](https://github.com/sourcegraph/sourcegraph/blob/main/schema/github.schema.json#L38-L42))</td>
      </tr>
      <tr>
        <td>repositoryQuery</td>
        <td>List of strings that are queries by type, e.g. `affiliated` and/or code host specific search filters ([view in schema](https://github.com/sourcegraph/sourcegraph/blob/main/schema/github.schema.json#L66-L75))</td>
      </tr>
      <tr>
        <td>exclude*</td>
        <td>List of repositories to exclude in "owner/name" format (view in schema)</td>
      </tr>
    </tbody>
  </table>
</TableWrapper>

<p>*exclude takes precedence over the `repos` and `repositoryQuery` syntax.</p>

The [GitLab](https://github.com/sourcegraph/sourcegraph/blob/main/schema/gitlab.schema.json#L38-L91) and [Bitbucket Server](https://github.com/sourcegraph/sourcegraph/blob/main/schema/bitbucket_server.schema.json#L68-L113) fields for repository selection are similar to [GitHub](https://github.com/sourcegraph/sourcegraph/blob/main/schema/github.schema.json#L38-L75), but differ based on the search and selection options in the code host's API.

This has been implemented for [GitHub](https://docs.sourcegraph.com/admin/external_service/github#selecting-repositories-for-code-search), [GitLab](https://docs.sourcegraph.com/admin/external_service/gitlab#repository-syncing) and [Bitbucket Server](https://docs.sourcegraph.com/admin/external_service/bitbucket_server#repository-syncing) with additional code hosts being migrated to this model in 3.4.

## Bitbucket Server integration

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/331821650?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/331821650" target="_blank">View on Vimeo</a></p>
</div>

Get IDE-like features on your next pull request review inline on Bitbucket Server by installing the [Sourcegraph browser extension](https://docs.sourcegraph.com/integration/browser_extension), then granting permissions for your Bitbucket Server domain.

## Grant permissions on your code host

Granting permissions in the Sourcegraph browser extension is necessary when using anything except GitHub.com. It's now easier to discover:

<div style={{textAlign: 'center'}}>

![Sourcegraph browser extension enabled prompt](/blog/sourcegraph-browser-extension-enable-prompt.png)

</div>

## "Go to definition" using dependency graph

Definitions are now filtered using `import` / `require` statements to reduce false matches and improve accuracy.

![Filtered imports](/blog/filtered-imports.png)

## Swift code navigation

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/331859021?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/331859021" target="_blank">View on Vimeo</a></p>
</div>

See it in action on [Sourcegraph.com](https://sourcegraph.com/github.com/googleprojectzero/fuzzilli/-/blob/Sources/Fuzzilli/Configuration.swift#L64:27) or use it on your own instance for yourself or [for all users](https://docs.sourcegraph.com/admin/extensions#enable-an-extension-for-all-users):

## Symbols for the current file

The symbols sidebar is now scoped to the current file/directory you’re viewing.

![File scoped symbols](/blog/file-scoped-symbols.png)

`{/*TODO(ryan): Show once 3.3 is available on DigitalOcean ## Deployments secure by default with TLS pre-configured<p style="text-align: center"><img src="/blog/tls.png" style="width: 350px" /></p>The 3.2 release brought with it two new ways of deploying Sourcegraph to the cloud:- [One-click installer on the DigitalOcean marketplace](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c)- [AWS EC2 Terraform plan](https://github.com/sourcegraph/deploy-sourcegraph-aws)They have been updated for 3.3 and now come pre-configured to use TLS with a self-signed certificate. Additional documentation now exists for getting the [self-signed certificate trusted by your browser](https://docs.sourcegraph.com/admin/ssl_https_self_signed_cert_nginx#5-getting-the-self-signed-certificate-to-be-trusted-valid-on-external-instances)Terraform plans for Google Cloud and Azure are being scheduled for upcoming releases. Let us know via [tweet](https://twitter.com/sourcegraph) or [GitHub issue](https://github.com/sourcegraph/sourcegraph/issues/new?assignees=&labels=&template=feature_request.md&title=) which cloud provider you want support for next, along with any special instructions for that provider.*/}`

## Handle common search queries containing (unintended) invalid regexp

Using [regexps in search queries](https://docs.sourcegraph.com/code_search/reference/queries) is powerful, but sometimes you forget and just want to find matches for `open(`. Previously, this was treated as a regexp error, but now Sourcegraph does The Right Thing™ and looks for the literal match when there is no ambiguity.

## Making Sourcegraph a part of your dev tools stack

Once a Sourcegraph instance is configured and ready for sharing, a site admin usually thinks:

- _“What is the best way to run a trial of Sourcegraph in my team/org?”_
- _“How can I best communicate the value of code search to developers who’ve not used it before?”_
- _“How can I make it easy for developers to compare Sourcegraph to our existing code search tool?”_

To help make it easier for a site admin to introduce Sourcegraph into their development tools stack, we’ve created the following three resources:

[**1. How to run a Sourcegraph trial**](https://docs.sourcegraph.com/adopt/trial)<br />
Give Sourcegraph the best chance of gaining traction by using our step-by-step guide for running a trial with your development team.

[**2. How to compare your existing code search tool to Sourcegraph**](https://docs.sourcegraph.com/adopt/comp)<br />
If a code search tool already exists such as Hound or OpenGrok, our code search comparison guide highlights the strengths and weaknesses of your current code search tool in comparison with Sourcegraph

[**3. See how our customers use Sourcegraph**](https://docs.sourcegraph.com/getting-started/tour)<br />
See examples of how developers at companies such as Uber, Lyft, and Yelp depend on Sourcegraph every day.

## Jump to Sentry issue from your code

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/331346276?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/331346276" target="_blank">View on Vimeo</a></p>
</div>

[Sentry](https://sentry.io/) is an [open source](https://github.com/getsentry/sentry) error tracking tool which captures and sends error and exception notifications instantly. When browsing code on Sourcegraph or your code host, wouldn't it be great if you could jump straight to the Sentry records page whenever you see error handling code instead of manually navigating around Sentry?

The new [Sentry Sourcegraph extension](https://sourcegraph.com/extensions/sourcegraph/sourcegraph-sentry) does just that and runs anywhere that Sourcegraph does, such as code views on GitHub/GitLab with the [Sourcegraph browser extension](https://docs.sourcegraph.com/integration/browser_extension).

The initial version of the extension provides support for the most popular languages:

- Go
- Python
- Java
- JavaScript
- TypeScript

Additional languages will be added as part of each new release and if you want a particular language added, create an issue for the [sourcegraph-sentry repository](https://github.com/sourcegraph/sentry/issues).

## 3.3.0 Changelog

### Added

- In search queries, treat `foo(` as `foo\(` and `bar[` as `bar\[` rather than failing with an error message.
- Enterprise admins can now customize the appearance of the homepage and search icon.
- A new settings property `notices` allows showing custom informational messages on the homepage and at the top of each page. The `motd` property is deprecated and its value is automatically migrated to the new `notices` property.
- The new `gitlab.exclude` setting in [GitLab external service config](https://docs.sourcegraph.com/admin/external_service/gitlab#configuration) allows you to exclude specific repositories matched by `gitlab.projectQuery` and `gitlab.projects` (so that they won't be synced). Upon upgrading, previously "disabled" repositories will be automatically migrated to this exclusion list.
- The new `gitlab.projects` setting in [GitLab external service config](https://docs.sourcegraph.com/admin/external_service/gitlab#configuration) allows you to select specific repositories to be synced.
- The new `bitbucketserver.exclude` setting in [Bitbucket Server external service config](https://docs.sourcegraph.com/integration/bitbucket_server) allows you to exclude specific repositories matched by `bitbucketserver.repositoryQuery` and `bitbucketserver.repos` (so that they won't be synced). Upon upgrading, previously "disabled" repositories will be automatically migrated to this exclusion list.
- The new `bitbucketserver.repos` setting in [Bitbucket Server external service config](https://docs.sourcegraph.com/integration/bitbucket_server) allows you to select specific repositories to be synced.
- The new required `bitbucketserver.repositoryQuery` setting in [Bitbucket Server external service configuration](https://docs.sourcegraph.com/integration/bitbucket_server) allows you to use Bitbucket API repository search queries to select repos to be synced. Existing configurations will be migrated to have it set to `["?visibility=public", "?visibility=private"]` which is equivalent to the previous implicit behavior that this setting supersedes.
- "Quick configure" buttons for common actions have been added to the config editor for all external services.
- "Quick configure" buttons for common actions have been added to the management console.
- Site-admins now receive an alert every day for the seven days before their license key expires.
- The user menu (in global nav) now lists the user's organizations.
- All users on an instance now see a non-dismissable alert when there's no license key in use and the limit of free user accounts is exceeded.
- All users will see a dismissible warning about limited search performance and accuracy on when using the sourcegraph/server Docker image with more than 100 repositories enabled.

### Changed

- Indexed searches that time out more consistently report a timeout instead of erroneously saying "No results."
- The symbols sidebar now only shows symbols defined in the current file or directory.
- The dynamic filters on search results pages will now display `lang:` instead of `file:` filters for language/file-extension filter suggestions.
- The default `github.repositoryQuery` of a [GitHub external service configuration](https://docs.sourcegraph.com/admin/external_service/github#configuration) has been changed to `["none"]`. Existing configurations that had this field unset will be migrated to have the previous default explicitly set (`["affiliated", "public"]`).
- The default `gitlab.projectQuery` of a [GitLab external service configuration](https://docs.sourcegraph.com/admin/external_service/gitlab#configuration) has been changed to `["none"]`. Existing configurations that had this field unset will be migrated to have the previous default explicitly set (`["?membership=true"]`).
- The default value of `maxReposToSearch` is now unlimited (was 500).
- The default `github.repositoryQuery` of a [GitHub external service configuration](https://docs.sourcegraph.com/admin/external_service/github#configuration) has been changed to `["none"]` and is now a required field. Existing configurations that had this field unset will be migrated to have the previous default explicitly set (`["affiliated", "public"]`).
- The default `gitlab.projectQuery` of a [GitLab external service configuration](https://docs.sourcegraph.com/admin/external_service/gitlab#configuration) has been changed to `["none"]` and is now a required field. Existing configurations that had this field unset will be migrated to have the previous default explicitly set (`["?membership=true"]`).
- The `bitbucketserver.username` field of a [Bitbucket Server external service configuration](https://docs.sourcegraph.com/integration/bitbucket_server) is now **required**. This field is necessary to authenticate with the Bitbucket Server API with either `password` or `token`.
- The settings and account pages for users and organizations are now combined into a single tab.

### Removed

- Removed the option to show saved searches on the Sourcegraph homepage.

### Fixed

- Fixed an issue where the site-admin repositories page `Cloning`, `Not Cloned`, `Needs Index` tabs were very slow on instances with thousands of repositories.
- Fixed an issue where failing to syntax highlight a single file would take down the entire syntax highlighting service.

The [changelog for this and previous releases](https://github.com/sourcegraph/sourcegraph/blob/main/CHANGELOG.md#330) is available on GitHub.

## Thank you

Thank you to the many people who contributed to Sourcegraph since the last release!

- [@varaamo](https://github.com/varaamo)
- [@saurabh-hirani](https://github.com/saurabh-hirani)
- [@immanuelfodor](https://github.com/immanuelfodor)
- [@prestonvanloon](https://github.com/prestonvanloon)
- [@julianvmodesto](https://github.com/julianvmodesto)
- [@CH-JosephBironas](https://github.com/CH-JosephBironas)
- [@b-j-p](https://github.com/b-j-p)
- [@leoluk](https://github.com/leoluk)
- [@dbentley](https://github.com/dbentley)
- [@Phrohdoh](https://github.com/Phrohdoh)
- [@shyim](https://github.com/shyim)
- [@marco-c](https://github.com/marco-c)
- [@mrubinsk](https://github.com/mrubinsk)
- [@zheeeng](https://github.com/zheeeng)
- [@akshetpandey](https://github.com/akshetpandey)
- [@markus-wa](https://github.com/markus-wa)
- [@abeyerpath](https://github.com/abeyerpath)
- [@gerbal](https://github.com/gerbal)
- [@JoshuaKGoldberg](https://github.com/JoshuaKGoldberg)
- [@ijt](https://github.com/ijt)
- [@kevinchen94](https://github.com/kevinchen94)
- [@asinwang](https://github.com/asinwang)
- [@sslavian812](https://github.com/sslavian812)
- [@alanhamlett](https://github.com/alanhamlett)
- [@sfllaw](https://github.com/sfllaw)
- [@carun](https://github.com/carun)
- [@AndrewRussellHayes](https://github.com/AndrewRussellHayes)
- [@mcdan](https://github.com/mcdan)
- [@machbio](https://github.com/machbio)
- [@joemccall86](https://github.com/joemccall86)
- [@mqus](https://github.com/mqus)
- [@terinjokes](https://github.com/terinjokes)
- [@thinktopdown](https://github.com/thinktopdown)
- [@amarsiingh](https://github.com/amarsiingh)
- [@djuarezg](https://github.com/djuarezg)
- [@AndreKR](https://github.com/AndreKR)
- [@postables](https://github.com/postables)
- [@IizunaK](https://github.com/IizunaK)
- [@nnchang](https://github.com/nnchang)
- [@linknum23](https://github.com/linknum23)
- [@caseylmanus](https://github.com/caseylmanus)

## Deploy or upgrade

[Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

Upgrading from 2.x or 3.0? [See the migration guide](https://docs.sourcegraph.com/admin/migration/3_0)

---

From the entire Sourcegraph team ([@sourcegraph](https://twitter.com/sourcegraph)), happy coding!
