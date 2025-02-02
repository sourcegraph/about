---
title: "Search across multiple revisions of the same repository"
authors:
  - name: Keegan Carruthers-Smith
publishDate: 2020-07-20T09:00-07:00
tags: [blog]
slug: search-multiple-revisions
heroImage: /blog/3.18-search-multiple-revisions.png
published: true
---

Often, you need to understand the differences between code at different branches (especially for release branches that have diverged).

In Sourcegraph 3.18, you can now search across multiple revisions of the same repository by listing multiple branch names (or other revision specifiers) separated by `:` in your query. So to search across multiple specific branches, you'd use something like `repo:myrepo@branch1:branch2:branch2`. To search all branches, use `repo:myrepo@*refs/heads/`.

For example, a search over Sourcegraph versions 3.16 & 3.17 would look something like this:

<a href="https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24%403.17:3.16+CONTAINER_ID&patternType=literal" target="_blank">
  <Figure 
    alt="Search over Sourcegraph versions 3.16 and 3.17" 
    src="/blog/3.18-search-across-revisions.png"
  />
</a>

A search over all branches using [@\*refs/heads/](https://sourcegraph.com/search?q=repo:%5Egithub.com/sourcegraph/sourcegraph%24%40*refs/heads/+CONTAINER_ID&patternType=literal&case=yes) would look like this:

<a href="https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24%40*refs/heads/+CONTAINER_ID&patternType=literal" target="_blank">
  <Figure
    alt="Search over all branches using @*refs/heads/"
    src="/blog/3.18-search-all-branches.png"
  />
</a>

Be aware that searching over all branches may be slower than searching over a single branch. The cost of searching a branch is the same cost as searching a repository. To speed this up, ensure that branches are indexed with our experimental [indexed non-default branches feature](/blog/indexed-non-default-branches).

GitHub issue: [#11668](https://github.com/sourcegraph/sourcegraph/issues/11668)