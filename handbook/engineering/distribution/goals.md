# Goals

## Medium-term goals

### Any engineer at Sourcegraph can create a release for all of our supported deployment types by running a single command

Creating a new release for our deployments is currently a semi-automated process, which requires several manual steps and synchronizing our versioned artifacts (Sourcegraph, Kubernetes manifests, docker-compose manifests, etc). We want to enable any engineer to perform a release as often as needed, to enable this we want to make releasing Sourcegraph a simple, automated process.

- **Owner**: Distribution Team
- **Status**: In Progress
- **Outcomes**:
  - Releases can be triggered by a single manual step
  - All supported deployment types are released at the same time with the same command
  - Support documentation enables any engineer to perform a release with confidence

### Upgrades between releases are easy to perform

Performing upgrades to deployments is currently a complicated process that requires keeping a fork of our configuration and resolving diff conflicts when performing upgrades which are often complicated as the configuration might contain environment-specific customization. This process creates a bad experience for our customers because of the unknown amount of effort of the upgrade process.
We will start by looking at our Kubernetes deployment and working on an easier update process.

- **Owner**: Distribution Team
- **Status**: In Progress
- **Outcomes**:
  - Upgrades to deployments do not require resolving diff conflicts from upstream
  - Upgrading a deployment configuration requires less than 2 hours of work

### Improve the debugging and troubleshooting process
As we deploy Sourcegraph to multiple dissimilar environments, we need to provide a consistent and straight forward process. We will initially focus on reducing the time it takes to collect troubleshooting information.

- **Owner**: TBD
- **Status**: Not started
- **Outcomes**:
  - We can categorize and capture the amount of effort spent on different incident types
  - We can provide a straightforward set of tools to collect initial debugging and deployment information
  - TBD

## Short-term goals

Out short-term goals are described in our [tracking issue](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Atracking+label%3Ateam%2Fdistribution).
