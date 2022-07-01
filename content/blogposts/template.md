---
title: Blogpost Starter Pack
description: This is a template for writing content for the Sourcegraph blog!
authors:
  - name: Sourcegraph
    url: https://twitter.com/sourcegraph
publishDate: 2022-07-01T18:00+02:00
tags: [blog]
slug: starter-pack
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
---

![Blogpost Starter Pack](https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png)

Description

## Get started!

Description

```text
code
```

## Components

Description

<figure>
  <img src="https://storage.googleapis.com/sourcegraph-assets/blog/announcing-scip-typescript/navigate-to-arguments.png" alt="Navigate to arguments() method defined in commander npm" className="no-shadow" />
</figure>

```ts
interface QuickPickItem {
  label: string
  …
}
interface ProcessInfoItem extends QuickPickItem {
  pid: number
}
const extractItem: IExpressionItem = {
  label: string, // implements `QuickPickItem.label`
  pid: 42 // implements `ProcessInfoItem.pid`
  …
}
``` 
