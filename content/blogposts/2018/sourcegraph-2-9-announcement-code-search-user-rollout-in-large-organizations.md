---
title: 'Sourcegraph 2.9: Scaling code search and user rollout in large organizations'
authors:
  - name: Quinn Slack
    url: https://twitter.com/sqs
publishDate: 2018-06-19T10:30-07:00
tags: [
  "blog"
]
slug: sourcegraph-2-9-announcement-code-search-user-rollout-in-large-organizations
heroImage: https://images.ctfassets.net/le3mxztn6yoo/1TbeS9cVu0MOE4soS2W2wQ/6089a348cac88a3d460771b5b65c3e7c/Screenshot_from_2018-06-19_09-35-26.png
published: true
---

In Sourcegraph 2.9, we focused on improving the code search, rollout, and deployment experience for organizations with 100s and 1,000s of developers and repositories.

We're building Sourcegraph to be the **best way for developers to search and browse code**, and we're thankful for all the feedback (especially from these large customers) that helped us plan and ship this release.

New in Sourcegraph 2.9:

- [Easy organization-wide Google Workspace installation of the Chrome extension](#easy-organization-wide-google-workspace-rollout-of-the-chrome-extension)
- [Filtering search results by repository](#filtering-search-results-by-repository)
- [Large result sets and pagination](#large-result-sets-and-pagination)
- [Improved code view and hover tooltips](#improved-code-view-and-hover-tooltips)
- [Migrating from Oracle OpenGrok to Sourcegraph](#migrating-from-oracle-opengrok-to-sourcegraph)
- [More `src` CLI commands](#more-src-cli-commands)

Ready to install or upgrade? [**Get Sourcegraph 2.9.**](https://docs.sourcegraph.com/#quickstart)

**What is Sourcegraph?**

Sourcegraph is a self-hosted code search and intelligence tool that helps your team code more productively. With Sourcegraph, developers can find code examples, view references/callers, locate definitions, etc., across all their organization's code in a few seconds with just a few keystrokes. It works great with GitHub, GitHub Enterprise, GitLab, Bitbucket Server, Phabricator, and many other tools.

Sourcegraph runs securely in your own network, takes 5 minutes to install, scales to 1,000s of developers and 10,000s of repositories, and is free to use (with paid upgrades starting at [$5/user/month](/pricing)). It pretty quickly becomes one of the most-used tools in an organization, as we hear from teams of 10s–1,000s of developers using Sourcegraph.

See "[Sourcegraph overview](https://docs.sourcegraph.com/getting-started)" and "[Sourcegraph tour](https://docs.sourcegraph.com/getting-started/tour)" for more information, and watch it in action:

![2018-05-29 14.12.03](//images.ctfassets.net/le3mxztn6yoo/30ts8Zdk0gkoYquOyyOQsu/bdad165ebb471034c45b91777dd59bdb/2018-05-29_14.12.03.gif)

## Easy organization-wide Google Workspace rollout of the Chrome extension
You can now install and preconfigure the [Sourcegraph Chrome extension](https://docs.sourcegraph.com/integration/browser_extension) for all users in your Google Workspace organization.

This means that everyone in your organization will get code intelligence in files, diffs, and PRs on GitHub.com, GitHub Enterprise, and Phabricator. After the admin configures [Google Workspace automatic installation of the Chrome extension](https://docs.sourcegraph.com/integration/google_gsuite), each user's Chrome browser will install and configure the Sourcegraph Chrome extension automatically. (It may take a few hours to fully propagate the Chrome settings.) Then all users will see code intelligence like this:

![Screenshot from 2018-06-18 13-29-15](//images.ctfassets.net/le3mxztn6yoo/1YQvAWkZxKYIEkye4wu4Q0/00541554ad928d47fbeed0f88646f8af/Screenshot_from_2018-06-18_13-29-15.png)

See "[Automatically install with Google Workspace](https://docs.sourcegraph.com/integration/google_gsuite)" in the Sourcegraph documentation for more information.

## Filtering search results by repository
When you search for code on Sourcegraph, it's now easier to refine the results by repository.

After you perform a search, a new **Repositories** row of filters appears that shows you how many results come from each repository. Clicking on a repository will show you only results from that repository.

![Screenshot from 2018-06-18 12-23-18](//images.ctfassets.net/le3mxztn6yoo/2HcvfjFEWAMmKGM6uEeSmI/f5241982bc0a856dbc9bee80e663d363/Screenshot_from_2018-06-18_12-23-18.png)

To keep search fast, the repositories and counts may be approximate (indicated with a `+`). Add `count:1000` or some other high number to ask for all results to get a complete listing of matched repositories.

Try it on Sourcegraph.com: search for [repogroup:sample open](https://sourcegraph.com/search?q=repogroup:sample+open).

## Large result sets and pagination
It's now easier to work with searches with many results and to share search links with teammates:

- Searches that find all results (e.g. there is no `+` after the result count) will be sorted in a stable way. If you reload the page or share the link with someone else, the list of results will be the exact same (assuming the underlying repository contents don't change in the meantime).
- If you perform a search that does not find all results (e.g. there is a `+` after the result count), you can click the “Show more” to look for more results or you can manually specify the number of results to search for by adding `count:N` to your search query.
- As you scroll down the list of search results, the URL in your browser's address bar is updated to point to your position (with `&at=N`). So, if you reload or share the link, the scroll position will be preserved.

One neat use case this helps with is large-scale refactoring, such as renaming symbols or deleting code from many repositories. Just perform a Sourcegraph search that matches the to-be-refactored code, and post the search link in an issue or share it with the team that's working on the refactor. When the search has no more results, you know you're done!

Try it on Sourcegraph.com: search for [repogroup:sample x](https://sourcegraph.com/search?q=repogroup:sample+x).

## Improved code view and hover tooltips

Sourcegraph’s code view and tooltips were rewritten from the ground up to be smoother and to support more parts of the [Language Server Protocol](http://langserver.org/).

- "Go to definition" and other actions now only require a single click.
- The hover now has a button to “Find implementations” of interfaces and concrete types (if supported by the language server).
- Many visual glitches were fixed with hovers and token highlighting.
- You can hover over the plug icon in the top right to see the code intelligence status for the current file (to see what features are supported, such as hovers, definitions, references, and implementations).
- Error messages (such as compiler errors) from the language server are displayed in the hover, so you know the reason if something isn't working.

![Screenshot from 2018-06-18 12-45-39](//images.ctfassets.net/le3mxztn6yoo/55rD6WCzp6oGysIUYcweuK/56bf74c8acc452d8686b2e082283a3e2/Screenshot_from_2018-06-18_12-45-39.png)

[Try the new code view and hover tooltips on Sourcegraph.com.](https://sourcegraph.com/github.com/golang/lint/-/blob/lint.go#L60)

## Migrating from Oracle OpenGrok to Sourcegraph

Many of our customers have switched from Oracle's [OpenGrok](http://github.com/oracle/opengrok) to Sourcegraph for code search. We wrote up a migration guide to make this easier for other organizations: "[Migrating from Oracle OpenGrok to Sourcegraph for code search](https://docs.sourcegraph.com/admin/migration/opengrok)".

## More `src` CLI commands

The [`src` CLI tool](https://github.com/sourcegraph/src-cli) makes it easy to use the Sourcegraph API from the command line. It now supports:

- Listing, enabling, and disabling repositories — see `src repos -h`
- Managing users — see `src users -h`
- Managing organizations — see `src orgs -h`
- Running arbitrary GraphQL queries — see `src api -h`

To install it, run `go get -u github.com/sourcegraph/src-cli/cmd/src` or [download a release](https://github.com/sourcegraph/src-cli#installation).

## Changelog

See the [Sourcegraph changelog](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md) for a list of all changes in this release.

### About the author

_Quinn Slack is the CEO and co-founder of Sourcegraph, the code intelligence platform for dev teams and making coding more accessible to more people. Prior to Sourcegraph, Quinn co-founded Blend Labs, an enterprise technology company dedicated to improving home lending and was an egineer at Palantir, where he created a technology platform to help two of the top five U.S. banks recover from the housing crisis. Quinn has a BS in Computer Science from Stanford, you can chat with him on Twitter [@sqs](https://twitter.com/sqs)._
