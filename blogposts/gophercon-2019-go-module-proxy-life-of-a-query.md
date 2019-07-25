---
title: "GopherCon 2019 - Go Module Proxy: Life of a query"
description: "The Go team has built a module mirror and checksum database, which adds reliability and security to the Go ecosystem. This talk discusses the technical details of authenticated module proxies, following the journey of a request through the go command, proxy, and checksum database."
author: $LIVEBLOGGER_NAME for the GopherCon 2019 Liveblog
publishDate: 2019-07-25T00:00-14:00
tags: [
  gophercon
]
slug: gophercon-2019-go-module-proxy-life-of-a-query
heroImage: /gophercon2019.png
published: false
---

Presenter: Katie Hockman

Liveblogger: [\$LIVEBLOGGER_NAME]($LIVEBLOGGER_URL)

## Overview

The Go team has built a module mirror and checksum database, which adds reliability and security to the Go ecosystem. This talk discusses the technical details of authenticated module proxies, following the journey of a request through the go command, proxy, and checksum database.

---

## Introduction

Katie Hockman, a software engineer at Google working on the Go Open Source team in NYC, is part of the group of engineers building the Go module mirror and checksum database.

Her talk is about some new things that are happening around package management and authentication in Go. Katie wants to help you understand how these things work at a more tangible level.

## Some background

Katie absolutely adores dogs.

She wanted to create a set of Go packages that help other people be better dog owners.

Because if dogs are happy, Katie's happy.

