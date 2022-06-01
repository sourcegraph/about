---
title: "Small but useful improvements"
authors:
  - name: Loïc Guychard
  - name: Adam Harvey
  - name: Eric Fritz
publishDate: 2020-07-20T04:00-07:00
tags: [blog]
slug: small-but-useful-improvements
heroImage: /blog/3.18-small-and-mighty-features.png
published: true
---

We've improved in-product documentation to clarify how Sourcegraph fetches data from code hosts. We heard from some first-time users that they were uncertain about how Sourcegraph would use access tokens and how much additional load Sourcegraph would put on code host servers. The new docs make it clear that we use code host tokens only to fetch the data necessary to index repositories on Sourcegraph, support campaigns (if enabled), and enforce permissions.

![Add repository flow](https://storage.cloud.google.com/sourcegraph-assets/blog/3.18/add-repository-flow.png "Privacy feedback in Sourcegraph UI")

## Campaigns now support GitLab

[Campaigns](https://docs.sourcegraph.com/campaigns) enable you to initiate and manage large-scale code changes across your codebase, across multiple repositories _and even_ multiple code hosts. Initially, only GitHub and Bitbucket Server were supported, and a lot of users cried out for GitLab support. We heard you, and [here it is](https://github.com/sourcegraph/sourcegraph/issues/11586), courtesy of the wonderful [Adam Harvey](https://github.com/LawnGnome):

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://www.youtube-nocookie.com/embed/KatiVJ4D3H4" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
</div>

## Highlight all elements on hover

[Eric Fritz](https://github.com/efritz) has implemented [#10868](https://github.com/sourcegraph/sourcegraph/issues/10868), which means when a token is hovered or selected in a file, we now highlight all visible instances of that token. This makes it easy to see all references of a variable at-a-glance. Many developers have had to use the browser search (`cmd-f`) to work around the lack of this feature — this makes it first class!

![Highlight all elements](https://sourcegraphstatic.com/blog/3.18/highlight-all-elements.gif "Highlight all elements")
