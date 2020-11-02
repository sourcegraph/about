# PostgreSQL deployments

For deployments other than Cloud and Sourcegraph.com please use the information [here](https://docs.sourcegraph.com/admin/faq#how-do-i-access-the-sourcegraph-database) to access the database.

## Sourcegraph.com specific

We currently run two seperate databases. The `sg-cloud` database is the primary database and the `sg-cloud-code-intel` is used by the code-intel team.

You can also directly view database in [GCP](https://console.cloud.google.com/sql/instances?project=sourcegraph-dev)

We utilize the GCP utility of the [Cloud SQL Proxy](https://cloud.google.com/sql/docs/postgres/sql-proxy) to connect to our production databases. By default, our Cloud SQL databases are not accessible without this proxy.

For read-only access there is also an option of using [BigQuery](
https://console.cloud.google.com/bigquery?sq=527047051561:67f2616f4acb4b7cb3639e4a97e2f4aa
) and their `EXTERNAL_QUERY` syntax.

There are two ways of connecting: either using the `gcloud beta sql connect` command or running the proxy on a port locally.

### Command line only use (pgsql)

You may use these gcloud commands to connect directly to the databases:

- Default db {[Password](https://my.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/allitems/svfiw4vcbxhhbobpl442olyebu/)}
  ```
    gcloud beta sql connect --project sourcegraph-dev sg-cloud-732a936743 --user=sg -d=sg
  ```
- Code intel db {[Password](https://my.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/allitems/wcnh2e3ql7j2x54zflqen5mzva)}
  ```
    gcloud beta sql connect --project sourcegraph-dev sg-cloud-code-intel-9fc67e507c  --user=sg -d=sg
  ```

  Go to [Example Queries](#example-queries) to continue

### Proxy for advanced use

[Download](https://cloud.google.com/sql/docs/postgres/quickstart-proxy-test#install_and_authenticate_the_gcloud_command-line_tool) and setup the cloud sql proxy
```
  cloud_sql_proxy -instances=sourcegraph-dev:us-central1:sg-cloud-732a936743=tcp:5555
```

Now, in a new terminal run the command below, the database will be running on `localhost:5555`

  ```
    pgsql -h localhost -p 5555 -d sg -U sg
  ```
  _Note:_ You may need to set or unset your PGPASSWORD environment variable to the value of the password of the user you are using to connect (`-U sg`).

If you are frequently using this to access the database for read-only operations, please let the #dev-ops channel know so we can add a read-only replica.


## Example queries
🔥 You are directly interfacing with the production database, if you are unsure of any commands please reach out in #dev-chat or #dev-ops

- See all fields on a table (ie the `repo` table)
  ```
    \d+ repo
  ```
- See total number of rows in the `repo` table
  ```
    SELECT COUNT(*) FROM repo;
  ```
## Performance monitoring

We run a PgHero deployment as well you can use to analyze slow queries and overall database performance
```
  kubectl port-forward -n monitoring svc/pghero 8080:80
```
and then navigate to http://localhost:8080 to view the dashboard

See additional Postgres tips in our [incident docs](../incidents/playbooks/index.md#postgreSQL-database-problems)
