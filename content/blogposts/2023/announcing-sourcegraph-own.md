---
title: "Announcing Sourcegraph Own"
authors:
  - name: Malo Marrec
    url: https://twitter.com/malomarrec
publishDate: 2023-03-23T10:00-07:00
description: "Sourcegraph Own, available now as an experimental feature, integrates evergreen code ownership with Sourcegraph's code intelligence platform."
tags: [blog]
slug: 'announcing-sourcegraph-own'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/sourcegraph-own-og.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/sourcegraph-own-og.png
---

We recently wrote about our [vision for code ownership](https://about.sourcegraph.com/blog/our-vision-for-code-ownership) and why we think radically better code ownership tooling is needed. In short, code ownership in practice is more nuanced than a simplistic “one file is owned by one dev” model. Even for simple scenarios, current ownership tooling is insufficient outside of the basic PR review workflows. 

We’re working on a better way to manage code ownership that will:
- Be automatically evergreen, with a high signal-to-noise ratio.
- Answer nuanced questions about ownership: who knows about code? Who is accountable for code?
- Is natively integrated into key workflows and enterprise systems.
<br/>

Today, we’re releasing a new experimental feature, Sourcegraph Own. It’s our very first step towards our vision, laying the foundation for radically better ownership tooling.

In this release, we’ve focused on letting you answer any question about existing code ownership data. Who owns files that relate to this code? Which files are unowned? Who should I contact to get this bad code pattern removed from the codebase? Answering those questions is now one click away.

Sourcegraph Own ingests data from existing CODEOWNERS files and gives you a unified layer to view and search it. You can send your own custom format for code ownership data to Sourcegraph’s API. We’ve added [Teams](https://docs.sourcegraph.com/admin/teams) in Sourcegraph so that any team tree structure can also be represented.

Let’s go through an example of a powerful workflow that Own unlocks. Assume the `Authenticator` symbol is a bad code pattern or is vulnerable and needs to be removed from the codebase. Sourcegraph lets you quickly search for occurrences in the codebase ([example query](https://sourcegraph.com/search?q=context:global+type:symbol+Authenticator%24&patternType=regexp&sm=0)).

But who owns this code? Who should I be reaching out to? There’s no easy answer to that question even with CODEOWNERS files. You’d need to check the files one by one.

This is where Sourcgregraph Own comes in! Add `select:file.owners()`, and you can get the list of all the owners in scope of this search query in one second. Even better, you can export this to a spreadsheet to, say, email all the owners or send this to a tracking system. Spoiler: we’re working on sending an email or raising a ticket to all owners in one click.

<Video 
  source={{
    webm: 'blog/announcing-own',
    mp4: 'blog/announcing-own'
  }}
  loop={true}
  title="An example of looking at ownership data in Sourcegraph"
/><br/>

Own also lets you search for things such as:
- What files don’t have an owner? This search query can be refined at will to give only the most important hits, exclude generated files, etc. That’s the power of Sourcegraph search! [Example](https://sourcegraph.com/search?q=context:global+repo:sourcegraph/sourcegraph%24+-file:has.owner%28%29+-file:buildkite+-file:.github+lang:go&patternType=lucky&sm=1&groupBy=repo). 
- What are the golang files that this person owns? [Example](https://sourcegraph.com/search?q=context:global+repo:sourcegraph/sourcegraph%24+file:has.owner%28eseliger%29+lang:go&patternType=lucky&sm=1&groupBy=repo).
<br/>

<video controls playsinline title="Searching with Sourcegraph Own">
  <source src="https://storage.googleapis.com/sourcegraph-assets/blog/announcing-own-blog-video.mp4" type="video/mp4" />
  </video>
<br/><br/>

Own is experimental and now available to all Sourcegraph users on version 5.0+. Exposing existing ownership data in a powerful search engine to answer those key questions is only the first step. [Learn more about Own](https://about.sourcegraph.com/own) and contact us if you’d like a demo or a runthrough of our roadmap!
  
Own is brought to you by Juliana Peña, Cezary Bartoszuk, Leo Papaloizos and Erik Seliger.
