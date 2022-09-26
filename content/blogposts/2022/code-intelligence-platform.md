---
title: "From code search to a code intelligence platform"
publishDate: 2022-09-27T10:00-07:00
description: No matter how good your dev tools are, coding is complex. We're building a code intelligence platform to help you unblock yourself and code better.
tags: [blog]
slug: "code-search-to-code-intelligence"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/4.0/to-code-intelligence.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/4.0/to-code-intelligence.png
authors:
  - name: Quinn Slack
    url: https://slack.org

---

When I started coding [~25 years ago](https://slack.org/why-i-love-code), coding was complex. Since then, dev tools have massively improved: editors, build tools, Git, testing, continuous deployment, new programming languages, libraries, frameworks, linters, observability, etc. {/* But they've improved less than you might think. Check out [The Joel Test](https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/) from 2000 and note how many companies today would fail it despite those being obvious best practices 22 years ago. */} So, why is coding even more complex today than it was 25 years ago?

Because software is much better and does much more than 25 years ago. {/* We can debate the degree to which this statement is true, and you can probably think of some counterexamples. But it's still true. Even if you, a cranky purist dev, would prefer using 25-year-old software, most people disagree with you. You'd be hard-pressed to find many willing users or customers for 25-year-old software today. */} Improvements in dev tooling let us spend our "complexity budget" on building better and more useful software, instead of, say, toiling over C code to format and send emails via SMTP (which seems quaint today but I guarantee you it consumed hundreds of human lifetime-equivalents).

This is a good thing. {/* I believe it's a major reason why most people are better off today than 25 years ago, and that's a big part of [why I love coding](https://slack.org/why-i-love-code) and what motivates me at Sourcegraph!. */}



It's not all bad. Some of this complexity actually translates into better technology in our everyday lives.

But as developers of software, we all feel the pain of code complexity: not being able to get in flow, encountering tech debt that turns a tiny fix into a multi-day ordeal, and all the wasted time just trying to understand big codebases.

On top of this, devs are more important than ever. We've gone from being viewed as cost centers to being seen as the center of product development, so the issue of complexity is a business problem just as much as a dev problem.

In 2013, we set out to tackle this complexity issue by building code search and making it available to every dev and company. Code search is helpful in reducing complexity, but it's not enough. It helps you find things *in* code (matching lines in files), but developers also need to learn things *about* code. Google went from helping you find things *on* the web (matching web pages) to helping you learn things *from* the web (information and answers) by connecting data like news, videos, and maps back to web search. Today, you go to Google to answer complex questions and learn things, not to find things. At Sourcegraph, we're doing the same for code with our code intelligence platform.

Today, we're releasing Sourcegraph 4.0. 4.0 is a big step for Sourcegraph and our customers as we shift from a code search tool into a code intelligence platform.

A code intelligence platform indexes and understands all of your organization's code, no matter where it's stored or what language it's in. With Sourcegraph, devs and engineering can learn *about* code and answer difficult questions about their codebase.

Our code intelligence platform will compute and store data beyond the code itself and make that data accessible. Sourcegraph already pulls in information on code history, repository metadata, and metrics derived from code via Code Insights. Here is what coding will look like with a code intelligence platform:

- Trying to figure out the best way to call a function? Code search shows you a semi-exhaustive list of call sites. Code intelligence is seeing how the code owners of that function themselves have recently been calling that function.
- Need to debug an issue in code? Code search helps you navigate within the same project to understand it. Code intelligence is seeing what changed and why, and tracing calls across projects and dependencies.
- Need to see how your team's API is being used? Code search shows you a list of file locations. Code intelligence shows which other teams are using it and the trend of usage over time.
- Want to fix or improve something across your entire codebase? Code search helps you find the spots that need fixing. Code intelligence pushes up a quick fix everywhere, tracks its progress, and monitors for regressions. Sourcegraph already does this with Batch Changes.

Sourcegraph 4.0 is the code intelligence platform for devs to unblock themselves and code better. We've spent 9 years building the underlying foundation of code search to be fast, secure, and scalable across ~10^11 lines of code for the world's most demanding software teams, from 4 of 5 FAANG companies and 4 of the top 10 U.S. banks, to companies launching satellites into space and the leaders in autonomous transportation. 

Sourcegraph 4.0 is available to all devs, and you can [upgrade to 4.0 now](https://docs.sourcegraph.com/admin/updates). For devs new to our code intelligence platform, the future is Sourcegraph Cloud. Cloud uses dedicated, single-tenant instances so every customer gets enterprise scalability and isolation. It also has a SOC 2 Type II report, so you can be assured of the security of your data. Sourcegraph Cloud comes with 4.0 out-of-the-box. [Start a 30-day trial of Sourcegraph Cloud today](https://signup.sourcegraph.com).