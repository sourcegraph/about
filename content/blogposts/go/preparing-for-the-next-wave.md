---
title: 'Preparing for the Next Wave'
authors:
  - name: Brian Ketelsen (speaker)
publishDate: 2017-11-06T20:30+01:00
tags: [
  "dotGo"
]
slug: preparing-for-the-next-wave
heroImage: https://images.ctfassets.net/le3mxztn6yoo/40NFOZBGkgG6IyKoMgQIGg/c1626b318de4be28314cbdc989a01525/logo-dotgo-black-web.png
published: true
---

Go has enjoyed success as a language for writing services and command line applications.  But that success has largely been contained to Open Source enthusiasts and startups.  In this talk I’ll discuss the next wave of developers coming to Go, and what we need to do to be ready for them.

Note: This post was live-blogged at [dotGo 2017](https://www.dotgo.eu/). Let us know on Twitter ([@sourcegraph](https://twitter.com/sourcegraph)) if we missed anything. All content is from the talk; any mistakes or misrepresentations are our fault, not the speaker's.

### Enterpise software

The enterprise is moving towards OSS. For example 40% of VMs on Azure are
Linux. Is Go moving towards the enterprise?

For desktop market share as reported by browsers we have 85% Windows, 11%
Apple and 2.5% Linux. It's a numbers game. We are doing a disservice by
deprioritizing Windows and Enterprise bugs in Go, given the market share.

Enterprise developers are different. Different to OSS developers due to
different boundaries and requirements. Also enterprise software has refreshing
constraints compared to OSS software. For example the user is known. The
platform is known, both for deployment and consumption. And the data sources
are known, and constrained (Oracle or MSSQL).

### Enterprise checklist

* Performance
* Scalability
* Robustness
* Interfaces to other Enterprise Software
* Centrally managed
* Frameworks and Ecosystems

Go ticks the box for the first three. However for interfaces to other
enterprise software it is lacking or missing in action. For example there is
no solid (MSSQL, Orcale, Sybase, etc) drivers nor solid LDAP/AD integrations.

Go also usually does not do well for centrally managed. Go applications
usually follow the 12 Factor way were you rely on your service being cattle
not pets. This means to change configuration you update a config and re-deploy
the service. However, for enterprise they usually prefer a central
configuration management service (ie Active Directory) which when changed live
updates applications listening for the configuration. This is possible in go,
but not often practiced. Also logging in go is not great, but can be solved by
just having a `Logger` interface in the stdlib.

### Suggestions

* Fix logging in go 2.0 (just an interface)
* Think above the toolkit level (need spring-boot for Go)
* Tag your releases, use dep

### Announcements

Where is why's poignant guide to Go? (helpful resources for
newcomers). Announcing [learn-golang.com](https://learn-golang.com). A call
for help in translating. Goal is 18 languages.

Go is lacking something like Apache Commons in Go, which consolidate and
standardized useful third party code. So announcing
[gopher.rocks/commons](https://gopher.rocks/commons) to curate packages like
Apache Commons.
