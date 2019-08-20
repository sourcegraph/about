---
title: 'Sourcegraph 3.7: Improved performance, efficiency, accuracy, and reliability'
author: Christina Forney
publishDate: 2019-08-20T10:00-07:00
tags: [
  blog
]
slug: sourcegraph-3.7
heroImage: https://about.sourcegraph.com/sourcegraph-mark.png
published: true
---

[Sourcegraph](https://about.sourcegraph.com/) is the standard developer platform for code search and navigation at many of the largest and most exacting technology companies. With Sourcegraph, every company has access to the same kind of tools that Google and Facebook developers use every day.

<div style="padding-left: 2rem">

[**🏎 Symbol search performant at scale**](#symbol-search-performant-at-scale)<br />
Symbol searches are now indexed for default branches.

[**🔎 Search performance, efficiency, and reliability**](#search-performance-efficiency-and-reliability)<br />
Speed improvements for `repohasfile:`, more frequent garbage collections, and support for unicode search results.

[**🧠 More accurate TypeScript code intelligence**](#more-accurate-typescript-code-intelligence)<br />
Jump to definition is more accurate, with fewer false positives.

[**🐇 Improved efficiency of Git requests**](#improved-efficiency-of-git-requests)<br />
Git requests use protocol version 2 where possible, increasing request efficiency to your code host.

[**⏎ Multi-line (`\n`) search on all branches**](#multi-line-code-classlanguage-textncode-search-on-all-branches)<br />

[**🧩 Language extensions get icons**](#language-extensions-get-icons)<br />

[**🛠️ Sourcegraph configuration temporary overrides in the UI**](#sourcegraph-configuration-temporary-overrides-in-the-ui)<br />
Admins can now override config files temporarily to test out changes.

[**👀 In case you missed it...**](#in-case-you-missed-it)<br />
Other Sourcegraph updates.

[**📝 Changelog**](#changelog)<br />
Every detail that changed in this release.

[**🎖️ Thank you**](#thank-you)<br />
Sourcegraph couldn't be what it is without the community.

</div>

**Deploy or upgrade:** [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

## Symbol search performant at scale

<p class="container">
  <div style="padding:56.25% 0 0 0;position:relative;">
    <iframe src="https://player.vimeo.com/video/354904682?color=0CB6F4&amp;title=0&amp;byline=" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
  </div>
  <p style="text-align: center"><a href="https://vimeo.com/354904682" target="_blank">View on Vimeo</a></p>
</p>

Symbol search (`type:symbol`) is a powerful feature for finding specific symbols, such as a function, variable, or package, and not just all text occurrences of your query. More and more users are taking advantage of symbol search results, which was leading to performance issues for some users with large instances. **[Symbol search is now indexed](https://docs.sourcegraph.com/admin/config/site_config#search-index-symbols-enabled) for default branches**, which will be a major improvement for both users running symbol searches, and the users with large instances who were having performance issues.

<div class="alert alert-warning">
  <h4 class="alert-heading">Deployment note</h4>
  <p> We recommend you perform this upgrade after hours, because upon upgrading, Sourcegraph will automatically re-index all your repositories, which may take several (up to 12) hours depending on the size of your instance. During the reindex, search will continue to function, but will be un-indexed resulting in slower searches. You can monitor the reindex status at <a href="https://sourcegraph.example.com/site-admin/repositories?filter=needs-index">https://sourcegraph.example.com/site-admin/repositories?filter=needs-index</a>.</p>
  
  <p>This update is enabled by default, but if you would like to opt-out of adding symbols to your index, you can set <code class="language-text">"search.index.symbols.enabled": false</code> in your site config. <strong>A re-index is required for all instances due to the index structure change, even if symbols are disabled.</strong></p>

  <hr />

  <h4>Instance resourcing</h4>
  <p class="mb-0">This change will increase the memory resources required by your Sourcegraph instance by approximately 10% (This is an estimated number and we are running some final benchmarks to determine a recommendation and will update this post by 8/21/2019).</p>
</div>

## Search performance, efficiency, and reliability

![search speed comparison](images/3.7-symbol-search-comparison.png "search speed comparison")

As we continue to make incremental improvements, Sourcegraph search is getting faster, more efficient, and more reliable across the board. In Sourcegraph 3.7:

- [Symbol search is now performant at scale (see above)](#symbol-search-performant-at-scale)
- Searches making use of the `repohasfile:` filter are now faster.
- The indexed-search code path, Zoekt, now runs garbage collections twice as frequently, which reduces Sourcegraph's memory consumption.
- We’ve improved support for Unicode search results, so that [combined characters now highlight properly](https://github.com/sourcegraph/sourcegraph/issues/4791#issuecomment-510203777).

## More accurate TypeScript code intelligence

<!--
<p class="container">
  <div style="padding:56.25% 0 0 0;position:relative;">
    <iframe src="https://player.vimeo.com/video/{ID}?color=0CB6F4&amp;title=0&amp;byline=" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
  </div>
  <p style="text-align: center"><a href="https://vimeo.com/{ID}" target="_blank">View on Vimeo</a></p>
</p>
-->

Out-of-the-box TypeScript code intelligence has been improved with an updated ctags version that includes a built-in TypeScript parser. This means that jump to definition is more accurate for TypeScript files, and the symbols sidebar recognizes more functions and variables with fewer false positives.

## Improved efficiency of Git requests

We now use Git protocol version 2 with compatible code hosts. This can significantly increase the efficiency and performance of a `git fetch` by reducing the amount of data transmitted over the wire, especially when Sourcegraph’s copy is only a few commits behind the remote (a common situation).

As an illustrative example, when Git protocol version 2 is used, `git fetch` on an up-to-date clone of [Kubernetes](https://github.com/kubernetes/kubernetes) is up to 2x faster and consumes up to 4x less client CPU (averaged across 10 runs on a 2015 MacBook Pro).

You can read [this blog post](https://opensource.googleblog.com/2018/05/introducing-git-protocol-version-2.html) for more technical details and performance measurements.

## Multi-line (`\n`) search on all branches

In Sourcegraph 3.5 [we introduced the ability to do a multi-line search in](https://about.sourcegraph.com/blog/sourcegraph-3.5#multi-line-search-with-newline-code-classlanguage-textncode-characters) by using `\n` in queries, however it was limited to only indexed default (e.g. `master`) branches. In 3.7 we expand this option to include unindexed branches so **you can now perform multi-line searches on any branch**.

For example, [watch for commits containing empty `if` and `else` statements in pull requests](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24%40*refs/heads/+lang:go+file:.*auth.go%24+if%7Celse+%5C%7B%5Cs*%5Cn%5Cs*%5C%7D+type:diff+count:100).

```
repo:^github\.com/sourcegraph/sourcegraph$@*refs/heads/ lang:go file:.*auth.go$ if|else \{\n\s*\} type:diff count:100
```

## Language extensions get icons

![extension registry](images/3.7-extension-icons.png "extension registry")

Icons have been added to the language extensions in the extension registry, and will soon be added to the external service extensions, such as Codecov and Sentry.

## Sourcegraph configuration temporary overrides in the UI

Sourcegraph 3.4 [introduced an optional way to load Sourcegraph configuration from a file or Kubernetes config map](https://about.sourcegraph.com/blog/sourcegraph-3.4#optional-loading-of-configuration-from-the-file-system-or-kubernetes-configmap). It is helpful for teams with Sourcegraph as a critical piece of infrastructure, to be able to check the Sourcegraph configuration into version control. We received feedback that it would be nice to be able to make temporary edits in the web UI and diverge from the files on disk intentionally (i.e. to try an option out before committing it).

You can now set `EXTSVC_CONFIG_ALLOW_EDITS=true` and `SITE_CONFIG_ALLOW_EDITS=true` to allow the active Sourcegraph configuration to diverge from the file, thus allowing temporary edits. For complete details, see [the documentation](https://docs.sourcegraph.com/admin/config/advanced_config_file).

## In case you missed it...

<a href="/go"/>
  <img src="https://about.sourcegraph.com/gophercon-2019/gophercon-2019-banner.png" alt="GopherCon liveblog San Diago 2019" />
</a>  

We were proud to host the official [liveblog for GopherCon 2019](/go), and all 28 talks are now live.

Some of our favorites were:

- [Two Go programs, three different profiling techniques, in 50 minutes](/go/gophercon-2019-two-go-programs-three-different-profiling-techniques-in-50-minutes) by [Dave Cheney](https://twitter.com/davecheney)
- [Generics in Go](/go/gophercon-2019-generics-in-go) by Ian Lance Taylor
- [Get Going with Web Assembly](/go/gophercon-2019-get-going-with-webassembly) by [Johan Brandhorst](https://twitter.com/JohanBrandhorst)
- [How Uber "Go"es](/go/gophercon-2019-how-uber-go-es) by [Elena Morozova](https://twitter.com/lelenanam)

[Check out the rest of the talks!](/go/)

## Changelog

### 3.7.0

#### Added

- Indexed search now supports symbol queries. This feature will require re-indexing all repositories. This will increase the disk and memory usage of indexed search by roughly 10%. You can disable the feature with the configuration `search.index.symbols.enabled`. [#3534](https://github.com/sourcegraph/sourcegraph/issues/3534)
- Multi-line search now works for non-indexed search. [#4518](https://github.com/sourcegraph/sourcegraph/issues/4518)
- When using `SITE_CONFIG_FILE` and `EXTSVC_CONFIG_FILE`, you [may now also specify e.g. `SITE_CONFIG_ALLOW_EDITS=true`](https://docs.sourcegraph.com/admin/config/advanced_config_file) to allow edits to be made to the config in the application which will be overwritten on the next process restart. [#4912](https://github.com/sourcegraph/sourcegraph/issues/4912)

#### Changed

- In the [GitHub external service config](https://docs.sourcegraph.com/admin/external_service/github#configuration) it's now possible to specify `orgs` without specifying `repositoryQuery` or `repos` too.
- Out-of-the-box TypeScript code intelligence is much better with an updated ctags version with a built-in TypeScript parser.
- Sourcegraph uses Git protocol version 2 for increased efficiency and performance when fetching data from compatible code hosts.
- Searches with `repohasfile:` are faster at finding repository matches. [#4833](https://github.com/sourcegraph/sourcegraph/issues/4833).
- Zoekt now runs with GOGC=50 by default, helping to reduce the memory consumption of Sourcegraph. [#3792](https://github.com/sourcegraph/sourcegraph/issues/3792)
- Upgraded the version of Go in use, which improves security for publicly accessible Sourcegraph instances.

#### Fixed

- Disk cleanup in gitserver is now done in terms of percentages to fix [#5059](https://github.com/sourcegraph/sourcegraph/issues/5059).
- Search results now correctly show highlighting of matches with runes like 'İ' that lowercase to runes with a different number of bytes in UTF-8 [#4791](https://github.com/sourcegraph/sourcegraph/issues/4791).
- Fixed an issue where search would sometimes crash with a panic due to a nil pointer. [#5246](https://github.com/sourcegraph/sourcegraph/issues/5246)

### 3.6.2

#### Fixed

- Fixed Phabricator external services so they won't stop the syncing process for repositories when Phabricator doesn't return clone URLs. [#5101](https://github.com/sourcegraph/sourcegraph/pull/5101)

### 3.6.1

#### Added

- New site config option `branding.brandName` configures the brand name to display in the Sourcegraph \<title\> element.
- `repositoryPathPattern` option added to the "Other" external service type for repository name customization.

The [changelog for this and previous releases](https://github.com/sourcegraph/sourcegraph/blob/master/CHANGELOG.md#370) is available on GitHub.

## Thank you

Thank you to the many people who contributed to Sourcegraph since the last release!

- [@YouveGotMeowxy](https://github.com/YouveGotMeowxy)
- [@thinktopdown](https://github.com/thinktopdown)
- [@JoseFdri](https://github.com/JoseFdri)
- [@wxio](https://github.com/wxio)
- [@abeyerpath](https://github.com/abeyerpath)
- [@asinwang](https://github.com/asinwang)
- [@marco-c](https://github.com/marco-c)
- [@Warchant](https://github.com/Warchant)
- [@pplanel](https://github.com/pplanel)
- [@VeselaHouba](https://github.com/VeselaHouba)
- [@Phrohdoh](https://github.com/Phrohdoh)
- [@trollknurr](https://github.com/trollknurr)
- [@pheex](https://github.com/pheex)
- [@xingx-xx](https://github.com/xingx-xx)

**Deploy or upgrade:** [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

From the entire Sourcegraph team ([@srcgraph](https://twitter.com/srcgraph)), happy coding!
