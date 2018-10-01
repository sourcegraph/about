---
title: 'Announcing Sourcegraph Server 2.4: free, powerful search for your private code'
author: 'Quinn Slack'
publishDate: 2018-01-09T00:00-08:00
tags: [
  "blog"
]
slug: introducing-sourcegraph-server-2-4
heroImage: //images.ctfassets.net/le3mxztn6yoo/4r2yOyPFbWAUSCgAKoQesO/74658437ab34d7e67bced62cc98aeed6/ConfigEditor.png
published: true
---

Sourcegraph Server 2.4 is here. It is now free for unlimited users and repositories, can be installed in minutes with a single `docker run` command, and is easily configurable in the new web-based site admin. This release also includes many performance and bug fixes, plus a better interface for monitoring search results.

Sourcegraph Server gives the power of great code search to every developer at your company, so you can ship better code faster. It runs securely in your own network, takes 5 minutes to install, and is easy to upgrade.

Ready to install or upgrade? **[Install Sourcegraph Server 2.4.](/docs/server)** Existing Sourcegraph Data Center customers can [upgrade](/docs/server/datacenter#upgrading-to-a-new-version-of-sourcegraph) now.

Key highlights of Sourcegraph Server 2.4: 
* [Easier installation](#easier-installation)
* [Free for unlimited repositories and users on a single server](#free-for-unlimited-repositories-and-users-on-a-single-server)
* [Easier configuration](#easier-configuration)
* [Search interface improvements](#search-interface-improvements)
* [Monitor saved query results](#monitor-saved-query-results)
* [Diff search](#diff-search)
* [Commit message search](#commit-message-search)
* [New search filters: author, committer, before, after, and commit message](#new-search-filters-author-committer-before-after-and-commit-message)

### Easier installation

We've made it easier than ever to start searching your code with Sourcegraph Server: [see the one-command `docker run` quickstart command](/docs/server).

<div style="padding-bottom:70.9%;height:0;position:relative;overflow:hidden;">
  
<img src="/60SecondSetup.gif" class="br2 ba b--light-8 pa2" />

</div>

See the [installation documentation](/docs/server) for more information.

### Free for unlimited repositories and users on a single server

Code search on Sourcegraph Server is now free on a single server for unlimited repositories and users. As you grow to hundreds or thousands of users and repositories, graduate from the single-server deployment to a highly scalable Kubernetes cluster with [Sourcegraph Data Center](/docs/server/datacenter).   

See our [pricing](/pricing) page for more information.

### Easier configuration

The new site admin area makes it easier for administrators to configure and manage Sourcegraph Server. Site admins can click **Admin** in the upper right of any page to view the site admin area.

<div class="padding-bottom:75%;height:0;position:relative;overflow:hidden;">

![SiteAdminArea](//images.contentful.com/le3mxztn6yoo/62vc2oU944MiEC6GQ6a2aC/a58830b525a36667907e2ba01a7e2ca4/SiteAdminArea.png)

</div>

From here, click **Configuration** in the site admin menu to configure your Sourcegraph Server. The new in-app JSON site config editor makes it easy to add repositories from GitHub, GitHub Enterprise, and other sources, configure SSO, and change other settings.

<div class="padding-bottom:71.9%;height:0;position:relative;overflow:hidden;">

![ConfigEditor](//images.contentful.com/le3mxztn6yoo/4r2yOyPFbWAUSCgAKoQesO/74658437ab34d7e67bced62cc98aeed6/ConfigEditor.png)

</div>

See the [configuration documentation](/docs/server/config) for more information, and see the [full configuration options](/docs/server/config/settings).

### Search interface improvements 

We've introduced a cleaner, more intuitive search interface in Sourcegraph Server 2.4. Saved search scopes appear as buttons on the search homepage, replacing the old scope dropdown. The selected scope is reflected in the search bar as part of the search query.  

### Monitor saved query results

Saved queries are useful for keeping track of important code changes. Now, you can monitor changes in your saved queries on the homepage. Adding a saved query to the homepage shows the current number of results and a graph of the number of results over time. Whether it's lint violations, security vulnerabilities, or hacks, you can now easily monitor changes in your code from the homepage. 

<div class="padding-bottom:69.89%;height:0;position:relative;overflow:hidden;">

![MonitorSavedQueries](//images.contentful.com/le3mxztn6yoo/6pXGbl3HCosyywUAAiQiCs/8b2042f917c2cc6ad78bf2abf88ba389/MonitorSavedQueries.png)

</div>

### Diff search
You can now search over commit diffs using the `type:diff` operator in search queries. This helps developers: 
* debug issues (“when was the  `parseDocument` function last changed?”)
* catch issues before they appear (“what open pull requests modify sensitive files?”)
* find usage examples (“show me a self-contained commit adding a new page to our web app”) 

[See a sample diff search](https://sourcegraph.com/search?q=r:moby/moby+type:diff+MarshalJSON+after:%222+months+ago%22&sq=) on a public repository on Sourcegraph.com.

<div class="padding-bottom:72.7%;height:0;position:relative;overflow:hidden;">

![CommitDiffSearch](//images.contentful.com/le3mxztn6yoo/664m9SJ8cgCaKMsq8WMQAg/299e902df9acba91f3636bd03c97d3dc/CommitDiffSearch.png)

</div>

But that's not all! For the intrepid, you can search within commit diffs on multiple branches by specifying them in a `repo:` field after the `@` sign. [See non-master-branch commits containing `const`](https://sourcegraph.com/search?q=r:Microsoft/vscode%24%40*refs/heads/:%5Erefs/heads/master+type:diff+const+after:%221+week+ago%22&sq=) in a public repository on Sourcegraph.com, for example. After the `@`, separate Git refs with `:`, specify Git ref globs by prefixing them with `*`, and exclude commits reachable from a ref by prefixing it with `^`. We'll improve documentation as this feature nears release.

See the [documentation](/docs/search#diff-search) for more information.

### Commit message search
Like diff search above, but use `type:commit` to search inside commit *messages*. [See all commits mentioning “bug” or “fix”](https://sourcegraph.com/search?q=r:golang/go%24+type:commit+after:%221+month+ago%22+bug%7Cfix&sq=) in a public repository on Sourcegraph.com, for example.

<div class="padding-bottom:72.7%;height:0;position:relative;overflow:hidden;">

![CommitMessageSearch](//images.contentful.com/le3mxztn6yoo/3gIn18atFe4KAUoY0aYIug/9028a175fba62892b16a7288f976b277/CommitMessageSearch.png)

</div>

See the [documentation](/docs/search#commit-search) for more information.

### New search filters: author, committer, before, after, and commit message

To go along with diff and commit search, we've added new search filters.

* `author:name` or `author:email@example.com` to show only diffs or commits authored by that user ([example](https://sourcegraph.com/search?q=repo:golang/go%24+author:bradfitz+type:commit+clarify&sq=))
* `committer:name` or `committer:email@example.com` (same as above, but for the Git committer, which sometimes differs from the Git author)
* `after:"3 weeks ago"`, `before:"june 25, 2017"`, `before:"last thursday"`, etc., to filter by commit date ([example](https://sourcegraph.com/search?q=repo:golang/go%24+type:diff+/package+%5Cw%2B_test/+after:%222+months+ago%22+before:%221+month+ago%22&sq=))
* `message:"hello"` to show only commits or diffs whose commit message (including the full message body) contains "hello" ([example](https://sourcegraph.com/search?q=repo:Microsoft/TypeScript%24+type:commit+after:%222+weeks+ago%22+file:%5C.ts%24+message:%22fix%28es%29%3F+%23%22&sq=))

See the [search documentation](/docs/search#query) for all filters and query tokens

### Upgrade today 

**[Install Sourcegraph Server 2.4](/docs/server)** to bring powerful code search to your developers.
