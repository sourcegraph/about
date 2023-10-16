---
title: "Integrating Cody with Amazon Bedrock"
authors:
  - name: Tom Pinckney
    url: https://handbook.sourcegraph.com/team/#tom-pinckney
publishDate: 2023-10-16T10:00-07:00
description: "Developers can now use Amazon Bedrock to provide the LLM backend for Cody."
tags: [blog]
slug: 'integrating-cody-with-amazon-bedrock'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/integrating-cody-with-amazon-bedrock/amazon-bedrock-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/integrating-cody-with-amazon-bedrock/amazon-bedrock-hero.png
---

The field of AI continues to advance at lightspeed, with new products and services in the AI ecosystem emerging every week. In September, AWS [announced the general availability of Amazon Bedrock](https://aws.amazon.com/blogs/aws/amazon-bedrock-is-now-generally-available-build-and-scale-generative-ai-applications-with-foundation-models/), their managed service that provides on-demand access to [foundation models (FMs)](https://aws.amazon.com/what-is/foundation-models/).

At Sourcegraph, we recently [announced support for integrating Amazon Bedrock](https://about.sourcegraph.com/blog/feature-release-october-2023). Cody Enterprise customers can now use Anthropic's Claude 2 and Claude Instant models via Bedrock as the LLM backend for the AI coding assistant.

### What is Amazon Bedrock

[Amazon Bedrock](https://aws.amazon.com/bedrock/) is a fully managed service that provides AWS customers access to a number of different foundation models on-demand, including models from Amazon and other third parties such as Anthropic. This includes Claude 2 and Claude Instant, two of the models commonly used to power Sourcegraph's Cody. Foundation models can be privately customized with your own data stored at Amazon Simple Storage Service (Amazon S3). Users can adjust the hyperparameters to achieve the best model performance.

Bedrock also offers security for the data being sent to and from the model. All data processed by the service is encrypted in transit and at rest, and content sent to the service (such as user prompts and context) is not used to improve the base models, nor is it shared with third-party model providers.

These features make Bedrock a compelling offering to use in conjunction with Cody. See the [Amazon Bedrock Security and Compliance guide](https://aws.amazon.com/bedrock/security-compliance/) for a more comprehensive overview of the service's data security.

### Using Cody with Cody Gateway

By default, Cody operates by routing requests through the [Cody Gateway](https://docs.sourcegraph.com/cody/explanations/cody_gateway), which accesses LLM service APIs (such as Anthropic's APIs) through the public internet. However, some organizations would prefer to use an AI service from their existing cloud infrastructure provider. Amazon Bedrock provides this solution.

### Using Cody with Amazon Bedrock

When using Cody with Amazon Bedrock, Cody doesn't talk to the Cody Gateway or Anthropic's APIs. Instead, Cody sends requests to the Bedrock API endpoint within AWS using the customer's own API keys. Today, this integration with Bedrock supports the Claude 2 and Claude Instant models.

This model offers two distinct differences for Cody customers:

1.  **Data control**. Using Amazon Bedrock lets customers route requests through their own AWS cloud environment rather than to the Anthropic API. Note that data sent to Amazon Bedrock becomes subject to AWS's own data security policies rather than the security policies that Sourcegraph has negotiated with Anthropic.

2.  **Pricing control**. In this model, customers manage their own AI model costs via the Amazon Bedrock service. This also means they can choose from Amazon Bedrock's pricing options and consolidate their AI costs with their AWS bill.

The following diagram illustrates the data flow when using Cody with Anthropic's APIs versus Cody with Amazon Bedrock.

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/integrating-cody-with-amazon-bedrock/amazon-bedrock-dataflow.png"
    alt="A diagram showing how Cody talks to the Anthropic API versus the Bedrock API."
/>

### Getting started with Cody and Amazon Bedrock

In summary, using Cody with Amazon Bedrock lets organizations bring code AI to their teams while taking advantage of the data and pricing controls of their existing cloud provider.

If you're not already using Cody and you're interested in using it with Amazon Bedrock, you can [contact us about Cody Enterprise](https://about.sourcegraph.com/contact/request-info). If you're already a Cody Enterprise customer and you'd like to configure Amazon Bedrock for your account, you can [find instructions in the docs](https://docs.sourcegraph.com/cody/overview/enable-cody-enterprise#anthropic-claude-through-aws-bedrock) or contact your Technical Advisor.