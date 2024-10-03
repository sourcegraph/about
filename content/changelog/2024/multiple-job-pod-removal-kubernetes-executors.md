---
title: "Removal of multiple job pods for Kubernetes Executors"
authors:
  - name: Kelvin Yap
    url: https://x.com/kelvinyap
    avatar: https://storage.googleapis.com/sourcegraph-assets/blog/kelvin_avatar.png
publishDate: 2024-10-03T16:56-07:00
description: "Single job pods for native Kubernetes Executors have been the default method for the past couple of releases, and based off positive feedback we are now removing multiple job pod configurations as a configuration option."
tags: [Code Search, Enterprise]
version: [v5.8.0]
versionIcon: /assets/changelog/sourcegraph.svg
slug: 'multiple-job-pod-removal-kubernetes-executors'
published: true

---

We announced in [Sourcegraph 5.6.0](https://sourcegraph.com/blog/release/august-2024) that we were making single job pods for native Kubernetes Executors the default method over the previous multiple job pod configuration, with the option to switch to multiple job pods if required. We continue to receive positive feedback about this change, and in this release we are removing multiple job pod configurations and making single job pods the default and only way for Executors to run in Kubernetes natively.

Learn more about native Kubernetes Executors in our [docs](https://sourcegraph.com/docs/admin/executors/deploy_executors_kubernetes).
