# CE-to-Engineering issue handover process

When a prospect or customer files a new support ticket or raises a new issue, CE and Engineering should follow the steps below to ensure the issue is handled successfully.

## Principles

**CE is always the first line of defense.**

**Engineering should only feel a responsibility to get involved if tagged in by CE.**

**However, once someone [takes ownership](support.md#support-owners) of a ticket (whether formally, or informally by taking over the conversation), it is their responsibility to see it through, either by (1) see the issue through to resolution or (2) assign a new owner.**

Exceptions to the principles above:

- This does not apply to our public GitHub issue tracker; instead, it only applies to [official support channels](support.md). Issues filed in GitHub are the responsibility of Engineering and/or Product.
- Certain customers pay for dedicated support from a member of the Engineering team. Responding to issues filed by these customers is a shared responsibility for the assigned Engineer and CE (whoever sees it first).
- If an engineer sees a new question or issue come in from a company that they've already been introduced to, or if the question is in their direct area of expertise, they are encouraged to jump in directly.

Otherwise, if an engineer sees a new question or issue come in and they are interested in responding, they should just check with CE first (by posting in the #ce Slack channel).

## How CE hands issues to Engineering

1. The assigned CE will first reply to the prospect or customer that reported the issue.
1. If the issue is clearly a bug or a feature request (rather than a question that can be clarified or answered on the spot), [the CE will file or add on to a GitHub issue](customer_issues.md).
1. The CE will add a prioritization label to the issue, from `user/p0` to `user/p4`, based on a combination of (1) the severity of the issue, and (2) the prioritization of the reporting company. These labels mean the following:
  1. `user/p0`: The issue results in the company's Sourcegraph instance being unusable and the company is a [Tier 1 prospect or customer](../sales/index.md#segmentation).
  1. `user/p1`: The issue results in partial loss of functionality or serious disruption and the company is a [Tier 1 or Tier 2 prospect or customer](../sales/index.md#segmentation).
  1. `user/p2`: The issue results in minimal loss of functionality or annoyance and the company is a [Tier 1 or Tier 2 prospect or customer](../sales/index.md#segmentation), or the issue is more serious, but applies to a [Tier 3 prospect or customer](../sales/index.md#segmentation).
  1. `user/p3`: The feature request is a "nice-to-have" for a [Tier 1 or Tier 2 prospect or customer](../sales/index.md#segmentation), or the issue results in minimal loss of functionality or annoyance for a [Tier 3 prospect or customer](../sales/index.md#segmentation).
  1. `user/p4`: The feature request is not urgent or the issue is minor.

## Engineering responsibilities

1. If an Engineer agrees to take on an issue or a ticket, they must be willing to follow-through on the problem until it is addressed. If they are not willing or able to do so, they must notify the CE as soon as possible so someone else can be assigned.
1. If an Engineer is unsure of how to respond, they should reach out to CE in the #ce channel for feedback and support.
