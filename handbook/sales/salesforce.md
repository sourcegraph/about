# How we use Salesforce

This document describes how the sales team using Salesforce. 

Note: Please refer to it as Salesforce (instead of SF or SFDC) in accordance with our [style guide](../communication/style_guide.md#jargon-and-acronyms). 

Jump to:
- [Updating information in Salesforce](#updating-information-in-salesforce)
- [HubSpot and Salesforce connection](#hubspot-and-salesforce)
- [Salesforce automation](#salesforce-automation)

## Salesforce General Principles

1. If it's not in Salesforce, it doesn't exist. Salesforce data will be used to resolve any territory/ownership disputes
1. All Salesforce Users are responsible for keeping Salesforce up-to-date as a [source of truth](../communication/index.md#sources-of-truth). If you come across incomplete or inaccurate data, take a moment to update it. This will help us keep the system usable and prevent many issues as we scale.
1. All Sales Users will work out of Accounts, Contacts, Opportunites, but the Leads Object should only be used for SDRs

## About Salesforce objects

Salesforce has two main categories: leads and opportunity/account/contacts. Leads are single individuals that have not been qualified yet, and therefore are not associated with an account or opportunity. When a lead has revenue potential, they're converted to an opportunity. In this stage, an account (known in HubSpot as a company), a contact, and an opportunity (known in HubSpot as a deal) are created.

Opportunities begin at the [interest](index.md#interest) stage.

## Lead Object

### Lead Creation

Leads are single individuals that have not been qualified yet, and therefore are not associated with an account or opportunity. Leads can be created in Salesforce in a few different ways:
- Inbound Marketing Lead - automatically created via Hubspot when a user takes an action on our website
- SDR Created - SDR either manually creates a new lead or uploads a list
- Other Offline Sources - list uploaded from marketing event, webinar, etc.

### Lead Source

Every Lead should have a value in the Lead Source field. The Lead Source value is set automatically for inbound leads based on the origination of the lead. For other sources (like referrals), this value should be set by the SDR when creating the Lead.

Lead Source values include:
- Inbound - any inbound lead generated from a Contact Form, Demo Request, Trial Request, Sourcegraph.com Account Setup, Install, etc.
- Referral - any lead that was referred by a partner, investor, customer, employee, etc.
- SDR Created - any lead created by an SDR
- Event - lead attended an event, webinar, or similar
- Feedback Form - NPS Form Submissions
- Other

### First Touchpoint

First Touchpoint is a slightly more granular version of Lead Source and is set automatically in Hubspot.

First Touchpoint values include: 
- Private Instance - installs
- Sourcegraph.com Account
- Contact/Demo Form
- Inbound Email (support, contact)
- Feedback Form
- Referral
- Event
- Other

### Lead Status

Lead Status indicates the stage of a lead in the workflow process.

Lead Status values include:
- New
- Working - SDR is actively engaging new lead
- Nurture - lead has potential, but is not ready to be converted
- Self-Service - lead is best served by our self-service offering
- Unqualified - lead is unqualified for our services, used for job candidates, students, etc.
- Bad-Data
- Converted - auto-set upon conversion of lead

### Lead Assignment

New Inbound leads are round-robined automatically to SDRs.

### New Lead Workflow

SDR monitors new inbound Leads using a [Lead View](https://sourcegraph2020.lightning.force.com/lightning/o/Lead/list?filterName=00B3t00000DWfRpEAL) in Salesforce. SDR will also receive email/slack notification upon new high-priority lead (demo request, contact form, etc.)

SDR scrubs the Lead to confirm / enrich contact info fields - Name, Company, Title, Email Address, Phone Number, etc.

SDR dedupes the lead to look for recent activity, open/recently closed opportunities, etc. to determine eligibility to work based on the Rules of Engagement
- If eligible to work, SDR should update Lead Status to “Working” and begin outreach
- NOTE: we target <5 mins from new Lead Creation to First Touch during working hours, with a firm SLA of 24 hours for updating the Lead Status of any New Lead

### Inbound Lead-to-Opportunity Conversion Workflow

If a Lead meets the “Target Opportunity Profile” criteria, we use the following process for converting the lead and getting an AE connected with the prospect:
- SDR confirms the receiving AE of the Opportunity using the [AE Round-Robin Tracker](https://docs.google.com/spreadsheets/d/1Uqx3GSLFzzAptrMaowVJLkViAdOQ3gimUL8PVBm8EkQ/edit#gid=0)
- SDR schedules meeting with the Lead and the receiving AE
- SDR creates the Opportunity in Salesforce by converting the lead to an Account/Contact/Opportunity (Note: be sure to convert into existing Account if one exists vs. creating a new)
- At this point, the Opportunity will be in Stage 1 - Interest
- SDR logs all pertinent information - call/email notes, research on contact/company, and any additional context that is helpful for the AE to be prepared for the initial call / understand the justification for creating an Opportunity
SDR joins this initial call to make the AE intro and listen to the call for feedback

## Opportunity Object

### Associating contacts to opportunities

All of the contacts important to an opportunity should be linked. This should include the technical decision-maker, the economic decision-maker (if they are different) and the original member who introduced Sourcegraph to the organization.

This ensures that all deal-related communication is visible within the deal timeline for teammates to quickly get context surrounding the deal. This also allows us to evaluate the effectiveness of marketing channels and sales touchpoints that our team has with an organization. How we reached the person(s) who introduced Sourcegraph to their organization is one of the most important factors in evaluating the success of marketing activities.

If a deal comes through a referral or introduction, tell [BizOps](../bizops/index.md) so an adjustment can be made in the database to reflect this.

### When a deal is won
1. Move the deal to ‘Closed Won’. 
1. Mark the column ‘End of contract’ with the last day of the contract. Salesforce will [automatically create a renewal deal](#renewal-deals) based on this date. 
1. Ensure the appropriate 'deal won reason' fields reflect the main factors that contributed to the opportunity being won. 

### When a deal is lost
1. Update the ‘Closed Lost Dropdown’ property to reflect the reason. If the reason doesn’t exist in the dropdown, you can talk to [BizOps](../bizops/index.md) about adding one. 
1. Expand upon the reason in the longform ‘Closed Lost Reason’ field.

### Recording outbound activity

TBD

## HubSpot and Salesforce

### HubSpot to Salesforce sync

All HubSpot contacts are synced to Salesforce, usually within 15 minutes. The [complete settings are in HubSpot](https://app.hubspot.com/integrations-settings/2762526/installed/salesforce/contacts), but the most important of the synced fields are:
- Basic contact info (name, email)
- Their lead source based on First Page Seen
- Most ZoomInfo enriched fields
- MQL date and checkbox
- NPS survey results attached to the contact

Contacts are synced as Leads in Salesforce, and become Opportunity/Account/Contact if the Lead is an MQL (based on MQL_checkbox = TRUE/YES)

### Salesforce to HubSpot sync

Any update on the lead/contact in Salesforce will sync back to HubSpot (name, email, MQL checkbox, etc...). Companies and opportunities will not be synced back; Salesforce is the source of truth for these objects. 

### What HubSpot still does

- Everything marketing (email campaigns, workflows, lead capture/forms, including NPS scores)
- Links to customers from RFCs, GitHub issues, etc. are still accessible. This will eventually be deprecated

## Salesforce automation

### Leads to Opportunities

Leads are put into a round robin process when either the MQL, SDR or Referral checkbox is checked. 

## Renewal deals

6 month before the end of a contract, a renewal deal with the Customer Engineer as owner is created in the Renewals pipeline.
