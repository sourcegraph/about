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

Sourcegraph devs (and [our Discord community](https://discord.gg/rDPqBejz93)) will be liveblogging the most interesting things we see once it's published. Follow along here for updates!

<hr />
<br/>

#### 02:02pm

We are signing off for now. Check out the following:

* [Source code for Twitter's Recommendation Algorithm](https://sourcegraph.com/github.com/twitter/the-algorithm)
* [Request access to Cody](https://about.sourcegraph.com/cody)

#### 01:43pm 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Government requests for intervention on Twitter must have been so pervasive Twitter Engineers even have a class for it in the Twitter Algorithm <a href="https://t.co/F05sD5h9Lk">pic.twitter.com/F05sD5h9Lk</a></p>&mdash; Alec Sears (@alec_sears) <a href="https://twitter.com/alec_sears/status/1641894323846369299?ref_src=twsrc%5Etfw">March 31, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

[Link to code](https://sourcegraph.com/github.com/twitter/the-algorithm/-/blob/product-mixer/core/src/main/scala/com/twitter/product_mixer/core/functional_component/marshaller/response/urt/item/forward_pivot/SoftInterventionDisplayTypeMarshaller.scala?L22:12)

=======

#### 01:19pm PDT

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Twitter just released source code for &quot;the algorithm&quot;<br /> <br /> Oh, what file is this? Predicates for tweets on the home timeline?<br /> <br /> Oh what is that 2nd image? <a href="https://t.co/UE3dU8e3Os">pic.twitter.com/UE3dU8e3Os</a></p>&mdash; Ólafur Waage (@olafurw) <a href="https://twitter.com/olafurw/status/1641882387666685956?ref_src=twsrc%5Etfw">March 31, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<Badge text="view the code" color="cerise" link="https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/twitter/the-algorithm%24+type:symbol+CandidatePredicates+&patternType=standard&sm=1&groupBy=path" size="small" />


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">What is this?<br /> <br />  (<br />  &quot;author_is_elon&quot;,<br />  candidate =&gt;<br />  candidate<br />  .getOrElse(AuthorIdFeature, None).contains(candidate.getOrElse(DDGStatsElonFeature, 0L))),<a href="https://t.co/mLdjWWYHrF">https://t.co/mLdjWWYHrF</a></p>&mdash; David Mander (@davmander) <a href="https://twitter.com/davmander/status/1641882391022125057?ref_src=twsrc%5Etfw">March 31, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<Badge text="view the code" color="cerise" link="https://sourcegraph.com/github.com/twitter/the-algorithm/-/blob/home-mixer/server/src/main/scala/com/twitter/home_mixer/model/HomeFeatures.scala?L179" size="small" />

<br/>
#### 12:43pm PDT

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The 4 types of Twitter posters, according to the just open-sourced algorithm 😯<a href="https://t.co/xTLX77vJ75">https://t.co/xTLX77vJ75</a> <a href="https://t.co/SaQN03P9eK">pic.twitter.com/SaQN03P9eK</a></p>&mdash; Amjad Masad ⠕ (@amasad) <a href="https://twitter.com/amasad/status/1641879976529248256?ref_src=twsrc%5Etfw">March 31, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

[Link to code](https://sourcegraph.com/github.com/twitter/the-algorithm/-/blob/home-mixer/server/src/main/scala/com/twitter/home_mixer/functional_component/decorator/HomeTweetTypePredicates.scala?L225:8)

<br/>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">A quick search in Twitter&#39;s Recommendation Algorithm for Ukraine. 🇺🇦 topic is on the same list as: <br />Do not amplify, do not public publish, medical misinformation, NSFW, and violence. What do you think it means? 🤔 <a href="https://t.co/PYqm8pZjI4">pic.twitter.com/PYqm8pZjI4</a></p>&mdash; Mykhailo (@mxpoliakov) <a href="https://twitter.com/mxpoliakov/status/1641887314598150145?ref_src=twsrc%5Etfw">March 31, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

[Link to code](https://sourcegraph.com/github.com/twitter/the-algorithm/-/blob/visibilitylib/src/main/scala/com/twitter/visibility/models/SpaceSafetyLabelType.scala?L25)

<br/>
#### 12:24pm PDT

* Precise code navigation is now on! [Example](https://sourcegraph.com/github.com/twitter/the-algorithm/-/blob/ann/src/main/scala/com/twitter/ann/annoy/AnnoyCommon.scala?L16:7&popover=pinned)
* Cody codebase exploration
  * Using Cody to explore the codebase; it pretty quickly found the search indexer, which handles about half of the tweets
  
![](https://p21.p4.n0.cdn.getcloudapp.com/items/2Nublg4R/073a9300-2b01-4ce8-987c-a672cc7082fa.png?v=a84373c7400affdc7e8582280c8c9aa3)

![](https://p21.p4.n0.cdn.getcloudapp.com/items/04u65mPd/171a6de0-c4f5-432b-b6ae-aaf7b3b284ac.png?v=ec871ac9ab6fb5065c438070972972d6)

![](https://p21.p4.n0.cdn.getcloudapp.com/items/2NubPd5A/7db7de08-5351-4452-af4b-3bb63f628303.png?v=a3c58d03b46d476573eb9c3a029b0c8f)

<br/>
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

<br/>
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

<br/>
<br/>
#### 11:50am PDT: code pushed

The code is now live: https://sourcegraph.com/github.com/twitter/the-algorithm

We are digging in!

<br/>
#### 2:15am PDT: start the countdown

[@sqs](https://twitter.com/sqs): A little under 10 hours to go until it's open source. We'll be back closer to 12pm PDT (unless Twitter unexpectedly releases it early, which might happen!). If you want to start exploring the rest of Twitter's open-source code in the meantime, here's a [starting point](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/twitter/+algorithm&patternType=standard&sm=0&groupBy=repo).

