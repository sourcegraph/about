---
title: 'Sourcegraph 2.10: Smoother tooltips, rendered architecture diagrams, and better repository syncing'
author: 'Geoffrey Gilmore'
publishDate: 2018-08-01T09:00-07:00
tags: [
  "blog"
]
slug: sourcegraph-2-10
heroImage: //images.ctfassets.net/le3mxztn6yoo/14pZiUUFXeSAeS4CAQ48IY/4630b6856f89cf846dfaf3549d39a4bb/Screenshot_from_2018-08-01_11-16-49.png
published: true
---

We're working hard to build [the best code search and browsing tool for your team](/), so you can write, review, and ship code better. In this month's release, we focused on improving the user experience and repository syncing for Sourcegraph's integrations with GitHub, GitHub Enterprise, Bitbucket Server, and Phabricator.

This makes one of Sourcegraph's most-loved features—hover tooltips, go-to-definition, and find-references while viewing code/diffs in your code host and review tools—even better.

- [Smoother tooltips everywhere](#smoother-tooltips-everywhere)
- [Inline symbol typeahead on GitHub](#inline-symbol-typeahead-on-github)
- [Experimental mermaid.js rendering on GitHub](#experimental-mermaidjs-rendering-on-github)
- [Better repository syncing with your code host](#better-repository-syncing-with-code-hosts)
- [Other improvements and fixes](#full-changelog-from-29-to-210)

Ready to install or upgrade? [Get Sourcegraph for yourself (to get started)](/) or [deploy Sourcegraph for your team](/docs).

## Smoother tooltips everywhere

Last month we shipped [new, smoother tooltips on Sourcegraph](/blog/sourcegraph-2-9-announcement-code-search-user-rollout-in-large-organizations#improved-code-view-and-hover-tooltips). Now these are available in the [Sourcegraph integration](/docs/integrations) for your code host or code review tool, too (such as Sourcegraph for [Chrome](https://chrome.google.com/webstore/detail/sourcegraph/dgjhfomjieaadpoljlnidmbgkdffpack) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/sourcegraph/)).

![Screenshot from 2018-08-01 11-16-49](//images.ctfassets.net/le3mxztn6yoo/14pZiUUFXeSAeS4CAQ48IY/4630b6856f89cf846dfaf3549d39a4bb/Screenshot_from_2018-08-01_11-16-49.png)

![ezgif-1-d7e703b8a3](//images.ctfassets.net/le3mxztn6yoo/2WjTi6TTYsiEeYmoWA08Eg/6210e45ff0b537f2420dcba53b0d4e61/ezgif-1-d7e703b8a3.gif)

This unification means that we've now built a common platform that lets us build things once (such as go-to-definition or hovers for a language) and provide them anywhere you view code: on Sourcegraph, GitHub, Bitbucket Server, Phabricator, and (experimentally) other code hosts and editors. In future months, we'll be opening up this platform to everyone, so you can build powerful dev tools and integrations that developers can use anywhere they view or edit code. Stay tuned!

## Inline symbol typeahead on GitHub

You now get <kbd>!</kbd> symbol auto-complete in GitHub text boxes, just like GitHub's built-in autocomplete for <kbd>#</kbd> (issue/PR numbers and titles) and <kbd>@</kbd> (names of users and organizations). This makes it easier to link to code when reviewing PRs or filing issues.

When typing an issue or PR comment on GitHub, just type <kbd>!</kbd> in the text box and then the first few letters of a function, class, type, etc., in your repository. (You need to have [Sourcegraph for Chrome/Firefox](/docs/features/browser-extension) installed.)

![2018-07-31 12.56.02](//images.ctfassets.net/le3mxztn6yoo/5o7PyFNNKg0emcI6e8Q6cS/f073f5e6c594fd3fa98b8ca9a9206bbf/2018-07-31_12.56.02.gif)

## Experimental mermaid.js rendering on GitHub

Architecture diagrams are incredibly useful when trying to understand a codebase, but how do you include them in your documentation and keep them up to date with your code? Using a separate tool to create/export/edit diagrams results in outdated diagrams or none at all!

Wouldn’t it be great if you could just specify a diagram directly in markdown, have it rendered nicely in your browser, and have it versioned alongside your code? Now you can!

With the latest [Sourcegraph for Chrome/Firefox](/docs/features/browser-extension), you can can add [mermaid.js](https://mermaidjs.github.io/) diagrams to your markdown files and they will be rendered when viewed on GitHub.com. [Read the instructions](https://github.com/sourcegraph/mermaidjs-example/blob/master/README.md) to get started.

![mermaidjs](//images.ctfassets.net/le3mxztn6yoo/5k55EUL0CQiESGy8gwcyWS/29b17a9f25f9f92fc8f526186a771edd/mermaidjs.gif)

## Better repository syncing with code hosts

We've made Sourcegraph better at keeping 10,000+ repositories up-to-date without overwhelming your code host, so you can search and browse all of your company’s latest code. Repository and Git metadata are updated at automatic intervals based on how frequently the repository changes. For frequently changing repositories, Git pushes to your code host are visible and searchable on Sourcegraph within seconds.

Sourcegraph also now tries harder to stay under your code host's API rate limit, and uses cached metadata if your code host's API is unreachable. This will help address the occasional reports from customers whose Sourcegraph instances exceeded the GitHub API rate limit.

_If your instance shares an IP or netblock with another host that is abusing GitHub (which happens sometimes on public cloud providers), it's still possible to get temporarily blocked by GitHub. This should be rare, and you're now unlikely to even notice it (except that new repositories and updated repository metadata will not be available)._

_If you've either [disabled repository updates](/docs/config/site/#disableautogitupdates-boolean) or [reduced the repository update interval](/docs/config/site/#repolistupdateinterval-integer) because they were affecting performance, try re-adjusting these settings and let us know how it works out._


## Full changelog (from 2.9 to 2.10)

- In the file tree, if a directory that contains only a single directory is expanded, its child directory is now expanded automatically. This is especially helpful for Java projects, which often have deeply nested directories.
- Fixed an issue where Sourcegraph Server would not start code intelligence containers properly when the Sourcegraph Server container was shut down non-gracefully.
- Fixed an issue where the file tree would return an error when navigating between repositories.
- Repo-updater has a new and improved scheduler for periodic repository fetches. If you have problems with it, you can revert to the old behavior by adding `"experimentalFeatures": { "updateScheduler": "disabled" }` to your `config.json`.
- A once-off migration will run changing the layout of cloned repos on disk. This should only affect installations created January 2018 or before. There should be no user visible changes.
- Experimental feature flag `experimentalFeatures.updateScheduler` enables a smarter and less spammy algorithm for automatic repository updates.
- It is no longer possible to disable code intelligence by unsetting the LSP_PROXY environment variable. Instead, code intelligence can be disabled per language on the site admin page (e.g. https://sourcegraph.example.com/site-admin/code-intelligence).
- Bitbucket API requests made by Sourcegraph are now under a self-enforced API rate limit (since Bitbucket Server does not have a concept of rate limiting yet). This will reduce any chance of Sourcegraph slowing down or causing trouble for Bitbucket Server instances connected to it. The limits are: 7,200 total requests/hr, with a bucket size / maximum burst size of 500 requests.
- Global, org, and user settings are now validated against the schema, so invalid settings will be shown in the settings editor with a red squiggly line.
- The `http-header` auth provider now supports being used with other auth providers (still only when `experimentalFeatures.multipleAuthProviders` is `true`).
- Periodic fetches of Gitolite-hosted repositories are now handled internally by repo-updater.
- The `log.sentry.dsn` field in the site config makes Sourcegraph log application errors to a Sentry instance.
- Two new repository page hotkeys were added: <kbd>r</kbd> to open the repositories menu and <kbd>v</kbd> to open the revision selector.
- Repositories are periodically (~45 days) recloned from the codehost. The codehost can be relied on to give an efficient packing. This is an alternative to running a memory and CPU intensive git gc and git prune.
- The `auth.sessionExpiry` field sets the session expiration age in seconds (defaults to 90 days).
- Fixed a bug in the API console that caused it to display as a blank page in some cases.
- Fixed cases where GitHub rate limit wasn't being respected.
- Fixed a bug where scrolling in references, history, etc. file panels was not possible in Firefox.
- Fixed cases where gitserver directory structure migration could fail/crash.
- Fixed "Generate access token" link on user settings page. Previously, this link would 404.
- Fixed a bug where the search query was not updated in the search bar when searching from the homepage.
- Fixed a possible crash in github-proxy.
- `SOURCEGRAPH_CONFIG` environment variable has been removed. Site configuration is always read from and written to disk. You can configure the location by providing `SOURCEGRAPH_CONFIG_FILE`. The default path is `/etc/sourcegraph/config.json`.
- The search results page will merge duplicated lines of context.
- The following deprecated site configuration properties have been removed: `github[].preemptivelyClone`, `gitOriginMap`, `phabricatorURL`, `githubPersonalAccessToken`, `githubEnterpriseURL`, `githubEnterpriseCert`, and `githubEnterpriseAccessToken`. (All have been superseded for 6 months by other properties.)
- The `settings` field in the site config file is deprecated and will not be supported in a future release. Site admins should move those settings (if any) to global settings (in the site admin UI). Global settings are preferred to site config file settings because the former can be applied without needing to restart/redeploy the Sourcegraph server or cluster.
- Fixed a goroutine leak which occurs when search requests are canceled.
- Console output should have fewer spurious line breaks.
- Fixed an issue where it was not possible to override the `StrictHostKeyChecking` SSH option in the SSH configuration.
- Fixed an issue where saving an organization's configuration would hang indefinitely.

---

**Ready to install or upgrade? [Get Sourcegraph for yourself (to get started)](/) or [deploy Sourcegraph for your team](/docs).**

Questions/feedback/complaints/requests? Contact us at [@srcgraph](https://twitter.com/srcgraph) or <mailto:support@sourcegraph.com>, or file issues on our [public issue tracker](https://github.com/sourcegraph/issues/issues). We're planning for our next release in August right now, so the sooner we hear from you, the better!
