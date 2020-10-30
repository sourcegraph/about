# Manual searching developer guide

> **Note:** Looking for _how to monitor Sourcegraph?_ See the [observability documentation](https://docs.sourcegraph.com/admin/observability).

This document gives a quick overview of how to manually search for data that isn't currently represented or displayed in [Grafana dashboards](https://docs.sourcegraph.com/admin/observability/metrics). Note that, in most cases, writing manual queries indicates that you should be [adding monitoring](https://about.sourcegraph.com/handbook/engineering/observability/monitoring#adding-monitoring) so that the next person who needs to find that data doesn't need to repeat your work. 

## Prometheus

### Metrics

Since the data you're looking for is stored in Prometheus, you first need to know what metrics we collect. The quickest way to find this is to follow [these instructions](https://about.sourcegraph.com/handbook/engineering/observability/monitoring#find-available-metrics) to install `promgrep`, and run it from the root `sourcegraph/sourcegraph` source directory. This will return a list of all metrics that are collected by prometheus. Using a partial metric name as a parameter will find all parameters conaining that string.

### Queries

The quickest way to test these queries would be to access the Grafana instance exposed to admins at `/-/debug/grafana` via a reverse-proxy. You can then use any of [the Prometheus metric types](https://prometheus.io/docs/concepts/metric_types/) to extract useful information from the prometheus metrics mentioned above. For an example of queries we've found useful, you can see the [frontend monitoring queries here](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@64aa473/-/blob/monitoring/frontend.go#L12-43), and can learn more about [adding monitoring here](https://about.sourcegraph.com/handbook/engineering/observability/monitoring#adding-monitoring).