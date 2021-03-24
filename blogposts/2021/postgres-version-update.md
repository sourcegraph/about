---
title: "We're updating the minimum supported version of Postgres: Here's why."
author: Eric Fritz
authorUrl: https://eric-fritz.com
publishDate: 2021-03-23T18:00+02:00
tags: [blog]
slug: postgres-version-update
heroImage: /blog/postgres-version-update.jpg
socialImage: https://about.sourcegraph.com/blog/postgres-version-update.jpg
published: true
description: "As of Sourcegraph 3.27, we're updating the minimum supported version of Postgres from 9.6 to 12."
---

As of Sourcegraph 3.27, we're updating the minimum supported version of Postgres from 9.6 to 12.

**If you are using the Sourcegraph maintained Docker images**: Your instance is already using an appropriate Postgres version and no action is needed on your part.

**If you are maintaining an external database**: If your Postgres version is older than Postgres 12, you will need to update your database instance prior to upgrading from Sourcegraph 3.26 to 3.27.

## Why does Sourcegraph 3.27 require Postgres 12?

Postgres 9.6 was released on 2016/09/29 and since then there have been a [flood of changes](https://www.postgresql.org/about/featurematrix/). Among these changes is a feature which Sourcegraph requires moving forward: Postgres 9.6 contains a SQL standard compatibility exclusion, as noted in the documentation for [creating triggers](https://www.postgresql.org/docs/9.6/sql-createtrigger.html#SQL-CREATETRIGGER-COMPATIBILITY):

> PostgreSQL does not allow the old and new tables to be referenced in statement-level triggers, i.e., the tables that contain all the old and/or new rows, which are referred to by the OLD TABLE and NEW TABLE clauses in the SQL standard.

Postgres 12, however, supports new and old table references in statement-level triggers.

The rest of this post explains the technical motivation for why we needed this capability.

### What does this mean?

In SQL, there are two ways a trigger can be executed:

1. Before or after a _row_ is inserted into/updated within/deleted from a target table
1. Before or after an insert, update, or delete _statement_ over a target table

In the former case, the trigger has access to the `OLD` and `NEW` row values. This allows the trigger to perform actions conditionally as well as extract the previous and updated values in the case the trigger is used to keep denormalized data consistent.

In the latter case, the trigger does not have access to the previous or the new data. Unfortunately, this means that statement-level triggers have no access to previous data, and must re-query the new data from the target table to make use of it.

### Why do we need this particular feature?

Sourcegraph performs database migrations on application startup. We try our best to keep these migrations fast, as a slow migration will block additional container instances from starting and accepting traffic.

Some classes of migrations are very difficult to do efficiently:

- Index creation over large tables requires a full table lock
- Concurrent index creation cannot be applied within a transaction
- Concurrent index creation takes much longer, can be blocked for an arbitrary amount of time due to live transactions, and can fail requiring an operator to rebuild the index (cherry on top: reindex is not concurrent)
- Data migrations over large tables can take an arbitrary amount of time

Sourcegraph 3.25 introduced a mechanism for performing out-of-band migrations. Instead of being applied synchronously on application startup, out-of-band migrations are applied in the application background over a longer period of time.

Each migration is written in a generic way that allows it to be controlled by a global migration runner. This runner is responsible for controlling the throughput of the migration so that it does not require disproportionate memory or compute resources in the database or in the application.

Each migration is required to report its own progress (0-100%) to aid the runner in determining the set of migrations which need to run (and in which direction they must run in the presence of downgrades).

We ran into problems with Postgres 9.6 triggers when trying to implement an out-of-band migration to re-encode the way code intelligence data is stored. A few tables in the codeintel database stores [gob](https://golang.org/pkg/encoding/gob/)-encoded payloads in a `bytea` column. In order to migrate this data into another shape, we need to read these payloads in batches, perform the data migration over each row (in Go, which can properly decode/re-encode the data), then write the new payloads back to the database.

We chose to add a `version` column to these tables so that the backend can determine how to properly interpret the payload of a particular row. This way, both old and new payload shapes can be read while new rows are written with the new shape, and old rows are _eventually_ rewritten into the new shape.

This is where the tradeoffs come in to play.

In our [Cloud](https://sourcegraph.com/search) environment, the `lsif_data_definitions` table contains around 300 million rows. Simply counting the number of rows takes around 24 minutes on our production database instance, as seen by the following (simplified) query plan:

```
Finalize Aggregate
 -> Gather
     Workers Planned: 2
     Workers Launched: 2
      -> Partial Aggregate
          -> Parallel Index Only Scan using lsif_data_definitions_pkey on lsif_data_definitions
              Heap Fetches: 14939021
Planning Time: 1.241 ms
Execution Time: 1442409.435 ms
(9 rows)
```

Postgres requires that each returned row be visible to the current transaction as a way to prevent serving phantom data that was deleted by a previous query. Unfortunately, row visibility information is not stored in the index, but in the heap entry for the row.

As explained in the [documentation](https://www.postgresql.org/docs/9.6/indexes-index-only-scans.html) for index-only scans, partially visible pages require a heap access to check which rows are visible and which are not. These heap access and visibility checks dominate the running time of this query.

### Speeding up counting queries

In no world can a nearly half-hour query be considered _efficient_. And, due to the consequences caused by Postgres [MVCC](https://www.postgresql.org/docs/9.6/mvcc-intro.html), there are few actions under our control that could make a count of so many objects faster.

So, instead, we should count fewer things.

In our naïve attempt to determine the progress of a particular migration, we wanted to simply report the ratio between the number of rows with a version _above_ our target and the total number of rows in the table. However, we don't need progress reporting to be completely accurate (except for at the 0% and 100% edges).

Each table we care to migrate in the codeintel database has a composite primary key containing an _index identifier_. Each unique index identifier corresponds to an LSIF index file uploaded by a user.

Instead of counting the ratio between migrated _rows_ and total rows (which is very large), we can instead count the ratio between migrated _indexes_ and total indexes (which is orders of magnitude smaller - 300 million vs. 23 thousand).

The **obvious approach** would be to migrate all rows in a table associated with the same index at once. Unfortunately, indexes can be very massive. Some enterprise customers are regularly uploading 13GB index files. Thus, our migration batch size is likely going to be too small to guarantee all rows can be migrated, and increasing the batch size will add additional memory and compute constraints on the migrating container.

The **approach we chose** tracks the minimum and maximum row versions for each index in a separate, _much_ smaller table.

*lsif\_data\_definitions*:

| index_id | scheme | identifier | data | version | 
| -------- | ------ | ---------- | ---- | ------- | 
| 1        | foo    | bar        | .... | 1       | 
| 1        | bar    | baz        | .... | 2       | 
| 2        | baz    | quux       | .... | 2       | 
| 2        | quux   | bonk       | .... | 2       |
| 3        | bonk   | honk       | .... | 1       |

*lsif\_data\_definitions\_schema\_versions*:

| index_id | min_version | max_version |
| -------- | ----------- | ----------- |
| 1        | 1           | 2           |
| 2        | 2           | 2           |
| 3        | 1           | 1           |

This second table allows us to efficiently determine which indexes have been migrated and which still need attention. For example, if we are currently migrating from schema version 1 to 2, then the table above shows index 1 is partially migrated, index 2 is fully migrated, and index 3 has yet to be touched.

It is an efficient operation to count both the total number of indexes as well as the number of indexes that are above or below a particular schema version.

The schema version bounds can be kept in sync with the source table trivially by using triggers on inserts, updates, and deletes: if we insert a new row with a new lowest or new highest version or if we update/delete a row with the last remaining lowest or highest version, then we update the associated minimum or maximum version for that index.

### The catch

Of course this can't be the end of the story. In software engineering, every decision has a catch.

After processing an LSIF index file, we insert data in Postgres utilizing very large bulk insert operations. During this process, we insert tens to hundreds of thousands of rows over multiple tables for each index - but we don't make tens of thousands of requests.

For each insertion query, we supply as many rows as possible - up to `65535 / (# cols)` rows at a time. This reduces the total number of round trips to the database.

As of this post, our [Cloud](https://sourcegraph.com/search) environment has a single index with ~390k rows in the definitions table alone, and each index has over 12k rows in this table on average. 12k rows can be inserted with a single statement, and 390k rows can be inserted over 30 statements.

If we were to utilize a row-level trigger approach to keep the schema version bounds in sync with insertions, we would double our writes to the database: one insert in the target table and one upsert to the schema versions table.

If we were instead to utilize a statement-level trigger approach, the extra cost would be negligible: only a handful of additional upsert operations. However, for this to work, we'd need to know the values of both the `index_id` and `version` column, which we do not have access to in Postgres 9.6.

## Conclusion

In order to enable us to continue to scale and improve the performance of your Sourcegraph instance, we are bumping the minimum supported version of Postgres to unlock new features and performance enhancements.

Once you plan to upgrade to Sourcegraph 3.27, you must first ensure that your database meets the new minimum version requirement of Postgres 12.
