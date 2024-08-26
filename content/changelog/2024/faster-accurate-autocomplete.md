---
title: "Faster, more accurate autocomplete with VS Code"
authors:
  - name: Alex Isken
    url: https://x.com/AlexanderIsken
    avatar: https://storage.googleapis.com/sourcegraph-assets/blog/alex_avatar.png
publishDate: 2024-08-21T10:00-01:00
description: "Autocomplete has been improved with faster performance and greater accuracy, including a 350-millisecond reduction in latency and a 4% increase in completion acceptance rate. The update features the new DeepSeek-V2 model and is available to Free and Pro users, with full rollout to Enterprise users coming soon."
tags: [Cody, Autocomplete]
version: [v1.32]
slug: 'faster-accurate-autocomplete'
published: true
---

Autocomplete has been overhauled with multiple under-the-hood changes, making it both faster and more accurate:

- P75 latency is down by 350 milliseconds
- Multi-line completions are significantly more accurate and relevant to the surrounding context
- The average completion acceptance rate (CAR) for early users is up by >4%

These updates are powered by several server-side and client-side optimizations. We’ve also updated the default autocomplete model from StarCoder to DeepSeek-V2, significantly improving responsiveness and accuracy.

These updates are available now for Free and Pro users. We’ve rolled out some of these autocomplete updates to Enterprise users as well, but the most significant updates (including moving to DeepSeek-V2) will come to Enterprise users soon.
