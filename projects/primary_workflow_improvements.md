# Primary workflow user experience improvements

Sourcegraph has added [a lot of new features](https://about.sourcegraph.com/blog) lately, but we haven't neglected the existing features. We've fixed several core user experience issues:

- The close button in the panel header stays located on the top [Panel header close button fix](https://github.com/sourcegraph/sourcegraph/pull/406)
- The Phabricator icon is now displayed correctly [Display Phabricator Icon correctly](https://github.com/sourcegraph/sourcegraph/pull/340)
- If the user adds a filter duplicate, their choice of filter name will be shown on the filter chip [user prioritized filter chip name](https://github.com/sourcegraph/sourcegraph/pull/348)
- View on GitHub button now links to the right branch and commit range [Link to the right branch and commit range on GitHub](https://github.com/sourcegraph/sourcegraph/issues/294)

You might call this our version of [Project Paper Cuts](https://blog.github.com/2018-08-28-announcing-paper-cuts/)!

## TODO

- Go-to-Github icon should link to rev, not SHA rev (https://github.com/sourcegraph/sourcegraph/issues/407)
- Move selected search filters to the front (https://github.com/sourcegraph/sourcegraph/issues/305)
- No Search results highlighting when there are certain characters in the search, on enterprise/dogfood only (https://github.com/sourcegraph/enterprise/issues/11960)
- Changing auth.accessTokens results in `Error: Timeout` when restarting server (https://github.com/sourcegraph/enterprise/issues/12942)
