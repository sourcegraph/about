# Distribution team

The distribution team is responsible for making Sourcegraph easy to deploy, scale, monitor, and debug. We solve challenging problems that our customers face when they deploy and scale Sourcegraph on-premise in a variety of environments, and that we face when we deploy and scale [Sourcegraph.com](https://sourcegraph.com/search) (the largest Sourcegraph installation in the world).

## Where to find us

- Slack: [#distributioneers](https://sourcegraph.slack.com/archives/CJX299FGE) channel or tag us using `@distribution
- File issues for us to look at: add the [team/distribution](https://github.com/sourcegraph/sourcegraph/issues/new?labels=team/distribution) label
- Get our attention on GitHub: tag @sourcegraph/distribution in your message
- What we're working on: [tracking issue](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+label%3Ateam%2Fdistribution+label%3Atracking+distribution), [roadmap](./product/roadmap.md)

## Overview

- Product
  - ["Distribution is a product" & personas](product/index.md)
  - [Product roadmap](product/roadmap.md)
  - [Concrete ownership areas](product/ownership.md)
- [Recurring processes](./recurring_processes.md)
- [Internal infrastructure](./internal_infrastructure.md)
- [Tools](./tools/index.md)
- Guides
  - General
    - [Updating Sourcegraph.com site / global / external service configuration](update_sourcegraph_website.md)
  - Development
    - [Observability developer guide](observability/index.md)
    - [Setting up a separate website maintained by Sourcegraph](separate_website.md)
    - [Simulating Kubernetes admin security restrictions](k8s_admin_custom_policy.md)
    - [Testing the GitLab native integration locally](gitlab_native_local.md)
  - Debugging
    - [Replaying metrics dumps from a customer](use_metrics_dump.md)

## Members

- [Gonzalo Peci](../../../company/team/index.md#gonalo-peci) ([engineering manager](../roles.md#engineering-manager))
- [Stephen Gutekanst](../../../company/team/index.md#stephen-gutekanst) ([project lead](../roles.md#project-lead))
- [Geoffrey Gilmore](../../../company/team/index.md#geoffrey-gilmore)
- [Uwe Hoffmann](../../../company/team/index.md#uwe-hoffmann)
- [Dave Try](../../../company/team/index.md#dave-try)
- [Robert Lin](../../../company/team/index.md#robert-lin) (internship)

## Hiring status

_Updated 2020-06-02_

The team has doubled in size recently so it isn't a high priority to grow this team further, but we are always open to hiring exceptional people. [Apply here](https://github.com/sourcegraph/careers/blob/master/job-descriptions/software-engineer-distribution.md).

## Why the "Distribution" team, not the "SRE" team, "infrastructure" team, etc?

The Distribution team, like most teams at Sourcegraph, is a goal-oriented team. Our ownership areas _include_ site reliability and infrastructure because those assist in achieving our true goals:

1. Make deploying, upgrading, and managing Sourcegraph as easy as possible.
2. Support the rapid distribution of software at Sourcegraph to our users.
3. Advocate strongly on behalf of our users unique infrastructure requirements.

This is an important distinction because it means our goals of site reliability and maintaining infrastructure are not inherently opposed to the rest of the engineering organization's goals to ship code changes frequently and iteratively, instead we are _in direct support of it_.
