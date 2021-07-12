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
| Amplitude                                                        | :heavy-check-mark: |                    | Indefinitely                                                                                                                                                                                                     |                 |
| Google Analytics                                                 | :heavy-check-mark: |                    | Indefinitely                                                                                                                                                                                         |                 |


PII and user characteristics
| Source/platform                                   | Sourcegraph Cloud  | On-prem/self-hosted | How long is this data kept for?                                                                      | Who can access it? |
|---------------------------------------------------|--------------------|---------------------|------------------------------------------------------------------------------------------------------|--------------------|
| HubSpot and Salesforce (CRM/marketing automation) | :heavy-check-mark: | :heavy-check-mark:  | Retain all customer information                                                                      |                    |
| Communication tools (Gmail, Jira, Productboard)   | :heavy-check-mark: | :heavy-check-mark:  | Retain all inbound customer communication                                                            |                    |
| Slack                                             | :heavy-check-mark: | :heavy-check-mark:  | Customer support channels and private messages are maintained indefinitely. See our full [Slack retention policy](../../communication/team_chat.md#retention) for more information |                    |
| View list of sales tools                          | :heavy-check-mark: | :heavy-check-mark:  | Retain all outbound customer communication                                                           |                    |


## FAQs

### Where is my data stored?

All outside tools listed above are cloud products and therefore the data is hosted by the service provider. All product data and any internally-built tools are stored in the Postgres database that hosts Sourcegraph Cloud, as well as data pipelines and warehouses in Google Cloud Platform. 

### Can Sourcegraph developers or admins see my private code?

No. Only you can see or edit your private code. Code host permissions are enforced and not even Sourcegraph’s admin accounts can see private code. Manage your permissions in the code host and they will be automatically replicated in Sourcegraph.

### Is my data encrypted?

Yes, our dedicated security team follows best-practices for data encryption. We know that source code is one of your most sensitive assets. Every component of Sourcegraph was designed with security in mind. We've detailed our strict security guidelines for different deployment types below:
* User credentials are encrypted in our database using 256-bit Advanced Encryption Standard (AES-256) keys in Galois Counter Mode (GCM). The keys are automatically rotated every 90 days.
* All storage volumes are encrypted at rest, and data is encrypted in-cloud during transport.
* We leverage IAM groups and rules to enforce the principle of least access across our cloud infrastructure.
* The domain sourcegraph.com is managed through Cloudflare and uses its security capabilities, like Web Application Firewall and Rate Limiting.
* We only log information crucial for security and support. Only restricted personnel have access to user data. Logs are stored in GCP and the information is retained for 180 days. 
* Our Incident Response plan is currently under review. It will be publicly available when finalized.

Our full data policy is outlined in our [Terms of Service](https://about.sourcegraph.com/terms-dotcom) and our [Privacy Policy](https://about.sourcegraph.com/privacy/). If you have further questions, reach out to us at Security@sourcegraph.com. 

### What is my private data used for?

Your in-product data (e.g. your user settings) are used to deliver you the product. This data is not accessible by most Sourcegraph teammates (see 'Can you see my private code?'). All other non-sensitive, personally identifiable information and product usage data is used to support our teams in delivering and improving Sourcegraph for you and your team. 
