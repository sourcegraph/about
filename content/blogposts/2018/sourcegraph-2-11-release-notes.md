---
title: 'Sourcegraph 2.11: Easier configuration and deployments, and Sourcegraph extensions'
authors:
  - name: Ryan Blunden
    url: https://twitter.com/ryan_blunden
publishDate: 2018-09-04T10:30-07:00
tags: [
  "blog"
]
slug: sourcegraph-2-11-release-notes
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
---

Our mission is to build [the best code search and browsing tool for your team](/) to help you write the highest quality software possible.

Here's new, what's changed, and what's fixed.

- [Simplified browser extension configuration](#simplified-browser-extension-configuration)

- [Deploy Sourcegraph to Kubernetes with plain YAML](#deploy-sourcegraph-to-kubernetes-with-plain-yaml)

- [Webhooks for manual repository updates](#webhooks-for-manual-repository-updates)

- [Sourcegraph extensions (alpha): Show info from other tools in code and reviews](#sourcegraph-extensions-alpha-show-info-from-other-tools-in-code-and-reviews)

Ready to install or upgrade? [Get Sourcegraph 2.11.](https://docs.sourcegraph.com/#quickstart)

## Simplified browser extension configuration

The browser extension used to require manual configuration when being used with a private Sourcegraph server. With the latest release, the browser extension now only needs the URL for the Sourcegraph server it's pointing to.

![Simplified Browser Extension Configuration](//images.ctfassets.net/le3mxztn6yoo/1UabqJXkpyKU4QSa0KWoiM/19954ac186f24b0a0ae20bb0b3199c43/BrowserConfiguration.gif)

This feature also shows off the new Sourcegraph settings page for the extension, which you can get to by clicking the Sourcegraph icon in the browser toolbar. More details in [Sourcegraph browser extension documentation](https://docs.sourcegraph.com/integration/browser_extension).

## Deploy Sourcegraph to Kubernetes with plain YAML

We have simplified the process for deploying Sourcegraph to Kubernetes by eliminating Helm as a dependency, eliminating our custom monolithic config file, and eliminating Go templates in favor of using pure Kubernetes YAML. This reduces the complexity of the Sourcegraph Kubernetes deployment and makes it easier for customers to manage their own customizations.

We appreciate your patience as we have changed the Kubernetes deployment process over the last few months. The outcome is a much simpler deployment process that doesn't require external tools for deployment or YAML generation.

Existing customers can read the [deploy-sourcegraph documentation](https://github.com/sourcegraph/deploy-sourcegraph) for more information.

## Webhooks for manual repository updates

By default, Sourcegraph polls code hosts to keep repository contents up to date. It uses intelligent heuristics such as average update frequency to determine the polling frequency per repository. Polling, however, falls short in cases where immediate updates are desired or when the number of repositories causes significant load on the code host. To address this, there is now a repository update webhook that lets an external service (such as a code host) trigger a repository update on Sourcegraph. The webhook is authenticated using access tokens.

[See webhook docs](https://docs.sourcegraph.com/admin/repo/webhooks) for more information.

## Sourcegraph extensions (alpha): Show info from other tools in code and reviews

We're also excited to announce the alpha release of [Sourcegraph extensions](https://docs.sourcegraph.com/extensions), a new way to enhance viewing and reviewing code in all of your favorite tools, starting with [Codecov](https://codecov.io) test coverage overlays on GitHub and Sourcegraph.

More Sourcegraph extensions will be released soon that overlay information (from popular 3rd-party dev tools) on GitHub, Sourcegraph, etc., related to logging, monitoring, performance, linting, profiling, security, etc. [Learn more and start using Sourcegraph extensions.](https://docs.sourcegraph.com/extensions)

Here's what the Codecov extension for Sourcegraph looks like, running on GitHub and adding test coverage overlays (as green/yellow/red line background colors):

![Codecov Extension](//images.ctfassets.net/le3mxztn6yoo/3WZ3oy1haU4YeYWywuS0Qe/a25491260dd59fb4028e6bcea6c4c88a/CodeCovExtension.gif)

## Changelog

See the [Sourcegraph changelog](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md) for a list of all changes in this release.

---

Questions/feedback/complaints/requests? Contact us at [support@sourcegraph.com](mailto:support@sourcegraph.com), or file issues on our [public issue tracker](https://github.com/sourcegraph/sourcegraph/issues). We're planning for our next release in October right now, so the sooner we hear from you, the better!
