---
title: "Small but mighty new features"
author: Loïc Guychard, Adam Harvey, Eric Fritz
publishDate: 2020-07-20T00:00-07:00
tags: [blog]
slug: small-and-mighty-features
heroImage: /blog/3.18-small-and-mighty-features.png
published: true
---

## Improved add / update repository flow for users trying private versions of Sourcegraph

GitHub issue: [#11044](https://github.com/sourcegraph/sourcegraph/issues/11044)

Developer: [Loïc Guychard](https://github.com/lguychard)

We've added in-product documentation that clarifies what data Sourcegraph accesses from your code host to address confusion that first-time users had when adding their first repositories to Sourcegraph. Sourcegraph takes data privacy seriously and only uses authentication tokens to access the data it needs to index your repositories.

![Add repository flow](https://sourcegraphstatic.com/blog/3.18/add-repository-flow.png "Privacy feedback in Sourcegraph UI")

## Campaigns now support GitLab

GitHub issue: [#11586](https://github.com/sourcegraph/sourcegraph/issues/11586)

Developer: [Adam Harvey](https://github.com/LawnGnome)

You asked, we implemented. We’ve received a lot of feedback from developers using GitLab as their code host that campaign capabilities would be useful, so we added them in the Sourcegraph 3.18 release. This makes campaigns available to more organizations and helps make Sourcegraph more universal. See Adam’s introductory video below:

<p class="container">
  <div style="padding:56.25% 0 0 0;position:relative;">
    <iframe src="https://www.youtube.com/embed/KatiVJ4D3H4" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
  </div>
  <p style="text-align: center"><a href="https://youtu.be/KatiVJ4D3H4" target="_blank">View on YouTube</a></p>
</p>

Campaigns allow you to make large-scale code changes across many repositories and different code hosts, and monitor their progress. For more information on campaign, see the [Sourcegraph documentation](https://docs.sourcegraph.com/user/campaigns).

## Highlight all elements on hover

GitHub issue: [#10868](https://github.com/sourcegraph/sourcegraph/issues/10868)

Developer: [Eric Fritz](https://github.com/efritz)

![Highlight all elements](https://sourcegraphstatic.com/blog/3.18/highlight-all-elements.gif "Highlight all elements")

When a token is hovered or selected in a file, we now highlight all visible instances of that token. This makes it easy to see all references of a variable at-a-glance. Many developers have had to use the browser search (cmd-f) functionality to work around the lack of support of this feature – this makes it first class!
