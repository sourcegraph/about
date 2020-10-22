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


See additional Postgres tips in our [incident docs](../incidents/playbooks/index.md#postgreSQL-database-problems)