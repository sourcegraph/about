---
title: "Sourcegraph 3.43 release"
publishDate: 2022-08-22T10:00-07:00
description: "Sourcegraph 3.43 introduces several new features for admins, including a newly redesigned user management page as well as annual forecasting for admin analytics."
tags: [blog, release]
slug: "release/3.43"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/3.43/sourcegraph-3-43.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/3.43/sourcegraph-3-43.png
changelogItems:
  - description: 'Search queries with patterns surrounded by /.../ will now be interpreted as regular expressions. Existing search links or code monitors are unaffected. In the rare event where older links rely on the literal meaning of /.../, the string will be automatically quoted it in a content filter, preserving the original meaning. If you happen to use an existing older link and want /.../ to work as a regular expression, add patterntype:standard to the query. New queries and code monitors will interpret /.../ as regular expressions.'
    url: https://github.com/sourcegraph/sourcegraph/pull/38141
    category: Search
  - description: 'The experimental dependencies search feature has been removed, including the repo:deps(...) search predicate and the site configuration options codeIntelLockfileIndexing.enabled and experimentalFeatures.dependenciesSearch.'
    url: https://github.com/sourcegraph/sourcegraph/pull/39742
    category: Search
  - description: 'Added the ROCKSKIP_MIN_REPO_SIZE_MB config option. Rockskip is automatically used for repositories over the set size (which defaults to 1GB).'
    url: https://github.com/sourcegraph/sourcegraph/pull/38192
    category: Code Navigation
  - description: By default, insights now get 12 historic data points in addition to a current daily value and future points that align with the defined interval.
    url: https://github.com/sourcegraph/sourcegraph/pull/37756
    category: Code Insights
---

Sourcegraph 3.43 is now available! For this release, we introduced:

## An easier way for admins to manage users

Admins are constantly on the lookout for better ways to manage users within Sourcegraph and in 3.43 we are introducing a redesigned user management page to help. This updated page allows admins to see user-level usage stats, sort and filter those users, and efficiently perform actions on a single or set of users. 

After upgrading to 3.43, site admins can find this enhanced page under site admin > Users & Auth > Users. Looking towards Sourcegraph 4.0, we are excited to introduce more ways for admins to get the most out of Sourcegraph. 

<p><Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/3.43/user_admin_page.png"
  alt="User administration page"
/></p>


## Introducing usage trends and forecasts within admin analytics

In 3.42, we introduced an [all new admin analytics page](https://about.sourcegraph.com/blog/admin-analytics) to help admins understand and quantify the value of Sourcegraph to their organization. 

We've made additional improvements in 3.43 to include:
- Yearly projections that help admins further understand the value across an entire year. This builds on historical data captured and stored within the instance to show a full year of value.
- Graphs with usage trends that can be customized to show daily or monthly data.
