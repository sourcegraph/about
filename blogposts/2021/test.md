---
title: This is a test blog post
description: Here’s how we went from using 1400KB of RAM per repo to just 310KB without affecting latency.
author: Ryan Hitchman
publishDate: 2021-08-19T00:00-07:00
tags: [blog]
slug: test
heroImage: /blog/blog_Reduce_RAM-01.jpg
socialImage: https://about.sourcegraph.com/blog/blog_Reduce_RAM-01.jpg
published: true
---

```sourcegraph
patterntype:structural repo:^github\.com/gitpod-io/openvscode-server$@5c8a1f file:^src/vs/code/browser/workbench/workbench\.ts create(document.body, {:[1]})
```

```ruby
def hello
```

<script>
  var sg_codefences = document.querySelectorAll('pre.language-sourcegraph, pre.sourcegraph')
  sg_codefences.forEach(element => {
    var sg_codeblock = element.querySelectorAll('code.language-sourcegraph, pre.chroma')
    var link = document.createElement('a')
    link.href = 'https://sourcegraph.com?q=' + encodeURIComponent(sg_codeblock[0].innerText)
    link.innerText = 'Open on Sourcegraph: '
    link.className = 'language-sourcegraph-link'
    element.prepend(link)
  })
</script>
