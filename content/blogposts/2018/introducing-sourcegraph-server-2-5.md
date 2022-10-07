---
title: 'Sourcegraph 2.5: Introducing code change alerts'
authors:
  - name: Quinn Slack
    url: https://twitter.com/sqs
publishDate: 2018-02-08T00:00-08:00
tags: [
  "blog"
]
slug: introducing-sourcegraph-server-2-5
heroImage: https://images.ctfassets.net/le3mxztn6yoo/KggIyqGq8ooo2qIU48K6S/54bfffd088d37e5ba580f4c5b0416f7e/image1.png
published: true
---

Monitor code changes with Google Alerts-style notifications, get code intelligence in reviews/PRs, and search over thousands of repositories in hundreds of milliseconds—all with Sourcegraph 2.5, shipping today. This release also includes other highly requested features, such as native GitLab support and enhanced search scopes (plus performance improvements and bug fixes).

Sourcegraph gives the power of code search and intelligence to every developer at your company, so you can ship better code faster. It runs securely in your own network, takes 5 minutes to install, and is easy to upgrade.

Ready to install or upgrade? **[Install Sourcegraph 2.5](https://docs.sourcegraph.com)**

**Key highlights of Sourcegraph 2.5:**
* [Code change notifications](#code-change-notifications)
* [Built-in saved searches](#built-in-saved-searches)
* [Code intelligence](#code-intelligence)
* [Massive-scale code search](#massive-scale-code-search)
* [GitLab support](#gitlab-support)
* [Improved search scopes UI](#improved-search-scopes-ui)
* [Search scope pages](#search-scope-pages)
* [Integrations settings page](#integrations-settings-page)

### Code change notifications

We've added email and Slack notifications for saved searches, so you get "Google Alerts"-style notifications for any code change that matches a query. You can use this to get notified when there are API changes, new dependencies, use of certain OSS licenses (such as GPL), security- and authentication-related changes, AWS secret keys committed in code, etc. [Set up saved searches and notifications.](https://docs.sourcegraph.com/code_search/explanations/features#saved-searches)

<Figure 
  src="//images.contentful.com/le3mxztn6yoo/6o9nJRuGk0SkQeSmaKK6I2/833d77958de99c80054c429c288c2d2a/image.png"
  alt="Email notifications"
/>

<Figure 
  src="//images.contentful.com/le3mxztn6yoo/4wKs8DV0FGWiI0eeAcKkSW/833d77958de99c80054c429c288c2d2a/image__1_.png"
  alt="Slack notifications"
/>

### Built-in saved searches

Sourcegraph now ships with a selection of built-in, common saved searches. Click **Queries** and then **Discover built-in searches** to view a list of built-in searches that are useful in most codebases. This includes searches for code committed with copyleft (GPL) licenses, security and authentication changes, and potential secrets and API tokens. Save the ones that look useful to you to start monitoring your codebase.

<Figure 
  src="//images.contentful.com/le3mxztn6yoo/KggIyqGq8ooo2qIU48K6S/54bfffd088d37e5ba580f4c5b0416f7e/image1.png"
  alt="Built-in saved searches"
/>

### Code intelligence

Code intelligence can now be added to any Sourcegraph instance with a single command. (Previously it required the Kubernetes-based cluster deployment option.)

Code intelligence makes reviewing and navigating code easier with go-to-definition, find-references, and hover tooltips. By connecting the popular Sourcegraph browser extension to Sourcegraph, you can even get code intelligence inline on GitHub and GitHub Enterprise (on PRs and code files).

[Get code intelligence](https://docs.sourcegraph.com/extensions/language_servers/install) for Go, Python, JavaScript, TypeScript, Java, and PHP today.

<Figure 
  src="//images.contentful.com/le3mxztn6yoo/4IAoiPHByEok4aucIcg426/7af890245d6d7cd5415569938dca7973/CodeIntel2sc.gif"
   alt="CodeIntel2sc"
/>

### Massive-scale code search

For [cluster deployments](https://docs.sourcegraph.com/admin/install/cluster), we’ve shipped a hybrid search backend that offers blazing-fast searches over 10,000+ repositories, on the order of hundreds of milliseconds, while still giving you up-to-date results without any indexing delay. It intelligently merges results from indexed search and on-the-fly search, giving you the best of both worlds.

Hybrid search is enabled by default in Sourcegraph cluster deployments. See "[Indexed search](https://docs.sourcegraph.com/admin/search#indexed-search)" for instructions on how to enable it in single-Docker-image deployments.

### GitLab support

You can now easily configure Sourcegraph to search across all of your GitLab projects (on GitLab.com, GitLab CE, and GitLab EE). Just put in your access token in site config (using the "Add GitLab projects" button), restart, and select which projects to enable. [See the documentation](https://docs.sourcegraph.com/integration/gitlab) for full instructions. As always, Git repositories from code hosts other than GitHub and GitLab can also be added.

### Improved search scopes UI

Search scopes are now accessible on every page to more easily filter your search. Click the down-arrow next to the search bar to view your scopes and refine your search. [See the documentation on adding search scopes](https://docs.sourcegraph.com/code_search/how-to/scopes).

### Search scope pages

We’ve added search scope pages to more easily share search scopes among team members. Add the `id` and `description` fields to the `search.scopes` config option to get a page that automatically filters your search to the specified scope. We’ve also added public search scope pages for popular groups of repositories on Sourcegraph.com, including the [top 1000 Rust crates](https://sourcegraph.com/search/scope/crates), [100 most depended-upon npm packages](https://sourcegraph.com/search/scope/npm), [core Ethereum code](https://sourcegraph.com/search/scope/ethereum), and [Go code by the Go team](https://sourcegraph.com/search/scope/goteam).

Have an idea for a search scope that would be useful to your community? Tweet us [@sourcegraph](https://twitter.com/sourcegraph).

<Figure 
  src="//images.contentful.com/le3mxztn6yoo/6ayRkpUW2IMyiQIg4G0IOq/f2d68c1040778fc62b024266e374a46e/scopePage.png"
  alt="SearchScopePage"
  shadow={false}
/>

### Integrations settings page

We've made it easier to connect your Sourcegraph instance to the Sourcegraph browser extension and your browser's address bar search. Click **Integrations** in your personal settings area to install the browser extension and connect it to your Sourcegraph instance. You'll also find instructions for setting up Sourcegraph as a custom search engine in your browser's address bar. Site admins can now send users to this page to more easily roll out the browser extension and browser address bar search.

<Figure 
  src="//images.contentful.com/le3mxztn6yoo/2X1iVhIUcUoMcsCCk4YeAw/67e3e6c0f2807fb38beb3bb63ba37b7f/CodeIntelPR.png"
  alt="CodeIntelPR"
  shadow={false}
/>

## Changelog

See the [Sourcegraph changelog](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md) for a list of all changes in this release.

## Upgrade today

**[Install Sourcegraph 2.5](https://docs.sourcegraph.com)** to bring powerful code search to your developers.

### About the author

_Quinn Slack is the CEO and co-founder of Sourcegraph, the code intelligence platform for dev teams and making coding more accessible to more people. Prior to Sourcegraph, Quinn co-founded Blend Labs, an enterprise technology company dedicated to improving home lending and was an egineer at Palantir, where he created a technology platform to help two of the top five U.S. banks recover from the housing crisis. Quinn has a BS in Computer Science from Stanford, you can chat with him on Twitter [@sqs](https://twitter.com/sqs)._
