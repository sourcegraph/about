---
title: "Indexed non-default branches"
authors:
  - name: Keegan Carruthers-Smith
publishDate: 2020-07-20T08:00-07:00
tags: [blog]
slug: indexed-non-default-branches
heroImage: /blog/3.18-indexed-non-master-branches.png
published: true
---

Developers on some teams frequently search multiple revisions, such as long-lived release branches or important tags. We added [version contexts](/blog/sourcegraph-3.16#introducing-version-contexts-to-search-past-releases) in Sourcegraph 3.16 to make it easier for developers to search a collection of repositories at specified revisions. However, Sourcegraph still only *indexed* your default branch (whichever branch `HEAD` points to in Git, conventionally the branch called `master`). This meant that when searching a non-default branch for the first time, Sourcegraph would not consult an index, leading to long, multi-second waits for search results or in some cases, timeouts.

In Sourcegraph 3.18, we have added the ability to index branches other than the default branch, which should keep most searches under one second.

## Example configuration

Here's how you would configure Sourcegraph to index multiple branches:

```json
"experimentalFeatures": {
  "search.index.branches": {
    "github.com/sourcegraph/sourcegraph": ["3.17", "v3.0.0"],
    "github.com/kubernetes/kubernetes": ["release-1.17"],
    "github.com/go-yaml/yaml": ["v2", "v3"]
  }
}
```

And here's how you can enable version contexts to search multiple repositories at a coherent set of (non-default) revisions:

```json
"experimentalFeatures": {
  "versionContexts": [
    {
      "name": "Current",
      "revisions": [
        { "rev": "HEAD", "repo": "github.com/sourcegraph/sourcegraph" },
        { "rev": "HEAD", "repo": "github.com/sourcegraph/deploy-sourcegraph" },
        { "rev": "HEAD", "repo": "github.com/sourcegraph/zoekt" }
      ]
    },
    {
      "name": "3.17",
      "revisions": [
        { "rev": "v3.17.3",  "repo": "github.com/sourcegraph/sourcegraph" },
        { "rev": "3.17",     "repo": "github.com/sourcegraph/sourcegraph" },
        { "rev": "3.17",     "repo": "github.com/sourcegraph/deploy-sourcegraph" },
        { "rev": "8aa57bd3", "repo": "github.com/sourcegraph/zoekt" }
      ]
    }
  ]
}
```

Any `repo@revision` mentioned in a version context or in `search.index.branches` will be indexed by the periodic indexing process (you may need to wait a few minutes for indexing to occur). As an admin you can view what is indexed for a repository through the repository setting page ("Indexing" section).

The same periodic process that cleans up old indexes and deleted repositories will also clean up deleted branches, so this gets cleaned up automatically.

This scales with the number of _unique_ documents at a path. For example, if you index a branch A which only has one file different from your default branch, the index will only grow in size by one document. So in practice, most indexes won't grow much by adding a branch. There is a limit of 64 indexed branches per repository.

GitHub issue: [#6728](https://github.com/sourcegraph/sourcegraph/issues/6728)
