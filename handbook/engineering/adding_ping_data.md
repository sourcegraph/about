
# Adding, changing and debugging pings
This page outlines the process for adding or changing the data collected from Sourcegraph instances through pings.

## Ping philosophy

Pings are the only data Sourcegraph receives from installations. Our users and customers trust us with their most sensitive data. We must preserve and build this trust through only careful additions and changes to pings.

All ping data must be:

- Anonymous (with only one exception—the email address of the initial site installer)
- Aggregated (e.g. number of times a search filter was used per day, instead of the actual search queries)
- Non-specific (e.g. no repo names, no usernames, no file names, no specific search queries, etc.)

## Adding data to pings

Treat adding new data to pings as having a very high bar. Would you be willing to send an email to all Sourcegraph users explaining and justifying why we need to collect this additional data from them? If not, don’t propose it.

1. Write an RFC describing the problem, data that will be added, and how Sourcegraph will use the data to make decisions. The BizOps team must be a required reviewer (both @Dan and @EricBM). Please use [these guidelines](../ops/bizops/index.md#submitting-a-data-request) and the following questions to inform the contents of the RFC:
    - Why was this particular metric/data chosen?
    - What business problem does collecting this address?
    - What specific product or engineering decisions will be made by having this data?
    - Will this data be needed from every single installation, or only from a select few? Will it be needed forever, or only for a short time?
    - Have you considered alternatives? E.g., collecting this data from Sourcegraph.com, or adding a report for admins that we can request from some number of friendly customers?
    - What code or database changes are needed to gather the new data?
1. When the RFC is approved, use the [life of a ping documentation](https://docs.sourcegraph.com/dev/architecture/life-of-a-ping) with help of [an example PR](https://github.com/sourcegraph/sourcegraph/pull/8374) to implement the change. At least one member of the BizOps team must approve the resulting PR before it can be merged. DO NOT merge your PR yet. Steps 3, 4, and 5 must be completed before merging.
    - Ensure a CHANGELOG entry is added, and that the two sources of truth for ping data are updated along with your PR:
      - Pings documentation: https://docs.sourcegraph.com/admin/pings
      - The Site-admin > Pings page, e.g.: https://sourcegraph.com/site-admin/pings
1. Determine if any transformations/ETL jobs are required, and if so, add them to the [script](https://github.com/sourcegraph/analytics/blob/master/BigQuery%20Schemas/transform.js). The script is primarily for edge cases. Primarily,  as long as zeroes or nulls are being sent back instead of `""` in the case where the data point is empty.
1. Open a PR to change [the schema](https://github.com/sourcegraph/analytics/tree/master/BigQuery%20Schemas) with BizOps (EricBM and Dan) as approvers. Keep in mind:
	- Check the data types sent in the JSON match up with the BigQuery schema (e.g. a JSON '1' will not match up with a BigQuery integer).
	- Every field in the BigQuery schema should not be non-nullable (i.e. `"mode": "NULLABLE"` and `"mode": "REPEATED"` are acceptable). There will be instances on the older Sourcegraph versions that will not be sending new data fields, and this will cause pings to fail.
1. Once the schema change PR is merged, test the new schema. Contact @EricBM for this part.
  	- Delete the [test table](https://bigquery.cloud.google.com/table/telligentsourcegraph:sourcegraph_analytics.update_checks_test?pli=1) (`$DATASET.$TABLE_test`), create a new table with the same name (`update_checks_test`), and then upload the schema with the newest version (see "Changing the BigQuery schema" for commands). This is done to wipe the data in the table and any legacy configurations that could trigger a false positive test, but keep the connection with Pub/Sub.
		- Update and publish [a message](https://github.com/sourcegraph/analytics/blob/bfe437c92456f5ddb3c0e765e14133e1e1604bfb/BigQuery%20Schemas/pubsub_message.json) to [Pub/Sub](https://console.cloud.google.com/cloudpubsub/topic/detail/server-update-checks-test?project=telligentsourcegraph), which will go through [Dataflow](https://console.cloud.google.com/dataflow/jobs/us-central1/2020-02-28_09_44_54-15810172927534693373?project=telligentsourcegraph&organizationId=1006954638239) to the BigQuery test table. The message can use [this example](https://github.com/sourcegraph/analytics/blob/master/BigQuery%20Schemas/pubsub_message) as a baseline, and add sample data for the new ping data points.
  	- To see if it worked, go to the [`update_checks_test`](https://bigquery.cloud.google.com/table/telligentsourcegraph:sourcegraph_analytics.update_checks_test?pli=1) table, and run a query against it checking for the new data points. Messages that fail to publish are added to the [error records table](https://bigquery.cloud.google.com/table/telligentsourcegraph:sourcegraph_analytics.update_checks_test_error_records?pli=1).
1. Merge the PR

## Changing the BigQuery schema

Commands:

- To update schema: `bq --project_id=$PROJECT update --schema $SCHEMA_FILE $DATASET.$TABLE`, replacing `$PROJECT` with the project ID, `$SCHEMA_FILE` with the path to the schema JSON file generated above, and `$DATASET.$TABLE` with the dataset and table name, separated by a dot.
- To retrieve the current schema : `bq --project_id=$PROJECT --format=prettyjson show $DATASET.$TABLE > schema.json` with the same replacements as above.

To update the schema:
1. Run the update schema command on a test table.
2. Once the test is complete, run the update schema command on the production table.

## Changing the BigQuery scheduled queries

1. Add the fields you'd like to bring into BigQuery/Looker to the [instances scheduled queries 1 and 2](https://bigquery.cloud.google.com/scheduledqueries/telligentsourcegraph). 
2. If day-over-day (or similar) data is necessary, create a new table/scheduled query. For example, daily active users needs a [separate table](https://bigquery.cloud.google.com/table/telligentsourcegraph:sourcegraph_analytics.server_daily_usage) and [scheduled query](https://bigquery.cloud.google.com/scheduledqueries/telligentsourcegraph/location/us/runs/5c51773a-0000-2fc8-bf1f-089e08266748).

## Debugging pings

Options for debugging ping abnormalities. Refer to [life of a ping](https://docs.sourcegraph.com/dev/architecture/life-of-a-ping) for the steps in the ping process.

1. BigQuery: Query the [update_checks error records](https://console.cloud.google.com/bigquery?sq=839055276916:62219ea9d95d4a49880e661318f419ba) and/or [check the latest pings received](https://console.cloud.google.com/bigquery?sq=839055276916:3c6a5282e66a4f0fac1b958305d7b197) based on installer email admin. 
1. Dataflow: Review [Dataflow](https://console.cloud.google.com/dataflow/jobs/us-central1/2020-02-05_10_31_47-13247700157778222556?project=telligentsourcegraph&organizationId=1006954638239): WriteSuccessfulRecords should be full of throughputs and the Failed/Error jobs should be empty of throughputs. 
1. Stackdriver (log viewer): [Check the frontend logs](https://console.cloud.google.com/logs/viewer?project=sourcegraph-dev&minLogLevel=0&expandAll=false&customFacets=&limitCustomFacetWidth=true&interval=PT1H&resource=k8s_container%2Fcluster_name%2Fdot-com%2Fnamespace_name%2Fprod%2Fcontainer_name%2Ffrontend), which contain all pings that come through Sourcegraph.com. Use the following the advanced filters to find the pings you're interested in.
1. Grafana: Run `src_updatecheck_client_duration_seconds_sum` on [Grafana](https://sourcegraph.com/-/debug/grafana/explore?orgId=1&left=%5B%22now-1h%22,%22now%22,%22Prometheus%22,%7B%7D,%7B%22ui%22:%5Btrue,true,true,%22none%22%5D%7D%5D) to understand how long each method is taking. Request this information from an instance admin, if necessary.
1. Test on a Sourcegraph dev instance to make sure the pings are being sent properly

```
resource.type="k8s_container"
resource.labels="dot-com"
resource.labels.cluster_name="prod"
resource.labels.container_name="frontend"
"[COMPANY]" AND "updatecheck"
```
