---
title: 'Sourcegraph 3.6: Bitbucket Server plugin, search performance improvements, and quick links'
authors:
  - name: Christina Forney
    url: https://handbook.sourcegraph.com/team/#christina-forney
publishDate: 2019-07-20T10:00-07:00
tags: [
  blog
]
slug: sourcegraph-3.6
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
description: 'Sourcegraph 3.6: Bitbucket Server plugin, search performance improvements, and quick links'
---

Sourcegraph is the standard developer platform for code search and navigation at many of the largest and most exacting technology companies. With Sourcegraph, every company has access to the same kind of tools that Google and Facebook developers use every day.

<div style={{paddingLeft: '2rem'}}>

[**🌎 Native code intelligence with Sourcegraph Bitbucket Server plugin**](#native-code-intelligence-with-sourcegraph-bitbucket-server-plugin)<br />

[**📉 30% indexed search latency improvement for small and medium instances**](#30-indexed-search-latency-improvement-for-small-and-medium-instances)<br />

[**🔗 New customizable quick links for frequently used code searches or other URLs**](#new-customizable-quick-links-for-frequently-used-code-searches-or-other-urls)<br />

[**☁️ New repository syncing support for Bitbucket Cloud**](#new-repository-syncing-support-for-bitbucket-cloud)<br />

[**🛠 Improved repository syncing progress UI**](#improved-repository-syncing-progress-ui)<br />

[**🙅‍♀️ Exclude rules for GitHub repository sync configuration now support regexp**](#exclude-rules-for-github-repository-sync-configuration-now-support-regexp)<br />

[**✈️ Meet the team at GopherCon 2019!**](#meet-the-team-at-gophercon-2019)<br />

[**📝 Changelog**](#36-changelog)<br />

[**🎖️ Thank you**](#thank-you)<br />

</div>

**Deploy or upgrade:** [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

## Native code intelligence with Sourcegraph Bitbucket Server plugin

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/350033114?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/350033114" target="_blank">View on Vimeo</a></p>
</div>

The [Sourcegraph for Bitbucket Server plugin](https://github.com/sourcegraph/bitbucket-server-plugin) is now available for installation on Bitbucket Server instances to provide native code intelligence automatically. Code intelligence, previously available only through the browser extension, includes hovers, tooltips, go to definition, and custom line decorations when browsing and reviewing code on Bitbucket Server instances.

There are two configuration steps:

1. Install the [Sourcegraph for Bitbucket Server plugin](https://github.com/sourcegraph/bitbucket-server-plugin)
2. Update the [Bitbucket Server external service configuration](https://docs.sourcegraph.com/admin/external_service/bitbucket_server#native-extension) in your Sourcegraph instance to include `”corsOrigin”: “<bitbucket server url>”`

## 30% indexed search latency improvement for small and medium instances

![chart showing 30% improvement of search latency](/blog/3.6-search-latency.png "30% improvement of search latency")

We have improved our search algorithm's performance and reduced peak memory usage. Our benchmarks show that the **99th percentile latency** of indexed searches in small to medium instances (less than 3000 repositories) **is reduced by up to 30%**. We will be continuing work to further benchmark and optimize Sourcegraph for our customers with 30,000+ repositories.

## New customizable quick links for frequently used code searches or other URLs

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/349147319?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/349147319" target="_blank">View on Vimeo</a></p>
</div>

[Quick links](https://docs.sourcegraph.com/getting-started/personalization/quick_links) can now be added below the search bar on the home and search results pages. They can be used for quickly accessing frequently used URLs such as a code search, main repository, or external resources like your CI system or team documentation.

Quick links can be defined at the global, organization, and user level using the `quicklinks` field:

```json
{
  // ...
  "quicklinks": [
    // An external doc resource
    {
      "name": "Sourcegraph docs",
      "url": "https://docs.sourcegraph.com"
    },
    // The main repository for your organization
    {
      "name": "Main repository",
      "url": "/github.com/sourcegraph/sourcegraph"
    },
    // A commonly used search (all CHANGELOG updates)
    {
      "name": "Changelog updates",
      "url": "/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+file:changelog.md+type:diff"
    }
  ]
  // ...
}
```

## New repository syncing support for Bitbucket Cloud

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/349145191?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/349145191" target="_blank">View on Vimeo</a></p>
</div>

Sourcegraph 3.6 now supports repository syncing for [Bitbucket Cloud](https://docs.sourcegraph.com/admin/external_service/bitbucket_cloud). In this initial release, all repositories accessible by the token for the user (including from teams listed in the config) will be synced. Support for excluding repositories and for adding public repositories is coming in a future version.

## Improved repository syncing progress UI

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/343706613?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/343706613" target="_blank">View on Vimeo</a></p>
</div>

Applying an external service configuration change is now done in the background upon saving, with progress information available to admins by clicking the syncing status indicator on the global navigation bar.

The repository syncing status indicator announced in 3.5 has been improved to support instances with 30,000+ repositories and to only show the number of repositories remaining to be cloned. This UI feature is now shown to all site admins.

## Exclude rules for GitHub repository sync configuration now support regexp

The `github.exclude` field for the [GitHub external service](https://docs.sourcegraph.com/admin/external_service/github#configuration) now supports the use of regular expressions using `{"pattern": "^topsecretrepogroup/.*"}`.

Now, entire groups of repositories such as those containing secrets, can be excluded in a single regexp instead of manually entering the name or id for each repository.

## Meet the team at GopherCon 2019!

Our remote-first team from around the world is coming together at GopherCon next week. We are looking forward to seeing our friends in the Go community, so make sure to find us while you’re there! You can find a Sourcegrapher by spotting someone wearing one of these hoodies:

![Sourcegraph GopherCon hoodie](/blog/3.6-gophercon-hoodie.jpg "Sourcegraph GopherCon hoodie")

## 3.6 Changelog

### Added

- The `github.exclude` setting in [GitHub external service config](https://docs.sourcegraph.com/admin/external_service/github#configuration) additionally allows you to specify regular expressions with `{"pattern": "regex"}`.
- A new [`quicklinks` setting](https://docs.sourcegraph.com/getting-started/personalization/quick_links) allows adding links to be displayed on the homepage and search page for all users (or users in an organization).
- Compatibility with the [Sourcegraph for Bitbucket Server](https://github.com/sourcegraph/bitbucket-server-plugin) plugin.
- Support for [Bitbucket Cloud](https://bitbucket.org) as an external service.

### Changed

- Updating or creating an external service will no longer block until the service is synced.
- The GraphQL fields `Repository.createdAt` and `Repository.updatedAt` are deprecated and will be removed in 3.8. Now `createdAt` is always the current time and updatedAt is always null.
- In the [GitHub external service config](https://docs.sourcegraph.com/admin/external_service/github#configuration) and [Bitbucket Server external service config](https://docs.sourcegraph.com/admin/external_service/bitbucket_server#permissions) `repositoryQuery` is now only required if `repos` is not set.
- Log messages from query-runner when saved searches fail now include the raw query as part of the message.
- The status indicator in the navigation bar is now enabled by default
- Usernames and org names can now contain the `.` character. [#4674](https://github.com/sourcegraph/sourcegraph/issues/4674)

### Fixed

- Commit searches now correctly highlight unicode characters, for example 加. [#4512](https://github.com/sourcegraph/sourcegraph/issues/4512)
- Symbol searches now show the number of symbol matches rather than the number of file matches found. [#4578](https://github.com/sourcegraph/sourcegraph/issues/4578)
- Symbol searches with truncated results now show a `+` on the results page to signal that some results have been omitted. [#4579](https://github.com/sourcegraph/sourcegraph/issues/4579)

## Thank you

Thank you to the many people who contributed to Sourcegraph since the last release!

- [@abeyerpath](https://github.com/abeyerpath)
- [@PostPollux](https://github.com/PostPollux)
- [@devil418](https://github.com/devil418)
- [@ceecurvin](https://github.com/ceecurvin)
- [@dwgillies](https://github.com/dwgillies)
- [@yevbar](https://github.com/yevbar)
- [@alanhamlett](https://github.com/alanhamlett)
- [@linknum23](https://github.com/linknum23)

---

**Deploy or upgrade:** [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

From the entire Sourcegraph team ([@sourcegraph](https://twitter.com/sourcegraph)), happy coding!
