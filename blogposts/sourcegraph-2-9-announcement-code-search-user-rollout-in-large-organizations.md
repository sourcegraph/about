---
title: 'Sourcegraph 2.9: Scaling code search and user rollout in large organizations'
author: 'Quinn Slack'
publishDate: 2018-06-19T10:30-07:00
tags: [
  "blog"
]
slug: sourcegraph-2-9-announcement-code-search-user-rollout-in-large-organizations
heroImage: //images.ctfassets.net/le3mxztn6yoo/1TbeS9cVu0MOE4soS2W2wQ/6089a348cac88a3d460771b5b65c3e7c/Screenshot_from_2018-06-19_09-35-26.png
published: true
---

In Sourcegraph 2.9, we focused on improving the code search, rollout, and deployment experience for organizations with 100s and 1,000s of developers and repositories.

We're building Sourcegraph to be the **best way for developers to search and browse code**, and we're thankful for all the feedback (especially from these large customers) that helped us plan and ship this release.

New in Sourcegraph 2.9:

- [Easy organization-wide G Suite installation of the Chrome extension](#easy-organization-wide-g-suite-rollout-of-the-chrome-extension)
- [Filtering search results by repository](#filtering-search-results-by-repository)
- [Large result sets and pagination](#large-result-sets-and-pagination)
- [Improved code view and hover tooltips](#improved-code-view-and-hover-tooltips)
- [Migrating from Oracle OpenGrok to Sourcegraph](#migrating-from-oracle-opengrok-to-sourcegraph)
- [More language servers running on Sourcegraph.com for open-source code](#more-language-servers-running-on-sourcegraphcom-for-open-source-code)
- [More `src` CLI commands](#more-src-cli-commands)
- [Plus much more in the changelog](#full-changelog-from-28-to-29)

Ready to install or upgrade? [**Get Sourcegraph 2.9.**](/)

**What is Sourcegraph?**

Sourcegraph is a self-hosted code search and intelligence tool that helps your team code more productively. With Sourcegraph, developers can find code examples, view references/callers, locate definitions, etc., across all their organization's code in a few seconds with just a few keystrokes. It works great with GitHub, GitHub Enterprise, GitLab, Bitbucket Server, Phabricator, and many other tools.

Sourcegraph runs securely in your own network, takes 5 minutes to install, scales to 1,000s of developers and 10,000s of repositories, and is free to use (with paid upgrades starting at [$5/user/month](/pricing)). It pretty quickly becomes one of the most-used tools in an organization, as we hear from teams of 10s–1,000s of developers using Sourcegraph.

See "[Sourcegraph overview](/docs/overview)" and "[Sourcegraph tour](/docs/tour)" for more information, and watch it in action:

![2018-05-29 14.12.03](//images.ctfassets.net/le3mxztn6yoo/30ts8Zdk0gkoYquOyyOQsu/bdad165ebb471034c45b91777dd59bdb/2018-05-29_14.12.03.gif)

## Easy organization-wide G Suite rollout of the Chrome extension
You can now install and preconfigure the [Sourcegraph Chrome extension](/docs/features/browser-extension) for all users in your G Suite organization.

This means that everyone in your organization will get code intelligence in files, diffs, and PRs on GitHub.com, GitHub Enterprise, and Phabricator. After the admin configures [G Suite automatic installation of the Chrome extension](/docs/features/browser-extension/#automatically-install-with-g-suite), each user's Chrome browser will install and configure the Sourcegraph Chrome extension automatically. (It may take a few hours to fully propagate the Chrome settings.) Then all users will see code intelligence like this:

![Screenshot from 2018-06-18 13-29-15](//images.ctfassets.net/le3mxztn6yoo/1YQvAWkZxKYIEkye4wu4Q0/00541554ad928d47fbeed0f88646f8af/Screenshot_from_2018-06-18_13-29-15.png)

See "[Automatically install with G Suite](/docs/features/browser-extension/#automatically-install-with-g-suite)" in the Sourcegraph documentation for more information.

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

Many of our customers have switched from Oracle's [OpenGrok](http://github.com/oracle/opengrok) to Sourcegraph for code search. We wrote up a migration guide to make this easier for other organizations: "[Migrating from Oracle OpenGrok to Sourcegraph for code search](/docs/migration/oracle-opengrok-to-sourcegraph)".

## More language servers running on Sourcegraph.com for open-source code

We've deployed many more experimental language servers to Sourcegraph.com, so you get [code intelligence](/docs/code-intelligence) when browsing any open-source code hosted on GitHub, GitLab, or Bitbucket.

Try them! Each language listed links to a file on Sourcegraph.com with code intelligence. It may take up to 30 seconds to initialize, 
depending on load.

* [Bash](https://sourcegraph.com/github.com/LUSHDigital/modelgen@7347947/-/blob/install.sh)
* [Clojure](https://sourcegraph.com/github.com/jacobemcken/workdays/-/blob/src/workdays/core.clj#L1)
* [C++](https://sourcegraph.com/github.com/antirez/redis/-/blob/src/expire.c#L242:39)
* [C#](https://sourcegraph.com/github.com/chrismwendt/ray-tracer/-/blob/render_hawk_2/scene_class.cs#L4)
* [CSS](https://sourcegraph.com/github.com/tabler/tabler/-/blob/dist/assets/plugins/prismjs/plugin.css#L159)
* [Dockerfile](https://sourcegraph.com/github.com/moby/datakit/-/blob/ci/self-ci/Dockerfile#L7:5)
* [Elixir](https://sourcegraph.com/github.com/UltraDark/ultradark_core/-/blob/lib/blockchain.ex#L18:7)
* [Haskell](https://sourcegraph.com/github.com/chrismwendt/MiniJava/-/blob/src/RegisterAllocator.hs#L103)
* [HTML](https://sourcegraph.com/github.com/daxeel/blockshell/-/blob/templates/blocks.html)
* [Lua](https://sourcegraph.com/github.com/daurnimator/luatz/-/blob/luatz/gettime.lua#L31:12)
* [OCaml](https://sourcegraph.com/github.com/tezos/tezos/-/blob/src/bin_attacker/attacker_minimal.ml#L41:7)
* [R](https://sourcegraph.com/github.com/blmoore/mandelbrot/-/blob/R/util.R#L30:32)
* [Ruby](https://sourcegraph.com/github.com/MatiasFMolinari/blockchain-ruby/-/blob/blockchain.rb#L13:6)
* [Rust](https://sourcegraph.com/github.com/databricks/click/-/blob/src/connector.rs#L56:66)
* [Swift](https://sourcegraph.com/github.com/RLovelett/langserver-swift/-/blob/Sources/LanguageServerProtocol/Types/Server.swift#L123)

## More `src` CLI commands

The [`src` CLI tool](https://github.com/sourcegraph/src-cli) makes it easy to use the Sourcegraph API from the command line. It now supports:

- Listing, enabling, and disabling repositories — see `src repos -h`
- Managing users — see `src users -h`
- Managing organizations — see `src orgs -h`
- Running arbitrary GraphQL queries — see `src api -h`

To install it, run `go get -u github.com/sourcegraph/src-cli/cmd/src` or [download a release](https://github.com/sourcegraph/src-cli#installation).

## Full changelog (from 2.8 to 2.9)

From the [Sourcegraph changelog](/changelog):

* Hover tooltips were rewritten to fix a couple of issues and are now much more robust, received a new design and show more information.
* The `max:` search flag was renamed to `count:` in 2.8.8, but for backward compatibility `max:` has been added back as a deprecated alias for `count:`.
* Drastically improved the performance/load time of the Code Intelligence site admin page.
* The site admin code intelligence page now displays an error or reason whenever language servers are unable to be managed from the UI or Sourcegraph API.
* The ability to directly specify the root import path of a repository via `.sourcegraph/config.json` in the repo root, instead of relying on the heuristics of the Go language server to detect it.
* Configuring Bitbucket Server now correctly suppresses the the toast message "Configure repositories and code hosts to add to Sourcegraph Server."
* A bug where canonical import path comments would not be detected by the Go language server's heuristics under `cmd/` folders.
* Fixed an issue where a repository would only be refreshed on demand by certain user actions (such as a page reload) and would otherwise not be updated when expected.
* If a code host returned a repository-not-found or unauthorized error (to `repo-updater`) for a repository that previously was known to Sourcegraph, then in some cases a misleading "Empty repository" screen was shown. Now the repository is displayed as though it still existed, using cached data; site admins must explicitly delete repositories on Sourcegraph after they have been deleted on the code host.
* Improved handling of GitHub API rate limit exhaustion cases. Cached repository metadata and Git data will be used to provide full functionality during this time, and log messages are more informative. Previously, in some cases, repositories would become inaccessible.
* Fixed an issue where indexed search would sometimes not indicate that there were more results to show for a given file.
* Fixed an issue where the code intelligence admin page would never finish loading language servers.
* Search scopes have been consolidated into the "Filters" bar on the search results page.
* Usernames and organization names of up to 255 characters are allowed. Previously the max length was 38.
* The target commit ID of a Git tag object (i.e., not lightweight Git tag refs) is now dereferenced correctly. Previously the tag object's OID was given.
* Fixed an issue where AWS Code Commit would hit the rate limit.
* Fixed an issue where dismissing the search suggestions dropdown did not unfocus previously highlighted suggestions.
* Fixed an issue where search suggestions would appear twice.
* Indexed searches now return partial results if they timeout.
* Git repositories with files whose paths contain `.git` path components are now usable (via indexed and non-indexed search and code intelligence). These corrupt repositories are rare and generally were created by converting some other VCS repository to Git (the Git CLI will forbid creation of such paths).
* Various diff search performance improvements and bug fixes.
* New Phabricator extension versions would used cached stylesheets instead of the upgraded version.
* Fixed an issue where hovers would show an error for Rust and C/C++ files.
* Sourcegraph Server now emits the most recent log message when redis terminates to make it easier to debug why redis stopped.
* Organization invites (which allow users to invite other users to join organizations) are significantly improved. A new accept-invitation page was added.
* The new help popover allows users to easily file issues in the Sourcegraph public issue tracker and view documentation.
* An issue where Java files would be highlighted incorrectly if they contained JavaDoc blocks with an uneven number of opening/closing `*`s.
* The `secretKey` site configuration value is no longer needed. It was only used for generating tokens for inviting a user to an organization. The invitation is now stored in the database associated with the recipient, so a secret token is no longer needed.
* The `experimentalFeatures.searchTimeoutParameter` site configuration value has been removed. It defaulted to `enabled` in 2.8 and it is no longer possible to disable.
* Added syntax highlighting for TOML files (including Go `Gopkg.lock` and Rust `Cargo.lock` files), Rust files, GraphQL files, Protobuf files, and `.editorconfig` files.
* The "invite user" site admin page was moved to a sub-page of the users page (`/site-admin/users/new`).
* It is now possible for a site admin to create a new user without providing an email address.
* Checks for whether a repo is cloned will no longer exhaust open file pools over time.
* The Phabricator extension shows code intelligence status and supports enabling / disabling code intelligence for files.
* Queries for repositories (in the explore, site admin repositories, and repository header dropdown) are matched on case-insensitive substrings, not using fuzzy matching logic.
* HTTP Authorization headers with an unrecognized scheme are ignored; they no longer cause the HTTP request to be rejected with HTTP 401 Unauthorized and an "Invalid Authorization header." error.
* Renamed the `max` search flag to `count`. Searches that specify `count:` will fetch at least that number of results, or the full result set.
* Bumped `lsp-proxy`'s `initialize` timeout to 3 minutes for every language.
* Search results are now sorted by repository and file name.
* More easily accessible "Show more" button at the top of the search results page.
* Results from user satisfaction surveys are now always hosted locally and visible to admins. The `"experimentalFeatures": { "hostSurveysLocally" }` config option has been deprecated.
* If the OpenID Connect authentication provider reports that a user's email address is not verified, the authentication attempt will fail.
* Fixed an issue where the search results page would not update its title.
* The session cookie name is now `sgs` (not `sg-session`) so that Sourcegraph 2.7 and Sourcegraph 2.8 can be run side-by-side temporarily during a rolling update without clearing each other's session cookies.
* Fixed the default hostnames of the C# and R language servers
* Fixed an issue where deleting an organization prevented the creation of organizations with the name of the deleted organization.
* Non-UTF8 encoded files (e.g. ISO-8859-1/Latin1, UTF16, etc) are now displayed as text properly rather than being detected as binary files.
* Improved error message when lsp-proxy's initalize timeout occurs
* Fixed compatibility issues and added [instructions for using Microsoft ADFS 2.1 and 3.0 for SAML authentication](/docs/config/authentication/saml-microsoft-adfs).
* Fixed an issue where external accounts associated with deleted user accounts would still be returned by the GraphQL API. This caused the site admin external accounts page to fail to render in some cases.
* Significantly reduced the number of code host requests for non github.com or gitlab.com repositories.
* The repository revisions popover now shows the target commit's last-committed/authored date for branches and tags.
* Setting the env var `INSECURE_SAML_LOG_TRACES=1` on the server (or the `sourcegraph-frontend` pod in Data Center) causes all SAML requests and responses to be logged, which helps with debugging SAML.
* Site admins can now view user satisfaction surveys grouped by user, in addition to chronological order, and aggregate summary values (including the average score and the net promoter score over the last 30 days) are now displayed.
* The site admin overview page displays the site ID, the primary admin email, and premium feature usage information.
* Added Haskell as an experimental language server on the code intelligence admin page.

---

**Ready to install or upgrade? [Get Sourcegraph 2.9.](/)**

Questions/feedback/complaints/requests? Contact us at [@srcgraph](https://twitter.com/srcgraph) or <mailto:support@sourcegraph.com>, or file issues on our [public issue tracker](https://github.com/sourcegraph/issues/issues). We're planning for our next release, Sourcegraph 2.10 in July, right now, so the sooner we hear from you, the better!
