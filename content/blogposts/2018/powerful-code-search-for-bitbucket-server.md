---
title: 'Powerful code search for Bitbucket Server'
authors:
  - name: Quinn Slack
    url: https://twitter.com/sqs
publishDate: 2018-03-14T00:00-07:00
tags: [
  "blog"
]
slug: powerful-code-search-for-bitbucket-server
heroImage: https://images.ctfassets.net/le3mxztn6yoo/6seAQtaQo0UI0QY4eOo0iU/fd332addff6d9c8629fe4a5566f9204b/sg_bb-logos--for-farhan.png
published: true
---

Today, we're bringing fast, powerful code search to the thousands of development teams on Bitbucket Server. With Sourcegraph 2.6, we've built out native support for Bitbucket Server to make it easier to get code search across all your Bitbucket Server repositories.

Follow these 4 steps to get code search for your Bitbucket Server code:

1. [Spin up a Sourcegraph instance](https://docs.sourcegraph.com/admin) (or use the [cluster deployment option](https://docs.sourcegraph.com/admin/install/cluster) on Kubernetes for massive scale)
2. Click **Configuration** in the site admin menu.
3. Click **Add Bitbucket Server repositories** and fill in the fields in the generated `bitbucketServer` configuration option.

<Figure 
  src="//images.ctfassets.net/le3mxztn6yoo/1s4x4eOcXaEqIQY20eoues/469f7dd3bcae8cb36b7e815f4b0f8518/Bitbucket2.png"
  alt="Bitbucket"
/>

4. Click **Repositories** in the site admin menu and enable the repositories you want to search over.

And that's it--you're ready to start searching across your Bitbucket Server repositories!

For all configuration options for Bitbucket Server, see the [Bitbucket Server integration documentation](https://docs.sourcegraph.com/integration/bitbucket_server).

[Sourcegraph](https://docs.sourcegraph.com) helps development teams build better software with code search and intelligence. It's free, self-hosted, and takes 5 minutes to set up. Read the [Sourcegraph 2.6 announcement blog post](/blog/introducing-sourcegraph-server-2-6) to see more new features from our latest release.

### About the author

_Quinn Slack is the CEO and co-founder of Sourcegraph, the code intelligence platform for dev teams and making coding more accessible to more people. Prior to Sourcegraph, Quinn co-founded Blend Labs, an enterprise technology company dedicated to improving home lending and was an egineer at Palantir, where he created a technology platform to help two of the top five U.S. banks recover from the housing crisis. Quinn has a BS in Computer Science from Stanford, you can chat with him on Twitter [@sqs](https://twitter.com/sqs)._
