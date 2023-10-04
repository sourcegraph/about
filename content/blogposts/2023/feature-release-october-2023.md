---
title: "Introducing enhancements to Code Search and Cody, including a 2x increase in autocomplete quality"
authors:
  - name:
    url:
publishDate: 2023-10-04T10:00-07:00
description: "New versions of Cody and Code Search are now available, including Cody for Neovim and support for OpenAI LLMs in Cody."
tags: [blog]
slug: 'feature-release-october-2023'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-october-2023/october-release-blog-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-october-2023/october-release-blog-hero.png
---

<YouTube
  title="What's New in Cody + Code Search: October 2023" 
  id="FKt3X0rVwQc"
  showTitle={false}
/>

Today, we're announcing a major upgrade to Cody that achieves a best-in-class initial completion acceptance rate of 30%. Cody now supports using OpenAI and open source language models in addition to the models from Anthropic already supported, and Cody LLMs can now be hosted on Azure OpenAI and AWS Bedrock. Cody is also now available for Neovim, in addition to VS Code and JetBrains IDEs. We've also revamped the Cody onboarding experience, which no longer requires installing a separate app, greatly simplifying the installation process.

Code Search version 5.2 also gets a number of usability upgrades, including better onboarding for admins. We’ve also shipped improved git debuggability to make troubleshooting gitserver faster for customers running large Sourcegraph instances.

