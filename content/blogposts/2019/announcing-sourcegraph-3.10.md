---
title: "Sourcegraph 3.10: Improved search autocompletion, native GitLab integration, and search and replace campaigns"
authors:
  - name: Christina Forney
    url: https://handbook.sourcegraph.com/team/#christina-forney
publishDate: 2019-11-20T10:00-07:00
tags: [blog]
slug: sourcegraph-3.10
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
description: "Sourcegraph 3.10: Improved search autocompletion, native GitLab integration, and search and replace campaigns"
---

Sourcegraph is the standard developer platform for code search and navigation at many of the largest and most advanced technology companies. With Sourcegraph, every company has access to the same kind of tools that Google and Facebook developers use every day.

<div style={{paddingLeft: '2rem'}}>

[**🔬 Improved autocompletion for search query filters**](#improved-autocompletion-for-search-query-filters)<br />

[**🦊 Sourcegraph provides native code intelligence to GitLab**](#sourcegraph-provides-native-code-intelligence-to-gitlab)<br />

[**🤖 Create cross-repository search and replace campaigns**](#create-cross-repository-search-and-replace-campaigns)<br />

[**🧠 Precise LSIF-based code intelligence for 5 languages**](#precise-lsif-based-code-intelligence-for-5-languages)<br />

[**🔎 Scaling search for our largest customers**](#scaling-search-for-our-largest-customers)<br />

[**📦 Fully automated release testing process**](#fully-automated-release-testing-process)<br />

[**📝 Changelog**](#changelog)<br />
Every detail that changed in this release

[**🎖️ Thank you**](#thank-you)<br />
Sourcegraph couldn't be what it is without the community.

</div>

**Deploy or upgrade:** [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

## Improved autocompletion for search query filters

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/374329715?color=0CB6F4&title=0&byline=&loop=1&autoplay=1" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/374329715" target="_blank">View on Vimeo</a></p>
</div>

Autocomplete suggestions make it easier to use filters in your Sourcegraph searches. Use `ctrl-space` to trigger suggestions for filters you can apply to your query. As you type, the suggestions become more relevant, helping you to apply correct filter options or autocomplete repository or file names.

## Sourcegraph provides native code intelligence to GitLab

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/372226334?color=0CB6F4&title=&byline=&loop=1&autoplay=1" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/372226334/de668e24fa" target="_blank">View on Vimeo</a></p>
</div>

Sourcegraph users use the [Sourcegraph browser extension](https://docs.sourcegraph.com/integration/browser_extension) to take advantage of go-to-definition and find references on their code hosts. GitLab recognizes the value this brings to developer productivity and has partnered with Sourcegraph to provide this functionality natively to all GitLab users. Read our [feature announcement](https://about.sourcegraph.com/blog/gitlab-integrates-sourcegraph-code-navigation-and-code-intelligence) and [GitLab's post](https://about.gitlab.com/blog/2019/11/12/sourcegraph-code-intelligence-integration-for-gitlab/) about collaborating in the open.

Soon, GitLab.com users will be able to opt-in to native code intelligence for public repositories by enabling Sourcegraph in their user preferences. This feature is being rolled out incrementally to public projects on GitLab.com, and will first be available on the [GitLab repository](https://gitlab.com/gitlab-org/gitlab).

Users with private GitLab instances or repositories can enable Sourcegraph code intelligence as of GitLab 12.5. Take a look at the [Sourcegraph integration documentation](https://gitlab.com/gitlab-org/gitlab/blob/master/doc/integration/sourcegraph.md) for how to configure it on your instance.

## Create cross-repository search and replace campaigns

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/374473021?color=0CB6F4&amp;title=0&amp;byline=" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/374473021" target="_blank">View on Vimeo</a></p>
</div>

Sourcegraph now supports creating and tracking code-aware search and replace campaigns on GitHub and Bitbucket Server. When running a search and replace campaign, you can preview the changes across repositories and then generate the corresponding pull requests on your GitHub and Bitbucket Server instances. Once created, you can track the PRs to completion in a burndown chart.

Sourcegraph is introducing [Comby syntax](https://comby.dev/#basic-usage) for automated search and replace campaigns. Comby syntax is code-aware and simplifies finding patterns in code. This new capability makes operations that could require complex or awkward regexp queries much simpler to write.

For example, to change how errors are logged throughout your code, like in [this commit in the Go source](https://github.com/golang/go/commit/3507551a1f0d34d567d77242b68bf19b00caf9b7):

```Go
// match:
errors.New(fmt.Sprintf(:[args]))

// replace:
fmt.Errorf(:[args])
```

Code change management campaigns are in private beta. [Watch the campaigns screencasts](https://about.sourcegraph.com/product/code-change-management#see-it-in-action) to see what we have planned, and [apply for early access](https://about.sourcegraph.com/contact/request-code-change-management-demo/) to campaigns for your organization.

## Precise LSIF-based code intelligence for 5 languages

With the completion of the Java LSIF indexer, LSIF-based precise code intelligence now supports five languages: Go, Typescript, Java, C++, and Python. See [lsif.dev](https://lsif.dev/) for the most up-to-date information on the list of languages with LSIF indexers.

We are looking for feedback from project owners interested in trying out precise code intelligence! Use our new [LSIF quickstart guide](https://docs.sourcegraph.com/code_intelligence/lsif_quickstart) to try it out manually before adding it as a step in your CI.

## Scaling search for our largest customers

Customers wanting better indexed search performance or wishing to add many more thousands of repositories to Sourcegraph are now in luck! Sourcegraph's indexed search can now scale horizontally in cluster deployments.

The Kubernetes [deployment manifest](https://github.com/sourcegraph/deploy-sourcegraph) for indexed-search services has changed from a Normal Service to a Headless Service. This enables Sourcegraph to individually resolve indexed-search pods. Services are immutable, so a [migration is required](https://github.com/sourcegraph/deploy-sourcegraph/blob/master/docs/migrate.md#310).

<Alert type="warning">
  <div>
    <strong>IMPORTANT: required migration for all Kubernetes deployments.</strong>
    Please see the <a href="https://github.com/sourcegraph/deploy-sourcegraph/blob/master/docs/migrate.md#310">3.10 migration guide</a> for details.
  </div>
</Alert>

## Fully automated release testing process

As part of Sourcegraph's ongoing commitment to providing the highest quality, stable releases, our manual QA process has in the last two months been turned into a fully automated regression testing suite. We continue to aggressively invest in automated testing of Sourcegraph to provide extremely stable and reliable releases, and ultimately better features for our users. Look forward to reading more about this in an upcoming blogpost from Sourcegraph CTO, Beyang Liu, [on our blog](https://about.sourcegraph.com/blog/).

## Changelog

## 3.10.0

### Added

- Indexed Search supports horizontally scaling. Instances with large number of repositories can update the `replica` field of the `indexed-search` StatefulSet. See [configure indexed-search replica count](https://github.com/sourcegraph/deploy-sourcegraph/blob/master/docs/configure.md#configure-indexed-search-replica-count). [#5725](https://github.com/sourcegraph/sourcegraph/issues/5725)
- Bitbucket Cloud external service supports `exclude` config option. [#6035](https://github.com/sourcegraph/sourcegraph/issues/6035)
- `sourcegraph/server` Docker deployments now support the environment variable `IGNORE_PROCESS_DEATH`. If set to true the container will keep running, even if a subprocess has died. This is useful when manually fixing problems in the container which the container refuses to start. For example a bad database migration.
- Search input now offers filter type suggestions [#6105](https://github.com/sourcegraph/sourcegraph/pull/6105).
- The keyboard shortcut <kbd>Ctrl</kbd>+<kbd>Space</kbd> in the search input shows a list of available filter types.

### Changed

- **Required Kubernetes Migration:** The [Kubernetes deployment](https://github.com/sourcegraph/deploy-sourcegraph) manifest for indexed-search services has changed from a Normal Service to a Headless Service. This is to enable Sourcegraph to individually resolve indexed-search pods. Services are immutable, so please follow the [migration guide](https://github.com/sourcegraph/deploy-sourcegraph/blob/master/docs/migrate.md#310).
- Fields of type `String` in our GraphQL API that contain [JSONC](https://komkom.github.io/) now have the custom scalar type `JSONCString`. [#6209](https://github.com/sourcegraph/sourcegraph/pull/6209)
- `ZOEKT_HOST` environment variable has been deprecated. Please use `INDEXED_SEARCH_SERVERS` instead. `ZOEKT_HOST` will be removed in 3.12.
- Directory names on the repository tree page are now shown in bold to improve readability.
- Added support for Bitbucket Server pull request activity to the [campaign](https://about.sourcegraph.com/product/code-change-management) burndown chart. When used, this feature leads to more requests being sent to Bitbucket Server, since Sourcegraph needs to keep track of how a pull request's state changes over time. With [the instance scoped webhooks](https://docs.google.com/document/d/1I3Aq1WSUh42BP8KvKr6AlmuCfo8tXYtJu40WzdNT6go/edit) in our [Bitbucket Server plugin](https://github.com/sourcegraph/bitbucket-server-plugin/pull/10) as well as up-coming [heuristical syncing changes](#6389), this additional load will be significantly reduced in the future.

### Fixed

- Support hyphens in Bitbucket Cloud team names. [#6154](https://github.com/sourcegraph/sourcegraph/issues/6154)
- Server will run `redis-check-aof --fix` on startup to fix corrupted AOF files. [#651](https://github.com/sourcegraph/sourcegraph/issues/651)
- Authorization provider configuration errors in external services will be shown as site alerts. [#6061](https://github.com/sourcegraph/sourcegraph/issues/6061)

### Removed

## 3.9.4

### Changed

- The experimental search pagination API's `PageInfo` object now returns a `String` instead of an `ID` for its `endCursor`, and likewise for the `after` search field. Experimental paginated search API users may need to update their usages to replace `ID` cursor types with `String` ones.

### Fixed

- The experimental search pagination API no longer omits a single repository worth of results at the end of the result set. [#6286](https://github.com/sourcegraph/sourcegraph/issues/6286)
- The experimental search pagination API no longer produces search cursors that can get "stuck". [#6287](https://github.com/sourcegraph/sourcegraph/issues/6287)
- In literal search mode, searching for quoted strings now works as expected. [#6255](https://github.com/sourcegraph/sourcegraph/issues/6255)
- In literal search mode, quoted field values now work as expected. [#6271](https://github.com/sourcegraph/sourcegraph/pull/6271)
- `type:path` search queries now correctly work in indexed search again. [#6220](https://github.com/sourcegraph/sourcegraph/issues/6220)

## 3.9.3

### Changed

- Sourcegraph is now built using Go 1.13.3 [#6200](https://github.com/sourcegraph/sourcegraph/pull/6200).

## 3.9.2

### Fixed

- URI-decode the username, password, and pathname when constructing Postgres connection paramers in lsif-server [#6174](https://github.com/sourcegraph/sourcegraph/pull/6174). Fixes a crashing lsif-server process for users with passwords containing special characters.

## 3.9.1

### Changed

- Reverted [#6094](https://github.com/sourcegraph/sourcegraph/pull/6094) because it introduced a minor security hole involving only Grafana.
  [#6075](https://github.com/sourcegraph/sourcegraph/issues/6075) will be fixed with a different approach.

The [changelog for this and previous releases](https://github.com/sourcegraph/sourcegraph/blob/main/CHANGELOG.md#3.10) is available on GitHub.

## Thank you

Thank you to the many people who contributed to Sourcegraph since the last release!

- [@prayashm](https://github.com/prayashm)
- [@abeyerpath](https://github.com/abeyerpath)
- [@gerbal](https://github.com/gerbal)
- [@jlangston](https://github.com/jlangston)
- [@425183525](https://github.com/425183525)
- [@kevachen](https://github.com/kevachen)
- [@brentshermana](https://github.com/brentshermana)

**Deploy or upgrade:** [Local](https://docs.sourcegraph.com/#quickstart-guide) | [AWS](https://github.com/sourcegraph/deploy-sourcegraph-aws) | [DigitalOcean](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) | [Kubernetes cluster](https://github.com/sourcegraph/deploy-sourcegraph)

From the entire [@sourcegraph](https://twitter.com/sourcegraph) team, happy coding!
