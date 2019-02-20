---
title: 'Announcing Sourcegraph 3.1'
author: 'Ryan Blunden'
publishDate: 2019-02-20T05:59-06:00
tags: [
  "blog"
]
slug: sourcegraph-3.1
heroImage: //images.ctfassets.net/le3mxztn6yoo/t4Qpcq5kA0AYM24Ws4mOk/4edf5502a936bbec90c262fa00355aed/sourcegraph-mark.png
published: false
---

Sourcegraph 3.1 is now out! This release helps you create more powerful queries, improves code intelligence, adds new Sourcegraph extension APIs, and adds a huge amount of new documentation. We're also changing to scheduled releases on the 20th of each month.

<!-- (ryan): Hyperlink to headings in above paragraph -->

What is Sourcegraph? Sourcegraph is an open-source, self-hosted, cross-repository code search and navigation tool, with an efficient web interface and "feels-like-native" integration into your code host. [Install or upgrade Sourcegraph.](#install-or-upgrade)

## Find answers in code more easily with the new query builder

<!-- TODO (ryan): Below paragraph needs work as it sounds awkward -->

Did you know that in addition to code, you can search commit diffs, commit messages and symbols?

Even experienced Sourcegraph users will find something new. Give it a try and let us know what you think via [GitHub](https://github.com/sourcegraph/sourcegraph/issues/new/choose) or [Twitter](https://twitter.com/srcgraph).

<!-- TODO (ryan): GIF using the query builder -->

## Improved go-to-definition and hover tooltips for all languages

We've improved Sourcegraph's [code intelligence extensions](https://sourcegraph.com/extensions?query=category%3A%22Programming+languages%22), which let you go to definitions, find references, and see hover tooltips on your code (in all languages).

- No longer showing "Go to definition" on comments, except for tokens that look like code (e.g. when surrounded by backticks, or when it looks like a function call `foo()`)
- More accurate docstring extraction from single-line or multi-line block comments.
- Indented sections of docstrings are rendered as code blocks.

We're actively improving code intelligence in all languages, so please [send us feedback](https://github.com/sourcegraph/sourcegraph/issues/new?assignees=&labels=&template=feature_request.md&title=Language%20extension%20improvement%20for)!```

## Site admin improvements

Administering Sourcegraph in an enterprise SSO environment is now easier thanks to a couple of small, but important features:

- Querying users by email address.
- [Disabling the changing of usernames](https://docs.sourcegraph.com/admin/config/critical_config#reference).

Making configuration changes through the JSON editor is now easier too with easy to access documentation in the editor itself.

<!-- TODO (ryan): GIF showing editor using the help tool tip with an item that requires a choice of values -->

## Improved configuration management and documentation

Sourcegraph 3.0 introduced the [management console](https://about.sourcegraph.com/blog/sourcegraph-3.0#management-console-and-site-config-improvements) for editing critical configuration to allow recovery from misconfiguration in the site admin.

We've [updated our documentation](https://docs.sourcegraph.com/admin/config) to reflect this change, separating configuration into two sections:

- [Critical configuration](https://docs.sourcegraph.com/admin/config/critical_config).
- [Site configuration](https://docs.sourcegraph.com/admin/config/site_config).

Reference documentation for [site configuration](https://docs.sourcegraph.com/admin/config/site_config#reference) and [critical configuration](https://docs.sourcegraph.com/admin/config/critical_config#reference) values are now rendered using the schema files themselves to ensure they'll never get out of date.

## New Sourcegraph extension APIs

The [Sourcegraph extension API](https://docs.sourcegraph.com/extensions/authoring) continues to evolve with two new APIs:

- [Exposing text selection to extensions](https://github.com/sourcegraph/sourcegraph/issues/702).
- [APIs for listening to active text editor changes and selections](https://github.com/sourcegraph/sourcegraph/issues/2026).

This means the [Git extras Sourcegraph extension](https://sourcegraph.com/extensions?query=git-extras) works better than ever. Want this functionality on GitHub too? Just install the [Sourcegraph browser extension](https://docs.sourcegraph.com/integration/browser_extension).

<!-- TODO (ryan): Gif of git-extras extension -->

## Switching to scheduled releases on the 20th of each month

We received feedback from many of you asking for a more regular and predictable release schedule and as a result, Sourcegraph will now be released on the 20th of each month 🎉.

## Changelog

See the [Sourcegraph changelog](https://github.com/sourcegraph/sourcegraph/blob/master/CHANGELOG.md#31) for a list of all changes in this release.

## Thank you

Thank you to the many people who contributed to make Sourcegraph better since our last release!

<!-- TODO (ryan): Generate list -->

<!--
Use script at https://gist.github.com/ryan-blunden/c8898c989b48ba7a83e64ff9ae242cc2 to generate contributors for this release.

If new Sourcegraphers have contributed, add their username to the exclude list.
-->

## Install or upgrade

Ready to install? [Install Sourcegraph 3.1](https://docs.sourcegraph.com/)

Upgrading from 2.x or 3.0.1? [See the migration guide](https://docs.sourcegraph.com/admin/migration/3_0)

---

From the entire Sourcegraph team ([@srcgraph](https://twitter.com/srcgraph)), happy coding!
