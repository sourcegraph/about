# Sourcegraph direction

We want Sourcegraph to be:

- **For developers:** the best way to answer questions and get unblocked while writing, reviewing, and reading code.
- **For organizations** (engineering leaders and internal tools teams): the infrastructure for developer tools and data.

This is an overview of what’s coming in the next 3-6 months.  More details are in the [project roadmap](https://docs.google.com/document/d/1cBsE9801DcBF9chZyMnxRdolqM_1c2pPyGQz15QAvYI/edit?usp=sharing). Our high-level vision is outlined in the [Sourcegraph master plan](https://about.sourcegraph.com/plan).

We ship a release on the [20th day of each month](../handbook/engineering/releases/index.md#releases-are-monthly).

Want to help us achieve these goals? [We're hiring!](https://github.com/sourcegraph/careers/blob/master/job-descriptions/software-engineer.md)

## Overview

We're continually improving Sourcegraph's core features for developers:

- Code search and navigation (with code intelligence)
- Integration into code review
- Code change management campaigns

Our current product priorities are:

- Usability: Sourcegraph is intuitive to use for anyone looking for answers about their code, and easy for admins to configure and maintain.
- Scalability: Sourcegraph performs reliably at scale for our largest customers.
- Code change management campaigns: fix and change things across all of your repositories.

## In 3-6 months, Sourcegraph will have:

### Improved usability

Sourcegraph is intuitive to use for a wide range of roles, from developers to PMs, engineering managers, data analysts, and more. It adds value to this wide range of roles by making more information about code available, such as language statistics and dependency graphs. [Search has an improved UI](https://about.sourcegraph.com/blog/sourcegraph-3.10#improved-autocompletion-for-search-query-filters) that makes it more accessible, easier to use, and faster to drill down on what you're looking for.

Improving upon on our [basic code intelligence](https://docs.sourcegraph.com/user/code_intelligence) that works for every language, Sourcegraph provides precise code intelligence for a subset of common languages including Go, TypeScript, C/C++, Java, and C#.

### Enhanced scalablity, reliability, and security

Sourcegraph performs at the scale of our largest customers under a wide variety of configurations and deployment infrastructure. [Code search is fast at large scale](https://docs.google.com/document/d/18w8T_KzYxQye8wg1g01QpMOX4_ERTtbOxMBRYaOEkmk/edit?usp=sharing) (~80k repositories), and the API can support enterprise level usage. Sourcegraph enforces repository permissions using ACLs from Bitbucket Server, GitHub, and GitLab. Admins understand the health of their instances and are alerted proactively if things fail.

### Code change management

Use Sourcegraph to [run large-scale code change campaigns](https://about.sourcegraph.com/product/code-change-management) to remove legacy code, fix critical security issues, and pay down tech debt. You can create campaigns across thousands of repositories and code owners. Sourcegraph automatically creates and updates all of the branches and pull requests, and you can track progress and activity in one place.
