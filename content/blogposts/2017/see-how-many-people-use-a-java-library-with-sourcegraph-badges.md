---
title: 'See how many people use a Java library, with Sourcegraph badges'
authors:
  - name: Beyang Liu
    url: https://twitter.com/beyang
publishDate: 2017-04-11T00:00-07:00
tags: [
  "blog"
]
slug: see-how-many-people-use-a-java-library-with-sourcegraph-badges
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
---


**Update (September 20, 2017):** Viewing a list of repositories that refer to another repository is currently disabled. It will be added back soon. Viewing function call sites across repositories is still supported.

We're excited to announce that **Sourcegraph “used by” badges** now support Java libraries. If you're an open source author, these badges tell you how many other projects depend on your work. If you're an open source user, the badges help you make an informed decision based on how many others are actually using and relying on a library.

![](https://cdn-images-1.medium.com/max/800/1*d3pUuXjGPHqmW_Sz69Y19A.png)[![](https://cdn-images-1.medium.com/max/800/1*1dziZxK--_T9DmzYdGIIIA.png)](https://sourcegraph.com/github.com/junit-team/junit@cebbf5e15725b4dc247ac0557f6fa63f475b15af/-/blob/src/main/java/org/junit/Test.java#L66:19-66:23)JUnit is used by over 6 thousand open source projects.

Our badges pull dependency information from the same global code graph that helps you make sense of code on [Sourcegraph.com](https://sourcegraph.com). Code is data, and we're on a mission to make that data useful to programmers everywhere.

### How to add the badge

Copy the following snippet to your README.md and replace “github.com/junit-team/junit4” with the name of your repository:

<pre name="9547" id="9547" className="graf graf--pre graf-after--p">[![Sourcegraph]
(https://sourcegraph.com/github.com/junit-team/junit4/-/badge.svg)](https://sourcegraph.com/github.com/junit-team/junit4?badge)</pre>

Customize the look and feel of your badge with 3 different styles by tacking any of these onto the `badge.svg` URL:

*   `?style=plastic`
*   `?style=flat`
*   `?style=flat-square`

Here are just a few of the popular open source repositories that already use the badge:

*   [gorilla/mux](https://github.com/gorilla/mux#readme), URL router and dispatcher for Go: used by 3,000+ projects
*   [Gogs](https://github.com/gogits/gogs#readme), a self-hosted Git service: used by 1,000+ projects
*   [bleve](https://github.com/blevesearch/bleve#readme), a modern text indexer: used by 657 projects
*   [Go kit](https://github.com/go-kit/kit#readme), a toolkit for microservices: used by 509 projects
*   [Caddy webserver](https://github.com/mholt/caddy#readme): used by 237 projects

How many people rely on your open source code? Find out now by pasting the Markdown snippet into your README. Here it is again:

<pre name="af89" id="af89" className="graf graf--pre graf-after--p graf--trailing">[![Sourcegraph]
(https://sourcegraph.com/github.com/junit-team/junit4/-/badge.svg)](https://sourcegraph.com/github.com/junit-team/junit4?badge)</pre>

<div className="thanks">
  Thanks to Dan Adler and Quinn Slack.
</div>

### About the author

_Beyang Liu is the CTO and co-founder of Sourcegraph. Beyang studied Computer Science at Stanford, where he published research in probabilistic graphical models and computer vision at the Stanford AI Lab. You can chat with Beyang on Twitter [@beyang](https://twitter.com/beyang) or our community [Discord](https://discord.com/invite/vqsBW8m5Y8)._
