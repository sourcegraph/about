---
title: 'GopherCon 2018 - Go in Debian'
authors:
  - name: Larry Clapp for the Gophercon Liveblog
publishDate: 2018-08-29T00:00-06:00
tags: [
  "gophercon"
]
slug: gophercon-2018-go-in-debian
description: 'Using Go in and with Debian'
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5Oj3acpp7yysQg04W2AW4A/a93d79c10ad903d3902f6b6d8707973a/mechanic-tire-2.jpg
published: true
---

Presenter: [Michael Stapelberg](https://www.gophercon.com/agenda/speakers/279057), stapelberg@debian.org
Creator of the i3 Linux window manager

Liveblogger: [Larry Clapp](https://twitter.com/readcodesing)

Using Go in and with Debian

## Summary

Debian services and tools written in Go.  Developing and packaging Go software for use in Debian.  Upstream best practices.

---

This is a broad overview, not tons of detail.  Happy to chat about any of it.

## Intro to Debian

Debian is an OS; most popular is Debian GNU/Linux, first announced in 1993

Many derivatives, most popular is Ubuntu

## Debian services written in Go

### codesearch.debian.net

regexp search on all software in Debian.  Find examples, usages, definitions, etc.

Based on Russ Cox's ["Regular Expression Matching with a Trigram Index"](https://swtch.com/~rsc/regexp/regexp4.html)

### manpages.debian.org

All of Debian's man pages.  Launched 2017, using mandoc.  Good internationalization thanks to [golang.org/x/text](https://godoc.org/golang.org/x/text).

Fairly advanced cross-referencing.  So if a link from a Norwegian manpage points to another page not yet translated to Norwegian, they can link to the Swedish version instead.  (Norwegians can also read Swedish.)

## Completeness graph

![image](https://user-images.githubusercontent.com/2324697/44814759-e6c84d00-ab9a-11e8-8b1e-b5427e556a24.png)

Debian is green all the way across.  Most other man page archives on the web are red.

Converts 500k manpages in the archive in about 30 minutes.
* Good for quick disaster recovery; increases developer velocity.  They've found it's faster to regenerate from scratch than restore from backup.
* Easy to eliminate bottlenecks in Go
    * pprof invaluable
    * scaled from machines from 2008 to modern laptops (2018)

## Debian tools in Go

### ratt

Rebuild All The Things!

Departure from the usual "Debian way".  Find issues before you upload your changes.  ratt identifies and builds reverse-dependencies.

### pk4

Get source for a given package, e.g. given the path of a binary that comes in the package.
Fairly painless way to build Debian packages & inspect source.

### Programmatically working with Debian in Go

These are Go packages to work with Debian packages.

https://pault.ag/go/debian
* read .deb files
* parse/compare version numbers
* read changelog/control metadata
* calculate dependencies

https://pault.ag/go/archive
* Debian apt archives (e.g. ftp.debian.org)

## Go software in Debian

The big hitters, of course: Docker, Influx, k8s, Prometheus, etc.  Lots of other stuff, though.

Debian Go packaging team — 64 volunteers.  Anyone can contribute; no formal status needed.  Don't need to be a Debian project member, even.

### Packaging workflow

* Create tarball from a source code management system (e.g. git).  Add Debian metadata (copyright, dependencies, etc).
* Optional: Patches.
* Build the package: [dpkg-buildpackage](https://manpages.debian.org/stretch/dpkg-dev/dpkg-buildpackage.1)

### 2 types of Debian packages

* Programs
    * compile source, add manpages, etc
* Libraries
    * more Go-specific stuff here
    * source in /usr/share/gocode
    * only used for building Debian programs.  Different from e.g. Python
    * don't use these libs for your own development

#### Tooling

* ch-make-golang — largely automates package creation
* edit-build-test cycle
    * upload once satisfied
    * lintian identifies issues
* package / update transitive dependency tree first!  this is the real bulk of the work

#### Scaling issues

Updates to one lib may break the libs or programs
Continuous Integration
* pgt-gopath; build/test; about 30s for changes to small packages.  Go's test & compilation speed really pays off here.
* automate updates to new versions?  maybe.  CI coverage needs to be high enough; sometimes it's not

## Upstream best practices

How can you help make life easier for Debian folks?

### Few dependencies

* Like Go, in Debian, a little copying is better than a little dependency.  Take it to heart.  Even more so in Debian than in Go.
* Dependencies are way more costly in Debian
* dh-make-golang can tell you if your dependency is already packaged

### Use the go tool

* Do not require custom build systems
* Debian's tooling uses the go tool.  If you don't, that gives them extra work
* Don't use custom build tags

### Test w/out vendoring

* Debian always throws away vendor/.  So you should test w/out vendor, too.
* Corollary: Never modify vendor/ contents

## Challenges

### Portability

Debian builds for many architectures, some fairly obscure (IBM s/390 anyone?).  Debian usually finds portability issues before upstream does

### Diamond problem

* package A requires a newer B,
* but pkg C is broken by newer B
* Semantic Import Versioning should help

### Not enough volunteers!  🙂

## Links and feedback

[Send feedback (Google form)](https://goo.gl/forms/FCofEup7nLb6VXXp1)
https://go-team.pages.debian.net/
Talk to Michael for questions!  He's friendly.

## Links and more code

* codesearch.debian.net
* https://github.com/Debian/debiman
* https://github.com/Debian/dcs
* https://github.com/Debian/ratt
* https://github.com/Debian/pk4
