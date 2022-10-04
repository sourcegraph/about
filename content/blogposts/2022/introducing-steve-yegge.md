---
title: Steve Yegge joins as Head of Engineering (or, “Why I left retirement to join Sourcegraph”)
description: "TL;DR: Steve Yegge has joined Sourcegraph as Head of Engineering, where we are building the world’s most open and comprehensive code intelligence platform (CIP)."
authors:
  - name: Steve Yegge
    url: https://www.youtube.com/user/SteveYegge
publishDate: 2022-10-04T16:00
tags: [blog]
slug: introducing-steve-yegge
heroImage: https://storage.googleapis.com/sourcegraph-assets/about.sourcegraph.com/blog/2022/steve-yegge-joins-sourcegraph.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/about.sourcegraph.com/blog/2022/steve-yegge-joins-sourcegraph.png
published: true

---

Hey folks! TL;DR: I have joined Sourcegraph as Head of Engineering, where we are building the world’s most open and comprehensive code intelligence platform (CIP).

Those of you dear readers who know a little about my background, know this is a no-brainer. For me, there’s literally nothing on Earth that could be more fun and rewarding than this.

But for those of you who are just joining, welcome! If you’ll allow me, I’ll bring you up to speed in six short episodes filled with drama, intrigue, and dastardly deeds. The first episode is the prequel; the rest are present-day.

See you after the movie!

#### Episode I: The Phantom Code Base

_Google Kirkland, 2005: The party moves to Google._

Every ten years or so, there’s a big party in the industry for compiler folk.

In the mid-90s the party was at Borland, who had a legendary run of gloooorious innovation in language tools, with Turbo C, Borland C++, Turbo Pascal, etc. That run lasted right up until the party moved over to Microsoft, where it stayed until the mid-2000s; meanwhile, Borland, with their compiler team lured off to moneyland, withered away to obsolescence.

Microsoft, too, had a legendary run of gloOOorious innovation in language tooling. We got the CLR, we got C#/.NET, Visual Studio, VS Code, _tons_ of amazing stuff.

OK, got it. Compiler folks create code intelligence, which in turn powers developer tooling of all shapes and sizes. And when compiler folks all show up to party in one place for a few years, world-class advancements happen for developers everywhere.

In the mid-2000s, the party started shifting over to Google. 

Which is where I was working, down the street from Microsoft in the Google Kirkland office.

When the Microsoft devs would show up at Google, they’d throw an impressively theatrical tantrum over the lack of tooling. All the basics for build, develop, deploy were in place. **But they couldn’t find their way around Google’s code base.** It felt like everything was invisible.

