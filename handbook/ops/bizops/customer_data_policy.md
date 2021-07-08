# Customer data policy
How Sourcegraph handles customer information.

Product data
| Source/platform                                                     | Sourcegraph Cloud  | Self-hosted        | How long is this data kept for?                                                                                                                                                                      | Who has access? |
|------------------------------------------------------------------|--------------------|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
| Ping telemetry                                                   |                    | :heavy-check-mark: | Delete data for any instance that’s been offline for over 3 years. All active instance data are kept                                                                                                 |                 |
| Google Cloud Platform data pipeline (Buckets, Dataflow, Pub/Sub) | :heavy-check-mark: | :heavy-check-mark: | Pub/Sub and Dataflow don’t hold data (only manage the data pipelines). GCP buckets follow the same rules as the data they backup (i.e. Sourcegraph.com data backed up in buckets is kept for a year) |                 |
| Montoring and observabiltity tools (Sentry, Honeycomb, Jaeger)   | :heavy-check-mark: |                    |                                                                                                                                                                                                      |                 |
| Sourcegraph Cloud Postgres database                              | :heavy-check-mark: |                    | Retain indefinitely unless deletion request is received                                                                                                                                              |                 |
| Sourcegraph.com user action/event logs                           | :heavy-check-mark: |                    | Retain data for 1 year                                                                                                                                                                               |                 |
| Amplitude                                                        | :heavy-check-mark: |                    |                                                                                                                                                                                                      |                 |
| Google Analytics                                                 | :heavy-check-mark: |                    | Indefinitely                                                                                                                                                                                         |                 |


PII and user characteristics
| Source/platform                                   | Sourcegraph Cloud  | On-prem/self-hosted | How long is this data kept for?                                                                      | Who can access it? |
|---------------------------------------------------|--------------------|---------------------|------------------------------------------------------------------------------------------------------|--------------------|
| HubSpot and Salesforce (CRM/marketing automation) | :heavy-check-mark: | :heavy-check-mark:  | Retain all customer information                                                                      |                    |
| Communication tools (Gmail, Jira, Productboard)   | :heavy-check-mark: | :heavy-check-mark:  | Retain all inbound customer communication                                                            |                    |
| Slack                                             | :heavy-check-mark: | :heavy-check-mark:  | Customer support channels are maintained indefinitely; all other messages are deleted after 3 months |                    |
| View list of sales tools                          | :heavy-check-mark: | :heavy-check-mark:  | Retain all outbound customer communication                                                           |                    |
|                                                   |                    |                     |                                                                                                      |                    |
|                                                   |                    |                     |                                                                                                      |                    |
|                                                   |                    |                     |                                                                                                      |                    |


## FAQs

### Where is my data stored?

All outside tools are cloud products and therefore the data is hosted by the service provider. All internal tools and product data is stored in the Postgres database that hosts Sourcegraph Cloud, as well as data pipelines and warehouses in Google Cloud Platform. 

### Who has access to my data?

TBD - core and/or distribution team to answer this question 

### Can you see my private code?

TBD - core and/or distribution team to answer this question 

### Is my data encrypted?

TBD - core and/or distribution team to answer this question 

### What is my private data used for?

Your in-product data (e.g. your user settings) are used to deliver you the product. This data is not accessible by most Sourcegraph teammates (see 'Can you see my private code?'). All other non-sensitive, personally identifiable information and product usage data is used to support our teams in delivering and improving Sourcegraph for you and your team. 
