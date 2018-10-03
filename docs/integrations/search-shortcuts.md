---
layout: markdown
title: Search shortcuts
permalink: docs/features/search-shortcuts
---

### Code search from your browser's address bar

If you have the [Sourcegraph browser extension](/docs/features/github-extension) installed, your search shortcut is already configured under the keyword `src`!

In your browser's address bar, type <kbd>src</kbd> followed by <kbd>tab</kbd> in Chrome or <kbd>src</kbd> followed by <kbd>space</kbd> in Firefox to initiate a Sourcegraph Search. You'll see search suggestions in your browser just as you would on your Sourcegraph Instance. You can use these suggestions to go directly to repos, files or more. Otherwise, when you press enter, you'll be taken to your Sourcegraph Instance's search results page for the search you entered.

<img src="./images/SearchShortcut.gif" />

### Manually creating a search shortcut in Chrome

Creating a Chome address bar shortcut for Sourcegraph code search makes it so you can quickly perform code searches with fewer keystrokes.

1.  Perform any code search on your Sourcegraph instance (or Sourcegraph.com for public code). Copy the URL of the search results page to your clipboard.

2.  Go to [`chrome://settings`](chrome://settings). Under **Search engine**, click **Manage search engines**. Next to **Other search engines**, click **ADD**.

<img src="./images/AddButton.png"/>

3.  In the **Add search engine** form, paste the URL you copied (in step 1) in the **URL with %s in place of query** field. Insert the string `%s` into the URL's `?q=` query parameter (and remove any parts of the query that you don't want to keep).

4.  Fill in the keyword field with the keyboard shortcut you want for searching on Sourcegraph. In this example, it's set to <kbd>s</kbd>.

<img src="./images/Replace.png"/>

5.  Click **ADD**.

To use the shortcut, focus in the browser address bar, type in the keyword you chose (such as <kbd>s</kbd>), and press <kbd>tab</kbd>. Now type your Sourcegraph code search query and hit enter. You'll be taken to the search results page on your Sourcegraph instance.

<img src="./images/KeyboardShortcut.png"/>

For more information on setting Chrome search engines, [see Chrome's help page](https://support.google.com/chrome/answer/95426?co=GENIE.Platform%3DDesktop&hl=en).
