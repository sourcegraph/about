---
title: GitLab integrates Sourcegraph code navigation and code intelligence
authors:
  - name: Christina Forney
    url: https://handbook.sourcegraph.com/team/#christina-forney
publishDate: 2019-11-12T10:00-07:00
tags: [blog]
description: 'Check out the below video where Quinn sat down with GitLab CEO Sid Sijbrandij to discuss the native GitLab integration.'
slug: gitlab-integrates-sourcegraph-code-navigation-and-code-intelligence
heroImage: https://about.sourcegraph.com/blog/gitlab-integration-preview-dark.png
published: true
---

<Figure 
  src="/blog/gitlab-integration-banner-dark.png" 
  alt="GitLab plus Sourcegraph logo"
/>

<Blockquote
  quote="Sourcegraph has the best find-definition, find-references, and intelligent code navigation capability on the planet - and they brought it to GitLab."
  author="Sid Sijbrandij, GitLab CEO"
/>

Check out the below video where Quinn sat down with GitLab CEO Sid Sijbrandij to discuss the native GitLab integration, and why Sourcegraph's code intelligence means better code reviews and improved code quality for [GitLab Enterprise](https://about.gitlab.com/solutions/enterprise-class/) customers and open source projects on [GitLab.com](https://gitlab.com/explore).

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/372590007?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/372590007" target="_blank">View on Vimeo</a></p>
</div>

Over 100,000 organizations use GitLab to manage their DevOps lifecycle. Today, [GitLab announced its collaboration with Sourcegraph](https://about.gitlab.com/blog/2019/11/12/sourcegraph-code-intelligence-integration-for-gitlab/) to provide a native integration for these organizations, making code navigation and code intelligence available to all GitLab users.

## Developers need code navigation and code intelligence

Developers rely heavily on go-to-definition and find-references functionality. With development becoming more collaborative and complex, developers often spend more hours per day reading and reviewing code in the browser than writing code. There is now a gap between the experience of writing code locally and reviewing code online. GitLab realized that these code navigation and code intelligence features are essential in all parts of the developer workflow, especially in code hosts and at code review.

Sourcegraph provides these much-loved, much-used features at scale for all code, organization-wide: across repositories, for all popular programming languages, and on major code hosts. The world's most elite development teams rely on Sourcegraph, including Lyft, Uber, Yelp, Convoy, SoFi, and Quantcast.

Because we have many satisfied customers in common, a shared focus on developers, and some [CEO-to-CEO discussion on Hacker News](https://news.ycombinator.com/item?id=18118924), GitLab chose Sourcegraph to integrate these essential code navigation and code intelligence features for the 100,000+ organizations who trust GitLab.


<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/372226334?color=0CB6F4&amp;title=0&amp;byline=&autoplay=1&loop=1" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/372226334" target="_blank">View on Vimeo</a></p>
</div>

## Built-in IDE-like features improve code reviews

Higher quality code reviews become possible when developers have more context about code they are reviewing. With this new integration, hover tooltips provide access to go-to-definition and find references in the browser on their code host. This means that developers can traverse the code they are reviewing, investigate the impact of code changes thoroughly by finding all affected references, and complete their code reviews faster, all without leaving the browser.

Higher-quality code reviews mean fewer bugs, and more time spent on building new features. Making open source code easier to read and understand means faster identification of vulnerabilities, a better understanding of libraries, and less duplicated code.

Together, GitLab and Sourcegraph are creating a better world for enterprise and open source developers, consumers, and organizations.

## When you can opt-in

To ensure a high quality integration, GitLab will begin testing this feature within the GitLab organization on GitLab.com as soon as [MR #16556](https://gitlab.com/gitlab-org/gitlab/merge_requests/16556) is merged. On Nov 22nd, the integration will be included in the GitLab 12.5 release behind a feature flag. Once internal testing is complete, the feature flag will be lifted and all users can choose to opt-in to this feature on GitLab.com.

## FAQ

**What does this mean for the future of the browser extension?**

The [Sourcegraph browser extension](https://docs.sourcegraph.com/integration/browser_extension) will continue to provide code intelligence and code navigation for the major code hosts. The integration with GitLab simply means that developers unwilling to install browser extensions are able to enjoy valuable features seamlessly integrated with their GitLab workflow. Developers using the browser extension can additionally enjoy these features on GitHub, GitLab, Bitbucket server, Phabricator, and more, making their workflow comprehensive anywhere they view code.

**Will Sourcegraph provide code intelligence for other code hosts?**

Sourcegraph is pushing for code intelligence and navigation [open standards](https://docs.sourcegraph.com/integration) and is working with [other major code hosts](https://docs.sourcegraph.com/integration) to incorporate these features.

**How does this work for public repositories?**

Public GitLab repositories are available on [Sourcegraph.com](http://sourcegraph.com/search). Sourcegraph uses this context about the repository to provide code intelligence on GitLab (for users who opt-in).

**How do I get this for my private code?**

You will need to add your private repositories to a [self-managed Sourcegraph instance](https://docs.sourcegraph.com/#quickstart-guide).

- For _private GitLab instances_, you can connect your self-managed Sourcegraph instance directly via the admin integration settings.
- For _private repositories on GitLab.com_, you can connect the [Sourcegraph browser extension](https://docs.sourcegraph.com/integration/browser_extension) to your Sourcegraph instance to show code intelligence on those repositories.

**What languages are supported?**

Sourcegraph provides code intelligence for the [25 most used programming languages](https://sourcegraph.com/extensions?query=category%3A%22Programming+languages%22):

- Clojure
- C++
- C#
- CUDA
- Dart
- Elixir
- Erlang
- Go
- Haskell
- Java
- JavaScript/TypeScript
- Kotlin
- Lisp
- Lua
- OCaml
- Perl
- PHP
- PowerShell
- Python
- R
- Ruby
- Rust
- Scala
- Shell
- Swift
