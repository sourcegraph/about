---
title: "Faster, more accurate autocomplete with VS Code"
authors:
  - name: Alex Isken
    url: https://x.com/AlexanderIsken
    avatar: https://images.weserv.nl/?url=avatars.githubusercontent.com/u/65769327
  - name: Justin Dorfman
    url: https://x.com/jdorfman
    avatar: https://images.weserv.nl/?url=avatars.githubusercontent.com/u/65769327
publishDate: 2024-08-21 T10:00-01:00
description: "Cody's autocomplete is now faster, more accurate, and powered by DeepSeek V2."
tags: [VS Code], [Cody]
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
