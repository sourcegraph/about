---
title: 'JP Robinson of NYTimes on Go kit, Gizmo, and Marvin'
authors:
  - name: Beyang Liu
    url: https://twitter.com/beyang
publishDate: 2017-07-12T00:00-07:00
tags: [
  "gophercon"
]
slug: jp-robinson-of-nytimes-on-go-kit-gizmo-and-marvin
heroImage: https://images.ctfassets.net/le3mxztn6yoo/2fNM9V86sAGw4aQQIWUqGk/5c761b436ece37c070532d327a8cd2bb/jp_robinson.jpeg
published: true
---

[JP Robinson](https://twitter.com/jprbnsn), principal engineer at the New York Times, has "drunk Peter's koolaid" with respect to Go kit.

github.com/NYTimes/gizmo adapts Go kit for use inside a production ecosystem with a bunch of existing legacy services. The NYTimes uses it across almost all their production Go services.

## About the New York Times engineering

* traffic increasing (#trumpbump)
* lots of microservices, but also some monoliths

gizmo is a complementary package for Go kit that "meets it in the middle."

Go running in production at NYTimes for personalization, saved articles, messaging and email systems, multi-armed bandits (presumably for ads?), analytics and suggestions, guides and how-to, My Account pages.

As we've grown, we've needed to consolidate and standardize on ways of doing things. Would love to use Go kit as it is, but there are some issues. Some of Go kit's explicit non-goals are gizmo's goals. For example:

* Go kit non-goal: supporting messaging patterns other than RPC. But NYTimes needs to support messaging patterns other than RPC
* Go kit non-goal: be opinionated. But NYTimes needed a somewhat opinionated framework at NYTimes to unify a bunch of disparate services.

## gizmo packages

- gizmo/server/metrics (based on Go kit metrics)
- gizmo/pubsub

As time goes on, gizmo's packages are starting to look more and more like Go kit's. More and more of their developers are using Go kit.

Just open sourced github.com/NYTimes/marvin, a go-kit HTTP server for the App Engine Standard Environment. Similar to gizmo, tries to give you a composed framework for what a web server looks like.

![jp robinson](//images.contentful.com/le3mxztn6yoo/2fNM9V86sAGw4aQQIWUqGk/5c761b436ece37c070532d327a8cd2bb/jp_robinson.jpeg)

### About the author

_Beyang Liu is the CTO and co-founder of Sourcegraph. Beyang studied Computer Science at Stanford, where he published research in probabilistic graphical models and computer vision at the Stanford AI Lab. You can chat with Beyang on Twitter [@beyang](https://twitter.com/beyang) or our community [Discord](https://discord.com/invite/vqsBW8m5Y8)._
