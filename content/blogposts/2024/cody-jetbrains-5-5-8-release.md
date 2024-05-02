---
title: "Cody for JetBrains v5.5.8: New mutli-repo context selector and bug fixes for Apple silicon"
authors:
  - name: Justin Dorfman
    url: https://handbook.sourcegraph.com/team/#justin-dorfman
  - name: Alex Isken
    url: https://handbook.sourcegraph.com/team/#alex-isken
publishDate: 2024-05-02T10:00-01:00
description: "Cody for JetBrains v5.5.8 is now available! We’ve updated the multi-repo context selector, improved the extension stability for Apple silicon users, and addied tooltips for new autocomplete users."
tags: [blog]
slug: "cody-jetbrains-5-5-8-release"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-jetbrains-5-5-8-release/cody-jetbrains-5.5.8-og-image.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-jetbrains-5-5-8-release/cody-jetbrains-5.5.8-og-image.jpg
--- 

[Cody for JetBrains v5.5.8](https://plugins.jetbrains.com/plugin/9682-cody-ai-coding-assistant-with-autocomplete--chat) is now available! We’ve updated the multi-repo context selector, improved the extension stability for Apple silicon users, and addied tooltips for new autocomplete users.

## New multi-repo context interface for Cody Enterprise

Cody has a new UI for adding remote repositories as context. The interface is faster and makes it easier for Cody Enterprise users to find their relevant repositories.

You can now:

- Select up to 10 repositories at the same time
- Pick repositories from a populated list
- See which Sourcegraph server you’re logged into from the UI

<Video 
  source={{
    mp4: 'blog/cody-jetbrains-5-5-8-release/multi-repo-context'
  }}
  loop={true}
  title="Use the new interface to select multiple repositories"
/>


## Stability improvements for Apple silicon users

We’ve fixed a bug where the extension would crash for Mac users with Apple silicon CPUs, particular users on M2 chipsets. Cody is now more stable for those users. 

If you continue running into any issues with Cody crashing, please [let us know](https://community.sourcegraph.com/).


## Autocomplete tooltips for new users

We added a tooltip for new users to make it easier to get started with autocomplete. The tooltip shows the hotkeys for accepting and cycling through suggestions for new users when they’re shown their first suggestion.

<Video 
  source={{
    mp4: 'blog/cody-jetbrains-5-5-8-release/autocomplete-new-users-jetbrains'
  }}
  loop={true}
  title="Autocomplete tooltip for new users"
/>


## Changelog

See the [changelog](https://github.com/sourcegraph/jetbrains/releases/tag/v5.5.8) and [GitHub releases](https://github.com/sourcegraph/jetbrains/releases) for a complete list of changes.


## Thank you

Cody wouldn’t be what it is without our amazing contributors 💖 A big thank you to everyone who contributed, filed issues, and sent us feedback.

As always, we value your feedback in our [support forum](https://community.sourcegraph.com/) and on [Discord](https://discord.com/servers/sourcegraph-969688426372825169). Happy Codying!

---

**To get started with Cody, [install it from the JetBrains Marketplace](https://plugins.jetbrains.com/plugin/9682-cody-ai-coding-assistant-with-autocomplete--chat).**
