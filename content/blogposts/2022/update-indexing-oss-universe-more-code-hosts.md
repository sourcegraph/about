---
title: 'Redefining the OSS universe: Why we're broadening our index to include more code hosts'
description: 'Rather than further growing our global index with more repositories from GitHub.com and GitLab.com, we'll be focusing on broadening the set of code hosts Sourcegraph Cloud indexes from.'
authors:
  - name: Loïc Guychard
  - name: Jeff Warner
publishDate: 2022-01-10T00:00-07:00
tags: [blog]
slug: indexing-the-oss-universe-update-more-code-hosts
heroImage: https://sourcegraphstatic.com/blog/indexing-the-oss-universe-update.png
socialImage: https://sourcegraphstatic.com/blog/indexing-the-oss-universe-update.png
published: true
---

![](https://sourcegraphstatic.com/blog/indexing-the-oss-universe-update.png)

In August of 2021, we announced our intention [to index the entire OSS universe](https://about.sourcegraph.com/blog/why-index-the-oss-universe/) on Sourcegraph Cloud. By then, we had already been hard at work on growing our global index: we had 1M open source repositories indexed, and had tackled some significant engineering challenges along the way, notably yielding a [5x reduction in RAM usage of Zoekt](https://about.sourcegraph.com/blog/zoekt-memory-optimizations-for-sourcegraph-cloud/), our trigram-based search backend. Today, Sourcegraph Cloud allows you to search over 2.2M open source repositories.

Our original intention was to keep growing our global index to reach 5.5M repositories, or every GitHub.com and GitLab.com repository with more than one star. Along the way, we noticed this approach was missing some important OSS resources for developers. We re-evaluated the goal, reflected on the use cases universal OSS code search should enable for developers, and decided on a different target: rather than further growing our global index with more repositories from GitHub.com and GitLab.com, we'll be focusing on broadening the set of code hosts Sourcegraph Cloud indexes from. In order to be truly universal, Sourcegraph Cloud shouldn't limit itself to only repositories from the most popular code hosts: it should index _all open source code_. You can read more about [how we reached this decision below](#Lessons-learned).

We've already begun: today, you can search over [34.5k repositories from Fedora Package Sources](https://sourcegraph.com/search?q=repo:^src.fedoraproject.org/) on Sourcegraph Cloud alongside our existing corpus of repositories from GitHub.com and GitLab.com, and we're looking forward to expanding this further. If you maintain an open source code host, and would like to see your repositories indexed on Sourcegraph Cloud, feel free to [get in touch with our Search Core team](mailto:universal-search@sourcegraph.com)!

We're incredibly excited by the possibilities opened by indexing code from many OSS code hosts in a common, blazing-fast code search engine:

- As an author, your code no longer has to be hosted on one of the most popular platforms in order to be discoverable—it will be surfaced in search results right alongside code from a variety of sources. You can also see how your code is used by others, no matter where _their_ code is hosted.
- As a developer searching for code, you are able to use this single, unified code search engine to find the projects and code examples most relevant to you across code hosts.
- With the ability to sync your private code on Sourcegraph Cloud, you can also seamlessly search your own code alongside all of its open source dependencies, across code host boundaries.

Not only that, but we are also making progress on Sourcegraph Cloud's support for private code. Last month we [opened a beta for teams access to Sourcegraph Cloud](https://about.sourcegraph.com/blog/sourcegraph-cloud-for-teams-now-in-private-beta).

In short, with this focus on breadth in addition to depth, Sourcegraph Cloud is on the path to becoming _the_ search engine for the universe of open source code along with your private code—a cornerstone for a world where [everyone can code](https://handbook.sourcegraph.com/company/strategy#purpose). You can also use Sourcegraph Self-hosted to search, understand, and automate large-scale changes across all of your private code, wherever it's hosted.

## Lessons learned

Do we regret setting our sights on 5.5M repos? Not at all! Starting there definitely had its benefits and taught us some valuable lessons:

### Long-standing goals like 5.5M foster focus and high-quality work

The 5.5M goal was simple, stable, measurable, and fully actionable by the team, while still capturing an outcome that was useful for the business. Having more than six months of stability meant minimal disruption while we focused on this goal. By not being opinionated about implementation details, it drove many improvements in efficiency and performance across our backend systems, with trickle-down benefits to Enterprise deployments. However…

### Long-standing goals may have diminishing returns over time

Past the 2M mark (six stars or more), our work was no longer generating trickle-down benefits for self-hosted customers. OSS search use cases on popular code were already well serviced. Reaching the 5.5M was not going to enable users to “search everything,” because 0-1 star repositories would not be included.

As a team, we challenged our continued focus on this goal. Was it still worth the significant, continued investment?

### A revised goal may better capture the desired business outcome

We questioned the 5.5M goal in discussion with product and engineering stakeholders:

- What was the intended outcome of this goal?
- Was this goal still the best path forward to the intended outcome?
- If not, what would a better goal be?

We agreed that universality was about more than scale, and shifted our focus to indexing repositories globally from more code hosts. This focus better captures the intended outcome of universality and sends a powerful message: your code is discoverable regardless of where it is hosted!
