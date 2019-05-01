---
title: 'Using Sourcegraph to help teams migrate to CircleCI 2.0'
author: Ryan Blunden
publishDate: 2019-05-01T10:00-07:00
tags: [
  blog
]
slug: sourcegraph-circleci-2.0-migration
heroImage: /sourcegraph-mark.png
published: false
---

In this post, we'll demonstrate how Sourcegraph code search can be used to report on the progress of a software upgrade.

CircleCI 2.0 officially came out of beta in July 2017, introducing a versioned config file at `.circle/config.yml`, replacing the previous `circle.yml` file.

If the Director of Engineering requested all teams upgrade to CircleCI 2.0, how could they track the progress company wide for all repositories?

Using [Sourcegraph.com](https://sourcegraph.com/) and for examples sake, [Segment's open source code on GitHub](https://github.com/segmentio), let's search for repositories that contain the 1.0 `circle.yml` file:

<div class="text-center" style="margin-bottom: -1rem">

  Query: [`repo:/segmentio/ file:circle.yml`](https://sourcegraph.com/search?q=repo:/segmentio/+file:circle.yml).

</div>

<a href="https://sourcegraph.com/search?q=repo:/segmentio/+file:circle.yml">
  <img src="/blog/circleci-results.png" />
</a>

<p style="margin-top:2rem">
  Typing this query every time would be inefficient so let's save this query as a saved search:
  <img src="/blog/circleci-create-saved-search.png" />
</p>

<p style="margin-top:2rem">
  Then we can access it with a single click:
  <img src="/blog/circleci-access-saved-search.png" />
</p>

<p style="margin-top:2rem">
  We can take this a step further by opting to receive a notification when the number of results for <code>circle.yml</code> files change:
  <img src="/blog/circleci-saved-search-notification.png" />
</p>

## Bonus queries

If we wanted to find which repositories **have** been upgraded:

<div class="text-center" style="margin-bottom: -1rem">

Query: [`repo:/segmentio/ file:\.circleci/config\.yml`](https://sourcegraph.com/search?q=repo:/segmentio/+file:%5C.circleci/config%5C.yml).

</div>

<div class="text-center">
  <a href="https://sourcegraph.com/search?q=repo:/segmentio/+file:circle.yml">
    <img src="/blog/circleci-results.png" />
  </a>  
</div>

<p style="margin-top:2rem">
  Using Sourcegraph's diff search (<code>type: diff</code>), we can find who made the commit that contained the upgrade:  
</p>

<div class="text-center" style="margin-bottom: -1rem">

  Query: [`repo:/segmentio/ file:\.circleci/config\.yml type:diff "version: 2"`](https://sourcegraph.com/search?q=repo:/segmentio/+file:%5C.circleci/config%5C.yml+type:diff+%22version:+2%22).

</div>

<a href="https://sourcegraph.com/search?q=repo:/segmentio/+file:circle.yml">
  <img src="circleci-who-upgraded.png" />
</a>

## Find answers in code with Sourcegraph

Sourcegraph helps you find answers in code across your organization with 10,000+ repositories and thousands of developers.

Although we used the CircleCI config file upgrade as this example, the same process applies well to other upgrade/migration/change related tasks.

<style>
  .blog-post__body img { border: none; }
  .blog-post__body code { font-size: 0.9rem; }
</style>
