---
title: Sourcegraph for GitLab
description: Sourcegraph features on GitLab
authors:
  - github.com/ijsnow
startdate: 2018-09-18
enddate: 2018-10-01
releasedate: 2018-10-01
publishdate: 2018-10-01
published: false
---

You can now get code intelligence on GitLab with the Sourcegraph browser
extension, just as 10,000s of developers get on GitHub now.

<!-- Gif -->

To start using this:

1. Install [Sourcegraph for Chrome](...) or [Sourcegraph for Firefox](...)
2. Visit <file> in <repo> on GitLab (or any other file in a public repository)
3. Click the Sourcegraph logo in your browser's toolbar (TODO: implement this)
4. Hover over any token in the file to see tooltips

To use this on your company's private code, run a [Sourcegraph instance](...docs).

GitLab is the first of many more code hosts Sourcegraph will support in [the open
source Sourcegraph browser extension](repo). Check out the code it took to add
GitLab support: <link to gitlab/code_intelligence.ts on sourcegraph.com>.

## Implementation Notes

- I want to give GitLab a shoutout for making a really clean DOM. We extend
  several products via the DOM and GitLab's is by far the cleanest. Thanks for
  minding your class names GitLabbers!
