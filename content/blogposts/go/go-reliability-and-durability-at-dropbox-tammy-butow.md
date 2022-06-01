---
title: 'Go Reliability and Durability at Dropbox'
authors:
  - name: Tammy Butow
publishDate: 2017-07-13T00:00-07:00
tags: [
  "gophercon"
]
slug: go-reliability-and-durability-at-dropbox-tammy-butow
heroImage: https://assets.ctfassets.net/le3mxztn6yoo/4ODIg0jhskgiuQ0SgmaMsm/addc509ab1dff98eb6864bcee1740aad/Selection_012.bmp
published: true
---

[Tammy Butow](http://tammybutow.com/) ([@tammybutow](https://twitter.com/tammybutow)) is an Engineering Manager in Developer Infrastructure at Dropbox. Tammy manages code workflows—the entire experience of using Go at Dropbox, from coding to shipping. She talked at [GopherCon 2017](https://gophercon.com/speakers/14) about how Dropbox engineers build and run large-scale services in Go.

*Note: This post was best-effort live-blogged at the conference. Let me know on Twitter ([@sqs](https://twitter.com/sqs)) if I missed anything. Any mistakes or misrepresentations are my fault; Tammy's talk was excellent!*

---

# Dropbox's journey to using Go

Tammy cited Rob Pike's [Go at Google: Language Design in the Service of Software Engineering](https://talks.golang.org/2012/splash.article) from 2012 as being a great summary of why Go works well at Dropbox:

> "Go is efficient, scalable, and productive. Some programmers find it fun to work in; others find it unimaginative, even boring. In this article we will explain why those are not contradictory positions. Go was designed to address the problems faced in software development at Google, which led to a language that is not a breakthrough research language but is nonetheless an excellent tool for engineering large software projects." — [Rob Pike, 2012](https://talks.golang.org/2012/splash.article)

Dropbox's scale is massive:

* Over 500 million users
* 200,000 business customers
* 500 petabytes of user data
* Multi-exabyte Go storage system

As a result, Dropbox demands a lot from their systems, languages, and engineers. The guiding principles and requirements are:

* Build reliable systems
* Build secure systems
* Incorporate reliability and security into initial design
* Reliability of 99.9999999999% (twelve 9s)
* Availability of 99.99%

## State of Go at Dropbox

Today, most Dropbox infrastructure is written in Go. Specifically:

* The Go server repository has 150 unique contributors (out of 500 engineers total)
* 15\+ teams build and run Go services at Dropbox
* Company-wide, Dropbox has 1.3 million lines of Go

Some of the key systems written in Go are:

* RAT: rate limiting and throttling
* HAT: memcached replacement
* AFS: file system to replace [global Zookeeper](https://zookeeper.apache.org/)
* Edgestore: distributed database
* Bolt: for messaging
* DBmanager: for automation and monitoring of Dropbox's 6,000\+ databases
* "Jetstream", "Telescope", block routing, and many more

Many of these are successors to previous non-Go systems.

## How did Dropbox start using Go?

Tammy shared some stories of how Go usage grew organically at Dropbox.

### Hack week prototype of Go rate limiter

Before hack week one year, Dropbox engineers implemented rate limiting and throttling separately in each service that needed them. For hack week, a Dropbox engineer decided to build a common service implementation of these things. Thus RAT (*R*ate limiting *A*nd *T*hrottling) was born.

The initial RAT prototype was built in 4 days and demo'd on day 5. Within a few weeks of RAT being built, word spread. Another Dropbox engineer emailed Tammy's team to see how they could use RAT—from a Python project. This integration went smoothly, adoption grew organically, and RAT quickly became useful. Now several teams across Dropbox use RAT.

### DBmanager

Dropbox has 6,000\+ databases, and such a large system requires automation and monitoring. At any given moment, databases are undergoing replication, failing over, being promoted from replica to primary, etc.

To manage this, a Dropbox engineer built DBmanager, which is a web UI to quickly see what's happening among all 6,000\+ databases. It also publishes this status information to other systems.

### Upgrading Go versions at Dropbox

With hundreds of engineers, Dropbox coordinates Go major version upgrades carefully. Tammy didn't mention any particular pains from upgrading, which suggests the process is smooth!

Some interesting facts:

* Dropbox recently finished upgrading production services from Go 1.5 to 1.6.
* To track upgrade process, they created a simple [Dropbox Paper](https://www.dropbox.com/paper) document and had each service owner report progress and ask for help as necessary.
* Dropbox is skipping Go 1.7 and will upgrade to Go 1.8 when the Go 1.6 migration is completely finished (including non-production services).

# How Dropbox onboards new engineers to use Go

Every Dropbox engineer goes through the same rigorous Go onboarding process, consisting of:

* Readings on infrastructure topology, Go style guide, and the Protobuf style guide
* Strict but friendly code reviews
* Building a toy application (an app store) in Go
* [Learning Bazel](https://bazel.build/) for building and testing Go code

This onboarding process takes about a week for experienced engineers.

# What's going well with Go at Dropbox? And not going well?

Overall, Dropbox's usage of Go has been very successful.

* It's easy to be productive in Go.
* It's easy to write and consume services in Go. (And people enjoy doing both!)
* The standard library is very good.
* Debugging tools (mostly!) work well.

One key data point is that there's no effort at Dropbox to rewrite services from Go to another language, which is a sign that people are generally happy. (Tammy did toss out an intriguing piece of information: there is a little bit of Rust in use at Dropbox. But it's not being considered as a replacement for Go.)

## What does Dropbox find difficult about Go?

The biggest pain with Go that Tammy identified was in dealing with race conditions.

* Data races are the hardest type of bug to debug, spot, fix, etc.
* A few Dropbox engineers are especially good at spotting these, and other engineers lean on their expertise.
* The [Go data race detector](https://blog.golang.org/race-detector) doesn't always help. It's important to understand when it *won't* help you.
* It's important to carefully design the way your Go program will access data concurrently.

Dropbox hires engineers who care about reliability and durability, so this comes naturally to them (even though concurrency is perennially tough everywhere).

---

Thanks to [Tammy Butow](http://tammybutow.com/) ([@tammybutow](https://twitter.com/tammybutow)) for a fantastic talk. In addition to being a hacker and engineering manager, Tammy also founded [Girl Geek Academy](https://twitter.com/girlgeekacademy), a movement to teach 1 million technical women by 2025. Check it out!

![Selection 012](//assets.contentful.com/le3mxztn6yoo/4ODIg0jhskgiuQ0SgmaMsm/addc509ab1dff98eb6864bcee1740aad/Selection_012.bmp)