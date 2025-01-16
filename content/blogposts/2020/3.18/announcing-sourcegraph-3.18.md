---
title: "Sourcegraph 3.18: Multi-revision search, custom search pages, campaigns for GitLab, better C++, and more"
authors:
  - name: Laureen Hudson
publishDate: 2020-07-20T10:00-07:00
tags: [blog]
slug: sourcegraph-3.18
heroImage: /blog/3.18-release-blog-img.png
published: true
---

Our team has been hard at work continuing to improve Sourcegraph, so you can spend more time coding and less time trying to make sense of things. Sourcegraph 3.18 brings a solid lineup of new features and enhancements, including searching across multiple revisions at a time, GitLab support in campaigns, and better C++ support:

- [Search across multiple revisions](/blog/search-multiple-revisions)

  You can now search across multiple revisions of the same repository by listing multiple branch names (or other revision specifiers). For example, to search across multiple branches, you could use something like `repo:myrepo@branch1:branch2:branch2` in your query. This can come in handy in situations like searching all release branches for a particular bug so you can fix it for all releases of your application.

- [Indexed non-default branches](/blog/indexed-non-default-branches)

  Search is great, but indexing makes it fast. Just as you can now search over multiple revisions simultaneously, you can also have Sourcegraph index multiple non-default revisions. Many users have long-lived release branches they'd like to search as frequently as their default branch, and this means that search will be lightning fast for every important revision in your codebase.

- [Better C++ precise code intelligence](/blog/c-plus-plus-code-intel)

  We wrote a new LSIF indexer for C and C++ based on [clangd](https://clangd.llvm.org). This means that developers using C and C++ now have access to precise code intelligence. Developers using the original C++ LSIF indexer based on DXR will see noticeable improvements with this new implementation: it's faster now and supports hover tooltips.

- [Getting notified about the health of Sourcegraph is easier](/blog/sourcegraph-health-notification)

  Alerts are now delivered with detailed information, including links to potential solutions. Additionally, we now monitor container health and over/under-provisioning in all deployment modes, so you will be alerted if Sourcegraph needs more resources or could do with less.

- [Custom search pages on Sourcegraph Cloud](/blog/custom-search-pages)

  You can now search all of the code for several popular open source projects, such as Kubernetes and React, on project-specific search pages. We know many core team members of these projects use Sourcegraph, and this will help them spread the joy of code search to more contributors.

- [Small but useful improvements](/blog/small-but-useful-improvements)

  By popular demand, we've added support for campaigns in GitLab. We've also improved in-product documentation for adding code hosts and repositories to Sourcegraph.

Check out the [changelog](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@master/-/blob/CHANGELOG.md) for all the details of what changed and why.

## Thank you

Thank you to the many people who contributed to Sourcegraph since the last release!

- [@Jaxkr](https://github.com/Jaxkr)
- [@aisbaa](https://github.com/aisbaa)
- [@abitrolly](https://github.com/abitrolly)
- [@smaifullerton-wk](https://github.com/smaifullerton-wk)
- [@terinjokes](https://github.com/terinjokes)
- [@svrx](https://github.com/svrx)
- [@DolceTriade](https://github.com/DolceTriade)
- [@shadyabhi](https://github.com/shadyabhi)
- [@blanet](https://github.com/blanet)
- [@bb-qq](https://github.com/bb-qq)
- [@byrongrogan](https://github.com/byrongrogan)
- [@mipearson](https://github.com/mipearson)
- [@kwangil-ha](https://github.com/kwangil-ha)
- [@s-yadav](https://github.com/s-yadav)
- [@lf-](https://github.com/lf-)
- [@smcallis](https://github.com/smcallis)
- [@zgrimshell](https://github.com/zgrimshell)
- [@jlangston](https://github.com/jlangston)

## Share your feedback

Whether you use Sourcegraph 20 times per day or are new to it, we'd love to hear what you think!

-     Get in touch on Twitter ([@sourcegraph](https://twitter.com/sourcegraph)),
-     File an issue on [GitHub](https://github.com/sourcegraph/sourcegraph/issues), or
-     Email us at [feedback@sourcegraph.com](mailto:feedback@sourcegraph.com).

We look forward to hearing from you!

From the [entire Sourcegraph team](https://handbook.sourcegraph.com/company/team), happy coding!
