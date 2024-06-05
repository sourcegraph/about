---
title: "Sourcegraph June 2024 release: Jupyter Notebook rendering, Mermaid diagrams, and Cody Enterprise updates"
publishDate: 2024-06-05T10:00-07:00
authors:
  - name: Justin Dorfman
    url: https://x.com/jdorfman
  - name: Alex Isken
    url: https://handbook.sourcegraph.com/team/#alex-isken
description: "This month’s v5.X.X release supports rendering Jupyter Notebooks and Mermaid diagrams in the Code Search file view. It also introduces support for GPT-4o and larger context windows to Cody Enterprise."
tags: [blog, release]
slug: "release/june-2024"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/june-2024/sourcegraph-june-2024-release-og-image.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/june-2024/sourcegraph-june-2024-release-og-image.png
changelogItems:
  - description: "Improved C++ symbol name recognition to improve Cody Enterprise context retrieval."
    url: https://github.com/sourcegraph/sourcegraph/pull/62142
    category: Cody
  - description: "Fixed a bug that was causing excessive resource usage in Batch Changes."
    url: https://github.com/sourcegraph/sourcegraph/pull/62597
    category: Batch Changes
  - description: "Fixed an Executor bug causing code indexing issues when repos had a space in their name. This should impact customers using Azure DevOps."
    url: https://github.com/sourcegraph/sourcegraph/pull/62466
    category: Batch Changes
  - description: "Added documentation for setting sub-repo user permissions with the GraphQL API."
    url: https://sourcegraph.com/docs/admin/permissions/api#setting-sub-repository-permissions-for-users
    category: Admin
---

<br />
Code Search is your single search engine for finding and navigating _all_ your code, so this month, we’re upgrading the file view to support rendering even more file types you may have in your codebase. 

This update also enables two [recently announced](https://sourcegraph.com/blog/cody-enterprise-june-2024) Cody Enterprise features: GPT-4o support and increased context windows for better codebase awareness.
<br />

### Render Jupyter Notebooks and Mermaid diagrams in the file view

<br />
The Code Search file view now supports rendering Jupyter Notebooks (`.ipynb` files) and Mermaid diagrams (within `.md` files). 

Jupyter Notebook files were previously rendered as JSON, but they’ll now render as rich text and media right in the file view, similar to how they’re rendered in the native Jupyter application.

<br />
<Video
  source={{
    mp4: 'blog/code-search-now-supports-jupyter-notebook-rendering/video_001'
  }}
  controls={true}
  loop={true}
  title="Searching by the new point-in-time search filter"
/>
<br />

[Mermaid](https://mermaid.js.org/) is a JavaScript-based diagramming and charting tool. You can use it to create visualized diagrams, flowcharts, and user journeys directly within Markdown files. Code Search now recognizes [Mermaid syntax](https://mermaid.js.org/intro/syntax-reference.html#syntax-structure) within your Markdown files and will render your diagrams within the file view.

<br />
<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/june-2024/mermaid-file-view.png"
  alt="Code Search file view showing the Mermaid chart"
/>
<br />
<br />

### GPT-4o support for Cody chat and commands

<br />
You can now use GPT-4o as your LLM for powering Cody chat and commands. GPT-4o is OpenAI’s latest model, and it’s two times faster than GPT-4 Turbo while performing better in general reasoning benchmarks. 

 [Read the docs](https://sourcegraph.com/docs/cody/core-concepts/cody-gateway#configuring-custom-models) for information on configuring your model selection. You can also try out GPT-4o and compare it against other models today using the [LLM Litmus Test](https://s0.dev/).
 <br />

### Smart context windows for better codebase awareness

<br />
Cody has increased context window limits for both inputs and outputs. These changes provide several benefits:

* You can now push way more context into Cody, including @-mentioning multiple large files, so that you can ask questions about larger amounts of code
* You can have much longer back-and-forth chats with Cody before it starts to forget the context from earlier in the conversation
* Cody’s outputs should not cut off mid-message anymore

<br />
For BYOK customers, increasing context limits may increase LLM costs. [Read the docs](https://sourcegraph.com/docs/cody/clients/enable-cody-enterprise#smart-context-window) for more information on this feature and how to set your own context limits.

<br />
Sourcegraph 5.X.X is now available. Users self-hosting Sourcegraph can upgrade their instances today, and Sourcegraph Cloud users will receive this update within the coming days.
