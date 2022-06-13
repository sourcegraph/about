---
title: 'Sourcegraph 3.1 released'
authors:
  - name: Ryan Blunden
    url: https://twitter.com/ryan_blunden
publishDate: 2019-02-20T05:59-06:00
tags: [
  "blog"
]
slug: sourcegraph-3.1
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
description: 'Sourcegraph 3.1 released'
---

Sourcegraph 3.1 is now out! This release includes stability and documentation improvements, plus an easy query builder for searching your code (with useful query examples). Also, mark your calendars: our new fixed release schedule means you get a new Sourcegraph release on the 20th of each month.

What is Sourcegraph? Sourcegraph is an open source, self-hosted, cross-repository code search and navigation tool, with an efficient web interface and "feels-like-native" integration into your code host. [Install or upgrade Sourcegraph.](#install-or-upgrade)

## Find answers in code more easily with the new query builder

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/318509611?color=0CB6F4&amp;title=0&amp;byline=0&amp;portrait=0&autoplay=1&loop=1" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
</div>

Did you know that in addition to code, you can search commit diffs, commit messages, and symbols?

Give it a try and let us know what you think via [GitHub](https://github.com/sourcegraph/sourcegraph/issues/new/choose) or [Twitter](https://twitter.com/sourcegraph).

## Improved go-to-definition and hover tooltips for all languages

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/318518281?color=0CB6F4&amp;title=0&amp;byline=0&amp;portrait=0&autoplay=1&loop=1" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
</div>

We've improved Sourcegraph's [code intelligence extensions](https://sourcegraph.com/extensions?query=category%3A%22Programming+languages%22), which let you go to definitions, find references, and see hover tooltips on your code (in all languages).

- The docstrings in hover tooltips are more accurate.
- Indented sections in docstrings are rendered as code blocks in hovers.
- Tokens in comments are ignored unless they look like code (e.g., if they're wrapped in backticks or look like a function call `foo()`)

We're actively improving code intelligence in all languages, so please [send us feedback](https://github.com/sourcegraph/sourcegraph/issues/new?assignees=&labels=&template=feature_request.md&title=Language%20extension%20improvement%20for)!

## Site admin improvements

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/318533427?color=0CB6F4&amp;title=0&amp;byline=0&amp;portrait=0&autoplay=1&loop=1" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
</div>

We've added a couple features to help site admins manage a Sourcegraph instance in an enterprise environment:

- Improved [management console](https://docs.sourcegraph.com/admin/management_console) JSON editor for critical configuration, now with editor completion, inline documentation, and validation.
- Look up users by email address in the GraphQL API
- [Prevent users from changing their username](https://docs.sourcegraph.com/admin/migration/3_11) (from the username set by SSO)

Making configuration changes through the JSON editor is now easier too with easy to access documentation in the editor itself.

## Improved configuration management and documentation

Sourcegraph 3.0 introduced the [management console](https://about.sourcegraph.com/blog/sourcegraph-3.0#management-console-and-site-config-improvements) for editing critical configuration to allow recovery from misconfiguration in the site admin.

We've [updated our documentation](https://docs.sourcegraph.com/admin/config) to reflect this change, separating configuration into two sections: [site configuration](https://docs.sourcegraph.com/admin/config/site_config#reference) and [critical configuration](https://docs.sourcegraph.com/admin/config/critical_config#reference).

The documentation pages for [site configuration](https://docs.sourcegraph.com/admin/config/site_config#reference) and [critical configuration](https://docs.sourcegraph.com/admin/config/critical_config#reference) now describe each option and give examples, to make it easier for you to configure your Sourcegraph instance. You can get the same documentation and examples in the JSON editors for both types of configuration, too.

## New Sourcegraph extension APIs

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/318541630?color=0CB6F4&amp;title=0&amp;byline=0&amp;portrait=0&autoplay=1&loop=1" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
</div>

The [Sourcegraph extension API](https://docs.sourcegraph.com/extensions) has two new APIs to make it easier to add interactive features to code views on Sourcegraph, GitHub, and other similar tools:

- [API for accessing the current text selection range(s)](https://github.com/sourcegraph/sourcegraph/issues/702)
- [APIs for listening to changes to the active text editor and its selections](https://github.com/sourcegraph/sourcegraph/issues/2026).

This means the [Git extras Sourcegraph extension](https://sourcegraph.com/extensions?query=git-extras) works better than ever. Want this functionality on GitHub too? Just install the [Sourcegraph browser extension](https://docs.sourcegraph.com/integration/browser_extension).

## Fixed release schedule: a new Sourcegraph release on the 20th of every month

Since shipping version 2.4 in January 2018, we've released 11 versions of Sourcegraph. Shipping regularly means progress is constant and predictable.

We're constantly looking for ways to improve our release process. Inspired by [GitLab's fixed monthly release cycle](https://about.gitlab.com/2018/11/21/why-gitlab-uses-a-monthly-release-cycle/), Sourcegraph is now [released on the 20th of each month](https://handbook.sourcegraph.com/engineering/releases).

We encourage feedback as early as possible so we can incorporate it into our product planning. View the [product roadmap](https://handbook.sourcegraph.com/direction) to track what features are slated for the next release.

## Changelog

### Added

- Added Docker-specific help text when running the Sourcegraph docker image in an environment with an sufficient open file descriptor limit.
- Added syntax highlighting for Kotlin and Dart.
- Added a management console environment variable to disable HTTPS, see [the docs](https://docs.sourcegraph.com/admin/management_console#can-i-disable-https-on-the-management-console) for more information.
- Added `auth.disableUsernameChanges` to critical configuration to prevent users from changing their usernames.
- Site admins can query a user by email address or username from the GraphQL API.
- Added a search query builder to the main search page. Click "Use search query builder" to open the query builder, which is a form with separate inputs for commonly used search keywords.

### Changed

- File match search results now show full repository name if there are results from mirrors on different code hosts (e.g. github.com/sourcegraph/sourcegraph and gitlab.com/sourcegraph/sourcegraph)
- Search queries now use "smart case" by default. Searches are case insensitive unless you use uppercase letters. To explicitly set the case, you can still use the `case` field (e.g. `case:yes`, `case:no`). To explicitly set smart case, use `case:auto`.

### Fixed

- Fixed an issue where the management console would improperly regenerate the TLS cert/key unless `CUSTOM_TLS=true` was set. See the documentation for [how to use your own TLS certificate with the management console](https://docs.sourcegraph.com/admin/management_console#how-can-i-use-my-own-tls-certificates-with-the-management-console).

## Thank you

Thank you to the many people who contributed to make Sourcegraph better since the last release!

- [@AndreKR](https://github.com/AndreKR)
- [@ijt](https://github.com/ijt)
- [@adam-moss](https://github.com/adam-moss)
- [@caarlos0](https://github.com/caarlos0)
- [@jlangston](https://github.com/jlangston)
- [@CH-JosephBironas](https://github.com/CH-JosephBironas)
- [@mjhogan](https://github.com/mjhogan)
- [@chmllr](https://github.com/chmllr)
- [@yevbar](https://github.com/yevbar)
- [@vinchauhan](https://github.com/vinchauhan)
- [@immanuelfodor](https://github.com/immanuelfodor)
- [@terinjokes](https://github.com/terinjokes)
- [@maxhallinan](https://github.com/maxhallinan)

## Install or upgrade

Ready to install or upgrade? [Install Sourcegraph 3.1](https://docs.sourcegraph.com/)

Upgrading from 2.x or 3.0.0? [See the migration guide](https://docs.sourcegraph.com/admin/migration/3_0)

---

From the entire Sourcegraph team ([@sourcegraph](https://twitter.com/sourcegraph)), happy coding!
