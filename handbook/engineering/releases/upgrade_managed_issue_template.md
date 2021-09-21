<!--
DO NOTE COPY THIS ISSUE TEMPLATE MANUALLY. Use `yarn release tracking:issues` in the `sourcegraph/sourcegraph` repository.

Arguments:
- $MAJOR
- $MINOR
- $PATCH
- $RELEASE_DATE
- $ONE_WORKING_DAY_AFTER_RELEASE
-->

# $MAJOR.$MINOR.$PATCH managed instances upgrade

These [managed instances](https://about.sourcegraph.com/handbook/engineering/distribution/managed) upgrades are scheduled for **$ONE_WORKING_DAY_AFTER_RELEASE**.

To perform these upgrades, follow the [managed instances upgrade process](https://about.sourcegraph.com/handbook/engineering/distribution/managed/upgrade_process).
Make sure to upgrade internal instances before customer instances.

---

## Upgrade internal managed instances

- [ ] Upgrade [devmanaged.sourcegraph.com](https://devmanaged.sourcegraph.com)
- [ ] Upgrade [demo.sourcegraph.com](https://demo.sourcegraph.com)

## Upgrade customer managed instances

<!-- DO NOT MENTION CUSTOMER NAMES on this list - use a Hubspot link instead. -->

- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/528
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/532
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/542
- [ ] Upgrade instance for https://github.com/sourcegraph/customer/issues/252 <!-- instance is under a different name from account -->
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/547
- [ ] Upgrade instance for https://github.com/sourcegraph/customer/issues/350 <!-- TODO can't find the account for this -->
