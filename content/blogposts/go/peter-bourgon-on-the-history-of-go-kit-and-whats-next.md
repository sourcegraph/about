---
title: "Peter Bourgon on the history of Go kit and what's next"
authors:
  - name: Beyang Liu
    url: https://twitter.com/beyang
publishDate: 2017-07-12T00:00-07:00
tags: [
  "gophercon"
]
slug: peter-bourgon-on-the-history-of-go-kit-and-whats-next
heroImage: https://images.ctfassets.net/le3mxztn6yoo/4cWREdTh1uK4Wm60CgCYUQ/6f763d940fb0192f25b7a3d22b3a02e2/bourgon.jpg
published: true
---

[Peter Bourgon](https://twitter.com/peterbourgon) is the creator of Go kit.

Strong majority of audience here has heard of Go kit.

## What is Go kit?

Go kit is a toolkit for microservices. In the early days, that meant something very specific at SoundCloud (where Peter worked at the time). They were using Finagle for microservices, but there wasn't a Go equivalent, so Go started to lose favor among the team. Peter started Go kit to address that issue. Today Go kit works for both strict microservices architectures and also "elegant monoliths" (monoliths that are separated nicely into separate modules).

github.com/go-kit/kit has 7,253 stars.

In the early days, he based it on Finagle at a high level. In the early days there were RFCs to fill in the details and get useful feedback / discussion from the community. Using examples was key in grounding these discussions. Overall structure of the project hasn't really changed. They continued like this until June 2016 without any tagged versions.



## A brief history of Go kit

Initial commit: 3 Feb 2015.

### June 2016

- 62 contributors
- Open tracing stuff (zipkin, [lightstep](https://github.com/lightstep))
- First tagged version
- go-kit log

### v0.2 to v0.4

- "package go-kit log: this is how logging should work in Go"
- mapping from xnet.context to std lib context
- lots of bug fixes
- some breaking changes

### v0.5: big release

- worked closely with yuri at Uber (jager and zap logger) to overhaul package sd. Uber apparently uses Go kit and package sd for most of their internal Go microservices
- some breaking changes, but v0 ¯\_(ツ)_/¯

### Today (v0.6.0)

- shooting for October-ish release date
- want to refactor package metrics; doesn't like using it in current state

### v1.0.0

- targeting Jan 2018 release (no promises!)

## TODO

People have asked for

- package metrics refactor
- kitgen (tackling verbosity problem in Go kit). Looking for people to take Peter's vision and translate to code (he can't handle dealing with Go AST package)!
- different transport protocols (rabbit, nats, kafka, sqs)
- gRPC streaming
- Whatever people at this meetup ask for!

## Governance and call for contributors

- BDFL is okay so far, but it can be slow at times
- would love to delegate more than in the past; makes sense to delegate on a per-package basis. Precedent is Chris Hines' work on and ownership of package log, Bas van Beek on transport/grpc and tracing
- So if you want to contribute to a 7,253-star project, reach out!

![bourgon](//images.contentful.com/le3mxztn6yoo/4cWREdTh1uK4Wm60CgCYUQ/6f763d940fb0192f25b7a3d22b3a02e2/bourgon.jpg)

### About the author

_Beyang Liu is the CTO and co-founder of Sourcegraph. Beyang studied Computer Science at Stanford, where he published research in probabilistic graphical models and computer vision at the Stanford AI Lab. You can chat with Beyang on Twitter [@beyang](https://twitter.com/beyang) or our community [Discord](https://discord.com/invite/vqsBW8m5Y8)._