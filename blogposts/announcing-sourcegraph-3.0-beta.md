# Sourcegraph 3.0 beta available

The beta release of Sourcegraph 3.0 is now available (as version `3.0.0-beta`). Sourcegraph is an open-source, self-hosted code search and browsing tool for teams, with an efficient web interface and feels-like-native integration into your code host. This release comes with several big core updates:

- [Search query cheatsheet](#search-query-cheatsheet): 1-click reminder of how to write search queries to find what you need.
- [Basic code intelligence for all languages](#basic-code-intelligence-for-all-languages): fast go-to-definition and find-references for code in any language, using effective, zero-configuration heuristics when precise analysis is configured.
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

##