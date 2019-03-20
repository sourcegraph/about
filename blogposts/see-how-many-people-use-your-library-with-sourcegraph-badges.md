---
title: 'See how many people use your library, with Sourcegraph badges'
author: 'Stephen Gutekanst'
publishDate: 2017-02-13T00:00-07:00
tags: [
  "blog"
]
slug: see-how-many-people-use-your-library-with-sourcegraph-badges
heroImage: /sourcegraph-mark.png
published: true
---



**Update (September 20, 2017):** Viewing a list of repositories that refer to another repository is currently disabled. It will be added back soon. Viewing function call sites across repositories is still supported.

As an open-source author, I love seeing who else uses my projects. It’s super motivating, and it makes the world of code feel more connected (hello to my library users in Azerbaijan and Nigeria and everywhere else!). As a user, this information helps me choose the best library to use. People usually rely on GitHub stars to see this information. But there’s a problem: **stars only tell you who’s interested in a project, not who actually uses it.**

Today, we’re introducing **Sourcegraph “used by” badges**, for you to show off how many people are using your library. Check out the sample badges below.

[![](https://cdn-images-1.medium.com/max/600/1*HsdQSNd9d9-aXvKveaw08w.png)](https://sourcegraph.com/github.com/gorilla/mux?badge)gorilla/mux, a powerful URL router and dispatcher for Go.[![](https://cdn-images-1.medium.com/max/600/1*lXn7AkgJp7oR-mlnqV7d8A.png)](https://sourcegraph.com/github.com/boltdb/bolt?badge)boltdb/bolt, an embedded key/value database for Go.

The badges pull from the Sourcegraph global code graph and use dependency information to calculate how many other repositories import code from yours. Badges are currently available for Go projects, with support for more languages coming soon! (See the [Sourcegraph Master Plan](https://sourcegraph.com/plan) for how and why we’re building this stuff.)

### How to add the badge

Adding a badge to your project is easy. Just add this Markdown to your README.md:

<pre name="41ad" id="41ad" class="graf graf--pre graf-after--p">[![Sourcegraph](https://sourcegraph.com/github.com/gorilla/mux/-/badge.svg)](https://sourcegraph.com/github.com/gorilla/mux?badge)</pre>

(Be sure to replace `github.com/gorilla/mux` with your own repository's name.)

_(Feb 13, 2017)_ Update: After popular request, we’ve also added the ability to customize the badge style. You can add any of the following to the end of the badge.svg URL:

*   `?style=plastic`
*   `?style=flat`
*   `?style=flat-square`

![1*k5hDGTDlyVE9Sq2Yy4i23g](//images.contentful.com/le3mxztn6yoo/3zCJURQMUUSsCQAkAkccmC/31590c2cf9c7b92eadc21ea60f250368/1_k5hDGTDlyVE9Sq2Yy4i23g.png)
