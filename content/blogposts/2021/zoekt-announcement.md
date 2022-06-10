---
title: 'Sourcegraph is accepting maintainership of Zoekt'
description: 'Today, we’re announcing that Sourcegraph is accepting maintainership of Zoekt, the prominent open source code search engine, from its creator, Han-Wen Nienhuys. This commitment ties directly into our mission of bringing code search to every developer in the world.'
authors:
  - name: Beyang Liu
    url: https://twitter.com/beyang
publishDate: 2021-11-09T00:00-07:00
tags: [blog]
slug: sourcegraph-accepting-zoekt-maintainership
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
socialImage: https://about.sourcegraph.com/blog/blogIndexing1200x627.jpg
published: true
---

Today, we're announcing that Sourcegraph is accepting maintainership of Zoekt, the prominent open source code search engine, from its creator, [Han-Wen Nienhuys](https://github.com/hanwen). This commitment ties directly into our mission of bringing code search to every developer in the world.

Sourcegraph has used Zoekt as a package dependency for building its code search index for years. It forms a substantial [piece of the technical foundation upon which we've built fast and scalable code search](https://about.sourcegraph.com/blog/zoekt-memory-optimizations-for-sourcegraph-cloud/) for Sourcegraph users and customers. Zoekt trigram indexes power every self-hosted Sourcegraph instance and the global code search index on [sourcegraph.com](https://sourcegraph.com/search), which now contains over 1 million of the most widely used open source libraries and projects. You can read about our latest work on [tackling the long tail of tiny repositories with Zoekt here](https://about.sourcegraph.com/blog/tackling-the-long-tail-of-tiny-repos-with-shard-merging/).

We've maintained a fork of Zoekt and have made a number of upstream contributions over the years. Members of Sourcegraph's team have been granted maintainer privileges for the past few months. Han-Wen has been a fantastic collaborator and incredibly generous with his time throughout.

On this occasion, readers might appreciate a quick backstory on how Zoekt was created. From Han-Wen:

> In 2016, I started working for Shawn Pearce, Git-hacker extraordinaire. Shawn created Gerrit, the code review and Git hosting system. His vision was to make Gerrit into a self-contained set of open source developer tools (“Google devtools in a box”). The code-browsing experience on Gerrit was a bit primitive, and code search was non-existent. I was in the Google Munich office, and since Google’s Code Search team was also there, Shawn suggested that I pick their brains to see if I could build something for Gerrit.

> I had a lot of fun conversations with their tech lead, and I discovered how interesting search is as a technical problem. Together, we explored the substring search algorithm that Zoekt currently uses. I got the first prototype working, and when I saw how fast it was, I quickly got addicted. The tech lead tried to warn me: there is lots more to search than finding substrings (query parsing, ranking, tokenizing, indexing, etc.). He was right, of course, but when starting a new project, you can’t be too realistic: I’m a little lazy, so I only start things I think are easy. The skepticism only served to pique my enthusiasm, and within a couple of weeks I had a release ready.

> Company priorities shifted, so after a few months, I had other tasks on my plate. Zoekt moved to become a 20% project. At the time, my wife lived in a different city during the week, so I would visit her one night per week (because I missed her). The train rides to and fro were perfect to work on Zoekt: I would think all week in the back of my mind about things to improve, and then during those train rides, I’d bang out the code.

> It’s always gratifying to see your own code being useful to others, so I’m really happy with Sourcegraph's use of Zoekt, and I’m thrilled to see one of my dreams (indexing all of GitHub) come to fruition. I trust that it finds good stewardship in the hands of the team, as they have assured me it will continue to be runnable standalone, and continue to be developed as open source.

You can hear Han-Wen tell more of the backstory in the [latest episode of the Sourcegraph Podcast](https://about.sourcegraph.com/podcast/han-wen-nienhuys/).

As of today, [github.com/sourcegraph/zoekt](https://github.com/sourcegraph/zoekt) will become the active main repository for Zoekt development. In the spirit of code search and open source, we suggest every reader do two things:

- Do a [regex search for zoekt\.\w+ lang:go on Sourcegraph](https://sourcegraph.com/search?q=context:global+zoekt%5C.%5Cw%2B+lang:go+count:1000&patternType=regexp). This conducts a regular expression search across the top 1 million open source repositories—using Zoekt trigram indexes—for usages of Zoekt as a package dependency.
- Go to [github.com/sourcegraph/zoekt](https://github.com/google/zoekt) and spin up an instance of Zoekt yourself.

We affirm our commitment to maintaining Zoekt as an open source project under its existing license (the same license that we use for the open source version of Sourcegraph), Apache 2.0. We will continue to make contributions that make sense for Zoekt's user base and will never eliminate the ability to run Zoekt as a standalone code search engine. If you're feeling it, join us in [saying thank you to Han-Wen](https://twitter.com/nienhuys) for building and open-sourcing an excellent developer tool.
