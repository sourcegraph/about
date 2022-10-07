---
title: 'Sourcegraph 2.8: 19 languages, ridiculously huge monorepos, LSP, a GraphQL API, and more'
authors:
  - name: Quinn Slack
    url: https://twitter.com/sqs
publishDate: 2018-05-22T09:00-07:00
tags: [
  "blog"
]
slug: sourcegraph-2-8-19-languages-ridiculously-huge-monorepos-lsp-a-graphql-api
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
---

Sourcegraph 2.8 is out today, with support for more languages, huge monorepos, and more!

Sourcegraph is a code search and intelligence tool that helps your team code more productively. With Sourcegraph, developers can find code examples, view references/callers, locate definitions, etc., across all their organization's code in a few seconds with just a few keystrokes. It pretty quickly becomes one of the most-used tools in an organization, as we hear from teams of 10s–1,000s of developers using Sourcegraph.

Sourcegraph runs securely in your own network, takes 5 minutes to install, scales to 1,000s of developers and 10,000s of repositories, and is free to use (with paid upgrades starting at $5/user/month).

New in Sourcegraph 2.8:
- [Code intelligence for 13 more languages, via LSP](#code-intelligence-for-13-more-languages-via-lsp)
- [Perf improvements for massive monorepos](#perf-improvements-for-massive-monorepos)
- [Sourcegraph API](#sourcegraph-api)
- [Improved Phabricator integration for code intelligence in diffs](#improved-phabricator-integration-for-code-intelligence-in-diffs)
- [User authentication provider improvements](#user-authentication-providers-easier-more-configurable-ways-for-users-to-sign-into-sourcegraph)
- [Access token improvements](#access-token-improvements)
- [Server pings](#server-pings)
- [Misc.](#misc)

**Ready to install or upgrade? [Get Sourcegraph 2.8.](https://docs.sourcegraph.com/#quickstart)**

## Code intelligence for 13 more languages, via LSP

With code intelligence on Sourcegraph, you can navigate code more easily with hovers, definitions, references, implementations, etc.

**Update:** Sourcegraph now uses [Sourcegraph extensions](https://docs.sourcegraph.com/extensions) for language support. This section has been edited to avoid confusion.

## Perf improvements for massive monorepos

We heard from devs at some very large companies that Sourcegraph was slow on their monorepos. To fix this, we first synthesized a huge test monorepo with 11 GB of code, 20 GB of .git data, 1.5M files, 2M commits, and 500k Git refs (by combining the Git repositories of Chromium, Linux, OpenOffice, Kubernetes, and a few others). We then made sure that adding, searching, and browsing that repository was super fast on Sourcegraph.

If your monorepo is smaller than that, Sourcegraph will work great. If your monorepo is even bigger, we'd love to hear if anything is still slow for you.

Our test monorepo is too large for GitHub.com, but you can try the perf improvements on the slightly smaller [Chromium monorepo](https://sourcegraph.com/github.com/chromium/chromium).

## Sourcegraph API

Sourcegraph's GraphQL API is ready for you to start building on. Here are some examples of things you can do with the Sourcegraph API on your organization's own Sourcegraph instance:

- [See the most-used programming languages in all of your organization's active repositories](https://sourcegraph.com/api/console#%7B%22query%22%3A%22%7B%5Cn%20%20repositories(enabled%3A%20true%2C%20query%3A%5C%22github.com%2Fsourcegraph%2F%5C%22)%20%7B%5Cn%20%20%20%20nodes%20%7B%5Cn%20%20%20%20%20%20name%5Cn%20%20%20%20%20%20language%5Cn%20%20%20%20%7D%5Cn%20%20%7D%5Cn%7D%5Cn%22%7D)
- List all repositories without a Dockerfile, .travis.yml, LICENSE, README, etc.
- Find all repositories that call a specific function or depend on a specific package

See [Sourcegraph GraphQL API examples](https://docs.sourcegraph.com/api/graphql/examples) for more inspiration.

The API exposes all of the data that Sourcegraph itself uses, such as:

- Code and symbol search results
- Cross-repository code intelligence
- Repository list and metadata
- Git data (files, blame, commits, branches, tags, etc.)

Sourcegraph uses this API for everything, so the API is just as powerful, fast, and reliable as the Sourcegraph itself. You can play around with it on the [GraphQL console](https://sourcegraph.com/api/console) on on Sourcegraph.com or your own instance. Two other new features shipping today also help you use the API: the [Sourcegraph CLI](https://github.com/sourcegraph/src-cli) tool and [access tokens](#access-token-improvements).

One surprising thing we learned from customers is that never worrying about API rate limits is just as exciting as the new kinds of data exposed by the Sourcegraph API. We put tons of work into making Sourcegraph search, code intelligence, and mirrored Git data access super fast for interactive users--and that means you can write API clients that hit your Sourcegraph instance way harder than you could hit any code host. If needed, get [Sourcegraph cluster deployment option](https://docs.sourcegraph.com/admin/install/cluster) for massive scale.

Check out the new [Sourcegraph GraphQL API documentation](https://docs.sourcegraph.com/api/graphql) to get started. Not sure how to do something using the API? Post in our [public issue tracker](https://github.com/sourcegraph/sourcegraph).

## Improved Phabricator integration for code intelligence in diffs

Code intelligence is most powerful when it's available in your code review tool. Our Phabricator integration saw some big improvements in this release:

- Improved packaging, as a first-class Phabricator extension with no source modifications required
- An easy (3-minute) install process
- Support for repositories without staging areas
- Compatibility with all Phabricator versions released in the last year

![phabricator-extension-differential](//images.ctfassets.net/le3mxztn6yoo/5SXiFECe7SkKCIyeeoUGYe/959884db905b3f5ede1b14790d4ae346/phabricator-extension-differential.png)

[Install the Sourcegraph extension for Phabricator.](https://github.com/sourcegraph/phabricator-extension) Want support for another code host or code review tool (other than GitHub, which is also supported)? File an issue in our [public issue tracker](https://github.com/sourcegraph/sourcegraph/issues).

## User authentication providers: easier, more configurable ways for users to sign into Sourcegraph

We've improved Sourcegraph's support for user authentication providers, which allow users to sign into Sourcegraph using their existing accounts in your organization's SSO/directory service. Support is included for SAML, OpenID Connect (including Google Workspace for Google accounts), and HTTP authentication proxies.

- The new site configuration property `auth.providers` defines the list of authentication providers in one place (instead of having authentication configuration scattered among `auth.provider` and other `auth.*` properties). Backcompat for the old (now-deprecated) `auth.provider` configuration is maintained.
- All authentication provider configuration changes are reflected immediately (in Sourcegraph) without the need for a restart.
- Error messages describing authentication configuration problems are much better, both for end users and for site admins.
- Improved user authentication provider documentation with clear steps for multiple commonly used services (Okta, OneLogin, Google Workspace, etc.).
- Single-logout and token revocation are supported for OpenID Connect and SAML, so users can sign out of both Sourcegraph and the authentication provider.
- Site admins can see who has signed into Sourcegraph via an authentication provider and inspect auth/account details for troubleshooting.

See [user authentication provider documentation](https://docs.sourcegraph.com/admin/auth) for setup instructions. Need support for other authentication providers or other configuration points? File an issue in our [public issue tracker](https://github.com/sourcegraph/sourcegraph/issues).

## Access token improvements

This release improves support for access tokens, which enable access to the Sourcegraph API by external tools and scripts.

- Access tokens now work with [external user authentication providers](https://docs.sourcegraph.com/admin/auth) (OpenID Connect, SAML, and HTTP authentication proxies).
- A new [`site-admin:sudo` scope for access tokens](https://docs.sourcegraph.com/api/graphql#sudo-access-tokens) (which only site admins may use) lets the holder impersonate other users. This lays the foundation for future releases to integrate more closely with external tools in a seamless and authorization-aware manner. Stay tuned!
- Site admins can now view all access tokens (created by any user) and revoke any access token.
- The owner of an access token (and site admins) can now see when it was last used, to make it easier to prune unused tokens.

Along with the [Sourcegraph GraphQL API improvements](#sourcegraph-api) in this release, we're working hard to let you build new kinds of tools on Sourcegraph to speed up and automate your team's work.

## Server pings

Sourcegraph no longer tracks any detailed usage data, so the `disableTelemetry` configuration option has been deprecated. (The telemetry that it disabled has been completely removed.)

Sourcegraph instances will [ping Sourcegraph.com periodically with high-level and aggregate data](https://docs.sourcegraph.com/admin/pings). It never sends code, repository names, usernames, or any other specific data. Customers can disable pings. [Contact support](/contact) to learn more.

## Misc.

- The new repository contributors page ([example](https://sourcegraph.com/github.com/moby/moby/-/stats/contributors)) displays the top Git commit authors in a repository, with filtering options.
- We've finally put the "graph" in Sourcegraph: the site admin analytics page now displays graphical charts of daily/weekly/monthly active user counts.
- If the site configuration contains any deprecated options, a warning will be shown at the top of each page for all site admins.
- [MOTD]https://docs.sourcegraph.com/admin/site_config/all-settings#motd-array-of-strings): display a dismissible Markdown-rendered message at the top of each page to all users.

## Changelog

See the [Sourcegraph changelog](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md) for a list of all changes in this release.

---

**Ready to install or upgrade? [Get Sourcegraph 2.8.](https://docs.sourcegraph.com/#quickstart)**

Questions/feedback/complaints/requests? Contact us at [@sourcegraph](https://twitter.com/sourcegraph) or support@sourcegraph.com, or file issues on our [public issue tracker](https://github.com/sourcegraph/sourcegraph/issues). We're planning for our next release, Sourcegraph 2.9 in mid-June, right now. The sooner we hear from you, the better!

### About the author

_Quinn Slack is the CEO and co-founder of Sourcegraph, the code intelligence platform for dev teams and making coding more accessible to more people. Prior to Sourcegraph, Quinn co-founded Blend Labs, an enterprise technology company dedicated to improving home lending and was an egineer at Palantir, where he created a technology platform to help two of the top five U.S. banks recover from the housing crisis. Quinn has a BS in Computer Science from Stanford, you can chat with him on Twitter [@sqs](https://twitter.com/sqs)._
