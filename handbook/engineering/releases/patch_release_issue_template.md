<!--
DO NOTE COPY THIS ISSUE TEMPLATE MANUALLY. Use `yarn run release tracking:patch-issue <version>` from the
`dev/release` directory in the main repository to create a patch release issue, instead.

Arguments:
- $MAJOR
- $MINOR
- $PATCH
-->

# $MAJOR.$MINOR.$PATCH Patch Release

**Attention developers:** Add pending changes to this checklist, cherry-pick the relevant commits onto branch `$MAJOR.$MINOR`. **Only check off items if the relevant PR/commits have been cherry-picked into the branch**:

- [ ] TODO: Add PR or commit links here.
    ```
    git log v$MAJOR.$MINOR.$(($PATCH-1))...$MAJOR.$MINOR --pretty=format:'- [ ] %H %s' --reverse
    ```

## Release Sourcegraph

- [ ] Push the branch [`$MAJOR.$MINOR`](https://github.com/sourcegraph/sourcegraph/tree/$MAJOR.$MINOR) with your cherry-picked commit(s) and make sure CI passes.
- [ ] Push a release candidate tag:
    ```
    git checkout '$MAJOR.$MINOR'
    git tag -a 'v$MAJOR.$MINOR.$PATCH-rc.1' -m 'v$MAJOR.$MINOR.$PATCH-rc.1' && git push origin 'v$MAJOR.$MINOR.$PATCH-rc.1'
    ```
- [ ] If CI passes, push the release tag:
    ```
    git checkout '$MAJOR.$MINOR'
    git tag -a 'v$MAJOR.$MINOR.$PATCH' -m 'v$MAJOR.$MINOR.$PATCH' && git push origin 'v$MAJOR.$MINOR.$PATCH'
    ```

Verify the Sourcegraph Server image works:

- [ ] Wait for the final Docker images to be available at https://hub.docker.com/r/sourcegraph/server/tags.
- [ ] Run the old and new images at least three times to make sure it starts:
    ```
    # 1. Answer YES to delete /tmp/sourcegraph with the old image
    IMAGE=sourcegraph/server:$MAJOR.$MINOR ./dev/run-server-image.sh
    
    # 2. Answer NO to delete /tmp/sourcegraph with the new image
    IMAGE=sourcegraph/server:$MAJOR.$MINOR.$PATCH ./dev/run-server-image.sh
    
    # 3. Answer YES to delete /tmp/sourcegraph with the new image
    IMAGE=sourcegraph/server:$MAJOR.$MINOR.$PATCH ./dev/run-server-image.sh
    ```

## Update Kubernetes deployment

In [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph):

- [ ] Cherry-pick relevant `deploy-sourcegraph` configuration changes from `master` onto the relevant release branch.
    ```
    git checkout $MAJOR.$MINOR
    git pull
    git cherry-pick <commit0> <commit1> ... # all relevant commits from the master branch
    git push $MAJOR.$MINOR
    ```

## Release Docker Compose

- [ ] Release Docker Compose by following [these instructions](https://github.com/sourcegraph/deploy-sourcegraph-docker/blob/master/RELEASING.md)

## Stage release

- [ ] Create a new section for the patch version in the changelog. Verify that all changes that have been cherry picked onto the release branch have been moved to this section of the [CHANGELOG](https://github.com/sourcegraph/sourcegraph/blob/master/CHANGELOG.md) on `main`.
- [ ] Open PRs that publish the new release:
  ```sh
  # Run this in the main sourcegraph repository in the `dev/release` directory on `main` branch:
  yarn run release release:stage
  ```
- [ ] Create a PR to update the [Kubernetes upgrade guide](https://docs.sourcegraph.com/admin/updates/kubernetes) indicating the steps required to upgrade. Add the created pull request to the release campaign:
  ```sh
  yarn run release release:add-to-campaign sourcegraph/sourcegraph <pr-number>
  ```
- [ ] Create a PR to update [deploy-sourcegraph-docker](https://github.com/sourcegraph/deploy-sourcegraph-docker) as required. Add the created pull request to the release campaign:
  ```sh
  yarn run release release:add-to-campaign sourcegraph/deploy-sourcegraph-docker <pr-number>
  ```

## Release

- [ ] From the [release campaign](https://k8s.sgdev.org/organizations/sourcegraph/campaigns), merge the release-publishing PRs created previously.
  - For [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph), also:
    - [ ] Tag the `v$MAJOR.$MINOR.0` release at the most recent commit on the `v$MAJOR.$MINOR` branch.
        ```sh
        VERSION='v$MAJOR.$MINOR.0' bash -c 'git tag -a "$VERSION" -m "$VERSION" && git push origin "$VERSION"'
        ```
  - For [sourcegraph](https://github.com/sourcegraph/sourcegraph), also:
    - [ ] Cherry pick the release-publishing PR from `sourcegraph/sourcegraph@main` into the release branch.
- [ ] Announce that the release is live:
  ```sh
  yarn run release release:close
  ```
