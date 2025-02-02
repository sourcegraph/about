---
title: 'Rethinking search results ranking on Sourcegraph.com'
description: 'Sourcegraph has overhauled the ranking algorithm to prioritize relevancy and code reuse for searches on popular OSS repos.'
authors:
  - name: Steve Yegge
    url: https://www.youtube.com/user/SteveYegge
publishDate: 2022-11-08T10:00-07:00
tags: [blog]
slug: new-search-ranking
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/new-search-ranking/PageRank-hero-illustration.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/new-search-ranking/PageRank-hero-illustration.png
published: true
---

When I joined Sourcegraph just eight weeks ago, I made [various predictions and proclamations](https://about.sourcegraph.com/blog/introducing-steve-yegge) about how we were going to revolutionize scalable code search, navigation, and understanding with Sourcegraph's code intelligence platform (CIP). Today we're releasing our first big steps on that path.

Every day, more code is written, more code complexity piles up, and more people write their first line of code.

That means Sourcegraph is needed more and more each day. People need to understand their code, but dev tools today haven't been capable of truly doing that at scale in the ways we need.

### Announcing Search Ranking and Relevance

I'm thrilled to announce that Sourcegraph has launched PageRank-driven Code Search result rankings that prioritize relevance and showing reusable code. This launched today for searches on popular OSS repos on https://sourcegraph.com, and we are working to bring ranking to private Sourcegraph deployments soon.

This launch ushers in a new era of search-result relevance, helping you find the code you're looking for on the first try.

Sourcegraph's new search ranking uses a rendition of the Google [PageRank](https://en.wikipedia.org/wiki/PageRank) algorithm on source code, powered by the code symbol graph from our sophisticated code intelligence platform (CIP).

Code Search is now relentlessly focused on helping you find **relevant** answers. Consider this comparison from an early run, with non-pageranked results on the top followed by pageranked results on the bottom.

<Figure src="https://storage.googleapis.com/sourcegraph-assets/blog/new-search-ranking/unranked-example.png" alt="Code Search results before PageRank" />

**Without PageRank:** The #1 search result in this image is a match inside a source comment. Although this might be relevant in some contexts, it's generally not so great to suggest as the top result.

<Figure src="https://storage.googleapis.com/sourcegraph-assets/blog/new-search-ranking/ranked-example.png" alt="Code Search results after PageRank" />

**With PageRank:** With the pageranked results, you only see relevant matches. Over time, this adds up to tremendous time savings. And devs will always gravitate towards things that save them time.

Why is using PageRank for Code Search so revolutionary and effective? Let's dig in.

<Figure src="https://storage.googleapis.com/sourcegraph-assets/blog/new-search-ranking/pagerank-visual.png" alt="Image depicting the PageRank algorithm" caption="Source: Wikipedia: User:Mayhatmate / CC-BY-SA-3.0" />

In the illustration above, the size of each smiley is proportional to the number of other smileys pointing at it. For web pages, Google's PageRank tracks which pages are pointed at (referenced) most often by other web pages. PageRank is a measure of how “cool” they are: Who's pointing at them?

For source code, the pointing hands are code usages: function calls, imports, that sort of thing. If there's only one arm pointing at a smiley, that's a code use. But if more than one arm is pointing in… that's reuse! The big yellow smiley is being reused by more code than any other smiley in the diagram. The PageRank algorithm uncovered this fact.

The implication here is that **PageRank is a measure of code reuse**. Which makes it an incredibly powerful ranking signal. Because when you're doing a code search, you are almost always looking for code you can reuse.

Developers should be demanding relevant search results. And with Sourcegraph, they can!

### A new era for Code Search

For Code Search, PageRank is not an end, but a beginning. Adding intelligent ranking kicks off a new era of search quality, in which we begin to measure how much devs like the results we are showing them.

With PageRank-powered search, the clear majority of the search results you see are relevant, reusable code. Which means you get what you're looking for faster.

But sometimes you'll see a result and think, “Hmmm, I don't think that really belongs there.” Irrelevant results waste everyone's time. And so at Sourcegraph, we've begun that race of trying to serve the perfect results, on every query.

With this launch of intelligent ranking, Sourcegraph is now far and away the highest-relevance code search engine. But we are far from finished! Our quest for improving code search result relevance will continue forever.

Which means we will always be saving developers the most time. Saving you the most time.

As for sequencing, well, we wanted to get the new ranking working first on the largest Sourcegraph deployment, which is sourcegraph.com. Once we are 100% satisfied with the algorithm, we'll begin work on bringing ranking to private Sourcegraph deployments. We aim to bring this experience to all of our customers.

### What's such a big deal about all this?

Just because you can implement PageRank doesn't magically make you Google. Lookin' at you, Bing.

Google's search quality comes from their knowledge graph. They have deep domain intelligence and thousands of hand-coded heuristics, to ensure you get what you're searching for on the first try, every time.

What's the equivalent knowledge graph in code search? Why, that would be the Source Graph, of course. Yep, that's right. In order to compute ranking on code, you run it on the source graph.

That source graph is not a simple matter to create. We did it with our code intelligence data, which scales up to the world's largest codebases.

This makes ranking our very first major victory for Sourcegraph's Code Intelligence Platform.

🎉🎉🎉

### Nothing matters more than Relevance

We will continue to make improvements to our search relevance in every dimension over the coming days, weeks, months, and years. We will scale it, tune it, compute it in different ways for different customer profiles, make it customizable with customer-provided ranking signals, and build hundreds of code-intelligence-driven improvements.

If you actually go play with our ranked results on sourcegraph.com, keep in mind that it's brand-new and evolving rapidly. We cover git repos with 5+ stars at the moment (around half a million repos total); that coverage will gradually expand to cover all repos. We will start reporting on our search quality and coverage soon.

And you will see many other cool enhancements to Sourcegraph, things that go far beyond ranking, further differentiating us from the pack. Some of them may even land this year. 

### The Future of Code Search

This is good progress, and there's a lot more going on; you'll be seeing a lot of announcements over the coming months. We aim to close the gap with Google Code Search quickly, which will make Sourcegraph the undisputed category leader by a country mile. But that's just the beginning. We have a lot of innovation in the works.

I made loud campaign noises and sweeping promises last time I posted, back in September. I had confidence in Sourcegraph's amazing, world-class team and their technology. I knew we were going to achieve great things in a very short time, and the team delivered in a huge way.

This Sourcegraph team is world-class, and you'll be hearing even more from us soon.

Stay tuned.
