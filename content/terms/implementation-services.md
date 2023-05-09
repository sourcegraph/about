---
layout: markdown
title: Terms of Service for Sourcegraph Implementation Services
---

Last Modified: May 5, 2023

This document outlines the basic terms and conditions that apply to Sourcegraph's Implementation Services Offerings.

## Implementation Services Terms of Service

### Implementation Services Description
Dedicated, paid Implementation Services to design, plan, and provide over the shoulder assistance for Sourcegraph self-hosted production deployments projects. This service will:
- Reduce time-to-value by expediting initial installs and user onboarding, providing direct access to to the environment, and giving advanced technical admin training to our customers.
- Provide dedicated technical expertise in implementation project management and engineering with deep technical infrastructure knowledge.
- Reduce resource burden on customers installing Sourcegraph through hands-on assistance and expertise.

### Implementation Services Scope

#### Description of Services Included in Implementation Services
The services to be provided by the Sourcegraph Implementation Services Team are as follows:
- Provide dedicated project management to determine scope and requirements, report on progress, and drive the project towards completion on an agreed upon timeline.
- Advise on infrastructure needs and configuration to align with requirements of running Sourcegraph with the specific requirements of the individual organization.
- Ensure an appropriate environment strategy is being utilized. This includes high availability and redundancy to maintain consistent uptime along with appropriate environment rightsizing for the initial instance (i.e. within the contracted timebox + 2 weeks of priority support). 
- Provide at-the-elbow support in configuring the Sourcegraph instance and communicating best practices. This includes configuring the scoped feature set, user authentication and permissions, SMTP, observability, alerting, instance monitoring and more.
- Complete high-quality testing and validation of the instance, both configuration and infrastructure, leading up to user onboarding.
- Enable admins and provide key documentation on their instance to make certain they are properly prepared to continue supporting the instance following the implementation.

Note - Implementation Services entails both net new production deployments for new customers and migrations of production instances from one infrastructure to another for existing customers. For these migrations, backups and restores of the original databases will also be included within the scope of services.

#### Scoping Requirements Prior to Contract
Leading up to contract closure, the following items must be identified in order to properly determine implementation project scope, timelines, and pricing:
- Infrastructure, environment strategy, and external services requirements
- In-scope code hosts and their respective permissions requirements
- Expected authentication strategy
- In-scope feature set
- Minimum resource allocation
- Direct access
- Timeline expectations

#### Direct Access
The implementation team will deploy sourcegraph either by working collaboratively with an organization's admin or independently via direct badged-access to the customer's environment. This will be dependent on the organization’s desire and ability to grant this access to the Sourcegraph team, and the level of access that can be granted. If your organization is interested in having Sourcegraph directly access your environment during an implementation, this should be discussed prior to purchasing the service.

#### Customizations and Implementation Services
Implementation Services may include custom deployment related activities such as custom manifest, deployment script, or AMI creation. However, the service does not typically include any custom development for the given organization including but not necessarily limited to the creation of custom scripts, API extension, and additions or alterations to our standard codebase. If the customer would like to discuss using Implementation Services for work that is not within the standard scope of work, additional discussions will need to be held and adjustments to the contracts made.

### Implementation Timelines
Leading up to the closure of the deal and start of the implementation, a timebox, start date, and selected Implementation Services Package (see below) should be determined.

Beginning on this agreed upon start date and throughout the entirety of the timebox, the necessary resources both from the organization and from Sourcegraph should be made available to complete the project. If the project extends beyond the predetermined timebox or if the number of needed hours from Implementation Engineering extends beyond the contracted amount, additional charges may be incurred. The implementation will need to begin within 90 days of contract closure.

Typical projects are expected to take 4 business weeks to complete, though the actual timelines will vary depending on the scope, available resources, and specific requirements of the individual organization and the selected Implementation Services Package.

Within this timebox, the following milestones will be accomplished:

- Project Kickoff
    - Directly Responsible Individual: Sourcegraph Implementation Project Manager and Implementation Engineer
- Completion of Infrastructure Build
    - Directly Responsible Individual: Customer Sourcegraph Administrator advised by Sourcegraph Implementation Engineer
