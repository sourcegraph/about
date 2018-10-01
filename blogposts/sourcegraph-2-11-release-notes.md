---
title: 'Sourcegraph 2.11: Easier Configuration and Deployments, and Sourcegraph Extensions'
author: 'Ryan Blunden'
publishDate: 2018-09-04T10:30-07:00
tags: [
  "blog"
]
slug: sourcegraph-2-11-release-notes
heroImage: //images.ctfassets.net/le3mxztn6yoo/t4Qpcq5kA0AYM24Ws4mOk/4edf5502a936bbec90c262fa00355aed/sourcegraph-mark.png
published: true
---

Our mission is to build [the best code search and browsing tool for your team](/) to help you write the highest quality software possible.

Here’s new, what’s changed, and what’s fixed.

- [Simplified Browser Extension Configuration](#simplified-browser-extension-configuration)

- [Deploy Sourcegraph Data Center to Kubernetes with Plain YAML](#deploy-sourcegraph-data-center-to-kubernetes-with-plain-yaml)

- [Webhooks for Manual Repository Updates](#webhooks-for-manual-repository-updates)

- [Sourcegraph Extensions (Alpha): Show Info from Other Tools in Code and Reviews](#sourcegraph-extensions-alpha-show-info-from-other-tools-in-code-and-reviews)

- [Full Changelog (from 2.10 to 2.11)](#full-changelog-from-210-to-211)

Ready to install or upgrade? [Get Sourcegraph for yourself (to get started)](/) or [deploy Sourcegraph for your team](/docs).

## Simplified Browser Extension Configuration

The browser extension used to require manual configuration when being used with a private Sourcegraph server. With the latest release, the browser extension now only needs the URL for the Sourcegraph server it’s pointing to.

![Simplified Browser Extension Configuration](//images.ctfassets.net/le3mxztn6yoo/1UabqJXkpyKU4QSa0KWoiM/19954ac186f24b0a0ae20bb0b3199c43/BrowserConfiguration.gif)

This feature also shows off the new Sourcegraph settings page for the extension, which you can get to by clicking the Sourcegraph icon in the browser toolbar. More details in [Sourcegraph integrations documentation](/docs/integrations/).

## Deploy Sourcegraph Data Center to Kubernetes with Plain YAML

We have simplified the process for deploying Sourcegraph to Kubernetes by eliminating Helm as a dependency, eliminating our custom monolithic config file, and eliminating Go templates in favor of using pure Kubernetes YAML. This reduces the complexity of the Sourcegraph Kubernetes deployment and makes it easier for customers to manage their own customizations.

We appreciate your patience as we have changed the Kubernetes deployment process over the last few months. The outcome is a much simpler deployment process that doesn't require external tools for deployment or YAML generation.

Existing customers can read the [migration guide](https://github.com/sourcegraph/deploy-sourcegraph/blob/master/docs/migrate.md) for more information.

## Webhooks for Manual Repository Updates

By default, Sourcegraph polls code hosts to keep repository contents up to date. It uses intelligent heuristics such as average update frequency to determine the polling frequency per repository. Polling, however, falls short in cases where immediate updates are desired or when the number of repositories causes significant load on the code host. To address this, there is now a repository update webhook that lets an external service (such as a code host) trigger a repository update on Sourcegraph. The webhook is authenticated using access tokens.

[See webhook docs](/docs/config/update-repo-webhook) for more information.

## Sourcegraph Extensions (Alpha): Show Info from Other Tools in Code and Reviews

We're also excited to announce the alpha release of [Sourcegraph extensions](https://github.com/sourcegraph/sourcegraph-extension-api), a new way to enhance viewing and reviewing code in all of your favorite tools, starting with [Codecov](https://codecov.io) test coverage overlays on GitHub and Sourcegraph.

More Sourcegraph extensions will be released soon that overlay information (from popular 3rd-party dev tools) on GitHub, Sourcegraph, etc., related to logging, monitoring, performance, linting, profiling, security, etc. [Learn more and start using Sourcegraph extensions.](https://github.com/sourcegraph/sourcegraph-extension-api#readme)

Here's what the Codecov extension for Sourcegraph looks like, running on GitHub and adding test coverage overlays (as green/yellow/red line background colors):

![Codecov Extension](//images.ctfassets.net/le3mxztn6yoo/3WZ3oy1haU4YeYWywuS0Qe/a25491260dd59fb4028e6bcea6c4c88a/CodeCovExtension.gif)

## Full Changelog (from 2.10 to 2.11)

### Added
- Support for ACME `tls-alpn-01` challenges to obtain Let's Encrypt certificates. Previously Sourcegraph only supported ACME `http-01` challenges, which required port 80 to be accessible.
- gitserver periodically removes stale lock files that git can leave behind.
- Clients (browser/editor extensions) can now query configuration details from the `ClientConfiguration` GraphQL API.
- The config field `auth.accessTokens.allow` allows or restricts use of access tokens. It can be set to one of three values: "all-users-create" (the default), "none" (all access tokens are disabled), and "site-admin-create" (access tokens are enabled, but only site admins can create new access tokens). The field `auth.disableAccessTokens` is now deprecated in favor of this new field.
- A webhook endpoint now exists to trigger repository updates. For example, `curl -XPOST -H 'Authorization: token $ACCESS_TOKEN' $SOURCEGRAPH_ORIGIN/.api/repos/$REPO_URI/-/refresh`.
- Git submodules entries in the file tree now link to the submodule repository.

### Fixed
- An issue / edge case where the code intelligence management admin page would incorrectly show language servers as `Running` when they had been removed from Docker.
- Log level is respected in lsp-proxy logs.
- Fixed an error where text searches could be routed to a faulty search worker.
- Gitolite integration should correctly detect names which Gitolite would consider to be patterns, and not treat them as repositories.
- repo-updater backs off fetches on a repo that's failing to fetch.
- Attempts to add a repo with an empty string for the name are checked for and ignored.
- Fixed an issue where non-site-admin authenticated users could modify global settings (not site configuration), other organizations' settings, and other users' settings.
- Search results are rendered more eagerly, resulting in fewer blank file previews
- Fixed an issue where automatic code intelligence would fail to connect to the underlying `lsp` network, leading to `dial tcp: lookup lang on 0.0.0.0:53: no such host` errors.
- Commits with empty trees no longer return 404.
- More useful error messages from lsp-proxy when a language server can't get a requested revision of a repository.
- Creation of a new user with the same name as an existing organization (and vice versa) is prevented.

---

Questions/feedback/complaints/requests? Contact us at [support@sourcegraph.com](mailto:support@sourcegraph.com), or file issues on our [public issue tracker](https://github.com/sourcegraph/issues/issues). We're planning for our next release in October right now, so the sooner we hear from you, the better!
