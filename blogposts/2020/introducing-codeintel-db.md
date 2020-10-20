---
title: 'Introducing a new database for Code Intelligence'
author: 'Eric Fritz'
publishDate: 2020-10-18T00:00-07:00
tags: [
  "blog"
]
slug: introducing-a-new-code-intelligence-database
heroImage: https://image.flaticon.com/icons/png/512/51/51333.png
published: true
---

With the release of 3.21, Sourcegraph will ship with a _second_ Postgres database instance, named `codeintel-db`, which we use to store the data that powers [precise code intelligence](https://docs.sourcegraph.com/code_intelligence/explanations/precise_code_intelligence).

We've [written previously](https://about.sourcegraph.com/blog/evolution-of-the-precise-code-intel-backend/) about the architectural changes we have made to the code intelligence backend. This post is yet another submission in the archaeological trail of how the code intelligence team shapes Sourcegraph on a technical level. The post explains why we chose to swap out our persistence layer - a very non-trivial difference in our architecture.

**TL;DR 1**: If you are a customer currently using precise code intelligence, [skip to the notes below](#notes-for-site-admins) to see how this could affect your instance.

**TL;DR 2**: If you are here for a daily dose of schadenfreude, read about how [we mucked this migration on our production instance](https://eric-fritz.com/articles/migrating-to-postgres/) on Sourcegraph.com.

## The impetus for a second database

A bit over a year ago, the code intelligence backend started as a single node process with access only to its own persistent volume. We chose SQLite as our persistence mechanism for a handful of reasons:

- It was the faster implementation compared to other contending designs we tried.
- Our MVP did not have access to Postgres at the time, which was owned solely by another team. Only later did we get access to Postgres to store cross-repository metadata and work queue data.
- SQLite had some nice properties such as easy data warehousing opportunities (on which we have not capitalized) and bulk deletion of expired data was straightforward. All we had to do was delete the SQLite file.

Using SQLite for this data has become an operational and feature burden for the code intelligence team.

1. We need to maintain a periodic process to reconcile the data on disk with the metadata we store in Postgres.
2. We have good instructions and tips for backup and recovery of our Postgres data store, but have never officially recommended backing up other persistent volumes.
3. We locked ourselves into a node topology which is not easily scalable. We essentially have a singleton service over a persistent volume. In order to scale this service horizontally (which would become necessary once either the amount of data or the frequency of queries increased), we would need to shard the data across multiple volumes. This throws a lot of wrenches into our plans: we need to be able to automatically move data on increase or decrease of shard counts; we need to be able to route requests to the correct node with that data; we need to ensure that reconciliation between the data on disk and the metadata we store in Postgres is aware that there are multiple nodes where data _could_ reside.
4. There is no efficient way to implement certain data access patterns we may need in the future. For example, looking for data matching a certain identifier _name_ would require us to open every SQLite database on disk (and, no, _batching it_ is not a solution).

Instead of forging ahead and tackling the complexity we've made for ourselves, we decided to take a step back and re-evaluate whether or not our previous architecture choices were meeting our current needs. And it seems like they did not.

Moving this data into Postgres seems like an obvious choice that will (eventually) be able to reduce or completely remove all of the burdens listed above.

1. Reconciling pieces of data in the same datastore is trivial compared to reconciling pieces of data in two different datastores, especially if it should be done transactionally. Even though we're not in the same _physical_ database instance, having all of our data in _some_ Postgres-compatible store opens up the possibility of transactions spanning multiple physical Postgres instances via [postgres_fdw](https://www.postgresql.org/docs/12/postgres-fdw.html#id-1.11.7.42.12).
2. Moving data to an existing technology allows us to re-use the same advice and documentation for backup and disaster recovery strategies. Removing the number of knobs that must be turned by site-admins is always going to be a win across the board.
3. Moving from an embedded database to a server-client database removes the nasty singleton property on the service. Now that multiple servers can interact with the same data concurrently without risk of corruption, we can scale the services horizontally without requiring additional effort into implementing sticky sessions or complex request routing rules.
4. Moving data into a single relational store allows us to create additional indexed views into the data. We can now query over dimensions that were not possible before without opening tends of thousands of relatively small database files.

## Notes for site admins

If you are an active user of LSIF, there are a few changes that may subtly affect the behavior of the code intelligence backend. Our enterprise users operate at incredibly different scales so it is difficult to ensure that a change has zero impact on all existing customers.

#### Connecting to an external database

It has always been possible to target an [external database](https://docs.sourcegraph.com/admin/external_database) instance instead of using the Dockerized version that ships with the Sourcegraph instance. This is useful when you already have a method to provision, backup, and restore database instances (for example, using AWS's RDS or GCP's CloudSQL).

The [3.20 -> 3.21 upgrade guides](https://docs.sourcegraph.com/admin/updates) call out instructions on how to do the same for the new code intelligence database. In the same way you configure your primary database instance with `PG*` environment variables, you configure the code intelligence database instance with `CODEINTEL_PG*` environment variables.

**Note** that if you configure both databases externally, they **must not** point to the exact same database. The frontend service will refuse to start with such a configuration.

#### Data retention policy

The [3.21 changelog](https://github.com/sourcegraph/sourcegraph/blob/3.21/CHANGELOG.md) details the introduction of a new environment variable, `PRECISE_CODE_INTEL_MAX_DATA_AGE`, on the precise-code-intel-bundle-manager service.

Previously, the bundle manager stored all LSIF data on disk as SQLite files. This allowed us to run custodial processes which removed old data, but only when disk pressure was high. Since we've migrated this data to a Postgres instance, there is a less clear-cut method to determine how much data we need to free in order to keep the desired amount of headroom.

Disks do not grow on trees and we at Sourcegraph are well aware of that fact. In order to ensure we didn't accidentally slip an infinite disk space requirement to the Sourcegraph 3.21 release, we introduced an alternate data retention policy to replace the old full-disk trigger. Any data that is older than `PRECISE_CODE_INTEL_MAX_DATA_AGE` and is not used to serve code intelligence queries for the tip of a default branch will be automatically flushed from the code intelligence database periodically.

We believe that this will give us roughly the same behavior as the previous versions, and can be tuned to match expected behavior at your instance's scale. The default value for this environment variable is `720h` (30 days), which is likely adequate for the majority of instances. This value should be adjusted if the size of your index uploads are large and your commit frequency is high.
