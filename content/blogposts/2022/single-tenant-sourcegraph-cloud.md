---
title: Building Sourcegraph Cloud as a single-tenant solution
description: We're moving Sourcegraph Cloud forward as a dedicated single-tenant solution to provide optimal security and scalability for the future of Sourcegraph.
authors:
  - name: Ryan Phillips
publishDate: 2022-06-30T00:00-07:00
tags: [blog, cloud]
slug: single-tenant-cloud
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/sourcegraph-cloud-visual.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/sourcegraph-cloud-visual.png
published: true
---

![Sourcegraph Cloud icon](https://storage.googleapis.com/sourcegraph-assets/blog/sourcegraph-cloud-visual.png)

We believe that great code search is an essential solution for all software developers. That’s why we built a code intelligence platform, with code search at its core, that can be easily deployed by any team.

Over the last year, we’ve invested heavily in developing a managed version of Sourcegraph. This will enable more teams—including the teams that are not able to host their own code search solution—to access a full-featured code intelligence platform.

We invested in managed Sourcegraph in two ways. First, we expanded Sourcegraph.com. This site is a massive, multi-tenant instance of Sourcegraph, originally built as a way to search open source code. We pushed the scale of Sourcegraph.com in several ways: 
- We indexed millions of open source repositories across multiple code hosts and made them searchable.
- We launched a beta allowing users to add their own public and private repositories.
- We launched a second beta allowing teams to use Sourcegraph.com collaboratively.

Meanwhile, we also developed a single-tenant, managed instance version of Sourcegraph over the last several years. This solution provides dedicated, isolated instances for our customers’ code.

After experimentation and great customer feedback, we have decided that a single-tenant version of Sourcegraph is the right solution for serving our customers. This solution has been highly successful with early customers, and it provides a host of crucial benefits:
- It is highly scalable and adapts to the needs of each individual team.
- It meets higher security requirements. Today, it is already SOC 2 Type 1 compliant, with SOC 2 Type 2 coming soon.
- It is closer to our existing self-hosted solution, which means customers get access to new features faster.

## The future of Sourcegraph Cloud

Moving forward, we are doubling down on our single-tenant, dedicated Sourcegraph solution as our next-gen Sourcegraph Cloud. This solution is available today, and is already in use by a number of our customers; if you’d like to see a demo and get started with Sourcegraph Cloud, [get in contact with a Sourcegraph engineer](https://info.sourcegraph.com/talk-to-a-developer). 

As we invest further in the single-tenant Sourcegraph Cloud, we will also be returning Sourcegraph.com to its original purpose: searching open source code. Doing so will allow us to focus on our Cloud solution and continue rapid development. We will also be sunsetting our beta features on Sourcegraph.com. 

**Personal repositories**

We will be removing the ability to sync personal repositories—private and public—from Sourcegraph.com. If you have personal repositories synced to Sourcegraph.com, you can expect them to be removed on August 1, 2022. You can continue to use Sourcegraph.com to search OSS code, and if you’re interested in searching your personal repositories, you can [run your own instance of Sourcegraph locally for free](https://about.sourcegraph.com/get-started/self-hosted).

Note that this does not mean your repositories themselves will be deleted; we will only be de-syncing and removing the cloned repository data from Sourcegraph. Your actual repositories (on GitHub.com or GitLab.com) will remain unchanged.

**Teams access**

We will also be sunsetting the team beta on Sourcegraph.com. For customers currently paying for a Sourcegraph.com team account, your accounts will be migrated to a dedicated Sourcegraph Cloud instance. All teams have received a message directly from their Customer Engineer, who will help with the transition.

For users who are participating in the team beta but have decided not to purchase Sourcegraph Cloud at this time, your team access will end on August 1, 2022, meaning your organization (and organization’s code) will be removed from Sourcegraph.com. If you’d like to continue using Sourcegraph for your team, you can [get a demo of the single-tenant solution](https://about.sourcegraph.com/demo), or [try out a self-hosted installation of Sourcegraph](https://docs.sourcegraph.com/#quick-install) (which is free for small teams).

**Bringing Sourcegraph.com back to its roots**

Sourcegraph.com will continue to be a free search engine for open source code for all users. Our OSS repository index—which currently has over 2.2 million repositories synced—will continue to exist. We strongly believe in the importance of open source code, and we want to continue supporting OSS search with Sourcegraph.

We want to sincerely thank all of our Sourcegraph.com beta users. Even though the betas are ending, your time with the product and feedback have been invaluable as we’ve built Sourcegraph. 

The future of Sourcegraph Cloud is single-tenant managed instances. Today, our customers are using this solution to bring a full-featured code intelligence platform with a high degree of security to their engineering teams, and we are excited to bring Sourcegraph to even more developers.
