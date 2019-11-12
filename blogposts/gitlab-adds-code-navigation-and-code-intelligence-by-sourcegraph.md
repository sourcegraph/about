---
title: GitLab adds code navigation and code intelligence by Sourcegraph
author: Christina Forney
publishDate: 2019-11-12T10:00-07:00
tags: [blog]
slug: gitlab-adds-code-navigation-and-code-intelligence-by-sourcegraph
heroImage: https://about.sourcegraph.com/gitlab-integration-preview-dark.png
published: true
---

<!-- <p style="text-align: center">
  <img src="gitlab-integration-banner-dark.png" />
</p> -->

<p class="container">
  <div style="padding:56.25% 0 0 0;position:relative;">
    <iframe src="https://player.vimeo.com/video/<Sid/Quinn video ID>?color=0CB6F4&amp;title=0&amp;byline=" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
  </div>
  <p style="text-align: center"><a href="https://vimeo.com/<Sid/Quinn video ID>" target="_blank">View on Vimeo</a></p>
</p>

<div class="alert alert-secondary">
  <p>
    <strong>"Sourcegraph has the best find-definition, find-references, and intelligent code navigation capability on the planet - and they brought it to GitLab.</strong> - Sid Sijbrandij, GitLab CEO
  </p>
</div>

Over 100,000 organizations use GitLab to manage their DevOps lifecycle. Today, GitLab announced a collaboration with Sourcegraph to enhance the workflow of the developers at these organizations. The Sourcegraph native integration makes code navigation and code intelligence available to all GitLab users.

## Developers need code navigation and code intelligence

Developers deeply rely on go-to-definition and find-references functionality in the editor. A gap has grown between the experiences of writing code locally and reviewing code online. With development becoming more collaborative and complex, developers often spend more hours per day reading and reviewing code on their code hosts than writing code in their editors. GitLab realized that these code navigation and code intelligence features are essential to have in all parts of the developer workflow - especially the code host and at code review, and no longer just in the editor.

Sourcegraph provides these much-loved, much-used features at scale for all code organization-wide: across repositories, for all popular programming languages, and most code hosts. The world's most elite development teams rely on Sourcegraph, including Lyft, Uber, Yelp, Convoy, SoFi, and Quantcast.

With many happy customers in common, a shared focus on developers, and some [CEO-to-CEO discussion on Hacker News](https://news.ycombinator.com/item?id=18118924), GitLab chose Sourcegraph to deeply integrate these essential code navigation and code intelligence features for the 100,000+ organizations who trust GitLab.

<p class="container">
  <div style="padding:56.25% 0 0 0;position:relative;">
    <iframe src="https://player.vimeo.com/video/372226334?color=0CB6F4&amp;title=0&amp;byline=" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
  </div>
  <p style="text-align: center"><a href="https://vimeo.com/372226334" target="_blank">View on Vimeo</a></p>
</p>

## Built-in IDE-like features improve code reviews

Code reviews become higher quality when developers have more context about code. With this new integration, hover tooltips provide access to go-to-definition and find references. This means that developers can traverse the code they are reviewing in the browser, investigate the impact of code changes thoroughly by finding all affected references, and complete their code reviews faster.

Higher-quality code reviews mean fewer bugs, and more time spent on building new features. Making open-source code easier to read and understand means faster identification of vulnerabilities, a better understanding of libraries, and less duplicated code.

Together, GitLab and Sourcegraph are creating a better world for enterprise and open source developers, consumers, and organizations.

## When you can opt-in

On Nov 22nd, GitLab 12.5 will be released with the integration behind a feature flag. After dogfooding the integration with the GitLab organization, the feature flag will be lifted so all users can choose to opt-in to this feature on GitLab.com.

## FAQ

**What does this mean for the future of the browser extension?**

The [Sourcegraph browser extension](https://docs.sourcegraph.com/integration/browser_extension) will continue to provide code intelligence and code navigation for the major code hosts. The integration with GitLab simply means that developers unwilling to install browser extensions are able to enjoy valuable features integrated seamlessly with their GitLab workflow. Developers using the browser extension can additionally enjoy these features on GitHub, GitLab, Bitbucket server, Phabricator, and more, making their workflow comprehensive anywhere they view code.

**Will Sourcegraph provide code intelligence for other code hosts?**

Sourcegraph is pushing for code intelligence and navigation [open standards](https://docs.sourcegraph.com/integration) and is working with [other major code hosts](https://docs.sourcegraph.com/integration) to incorporate these features.

**How does this work for public repositories?**

Sourcegraph.com has indexed all of the public repositories on GitLab.com to provide code intelligence on these repositories (for users who opt-in).

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
