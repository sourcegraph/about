---
title: 'How Sourcegraph builds Sourcegraph'
authors:
  - name: Quinn Slack
    url: https://twitter.com/sqs
publishDate: 2018-03-20T15:00-07:00
tags: [
  "blog"
]
slug: how-sourcegraph-builds-sourcegraph
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
---

Our product, [Sourcegraph,](/) lets software teams search and explore their code, so naturally we think a lot about how to help software teams ship better software faster. As we've grown, we've learned a lot from [GitHub](https://zachholman.com/talk/how-github-uses-github-to-build-github/), [Visual Studio Code](https://github.com/Microsoft/vscode/wiki/Development-Process), [GitLab](https://about.gitlab.com/handbook/), and other teams who have shared their internal processes, and we're going to start doing the same.

We'll be publishing a series of posts here about how we build Sourcegraph. A few things make Sourcegraph and our development process different from many other companies:
- Our product is for developers, so our developers naturally have a larger role in product  planning and user/customer interaction (compared to companies building products for salespeople, photographers, etc.).
- Our product needs to be super easy for a single developer to [set up](https://docs.sourcegraph.com/#quickstart), get code search and intelligence on their organization's codebase, and share with their entire team.
- Sourcegraph is self-hosted; organizations run the [Docker image](https://docs.sourcegraph.com/admin/install) or [Kubernetes cluster](https://docs.sourcegraph.com/admin/install/cluster) for Sourcegraph on their own servers. We can't roll back or push out an automatic update. ([Sourcegraph.com](https://sourcegraph.com) is a public instance with only public code from GitHub.com and other sites; customers' code never touches our servers.)
- Unlike many other developer-facing products, developers directly interact with our product and its UI. It's not just running behind the scenes.

All this means we need to communicate well internally and externally, and we need to ship a robust, high-quality product to customers on a consistent schedule.

Our series will cover how we do:
- Planning, building, and announcing our monthly releases (examples: **[version 2.6](/blog/introducing-sourcegraph-server-2-6/)**, [version 2.5](/blog/introducing-sourcegraph-server-2-5/), [version 2.4](/blog/introducing-sourcegraph-server-2-4/))
- Product planning and prioritization
- New feature proposals/plans
- Customer feedback and technical support

**[Subscribe to email updates](http://eepurl.com/doKVs9)** to get notified when the next posts in the series are published. [Tell us @sourcegraph](https://twitter.com/sourcegraph) if there are other topics you'd like to hear about. We're looking forward to sharing our team's culture and processes!

### About the author

_Quinn Slack is the CEO and co-founder of Sourcegraph, the code intelligence platform for dev teams and making coding more accessible to more people. Prior to Sourcegraph, Quinn co-founded Blend Labs, an enterprise technology company dedicated to improving home lending and was an egineer at Palantir, where he created a technology platform to help two of the top five U.S. banks recover from the housing crisis. Quinn has a BS in Computer Science from Stanford, you can chat with him on Twitter [@sqs](https://twitter.com/sqs)._
