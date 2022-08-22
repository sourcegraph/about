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
  - description: 'Search queries with patterns surrounded by /.../ will now be interpreted as regular expressions. New queries and code monitors will interpret /.../ as regular expressions too. Existing search links or code monitors are unaffected. In the rare event where older links rely on the literal meaning of /.../, the string will be automatically quoted in a content filter, preserving the original meaning. If you happen to use an existing older link and want /.../ to work as a regular expression, add patterntype:standard to the query. '
    url: https://github.com/sourcegraph/sourcegraph/pull/38141
    category: Search
  - description: 'The experimental dependencies search feature has been removed, including the repo:deps(...) search predicate and the site configuration options codeIntelLockfileIndexing.enabled and experimentalFeatures.dependenciesSearch.'
    url: https://github.com/sourcegraph/sourcegraph/pull/39742
    category: Search
  - description: 'Added the ROCKSKIP_MIN_REPO_SIZE_MB config option. Rockskip is automatically used for repositories over the set size (which defaults to 1GB) which helps to improve the loading speed of symbols for large repos.'
    url: https://github.com/sourcegraph/sourcegraph/pull/38192
    category: Code Navigation
---

Sourcegraph 3.43 is now available! For this release, we introduced:

## An easier way for admins to manage users

We are introducing a redesigned user management page to help Admins more effectively manage users of Sourcegraph. It allows Admins to quickly take action for a single user or a set of users and sort users by set criteria. Admins can instantly identify Site Admins and sort users by their number of events, last active date, and when the users was created. Admins save time by performing bulk actions such as force sign-out, reset password, promote a user to a Admin, and delete a user. 

After upgrading to 3.43, site admins can find this enhanced page under Site Admin > Users & Auth > Users. Looking towards [Sourcegraph 4.0](https://about.sourcegraph.com/sourcegraph-4), we will be introducing more ways for admins to get the most out of Sourcegraph. 

<p><Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/3.43/user_admin_page.png"
  alt="User administration page"
/></p>


## Introducing usage trends and forecasts within admin analytics

In 3.42, we introduced an [all new admin analytics page](https://about.sourcegraph.com/blog/admin-analytics) to help admins understand and quantify the value of Sourcegraph to their organization. 

We've made additional improvements in 3.43 to include:
- Graphs with usage trends that can be customized to show daily or monthly data.
- Annual projections of total times saved that help admins further understand the value of products within the code intelligence platform. This builds on historical data from the past three months that is captured and stored within the instance to show a full year of value.

<p><Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/3.43/time-saved.png"
  alt="Annual projection for Cloud Search"
/></p>


