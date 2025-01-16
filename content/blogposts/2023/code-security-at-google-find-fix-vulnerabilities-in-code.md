---
title: 'Notes on code security at Google: finding and fixing vulnerabilities in a massive codebase'
authors:
  - name: Quinn Slack
    url: https://twitter.com/sqs
publishDate: 2023-02-08T10:00-07:00
description: 'Some interesting ways Google ensures their codebase stays secure, across billions of lines of code and ~30,000 software engineers.'
tags: [blog]
slug: 'code-security-at-google-find-fix-vulnerabilities-in-code'
published: true
---

Google has a [multi-billion-line codebase](https://cacm.acm.org/magazines/2016/7/204032-why-google-stores-billions-of-lines-of-code-in-a-single-repository/fulltext) and ~30,000 software engineers. Here are a few things we found interesting about how Google keeps its massive codebase secure and thinks about vulnerability management, from the O'Reilly book [Software Engineering at Google](https://abseil.io/resources/swe-book) (published in March 2020 and [free to read](https://abseil.io/resources/swe-book/html/toc.html)).

### Keeping static analysis actionable with strict criteria and a quick feedback loop

Static analysis can catch many known security problems, but it's useless (or even actively harmful) if devs are trained to ignore it.  To maintain devs' confidence in static analysis at Google, their [Tricorder](https://ieeexplore.ieee.org/document/7194609) static analysis platform has a "relentless focus on … deliver[ing] only valuable results to its users." Google has 4 criteria for new static analysis checks:

> * Be understandable
> * Be actionable and easy to fix
> * Produce less than 10% effective false positives
> * Have the potential for significant impact on code quality

Also, Tricorder makes it easy for devs to share feedback about static analysis, with "Not useful" and "Please fix" buttons in the user interface. Teams that create static analysis checks review this feedback, and unhelpful checks are removed or improved.

### Show static analysis in code search and browsing tools

Usually static analysis is consumed in the IDE and at code review time for only the changed portion of the code, but Google also exposes static analysis for the entire codebase in its code search and browsing tool. At Google, this is particularly useful for security teams to view all instances of a problem when fixing a problem that may be present across the entire codebase.

### Use large-scale changes to patch a critical vulnerability

The [Log4j "Log4Shell" incident (CVE-2021-44228)](https://about.sourcegraph.com/blog/log4j-log4shell-0-day/) wasn't the first of its kind and won't be the last. In [Operation Rosehub](https://opensource.googleblog.com/2017/03/operation-rosehub.html), Googlers recount how their internal large-scale changes tool would've helped with a similar issue a few years ago:

> In early 2016, a vulnerability in the Apache Commons library allowed any Java application with a vulnerable version of the library in its transitive classpath to become susceptible to remote execution.
>
> ...
>
> Internally at Google, we have a tool called Rosie that allows developers to make large scale changes to codebases owned by hundreds of different teams.

Google devs frequently apply large-scale changes to fix security issues across Google's entire codebase. But at the time, no such tool existed inside most other companies or for the open-source universe. So, Google "recruited even more engineers from around Google to patch the world's code the hard way," eventually patching 2,600 open-source projects.

The 2017 blog post retelling the Operation Rosehub story ends with a plea for devs to pay "attention to the fact that the tools now exist for fixing software on a massive scale." (This is one of the inspirations for Sourcegraph [Batch Changes](https://about.sourcegraph.com/batch-changes) ([docs](https://docs.sourcegraph.com/batch_changes)), which helped many organizations [find and fix the recent Log4j issue](https://about.sourcegraph.com/blog/log4j-log4shell-0-day/#Automate-PRs-to-fixmitigate-the-log4j-0-day-across-all-your-code) across their entire codebase.)

### Thank you

We are so appreciative of Google and the authors of the [Software Engineering at Google](https://abseil.io/resources/swe-book) book for sharing what they've learned--and for making the book [free to read for everyone](https://abseil.io/resources/swe-book/html/toc.html).

Want to see more about how Google manages their massive codebase? Check out "[An ex-Googler's guide to dev tools](https://about.sourcegraph.com/blog/ex-googler-guide-dev-tools/)."