Read on to learn more about what’s new. And, if you’d like to learn more about how we view the evolution of the code AI landscape, check out our other post: [How we’re thinking about the levels of Code AI](https://about.sourcegraph.com/blog/levels-of-code-ai).

## Cody

<br/>

### Speed & quality improvements across Cody IDE clients

Completion Acceptance Rate (CAR) has become a de facto standard way to measure the combined latency and quality of autocompletions produced by AI coding assistants. If the response quality is high but it takes too long to appear, it will be rejected. Likewise, if it comes quickly but is of low quality, the response will also be rejected. A raising CAR measures our ability to hit the sweet spot between the two as we optimize for users accepting the suggestion Cody makes. 

In June, Cody’s CAR was 15%, which frankly, we were not happy with. Now with this October release, and our continued improvement to context, we’re proud to say that the latest Cody achieves as high as 30% acceptance rate among users on average. Cody autocomplete is also now much quicker, with multiline latency improving from 3.4 seconds to 2.4 seconds and single-line latencies from 2.0 seconds to 1.1 seconds on average. And we’ve got plenty of headroom yet in these numbers, so stay tuned for further improvements in future releases.

A major factor in Cody’s improved performance comes from incorporating open source LLMs into Cody. Cody now uses the [StarCoder](https://huggingface.co/bigcode/starcoder) model for the majority of its completions - specifically, StarCoder running on Fireworks, a new platform that provides fast inference for open source LLMs. Going forward, Cody Community users will make use of a combination of proprietary LLMs from Anthropic and open source models like StarCoder (the CAR we report comes from using Cody with StarCoder).

Cody also now incorporates syntactic signals to inform when it triggers a completion, including recent user behavior and recently viewed files. In some cases, this means adding latency to Cody’s completions to yield a better experience. We’ve also shipped code graph context for a select number of users, making use of Tree-sitter to fetch related snippets of code that help eliminate type errors, a common mistake in hallucinated code generations.

Behaviorally, Cody now uses [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) to determine when to trigger a completion and whether to generate a single-line or multi-line completion. Here's an example of where Cody opts for a one-shot multiline completion in contrast to other coding assistants that generate code line by line.

_Cody:_
<Video 
  source={{
    webm: 'blog/release-october-2023/cody_multilinereturn',
    mp4: 'blog/release-october-2023/cody_multilinereturn'
  }}
  loop={true}
  title="Cody multiline autocomplete"
/>

_Other coding assistant:_
<Video 
  source={{
    webm: 'blog/release-october-2023/competitor_multilinereturn',
    mp4: 'blog/release-october-2023/competitor_multilinereturn'
  }}
  loop={true}
  title="Competitor multiline autocomplete"
/>

Cody itself remains open source, while integrating with Sourcegraph Code Search (source available) and proprietary LLMs. Sourcegraph remains committed to its philosophy of striving for open source for single player dev tools like Cody. We also believe freedom of choice in the fast-moving model landscape will be a competitive advantage and accelerator of progress for Cody that will compound over time. 

### Cody for Neovim, now available as experimental

Cody for Neovim is here! This new plugin brings both autocomplete and chat to Neovim, and it's available today for free.

Once you've [installed and configured the plugin](https://docs.sourcegraph.com/cody/overview/install-neovim), Cody for Neovim will provide three major features:

- **Autocomplete**: Cody makes inline suggestions as you type. Cody's suggestions will be marked with `[cody]` and appear above other LSP suggestions if both are configured.
- **Chat**: Talk with Cody in the side panel. If you connect the plugin to your Sourcegraph instance to enable codebase awareness, Cody can find & explain code using context from your team's codebase.
- **Inline chat & refactors**: Use the `CodyTask` command and Cody will refactor or adjust highlighted code snippets and replace them directly inline.

<br/>

<Video 
  source={{
    webm: 'blog/release-october-2023/neovim-blog',
    mp4: 'blog/release-october-2023/neovim-blog'
  }}
  loop={true}
  title="Cody in Neovim"
/>

Cody for Neovim is considered experimental as we're still tweaking and fine-tuning the UX based on community feedback. If you have feedback, let us know in [Discord](https://discord.gg/rDPqBejz93).

[Download Cody for Neovim](https://docs.sourcegraph.com/cody/overview/install-neovim).

### Quality, performance, and onboarding improvements for Cody in JetBrains IDEs, now available in beta

The JetBrains plugin has been rewritten with a new architecture that significantly improves quality and performance for autocomplete and chat. Additionally, we have simplified onboarding so that users can start using the plugin with far fewer steps and closed some gaps in [feature parity](https://docs.sourcegraph.com/cody/feature-reference) with the VS Code extension.

<Video 
  source={{
    webm: 'blog/release-october-2023/jetbrains-blog',
    mp4: 'blog/release-october-2023/jetbrains-blog'
  }}
  loop={true}
  title="Cody in JetBrains"
/>

[Download Cody for JetBrains](https://plugins.jetbrains.com/plugin/9682-sourcegraph-cody--code-search).

### Performance improvements and command updates for Cody in VS Code

The VS Code extension has received a similar upgrade as JetBrains, with under-the-hood changes that significantly improve quality and performance of all Cody features. Both chat and autocomplete are faster, and autocomplete offers higher quality suggestions with lower latency.

The `/doc` and `/test` commands have also been updated:

- `/doc` now adds docstrings directly to your code without you needing to copy & paste from the chat sidebar.
- `/test` now better detects your testing framework, adds any dependency imports as needed, and includes the necessary stubs and test setup code.

<br/>

<Video 
  source={{
    webm: 'blog/release-october-2023/vscode-doc-blog',
    mp4: 'blog/release-october-2023/vscode-doc-blog'
  }}
  loop={true}
  title="Docs command in VS Code"
/>

[Download Cody for VS Code](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai).

## Choose between Anthropic and OpenAI models for Cody Enterprise

The AI field is advancing at a breakneck pace, and that includes the development of new LLMs and models to support specific use cases. We see new LLMs emerge nearly every week, tuned for performance across a host of benchmarks. To provide the best possible code AI experience, we believe Cody needs to be universal, with support for plugging in the latest-and-greatest LLMs. 

Cody now supports OpenAI models, and enterprise Cody users can choose from these models to power Cody’s chat and commands features:

- OpenAI GPT-3.5 Turbo
- OpenAI GPT-4 
- Anthropic Claude 2

<br/>

<a href="https://docs.sourcegraph.com/cody/overview/enable-cody-enterprise#using-a-third-party-llm-provider" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>

## Cody Enterprise users can bring their own LLM provider with Azure OpenAI and AWS Bedrock

Alongside support for OpenAI models, users now have more choice in how they run the LLM powering Cody. Cody now supports both Azure OpenAI and AWS Bedrock hosted LLM services. Users can run either service from within their company’s own secure cloud VPC and configure Cody to talk to the LLM service.

By default, Cody accesses LLMs directly via Anthropic & OpenAI’s respective APIs (with 0 retention on both inputs and outputs). By configuring Cody to use Azure OpenAI or Bedrock instead, users can securely route requests from Cody to their own Azure & AWS accounts, plus control their own LLM costs directly.

<a href="https://docs.sourcegraph.com/cody/overview/enable-cody-enterprise#anthropic-claude-through-aws-bedrock-span-style-margin-left-0-25rem-class-badge-badge-experimental-experimental-span" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>

## Code Search

<br/>

### Improved visibility into gitserver for faster debugging

Maintaining and debugging [gitserver](https://docs.sourcegraph.com/dev/background-information/gitserver-api) can be a challenge, especially for large instances with thousands of repositories. SSHing into a gitserver instance, looking through the logs, and piecing together what may be causing an issue is time consuming for users.

Sourcegraph admins can now enable the ability to see gitserver information and git history on a per-repository basis. From the Site Admin dashboard, users can now see:

- Which git commands recently ran on a repository
- When each repository was last re-cloned
- Gitserver instances' total and available disk space

<br/>

<Video 
  source={{
    webm: 'blog/release-october-2023/debug-blog',
    mp4: 'blog/release-october-2023/debug-blog'
  }}
  loop={true}
  title="Debugging gitserver"
/>

<a href="https://docs.sourcegraph.com/admin/repo/recording" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>

### Improved instance setup instructions for admins

The steps needed to fully configure a fresh new Sourcegraph installation were previously not clearly conveyed to instance admins, which often led to later confusion when features weren't working due to misconfigurations. We've introduced a new onboarding process, which prompts admins step-by-step as they set up a fresh instance. Admins are now walked through several critical setup steps including:

- Adding a license key
- Setting an external URL
- Configuring code hosts
- Setting user permissions

<br/>

This change makes the setup process far more straightforward for admins to get the best experience on their new instance.

### Get started today

You can download the latest versions of the Cody IDE clients now. Code Search 5.2 will be available later today for download, and for Sourcegraph Cloud customers, your instance of Code Search will be automatically updated to the latest version.

If you're new to Sourcegraph, you can [download Cody for free](https://sourcegraph.com/get-cody) or [contact us for a trial of Code Search](https://about.sourcegraph.com/contact/request-info).

And, if you'd like to learn more about Sourcegraph and today's release, [join us for our livestream at 12pm PT](https://www.youtube.com/watch?v=IywQJ47XPE0) where our Engineering and DevRel teams will talk about the latest new features.