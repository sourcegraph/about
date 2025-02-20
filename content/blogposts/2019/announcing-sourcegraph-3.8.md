---
title: "Sourcegraph 3.8: Search UI improvements, monitoring tools, code change campaigns, and LSIF-based code intelligence"
authors:
  - name: Christina Forney
    url: https://handbook.sourcegraph.com/team/#christina-forney
publishDate: 2019-09-20T10:00-07:00
tags: [
  blog
]
slug: sourcegraph-3.8
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
description: "Sourcegraph 3.8: Search UI improvements, monitoring tools, code change campaigns, and LSIF-based code intelligence"
---

Sourcegraph is the standard developer platform for code search and navigation at many of the largest and most advanced technology companies. With Sourcegraph, every company has access to the same kind of tools that Google and Facebook developers use every day.

We're excited to announce Sourcegraph 3.8. This release contains lots of behind the scenes work, both foundational and forward-looking.

<div style={{paddingLeft: '2rem'}}>

[**🤖 Introducing code change management campaigns**](#introducing-code-change-management-campaigns)<br />
Learn more about new functionality that is coming soon to Sourcegraph!

[**🧠 Beta release of fast and precise LSIF-based code intelligence**](#beta-release-of-fast-and-precise-lsif-based-code-intelligence)<br />
Faster, more precise code intelligence for TypeScript, Go, Python, and C/C++.

[**🔎 Search result tabs for improved result type discoverability**](#search-result-tabs-for-improved-result-type-discoverability)<br />

[**📊 Out of the box monitoring of your Sourcegraph instance**](#out-of-the-box-monitoring-of-your-sourcegraph-instance)<br />

[**📉 Behind the scenes: Even more benchmarking, automated testing, and QA**](#behind-the-scenes-even-more-benchmarking-automated-testing-and-qa)<br />

[**🔦 Quickly toggle the browser extension on/off**](#quickly-toggle-the-browser-extension-onoff)<br />

[**📝 Changelog**](#changelog)<br />
Every detail that changed in this release.

[**🎖️ Thank you**](#thank-you)<br />
Sourcegraph couldn't be what it is without the community.

</div>

**Deploy or upgrade:** [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

## Introducing code change management campaigns

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/355392896?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/355392896" target="_blank">View on Vimeo</a></p>
</div>

Soon, you can [use Sourcegraph for large-scale code change campaigns](https://about.sourcegraph.com/product/code-change-management) to remove legacy code, fix critical security issues, and pay down tech debt across all of your repositories.

Code change management campaigns are in private beta. [Watch the code change management screencasts](https://about.sourcegraph.com/product/code-change-management#see-it-in-action) to see what we have planned, and [apply for early access](https://about.sourcegraph.com/contact/request-code-change-management-demo/) to this feature.

## Beta release of fast and precise LSIF-based code intelligence

[LSIF code intelligence comparison](/blog/3.8-lsif.png "LSIF code intelligence comparison")

Each Sourcegraph instance ships with basic code intelligence that provides jump to definition and find references for every language. Basic code intelligence works well for many of our customers, but some customers have been asking for more precise code intelligence. Language servers provide precise code intelligence, but they are complex to configure, require separate deployment, and are slow to initialize, so we have added support for LSIF based code intelligence.

Our solution to fast and precise code intelligence is with LSIF. We first wrote about LSIF (Language Server Index Format) in [code intelligence using LSIF](/go/code-intelligence-with-lsif/). This blogpost gives an overview of what LSIF is, and why we are working to support it.

In Sourcegraph 3.8, LSIF-backed code intelligence is available for beta testing by early adopters. The currently supported languages (ones with LSIF indexers) are [TypeScript](https://github.com/microsoft/lsif-node), [Go](https://github.com/sourcegraph/lsif-go), [Python](https://github.com/sourcegraph/lsif-py), and [C/C++](https://github.com/sourcegraph/lsif-cpp). Check out the documentation for [details on how to try it out on your code](https://docs.sourcegraph.com/code_intelligence/explanations/precise_code_intelligence).

## Search result tabs for improved result type discoverability

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/361355622?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/361355622" target="_blank">View on Vimeo</a></p>
</div>

Many users were not aware of the different search result types that are supported by Sourcegraph, such as diff or symbol results. We have added tabs to the search results page to surface the different result types and make it quick and easy to navigate between them.

## Out of the box monitoring of your Sourcegraph instance

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/361342137?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/361342137" target="_blank">View on Vimeo</a></p>
</div>

Sourcegraph 3.8 introduces out of the box access to monitoring tools for admins to keep tabs on the health of your Sourcegraph instance. Sourcegraph now ships with Grafana and Prometheus built-in, and some basic dashboards for better debugging of your instance. We will continue to work on improving the dashboards and metrics surfaced in the next release, with the goal of providing an accurate view of the health of your instance.

## Behind the scenes: Even more benchmarking, automated testing, and QA

Over the last few releases we have worked on improving Sourcegraph's performance at scale for customers with 30k+ repositories, and we continue to do so. With each major improvement we make to search, we're now running even more extensive end-to-end load tests to verify our improvements. These load tests enable us to quickly gather and analyze approximately one million search API requests, and automatically generate reports we can interpret and learn from:

[search performance benchmarks](/blog/3.8-benchmarks.png "search performance benchmarks")

We now have greater confidence rolling out search performance improvements. For example, in just the past two Sourcegraph releases we've used this same methodology to validate and roll out changes that have resulted in:

- _v3.6.2 had a 20-99% improvement in text search performance_ ([full load test comparison](https://docs.google.com/spreadsheets/d/1X-9NcQ76AAVnnVNA0shAiiV6reehmLjeOTsqGv82-5c/edit#gid=1810392049)).

- _v3.7.2 had a 20x improvement to symbol search performance on large instances_ ([full load test comparison](https://docs.google.com/spreadsheets/d/1oPzePjD8YLrnppLm3nk46h48_Cxipz4_QqRMBYaIOYQ/edit#gid=724417824)).

We've also been hard at work automating even more of our internal testing and QA process that we perform as part of each release. If you haven't upgraded recently and seen these major improvements, there is no better time than now!

## Quickly toggle the browser extension on/off

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/361358653?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/361358653" target="_blank">View on Vimeo</a></p>
</div>

You can now toggle the browser extension on and off without having to fully disable the extension. This was added to make testing and personal workflows easier for users to quickly opt in and out of the extension capabilities.

## Changelog

### 3.8.0

#### Added

- A toggle button for browser extension to quickly enable/disable the core functionality without actually enable/disable the entire extension in the browser extension manager.
- Tabs to easily toggle between the different search result types on the search results page.

#### Changed

- A `hardTTL` setting was added to the [Bitbucket Server `authorization` config](https://docs.sourcegraph.com/integration/bitbucket_server). This setting specifies a duration after which a user's cached permissions must be updated before any user action is authorized. This contrasts with the already existing `ttl` setting which defines a duration after which a user's cached permissions will get updated in the background, but the previously cached (and now stale) permissions are used to authorize any user action occurring before the update concludes. If your previous `ttl` value is larger than the default of the new `hardTTL` setting (i.e. **3 days**), you must change the `ttl` to be smaller or, `hardTTL` to be larger.
- Sourcegraph now receives [pings](https://docs.sourcegraph.com/admin/pings) on which extensions are activated from Sourcegraph.com.

#### Removed

- The `statusIndicator` feature flag has been removed from the site configuration's `experimentalFeatures` section. The status indicator has been enabled by default since 3.6.0 and you can now safely remove the feature flag from your configuration.

### 3.7.2

#### Added

- A [migration guide for Sourcegraph v3.7+](https://docs.sourcegraph.com/@3.18/admin/migration/3_7).

#### Fixed

- Fixed an issue where some repositories with very long symbol names would fail to index after v3.7.
- We now retain one prior search index version after an upgrade, meaning upgrading AND downgrading from v3.6.2 -> v3.7.2 is now 100% seamless and involves no downtime or negated search performance while repositories reindex. Please refer to the [v3.7+ migration guide](https://docs.sourcegraph.com/@3.18/admin/migration/3_7) for details.

### 3.7.1

#### Fixed

- When re-indexing repositories, we now continue to serve from the old index in the meantime. Thus, you can upgrade to 3.7.1 without downtime.
- Indexed symbol search is now faster, as we've fixed a performance issue that occurred when many repositories without any symbols existed.
- Indexed symbol search now uses less disk space when upgrading directly to v3.7.1 as we properly remove old indexes.

The [changelog for this and previous releases](https://github.com/sourcegraph/sourcegraph/blob/main/CHANGELOG.md#380) is available on GitHub.

## Thank you

Thank you to the many people who contributed to Sourcegraph since the last release!

- [@Matgek](https://github.com/Matgek)
- [@dwgillies](https://github.com/dwgillies)
- [@JoshuaKGoldberg](https://github.com/JoshuaKGoldberg)
- [@anishhegde](https://github.com/anishhegde)
- [@morya](https://github.com/morya)
- [@danielpops](https://github.com/danielpops)
- [@ceecurvin](https://github.com/ceecurvin)
- [@kevachen](https://github.com/kevachen)
- [@shyim](https://github.com/shyim)
- [@cosmonot1](https://github.com/cosmonot1)
- [@b-j-p](https://github.com/b-j-p)
- [@nikhildahake](https://github.com/nikhildahake)
- [@abeyerpath](https://github.com/abeyerpath)
- [@Warchant](https://github.com/Warchant)
- [@exoego](https://github.com/exoego)
- [@dobrou](https://github.com/dobrou)
- [@amarsiingh](https://github.com/amarsiingh)

**Deploy or upgrade:** [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

From the entire Sourcegraph team ([@sourcegraph](https://twitter.com/sourcegraph)), happy coding!
