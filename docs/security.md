---
layout: markdown
title: Security is core to everything we do
---

## We know that source code is one of your most sensitive assets. Every component of Sourcegraph was designed with security in mind. We've detailed our strict security guidelines for different deployment types below.

We don't stop at keeping your code safe. When your team's developers use Sourcegraph, they can discover and use your own security best practices much more easily in your own code. Your team can also more easily enforce security standards during code review.

If you have specific questions or concerns, contact us at <a href="mailto:security@sourcegraph.com">security@sourcegraph.com</a>.

If you think you have discovered a security vulnerability in our product, please follow our instructions on [how to report a security vulnerability](https://about.sourcegraph.com/handbook/engineering/security#how-to-report-a-security-vulnerability).

## Sourcegraph.com

Sourcegraph.com makes it easier than ever to connect your code repositories and search private and public code. Here are the measures we take to ensure your code is safe and Sourcegraph is available:

#### Account Security

- Login with your GitHub or GitLab account using OAuth2.
- Only you can see your private source code. Code host permissions are enforced and not even Sourcegraph’s admin accounts can see private code. Manage your permissions in the code host and they will be automatically replicated in Sourcegraph.
- User credentials are encrypted in our database using 256-bit Advanced Encryption Standard (AES-256) keys in Galois Counter Mode (GCM). The keys are automatically rotated every 90 days.

#### Infrastructure
- All infrastructure is hosted on Google Cloud Platform (https://cloud.google.com/security/) and managed through Terraform.
- All storage volumes are encrypted at rest, and data is encrypted in-cloud during transport.
- We leverage IAM groups and rules to enforce the principle of least access across our cloud infrastructure.
- The domain sourcegraph.com is managed through Cloudflare and uses its security capabilities, like Web Application Firewall and Rate Limiting.
- External access to production systems is restricted by firewall. Secrets that grant access to
  compute resources are stored only on encrypted local drives or a secret management service.

#### Monitoring and Incident Response

- Our operations team monitors service availability 24x7x365. They investigate alerts and potential attacks 24x7x365, triaging and responding if necessary.
- We only log information crucial for security and support. Only restricted personnel have access to user data. Logs are stored in GCP and the information is retained for 180 days. Find out more in our [Privacy Policy](https://about.sourcegraph.com/privacy/).
- Service, application, and access logs for sourcegraph.com are stored centrally by Sourcegraph and monitored.
- Our Incident Response plan is currently under review. It will be publicly available when finalized.

## Sourcegraph on-premise

Sourcegraph on-premise allows you to have the most control over the deployment and security options:

- Sourcegraph instances deployed on-premise do not send any customer code to other servers. Sourcegraph employees have no access to customer code.

- Other than the email address of the initial installer (to know who to contact regarding sales, product updates, security updates, and policy updates), Sourcegraph instances deployed on-premise do not send any personal data to other servers. Learn more in our [pings documentation](https://docs.sourcegraph.com/admin/pings).

- When running Sourcegraph on your own infrastructure, all application logs are stored locally, and never shared with Sourcegraph. Sourcegraph employees and contractors never have access to your Sourcegraph instance, or any of its data, unless explicitly shared for troubleshooting purposes.

- Authentication via SAML, OAuth, HTTP Proxy auth, and OpenID Connect is configurable. Basic authentication is enabled by default.

- Enterprise customers can configure Sourcegraph to [enforce repository permissions](https://docs.sourcegraph.com/admin/repo/permissions) from connected code hosts. Sourcegraph also exposes a GraphQL API to explicitly set repository permissions.

- Encryption at-rest and in-transit are configurable and highly recommended.

## Managed Sourcegraph instances

[Managed Sourcegraph instances](https://docs.sourcegraph.com/admin/install/managed) are provisioned and managed by Sourcegraph and have special security features:

- Sourcegraph provisions your instance in a completely isolated and secure cloud infrastructure. It will be restricted to only your organization through your enterprise VPN and/or SSO provider of choice.
- As with Sourcegraph on-prem instances, authentication and authorization are configurable by the customer. 
- All communication to your Sourcegraph instance is encrypted using TLS 1.2 or greater. User credentials are encrypted at rest using 256-bit Advanced Encryption Standard (AES-256) keys in Galois Counter Mode (GCM). The keys are automatically rotated every 90 days.
- Instances are updated monthly, and are actively maintained to keep the service up and healthy.
- Managed instances are monitored 24x7 and incidents managed in the same way as our Sourcegraph Cloud deployment.

## General Practices

### Bug Bounty Program and Vulnerability Disclosure

We maintain a Bug Bounty program rewarding security researchers that find vulnerabilities in our code or infrastructure and disclose it responsibly. More information about Sourcegraph's Bug Bounty Program and our Vulnerability Disclosure policy can be found [here](https://about.sourcegraph.com/handbook/engineering/security/reporting-vulnerabilities).

### Development

- Access to all internal systems is protected by multi-factor authentication. Access is restricted to those who require it to perform their job, and is regularly reviewed and revoked upon termination or when no longer needed.
- Code reviews are mandatory for all code changes to our product. Security-sensitive changes are additionally reviewed by the security team before being released. 
- Furthermore, internally, we use our own product to provide critical context during code reviews (such as identifying dependencies of modified code).
- End-to-end tests to validate authentication and other critical workflows (such as authorization and authentication).
- We do not store sensitive keys and passwords in our code, instead relying on a secure secret vault.
- Our software components are monitored for CVEs.
- We follow commonly recognized best practices for updating software dependencies and upgrading our base Docker images.

### Code security
We ensure Sourcegraph is secure by using security tooling and processes:

- Containers are scanned for CVEs using GCP tooling.
- Regular internal audits of our code and systems.
- Annual 3rd party penetration tests.
- Code coverage tools to ensure unit test coverage.

### Software Bill of Materials (SBOM) and OSS usage

Sourcegraph is an OSS product licensed under Apache 2.0. We also make great use of open source components and ship them as part of our application. Full lists of tools and licenses can be found [here](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/third-party-licenses)

## Security Updates

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