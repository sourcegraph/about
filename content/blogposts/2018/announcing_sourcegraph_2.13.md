---
title: 'Announcing Sourcegraph 2.13'
authors:
  - name: Nick Snyder
    url: https://twitter.com/nickdsnyder
publishDate: 2018-11-06T00:00-07:00
tags: [
  "blog"
]
slug: announcing-sourcegraph-2.13
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
---

# Announcing Sourcegraph 2.13

Sourcegraph 2.13 ships today, with several improvements:

- [Indexed search](https://docs.sourcegraph.com/admin/search#indexed-search) option for single-node Docker container deployment to speed up searches (previously Enterprise-only, now free and open source)
- [More ways to specify which GitHub and GitHub Enterprise repositories to sync](https://docs.sourcegraph.com/admin/site_config/all#repositoryquery-array)
- [In-product documentation at `/help`](https://docs.sourcegraph.com/dev/how-to/documentation_implementation)
- [Per-user repository permissions](https://docs.sourcegraph.com/admin/repo/permissions) for GitLab, with more code hosts coming soon [Enterprise]
- [Support for multiple authentication providers](https://docs.sourcegraph.com/admin/auth) [Enterprise]

We're also shipping Sourcegraph extensions that add other new features:

- [Whole-file Git blame annotations](https://sourcegraph.com/extensions/sourcegraph/git-extras)
- New search keywords for finding places where a package/module is used:
  - [go.imports:PACKAGE](https://sourcegraph.com/extensions/sourcegraph/go-imports-search)
  - [js.depends:MODULE](https://sourcegraph.com/extensions/sourcegraph/js-dependency-search)
  - [py.imports:PACKAGE](https://sourcegraph.com/extensions/sourcegraph/python-imports-search)
  - [java.imports:DOTTED_CLASS](https://sourcegraph.com/extensions/sourcegraph/java-imports-search)
  - [php.uses:ALIAS](https://sourcegraph.com/extensions/sourcegraph/php-alias-search)
- New [org:GITHUB_ORG search keyword](https://sourcegraph.com/extensions/sourcegraph/org-search) to search among a GitHub organization's repositories
- [Basic code intelligence](https://sourcegraph.com/extensions/sourcegraph/basic-code-intel) for definitions and references using text search heuristics (non-precise, non-compiler-based)
- [More comprehensive Sourcegraph extension documentation](https://docs.sourcegraph.com/extensions)
  - [Authoring extensions](https://docs.sourcegraph.com/extensions/authoring)

To enable these extensions on your Sourcegraph instance, visit **User menu > Extensions**. See [Sourcegraph extensions documentation](https://docs.sourcegraph.com/extensions#usage) for more information.

**Ready to get Sourcegraph 2.13?** [Install](https://docs.sourcegraph.com/#quickstart) or [update](https://docs.sourcegraph.com/admin/updates) now.

## Changelog

See the [Sourcegraph changelog](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md) for a list of all changes in this release.

## Thank you

Thank you to the [open source contributors](https://github.com/sourcegraph/sourcegraph) who helped make Sourcegraph even better:

- [@faec](https://github.com/faec): support advanced `repositoryQuery` specification for which GitHub repositories to sync ([PR #482](https://github.com/sourcegraph/sourcegraph/pull/482))
- [@lukeautry](https://github.com/lukeautry): offline support for JSON Schema resolution ([PR #550](https://github.com/sourcegraph/sourcegraph/pull/550)), fix invalid elapsedMilliseconds ([PR #551](https://github.com/sourcegraph/sourcegraph/pull/551))
- [@jeroenherczeg](https://github.com/jeroenherczeg): fix documentation links ([PR #471](https://github.com/sourcegraph/sourcegraph/pull/471))
- [@jlangston](https://github.com/jlangston): fix README links ([PR #453](https://github.com/sourcegraph/sourcegraph/pull/453))
- [@yevbar](https://github.com/yevbar): default color theme ([PR #409](https://github.com/sourcegraph/sourcegraph/pull/409))
- [@ianlopshire](https://github.com/ianlopshire): use external URLs ([PR #269](https://github.com/sourcegraph/sourcegraph/pull/269))

## Next up: Sourcegraph 3.0

We're hard at work on the next major release, Sourcegraph 3.0. It will significantly improve language support for code intelligence, simplify deployment and site configuration, improve debuggability of code host integrations, and allow much more extensibility (including searching other types of things, such as GitHub issues and PR comments, rendered documentation, and log data). See the next couple months on the [Sourcegraph product roadmap](https://handbook.sourcegraph.com/direction) for more details. Work has already begun on [sourcegraph/sourcegraph@`master`](https://github.com/sourcegraph/sourcegraph).

If you're on Sourcegraph 2.x, you should update to 2.13 now and can upgrade to 3.0 when it is released.
