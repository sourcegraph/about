---
title: 'Opening access to Cody for Sourcegraph.com'
description: Cody is now available to anyone with a Sourcegraph.com account.
authors:
  - name: Alex Isken
    url: https://github.com/iskyOS
publishDate: 2023-05-02T12:00
tags: [blog]
slug: cody-for-open-source
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/Cody_hero_dark.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/Cody_hero_dark.png
---

It's officially been one month since we launched Cody, our AI coding assistant, and today we're making Cody available to anyone with a Sourcegraph.com account. **As of today, anyone can use Cody for free up to 50 queries per day.**

### Get started with Cody

If you're interested in trying Cody but don't yet have a Sourcegraph.com account, you can [create one here for free](https://sourcegraph.com/sign-up). Once you have an account, you’ll be able to use Cody immediately.

You can use Cody with Sourcegraph.com in two ways: directly on Sourcegraph.com or with the VS Code extension. Cody on Sourcegraph.com primarily works by querying open source code, whereas the VS Code extension works with both local and open source code.

### Cody on Sourcegraph.com

We’ve built Cody chat directly into the Sourcegraph.com interface. This version of Cody can answer general coding questions, answer questions about files or code snippets you have open in the interface, and provide context-aware answers relative to any Cody-enabled repositories on Sourcegraph.com.  While viewing a file, you’ll now see this button, which opens a Cody chat window:

<br/>
<img
  style={{marginTop: "0px", marginBottom: "20px", width: "40%"}}
  src="https://storage.googleapis.com/sourcegraph-assets/blog/ask_cody_button.png"
  alt="Ask Cody button"
/>
<br/>

*Cody-enabled repositories* refer to open source repositories which have embeddings enabled. Embeddings give Cody contextual knowledge of a repository when responding to queries. For repositories that don't have embeddings, Cody will do its best to answer questions based on the context it gets from the file you’re looking at or the code snippet you pass to it. In effect, this means Cody on Sourcegraph.com works best for open source repositories with embeddings.

<Video 
  source={{
    mp4: 'blog/cody-for-dotcom'
  }}
  loop={true}
  title=""
/>

You can [read more about embeddings](https://docs.sourcegraph.com/cody/explanations/code_graph_context), or [see the list of open source repositories with embeddings](https://docs.sourcegraph.com/cody/embedded-repos). If you’d like to request that we add embeddings for a specific open source repository, you can [make a request in our Discord](https://discord.gg/sourcegraph-969688426372825169).

### Cody in VS Code

Cody is also available as a [VS Code extension](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai). To get started, simply install the extension and sign in to your Sourcegraph.com account within the extension interface.

This version of Cody answers questions related to both your local code and open source code. It can search your open project in VS Code to find relevant code and relay it to the LLM as context for queries, plus it can provide context-aware answers for any open source repository that’s embedded on Sourcegraph.com.

Check out the VS Code extension in action in this video:

<YouTube
  title="Sourcegraph Cody: your AI coding assistant" 
  id="fmir_bUyygw"
  showTitle={false}
/>

### The future of Cody

While we still consider Cody an *experimental* feature, we’re excited to open access to the world. We’ll be monitoring stability closely and limiting users to 50 Cody queries per day (this limit may fluctuate as we learn more).

We’ve already seen incredible examples of what Cody can do, and we’d love to hear more of your feedback and stories using Cody. We’ve even been [using Cody to build Cody](https://twitter.com/beyang/status/1647744307045228544?s=20). 

[Jump into the docs](https://docs.sourcegraph.com/cody) to get started with Cody today, and don’t forget to [join our Discord](https://discord.gg/sourcegraph-969688426372825169) and leave feedback.

And, if you’re interested in bringing Cody to work (with full context-awareness of your private codebase), [let us know](https://about.sourcegraph.com/cody).
