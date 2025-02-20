---
title: "Categorize prompts with tags"
authors:
  - name: Kelvin Yap
    url: https://x.com/kelvinyap
    avatar: https://storage.googleapis.com/sourcegraph-assets/blog/kelvin_avatar.png
publishDate: 2024-12-18T19:13-08:00
description: "Cody Enterprise users can now tag prompts they create, making it easier to group, organize, and filter prompts for easier discovery in the Prompt Library."
tags: [Cody, Enterprise]
version: [v5.11.0]
versionIcon: /assets/changelog/sourcegraph.svg
slug: 'tag-prompts'
published: true

---

Prompts provide Cody users the ability to create and share actions that can be tailored specifically to their development workflow. In this month's release, Enterprise users can now add tags to prompts, making it easier to group, organize, and filter prompts for easier discovery in the Prompt Library.

<br />
<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/changelog/prompt-tags/create-tags.png"
  alt="Admins can create tags that can be used across the organization."
/>
<br />

Site admins can add, edit, or remove tags their organization can use. Created tags will appear in the `Tags` list on the left panel of the Prompt Library which allows users to filter for prompts by a specific tag, perfect for discovery of prompts by use case, category, or team.

<br />
<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/changelog/prompt-tags/tags-list.png"
  alt="Prompts can be filtered and discovered by tags in the Prompt Library."
/>
<br />

Users can assign tags when creating a prompt, and can assign multiple tags as desired.

<br />
<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/changelog/prompt-tags/add-tag-to-prompt.jpg"
  alt="Users can select tags to associate with a prompt they're creating."
/>
<br />

Prompt tags are available in Sourcegraph 5.11.0 and you can read more about them in our [docs](https://sourcegraph.com/docs/cody/capabilities/commands#prompt-tags).