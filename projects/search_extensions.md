# Searching GitHub issues, JavaScript dependencies, and more kinds of things

Sourcegraph's search is getting a lot more powerful and extensible. In addition to [code, commit, and diff search](https://docs.sourcegraph.com/user/search), you can now:

- Search within GitHub issues with `type:issue`
- Search for all JavaScript/TypeScript files that `import` or `require` a package with <code>js.depends:<em>mypackage</em></code>

<!--

TODO: add:

1. Why would you choose to search GH issues on Sourcegraph over GitHub?
1. In what cases would you want to search GH issues, period?
1. In what cases (use cases) would you want to search for JS/TS files that import a package?

-->

All these searches work in Sourcegraph itself and [anywhere else you can get a Sourcegraph search box](https://docs.sourcegraph.com/integration).

## Building Sourcegraph extensions for search

Want to build one of these yourself? You can write [Sourcegraph extensions](https://github.com/sourcegraph/sourcegraph-extension-api) to extend the search functionality.

We added 2 new extension APIs:

- `sourcegraph.search.registerQueryTransformer` for defining custom search operators
- `sourcegraph.search.registerSearchProvider` for returning results

