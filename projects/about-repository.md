---
title: 'Open product, open company'
author: 'Farhan Attamimi, Ryan Blunden, Francis Schmaltz'
publishDate: 2018-10-01T00:00-07:00
tags: [
  "blog"
]
slug: open-product-open-company
heroImage: /sourcegraph-mark.png
published: false
---
# Open product, open company

As part of open-sourcing the core of Sourcegraph, we are also building and growing Sourcegraph in the open as an **open product** and (soon) **open company**. We're kicking this off by open-sourcing [sourcegraph/about](https://github.com/sourcegraph/about), which holds product- and company-related docs for Sourcegraph.

Here's how we define these terms:

### Open product

This means the product roadmap is public and open for input.

You might not realize it, but the products you use every day are not just open source; they are also open products. Products like [Kubernetes](https://github.com/kubernetes/kubernetes/milestones?direction=asc&sort=due_date) and [Visual Studio Code](https://github.com/Microsoft/vscode/wiki/Iteration-Plans) do all their product planning in the open. They get useful input from the community and make it easy to integrate and rely on their products.

<!-- TODO(sqs): link to code discussions blog post -->

### Open company

This means that principles, strategies, and processes for internal company functions are publicly documented, including for recruiting, marketing, pricing, and sales—not just engineering and product.

Being an open company is important because being an open product isn't enough to gain the trust of developers. You need to do the same for other important parts of the company that affect the product, the open-source project, and the users. See [GitLab's pricing strategy](https://about.gitlab.com/handbook/product/pricing/) in their public handbook for a great example of this.

Open company doesn't mean that everything is public; only principles, strategies, and processes related to our internal functions. We're proud to be sharing more about how we run Sourcegraph Inc!

## How Sourcegraph is becoming an open product and open company

Sourcegraph's [product roadmap](https://github.com/sourcegraph/about/tree/master/projects) now lives in the `projects/` dir in sourcegraph/about](https://github.com/sourcegraph/about/tree/master/projects). Starting now, the first step in planning a feature is to pre-write the blog post that will announce it (and then the goal is to "make the blog post true" by actually building it). You'll see a lot more projects added to the roadmap. We look forward to your feedback!

On the open company front, we published [sourcegraph/careers](https://github.com/sourcegraph/careers) and will be publishing more soon. (We're not quite there yet on being an "open company"—it takes work!) Our [Sourcegraph master plan](https://about.sourcegraph.com/plan) has always been public.

<!--

Product roadmap:
 - Lets customers and users know what's coming up.
 - Lets customers and followers keep us accountable to and give feedback on our roadmap.
 - Powerful internal communication tool that allows engineers own shipping products end to end and focus on the user.
 - Demonstrates efficiency: a single document is used for product planning and our release announcement.
 - Amazon does this internally: they pre-write the press release for anything they ship.

Process:
 - We kick off projects with the project document in this repo.
 - Our designer, dev rel, and CEO sit together in a room to draft out a blog post. This blog post itself is going through this process at this very moment.
 - Then, we go share this with customers, users, and anyone who can provide feedback to ensure we're on the right track.
 - The developers make GitHub issues and post a GitHub issues link to the project document.
 - The project team then makes this document true. They know exactly what they're building from day one, and won't have any surprise additions appear while building. When it's ready, they flip the switch and publish the post. There's no last minute rush to create a blog post that attempts to describe what was built.

-->