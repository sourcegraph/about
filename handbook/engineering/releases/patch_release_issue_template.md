<!--
This template is used for patch releases.
It is not used for our monthly major/minor releases of Sourcegraph.
See [release_issue_template.md](release_issue_template.md) for the monthly release checklist.

Run a find replace on:
- $MAJOR
- $MINOR
- $PATCH
-->

**Attention developers:** Add pending changes to this checklist, cherry-pick the relevant commits onto branch `$MAJOR.$MINOR`, and then check off the item:

- [ ] TODO: Add items

## Release sourcegraph/server

- [ ] Push the branch `$MAJOR.$MINOR` with your cherry-picked commit(s) and make sure CI passes.
- [ ] Push a release candidate tag:
    ```
    VERSION=$MAJOR.$MINOR git checkout "$VERSION"
    VERSION='v$MAJOR.$MINOR.$PATCH-rc.1' bash -c 'git tag -a "$VERSION" -m "$VERSION" && git push origin "$VERSION"'
    ```
- [ ] If CI passes, push the release tag:
    ```
    VERSION=$MAJOR.$MINOR git checkout "$VERSION"
    VERSION='v$MAJOR.$MINOR.$PATCH' bash -c 'git tag -a "$VERSION" -m "$VERSION" && git push origin "$VERSION"'
    ```
- [ ] Wait for the final Docker images to be available at https://hub.docker.com/r/sourcegraph/server/tags.

## Release Kubernetes deployment

In [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph):

- [ ] Wait for Renovate to open a PR to update the image tags and merge that PR ([example](https://github.com/sourcegraph/deploy-sourcegraph/pull/199)).
- [ ] Cherry-pick the image tag update commits from `master` onto `$MAJOR.$MINOR` branch. Then push the release tag:
    ```
    git checkout $MAJOR.$MINOR
    git pull
    git cherry-pick <commit0> <commit1> ... # all relevant commits from the master branch
    git push $MAJOR.$MINOR
    git tag v$MAJOR.$MINOR.$PATCH
    git push v$MAJOR.$MINOR.$PATCH
    ```

## Update the docs

- [ ] Update the version (major.minor.patch) of Sourcegraph in the docs ([example](https://github.com/sourcegraph/sourcegraph/pull/2841)) by running the following
  ```
  find . -type f -name '*.md' -exec sed -i '' -E 's/sourcegraph\/server:[0-9\.]+/sourcegraph\/server:$NEW_VERSION/g' {} +
  ```
  If you have GNU sed (default on Linux), run the following instead:
  ```
  find . -type f -name '*.md' -exec sed -i -E 's/sourcegraph\/server:[0-9\.]+/sourcegraph\/server:$NEW_VERSION/g' {} +
  ```
- [ ] Update versions in docs.sourcegraph.com template ([example](https://github.com/sourcegraph/sourcegraph/pull/2841/files#diff-3d0e70da24a04f44a1fdc404b7242b89))
- [ ] Update `latestReleaseKubernetesBuild` and `latestReleaseDockerServerImageBuild` ([example](https://github.com/sourcegraph/sourcegraph/pull/2370/commits/15925f2769564225e37013acb52d9d0b30e1336c)).
- [ ] [Update deploy-aws version](https://github.com/sourcegraph/deploy-sourcegraph-aws/edit/master/ec2/resources/user-data.sh#L3)
- [ ] [Update deploy-digitalocean version ](https://github.com/sourcegraph/deploy-sourcegraph-digitalocean/edit/master/resources/user-data.sh#L3)
- [ ] Message @slimsag on Slack: `MAJOR.MINOR.PATCH has been released, update deploy-sourcegraph-docker as needed`
- [ ] Create a new section for the patch version in the changelog. Verify that all changes that have been cherry picked onto the release branch have been moved to this section of the [CHANGELOG](https://github.com/sourcegraph/sourcegraph/blob/master/CHANGELOG.md) on `master`.
- [ ] Post a reply in the #dev-announce thread to say that the release is complete.
