---
title: "How Cody provides remote repository awareness for codebases of every size"
authors:
  - name: Alex Isken
    url: https://handbook.sourcegraph.com/team/#alex-isken
publishDate: 2024-06-24T10:00-01:00
description: "Cody’s context awareness scales to every size codebase, from the smallest startups to the biggest enterprises, using the Sourcegraph platform. Read how it works and what it means for you."
tags: [blog]
slug: 'how-cody-provides-remote-repository-context'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/how-cody-understands-your-codebase/how-cody-understands-you-code-og.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/how-cody-understands-your-codebase/how-cody-understands-you-code-og.png
---

**TL;DR: Cody’s context awareness scales to support companies of all sizes, from small startups to the biggest enterprises, by leveraging the Sourcegraph platform. Teams only need to connect their code hosts to Sourcegraph and Cody to retrieve remote and multi-repository context at any scale.**


## Why “context awareness” matters for code AI

[Cody](http://sourcegraph.com/cody), our AI coding assistant, exists because building software is _complex_, and it’s complex because of the amount of context that developers have to carry in their heads at any time to work effectively. Writing code requires developers to first read and understand existing code.

The issue of code complexity is why we frequently talk about Cody, our AI coding assistant, being **context-aware**. Just as human developers need to carry context in their heads to write good code, so too does AI. An AI developer without context might be able to answer LeetCode-style problems (just as a human developer could), but it wouldn’t be able to effectively work within, and update, an existing codebase.

In short, for an AI coding assistant to generate quality code and answers about code, it needs context. Extending beyond this: **for an AI coding assistant to be most effective within an enterprise-scale environment, it needs context at the same enterprise scale**.

## Why context awareness is challenging for code AI

You can think of human developers as a function of all the context in their heads:

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/how-cody-provides-remote-repository-context/compressed_human-dev-context.png"
  alt="Human developers' context"
/>

Meanwhile, you can think of AI as a function of all the context in its training data, plus any other context that’s been manually passed in:

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/how-cody-provides-remote-repository-context/compressed_ai-dev-context.png"
  alt="AI developers' context"
/>

In theory, context awareness for an AI coding assistant isn’t that difficult. As a developer, you can copy relevant code (context) and paste it into a chat window alongside your request, similar to how you’d work with ChatGPT. We believe this defeats much of the value of having an _assistant_ though; if you have to find the exact relevant code snippets and manually copy and paste them to your AI assistant, then you still have to do a lot of the work of reading and understanding context. The value comes from the tool’s ability to retrieve its own context (and hopefully the right context) to answer your questions or generate quality code.

This automated context retrieval is where the challenge comes in. When you’re working in your IDE, the context you need for any given task can be broad:

1. **Context from your local file**. For example, if you’re adding a button to a webpage on a static site, you _might_ not need a lot of broad context. Sometimes, the context of the surrounding code in your local file is enough.
2. **Context from your open repository.** You may be working on a task that requires context from other files within your working repository. For example, maybe you’re working in one file where you’re consuming an API defined elsewhere.
3. **Context from other repositories.** You may need context from repositories outside the one you’re working in, such as if you’re working with shared libraries that live in another repository.

Today, many AI coding assistants accomplish #1 and use local file context for generating code. Fewer of them accomplish #2 and retrieve context from across the entire open repository. 

The third point—context awareness of remote codebases—is the most challenging for a couple of reasons:

1. Most AI coding tools operate via IDE extensions. If a developer doesn’t have a certain repository open in their IDE, bringing context of that repository to the IDE is difficult.
2. Remote codebases vary _significantly_ in scale. Some small engineering teams may operate with only 5 or 10 repositories. On the other end, we’ve worked with some enterprises operating with >100,000 repositories.
3. Lastly, if context is stored remotely and queried as needed, that context index has to be kept fresh so that stale context isn’t used to inform the AI.

## How Cody solves remote context awareness at enterprise scale

To solve the first problem, you need a way of making remote context accessible to the local IDE. Not many solutions even attempt this today, and the few that do require users to set up indexing for each individual remote repository that they want accessible to the AI. This works for setups where there’s a small, finite number of repositories to index, but it’s more fickle for larger setups with hundreds (if not thousands) of repositories to consider.

This is where Cody has a unique advantage, and it’s because of the underlying Sourcegraph platform. When users first set up Sourcegraph, they start by configuring a Sourcegraph instance, a server that connects to all of their code hosts. This instance indexes all of their repositories across every code host. Those repositories are then searchable by both [Code Search](https://sourcegraph.com/code-search) and Cody, and Cody can retrieve context from those repositories as needed.

The Sourcegraph instance also re-indexes repositories regularly to keep the source code fresh (both for Cody and Code Search), making challenge #3 a non-issue. 

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/how-cody-provides-remote-repository-context/sourcegraph-index-setup.png"
  alt="Sourcegraph instance setup for indexing repositories"
/>

_(There’s a lot of machinery under the hood to make this system work. Part 2 of this blog, coming soon, will explain how exactly Sourcegraph indexes code and keeps it fresh to support this functionality)_

## What remote context awareness means for Cody users

This setup of building Cody Enterprise _on top of_ Sourcegraph means that users get all three forms of code context: local file, open project (local repository), and_ _remote repository context.

As a Cody Enterprise user, you can use any repository in your codebase for context from any Cody interface. You can work in Repository A in your IDE and ask Cody a question requiring context from both Repository A and Repository B (for example a utility library). Or, you can ask Cody a high-level question about Repository C without having any project open in your IDE.

Today, in Cody’s VS Code extension, remote repository context fetching works via the @-mention mechanism:

<Video
  source={{
    mp4: 'blog/how-cody-provides-remote-repository-context/vs-code-remote-repo-context'
  }}
  loop={true}
  caption="@-mentioning repos in VS Code"
/>

In the JetBrains extension, this works through a context selection menu:

<Video
  source={{
    mp4: 'blog/cody-for-jetbrains-is-generally-available/jetbrains-cody-multi-repo-chat-ga'
  }}
  loop={true}
  caption="Selecting context repos in JetBrains"
/>

## Scale & security considerations for code AI

For large enterprises with massive codebases, two common questions pop up:

1. Can this solution _scale_?
2. How can this be made secure for teams where different developers have different permissions to particular repositories?

Scalability is another area where Cody Enterprise benefits from the underlying Sourcegraph platform. We’ve scaled Sourcegraph (and Code Search) to several **massive** customer codebases, and Cody Enterprise can connect to these huge codebase indexes. We've worked with customers with over 300,000 repositories and monorepos exceeding 90GBs, and Cody has been able to integrate with them for context retrieval without issue.

On the security front, Cody supports RBAC, so admins can control access to specific repositories more granularly. This prevents users from inadvertently getting access to the content of a repository by chatting with Cody and asking about it. Admins can also set up [context filters](https://sourcegraph.com/docs/cody/capabilities/ignore-context) to prevent sensitive files or repositories from being relayed to any third-party LLM providers.

## Learn more about how Cody uses context

Part 2 of this blog (coming soon!) will dive deeper into the actual workings of Sourcegraph’s repository indexing and context fetching mechanisms. [Subscribe to our newsletter](https://sourcegraph.com/newsletter) to receive a monthly email with our new blog content so that you don’t miss it.

In the meantime, if you want to read more about how Cody uses RAG techniques to find the right context at the right time for different features, check out our blog _[How Cody understands your code](https://sourcegraph.com/blog/how-cody-understands-your-codebase)_.

And, lastly, if you’re interested in Cody Enterprise and would like to learn more about it for your team, [get in touch](https://sourcegraph.com/contact/request-info?form_submission_source=remote-repo-context-blog)!
