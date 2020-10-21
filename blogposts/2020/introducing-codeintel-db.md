---
title: "Introducing a new database for Code Intelligence"
author: "Eric Fritz"
publishDate: 2020-10-18T00:00-07:00
tags: ["blog"]
slug: introducing-a-new-code-intelligence-database
heroImage: https://image.flaticon.com/icons/png/512/51/51333.png
published: true
---

A bit over a year ago, the code intelligence backend started as a single node process with access only to its own persistent volume. We chose SQLite as our persistence mechanism for a handful of reasons:

- It was the faster implementation compared to other contending designs we tried.
- Our MVP did not have access to Postgres at the time, which was owned solely by another team. Only later did we get access to Postgres to store cross-repository metadata and work queue data.
- SQLite had some nice properties such as easy data warehousing opportunities (on which we have not capitalized) and bulk deletion of expired data was straightforward. All we had to do was delete the SQLite file.

[A lot of the architecture has changed](https://about.sourcegraph.com/blog/evolution-of-the-precise-code-intel-backend/) since then, but the choice of our persistence medium remained constant. Using SQLite for this data has become an operational and feature burden for the code intelligence team.

- We need to maintain a periodic process to reconcile the data on disk with the metadata we store in Postgres.
- We have good instructions and tips for backup and recovery of our Postgres data store, but have never officially recommended backing up other persistent volumes.
- We locked ourselves into a node topology which is not easily scalable. We essentially have a singleton service over a persistent volume. In order to scale this service horizontally (which would become necessary once either the amount of data or the frequency of queries increased), we would need to shard the data across multiple volumes. This throws a lot of wrenches into our plans: we need to be able to automatically move data on increase or decrease of shard counts; we need to be able to route requests to the correct node with that data; we need to ensure that reconciliation between the data on disk and the metadata we store in Postgres is aware that there are multiple nodes where data _could_ reside.
- There is no efficient way to implement certain data access patterns we may need in the future. For example, looking for data matching a certain identifier _name_ would require us to open every SQLite database on disk (and, no, opening batches of 100 files at a time is not a solution).

Instead of forging ahead and tackling the complexity we've made for ourselves, we decided to take a step back and re-evaluate whether or not our previous architecture choices were meeting our current needs. Based on these grievances, they clearly did not.

So what do we do? <!-- TODO - fill out more about the question -->

Moving this data into Postgres was an obvious choice that greatly reduced the burdens listed above.

- Moving data to an existing technology allows us to re-use the same advice and documentation for backup and disaster recovery strategies. Removing the number of knobs that must be turned by site-admins is always going to be a win across the board.
- Moving from an embedded database to a server-client database removes the nasty singleton property on the service. Now that multiple servers can interact with the same data concurrently without risk of corruption, we can scale the services horizontally without requiring additional effort into implementing sticky sessions or complex request routing rules.

This change also opened up possibilities for future expansion.

- Moving data into a single relational store allows us to create additional indexed views into the data. We can now query over dimensions that were not possible before without opening tends of thousands of relatively small database files.
- Reconciling pieces of data in the same datastore is trivial compared to reconciling pieces of data in two different datastores, especially if it should be done transactionally. Even though we're not in the same _physical_ database instance, having all of our data in _some_ Postgres-compatible store opens up the possibility of transactions spanning multiple physical Postgres instances via [postgres_fdw](https://www.postgresql.org/docs/12/postgres-fdw.html#id-1.11.7.42.12). We can also use the same technique for (semi-)automatically sharding the database once we hit an efficiency or cost limit when scaling a single node vertically.

With the release of 3.21, Sourcegraph will ship with a _second_ Postgres database instance, named `codeintel-db`, which we use to store the data that powers [precise code intelligence](https://docs.sourcegraph.com/code_intelligence/explanations/precise_code_intelligence).

<!--
## Notes for site admins

If you are an active user of LSIF, there are a few changes that may subtly affect the behavior of the code intelligence backend. Our enterprise users operate at incredibly different scales so it is difficult to ensure that a change has zero impact on all existing customers.

#### Connecting to an external database

It has always been possible to target an [external database](https://docs.sourcegraph.com/admin/external_database) instance instead of using the Dockerized version that ships with the Sourcegraph instance. This is useful when you already have a method to provision, backup, and restore database instances (for example, using AWS's RDS or GCP's CloudSQL).

The [3.20 -> 3.21 upgrade guides](https://docs.sourcegraph.com/admin/updates) call out instructions on how to do the same for the new code intelligence database. In the same way you configure your primary database instance with `PG*` environment variables, you configure the code intelligence database instance with `CODEINTEL_PG*` environment variables.

**Note** that if you configure both databases externally, they **must not** point to the exact same database. The frontend service will refuse to start with such a configuration.

#### Data retention policy

The [3.21 changelog](https://github.com/sourcegraph/sourcegraph/blob/3.21/CHANGELOG.md) details the introduction of a new environment variable, `PRECISE_CODE_INTEL_MAX_DATA_AGE`, on the precise-code-intel-bundle-manager service.

Previously, the bundle manager stored all LSIF data on disk as SQLite files. This allowed us to run custodial processes which removed old data, but only when disk pressure was high. Since we've migrated this data to a Postgres instance, there is a less clear-cut method to determine how much data we need to free in order to keep the desired amount of headroom.

Disks do not grow on trees and we at Sourcegraph are well aware of that fact. In order to ensure we didn't accidentally require an infinite disk space in the Sourcegraph 3.21 release, we introduced an alternate data retention policy to replace the old full-disk trigger. Any data that is older than `PRECISE_CODE_INTEL_MAX_DATA_AGE` and is not used to serve code intelligence queries for the tip of a default branch will be automatically flushed from the code intelligence database periodically.

We believe that this will give us roughly the same behavior as the previous versions, and can be tuned to match expected behavior at the scale of your instance. The default value for this environment variable is `720h` (30 days), which is likely adequate for the majority of instances. This value should be adjusted if the size of your index uploads are large and your commit frequency is high.
-->
