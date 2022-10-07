---
title: 'Introducing code search in Sourcegraph'
authors:
  - name: Quinn Slack
    url: https://twitter.com/sqs
publishDate: 2017-04-07T00:00-07:00
tags: [
  "blog"
]
slug: introducing-code-search-in-sourcegraph
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
---



In-repository code search is now available in Sourcegraph. Simply click the magnifying glass icon above the file tree, type your search term, and click enter. Once you select a result, you’ll get full [code intelligence](http://codeintelligence.org/), including our info panel whenever you click a method, variable or struct.

[![](https://cdn-images-1.medium.com/max/800/1*pKHfud451X3oVgqEXhcjCw.png)](https://sourcegraph.com/github.com/kubernetes/kubernetes@ad3e0903f35a625fe78b9ab28bbeef57fc9a7b1b/-/blob/cmd/cloud-controller-manager/app/controllermanager.go#L65:10-65:15)In repository text search, launch it from the Search icon above the file tree.

Try it now on your favorite project like [Kubernetes](https://sourcegraph.com/github.com/kubernetes/kubernetes@ad3e0903f35a625fe78b9ab28bbeef57fc9a7b1b/-/blob/README.md) or [JUnit](https://sourcegraph.com/github.com/junit-team/junit@cebbf5e15725b4dc247ac0557f6fa63f475b15af/-/blob/src/main/java/org/junit/Test.java#L66:19-66:23).

We worked hard to make sure code search is fast, responsive, and gives you just as much visibility as cloning a repository to your machine and using your editor’s built in search. And it feels great.

We’re excited about this release and hope to hear your feedback. As always, get in touch using the Feedback button on the bottom right of Sourcegraph or email [hi@sourcegraph.com](mailto:hi@sourcegraph.com).

But what about searching across all my of team’s code, you ask? Stay tuned.

### About the author

_Quinn Slack is the CEO and co-founder of Sourcegraph, the code intelligence platform for dev teams and making coding more accessible to more people. Prior to Sourcegraph, Quinn co-founded Blend Labs, an enterprise technology company dedicated to improving home lending and was an egineer at Palantir, where he created a technology platform to help two of the top five U.S. banks recover from the housing crisis. Quinn has a BS in Computer Science from Stanford, you can chat with him on Twitter [@sqs](https://twitter.com/sqs)._
