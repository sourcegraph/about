## PostgreSQL database tips

We provide two sets of instructions here, shell commands and PostgreSQL commands to be run inside a `psql` instance. PostgreSQL commands are denoted by the prompt `sg=#` in this documentation; the actual prompt corresponds to the postgres user name.

### Shell commands

These commands assume you're on a local machine, and trying to access the live systems. Also refer to the [deployment page's Kubernetes section](../../deployments.md#kubernetes) for kubectl tips.

### Sourcegraph.com specific
Use the cloud sql proxy to connect to the database
```
  cloud_sql_proxy -instances=sourcegraph-dev:us-central1:sg-cloud-732a936743=tcp:5555
```

You can also directly view database in [GCP](https://console.cloud.google.com/sql/instances?project=sourcegraph-dev)

We run a PgHero deployment as well you can use to analyze slow queries and overall database performance
```
  kubectl port-forward -n monitoring svc/pghero 8080:80
```
and then navigate to localhost:8080 to view the dashboard


### PostgreSQL interactions

The `psql` command gives you, by default, a prompt looking like `user=#`, where "user" is the provided user name; `sg` for production. SQL queries and commands (`SELECT`, `UPDATE`, `INSERT`, `DELETE`, `DROP`) need to be terminated by a semicolon. Some commands start with a backslash, and are not SQL commands, and do not need semicolons.

Examples:

```
sourcegraph=# select * from schema_migrations;
  version   | dirty
------------+-------
 1528395540 | f
(1 row)

sourcegraph=# \d schema_migrations
Table "public.schema_migrations"
 Column  |  Type   | Modifiers
---------+---------+-----------
 version | bigint  | not null
 dirty   | boolean | not null
Indexes:
    "schema_migrations_pkey" PRIMARY KEY, btree (version)
```

If you have entered an SQL command and gotten a prompt back immediately, check the character right before the `#`. If you're missing a semicolon, that character changes to `-`. If you have mismatched parentheses, it changes to `(`. Examples:

```
           v-- this column here is really useful!
sourcegraph=# select (version, dirty
sourcegraph(# )
sourcegraph-# from schema_migrations
sourcegraph-# ;
      row
----------------
 (1528395540,f)
(1 row)
```

#### List slow queries

Note that typical queries usually run in milliseconds, not seconds. "1 minute" is far enough out to be highly unusual.

```sql
select pid, now() - pg_stat_activity.query_start AS duration, query, state from pg_stat_activity where (now() - pg_stat_activity.query_start) > interval '1 minute';
```

#### Cancel or terminate slow queries

Queries can be cancelled (requested to stop) or terminated (killed). You can only cancel a query which is running. Idle queries, which have completed but are waiting (typically on the client consuming the results or acknowledging them in some way), may not respond to a cancel, and require termination. (Under the hood: These are just sending signals. Cancel is `SIGINT`, terminate is `SIGTERM`.)

Cancel:

```sql
select pg_cancel_backend(pid), now() - pg_stat_activity.query_start AS duration, query, state from pg_stat_activity where (now() - pg_stat_activity.query_start) > interval '1 minute';
```

Terminate:

```sql
select pg_terminate_backend(pid), now() - pg_stat_activity.query_start AS duration, query, state from pg_stat_activity where (now() - pg_stat_activity.query_start) > interval '1 minute';
```

In each case, the column containing the results of the `pg_*_backend(pid)` call will have a `t` for successes and an `f` for failures. Note that even a terminated process may not disappear instantaneously. (Failures should not happen if your database role is a superuser, which is the configuration we document and support, and is what we use on prod.)

#### Check/fix migration table

When migrations run, the `schema_migrations` table is updated to show the state of migrations. The `dirty` column indicates whether a migration is in-process, and the `version` column indicates the version of the migration the database is on or converting to. On startup, frontend will abort if the `dirty` column is set to true. (The table has only one row.)

If frontend fails at startup with a complaint about a dirty migration, a migration was started but not recorded as completing. This could mean that it actually failed. It could also mean that it completed, but took long enough that the readiness check killed frontend before the state was recorded. So it's possible that one or more commands from the migration ran successfully.

_Do not_ mark the migration table as clean if you have not verified that the migration was successfully completed.

To check the state of the migration table:

```sql
SELECT * FROM schema_migrations;
```

Typical output would look like:

```
  version   | dirty
------------+-------
 1528395539 | t
(1 row)
```

This indicates that migration 1528395539 was running, but has not yet completed. Check on the actual state of the migration directly; _if_ it has completed, you can manually clear the dirty bit:

```sql
UPDATE schema_migrations SET dirty = 'f' WHERE version = 1528395539;
```

Checking on the status of the migration requires looking at the migration's commands. The source for each migration is in `sourcegraph/sourcegraph/migrations`, in a file named something like `1528395539_.up.sql`. The number indicates a migration serial number, and the text (usually empty in recent migrations) after the serial number describes the purpose of the migration. There should be a corresponding `.down.sql` file to reverse the migration.

A full explanation of how to determine whether arbitrary SQL commands have successfully executed is beyond the scope of this document, but the most common/easy case is described below.

#### Describe a table and its indexes

Many migrations do nothing but create tables and/or indexes or alter them. You can get a description of a table and its associated indexes quickly using the `\d` command (note lack of semicolon):

```
sg=# \d global_dep
   Table "public.global_dep"
  Column  |  Type   | Modifiers
----------+---------+-----------
 language | text    | not null
 dep_data | jsonb   | not null
 repo_id  | integer | not null
 hints    | jsonb   |
Indexes:
    "global_dep_idx_package" btree ((dep_data ->> ('package'::text COLLATE "C")))
    "global_dep_idxgin" gin (dep_data jsonb_path_ops)
    "global_dep_language" btree (language)
    "global_dep_repo_id" btree (repo_id)
Foreign-key constraints:
    "global_dep_repo_id" FOREIGN KEY (repo_id) REFERENCES repo(id) ON DELETE RESTRICT
```

Using this information, you can determine whether a table exists, what columns it contains, and what indexes on it exist. This allows you to determine whether a given command ran successfully. For instance, if one of the commands in a migration was `CREATE INDEX global_dep_idx_package [...]`, and you got the above output from `\d`, that would indicate that the index was successfully created. If the index wasn't present, that would indicate that the `CREATE INDEX` had not been executed, and you would need to run that statement before clearing the `dirty` flag in `schema_migrations`.
