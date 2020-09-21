# Security team

We think that security is an enabler for the business. Sourcegraph is committed to proactive security, and addressing vulnerabilities in a timely manner. We approach security with a can-do philosophy, and look to achieve product goals while maintaining a positive posture, and increasing our security stance over time.

## Goals

### Long term

Every organization is confident they can trust Sourcegraph cloud to securely store and manage their source code.

### Medium term

The goals below lie on the path to our long-term goals, and represent the next 3-6 months of work.  These goals will be delivered serially, but may be worked on in parallel.

**We share our private [infrastructure repository](http://github.com/sourcegraph/infrastructure) on Sourcegraph cloud**

  - Problem and rationale: While Sourcegraph cloud is in an good, and improvine security state, we currently do not have the right level of visibility. By starting with a private repository that contains no secrets, we can build and deploy the visibility technologies and processes that allow us to build a holistic view of the environment.  This serves as a proxy for small company repository use.
  - Planned work:
    - Run ongoing vulnerability scans of the containers including vulnerability remediation
    - Deploy centralized security logging
    - Ship container logs to the logging destination
    - Begin documenting policies
  - Definition of success: Frequent container vulnerability scans are being run, and stored for a future audit. Fixes to the containers or their underlying service configurations have made it into the product release cycle.  Logs of new container deployments are available for search in a centralized logging tool.

**We share a private repository containing encrypted secrets**

  - Problem and rationale: Customers will have repositories containing encrypted secrets, using an [ansible vault](https://docs.ansible.com/ansible/latest/user_guide/vault.html) or gpg encrypted files. Trusting these repositories to external systems requires the added degree of care and concern, expected in security conscious small and medium enterprise (SME). To support those needs, not only is enhanced visibility into our own systems required on our side, it will be contractually obligated, or at a minimum part of security questionnaires.
  - Planned work:
    - Run ongoing vulnerability scans of underlying workloads including vulnerability remediation
    - Deploy host-based intrusion detection (HIDS)
    - Centralize cloud and workload logs in a single location
    - Add support for audit and access logging
    - Normalize security and application logs
    - Create dashboards and alerts for events of interest
    - Extend policy documentation
  - Definition of success: We deploy a private repository containing encrypted secrets to Sourcegraph cloud, complete with a baseline for security monitoring. We are able to validate access to underlying hosts and the application in centralized logging.

**Host a capture the flag for Sourcegraph.com**

  - Problem and rationale: Running a world class service capable of hosting private repositories is about more than application security. As examples, we need visibility into data loss, processes around incident response need documentation, and defensive measures for the internal actor need to be expanded upon. The proxy enhances the addressed security concerns that a medium enterprise would require.
  - Planned work:
    - Encrypt stored repositories at rest
    - Enhance policy documentation, and specific procedures such as incident response
    - Create data leakage alerts
    - Deploy network visibility tools
    - Conduct mock capture the flags to tune security controls
  - Definition of success: We publicly commit to, and host an ongoing capture the flag, inviting the security community to participate, as we learn about our security measures. This will include both the repository from the previous goal, as well as a plain-text on-disk file containing the keys to unlock the repository.

### Short term

Our short term goals are documented in the current [tracking issue](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+label%3Atracking+label%3Ateam%2Fsecurity+is%3Aopen).

## Contact

- [security@sourcegraph.com](mailto:security@sourcegraph.com)
- #security channel Slack.
- [@sourcegraph/security](https://github.com/orgs/sourcegraph/teams/security) on GitHub.

## Responsibilities

- Proactively improve the security of our application and infrastructure.
- Define, plan, and prioritize security work that needs to be done (and then go do that work).
- Directly contribute to our codebase (i.e., Go, TypeScript, Kubernetes, Docker, Google Cloud Platform) to secure our application and deployments, and help other engineers on our team make the necessary changes.
- [Respond to security vulnerability reports](#how-we-respond-to-security-vulnerability-reports)
    - https://github.com/sourcegraph/security-issues
- Increase our security posture by running traditional security tools such as vulnerability scanners, SAST, and DAST tools.
    - https://github.com/sourcegraph/sourcegraph/security/code-scanning
- Create a culture of security at Sourcegraph that empowers all of our engineers to write secure code.

## Reporting a Vulnerability

If you think that you have found a security issue, please email us at <a href="mailto:security@sourcegraph.com">security@sourcegraph.com</a>. We will reply to reports within 1 US business day to acknowledge that we received them and will strive to send you regular updates on our progress until the issue is resolved. You may request an update by replying to the existing email thread. We will read, but may not respond to low quality or spammy reports (e.g. those produced by automated tooling).

### Bounties

We provide monetary rewards, up to $10,000 USD, for security vulnerability reports. The actual reward amount is determined based on the number of customers impacted, the difficulty of exploiting the vulnerability, and the severity of the consequences (e.g. service disruption, data leakage, reputational damage to Sourcegraph) of a successful exploit.

We will send payment to a valid PayPal account after the issue is confirmed fixed or 90 days from the original report, whichever happens first. We will ask you for the name and country associated with your PayPal account.

We may choose to not issue a reward if any of the following apply:

1. You engage in disruptive behavior on sourcegraph.com itself (e.g. spamming our system with requests, fake accounts, denial of service). Sourcegraph is [open source software](https://github.com/sourcegraph/sourcegraph), so you can [install a copy yourself](https://docs.sourcegraph.com/#quickstart-guide) and test against that instead.
1. You publicly disclose a vulnerability before we confirm that it is OK to do so. We want to give our customers time to upgrade to a patched version before public disclosure.
1. You spam us with duplicate and/or low quality vulnerability reports (e.g. copy/pasting generic issues from automatic scanning tools).
1. You are a current or former teammate at Sourcegraph (e.g. employee, contractor, intern).
1. You are friends or family with a current or former teammate at Sourcegraph.

## How we respond to security vulnerability reports

When we receive [a report of a security vulnerability](#how-to-report-a-security-vulnerability), a member of our security team determines if a reported vulnerability should be investigated by an engineer.

- If so, a member of our security team will [file a vulnerability report in sourcegraph/security-issues](https://github.com/sourcegraph/security-issues/issues/new/choose) and follow the checklist in the issue template.

- If not, a member of our security team will respond to the report to notify the reporter why we are not acting on the report.

  > Thank you for your report. Could you please provide us with $INFOX, $INFOY, and $INFOZ so we can investigate this further? 

  > Thank you for your report. We will not be taking further action on this report because $REASONS.

--------------------------

## How we Work

On the security team, we work by planning, tracking, and reviewing - creating a feedback mechansim targeting our own continuous improvement based on the things we learn.

### Principles

1. [Goals](https://about.sourcegraph.com/company/goals/guidelines) are something we strive for, whilst tracking and communicating progress.
2. A work item is a piece of work (e.g., writing code, hiring a new teammate) that makes progress toward achieving a goal.
3. Releases may be made up of N workitems, that may impact Y goals.  Whilst this is true, we communicate both internally and externally progress towards those goals.
4. Security by its various nature has public work items ([main repo](https://github.com/sourcegraph/sourcegraph) and private workitems ([security repo](https://github.com/sourcegraph/security-issues/)). Over time workitems should move from the private repository to the public repository once they can be made public.  The ideal goal state is the lack of a private security repository.

### Planning

1. We plan iterations and features prior to their execution, in a team planning session.
2. We set one or more goals for the interation.
3. We write RFCs and solicit feedback ideally, prior to the start of an iteration, but especially with forethought in mind.
4. We hold weekly team syncs and [track them here](https://docs.google.com/document/d/1l-JyN-hol2G6YXNqPsJsIgN2z3aZEzOW4-Julu4xthI).
5. We report on our status and progress weekly in [tracking issues](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3Atracking+label%3Ateam%2Fsecurity), and radiate communication.

### Tracking

1. Goals are the combination of a [GitHub project](https://github.com/orgs/sourcegraph/projects?query=is%3Aopen+Security) and issues with tags. GitHub tracking issue (labels: tracking, team/security) with an additional label (secgoal:<someshortthing1>) support tracking against a goal.
   a. Work items impacting this goal are created in GitHub, by using the labels team/security and secgoal:<someshortthing1>.
   b. When a work item is targets a specific release, the appropriate tracking label is added.
   c. Milestones for individual goals are communicated on the goal tracking issue.
   
2. Tracking issues are used for communicating status.  We embrace the small, incremental, but well thought out changes.  This provides the added benefit of easing communication with our customers, both internal and external.
   a. By tagging work items, the tracking issues are the source of truth on a per release basis.
   b. Each release has at least one goal associated with it, communicated in the tracking issue.  These goals are release specific, meaning they may or may not be reflected in our existing project goals.
   
### Learning

After the each iteration, we hold a [retrospective](https://about.sourcegraph.com/retrospectives). We try to understand the degree to which we achieved the goals we communicaed at the beginning.  We idenitfy what went well and what our opportunities for imporvemen, and actively choose one of the things we've learned, and improve it.

## Members

- [Chayim Kirshen](../../../company/team/index.md#chayim-kirshen-he-him) ([Engineering Manager](../roles.md#engineering-manager)).
- [Elizabeth Stirling](../../../company/team/index.md#elizabeth-stirling-she-her)

## Open Positions

[Software Engineer - Security](../../engineering/hiring/software-engineer-security.md)
