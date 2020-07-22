---
title: 'Indexed non-master branches'
author: 'Keegan Carruthers-Smith'
publishDate: 2020-07-20T00:00-07:00
tags: ["blog"]
slug: indexed-non-master-branches
heroImage: https://about.sourcegraph.com/sourcegraph-mark.png
published: true
---

# Indexed non-master branches (#[6728](https://github.com/sourcegraph/sourcegraph/issues/6728))

Developer: [Keegan](https://github.com/keegancsmith)

Developers often want to search code that isn’t their default branch, like long-lived release branches or important tags. We added version contexts in Sourcegraph 3.16  to make it easier for developers to search a collection of repositories at specified revisions. However, Sourcegraph only indexed your default branch. This meant that when searching a non-default branch for the first time, Sourcegraph would not consult an index, leading to potentially multi-second searches. Or in the case of very large collections of code, time out. In Sourcegraph 3.18, we now use an index on the default branch to speed up these search operations, such that they happen in under a second, and have added the capability to index branches other than the default branch.

[HEAD](https://git-scm.com/docs/gitglossary#Documentation/gitglossary.txt-aiddefHEADaHEAD) is a [symbolic reference](https://git-scm.com/docs/gitglossary#Documentation/gitglossary.txt-aiddefsymrefasymref) to the current branch in git. The HEAD of a repository you clone is your default branch (by default “master” in Git). So “HEAD” in Sourcegraph is your default branch.


### Example configuration

Branches:

![Example configuration for branches](images/expfeatures1.png "Example configuration for branches")


Version Contexts:

![Example configuration for version contexts](images/expfeatures2.png "Example configuration for branches")

Any repo@revision mentioned in a version context or in `search.index.branches` will be indexed by the periodic indexing process (you may need to wait a few minutes). As an admin you can view what is indexed for a repository through the repository setting page (indexed section).

The same periodic process that cleans up old indexes and deleted repositories will also clean up deleted branches, so this gets cleaned up automatically.

This scales with the number of _unique_ documents at a path. For example if you index a branch A which only has one file different from your default branch, the index will only grow in size by one document. So in practice most indexes won’t grow much by adding a branch. We have a limit of 64 indexed branches per repository.
