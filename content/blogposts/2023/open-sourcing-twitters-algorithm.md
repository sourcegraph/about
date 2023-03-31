---
title: "Liveblog: Open-sourcing Twitter's algorithm"
authors:
  - name: Sourcegraph team
    url: https://twitter.com/sourcegraph
  - name: Sourcegraph Discord community
    url: https://discord.gg/rDPqBejz93
publishDate: 2023-03-31T02:15-07:00
description: "We're eager to see Twitter's algorithm go open source. Sourcegraph devs (and our Discord community) will be liveblogging the most interesting things we find."
tags: [blog]
slug: 'open-sourcing-twitters-algorithm'
published: true
---

We're eager to see Twitter's algorithm go open source today at 12pm PDT. We love a good code dump. What interesting stuff will we find in the code?

<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">Algorithm goes open source at noon Pacific Time</p>&mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1641680913661607936?ref_src=twsrc%5Etfw">March 31, 2023</a></blockquote> <script async="true" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Sourcegraph devs (and [our Discord community](https://discord.gg/rDPqBejz93)) will be liveblogging the most interesting things we see once it's published. Follow along here for updates!

#### 2:15am PDT: start the countdown

[@sqs](https://twitter.com/sqs): A little under 10 hours to go until it's open source. We'll be back closer to 12pm PDT (unless Twitter unexpectedly releases it early, which might happen!). If you want to start exploring the rest of Twitter's open-source code in the meantime, here's a [starting point](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/twitter/+algorithm&patternType=standard&sm=0&groupBy=repo).

#### 11:50am PDT: code pushed

The code is now live: https://sourcegraph.com/github.com/twitter/the-algorithm

We are digging in!

#### 12:04am PDT: communications

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Twitter recommendation source code now available to all on GitHub <a href="https://t.co/9ozsyZANwa">https://t.co/9ozsyZANwa</a></p>&mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1641876892302073875?ref_src=twsrc%5Etfw">March 31, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The real magic of Twitter is in our recommendations algorithm, which powers the hit Tweets you see in your For You timeline. We broke down how it all works here: <a href="https://t.co/2s5Hk57JPe">https://t.co/2s5Hk57JPe</a></p>&mdash; Twitter Engineering (@TwitterEng) <a href="https://twitter.com/TwitterEng/status/1641872260695990278?ref_src=twsrc%5Etfw">March 31, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Blog post TL;DR (thank you Cody)

- Twitter is releasing source code for parts of its platform, including its recommendations algorithm
- The source code is being released on GitHub in two repositories: main repo and ml repo
- The release aims for maximum transparency while excluding code that could compromise safety/privacy or enable bad actors
- Training data and model weights for the recommendations algorithm are not being released at this time
- This is Twitter's first step towards more transparency and they plan to release more code in the future that does not pose significant risks
- The community is invited to submit GitHub issues and pull requests to suggest improvements to the recommendations algorithm
- Twitter is working on tools to manage community suggestions and sync changes to internal repositories
- Security concerns or issues should be reported through Twitter's official bug bounty program on HackerOne
- Twitter hopes the global community can help identify issues and suggest improvements to lead to a better Twitter
- Twitter is doing this to increase transparency and build trust with users, customers, and the public

#### 12:14pm PDT: LOC

```
--------------------------------------------------------------------------------
 Language             Files        Lines        Blank      Comment         Code
--------------------------------------------------------------------------------
 Scala                 3007       234531        26038        21493       187000
 Java                  1043       135517        19944        18259        97314
 Python                 152        21817         3561         5681        12575
 C++                     51        10614         1630          466         8518
 Rust                    30         7360          404          275         6681
 Protobuf                90         9456         1484         4514         3458
 C/C++ Header            41         2868          482          377         2009
 Markdown                63         2136          538            0         1598
 SQL                     23         1262           98           82         1082
 YAML                     7         1446          376           19         1051
 XML                      8         1263          175          190          898
 Bourne Shell             9          267           65           29          173
 Toml                     4          124            7            3          114
 reStructuredText         1          132           36            0           96
 CMake                    2          115           21            7           87
 INI                      8           76           15           21           40
 Docker                   1           34            3            6           25
 JSON                     1            5            0            0            5
--------------------------------------------------------------------------------
 Total                 4541       429023        54877        51422       322724
--------------------------------------------------------------------------------
```
