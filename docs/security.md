---
layout: markdown
title: Security is core to everything we do
permalink: security
---

## We know that source code is one of your most sensitive assets. Every component of Sourcegraph was designed with security in mind. We've detailed our strict production security guidelines for customers below

We don't stop at keeping your code safe. When your team's developers use Sourcegraph, they can discover and use your own security best practices much more easily in your own code. Your team can also more easily enforce security standards during code review.

If you have specific questions or concerns, contact us at <a href="mailto:security@sourcegraph.com">security@sourcegraph.com</a>.

If you think you have discovered a security vulnerability in our product, please follow our instructions on [how to report a security vulnerability](https://about.sourcegraph.com/handbook/engineering/security#how-to-report-a-security-vulnerability).

## Sourcegraph on-premise

Sourcegraph instances that host private code are typically deployed on-premise and therefore Sourcegraph employees have no access to customer data or code.

Self-hosted Sourcegraph instances do not send any customer code to other servers.

Additionally, other than the email address of the initial installer (for customer support, security, and product notification purposes) Sourcegraph never sends any private user data, such as usernames or email addresses, or other specific data to any other servers.

Learn more in our [pings documentation](https://docs.sourcegraph.com/admin/pings).

## Code host ACLs

[Sourcegraph can be configured to enforce repository permissions from code hosts.](https://docs.sourcegraph.com/admin/repo/permissions). Unit and integration tests protect the correctness of these permissions checks.

## Data access

When you run Sourcegraph on your own infrastructure, all application and user access logs are stored locally only. Sourcegraph employees and contractors never have access to your Sourcegraph or the code, user data, or application data stored in it (excluding any manual intervention, such as e-mailing logs for support purposes).

We maintain the following policies for sourcegraph.com data and any data provided via email or other support channels:
- Access to all internal systems is protected by multi-factor authentication. Access is restricted to those who require it to perform their job, and is regularly reviewed and revoked upon termination or when no longer needed.
- All sourcegraph.com application and user access logs for Sourcegraph.com are stored centrally and monitored.
- Company policy prevents customer data from being downloaded to portable devices, such as phones, that don't have device management software in place.
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

Code reviews are mandatory for all code changes to our product. Security-sensitive pull requests must undergo [review by the proper security code owner](../handbook/engineering/code_reviews#security). Furthermore, we use Sourcegraph to provide critical context during code reviews (such as identifying dependencies of modified code).

We use a number of static analysis tools to identify security risks in development, including the following:

- Language-specific linters
- Notifications and alerts for risky code patterns using Sourcegraph saved searches
- Code coverage tools to ensure unit test coverage
- End to end tests to validate authentication workflows
- Tools such as Dependabot and GitHub security advisories to identify security vulnerabilities in our code and in dependencies

All development laptops have encrypted hard drives.

## Updates

Sourcegraph follows commonly recognized best practices for updating software dependencies.

- We monitor source-level dependencies for [CVE](https://cve.mitre.org/) patches.
- We monitor the Alpine Linux release notes to be aware of patches for CVEs and upgrade our base
  Docker images as necessary.
- If we are alerted to a vulnerability that exists in a version of Sourcegraph that would compromise
  the privacy of a customer's code, we will notify the affected customers immediately. Patch
  releases that fix the vulnerability will be prioritized as a P0, which means work will commence
  immediately rather than waiting until the next planning phase.

Customers are encouraged to update to the latest release of Sourcegraph every month. This will
ensure that their Sourcegraph instance has the latest security-related updates. New releases are
[published on the 20th of every month](https://docs.sourcegraph.com/admin/updates), so customers that wish to stay up-to-date can set monthly calendar reminders, or subscribe to Sourcegraph emails to receive the following updates:

<p class="text-center">
  <!--[if lte IE 8]>
  <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2-legacy.js"></script>
  <![endif]-->
  <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></script>
  <script>
    hbspt.forms.create({
    portalId: "2762526",
    formId: "0ff99031-7caf-433a-8aef-8c9345948288"
  });
  </script>
</p>
