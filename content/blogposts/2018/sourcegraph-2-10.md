---
title: 'Sourcegraph 2.10: Smoother tooltips, rendered architecture diagrams, and better repository syncing'
authors:
  - name: Geoffrey Gilmore
publishDate: 2018-08-01T09:00-07:00
tags: [
  "blog"
]
slug: sourcegraph-2-10
heroImage: https://images.ctfassets.net/le3mxztn6yoo/14pZiUUFXeSAeS4CAQ48IY/4630b6856f89cf846dfaf3549d39a4bb/Screenshot_from_2018-08-01_11-16-49.png
published: true
---

We're working hard to build [the best code search and browsing tool for your team](/), so you can write, review, and ship code better. In this month's release, we focused on improving the user experience and repository syncing for Sourcegraph's integrations with GitHub, GitHub Enterprise, Bitbucket Server, and Phabricator.

This makes one of Sourcegraph's most-loved features—hover tooltips, go-to-definition, and find-references while viewing code/diffs in your code host and review tools—even better.

- [Smoother tooltips everywhere](#smoother-tooltips-everywhere)
- [Inline symbol typeahead on GitHub](#inline-symbol-typeahead-on-github)
- [Experimental mermaid.js rendering on GitHub](#experimental-mermaidjs-rendering-on-github)
- [Better repository syncing with your code host](#better-repository-syncing-with-code-hosts)

Ready to install or upgrade? [Get Sourcegraph 2.10.](https://docs.sourcegraph.com/#quickstart)

## Smoother tooltips everywhere

Last month we shipped [new, smoother tooltips on Sourcegraph](/blog/sourcegraph-2-9-announcement-code-search-user-rollout-in-large-organizations#improved-code-view-and-hover-tooltips). Now these are available in the [Sourcegraph integration](https://docs.sourcegraph.com/integration) for your code host or code review tool, too (such as the [Sourcegraph browser extension](https://docs.sourcegraph.com/integration/browser_extension)).

![Screenshot from 2018-08-01 11-16-49](//images.ctfassets.net/le3mxztn6yoo/14pZiUUFXeSAeS4CAQ48IY/4630b6856f89cf846dfaf3549d39a4bb/Screenshot_from_2018-08-01_11-16-49.png)

![ezgif-1-d7e703b8a3](//images.ctfassets.net/le3mxztn6yoo/2WjTi6TTYsiEeYmoWA08Eg/6210e45ff0b537f2420dcba53b0d4e61/ezgif-1-d7e703b8a3.gif)

This unification means that we've now built a common platform that lets us build things once (such as go-to-definition or hovers for a language) and provide them anywhere you view code: on Sourcegraph, GitHub, Bitbucket Server, Phabricator, and (experimentally) other code hosts and editors. In future months, we'll be opening up this platform to everyone, so you can build powerful dev tools and integrations that developers can use anywhere they view or edit code. Stay tuned!

## Inline symbol typeahead on GitHub

You now get <kbd>!</kbd> symbol auto-complete in GitHub text boxes, just like GitHub's built-in autocomplete for <kbd>#</kbd> (issue/PR numbers and titles) and <kbd>@</kbd> (names of users and organizations). This makes it easier to link to code when reviewing PRs or filing issues.

When typing an issue or PR comment on GitHub, just type <kbd>!</kbd> in the text box and then the first few letters of a function, class, type, etc., in your repository. (You need to have [Sourcegraph for Chrome/Firefox](https://docs.sourcegraph.com/integration/browser_extension) installed.)

![2018-07-31 12.56.02](//images.ctfassets.net/le3mxztn6yoo/5o7PyFNNKg0emcI6e8Q6cS/f073f5e6c594fd3fa98b8ca9a9206bbf/2018-07-31_12.56.02.gif)

## Experimental mermaid.js rendering on GitHub

Architecture diagrams are incredibly useful when trying to understand a codebase, but how do you include them in your documentation and keep them up to date with your code? Using a separate tool to create/export/edit diagrams results in outdated diagrams or none at all!

Wouldn't it be great if you could just specify a diagram directly in markdown, have it rendered nicely in your browser, and have it versioned alongside your code? Now you can!

With the latest [Sourcegraph for Chrome/Firefox](https://docs.sourcegraph.com/integration/browser_extension), you can can add [mermaid.js](https://mermaidjs.github.io/) diagrams to your markdown files and they will be rendered when viewed on GitHub.com. [Read the instructions](https://github.com/sourcegraph/mermaidjs-example/blob/master/README.md) to get started.

![mermaidjs](//images.ctfassets.net/le3mxztn6yoo/5k55EUL0CQiESGy8gwcyWS/29b17a9f25f9f92fc8f526186a771edd/mermaidjs.gif)

## Better repository syncing with code hosts

We've made Sourcegraph better at keeping 10,000+ repositories up-to-date without overwhelming your code host, so you can search and browse all of your company’s latest code. Repository and Git metadata are updated at automatic intervals based on how frequently the repository changes. For frequently changing repositories, Git pushes to your code host are visible and searchable on Sourcegraph within seconds.

Sourcegraph also now tries harder to stay under your code host's API rate limit, and uses cached metadata if your code host's API is unreachable. This will help address the occasional reports from customers whose Sourcegraph instances exceeded the GitHub API rate limit.

_If your instance shares an IP or netblock with another host that is abusing GitHub (which happens sometimes on public cloud providers), it's still possible to get temporarily blocked by GitHub. This should be rare, and you're now unlikely to even notice it (except that new repositories and updated repository metadata will not be available)._

_If you've either [disabled repository updates]https://docs.sourcegraph.com/admin/site_config/all/#disableautogitupdates-boolean) or [reduced the repository update interval]https://docs.sourcegraph.com/admin/site_config/all/#repolistupdateinterval-integer) because they were affecting performance, try re-adjusting these settings and let us know how it works out._

## Changelog

See the [Sourcegraph changelog](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md) for a list of all changes in this release.

---

Ready to install or upgrade? [Get Sourcegraph 2.10.](https://docs.sourcegraph.com/#quickstart)

Questions/feedback/complaints/requests? Contact us at [@sourcegraph](https://twitter.com/sourcegraph) or support@sourcegraph.com, or file issues on our [public issue tracker](https://github.com/sourcegraph/sourcegraph/issues). We're planning for our next release in August right now, so the sooner we hear from you, the better!
