# Developer Insights org

> NOTE: The contents of this page and of the teams in the Developer Insights org are currently in the process of being moved to reflect the FY22Q3 reorg.
> The Developer Insights org no longer exists as of 2021-09-13 and its teams are now part of other orgs.
> For more details, see the [FY22 H2 Product/Eng org structure](https://docs.google.com/document/d/1d8Z8zN6DjKHfXGaCQerKDeJo5qEVxBTku8RcZtw7Di4/edit) document.

## Mission

Bring Sourcegraph’s insights into your codebase ([Code Intel](../code-graph/code-intelligence/index.md) and [Code Insights](../code-graph/code-insights/index.md)

## Teams

1. [Frontend Platform](../enablement/frontend-platform/index.md): the maintenance and expansion of the Sourcegraph web application. We also define and maintain the standards and tooling for how we do web development at Sourcegraph.

## Members

<!-- Due to the markdown renderer that we use, the indentation here is sensitive. If you want to change the indentation, check that it renders correctly locally with `make serve` -->

- [Jean du Plessis](../../company/team/index.md#jean-du-plessis-he-him) ([Director of Engineering](../roles.md#director-of-engineering))
  - [Frontend platform](../enablement/frontend-platform/index.md)
    - [Alicja Suska](../../company/team/index.md#alicja-suska-she-her) ([Product Designer](../../product/roles/index.md#product-designer))
    - [Patrick Dubroy](../../company/team/index.md#tom-ross-he-him) ([Engineering Manager](../roles.md#engineering-manager) and acting PM)
      - [Tom Ross](../../company/team/index.md#tom-ross-he-him)
      - [Felipe Janer](../../company/team/index.md#felipe-janer-he-him)
      - [Valery Bugakov](../../company/team/index.md#valery-bugakov-he-him)

## Strategy for FY22

_Updated 2020-03-08_

The strategy is currently a work in progress and can be viewed here: [Developer Insights FY22 Strategy](https://docs.google.com/document/d/18GS2Gr7SP2ICuJaOpofxiwuxU3pKBfp8eXREFLDcM30/edit)
_(Only accessible to Sourcegraph teammates until finalized.)_

## Principles and practices

In addition to the [engineering principles and practices](../principles-and-practices.md) the Developer Insights org follows the following principles and practices.

### Unblocking others is your highest priority

If a teammate is blocked by you on a question, your approval, or a pull request review, your top priority is always to unblock them, either directly or through helping them find someone else who can, even if this takes time away from your own or your team's priorities. If you're the one who is blocked, be sure to communicate that so that others can prioritize appropriately.

Normally, waiting for a PR review does not mean you are blocked: it's expected that you can start working on something else (e.g. a new PR that depends on the first one). However, in some scenarios it's important to get a review ASAP — e.g., to fix a regression or a broken CI pipeline. In those cases, you should communicate the urgency and expect that your teammates will prioritize unblocking you.
Even when a teammate is not _blocked_, but _inconvenienced_ (because of follow-up work), don't leave them hanging for extended periods of time. You should generally budget some amount of time every day for doing reviews.

We want teammates to do what is best for the org as a whole. Don't optimize for the goals of your team when it negatively impacts the goals of other teams, our users, and/or the company. Those goals are also your problem and your job.

### Pull requests

#### For authors

##### Prefer small PRs (<400 lines)

We extend Sourcegraph's company-wide guidance (see [what makes an effective PR](https://docs.sourcegraph.com/dev/background-information/code_reviews#what-makes-an-effective-pull-request-pr)) with a specific guideline that _PRs should contain less than 400 changed lines_ (excluding tests). Note that this is a _guideline_ and not a hard limit; there are situations where it doesn't make sense (e.g. PRs that are mostly mechanical changes).

There are several reasons to prefer small PRs:

- Reviews happen more quickly ("I'll just review this quickly right now" instead of "Hmmm, better schedule time for this later").
- It enables higher-quality reviews, because there's less context for the reviewer to hold in their head. It's also easier to suggest major changes when your teammate has spent only a few hours on a PR, rather than a day or more.
- It encourages a tighter feedback loop.
- Smaller, atomic changes are easier to roll back if required.

##### Keep reviewers to a minimum

Pull request authors should always prefer requesting reviews from specific teammate(s) as apposed to a group. This creates accountability and clear expectations. A single reviewer is usually sufficient.

#### For reviewers

Reviewers should try to review in a timely manner; doing so allows everyone involved in the pull request to iterate faster as the context is fresh in memory. Reviewers should aim to review within one working day from the date they were assigned to the pull request. If you don't think you'll be able to review a pull request within that time, let the author know as soon as possible.

If the author of the pull request has not heard anything after one day, a new reviewer should be assigned.

#### Review Buddies

At Sourcegraph, [we believe code review is important](https://docs.sourcegraph.com/dev/background-information/code_reviews), and on the developer insights org specifically, [we believe unblocking others is our highest priority](#unblocking-others-is-your-highest-priority).

**What is a review buddy?** A review buddy is someone you can regularly ask review from on PRs directly (as opposed to asking a whole group like `@frontend-devs`) and who can equally ask for reviews from you.
Since they review each other's code more often, review buddies will learn each other's project goals in more detail than an average out-of-team reviewer and are able to provide and receive a more in-depth review.

Everybody is encouraged to have 2-3 review buddies. This ensures there is always an alternative buddy to ask if the initial reviewer indicated they cannot get to it in the usual timeframe or the buddy is not working.
A review buddy is expected to communicate the timeline in which they could provide a review clearly and timely if they don't have the bandwidth to provide a same-day review, so that their buddy can choose to ask someone else.
Review buddies can also proactively communicate when they are too busy, e.g. through their Slack status (although this should be the exception, rather than the rule).

**Why become a review buddy?**

- If you're interested to learn about another team's codebase and work
- If you're interested in getting perspectives on your code from engineers not on your team
- If you work on a platform team that frequently needs review and feedback from other teams
- If you want to share your knowledge with others and have a positive impact beyond your team
- If you're on a small team and don't have someone else on the team to review your code
- If you simply want to help out!

If a review buddy feels they can repeatedly not take time to review their buddy's code because of pressure on their own team's goals, they should bring it up with their manager.
Taking time to review code is everyone's responsibility and a project timeline that doesn't allow time for fulfilling this responsibility is generally not a sustainable timeline.
It is each manager's responsibility to ensure engineers have enough time to fulfill code review responsibilities.

**How do I become a review buddy?** Tell another engineer you'd like to be their buddy, and add your names to the [spreadsheet](https://docs.google.com/spreadsheets/d/1ylNMS4n9BxPgvRJIBhXI1uCaAjbJtvTNdeJSDoABhlc/edit)!

## Processes

Each team is afforded the freedom to operate as best they see fit to achieve their goals.
The following processes apply to all teams in Developer Insights.

### Communication

We recognize that frequent, open communication is key to the success of every team, especially in an all-remote environment.
We default to asynchronous communication in Slack, Google Docs and GitHub issues over other mediums (video calls, emails, etc) as we are respectful of our teammates' time.

In addition to team specific channels, we communicate in the following org-wide channels in Slack:

[#developer-insights-internal](https://sourcegraph.slack.com/archives/C01EM5J1NF8): Our weekly check-in (facilited through Geekbot) go into this channel as well as all org-wide commmunication. Random conversations, banter, jokes etc. are all welcome here.

[#developer-insights-org-leadership](https://sourcegraph.slack.com/archives/C01P1TVDJR4): This channel is for the Engineering Managers, Product Managers and Product Designers to discuss higher-level matters impacting the whole org.

#### Slack acknowledgment

In an async-first communication environment it is important to remove assumptions/uncertainty around whether teammates have seen, understood or acted on a message.
To assist in this regard we provide the following guideline for teammates to follow when communicating and responding in Slack.

**The most important thing to remember is not which emoji to use, but rather to remember to acknowledge and to do it in a clear and unambiguous way.**

_When acknowledging a request:_

- `:thumbsup:` (👍) = I see the request and will action it
- `:white_check_mark:` (✅) = I have completed my action on the request

_When acknowledging a statement:_

- `:thumbsup:` 👍 = I agree with the statement or I have taken note of it
- `:thumbsdown:` 👎 = I disagree with a statement - encouraged to always follow up with written response

_When acknowledging a question:_

You should provide a written response unless it's a simple yes/no question, in which case `:thumbs-up:` (👍)/`:thumbs-down:` (👎) is acceptable.

### Events

We have a [shared events calendar](https://calendar.google.com/calendar/u/0?cid=Y181Z2Zoa2Y5b2g1ajM4NDVwaHVtdHVkZTg0Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t) where the teams can add all their team specific events so everyone can easily see the events.

### Weekly Slack check-ins

We use [Geekbot](https://geekbot.com/) to facilitate a once-a-week (on a Monday) check-in where we ask teammates across the org the share their goals for the week are in the [#developer-insights-internal](https://sourcegraph.slack.com/archives/C01EM5J1NF8) Slack channel. We also use this opportunity to build camaraderie between team members by sharing some non-work related aspects of our lives with each other.

All teammates are expected to be part of this channel, and should read the updates, to stay up-to-date with what their teammates are working on.

### Status updates

Each Engineering Manager of the teams in the org is responsible for sending out a [status update](../engineering-management.md#status-updates) by the Monday following their team's retrospective.

### Health reports

The engineering managers are responsible for compiling a weekly health report ([see example](https://docs.google.com/spreadsheets/d/1PnRPydNYLF2Als3KpVuIYO8dXeqckp_sbowVkvkdkeE/edit)) for their team.

The report is a confidential update between the Director and the Engineering Managers and serves the following purpose:

1. Updates the director on how things are going at a high-level in the team
1. Identifies areas of concern that could lead to proactive intervention to mitigate concerns

The report is not used for judging the performance of the team or the manager, and its intention is solely to inform and trigger dialogue. Managers are not expected to provide exhaustive notes, rather high-level summaries are preferred.
