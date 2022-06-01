---
title: 'Better GitHub code search and browsing with the Sourcegraph Chrome extension'
authors:
  - name: Matt King
publishDate: 2017-06-27T00:00-07:00
tags: [
  "blog"
]
slug: faster-smoother-github-code-browsing
heroImage: https://images.ctfassets.net/le3mxztn6yoo/3CEYtcHfeUUioAsyMA0I8w/80f68e9142de1db153ee5d37e77430ce/sourcegraphAdvancedSearch.gif
published: true
---



## Faster, smoother GitHub code browsing with the updated Sourcegraph Chrome extension.

We’re excited to announce more improvements to the Sourcegraph Chrome extension. More than 10,000 developers use it to browse and search code on GitHub with the power of an IDE.

In addition to the new features described below, the core functionality is faster and smoother: whenever you're viewing a file or reviewing a pull request, you can hover over code to see type signatures and documentation in a tooltip. Clicking will anchor the tooltip and let you jump to a definition, find references, or initiate a full-text search.

## Advanced code search

Our extension now provides fast, multi-repository grep search with regular expressions. Just select any code inside a GitHub repository and use the Sourcegraph tooltip to execute a search. Search results for supported languages have code intelligence, and every result file has inline authorship and blame information.

![sourcegraphAdvancedSearch](//images.contentful.com/le3mxztn6yoo/3CEYtcHfeUUioAsyMA0I8w/80f68e9142de1db153ee5d37e77430ce/sourcegraphAdvancedSearch.gif)

If you prefer to stay on GitHub when you search, check "Add Sourcegraph search to GitHub search menu" in the options panel (which you open by clicking the extension’s icon). To search, just use the normal GitHub search field.

![sourcegraphEmbeddedCodeSearch](//images.contentful.com/le3mxztn6yoo/3H7T1lODu0WQ488keQEQ6u/1228300af398be71928374eeddf608f1/sourcegraphEmbeddedCodeSearch.gif)

## Go to definition
In [supported languages](https://sourcegraph.com/help/languages), you can go to the definition of a symbol. You can even jump to a definition across repositories.

![sourcegraphJumpToDefinition](//images.contentful.com/le3mxztn6yoo/OZKyrqcdSm4208saaUQyQ/7a8177f2ed6bb5dcf9e1a0c5aca3ffb3/sourcegraphJumpToDefinition.gif)

## Find references

You can also see all callers of a function, property accesses, etc., just like in a powerful IDE.

![sourcegraphFindReferences](//images.contentful.com/le3mxztn6yoo/4vgpMXmNXW8Q2oIUwOSOcI/c89c8a00c44214751186314892268026/sourcegraphFindReferences.gif)

## View on Sourcegraph

By clicking the "Sourcegraph" button on a repository homepage or while viewing a file, you can now jump to Sourcegraph. (Many users asked for this because going to Sourcegraph is the first thing they do when they get to a repository on GitHub!)

## Get it now

[Install the Sourcegraph browser extension for Chrome or Firefox](https://docs.sourcegraph.com/integration/browser_extension). If you've already installed it, your browser will automatically update the extension, so you’ll already have these new features.

Feedback or questions? Tweet us [@sourcegraph](https://twitter.com/sourcegraph).

(If your company’s code is on GitHub Enterprise or some other code host, connect the browser extension to a [self-hosted Sourcegraph instance](https://docs.sourcegraph.com). The browser extension is also available for Firefox.)
