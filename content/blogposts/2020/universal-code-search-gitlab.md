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
description: 'Universal Code Search for GitLab'
---

Sourcegraph [Universal Code Search](/universal-code-search) enables developers to explore and better understand all code, faster, with contextual code intelligence.

This screencast (with accompanying audio) shows how to [connect and configure](https://docs.sourcegraph.com/admin/external_service/gitlab) Sourcegraph Universal Code Search for public and private repositories on GitLab CE/EE instances.

In addition to configuring the Sourcegraph-GitLab connection, the screencast discusses important factors for determining which repositories Sourcegraph will index, such as excluding archived and forked repositories, and optionally excluding repositories based on naming patterns (e.g., `deploy-`).

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/397320487?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://www.youtube.com/watch?v=r8kvCUeeMKQ" target="_blank">View on YouTube</a></p>
</div>

See the [Sourcegraph GitLab documentation](https://docs.sourcegraph.com/admin/external_service/gitlab) for full configuration options, including [enabling repository permissions](https://docs.sourcegraph.com/admin/external_service/gitlab#repository-permissions).

The [Python script used to generate the list of repositories to ignore](https://gitlab.com/snippets/1952534) is available as a GitLab Snippet.
