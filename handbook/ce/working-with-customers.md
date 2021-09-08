# Customer Engineering: Working with Customers

This page captures best practices, playbooks, and processes for how CEs should work with customers.

- [Customer Touchpoints](#customer-touchpoints)
  - [Discovery and Demo](#discovery-and-demo)
  - [Trial / POC Planning](#trial--poc-planning)
  - [Security Reviews](#security-reviews)
  - [License Keys](#license-keys)
  - [Trial / POC](#trial--poc)
  - [Post-Sales Kickoffs](#post-sales-kickoffs)
  - [Webinars / Trainings / Q&A Sessions](#webinars--trainings--qa-sessions)
  - [Check-in calls](#check-in-calls)
  - [QBRs](#qbrs)
  - [Expansions and Renewals](#expansions-and-renewals)
  - [Ongoing Support](#ongoing-support)
- [Tracking and Maintaining your Accounts](#account-tracking)
- [Playbooks](#playbooks)
  - [Customer Discovery](#customer-discovery)
- [Processes](#processes)
  - [Red Accounts](#red-accounts)

---

## Customer Touchpoints

A CE works with customers in a number of different ways throughout the customer journey. Below are high-level descriptions of a few of the ways that you may work with our customers, as well as links to some supporting documents and recordings.

### Discovery and Demo

The initial conversation(s) with a customer can vary in length and scope, but always involve discovery and demoing. This could range from an abbreviated 30 minute intro call with a smaller prospect, or multiple hour-long calls across various stakeholders and teams at an enterprise organization.

Resources
- [Customer discovery playbook](#customer-discovery)
- [Demo education resources](https://about.sourcegraph.com/handbook/ce/education#trainings-and-demos)

### Trial / POC Planning

Once a customer is interested in trialing Sourcegraph, we need to start planning to ensure success. Topics may include:

- Documenting their technical landscape
- Business use cases / metrics for success
- Technical metrics for success
- Business value assessment planning
- User survey planning
- Deployment support and checklist
- Technical configuration review
- Trial rollout plan
- Communication and ongoing support

Resources
- [Trial and Deployment Planning Template](https://docs.google.com/spreadsheets/d/1mi_540InPEs6_xmCE2gHzw6Vt9QHDx-IdGogQZN6Ezw/edit?usp=sharing)
- [Technical Design Document Template](https://docs.google.com/document/d/19qcdFcFpqHNE6OTgO8SwdTF7FfB4AJH6Hlqeywgv6Yc/edit) (work in progress)

### Security Reviews

Many customers send security questionnaires to complete. They are required to proceed with the partnership. The current process for completing them is:

1. Work with the AE to get access to the security questionnaire.
2. Note the customer preferred deployment type (self-hosted, managed, or cloud).
3. If you (the CE) feel comfortable doing so, take a first pass at the questionnaire. Use the [source of truth document](https://docs.google.com/spreadsheets/d/1xtjGzKExX9bEYBrsSyOcHFa-rm0SmB53hWnDKueVJjI/edit?usp=sharing).
4. Talk to your region's CE in charge of security reviews. Have them take a pass at it and review it. Please ensure timelines are properly communicated and enough notice is given to all involved stakeholders.
5. If the Security CE feels it necessary, they may involve the product manager on the security team. Typically this involves asking one-off questions in the security [source of truth document](https://docs.google.com/spreadsheets/d/1xtjGzKExX9bEYBrsSyOcHFa-rm0SmB53hWnDKueVJjI/edit?usp=sharing), but they may also request full security questionnaire reviews. Note that full reviews may require extra time to get prioritized and worked on by the security team.

The current CE's in charge of security questionnaires are [Max Wiederholt](https://about.sourcegraph.com/handbook/company/team#max-wiederholt-he-him) for US West / APAC and [Shawn King](https://about.sourcegraph.com/handbook/company/team#shawn-king-he-him) for US East / EMEA. We occasionally rotate team members in this role.

### License Keys

- [Creating and maintaining license keys for customers](https://about.sourcegraph.com/handbook/ce/license_keys)
- [Recording of creating a new key for demo.sourcegraph.com](https://drive.google.com/file/d/1fYsBqdzdBLd0mzAu2FJxrWznRX0k-iqr/view?usp=sharing)

### Trial / POC

We run the trial with a customer. This is typically about a month. It is critical that you collaborate closely with your account executive here to ensure a successful experience for the customer.

Resources
- [Mid-trial check-in Q&A recording](https://chorus.ai/meeting/CEA97B5EA976491E97AED80A2EAE45D5)

### Post-Sales Kickoffs

Once a customer signs on with Sourcegraph, we need to:

- Generate a full license key.
- Plan a kickoff call with our main contact(s).

On the kickoff call we plan our ongoing engagement with the customer. Different customers have different needs, so it's important to talk through topics such as:

- How often do they want to have check-in calls?
- What types of trainings, webinars, or Q&A sessions could their team use? When?
- Would they like any assistance or resources to integrate Sourcegraph into their developer onboarding process?
- Anything else we can look to help them out with? Upcoming iniaitives they could use Sourcegraph for?

Resources
- [Post Sales Engagement Sheet Template](https://docs.google.com/spreadsheets/d/18DjSYXOnALOHYN-zrMhOGUWGFCaXYShqcKt477tj3LU/edit#gid=0)
- [Post-Sales Kickoff Deck Template](https://docs.google.com/presentation/d/1eTis1XiS3U1M1M1a35wBw5qwTnJSMozXcz_gXJcGXhk/edit)
- [Sample Chorus Recording](https://chorus.ai/meeting/066B000C659C4F1D83AA465576444924)


### Webinars / Trainings / Q&A Sessions

The webinar you will most-often run is a Sourcegraph 101/102 (basically a longer and more in-depth version of the typical demo flow). It's important to relate use cases to customer needs.

We may also hold specific topic trainings or Q&A sessions, depending on customer need.

Resources
- [Training Webinar Recording](https://chorus.ai/meeting/8FEAE02538644AA3ABB22149750E6308?)

### Check-in calls

Check-in calls may be weekly, bi-weekly, monthly, or as-needed. Going in to a check-in call you should be familiar with:

- Usage data
- Current Sourcegraph version & upgrade info
- New features in the latest version(s) and/or the product roadmap
- Any recent or active questions or support issues or feature requests from the customer

Resources
- [Chorus recording of a typical check-in call](https://chorus.ai/meeting/84885A7398C943A3AFD32327F06A3F12?)

### QBRs

We often hold QBRs, or Quarterly Business Reviews (sometimes referred to as an Executive Business Review), with our customers which recaps how Sourcegraph has been integrated into and creating value for their organization over the past quarter. These QBRs are typically created and presented by the CE assigned to the account, in conjunction with the account’s AE. They are typically presented in a slide deck format to executive-level leadership, and highlight usage metrics and use cases for their org. Additionally, they are used to gather feedback and comments from leadership regarding Sourcegraph.

Resources
  - The [QBR Guide](https://docs.google.com/document/d/1gFRn2SkX19sU0GSMGndNkk-I9cFe7FlN3xlZ2UX3Frs/edit#) details how CEs should execute a QBR.
  - [Sample QBR Recording on Chorus](https://chorus.ai/meeting/36928A0D99694DCB8E0AC9D028E44A1D?search=qbr&recordingsOnly=true&transcript=false)

### Expansions and Renewals

Expanding Sourcegraph to a new team or unlocking new enterprise features could involve a full cycle of CE discovery and demos and value mapping. A basic renewal or seat expansion may not involve CE beyond generating a new license key.

### Ongoing Support

While our CSE team is primarily responsible for technical support, keep an eye out on Slack for any questions or issues that come through.

You can view any CSE support issues in Zendesk by using our SFDC <> Zendesk integration. Go to the Account page in Salesforce and click the "Zendesk" tab to view.

---

## Playbooks

To enable CEs and ensure consistent practices, our team may produce playbooks from time-to-time. These playbooks should serve as a useful onboarding resource to new CEs and a helpful refresher for CEs as well.

### Customer Discovery

The [customer discovery playbook](https://docs.google.com/document/d/14iSqJBtiM32D1zSVVvtZGZmWVLuQ7S7MoJDM6wAhkyQ/edit) provides CEs with a framework and tools to successfully prepare for and conduct your first meetings with prospective customers (or even new stakeholders within existing customer organizations). These inputs should serve as the prerequisites to any customer demo because it enables you to tailor your content and talk track to what’s most relevant to the customer. It also provides key areas for CEs to consider and specific steps to take to ensure the CE has the correct context and knowledge to properly support a successful customer engagement beyond the initial meetings

---

## Account Tracking

A CE can glean important insights into a customers' usage via our [instance overview dashboard](https://sourcegraph.looker.com/dashboards-next/167?Unique+Server+ID=Netflix&Salesforce+Unique+ID=). It is recommended that CEs routinely monitor this to keep a pulse on customer metrics. There is also a link to this from the Salesforce Account record.

---

## Processes

Similar to playbooks, processes exist to ensure consistent practices amongst teams. Processes that the CE team either drives or heavily contributes to are outlined below.

### Red Accounts

As the team accountable for our customers' technical success, usage, and adoption of our products, CEs must keep a close pulse on the health of our customers. The Red Accounts Program exists to ensure we as a company are assessing customer health at all times.

#### Overview

For any account that is designated as having a health rating of red - either via [calculated score](https://sourcegraph.looker.com/dashboards-next/179?Customer+Engineer=&Account+Executive=&Unique+Server+ID=&Region=) or by a member of the account team - the AE and CE will jointly provide a current status of the account, identify any necessary asks of the business in order to best serve the customer, create an appropriate action plan, and track through to resolution (ideally promotion of the health from red to yellow or green).

#### Red Accounts Process

In slack, the #red-accounts channel has been created so that when the Customer Health field on the Salesforce Account record is set to Red, a post is auto-triggered in the slack channel and a corresponding row will be automatically added to the Account Tracker tab of the [Red Accounts](https://docs.google.com/spreadsheets/d/1eVgWhrtgH8WQGo_pRuMseqz-Bk1P1Bymrlkutzz5jEA/edit#gid=0) Google Sheet. The AE / CE will jointly fill in relevant information to understand current state, needs, and the intended actions. Any asks or needs against the intended action plan should be initiated via a thread on the auto-generated slack post; this allows for visibility and transparency.

#### Roles and Responsibilities

The CE will monitor the Customer Health dashboard and where appliable update the Customer Health field on the Salesforce Account record to red.

Should an AE or CE feel that an account which isn't designated as red via the health dashboard, is in fact red for any reason (eg a champion leaves, etc) they should align, and the CE should update the Salesforce Account record to red.

Both the AE and CE are responsible for participating in the creation of the action plan, and overseeing the action plan through to resolution.
