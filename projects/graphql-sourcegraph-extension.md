---
title: New GraphQL Sourcegraph extension
description: New GraphQL Sourcegraph extension
author: Chris Wendt
publishDate: 2018-11-01T00:00-07:00
tags: [
  blog
]
slug: new-graphql-sourcegraph-extension
heroImage: //images.ctfassets.net/le3mxztn6yoo/t4Qpcq5kA0AYM24Ws4mOk/4edf5502a936bbec90c262fa00355aed/sourcegraph-mark.png
published: false
---

Sourcegraph extensions make it easy to build code intelligence using existing language analysis tools that don't necessarily speak [LSP (the Language Server Protocol)](https://microsoft.github.io/language-server-protocol/specification).

GraphQL is one of these languages that has [a language analysis tool](https://www.npmjs.com/package/@playlyfe/gql) and I spent a few days building a Sourcegraph extension for it.

The first step was to start with the `activate()` function that will run when the Sourcegraph extension is run:

```typescript
export function activate(): void {
}
```

Then I grabbed the address of the GraphQL language server from a user setting:

```diff
 export function activate(): void {
+  const address = sourcegraph.configuration.get<Settings>().get('graphql.langserver-address')
 }
```

Then I register a callback that will run when the user hovers over something in a GraphQL file:

```diff
 export function activate(): void {
   const address = sourcegraph.configuration.get<Settings>().get('graphql.langserver-address')

+  sourcegraph.languages.registerHoverProvider([{ pattern: '*.{graphql,gql}'}], {
+    provideHover: async (doc, pos) => {
+        return ajax({
+            method: 'POST',
+            url: address,
+            body: JSON.stringify({ method: 'hover', doc, pos }),
+            responseType: 'json',
+            headers: {
+                'Content-Type': 'application/json',
+            },
+        })
+    }
+  })
 }
```

It sends a request to a https://github.com/chrismwendt/graphql-ws-langserver running elsewhere.

Then I converted the response to something that the Sourcegraph extension API understands (with Python syntax highlighting to recognize comment lines starting with `#`)

```diff
 export function activate(): void {
   const address = sourcegraph.configuration.get<Settings>().get('graphql.langserver-address')

   sourcegraph.languages.registerHoverProvider(docSelector, {
     ...
   })
+    .then(response => {
+        return (
+            response &&
+            response.response &&
+            response.response.contents && {
+                contents: {
+                    // python syntax highlighting works pretty well for GraphQL
+                    value: '```python\n' + response.response.contents.join('\n') + '\n```',
+                    kind: sourcegraph.MarkupKind.Markdown,
+                },
+            }
+        )
+    })
 }

```


TODO Expand and weave in these links:

https://sourcegraph.com/extensions/chris/graphql
https://github.com/sourcegraph/sourcegraph-graphql
https://github.com/sourcegraph/sourcegraph-graphql/blob/master/src/extension.ts
https://github.com/chrismwendt/graphql-ws-langserver
