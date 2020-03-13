---
title: 'Universal Code Search for GitLab'
author: Ryan Blunden
authorUrl: https://twitter.com/ryan_blunden
publishDate: 2020-03-12T05:59-06:00
tags: [
  blog
]
slug: universal-code-search-gitlab
heroImage: /external-logos/gitlab-mark.svg
published: true
---

Sourcegraph [Universal Code Search](/universal-code-search) enables developers to explore and better understand all code, faster, with contextual code intelligence.

This screencast (with accompanying audio) shows how to [connect and configure](https://docs.sourcegraph.com/admin/external_service/gitlab) Sourcegraph Universal Code Search for public and private repositories on GitLab.com and GitLab CC/EE instances

In addition to connection configuration, it discusses important factors for determining which repositories Sourcegraph will index, such as excluding archived repositories, as well as repositories based on naming patterns such `deploy-`.

<p class="container">
  <div style="padding:56.25% 0 0 0;position:relative;">
    <iframe src="https://player.vimeo.com/video/397320487?color=0CB6F4&amp;title=0&amp;byline=" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
  </div>
  <p style="text-align: center"><a href="https://www.youtube.com/watch?v=r8kvCUeeMKQ" target="_blank">Watch on YouTube</a></p>
</p>

See the [Sourcegraph GitLab documentation](https://docs.sourcegraph.com/admin/external_service/gitlab) for full configuration options, including [enabling repository permissions](https://docs.sourcegraph.com/admin/external_service/gitlab#repository-permissions).

The script used in the screencast to search for repositories to ignore is available as a [GitLab snippet](https://gitlab.com/snippets/1952534).
