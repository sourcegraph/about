---
layout: markdown
title: 'TypeScript: code intelligence configuration'
permalink: docs/code-intelligence/typescript
---

To enable TypeScript code intelligence, see the [installation documentation](/docs/code-intelligence/install).

Sourcegraph's TypeScript code intelligence uses your existing [tsconfig.json](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html) to analyze your TypeScript code. Multiple projects (and tsconfig.json files) in a single repository are supported.

To get code intelligence on Sourcegraph Server (contact us for Sourcegraph Data Center) on code that depends on a package in a private registry, copy your `.npmrc` or `.yarnrc` into the `typescript` container:

```
docker cp ~/.npmrc typescript:/usr/local/share/.npmrc
```

And simply refresh the page. This will not survive container restarts, but we are looking into providing a mechanism to ensure this perists.

Questions/feedback? Contact us at [@srcgraph](https://twitter.com/srcgraph) or <mailto:support@sourcegraph.com>, or file issues on our [public issue tracker](https://github.com/sourcegraph/issues/issues).
