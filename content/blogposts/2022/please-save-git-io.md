---
title: "Please save git.io: GitHub's link shortener is being shut down in 3 days"
authors:
  - name: Stephen Gutekanst
    url: https://slimsag.com
publishDate: 2022-04-26T12:00-00:00
tags: [blog]
slug: please-save-git-io
heroImage: https://user-images.githubusercontent.com/3173176/165389559-26ee5644-e9db-4c95-b042-e6d72a825e9e.png
socialImage: https://user-images.githubusercontent.com/3173176/165389559-26ee5644-e9db-4c95-b042-e6d72a825e9e.png
published: true
description: Yesterday, GitHub announced that it intends to shut down git.io, its link-shortener service, in just 3 days time. Please help us save git.io and the hundreds of thousands of links that will be broken!
---

Yesterday, [GitHub announced](https://news.ycombinator.com/item?id=31162829) that it intends to shut down git.io, its link-shortener service, in just 3 days time:

> What began as an experiment was only lightly documented and was not widely adopted.
> In January 2022, we announced that git.io was becoming read-only. As notified in January, we shared our plans to deprecate the service. Out of an abundance of caution due to the security of the links redirected with the current git.io infrastructure, we have decided to accelerate the timeline. We will be removing all existing link redirection from git.io on April 29, 2022.

## Why this matters

Git.io is widely used and extinguishing this service will result in hundreds of thousands of links becoming broken:

- [Thousands of scientific papers](https://scholar.google.com/scholar?hl=en&q=git.io) reference git.io URLs and cannot be updated
- [29,000+ repositories that use git.io links will need to be updated](https://sourcegraph.com/search?q=context:global+https://git.io+count:100000+select:repo&patternType=literal)
- 704k+ code files mention git.io [according to GitHub search](https://github.com/search?q=git.io&type=code)
- [Google reports](https://www.google.com/search?client=firefox-b-1-d&q=site%3Agit.io) 10,300+ results for `site:git.io`

## What we're doing

When some friends and I first heard this news, we thought we had to do everything we could to save it. Sourcegraph agreed, so we're urgently trying to do everything we can to save git.io:

- Setting up a [Discord server / working group](https://discord.gg/MRJyav9GCf) to discuss what we can do to save it, including scraping as many git.io links as we can before the service is extinguished.
- Creating a public data set of each URL -> it's redirect in an open source project so we can [work with Archive.org](https://tracker.archiveteam.org:1338/status) once we have the data, or set up a savegit.io domain if needed.

We're also trying[[0](https://twitter.com/beyang/status/1519017460623499267)][[1](https://twitter.com/slimsag/status/1519023870962929664)] to see if we can get in contact with folks over at GitHub to see if:

- GitHub can open-source the database to avoid a central point of failure
- GitHub can transfer the data to the community so we can find alternative ways to keep it running
- We could handle maintenance and run git.io for them at Sourcegraph

## How you can help

If you think you can help out at all, please join the [Save git.io Discord group](https://discord.gg/MRJyav9GCf) where we're coordinating, discussing scraping strategies, and more.

We've only got 3 days, please save git.io!
