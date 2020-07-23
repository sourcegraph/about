---
title: "Sourcegraph 3.18: Search across multiple revisions and non-master branches, custom search pages, campaigns now support GitLab, new C++ precise code intelligence"
author: Laureen Hudson
publishDate: 2020-07-20T10:00-07:00
tags: [blog]
slug: sourcegraph-3.18
heroImage: /blog/3.18-release-blog-img.jpg
published: true
---

We’re improving Sourcegraph universal code search continuously, to help you solve the Big Code problems you face, all day every day. Here's what's new in Sourcegraph 3.18:

-   [Indexed non-master branches](https://about.sourcegraph.com/blog/indexed-non-master-branches)

    Often, you need to search code that isn’t in your default branch, like long-lived release branches or important tags. You can now index multiple branches (not just the default branch) to make these kinds of searches much faster.

-   [Search across multiple revisions](https://about.sourcegraph.com/blog/search-multiple-revisions)

    You can now search across multiple revisions of the same repository by listing multiple branch names (or other revision specifications). For example, to search across multiple specific branches, you’d use something like `repo:myrepo@branch1:branch2:branch2` in your query. This helps you see all release branches that contain a particular bug so you can be sure to fix it in all the right places.

-   [Small but mighty new features](https://about.sourcegraph.com/blog/small-and-mighty-features)

    Based on lots of feedback, we've added support for campaigns in GitLab. We’ve also improved privacy feedback when adding repositories.

-   [New C++ precise code intelligence solution](https://about.sourcegraph.com/blog/c-plus-plus-code-intel)

    We wrote a new LSIF indexer based on clangd. This means that developers using C and C++ now have access to precise code intelligence. Developers using the original C++ LSIF indexer based on DXR will see noticeable improvements with this new implementation: it's faster now, and has hovers.

-   [Getting notified about the health of Sourcegraph is even easier](https://about.sourcegraph.com/blog/sourcegraph-health-notification)

    Alerts are now delivered with detailed information, including links to potential solutions. Additionally, we now monitor container health and over/under-provisioning in all deployment modes -- so you will even get alerts if Sourcegraph needs more resources or could do with less!

-   [Custom search pages on Sourcegraph Cloud](https://about.sourcegraph.com/blog/custom-search-pages)

    You can now search all of the code for several popular open-source projects, such as Kubernetes and React, on project-specific search pages. We know many core team members of these projects use Sourcegraph, and this will help them spread the joy of code search to more contributors.

-   [Changelog](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@master/-/blob/CHANGELOG.md)

    Here's where you'll find all the details for what changed and why.


## Thank you!

Thank you to the many people who contributed to Sourcegraph since the last release!

-   [@Jaxkr](https://github.com/Jaxkr)
-   [@aisbaa](https://github.com/aisbaa)
-   [@abitrolly](https://github.com/abitrolly)
-   [@smaifullerton-wk](https://github.com/smaifullerton-wk)
-   [@terinjokes](https://github.com/terinjokes)
-   [@svrx](https://github.com/svrx)
-   [@DolceTriade](https://github.com/DolceTriade)
-   [@shadyabhi](https://github.com/shadyabhi)
-   [@blanet](https://github.com/blanet)
-   [@bb-qq](https://github.com/bb-qq)
-   [@byrongrogan](https://github.com/byrongrogan)
-   [@mipearson](https://github.com/mipearson)
-   [@kwangil-ha](https://github.com/kwangil-ha)
-   [@s-yadav](https://github.com/s-yadav)
-   [@lf-](https://github.com/lf-)
-   [@smcallis](https://github.com/smcallis)
-   [@zgrimshell](https://github.com/zgrimshell)
-   [@jlangston](https://github.com/jlangston)

## Share your feedback

Whether you use Sourcegraph 20 times per day or are new to it, we'd love to hear what you think!
-     get in touch on Twitter [@srcgraph](https://twitter.com/srcgraph),
-     file an issue on [GitHub](https://github.com/sourcegraph/sourcegraph/issues), or
-     email us [feedback@sourcegraph.com](mailto:feedback@sourcegraph.com).

We look forward to hearing from you!

From the [entire Sourcegraph team](https://about.sourcegraph.com/company/team), happy coding!
