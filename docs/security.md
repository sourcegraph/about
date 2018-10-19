---
layout: markdown
title: Security is Core to Everything We Do
permalink: security
---

## We know that source code is one of your most sensitive assets. Every component of Sourcegraph was designed with security in mind. We&#39;ve detailed our strict production security guidelines for customers below.

We don&#39;t stop at keeping your code safe. When your team&#39;s developers use Sourcegraph, they can discover and use your own security best practices much more easily in your own code. Your team can also more easily enforce security standards during code review.

If you have specific questions or concerns, contact us at <a href="mailto:security@sourcegraph.com">security@sourcegraph.com</a>.

## Access Controls

- Access to all internal systems is protected by multi-factor authentication. Access is restricted to those who require it to perform their job, and is regularly reviewed and revoked upon termination or when no longer needed.
- All application and user access logs are stored centrally and monitored.
- Company policy prevents customer data from being downloaded to portable devices, such as laptops.
- Device management is in place for remote wiping of all devices.

## Network Security

- All production systems are hosted on Google Cloud Platform (https://cloud.google.com/security/), where all storage volumes are encrypted at rest.
- All external network communication between production services occur over HTTPS / TLS.
- External access to production systems is restricted by firewall to restricted IP ranges.
- Our dedicated security team at Sourcegraph handles all security escalations, and is available 24/7.
- Customer data can be deleted from all primary and backup systems within 7 days of request.
- Recurring third party security assessments available on request

## Site Security

- All data from Sourcegraph.com (https://sourcegraph.com/) is transmitted over HTTPS.
- Monitoring services alert our 24/7 support team of potential attacks.
- Annual third party security assessments available on request - last report February 2017

## Bug Reports

If you think that you have found a security issue, please email us at <a href="mailto:security@sourcegraph.com">security@sourcegraph.com</a>. Please do not publicly disclose the issue until we’ve addressed it.

We provide monetary rewards, up to $4,000, for open bounties. This is determined based on the percentage of users impacted, the likelihood of encountering the vulnerability under normal use of the site, and the severity of potential service disruption or data leakage.
