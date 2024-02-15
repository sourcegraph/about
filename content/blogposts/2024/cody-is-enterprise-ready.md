---
title: "Cody is enterprise ready"
publishDate: 2024-02-15T19:00-08:00
authors:
  - name: Quinn Slack
    url:
tags: [blog]
slug: 'cody-is-enterprise-ready'
published: true
description: "We’re proud to announce Cody Enterprise, a significant milestone for Cody that helps bridge the gap between realizing the potential of AI coding assistants and meeting the unique needs of enterprises."
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-is-enterprise-ready/Cody%20GA%20is%20ready%20for%20enterprise.png
socialImage:  https://storage.googleapis.com/sourcegraph-assets/blog/cody-is-enterprise-ready/Cody%20GA%20is%20ready%20for%20enterprise.png
---

AI coding assistants have unmistakably captured the imagination of developers, with the promise of speeding up coding tasks and helping them understand code in ways not possible before. Enterprises are also curious about the innovation and productivity gains AI can bring but have been cautious in their adoption so far.

In our decade of demonstrable experience helping enterprises understand their large and complex codebases, we know the key to addressing this caution involves seamless integration with existing tools, a robust and thorough approach to security, and the ability to support enterprises and codebases of any size and sophistication. This is why we're excited to introduce Cody Enterprise, an AI coding assistant created specifically with enterprise requirements and scale in mind.

## Flexibility and choice

The best enterprise AI coding assistant is one you can actually use in your current setup. We know that every enterprise has a unique way of working and tools they use, so interoperability and universality are at the core of how we have built Cody.

### Universal support for code hosts

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-is-enterprise-ready/universal%20code%20hosts.png"
/>

We’ve built Cody to work with your existing tech stack. From support for all major code hosts like GitLab, GitHub, Bitbucket, Gerrit, Perforce, and Azure DevOps to supporting multiple code hosts in combination, we believe you shouldn't need to upend your entire tooling stack to realize the benefits of AI. One reason Qualtrics, a global Experience Management (XM) company with over 1,000 software developers, chose Cody Enterprise for their developers is how seamlessly it worked with their GitLab implementation.

_“We run our own GitLab instance within our own data centers, and Cody works seamlessly with it.”_ 

-Godwin Babu, Sr. Manager, Qualtrics

