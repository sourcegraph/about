---
title: "Cody for JetBrains v5.4.358 release"
authors:
  - name: Justin Dorfman
    url: https://handbook.sourcegraph.com/team/#justin-dorfman
  - name: Taylor Sperry
    url: https://handbook.sourcegraph.com/team/#taylor-sperry
  - name: Chris Sev
    url: https://twitter.com/chris__sev
  - name: Alex Isken
    url: https://handbook.sourcegraph.com/team/#alex-isken
publishDate: 2024-03-18T10:00-01:00
description: "The latest release of Sourcegraph's Cody plugin for JetBrains brings exciting new features and improvements. With Claude 3 support, Intelligent file mentioning, better error reporting, and Enhanced remote context for Cody Enterprise users."
tags: [blog]
slug: "cody-jetbrains-5-4-358-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-jetbrains-5-4-358-release/cody-jetbrains-5-4-358-release-go.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-jetbrains-5-4-358-release/cody-jetbrains-5-4-358-release-go.png
--- 

We are excited to announce the latest release of Sourcegraph's Cody plugin for JetBrains, packed with new features and important bug fixes to enhance your development experience. Let's dive into what's new in this release.

### Claude 3 support for Pro users

Pro users can now take advantage of the newest Claude 3 AI models. We've added both Sonnet and Opus! Choosing these offers even more advanced and contextually aware code suggestions, especially if you're using Claude 3 Opus. 

![](https://storage.googleapis.com/sourcegraph-assets/blog/cody-jetbrains-5-4-358-release/image_001.png)



### Enhanced remote context for Cody Enterprise users

We've fixed a bug that limited the consideration of remote contexts. All remote repositories that you add will now be taken into account when providing code suggestions. This improvement guarantees more accurate and comprehensive responses.


<Video 
  source={{
    mp4: 'blog/cody-jetbrains-5-4-358-release/video_002'
  }}
  loop={true}
  title=""
  caption="Adding a remote repository for context in Cody for JetBrains."
/>



Want to learn more about how Cody Enterprise uses remote context? [Read more in our blog](https://sourcegraph.com/blog/how-cody-understands-your-codebase).


### Intelligent file mentioning

Cody now provides a warning if the selected @-files for context are too large, preventing potential performance issues.


![](https://storage.googleapis.com/sourcegraph-assets/blog/cody-jetbrains-5-4-358-release/image_003.png)



### Other notable improvements:

- Automatically prefill GitHub Issue Template for efficient issue reporting.

- Optimized URI conversions for improved compatibility and reliability.

- Improved formatting for single-line completions.

- Enhanced error reporting, providing clear and informative messages to help you quickly identify and resolve issues.


### Bug fixes:

- Fixed URL in the error submitter for accurate issue reporting.

- Resolved issues with URI to Path conversion code.

- Addressed problems with deprecated LLM (`model`) in the persistence model.

- Fixed remote enhanced context bug when multiple repositories are added.


## Changelog

See the [changelog](https://github.com/sourcegraph/jetbrains/releases/tag/v5.4.358) and [GitHub releases](https://github.com/sourcegraph/jetbrains/releases) for a complete list of changes.


## Thank you

Cody wouldn't be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

As always, we value your feedback in [Discord](https://discord.com/servers/sourcegraph-969688426372825169). Happy Codying!


---

**To get started with Cody, [install it from the JetBrains Marketplace](https://plugins.jetbrains.com/plugin/9682-sourcegraph-cody--code-search).**

---

Previous release: [Cody for JetBrains v5.3.3914](https://github.com/sourcegraph/jetbrains/releases/tag/v5.3.3914)