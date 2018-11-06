---
title: Search for dependencies 
author: Farhan Attamimi
publishDate: 2018-11-06T00:00-07:00
tags: [
  blog
]
slug: search-for-dependencies
heroImage: https://user-images.githubusercontent.com/16265452/48083413-fd49e080-e1a9-11e8-8120-9100d4b2543b.png
published: false
---

Sourcegraph's search is getting a lot more powerful and extensible. In addition to [code, commit, and diff search](https://docs.sourcegraph.com/user/search), you can now:

- Search for all JavaScript/TypeScript files that `import` or `require` a package with <code>js.depends:<em>mypackage</em></code>
- Search for all Go files that import a package with <code>go.imports:<em>mypackage</em></code>
- ...and do the same for Python, PHP, and Java.

![Go imports search](https://user-images.githubusercontent.com/16265452/48083413-fd49e080-e1a9-11e8-8120-9100d4b2543b.png)

What are some use cases for searching for files that import a particular package?

- You want to remove a dependency and want to see all places it's actually called.
- You're looking for examples on how to use a package in your codebase.
- You're deciding which package to use based on how commonly used it is in your codebase.

All these searches work in Sourcegraph itself and [anywhere else you can get a Sourcegraph search box](https://docs.sourcegraph.com/integration).

To use these search operators, enable the extension for the language you want to use:
- [Go](https://sourcegraph.com/extensions/sourcegraph/go-imports-search)
- [JavaScript/TypeScript](https://sourcegraph.com/extensions/sourcegraph/js-dependency-search)
- [Python](https://sourcegraph.com/extensions/sourcegraph/python-imports-search)
- [Java](https://sourcegraph.com/extensions/sourcegraph/java-imports-search)
- [PHP](https://sourcegraph.com/extensions/sourcegraph/php-alias-search)

These extensions also add a "See more usages" link to the end of import statements, which will trigger a search to find all files that import that package.

## Building Sourcegraph extensions for search

Want to build one of these yourself? You can write [Sourcegraph extensions](https://docs.sourcegraph.com/extensions) to extend the search functionality.

We added a new extension API, `sourcegraph.search.registerQueryTransformer`, for defining custom search operators. [Check out the API source code](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/packages/sourcegraph-extension-api/src/sourcegraph.d.ts#L859-870).

For examples of `QueryTransformer` implementations, read the source code for the [Go imports search](https://sourcegraph.com/github.com/attfarhan/go-imports-search@master/-/blob/src/go-imports-search.ts#L6-27) and [JavaScript/TypeScript dependency search](https://sourcegraph.com/github.com/attfarhan/js-dependency-search@master/-/blob/src/js-dependency-search.ts#L6-17) extensions.
