---
title: 'Sourcegraph for GitLab'
author: 'Isaac Snow'
publishDate: 2018-10-01T00:00-07:00
tags: [
  "blog"
]
slug: sourcegraph-for-gitlab
heroImage: //images.ctfassets.net/le3mxztn6yoo/t4Qpcq5kA0AYM24Ws4mOk/4edf5502a936bbec90c262fa00355aed/sourcegraph-mark.png
published: true
---

You can now get code intelligence on GitLab with the Sourcegraph browser
extension, just as 10,000s of developers get on GitHub now.

![Sourcegraph for GitLab](https://cl.ly/7916fe1453a4/download/sourcegraph-for-gitLab.gif)

To start using this:

1. Install [Sourcegraph for Chrome](https://chrome.google.com/webstore/detail/sourcegraph/dgjhfomjieaadpoljlnidmbgkdffpack) or [Sourcegraph for Firefox](https://addons.mozilla.org/en-US/firefox/addon/sourcegraph/)
2. Visit [common/executor.go](https://gitlab.com/gitlab-org/gitlab-runner/blob/master/common/executor.go) in [gitlab-org/gitlab-runner](https://gitlab.com/gitlab-org/gitlab-runner) on GitLab (or any other file in a public repository)
3. Enable Sourcegraph for GitLab on Chrome by right clicking the Sourcegraph logo in your browser's
   toolbar and click "Enable Sourcegraph on this domain".
4. Hover over any token in the file to see tooltips

To use this on your company's private code, run a [Sourcegraph instance](https://about.sourcegraph.com/docs).

GitLab is the first of many more code hosts Sourcegraph will support in [the open
source Sourcegraph browser extension](https://github.com/sourcegraph/browser-extensions). Check out the code it took to add
GitLab support: https://sourcegraph.com/github.com/sourcegraph/browser-extensions/-/blob/src/libs/gitlab/code_intelligence.ts

## Implementation Notes

- I want to give GitLab a shoutout for making a really clean DOM. We extend
  several products via the DOM and GitLab's is by far the cleanest. Thanks for
  minding your class names GitLabbers!
