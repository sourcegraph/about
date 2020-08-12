# How we use Salesforce

This document describes how the sales team using Salesforce. 

Note: Please refer to it as Salesforce (instead of SF or SFDC) when talking about the platform in accordance with our [style guide](../communication/style_guide.md#jargon-and-acronyms). 

Jump to:
- [Updating information in Salesforce](#updating-information-in-salesforce)
- [HubSpot and Salesforce connection](#hubspot-and-salesforce-connection)
- [Salesforce automation](#salesforce-automation)

## Updating information in Salesforce

Account Executives are responsible for maintaining Salesforce as a [source of truth](https://about.sourcegraph.com/handbook/communication#sources-of-truth). This allows us to increase the effectiveness of all Sourcegraph teams through accurate insights.

### Associating contacts to opportunities

It is critical to associate all of the most important contacts within a company with any new deal. This should include the technical decision-maker, the economic decision-maker (if they are different) and the original member who introduced Sourcegraph to the organization.

This ensures that all deal-related communication is visible within the deal timeline for teammates to quickly get context surrounding the deal. This also allows us to evaluate the effectiveness of marketing channels and sales touchpoints that our team has with an organization. How we reached the person(s) who introduced Sourcegraph to their organization is one of the most important factors in evaluating the success of marketing activities.

If a deal comes through a referral or introduction, tell [BizOps](../bizops/index.md) so an adjustment can be made in the database to reflect this.

### When a deal is won
1. Mark the ‘Deal Status’ as ‘Closed Won’. 
1. Mark the column ‘End of contract’ with the last day of the contract. Salesforce will automatically create a renewal deal based on this date. 
1. Ensure the appropriate 'deal won reason' fields reflect the reasons the deal was completed. 

### When a deal is lost
1. Update the ‘Closed Lost Dropdown’ property to reflect the reason. If the reason doesn’t exist in the dropdown, you can talk to [BizOps](../bizops/index.md) about adding one
1. Expand upon the reason in the longform ‘Closed Lost Reason’ field.

### Recording outbound activity

TBD

## HubSpot and Salesforce

### HubSpot to Salesforce sync

All HubSpot contacts are synced to Salesforce, usually within 15 minutes. The [complete settings](https://app.hubspot.com/integrations-settings/2762526/installed/salesforce/contacts) are in HubSpot, but at least the following fields are synced:
- Basic contact info (name, email)
- Their lead source based on First Page Seen
- Most Zoominfo enriched fields
- MQL date and checkbox
- NPS survey results attached to the contact

Contacts are synced as Leads in Salesforce, and become Opportunity/Account/Contact if the Lead is an MQL (based on MQL_checkbox = TRUE/YES)

### Salesforce to HubSpot sync

Any update on the lead/contact in Salesforce will sync back to HubSpot (name, email, MQL checkbox, etc...). Companies and opportunities will not be synced back; Salesforce is the source of truth for these objects. 

### What HubSpot still does

- Anything marketing (email campaigns, workflows, lead capture/forms, including NPS scores)
- Links to customers from RFCs, GitHub issues, etc. are still accessible. This will eventually be deprecated

## Salesforce automation

### Leads to Opportunities

Leads are put into a round robin process when either the MQL, SDR or Referral checkbox is checked. 

## Renewal deals

6 month before the end of a contract, a renewal deal with the Customer Engineer as owner is created in the Renewals pipeline.
