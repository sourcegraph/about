---
title: 'Sourcegraph 2.7: code intelligence in pull requests and commit diffs'
authors:
  - name: Quinn Slack
    url: https://twitter.com/sqs
publishDate: 2018-04-16T00:00-07:00
tags: [
  "blog"
]
slug: introducing-sourcegraph-2-7
heroImage: https://images.ctfassets.net/le3mxztn6yoo/3nwI43eRv2E2CuEmU8iWeC/4c3354f2e1d6b33ebdf90ac7dd01710d/SourcegraphDiff.png
published: true
---

Sourcegraph 2.7 ships today, with tons of new features and improvements to help your team build better software. Get code intelligence in seconds with no setup, view diffs with code intelligence directly in Sourcegraph, and get more information when finding references. This release comes with many more improvements and bug fixes.

Sourcegraph gives your team code intelligence and search across all of your code--even up to 10,000s of repositories. It runs securely in your own network, takes 5 minutes to install, and is free to use (with paid upgrades starting at $5/user/month).

Ready to install or upgrade? **[Install Sourcegraph 2.7](https://docs.sourcegraph.com)**


**Key highlights of Sourcegraph 2.7:**

* [Code intelligence in seconds, with no setup](#from-zero-to-code-intelligence-in-seconds)
* Diffs with code intelligence [in Phabricator](#code-intelligence-in-phabricator-diffs) and [on Sourcegraph itself](#diffs-in-sourcegraph-with-code-intelligence)
* ["Find implementations" support](#find-implementations-and-improved-references-panel)
* [Improved references panel](#find-implementations-and-improved-references-panel)
* [Search from your browser's address bar](#omnibox-integration)
* [Access tokens for API clients](#access-tokens-for-api-clients)
* [Analytics improvements for site admins](#better-analytics-for-site-admins)


## From zero to code intelligence in seconds

We've drastically simplified getting code intelligence up and running. When viewing a repository, the relevant language servers are now automatically enabled. For example, visiting a Go repository will now automatically download and run the Docker container for Go code intelligence. (This change does not affect cluster deployments.)

The new code intelligence admin panel allows you to view and manage language servers. It lets you enable, disable, update, and restart language servers at the click of a button. For cluster deployments, it shows the current status of language servers. Click **Code intelligence** in the site admin area to manage code intelligence.


## Code intelligence in Phabricator diffs

You can now get code intelligence in Phabricator diffs. You can roll it out to your entire organization by running a single install script, without needing every person to install the browser extension. [Read the Phabricator integration documentation](https://docs.sourcegraph.com/integration/phabricator) for full instructions.


## Diffs in Sourcegraph, with code intelligence

You can now view and browse diffs with code intelligence directly in Sourcegraph. You can also view a repository's Git branches, tags, and commits, and compare revisions. To view and browse a diff, click **Compare** and enter the relevant revisions or click a commit hash anywhere in the UI.

![SourcegraphDiff](//images.ctfassets.net/le3mxztn6yoo/3nwI43eRv2E2CuEmU8iWeC/6b29190a669ee2fe5175741b25108b8f/SourcegraphDiff.png)


## Find implementations and improved references panel

Sourcegraph can now answer "Which types implement this interface?" for any [extension](https://docs.sourcegraph.com/extensions) that supports the feature, for example Go. After clicking find references on an interface, click the **Implementations** tab in the references panel to view all implementations.

We've also improved the references panel for all languages to also show the full docstring, all definitions, and external references grouped by calling repository.

![Go Implementations](//images.ctfassets.net/le3mxztn6yoo/3IIFzwaA64EigaAkWiGk4C/42ce0b01c69af2d9853f274797e634dd/GoImplementations.png)

## Omnibox integration

The Sourcegraph browser extension now ships with easier access to code search from your browser bar. In your browser bar, type `src<space>` in Chrome or Firefox to activate Sourcegraph search.

![Search suggestions in omnibox](//images.ctfassets.net/le3mxztn6yoo/49kFQWTFRCkyQie4a8e402/e4620f246142af6bb887d47913044e08/2018-04-16_2.03.26_PM.gif)

## Access tokens for API clients

Users (and site admins) may now create and manage access tokens to authenticate API clients. Access tokens are currently only supported when using the builtin and http-header authentication providers (not OpenID or SAML). Click **Access tokens** in your user profile menu to create and manage your tokens. The site configuration option auth.disableAccessTokens disables this new feature.

## Better analytics for site admins

The site admin analytics page will now display the number of code intelligence actions each user has made, including hovers, jump to definitions, and find references, on the Sourcegraph instance or in a code host integration.


## Changelog

See the [Sourcegraph changelog](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md) for a list of all changes in this release.

---

Ready to upgrade? **[Install Sourcegraph 2.7](https://docs.sourcegraph.com)**.

### About the author

_Quinn Slack is the CEO and co-founder of Sourcegraph, the code intelligence platform for dev teams and making coding more accessible to more people. Prior to Sourcegraph, Quinn co-founded Blend Labs, an enterprise technology company dedicated to improving home lending and was an egineer at Palantir, where he created a technology platform to help two of the top five U.S. banks recover from the housing crisis. Quinn has a BS in Computer Science from Stanford, you can chat with him on Twitter [@sqs](https://twitter.com/sqs)._
