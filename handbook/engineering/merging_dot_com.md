# Merging changes from [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph) 

We have two Sourcegraph Kubernetes cluster installations that we manage ourselves:
 
* [deploy-sourcegraph-dot-com](https://github.com/sourcegraph/deploy-sourcegraph-dot-com)
* [deploy-sourcegraph-dogfood-k8s](https://github.com/sourcegraph/deploy-sourcegraph-dogfood-k8s)

This document describes how to merge changes from [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph) 
(referred to as upstream) into these two installations.

The process is similar to the [process](https://docs.sourcegraph.com/admin/install/kubernetes/configure#fork-this-repository) 
we recommend our customers use to merge changes from upstream. The differences in process originate from the dual purpose
of these two installations: they are genuine installations used by us and outside users (in the case of dot-com) and in addition
to that they are test installations for new changes in code and in deployment. For that reason they are not pinned down to a version
and the docker images are automatically updated to the latest builds.

> Note: What is said about `deploy-sourcegraph-dot-com` also applies to `deploy-sourcegraph-dogfood-k8s` unless otherwise specified.

## Relationship between the repositories

1. https://github.com/sourcegraph/deploy-sourcegraph-dot-com/tree/master strictly tracks the upstream https://github.com/sourcegraph/deploy-sourcegraph/tree/master. 

1. https://github.com/sourcegraph/deploy-sourcegraph-dot-com/tree/release _only_ contains the customizations required to deploy/document sourcegraph.com from the base deployment of Sourcegraph. 

1. https://github.com/sourcegraph/deploy-sourcegraph-dot-com/tree/release is the default branch for this repository, since all customizations to sourcegraph.com should be merged into this branch (like we tell our customers to).

These steps ensure that the diff between https://github.com/sourcegraph/deploy-sourcegraph-dot-com and https://github.com/sourcegraph/deploy-sourcegraph is as small as possible so that the changes are easy to review.  

In order to mimic the same workflow that we tell our customers to follow:

- Customizations / documentation changes that **apply to all customers (not just sourcegraph.com)** should be:
    1. Merged into https://github.com/sourcegraph/deploy-sourcegraph/tree/master
    1. Pulled into https://github.com/sourcegraph/deploy-sourcegraph-dot-com/tree/master:
          ```shell
          git checkout master
          git fetch upstream
          git merge upstream/master
          ```
    1. Merged into https://github.com/sourcegraph/deploy-sourcegraph-dot-com/tree/release by merging https://github.com/sourcegraph/deploy-sourcegraph-dot-com/tree/master into https://github.com/sourcegraph/deploy-sourcegraph-dot-com/tree/release
          ```shell
          git checkout release
          git fetch origin
          git merge origin/master
          ```

- Customizations / documentation changes that **apply to only sourcegraph.com** can be simply merged into the https://github.com/sourcegraph/deploy-sourcegraph-dot-com/tree/release branch. 

## Merging upstream `deploy-sourcegraph` into `deploy-sourcegraph-dot-com`

1. Clone this repository and `cd` into it.
1. If you have not already, `git remote add upstream https://github.com/sourcegraph/deploy-sourcegraph`
1. `git checkout master && git pull upstream/master`
    - `master` of this repository strictly tracks `master` of `deploy-sourcegraph`, so there should be no merge conflicts.
    - If there are any merge conflicts in this step, you may `git checkout master && git rev-parse HEAD && git reset --hard upstream/master && git push -f origin master` which should always be 100% safe to do.
1. `git checkout release && git checkout -B merge_upstream` to create a branch where you will perform the merge.
1. `git merge upstream/master` to merge `deploy-sourcegraph@master` into `merge_upstream`
    - This will give you conflicts which you should address manually.
    - **Before you commit**, ensure the commit message indicates which files had conflicts for reviewers to look at.
    - Use `kubectl apply --dry-run --validate --recursive -f base/` to validate your work.
    - When resolving conflicts to docker image tags choose the `insiders` tag to allow renovate to deploy new builds.
1. Send a PR to this repository for merging `merge_upstream` into `release`.
1. Reviewers should review:
    - The conflicting files.
    - If there are any risks associated with merging that should be watched out for / addressed, 
      such as [documented manual migrations](https://docs.sourcegraph.com/admin/updates/kubernetes)
      that will need to be performed as part of merging the PR.
1. If there are any manual migrations needed, coordinate with the distribution team and apply those first.      
1. Once approved, **squash merge your PR so it can be easily reverted if needed**.
1. Watch CI, which will deploy the change automatically.
1. Check the deployment is healthy afterwards (`kubectl get pods` should show all healthy, searching should work).

