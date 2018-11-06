---
title: 'Announcing Sourcegraph 2.13'
author: 'Nick Snyder'
publishDate: 2018-11-06T00:00-07:00
tags: [
  "blog"
]
slug: announcing-sourcegraph-2.13
heroImage: //images.ctfassets.net/le3mxztn6yoo/t4Qpcq5kA0AYM24Ws4mOk/4edf5502a936bbec90c262fa00355aed/sourcegraph-mark.png
published: true
---

# Announcing Sourcegraph 2.13

Sourcegraph 2.13 ships today, with several improvements:

- [Indexed search](https://docs.sourcegraph.com/admin/search#indexed-search) option for single-node Docker container deployment to speed up searches (previously Enterprise-only, now free and open-source)
- [More ways to specify which GitHub and GitHub Enterprise repositories to sync](https://docs.sourcegraph.com/admin/site_config/all#repositoryquery-array)
- [In-product documentation at `/help`](https://docs.sourcegraph.com/dev/documentation#sourcegraph-help)
- [Per-user repository permissions](https://docs.sourcegraph.com/admin/repo/permissions) for GitLab, with more code hosts coming soon [Enterprise]
- [Support for multiple authentication providers](https://docs.sourcegraph.com/admin/auth) [Enterprise]
- Many smaller fixes listed in the [CHANGELOG](https://github.com/sourcegraph/sourcegraph/blob/master/CHANGELOG.md#213)

We're also shipping Sourcegraph extensions that add other new features:

- [Whole-file Git blame annotations](https://sourcegraph.com/extensions/sourcegraph/git-extras)
- New search keywords for finding places where a package/module is used:
  - [`go.imports:PACKAGE`](https://sourcegraph.com/extensions/sourcegraph/go-imports-search)
  - [`js.depends:MODULE`](https://sourcegraph.com/extensions/sourcegraph/js-dependency-search)
  - [`py.imports:PACKAGE`](https://sourcegraph.com/extensions/sourcegraph/python-imports-search) 
  - [`java.imports:DOTTED_CLASS`](https://sourcegraph.com/extensions/sourcegraph/java-imports-search) 
  - [`php.imports:DOTTED_CLASS`](https://sourcegraph.com/extensions/sourcegraph/php-imports-search) 
- New [`org:GITHUB_ORG` search keyword](https://sourcegraph.com/extensions/sourcegraph/org-search) to search among a GitHub organization's repositories
- [Basic code intelligence](https://sourcegraph.com/extensions/sourcegraph/basic-code-intel) for definitions and references using text search heuristics (non-precise, non-compiler-based)
- [Sourcegraph extension authoring guide](https://github.com/sourcegraph/sourcegraph-extension-docs)

To enable these extensions on your Sourcegraph instance, visit **User menu > Extensions**. See [Sourcegraph extensions documentation](https://docs.sourcegraph.com/extensions#usage) for more information.

**Ready to get Sourcegraph 2.13?** [Install](https://docs.sourcegraph.com/#quickstart) or [update](https://docs.sourcegraph.com/admin/updates) now.

## Thank you

Thank you to the [open-source contributors](https://github.com/sourcegraph/sourcegraph) who helped make Sourcegraph even better:

- [@faec](https://github.com/faec): support advanced `repositoryQuery` specification for which GitHub repositories to sync ([PR #482](https://github.com/sourcegraph/sourcegraph/pull/482))
- [@lukeautry](https://github.com/lukeautry): offline support for JSON Schema resolution ([PR #550](https://github.com/sourcegraph/sourcegraph/pull/550)), fix invalid elapsedMilliseconds ([PR #551](https://github.com/sourcegraph/sourcegraph/pull/551))
- [@jeroenherczeg](https://github.com/jeroenherczeg): fix documentation links ([PR #471](https://github.com/sourcegraph/sourcegraph/pull/471))
- [@jlangston](https://github.com/jlangston): fix README links ([PR #453](https://github.com/sourcegraph/sourcegraph/pull/453))
- [@yevbar](https://github.com/yevbar): default color theme ([PR #409](https://github.com/sourcegraph/sourcegraph/pull/409))
- [@ianlopshire](https://github.com/ianlopshire): use external URLs ([PR #269](https://github.com/sourcegraph/sourcegraph/pull/269))

## Next up: Sourcegraph 3.0 preview

We're hard at work on the next major release, Sourcegraph 3.0. It will significantly improve language support for code intelligence, simplify deployment and site configuration, improve debuggability of code host integrations, and allow much more extensibility (including searching other types of things, such as GitHub issues and PR comments, rendered documentation, and log data). See the next couple months on the [Sourcegraph product roadmap](https://docs.sourcegraph.com/dev/roadmap#november-2018) for more details.

A preview release (`3.0-preview`) will be ready in early November. If you're on Sourcegraph 2.x, you should update to 2.13 now (and wait until the non-preview release of 3.0 to update to 3.0).