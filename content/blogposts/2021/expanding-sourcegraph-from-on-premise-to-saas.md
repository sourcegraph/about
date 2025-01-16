---
title: 'There, here, and back again: Expanding Sourcegraph from a self-hosted product into a cloud offering'
description: Bringing organizations to Sourcegraph Cloud meant taking a self-hosted, enterprise-focused product, and evolving it into also a cloud software-as-a-service product. Here's how we took this big vision and turned it into incremental action.
authors:
  - name: Quinn Keast
    url: https://twitter.com/quinnkeast
publishDate: 2021-12-09T00:00-07:00
tags: [blog, announcement, cloud, beta]
slug: expanding-sourcegraph-from-on-premise-to-saas
heroImage: /blog/technical-post.png
socialImage: https://about.sourcegraph.com/blog/technical-post.png
published: true
---

![Expanding Sourcegraph from self-hosted to Saas/](/blog/technical-post.png)

We've just [launched a private beta for small teams and organizations on Sourcegraph Cloud](/blog/sourcegraph-cloud-for-teams-now-in-private-beta/). With this milestone, we wanted to take a moment to reflect on this effort and what we've learned.

Bringing organizations to Sourcegraph Cloud was a unique challenge for our team because it meant taking a self-hosted, enterprise-focused product, and turning it into a cloud software-as-a-service (SaaS) product as well.

Sourcegraph helps companies to understand their code. All of it. No matter where it's hosted. As an early-stage startup, Sourcegraph actually started as a cloud SaaS product before we realized that we needed to do more to earn trust with companies' private code. This led us to pivot towards making Sourcegraph open source and self-hosted. Companies could look at Sourcegraph source code for themselves and run their Sourcegraph instance in their own trusted environment.

This early decision was crucial to our success. Today, many of the world's largest and most technologically advanced companies like Dropbox, General Electric, PayPal, [and many more](/case-studies) trust Sourcegraph with their private code, and we recently closed [a $125M Series D funding](/blog/announcing-sourcegraphs-series-d-round/) round to bring universal code search to every dev at every company of every size and scale.

But we've heard again and again: for smaller companies with lean engineering teams that use SaaS products across their stack, the ease of deploying through SaaS outweighs the benefits of self-hosting. And for us to bring universal code search to every dev at <strong>every company of every size and scale</strong>, Sourcegraph needs to be effortless for these smaller companies to deploy.

That's where we saw an opportunity. We already had Sourcegraph Cloud, which helps developers to search the universe of open source software. Sourcegraph Cloud is the largest Sourcegraph instance in the world—it's the same Sourcegraph, just bigger.

We decided to make a big bet on Sourcegraph Cloud. And that meant figuring out how to get from self-hosted to also on cloud. <strong>We were there, came here, and now we wanted to go back again.</strong>

## Breaking assumptions

Building a self-hosted product involves a lot of assumptions that break when turning it into a cloud SaaS:

- All code on the instance belongs to the same organization.
- There is a person or team who can set up, orchestrate, and administrate Sourcegraph on the organization's own stack and network.
- The instance admin will connect Sourcegraph with code hosts, and choose which repositories to add to Sourcegraph and make sure they sync properly.
- Running a global search on Sourcegraph will search across only your company's repositories.
- All users on the Sourcegraph instance belong to the same company.
- A URL to a search result copied and pasted to someone else will “just work,” because everyone has access to the same code.
- There's a high-touch, multi-stage sales process tailored for each customer.

The extent of this list of assumptions gave us an idea of just how big this challenge was, especially when we knew we wanted to keep one Sourcegraph—we didn't want to split out into separate “Cloud” and “Self-hosted” products.

We needed to figure out how to solve each of these problems, but focusing on each of these broken assumptions as action items in themselves is an easy way to get bogged down in tactical details. Instead, we needed a big vision and incremental action.

## Big vision, incremental action

We needed to strike the balance between the long-term of what Sourcegraph Cloud would become and the concrete steps that would get us there. Our approach was to orient around the problems, identify the foundations, and to be really thoughtful about what we needed when.

### Orienting around problems

Our big vision was to make Sourcegraph Cloud the easiest way for organizations to get started with Sourcegraph.

Instead of orienting around action items or tactical steps, we oriented our efforts around problems that, when solved, would represent the “minimum lovable product” at each iteration.

At the highest level, these problems looked something like:

