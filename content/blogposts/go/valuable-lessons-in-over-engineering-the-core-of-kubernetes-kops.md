---
title: 'Valuable Lessons in Over-Engineering the Core of Kubernetes kops, Kris Nova'
authors:
  - name: Kris Nova
publishDate: 2017-07-13T00:00-07:00
tags: [
  "gophercon"
]
slug: valuable-lessons-in-over-engineering-the-core-of-kubernetes-kops
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5iLZDFTA1GqO04yikSSGiY/87e9a7c0a36c9fd4546a8b38840cb54c/Selection_020.png
published: true
---


*This post was originally written as liveblog coverage of GopherCon 2017 by [@beyang](https://twitter.com/beyang). It has since been updated with the help of the speaker to include more detailed coverage of the technical details of the talk. Slides for this talk are available [here](https://github.com/gophercon/2017-talks/blob/master/KrisNova-OverEngineeringTheCoreOfKubernetesKops/slides.pdf).*

[Kris Nova](https://twittercom/kris__nova), of Microsoft, shares lessons on the dangers of over-engineering from her experience contributing to Kubernetes kops. In her spare time, she runs a Kubernetes Special Interest Group bringing Kubernetes to AWS, all while working on Microsoft ACS. She's writing a book called Cloud Native Infrastructure. She has contributed to the Go core codebase and helps moderate community discussions.


She begins by asking, "Who here has used Kubernetes in production?" Almost everyone in the packed room raises their hand.



## Kubernetes kops

[Kubernetes kops](https://github.com/kubernetes/kops) is short for "Kubernetes Operations". It's a cluster management tool. Think of it like `kubectl` but for clusters.

> kops models a cluster, then realizes it in a cloud

It's a statically linked CLI tool written in Go that imports the Kubernetes libraries (`import "k8s.io/kubernetes"`).






For the sake of this talk, think of Kubernetes as this wonderful, beautiful API, black-boxed. kops calls into that API to translate your config files into a working cluster.

kops takes you from a cluster definition to a working Kubernetes deployment in the cloud.

Here's what some of the configuration YAML looks like:

```yaml
apiVersion: “kops/v1alpha2”
kind: “Cluster”
kubernetesVersion: “1.7.0”
networkCIDR: “172.20.0.0/16”
masterPublicName: “api.nivenly.com”
```










### How does kops work?

Roughly, here's what it does:

![Selection 020](//images.ctfassets.net/le3mxztn6yoo/5iLZDFTA1GqO04yikSSGiY/87e9a7c0a36c9fd4546a8b38840cb54c/Selection_020.png)

1. State store: the declarative model of what the cluster looks like
1. Unmarshal structs: unmarshals configuration into Go structs
1. Map: maps these structs to tasks
1. Tasks: generate a list of tasks that should be running in production
1. Compare new tasks with current tasks running
1. Reconcile: make necessary changes to production to reflect configuration

### kops 1.4

To understand the pitfalls of over-engineering, we need to go back in time to kops 1.4. In kops 1.4, the tasks are defined in YAML files, templated with the standard lib's `text/template` package. They wanted the task definitions to be declarative, so YAML seemed like a natural choice.

Here's a snippet of what a task model file looked like:

![Selection 027](//images.ctfassets.net/le3mxztn6yoo/5tUvPvW1gIEAAUsOWUGQCw/123f54bb66629a102da3daba63a2d58a/Selection_027.png)

From here, the logic would be translated into actual tasks via a rough pipeline of:

1. embed the templated YAML in a .go file
1. import `text/template`
1. parsed at runtime to translate into tasks

Here's what happens in kops 1.4 if you want to change and re-deploy your configuration:

![Selection 021](//images.ctfassets.net/le3mxztn6yoo/6bgpw8J6Qo2IgeCA4EkMia/fdf1ce43c68bd067184683f3c910a8cc/Selection_021.png)

Note that each iteration requires changing production state, so it's a relatively high latency cycle time. And so it really sucks if a deployment fails after a few iterations through this cycle.

To avoid such frustrating issues caused by runtime errors, they had to get really good at dealing with YAML. At times they spent more time looking at YAML than actual Go code. At this point, they had over 1,000 YAML files.



### kops 1.5 (next release)

For the release of kops 1.5, there were a lot of new feature requests (700 GitHub issues, but only 3 maintainers). But their development process was brittle. Too many fragile YAML files. Kubernetes moves fast and kops was desperately trying to keep up but falling behind.

They couldn't easily test all the logic embedded in their YAML files. Issues would often pop up at runtime.

So, in a nutshell:

![Selection 026](//images.ctfassets.net/le3mxztn6yoo/19sCQjbgYA8WOOIAYa2QoU/2e545e9059c68f5650b2d630d277573d/Selection_026.png)

Kris describes being an open source maintainer as kind of like the movie, The Sandlot. A bunch of friends getting together to play ball, write code. The Beast (the big scary dog in the movie that steals the kids' baseball), in this case, was the issue of dealing with their overly complex YAML. Kris was "Smalls", the character who confronts the Beast.

Kris convinced the team to scrap all their templated YAML files. In one commit, they removed the entire kops models directory where the YAML was.

How did they do it? They just `rm -rf`d the entire directory and then observed what broke. And then they fixed the issues one bug at a time.


### What did they remove exactly?

In a nutshell, they got rid of a custom programming language they had inadvertently created via YAML and `text/template`. Their YAML models were effectively written in a Turing-complete language composed of YAML and `text/template` directives. They had been heavily abusing the `FuncMap` type in `text/template`.

Clearly, this is suboptimal. Given that `text/template` can be used as a programming language, let's compare it with Go.

#### Errors
* Go: enforced error handling
* text/template: panic

#### Compiling
* Compile error on invalid syntax
* Compiles just fine, no errors or warnings

#### Debugging
* Stack traces with line numbers
* "Something broke"

#### Developing
* Good IDE support
* no IDE support

#### Testing
* `go test`
* N/A

So, looking at the scoreboard, it's Go: 5, text/template: 0.


So, they moved all their task definitions from YAML into Go.


They turned 1,000 lines of YAML into 10 Go structs. They wrote real tests that exercised real code. They deleted entire packages.

They removed a lot of complexity, which was getting in the way of not just technical progress, but also community development. People started saying, "I get kops now. I want to help. How do I contribute?" kops development became exciting again.

In a nutshell, "we fixed our shit." Ultimately, the lesson was learned was:

> Simple Go Wins.
