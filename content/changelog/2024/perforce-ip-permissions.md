---
title: "IP-based permissions support for Perforce"
authors:
  - name: Kelvin Yap
    url: https://x.com/kelvinyap
    avatar: https://storage.googleapis.com/sourcegraph-assets/blog/kelvin_avatar.png
publishDate: 2024-10-30T17:30-07:00
description: "Previously, Sourcegraph only supported enforcing username-based restrictions to individual files and folders based on the Perforce protections table. In this release, Sourcegraph now supports access control based on a user's IP address as well."
tags: [Enterprise, Code Search]
version: [v5.9.0]
versionIcon: /assets/changelog/sourcegraph.svg
slug: 'perforce-ip-permissions'
published: true

---

Perforce allows gating access to individual parts of a depot based on criteria besides username, including by IP address. Previously, Sourcegraph only supported enforcing username-based restrictions to individual files and folders based on the Perforce protections table. In this release, admins can configure their network infrastructure to securely communicate user IP addresses to Sourcegraph, enforcing allow/deny access to individual files and folders based on the user's IP address as well.

Please [read our docs](https://sourcegraph.com/docs/admin/repo/perforce) for more information.