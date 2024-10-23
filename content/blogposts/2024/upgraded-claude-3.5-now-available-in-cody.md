---
title: "The upgraded Claude 3.5 Sonnet is now available for Cody"
authors:
  - name: Alex Isken
    url: https://x.com/alexanderisken
publishDate: 2024-10-22T10:00-01:00
description: "Anthropic’s new, upgraded version of Claude 3.5 Sonnet is available now for all Cody users."
tags: [blog]
slug: 'upgraded-claude-3.5-sonnet-available-in-cody'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/upgraded-3.5-sonnet/upgraded-claude-3.5-sonnet-og.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/upgraded-3.5-sonnet/upgraded-claude-3.5-sonnet-og.png
---

Anthropic [just released](https://www.anthropic.com/news/3-5-models-and-computer-use) a new, upgraded version of Claude 3.5 Sonnet, their most powerful language model. Anthropic notes that this upgraded model version has significant gains over its predecessor in coding, making it a perfect candidate to bring to Cody.

Most impressively, Anthropic notes that the new Claude 3.5 Sonnet model scores 49.0% on [SWE-bench Verified](https://www.swebench.com/) compared to the prior version's score of 33.4%.

[Cody](https://sourcegraph.com/cody), our AI coding assistant, prioritizes offering devs the best and latest models. The AI space is a fast-moving field, and model interoperability lets Cody continuously improve as new models come to market.

## Upgraded Claude 3.5 Sonnet is available for Cody Free and Cody Pro, full availability for Cody Enterprise next week

The new version of Claude 3.5 Sonnet is now available for Cody Free and Cody Pro users. It's also the new default model, so if you were previously using the default model (the older 3.5 Sonnet), you should automatically be moved to the new version. If you don't see the model in the dropdown selector, restarting your editor and upgrading to the latest Cody version should fix it.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/upgraded-3.5-sonnet/claude-3.5-cody.jpeg"
  alt="3.5 Sonnet in the Cody model selector"
/>

Cody Enterprise customers using [Cody Gateway](https://sourcegraph.com/docs/cody/core-concepts/cody-gateway) will automatically have access to the new version of 3.5 Sonnet when they upgrade to the latest Sourcegraph release coming next week. BYOK customers can use the new Sonnet version today by modifying their configuration to `claude-3-5-sonnet-20241022` or `claude-3-5-sonnet-v2@20241022` for Anthropic and Google Vertex AI, respectively. Please refer to the [detailed instructions](https://sourcegraph.com/docs/cody/clients/model-configuration) or reach out for assistance.

If you don't yet have Cody, you can [get started for free](https://sourcegraph.com/cody). You can also find the Cody editor extensions in the [VS Code marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) and [JetBrains marketplace](https://plugins.jetbrains.com/plugin/9682-sourcegraph).
