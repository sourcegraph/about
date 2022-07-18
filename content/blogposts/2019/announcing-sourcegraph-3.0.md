---
title: 'Announcing Sourcegraph 3.0'
authors:
  - name: Quinn Slack
    url: https://twitter.com/sqs
publishDate: 2019-02-08T05:59-06:00
tags: [
  "blog"
]
slug: sourcegraph-3.0
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
---

Sourcegraph 3.0 is now shipping! This release comes with *HUGE* improvements so you can search and navigate all your organization's code more quickly, with code intelligence (go-to-definition and find-references) for all languages.

What is Sourcegraph? Sourcegraph is an open source, self-hosted, cross-repository code search and navigation tool, with an efficient web interface and "feels-like-native" integration into your code host. [Install or upgrade Sourcegraph.](#install-or-upgrade)

Highlights of this release:

- [Code intelligence for all languages](#code-intelligence-for-all-languages): fast go-to-definition and find-references for code in any language, using text-based heuristics. Enabled by default!
- [Search query cheatsheet](#search-query-cheatsheet): click <kbd>?</kbd> next to the search button to see how to write search queries to find what you need.
- [More Sourcegraph extension APIs](#more-sourcegraph-extension-apis): add more features and info to code on Sourcegraph and your code host.
- [Extension registry improvements](#extension-registry-improvements): discover and manage Sourcegraph extensions.
- [Management console and site config improvements](#management-console-and-site-config-improvements): an easier, failsafe web interface for editing site config (works on clusters, too).
- [Deploy to more kinds of clusters](#deploy-to-more-kinds-of-clusters): if our existing 1-Docker-container or Kubernetes deployment schemes don't work for you.
- [Authentication and repository permissions from GitHub](#authentication-and-repository-permissions-from-github): allow user sign-in and enforce repository access permissions from GitHub or GitHub Enterprise.
- [Nginx-based HTTP server](#nginx-based-http-server): for ease of deployment, all HTTP configuration (TLS, listen ports, etc.) is now handled by Nginx instead of being built into Sourcegraph.
- [Faster page load times](#faster-page-load-times): 50% smaller initial bundle size.

Plus, there are several new and improved [Sourcegraph extensions](https://docs.sourcegraph.com/extensions):

- [Code intelligence for all languages](#code-intelligence-for-all-languages): fast go-to-definition and find-references for code in any language, using effective, zero-configuration heuristics when precise analysis is not configured. Enabled by default! (Also mentioned above.)
- [Datadog metrics](#datadog-metrics-extension): easily jump to Datadog metrics information from statsd calls in your code.
- [JavaScript/TypeScript language support](https://sourcegraph.com/extensions/sourcegraph/typescript)
- [Go language support](https://sourcegraph.com/extensions/sourcegraph/go)
- [Python language support](https://sourcegraph.com/extensions/sourcegraph/python)

Also, in case you missed it, [Sourcegraph is now open source](https://handbook.sourcegraph.com/community/faq) (Apache-licensed).

Want to hear about new features and releases as soon as they're available? Follow [@sourcegraph](https://twitter.com/sourcegraph).

Ready to [install or upgrade a self-hosted Sourcegraph instance](#install-or-upgrade)? You can also [try these features on Sourcegraph.com for open source code](https://sourcegraph.com).

## Highlights

### Code intelligence for all languages

Two of the most common questions developers have while reading code are:

- "Where is this thing defined?"
- "What calls/uses this thing?"

You can now answer these questions easily across all of your organization's code, with Sourcegraph's improved code intelligence (go-to-definition and find-references) for [N languages](https://sourcegraph.com/extensions?query=category%3A%22Programming+languages%22).

It works immediately for all code with zero configuration because it uses heuristics to provide fuzzy results by default. This is surprisingly helpful and fast, and it finds results in your other repositories, too.

Want precise results? Many of the [N language extensions](https://sourcegraph.com/extensions?query=category%3A%22Programming+languages%22) also can provide precise results, by building and analyzing the code like a compiler (using a language server). See each extension's page (such as the [TypeScript/JavaScript extension](https://sourcegraph.com/extensions/sourcegraph/typescript)) for details.

As long as you're aware of the limitations of the default (non-language server) mode, you'll like it lot. For example, in this mode, if multiple functions in your code are named `open`, the reference results for `open` will include false positives. (If it bothers you, run the extension's associated language server for precise results, or disable the language extension.)

For the most popular languages, the new language extensions are enabled by default on [Sourcegraph.com](https://sourcegraph.com) and self-hosted instances on Sourcegraph 3.0.

[See it in action on Sourcegraph.com:](https://sourcegraph.com/github.com/python/cpython@3607ef43c4a1a24d44f39ff54a77fc0af5bfa09a/-/blob/Lib/json/__init__.py#L110:20&tab=references)

[![Basic code intelligence for all languages](/blog/announcing-sourcegraph-3.0/basic_code_intel.png)](https://sourcegraph.com/github.com/python/cpython@3607ef43c4a1a24d44f39ff54a77fc0af5bfa09a/-/blob/Lib/json/__init__.py#L110:20&tab=references)

### Search query cheatsheet

We want anyone to be able to start using Sourcegraph for code search without reading a manual. That's why we made Sourcegraph search super fast and added one-click query suggestions (computed locally using heuristics) to refine your query.

But when you're searching more than a couple times daily, learning Sourcegraph's search keywords (such as `repo:`) will make you more productive. Click the new <kbd>?</kbd> icon next to any search button to see a quick reference. See ["Search query syntax"](https://docs.sourcegraph.com/code_search/reference/queries) for more info.

[Try it out](https://sourcegraph.com/search?q=repo:%5Egithub.com/kubernetes/kubernetes%24+lang:go+-f:test+-f:vendor+controller) (click the <kbd>?</kbd> next to the search button):

[![Search query cheatsheet](/blog/announcing-sourcegraph-3.0/search_query_cheatsheet.png)](https://sourcegraph.com/search?q=repo:%5Egithub.com/kubernetes/kubernetes%24+lang:go+-f:test+-f:vendor+controller)

### More Sourcegraph extension APIs

We introduced new APIs for [Sourcegraph extensions](https://docs.sourcegraph.com/extensions) to add functionality to Sourcegraph and your code hosts. The full API is defined in [`sourcegraph.d.ts`](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/packages/sourcegraph-extension-api/src/sourcegraph.d.ts).

- Progress notification (`sourcegraph.app.activeWindow.withProgress(...)` and `showProgress(...)`): extensions can show a window-level loading indicator for long-running tasks.
- Light and dark color theme options for decorations ([`TextDocumentDecoration#light`](https://unpkg.com/sourcegraph/dist/docs/interfaces/_sourcegraph_.textdocumentdecoration.html#light) and [`TextDocumentDecoration#dark`](https://unpkg.com/sourcegraph/dist/docs/interfaces/_sourcegraph_.textdocumentdecoration.html#dark)): when decorating code files with text and links, extensions can specify different colors to use depending on the prevailing UI theme (dark or light) to ensure sufficient contrast.
- Text selection ranges ([`CodeEditor#selections`](https://unpkg.com/sourcegraph/dist/docs/interfaces/_sourcegraph_.codeeditor.html#selections)): extensions can determine the currently selected range (or ranges, for multiple selections).
- Workspace roots ([`sourcegraph.app.activeWindow.roots`](https://unpkg.com/sourcegraph/dist/docs/modules/_sourcegraph_.workspace.html#roots) and [`onDidChangeRoots`](https://unpkg.com/sourcegraph/dist/docs/modules/_sourcegraph_.workspace.html#ondidchangeroots)): extensions can determine the currently active repository and subscribe to changes (i.e, when the user navigates to a different repository or revision).
- Custom panels ([`sourcegraph.app.createPanelView`](https://unpkg.com/sourcegraph/dist/docs/modules/_sourcegraph_.app.html#createpanelview)): extensions can define custom tabs in the panel, in addition to the standard definition and references tabs, such as for showing implementations, type definitions, and other information. The content can be a list of locations or arbitrary Markdown.
- Streaming locations: providers (for references, definitions, and other kinds of locations) can now also return an observable, which lets them "stream" references in. Previously, they could only return an array or promise, so they were limited to a single result set.
- Query transformers ([`sourcegraph.search.registerQueryTransformer`](https://unpkg.com/sourcegraph/dist/docs/modules/_sourcegraph_.search.html#registerquerytransformer)): extensions can define query transformers to implement custom search keywords, such as transforming [`js.depends:react`](https://sourcegraph.com/extensions/sourcegraph/js-dependency-search) to a query matching JavaScript/TypeScript files that import the `react` package.
- [`panel/toolbar` menu contribution point](https://docs.sourcegraph.com/extensions/authoring/contributions#menus): extensions can add actions that are shown in the panel (above references and definitions). This is useful for actions that affect the result set of references or definitions, such as changing which types of references are shown (e.g., function calls only vs. all uses).
- [Extension deactivation](https://docs.sourcegraph.com/extensions/authoring/activation#deactivation): this allows extensions to be cleanly unloaded when they are not in use, so that Sourcegraph runs smoothly for users.
- [Builtin commands](https://docs.sourcegraph.com/extensions/authoring/builtin_commands): these perform useful actions in Sourcegraph, such as updating a user's settings and accessing the [Sourcegraph GraphQL API](https://docs.sourcegraph.com/api/graphql).
- [`searchFilters` contribution](https://docs.sourcegraph.com/extensions/authoring/contributions#search-filters): extensions can add static search filters to suggest additions to a user's query. (This is the first step toward extensions being able to provide search results, which will allow Sourcegraph to search more things, such as GitHub issues, logs, and configuration data.)

We shipped other improvements to the extension development process:

- [`npm init sourcegraph-extension` extension generator](https://docs.sourcegraph.com/extensions/authoring/creating): easily create the skeleton of a new Sourcegraph extension.
- [Sideload extensions](https://docs.sourcegraph.com/extensions/authoring/local_development): you can now run extensions during development by just entering a URL instead of needing to publish a WIP extension.
- [WIP extensions](https://docs.sourcegraph.com/extensions/authoring/publishing#wip-extensions): an extension whose package.json contains `"wip": true` is marked as a work-in-progress so that users don't inadvertently install it.
- [Extension categories and tags](https://docs.sourcegraph.com/extensions/authoring/manifest#fields): these help users find your extension.

The [Sourcegraph extensions authoring documentation](https://docs.sourcegraph.com/extensions/authoring) also got some new tutorials:
  - [Building a "Hello, world" extension](https://docs.sourcegraph.com/extensions/authoring/tutorials/hello_world)
  - [Adding buttons and custom commands](https://docs.sourcegraph.com/extensions/authoring/tutorials/button_custom_commands)
  - [Building an extension for a language](https://docs.sourcegraph.com/extensions/authoring/tutorials/lang_specific_extension_tutorial)

### Extension registry improvements

The [Sourcegraph.com extension registry](https://sourcegraph.com/extensions) lists all publicly available [Sourcegraph extensions](https://docs.sourcegraph.com/extensions). You can also access it on your own Sourcegraph instance at **User menu > Extensions**. Here's what's new:

- [Extension categories and tags](https://docs.sourcegraph.com/extensions/authoring/manifest#fields): use the [**Category** dropdown](https://sourcegraph.com/extensions) or `tag:mytag` extension query keyword to filter the list of extensions. For example, see ["Programming languages" category](https://sourcegraph.com/extensions?query=category%3A%22Programming+languages%22) and ["javascript" tag](https://sourcegraph.com/extensions?query=tag%3Ajavascript).
- Show enabled/disabled extensions: use the [**Options** dropdown](https://sourcegraph.com/extensions) to show only extensions that are enabled (or disabled) for your user account. This makes it easier to manage your in-use extensions.
- [WIP extensions](https://docs.sourcegraph.com/extensions/authoring/publishing#wip-extensions): extensions that are marked as work-in-progress by the author are indicated as such and are shown last in the list of results.

### Management console and site config improvements

The new [management console](https://docs.sourcegraph.com/admin/management_console) is a separate, failsafe web interface for changing critical site configuration. This improves the experience for admins:

- You'll never be locked out of your instance, even if you make a configuration mistake, because the management console is a separate service. (Previously, you could edit critical configuration online in the Sourcegraph site admin area, but a misconfiguration could make your instance inaccessible.)
- [Cluster deployments](https://docs.sourcegraph.com/admin/install/cluster) now support editing site configuration online. (Previously, you needed to edit Kubernetes `.yml` files and redeploy.)
- The above two things also allow Sourcegraph to support automatic migrations of configuration, so you won't need to manually update site configuration when we add or change the configuration schema in releases.

The [management console](https://docs.sourcegraph.com/admin/management_console) runs on a separate port (2633 by default) and is protected by strong, randomly generated password that is visible only in the site admin area:

![Management console password is shown in site admin](/blog/announcing-sourcegraph-3.0/management_console_password.png)

Use this password to authenticate to `https://sourcegraph.example.com:2633` (using your actual hostname instead). Be sure to use `https` (and note that it uses a self-signed certificate that you will need to trust on first use). Once you're in, you can edit critical configuration (with validation and autocompletion):

![Management console](/blog/announcing-sourcegraph-3.0/management_console.png)

### Deploy to more kinds of clusters

Now you have more options when you need to scale to a cluster of Sourcegraph. ([Deploying Sourcegraph with Docker](https://docs.sourcegraph.com/admin/install/docker) to a single container is the most popular deployment method, and we still recommend all instances start with it.)

The [pure-Docker cluster deployment reference](https://github.com/sourcegraph/deploy-sourcegraph-docker) for Sourcegraph contains multiple Dockerfiles that use only the most basic orchestration primitives to connect to each other. You can adapt these files to deploy to your preferred cluster management/orchestration system, such as [Netflix's Titus](https://netflix.github.io/titus/) or [Mesosphere](https://mesosphere.com/). If you don't have a preferred system, we recommend [deploying to Kubernetes](https://github.com/sourcegraph/deploy-sourcegraph) (which was previously the only cluster deployment option).

See ["Installing Sourcegraph on a cluster"](https://docs.sourcegraph.com/admin/install/cluster) for more information.

### Authentication and repository permissions from GitHub

You can configure Sourcegraph to [allow users to sign in via GitHub or GitHub Enterprise](https://docs.sourcegraph.com/admin/auth#github). (Many other [user authentication providers](https://docs.sourcegraph.com/admin/auth) are supported, such as SAML, OpenID Connect, GitLab, builtin username-password, and HTTP auth proxies).

Sourcegraph can also [enforce GitHub or GitHub Enterprise repository access permissions](https://docs.sourcegraph.com/admin/repo/permissions#github), so that users can only search and view repositories on Sourcegraph if they are permitted to do so on GitHub. This feature makes Sourcegraph delegate authorization checks for repository access to GitHub, so your GitHub repository permissions are the source of truth.

See ["GitHub integration with Sourcegraph"](https://docs.sourcegraph.com/integration/github) for more information.

### Nginx-based HTTP server

All external HTTP serving and configuration (TLS, listen ports, Let's Encrypt, etc.) is now handled by [Nginx](https://nginx.org/en/), a popular, open source HTTP server. See ["Sourcegraph nginx HTTP server settings"](https://docs.sourcegraph.com/admin/nginx) for information on how to configure the external web server for Sourcegraph.

Previously, Sourcegraph implemented these HTTP features internally. We found that most admins preferred to wrap Sourcegraph with Nginx (sometimes using [ingress-nginx](https://github.com/kubernetes/ingress-nginx)) anyway, so we decided to make that the preferred and only way. Now that Sourcegraph relies on Nginx, you have the full power and configurability of Nginx at your disposal.

### Faster page load times

We trimmed the initial bundle size by ~50% for the Sourcegraph web app. This speeds up page loads on Sourcegraph.com and your own Sourcegraph instance. Thanks, [Webpack](https://webpack.js.org/)! (As a [JS Foundation member](https://js.foundation/about/members), Sourcegraph is proud to support Webpack.)

### Datadog metrics extension

The new [Datadog metrics extension](https://sourcegraph.com/extensions/sourcegraph/datadog-metrics) adds **View metric** links at the end of lines of code that contain calls to record [Datadog](https://www.datadoghq.com)/statsd metrics. This makes it easy to see how code is behaving *in production and in real time* when you're reading and reviewing code.

Because this is a [Sourcegraph extension](https://docs.sourcegraph.com/extensions), it works on Sourcegraph and on your code host (such as on GitHub code files and PRs).

For example, if your code records the time it takes to respond to queries, this extension makes it easy to jump to the query response time statistics from your code:

![Line of code with Datadog metrics link](/blog/announcing-sourcegraph-3.0/datadog_metrics.png)

## Documentation

The [main docs.sourcegraph.com page](https://docs.sourcegraph.com/) was reorganized to make the most common documentation easier to get to. We've also added a lot more documentation pages throughout.

## Engineering

This release includes more solid foundations for several Sourcegraph features:

- [Sourcegraph extensions](https://docs.sourcegraph.com/extensions) are the sole source of code intelligence now. We removed the old way, which required a lot more Sourcegraph-specific custom integration work to add or configure a new language.
- The [management console](https://docs.sourcegraph.com/admin/management_console) makes it so that all configuration can be edited online and in-band, which means future Sourcegraph releases can auto-migrate their own config instead of requiring manual (and error-prone) steps by the site admin.
- The new concept of [external service connections](https://docs.sourcegraph.com/admin/repo/add) will allow us to improve Sourcegraph's synchronization of repositories in a future release.
- Standardizing on Nginx for serving HTTP lets us remove a lot of complex core code to support numerous use cases better handled by Nginx.

## Thank you

Thank you to the many people who contributed to make Sourcegraph better since our last release!

- [@leehambley](https://github.com/leehambley)
- [@JoshuaKGoldberg](https://github.com/JoshuaKGoldberg)
- [@alanhamlett](https://github.com/alanhamlett)
- [@mjhogan](https://github.com/mjhogan)
- [@terinjokes](https://github.com/terinjokes)
- [@dbentley](https://github.com/dbentley)
- [@chmllr](https://github.com/chmllr)
- [@bunopus](https://github.com/bunopus)
- [@sslavian812](https://github.com/sslavian812)
- [@akshetpandey](https://github.com/akshetpandey)
- [@Warchant](https://github.com/Warchant)
- [@majapw](https://github.com/majapw)
- [@cncook001](https://github.com/cncook001)
- [@sfllaw](https://github.com/sfllaw)
- [@TobiaszCudnik](https://github.com/TobiaszCudnik)
- [@AndreKR](https://github.com/AndreKR)
- [@maxhallinan](https://github.com/maxhallinan)
- [@reflog](https://github.com/reflog)
- [@sabyasachi](https://github.com/sabyasachi)
- [@devil418](https://github.com/devil418)

## Install or upgrade

Ready to install? [Install Sourcegraph 3.0.1](https://docs.sourcegraph.com/)

Upgrading from 2.x or 3.0.0? [See the migration guide](https://docs.sourcegraph.com/admin/migration/3_0)

---

From the entire Sourcegraph team ([@sourcegraph](https://twitter.com/sourcegraph)), happy coding!

### About the author

_Quinn Slack is the CEO and co-founder of Sourcegraph, the code intelligence platform for dev teams and making coding more accessible to more people. Prior to Sourcegraph, Quinn co-founded Blend Labs, an enterprise technology company dedicated to improving home lending and was an egineer at Palantir, where he created a technology platform to help two of the top five U.S. banks recover from the housing crisis. Quinn has a BS in Computer Science from Stanford, you can chat with him on Twitter [@sqs](https://twitter.com/sqs)._
