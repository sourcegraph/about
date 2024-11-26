---
title: "Enterprise model selection is now generally available"
authors:
  - name: Alex Isken
    url: https://x.com/AlexanderIsken
    avatar: https://storage.googleapis.com/sourcegraph-assets/blog/alex_avatar.png
publishDate: 2024-11-25T10:00-02:00
description: "You can now define standardized pre-instructions for Cody to determine how it answers questions or which questions it will answer."
tags: [Cody, Enterprise, 5.10]
version: [v5.10]
versionIcon: /assets/changelog/sourcegraph.svg
slug: 'enterprise-model-selection'
published: true
relatedTopics:
  - title: Cody docs
    url: https://sourcegraph.com/docs/cody
  - title: Model configuration docs
    url: https://sourcegraph.com/docs/cody/enterprise/model-configuration
---

Cody is built to support the latest and greatest LLMs interchangeably so that developers always have access to the most powerful code AI solution. For Cody Enterprise customers, we’re expanding Cody to be even more flexible and allow admins to select multiple models from multiple providers, which end users can then choose from on-demand.

We’re excited to announce general availability for enterprise model election. Cody Enterprise users can now select and hot-swap between multiple model options. Cody Enterprise admins can select which models to provide for users, including models from different providers, including Amazon Bedrock, Azure OpenAI, and Google Cloud Vertex AI.

Existing Cody Enterprise customers may need to update their instance configuration to enable enterprise model selection. [Read the docs](https://sourcegraph.com/docs/cody/enterprise/model-configuration) for more information on how to set up mode selection.