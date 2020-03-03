---
title: Joining Sourcegraph
author: Michael Fromberger
authorUrl: https://github.com/creachadair
publishDate: 2020-03-02T00:00-06:00
tags: ['blog','Google','Kythe project','Universal Code Search']
slug: fromberger-joining-sourcegraph
heroImage: /blog/blog-fromberger-joining.jpg
published: true
---

<img style="float:left;width:150px; margin-right:15px" src="/blog/michael-fromberger-twitter-pic.jpg">I recently joined Sourcegraph. Unless you know me personally that fact probably doesn't matter to you—but I have been a fan of Sourcegraph for years, and I'd like to explain why.

Source code is the most fascinating technology humans have created, second (maybe) only to textiles. It's no accident that the English words "text" and "textile" both derive from the same Latin root “texere” (to weave): Writing, like weaving, is about combining simple elements into a complex whole. Writing code adds another dimension: a program not only relates or describes a computational process, but also implements that process. In a real sense, a program IS a machine, or at least—in the case of smaller components like a function or a library—a concrete part of one.

Building software requires us to understand the structural and semantic relationships described by source code. Even as trivial a program as "Hello, world!" depends on a vast footprint of code. Real applications are built atop thousands to millions of lines of source, deployed across the network, maintained by hundreds to thousands of programmers, working concurrently. To make sense of all that, we need tools to help us discover and observe those relationships.

In the old days—by which I mean prior to the explosion of the World-Wide Web in the 1990s—mostly only big companies had big programs. Application code was mainly proprietary, and code reuse was typically an in-house practice, or exported by way of carefully-curated SDKs and extension APIs. Many tools and techniques to understand and manage the complexity of big programs were, historically, the property of big companies too. There's still a lingering perception among developers that only big companies need big-company tools.

A lot has changed in the past quarter-century: Now, even hobbyist programmers, and bootstrapped startups working in coffee shops, depend on hundreds or thousands of free and open-source libraries and tools. Together these comprise millions of lines of non-proprietary code, maintained and updated by a worldwide community of developers: In aggregate, that community exceeds—and often includes—the engineering staff of the largest corporations.

So, it’s no longer just big companies that need these tools: Anyone who writes and maintains software has to grok and wrangle the dependencies in their code to keep things working. As the global economy increasingly depends on software for banking, logistics, advertising, planning, and accounting, we're approaching a point where every company is, in effect, a software company—even if that's not its source of revenue.

I led the [Kythe project](https://en.wikipedia.org/wiki/Google_Kythe) at Google, and saw how much leverage Google developers get from high-quality code search. I joined Sourcegraph because I want this [Universal Code Search](/universal-code-search/) technology to be available to all developers at all companies. Providing these tools to developers outside the walled garden of big corporate infrastructure is no small task, however.

When working on big company infrastructure, it's easy to develop a kind of tunnel-vision: Because it has a captive audience, proprietary infrastructure builds up inertia, and being proprietary insulates it from market forces that bring in new ideas. A smaller company has a tangible advantage in this regard. Beyond the fact that Sourcegraph is working to build these tools, I appreciate its strong customer focus. It keeps us honest, not only to our customers but to ourselves: It's not enough that our ideas be good in the abstract, we want them to be useful in practice—and the proof is that people are willing to pay for our products.

Finally, I also admire the people involved. Quinn & Beyang have built a smart, hard-working, empathetic, all-remote team, that I feel privileged to be a part of. I am just getting started, but I feel optimistic about what Sourcegraph will accomplish, and I'm glad to have an opportunity to be part of that. This isn't intended to be a recruiting post, by the way, but if you’re interested in these problems, we are indeed [hiring](/jobs/) and would love to talk with you.