---
title: "Cody June 2023 release: Better codegen, more recipes, more context, more editors"
authors:
  - name: Ryan Phillips
publishDate: 2023-06-28T10:00-07:00
description: 'The June 2023 release of Cody makes it more powerful and accurate with better autocomplete, new and improved recipes, multi-repository context, inline chat, support for JetBrains IDEs, and a new Cody desktop app. Cody is free forever for devs on both public and private code.'
tags: [blog]
slug: 'cody-in-sourcegraph-5-1'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/5.1/whats-new-cody-5-1.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/5.1/whats-new-cody-5-1.png
---

<YouTube
  title="Sourcegraph Cody: Inline Assist" 
  id="o5eB8J2HvAk"
  showTitle={false}
/>

The June 2023 release of Cody brings even more powerful and accurate code AI to devs. Not only can Cody suggest AI-generated autocompletions in your editor like GitHub Copilot, it can also write entire files, fix bugs, refactor code, and answer questions about your entire codebase. Cody’s power and accuracy comes from supplying the LLM with better context about your codebase--also known as “cheating” from Steve Yegge’s [Cheating Is All You Need](https://about.sourcegraph.com/blog/cheating-is-all-you-need) post--which builds on our work at Sourcegraph creating the leading code search engine.

Highlights:

- 🪄 **Better autocomplete**, with a more powerful LLM (Anthropic Claude) and broader context. Free for devs (unlike GitHub Copilot).
- 🧪 **New and improved recipes**: explain code, fix code smells, optimize performance, and more.
- 💬 **Inline chat**, for easy fixes, refactors, and questions on specific regions of code files.
- 🌐 **Multi-repository context**, so Cody looks beyond just the current repository for knowledge when writing/fixing code and answering questions.
- ➕ **Support for JetBrains IDEs**: IntelliJ, PyCharm, WebStorm, etc. Editor support for Emacs and Neovim is coming soon.
- 💻 **The Cody desktop app**, which makes it easy for individuals to use Cody on your private code in your editor and in a chat UI. No server deployment needed.

Cody is free forever for devs on both public and private code. You only need to pay if you exceed the (generous) rate limits or for team/company/enterprise features.

[Get started with Cody](https://about.sourcegraph.com/cody), or download the editor extension directly for [VS Code](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) or [JetBrains](https://plugins.jetbrains.com/plugin/9682-sourcegraph).

_For Sourcegraph Enterprise Server (self-hosted) users_: ask your admin to upgrade to version 5.1 to get these new features.

## Better autocomplete

Like GitHub Copilot, Cody suggests AI-generated autocompletions in your editor. In this release, we’ve shipped some big improvements to Cody’s autocomplete (and moved it from experimental to beta):

- **Broader context for more idiomatic code suggestions**: Cody is the first code AI to autocomplete based on context from the entire repository, using embeddings-based semantic search. This means Cody can generate better code that uses more of your codebase’s own APIs and idiomatic usage patterns, compared to GitHub Copilot and others that only use recent files and open tabs.
- **More powerful LLM (Anthropic Claude)**: An LLM with greater general reasoning capability plus a larger context window means Cody’s suggestions can be better and more accurate than other code AI tools (including GitHub Copilot) that use simpler LLMs.
- **Free for devs (unlike GitHub Copilot)**, with a very generous [rate limit](https://about.sourcegraph.com/blog/increasing-the-completions-rate-limit).

Today, most devs will find Cody’s autocomplete and GitHub Copilot’s autocomplete roughly equivalent (but remember that Cody is free!).

We expect Cody autocomplete to keep improving quickly. Our approach—more and better context, more powerful LLM—is different from that of other AI code autocomplete tools that optimize for limited context and small models. We’re optimistic that this maximal approach will definitively surpass the minimal approach.

If you want to try Cody autocomplete and compare it with GitHub Copilot, you can toggle Cody autocomplete on/off and still keep using Cody for everything else (chat, recipes, codegen, etc.). Send us your feedback!

<Video 
  source={{
    webm: 'blog/5.1/cody_autocomplete_June23',
    mp4: 'blog/5.1/cody_autocomplete_June23'
  }}
  loop={true}
  title="Cody autocomplete"
/>

## New and improved recipes

Cody can explain, write, fix, and refactor code using your codebase’s own APIs, docs, and usage patterns. This goes way beyond autocomplete or prompt engineering. It’s possible only because Cody supplies context about your own code to a powerful LLM, so it can perform higher-level coding tasks.

In this release, we’ve added and updated many of our favorite recipes:

- **Explain code** using broad knowledge of your codebase and internal APIs
- **Generate unit test** using your preferred test frameworks and conventions
- **Generate docstring** using your codebase’s style
- **Improve variable names** because naming is one of the hard things about computer science
- **Smell code** to find and fix code smells
- **Generate release notes** based on recent commits
- **Generate pull request description**
- **Optimize code performance**

Special shoutout to community members **Deepak Kumar** and **Momal Ijaz** for contributing recipes to Cody!

## Inline chat

While recipes help quickly accomplish specific tasks, Cody chat gives users more freeform capabilities. As a user, you may want to ask Cody questions like:

- Why is this code not working like I expect it to?
- Why is this function so slow?
- Can you make this thing work?

Inline chat for Cody, now in beta, makes it easy to ask questions and get direct inline fixes at any point in your code. You can start a chat with Cody directly at a certain point in your code file, and Cody will use the context at that line to answer your question.

Cody can also write and edit code itself, and you can use inline chat to requests fixes and refactors. Cody will make direct edits to your code, and you can choose to accept or undo any changes.

To open a Cody inline chat, click the `+` icon to the left of any line in your file. With the chat window open, you can either ask Cody questions or use a slash command, such as:

- **/fixup**. Cody will make changes directly to your code inline.
- **/touch**. Cody puts its output in a new file.

<Video 
  source={{
    webm: 'blog/5.1/cody_inline_June23',
    mp4: 'blog/5.1/cody_inline_June23'
  }}
  loop={true}
  title="Cody autocomplete"
/>

## Multi-repository context

Cody’s ability to answer questions about your code comes from its ability to pull context from the code graph. The code graph is the schema of code and code metadata built by the Sourcegraph platform when connected to all of your code hosts.

Before today, Cody would respond to queries by pulling context from your currently-open repository. When used with Sourcegraph 5.1, Cody can now pull context from multiple repositories in the code graph at the same time. In practice, this means that Cody can tell you about code and services that span multiple repositories.

Multi-repository context fetching is available when using Cody via the web interface. To enable this in Cody on the web, click “Add repositories” under the chat bar, and select the repositories you’d like Cody to fetch context from.

## Support for JetBrains IDEs

We want Cody to be available wherever you write code, and the #1 request we’ve received is to bring Cody to IntelliJ and other JetBrains IDEs. Cody is now available as a plugin for JetBrains IDEs (AppCode, Android Studio, CLion, GoLand, IntelliJ IDEA, PhpStorm, PyCharm, Rider, RubyMine, WebStorm, and all new IDEs that JetBrains releases), and you can [download it today](https://plugins.jetbrains.com/plugin/9682-sourcegraph). The plugin supports the Cody chat sidebar, recipes, and code autocomplete.

You can connect the JetBrains plugin to a Sourcegraph.com account to use on public code and to a Sourcegraph Enterprise account or the Cody desktop app to use for a private codebase.

Cody is also available for VS Code, with support coming soon for Neovim and Emacs. [Join the waitlist](https://info.sourcegraph.com/waitlist) to be notified when more editors are available or to request a new editor.

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/5.1/cody_jetbrains.png"
/><br/>

## Cody desktop app

If a code AI tool can only fetch context from recent files, open tabs, or a ripgrep search, it’s going to be limited and inaccurate. It’ll often fail to find relevant code snippets across your entire codebase, so its autocompletions and answers will be less idiomatic and more likely to be flat-out hallucinated.

The solution to this is a persistent server or application that has indexed the codebase and serves context to your editor’s code AI tool. Today we’re releasing the Cody desktop app, a service that runs in the background of your local machine, serving as the integration point between your codebase and IDE extensions to make Cody more accurate.

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/5.1/cody-app-diagram.png"
/><br/>

Ask Cody a question in your editor and Cody will fetch context from the app’s code graph instead of using local keyword search, leading to more accurate answers generated with a broader understanding of your code. 

Context from the app improves all of Cody's features:

- **Code autocomplete**: Cody makes autocompletions based on existing components in a repository, such as React components or functions, regardless of if those components are in open files or elsewhere in a repository.
- **Chat**: Ask Cody about functions or components that are being imported from another file, and Cody will find the component’s definition to explain it. Other code AI tools often can’t find where components are defined if the relevant file isn’t already open.
- **Recipes**: Cody can summarize recent changes to a repository based on context of the commit history. If you ask other code AI tools to do this, they’ll simply say they don’t have access to that data.

The app is the best way to use Cody for free, and it’s [available to download today](https://about.sourcegraph.com/cody).

## Thank you

Cody is an open source project. Thank you to the following community members for their contributions to code, issues, docs, and more!

- [Deepak Kumar](https://twitter.com/deepakdk3478)
- [Momal Ijaz](https://github.com/Momalijaz96)
- [@juliawritescode](https://twitter.com/juliawritescode)
- [Anthony Gilbert](https://twitter.com/anthony_codes)
- [DocumentWrite](https://twitter.com/documentwrites)
- [John Samuelson](https://twitter.com/SamuelsonTweets)
- [Marc Seitz](https://twitter.com/mfts0)
- [Mark Wolfe](https://twitter.com/wolfeidau)
- [Matt Holt](https://twitter.com/mholt6)
- [Siddhant Khare](https://twitter.com/Siddhant_K_code)
- [Vadim Peretokin](https://twitter.com/vadi2)
- [Vipul Gupta](https://twitter.com/vipulgupta2048)

To start contributing to Cody, [join our Discord](https://discord.com/servers/sourcegraph-969688426372825169).