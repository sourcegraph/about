---
title: 'Introducing code search in Sourcegraph'
author: 'Quinn Slack'
publishDate: 2017-04-07T00:00-07:00
tags: [
  "blog"
]
slug: introducing-code-search-in-sourcegraph
heroImage: https://about.sourcegraph.com/sourcegraph-mark.png
published: true
---



In-repository code search is now available in Sourcegraph. Simply click the magnifying glass icon above the file tree, type your search term, and click enter. Once you select a result, you’ll get full [code intelligence](http://codeintelligence.org/), including our info panel whenever you click a method, variable or struct.

[![](https://cdn-images-1.medium.com/max/800/1*pKHfud451X3oVgqEXhcjCw.png)](https://sourcegraph.com/github.com/kubernetes/kubernetes@ad3e0903f35a625fe78b9ab28bbeef57fc9a7b1b/-/blob/cmd/cloud-controller-manager/app/controllermanager.go#L65:10-65:15)In repository text search, launch it from the Search icon above the file tree.

Try it now on your favorite project like [Kubernetes](https://sourcegraph.com/github.com/kubernetes/kubernetes@ad3e0903f35a625fe78b9ab28bbeef57fc9a7b1b/-/blob/README.md) or [JUnit](https://sourcegraph.com/github.com/junit-team/junit@cebbf5e15725b4dc247ac0557f6fa63f475b15af/-/blob/src/main/java/org/junit/Test.java#L66:19-66:23).

We worked hard to make sure code search is fast, responsive, and gives you just as much visibility as cloning a repository to your machine and using your editor’s built in search. And it feels great.

We’re excited about this release and hope to hear your feedback. As always, get in touch using the Feedback button on the bottom right of Sourcegraph or email [hi@sourcegraph.com](mailto:hi@sourcegraph.com).

But what about searching across all my of team’s code, you ask? Stay tuned.
