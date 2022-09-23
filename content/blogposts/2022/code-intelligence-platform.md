---
title: "From code search to a code intelligence platform"
publishDate: 2022-09-27T10:00-07:00
description: Finding things in code is good, but learning things about code is great. Sourcegraph's code intelligence platform is built to help.
tags: [blog]
slug: "code-search-to-code-intelligence"
published: false
heroImage: 
socialImage: 
---

No matter how good your dev tools are, coding is complex. This is true even if you've configured your editor just right, sped up your test suite, set up continuous deployment, and added observability. Tools like higher-level languages, libraries, and frameworks can help, but as you take on bigger and more ambitious projects, you'll likely spend your complexity budget elsewhere. The overall complexity of code has increased over time, and there's no sign of that trend changing.

As consumers of software, we (mostly) benefit from this phenomenon in the form of better technology in our everyday lives.

But as developers of software, we all feel the pain of code complexity: the struggle to understand big codebases, not being able to get in flow, encountering tech debt that turns a tiny fix into a multi-day ordeal, all the wasted time, etc. 

On top of this, devs are more important to their companies than ever. Devs have gone from being viewed as cost centers to being seen as the center of product development, so the issue of complexity is a business problem just as much as a dev problem.

Code search is helpful in tackling complexity, but it's not enough. Code search is for finding things *in* code (matching lines in files). What helps you learn things *about* code? Google went from helping you find things *on* the web (matching web pages), to helping you learn things *from* the web (information and answers), and we're doing the same with code.

This is what we call a code intelligence platform, and compared to code search, it's more helpful, more times per day. **A code intelligence platform helps devs learn and understand information about their code so they can operate more effectively, with a deeper understanding of their codebase and how it works.** 

A code intelligence platform should persist data beyond the code itself and make that data accessible. Here are some examples of what we see the platform doing in the future:

- Trying to figure out the best way to call a function? Code search could show you a semi-exhaustive list of call sites. Code intelligence is also being able to see how the code owners of that function themselves have recently been calling that function.
- Need to debug an issue in code? Code search could help you navigate within the same project to understand it. Code intelligence is also being able to see what changed and why, and trace calls across projects and dependencies/dependents.
- Want to fix or improve something across your entire codebase? Code search might help you find where needs fixing. Code intelligence is also being able to push up a quick fix everywhere, track its progress, and monitor for regressions. Sourcegraph does this today.
- Need to see how your team's API is being used? Code search could show you a list of file locations. Code intelligence is also seeing which other teams are using it and the trend of usage over time.

A code intelligence platform includes code search *and* information about your code from so many other tools, etc., that you rely on: code ownership (and mapping of that to teams, on-call, etc.), code history and reviews, the dependency graph, runtime service/API usage, code and security scanners, deployment status, CI pipeline output, etc. Sourcegraph is committed to being universal so you can get full code intelligence *and* keep using the best tools in each category.

Today, we're announcing Sourcegraph 4.0, the code intelligence platform for devs to unblock themselves and code better. We've spent 9 years building the underlying foundation of code search to be fast, secure, and scalable across ~10^11 lines of code for the world's most demanding software teams, including 4 of 5 FAANG companies and 4 of the top 10 U.S. banks. 

Sourcegraph has lots to do to build our future vision of a code intelligence platform, and we're already on our way. Our newest developments—specifically, Code Insights and Batch Changes—have solidly moved Sourcegraph _beyond_ code search, and today, we're ready to call Sourcegraph a code intelligence platform.

Sourcegraph 4.0 is available to all users now. It's also available on our newest service, Sourcegraph Cloud, our single-tenant cloud solution that is [now generally available](/blog/enterprise-cloud). Sourcegraph Cloud provides isolated, secure instances for every customer.

If you're already using Sourcegraph, you can [upgrade to 4.0 today](https://docs.sourcegraph.com/admin/updates). If you're new to Sourcegraph, Sourcegraph Cloud is the easiest way to get started. You can get a [30-day trial here](https://signup.sourcegraph.com).

