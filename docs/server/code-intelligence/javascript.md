---
layout: markdown
title: 'JavaScript: code intelligence configuration'
permalink: docs/code-intelligence/javascript
---

To enable JavaScript code intelligence, see the [installation documentation](/docs/code-intelligence/install).

JavaScript is a dynamic language with many common patterns that are difficult to analyze statically. For best results:

- Use ES6 modules (`import` and `export`) instead of `require` or `define`.
- Add a [jsconfig.json file](https://code.visualstudio.com/docs/languages/jsconfig) to your repository to provide hints for module `require`/`import` paths resolution. Multiple projects (and jsconfig.json files) in a single repository are supported.

With an accurate jsconfig.json file for your project, Sourcegraph's code intelligence for JavaScript will yield near-complete coverage for hovers, definitions, and references. To compose the jsconfig.json file for your project, it's easiest to write and test it locally in an editor that respects jsconfig.json files:

- Microsoft's [Visual Studio Code](https://code.visualstudio.com/), using the built-in JavaScript support
- GitHub's Atom, using [Atom-IDE's JavaScript support](https://github.com/atom/ide-typescript/) (which is based on Sourcegraph's JavaScript language server)
- Any other editor that supports LSP, using Sourcegraph's JavaScript language server ([sourcegraph/javascript-typescript-langserver](https://github.com/sourcegraph/javascript-typescript-langserver))

To get code intelligence on Sourcegraph Server (contact us for Sourcegraph Data Center) on code that depends on a package in a private registry, copy your `.npmrc` or `.yarnrc` into the `typescript` container:

```
docker cp ~/.npmrc typescript:/usr/local/share/.npmrc
```

And simply refresh the page. This will not survive container restarts, but we are looking into providing a mechanism to ensure this perists.

Questions/feedback? Contact us at [@srcgraph](https://twitter.com/srcgraph) or <mailto:support@sourcegraph.com>, or file issues on our [public issue tracker](https://github.com/sourcegraph/issues/issues).
