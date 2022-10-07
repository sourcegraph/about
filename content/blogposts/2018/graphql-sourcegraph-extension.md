---
title: New GraphQL Sourcegraph extension
description: New GraphQL Sourcegraph extension
authors:
  - name: Chris Wendt
publishDate: 2018-12-05T00:00-07:00
tags: [
  blog
]
slug: new-graphql-sourcegraph-extension
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
---

Sourcegraph extensions make it easy to build code intelligence using existing language analysis tools that don't necessarily speak [LSP (the Language Server Protocol)](https://microsoft.github.io/language-server-protocol/specification).

GraphQL is one of these languages that has [a language analysis tool](https://www.npmjs.com/package/@playlyfe/gql) and I spent a few days building a Sourcegraph extension for it.

You can try it out on Sourcegraph.com by first [enabling the GraphQL extension](https://sourcegraph.com/extensions/chris/graphql) then visiting a [sample GraphQL file](https://sourcegraph.com/github.com/chrismwendt/graphql-ws-langserver@master/-/blob/schema.gql#L9:9) (beware this is relatively experimental - only hover tooltips and jump-to-definition within the same file work).

![image](https://user-images.githubusercontent.com/1387653/48732224-e4065280-ebf3-11e8-9689-d17da442728c.png)

The first step was to start with the `activate()` function that will run when the Sourcegraph extension is run:

```typescript
export function activate(): void {}
```

Then I grab the address of the GraphQL language server from a user setting:

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

Then I convert the response to something that the Sourcegraph extension API understands (with Python syntax highlighting to recognize comment lines starting with `#`)

````diff
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

````

Check out the repository for the [extension](https://github.com/sourcegraph/sourcegraph-graphql) and the [server component](https://github.com/chrismwendt/graphql-ws-langserver).
