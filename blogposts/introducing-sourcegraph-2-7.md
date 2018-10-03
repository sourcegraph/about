---
title: 'Sourcegraph 2.7: code intelligence in pull requests and commit diffs'
author: 'Quinn Slack'
publishDate: 2018-04-16T00:00-07:00
tags: [
  "blog"
]
slug: introducing-sourcegraph-2-7
heroImage: //images.ctfassets.net/le3mxztn6yoo/3nwI43eRv2E2CuEmU8iWeC/4c3354f2e1d6b33ebdf90ac7dd01710d/SourcegraphDiff.png
published: true
---

Sourcegraph 2.7 ships today, with tons of new features and improvements to help your team build better software. Get code intelligence in seconds with no setup, view diffs with code intelligence directly in Sourcegraph, and get more information when finding references. This release comes with many more improvements and bug fixes.

Sourcegraph gives your team code intelligence and search across all of your code--even up to 10,000s of repositories. It runs securely in your own network, takes 5 minutes to install, and is free to use (with paid upgrades starting at $5/user/month).

Ready to install or upgrade? **[Install Sourcegraph 2.7](/docs)**


**Key highlights of Sourcegraph 2.7:**

* [Code intelligence in seconds, with no setup](#from-zero-to-code-intelligence-in-seconds)
* Diffs with code intelligence [in Phabricator](#code-intelligence-in-phabricator-diffs) and [on Sourcegraph itself](#diffs-in-sourcegraph-with-code-intelligence)
* ["Find implementations" support](#find-implementations-and-improved-references-panel)
* [Improved references panel](#find-implementations-and-improved-references-panel)
* [Search from your browser's address bar](#omnibox-integration)
* [Access tokens for API clients](#access-tokens-for-api-clients)
* [Federated code intelligence (experimental)](#federated-code-inteliigence-experimental)
* [Analytics improvements for site admins](#better-analytics-for-site-admins)


## From zero to code intelligence in seconds

We’ve drastically simplified getting code intelligence up and running. When viewing a repository, the relevant language servers are now automatically enabled. For example, visiting a Go repository will now automatically download and run the Docker container for Go code intelligence. (This change does not affect Data Center users.)

The new code intelligence admin panel allows you to view and manage language servers. It lets you enable, disable, update, and restart language servers at the click of a button. For Data Center users, it shows the current status of language servers. Click **Code intelligence** in the site admin area to manage code intelligence.


## Code intelligence in Phabricator diffs

You can now get code intelligence in Phabricator diffs. You can roll it out to your entire organization by running a single install script, without needing every person to install the browser extension. [Read the documentation](/docs/features/phabricator-extension) for full instructions.


## Diffs in Sourcegraph, with code intelligence

You can now view and browse diffs with code intelligence directly in Sourcegraph. You can also view a repository’s Git branches, tags, and commits, and compare revisions. To view and browse a diff, click **Compare** and enter the relevant revisions or click a commit hash anywhere in the UI.

![SourcegraphDiff](//images.ctfassets.net/le3mxztn6yoo/3nwI43eRv2E2CuEmU8iWeC/6b29190a669ee2fe5175741b25108b8f/SourcegraphDiff.png)


## Find implementations and improved references panel

Sourcegraph can now answer "Which types implement this interface?" for any [language server](https://microsoft.github.io/language-server-protocol/) that supports the feature, for example Go. After clicking find references on an interface, click the **Implementations** tab in the references panel to view all implementations. 

We’ve also improved the references panel for all languages to also show the full docstring, all definitions, and external references grouped by calling repository. 

![Go Implementations](//images.ctfassets.net/le3mxztn6yoo/3IIFzwaA64EigaAkWiGk4C/42ce0b01c69af2d9853f274797e634dd/GoImplementations.png)

## Omnibox integration

The Sourcegraph browser extension now ships with easier access to code search from your browser bar. In your browser bar, type `src<space>` in Chrome or Firefox to activate Sourcegraph search.

![Search suggestions in omnibox](//images.ctfassets.net/le3mxztn6yoo/49kFQWTFRCkyQie4a8e402/e4620f246142af6bb887d47913044e08/2018-04-16_2.03.26_PM.gif)

We’ve also added a few CLI-like commands to help configure your extension. After typing `src<space>`, type `:` to activate CLI mode and use these shortcuts:

* `src :add-url <url>` add a new Sourcegraph URL

* `src :set-url <url>` set your primary Sourcegraph URL


## Access tokens for API clients

Users (and site admins) may now create and manage access tokens to authenticate API clients. Access tokens are currently only supported when using the builtin and http-header authentication providers (not OpenID or SAML). Click **Access tokens** in your user profile menu to create and manage your tokens. The site configuration option auth.disableAccessTokens disables this new feature.


## Federated code intelligence (experimental)

We’ve shipped an experimental feature which lets you jump-to-definition to public repositories that you may not have enabled on your Sourcegraph instance.  This feature consults the index of open-source repositories on Sourcegraph.com when jumping to a public repository not on your instance. This is disabled by default; use `"experimentalFeatures": { "jumpToDefOSSIndex": "enabled" }` in your site configuration to enable it.


## Better analytics for site admins

The site admin analytics page will now display the number of code intelligence actions each user has made, including hovers, jump to definitions, and find references, on the Sourcegraph instance or in a code host integration.


## Additional improvements

* The user and organization management UI has been greatly improved. Site admins may now administer all organizations (even those they aren't a member of) and may edit profile info and configuration for all users.

* If SSO is enabled (via OpenID or SAML) and the SSO system provides user avatar images and/or display names, those are now used by Sourcegraph.

* Users can now tweet their feedback about Sourcegraph when clicking on the feedback smiley located in the navbar and filling out a Twitter feedback form.

* Enable new search timeout behavior by setting `"experimentalFeatures": { "searchTimeoutParameter": "enabled"}` in your site config.

    * Adds a new timeout: parameter to customize the timeout for searches. It defaults to 10s and may not be set higher than 1m.

    * The value of the timeout: parameter is a string that can be parsed by [time.Duration](https://golang.org/pkg/time/#ParseDuration) (e.g. "100ms", "2s").

* Code intelligence indexes are now built for all repositories in the background, regardless of whether or not they are visited directly by a user.

See the [changelog](/changelog) for a full list of improvements.

Ready to upgrade? **[Install Sourcegraph 2.7](/docs)**.
