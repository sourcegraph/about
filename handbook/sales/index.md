# Sales

The Sales team represents us and our values to customers, bringing back dollars and feedback to help us grow.

- [Account Tiers](https://docs.google.com/document/d/14420oruJWMLKj67ObZiDzRK5GpHmRWXDjlDbH7L6T00/edit?ts=5f7e4023#heading=h.qdguquy7dt7i)
- [Pricing](https://about.sourcegraph.com/pricing)
- [Common questions from prospective customers](common_customer_questions.md)
- [Sales team onboarding](onboarding/index.md)
- [Sales interview process](interviews/index.md)
- [Recording lead and customer emails, calls, and notes](records.md)
- [Using Salesforce](salesforce.md)

## Pipeline, data, and models

- [Transactions](https://docs.google.com/spreadsheets/d/1Ao3Nqw6gH3yAuZtICV3xo35kKKnI9oKXnvPuTQ0Fh9c/edit#gid=0)
- [FY21 plan](https://docs.google.com/spreadsheets/d/1EkZ7O69-2jbgtacoFDrY8L6rP73Hlqp_syyVCnmGAFA/edit#gid=1071026049)
- [Looker dashboard](https://sourcegraph.looker.com/browse/boards/2)

## Goals

TODO

## Roles

See [roles](./roles/index.md) page.

## How sales works with other Sourcegraph teams

### [Customer engineering](../ce/support.md) (for customer support)

- [Sales-to-CE new customer handover process](sales_to_ce_handover.md)
- [How to request support (for customers)](../ce/support.md#how-to-get-support-for-customers)
- [Creating and maintaining license keys for customers](../ce/license_keys.md)

### [Team members who want to join calls](onboarding/joining_customer_calls.md)

## Definitions

### ARR

Annual Recurring Revenue (ARR) is the dollar value of contracted recurring revenue in a (normalized) one-year period.

### IARR

Incremental [ARR](#arr) (IARR) is the change in ARR from one period to another.

### New IARR

New [IARR](#iarr) is IARR from *new customers* (i.e., organizations that were **not** existing customers at the beginning of the period). See also [expansion IARR](#expansion-iarr).

### Expansion IARR

Expansion [IARR](#iarr) is IARR from *existing customers* (i.e., organizations that were already customers at the beginning of the period).

If within a single period a new customer signs a contract which then grows in ARR before the end of the period, the total ending ARR is all considered [new IARR](#new-iarr), not expansion IARR. For example, if Acme Corp signs a $100k contract on February 3 and then the contract expands to $200k on March 5, all $200k would be considered new IARR for Q1.

### Booking

A booking is when a customer commits to pay us money. This includes when:

- A new customer just started paying self-service or signed a contract
- An existing customer (depending on their contract) takes an action that increases the amount of revenue we will earn from them (such as growing usage or using more premium features)
- An existing customer renews (including when the renewal is for the same ARR as the previous period)

### Customer

A customer is an organization with a Sourcegraph subscription contract that has not ended.

1. We can only publicly mention the names of customers who have explicitly agreed to be referenceable.
    - Customers mentioned on [about.sourcegraph.com](https://about.sourcegraph.com/) (by logo and/or case study) are referenceable.
    - If in doubt about whether another customer is referenceable by name, ask in #sales.
1. If an organization's contract will start in the future, they are still considered a customer. (This can happen when we agree to have a contract start on the next 1st of the month because that makes life easier for a customer, for example.)

### Sales Accepted Opportunity (SAO)

Sales Accepted Opportunities are where ALL of the following are true:

- We have completed an intro call/meeting with the company/contact
- Company/contact has expressed some form of interest/need in Sourcegraph
- Contact can be a potential champion or coach
- Company has >50 Developers
- We have next steps

Any Opportunity that is moved into the Qualification Stage or beyond is automatically tagged as Sales Accepted Opportunity in Salesforce

### Target Opportunity Profile:

SDRs should focus on identifying and setting meetings for the AE team that meet the following criteria:

Relevant contact (potential champion or coach) that is aware of / understands code search in some capacity (has used Sourcegraph or another code search tool like OpenGrok, has worked for Google/Facebook and used their tool)

OR

Title/role includes developer productivity, developer experience, API services, distinguished eng, platform engineer, director+ eng

AND

Company has 50+ devs

### Target Account

Target Accounts are prospective customer accounts that the SDR/AE have specifically identified as priority accounts for outbound prospecting efforts.

Target Accounts can be easily identified in Salesforce by the “Target Account” field designation. To make any updates to this field on a particular account, please contact your manager.

## Stages

See also the [MQL (marketing-qualified lead) definition](../marketing/index.md#mql).

### Interest

> ~20% probability of winning

The **Interest** stage is under construction

### Qualification

> ~40% probability of winning

The **Qualification** stage is for leads where **ALL** of the following are true:

1. The company has expressed some form of interest/need in Sourcegraph.
1. We have *completed an intro call/meeting* with the company.

Other notes:

1. We may still be collecting specific info on their pain points and use cases.
1. We may still be gathering info to confirm the deal amount (and close date).
   - If we determine that the potential deal amount is <$22,800, then Sales will make a call on whether to proceed, or revert them back to the lead stage, or recommend that they just use our free product.
1. We may still be actively pitching Sourcegraph to them, but have *not* received commitment to move forward yet (they are not fully sold on Sourcegraph’s value) and they have expressed reservations or open questions to be answered.
1. They may have expressed interest in setting up a Sourcegraph trial, and may still be in an active trial period.
1. We may still be collecting technical requirements from them, in order to alert the [Engineering team](../engineering/index.md) of any custom work needed.
1. Note that a deal could remain in the Qualification stage for several months.

### Evaluation

> ~60% probability of winning

The **Evaluation** stage is for opportunities where **ALL** of the following are true:

- We have *completed our “sales pitch*, they fully understand and believe there is value in Sourcegraph to improve/solve at least one area for their developers.
- We have received some signal to move forward.
    1. Deal may however be stalled by procurement review.
- We have explained to them our different pricing plan options, and they are actively evaluating/discussing on their end (or are negotiating terms with us about running the evaluation).
- We are in contact with the individuals who have the authority to make purchasing decisions.

### Contract Negotiation

> ~80% probability of winning

Note that this is a stage we may add in the future to indicate we are almost at the finish line, in that they have received our SOW but there are some remaining negotiations with the terms before they sign. Our attorneys may or may not have been looped in for assistance.

### Closed Won

Deal signed!

### Maintaining customer spreadsheets

Maintaining [Server Installers to Company List](https://docs.google.com/spreadsheets/d/1Y2Z23-2uAjgIEITqmR_tC368OLLbuz12dKjEl4CMINA/edit?usp=sharing) and [Server to Company List](https://docs.google.com/spreadsheets/d/1wo_KQIcGrNGCWYKa6iHJ7MImJ_aI7GN12E-T21Es8TU/edit?usp=sharing) spreadsheets for every new company on a trial and new customers.

These are used as join tables in Looker, and are important to connect instance data to a specific customer.
