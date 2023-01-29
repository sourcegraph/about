---
title: 'The New Era of Go Package Management'
authors:
  - name: Sam Boyer
publishDate: 2017-07-14T00:00-07:00
tags: [
  "gophercon"
]
slug: the-new-era-of-go-package-management
description: 'The new era of package management.'
heroImage: https://images.ctfassets.net/le3mxztn6yoo/4DunlnWOzY0cOGGKmKCsYU/ec2e2a0acdcbf616c1359c62f2531655/Boyer-1.png
published: true
---

> NOTE: Since this talk was given and this liveblog post was written in 2017, Go has introduced Go modules, which have become the standard system for package management in the Go ecosystem.

Liveblog by Alan Shreve ([@inconshreveable](http://twitter.com/inconshreveable))

**Update: Slides for this talk have been posted [here](https://github.com/gophercon/2017-talks/tree/master/samboyer-TheNewEraOfGoPackageManagement)**.

![Boyer-1](//images.contentful.com/le3mxztn6yoo/4DunlnWOzY0cOGGKmKCsYU/ec2e2a0acdcbf616c1359c62f2531655/Boyer-1.png)

### Author
Presentation by Sam Boyer [@sdboyer](https://twitter.com/sdboyer).

Sam fell into software engineering by accident, but decided to stick around. He loves complex, ecosystem-class problems, cares deeply about building healhty communities, and is always looking for ways to bring technology's enormous potential to bear on the world's critical problems. Nowadays, he's a Site Reliability Engineer at VividCortex.

### The new era of go package management
The new era of package management - we've all been waiting for it. We're on the road towards official tooling for package management. It's going to be a real sea change for Go development.

### What is package management
Let's all be on the same page about what package management is:

Step 1. Write Code

Step 2. Pull in other people's code

Step 3. PAIN

![Boyer-6](//images.contentful.com/le3mxztn6yoo/otN1gvACECYOUiAymSO0/f56a803119875262311ea1544ea94dfb/Boyer-6.png)

Package management is primarily about:
- Reproducibility
- Managing updates from upstream

Package and dependency management is technically different, but we'll talk about them interchangeably here.

Package management: we don't want to deal with it, not fun.

![Boyer-8](//images.contentful.com/le3mxztn6yoo/4j9E4r6figiOSa6CEa4K0u/8e437538999f65293e1c302166d199ef/Boyer-8.png)

Package management is more than just tech. We're talking about building tools that interact with other developers. Not just a technical problem. Tools -> Social Systems.

Just like how telephones have changed our social systems, dependency management systems change our social systems. Dependency management makes boring social systems but they are still important because they are the mediators of coordination between people writing software.

Analogy with pidgin languages: A pidgin is a new language that emerges when two unintelligible languages meet. They usually emerged around trade routes. No one speaks them natively (pidgin language by definition). Pidgins are not a great tool for culture. Dependency management in Go was like a pidgin language. There was no official tooling, similar to the lack of official language when pidgins emerged. Two parties trying to coordinate dependencies used or built whatever tools best suited them, but there was no overall community buy-in.

Community buy-in and a standard tool is exciting because the quality of software will be better with an official coordination tool or 'language.' We're looking forward to more than a new era of package management, we're looking forward to a new era of Go.

### The challenges of Go package management
Let's talk about the fundamental problems in Go package management.


![Boyer-14](//images.contentful.com/le3mxztn6yoo/2JsY28RBYsAg6ew0UmcQuE/9180431963d2e4f939e91de57d65094a/Boyer-14.png)

- If two packages want to rely on different version of a shared dependency
- No reproducibility, go get only cares about tip
- The official tooling only caring about tip means as a community we don't care about releases
- Since we don't care about releases we don't have a sane way to think about updates

The Go community has worked around it with discipline:
- Try not to use dependencies unless they are absolutely necessary
- Maintainers make great efforts to not change APIs

### History of Go package management

#### Timeline
- 2013: Godep
- 2014: glide gopkg.in
- 2015: gb, govendor

#### Tools
- Godep: originally about reproducibility, restore/save your GOPATH
- gopkgin.in: putting version information in the URL
- gom, glide: modeled after tools in other languages
- the vendor directory

#### Vendor
- 2015: vendor added, off by default
- 2016: vendor on by default
- 2017: vendor always on

Vendor is not without its own problems:
- Nested vendor directory problems.
- Creates type incompatibilities.
- Causes problems with global state of packages or init() packages that are duplicate.

These problems became very prominent when vendor was enabled by default.

#### State of Go package management in 2016
![Boyer-15](//images.contentful.com/le3mxztn6yoo/7oMLrVOphKwKG8oeCGqkUk/616e4d00ef6cb7b92f725518e2587fde/Boyer-15.png)
Too often, when trying to create a unifying standard, we just create another competing standard. It's a testament to the awesome Go community that we are not creating a 15th standard, but one that we will be adopting together.

So we started an initiative to put together a group of Go community leaders to work on package management. The task was to take community feedback, write design docs, and understand competing concerns with respect to package management.

### Constraints of the Package Management Working Group
- Build a working prototype for what dependency management in Go should become
- Try not to add new rules or problems
- Make migration from existing systems as minimal and painless as possible
- **Most important**: Obtain community buy-in for the vision


## github.com/golang/dep

This is the result. We call it 'The Official Experiment'. Those words are carefully chosen.

There was a huge amount of community participation in the mailing list while it was developed.

### dep fundamentals
![Boyer-21](//images.contentful.com/le3mxztn6yoo/6ccYB122g8A2oaSygSy8C2/39ad5fe56ad4426c35457c73a6d0f4ca/Boyer-21.png)
- Borrows from others, but tailored to go
- Imports are queen
- Two-file system: Gopkg.toml/Gopkg.lock (gives us reproducibility)
- Project-oriented
- Semver tagging
- Vendor-centric, built around working with the vendor directory

### The three commands of dep
![Boyer-22](//images.contentful.com/le3mxztn6yoo/63wnQmvMdOWKuiaEAioQsA/138b2f336b351672060f78cd15efccff/Boyer-22.png)
- status: what is the current state of the project on disk?
- init: create a new project, automated logic to port older formats like Glide and Godep to the dep system
- ensure: the most important command

### dep ensure
![Boyer-23](//images.contentful.com/le3mxztn6yoo/GoSs9l6DEQoKg8uoai6y6/fdb1c0201e82d2b15a414f2227b0b807/Boyer-23.png)

ensure command keeps state in sync. ensure is about making sure the states are in sync according to the defined rules. The whole dep tool is designed around state resolution instead of requiring the user to issue many imperative commands. This means it is a very opinionated tool. So much so that we have our own mascot.

![Boyer-19](//images.contentful.com/le3mxztn6yoo/1ovAGroo6Eq82QI0GaGqYW/d12565c126d1bae7ba801f4e7cf9cc18/Boyer-19.png)

The ensure model is leaking into other communities' dep tools (like npm).


### dep moving forward

dep is at the center of where we are right now, but it's not the end goal. the end goal is to move this functionality into the official toolchain. Everything is being designed with the intent that it we would like it to eventually become part of the Go toolchain.

In this way dep is a stepping stone. This is the first time we're looking at eventually bringing a huge amount of third-party community code into the official toolchain. This is uncharted territory and still a very big experiment.

One key insight from dep: what we're discussing is a third space beyond vendor & GOPATH. A third space would have a versioned set of packages on disk.

### dep TODO list
![Boyer-32](//images.contentful.com/le3mxztn6yoo/2bkFZZdlKUOaiaea8KQYs6/17a5fd9b0d17fb77397f1ee76663c287/Boyer-32.png)

- Multi project workflow. How do i work on two projects locally that depend on each other?
- Semver sugggestion tool: example from elm. Codifying the Go 1 guarantee about what you're allowed to change
- Plus a lot more

### Help dep needs from the community

- Please, please tag your projects with semver
- Convert your projects to dep. It's READY for production. Guaranteed backwards compatibility of the file formats
- Scripting on top of it: hold off for a little bit because the CLI options may change some
- Please come contribute to the dep project!

The MIT license:
"FITNESS FOR A PARTICULAR PURPOSE" is not guarantee. we're here because that's true. That's true of all code and its an inherent complexity in working in software. dep management can't remove that problem, but it matters because it can make that complexity assailable. The dep complexity burden is something that good tools can help you tame.

dep lives up to theatgoal of managing the complexity.

Huge thank you's to all the maintainers and contributors to all Go dependency management tools. And thank you to the Go team for their trust and especially to the community for helping make this project a reality.

![Boyer-36](//images.contentful.com/le3mxztn6yoo/1XjIWIu3gQyYGQoO4MUgIA/13cb643b2e6505af86f527557898e977/Boyer-36.png)
