---
title: 'Introducing Sourcegraph 2.3'
authors:
  - name: Quinn Slack
    url: https://twitter.com/sqs
publishDate: 2017-12-05T00:00-08:00
tags: [
  "blog"
]
slug: introducing-sourcegraph-server-2-3
heroImage: https://images.ctfassets.net/le3mxztn6yoo/3xHwIft9qUqwqcYiYGamAu/c4dbe46cf2d8698472ce3e63aef0a7c2/Screen_Shot_2017-12-05_at_12.17.13_PM.png
published: true
---

Search code over all of your company's repositories, save and reuse common search queries and scopes, and do it all more quickly with style. This release also includes previews of diff/commit search and author/date filters, which help you debug issues and find usage examples in your company's code.

Sourcegraph gives the power of [great code search](https://docs.sourcegraph.com/code_search) to every developer at your company, so you can ship better code faster. It runs securely in your own network and is easy to install and upgrade.

Ready to install or upgrade?
**Install [Sourcegraph 2.3](https://docs.sourcegraph.com)** with a single command to get great code search today. Current customers can [update now](https://docs.sourcegraph.com/admin/updates).

Key highlights of Sourcegraph 2.3:
* [Better GitHub.com and GitHub Enteprise integration](#better-githubcom-and-github-enterprise-integration)
* [Light color theme](#light-color-theme)
* [Organizations](#organizations)
* [Custom search scopes](#custom-search-scopes)
* [Saved queries](#saved-queries)
* [Admin dashboard](#admin-dashboard)
* [More single sign-on (SSO) integrations: OpenID Connect and SAML](#more-single-sign-on-sso-integrations-openid-connect-and-saml)
* [Search and code intelligence on GitHub.com in Chrome/Firefox](#search-and-code-intelligence-on-githubcom-in-chromefirefox)
* [Repository list page](#repository-list-page)
* [Faster file tree](#faster-file-tree)
* [Go to canonical URL ‘y' hotkey](#go-to-canonical-url-y-hotkey)
* [Enterprise improvements](#enterprise-improvements)
* [Features in preview](#other-features-in-preview)

## Better GitHub.com and GitHub Enterprise integration

Sourcegraph now integrates more closely with GitHub.com and GitHub Enterprise to synchronize the list of searchable repositories. You can now specify a token for a bot user with access to the precise set of repositories to make searchable on Sourcegraph. This works for public and private repositories. You can even connect your Sourcegraph instance to GitHub.com and multiple GitHub Enterprise servers at the same time.

Previously, server admins needed to add each repository manually. That still works for any Git repository host, and we'll expand this easier integration method to support more hosts soon.

See how to set up Sourcegraph to search over repositories hosted on:

* [GitHub.com and GitHub Enterprise](https://docs.sourcegraph.com/integration/github) (new)
* [Phabricator](https://docs.sourcegraph.com/integration/phabricator) (new)
* [AWS CodeCommit](https://docs.sourcegraph.com/integration/aws_codecommit) (also see "[Great code search for AWS CodeCommit](/blog/great-code-search-for-aws-codecommit)")
* [Bitbucket.org, Bitbucket Server, GitLab, and other repository hosts](https://docs.sourcegraph.com/admin/repo/add)

## Light color theme
By popular request, we've added a light color theme in addition to our current dark theme! It's not just aesthetic: we've heard from people who use Sourcegraph on their daily train commute and on the beach (really!), and the light color theme handles glare better. Click the sun/moon toggle next to your profile avatar to switch between the light and dark themes.

<Figure 
  src="//images.contentful.com/le3mxztn6yoo/2GTGlQWblSkoCiCom0IQwq/d6dc97ee8e65d66883369f613e5b0643/SS2.3_light_theme.gif"
  alt="SS2.3 light theme"
/>

## Organizations
You can now create and join organizations (also known as “orgs”). Organizations are named groups of users with an associated JSON settings file. These settings take effect for all users who are members of the organization. What kinds of settings, you might ask? This release includes custom search scopes and saved queries, and more features that rely on configuration will be rolling out soon.

Server admins can [create organizations that new users automatically join](https://docs.sourcegraph.com/admin/organizations), and any user can create organizations and invite new members from the settings page.

<Figure
  src="//images.contentful.com/le3mxztn6yoo/3xHwIft9qUqwqcYiYGamAu/c4dbe46cf2d8698472ce3e63aef0a7c2/Screen_Shot_2017-12-05_at_12.17.13_PM.png"
  alt="SS2.3 orgs"
/>

## Custom search scopes
Every project and team has a different set of repositories they commonly work with and search over. We've added [custom search scopes](https://docs.sourcegraph.com/code_search/explanations/features/#scope) to enable users and organizations to search over predefined subsets of files and repositories. Instead of typing the set of files and repositories you search over, you can now simply define a search scope and select it from the dropdown next to the search box whenever you need.

<Figure
  src="//images.contentful.com/le3mxztn6yoo/6mdWr31pBY2YwgQwmmE446/1c099368b51400f18a9cefdecb8d79dc/SS2017_settings_and_search_scopes.gif"
  alt="SS2.3 settings and search scopes"
/>

## Saved queries
[Saved queries](https://docs.sourcegraph.com/code_search/explanations/features/#saved-queries) let you save and describe search queries so you can easily monitor the results on an ongoing basis. You might think of them as the beginning of “Google Alerts or IFTTT/Zapier for your code.”

You can create a saved query for anything searchable, including (with this release) diffs and commits across all branches of your repositories. Saved queries can be an early warning system for common problems in your code--and a way to monitor best practices, the progress of refactors, etc.

See some [examples of useful saved queries](https://docs.sourcegraph.com/code_search/explanations/features/#examples-of-useful-saved-queries), including:
* Recently security-related changes on all branches (which we recommend tech leads monitor every day)
* Hacks and TODOs in code
* New usages of specific functions
* Lint-disable on unmerged branches

<Figure
  src="//images.contentful.com/le3mxztn6yoo/5X92w2GneMcmwKsgUEqc0O/347154873b0538ebeb277261a26d39f2/SS2.3_saved_queries_0.5-2.gif"
  alt="SS2.3 saved queries"
/>

## Admin dashboard

Server admins now have a dashboard to view and manage users and usage. Go to **User menu > Site admin** to see the site admin area. Add admin users in the **Users** site admin page.

## More single sign-on (SSO) integrations: OpenID Connect and SAML

Sourcegraph now supports [single sign-on (SSO) user authentication](https://docs.sourcegraph.com/admin/auth) via OpenID Connect and SAML 2.0. This includes (but is not limited to) support for the following SSO providers: Okta, OneLogin, Ping Identity, Auth0, Salesforce Identity, and Microsoft Azure Active Directory.

## Search and code intelligence on GitHub.com in Chrome/Firefox

The [Sourcegraph browser extension (Chrome/Firefox)](https://docs.sourcegraph.com/integration/browser_extension) now supports self-hosted Sourcegraph instances. After entering the Sourcegraph URL in the browser extension's options menu (revealed by clicking on the Sourcegraph icon in the browser toolbar), you'll get code intelligence on GitHub.com or GitHub Enterprise.

<Figure
  src="//images.contentful.com/le3mxztn6yoo/1fhRd4FYxcACYQOoy8yw8U/fb51d99384947e0a8bac29dff35b3619/SS2.3_GitHub_browser_extension.gif"
  alt="SS2.3 GitHub browser extension"
/>

## Repository list page
Click **Browse** in the navigation bar to view a list of all repositories on the server that are available for searching and browsing.

## Markdown view
Markdown files are now rendered. See an example [rendered public markdown file](https://sourcegraph.com/github.com/gorilla/mux/-/blob/README.md) on Sourcegraph.com. To view raw markdown, click the “View source” button on the top right of the code view.

## Faster file tree
The file tree now only shows the siblings of the current file, so it's much easier to use when you're deep inside a repository. And it does the right thing if you navigate to parent directories using the breadcrumbs. Previously the file tree would always show the entire tree, but based on feedback, we think the new tree works better for both large and small repositories.

## Go to canonical URL ‘y' hotkey
Press the `y` key when viewing a file to go to its permanent, canonical URL, with the full 40-character Git commit SHA in the URL.

## Enterprise improvements
Sourcegraph Enterprise customers get all of these improvements plus more, including code intelligence improvements and others detailed separately in the Enterprise release notes.

## Other features (in preview)
We're also excited to ship previews of other features, by popular demand. We expect these features to be out of preview for next month's release. In the meantime, please try them, send feedback, and report issues.

### Diff search
You can now search over commit diffs using the `type:diff` operator in search queries. This is useful when debugging issues (“what changed about the parseDocument function?”) and finding usage examples (“show me a self-contained commit adding a new page to our web app”). [See a sample diff search](https://sourcegraph.com/search?q=r:moby/moby+type:diff+MarshalJSON+after:%221+month+ago%22&sq=) on a public repository on Sourcegraph.com.

But that's not all! For the intrepid, you can search within commit diffs on multiple branches by specifying them in a `repo:` field after the `@` sign. [See non-master-branch commits containing `const`](https://sourcegraph.com/search?q=r:Microsoft/vscode%24%40*refs/heads/:%5Erefs/heads/master+type:diff+const+after:%221+week+ago%22&sq=) in a public repository on Sourcegraph.com, for example. After the `@`, separate Git refs with `:`, specify Git ref globs by prefixing them with `*`, and exclude commits reachable from a ref by prefixing it with `^`. We'll improve documentation as this feature nears release.

### Commit search
Like diff search above, but use `type:commit` to search inside commit *messages*. [See all commits mentioning “bug” or “fix”](https://sourcegraph.com/search?q=r:golang/go%24+type:commit+after:%221+month+ago%22+bug%7Cfix&sq=) in a public repository on Sourcegraph.com, for example.

### New search filters: author, committer, before, after, and commit message
To go along with diff and commit search, we've added new search filters. While in preview, these filters only apply to `type:diff` and `type:commit` searches, not to normal file searches.

* `author:name` or `author:email@example.com` to show only diffs or commits authored by that user ([example](https://sourcegraph.com/search?q=repo:golang/go%24+author:bradfitz+type:commit+clarify&sq=))
* `committer:name` or `committer:email@example.com` (same as above, but for the Git committer, which sometimes differs from the Git author)
* `after:”3 weeks ago”`, `before:”june 25, 2017”`, `before:”last thursday”`, etc., to filter by commit date ([example](https://sourcegraph.com/search?q=repo:golang/go%24+type:diff+/package+%5Cw%2B_test/+after:%222+months+ago%22+before:%221+month+ago%22&sq=))
* `message:”hello”` to show only commits or diffs whose commit message (including the full message body) contains “hello” ([example](https://sourcegraph.com/search?q=repo:Microsoft/TypeScript%24+type:commit+after:%222+weeks+ago%22+file:%5C.ts%24+message:%22fix%28es%29%3F+%23%22&sq=))

## Changelog

See the [Sourcegraph changelog](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md) for a list of all changes in this release.

## Upgrade today

Want Sourcegraph? **[Install Sourcegraph](https://docs.sourcegraph.com/#quickstart)** for free with a single command.

Current customers can [update now](https://docs.sourcegraph.com/admin/updates).

### About the author

_Quinn Slack is the CEO and co-founder of Sourcegraph, the code intelligence platform for dev teams and making coding more accessible to more people. Prior to Sourcegraph, Quinn co-founded Blend Labs, an enterprise technology company dedicated to improving home lending and was an egineer at Palantir, where he created a technology platform to help two of the top five U.S. banks recover from the housing crisis. Quinn has a BS in Computer Science from Stanford, you can chat with him on Twitter [@sqs](https://twitter.com/sqs)._
