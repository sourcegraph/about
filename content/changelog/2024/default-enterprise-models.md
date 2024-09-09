---
title: "New default models for enterprise: DeepSeek-V2 and Claude 3.5 Sonnet"

authors:
  - name: Kelvin Yap
    url: https://x.com/kelvinyap
    avatar: https://storage.googleapis.com/sourcegraph-assets/blog/kelvin_avatar.png

publishDate: 2024-09-04T22:45-02:00

description: "Cody is built on model interoperability and we aim to provide access to the best and latest models, and today we’re making an update to the default models offered to Enterprise customers: DeepSeek-V2 is the recommended default for autocomplete, while Claude 3.5 Sonnet is now the recommended default for chat and prompts."

tags: [Enterprise, VS Code, JetBrains]

version: [v5.7.0]

slug: 'default-enterprise-models'

published: true

---

Cody is built on model interoperability and we aim to provide access to the best and latest models, and today we’re making an update to the default models offered to Enterprise customers.

### DeepSeek-V2 for autocomplete

<br />
In our various evaluations around quality and latency, DeepSeek-V2 has shown to provide the best mix of both. Recently announced for our Free and Pro users, DeepSeek-V2 is now the recommended default model for Enterprise customers too. Users should upgrade to the latest Cody version of their respective IDE to see the benefits.
<br />

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/changelog/default-enterprise-models/deepseek-eval.png"
  alt="DeepSeek model evaluation on latency and quality"
/>
<br />

As part of a larger effort to [improve the quality of autocomplete](https://sourcegraph.com/blog/improving-cody-autocomplete-faster-smarter) we’ve seen DeepSeek-V2 contribute to both a 58% increase in the number of accepted characters per user, as well as a reduction in latency for both single (76 ms) and multi line (250 ms) suggestions.

### Claude 3.5 Sonnet for chat and prompts

<br />
Claude 3.5 Sonnet has shown to be one of the best performing models in the market, and is the [default model for our Free and Pro users](https://sourcegraph.com/blog/making-cody-free-10x-better). We’ve seen improvements in overall user satisfaction with Claude 3.5 Sonnet across these users, so in this month’s Sourcegraph release we’re making it the default model for chat and prompts.

Cloud customers will see these default models appear when their instance is updated. We recommend self-hosted customers make this change when they update. BYOK customers should check with their provider if they support Claude 3.5 Sonnet for their specific deployment environment. And as always, please contact your account rep if you have any questions.
