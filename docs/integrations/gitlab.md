---
layout: markdown
title: Code intelligence on GitLab
permalink: docs/features/gitlab-extension
---

The Sourcegraph browser extension adds **go-to-definition**,
**find-references**, **hover tooltips**, and **code search** to all GitLab files
and Merge Requests.
![Sourcegraph for
GitLab](https://cl.ly/7916fe1453a4/download/sourcegraph-for-gitLab.gif)
By default, the extension will add code intelligence and code search to public repositories. The extension can be configured to work on private code by connecting it to a Sourcegraph instance that has [code intelligence](/docs/code-intelligence).

1.  Install the Sourcegraph browser extension for [Chrome](https://chrome.google.com/webstore/detail/sourcegraph/dgjhfomjieaadpoljlnidmbgkdffpack) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/sourcegraph/)
2.  Click the extension icon to connect the browser extension to your Sourcegraph instance. Then, fill in the Sourcegraph URL field with your Sourcegraph URL and hit save.
3.  [Update Sourcegraph site configuration](/docs/config/) to allow the extension to communicate with your Sourcegraph instance:

    ```json
    {
      // ...
      "corsOrigin": "https://gitlab.com"
      // ...
    }
    ```

4.  If you haven't already, [add GitLab to your Sourcegraph configuration.](/docs/config/repositories/#gitlab-configuration)

You're done! You'll now get **code intelligence** and **code search** on GitLab for all private repositories that you've added to Sourcegraph.
