---
title: "Sourcegraph Cloud: secure, scalable, dedicated instances for enterprises"
publishDate: 2022-09-27T10:00-07:00
description: Sourcegraph Cloud, the single-tenant, dedicated cloud service of Sourcegraph, is now generally available.
tags: [blog]
slug: "enterprise-cloud"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/4.0/cloud-instances.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/4.0/cloud-instances.png
---

For the first 8 years of [Sourcegraph](https://about.sourcegraph.com) (from 2013 until last year), 100% of Sourcegraph customers self-hosted Sourcegraph on their own AWS/GCP account or other infrastructure. Starting [self-hosted-first](https://slack.org/self-hosted-first) helped us earn early customers such as Uber, Lyft, Dropbox, 4/5 of the FAANG companies, and 4 of the top 10 US banks. But not everyone loves self-hosting, so over the last year we worked with customers to build a Sourcegraph cloud service that meets their security and scalability needs. Now, ~10% of our revenue (and growing quickly) is on cloud, and we recently completed our SOC 2 Type II audit.

**Today, we're launching Sourcegraph Cloud: secure, scalable, dedicated Sourcegraph on the cloud for your organization.** [Sign up now.](https://signup.sourcegraph.com/)

* **It's Sourcegraph, just in the cloud:** Devs love Sourcegraph because it helps them search and understand their code. All Sourcegraph features are available in Sourcegraph Cloud.
* **Security:** Sourcegraph Cloud is a single-tenant, dedicated instance of Sourcegraph for your organization (`mycompany.sourcegraph.com`). Each instance and all associated storage lives in its own isolated Google Cloud Platform account. Our [SOC 2 Type II report](https://security.sourcegraph.com) demonstrates our commitment to security. More details on our [Security page](https://security.sourcegraph.com/).
* **Scalability:** Sourcegraph Cloud is tested to scale to 100,000 repositories (440 GB of Git data), 10,000 users (with simulated usage patterns), and monorepos up to 16 GB. We're working hard to continually increase these limits, and many customers have scaled self-hosted Sourcegraph well beyond those numbers. Please [contact us](https://about.sourcegraph.com/contact) first for larger workloads.
* **Easy to get started:** You can be up and running with Sourcegraph within a couple hours, with no deployment needed, by just [signing up](https://signup.sourcegraph.com/). (Why a couple hours and not instantly? Because of the single-tenant architecture, which means you get dedicated infrastructure. See below for why we think that's the right trade-off.)

* Optimize for security and scalability.
* Target our existing customer base (companies with 100+ devs, and often 1000s+ of devs).
* Ship the same product to cloud and self-hosted.
* Respect customers who want to keep self-hosting.

* Security and scalability
* Same product as self-hosted
* Prefer self-hosted? Stay self-hosted
* Not targeting small companies

Today — after years of building trust and engineering rigor — we're confidently moving to the cloud with this highly secure and scalable solution. Dedicated Sourcegraph Cloud instances are now generally available, and the best way for new teams to use Sourcegraph.

### Security and scalability

As a developer, your code is your most valuable IP. This makes security critical for Sourcegraph in all forms.

That’s why we’re offering Sourcegraph Cloud via dedicated, single-tenant instances. When your organization runs Sourcegraph Cloud, even as a trial, you get your own instance dedicated to only your organization's code. You get company-level data isolation out-of-the-box.

Plus, Sourcegraph has received a SOC 2 Type II report, so you can be confident that Sourcegraph operates its' controls effectively in regard to the security, availability and confidentiality of your sensitive data.

Cloud also supports enterprise-grade scaling. You can sync tens of thousands of repositories to your Sourcegraph instance and search across all of them without slowdowns, so you can stay in flow even when working in huge codebases.

### The latest features in the cloud

Keeping feature parity between Sourcegraph Self-hosted and Sourcegraph Cloud is another reason we chose a single-tenant architecture. Every Cloud instance is kept up-to-date with the latest Sourcegraph releases.

We also offer our executors technology out-of-the-box on Cloud. Executors are dedicated compute instances outside of the main Sourcegraph service that provide extra compute capacity for specific jobs. Executors are provided by default for every Sourcegraph Cloud instance, so you get access to our latest executor-based features without any configuration.

Executors let you run [server-side Batch Changes](https://docs.sourcegraph.com/batch_changes/explanations/server_side), so you can make broad changes across all your repositories all at once. Batch Changes can be used to fix security vulnerabilities or update old code, and on Cloud, anyone can run large-scale changes without extra configuration or local environment setup. 

Executors also power auto-indexing for code navigation, which lets you index your code continuously so that you always have compiler-accurate, [precise code navigation for your repositories](https://about.sourcegraph.com/blog/announcing-auto-indexing). With auto-indexing, anyone on your team can enable precise code navigation for their own repositories, making it more accessible than ever.

On Cloud, executors require no extra configuration and no infrastructure provisioning. 

### Get started with Sourcegraph Cloud

Sourcegraph Cloud is the best way to get started with Sourcegraph. If you’d like to try out Sourcegraph’s code intelligence platform for your team, you can [sign up for a 30-day free trial](https://signup.sourcegraph.com/).
