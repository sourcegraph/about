# Distribution team goals

Goals are continuously updated and reviewed. If you find these goals do not reflect our current priorities or are out of date, please update them as soon as possible or add it as a topic to our [weekly sync](recurring_processes.md#weekly-distribution-team-sync).

## Goals

Progress toward our active goals is described in our [tracking issue](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Atracking+label%3Ateam%2Fdistribution).

### [Collect metrics and feedback about Sourcegraph deployments]()

Sourcegraph collects a number of data points through pings that are used to understand how customers use Sourcegraph and drive how we improve the product. We currently do not have any metrics, pings or manual data points collected from site-admins, which makes it impossible for the Distribution team to make educated guesses on features that site-admins require and how projects should be prioritized.

- **Owner**:
- **Status**: In Progress. _Estimate FY22-Q1_
- **Outcomes**:
  - We can collect feedback from site-admins.
  - We have defined an initial set of data points to collect.
  - We have a tool in place to store and query site-admin data.
  - We have a process that allows CE/CSE to relay feedback provided by customers.
- **Milestones**:
  - We have the tools and process in place to collect date
  - We have collected data from 10 site-admins

### [Provide a Sourcegraph in a box deployment option]()

Sourcegraph is currently deployed via three, self serve methods. The only one-step deployment method (the sourcegraph docker image) is being sunsetted. As a result, we need to provide a turn-key full deployment option of Sourcegraph. Thus lallowing end users to explore a full featured deployment, without having to understand the complexity of cloud infrastructure.

- **Owner**:
- **Status**: TBD. _Estimate FY22-Q1_
- **Outcomes**:
  - Customers can deploy a Sourcegraph docker-compose deployment to 1 cloud provider.
  - Customers can deploy a Sourcegraph Kubernetes cluster to 1 cloud provider.
- **Milestones**:
  - There is a pipeline in place to deploy and version Sourcegraph docker-compose images.
  - We can deploy a docker-compose in a box version of Sourcegraph to 1 cloud provider.
  - Docker-compose in a box can be upgraded in place.
  - We have Infrastructure as Code to deploy a Kuberentes cluster with Sourcegraph from scratch to 1 cloud provider.
  - Stretch: We can leverage Cloud services of the cloud provider for the requried services.

### [Make t]()

As a potential customer, I want to default to a minimal Sourcegraph deployment, so that I can grow my infrastructure cost and complexity with usage.

- **Owner**:
- **Status**:
- **Outcomes**:
  -
- **Milestones**: TBD

## Future goals

These are ideas for future goals that the team might work on. Just because something is on this list, does not mean it will be worked on next.

### [Provide an alternative docker registry]

DockerHub announced that they will be rate-limiting image pulls for anonymous and free clients. While we don't anticipate this affecting our customers, we want to have some solution in place in the case some of them are affected.

- **Owner**:
- **Status**: Not started. TBD
- **Outcomes**:
  - We have a mirrored docker repository containing all our old+new builds
  - Have documentation on how to change the repository that can be used by CE to assist customers
- **Milestones**:
  -

### [Deprecate single-docker for production usage]

In [RFC 263](https://docs.google.com/document/d/1GPypas4ZUZIw346EcNDM1up2OOQFyPpEzA3-0glPEMY/edit#) we discussed and agreed to deprecate single-docker for production usage. The RFC has been approved and we have to take the next steps in removing this deployment type.

- **Owner**:
- **Status**: Not started. _Estimated: FY22-Q1_
- **Outcomes**:
  - No new production deployments are crated using single-docker after completion.
- **Milestones**:
  - Create migration docs for customer and Sourcegraph to assist customers
  - Set deprecation notice and announce deprecation in X versions
  - single-docker is deprecated for production usage
  - Stretch: Remove the single-docker deployment option

### [Improve internal deployment pipeline UX](https://github.com/orgs/sourcegraph/projects/96)

Our existing deployment pipelines to our Sourcegraph instances (such as Sourcegraph Cloud) has several usability problems - for example, it is hard for engineers to identify when a commit was deployed to an environment or which deployment is currently running in a particular environment. We want to improve the deployment experience, making sure we can deploy with confidence and can easily understand in which stage of the pipeline a change currently is.

- **Owner**: Dax
- **Status**: Not started. Unknown amount of work. _Estimated: FY22-Q1_
- **Outcomes**:
  - It is simple to identify when a commit has been deployed to an environment.
  - Developers are notified when their PR is deployed to an environment.
  - Deployments display information about the artifact they are deploying.
  - We are able to rollback to or redeploy a previous version.
  - Stretch: We can correlate deployments to Grafana metrics and Stackdriver logs.
  - TBD: Branches can trigger a parallel `sourcegraph-frontend` deployment.
  - TBD: We can trigger rollbacks and deployments via a `/` command in Slack.
- **Milestones**: TBD

### Improve the debugging and troubleshooting process

As we deploy Sourcegraph to multiple different environments, we need to provide a consistent and straightforward process to debug issues. We are currently lacking tools to collect debugging information (configuration, type, size, diff from upstream, etc) consistently and a process to capture the output of debugging sessions to feed back into our priorities and documentation.
We will initially focus on reducing the time it takes to collect troubleshooting information.

- **Owner**: TBD
- **Status**: Not started. Unknown amount of work.
- **Outcomes**:
  - We can categorize and capture the amount of effort spent on different incident types.
  - We can provide a straightforward set of tools to collect initial debugging and deployment information.
  - TBD
- **Milestones**: TBD

### Site admins use reliable methods like Docker Compose or Kubernetes for production deployments

Many customers of Sourcegraph today are still running a single-container `sourcegraph/server` deployment in production. In 2019 we began advising all new deployments that this deployment option is _not_ for production use because it has no proper resource isolation and as such when it falls over it is impossible to debug, leading to painstakingly urgent migrations to better deployment types and frustrated/angry customers. We would like to get to a world where all production instances of Sourcegraph use reliable deployment methods like Docker Compose or Kubernetes.

- **Owner**: TBD
- **Status**: [RFC 263 REVIEW: Single-container deployments are for demos only](https://docs.google.com/document/d/1GPypas4ZUZIw346EcNDM1up2OOQFyPpEzA3-0glPEMY/edit)
- **Outcomes**:
  - Customer deployments become more reliable in performance, stability, uptime, etc.
  - No customers are using the unreliable `sourcegraph/server` for their production deployment.
  - Customers upgrade to Docker Compose or Kubernetes deployments without any major trouble.
- **Milestones**:
  - ~~RFC creation.~~
  - RFC approval.
  - ...TBD...

### Support upgrading across multiple Sourcegraph versions

Upgrading from 3.13 -> 3.17 requires you perform 4 individual upgrades today (3.14 -> 3.15 -> 3.16 -> 3.17) which is extremely painful and time consuming for site admins, especially so given how time consuming our upgrade process is in general. We would like to make upgrades across multiple Sourcegraph versions easier.

- **Owner**: TBD
- **Status**: Not started. Unknown amount of work.
- **Outcomes**:
  - Customers can upgrade across multiple versions of Sourcegraph, allowing them to get up-to-date more quickly and easily.
- **Milestones**:

### Releases can be done automatically

Releases today require manual intervention to finalize release pull requests and address issues that might come up.
We would like releases to happen seamlessly, and whenever required.

- **Owner**: TBD
- **Status**: Not started. Unknown amount of work.
- **Outcomes**:
  - Release tracking issues are no longer required.
  - Releases require minimal manual intervention (at most 2-3 actions).
- **Milestones**:
  - [Releases can be done automatically (e.g. CLI command, `/` command in Slack, etc.)](https://github.com/orgs/sourcegraph/projects/131)

## Past goals

We record past goals that we have completed [here](goals_completed.md).
