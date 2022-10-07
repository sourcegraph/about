---
title: 'Sourcegraph browser extensions are now open source'
authors:
  - name: Nick Snyder
    url: https://twitter.com/nickdsnyder
publishDate: 2018-08-10T07:30-07:00
tags: [
  "blog"
]
slug: sourcegraph-browser-extensions-are-now-open-source
heroImage: https://images.ctfassets.net/le3mxztn6yoo/1IQ1TRsJwsYcMaqgWE2Iw6/4db79f948c15617c782799ece68bf657/hover-tooltip.png
published: true
---

[Sourcegraph's browser extensions for Chrome and Firefox](https://docs.sourcegraph.com/integration/browser_extension) are now **open source** in [sourcegraph/sourcegraph](https://github.com/sourcegraph/sourcegraph/tree/main/client/browser). These popular browser extensions add code intelligence (hovers, go to definition, find references, find implementations, and soon much more) to every website where you read code — including GitHub, GitHub Enterprise, Bitbucket Server, Phabricator, and more [coming soon](https://docs.sourcegraph.com/integration/browser_extension). The original Sourcegraph for Chrome browser extension was built as a summer hack project by [Farhan](https://github.com/attfarhan) and now has more than 36,000 active installs worldwide.

![githubcodeintelligence](//images.ctfassets.net/le3mxztn6yoo/1IQ1TRsJwsYcMaqgWE2Iw6/4db79f948c15617c782799ece68bf657/hover-tooltip.png)

We're open sourcing it today for two reasons:

1. We are committed to making more of Sourcegraph open source so we can be transparent with our development and enable passionate developers to help us achieve our [master plan](https://handbook.sourcegraph.com/company/strategy).
2. We are preparing for our upcoming release of [Sourcegraph extensions](https://docs.sourcegraph.com/extensions) open standard, which lets you write an "editor extension"-like tool once and use it anywhere you look at code (in your code host, in multiple editors, and on Sourcegraph). Sourcegraph for Chrome and Firefox will be two of the first clients that support Sourcegraph extensions.

Visit the [sourcegraph/sourcegraph](https://github.com/sourcegraph/sourcegraph/tree/main/client/browser) repository to see the code and install the browser extension.
