---
title: 'Go code intelligence on Sourcegraph: now in general availability (GA)'
authors:
  - name: Quinn Slack
    url: https://twitter.com/sqs
publishDate: 2017-01-25T00:00-07:00
tags: [
  "blog"
]
slug: go-code-intelligence-on-sourcegraph-now-in-general-availability-ga
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
---



First, some background: Beyang and I have deep respect for how Google builds software. Beyang interned there, and I've worked with Googlers on many open source projects, including Chromium. What’s their secret? How are they so good?

Ask any Google developer, and they’ll give much of the credit to their internal Code Search web app, which lets them navigate and cross-reference the entire codebase by function calls, authors, etc. They’ll tell you that Code Search makes them smarter and more productive. (You may want to time-box the conversation, because they sure love to talk about Code Search!)

Google’s founders and legendary early engineers invested in developer success early on because they understood that developers deserve the best tools for the job. The rest is history: Google’s engineers were (and are) able to ship world-class products — and build one of the most valuable companies in the world.

#### The best way to read and understand Go code

We’re building [Sourcegraph](https://sourcegraph.com) to give developers everywhere, at any company, these same superpowers. Today, we’re excited to announce that Sourcegraph’s Go support is in general availability (GA) for both public and private code. Developers and teams using Go can:

**Navigate code and view all references, locally and across repositories**
See everywhere a function is called, who’s using it, and _when_ they last used it.

[![](https://cdn-images-1.medium.com/max/800/1*gG3qY8QA96DhLeZqGRiWdA.png)](https://sourcegraph.com/join)View all references

**View the authors of any code file**
See blame information inline with a simple “Show Authors” toggle, including the author and date last modified.

[![](https://cdn-images-1.medium.com/max/800/1*ZaZ1yERYSTVAaTgQKRcsgQ.png)](https://sourcegraph.com/join)View author and modified date

**Search by symbol**
Quickly jump to a variable or function anywhere in a repository with the “**/”** hotkey.

[![](https://cdn-images-1.medium.com/max/800/1*ixUXGr_lDINMSzyXtF81Iw.png)](https://sourcegraph.com/join)Search by symbol

Thanks to everyone who has been using Sourcegraph so far and sending us feedback (check [our homepage](https://sourcegraph.com) for some of their nice words). As of today, you’ll see a brand new interface, a vastly improved support for cross-repository references, and much better performance overall. We’ve also posted [pricing plans](https://sourcegraph.com/pricing) for usage of Sourcegraph on private code (and will be reaching out to all current beta users this applies to).

[![](https://cdn-images-1.medium.com/max/800/1*71FZEE4Nr5RYmG5cFrB1eA.png)](https://sourcegraph.com/join)

What’s next? We’ll be releasing support for more languages on Sourcegraph as fast as we can, when each language’s analyzer meets our quality bar. Follow our progress on the [Sourcegraph master plan](https://handbook.sourcegraph.com/company/strategy). You can also try our alpha support for TypeScript, or sign up for [private alpha/beta access to other languages](https://sourcegraph.com/beta).

### About the author

_Quinn Slack is the CEO and co-founder of Sourcegraph, the code intelligence platform for dev teams and making coding more accessible to more people. Prior to Sourcegraph, Quinn co-founded Blend Labs, an enterprise technology company dedicated to improving home lending and was an egineer at Palantir, where he created a technology platform to help two of the top five U.S. banks recover from the housing crisis. Quinn has a BS in Computer Science from Stanford, you can chat with him on Twitter [@sqs](https://twitter.com/sqs)._
