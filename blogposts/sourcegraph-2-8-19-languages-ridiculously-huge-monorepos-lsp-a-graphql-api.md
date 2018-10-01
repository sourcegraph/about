---
title: 'Sourcegraph 2.8: 19 languages, ridiculously huge monorepos, LSP, a GraphQL API, and more'
author: 'Quinn Slack'
publishDate: 2018-05-22T09:00-07:00
tags: [
  "blog"
]
slug: sourcegraph-2-8-19-languages-ridiculously-huge-monorepos-lsp-a-graphql-api
heroImage: //images.ctfassets.net/le3mxztn6yoo/t4Qpcq5kA0AYM24Ws4mOk/4edf5502a936bbec90c262fa00355aed/sourcegraph-mark.png
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

**Ready to install or upgrade? [Get Sourcegraph 2.8.](/)**

## Code intelligence for 13 more languages, via LSP

With code intelligence on Sourcegraph, you can navigate code more easily with hovers, 
definitions, references, implementations, etc. It's all powered by language servers based on the [Language Server Protocol (LSP)](http://langserver.org) standard.

Sourcegraph 2.8 ships with support for 13 more languages (in addition to the 6 languages already supported), thanks to the amazing contributions of hundreds of developers in the LSP ecosystem. In this release, you can also [connect any other LSP-compliant language server](/docs/code-intelligence/adapting-language-servers) to Sourcegraph.

This brings the full list of languages with code intelligence on Sourcegraph to 19:

*   [Go](/docs/code-intelligence/go)
*   [JavaScript](/docs/code-intelligence/javascript)
*   [TypeScript](/docs/code-intelligence/typescript)
*   [Python](/docs/code-intelligence/python)
*   [Java](/docs/code-intelligence/java)
*   [PHP](/docs/code-intelligence/php)
*   [Bash](/docs/code-intelligence/experimental-language-servers) (experimental)
*   [Clojure](/docs/code-intelligence/experimental-language-servers) (experimental)
*   [C++](/docs/code-intelligence/experimental-language-servers) (experimental)
*   [C#](/docs/code-intelligence/experimental-language-servers) (experimental)
*   [CSS](/docs/code-intelligence/experimental-language-servers) (experimental)
*   [Dockerfile](/docs/code-intelligence/experimental-language-servers) (experimental)
*   [Elixir](/docs/code-intelligence/experimental-language-servers) (experimental)
*   [HTML](/docs/code-intelligence/experimental-language-servers) (experimental)
*   [Lua](/docs/code-intelligence/experimental-language-servers) (experimental)
*   [OCaml](/docs/code-intelligence/experimental-language-servers) (experimental)
*   [R](/docs/code-intelligence/experimental-language-servers) (experimental)
*   [Ruby](/docs/code-intelligence/experimental-language-servers) (experimental)
*   [Rust](/docs/code-intelligence/experimental-language-servers) (experimental)

To get code intelligence for these new languages, see "[Experimental language servers](/docs/code-intelligence/experimental-language-servers)". Of course, once you've set them up on your organization's Sourcegraph instance, you'll also get code intelligence in all the Sourcegraph integrations you're using, such as GitHub, Phabricator, etc.

For more information, see today's announcement "[Code intelligence for 13 more languages, with first-class LSP support](/blog/code-intelligence-for-more-languages-and-lsp-language-server-protocol-support)".

Here's a GIF of the experimental new C# support:

<img src="https://cl.ly/2R1f0D2e1I1w/csharp.gif" style="max-width:550px" />

## Perf improvements for massive monorepos

We heard from devs at some very large companies that Sourcegraph was slow on their monorepos. To fix this, we first synthesized a huge test monorepo with 11 GB of code, 20 GB of .git data, 1.5M files, 2M commits, and 500k Git refs (by combining the Git repositories of Chromium, Linux, OpenOffice, Kubernetes, and a few others). We then made sure that adding, searching, and browsing that repository was super fast on Sourcegraph.

If your monorepo is smaller than that, Sourcegraph will work great. If your monorepo is even bigger, we'd love to hear if anything is still slow for you.

Our test monorepo is too large for GitHub.com, but you can try the perf improvements on the slightly smaller [Chromium monorepo](https://sourcegraph.com/github.com/chromium/chromium).

## Sourcegraph API

Sourcegraph's API is ready for you to start building on. Here are some examples of things you can do with the Sourcegraph API on your organization's own Sourcegraph instance:

- [See the most-used programming languages in all of your organization's active repositories](https://sourcegraph.com/api/console#%7B%22query%22%3A%22%7B%5Cn%20%20repositories(enabled%3A%20true%2C%20query%3A%5C%22github.com%2Fsourcegraph%2F%5C%22)%20%7B%5Cn%20%20%20%20nodes%20%7B%5Cn%20%20%20%20%20%20name%5Cn%20%20%20%20%20%20language%5Cn%20%20%20%20%7D%5Cn%20%20%7D%5Cn%7D%5Cn%22%7D)
- List all repositories without a Dockerfile, .travis.yml, LICENSE, README, etc.
- Find all repositories that call a specific function or depend on a specific package

See [interactive Sourcegraph API examples](/docs/features/api/examples) for more inspiration.

The API exposes all of the data that Sourcegraph itself uses, such as:

- Code and symbol search results
- Cross-repository code intelligence
- Repository list and metadata
- Git data (files, blame, commits, branches, tags, etc.)

Sourcegraph uses this API for everything, so the API is just as powerful, fast, and reliable as the Sourcegraph itself. You can play around with it on the [GraphQL console](https://sourcegraph.com/api/console) on on Sourcegraph.com or your own instance. Two other new features shipping today also help you use the API: the [Sourcegraph CLI](https://github.com/sourcegraph/src-cli) tool and [access tokens](#access-token-improvements).

One surprising thing we learned from customers is that never worrying about API rate limits is just as exciting as the new kinds of data exposed by the Sourcegraph API. We put tons of work into making Sourcegraph search, code intelligence, and mirrored Git data access super fast for interactive users--and that means you can write API clients that hit your Sourcegraph instance way harder than you could hit any code host. If needed, get [Sourcegraph Data Center](/docs/datacenter) for massive scale.

Check out the new [Sourcegraph API documentation](/docs/features/api) to get started. Not sure how to do something using the API? Post in our [public issue tracker](https://github.com/sourcegraph/issues).

## Improved Phabricator integration for code intelligence in diffs

Code intelligence is most powerful when it's available in your code review tool. Our Phabricator integration saw some big improvements in this release:

- Improved packaging, as a first-class Phabricator extension with no source modifications required
- An easy (3-minute) install process
- Support for repositories without staging areas
- Compatibility with all Phabricator versions released in the last year

![phabricator-extension-differential](//images.ctfassets.net/le3mxztn6yoo/5SXiFECe7SkKCIyeeoUGYe/959884db905b3f5ede1b14790d4ae346/phabricator-extension-differential.png)

[Install the Sourcegraph extension for Phabricator.](https://github.com/sourcegraph/phabricator-extension) Want support for another code host or code review tool (other than GitHub, which is also supported)? File an issue in our [public issue tracker](https://github.com/sourcegraph/issues/issues).

## User authentication providers: easier, more configurable ways for users to sign into Sourcegraph

We've improved Sourcegraph's support for user authentication providers, which allow users to sign into Sourcegraph using their existing accounts in your organization's SSO/directory service. Support is included for SAML, OpenID Connect (including G Suite for Google accounts), and HTTP authentication proxies.

- The new site configuration property `auth.providers` defines the list of authentication providers in one place (instead of having authentication configuration scattered among `auth.provider` and other `auth.*` properties). Backcompat for the old (now-deprecated) `auth.provider` configuration is maintained.
- All authentication provider configuration changes are reflected immediately (in Sourcegraph Server) without the need for a restart.
- Error messages describing authentication configuration problems are much better, both for end users and for site admins.
- Improved user authentication provider documentation with clear steps for multiple commonly used services (Okta, OneLogin, G Suite, etc.).
- Single-logout and token revocation are supported for OpenID Connect and SAML, so users can sign out of both Sourcegraph and the authentication provider.
- Site admins can see who has signed into Sourcegraph via an authentication provider and inspect auth/account details for troubleshooting.

See [user authentication provider documentation](/docs/config/authentication) for setup instructions. Need support for other authentication providers or other configuration points? File an issue in our [public issue tracker](https://github.com/sourcegraph/issues/issues).

## Access token improvements

This release improves support for access tokens, which enable access to the Sourcegraph API by external tools and scripts.

- Access tokens now work with [external user authentication providers](/docs/config/authentication) (OpenID Connect, SAML, and HTTP authentication proxies).
- A new [`site-admin:sudo` scope for access tokens](/docs/features/api#sudo-access-tokens) (which only site admins may use) lets the holder impersonate other users. This lays the foundation for future releases to integrate more closely with external tools in a seamless and authorization-aware manner. Stay tuned!
- Site admins can now view all access tokens (created by any user) and revoke any access token.
- The owner of an access token (and site admins) can now see when it was last used, to make it easier to prune unused tokens.

Along with the [Sourcegraph API improvements](#sourcegraph-api) in this release, we're working hard to let you build new kinds of tools on Sourcegraph to speed up and automate your team's work.

<!--

## Code view improvements

TODO

- "Go to definition" and other actions now only require a single click.
- All hover information from the language server, not just the first item, is shown. This means, for example, that TypeScript and Go interface fields are shown underneath the formatted docstring.
- The hover now has a button to “Find implementations” of interfaces and concrete types (if supported by the language server).
- Many visual glitches were fixed with hovers and token highlighting.
- You can hover over the plug icon in the top right to see the code intelligence status for the current file (to see what features are supported, such as hovers, definitions, references, and implementations).
- Error messages (such as compiler errors) from the language server are displayed in the hover, so you know the reason if something isn't working.

Try the new code view and hover on an [example open-source file](https://sourcegraph.com/github.com/golang/oauth2/-/blob/clientcredentials/clientcredentials.go#L58).

<img src="//images.ctfassets.net/le3mxztn6yoo/48HJWiBrpe0Kkq2y6wumqo/93f5a4061318ebcca9eec6f31af33c34/Screenshot_from_2018-05-21_17-01-43.png" style="max-width:400px;border:solid 1px #ccc"/>

-->

## Server pings

Sourcegraph no longer tracks any detailed usage data, so the `disableTelemetry` configuration option has been deprecated. (The telemetry that it disabled has been completely removed.)

Sourcegraph instances will [ping Sourcegraph.com periodically with high-level and aggregate data](/docs/usage#server-pings). It never sends code, repository names, usernames, or any other specific data. Customers can disable pings. [Contact support](/contact) to learn more.

## Misc.

- The new repository contributors page ([example](https://sourcegraph.com/github.com/moby/moby/-/stats/contributors)) displays the top Git commit authors in a repository, with filtering options.
- We've finally put the "graph" in Sourcegraph: the site admin analytics page now displays graphical charts of daily/weekly/monthly active user counts.
- If the site configuration contains any deprecated options, a warning will be shown at the top of each page for all site admins. 
- [MOTD](/docs/config/site-settings#motd-array-of-strings): display a dismissible Markdown-rendered message at the top of each page to all users.

---

**Ready to install or upgrade? [Get Sourcegraph 2.8.](/)**

Questions/feedback/complaints/requests? Contact us at [@srcgraph](https://twitter.com/srcgraph) or <mailto:support@sourcegraph.com>, or file issues on our [public issue tracker](https://github.com/sourcegraph/issues/issues). We're planning for our next release, Sourcegraph 2.9 in mid-June, right now. The sooner we hear from you, the better!
