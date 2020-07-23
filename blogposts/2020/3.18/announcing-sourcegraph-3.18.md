---
title: "Sourcegraph 3.18: Search across multiple revisions and non-master branches, custom search pages, campaigns now support GitLab, new C++ precise code intelligence"
author: Laureen Hudson
publishDate: 2020-07-20T10:00-07:00
tags: [blog]
slug: sourcegraph-3.18
heroImage: /blog/3.18-release-blog-img.jpg
published: true
---

We’re improving Sourcegraph universal code search continuously, to help you solve the Big Code problems you face, all day every day. Here's how we're doing it.

-   [Indexed non-master branches](https://about.sourcegraph.com/blog/indexed-non-master-branches)

    Often, you need to search code that isn’t in your default branch, like long-lived release branches or important tags. You can now index multiple branches (not just the default branch) to make these kinds of searches much faster.

-   [Search across multiple revisions](https://about.sourcegraph.com/blog/search-multiple-revisions)

    You can now search across multiple revisions of the same repository by listing multiple branch names (or other revision specifications) separated by `:` in your query. This helps you understand the differences between code at different branches (especially for release branches that have diverged).

-   [Small but mighty new features](https://about.sourcegraph.com/blog/small-and-mighty-features)

    Based on lots of feedback, we added support for campaigns in GitLab. We’ve also improved privacy feedback when adding repositories, and created custom search pages for Sourcegraph Cloud.

-   [New C++ precise code intelligence solution](https://about.sourcegraph.com/blog/c-plus-plus-code-intel)

    We wrote a new LSIF indexer based on clangd. This means that developers using C and C++ now have access to precise code intelligence. Developers using the original C++ LSIF indexer based on DXP will see noticeable improvements with this new implementation; faster than before, and now with hovers.

-   [Getting notified about the health of Sourcegraph is even easier](https://about.sourcegraph.com/blog/sourcegraph-health-notification)

    Alerts are now delivered with detailed information, including links to potential solutions. Additionally, we now monitor container health and over/under-provisioning in all deployment modes -- so you will even get alerts if Sourcegraph needs more resources or could do with less!

-   [Custom search pages on Sourcegraph Cloud](https://about.sourcegraph.com/blog/custom-search-pages)

    This helps you search over code that is more relevant to you, and introduces you to interesting queries in the process. Additionally, communities can pick this up and have pages created specifically for them (for example, Kubernetes).

-   [Changelog](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@master/-/blob/CHANGELOG.md)

    All the details for what changed and why, can be found here.


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
