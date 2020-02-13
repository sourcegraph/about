# Objectives and Key Results (OKRs)

## Quarterly OKRs

Our OKRs are public:

- [FY20-Q1 (active)](2020_q1.md)
- [CY19-Q4](2019_q4.md)
- [CY19-Q3](2019_q3.md)

## What are OKRs?

[Objectives and Key Results (OKRs)](https://en.wikipedia.org/wiki/OKR) is a specific way of setting goals that we use at Sourcegraph.

- For each goal (called an OKR), you state an **objective** (what you're aiming to do) and **key results** (how you'll measure success toward the objective).
- OKRs form a "tree". We have a few broad company-level OKRs. Each company-level OKR has many sub-OKRs, for teams whose work contributes up to the company-level OKR. This codifies why/how each team's work is important to the company.
- We are not yet doing personal OKRs company-wide. This document is only about company and team OKRs. (Some people are experimenting with personal OKRs with their manager. If that works well, we may expand it, and this page will be updated.)

Our OKR practices are heavily inspired by [GitLab's OKR practices](https://about.gitlab.com/company/okrs/).

### OKRs are stretch goals

1. Set OKRs to be ambitious but achievable, so that they convey your aims and what you could achieve if things go well.
   - In (rough) numeric terms, if you achieve less than 70% of your KR, it was probably not achievable. If you regularly achieve 100%+ of your KRs, they are probably not ambitious enough.
   - Your KRs are **not** the 99.99% likelihood outcome or the 1% moonshot outcome.
1. OKRs are for communication and alignment (everyone knowing what's important, why, and how it'll get done), **not** for estimation, scheduling, or promising/committing.
   - Setting an OKR for _X_ is not the same as _committing_ to shipping _X_ to customers. We are much more conservative in setting expectations with customers about ship dates than we are in setting OKRs, and it wouldn't make sense to be locked into a ship date that we decided at the beginning of the quarter when setting OKRs.
   - OKRs are not used directly for giving individual performance review feedback or for compensation purposes.
   - Write your OKRs so they communicate effectively to an audience who understands that OKRs aren't promises. Don't write OKRs so cautiously that they are hard to understand. (For example, "Improve code intelligence support for Java" is a good objective, especially with well defined key results. But "Investigate feasibility of improvements to Java code intelligence" is probably bad.)
1. For new projects, it can be hard to define the right OKRs. Do your best. Then refine them next quarter.

## Setting OKRs

### Schedule

We set OKRs for each quarter. The (rough) schedule for setting OKRs for an upcoming quarter is:

- -3 weeks: CEO creates the upcoming quarter's OKR document with company-level goals (as a Google Doc for easy collaboration) and links it from this page.
- -2 weeks: Each team adds proposed OKRs to the doc and solicits feedback from relevant stakeholders.
- -1 week: OKRs have been approved by the owners of the OKRs in the levels above them.
- 0 (start of quarter)
  - Add relevant OKRs to top of [1-1 note docs](../../handbook/leadership/1-1.md#okrs-in-notes-doc).
  - Delete all content from the OKR Google Doc except the [key for sensitive information](#sensitive-information), and add a notice to the top stating `See <URL to OKRs on about.sourcegraph.com>.`
- +1 week: Review previous quarter's OKRs in [1-1s](../../handbook/leadership/1-1.md).

### Format

> This is based on the [GitLab OKR format](https://about.gitlab.com/company/okrs/#format).

Each OKR has the following format:

```
1. **Title or team: Objective as 1 sentence.**
   1. Title or team KR: Key result. => Outcome.
   1. Title or team KR: Key result. => Outcome.
   1. Title or team KR: Key result. => Outcome.
```

1. The `Title or team` is the title (e.g., `CEO` or `VP Engineering`) of the person who is directly responsible or the name of the team responsible.
   - The first 2 levels of OKRs all have a directly responsible individual. Deeper levels can have teams. (For functions where we don't yet have a management structure in place, we may violate this.)
1. The `Objective as 1 sentence.` is a pithy, informal summary of the objective, not an exhaustive and precise definition or description of the implementation. Each objective is indicated in bold, and is nested in line with the key results for it's parent objective. For example:
   - Good: `Automate time-consuming ops and support tasks.`
   - Bad: `Write scripts for headless browser testing of release grid items and update sourcegraph/sourcegraph and sourcegraph/deploy-sourcegraph CI pipelines to execute these scripts.`
1. The `Title or team KR: Key result.` is a list of 1-3 key results that have precise definitions.
   - Quantitative key results are ideal, but if they aren't appropriate for the objective, don't try to force it. Instead, choose a key result that is clear in its reliance on someone's judgment.
   - If a key result has a complex definition (more than a few words), link to a handbook page with the precise definition instead of inlining it in the OKR list.
   - Key results can be links to issues or [RFCs](../../handbook/communication/rfcs/index.md).
   - Examples:
     - Good (quantitative): `$M IARR`, `100% of monthly releases ship on time`
     - Good (human judgment): `Support LSIF-based code intel in targeted languages (Go, JavaScript/TypeScript, Python, Java, C#, and C/C++)` because quantitatively defining this has proven to be unproductive
     - Bad: `Create an effective pitch for Fortune 500 prospects` because "effective" is not defined and different people are likely to have a wide variety of opinions about what it means
1. The `=> Outcome.` part is only added/updated after the quarter starts.
1. Top-level CEO OKRs may just be short phrases (such as `IARR`) instead of listing out key results when those key results would be redundant with the sub-OKRs.

### Sensitive information

Do not include any specific financial numbers, customer names, or any other sensitive information in the public OKR document. Instead, use placeholders (such as `N` and `M` for 2 numbers or `C1` and `C2` for 2 customers) and document their meanings in the linked `OKRs FYYY-QN` Google Doc's `Key for sensitive information` section.

### Changing OKRs mid-quarter

We don't change OKRs once the quarter starts. Why? It is useful to have a conversation at the end of the quarter about how outcomes diverged from our plan, and why. There might be very good reasons why we changed our plan, and that is ok. If we edit our OKRs it becomes more difficult to have this valuable conversation.

If your OKR no longer accurately communicates what's important or what you think is realistically going to get done, then you should immediately update the [outcome](#updating-okr-outcomes) with the expected result and a brief reason why.

You _may_ add a new OKR mid-quarter to reflect new priorities that weren't captured by OKRs written at the beginning of the quarter. Get approval from the CEO and everyone who's affected by the change.

## Updating OKR outcomes

Update `=> Outcome.` for OKRs throughout the quarter.

1. If possible, link to a live dashboard tracking the outcome.
1. When you make meaningful progress toward an OKR's outcome, post in the #progress channel and include a link to the PR that updates the OKR document.

## Helpful links

- [GitLab OKRs](https://about.gitlab.com/company/okrs/)
  - These OKRs are great examples for us, and their OKR guidelines heavily influenced how we use OKRs at Sourcegraph.
- [High Output Management](https://www.amazon.com/High-Output-Management-Andrew-Grove/dp/0679762884): book by Andy Grove that originally documented OKRs
- [Google OKRs guide](https://rework.withgoogle.com/guides/set-goals-with-okrs/steps/introduction/)
