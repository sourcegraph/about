# Security

We have [a bug bounty program](https://hackerone.com/sourcegraph).

## Development

Code reviews from senior engineers and peers are mandatory for any code to be merged (no direct
pushes to `master`). Security-sensitive pull requests must undergo [review by the proper security
code owner](code_reviews.md#security). Furthermore, we use Sourcegraph to provide
critical context during code reviews (such as identifying dependencies of modified code).

We use a number of static analysis tools to identify security risks in development, including the
following:
- language-specific linters
- notifications and alerts for risky code patterns using Sourcegraph saved searches
- code coverage tools to ensure unit test coverage
- end to end tests to validate authentication workflows
- tools such as Dependabot and GitHub security advisories to identify security vulnerabilities in our
  code and in dependencies
- enhanced code reviews via Sourcegraph.

All development laptops have encrypted hard drives.

## Ops

Sourcegraph instances that host private code are typically deployed on-premises and therefore Sourcegraph
employees have no access to customer data.

Self-hosted Sourcegraph instances do not send any customer code to other servers. Additional
customer private data such as email addresses is never sent (with the exception of emails collected
explicitly for sales and support purposes).

On sourcegraph.com, Sourcegraph uses role-based access controls to ensure only administrators have
direct access to production compute resources and sensitive configuration data. All persistent
volumes are encrypted.

Internal traffic and RPCs between services that comprise Sourcegraph are TLS-encrypted.

## Code permissions

Sourcegraph respects code host access controls. Unit and integration tests protect the correctness
of this permissions check.
