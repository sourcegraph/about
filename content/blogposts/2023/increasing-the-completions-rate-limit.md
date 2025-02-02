---
title: "We're doubling the Cody completions rate limit"
authors:
  - name: Alex Isken
    url: https://handbook.sourcegraph.com/team/#alex-isken
publishDate: 2023-06-08T10:00-07:00
description: "We've increased the completions rate limit to 1,000 completions per day for Sourcegraph.com users."
tags: [blog]
slug: 'increasing-the-completions-rate-limit'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/completions-rate-limit-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/completions-rate-limit-hero.png
---

As of today, we are doubling the completions rate limit for all developers who are using Cody with a Sourcegraph.com account. **Cody now supports 1,000 completions requests per day, per user, for free.**

Cody is designed to help developers understand, write, and fix code faster. Over the last several weeks, we've seen a percentage of Cody users hit the daily rate limit for completions requests, creating a suboptimal experience. We now can safely handle a higher load of completions requests, so we've doubled the rate limit to ensure that Cody is delivering the smooth experience it's designed for.

### What are completions?

Completions are a new feature in the VS Code extension. Cody provides real-time code completions as you're typing. As you start coding, or after you type a comment, Cody will look at the context around your open files and file history to predict what you're trying to implement and provide completions. It's autocomplete powered by Cody!

<YouTube
  title="Sourcegraph Cody: Inline Assist" 
  id="QV2R660Jur4"
  showTitle={false}
/>

We quietly released completions in May, and we've been collecting feedback since then. We rate limit completions based on completions requests to the LLM (which are effectively *suggested* completions, not *accepted* completions), and we're seeing that the initial limit of 500 isn't enough for many users. 

### Get started with Cody completions

Completions are now available for all Cody users connected to Sourcegraph.com as an experimental feature, and you can [turn them on in the VS Code settings panel](https://docs.sourcegraph.com/cody/completions). If you're new to Cody, you can [sign up for a free Sourcegraph.com account](https://sourcegraph.com/sign-up) to get access.
