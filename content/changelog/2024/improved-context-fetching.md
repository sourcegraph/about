---
title: "Improved context fetching from @-mentioned repos for Cody Enterprise Cloud"
authors:
  - name: Kelvin Yap
    url: https://x.com/kelvinyap
    avatar: https://storage.googleapis.com/sourcegraph-assets/blog/kelvin_avatar.png
publishDate: 2024-10-02T23:44-07:00
description: "In the latest Sourcegraph release for Enterprise Cloud customers we've made improvements to the context fetched from @-mentioned repos, providing greater precision and increasing the likelihood Cody returns higher quality responses."
tags: [Cody, Enterprise]
version: [v5.8.0]
versionIcon: /assets/changelog/sourcegraph.svg
slug: 'improved-context-fetching'
published: true

---

AI code assistants are only as good as the context they’re given, and Cody uses the context of your codebase as part of its prompt construction to deliver high quality responses to your chats (you can learn more about how Cody understands your codebase [here](https://sourcegraph.com/blog/how-cody-understands-your-codebase)). Cody allows users to @-mention specific repos, directories, and files in your prompts as context to provide greater precision and to increase the likelihood of higher quality responses, and in this release for Enterprise Cloud customers we’ve made improvements to how Cody handles and fetches context from @-mentioned repos.

### High signal code snippets and files are now ranked higher and earlier to the LLM

When asking Cody a question and @-mentioning a repo, Cody searches the repo to determine what code snippets or files should be passed to the LLM as context. This output can be seen in the `context` section of a chat in Cody, and is displayed in the order it is passed to the model.

<br />
<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/changelog/improved-context-fetching/before-fetching-improvement.png"
  alt="Existing context fetching"
/>
<br />

In the example above we want to understand what `chatcontroller` does but the key code snippets or files from `chatcontroller.ts` are buried below less relevant markdown files. We’ve implemented a proprietary re-ranker that sorts relevant context items higher and earlier to the LLM, resulting in a higher quality response.

<br />
<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/changelog/improved-context-fetching/after-fetching-improvement.png"
  alt="New context fetching"
/>
<br />

### Support for more context from a file

In addition to an improved ranking of relevant files as context for a prompt, Cody now supports multiple snippets fetched from an individual file too. Previously this was limited to 1 snippet per file, and this change should improve the precision and quality of the context passed to an LLM.

<br />
<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/changelog/improved-context-fetching/multiple-snippet-support.png"
  alt="Multiple snippet support"
/>
<br />

These changes are only available to Cody Enterprise Cloud customers, and we will update you on future availability for Cody Enterprise customers with self-hosted deployments.
