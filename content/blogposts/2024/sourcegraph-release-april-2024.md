---
title: "Sourcegraph April 2024 release"
publishDate: 2024-04-05T10:00-07:00
description: "The latest Sourcegraph release includes support for Claude 3 models in Cody Enterprise."
tags: [blog, release]
slug: "release/April-2024"
published: true
heroImage: 
socialImage: 
changelogItems:
  - description: "Users can now view the commit history at the folder level when browsing."
    url:
    category: Search
  - description: "Sourcegraph Own has been renamed "code ownership". This change does not impact the feature in any way."
    url:
    category: Search
  - description: "The "Commits" button in the repository and folder pages links to commits in the current revision instead of in the default branch."
    url:
    category: Search
  - description: "Code Monitors now properly ignore monitors associated with soft-deleted users, which previously would have led to an error on the overview page."
    url:
    category: Code Monitors
  - description: "Search Jobs now supports diff, commit, and path searches. Before, only file searches were supported."
    url:
    category: Search
  - description: "Expanded support for more accurate language detection. Historically, Search relied on the filename to determine the programming language of the file, but now, it includes file contents as well."
    url:
    category: Search


---

<Badge text="Cody" color="violet" size="small" />

In Sourcegraph 5.3.9104, Claude 3 is now available as an LLM option for chat and autocomplete for Cody Enterprise, bringing Anthropic’s latest models - Haiku, Sonnet, and Opus - to Enterprise users. Sonnet is a [twofold improvement](https://www.anthropic.com/news/claude-3-family) in speed while remaining just as accurate. Meanwhile, Opus is the most intelligent model from Anthropic yet and has notable improvements in the Needle-In-A-Haystack scoring model, accurately recalling specific context from a large amount of context passed to the model. This translates to more accuracy for Cody when [working with context](https://sourcegraph.com/blog/how-cody-understands-your-codebase) and will enable us to increase the context window for users in the near future.

An upgrade to your Sourcegraph instance is required to use Claude 3 LLMs, as well as the latest version of our [VS Code](https://sourcegraph.com/blog/cody-vscode-1-12-0-release) and [JetBrains](https://sourcegraph.com/blog/cody-jetbrains-5-5-2-release) extensions. [Cody Gateway](https://sourcegraph.com/docs/cody/core-concepts/cody-gateway) customers can configure Claude 3 models by requesting a site-config change. For BYOK Cody customers, Claude 3 is available via [AWS Bedrock](https://aws.amazon.com/bedrock/claude/) with support for Haiku and Sonnet, and Opus is [coming soon](https://aws.amazon.com/bedrock/claude/).
