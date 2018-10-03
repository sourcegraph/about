---
layout: markdown
title: Usage statistics
permalink: docs/usage
---

Sourcegraph aggregates usage information on your instance for admins to track engagement and satisfaction. Periodically, high-level and aggregate data will be sent to Sourcegraph.com to help our product and customer teams. It never sends code, repository names, usernames, or any other specific data.

## Usage analytics for admins

Sourcegraph records basic usage statistics for site admins. Visit the analytics page by clicking **Admin** in the top right of any page, and going to **Analytics** in the left side menu. (The URL is `https://sourcegraph.example.com/site-admin/analytics`.)

Here you can see charts with counts of unique users by day, week, or month, split into authenticated and anonymous users.

From this page, you can also see user-level activity, including counts of pageviews, searches, and code intelligence actions, and last active times. This user-level data is all stored locally on your Sourcegraph instance, and is never sent to Sourcegraph.com.

## User surveys

After using Sourcegraph for a few days, users are presented with a request to answer "How likely is it that you would recommend Sourcegraph to a friend?", and to provide some qualitative product feedback.

Responses to this survey are visible to all site admins on the Sourcegraph instance. View all responses by clicking **Admin** in the top right of any page, and going to **User surveys** in the left side menu. (The URL is `https://sourcegraph.example.com/site-admin/surveys`.)

On this page, admins can view individual satisfaction scores (from 0–10) and individual qualitative feedback, along with aggregate historical scores.

Survey responses are also always sent to Sourcegraph.com.

## Server pings

<div class="alert alert-info">

**Note:** Event-level telemetry was completely removed from Sourcegraph in May 2018. If you previously set it, you can remove <code>"disableTelemetry"</code> from your site configuration.

</div>

Sourcegraph periodically sends a ping to Sourcegraph.com to help our product and customer teams. It sends only the high-level data below. It never sends code, repository names, usernames, or any other specific data. To learn more, click **Admin** in the top right of any page on your instance, and go to **Pings** in the left side menu. (The URL is `https://sourcegraph.example.com/site-admin/pings`.)

- Sourcegraph version string
- Deployment type (Server or Data Center)
- Randomly generated site identifier
- The email address of the initial site installer (or if deleted, the first active site admin), to know who to contact regarding sales, product updates, and policy updates
- Which category of authentication provider is in use (built-in, OpenID Connect, an HTTP proxy, or SAML)
- Whether code intelligence is enabled
- Aggregate counts of current daily, weekly, and monthly users
- Aggregate counts of current users using code host integrations

Customers can disable pings. [Contact us](/contact) to learn more.
