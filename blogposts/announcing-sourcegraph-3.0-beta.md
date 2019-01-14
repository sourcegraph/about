# Sourcegraph 3.0-beta available

The beta release of Sourcegraph 3.0 is now available (as version `3.0.0-beta`). Sourcegraph is an open-source, self-hosted code search and browsing tool for teams, with an efficient web interface and feels-like-native integration into your code host. This release comes with several big core updates:

- [Search query cheatsheet](#search-query-cheatsheet): click <kbd>?</kbd> next to the search button to see how to write search queries to find what you need.
- [Basic code intelligence for all languages](#basic-code-intelligence-for-all-languages): fast go-to-definition and find-references for code in any language, using text-based heuristics.
- [More Sourcegraph extension APIs](#more-sourcegraph-extension-apis): add more features and info to code on Sourcegraph and your code host.
- [Extension registry improvements](#extension-registry-improvements): discover and manage Sourcegraph extensions.
- [Deploy to more kinds of clusters](#deploy-to-more-kinds-of-clusters): if our existing 1-Docker-container or Kubernetes deployment schemes don't work for you.
- [Authentication and repository permissions from GitHub](#authenticate-via-github): allow user sign-in and enforce repository access permissions from GitHub or GitHub Enterprise.
- [Faster page load times](#faster-page-load-times): 50% smaller initial bundle size.
- [Nginx-based HTTP configuration](#nginx-based-web-server): for ease of deployment, all HTTP configuration (TLS, listen ports, etc.) is now handled by Nginx instead of being built into Sourcegraph.

Several new and improved [Sourcegraph extensions](https://docs.sourcegraph.com/extensions) add features we think you'll like:

- [Basic code intelligence for all languages](#basic-code-intelligence-for-all-languages): fast go-to-definition and find-references for code in any language, using effective, zero-configuration heuristics when precise analysis is not configured. (Also mentioned above.)
- [Datadog metrics](#datadog-metrics): easily jump to Datadog metrics information from statsd calls in your code.
- [JavaScript/TypeScript language support](#TODO)
- [Go language support](#TODO)
- [Python language support](#TODO)
- [Java language support](#TODO)

Want to hear about new features and releases as soon as they're available? Follow [@srcgraph](https://twitter.com/srcgraph).

## Highlights

### Search query cheatsheet

We want anyone to be able to start using Sourcegraph for code search without reading a manual. That's why we made Sourcegraph search super fast and added one-click query suggestions (computed locally using heuristics) to refine your query.

But when you're searching more than a couple times daily, learning Sourcegraph's search keywords (such as `repo:`) will make you more productive. Click the new <kbd>?</kbd> icon next to any search button to see a quick reference. See ["Search query syntax"](https://docs.sourcegraph.com/user/search/queries) for more info.

![Search query cheatsheet](./announcing-sourcegraph-3.0-beta/search_query_cheatsheet.png)

### Basic code intelligence for all languages

TODO(sqs)

### More Sourcegraph extension APIs

TODO(sqs)

### Extension registry improvements

TODO(sqs)

### Deploy to more kinds of clusters

TODO(sqs)

### Authentication and repository permissions from GitHub

TODO(sqs)

### Faster page load times

TODO(sqs)

### Nginx-based HTTP configuration

TODO(sqs)

### Datadog metrics

TODO(sqs)

### JavaScript/TypeScript language support

TODO(sqs)

### Go language support

TODO(sqs)

### Python language support

TODO(sqs)

### Java language support

TODO(sqs)

## New documentation

TODO(sqs)

## Engineering

TODO(sqs)

## Thank you

## Install or upgrade

Ready to install or upgrade?

- **For new Sourcegraph instances:** [Install Sourcegraph 3.0 beta.](https://docs.sourcegraph.com/#quickstart) This beta release is recommended for new instances that are not upgrading from 2.x.
- **For existing Sourcegraph 2.x instances:** Wait a few weeks for the non-beta [3.0 release](https://docs.sourcegraph.com/dev/roadmap#3-0) (early Feb 2019), for a smooth 2.x-to-3.0 upgrade process.

See [known issues to be fixed before 3.0 release](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+milestone%3A3.0), and file any issues you encounter there.

---

From the entire Sourcegraph team ([@srcgraph](https://twitter.com/srcgraph)), happy coding!