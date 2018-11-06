# Search GitHub issues and PRs from Sourcegraph

You can now search GitHub issues and PRs from anywhere you have a Sourcegraph search bar. Enable the “GitHub extras” extension to get issue search.

With the extension installed, adding `type:issue` to any search query will search over your GitHub issues. The extension will also add a `type:issue` search filter to your filters bar.

To search for GitHub issues:
Search for some text on Sourcegraph
Click the `type:issue` filter
Now you’ll see results for matching GitHub issues
For future searches, include `type:issue` in your query

<!-- TODO: this is dependent on building the architecture to sync issues ourselves
Why is searching GitHub issues better on Sourcegraph?
- Speed: using the same search technology that we use for code search, we can search over your issue contents extremely quickly. Also, using our browser extension, you can easily search for issues from your browser search bar, and scope to repos without going to GitHub itself, making issue results easily accessible.
- Search text in comments and issue body, and preview matches: See exactly where your search query is matched in a GitHub issue, whether it’s in a comment or the issue body. When you filter issues on an issue track in GitHub, it will only show you the title, even if the match is in a comment. On Sourcegraph, we will highlight text matches in the result preview, and show you whether matches occurred in a comment or the issue body, so you can more easily find the issue you’re looking for.
- Precise search: Sourcegraph supports searching punctuation and exact matches in your issues, so it’s easier to find logs and code snippets in issues. -->


<!-- TODO: Discuss with @keegan to figure out: 1) how we’ll index issues, and 2) where the extensions will run. -->

The browser extension will add a “Search issues on Sourcegraph” button to the GitHub issue tracker.

We’ve also made it possible to write extensions that add buttons to the issue tracker, just like in the code view. You can use this to add links to complex queries over your issues, such as “Show me all issues where people on my team haven’t responded”.

You can help us build this same functionality for GitLab and Bitbucket Server! Keep track of progress on these by subscribing to these issues: [GitLab](#TODO: add issue link), [Bitbucket](#TODO: add issue link)

<!-- TODO: Add section on the actual extension APIs we added -->
