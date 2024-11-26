---
title: "Accelerate your work with the new Prompt Library"
authors:
  - name: Alex Isken
    url: https://x.com/AlexanderIsken
    avatar: https://storage.googleapis.com/sourcegraph-assets/blog/alex_avatar.png
publishDate: 2024-11-25T10:00-02:00
description: "The new Prompt Library lets Cody users build and share custom Prompts, accelerating your everyday work with reusable building blocks."
tags: [Cody, Enterprise, 5.10]
version: [v5.10]
versionIcon: /assets/changelog/sourcegraph.svg
slug: 'prompt-library'
published: true
relatedTopics:
  - title: Cody docs
    url: https://sourcegraph.com/docs/cody
  - title: Prompts docs
    url: https://sourcegraph.com/docs/cody/capabilities/commands
---

While Cody’s autocomplete and chat functions speed up the inner dev loop, we’ve consistently heard from users that they want more customizable ways to accelerate *their* work. We’re excited to announce the Prompt Library, a new way for Cody users to build customizable building blocks (Prompts) to speed up their work and share their favorite Prompts.

The Prompt Library is a system for creating and sharing customizable Prompts, and it replaces Cody’s previous custom commands feature. We’ve designed it specifically for three things:

- **Scalability**: One-off chat messages written differently can often produce varied results. You can now codify your best Prompts and even share them with teammates.
- **Repeatability**: Reusable Prompts reduce the toil of important parts of the development process, including building unit tests and adding documentation. This improves the quality of a codebase as a whole.
- **Flexibility**: Today, Prompts can help you do things like refactor code, write new code, or make the existing code you have better with documentation and tests. In the future, Prompts will become the building blocks to streamline parts of the SDLC.

With this update, you’ll find that the Prompt Library replaces the default and custom commands in Cody. The previous default commands will now appear as default Prompts:

- Document Code
- Explain Code
- Find Code Smells
- Generate Unit Tests (This Prompt will now output code into the chat rather than creating a new file)

You can create new custom Prompts via the Prompt Library on the web. Once you save Prompts, they will appear in your Cody IDE extension. You can also share your Prompts with your organization (for Cody Enterprise). When you first update your IDE extension, you’ll also have the ability to migrate any of your existing custom commands to custom Prompts.

[Read the docs](https://sourcegraph.com/docs/cody/capabilities/commands) for more.