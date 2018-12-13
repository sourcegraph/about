---
title: 'Sourcegraph browser extensions are now open source'
author: 'Nick Snyder'
publishDate: 2018-08-10T07:30-07:00
tags: [
  "blog"
]
slug: sourcegraph-browser-extensions-are-now-open-source
heroImage: //images.ctfassets.net/le3mxztn6yoo/1IQ1TRsJwsYcMaqgWE2Iw6/4db79f948c15617c782799ece68bf657/hover-tooltip.png
published: true
---

[Sourcegraph for Chrome](https://chrome.google.com/webstore/detail/sourcegraph/dgjhfomjieaadpoljlnidmbgkdffpack) and [Sourcegraph for Firefox](https://addons.mozilla.org/en-US/firefox/addon/sourcegraph/) are now **open source** at [sourcegraph/browser-extensions](https://github.com/sourcegraph/sourcegraph/tree/master/client/browser). These popular browser extensions add code intelligence (hovers, go to definition, find references, find implementations, and soon much more) to every website where you read code — including GitHub, GitHub Enterprise, Bitbucket Server, Phabricator, and more [coming soon](/product/browser). The original Sourcegraph for Chrome browser extension was built as a summer hack project by [Farhan](https://github.com/attfarhan) and now has more than 36,000 active installs worldwide. 

![githubcodeintelligence](//images.ctfassets.net/le3mxztn6yoo/1IQ1TRsJwsYcMaqgWE2Iw6/4db79f948c15617c782799ece68bf657/hover-tooltip.png)

We're open sourcing it today for two reasons:

1. We are committed to making more of Sourcegraph open source so we can be transparent with our development and enable passionate developers to help us achieve our [master plan](/plan).
2. We are preparing for our upcoming release of the [Code Extension Protocol (CXP)](/blog/hack-time-at-sourcegraph#continuing-projects) open standard, which lets you write an "editor extension"-like tool once and use it anywhere you look at code (in your code host, in multiple editors, and on Sourcegraph). Sourcegraph for Chrome and Firefox will be two of the first clients that support the CXP protocol.

Visit the [sourcegraph/browser-extensions](https://github.com/sourcegraph/sourcegraph/tree/master/client/browser) repository to see the code and install the browser extension. Learn more about Sourcegraph at [about.sourcegraph.com](/).
