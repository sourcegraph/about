# Distribution product roadmap

This living document is the product roadmap for the Distribution team.

It is longer-term than our quarterly OKRs, and higher-level than our GitHub issues. Additionally, it documents dependencies of roadmap items and current owners.

## IMPORTANT: This is a WIP!

At least this much is missing:

- Dave/Uwe's support for \$CUSTOMER
- Monitoring federation
- Automated docker image testing
- Upgrade/downgrade testing
- Release smoke testing
- Dockerless-CI infrastructure support
- Improved GitOps internal Sourcegraph infrastructure
- Likely many other important things

## Prioritized roadmap

1. [Kubernetes upgrades should have less merge conflicts](#kubernetes-upgrades-should-have-less-merge-conflicts) (in progress)
1. [Docker-compose is not released on time (on the 20th)](#docker-compose-is-not-released-on-time-on-the-20th) (delayed, overdue)
1. [Releasing Sourcegraph should be automated](#releasing-sourcegraph-should-be-automated) (delayed)
1. [CI infrastructure should support running e2e tests in a reliable way](ci-infrastructure-should-support-running-e2e-tests-in-a-reliable-way) (delayed)
1. [Upgrades across multiple Sourcegraph versions should be easier](#upgrades-across-multiple-sourcegraph-versions-should-be-easier)
1. [Sourcegraph should be released daily](#sourcegraph-should-be-released-daily)
1. [All site admins should have alerting set up to be notified when Sourcegraph is unhealthy](#all-site-admins-should-have-alerting-set-up-to-be-notified-when-sourcegraph-is-unhealthy)

## Details (unordered)

### Kubernetes upgrades should have less merge conflicts

Kubernetes upgrades involve a large number of merge conflicts which are extremely time consuming and tedious for customers to resolve.

- Owner: Geoffrey
- In progress: yes
- Dependencies: none
- [GitHub issues](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+RFC+141+label%3ARFC-141)

### Releasing Sourcegraph should be automated

A monthly release takes ~2 days of a developers time, a patch release requires ~3 hours. We want to reduce that substantially.

- Owner: Stephen
- In progress: delayed
- Dependencies:
  - [CI infrastructure should support running e2e tests in a reliable way](ci-infrastructure-should-support-running-e2e-tests-in-a-reliable-way)

### CI infrastructure should support running e2e tests in a reliable way

[RFC 137](https://docs.google.com/document/d/14f7lwfToeT6t_vxnGsCuXqf3QcB5GRZ2Zoy6kYqBAIQ/edit#heading=h.trqab8y0kufp) saw us remove our e2e tests from CI entirely because it was unreliable. Now e2e tests are ran as part of our monthly release process, and are heavily broken/outdated. Fixing them often takes ~1.5d of work. Per the RFC, we want a way to run e2e tests on CI reliably.

- Owner: Uwe
- In progress: delayed
- Dependencies: none

### Docker-compose is not released on time (on the 20th)

Docker-compose deployments were never properly integrated into our release process, and as such it has been released late (~1 week) after the 20th when we announce the new version of Sourcegraph the past ~4 releases.

- Owner: Stephen
- In progress: delayed, overdue
- Dependencies:
  - none

### Upgrades across multiple Sourcegraph versions should be easier

Upgrading from 3.13 -> 3.17 requires you perform 4 individual upgrades today which is extremely painful and time consuming for site admins.

- Owner: none
- In progress: no
- Dependencies: none

### Sourcegraph should be released daily

We release Sourcegraph monthly on the 20th, but want to get to daily releases so that `master` is always just as stable and reliable as our official monthly releases. We expect most customers will still only upgrade monthly, and we'll only advertise changes monthly. The goal is to make engineering more connected with customers so changes for customers do not sit in an unreleased state for a month.

- Owner: none
- In progress: no
- Dependencies:
  - [Releasing Sourcegraph should be automated](#releasing-sourcegraph-should-be-automated)
  - [5) Docker-compose is not released on time (on the 20th)](#5-docker-compose-is-not-released-on-time-on-the-20th)

### All site admins should have alerting set up to be notified when Sourcegraph is unhealthy

## Continue reading

Return to the [Distribution team page](../index.md) to continue reading.
