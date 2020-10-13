<!--
DO NOTE COPY THIS ISSUE TEMPLATE MANUALLY. Use `yarn run release tracking-issue:create` from the
`dev/release` directory in the main repository to create a release tracking issue, instead.

Arguments:
- $MAJOR
- $MINOR
- $RELEASE_DATE
- $FIVE_WORKING_DAYS_BEFORE_RELEASE
- $FOUR_WORKING_DAYS_BEFORE_RELEASE
- $ONE_WORKING_DAY_BEFORE_RELEASE
-->

# $MAJOR.$MINOR Release ($RELEASE_DATE)

**Note:** All `yarn run release ...` commands should be run from folder `dev/release`.
**Note:** All `yarn run test ...` commands should be run from folder `web`.

## $FIVE_WORKING_DAYS_BEFORE_RELEASE (5 work days before release): Prep for branch cut

- [ ] Post a release status update to Slack:
  ```
  yarn run release release:status $MAJOR.$MINOR.0
  ``` 
  - [ ] Review [all release-blocking issues](https://github.com/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Asourcegraph+label%3Arelease-blocker). Add them as checklist items here. Ensure someone is resolving each.

## $FOUR_WORKING_DAYS_BEFORE_RELEASE (4 work days before release): Branch cut

- [ ] Update the changelog and merge the generated pull request:
  ```
  yarn run release changelog:cut $MAJOR.$MINOR.0
  ```
- [ ] Create the `$MAJOR.$MINOR` branch off the CHANGELOG commit in the previous step: `git branch $MAJOR.$MINOR && git push origin $MAJOR.$MINOR`.
- [ ] Tag the first release candidate:
  ```
  yarn run release release:create-candidate $MAJOR.$MINOR.0-rc.1
  ```
- [ ] Run regression tests:
  - [ ] Follow [README.md](https://github.com/sourcegraph/sourcegraph/blob/main/web/src/regression/README.md) to set up your e2e environment. 
        Run the tests from the `web` directory. A more complete set of env vars can be found in this
        [1password](https://team-sourcegraph.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/allitems/gm5dfflq6sfclmotneuayfdj5q) entry.
  - [ ] New Sourcegraph Docker container:
    - Run the initializer: `E2E_INIT=true SOURCEGRAPH_BASE_URL=http://localhost:7080 yarn run test:regression -t 'Initialize new Sourcegraph instance'`
    - Run the regression test suite: `SOURCEGRAPH_BASE_URL=http://localhost:7080 yarn run test:regression`
  - [ ] Upgrade from previous release:
    - Run the initializer on a Docker container running the last patch version of the previous major/minor release.
    - Upgrade and run the regression test suite.
  - [ ] New Sourcegraph Kubernetes cluster:
    - Run the initializer on a new Sourcegraph Kubernetes cluster.
    - Run the regression test suite.

## $FOUR_WORKING_DAYS_BEFORE_RELEASE to $ONE_WORKING_DAY_BEFORE_RELEASE: Cut new release candidates

As necessary, `git cherry-pick` bugfix (not feature!) commits from `main` into the release branch.
Aggressively revert or disable features that may cause delays.

- [ ] Post a release status update to Slack:
  ```
  yarn run release release:status $MAJOR.$MINOR.0
  ``` 
  - [ ] Review [all release-blocking issues](https://github.com/issues?utf8=%E2%9C%93&q=is%3Aopen+archived%3Afalse+org%3Asourcegraph+label%3Arelease-blocker). Add them as checklist items here. Ensure someone is resolving each.
  - [ ] Review [all other open issues in the milestone](https://github.com/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Asourcegraph+-label%3Arelease-blocker+milestone%3A$MAJOR.$MINOR) and ask assignees to triage them to a different milestone (preferring Backlog).

Cut a new release candidate daily if necessary:

- [ ] Cut release candidate:
  ```
  N=<release-candidate-number> yarn run release release:create-candidate $MAJOR.$MINOR.0-rc.$N
  ```
- [ ] Re-run the automated test suite against the new release candidate, file any regressions as
  `release-blocker` issues.
- [ ] If necessary, manually test features or workflows affected by the cherry-pick.

## $ONE_WORKING_DAY_BEFORE_RELEASE (1 work day before release) Tag final release

- [ ] Tag the final release:
  ```
  yarn run release release-candidate:create $MAJOR.$MINOR.0
  ```
- [ ] Verify the [CHANGELOG](https://github.com/sourcegraph/sourcegraph/blob/main/CHANGELOG.md) on
  `main` is accurate (no items should have been added since branch cut, but some items may need to
  be removed).
- [ ] Wait for the release Docker images to be available in [Docker Hub](https://hub.docker.com/r/sourcegraph/server/tags).
- [ ] Release Docker Compose by following [these instructions](https://github.com/sourcegraph/deploy-sourcegraph-docker/blob/master/RELEASING.md)
- [ ] Open (but do not merge) PRs that publish the new release:
  ```
  # Run this in the main sourcegraph repository in the `dev/release` directory on `main` branch:
  yarn run release release:publish $MAJOR.$MINOR.0
  ```
- [ ] Create (but do not merge) a PR to update https://docs.sourcegraph.com/admin/updates/kubernetes indicating the steps required to upgrade.
- [ ] Review [all issues in the release milestone](https://github.com/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Asourcegraph+milestone%3A$MAJOR.$MINOR). Backlog things that didn't make it into the release and ping issues that still need to be done for the release (e.g. Tweets, marketing).

## $RELEASE_DATE by 10am: Release

- [ ] Merge the release-publishing PRs created previously.
  - For [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph), also:
    - [ ] Merge the PR to update the [Kubernetes CHANGELOG](https://github.com/sourcegraph/sourcegraph/blob/main/doc/admin/updates/kubernetes.md)
    - [ ] Tag the `v$MAJOR.$MINOR.0` release at this commit.
        ```
        VERSION='v$MAJOR.$MINOR.0' bash -c 'git tag -a "$VERSION" -m "$VERSION" && git push origin "$VERSION"'
        ```
  - For [sourcegraph](https://github.com/sourcegraph/sourcegraph), also:
    - [ ] Cherry pick the release-publishing PR from `sourcegraph/sourcegraph@main` into the release branch.
- [ ] Ask the product team to merge the blog post ([example](https://github.com/sourcegraph/about/pull/83)).

### Post-release

- [ ] Notify the next release captain that they are on duty for the next release. They should complete the steps in this section.
- [ ] Ensure you have the latest version github.com/sourcegraph/about checked out and it is located
      at `../about` (relative to this repository).
- [ ] Update `dev/release/config.json` with the parameters for the current release.
- [ ] Run `yarn build` to rebuild the release script (necessary, because `config.json` is compiled in).
- [ ] Create release calendar events, tracking issue, and announcement for next release:
  ```
  # Add calendar events and reminders for key dates in the release cycle
  yarn run release tracking:release-timeline

  # Create the release tracking issue (i.e., this issue)
  yarn run release tracking:release-issue
  ```
- [ ] Close this issue.
- [ ] Close the milestone.
