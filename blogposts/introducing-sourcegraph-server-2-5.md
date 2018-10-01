---
title: 'Sourcegraph Server 2.5: Introducing code change alerts'
author: 'Quinn Slack'
publishDate: 2018-02-08T00:00-08:00
tags: [
  "blog"
]
slug: introducing-sourcegraph-server-2-5
heroImage: //images.ctfassets.net/le3mxztn6yoo/KggIyqGq8ooo2qIU48K6S/54bfffd088d37e5ba580f4c5b0416f7e/image1.png
published: true
---

Monitor code changes with Google Alerts-style notifications, get code intelligence in reviews/PRs, and search over thousands of repositories in hundreds of milliseconds—all with Sourcegraph Server 2.5, shipping today. This release also includes other highly requested features, such as native GitLab support and enhanced search scopes (plus performance improvements and bug fixes).

Sourcegraph Server gives the power of code search and intelligence to every developer at your company, so you can ship better code faster. It runs securely in your own network, takes 5 minutes to install, and is easy to upgrade.

Ready to install or upgrade? **[Install Sourcegraph Server 2.5](/docs/server)**

**Key highlights of Sourcegraph Server 2.5:**
* [Code change notifications](#code-change-notifications)
* [Built-in saved searches](#built-in-saved-searches)
* [Code intelligence](#code-intelligence)
* [Massive-scale code search](#massive-scale-code-search)
* [GitLab support](#gitlab-support)
* [Improved search scopes UI](#improved-search-scopes-ui)
* [Search scope pages](#search-scope-pages)
* [Integrations settings page](#integrations-settings-page)

### Code change notifications

We've added email and Slack notifications for saved searches, so you get "Google Alerts"-style notifications for any code change that matches a query. You can use this to get notified when there are API changes, new dependencies, use of certain OSS licenses (such as GPL), security- and authentication-related changes, AWS secret keys committed in code, etc. [Set up saved searches and notifications.](/docs/search#saved-searches)

<div class="pa2 ba b--light-8 br2" style="padding-bottom:27.2%;height:0;position:relative;overflow:hidden;"> 

<img alt="Email notifications" src="//images.contentful.com/le3mxztn6yoo/6o9nJRuGk0SkQeSmaKK6I2/833d77958de99c80054c429c288c2d2a/image.png" />

</div>

<div class="pa2 ba b--light-8 br2" style="padding-bottom:15.7%;height:0;position:relative;overflow:hidden;"> 

<img alt="Slack notifications" src="//images.contentful.com/le3mxztn6yoo/4wKs8DV0FGWiI0eeAcKkSW/833d77958de99c80054c429c288c2d2a/image__1_.png" />

</div>

### Built-in saved searches

Sourcegraph now ships with a selection of built-in, common saved searches. Click **Queries** and then **Discover built-in searches** to view a list of built-in searches that are useful in most codebases. This includes searches for code committed with copyleft (GPL) licenses, security and authentication changes, and potential secrets and API tokens. Save the ones that look useful to you to start monitoring your codebase.

<div class="pa2 ba b--light-8 br2" style="padding-bottom:29.4%;height:0;position:relative;overflow:hidden;"> 

<img alt="Built-in saved searches" src="//images.contentful.com/le3mxztn6yoo/KggIyqGq8ooo2qIU48K6S/54bfffd088d37e5ba580f4c5b0416f7e/image1.png" />

</div>

### Code intelligence

Code intelligence can now be added to any Sourcegraph Server instance with a single command. (Previously it required the Kubernetes-based Data Center deployment option.)

Code intelligence makes reviewing and navigating code easier with go-to-definition, find-references, and hover tooltips. By connecting the popular Sourcegraph browser extension to Sourcegraph Server, you can even get code intelligence inline on GitHub and GitHub Enterprise (on PRs and code files).

[Get code intelligence](/docs/code-intelligence/install) for Go, Python, JavaScript, TypeScript, Java, and PHP today.

<div class="pa2 ba b--light-8 br2" style="padding-bottom:56.2%;height:0;position:relative;overflow:hidden;">

<img alt="CodeIntel2sc" src="//images.contentful.com/le3mxztn6yoo/4IAoiPHByEok4aucIcg426/7af890245d6d7cd5415569938dca7973/CodeIntel2sc.gif" />

</div>


### Massive-scale code search

For [Data Center deployments](/docs/server/datacenter), we’ve shipped a hybrid search backend that offers blazing-fast searches over 10,000+ repositories, on the order of hundreds of milliseconds, while still giving you up-to-date results without any indexing delay. It intelligently merges results from indexed search and on-the-fly search, giving you the best of both worlds. Hybrid search is enabled by default in Sourcegraph Data Center.

### GitLab support

You can now easily configure Sourcegraph to search across all of your GitLab projects (on GitLab.com, GitLab CE, and GitLab EE). Just put in your access token in site config (using the "Add GitLab projects" button), restart, and select which projects to enable. [See the documentation](/docs/server/config/repositories#gitlab-configuration) for full instructions. As always, repositories from code hosts other than GitHub and GitLab can be added through the [repos.list configuration option](/docs/server/config/repositories#sync-repositories-from-any-code-host). 

### Improved search scopes UI

Search scopes are now accessible on every page to more easily filter your search.  Click the down-arrow next to the search bar to view your scopes and refine your search. [See the documentation on adding search scopes](/docs/server/config/search-scopes).

### Search scope pages

We’ve added search scope pages to more easily share search scopes among team members. Add the `id` and `description` fields to the `search.scopes` config option to get a page that automatically filters your search to the specified scope. We’ve also added public search scope pages for popular groups of repositories on Sourcegraph.com, including the [top 1000 Rust crates](https://sourcegraph.com/search/scope/crates), [100 most depended-upon npm packages](https://sourcegraph.com/search/scope/npm), [core Ethereum code](https://sourcegraph.com/search/scope/ethereum), and [Go code by the Go team](https://sourcegraph.com/search/scope/goteam).

Have an idea for a search scope that would be useful to your community? Tweet us [@srcgraph](https://twitter.com/srcgraph).

<div style="padding-bottom:73.4%;height:0;position:relative;overflow:hidden;"> 

<img alt="SearchScopePage" src="//images.contentful.com/le3mxztn6yoo/6ayRkpUW2IMyiQIg4G0IOq/f2d68c1040778fc62b024266e374a46e/scopePage.png" />

</div>

### Integrations settings page

We've made it easier to connect your Sourcegraph Server instance to the Sourcegraph browser extension and your browser's address bar search. Click **Integrations** in your personal settings area to install the browser extension and connect it to your Sourcegraph Server instance. You'll also find instructions for setting up Sourcegraph as a custom search engine in your browser's address bar. Site admins can now send users to this page to more easily roll out the browser extension and browser address bar search. 

<div style="padding-bottom:77.6%;height:0;position:relative;overflow:hidden;"> 

<img alt="CodeIntelPR" src="//images.contentful.com/le3mxztn6yoo/2X1iVhIUcUoMcsCCk4YeAw/67e3e6c0f2807fb38beb3bb63ba37b7f/CodeIntelPR.png" />

</div>

### Additional improvements:

* Adding GitHub repositories using a personal access token no longer auto-clones all repositories. Now, after adding your GitHub token, go to the site admin repositories page and press **Enable** to kick off cloning for each repository you want to clone.
* Search by file path is now enabled by default (no need to opt in with `type:path`). If a file path in a repo matches your query, you'll see it in search results (even if its text contents don't match).
* Go code intelligence now fetches exact dependencies for [dep](https://github.com/golang/dep) users, in addition to the already supported Glide and godep. 
* We’ve added documentation for deploying your Sourcegraph Server instance to the cloud using [Google Cloud Platform](/docs/server/deploy/gcp), [Amazon Web Services](/docs/server/deploy/aws), and [Digital Ocean](/docs/server/deploy/digitalocean) to make it easier to provide code search to your team.
* Sourcegraph Server instances periodically ping https://sourcegraph.com for update checks and with a single aggregate usage number. Starting with version 2.5, this ping is configured separately from the `disableTelemetry` site configuration option. To disable this ping, go to the site admin updates page or use the `update.channel` site configuration option.
* The default behavior in Sourcegraph Data Center now prohibits user signup by default unless the site admin enables it. To enable it, specify`"auth.allowSignup": true` in `config.json`, re-generate the Helm chart, and apply the chart to your Kubernetes cluster.
* In Sourcegraph Data Center, the configuration settings for adding language servers (for code intelligence) have changed. The old langGo, langPython, langJavaScript, langTypeScript, and langJava settings have been removed. To enable code intelligence, you now need to use the [new language server configuration settings](/docs/code-intelligence/install#enabling-code-intelligence-on-a-server-instance)


**Upgrade today**

**[Install Sourcegraph Server 2.5](/docs/server)** to bring powerful code search to your developers.
