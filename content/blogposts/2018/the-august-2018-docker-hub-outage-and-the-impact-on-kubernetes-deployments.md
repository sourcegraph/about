---
title: 'The August 2018 Docker Hub outage and the impact on Kubernetes deployments'
authors:
  - name: Ryan Blunden
    url: https://twitter.com/ryan_blunden
publishDate: 2018-08-17T16:34-07:00
tags: [
  "blog"
]
slug: the-august-2018-docker-hub-outage-and-the-impact-on-kubernetes-deployments
heroImage: https://images.ctfassets.net/le3mxztn6yoo/1LMHTsJzjOwOweIoUmMk2i/2ff8fd218923eda3f0e32f81cec6016f/Docker-logo-011.png
published: true
---

Docker announced that the Docker Hub and Docker Store (backed by the same Docker Registry) [will be down](https://success.docker.com/article/planned-downtime-on-hub-cloud-store) (totally offline) from [11:00 Pacific Time](https://everytimezone.com/#2018-8-25,-1080,b8jj) 25 August with 15-45 minutes (expected) downtime.

You may be thinking “I use Kubernetes, doesn't this only affect people executing `docker image pull`? Well yes, but that is what Kubernetes does when it doesn't find a requested image locally.

Below is the advice we've given our customers to help them work around the outage and we encourage you to share this with anyone who uses Kubernetes to help them have an incident and outage free weekend.

## Check your imagePullPolicy
We use the imagePullPolicy [default value](https://kubernetes.io/docs/concepts/configuration/overview/#container-images) (IfNotPresent), meaning the image will not be pulled if available locally.

## Avoid changing the state of the Kubernetes cluster
The idea is to not give a Kubernetes worker node a reason to pull an image from Docker Hub.

While this is somewhat out of our control (if a node dies), we recommend to:

 - avoid making changes to the Kubernetes worker nodes
 - avoid adding or removing worker nodes
 - avoid changing deploys which may require different image versions
 - avoid scaling the number of Pods in a deployment

This reduces the chances of Kubernetes re-scheduling Pods onto different worker nodes (where the required image may not have been downloaded) and hence, triggering a pull from Docker Hub.

## Outages happen, all you can do is be prepared
We hope this post has given you some ideas about how you can limit the impact the Docker Hub outage has on your Kubernetes and Docker deployments.

We know this must be a stressful operation for Docker's Ops folks and we wish them all the best!
