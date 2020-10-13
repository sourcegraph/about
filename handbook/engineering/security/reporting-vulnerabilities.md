# Reporting a vulnerability

If you think that you have found a security or privacy vulnerability, please email us at <a href="mailto:security@sourcegraph.com">security@sourcegraph.com</a>. We will reply to reports within 2 US business days to acknowledge that we received them, and will strive to send you regular updates on our progress until the issue is resolved. You may request an update by replying to the existing email thread. We will read, but may not respond to low quality or spammy reports (e.g. those produced by automated tooling). We welcome reports from everyone, including security researchers, developers, and customers.

### Bounties

We provide monetary rewards, from \$50 to \$10,000 USD, for security vulnerability reports. The actual reward amount is determined based on the number of customers impacted, the difficulty of exploiting the vulnerability, and the severity of the consequences (e.g. service disruption, data leakage, reputational damage to Sourcegraph) of a successful exploit.

We will send payment to a valid PayPal account. We will ask you for the name and country associated with your PayPal account.

**Timelines**

All timelines below reflect US busines days.

| Type of response       | Time to response     |
| :------------- | :----------: |
| First response| 2 days |
| Time to initial investigation and assessment | 10 days |
| Time to bounty determination | 20 days |
| Time to resolution | depends on severity and complexity |
| Time to payment | 90 days from the original report, or after confirmation of fix, whichever is first|

### Eligibility

We may choose to not issue a reward if any of the following apply:

1. You engage in disruptive behavior on sourcegraph.com itself (e.g. spamming our system with requests, fake accounts, denial of service). Sourcegraph is [open source software](https://github.com/sourcegraph/sourcegraph), so you can [install a copy yourself](https://docs.sourcegraph.com/#quickstart-guide) and test against that instead.
1. You report an already reported bounty, or one already in our roadmap.
1. You publicly disclose a vulnerability before we confirm that it is OK to do so. We want to give our customers time to upgrade to a patched version before public disclosure.
1. You spam us with duplicate and/or low quality vulnerability reports (e.g. copy/pasting generic issues from automatic scanning tools).
1. You are a current or former teammate at Sourcegraph (e.g. employee, contractor, intern).
1. You are friends or family with a current or former teammate at Sourcegraph.
1. You are a resident of, or make your Submission from, a country against which the United States has issued export sanctions or other trade restrictions (e.g., Cuba, Iran, North Korea, Sudan and Syria);
1. You are in violation of any national, state, or local law or regulation;
1. You are less than 14 years of age. If you are at least 14 years old, but are considered a minor in your place of residence, you must get your parent’s or legal guardian’s permission prior to participating in the program.

### Submission requirements

For all submissions, please include:

1. A full description of the vulnerability being reported.  This includes the exploitability and impact.
1. An explanation of all steps required to reproduce the vulnerability. This may include any or all of the following:
    1. Exploit code
    1. Screenshots
    1. Videos
    1. Traffic logs
    1. Complete web and API requests and responses
    1. Email address, or IP address used during testing


## How we respond to security vulnerability reports

When we receive [a report of a security vulnerability](#submission-requirements), a member of our security team determines if a reported vulnerability should be investigated by an engineer.

- If so, a member of our security team will [file a vulnerability report in sourcegraph/security-issues](https://github.com/sourcegraph/security-issues/issues/new/choose) and follow the checklist in the issue template.

- If not, a member of our security team will respond to the report to notify the reporter why we are not acting on the report.

  > Thank you for your report. Could you please provide us with $INFOX, $INFOY, and \$INFOZ so we can investigate this further?

  > Thank you for your report. We will not be taking further action on this report because \$REASONS.
