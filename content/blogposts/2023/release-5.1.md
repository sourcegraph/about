---
title: "Sourcegraph 5.1 release"
publishDate: 2023-06-28T10:00-07:00
description: "Announcing Sourcegraph 5.1. The latest release includes updates to the code graph, tools and introduces Cody, our AI coding assistant, to enterprise instances."
tags: [blog, release]
slug: "release/5.1"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/5.1/sourcegraph-5-1-release-og-image.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/5.1/sourcegraph-5-1-release-og-image.png
changelogItems:
  - description: "Improved symbol generation and performance using tree-sitter."
    url: 
    category: Code nav
  - description: "Allow multi-version upgrades with the standard upgrade flow; any instance can upgrade to 5.1+ from any other version (3.20+)."
    url: https://docs.sourcegraph.com/admin/updates/automatic
    category: Admin
  - description: Sourcegraph connects to GitHub through GitHub Apps rather than personal access tokens for improved security, control and permissions management for customers.
    url: https://github.com/sourcegraph/sourcegraph/pull/46763
    category: Security
  - description: "src-cli improvement to provide admins better visibility into resource utilization."
    url: https://docs.sourcegraph.com/admin/deploy/resource_estimator
    category: Admin
  - description: "Security containers switched to Wolfi, which is built with security, minimalism, and auditability in mind to decrease the risk of supply chain vulnerabilities."
    url: https://docs.sourcegraph.com/dev/background-information/wolfi
    category: Security
  - description: "Sourcegraph Cloud now maintains audit logs retrievable by site admins."
    url: https://docs.sourcegraph.com/admin/audit_log#cloud
    category: Admin
    
   
---

With 5.1, Sourcegraph continues to centralize code-related data with support for more code hosts and code metadata. Bringing all of this data into one place helps reduce the complexity of working in a large and distributed software environment, and helps developers to spend less time finding what they're looking for and spend more time writing code.

Read on to discover everything included in the 5.1 release. 

#### Precise cross-repository code navigation for C and C++

Sourcegraph’s latest SCIP indexer, [scip-clang](https://sourcegraph.com/github.com/sourcegraph/scip-clang), adds precise code navigation for C and C++. C and C++ precise code navigation works for all features supported by scip-clang, such as types, methods, macros, forward declarations, and more. Cross-repository navigation is also supported, so if you reference a function outside of your current repository, you can jump directly to its definition as long as it’s indexed.

Site admins can [add precise code navigation](https://docs.sourcegraph.com/code_navigation/how-to/adding_lsif_to_many_repos) to their Sourcegraph instance by running the SCIP indexers as a periodic job in CI infrastructure. 

<br/>
  
<Video 
  source={{
    mp4: 'blog/release-post/5.1/c_codenav',
  }}
  loop={true}
  title="scip-clang"
/>  
  
<br />

#### Ownership inference

Sourcegraph [started ingesting code ownership data](https://about.sourcegraph.com/blog/our-vision-for-code-ownership), including CODEOWNERS, in 5.0, and in this release is moving from experimental to beta. It’s not always easy to assign ownership to code, and sometimes the data is out of date, and in 5.1, Sourcegraph now also infers code ownership from code and code host metadata (e.g. recent commits). Read more about how we help maintain ownership coverage from our [tech lead’s blog post](https://about.sourcegraph.com/blog/boosting-code-ownership). 

Site admins can [turn on ownership signals](https://docs.sourcegraph.com/own#enabling-sourcegraph-own) by going to ```Site Admin > Code Graph > Ownership Signals``` and enabling recent-contributors and recent-views. 

<br/>
  
<Video 
  source={{
    mp4: 'blog/release-post/5.1/own_gif',
  }}
  loop={true}
  title="Ownership inference"
/>  
  
<br />

#### Custom repository metadata 

Custom repository metadata brings user-defined key-value pairs into the code graph, so users can filter search results based on custom metadata they define. For example, metadata could indicate a repository's maintenance status, allowing users to exclude deprecated or unmaintained libraries from their results. 

Repository metadata can be [added through the web UI, src-cli and GraphQL API](https://docs.sourcegraph.com/admin/repo/metadata). 

<br/>
  
<Video 
  source={{
    mp4: 'blog/release-post/5.1/metadata_gif',
  }}
  loop={true}
  title="Custom repository metadata"
/>  
  
<br />

#### Complete Perforce support

We see many teams using Perforce in combination with Git, and until now, they lacked a single experience. Now devs can search and navigate code hosted in either version control systems in Sourcegraph.

Sourcegraph completes support Perforce as a part of 5.1. There is now support for streams and changelists so Perforce code and its version control system components are seamlessly integrated into Sourcegraph’s tools side-by-side with other supported code hosts.

#### Signed commits in Batch Changes

Batch Changes now supports signing commits for pull requests created on GitHub via GitHub Apps, providing an extra layer of verification that Batch Changes commits are really from Sourcegraph. Commits are now authored by the App (bot account) in GitHub instead of the batch change author.

Site admins can go to Site Admin > Batch Changes > Settings to register a new GitHub App for commit signing in any organization/user on their GitHub instance that owns repositories. Once connected, any pull requests created by Batch Changes on those repositories will automatically use the GitHub App to push and sign commits.

#### Batch Changes for Gerrit

Batch Changes automates large-scale code changes across GitHub, GitLab, Azure DevOps, Bitbucket, and now Gerrit. Developers can create, track, and update changes across diverse repositories with a single action.
