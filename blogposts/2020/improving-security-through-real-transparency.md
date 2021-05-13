---
title: "Improving security through real transparency"
author: Chayim Kirshen
publishDate: 2020-10-20
tags: [blog]
slug: improving-security-through-transparency
heroImage: https://sourcegraphstatic.com/blog/transparent-security-tomorrow.png
published: true
---

One of the things that comes with being an open source company is a commitment to transparency.  As an industry, we mostly think about this in terms of [source code](http://github.com/sourcegraph/), and at Sourcegraph we think of this in terms of the [company itself](https://about.sourcegraph.com/company), including [product direction](https://about.sourcegraph.com/direction). I’d like to extend that to security.  In the ideal world, security would be as open as our codebase, even if that ideal is a difficult reality. It might be an audacious idea, but it’s one that’s worth striving for.

## Background: Where is the industry today

For the most part, companies view security as a [cost center](https://go.kaspersky.com/rs/802-IJN-240/images/IT%20Security%20Econmics%20Report%209.18.17.pdf) instead of a strategic investment. As a result, security is seen as reactive rather than proactive, which has led to an average cost per incident of [$3.86 million in 2020](https://www.ibm.com/security/digital-assets/cost-data-breach-report/). Perhaps as a result, the average time to contain a breach now weighs in at a high of [280 days](https://www.ibm.com/security/data-breach), up from 206 in 2019.  It’s clear that there’s room for improvement.

It’s time to ask yourself, why don’t I know about a company’s security policies and procedures?  Why do companies affirm that they adhere to guidelines and maintain policies, but don’t disclose those policies?  Whilst procedures will always differ from company to company, at the very least we could be more transparent about them. Software development repeatedly gets a second set of eyes, through pull requests, architectural discussions, and testing.  This is one of the things that open source tries to solve; security deserves the same treatment. Let’s call this improved direction Transparent Security.

Being transparent about security goes deeper than sharing a report with a sales prospect. It goes deeper than sharing a cleaned up penetration test report, or having an easy to understand privacy policy and terms of service.  To start, transparent security involves sharing publicly, both the good and the bad. It involves disclosing vulnerabilities publicly, working to fix them publicly, and even having a [security roadmap](https://github.com/orgs/sourcegraph/projects?query=is%3Aopen+Security) that lives in the public sphere, and brings the [bazaar to the cathedral](http://www.catb.org/~esr/writings/cathedral-bazaar/cathedral-bazaar/).

## Where we are today

At Sourcegraph, we’re starting down the path to Transparent Security.  We’ve conducted our most recent penetration test with a trusted third party. You can download those results [here](https://drive.google.com/file/d/14ZIDhAql26THcLlgCbRhbhez9UXPeiGu/view?usp=sharing).  We maintain a [private repository](https://github.com/sourcegraph/security-issues) for security issues, but [publicly discuss our roadmap and backlog](https://github.com/orgs/sourcegraph/projects?query=is%3Aopen+Security). We disclose security vulnerabilities as they’re patched, and update our progress on the security front.  In some cases, we’re [public](https://github.com/sourcegraph/sourcegraph/issues/12263) with the [issues](https://github.com/sourcegraph/sourcegraph/issues/12269) we’re addressing, but at the same time, we’re not fully transparent —  yet.

## Where we want to be tomorrow

Security should never be focused solely on responsible disclosure and responding in reactive mode. It’s about proactively doing what’s right, to protect data. It’s about professionals working together for the common good. A transparent approach means we’re collaborating on that proactivity with the public, not just the Sourcegraph team. You, dear reader, can help be that value, that second set of eyes! The next step for Sourcegraph is to run ongoing vulnerability scans, and publish them publicly. We’ll begin by doing so after we’ve addressed some of the vulnerabilities, and over time these reports will be provided closer and closer to real time.  We’re in the midst of documenting our security policies, which we will post publicly in our handbook. This is only the beginning.

<div class="text-center">
  <img src="https://sourcegraphstatic.com/blog/transparent-security-tomorrow.png" alt="transparent security tomorrow, a path.">
</div>

## So how can you help?

There are plenty of great ways to help us make a better, more secure product.  You can [report a vulnerability](https://about.sourcegraph.com/handbook/engineering/security#reporting-a-vulnerability), or review the code, or even [contribute to Sourcegraph](https://www.github.com/sourcegraph/sourcegraph). Maybe you’d like to share your thoughts on security with us by emailing security@sourcegraph.com, or even [join the team](https://boards.greenhouse.io/sourcegraph91)!
