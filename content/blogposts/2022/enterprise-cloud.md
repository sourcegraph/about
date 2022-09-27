---
title: "Sourcegraph Cloud: secure, scalable, dedicated instances for enterprises"
publishDate: 2022-09-27T10:00-07:00
description: "Today, we're launching Sourcegraph Cloud: secure, scalable, dedicated Sourcegraph on the cloud for your organization. Sourcegraph Cloud is the best way to start using Sourcegraph on your organization's code."
tags: [blog]
slug: "enterprise-cloud"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/4.0/cloud-instances.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/4.0/cloud-instances.png
authors:
  - name: Quinn Slack
    url: https://slack.org

---

For the first 8 years of [Sourcegraph](https://about.sourcegraph.com) (from 2013 until last year), 100% of Sourcegraph customers self-hosted Sourcegraph on their own AWS/GCP account or other infrastructure. Starting [self-hosted-first](https://slack.org/self-hosted-first) helped us earn early customers such as Uber, Lyft, Dropbox, 4/5 of the FAANG companies, and 4 of the top 10 US banks. But not everyone loves self-hosting, so over the last year we worked with customers to build a Sourcegraph cloud service that meets their security and scalability needs. Now, ~10% of our revenue (and growing quickly) is on cloud, and we recently completed our [SOC 2 Type II audit](https://security.sourcegraph.com).

**Today, we're launching Sourcegraph Cloud:** secure, scalable, dedicated Sourcegraph instances on the cloud. Sourcegraph Cloud is the best way to start using Sourcegraph on your organization's code. [**Sign up now.**](https://signup.sourcegraph.com/)

* **It's Sourcegraph, just in the cloud:** Devs love Sourcegraph because it helps them search and understand their code. All Sourcegraph features are available in Sourcegraph Cloud.
* **Security &amp; SOC 2 Type II:** Sourcegraph Cloud is a single-tenant, dedicated instance of Sourcegraph for your organization (`mycompany.sourcegraph.com`). Each instance and all associated storage lives in its own isolated Google Cloud Platform account. Our [SOC 2 Type II report](https://security.sourcegraph.com) demonstrates our commitment to security. More details on our [Security page](https://security.sourcegraph.com/).
* **Scalability:** Sourcegraph Cloud is tested to scale to 100,000 repositories (440 GB of Git data), 10,000 users (with simulated usage patterns), and monorepos up to 16 GB. We're working hard to continually increase these limits, and many customers have scaled self-hosted Sourcegraph well beyond those numbers. Please [contact us](/contact) first for larger workloads. For more information, see [Cloud documentation](https://docs.sourcegraph.com/cloud) and, if you're curious, our [internal Cloud handbook](https://handbook.sourcegraph.com/departments/cloud/).
* **Ease:** You can be up and running with Sourcegraph within a few hours, with no deployment needed, by just [signing up](https://signup.sourcegraph.com/). (Why a few hours and not instantly? Because of the single-tenant architecture, which means you get dedicated infrastructure. This is the right choice for security and scalability, but it means there's a slight delay while it spins up. Also, if your organization is on the smaller side, we may follow up with you to recommend self-hosted initially so we can prioritize serving the most devs possible on Cloud.)

<br/>
While Sourcegraph Cloud is now the best way to start using Sourcegraph, we're committed to both [self-hosted](https://docs.sourcegraph.com/) and cloud customers and deployment options for the long term. Our choice of a single-tenant architecture for Sourcegraph Cloud demonstrates that commitment. It means that both self-hosted and cloud get the exact same product (even the same Docker images), and Sourcegraph Cloud essentially entails us dogfooding Sourcegraph instance deployment and maintenance at scale.

We're excited to make it so much easier for every dev to start using Sourcegraph at work. [Sign up for Sourcegraph Cloud](https://signup.sourcegraph.com/) to start using it on your organization's code.

*Special thanks to our customers who gave us feedback as we built Sourcegraph Cloud!*
