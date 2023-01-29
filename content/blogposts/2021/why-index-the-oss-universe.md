---
title: Why we’re indexing the OSS universe
description: 'We’ve indexed over 1M open source repositories on Sourcegraph cloud to bring code search to the open source universe and code literacy to a much wider set of people.'
authors:
  - name: Beyang Liu
    url: https://twitter.com/beyang
publishDate: 2021-08-19T00:00-07:00
tags: [blog]
slug: why-index-the-oss-universe
heroImage: /blog/blogIndexing1200x627.jpg
socialImage: https://about.sourcegraph.com/blog/blogIndexing1200x627.jpg
published: true
---

![Why we're indexing the OSS universe graphic](/blog/blogIndexing1200x627.jpg)

We’ve indexed over 1M open source repositories on Sourcegraph cloud to bring code search to the open source universe and code literacy to a much wider set of people. By the end of the year, we will have grown our index to include every open source repository with more than 1 star on GitHub, GitLab, and other code hosts.

Guido van Rossum, the creator of Python, once said:

> "We compare mass ability to read and write software with mass literacy, and predict equally pervasive changes to society. Hardware is now sufficiently fast and cheap to make mass computer education possible: the next big change will happen when most computer users have the knowledge and power to create and modify software."

From the beginning, Sourcegraph set out to help more people understand code by making an intuitive and fast code search engine. Our ultimate [mission](https://handbook.sourcegraph.com/company/strategy#mission)—to make it so everyone can code—is driven by the conviction that coding should be a universal skill. To make it so, there needs to be a way to easily search, find, and learn from existing code. While the issue of mass code literacy is much bigger than Sourcegraph, we think that making the world of open source more accessible through universal code search can help lower the barrier to entry to programming, support open source maintainers, and help more people discover and interact with code.

Our starting point is to make code easier to read for a wider set of developers. With the announcement of our [Series D funding](https://about.sourcegraph.com/blog/announcing-sourcegraphs-series-d-round/) last month, we promised to bring code search to every company building software and every dev in the world.

This is why we're indexing the entire open source universe on Sourcegraph cloud, and we’re announcing our first big milestone: indexing over 1M of the most-starred repositories on GitHub, which encompasses every repository with more than 12 stars. We're prioritizing by quality, because when you're searching over code, you care about finding the best function or best usage example, not just some random code snippet. By the end of the year, we will have grown our index to include every open source repository with more than 1 star on GitHub and GitLab (that’s 5M+ repos).

We’re also making it easier for developers to search and understand their own code. In addition to setting up and managing a self-hosted Sourcegraph instance to search your own code, we’re launching a Public Beta for private code on Sourcegraph cloud. You can now connect Sourcegraph cloud to your private repositories to search and navigate your own public or private repositories on the cloud, making universal code search even more accessible to every dev. Try it for yourself by creating an account on Sourcegraph.com and adding your code.

While we’re focused on creating the best search experience for devs in the near-term, we’re looking forward to our [5-year vision](https://handbook.sourcegraph.com/company/strategy#5-year-vision) to make the universal code graph accessible to everyone.

## Expanding code literacy

As the world has transitioned to the digital era, our lives are increasingly dominated by the use of technology and software. Yet only [0.3% of the world’s population](https://www.future-processing.com/blog/how-many-developers-are-there-in-the-world-in-2019/#:~:text=Evans%20Data%20Corporation%20recently%20announced,currently%2026.9%20million%20developers%20worldwide) can read and write code. Similar to how literacy made it possible for more people to contribute and participate in shaping culture and society, code literacy is a gateway for involving more people and perspectives in shaping a world increasingly defined through software.

Code is inaccessible to most people not because it’s inherently difficult to read. It's easier and more straightforward than most human languages. But what's difficult is setting up an environment where it's easy to walk through the reference graph of code—it's as if you had to know how to spin up a web server just to make hyperlinks work on the web.

Code search across the open source universe lowers that barrier to entry. Imagine being a new developer or someone just learning how to code and coming across a line of code you’ve never seen before. You search for that code on Sourcegraph and find every public reference—regardless of what repo or code host it lives in—and real life usage examples intelligently ranked by relevance. Code search opens up a much wider world of code to learn from and build with.

And it's not just developers. We've already seen among our enterprise customers instances of non-developers using Sourcegraph to understand pieces of code that are relevant to them. Customer support engineers, product managers, and members of the sales and marketing team have opened up Sourcegraph to debug issues, understand how user metrics are being collected, and identify which engineering team to ask for further investigation. We think this is just the tip of the iceberg and a sign of the great potential of expanding code literacy.

## Supporting open source

Indexing the open source universe doesn’t only benefit consumers of open source software. With massive adoption of OSS across different projects and products, universal code search can facilitate more community sharing and collaboration, and help authors and maintainers save time, gain greater project exposure, and see how their code is being used by others.

> “The modern world is built on open source software, most of the critical apps and products we use daily won't exist without it. Sourcegraph indexing the entire open source code on the web feels like the "Google" of open source. Its code search tool is a massive leap for collaboration in the open source community. It will allow more people to explore projects, walk through large codebases with ease, even discover dependent projects. This is such a huge step forward!" - Segun Adebayo, Creator of Chakra UI

<div style={{position:'relative'}}>
	<blockquote className="twitter-tweet" style={{textAlign:'center'}} data-conversation="none" cards="hidden"><p lang="en" dir="ltr">I actually start to share open source code in tickets and chat using links to sourcegraph. Its just a straight up better code browsing experience, only second to local IDE. That helps others navigate and understand issue a lot faster. Example <a href="https://t.co/baVKwWRgIb">https://t.co/baVKwWRgIb</a>.</p>&mdash; Son Luong (@sluongng) <a href="https://twitter.com/sluongng/status/1415667615100325889?ref_src=twsrc%5Etfw">July 15, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
	<blockquote className="twitter-tweet"  style={{textAlign:'center'}} data-conversation="none" cards="hidden"><p lang="en" dir="ltr">I&#39;m biased, but <a href="https://twitter.com/sourcegraph?ref_src=twsrc%5Etfw">@sourcegraph</a> is so useful for open source maintainers.<br/>I want to deprecate a method in Ohm, and I&#39;m wondering how many people use it. A quick Sourcegraph tells me: not many.<a href="https://t.co/KHw3rx9nXi">https://t.co/KHw3rx9nXi</a></p>&mdash; Patrick Dubroy (@dubroy) <a href="https://twitter.com/dubroy/status/1420293649519230978?ref_src=twsrc%5Etfw">July 28, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
</div>

Maintaining an open source project and community is a herculean task. In a recent Sourcegraph [podcast episode](https://about.sourcegraph.com/podcast/devon-zuegel/), Devon Zuegel, creator of GitHub Sponsors, called maintainers the linchpins of the OSS ecosystem, saying “I see the maintainers of open source projects as sort of the keystone species of the entire open source ecosystem. There aren't that many of them, so they're easy to overlook, but actually they're deeply important and if they're not doing well, the whole ecosystem is not going to do well.”

To support open source, we have to support maintainers. We think that indexing the open source universe will save maintainers time by enabling new contributors to learn the codebase while cutting down on the volume of one-on-one, repeat questions. This will let maintainers focus more on important tasks like building the community, writing great docs and code, and—last but not least—actually and sustainably living the part of their lives that aren't dedicated to the project!

## Final thoughts

Scaling universal code search to this size has been a massive and rewarding technical undertaking. As I noted in my last post, [The Future of Code Search](https://about.sourcegraph.com/blog/the-future-of-code-search/), “really good code search needs to index the complete world of knowledge the user is hoping to explore, and it needs to be really, really fast.”

One of the ways in which we’re scaling Sourcegraph is by improving one of our upstream open source dependencies that handles indexing. We've written up a [blog post](https://about.sourcegraph.com/blog/zoekt-memory-optimizations-for-sourcegraph-cloud/) describing how we were able to significantly reduce the memory usage of Zoekt, an open source trigram-based code search engine written by the brilliant Han-Wen Nienhuys (who will also be appearing on an upcoming episode of the Sourcegraph podcast). We plan to upstream this change and will talk more about how we plan to contribute to Zoekt in a future post.

In the meantime, try your first search on Sourcegraph.com and let us know what you think on [Twitter](https://twitter.com/sourcegraph). If you’re not sure where to start, check out our [docs](https://docs.sourcegraph.com/code_search).
