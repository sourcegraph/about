---
title: "Integrating Cody with Amazon Bedrock"
authors:
  - name: Alex Isken
    url: https://handbook.sourcegraph.com/team/#alex-isken
  - name: Kelvin Yap
    url: https://handbook.sourcegraph.com/team/#kelvin-yap
publishDate: 2024-05-07T10:00-07:00
description: "Security-conscious enterprises can use Amazon Bedrock to provide the LLM backend for Cody."
tags: [blog]
slug: 'integrating-cody-with-amazon-bedrock'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/integrating-cody-with-amazon-bedrock/amazon-bedrock-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/integrating-cody-with-amazon-bedrock/amazon-bedrock-hero.png
---

AI coding assistants like Cody offer significant advantages in developer productivity and innovation. Like any other AI application, these coding assistants also utilize foundational AI models. One popular way of using these models is through public APIs provided either directly by the model provider or hosted by third-party inference providers. This reliance on external AI providers causes some security-conscious enterprises to have concerns about data privacy, intellectual property protection, and the risk of sensitive code getting exposed or compromised.

Cody allays such concerns by supporting private and secure consumption of foundation models through Amazon Bedrock. This means customers can run foundation models effectively like any other resource in their AWS environment, and securely connect these models to Sourcegraph Cody, also running within the same environment.

This allows for pairing Cody's zero retention / training of data with Bedrock's robust security protocols to provide organizations peace of mind about security and control of their sensitive data.

### What is Amazon Bedrock

[Amazon Bedrock](https://aws.amazon.com/bedrock/) is a fully managed service that provides AWS customers access to several different foundation models on-demand, including models from Amazon and other third parties such as Anthropic. This includes the Claude 3 family, arguably the highest-performing set of models in the market today and [currently available for all Cody users](https://sourcegraph.com/blog/claude-3-now-available-in-cody). Foundation models can be privately customized with your own data stored at Amazon Simple Storage Service (Amazon S3). Users can adjust the hyperparameters to achieve the best model performance.

Bedrock also offers security for the data sent to and from the model. All data processed by the service is encrypted in transit and at rest, and content sent to the service (such as user prompts and context) is not used to improve the base models nor shared with third-party model providers.

These features make Bedrock a compelling offering to use in conjunction with Cody. See the [Amazon Bedrock Security and Compliance guide](https://aws.amazon.com/bedrock/security-compliance/) for a more comprehensive overview of the service's data security.

### Standard Cody deployment

By default, Cody operates by routing requests through the [Cody Gateway](https://sourcegraph.com/docs/cody/core-concepts/cody-gateway), which accesses LLM service APIs (such as Anthropic's APIs) through the public internet. The following diagram illustrates the standard deployment model:

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/integrating-cody-with-amazon-bedrock/enterprise-architecture-cloud-v2.png"
    alt="A diagram showing how Cody talks to the Anthropic API."
/>

### Using Cody with Amazon Bedrock

However, some security-conscious organizations are hesitant to process data in such a way, and that's where Amazon Bedrock can alleviate such concerns. In this configuration, Cody doesn't talk to the Cody Gateway or Anthropic's APIs when using Cody with Amazon Bedrock. Instead, Cody sends requests to the Bedrock API endpoint within AWS utilizing the customer's own API keys.

This model offers two distinct differences for Cody customers:

1.  **Data control**. Using Amazon Bedrock lets customers route requests through their own AWS cloud environment rather than to the Anthropic API. Note that data sent to Amazon Bedrock becomes subject to AWS's data security policies rather than the security policies that Sourcegraph has negotiated with Anthropic.

2.  **Pricing control**. In this model, customers manage their own AI model costs via the Amazon Bedrock service. This also means they can choose from Amazon Bedrock's pricing options and consolidate their AI costs with their AWS bill.

The following diagram illustrates the data flow when using Cody with Amazon Bedrock:

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/integrating-cody-with-amazon-bedrock/enterprise-architecture-aws-v0.png"
    alt="A diagram showing the dataflow with Anthropic when using Cody with AWS Bedrock."
/>

### Getting started with Cody and Amazon Bedrock

Cody with Amazon Bedrock lets organizations use AI coding assistants for their developers without sacrificing security or data control. If you're interested in using Cody with Amazon Bedrock, [contact us about Cody Enterprise](https://sourcegraph.com/contact/request-info). If you're already a Cody Enterprise customer and you'd like to configure Amazon Bedrock for your account, you can [find instructions in the docs](https://sourcegraph.com/docs/cody/clients/enable-cody-enterprise#anthropic-claude-through-aws-bedrock) or contact your Technical Advisor.