<pre className="language-markdown">
    <code className="language-markdown" style={{whiteSpace: 'pre-wrap'}}>
        Sourcegraph Cloud is the easiest way for organizations to get started with Sourcegraph.
        └── Small-to-medium organizations can search across their code together on Sourcegraph Cloud.
        └── Individual users can search across their private code on Sourcegraph Cloud.
            └── Sourcegraph team members can search across their private code on Sourcegraph Cloud.
                └── Individual users can search across their public code on Sourcegraph Cloud.
    </code>
</pre>

Each problem was inherently cross-disciplinary and revealed a set of sub-problems we'd have to solve.

And each problem we solved would support each incremental step forward, all in a low-risk, high-confidence way that would help us to build momentum rather than rehashing the same problems again and again.

> <strong>Sidebar:</strong>
> A big sub-problem we spotted: after an individual user adds their repositories to Sourcegraph Cloud, they then need to be able to effortlessly search across those repositories within the 2.2 million other repositories on Sourcegraph Cloud. This led to proposing and building [search contexts](/blog/introducing-search-contexts/), an entirely new product feature, to solve this problem.
>
> Our RFCs are public to the world by default in line with our [open and transparent values](https://handbook.sourcegraph.com/company/values#open-and-transparent). Take a look for yourself how this feature unfolded in [RFC 261: Search Contexts](https://docs.google.com/document/d/1mlxy7Fy19Q2yua7Fjg0xCda1c07f9RoR8rXxU22Ni60/edit#).

### Identify foundations

Once we had a roadmap of problems to solve, we took time to identify what we considered the “foundations”—those decisions that would influence all other decisions and ultimately accelerate future efforts, even if we didn't act on them right away. Without identifying these foundations, we risked working ourselves into a corner by solving each problem in isolation, rather than as an incremental step within a bigger context.

For us, these foundations turned out to be mostly conceptual: what does it mean to “add code?” What about “connecting with code hosts?” How might that be the same, but different, for an individual user versus an organization? How does code visibility work? What's the difference between what we're doing here, and multitenancy? What decisions do we make now that will open up a future path to multitenancy?

We captured these decisions in async artifacts like an exploration of [how multitenancy affects existing assumptions around roles and permissions](https://docs.google.com/document/d/10bvGT4lnHaRpne3zbHzEtld4Xv2x38DdIgaBPRNidXE/edit#), and an [information architecture summary](https://docs.google.com/document/d/15vIqi4SHUKYM4MJ80GLwLxQpoMJRCJVXUVuSZoYmrug/edit#). Async artifacts like these are a core part of [how we work asynchronously](https://handbook.sourcegraph.com/company/asynchronous-communication) at Sourcegraph. They make it easy to share and provide thoughtful, considered feedback, and to revisit and build on our shared understanding of these foundations.

### You ain't gonna need it (yet)

Having both a clear roadmap of problems and a good idea of the foundations helped us to keep moving forward without feeling like we needed to solve every problem all at once. A big part of this meant constantly revisiting what we needed to do now, and what could be done later.

We know [we'll need a strong invitation flow for organizations](https://docs.google.com/document/d/1DqJWHmVHA6EpyKNAh0h-WNdsOprN8t-xTQbQ4CH8Z3I/edit). The way we connect with code hosts can keep improving. And we know we'll eventually need things like self-service payments and subscription management. But we ain't gonna need it <i>yet</i>.

After launching private code for individual users on Cloud, we did a collaborative [story-mapping workshop](https://miro.com/app/board/o9J_l2ceJwU=/?invite_link_id=556797444102) to break out what we knew we'd need to do into a series of iterations that represented a fully functional, lovable product outcome.

And, even today, we keep [thinking through our release milestones](https://docs.google.com/document/d/1qFze1GDQhBdxe1xZ72HFH2XCBoOUd_4H5y7mxXUPsdg/edit#heading=h.1ogghndvekag) to make it easier for our team to plan what we need to do next.

## Recap: what we learned

[Launching early access for organizations](/blog/sourcegraph-cloud-for-teams-now-in-private-beta/) reflects a lot of work, and perfectly hits our goal: helping small teams to search across their private code together on Sourcegraph Cloud.

We have lots more to do and we're excited for the opportunities ahead, but we're also celebrating what we've achieved and learned along the way:

1. Have a big vision. Take an incremental path to get there.
2. Orient the iterative path around problems. It makes it easier to see how one effort leads to the next without being prescriptive, and creates clear milestones that help the team celebrate their progress even when there's a long way to go towards the big vision. (And, it helps learn faster by getting things in customers' hands sooner!)
3. Identify the “foundations.” It accelerates all future efforts.
4. Be really clear about what you need now, and what you can do later, and keep revisiting these decisions.
