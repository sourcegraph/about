---
title: "From code search to a code intelligence platform"
publishDate: 2022-09-27T10:00-07:00
description: Finding things in code is good, but learning things about code is great. Sourcegraph's code intelligence platform is built to help.
tags: [blog]
slug: "code-search-to-code-intelligence"
published: false
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/4.0/to-code-intelligence.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/4.0/to-code-intelligence.png
---

No matter how good your dev tools are, coding is complex. This is true even if you've configured your editor just right, sped up your test suite, set up continuous deployment, and added observability. Tools like higher-level languages, libraries, and frameworks can help, but as you take on bigger and more ambitious projects, you'll likely spend your complexity budget elsewhere. The overall complexity of code has increased over time, and there's no sign of that trend changing.

As consumers of software, we (mostly) benefit from this phenomenon in the form of better technology in our everyday lives.

But as developers of software, we all feel the pain of code complexity: not being able to get in flow, encountering tech debt that turns a tiny fix into a multi-day ordeal, and all the wasted time just trying to understand big codebases.

On top of this, devs are more important than ever. Devs have gone from being viewed as cost centers to being seen as the center of product development, so the issue of complexity is a business problem just as much as a dev problem.

In 2013, we set out to tackle this complexity issue by building code search and making it available to every dev and company. Code search is helpful in reducing complexity, but it's not enough. It helps you find things *in* code (matching lines in files), but developers also need to learn things *about* code. Google went from helping you find things *on* the web (matching web pages) to helping you learn things *from* the web (information and answers) by connecting adjacent data like news, videos, and maps back to web search. Now, when users need information, they go to Google even if the answer isn't simply a web page. We're doing the same for code with our code intelligence platform.

Today, we're releasing Sourcegraph 4.0. 4.0 is a big step for Sourcegraph and our customers as we shift from a code search tool into a code intelligence platform.

A code intelligence platform indexes and understands all of your organization's code, no matter where it's stored or what language it's in. With Sourcegraph, devs and engineering leaders have a complete understanding of their codebase, so they can learn *about* code and operate more efficiently.

A code intelligence platform should compute and store data beyond the code itself and make that data accessible. Sourcegraph already pulls in information on code history, repository metadata, and metrics derived from code via Code Insights. Here are some examples of what we see the platform doing in the future:

- Trying to figure out the best way to call a function? Code search shows you a semi-exhaustive list of call sites. Code intelligence is seeing how the code owners of that function themselves have recently been calling that function.
- Need to debug an issue in code? Code search helps you navigate within the same project to understand it. Code intelligence is seeing what changed and why, and trace calls across projects and dependencies/dependents.
- Need to see how your team's API is being used? Code search shows you a list of file locations. Code intelligence shows which other teams are using it and the trend of usage over time.
- Want to fix or improve something across your entire codebase? Code search helps you find the spots that need fixing. Code intelligence pushes up a quick fix everywhere, tracks its progress, and monitors for regressions. Sourcegraph does this today with Batch Changes.

Today, we're announcing Sourcegraph 4.0, the code intelligence platform for devs to unblock themselves and code better. We've spent 9 years building the underlying foundation of code search to be fast, secure, and scalable across ~10^11 lines of code for the world's most demanding software teams, from 4 of 5 FAANG companies and 4 of the top 10 U.S. banks, to companies launching satellites into space and the leaders in autonomous transportation. 

Sourcegraph 4.0 is available to all users now. It's available self-hosted and on our newest service, Sourcegraph Cloud, our single-tenant cloud solution that is [now generally available](/blog/enterprise-cloud). Sourcegraph Cloud provides isolated, secure instances for every customer.

If you're already using Sourcegraph, you can [upgrade to 4.0 today](https://docs.sourcegraph.com/admin/updates). If you're new to Sourcegraph, Sourcegraph Cloud is the easiest way to get started. You can get a [30-day trial here](https://signup.sourcegraph.com).
