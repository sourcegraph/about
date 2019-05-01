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

CircleCI 2.0 officially came out of beta in July 2017, one of the changes being a versioned config file in a new location: `.circle/config.yml`.

For an Engineering Manager managing the upgrade, the question will be _"How do I know which teams are yet to upgrade?"_.

Using [Sourcegraph.com](https://sourcegraph.com/) and [Segments open source code on GitHub](https://github.com/segmentio), let's search for all repositories in the `segmentio` GitHub organization that contain the 1.0 `circle.yml` file:

<a href="https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/segmentio/+file:circle.yml">

![](/blog/circleci-results.png)

</a>

<div class="text-center">

  Query: [`repo:^github\.com/segmentio/ file:circle.yml`](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/segmentio/+file:circle.yml).

</div>

Typing this query every time would be inefficient so let's save this search:

![](/blog/circleci-create-saved-search.png)

Then we can access it with a single click:

![](/blog/circleci-access-saved-search.png)

We can take this a step further by opting to receive a notification when the number of results for `circle.yml` files change:

![](/blog/circle-ci-saved-search-notification.png)

Using Sourcegraph, finding answers in code across your organization with 10,000+ repositories and thousands of developers requires a web browser, and a simple query.

Although we used CircleCI config files as an example, this same process applies to other upgrade/migration/change related tasks as well.

<style>.blog-post__body img { border: none; }</style>
