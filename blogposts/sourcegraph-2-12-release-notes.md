---
title:  'Sourcegraph 2.12: Build your own Sourcegraph extensions, GitLab integration, code discussions, and self-service checkout'
author: 'Dan Adler'
publishDate: 2018-10-15T12:00-07:00
tags: [
  "blog"
]
slug: sourcegraph-2-12-release-notes
heroImage: //images.ctfassets.net/le3mxztn6yoo/t4Qpcq5kA0AYM24Ws4mOk/4edf5502a936bbec90c262fa00355aed/sourcegraph-mark.png
published: true
---

We are building [the best code search and browsing tool for your team](/) to help you write, review, and ship code better. Our mission is to [bring the future sooner](/plan) by bringing the best tools to developers everywhere.

Our announcement this month that [Sourcegraph is now open source](/blog/sourcegraph-is-now-open-source/) is one way we will get there even faster.

Here’s new, what’s changed, and what’s fixed in Sourcegraph 2.12.

- [Build and publish your own Sourcegraph extensions](/blog/extension-authoring) (like the [Codecov Sourcegraph extension](https://twitter.com/srcgraph/status/1038200208138502144))

- [Sourcegraph for GitLab](/blog/sourcegraph-for-gitlab)

- [Discuss code and docs in repositories](/blog/discuss-code-and-docs-in-repositories)

- [Product subscriptions, self-service checkout, and easy upgrades to Enterprise](/blog/product-subscriptions-and-license-keys)

- [New product packaging and pricing](/blog/pricing-and-package-changes)

- [Full changelog (from 2.11 to 2.12)](#full-changelog-from-211-to-212)

Ready to install or upgrade? [Get Sourcegraph for yourself (to get started)](/) or [deploy Sourcegraph for your team](/docs).

## Full changelog (from 2.11 to 2.12)

### Changed

- Reduced the size of in-memory data structures used for storing search results. This should reduce the backend memory usage of large result sets.
- Code intelligence is now provided by [Sourcegraph extensions](https://docs.sourcegraph.com/extensions). The extension for each language in the site configuration `langservers` property is automatically enabled.
- Support for multiple authentication providers is now enabled by default. To disable it, set the `experimentalFeatures.multipleAuthProviders` site config option to `"disabled"`. This only applies to Sourcegraph Enterprise.
- When using the `http-header` auth provider, valid auth cookies (from other auth providers that are currently configured or were previously configured) are now respected and will be used for authentication. These auth cookies also take precedence over the `http-header` auth. Previously, the `http-header` auth took precedence.
- Bitbucket Server username configuration is now used to clone repositories if the Bitbucket Server API does not set a username.
- Code discussions: On Sourcegraph.com / when `discussions.abuseProtection` is enabled in the site config, rate limits to thread creation, comment creation, and @mentions are now applied.

### Added

- Search syntax for filtering archived repositories. `archived:no` will exclude archived repositories from search results, `archived:only` will search over archived repositories only. This applies for GitHub and GitLab repositories.
- A Bitbucket Server option to exclude personal repositories in the event that you decide to give an admin-level Bitbucket access token to Sourcegraph and do not want to create a bot account. See https://about.sourcegraph.com/docs/config/repositories/#excluding-personal-repositories for more information.
- Site admins can now see when users of their Sourcegraph instance last used it via a code host integration (e.g. Sourcegraph browser extensions). Visit the site admin Analytics page (e.g. https://sourcegraph.example.com/site-admin/analytics) to view this information.
- A new site config option `extensions.allowRemoteExtensions` lets you explicitly specify the remote extensions (from, e.g., Sourcegraph.com) that are allowed.
- Pings now include a total count of user accounts.
- A new site config option `git.cloneURLToRepositoryName` specifies manual mapping from Git clone URLs to Sourcegraph repository names. This is useful, for example, for Git submodules that have local clone URLs.

### Fixed

- Files with the gitattribute `export-ignore` are no longer excluded for language analysis and search.
- "Discard changes?" confirmation popup doesn't pop up every single time you try to navigate to a new page after editting something in the site settings page anymore.
- Fixed an issue where Git repository URLs would sometimes be logged, potentially containing e.g. basic auth tokens.
- Fixed date formatting on the site admin Analytics page.
- File names of binary and large files are included in search results.
- Slack notifications for saved searches have been fixed.

### Removed

- The deprecated environment variables `SRC_SESSION_STORE_REDIS` and `REDIS_MASTER_ENDPOINT` are no longer used to configure alternative redis endpoints. For more information view the [External database](https://about.sourcegraph.com/docs/config/external-database) documentation.



---

Questions/feedback/complaints/requests? Contact us at [support@sourcegraph.com](mailto:support@sourcegraph.com), or file issues on our [public issue tracker](https://github.com/sourcegraph/sourcegraph/issues). We're planning for our next release in November right now, so the sooner we hear from you, the better!
