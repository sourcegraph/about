---
title: "Sourcegraph July 2024 updates: Vertex AI support, improved Analytics, and Code Search updates"
authors:
  - name: Kelvin Yap
    url: https://x.com/KelvinYap
publishDate: 2024-07-10T10:00-01:00
description: "This month’s release supports new Google Gemini and Claude 3.5 Sonnet models, secure model usage via Google’s Vertex AI, and improvements to Cody’s web view. Batch Changes gets a new GitHub App auth integration."
tags: [blog, release]
slug: 'release/july-2024'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/july-2024/sourcegraph-5-5-release.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/july-2024/sourcegraph-5-5-release.png
changelogItems:
  - description: "Server-side batch changes are now GA."
    url: 
    category: Batch Changes
  - description: "The bulk merge action for Batch Changes is now GA."
    url: 
    category: Batch Changes
  - description: "Fixed webhook events for Bitbucket Server plugin."
    url: 
    category: Code Search
  - description: "Slack notifications are noew GA and the beta label has been removed from the UI."
    url: 
    category: Code Monitors
  - description: "Logs in Code Monitors are now GA and the beta label has been removed from the UI."
    url: 
    category: Code Monitors
---

<br />
In this month’s Sourcegraph release (5.5.0) we’ve made numerous improvements to Cody Enterprise. Highlights include support for models from providers like Google and Anthropic, support for model access via Google’s Vertex AI, and improvements to chat response quality. The updated [Cody web view](https://sourcegraph.com/cody/chat) is now in beta, while [Cody CLI](https://github.com/sourcegraph/cody/blob/main/cli/README.md) is available as an experimental feature.

Code Search also receives some polish with general availability of keyword search, an improved GitHub App auth integration for Batch Changes, as well as general availability of Slack notifications and Logs for Code Monitors.
<br />

## Support for Google Gemini models (beta)

<br />
In keeping with giving users access to the best models and best context with Cody, Google's latest models Gemini 1.5 Pro and Flash are now available for Cody Enterprise. [Gemini 1.5 Flash](https://deepmind.google/technologies/gemini/flash/) is a lightweight model built for speed and efficiency, while [Gemini 1.5 Pro](https://deepmind.google/technologies/gemini/pro/) is a larger model optimized for high performance across many tasks.\

Note: For customers using Cody Gateway, Gemini 1.5 Pro and Flash are available for chat, and Flash is available for autocomplete. For BYOK customers Gemini 1.5 Pro and Flash are only available for chat. Please [read our docs](https://sourcegraph.com/docs/cody/core-concepts/cody-gateway#configuring-custom-models) for information on configuring your model selection.
<br />

## Claude 3.5 Sonnet support for Cody chat

<br />
Hot on the heels of our [announcement supporting Claude 3.5 Sonnet](https://sourcegraph.com/blog/claude-3.5-sonnet-now-available-in-cody), Cody Enterprise customers can now select Claude 3.5 Sonnet as their LLM for chat. This brings Anthropic's latest and greatest LLM to all Cody plans, and is available for both VS Code (v1.24.0) and JetBrains (v6.0.12) IDEs.

[Read our docs](https://sourcegraph.com/docs/cody/core-concepts/cody-gateway#configuring-custom-models) for model selection information on configuring use of Claude 3.5 Sonnet. You can also try Claude 3.5 Sonnet and both Google Gemini models in a side by side comparison over at [LLM Litmus Test](https://s0.dev/).
<br />

## Claude 3 and 3.5 support on Google Cloud via Vertex AI

<br />
For security-conscious enterprises, the use of LLMs through public APIs provided directly by the model provider or hosted by third-party inference providers can raise concerns about data privacy and IP protection. Cody Enterprise addresses these concerns by supporting the private and secure consumption of models through managed services like [Amazon Bedrock](https://sourcegraph.com/blog/integrating-cody-with-amazon-bedrock) and [Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-services/openai-service), and now supports Claude models on Google Cloud via [Vertex AI](https://cloud.google.com/vertex-ai?hl=en) as well.

Cody Enterprise supports the Claude 3 family (Haiku, Sonnet, Opus) of models and Claude 3.5 Sonnet via Vertex AI. [Read our docs](https://sourcegraph.com/docs/cody/clients/enable-cody-enterprise#supported-models-and-model-providers) to learn more about setting up models with various managed services.
<br />

## Improved Cody Analytics

<br />
The analytics dashboard has been updated with definitions to provide greater at-a-glance clarity for authenticated and billable users. A time picker has been added with predefined values (e.g. last week, last month, last 3 months) so admins can have a granular view of data across a time period. And finally, you can now export user-level data (such as chat and command events, and completion acceptance rate) with anonymous IDs as a CSV to aid in further analysis or post-processing.
<br />

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/july-2024/cody-analytics-updates_65.png"
  alt="Cody Analytics updates"
/>
<br />

### Updates to Cody Web (beta)

<br />
The vast majority of Cody usage happens alongside your code in your IDE of choice, but you can also chat with Cody and ask questions about code [via the web](https://sourcegraph.com/cody/chat). Currently in beta we've given the Cody web interface a facelift to bring more consistency with the IDE plugins, with more updates and features to come. For more programmatic use the Cody CLI is experimental with improvements to authentication, output responses into .txt files, and more.

[Read our docs](https://sourcegraph.com/docs/cody/clients/cody-with-sourcegraph) for more information about using Cody Web.
<br />

<Video
  source={{
    mp4: 'blog/release-post/july-2024/Cody%20Web%20beta'
  }}
  controls={true}
  loop={true}
  title="New Cody Web view beta"
/>
<br />

## Chat quality improvements

<br />
Improving chat quality is important to ensure users get timely and accurate responses from Cody. We've made a number of changes under the hood this month to improve the quality of responses users receive via chat across all clients, including:

* Improved results for prompts in non-English languages
* Handling long queries with multiple sentences better
* Automatic detection of entities like symbols and filenames in Chat questions, and including the relevant files

<br />

## GitHub App auth integration for Batch Changes

<br />

We've created an easier and more secure way for Batch Changes users to authenticate with their GitHub repositories. Previously, authentication happened via the use of personal access tokens or a global service account token, but this can now be done via GitHub's recommended GitHub App auth model.

Admins can now set up a single GitHub App authentication method from their Sourcegraph instance to GitHub, eliminating the need for per-user personal access tokens and making it easier for users to create and execute batch changes.

Please [read our docs](https://sourcegraph.com/docs/batch-changes/configuring-credentials#github-apps) for more information on how to set up the new GitHub App authentication.

<br />

## Keyword Search GA

<br />

Originally announced in [Sourcegraph 5.3](https://sourcegraph.com/blog/sourcegraph-5.3-changelog), keyword search is now the default pattern type in Code Search, interpreting user queries in a more natural way that's similar in behavior to other search tools and makes searching easier and more intuitive to use. Since releasing in 5.3 we've received positive feedback and an overwhelming preference for this search style from users, so we have removed the toggle to switch between pattern types and keyword search is now the generally available default.

<br />

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/july-2024/keyword-search-ga_80.png"
  alt="Keyword Search GA"
/>
<br />

<br />

Sourcegraph 5.5.0 is now available. Users self-hosting Sourcegraph can upgrade their instances today, and Sourcegraph Cloud users will receive this update within the coming days.

<br />