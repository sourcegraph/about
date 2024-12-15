---
title: 'Writing prose like code: Dev Tool Time with Adam Gordon Bell'
description: 'Adam Gordon Bell, Developer Advocate at Earthly, shares how he leverages dev tools to write consistent, high-quality technical prose.'
authors:
  - name: Scott Bailey
    url: https://handbook.sourcegraph.com/team#scott-bailey
publishDate: 2021-10-06T10:00-07:00
tags: [blog]
slug: dev-tool-time-adam-gordon-bell
heroImage: https://sourcegraphstatic.com/blog/dev-tool-time/adam-gordon-bell/linkedin.jpg
socialImage: https://sourcegraphstatic.com/blog/dev-tool-time/adam-gordon-bell/linkedin.jpg
published: true
---

As a developer advocate, [Adam Gordon Bell](https://twitter.com/adamgordonbell) writes prose as a central part of his work. As a programmer, he wants the same experience writing prose that he has writing code, where linters and build pipelines help with consistency, formatting, and error checking. When Adam joined us for [Dev Tool Time](https://info.sourcegraph.com/dev-tool-time) on September 29, 2021, he shared his favorite dev tools for writing and how Earthly helps keep his published writing high quality.

You can watch the recording of this episode at the [bottom of this blog post](#Watch-the-recording), but first let’s check out Adam’s desk setup:

## Hardware

Adam drives two monitors with a 16" Macbook Pro hooked into a CalDigit Thunderbolt dock. He uses a Logitech gaming mouse, whose thumb buttons ease browser navigation.

![Adam’s current desk setup](https://sourcegraphstatic.com/blog/dev-tool-time/adam-gordon-bell/current-computer.jpeg)

Notably, Adam uses a 45lb iron weight, directly under his Macbook, as a heatsink. Impressively, his sit/stand barely notices the weight, even when it’s joined by Adam’s one-eyed shelter cat, Griswald.

As the host of the popular tech podcast [CoRecursive](https://corecursive.com/), Adam uses a [MixPre-6 audio interface](https://www.sounddevices.com/product/mixpre-6-ii/) and the popular [Electro-Voice RE20 microphone](https://products.electrovoice.com/na/en/re20), and has acoustic paneling in his office.

## The cost of customization

> “If you’re out there and you have a crazy custom keyboard and you’re using the permissive hold feature, just remember that I built that and then gave up on the whole thing.”

Missing from Adam’s current setup is the custom-built and programmed split keyboard he used several years ago. Building his own configuration led him to contribute code to the keyboard’s software—code that people are still using today. After his keyboard broke, though, Adam discovered the unpleasantness of no longer being able to comfortably and easily use a standard keyboard, and so switched to using a regular Apple keyboard to avoid the same pain in the future.

<Video 
  source={{webm: 'blog/dev-tool-time/adam-gordon-bell/custom-keyboard-struggle', mp4: 'blog/dev-tool-time/adam-gordon-bell/custom-keyboard-struggle'}} 
  loop={false}
  title="Adam’s custom keyboard and struggle" 
  caption="Adam’s custom keyboard and struggle"
  controls={true}
  autoPlay={false}
/>

## Writing as a developer

> “When I started doing writing ... I want this kind of experience I was used to as a developer, where you have linting, compilers, and a build pipeline that tells you whether things work or not.”

Adam’s main writing environment isn’t Google Docs, or even a speciality Markdown app. It’s [VS Code](https://code.visualstudio.com/), configured with a few plugins and with easy access to a terminal to use command line utilities. Two tools are at the core of his workflow for writing Markdown, the markup language he regularly uses. [`markdownlint`](https://github.com/DavidAnson/markdownlint) analyzes Markdown files according to configurable rules to ensure consistent and well-formed Markdown. It also can automatically fix some common errors. [Vale](https://github.com/errata-ai/vale) provides grammar checking according to custom rules. While Adam uses some of his own rules, the Vale community, which includes companies like GitLab and Linode, sources a large number of rules, including those to detect “corporate speak!”

<Video 
  source={{webm: 'blog/dev-tool-time/adam-gordon-bell/corporate-speak', mp4: 'blog/dev-tool-time/adam-gordon-bell/corporate-speak'}} 
  loop={false}
  title="See Vale in action detecting “corporate speak" 
  caption="See Vale in action detecting “corporate speak"
  controls={true}
  autoPlay={false}
/>

Working with these tools locally makes it easier for a single writer to avoid formatting and grammatical errors, but integrating them into a build pipeline, as Adam demonstrates, is the real mark of a durable workflow.

> “If you don’t use the Oxford comma, it will fail to build.”

He uses [Earthly](https://earthly.dev/), which he describes as a Makefile and Dockerfile combined together, to set up and run the build. In this instance of his company blog, Earthly runs the [Jekyll](http://jekyllrb.com/) build step, tests against multiple versions of Ruby, and runs the `markdownlint` and `vale` checks according to Adam’s configured rules. Depending on configuration, the build really will fail if you don’t use the Oxford comma.

<Video 
  source={{webm: 'blog/dev-tool-time/adam-gordon-bell/Earthly', mp4: 'blog/dev-tool-time/adam-gordon-bell/Earthly'}} 
  loop={false}
  title="Listen to Adam talk about two approaches to build pipelines" 
  caption="Listen to Adam talk about two approaches to build pipelines"
  controls={true}
  autoPlay={false}
/>

Used together, this set of tools lets anyone programmatically implement a style guide that anyone contributing writing to a shared blog or set of docs can follow, and provides the guarantees you want in professional writing.

## Changing configurations

Customization is a running thread in Adam’s setup over time. What’s changed is the focus and nature of that customization. Several years ago, having a keyboard with highly configured keybindings made development more efficient. Now, with his focus on writing prose, he puts his drive to customize into a well-configured writing environment that’s built to facilitate his writing workflow. Like those still using his keyboard code, we’ll look forward to learning from and using whichever hardware and dev tools Adam turns his efforts toward next.

## Show notes

- [Docker](https://www.docker.com/)
- [Earthly](https://earthly.dev/)
- [Funky](https://github.com/bbugyi200/funky)
- [Jekyll](http://jekyllrb.com/)
- [Markdownlint](https://github.com/DavidAnson/markdownlint)
- [McFly](https://github.com/cantino/mcfly)
- [RE 20 mic](https://products.electrovoice.com/na/en/re20)
- [VS Code](https://code.visualstudio.com/)
- [Vale](https://github.com/errata-ai/vale)
- [Vale community rules & resources](https://docs.errata.ai/community)
- [Zoxide](https://github.com/ajeetdsouza/zoxide)

### Articles from Adam

- [6 Command Line Tools for Productive Programmers](https://earthly.dev/blog/command-line-tools/)
- [Understanding Awk](https://earthly.dev/blog/awk-examples/)
- [Linting Markdown and Documentation](https://earthly.dev/blog/markdown-lint/)

## Watch the recording

Check out the recording of the episode below, and be sure to [sign up for upcoming events](https://info.sourcegraph.com/dev-tool-time)!

<YouTube 
  title="Dev Tool Time with Adam Gordon Bell"
  id="oPaPhFX7SeM"
/>
