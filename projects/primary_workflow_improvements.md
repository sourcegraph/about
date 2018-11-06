# Primary workflow user experience improvements

Sourcegraph has added [a lot of new features](https://about.sourcegraph.com/blog) lately, but we haven't neglected the existing features. We've fixed several core user experience issues.
You might call this our version of [Project Paper Cuts](https://blog.github.com/2018-08-28-announcing-paper-cuts/)!

- View-On-GitHub and View-On-Gitlab buttons now link to the right branch, line and commit range:[Link to the right branch and commit range on GitHub](https://github.com/sourcegraph/sourcegraph/issues/294), [Link to the right branch, line and commit range on Gitlab](https://github.com/sourcegraph/sourcegraph/pull/532). They used to only link to the master of the repo, forcing the user to navigate it's way back to the branch/file/line/commit range it had been looking at on Sourcegraph. Now the link takes the user to the right view.

- [Go-to-Github icon links to default branch when no rev is given](https://github.com/sourcegraph/sourcegraph/issues/407):
  Originally, if no rev was given, the Go-To-Github Url would link to "HEAD", which in Github would be the latest commit SHA instead of the master/default branch. This meant an additional step of switching to the default branch if one wanted to edit the file.
  Instead of linking to "HEAD", the button now links to the default branch.

- [Search results using index search highlight correctly](https://github.com/sourcegraph/enterprise/issues/11960).
  We found out there is a small Zoekt bug that returns too many lines when using a searching regex. There is now a workaround to limit the match to one line.

- If the user adds a filter duplicate, their choice of filter name will be shown on the filter chip: [User prioritized filter chip name](https://github.com/sourcegraph/sourcegraph/pull/348).

- Users could not edit or delete Saved Searches that were saved in the global settings: [Saved Searches issue](https://github.com/sourcegraph/sourcegraph/issues/369). This has now been resolved and Site Admins can edit and delete Saved Searches. Furthermore, Non-Siteadmin users are now restricted from being able to edit or delete Saved Searches configured at the global level.

Also some minor UI fixes:

- The close button in the panel header stays located on the top [Panel header close button fix](https://github.com/sourcegraph/sourcegraph/pull/406).
- The Phabricator icon is now displayed correctly [Display Phabricator Icon correctly](https://github.com/sourcegraph/sourcegraph/pull/340).
- The view mode icon now shows the correct option when opening files in code view due to a line number in the URL: [View mode fix](https://github.com/sourcegraph/sourcegraph/pull/622).
