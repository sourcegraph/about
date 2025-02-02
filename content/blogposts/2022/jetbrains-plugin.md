---
title: Stay in flow with Sourcegraph in your JetBrains IDE
description: JetBrains IDE users can now experience all the benefits of Sourcegraph search directly from their IDE with the Sourcegraph plugin.
authors:
  - name: Ryan Scott
    url: 
  - name: David Veszelovszki
    url: 
  - name: Philipp Spiess
    url: 
publishDate: 2022-08-02T00:00
tags: [blog]
slug: jetbrains-plugin
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/jetbrains-plugin/jetbrains-announcement-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/jetbrains-plugin/jetbrains-announcement-hero.png
---

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/jetbrains-plugin/jetbrains-announcement-hero.png"
  alt="JetBrains plugin hero image"
/>

## Introducing our new JetBrains plugin

Staying productive while being a developer is hard. You're constantly bombarded by external interruptions taking you away from the task at hand. Slack messages, meetings that could've been emails, and alerts and notifications from any number of systems each cause an expensive context switch.  

While Sourcegraph can't eliminate all of your distractions, it can make it easier to find the information you need to write and ship code. Often when writing code, you know what you have to do but can't remember exactly how. Sometimes you need a refresher on the syntax of a language you haven't used in a while, or you need to find that one idiomatic way to solve a problem. 

With our new JetBrains plugin you can easily search across all your company's repositories, find the answers you need, and not be distracted by your countless open browser tabs or unread Slack count. You get all of the benefits of Sourcegraph directly in your IDE, so you can stay in flow with fewer interruptions.

## How it works

##### Setting up the plugin
Our JetBrains plugin is available on the [JetBrains marketplace](https://plugins.jetbrains.com/plugin/9682-sourcegraph) and can be quickly installed via the marketplace or directly within your IDE. 

After installation, you can configure a connection to your Sourcegraph instance by adding your instance URL and access token. This works for dedicated Sourcegraph instances as well as Sourcegraph.com accounts. Once configured, you'll be able to search across all of the repositories that you've indexed directly from the IDE and without cloning those repositories locally.

##### Searching for code
You can trigger the plugin at any time by using the hotkey (bound to ⌥A on macOS and Alt-A on Windows / Linux) or via the command palette. From here you can instantly search across any of your indexed repositories. 

Search contexts from your Sourcegraph account will automatically be accessible within the IDE. Search filters (such as `repo:` or `lang:`) will work in the IDE exactly as they do in Sourcegraph.

<Video 
  source={{
    webm: 'blog/jetbrains-plugin/jetbrains-ide',
    mp4: 'blog/jetbrains-plugin/jetbrains-ide'
  }}
  loop={true}
  title="Searching code in JetBrains IDE"
  caption="An example of searching code with the JetBrains IDE"
/>

##### Sharing links
Sharing code from within your IDE is now incredibly easy. You can automatically generate a link to the code you're currently working on via the context menu or by using the hotkey (bound to ⌥C on macOS and Alt-C on Windows / Linux).

You can share the generated link with teammates, who will be taken to the exact line of code in Sourcegraph (as long as they are authenticated to the Sourcegraph instance). This makes it easy to share context and tackle problems together without having to screenshare or take screenshots.

<Video 
  source={{
    webm: 'blog/jetbrains-plugin/jetbrains-copy-link',
    mp4: 'blog/jetbrains-plugin/jetbrains-copy-link'
  }}
  loop={true}
  title="Copying a Sourcegraph link within the IDE"
  caption="An example of copying a shareable Sourcegraph link within the IDE"
/>

## Get started with the JetBrains plugin

You can experience all the benefits of Sourcegraph in your IDE by [downloading the new JetBrains plugin today](https://plugins.jetbrains.com/plugin/9682-sourcegraph).

If you're interested in Sourcegraph for your IDE but are not a JetBrains user, you can also [request support for your favorite IDE](https://github.com/sourcegraph/sourcegraph/issues/new?title=New+IDE+extension+request&labels=team/integrations,editor-extension).

If you're not already a Sourcegraph customer, you can try it out for free with a [local installation](https://about.sourcegraph.com/get-started/self-hosted), or [get in touch to schedule a demo](https://about.sourcegraph.com/demo). 
