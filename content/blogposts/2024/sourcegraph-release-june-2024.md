---
title: "Sourcegraph June 2024 release"
publishDate: 2024-06-05T10:00-07:00
authors:
  - name: Alex Isken
    url: https://handbook.sourcegraph.com/team/#alex-isken
  - name: Justin Dorfman
    url: https://handbook.sourcegraph.com/team/#justin-dorfman
  - name: Kelvin Yap
    url: https://handbook.sourcegraph.com/team/#sts=Kelvin%20Yap
description: ""
tags: [blog, release]
slug: "release/june-2024"
published: true
heroImage: 
socialImage: 
changelogItems:
  - description: "Improved the performance of language stats insights by 50-70%, significantly reducing pain for customers with large repos. The timeout for language stats insights has also been raised from 3 to 5 minutes. Both are configurable using environment variables on the frontend container."
    url: https://sourcegraph.com/docs/code_insights/explanations/administration_and_security_of_code_insights#language-stats-performance-configuration
    category: Code Insights
  - description: "Improved Zoekt CPU usage and scalability for customers with a large number of repos."
    url:
    category: Search
  - description: "Greatly improved git blame performance on large files, reducing the time it takes for a git blame on a large file to load from several seconds down to less than 500 milliseconds."
    url:
    category: Search
  - description: "Search Jobs now supports diff, commit, and path searches. Before, only file searches were supported."
    url:
    category: Source
---

Intro

### Feature 1

Sourcegraph 5.x.x

Sourcegraph 5.x.x is now available and users self-hosting Sourcegraph can upgrade their instances. Sourcegraph Cloud users will receive this update within the coming days.
