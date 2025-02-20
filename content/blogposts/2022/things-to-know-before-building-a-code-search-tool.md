---
title: '3 things to know before building a custom, in-house code search tool'
authors:
  - name: Quinn Slack
    url: https://twitter.com/sqs
publishDate: 2022-07-11T10:00-07:00
description: 'As your company's codebase grows, devs will start needing code search to understand, fix, and automate across the codebase. Here are a few questions you should ask yourself before deciding to build code search inside your company.'
tags: [blog]
slug: 'things-to-know-before-building-a-code-search-tool'
published: true
heroImage: /blog/buy-vs-build-blog.png
socialImage: /blog/buy-vs-build-blog.png
---

Devs love building tools for devs. It's natural that as your company's codebase grows, devs will start needing code search to understand, fix, and automate across the codebase. Sometimes this means setting up an existing code search tool, but sometimes you might want to build your own code search tool instead. I understand the temptation to build a code search tool—after all, we're building code search at Sourcegraph (it's the foundation of our platform). But here are a few questions you should ask yourself before deciding to build code search inside your company.

<i>Disclaimer: Sourcegraph is a code intelligence platform, and universal code search is a big part of that. So, we are obviously a little biased here.</i>

### Will your custom code search tool integrate nicely with your code hosts (GitHub/GitLab/Bitbucket/etc.) and scale to your entire codebase?

A code search tool needs to index all of the repositories from all of your code hosts. That presents several technical challenges:

<ul>
  <li>Will it scale to the combined size of all of your repositories?</li>
  <li>Will it quickly fetch updates to all branches of all repositories?</li>
  <li>Does it respect the user permissions defined on your code host (so users can only search code they're able to view)?</li>
  <li>Will it put massive load on your code host or get your account banned for abuse?</li>
  <li>If you have code scattered across multiple code hosts, will it support all of them?</li>
</ul>

<br/>

It's a lot of work to handle all of these things cleanly. Here's some proof: as of the time this post was written, there were [858 places dealing with code host API rate limits](https://sourcegraph.com/search?q=context:global+repo:github.com/sourcegraph/sourcegraph%24+rate+limit+f:extsvc&patternType=regexp) in Sourcegraph's implementation support for GitHub/GitLab/Bitbucket/etc.

### Will your custom code search tool work with all of the programming languages and tools your devs use?

You can't stop at text search when you're building a code search tool. Devs will expect to be able to navigate to definitions and references in code and see documentation at their cursor. All that requires your code search tool to understand language constructs at a syntactic and type level just like a smart IDE.

You can use [LSIF](https://lsif.dev/) to get part of the way here, but that's a lot more work. Just one example: you'll need to be able to adjust LSIF dump files and line ranges forward or backward in commit history so that you can navigate code on commits that don't have a full LSIF dump available. (See [Sourcegraph's adjustLocations implementation](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@3ff2d845f5139a45dee41495aa0a8bf03450ec14/-/blob/enterprise/cmd/frontend/internal/codeintel/resolvers/query_util.go?L161).)

And it's not just programming language support. Devs will want to know other kinds of metadata about the code they're looking at, such as code ownership, test coverage, where it's deployed, what linter issues have been found, etc. The only way to get this kind of information is to ensure your code search tool integrates with all of the tools your developers use every day. And building each one of these integrations is a ton more work.

### Who will maintain your custom code search tool, and how much will it cost?

Ever since Jeff Dean and others built the first version of [Google's internal code search tool](https://www.google.com/url?q=https://codesearchguide.org/story/google&sa=D&source=docs&ust=1657309582820490&usg=AOvVaw19e-PuQfxFkOchhiY-Eyn8) around 2005, the project has cost $100M+ in salaries  alone for the dozens of engineers building it (directly or indirectly). You could build one for less money, but it would be much worse. And then why build your own worse code search instead of using one that already exists and is better anyway?

Even if you've built the first version of your own code search tool, you can't stop. Your organization and codebase grows, your preferred programming languages change and evolve, your code hosts change and deprecate APIs, and your devs' needs change in all kinds of unanticipated ways. If you think code search is important enough that it's worth building your own, then you'll surely want to continue investing to keep improving it—but that's expensive.

Finally, focus is crucial. You want your devs solving the problems specific to your business, not problems that are similar across companies. Every company needs code search, for most of the same reasons, and those problems aren't specific to your business.

### If you still want to build your own code search tool…

Over the years, we've discovered that companies who need code search also need the ability to understand, fix, and automate changes across their entire codebase, and we've built those capabilities too. If you still want to build your own code search tool, try some [existing code search tools](https://codesearchguide.org/tools) first. And then, if you still want to build your own, come talk to us! We've be en thinking about code search for almost 10 years by now, and we'd love to share pointers and hear how it's going. 

You can get a [live demo of Sourcegraph here](https://about.sourcegraph.com/demo).

You can reach me at [sqs@sourcegraph.com](mailto:sqs@sourcegraph.com). And when your new tool is ready, you can submit a PR to the [existing code search tools](https://codesearchguide.org/tools) page.

## Other similar articles
- [Build vs. buy: Should you build in-house or choose a 3rd-party SaaS solution? | Appcues Blog](https://www.appcues.com/blog/build-vs-buy-third-party-software)
  - [The User Onboarding Cost Calculator](https://www.appcues.com/resources/user-onboarding-cost-calculator)

### About the author

_Quinn Slack is the CEO and co-founder of Sourcegraph, the code intelligence platform for dev teams and making coding more accessible to more people. Prior to Sourcegraph, Quinn co-founded Blend Labs, an enterprise technology company dedicated to improving home lending and was an egineer at Palantir, where he created a technology platform to help two of the top five U.S. banks recover from the housing crisis. Quinn has a BS in Computer Science from Stanford, you can chat with him on Twitter [@sqs](https://twitter.com/sqs)._
