# Searching dependencies

Sourcegraph's search is getting a lot more powerful and extensible. In addition to [code, commit, and diff search](https://docs.sourcegraph.com/user/search), you can now:

- Search for all JavaScript/TypeScript files that `import` or `require` a package with <code>js.depends:<em>mypackage</em></code>
- Search for all Go files that import a package with <code>go.imports:<em>mypackage</em></code>
- ...and do the same for Python, PHP, and Java.

In what cases would you want to search for files that import a particular package?

- You want to remove a dependency and want to see all places it's actually called
- Look for examples in your codebase on how to use a package
- Deciding which package to use based on how commonly used it is in your codebase

All these searches work in Sourcegraph itself and [anywhere else you can get a Sourcegraph search box](https://docs.sourcegraph.com/integration).

To use these search operators, enable the extension for the language you want to use.

Extensions will now also add a "See more usages" link to the end of import statements, which will trigger a search to find all files that use that package.

<!-- TODO:
Add documentation to:
- READMEs of each language extension
- Search query syntax documentation page
- Review the tour and overview docs to see if this simplifies those
- Sourcegraph.d.ts in sourcegraph-extension-api

NOTE: We would like to make it such that this transformation also occurs on the backend, but we may not be able to finish this by the next release.
-->

## Building Sourcegraph extensions for search

Want to build one of these yourself? You can write [Sourcegraph extensions](https://github.com/sourcegraph/sourcegraph-extension-api) to extend the search functionality.

We added a new extension API:

- `sourcegraph.search.registerQueryTransformer` for defining custom search operators

