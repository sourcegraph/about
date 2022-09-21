---
title: "From code search toward a code intelligence platform"
publishDate: 
description: TODO
tags: [blog]
slug: "code-search-to-code-intelligence"
published: false
heroImage: 
socialImage: 
changelogItems:
---

> NOTE: This post is very WIP. To be edited and tightened up a lot.

No matter how good your other dev tools, coding is still complex. Even if you've configured your editor just right, sped up your test suite, set up continuous deployment, added observability, etc., coding is still complex. Higher-level languages, libraries, frameworks, cloud providers, etc., that encapsulate complexity just let you spend your complexity budget elsewhere. The overall complexity of code has increased, not declined, over time, and there's no sign of that trend changing.

As consumers of software, we (mostly) benefit from this phenomenon in the form of better technology in our everyday lives.

But as developers of software, we all feel the pain of code complexity: the struggle to understand big codebases, not being able to get in flow, encountering tech debt that turns a tiny fix into a multi-day ordeal, all the wasted time, etc. 

On top of this, devs are more important to their companies than ever. Devs have gone from being viewed as cost centers to being seen as the center of product development, making the issue of complexity a business problem just as much as a dev problem.

Code search is helpful in tackling complexity, but it's not enough. Code search is for finding things *in* code (matching lines in files). What helps you learn things *about* code? Let's call it a code intelligence platform. Compared to code search, it's more helpful, more times per day. This is like how Google went from helping you find things *on* the web (matching web pages), to helping you learn things *from* the web (information and answers). Here are some examples:

- Trying to figure out the best way to call a function? Code search could show you a semi-exhaustive list of call sites. Code intelligence is also being able to see how the code owners of that function themselves have recently been calling that function.
- Need to debug an issue in code? Code search could help you navigate within the same project to understand it. Code intelligence is also being able to see what changed and why, and trace calls across projects and dependencies/dependents.
- Want to fix or improve something across your entire codebase? Code search might help you find where needs fixing. Code intelligence is also being able to push up a quick fix everywhere, track its progress, and monitor for regressions.
- Need to see how your team's API is being used? Code search could show you a list of file locations. Code intelligence is also seeing which other teams are using it and the trend of usage over time.

A code intelligence platform includes code search *and* information about your code from so many other tools, etc., that you rely on: code ownership (and mapping of that to teams, on-call, etc.), code history and reviews, the dependency graph, runtime service/API usage, code and security scanners, deployment status, CI pipeline output, etc. Code hosts are too conflicted to make a good code intelligence platform because they want you to use *their* offerings in each category (and suffer vendor lock-in), but we're committed to Sourcegraph being universal so you can get full code intelligence *and* keep using the best tools in each category.

Today, we're announcing Sourcegraph 4.0, the code intelligence platform for devs to unblock themselves and code better. We've spent 9 years building the underlying foundation of code search to be fast, secure, and scalable across ~10^11 lines of code for the world's most demanding software teams, including `TODO: describe awesome customers`. `TODO: explicitly justify why we are declaring it a code intelligence platform now, rather than in the future`

Sourcegraph 4.0 is available on Cloud (secure, dedicated instances with SOC2 Type 2 compliance), custom deployments, and self-managed.

