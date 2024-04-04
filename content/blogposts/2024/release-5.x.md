---
title: "Sourcegraph 5.X release"
publishDate: 2024-04-05T10:00-07:00
description: "Description goes here"
tags: [blog, release]
slug: "release/5.X"
published: true
heroImage: 
socialImage: 
changelogItems:
  - description: "Batch Changes on Gerrit is now available."
    url: 
    category: Batch changes
  - description: "Batch Changes now supports signing commits for PRs created on GitHub via GitHub Apps (bot account), providing extra verification that Batch Changes commits initiate from Sourcegraph."
    url: 
    category: Batch changes
  - description: "Improved symbol generation and performance using tree-sitter."
    url: 
    category: Code nav
  - description: "Auto-indexing for TypeScript, JavaScript, Go, Java, Kotlin and Scala are enabled by default."
    url: https://docs.sourcegraph.com/code_navigation/how-to/configure_auto_indexing
    category: Code nav
  - description: "Allow multi-version upgrades with the standard upgrade flow; any instance can upgrade to 5.1+ from any other version (3.20+)."
    url: https://docs.sourcegraph.com/admin/updates/automatic
    category: Admin
  - description: "src-cli improvement to provide admins better visibility into resource utilization."
    url: https://docs.sourcegraph.com/admin/deploy/resource_estimator
    category: Admin
  - description: "Sourcegraph Cloud now maintains audit logs retrievable by site admins."
    url: https://docs.sourcegraph.com/admin/audit_log#cloud
    category: Admin
  - description: "Switched to using Wolfi for our containers, which is built with security, minimalism, and auditability in mind to decrease the risk of supply chain vulnerabilities."
    url: https://docs.sourcegraph.com/dev/background-information/wolfi
    category: Security
  - description: Sourcegraph connects to GitHub through GitHub Apps rather than personal access tokens for improved security, control and permissions management for customers.
    url: https://github.com/sourcegraph/sourcegraph/pull/46763
    category: Security


---

Intro text

<Alert>
    This is an example alert
</Alert>

<Badge text="Category" color="violet" size="small" />

#### Feature 1 heading


<!-- Example way of addind a video -->
<!-- <Video 
  source={{
    mp4: 'blog/release-post/5.1/codenav_gif',
  }}
  loop={true}
  title="scip-clang"
/>   -->
  
<br />

<Badge text="Category" color="green" size="small" />

#### Feature 2 heading