By 2008, I’d had enough of their accurate and frankly hurtful complaints. I decided to build a powerful code intelligence platform called [Grok](https://www.youtube.com/watch?v=KTJs-0EInW8). The idea was to harvest code intelligence from production compilers, aggregate it into a queryable knowledge graph, and serve the intelligence via APIs to other tools. It was a way to help _all_ tools make it easier for you to navigate code.

Grok wasn’t really a product; it was an engine that could power other products.

Grok went on to resounding success at Google, serving code intelligence into editors, batch automation tools, code review workflows, search engines, code browsers, IDEs, command lines, code query engines, notebooks, and many ad-hoc and bespoke tools.

One particularly powerful tool enhanced by Grok is **Google Code Search**, which I’m guessing you’ve heard of, at least if you have ever met _anyone_ who has written code at Google. Code Search was built by a different team of Google engineers, who also wanted to make it easier to find your way around the code base. They tackled the search problem: finding the code where you want to start your exploration. Whereas Grok guides you _after_ you click a search result.

The potent combination of Grok and Code Search created something unprecedented even from today’s lens in 2022. The Code Search team had Google-scale code search built on Google’s reusable search infrastructure. Even without precise code intelligence, Code Search was a solid product.

Grok then contributed world-class code intelligence, which Code Search used to increase the precision, accuracy, and overall _trustworthiness_ of the product.

For developer tools, it’s all about trust. And for language tools, IDEs have set a very high bar for accuracy and precision.

Google Code Search is like The Matrix, except for developers. It has a near-perfect satisfaction score on Google’s internal surveys, and pretty much every dev who leaves Google misses it.

Google engineers today can navigate and understand their own multi-billion-line code base better than perhaps any other group of devs in such a large environment.

So you’d _think_ someone would have done it for the rest of us by now.

#### Episode II: A Lack of Clones

Long story short, there have been many attempts at doing code search outside Google. And some of them are pretty good, just like Google Code Search was, before Grok supercharged it.

But in the 14 years since I began the Grok project, nobody outside Google ever stepped up to finish the job. I had of course wanted to do it myself, and declared as much; ultimately, though, Google wouldn’t fund it. So I put it on pause, thinking to revive it one day, and then I got sidetracked with clouds and ads and games and all sorts of stuff. 

I just figured someone else would do it! Right?

There’s been a lot of innovation in the code intelligence space since then. Microsoft has continued to innovate, JetBrains is amazing, and so on.

But nobody has succeeded in making something like Grok. It was hard enough at Google, where we (a) had access to world-class scaling infrastructure, (b) had only one build system, (c) used only a few languages, and (d) had all our code in a monorepo with flat permissions. 

You couldn’t ask for a more homogenous environment than Google, and Grok was _still_ hard.

Doing Grok outside Google? Supporting heterogeneous environments and enterprise-scale code deployments? That is orders of magnitude harder. It would require a truly tremendous, sustained level of funding, effort, and coordination.

The result is that **mediocre tools have been normalized in our industry**. Most of the tools out there (outside big IDEs) are using heuristic-based (aka “wrong”) intelligence rather than compiler-precise intelligence. Which means devs are getting slowed down with a thousand paper cuts in their workflow.

One thing is clear: The only time we ever get to witness a renaissance in code-intelligence is when all the compiler folks come together from around the world to party somewhere that lets them be free.

Which costs mooooooney.

CIPs are just really hard!

So for a good ten years, more maybe, I despaired of anyone else attempting it. But I always wished I’d get the chance to do it myself, someday.

#### Episode III: Revenge of LSIF

Couple months back, Quinn and Beyang, the Sourcegraph founders, reached out to me to see if there might be a fit for leading their engineering team.

Sourcegraph was actually inspired in part by Google Code Search, from [Beyang’s time at Google](https://about.sourcegraph.com/blog/ex-googler-guide-dev-tools). Go figure!

I had always admired Sourcegraph, from afar. They were trying to do something really similar to my vision. They have been mostly focused on the code search part (which I did NOT do at Google). It’s a hard problem in its own right. It’s clear that they have _wanted_ to do more code intelligence work, but search has been a massive challenge to scale up globally.

Just last year (2021) I’d been asked by a random startup’s board member why that startup couldn’t use Sourcegraph as a platform for source code analysis. I’d investigated and found that Sourcegraph has been using [LSIF](https://microsoft.github.io/language-server-protocol/specifications/lsif/0.4.0/specification/) indexing. LSIF serves Sourcegraph’s use cases (just barely, at that). But LSIF is a lossy format, one unsuitable for a code intelligence platform.

If LSIF was what I was going to be working with, I was going to have to ask the waiter for the check.

But I decided to take a look, because Sourcegraph’s revenue and enterprise sales have really taken off in the past year or two.

I had lots of chats with the Sourcegraph team, and learned about their open company. It’s fully remote, heavily async, and basically a great blueprint for startups in a Covid world. I learned a bit about their product, which has grown and matured over the years.

It was all pretty interesting, but at that point they weren’t a clear choice over any of the other companies I was talking to.

But then a surprise came: **They asked me to write some code.**

This was the first leadership interview loop in the past 12 months (20+ companies) in which _anyone_ had asked me to write code. They wanted me to fix a bug in Sourcegraph, or add a feature, or something. Whatever. They didn’t care.

So I did! I took them up on the challenge, and I wrote a little code.

And that, dear friends, is how I wound up at Sourcegraph.

Because while I was doing my homework, I discovered two really cool things.

First, I found that Sourcegraph is actually the best-in-class tool for navigating and understanding source code spanning multiple repositories. I was in a rush to get the interview coding homework done, which meant I needed to understand Sourcegraph’s codebase as quickly as possible. I had every single tool at my disposal: Emacs, cmdline, GoLand, VS Code, GitHub, anything I wanted. And I found myself using Sourcegraph about 50% more than the other tools _combined_ when it came to trying to tease apart frontend-to-backend flows and other parts of their code. I wasn’t expecting it; it just happened to be the path of least resistance.

So that’s pretty cool. Sourcegraph has grown up and is a legit category leader. However, that alone probably wouldn’t have been enough to get me on board.

But I found something else, too.

Yup. You guessed it. You _know_, given all the context here, that there is only one possible explanation for how it’s a “complete no-brainer” that I wound up here at Sourcegraph.

I’ll give you three guesses, and the first two don’t count.

#### Episode IV: A New Hope

Sourcegraph, you see, has built Grok. 

The mission was carried out in secret. An open secret, to be sure. It’s all OSS. But that’s sort of hard to search these days, heh. 

But it was even secret from a lot of the rest of the company! Or at least, its significance and world-changing potential were lost in the noise of everything else going on.

It’s understandable, really. Because there’s a lot going on. Sourcegraph, as I mentioned above, is now the category-leading industrial-strength multi-repo code search tool and code explorer. It took a LOT of effort to build that.

While all that was going on, though–one small fierce corps of Sourcegraph backend engineers, working in rare spare cycles, somehow managed to carry the Ring of Code Intelligence from the Shire of Prototypes all the way to the Mount Doom of Enterprise Readiness, so to speak, all while the search-scaling war raged about them.

This little band of compiler folk created [SCIP](https://github.com/sourcegraph/scip) - the source code intelligence protocol. A small thing, really. Just a bauble. You’d hardly notice it in the sea of checkins.

But during my coding marathon for my tech interview with them, I saw what was going on in the backend code: A revolution! The secret underground is pivoting from LSIF to SCIP, invisibly, as the new Sourcegraph backend.

Sourcegraph’s SCIP – it’s the return of Grok. A diamond mine in the glass marble economy of heuristic-based code intelligence. A format for storing enough code intelligence to power a thousand boosts to developer velocity. It’s been lurking in Sourcegraph for months now.

But it was always converted to LSIF before actually using it anywhere! That’s… the “invisibly” bit.

So ironically, this incredibly powerful code-intelligence jet engine they’ve created has been put into lawn-mower-engine mode.

But it’s _there_. Building on it is relatively straightforward, since you just have your indexers collect more information. The whole idea behind Grok and SCIP is that they are _extensible_. You can just keep modeling in more kinds of intelligence–from the community, from industry, from academia. As soon as it gets started, it gains momentum naturally.

Sourcegraph is building a code intelligence platform!

Imagine my surprise.

#### Episode V: Stevey Strikes Back

Wait, how did I wind up being the bad guy in these titles. Who even wrote this?

The rest, folks, was history. I fell in love with Sourcegraph. All other thoughts of doing ads, or mobile banking, or some other godawful soul-draining thing were banished. I **had** to go to Sourcegraph.

People who know me, know what an incredible match this is for me. It’s unfinished business!

I’m pleased to share that I’ve joined Sourcegraph as the new Head of Engineering, and together, we will be taking Sourcegraph to the next level. And we’ll be launching the Sourcegraph Code Intelligence Platform.

You know how you know when something’s _actually_ big? When it grows exponentially.

So first stat for you: More than 1.8M devs have indexed 283 billion lines of code on Sourcegraph. It’s been doubling roughly every 8 months; the last doubling was in 6 months. So Sourcegraph has crossed the magic threshold for value in category, and it is growing exponentially.

They already have 4/5 FAANG and 4 of the top 10 US banks as customers, as well as some of the top tech companies from the last 10 years, like Uber, Twitter, Plaid, and Reddit. And the team at CERN building the Large Hadron Collider, companies launching satellites into space, leaders in machine learning and AI.

But the reality is, this is still Day One. The market is enormous, given that any company building software should be using a code intelligence platform. If they aren’t today, they will be soon.

From what I’ve seen, that platform will be Sourcegraph.

#### Episode VI: Return of the party

No really major Stevey blog post would be complete without a call to action.

Remember when the party was at Borland, and 80% of the world’s best compiler writers powered a renaissance in IDE tooling?

And then it happened again at Microsoft, at a scale orders of magnitude larger, just 10-15 years later. You should have seen some of the stuff they _didn’t_ launch (heya Phoenix peeps).

Well guess what? It’s been 15 years, folks. We’re starting the party up again.

I’m going to be banging the drums and generating a lot of hype around Sourcegraph’s code intelligence platform. It’s going to power amazing improvements in the Sourcegraph product itself. But you won’t need Sourcegraph’s search portal to use SCIP. You’ll be able to mine those diamonds however you like.

Existing developer tools will finally be able to leave the “glass marble” heuristic-intelligence economy behind, and gravitate towards SCIP as the open, universal “diamond” standard for code intelligence.

The massive training data sets from Sourcegraph’s open source SCIP index will power a whole new generation of ML enhancements to code search, code exploration, and code understanding.

This is it. The party’s starting up again. The worldwide compiler community is a very small place. Everyone knows everyone. We’ll be inviting all the communities for languages, static analysis, build systems, code hosts, and the broader dev tooling ecosystem. SCIP is an interchange format. It’s a way for us to agree to move to the next level. A way to create game-changing tools for developers.

Isn’t that what we all want?

With SCIP, Sourcegraph has stepped up to the challenge. And I’m so grateful that they have invited me along for the ride.

If you want to help, you can of course [come join us at Sourcegraph](https://boards.greenhouse.io/sourcegraph91), right from the comfort of your own home; [we are 100% remote](https://handbook.sourcegraph.com/company-info-and-process/remote). That’s one option.

But you don’t _have_ to join Sourcegraph to be able to party with us. [Our code](https://sourcegraph.com/github.com/sourcegraph/sourcegraph) and [our development](https://github.com/sourcegraph/sourcegraph/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc) are public. Everyone’s welcome (you're welcome in our [Discord community](https://discord.gg/s2qDtYGnAE), too!). And if you’re into search, or compilers, or ML-powered code intelligence, I think you’ll have an absolute blast.

Come help us build out the world’s biggest and best code intelligence platform! The party has already started.

Stay tuned.
