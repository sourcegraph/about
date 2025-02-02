---
title: 'Introducing Sourcegraph 2.6: Symbol search for 75+ languages'
authors:
  - name: Quinn Slack
    url: https://twitter.com/sqs
publishDate: 2018-03-13T00:00-08:00
tags: [
  "blog"
]
slug: introducing-sourcegraph-server-2-6
heroImage: https://images.ctfassets.net/le3mxztn6yoo/4umPKXWx0kSeIgw0SKQw8e/265b6eadb480f3837261e4f4e1a4c771/Symbols3.png
published: true
---

We're excited to announce Sourcegraph 2.6, with tons of new features and improvements to help your team build better software. Search for and jump directly to symbols, search for the code you need more quickly, and set up Sourcegraph to search across all of your code--all available now. This release also comes with big improvements to configuration and authentication.

Sourcegraph gives your team code search and intelligence across all of your code--even up to 10,000s of repositories. It runs securely in your own network, takes 5 minutes to install, and is free to use (with paid upgrades starting at $5/user/month).


Ready to install or upgrade? **[Install Sourcegraph 2.6](https://docs.sourcegraph.com)**

**Key highlights of Sourcegraph 2.6:**
* [Symbol search for 75+ languages](#symbol-search-for-75-languages)
* [Improved configuration flow](#improved-configuration-flow)
* [Language search filter](#language-search-filter)
* [Search filter suggestions](#search-filter-suggestions)
* [More documentation for scaling and deployment](#more-documentation-for-scaling-and-deployment)
* [Improvements to built-in authentication](#improvements-to-built-in-authentication)
* [Bitbucket Server support](#bitbucket-server-support)
* [Better Phabricator integration](#better-phabricator-integration)

## Symbol search for 75+ languages

Symbol search is now available in Sourcegraph for over 75 languages. Use the `type:symbol` filter to search for symbol results, which makes it easier to find specific functions, variables, and more. Symbol results also appear in typeahead suggestions, so you can jump directly to symbols by name.

![Symbols3](//images.ctfassets.net/le3mxztn6yoo/4umPKXWx0kSeIgw0SKQw8e/265b6eadb480f3837261e4f4e1a4c771/Symbols3.png)

You can also browse all symbols in a repository with the symbols sidebar.  Click the **Symbols** tab in the sidebar while viewing a repository to see a list of all symbols. Click on a symbol to go to its definition.

![SymbolSidebar](//images.ctfassets.net/le3mxztn6yoo/2rFkutjx76GScgCW2wS2a0/2f5e4ef5daa64623bdf0e6bd6ae52962/SymbolSidebar.png)


## Improved configuration flow

Changes to most site configuration options are now automatically detected and no longer require a server restart. After pressing Save on the site admin configuration page, the changes will take effect immediately (for most settings--if you need to restart to apply the changes, you'll see a notice). This makes it easier to configure Sourcegraph to search repositories on your code hosts (GitHub, GitHub Enterprise, GitLab, Bitbucket Server, AWS CodeCommit, and any other Git-based code host) without restarting the server.

## Language search filter

Now, you can filter search results by programming language with the `lang:` filter. For example, use [`test lang:yaml`](https://sourcegraph.com/search?q=repogroup:sample+lang:yaml+test) for files containing `test` in YAML files, or `import lang:python` for [`import` statements in Python files](https://sourcegraph.com/search?q=repogroup:sample+lang:python+import).

## Search filter suggestions

Filtering with search scopes is now smarter and dynamic. After executing a search, the **Filters** bar below the search area will suggest up to 12 `file:` and `repo:` filters based on the result set to help narrow your search query.

![Filters2](//images.ctfassets.net/le3mxztn6yoo/6J9Qhj2OT6aY2eiUsEu8qW/c4fe7567a741698c60197ba7f28378b8/Filters2.png)


## More documentation for scaling and deployment

We've added tons of information to the Sourcegraph cluster deployment documentation to better help you use Sourcegraph at your company. See the [cluster deployment documentation](https://docs.sourcegraph.com/admin/install/cluster) for information on managing and scaling your Sourcegraph cluster.


## Improvements to built-in authentication

It's now much easier to control access to your code on Sourcegraph. When using `auth.provider == "builtin"`, two new important changes mean that a Sourcegraph instance will be locked down and only accessible to users who are invited by an admin user (previously, we advised users to place their own auth proxy in front of Sourcegraph servers).

1.  When `auth.provider == "builtin"` is set, Sourcegraph will now by default require an admin to invite users instead of allowing any visitor to the site to sign up. Set `auth.allowSignup == true` to retain the old behavior of allowing anyone who can access the site to sign up.
2.  When `auth.provider == "builtin"`, Sourcegraph now respects a new `auth.public` site configuration option (default value: `false`). When `auth.public == false`, Sourcegraph will not allow anyone to access the site unless they have an account and are signed in.

## Bitbucket Server support

We've added native integration for [Bitbucket Server](https://www.atlassian.com/software/bitbucket/server) so you can get powerful code search over all your Bitbucket Server projects in minutes. Click **Add Bitbucket Server repositories** in the site config area, fill in the generated fields, and select which repositories to enable. [See the Bitbucket integration documentation](https://docs.sourcegraph.com/integration/bitbucket_server) for full instructions.

As always, in addition to natively supported code hosts (GitHub, GitLab, Gitolite etc.), Git repositories from any code host can be added.

## Better Phabricator integration

We now display a **View on Phabricator** link rather than a **View on other code host** link if you are using Phabricator and hosting your code on GitHub or another code host with a UI. Commit links will now also point to Phabricator.

[Read the Phabricator integration documentation](https://docs.sourcegraph.com/integration/phabricator) to integrate Sourcegraph with Phabricator.


## Changelog

See the [Sourcegraph changelog](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md) for a list of all changes in this release.

---

Ready to install or upgrade? **[Install Sourcegraph 2.6](https://docs.sourcegraph.com/#quickstart)**

### About the author

_Quinn Slack is the CEO and co-founder of Sourcegraph, the code intelligence platform for dev teams and making coding more accessible to more people. Prior to Sourcegraph, Quinn co-founded Blend Labs, an enterprise technology company dedicated to improving home lending and was an egineer at Palantir, where he created a technology platform to help two of the top five U.S. banks recover from the housing crisis. Quinn has a BS in Computer Science from Stanford, you can chat with him on Twitter [@sqs](https://twitter.com/sqs)._
