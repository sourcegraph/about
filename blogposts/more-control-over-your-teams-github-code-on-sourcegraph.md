---
title: "More control over your team's GitHub code on Sourcegraph"
author: 'Jamie Wilson'
publishDate: 2017-06-29T00:00-07:00
tags: [
  "blog"
]
slug: more-control-over-your-teams-github-code-on-sourcegraph
heroImage: //images.ctfassets.net/le3mxztn6yoo/t4Qpcq5kA0AYM24Ws4mOk/4edf5502a936bbec90c262fa00355aed/sourcegraph-mark.png
published: true
---

**Update (January 2018)**: [Sourcegraph Server](/docs/server) is a free, self-hosted code search server that integrates with your code host and supports multi-repository, regexp, and diff searches.

We've heard from many developers who want to use Sourcegraph to search and navigate their team's private code but who have only been able to use Sourcegraph on open source because of their company’s policies regarding GitHub authentication.

Today we're happy to announce the solution to these concerns. Sourcegraph now supports [GitHub's new granular authorization model](https://developer.github.com/apps/), so you (or your team admin) can manage Sourcegraph for your whole team, grant read-only access to Sourcegraph, and choose which repositories will be accessible on Sourcegraph.

## What this means for you:

**If you're an engineering manager or admin and want to give your team access to Sourcegraph:**

You’ll be able to authenticate only the repositories you need to—and without write access! And you can authenticate once on behalf of your entire team. To install Sourcegraph:

- Visit [https://github.com/apps/sourcegraph](https://github.com/apps/sourcegraph)
- Click "Install"
- Select your organization
- Choose which repositories you want Sourcegraph to have access to
- Click "Install"

Now every team member who signs up will automatically be able to use Sourcegraph on all of your organization’s repositories they can access (according to the permissions you’ve already set in GitHub).

**If you are a developer who wants to use Sourcegraph to search and navigate your company's code:**

It’s easier than before to get your organization’s GitHub admin to approve access. Just follow these steps:

- [Sign into Sourcegraph](https://sourcegraph.com/login) (this does not require or ask for access to any code)
- Ask your org’s GitHub admin to view these instructions and follow the steps above (if they haven’t already done so)

If you’ve previously authenticated private repositories, you’ll need to follow these steps again.

And if you want to run Sourcegraph on your own network, get [Sourcegraph Server](https://about.sourcegraph.com/docs/server).

Special thanks to GitHub for listening to our feedback and making these improvements so developers on many more teams can use Sourcegraph on their private code.