She begins to create a new [repository](https://github.com/katiehockman/puppies) on Github, and starts creating Go packages for all of the source code that she wants to provide.

She creates [walk](<(https://github.com/katiehockman/puppies/tree/master/walk)>), a package that can algorithmically decide the best dog walking route in your neighborhood.

She then creates [bark](https://github.com/katiehockman/puppies/tree/master/bark). A package that can tell you what your dog is thinking based on the audio you provide from their bark.

Finally, she creates [toys](https://github.com/katiehockman/puppies/tree/master/toys). A package that reminds you to buy a new toy for your dog every week, so he never gets bored.

There are a lot of APIs the code has to depend on though. She needs dependencies for storage, audio processing, and Maps APIs.

But she has some concerns.

1. She's worried she’ll have challenges with non-reproducible builds. She's relying on a brand new API endpoint for the Maps Service that she's using. If the people that import her package are using an old version of that API, then things are going to break for them, and she has no way of guaranteeing that their builds will be consistent.
2. The owner of the audio detection package that she depends on might just get fed up with managing it, and decide to pull the code from github overnight. Now all of her builds are broken, and she's really stuck.
3. Even worse! There’s a cat person out there that’s trying to do harm, and they’ve hacked the origin server that holds some of the source code she depends on. All of a sudden, she's receiving the wrong code, and her packages are no longer working reliably. This malicious code that she got from a hacked origin might be really dangerous, and by the time she figures out what’s happened, it might be too late!

There are few things she might consider here in order to protect herself and the people that depend on her code.

1. Maybe she’ll just stop having dependencies altogether. But that’s really hard, because she would have to write a bunch of code from scratch, and she wouldn’t be able to reproduce some of the APIs that she depends on, so the quality of her code would suffer.
2. She could just vendor all of her dependencies, but that inflates the size of her repository, and she's worried that it will be difficult to maintain and update over time.
3. Or, she might just decide to do nothing at all, and put her trust in the state of things as they are today. Trust that her dependencies won’t disappear, and github and other code hosting sites will always give me and all the people that use her code what are asking for. But honestly, that’s more trust that she's really comfortable with.

She has some options, but none of them solve all of the problems without creating new problems and risks of their own.

So let’s explore some better solutions that popped up recently within Go.

1. Modules can help us with our reproducible build problem
2. Module Mirrors can help to eliminate the risk of disappearing dependencies
3. A checksum database can help to eliminate the risk of getting the wrong code, making sure that every Go developer in the world gets the same code every single time.

These three things: modules, mirrors, and a checksum database are what I’m going to talk about today.

---

## Better Solutions: Modules

A module is a versioned set of Go packages that are related to one another in some meaningful way.

A module’s version has a major, minor, and patch component to make up it’s semantic version.

In her repo, she has a few Go packages. Package walk, package bark, and package toys. These packages are all very related to one another, and share a lot of the same dependencies. She put each of these packages in a single module that can now be versioned.

In the go.mod file:

```go
module github.com/katiehockman/puppies

require (
	github.com/maps/neighborhood v1.4.1
	github.com/audio/dogs v0.19.2
	golang.org/x/crypto v0.0.0-20190308221718-c2843e01d9a2
)
```

Semantic versioning
Immutable!
Backwards compatible!

go.mod file at root
psudo versions

minimal version

a and b module relies on

should a rely on v1.5, b on v1.6

go command uses oldest?

### Better Solutions: Mirror/Proxy

What happens should dependencies disappear?

Module Mirrors can help to eliminate the risk of disappearing dependencies
A checksum database can help to eliminate the risk of getting the wrong code, making sure that every Go developer in the world gets the same code every single time.

go get

1. fetch the source
2. resolve dependencies

without proxy, expensive

now look into telling go to get through proxy

go get breeds -> proxy /list
proxy says here are the versions
go command is looking for latest tag version
proxy /info gives info of version
get version.mod file from proxy
now go get the source (its a zip file)

what is this info file?
lets take a look at a case without
no list, straight to info. gets latest version.

proxy spec, run
`go help goproxy`

mirror = proxy (+ caching)

why use mirror

- no more disappearing dependencies
- faster downloads
- less storage (only gets whats needed)
- easy to use

### Better Solutions: Checksum Database

the old way direct https
the new way, go.sum files
what is go.sum files? its in root, sha hashes, generated by go command
can have modules that are not in mod files
check in the modules go.sum files, don't gitignore
say mod file goes away, generate another, sum is modified, wait, why is sum modified?? malicious?

trust on your first use (your sum file is your source of truth)

risk, proxies. whos to say the proxy is going to give you the code requested?
what happens when proxy gives you something else apart from the same request a month ago?

the best possible scenario
lets agree to use the same go.sum lines
create a global checksum

how about a database?
problem go somewhere else (evil cat people)

auditing a database is expensive and error prone
should not have to check the checksum db

transparent log, tree structure (merkle tree)
tamper proof

once record in a log, can never be modified. if it is, know right away bad things happened

we all want the "correct" code

inclusion proof, consistency proof

inclusion proof
go sum lines are green
16 records
go.opencensus.io
compares tree head hash
lookup/go.dog/breeds@v0.3.2
new tree head consistant with old tree head
inner nodes, tiles!
tiles are nice, cache friendly, less storage
cache every 8th level of the tree

\$GOSUMDB/lookup/M@V

go.sum database tree
<size>
<hash of tree head>

back to proxy

lookup of module version
get tile

trust on ~your~ anyone's first use

Why use the checksum database?
validates untrusted proxies
mitigates hacked origins
prevents author error
easy to use (repeated throughout, things be easy)

## Setup your Environment

enabled by default 1.13

### Environment Variables

GO111MODULE="on" for everywhere, or auto
GOPROXY="https://proxy.golang.org,direct" // comma separated list of proxies to try

### Private Modules

GOPRIVATE="\*(glob).some.private.proxy.com"

## Nice Things

### Trillian - Datastore

[trillian](https://github.com/google/trillian) is a transparent, highly scalable and cryptographically verifiable data store.

### Discovered Modules Index

https://index.golang.org/

An index which serves a feed of new module versions that become available by proxy.golang.org. The feed can be viewed at https://index.golang.org/index.

Example:

https://index.golang.org/index?since=2019-03-04T18:00:15.161182-07:00
https://index.golang.org/index?limit=10

## The Futur of Go

go team would love to hear about its use, file issues.

## The End

Katie Hockman [@katie_hockman](https://twitter.com/katie_hockman), Google Go Open Source

[github.com/katiehockman](https://github.com/katiehockman)

You may find the slides [here](https://github.com/katiehockman/puppies/blob/master/presentation_slides.pdf).
