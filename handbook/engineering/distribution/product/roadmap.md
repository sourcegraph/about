# Distribution product roadmap

This living document is the product roadmap for the Distribution team.

It is longer-term than our quarterly OKRs, and higher-level than our GitHub issues. Additionally, it documents dependencies of roadmap items and current owners.

## IMPORTANT: This is a WIP!

At least this much is missing:

- Monitoring federation

## Ordered & prioritized roadmap

1. (Q1 2020) [Support customers in deploying Sourcegraph with 500k+ repositories](support-customers-in-deploying-sourcegraph-with-500k-repositories)
1. (Q1 2020) [Kubernetes upgrades should have less merge conflicts](#kubernetes-upgrades-should-have-less-merge-conflicts)
1. (Q1 2020) [Docker-compose is not released on time (on the 20th)](#docker-compose-is-not-released-on-time-on-the-20th)
1. (Q1 2020) [Releasing Sourcegraph should be automated](#releasing-sourcegraph-should-be-automated)
1. (Q1 2020) [Automatic e2e testing](#automatic-e2e-testing)
1. (TBD) [Automatic Docker image testing](#automatic-docker-image-testing)
1. (TBD) [Upgrades across multiple Sourcegraph versions should be easier](#upgrades-across-multiple-sourcegraph-versions-should-be-easier)
1. (TBD) [Sourcegraph should be released daily](#sourcegraph-should-be-released-daily)
1. (TBD) [All site admins should have alerting set up to be notified when Sourcegraph is unhealthy](#all-site-admins-should-have-alerting-set-up-to-be-notified-when-sourcegraph-is-unhealthy)
1. (TBD) [Push site admins to use Docker Compose or Kubernetes for production deployments](#push-site-admins-to-use-docker-compose-or-kubernetes-for-production-deployments)
1. (TBD) [Add monitoring for common critical issues](#add-monitoring-for-common-critical-issues)
1. (TBD) [GitOps for all internal infrastructure](#gitops-for-all-internal-infrastructure)

## Details (unordered)

### Support customers in deploying Sourcegraph with 500k+ repositories

We have had customers interested in deploying Sourcegraph at large-scale with ~500k+ repositories and will need to dedicate time to supporting them and making their trials go smoothly.

- Owner: Uwe and Dave
- Status: unplanned -> added unexpectedly to Q1 -> in-progress
- [Tracking issue](https://github.com/sourcegraph/customer/issues/57)
- Discussions: [Initial planning issue](https://github.com/sourcegraph/customer/issues/57), [discussion about costs at this scale](https://github.com/sourcegraph/customer/issues/20)
- Dependencies: none

### Kubernetes upgrades should have less merge conflicts

Kubernetes upgrades involve a large number of merge conflicts today which are extremely time consuming and tedious for customers to resolve, preventing them from upgrading as frequently as they should be and creating a large and painful support burden for us.

- Owner: Geoffrey
- Status: planned for Q1 -> in-progress
- [Tracking issue](https://github.com/orgs/sourcegraph/projects/68?card_filter_query=label%3Arfc-141)
- Discussions: none
- Dependencies: none

### CI infrastructure that can run Docker containers in a reliable way

Today we cannot release of Sourcegraph, run e2e tests, or perform Docker image tests in an automated fashion because our CI infrastructure does not support running Docker containers (or VMs/Vagrant) in a reliable way. Today we have a [side-car DIND container in our CI pipeline](https://sourcegraph.sgdev.org/search?q=repo:%5Esourcegraph/infrastructure%24+dind&patternType=literal) but it is flaky, unreliable, and a regular source of issues which has led to us removing automated testing (see [Automatic e2e testing](#automatic-e2e-testing)).

- Owner: Stephen
- Status: planning soon
- [Tracking issue](https://github.com/sourcegraph/sourcegraph/issues/6887)
- Discussions: none
- Dependencies: none

### Releasing Sourcegraph should be automated

A monthly release takes ~2 days of a developers' time, a patch release requires ~3 hours. We want to reduce that substantially both in order to reduce the time we must invest each month, and to increase the release cadence of Sourcegraph substantially.

- Owner: Stephen
- Status: planned for Q1 -> delayed
- [Tracking issue](https://github.com/sourcegraph/sourcegraph/issues/9252)
- Discussions: none
- Dependencies:
  - [CI infrastructure should support running e2e tests in a reliable way](ci-infrastructure-should-support-running-e2e-tests-in-a-reliable-way)

### Automatic e2e testing

[RFC 137](https://docs.google.com/document/d/14f7lwfToeT6t_vxnGsCuXqf3QcB5GRZ2Zoy6kYqBAIQ/edit#heading=h.trqab8y0kufp) saw us remove our e2e tests from CI entirely because it was unreliable. Now e2e tests are ran as part of our monthly release process completely manually, and are heavily broken/outdated each time we attempt to do it. Fixing them often takes ~1.5d of work from a developer on the team. Per the RFC, we want to run these e2e tests on CI in an automated and reliable fashion.

- [Tracking issue](https://github.com/sourcegraph/sourcegraph/issues/10646)
- Discussions: [RFC 137](https://docs.google.com/document/d/14f7lwfToeT6t_vxnGsCuXqf3QcB5GRZ2Zoy6kYqBAIQ/edit#heading=h.trqab8y0kufp)
- Owner: Uwe
- Status: planned for Q1 -> delayed
- Dependencies:
  - [CI infrastructure that can run Docker containers in a reliable way](#ci-infrastructure-that-can-run-docker-containers-in-a-reliable-way)

### Automatic Docker image testing

Customers rely on several important nuanced details about our Docker images:

- Do upgrades and downgrades work as expected / per our documented policies?
- Is the docker-compose.yml valid and does each service come up healthy?
- Are UID/GIDs properly assigned and static?
- Are all images versioned alongside Sourcegraph properly (and are the image tags correct)?

Testing these cases manually as we do today means it is easy to get things wrong and customer upgrades will go poorly, increasing our support burden substantially. Additionally, testing and accounting for these factors manually today slows down the release process and our ability to iterate quickly. We want to automate testing of all these factors.

- Owner: Stephen
- Status: not planned
- [Tracking issue](https://github.com/sourcegraph/sourcegraph/issues/10646)
- Discussions: none
- Dependencies:
  - [CI infrastructure that can run Docker containers in a reliable way](#ci-infrastructure-that-can-run-docker-containers-in-a-reliable-way)

### Docker-compose is not released on time (on the 20th)

Docker-compose deployments were never properly integrated into our release process, and as such it has been released late by about one week after the official release date of 20th when the blog post announcement goes live. This has happened for the past ~4 releases. This has been a recurring problem for customers ("I can't upgrade it doesn't seem to be released"), which has increased support load, and has been a recurring worry from the CE team and others ("can I tell this customer to upgrade to fix their issue yet?").

- Owner: Stephen
- Status: planned for Q1 -> delayed -> overdue
- [Tracking issue](https://github.com/sourcegraph/sourcegraph/issues/10486)
- Discussions: none
- Dependencies: none

### Upgrades across multiple Sourcegraph versions should be easier

Upgrading from 3.13 -> 3.17 requires you perform 4 individual upgrades today (3.14 -> 3.15 -> 3.16 -> 3.17) which is extremely painful and time consuming for site admins, especially when one must also address the merge conflicts that occur on each upgrade. We would like to make upgrades across multiple Sourcegraph versions easier.

- Owner: none
- Status: not planned
- [Tracking issue](https://github.com/sourcegraph/sourcegraph/issues/10144)
- Discussions: none
- Dependencies: none

### Sourcegraph should be released daily

Engineers at Sourcegraph are not as connected to our customers as they could be, with some changes sitting idle for a while and engineers having to gauge the importance of a customer issue ("do I need to ask Distribution to create a release for this change, or can it wait until our next scheduled release on the 20th?") which harms the feedback cycle of the engineering organization as a whole and makes the CE teams' support work harder. We should get to a point where `master` is always in a polished releasable state and releases are created daily instead of only monthly on the 20th.

- Owner: none
- Status: not planned
- Tracking issue: N/A
- Discussions: [part of RFC 128](https://docs.google.com/document/d/1YHYxx63jxEyLb3Hs7VnzZcASQXn3dWb6IUyQXvP2i30) [RFC 60 ABANDONED: Introduce a bi-weekly release cadence](https://docs.google.com/document/d/1-K3RhlX7VNWR-jmJFSniZatGkZ8-KGsyVAhH68u0iN8/edit#heading=h.53phut6pq63o)
- Dependencies:
  - [Releasing Sourcegraph should be automated](#releasing-sourcegraph-should-be-automated)
  - [5) Docker-compose is not released on time (on the 20th)](#5-docker-compose-is-not-released-on-time-on-the-20th)

### All site admins should have alerting set up to be notified when Sourcegraph is unhealthy

TODO(slimsag): spec this section out

### Prevent admins from missing manual migrations

Sourcegraph occasionally requires manual migrations when upgrading. These [are documented](https://docs.sourcegraph.com/admin/updates) with the expectation that site admins review our documentation before attempting an upgrade. Missing a manual migration usually means some sort of downtime, sometimes not easily noticed or easily fixed without the help of Sourcegraph. We would like to prevent this by making site admins explicitly acknowledge such manual migrations.

- Owner: none
- Status: not planned
- Tracking issue: N/A
- Discussions: [RFC 81](https://docs.google.com/document/d/1cDrQuLly_QZ_XoDDR41hgF3qCUGojvSXItI-knaBDY4/edit)
- Dependencies:

### Add monitoring for common critical issues

While Sourcegraph does have built-in monitoring that is well-defined and works generally well, there are large gaps in several areas for common critical issues such as repositories failing to clone, repositories being deleted en-mass, search indexing failing, containers/services being unreachable, and much more.

- Owner: none
- Status: not planned
- [Tracking issue](https://github.com/orgs/sourcegraph/projects/68?card_filter_query=label%3Amonitoring)
- Discussions: none
- Dependencies: none

### GitOps for all internal infrastructure

Today everyone has `kubectl` and direct access to our production clusters, and it is common to require manual changes or interaction with the cluster to perform ops duties. We want to move to a world where all Sourcegraph internal infrastructure (CI pipelines, Sourcegraph.com, etc.) is managed by Git Ops, nobody has write access to GCP/GKE, and all changes have enforced review using a Git workflow.

- Owner: none
- Status: not planned
- [Tracking issue](https://github.com/orgs/sourcegraph/projects/68?card_filter_query=label%3Agit-ops)
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
