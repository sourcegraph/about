---
layout: markdown
title: Security is core to everything we do
permalink: security
---

## We know that source code is one of your most sensitive assets. Every component of Sourcegraph was designed with security in mind. We&#39;ve detailed our strict production security guidelines for customers below.

We don&#39;t stop at keeping your code safe. When your team&#39;s developers use Sourcegraph, they can discover and use your own security best practices much more easily in your own code. Your team can also more easily enforce security standards during code review.

If you have specific questions or concerns, contact us at <a href="mailto:security@sourcegraph.com">security@sourcegraph.com</a>.

If you think you have discovered a security vulnerability in our product, please follow our instructions on [how to report a security vulnerability](#how-to-report-a-security-vulnerability).

## Sourcegraph on-premise

Sourcegraph instances that host private code are typically deployed on-premise and therefore Sourcegraph employees have no access to customer data or code.

Self-hosted Sourcegraph instances do not send any customer code to other servers.

Additionally, other than the email address of the initial installer (for customer support, security, and product notification purposes) Sourcegraph never sends any private user data, such as usernames or email addresses, or other specific data to any other servers.

Learn more in our [pings documentation](https://docs.sourcegraph.com/admin/pings).

## Code host ACLs 

[Sourcegraph can be configured to enforce repository permissions from code hosts.](https://docs.sourcegraph.com/admin/repo/permissions). Unit and integration tests protect the correctness of these permissions checks.

## Customer data

- Access to all internal systems is protected by multi-factor authentication. Access is restricted to those who require it to perform their job, and is regularly reviewed and revoked upon termination or when no longer needed.
- All application and user access logs are stored centrally and monitored.
- Company policy prevents customer data from being downloaded to portable devices, such as laptops.
- Device management is in place for remote wiping of all devices.
- Development laptops have encrypted hard drives.

## Network security

When you run Sourcegraph on your own infrastructure, you are protected by the network security policies enforced by your infrastructure environment. On sourcegraph.com, we maintain the following policies:

- All production systems are hosted on Google Cloud Platform (https://cloud.google.com/security/), where all storage volumes are encrypted at rest.
- All external network communication between production services occurs over HTTPS / TLS.
- External access to production systems is restricted by firewall. Secrets that grant access to
  compute resources are stored only on encrypted local drives or in a secret management service.
- Our dedicated security team at Sourcegraph handles all security escalations, and is available 24/7.
- Customer data can be deleted from all primary and backup systems within 7 days of request.

## Site security

Sourcegraph supports HTTPS encryption when deployed on-premises.

- All traffic to sourcegraph.com is transmitted over HTTPS.
- Monitoring services alert our 24/7 support team of potential attacks.

## Development

Code reviews are mandatory for all code changes to our product. Security-sensitive pull requests must undergo [review by the proper security code owner](code_reviews.md#security). Furthermore, we use Sourcegraph to provide critical context during code reviews (such as identifying dependencies of modified code).

We use a number of static analysis tools to identify security risks in development, including the following:
- Language-specific linters
- Notifications and alerts for risky code patterns using Sourcegraph saved searches
- Code coverage tools to ensure unit test coverage
- End to end tests to validate authentication workflows
- Tools such as Dependabot and GitHub security advisories to identify security vulnerabilities in our code and in dependencies

All development laptops have encrypted hard drives.

## How to report a security vulnerability

If you think that you have found a security issue, please email us at <a href="mailto:security@sourcegraph.com">security@sourcegraph.com</a>. We will reply to high quality reports within 1 business day to acknowledge that we received them and will strive to send you regular updates on our progress until the issue is resolved. You may request an update by replying to the existing email thread. We will read, but may not respond to or issue bounties for low quality or spammy reports (e.g. those produced by automated tooling).

We provide monetary rewards, up to $10,000 USD, for security vulnerability reports. The actual reward amount is determined based on the number of customers<sup>*</sup> impacted, the difficulty of exploiting the vulnerability, and the severity of the consequences (e.g. service disruption, data leakage, reputational damage to Sourcegraph) of a successful exploit.

\* A **customer** is defined as a paid user of Sourcegraph. Please note that there are currently no paying customers on sourcegraph.com because sourcegraph.com only hosts public code and is free to use. As such, an issue that impacts all **users** on sourcegraph.com doesn't necessarily impact any **customers**.

We will send payment to a valid PayPal account after the issue is confirmed fixed or 90 days from the original report, whichever happens first. We will ask you for the name and country associated with your PayPal account.

We will not issue a reward if any of the following apply:

1. You engage in disruptive behavior on sourcegraph.com itself (e.g. spamming our system with requests, fake accounts, denial of service). Sourcegraph is [open source software](https://github.com/sourcegraph/sourcegraph), so you can [install a copy yourself](https://docs.sourcegraph.com/#quickstart-guide) and test against that instead.
1. You publically disclose a vulnerability before we have fixed it.
1. You spam us with duplicate and/or low quality vulnerability reports (e.g. copy/pasting generic issues from automatic scanning tools).
1. You are currently a teammate at Sourcegraph (e.g. employee, contractor, intern).
