---
title: "Cody Enterprise admins can now configure pre-instructions for user prompting"
authors:
  - name: Alex Isken
    url: https://x.com/AlexanderIsken
    avatar: https://storage.googleapis.com/sourcegraph-assets/blog/alex_avatar.png
publishDate: 2024-11-25T10:00-02:00
description: "You can now define standardized pre-instructions for Cody to determine how it answers questions or which questions it will answer."
tags: [Cody, Enterprise]
version: [v5.10]
versionIcon: /assets/changelog/sourcegraph.svg
slug: 'admin-pre-instructions'
published: true
relatedTopics:
  - title: Cody docs
    url: https://sourcegraph.com/docs/cody
  - title: Prompt pre-instructions docs
    url: https://sourcegraph.com/docs/cody/enterprise/features#prompt-pre-instructions
---

While Cody primarily lives in your editor, the broadly trained LLMs it uses under the hood let it answer a wide range of questions beyond just coding. We’re introducing a new feature for Cody Enterprise that allows teams to give Cody more prescriptive guidance on what kinds of questions it can answer.

Admins on Cody Enterprise instances can now configure prompt pre-instructions. These are text instructions that Cody uses for every chat query, allowing teams to shape how Cody responds to users. For example, if you don’t want Cody to answer questions relating to sensitive non-code matters, you can pre-instruct Cody against them.

Prompt pre-instructions require Sourcegraph 5.10. To configure pre-instructions, add the following to your site admin configuration:

```{ ... "modelConfiguration": { "systemPreInstruction": "If the question is not directly related to software development, respond with \"I can only answer programming-related questions\"" } }```

[Read the docs](https://sourcegraph.com/docs/cody/enterprise/features#prompt-pre-instructions) to learn. Please note that we can’t guarantee all pre-instructions will be 100% effective. Please contact us if you find cases where pre-instructions are not working as intended.