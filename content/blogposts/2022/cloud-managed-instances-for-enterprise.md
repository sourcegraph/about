---
title: "Secure and scalable Sourcegraph Cloud managed instances for the enterprise"
publishDate: 2022-09-27T10:00-07:00
description: Sourcegraph Cloud, the single-tenant, dedicated Cloud version of Sourcegraph, is now generally available.
tags: [blog]
slug: "enterprise-cloud"
published: false
heroImage: 
socialImage: 
changelogItems:
---

Soucegraph has long existed as self-hosted software, letting our customers confidently and securely run Sourcegraph in their own environments. After almost a decade of developing self-hosted Sourcegraph, we’ve gained the trust of some of the most sophisticated companies and development teams in the world, allowing us to work with their most sensitive IP: their code.

At the same time, we’ve seen immense demand for Cloud-based Sourcegraph in recent years. Developers want a solution that can be spun up quickly, upgraded regularly, and maintained effortlessly without compromising security.

In 2020, we experimented with deploying Cloud-based Sourcegraph to fit these needs, which we called “managed instances.” We ran these instances as single-tenant, isolated deployments in GCP, and the demand was so strong that almost 10% of our costumers are using this solution today. Since then, we’ve invested significantly in this single-tenant architecture solution, making it more scalable and bringing it to full feature parity with Sourcegraph Self-hosted. 

Today—after years of building trust and engineering rigor—we are excited to move confidently to the Cloud with this highly secure and scalable solution. Dedicated Sourcegraph Cloud instances are now generally available, and the best way for new teams to use Sourcegraph

## Security and scalability

As a developer, your code is your most valuable IP. This makes security critical for Sourcegraph in all forms.

That’s why we’re offering Sourcegraph Cloud via dedicated, single-tenant instances. When you run Sourcegraph Cloud—even as a trial—you get your own instance dedicated to only **your** code. You get company-level data isolation out-of-the-box.

Plus, Sourcegraph has received a SOC 2 Type II report, so you can be confident that Sourcegraph controls for the security and confidentiality of your sensitive data.

You also get enterprise-grade scaling. You can sync tens of thousands of repositories to your Sourcegraph instance and search across all of them without slowdowns, so you can stay in flow even when working in huge codebases.

## The latest features in the Cloud

Keeping feature parity between Sourcegraph Self-hosted and Sourcegraph Cloud is another reason we chose a single-tenant architecture. Every Cloud instance is kept up-to-date with the latest Sourcegraph releases.

We also offer our executors technology out-of-the-box on Cloud. Executors are dedicated compute instances outside of the main Sourcegraph service that provide extra compute capacity for specific jobs. Executors are provided by default for every Sourcegraph Cloud instance, so you get access to our latest executor-based features without any configuration.

Executors let you run [server-side Batch Changes](https://docs.sourcegraph.com/batch_changes/explanations/server_side), so you can make broad changes across all your repositories all at once. Batch Changes can be used to fix security vulnerabilities or update old code, and on Cloud, anyone can run large-scale changes without extra configuration or local environment setup. 

Executors also power auto-indexing for code navigation, which lets you index your code continuously so that you always have compiler-accurate, [precise code navigation for your repositories](https://about.sourcegraph.com/blog/announcing-auto-indexing). With auto-indexing, anyone on your team can enable precise code navigation for their own repositories, making it more accessible than ever.

On Cloud, executors require no extra configuration and no infrastructure provisioning. 

## How to get started with Sourcegraph Cloud

Sourcegraph Cloud is the best way to get started with Sourcegraph. If you’d like to try out Sourcegraph’s code intelligence platform for your team, you can [sign up for a trial here](https://www.signup.sourcegraph.com/).
