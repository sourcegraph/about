---
title: "Sourcegraph 3.43 release"
publishDate: 2022-08-22T10:00-07:00
description: "Sourcegraph 3.43 introduces new..."
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
  - description: '"observability.tracing": { "urlTemplate": "..." } can now be set to configure generated trace URLs (for example those generated via &trace=1).'
    url: https://github.com/sourcegraph/sourcegraph/pull/
    category: Admin
  - description: 'Added experimental support for exporting traces to an OpenTelemetry collector with "observability.tracing": { "type": "opentelemetry" }.'
    url: https://github.com/sourcegraph/sourcegraph/pull/37984
    category: Admin
---

Sourcegraph 3.43 is now available! For this release, we introduced:

## Improve user management for admins

Admins are constantly on the lookout for better ways to manage users within Sourcegraph and in 3.43 we are introducing an additional tool: A redesigned user management page. This redesigned page allows admins to see user-level usage stats, sort and filter those users, and efficiently perform actions on a single or set of users. 

After upgrade to 3.43, site admins can find this new page under site admin > Users & Auth > Users. Looking towards Sourcegraph 4.0, we are excited to introduce more ways for admins to get the most out of Sourcegraph. 

## Admin Analytics Updates

In 3.42, we introduced [all new admin analytics page](https://storage.googleapis.com/sourcegraph-assets/blog/release-post/3.42/admin_analytics_v2.png) to help admins understand and quantify the value of Sourcegraph to their organization. 

Now in 3.43, we are introducing further updates: 
- We have introduced yearly-projections to help admins further understand the value across an entire year. This builds on historical data captured and stored within the instance to show a full year of value. 
- Graphs can be shown by day or by month to help admins more granularly understand trends in the data. 

<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/3.43/user_administration.png"
  alt="User administration page"
/>
