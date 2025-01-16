---
title: "Promoted Prompts for VS Code and Cody Web"
authors:
  - name: Kelvin Yap
    url: https://x.com/kelvinyap
    avatar: https://storage.googleapis.com/sourcegraph-assets/blog/kelvin_avatar.png
publishDate: 2024-10-30T17:34-07:00
description: "Prompts can now be promoted to show at the top of the Prompts list, allowing organizations to highlight specific Prompts that encourage best practices or are recommended to use."
tags: [Enterprise, Cody, VS Code, Cody Web]
version: [v5.9.0]
versionIcon: /assets/changelog/sourcegraph.svg
slug: 'cody-promoted-prompts'
published: true

---

The Prompt Library is a great way for users within an organization to share, discover, and use prompts while working with Cody chat. We've introduced a new concept to Prompts called Promoted Prompts which allows admins to highlight Prompts to users that appear at the top of a Prompt list, directing users to use specific Prompts that encourage best practices within the organization.

Admins can promote a Prompt by checking the `Promoted` box in the Prompt edit screen.

<br />
<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/changelog/cody-promoted-prompts/promote-a-prompt.png"
  alt="Admins can promote a prompt by checking the `Promoted` box in the prompt edit screen."
/>
<br />

Promoted Prompts are marked with an icon next to their name and will appear at the top of the Prompt list in the Cody Chat window in an IDE, as well as in the Prompt Library.

<br />
<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/changelog/cody-promoted-prompts/promoted-prompts-ide.png"
  alt="Promoted prompts are marked with an icon next to their name and will appear at the top of the prompt list in the Cody Chat window in an IDE."
/>
<br />

<br />
<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/changelog/cody-promoted-prompts/promoted-prompt-library.png"
  alt="Promoted prompts will also appear at the top of the Prompt Library for easy discovery and use."
/>
<br />

Promoted Prompts are available for VS Code and Cody Web for all plans. Cody Enterprise customers should upgrade to the latest release (5.9.0) to access this functionality.