---
title: 'Sourcegraph 3.3: Improving the user experience for site admins'
author: Ryan Blunden
publishDate: 2019-04-22T10:00-07:00
tags: [
  blog
]
slug: sourcegraph-3
heroImage: /sourcegraph-mark.png
published: true
---

*Sourcegraph is an open-source, self-hosted, cross-repository code search and navigation tool, with an efficient web interface and "feels-like-native" integration into your code host. [Install or upgrade Sourcegraph](#install-or-upgrade).*

---

<h3 style="text-align: center">Deploy or upgrade Sourcegraph 3.3</h3>

<div style="text-align: center">

  [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes](https://github.com/sourcegraph/deploy-sourcegraph)

Want to try pre-release development builds? Change the Docker image tag to  `sourcegraph:insiders`.

</div>

---

This release focusses on making Sourcegraph easier to set up, configure and manage repositories.

We’ve completely overhauled how repositories are mirrored from your code host so that it is easier to configure and more reliable. This benefits everyone, but especially organizations with thousands (or tens of thousands) of repositories. We’ve also added Sentry to our list of third party developer tool integrations and improved Swift code intelligence and navigation.

Read on for the details, and thanks to our customers and community for reporting issues and providing feedback. You’re helping to make each Sourcegraph release the best one yet!

**Release highlights**:

[**🛠️ New! Config based repository selection**](#repo-config)<br />
Repositories now chosen via explicit lists and query rules in the external service config.

**[🔌 New Sentry integration](#sentry) and [Bitbucket Server fixes](#bitbucket-fixes)**<br />
Jump to Sentry from Sourcegraph and other integrations improvements.

[**🧭 More precise code intelligence**](#code-intel)<br />
Symbols scoped to the current file and improved Swift support.

[**🚢  Deployments secure by default with TLS pre-configured**](#deployments)<br />
TLS on all Terraform plans and improved AWS deployment docs.

[**📣 Making Sourcegraph a part of your dev tools stack**](#grok-sourcegraph)<br />
Tips for integrating Sourcegraph and code search into your team for better code.

[**📖 New docs design**](#docs)<br />
Better UI, new page navigation, and docs improvements for site admins.


[**📝 Changelog**]()<br />
Every detail that changed in this release

[**🎖️ Thank you**]()<br />
Sourcegraph couldn’t be what it is without the community

<div id="repo-config"></div>

## New repository configuration for GitHub, GitLab, and Bitbucket Server

Prior to 3.3, integrating with a code host and selecting which repositories to use was a manual process:

![](/blog/old-repository-sync.png)

While it was simple, it presented some problems:
Sourcegraph would fetch and list all repositories accessible to the token which often included both an account’s private repositories, as well as the repositories from associated GitHub orgs.

Once dealing with more than a few dozen repositories (most of our customers have many thousands), manually enabling each repository was time consuming, and often resulted in scripted GraphQL queries with selection logic.

From 3.3 onwards, selecting which repositories to search and mirror from GitHub, GitLab or Bitbucket Server is now part of the external service configuration for each code host.

This configuration exclusively determines which repositories are used, eliminating the manual process of enabling, disabling and deleting individual repositories.

Additionally, if a repository is deleted from the code host or if it is no longer accessible to the provided token, it will be deleted from Sourcegraph automatically. Renames of upstream repositories are also gracefully detected and handled. 

![](/blog/new-repository-sync.png)

For example, here are the fields for repository selection for the GitHub external service.

|**Field**      | **Description** |
| ------------- |-----------------|
|repos | List of repositories to add "owner/name" format ([view in schema](https://github.com/sourcegraph/sourcegraph/blob/master/schema/github.schema.json#L38-L42)) |
| repositoryQuery | List of strings that are queries by type, e.g. `affiliated`  and/or code host specific search filters ([view in schema](https://github.com/sourcegraph/sourcegraph/blob/master/schema/github.schema.json#L66-L75)) |
| exclude\* | List of repositories to exclude in "owner/name" format (view in schema) |

<p><small>*exclude takes precedence over the `repos` and `repositoryQuery` syntax.</small></p>

The [GitLab](https://github.com/sourcegraph/sourcegraph/blob/master/schema/gitlab.schema.json#L38-L91) and [Bitbucket Server](https://github.com/sourcegraph/sourcegraph/blob/master/schema/bitbucket_server.schema.json#L68-L113) fields for repository selection are similar to [GitHub](https://github.com/sourcegraph/sourcegraph/blob/master/schema/github.schema.json#L38-L75), but differ based on the search and selection options in the code host's API.

This has been implemented for [GitHub](https://docs.sourcegraph.com/admin/external_service/github#selecting-repositories-for-code-search), [GitLab](https://docs.sourcegraph.com/admin/external_service/gitlab#repository-syncing) and [Bitbucket Server](https://docs.sourcegraph.com/admin/external_service/bitbucket_server#repository-syncing) with additional code hosts being migrated to this model in 3.4.

<div id="sentry"></div>

## New Sentry integration with the Sentry Sourcegraph extension

TODO: Replace screencast with Sourcegraph intro screen

<p class="container">
  <div style="padding:56.25% 0 0 0;position:relative;">
    <iframe src="https://player.vimeo.com/video/330644055?color=0CB6F4&amp;title=0&amp;byline=" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
  </div>
  <p style="text-align: center"><a href="https://vimeo.com/330644055" target="_blank">View on Vimeo</a></p>
</p>

[Sentry](https://sentry.io/) is an [open-source](https://github.com/getsentry/sentry) error tracking tool which captures and sends error and exception notifications instantly.. When browsing code on Sourcegraph or your code host, wouldn’t it be great if you could jump straight to the Sentry records page whenever you see error handling code, without having to manually open Sentry and find it?

The new [Sentry Sourcegraph extension](https://sourcegraph.com/extensions/sourcegraph/sourcegraph-sentry) does just that and runs anywhere that Sourcegraph does, such as code views on GitHub/GitLab with the [Sourcegraph browser extension](https://docs.sourcegraph.com/integration/browser_extension).

The initial version of the extension provides support for the most popular languages:

- Go
- Python
- Java
- JavaScript
- TypeScript

Additional languages will be added as part of each new release and if you want a particular language added, create an issue on the `sourcegraph-sentry GitHub repository`.

<div id="bitbucket-fixes"></div>

## Bitbucket Server integration and browser extension fixes

The refactoring and fixing work for integrations which started in 3.2 continues in this release, with many Bitbucket Server integration and browser extension fixes:

- [**Bitbucket server fixes**](https://github.com/sourcegraph/sourcegraph/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aclosed+label%3Abitbucket+milestone%3A3.3+)<br />
Many UI improvements so Sourcegraph feels like a native integration of Bitbucket Server.<br /><br />
- [**Browser extension fixes**](https://github.com/sourcegraph/sourcegraph/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aclosed+milestone%3A3.3+label%3Abrowser-extension+)<br />
Better Sourcegraph connection error handling and prompts for when the extension must be manually activated, e.g. if using GitLab.com, as well as new [browser extension troubleshooting tips](https://docs.sourcegraph.com/integration/browser_extension#troubleshooting).

We’re also boosting our end-to-end test coverage to catch code host related  issues such as GitHub DOM changes faster. This reduces the time from issue logged, to patched and released, the goal being to catch any code host integration issues before our users do.

<div id="code-intel"></div>

## Code intel: Improved Swift support and directory/file scoped symbols

Swift code intelligence is more comprehensive now that symbol detection has been improved, and the symbols sidebar is now scoped to the current file/directory you’re viewing:

![](/blog/swift.png)

Other updates include:

- Jump-to-definition is more precise now that the definitions are filtered by the import statements at the top of the file.
- The Go language server responds faster upon first visiting a page now that it caches zip archives more intelligently.

<div id="deployments"></div>

## Deployments secure by default with TLS pre-configured

<p style="text-align: center">
  <img src="/blog/tls.png" style="width: 350px" />
</p>

Regardless of your hosting environment, Sourcegraph should be fast and easy to deploy with infrastructure as code solutions such as Terraform being 

The 3.2 release brought with it 2 new ways of deploying Sourcegraph to the cloud:
- [One-click installer on the DigitalOcean marketplace](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c)
- [AWS EC2 Terraform plan](https://github.com/sourcegraph/deploy-sourcegraph-aws)

They have been updated for 3.3 and now come pre-configured to use TLS with  a self-signed certificate. Additional documentation now exists for getting the [self-signed certificate trusted by your browser](https://docs.sourcegraph.com/admin/ssl_https_self_signed_cert_nginx#5-getting-the-self-signed-certificate-to-be-trusted-valid-on-external-instances).

Terraform plans for Google Cloud and Azure are being scheduled for upcoming releases. Let us know via [tweet](https://twittercom/srcgraph) or [GitHub issue](https://github.com/sourcegraph/sourcegraph/issues/new?assignees=&labels=&template=feature_request.md&title=) which cloud provider you want support for next, along with any special instructions for that provider.

<div id="grok-sourcegraph"></div>

## Making Sourcegraph a part of your dev tools stack

Once a Sourecgraph instance is configured and ready for sharing, a site admin usually thinks:

- *“What is the best way to run a trial of Sourcegraph in my team/org?”*
- *“How can I best communicate the value of code search to developers who’ve not used it before?”*
- *“How can I make it easy for developers to compare Sourcegraph to an existing internal code search tool?”*

To help make it easier for a site admin to introduce Sourcegraph into their development tools stack, we’ve created the following three resources:

[**1. How to run a Sourcegraph trial**](https://docs.sourcegraph.com/adopt/trial)<br />
Give Sourcegraph the best chance of gaining traction by using our step-by-step guide for running a trial with your development team.

[**2. How to compare your existing code search tool to Sourcegraph**](https://docs.sourcegraph.com/adopt/comp)<br />
If a code search tool already exists such as Hound or OpenGrok, our code search comparison guide highlights the strengths and weaknesses of your current code search tool in comparison with Sourcegraph

[**3. See how our customers use Sourcegraph**](https://docs.sourcegraph.com/user/tour)<br />
See examples of how developers at companies such as Uber, Lyft, and Yelp depend on Sourcegraph everyday.

<div id="docs"></div>

## New docs design

Our [docs site](https://docs.sourcegraph.com/) got a design refresh, as well as a left-rail navigation menu to make it easier to find what you're looking for.

![](/blog/new-docs.png)

## Search improvements

### Auto-fixing search queries with trailing parentheses

Sourcegraph supports powerful regular expression search by default. However, users reported that this is inconvenient in the very specific, but common case of searching for a function definition.

For example, if you searched for myFunc(, you would receive an invalid regular expression error, because the open parenthesis is treated as the beginning of a regular expression match group. Now, we auto-fix queries with trailing open parentheses. For example, the myFunc( query would get automatically fixed to myFunc\( behind the scenes.

### Site setting for searching over large files

By default, code search excludes files over 20MB by default. Files such as package-lock.json sometimes exceed the 20MB limit, but our customers still want to be able to search over them.

We added a site setting to whitelist certain files to be searched regardless of their size. Use the `search.largeFiles` setting to specify a list of files that should always be searched over. For example, `search.largeFiles`: `[“package.json”, “yarn.lock”, “package-lock.json”]`.

## Changelog

UPDATE AFTER CHANGELOG FINALIZED

The [changelog for this and previous releases](https://github.com/sourcegraph/sourcegraph/blob/master/CHANGELOG.md) is available on GitHub.

## Thank you

Thank you to the many people who contributed to make Sourcegraph better since the last release!

<!--
  Generate the list of people who contributed (created tickets) by using the script at https://gist.github.com/ryan-blunden/c8898c989b48ba7a83e64ff9ae242cc2
-->

## Install or upgrade

Ready to install? [Install Sourcegraph 3.3](https://docs.sourcegraph.com/)

Upgrading from 2.x or 3.0? [See the migration guide](https://docs.sourcegraph.com/admin/migration/3_0)

---

From the entire Sourcegraph team ([@srcgraph](https://twitter.com/srcgraph)), happy coding!
