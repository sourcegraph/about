---
title: "We're deprecating Language Server support"
authors:
  - name: Eric Fritz
    url: https://eric-fritz.com
description: "We're dropping support for Language Server-based code intelligence from our product, effective 2021-09-06. Note that this will affect all instances that are not running a private extension registry, not just those upgrading to the current version of Sourcegraph."
publishDate: 2021-08-26T12:00-00:00
tags: [blog]
slug: deprecating-lsp
published: true
---

As of September 6, 2021, we will be [merging a change to the Sourcegraph language extensions](https://github.com/sourcegraph/code-intel-extensions/pull/664) that drops support for querying Language Servers. This method of [code intelligence](https://docs.sourcegraph.com/code_intelligence) has not been actively supported for over a year, in which time we've solidified our code intelligence approach using [LSIF indexes](https://docs.sourcegraph.com/code_intelligence/explanations/precise_code_intelligence).

We believe Language Servers have been unused (with Sourcegraph) in the wild for some time. Based on our analytics, enterprise usage was minimal. We've helped the remaining one or two users migrate to our LSIF-based precise code intelligence.

Removing the code paths associated with these unsupported and unmaintained features will greatly reduce cognitive clutter around how code intelligence results are determined. With less cruft, we'll become more able to iterate quickly on a single solution and provide a greater user experience.

Note that extensions published into Sourcegraph.com's public extension registry are made available **to all instances** (including your private Sourcegraph instance) **immediately** unless your Sourcegraph instance hosts a private extension registry.

### Does this affect my private instance?

If you haven't heard from us, probably not! We've been working with enterprise customers that we know were still using Language Server-based code intelligence. If this does affect your instance, we can provide assistance migrating you to LSIF-based precise code intelligence, or supply you with an older build of the Sourcegraph langauge extensions which you can load into your instance's private extension registry. Please [contact Sourcegraph support](https://about.sourcegraph.com/contact/) if this is the case.
