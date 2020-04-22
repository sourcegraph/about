# Support

This document is to help Sourcegraph teammates provide our customers with support.

## How support works for customers

Sourcegraph provides a dizzying number of ways to get in contact with us — from our [public issue tracker](https://github.com/sourcegraph/sourcegraph/issues), our [Contact Us page](https://about.sourcegraph.com/contact), email exchanges with your sales and support reps, to our social media accounts, there's no shortage of ways to get in contact. 

### Recommended support path and SLAs

Any of the methods listed above will get our attention, but we only provide a support SLA on a single path: **filing a support ticket by emailing us at support@sourcegraph.com**.

### Support tickets vs. issues

Because our code is open source, any user or customer can file an issue on our public issue tracker at any time (and we encourage it!). 

However, we don't encourage customers with enterprise contracts to start the support process this way. In some cases, a support ticket (centered around one customer's needs or questions) will be translated into an issue (which should apply generally to the product itself). In fact, we may ask you to file an issue during the support conversation. Learn [how to file an issue for a customer](./filing_customer_issues.md) when necessary.

Beyond the conceptual difference, there are practical reasons to prefer starting support conversations via email:

* Your GitHub username is not connected to your company, so we don't know what service level you are covered by and we can't enforce an SLA.
* You may not want to discuss your private deployment or configuration, to share your logs, etc.
* We won't be able to measure (and improve on) our response and resolution times.

## How to provide support

First, read the section above (for customers).

* [Support duties](#support-duties)
* [The support process](#the-support-process)
* [Using Jira](#using-jira)
* [SLAs](#slas)
* [Deprecated support channels](#deprecated-support-channels)

### Support duties

There are two roles in the support process:

* Front-line support: the individual who has the responsibility for responding to a support ticket within our [response time SLA](#slas), requesting any necessary information, and assigning a support owner.
* Support owner: the individual who has the responsibility for seeing the ticket through until it is closed (ideally within our [resolution time SLA](#slas)), or until it is reassigned to a different owner.

Front-line support is owned by the go-to-market team by default, but every new teammate gets to do a 1-week rotation in this role to learn about our product and use cases, build empathy with our users, and to get to know the product and dev teams (to know who to assign issues to).

Support owners can be anybody at Sourcegraph. In some cases, the front-line support rep may be able to close the issue themselves.

### The support process

#### Front-line support

The current front-line support representative should immediately open the support email, determine the severity (see [SLAs](#slas) below), determine how to respond (e.g., if an answer is as simple as providing a link to our docs, or if someone else should be tagged in), and respond to the customer in Jira. If someone else is taking ownership, assign them in the issue, and notify them in the #customer-updates channel in Slack. If you are unsure who should take ownership of the issue, ask in #distributioneers for anything related running the product or #web for anything related to browser extensions.

The initial email response should not be delayed while waiting for input. If you don't know who to assign, simply acknowledge receipt of the ticket and promise to follow-up.

Email responses should be natural, and don't need to fit any formal "voice". Respond how you'd want a support representative to respond to you.

Example response:

>Hi Alice,
>Sorry to hear you ran into that, thanks for reaching out.
>
>I've added Bob and Carol from our distribution team to this chain — they'll follow up shortly to help resolve this!
>
>Best,
>Dan

This response, like all others, should come through Jira's queues pages, not via a personal email client. "Adding" a teammate to the thread should occur by assigning them ownership of the ticket in Jira and, ideally, sharing a link to the ticket with them in Slack.

Make sure to follow up and check in with ticket owners to confirm their ability to solve the issue and close the ticket. Gentle and kind reminders are totally okay!

#### Support owners

Support owners have the responsibility of ensuring that a ticket is closed, or if necessary, passed off to a more appropriate support owner.

Support owner emails should be natural, and don't need to fit any formal "voice". Email how you'd want a support representative to respond to you.

Since each ticket can take a unique path, there is no single template at this stage. The support owner should determine up front what information to request to debug the issue to minimize the number of back-and-forths required. If, after three responses from the customer, the support owner still isn't certain about the issue, they can request a call/liveshare to debug the issue together live. In this scenario, the support owner should notify the account executive (from sales) that works with the customer.

### Using Jira

Coming soon

### SLAs

We strive to maintain the response and resolution times below.

#### For customers with on-premises/self-hosted Sourcegraph instances:

While Sourcegraph will strive to respond as soon as possible to every issue, we will be responsible for upholding the SLAs below during working hours (9:00a.m. to 5:00p.m.) Pacific Time, Monday through Friday.

||Description|Response time|Resolution time|
|---|---|---|---|
|Severity 1|Any error reported where usage of Sourcegraph is severely impacted, and causes a high impact to the business, in a production environment.|Within 24 hours of becoming aware of the issue|Within 72 hours, using commercially reasonable efforts to provide a resolution or workaround.|
|Severity 2|Any error reported that involves partial, non-critical loss of use, or any general usage questions, feature requests, and similar.|Within one business week of becoming aware of the issue|When complete, using commercially reasonable efforts to provide a resolution, workaround, or product update.|

#### For customers with managed instances:

||Description|Response time|Resolution time|
|---|---|---|---|
|Severity 1|Any error reported where usage of Sourcegraph is severely impacted, and causes a high impact to the business, in a production environment.|Within 24 hours of becoming aware of the issue|Within 72 hours, using commercially reasonable efforts to provide a resolution or workaround.|
|Severity 2|Any error reported that involves partial, non-critical loss of use, or any general usage questions, feature requests, and similar.|Within one business week of becoming aware of the issue|When complete, using commercially reasonable efforts to provide a resolution, workaround, or product update.|

We will work with the customer to schedule maintenance downtime at least 24 hours in advance, and will use commercially reasonable efforts to ensure downtimes lasts no longer than 2 hours. In aggregate, Sourcegraph will use commercially reasonable efforts to maintain availability of 99.5% uptime.

#### For customers with custom support agreements:

Enterprise Plus and Elite customers should refer to their contracts if they have custom service-level agreements.

### Deprecated support channels

In the past, we have provided support on private GitHub issue trackers and private Slack channels. However, we often found that issues or requests went unattended or lacked follow-through. Neither of these were designed to be support ticket managers (with prioritization, stage tracking, alerting, and metrics), and both are now deprecated.

## Finding customer information

### How to find which Sourcegraph version a customer is running

1. Visit the [instances Looker dashboard](https://sourcegraph.looker.com/looks/436).
1. Find the row for the customer's instance. (If you can't find it, ask in #analytics on Slack.)
1. Look at the version number in the row's **Latest Version** column.

## Getting nice email signatures

1. In Gmail **Settings** > **General** scroll down to signature:

![image](https://user-images.githubusercontent.com/3173176/79911585-73112e80-83d5-11ea-85b3-929c20de72d6.png)

2. Make the first line your name in bold
3. Make the second line your title
4. Choose **Insert image** and then **Web Address (URL)** and enter https://storage.googleapis.com/sourcegraph-assets/sourcegraph-logo.png then choose **Medium** size after it has been entered.
5. Click the image, then click **Link** and paste https://sourcegraph.com into the **Web Address** field. Now your image links to the website!
6. Your signature should now look something like this, and clicking the Sourcegraph logo should bring you to sourcegraph.com:

![image](https://user-images.githubusercontent.com/3173176/79911829-e450e180-83d5-11ea-9b9b-9c1cc1056740.png)

