---
layout: markdown
title: Security is core to everything we do
---

## We know that source code is one of your most sensitive assets. Every component of Sourcegraph was designed with security in mind. We've detailed our strict security guidelines for different deployment types below.

We don't stop at keeping your code safe. When your team's developers use Sourcegraph, they can discover and use your own security best practices much more easily in your own code. Your team can also more easily enforce security standards during code review.

If you have specific questions or concerns, contact us at security@sourcegraph.com.

If you think you have discovered a security vulnerability in our product, please follow our instructions on [how to report a security vulnerability](https://handbook.sourcegraph.com/product-engineering/engineering/cloud/security/reporting-vulnerabilities).

For details on our information security practices or to request a copy of our SOC 2 Report, please visit our 
<Badge text="Security Trust Portal" color="blue" size="large" link="https://security.sourcegraph.com/" />.

## Sourcegraph Cloud

Sourcegraph Cloud is the recommended deployment model for most customers. Sourcegraph Cloud instances are provisioned and managed by Sourcegraph and have special security features:

### Infrastructure

- All infrastructure is hosted on [Google Cloud Platform](https://cloud.google.com/security/) and managed through Terraform.
- Customer instances are provisioned in fully segregated GCP environments, ensuring that customer data is fully segregated.
- All communication to your Sourcegraph instance is encrypted using TLS 1.2 or greater. User credentials are encrypted at rest using 256-bit Advanced Encryption Standard (AES-256) keys in Galois Counter Mode (GCM). The keys are automatically rotated every 90 days.
- All storage volumes are encrypted at rest, and data is encrypted in-cloud during transport.
- We leverage IAM groups and rules to enforce the principle of least access across our cloud infrastructure.
- Domains are managed through Cloudflare and use its security capabilities, like Web Application Firewall and Rate Limiting.
- External access to production systems is restricted by firewall. Secrets that grant access to compute resources are stored only on encrypted local drives or a secret management service.
- Instances are updated monthly, and are actively maintained to keep the service up and healthy.
- Instances are updated for security patches as needed, according to Sourcegraph's [Vulnerability Management Policy](https://handbook.sourcegraph.com/departments/engineering/dev/policies/vulnerability-management-policy/).
  
### Monitoring and Incident Response

- Our operations team monitors service availability 24x7x365. They investigate alerts and potential attacks 24x7x365, triaging and responding when necessary.
- We only log information crucial for security and support. Only restricted personnel have access to user data. Logs are stored in GCP and the information is retained for up to 365 days. Find out more in our [Privacy Policy](/terms/privacy).
- Service, application, and access logs for are stored centrally by Sourcegraph and monitored.
- You can find more details in our [Incident Response Policy](https://handbook.sourcegraph.com/departments/security/security-incident-response/)
- Only restricted Sourcegraph employees have access to a customer's instance, strictly for support and maintenance purposes. Access is logged and monitored.
- Sourcegraph employees access the instance through secure SSO means, ensuring MFA protections and more.

## Sourcegraph on-premise

Sourcegraph on-premise allows you to have the most control over the deployment and security options:

- Sourcegraph instances deployed on-premise do not send any customer code to other servers. Sourcegraph employees have no access to customer code.

- Other than the email address of the initial installer (to know who to contact regarding sales, product updates, security updates, and policy updates), Sourcegraph instances deployed on-premise do not send any personal data to other servers. Learn more in our [pings documentation](https://docs.sourcegraph.com/admin/pings).

- When running Sourcegraph on your own infrastructure, all application logs are stored locally, and never shared with Sourcegraph. Sourcegraph employees and contractors never have access to your Sourcegraph instance, or any of its data, unless explicitly shared for troubleshooting purposes.

- Authentication via SAML, OAuth, HTTP Proxy auth, and OpenID Connect is configurable. Basic authentication is enabled by default.

- Enterprise customers can configure Sourcegraph to [enforce repository permissions](https://docs.sourcegraph.com/admin/repo/permissions) from connected code hosts. Sourcegraph also exposes a GraphQL API to explicitly set repository permissions.

- Encryption at-rest and in-transit are configurable and highly recommended.

## Shared security responsibility model for sourcegraph.com and managed instances.

- Sourcegraph handles the security of the applications, the systems they run on, and the environments those systems are hosted within.
- As a customer you are responsible for the proper management of information on your account, including ensuring that access tokens are properly handled, and that code host connections and linked repositories are correctly configured. You have to control the users, access to your data, and what extensions you install and trust. Finally, you are responsible for ensuring your company is meeting compliance requirements and have awareness of the impact the previous items can have on the confidentiality of your code.

## General Practices

### Bug Bounty Program and Vulnerability Disclosure

We maintain a Bug Bounty program rewarding security researchers that find vulnerabilities in our code or infrastructure and disclose it responsibly. More information about Sourcegraph's Bug Bounty Program and our Vulnerability Disclosure policy can be found [here](https://handbook.sourcegraph.com/product-engineering/engineering/cloud/security/reporting-vulnerabilities).

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

<HubSpotForm formId='0ff99031-7caf-433a-8aef-8c9345948288' inlineMessage="Thank you for your interest in Sourcegraph. You will be notified of any changes to our security updates." />
