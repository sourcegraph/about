# Metrics definitions

## Active user

**On premise**: A user is considered 'active' when they are signed-in and trigger any event over the specified time period. This could be anything from a page view inside the product to a hover using one of Sourcegraph's browser extensions to a code monitoring email notification.

**On Sourcegraph.com**: A user is considered 'active' when they trigger any event over the specified time period, regardless of whether they are signed in or not.

Time periods we track:

- Daily active user (DAU)
- Weekly active user (WAU)
- Monthly active user (MAU)

## Growth metrics user categories

We track the following categories in pings for each month. The explanations are framed as though we're talking about the current month, but apply to any given month.

| Metric      | Description                                                      |
|-------------|------------------------------------------------------------------|
| Retained    | Users who were active last month *and* this month                |
| Churned     | Users who were active last month but not this month              |
| Resurrected | Users who were *not* active last month but are active this month |
| Created     | Users whose account was created this month                       |
| Deleted     | Users whose account was deleted this month                       |

## Engagement ratios

| Metric  | Description                                                                                                                                                                                   |
|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DAU/MAU | The ratio of average DAUs over a month to the number of MAUs in the corresponding month. If the ratio is 0.4 or 40%, the average user used Sourcegraph 12 days per month (30 days * .4 = 12). |
| DAU/WAU | The ratio of average DAUs over a week to the number of WAUs in the corresponding week. If the ratio is 0.4 or 40%, the average user used Sourcegraph 2.8 days per week (7 days * .4 = 2.8).   |

## Customer Health Score
The customer health score combines high-level, aggregated metrics in order to understand customer engagement with the product, as a means to ensure customers are receiving maximum value from Sourcegraph. We currently include the following metrics:

| Metric      | Description                                                      |
|-------------|------------------------------------------------------------------|
| MAU/Total User Accounts | Used as a measure of monthly adoption within a customer’s total licensed user base|
| DAU/MAU | Used as a measure of overall engagement / stickiness of the platform within an account|
| Net Promoter Score| Used as a measure of sentiment toward the platform among a customer’s users|

Additional Resources:
- [Project overview](https://docs.google.com/spreadsheets/d/1D2CJoVdkbXsBwVjgNDziGXBanWBfVhoVs6_kDBRStfA/edit#gid=1229546656): Describes which metrics we view as indicative of customer health along with how scores are calculated, and provides space for ongoing feedback
- [Dashboard](https://sourcegraph.looker.com/dashboards-next/179?Customer%20Engineer=&Account%20Executive=&Unique%20Server%20ID=&Region=): The customer health dashboard is the source of truth for health scores and is updated in real-time
