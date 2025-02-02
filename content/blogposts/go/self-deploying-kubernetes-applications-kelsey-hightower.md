---
title: 'Self Deploying Kubernetes Applications'
authors:
  - name: Kelsey Hightower
publishDate: 2017-07-13T00:00-07:00
tags: [
  "gophercon"
]
slug: self-deploying-kubernetes-applications-kelsey-hightower
heroImage: https://assets.ctfassets.net/le3mxztn6yoo/4ODIg0jhskgiuQ0SgmaMsm/addc509ab1dff98eb6864bcee1740aad/Selection_012.bmp
published: true
---


Liveblog by Quinn Slack ([@sqs](https://twitter.com/sqs))

Kelsey Hightower ([@kelseyhightower](https://twitter.com/kelseyhightower)) is a technologist and Googler who regularly comes up with refreshing new ideas for using Go and deploying software. We live-blogged his talk at [GopherCon 2017](https://gophercon.com) about self-deploying Go applications using Kubernetes.

*Note: This post was best-effort live-blogged at the conference. Let me know on Twitter ([@sqs](https://twitter.com/sqs)) if I missed anything. Any mistakes or misrepresentations are my fault; Kelsey's tutorial was excellent!*

—

Kelsey opened his talk with a discussion of why it's hard to deploy software. He's right—even though it's 2017, it's strangely difficult! Lucky for us, smart folks (including Kelsey) are working on the problem.

Kelsey presented an intriguing approach in his [kargo](https://github.com/kelseyhightower/kargo) project: Go apps that deploy themselves to Kubernetes. That is, instead of manually containerizing and deploying your Go static binary entry point `hello-world -http=:80` to your Kubernetes cluster, what if you could just open your local terminal and run `hello-world —kubernetes —replicas 5` to deploy it?

Think it sounds like a radical idea? It's not (very) conceptually different from how executables interact with the OS kernel.

Here's the local execution process:

1. Start executable
2. Pass execution to the local OS kernel to run some syscalls to interact with the outside world
3. Do some stuff
4. Repeat 2

Why not build programs that run like this?

1. Start executable locally
2. Pass execution to a Kubernetes cluster (effectively a “distributed kernel”) that runs the same program, starting from step 1 of the local execution process above
3. Exit local executable (but let the program continue running on Kubernetes)

To be specific, in step 2 above, the program would communicate with your Kubernetes' cluster's API to create a new deployment for itself.

Check out the code at [kelseyhightower/kargo](https://github.com/kelseyhightower/kargo) on GitHub (or [explore kargo on Sourcegraph](https://sourcegraph.com/github.com/kelseyhightower/kargo)).

#### FAQs

These answers are a combination of Kelsey's answers and my ([@sqs](https://twitter.com/sqs)'s) editorializing. Blame me for inaccuracies.

- What if you're running macOS and `hello-world` is a macOS binary, but your servers run Linux? Answer: Go makes it easy for a program to recompile itself for a different architecture!
- How do you upload the binary and make it accessible? Answer: Just upload it to some URL and make the deployed Docker containers download the binary and run it.
- What if you have lots of services that need lots of different configurations, service discovery, etc.? Answer: Let the application define it in its configuration when it passes execution to the Kubernetes cluster.
- What if I want my app to be agnostic to the service orchestration layer (Kubernetes, Docker Swarm, Mesos, etc.)? What if I want my app to select the right deployment target dynamically (e.g., to minimize cost based on spot pricing)? Answer: This is a hard problem and there's no silver bullet. But there are some interesting ideas here. What if a program told you beforehand how much it would cost to run? For some programs, that would be ideal.
- How does this relate to things like Google Cloud Platform's [Cloud Functions](https://cloud.google.com/functions/) and [AWS Lambda](https://aws.amazon.com/lambda/)? Answer: They're basically identical. In both cases, they have a similar wrapper. In a self-deploying program, you choose the wrapper; in the existing services, they choose the wrapper. This approach might give you more control and open up more possibilities.
- How do you handle versioning? Answer: Longer story than can be covered here. But we can create a version identifier based on the SHA-256 of the binary (and rely on the Go compiler's stale checking to avoid creating redundant versions).
- How do you handle updates and configuration changes? Answer: You can embed a configuration file in your program, and then doing versioning as described above will make it so any changes to the embedded configuration yield a new, distinct version. And by using a Kubernetes deployment instead of just a pod, you'll ensure that applying updates clobbers old pods.

![Selection 012](//assets.contentful.com/le3mxztn6yoo/4ODIg0jhskgiuQ0SgmaMsm/addc509ab1dff98eb6864bcee1740aad/Selection_012.bmp)