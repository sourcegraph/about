---
title: Sourcegraph Cloud for teams now available in private beta
description: Get instant access to code navigation and intelligence across your team’s private code and 2M open source repositories. Sourcegraph Cloud for teams brings enterprise advantages to small teams.
authors:
  - name: Sourcegraph
publishDate: 2021-12-09T00:00-07:00
tags: [blog, announcement, cloud, beta]
slug: sourcegraph-cloud-for-teams-now-in-private-beta
heroImage: /blog/cloud-beta-launch-post.png
socialImage: https://about.sourcegraph.com/blog/cloud-beta-launch-post.png
published: true
---

![Sourcegraph Cloud for teams now in private beta/](/blog/cloud-beta-launch-post.png)

<Alert>
  <strong>Update:</strong>  The Sourcegraph Cloud private beta (for teams) is now closed. If you are interested in using Sourcegraph for your team, you can get started via <a href="/get-started/self-hosted">self-hosting</a> or <a href="/demo"> get in contact with us for a demo of single-tenant Sourcegraph Cloud</a>.
<a href="http://sourcegraph.com/">Sourcegraph.com</a> is still available for individuals to search OSS code.
</Alert>

Sourcegraph Cloud for teams brings enterprise advantages to small teams. Not ready to bring your team along? You can use [Sourcegraph.com](https://sourcegraph.com) to search your personal repos and the open source universe today.

The tools you have access to matter. A lot. According to a recent [McKinsey study](https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/developer-velocity-how-software-excellence-fuels-business-performance), “best-in-class tools are the primary driver of developer velocity... The ability to access relevant tools for each stage of the software lifecycle contributes to developer satisfaction and retention rates that are 47 percent higher for top-quartile companies compared to bottom-quartile performers.”

When we think about developer happiness and productivity at Sourcegraph, we think about great onboarding experiences, efficient code reviews, and knowledge sharing. We think about saved time, better code quality, and improved system integrity. We think about how fast, reliable code search makes it easier to find, read, understand, and share code.

Findings from GitHub’s [2021 State of the Octoverse](https://octoverse.github.com/writing-code-faster/#search-improves-software-development) report confirm code search is an essential element to improving developer productivity:

> "Developers are almost 60% more likely to feel equipped to do their job when they can easily find what they need. Plus, they can get an 11% productivity boost simply by having a team repo that is easy to search."

While code search isn’t new, access to its advantages has been limited to companies who can either build it themselves or provide admin support for a self-hosted product, like Sourcegraph. We believe that every developer—regardless of whether you work for a large enterprise or small start-up—should have access to great code search. That’s why we’re investing in our SaaS offering and bringing the power of Sourcegraph to small and large teams alike.

We [recently announced](/blog/why-index-the-oss-universe/) a public beta for private code on Sourcegraph Cloud and we’re expanding access to small teams. With this release of Sourcegraph Cloud for teams, teams of up to 25 developers who use GitHub.com and GitLab.com can adopt Sourcegraph and gain the benefits of universal code search in minutes without needing to self-host.

## Code search for small teams

Access to advanced code search gives teams a massive productivity boost. For small teams, these gains can have a huge impact on scale, velocity, and team morale: it facilitates faster code discovery, streamlines collaboration, and helps to mitigate risks. We designed Sourcegraph Cloud for teams specifically for small engineering teams so you can understand, share, and navigate code without needing to invest time and effort into setting up and maintaining a self-hosted tool.

Code search is especially helpful for small teams that:

- Need to collaborate constantly and operate at high speed
- Pivot frequently and need to read new code often
- Re-architect systems to scale
- Use a lot of OSS code and need to trace dependencies

Sourcegraph Cloud allows you to do many things you do today, but faster. Code reviews, sharing code for discussion and documentation, and simply finding answers within code are all easier and more efficient with Sourcegraph.

### Faster code discovery

We know from talking with hundreds of developers that devs spend more time reading code than writing code, but understanding and navigating code at scale can be difficult, especially when you need to learn a new codebase, make changes, or conduct code reviews. For small startups, the need to pivot quickly and familiarize yourself with a new part of the codebase can be especially difficult: information isn’t written down or knowledge about legacy code is lost when engineers leave.

Sourcegraph Cloud provides a way to traverse your entire codebase so you can quickly get up to speed on new code or work through refactors. With Sourcegraph code search, you can jump to definition, find references, and code coverage annotations. This helps teams get up to speed on new code, and it also helps for onboarding new devs to your codebase.

<div className="container my-4 video-embed embed-responsive embed-responsive-16by9">
    <iframe className="embed-responsive-item" src="https://storage.googleapis.com/sourcegraph-assets/blog/cloud-for-teams/Find-Refs-Example.mp4" allowFullScreen="" allow="accelerometer; autoPlay; encrypted-media; gyroscope; picture-in-picture"frameBorder="0"></iframe>
</div>

For small teams who are growing quickly, Sourcegraph helps orient developers to new code faster.

### Streamline collaboration

Engineers frequently need to discuss code with teammates, which can be a tricky task without a rich code exploration interface.

Sourcegraph allows you to share links back to code across your entire codebase (or within old commits) to support these discussions. Code is often shared through chat, emails, docs, code reviews, and issue trackers; Sourcegraph makes that sharing possible.

Sourcegraph Cloud encourages sharing of code snippets as part of an “async world.” By copy and pasting a link and sharing via Slack, developers can communicate more effectively when not together.

### Faster code reviews

A large part of speeding up code reviews—and even writing code—is quickly pinpointing dependencies within code and cascading effects of changes. Sourcegraph’s precise Code Intelligence—along with features like “find references” and “jump to definitions”—is a powerful tool in accomplishing this. Precise Code Intelligence also unlocks unique possibilities such as cross-repository dependency tracking.

For teams leveraging open source projects and packages, the ability to track dependencies and find outdated practices and patterns can be a game-changer for small teams who may not have dedicated security resources.

With Sourcegraph, you and your team can perform your best work. Understanding new code, collaboration, and code reviews are faster and more efficient when you can search your entire graph of code for answers. Sourcegraph allows you to never miss anything when understanding your code, so you can do your best work.

Learn more about [how we approached expanding an on-premise product to SaaS here](/blog/expanding-sourcegraph-from-on-premise-to-saas/).
