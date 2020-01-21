---
layout: markdown
title: Security is core to everything we do
permalink: security
---

## We know that source code is one of your most sensitive assets. Every component of Sourcegraph was designed with security in mind. We&#39;ve detailed our strict production security guidelines for customers below.

We don&#39;t stop at keeping your code safe. When your team&#39;s developers use Sourcegraph, they can discover and use your own security best practices much more easily in your own code. Your team can also more easily enforce security standards during code review.

If you have specific questions or concerns, contact us at <a href="mailto:security@sourcegraph.com">security@sourcegraph.com</a>.

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

## Bug reports

If you think that you have found a security issue, please email us at <a href="mailto:security@sourcegraph.com">security@sourcegraph.com</a>. Please do not publicly disclose the issue until we’ve addressed it.

We provide monetary rewards, up to $10,000, for reporting security issues. This is determined based on the percentage of users impacted, the likelihood of encountering the vulnerability under normal use of the product, and the severity of potential service disruption or data leakage. Bounties will be awarded after the issue is confirmed fixed.

For additional information, see the internal [Sourcegraph Handbook page on security](/handbook/engineering/security).
