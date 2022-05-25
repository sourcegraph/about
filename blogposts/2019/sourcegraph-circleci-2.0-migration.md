---
title: 'Tip: Using Sourcegraph code search to help teams migrate to CircleCI 2.0'
author: Ryan Blunden
publishDate: 2019-05-02T10:00-07:00
tags: [
  blog
]
slug: sourcegraph-circleci-2.0-migration
heroImage: https://about.sourcegraph.com/sourcegraph-mark.png
published: true
---

In this post, we'll explain how Sourcegraph code search can be used to report on the progress of upgrading CircleCI config files to the 2.0 format.

CircleCI 2.0 officially came out of beta in July 2017, introducing a versioned config file (`.circleci/config.yml`) to replace the previous `circle.yml` file. A likely scenario could be an Engineering Manager requesting all teams upgrade to CircleCI 2.0 and wanting to track progress without human intervention.

Using [Sourcegraph.com](https://sourcegraph.com/) and as an example, [Segment's open source code on GitHub](https://github.com/segmentio), let's search for repositories that contain the 1.0 `circle.yml` file:

<div class="text-center" style="margin-bottom: -1rem">

  Query: [`repo:/segmentio/ file:circle.yml`](https://sourcegraph.com/search?q=repo:/segmentio/+file:circle.yml).

</div>

<a href="https://sourcegraph.com/search?q=repo:/segmentio/+file:circle.yml">
  <img src="https://about.sourcegraph.com/blog/circleci-results.png" alt="CircleCi results" />
</a>

<p style="margin-top:2rem">
  Typing this query every time would be inefficient, so let's save this query as a saved search.
  <img src="https://about.sourcegraph.com/blog/circleci-create-saved-search.png" alt="CicleCi create saved search"/>
</p>

<p style="margin-top:2rem">
  Then we can access it with a single click.
  <img src="https://about.sourcegraph.com/blog/circleci-access-saved-search.png" alt="CicleCi access saved search"/>
</p>

<!--
TODO(ryan): Needs type:diff <p style="margin-top:2rem">
  We can take this a step further by opting to receive a notification when the number of results for <code>circle.yml</code> files change:
  <img src="https://about.sourcegraph.com//blog/circleci-saved-search-notification.png" />
</p> -->

## Bonus queries

If we wanted to find which repositories **have** been upgraded.

<div class="text-center" style="margin-bottom: -1rem">

Query: [`repo:/segmentio/ file:\.circleci/config\.yml`](https://sourcegraph.com/search?q=repo:/segmentio/+file:%5C.circleci/config%5C.yml).

</div>

<div class="text-center">
  <a href="https://sourcegraph.com/search?q=repo:/segmentio/+file:circle.yml">
    <img src="https://about.sourcegraph.com/blog/circleci-results.png" alt="CircleCi results"/>
  </a>
</div>

<p style="margin-top:2rem">
  Using Sourcegraph's diff search (<code>type: diff</code>), we can find who made the commit that contained the upgrade.
</p>

<div class="text-center" style="margin-bottom: -1rem">

  Query: [`repo:/segmentio/ file:\.circleci/config\.yml type:diff "version: 2"`](https://sourcegraph.com/search?q=repo:/segmentio/+file:%5C.circleci/config%5C.yml+type:diff+%22version:+2%22).

</div>

<a href="https://sourcegraph.com/search?q=repo:/segmentio/+file:circle.yml">
  <img src="https://about.sourcegraph.com/blog/circleci-who-upgraded.png" alt="CicleCi who upgraded" />
</a>

## Find answers in code with Sourcegraph

Sourcegraph helps you find answers in code, supporting 10,000+ repositories and thousands of developers.

Although this example was specific to CircleCI config files, the concepts apply equally well for many other similar use cases, such as tracking the removal of a deprecated Node.js package.

<style>
  .blog-post__body img { border: none; }
  .blog-post__body code { font-size: 0.9rem; }
</style>