You can read more about Qualtrics’ use of Cody Enterprise [here](https://sourcegraph.com/case-studies/qualtrics-speeds-up-unit-test-creation-and-understanding-code-with-cody).

### Deployment choice

Cody Enterprise supports multiple deployment options and configurations to cater for different enterprise security and privacy requirements. Cody can be run in a Sourcegraph-managed, single-tenant cloud instance, but also supports self-hosted deployment so it can live in your own data centers alongside your self-hosted code hosts.

### Choose your LLM

Large Language Models (LLMs) are launching and improving at a rapid pace, and each has its own strengths and ideal use cases. In order to set enterprises up for success in an ever-changing market, we’ve built Cody with LLM choice in mind versus being locked into a single proprietary LLM.

Cody allows enterprises to choose from several LLM options like Anthropic Claude 2 and OpenAI GPT-4, and deploy them in a completely secure and private environment within Azure VNet or AWS VPC via “bring-your-own-key” LLMs like Azure OpenAI and Amazon Bedrock. Leidos, a Fortune 500 innovation company rapidly addressing the world’s most vexing challenges in national security and health, adopted Cody because of the LLM flexibility it provides:

_“Generative AI is a fast-moving field, and the best model that’s out there today may not be the best model tomorrow. Something better could come out tomorrow. With a lot of solutions, you’re locked into an LLM and putting a lot of faith in that model to keep up with the pace of change. Using Cody means we can avoid that LLM lock-in.”_ 

-Rob Linger, AI Architect at Leidos

Today, we're announcing that StarCoder is available as an LLM choice for Cody Enterprise code completions. In our testing, StarCoder has proven to be the best LLM defined by the highest Completion Acceptance Rate (CAR%) available for real-world everyday code completions.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-is-enterprise-ready/starcoder%20logo.png"
/>

## Code intelligence for large codebases

Helping enterprises understand their codebase is part of Sourcegraph’s DNA, and today we help over 2.5 million developers search, fix, and understand code. This code intelligence provides developers context about codebases as large as 250,000 repositories and over 10 million lines of code, and gives them the insight they need to take action rapidly.

It just so happens this same context is also relevant for AI coding assistants and their ability to answer questions that depend on information the AI was not trained on. Our code intelligence is the secret sauce that powers Cody, and one that many enterprises have been relying on for a decade. [Read more](https://sourcegraph.com/blog/how-cody-understands-your-codebase) for a deep dive into how codebase-wise context retrieval works.

### Multi-repo context

Cody Enterprise can retrieve context from an organization’s _entire_ codebase, so it can answer questions about any of its code. For example, with **expanded multi-repo context** Cody can search and retrieve context from multiple repositories in response to a question, opening up complex use cases such as working with and integrating remote APIs and delivering more accurate answers.

<Video
  source={{
    mp4: 'blog/cody-is-enterprise-ready/multi-repo-support'
  }}
  loop={true}
  title="Cody multi-repo support"
/>

## Proven enterprise scale and security

With Cody Enterprise, we’re bringing the promised benefits of AI to enterprise software development and pairing it with the scale and security capabilities that large enterprises already know and trust Sourcegraph for today. We already have a number of enterprises adopting Cody Enterprise, including Leidos, Qualtrics, Booking.com, Dotdash Media, and more.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-is-enterprise-ready/customer%20logos.png"
/>

Cody Enterprise is SOC 2 Type II, GDPR, and CCPA compliant. With zero data retention, uncapped indemnity, and no model training with your data policies in place, Cody Enterprise is ready for even the most security-conscious and stringent of environments. 

In fact, we recently announced [an alliance with Leidos](https://www.prnewswire.com/news-releases/leidos-and-sourcegraph-to-bring-secure-ai-enabled-software-development-to-government-customers-302057684.html) to help bring Cody to the US government sector.

_"Leidos is committed to providing our customers with trusted mission AI tools that help them prepare for success in an increasingly complex and dynamic world. By creating this alliance with Sourcegraph, we are enhancing our capabilities with a context-aware code platform, that empowers Leidos and its customer developers to deliver purpose-built, mission software faster and more securely."_ 

-Roy Stevens, National Security Sector President, Leidos

With the launch of Cody Enterprise, we’re also introducing more capabilities to help enterprises administer and safeguard their code:

**Guardrails for public code**: OSS attribution guardrails help reduce exposure to copyrighted code by validating that code generated by Cody.

<Video
  source={{
    mp4: 'blog/cody-is-enterprise-ready/guardrails'
  }}
  loop={true}
  title="Cody guardrails"
/>

**Enterprise analytics**: Teams have direct access to comprehensive analytics of all their Cody usage data across active users, completions, commands, and chats so they can better understand how teams are using AI and the value it’s delivering.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-is-enterprise-ready/analytics.png"
/>

For an even deeper look at all the new Cody capabilities for developers, read [this blog post](https://sourcegraph.com/blog/cody-better-faster-stronger).

With the addition of Cody Enterprise, we now have a [full suite of plans](https://sourcegraph.com/pricing) for individuals and organizations of all different sizes, and a bundle SKU for those interested in both our products:

* **Cody Free** for individual users who want to use Cody for their local code.
* **Cody Pro** supports power users and small teams who want unlimited Cody usage for their local code.
* **[NEW] Cody Enterprise** for supporting enterprises who want Cody with unlimited usage and context of their entire enterprise-wide codebase.
* **[NEW]** **Code Intelligence Enterprise** for enterprises who want Cody Enterprise and Code Search Enterprise.

The launch of Cody Enterprise is a significant milestone for Cody and helps bridge the gap between realizing the potential of AI coding assistants and meeting the unique needs of enterprises. We’re excited to bring Cody to developers in organizations of all sizes, and can’t wait to see how it becomes an integral part of your development process.

[Learn more](https://sourcegraph.com/cody) about Cody here, or [contact us](https://sourcegraph.com/contact/request-info) to find out more.
