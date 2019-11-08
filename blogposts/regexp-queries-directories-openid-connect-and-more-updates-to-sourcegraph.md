---
title: 'Regexp queries, directories, OpenID Connect, and more updates to Sourcegraph'
author: 'Quinn Slack'
publishDate: 2017-11-13T00:00-08:00
tags: [
  "blog"
]
slug: regexp-queries-directories-openid-connect-and-more-updates-to-sourcegraph
heroImage: https://about.sourcegraph.com/sourcegraph-mark.png
published: true
---


We've been hard at work on improvements to [Sourcegraph](https://docs.sourcegraph.com) to give you great code search on your company's code. Here's what's new and improved:


<div>
    <img class="pa1 ba b--light-7" alt="Changelog-RegExpSearch" src="//images.contentful.com/le3mxztn6yoo/7ChTngy1biw4caUM2c6iIM/749d73d57328c130269e4760bf181963/2017-11-13_23.43.01.gif"/>
</div>

Code search:
* There is now a [directory listing view](https://sourcegraph.com/github.com/golang/go/-/tree/src) with the last Git commit for each subdirectory and file.
* Query terms are now interpreted as regexps, not strings (for example, this query would match abc and abd: [`ab[cd]`](https://sourcegraph.com/search?q=ab%5Bcd%5D&sq=repogroup:sample)). The regexp: operator is deprecated. Surround a term in double quotes to search for exact (non-regexp) matches.
* The suggestion menu below the search box now displays matching directories (in addition to files and repositories).
* The [search documentation](https://about.sourcegraph.com/docs/search/) is now linked from “Help” next to the query input.
* Fixed the revision switcher for repositories with != 3 path components in their name.
* Clicking on an item in the query suggestions menu now navigates to that item. Previously you needed to use the keyboard.
* The ?q=&sq= URL params no longer follow you everywhere.
* Various bugs were fixed in the [editor integrations](https://docs.sourcegraph.com/integration) for code search


Self-hosted Sourcegraph instances:

* SSO sign-in via OpenID Connect grants the user the same abilities as the native sign-in. Read the [installation documentation](https://docs.sourcegraph.com/admin/auth) for configuration instructions.

On Sourcegraph.com:

* The “All repositories” scope is now available. You still need to specify repo: and/or repogroup: filters to narrow the search to 30 or fewer repositories. (Example: `repo:github.com/myorg/myquery`).

Want to run a self-hosted instance of Sourcegraph with your own private code? [Install Sourcegraph with a single command.](https://docs.sourcegraph.com/#quickstart)
