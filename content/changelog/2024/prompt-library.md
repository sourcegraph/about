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

While Cody’s autocomplete and chat functions speed up the inner dev loop, we’ve consistently heard from engineering leaders that they want more customizable ways to promote code AI best practices across their organization. Organizations that widely adopt LLM tools report better unit test and documentation coverage, not to mention faster issue-to-PR times. One Sourcegraph customer, 1Password, reports that unit tests that used to take a full day to write [now take 10 minutes](https://sourcegraph.com/case-studies/1password-increases-productivity-in-a-distributed-codebase). However, AI coding tools leave much to be desired:

- AI tools today require writing long and cumbersome prompts over and over again, which could have taken longer than writing the code itself
- AI tools require users to go back and forth with the language model and clarify what they want, taking up valuable developer time
- AI tools don’t use proper context, so if a developer doesn’t use your enterprise’s code context or reference best practices, they could end up writing poor quality code

To address these needs, we’re excited to announce the Prompt Library, a new way for Cody users to build customizable building blocks (Prompts) to accelerate their work, share their best prompts with their teammates, and enable administrators to promote the best Prompts to the rest of the organization.

The Prompt Library is a system for creating and sharing customizable Prompts, and it replaces Cody’s previous custom commands feature. We’ve designed it specifically for three things:

- **Scalability**: One-off chat messages written differently can often produce varied results across your engineers. While some engineers may know how to write excellent LLM prompts, many others may not. Not to mention good prompts can often be long and cumbersome to write out. With Prompt Library, your team can now codify the best Prompts and share them with teammates. Admins also have the unique ability to promote the best Prompts to the rest of the company, scaling your organization’s best practices
- **Repeatability**: Reusable Prompts reduce the toil of important parts of the development process, including building unit tests and adding documentation. With just a click of a button, high-quality Prompts start working instantly in your code, accelerating the pace of software development
- **Flexibility**: Today, your team can build Prompts that help you refactor code, write new code, or improve the existing code you have with documentation and tests. In the future, Prompts will become the building blocks to streamline parts of the SDLC

With this update, you’ll find that the Prompt Library replaces the default and custom commands in Cody. The previous default commands will now appear as default Prompts:

- Document Code
- Explain Code
- Find Code Smells
- Generate Unit Tests (This Prompt will now output code into the chat rather than creating a new file)

All Cody Enterprise customers on the latest release have access to Prompts and Prompt Library. To create your organization’s first Prompts, go to /prompts to get started.

[Read the docs](https://sourcegraph.com/docs/cody/capabilities/commands) for more.