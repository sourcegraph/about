# Distribution product roadmap

This living document is the product roadmap for the Distribution team.

It is longer-term than our quarterly OKRs, and higher-level than our GitHub issues. Additionally, it documents dependencies of roadmap items and current owners.

## IMPORTANT: This is a WIP!

At least this much is missing:

- Monitoring federation

## Ordered & prioritized roadmap

1. [Support customers in deploying Sourcegraph with 500k+ repositories](support-customers-in-deploying-sourcegraph-with-500k-repositories) (in progress)
1. [Kubernetes upgrades should have less merge conflicts](#kubernetes-upgrades-should-have-less-merge-conflicts) (in progress)
1. [Docker-compose is not released on time (on the 20th)](#docker-compose-is-not-released-on-time-on-the-20th) (delayed, overdue)
1. [Releasing Sourcegraph should be automated](#releasing-sourcegraph-should-be-automated) (delayed)
1. [Automatic e2e testing](#automatic-e2e-testing) (delayed)
1. [Automatic Docker image testing](#automatic-docker-image-testing)
1. [Upgrades across multiple Sourcegraph versions should be easier](#upgrades-across-multiple-sourcegraph-versions-should-be-easier)
1. [Sourcegraph should be released daily](#sourcegraph-should-be-released-daily)
1. [All site admins should have alerting set up to be notified when Sourcegraph is unhealthy](#all-site-admins-should-have-alerting-set-up-to-be-notified-when-sourcegraph-is-unhealthy)
1. [Push site admins to use Docker Compose or Kubernetes for production deployments](#push-site-admins-to-use-docker-compose-or-kubernetes-for-production-deployments)
1. [Add monitoring for common critical issues](#add-monitoring-for-common-critical-issues)
1. [GitOps for all internal infrastructure](#gitops-for-all-internal-infrastructure)

## Details (unordered)

### Support customers in deploying Sourcegraph with 500k+ repositories

We want to support a number of customers deploying Sourcegraph at large-scales with ~500k+ repositories.

- Owner: Uwe and Dave
- In progress: yes
- Dependencies: none
- [Project board](https://github.com/orgs/sourcegraph/projects/69)
- RFCs: [Initial planning issue](https://github.com/sourcegraph/customer/issues/57), [discussion about costs at this scale](https://github.com/sourcegraph/customer/issues/20)

### Kubernetes upgrades should have less merge conflicts

Kubernetes upgrades involve a large number of merge conflicts which are extremely time consuming and tedious for customers to resolve.

- Owner: Geoffrey
- Status: planned for Q1 -> in-progress
- [Tracking issue](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+RFC+141+label%3ARFC-141)
- Discussions: none
- Dependencies: none

### CI infrastructure that can run Docker containers in a reliable way

For automating the release Sourcegraph, e2e testing, and Docker image testing - we need CI infrastructure that can run Docker containers (and possibly VMs) in a reliable way.

Today, we have a [side-car DIND container in our CI pipeline](https://sourcegraph.sgdev.org/search?q=repo:%5Esourcegraph/infrastructure%24+dind&patternType=literal) but it is flaky, unreliable, and a regular source of issues which has led to us removing automated testing (see [Automatic e2e testing](#automatic-e2e-testing))

- Owner: Stephen
- Status: planning soon
- [Tracking issue](https://github.com/sourcegraph/sourcegraph/issues/6887)
- Discussions: none
- Dependencies: none

### Releasing Sourcegraph should be automated

A monthly release takes ~2 days of a developers time, a patch release requires ~3 hours. We want to reduce that substantially.

- Owner: Stephen
- Status: planned for Q1 -> delayed
- [Tracking issue](https://github.com/sourcegraph/sourcegraph/issues/9252)
- Discussions: none
- Dependencies:
  - [CI infrastructure should support running e2e tests in a reliable way](ci-infrastructure-should-support-running-e2e-tests-in-a-reliable-way)

### Automatic e2e testing

[RFC 137](https://docs.google.com/document/d/14f7lwfToeT6t_vxnGsCuXqf3QcB5GRZ2Zoy6kYqBAIQ/edit#heading=h.trqab8y0kufp) saw us remove our e2e tests from CI entirely because it was unreliable. Now e2e tests are ran as part of our monthly release process, and are heavily broken/outdated. Fixing them often takes ~1.5d of work. Per the RFC, we want a way to run e2e tests on CI reliably.

- [Tracking issue](https://github.com/sourcegraph/sourcegraph/issues/10646)
- Discussions: [RFC 137](https://docs.google.com/document/d/14f7lwfToeT6t_vxnGsCuXqf3QcB5GRZ2Zoy6kYqBAIQ/edit#heading=h.trqab8y0kufp)
- Owner: Uwe
- Status: planned for Q1 -> delayed
- Dependencies:
  - [CI infrastructure that can run Docker containers in a reliable way](#ci-infrastructure-that-can-run-docker-containers-in-a-reliable-way)

### Automatic Docker image testing

Today we have a number of aspects about our Docker images that are not tested automatically:

- Do upgrades and downgrades work as expected / per our documented policies?
- Is the docker-compose.yml valid and does each service come up healthy?
- Are UID/GIDs properly assigned and static?
- Are all images versioned alongside Sourcegraph properly (and are the image tags correct)?

These aspects should all be tested automatically in our CI pipelines.

- Owner: Stephen
- Status: not planned
- [Tracking issue](https://github.com/sourcegraph/sourcegraph/issues/10646)
- Discussions: none
- Dependencies:
  - [CI infrastructure that can run Docker containers in a reliable way](#ci-infrastructure-that-can-run-docker-containers-in-a-reliable-way)

### Docker-compose is not released on time (on the 20th)

Docker-compose deployments were never properly integrated into our release process, and as such it has been released late (~1 week) after the 20th when we announce the new version of Sourcegraph the past ~4 releases.

- Owner: Stephen
- Status: planned for Q1 -> delayed -> overdue
- [Tracking issue](https://github.com/sourcegraph/sourcegraph/issues/10486)
- Discussions: none
- Dependencies: none

### Upgrades across multiple Sourcegraph versions should be easier

Upgrading from 3.13 -> 3.17 requires you perform 4 individual upgrades today which is extremely painful and time consuming for site admins.

- Owner: none
- Status: not planned
- [Tracking issue](https://github.com/sourcegraph/sourcegraph/issues/10144)
- Discussions: none
- Dependencies: none

### Sourcegraph should be released daily

We release Sourcegraph monthly on the 20th, but want to get to daily releases so that `master` is always just as stable and reliable as our official monthly releases. We expect most customers will still only upgrade monthly, and we'll only advertise changes monthly. The goal is to make engineering more connected with customers so changes for customers do not sit in an unreleased state for a month.

- Owner: none
- Status: not planned
- Tracking issue: N/A
- Discussions: [part of RFC 128](https://docs.google.com/document/d/1YHYxx63jxEyLb3Hs7VnzZcASQXn3dWb6IUyQXvP2i30) [RFC 60 ABANDONED: Introduce a bi-weekly release cadence](https://docs.google.com/document/d/1-K3RhlX7VNWR-jmJFSniZatGkZ8-KGsyVAhH68u0iN8/edit#heading=h.53phut6pq63o)
- Dependencies:
  - [Releasing Sourcegraph should be automated](#releasing-sourcegraph-should-be-automated)
  - [5) Docker-compose is not released on time (on the 20th)](#5-docker-compose-is-not-released-on-time-on-the-20th)

### All site admins should have alerting set up to be notified when Sourcegraph is unhealthy

### Prevent admins from missing manual migrations

Today, Sourcegraph occasionally requires manual migrations. These are documented with the expectation that site admins review our documentation before attempting an upgrade. Missing a manual migration usually means some sort of downtime, sometimes not easily noticed. We would like to prevent this by making site admins explicitly acknowledge such manual migrations.

- Owner: none
- Status: not planned
- Tracking issue: N/A
- Discussions: [RFC 81](https://docs.google.com/document/d/1cDrQuLly_QZ_XoDDR41hgF3qCUGojvSXItI-knaBDY4/edit)
- Dependencies:
  - [Releasing Sourcegraph should be automated](#releasing-sourcegraph-should-be-automated)
  - [5) Docker-compose is not released on time (on the 20th)](#5-docker-compose-is-not-released-on-time-on-the-20th)

### Add monitoring for common critical issues

While Sourcegraph does have built-in monitoring that is well-defined and works generally well, there are large gaps in several areas for common critical issues such as repositories failing to clone, repositories being deleted en-mass, search indexing failing, containers/services being unreachable, and much more.

- Owner: none
- Status: not planned
- [Tracking issue](https://github.com/sourcegraph/sourcegraph/labels/monitoring)
- Discussions: none
- Dependencies: none

### GitOps for all internal infrastructure

We want to move to a world where all of Sourcegraphs' internal infrastructure is managed by GitOps, nobody has write access to GCP/GKE, and all changes have enforced review using a Git workflow.

- Owner: none
- Status: not planned
- [Tracking issue](https://github.com/sourcegraph/sourcegraph/issues/10465) (related: [sourcegraph.com terraform configuration](https://github.com/sourcegraph/sourcegraph/issues/10455))
- Discussions: none
- Dependencies: none

### Push site admins to use Docker Compose or Kubernetes for production deployments

Many customers of Sourcegraph today are still running a single-container `sourcegraph/server` deployment in production. We recently began advising all new deployments that this deployment option is _not_ for production use because it has no proper resource isolation and as such when it falls over it is impossible to debug, leading to painstakingly urgent migrations to better deployment types and frustrated/angry customers. We would like to get to a world where all production instances of Sourcegraph are Docker Compose or Kubernetes only.

- Owner: none
- Status: not planned
- [Tracking issue](https://github.com/sourcegraph/sourcegraph/issues/11828)
- Discussions: none
- Dependencies: none

## Completed

This section outlines completed roadmap items, in most-recently-completed order.

1. (Q1 2020) [Push admins to upgrade more frequently](#push-admins-to-upgrade-more-frequently)
1. (Q4 2019) [Support process changes](#support-process-changes)
1. (Q4 2019) [Deploy Jaeger tracing by default in all deployment types](#deploy-jaeger-tracing-by-default-in-all-deployment-types)
1. (Q4 2019) [Remove the management console entirely](#remove-the-management-console-entirely)
1. (Q4 2019) [Authless management console access](#authless-management-console-access)
1. (Q4 2019) [Deploy Jaeger tracing by default in all deployment types](#)
1. ...this document was created Q1 2020, many items completed before then not included here that should be added...

## Completed details (unordered)

### Push admins to upgrade more frequently

See [RFC 80: Push users to upgrade more frequently](https://docs.google.com/document/d/17WamvKWQjEkzhun3za9KS2t5Anm9ey8ws4D0tz4xPkY/edit) for details.

- Owner: Stephen
- Status: planned for Q4 2019 -> delayed -> implemented
- Tracking issue: N/A
- Discussions: [RFC 80: Push users to upgrade more frequently](https://docs.google.com/document/d/17WamvKWQjEkzhun3za9KS2t5Anm9ey8ws4D0tz4xPkY/edit)
- Dependencies: none

### Support process changes

See [RFC 117 Private: Support process changes](https://docs.google.com/document/d/12nCg0OuZsrWCB3_nN_F0duu5sxGXUgPbBRoqbxj8a2A/edit) for details.

- Owner: Stephen
- Status: planned for Q4 2019 -> implemented
- Tracking issue: N/A
- Discussions: [RFC 117 Private: Support process changes](https://docs.google.com/document/d/12nCg0OuZsrWCB3_nN_F0duu5sxGXUgPbBRoqbxj8a2A/edit)
- Dependencies: none

### Deploy Jaeger tracing by default in all deployment types

See [issue #9300](https://github.com/sourcegraph/sourcegraph/issues/9300) for details.

- Owner: Stephen
- Status: planned for Q4 2019 -> implemented
- Tracking issue: N/A
- Discussions: [issue #9300](https://github.com/sourcegraph/sourcegraph/issues/9300)
- Dependencies: none

### Remove the management console entirely

See [Proposal PR: Remove the management console (🦄unicorns and 🌈rainbows here)](https://github.com/sourcegraph/sourcegraph/pull/7197) for details.

- Owner: Stephen
- Status: unplanned -> implemented
- Tracking issue: N/A
- Discussions: [Proposal PR: Remove the management console (🦄unicorns and 🌈rainbows here)](https://github.com/sourcegraph/sourcegraph/pull/7197)
- Dependencies: none

### Authless management console access

See [RFC 63: Authless management console access](https://docs.google.com/document/d/1RkOS4EehLtAXhunTazkjCI4yKi5Hc8eRcHZ_v1Fz_QU/edit) for details.

- Owner: Stephen
- Status: planned for Q4 2019 -> implemented
- Tracking issue: N/A
- Discussions: [RFC 63: Authless management console access](https://docs.google.com/document/d/1RkOS4EehLtAXhunTazkjCI4yKi5Hc8eRcHZ_v1Fz_QU/edit)
- Dependencies: none

## Continue reading

Return to the [Distribution team page](../index.md) to continue reading.
