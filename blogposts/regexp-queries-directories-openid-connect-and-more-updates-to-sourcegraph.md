---
title: 'Regexp queries, directories, OpenID Connect, and more updates to Sourcegraph Server'
author: 'Quinn Slack'
publishDate: 2017-11-13T00:00-08:00
tags: [
  "blog"
]
slug: regexp-queries-directories-openid-connect-and-more-updates-to-sourcegraph
heroImage: //images.ctfassets.net/le3mxztn6yoo/t4Qpcq5kA0AYM24Ws4mOk/4edf5502a936bbec90c262fa00355aed/sourcegraph-mark.png
published: true
---

<div class="f4">


We've been hard at work on improvements to [Sourcegraph Server](https://about.sourcegraph.com/products/server) to give you great code search on your company's code. Here's what's new and improved:


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
* Various bugs were fixed in the [editor integrations](https://about.sourcegraph.com/integrations/) for code search


Sourcegraph Server:
* SSO sign-in via OpenID Connect grants the user the same abilities as the native sign-in. Read the [installation documentation](https://about.sourcegraph.com/docs/server/install/#openid-connect) for configuration instructions.

On Sourcegraph.com:
* The “All repositories” scope is now available. You still need to specify repo: and/or repogroup: filters to narrow the search to 30 or fewer repositories. (Example: `repo:github.com/myorg/myquery`).

You can install Sourcegraph Server with a single command at [https:about.sourcegraph.com/docs/server](/docs/server).

</div>
