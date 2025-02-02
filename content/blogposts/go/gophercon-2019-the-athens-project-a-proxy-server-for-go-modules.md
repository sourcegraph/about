---
title: "GopherCon 2019 - The Athens project: A proxy server for Go modules"
description: "Go 1.11 was a big release for all of us because we got a new package management system called modules built right into the go CLI. If you tried out vgo before 1.11, you'll be familiar with modules. There's some really cool stuff in there, but there's one piece that a lot of us missed that we need to pay special attention to: the download API."
authors:
  - name: Christina Forney for the GopherCon 2019 Liveblog
    url: https://handbook.sourcegraph.com/team/#christina-forney
publishDate: 2019-07-26T00:00-09:10
tags: [
  gophercon
]
slug: gophercon-2019-the-athens-project-a-proxy-server-for-go-modules
heroImage: https://about.sourcegraph.com/gophercon2019.png
published: true
---

Presenter: Aaron Schlessinger

Liveblogger: [Christina Forney](https://linkedin.com/in/christinaforney/)

## Overview

Go 1.11 was a big release for all of us because we got a new package management system called modules built right into the go CLI. If you tried out vgo before 1.11, you'll be familiar with modules. There's some really cool stuff in there, but there's one piece that a lot of us missed that we need to pay special attention to: the download API.

---

![Athens gopher](/gophercon-2019/gophercon-2019-athens-gopher.png "Athens Gopher")

Modules solved a lot, but _there's still work to do._

## Dependency management

- `go get` fetches dependencies by doing a git clone against VCS systems - It is simple, and works well
- **The problem:** - VCS is designed for iterating code - Entropy grows as our community grows - The risk of more apps breaking is growing too

### How to break a Go app

When you don't have access to the Go modules you need for your app, everything falls apart. Here's how that can happen:

- `git push —delete origin v1.0.2`
- Delete repo
- `s/myrepo/MyRepo`
- GitHub outage

## The Athens Project

Aaron Schlesinger is a core maintainer of the Athens project, works at Microsoft rewriting Windows 95 in Go. Athens helps them remove the risk.

### The module download API

This tool fixes these issues and is purpose-built for Go dependencies.

It is 5 REST API endpoints:

1. List versions
   - `GET /github.com/my/module/@v/list`
2. Get latest version
   - `GET /github.com/my/module/@latest`
3. Get the mod file
   - `GET /bitbucket.com/my/other/module/@v/v1.0.0.mod`
4. Get basic module metadata
   - `GET /bitbucket.com/my/other/module/@v/v1.0.0.info`
5. Get module code frozen at a version, in a zip archive
   - `GET /repo.internal/my/third/module/@v/v1.0.0.zip`
   - This is not a git tree, it's source code frozen at a version

### The abstraction layer

- With the API, we built an abstraction layer between the VCS and the client

![API Abstraction layer](/gophercon-2019/gophercon-2019-athens-api-abstraction.png "API abstraction layer")

- This allows us to separate code in development from dependency assets, ultimately leading to stable builds

### Artifact registry

- A registry is still a single point of failure
- Things are hosted on servers now, and not from VCS, but if we ONLY have them and the internet is not available, we still have issues.

## The Athens Solution

- Implements the module API the same way that proxy.golang.org does
- It's an open source version of the Go proxy
- You run it yourself, so you control it yourself
- It will continue to work when GitHub or any other SPOF is down

![Athens API Abstraction](/gophercon-2019/gophercon-2019-athens-local-layer.png "Athens API abstraction")

### Why run your own?

- You can download dependencies without internet!
- The technical reasons: - Privacy - Auditing - Isolation

## Decentralization

- Keep in mind: APIs stay open because of participation - If we don't use the API (cast our votes to keep it open), it may as well be closed - doesn't matter if there is only one implementation, it's not - CALL: Go try Athens, go try Athens, get involved in the Athens community. - Make your stuff work with the rest of the ecosystem. - Benefits - Dependable builds - Keep our ecosystem growing at an amazing rate - Privacy benefits
- If you want to contribute to Athens - absolutely everybody is welcome! - # athens on Gophers Slack - We will help you get started into the community
- To get inovled: - docs.gomods.io we have instructions on how to get started - Get it running locally with docker or using our binary - Come into the Athens channel on Gophers Slack - Get help submitting your first PR - Ask questions - Meet the community
