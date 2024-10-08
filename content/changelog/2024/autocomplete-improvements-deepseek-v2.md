---
title: "Autocomplete improvements for DeepSeek-V2"
authors:
  - name: Kelvin Yap
    url: https://x.com/kelvinyap
    avatar: https://storage.googleapis.com/sourcegraph-assets/blog/kelvin_avatar.png
publishDate: 2024-10-07T16:56-07:00
description: "DeepSeek-V2 was recently introduced as the default autocomplete model for Cody Enterprise customers, and we have implemented optimizations to prompt caching and direct routing that have resulted in improved latency and quality for both single-line and multi-line completions."
tags: [Cody, Enterprise]
version: [v5.8.0]
versionIcon: /assets/changelog/sourcegraph.svg
slug: 'autocomplete-improvements-deepseek-v2'
published: true

---

[DeepSeek-V2 was recently introduced](https://sourcegraph.com/changelog/default-enterprise-models) as the default autocomplete model for Cody Enterprise customers, and in this release we have implemented optimizations to prompt caching and direct routing that have resulted in improved latency and quality for both single-line and multi-line completions.

These improvements to autocomplete are available to all Cody Enterprise customers who are using DeepSeek-V2 via Cody Gateway.