- Sourcegraph Installation
    - Directly Responsible Individual: Customer Sourcegraph Administrator advised by Sourcegraph Implementation Engineer
- Instance Configuration
    - Directly Responsible Individual: Customer Sourcegraph Administrator advised by Sourcegraph Implementation Engineer
- Validation and Testing
    - Directly Responsible Individual: Sourcegraph Implementation Engineer
- Go-Live / Onboarding Handoff to TA
    - Directly Responsible Individual: Sourcegraph Implementation Engineer

Following completion of the deployment and beginning of user onboarding, the Implementation Services team will be available for priority support until the instance is considered stable (typically 2 weeks). After this period, the Implementation Team will hand-off to the long-term support team and Technical Advisor.

Closure of the project will be determined by either the completion of the deployment project and its scoped requirements, or the end of the timebox, whichever comes first. If time extensions are needed they can be negotiated accordingly.

### Implementation Roles and Responsibilities
The following represents the various roles and responsibilities of resources involved in a typical implementation. These roles can be filled by the same or different individuals.

#### Sourcegraph Implementation Services Roles
- Implementation Engineer
  - Provides Sourcegraph deployment expertise and at-the-elbow support to deploy, install, and configure Sourcegraph within the customer environment.
  - Serves as the primary DRI of a deployment on the Sourcegraph side, working directly with the customer deployment team, collaborating internally with additional Sourcegraph teams where needed, and leading the implementation efforts.
- Implementation Project Manager
  - Supports the Implementation Engineer and customer deployment team by overseeing deployment tasks, monitoring deeds and dependencies, creating and tracking timelines, and performing necessary reporting.
- Pre-Sales Customer Engineer
  - Product and technical expert during the sales cycle, leading product demonstrations, technical solutioning, and trials for new prospective customers and opportunities within existing customers
  - Responsible for initiating discussions surrounding Implementation Services with prospective customers, handing off all necessary customer information to the Implementation Team, and introducing the Implementation Team to the customer at the appropriate time.
- Technical Advisor
  - Specialized technical expert focused on the customer’ experience and relationship post-sales
  - Leading up to the closure of a deployment, the Implementation Team will pull in the Technical Advisor to begin planning of user onboarding, training, and enablement and prepare the Technical Advisor to take over technical ownership of the customer. 
- Account Executive
  - Manages the commercial relationship with the customer, owns contracting, and ensures we are appropriately conveying the business value of Sourcegraph and our services.

#### Customer Implementation Services Roles
- Project Sponsor
  - Customer leader directly invested and involved in the success of the Sourcegraph project and it’s distribution to users through the organization.
  - Generally serves as an escalation point, and requires high-level status reporting on the Sourcegraph implementation.
- Sourcegraph Administrator
  - Individual directly responsible for deploying, installing, and configuring Sourcegraph.
- Sourcegraph Administrator, Manager
  - Oversees the allocation of the Sourcegraph Administrator’s time and availability with regards to the Sourcegraph implementation.
  - Often provides insight into organizational requirements and assists in any necessary cross-functional collaboration within the customer organization.
- Project Manager
  - Responsible for tracking progress, delegating tasks, and managing communications related to the implementation on the customer side.
- Infrastructure Team
  - Manages the customer’s infrastructure resources.
  - Responsible for allocating resources and provisioning the necessary infrastructure needed for the deployment of Sourcegraph within the organization.
- Security Team
  - Ensures Sourcegraph is deployed according to the customer’s internal security processes and requirements.
- Code Host Administrator 
  - Manages the code hosts that will be connected to the Sourcegraph instance. Often has deep technical knowledge of the code host and how the organization uses it. If certain tasks need to be performed within the given Code Host, this person will be responsible for doing so.

### Implementation Services Packages
Implementation Services Packages include a set number of Implementation Engineering hours that must be used within a set number of days from the start of the implementation project. The package selected should, to the best of our ability, reflect the expected amount of time required for the customer to complete the deployment as determined by the original scoping of the project. For pricing, please discuss with your Sourcegraph contacts.

**Package 1 - Standard Implementation Services Package**
- Dedicated implementation project team for 45 days

**Package 2 - Advanced Implementation Services Package**
- Dedicated implementation project team for 90 days with heighted resource allocation
