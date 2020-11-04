# Recurring processes

- [Monthly](#monthly)
  - [Milestone planning](#milestone-planning)
  - [Retrospective](#retrospective)
- [Weekly](#weekly)
  - [Company meeting](#company-meeting)
  - [Weekly Distribution team sync](#weekly-distribution-team-sync)
  - [Bi-weekly async updates](#bi-weekly-async-updates)
  - [Distribution management sync](#distribution-management-sync)

## Every two weeks

At the beginning of each cycle, [we determine](#planning) what work we plan to do to bring us closer to accomplishing our goals.

At the end of each cycle, we run a [retrospective meeting](#retrospective) to review the progress we have made over the cycle, reflect on what worked well and identify improvement areas.

### Planning

**Input:** Existing issues and new proposals in line with our goals.

**Output:**

- A [tracking issue](../tracking_issues.md) that lists all engineering items of work we plan to accomplish this cycle.
- One or more [GitHub projects](https://github.com/orgs/sourcegraph/projects?query=is%3Aopen+Distribution%3A) describing and grouping multiple related issues, into a milestone or goal.

**Process:** The [engineering manager](../roles.md#engineering-manager) drives the planning meeting, and follows these steps:

**Async proposal (1 week before the planning meeting):** We start working on a draft set of projects and their required tasks for the next cycle. The idea here is to identify a superset of issues to be prioritized for this cycle, rather than to identify the exact set of issues.

1. Kick-off async planning during our [weekly sync meeting](#weekly-distribution-team-sync).
1. Review the current [goals and milestones](./goals.md), ensure those goals and milestones match are up to date, and match what you think we should be working on. If this is not the case, propose a new goal.
1. Review the [open Distribution issues](https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+label%3Ateam%2Fdistribution+user%3Asourcegraph) and move all issues to the current cycle you think should be considered for prioritization.
   - If an issue is important but doesn't satisfy the goals, consider if the goal needs to be changed.
1. Review [technical debt](https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+label%3Ateam%2Fdistribution+user%3Asourcegraph+label%3Adebt), [quality of life](https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+label%3Ateam%2Fdistribution+user%3Asourcegraph+label%3Aquality-of-life) or innovation issues you would like to work on this cycle.
1. Update the [planning document](https://docs.google.com/document/d/1Ko1MbyO1yIr7aQsvIRAAbjdnOJ2qUQB9kTJQvcWWcOY) with your the proposed theme and tasks.

**Async planning:** The team asynchronously reviews the [proposed tasks and themes](https://docs.google.com/document/d/1Ko1MbyO1yIr7aQsvIRAAbjdnOJ2qUQB9kTJQvcWWcOY), adding comments and questions to help narrow it down to a feasible set of work that align with our goals and has a clear plan. This step helps the amount of time required during the planning meeting and resolve some doubts that may take longer to address.

**Planning meeting:** The team meets to review the existing plan, finalize the plan details and get the tracking issue and cycle in a ready to be started.

1. Revisit the goals. Are they still the right goals?
1. If there are any remaining uncertainties following the meeting, the owners of each theme or task should follow up before the start of the cycle.

**Note on agency and responsibility:**

- It is **every** Distribution teammate's responsibility to understand the team's priorities and propose the work that aligns with these priorities.
- It is the engineering manager's responsibility to ensure (1) the tracking issue is the right set of things to work on and (2) every team member is bought into the outcome of planning.

**Note to engineering managers:**

How active a role you take in planning should depend on your read of the team at the start of planning. Common pitfalls are being too passive or too dictatorial. Too passive means we aren't necessarily working on the right things. Too dictatorial means people aren't bought into what we're working on. Avoid both of these. Keep in mind that no one (including you) has a monopoly on useful knowledge and context, but also that the engineering manager exists for a reason.

### Retrospective

At the end of each sprint, the team performs a [retrospective](../../../retrospectives/index.md) following the [engineering milestone retrospectives](../../../retrospectives/index.md#engineering-milestone-retrospectives) format to review our sprint and find improvement areas.

## Weekly

### Company meeting

As with everyone at Sourcegraph, we join the [weekly company meeting](https://about.sourcegraph.com/handbook/communication/company_meeting) (when timezone permits, watching the recording otherwise).

### Weekly Distribution team sync

Mon @ 11am PST we hold an [internal
team sync](https://docs.google.com/document/d/1otP6F8qfm2yNOW1hjTszkkuiYF1MGp31s5ATeA76ij4/edit) via Zoom. The goal is to:

- Think about the problems we're solving by briefly going over what everyone is working on
- Revisit our [goals](goals.md) and think about how we are tracking towards them when useful (and consider if they are still the right goals)
- Identify and address any topics & issues that warrant further discussion
- Act as an opportunity / space for anyone to call out concerns, questions, etc. that they may have or suggest things we could be doing better, etc.
- Serve as a space for others outside our team that work closely with us (e.g. people working on Cloud infrastructure) to interact with us face-to-face.

The first Monday before the [20th (release day)](../releases/index.md), this meeting is used to finalize planning the next release.
The second Monday before the [20th (release day)](../releases/index.md), this meeting is used to kick-off asynchronous planning for the next release.

These meetings are recorded (posted automatically to the #distributioneers Slack channel) so that anyone whose timezone does not permit can participate after the fact.

### Weekly updates

#### Wednesday Slack update

Wed, before EOD (local time): distribution members are expected to post an update in Slack communicating:

1. What you have worked on since your last update
2. What you are working on now
3. Anything you feel uneasy about, think is at risk of not being completed, etc.

**Example:**

> **Update:**
>
> - Helped \$CUSTOMER with search scaling questions.
> - Made some progress on updating the regression test suite, more work to do.
> - Opened a PR for that nasty bug (https://github.com/sourcegraph/sourcegraph/pull/9330)
> - https://github.com/sourcegraph/sourcegraph/pull/9331 turned out much harder than I thought, it may slip this release
> - I am now focused on https://github.com/sourcegraph/sourcegraph/issues/10419

The goal of this update is to ensure we're discussing things as a team, asking for help when appropriate, reflecting on our progress, and giving others the opportunity to provide help and guidance.

#### Friday GitHub update

Fri, before EOD (local time): distribution members are expected to post an update with the following to [our monthly tracking issue](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+label%3Ateam%2Fdistribution+label%3Atracking+Distribution):

- What you've worked on **this week**
- What you plan to focus on **next week**
- Anything that you think may not get finished in time for the release

**Example:**

> This week:
>
> - Lots of progress on regression test suite, more to do.
> - That nasty bug is fixed (https://github.com/sourcegraph/sourcegraph/pull/9330)
> - https://github.com/sourcegraph/sourcegraph/pull/9331 turned out much harder than we thought and it may slip this release
> - Next week: Will finish up the above + start working on automating releases

The goal of this update is to communicate to _the broader Sourcegraph team_ what we're working on, what progress we've made, and anything that is at risk at a high-level.

#### Why weekly & asynchronous updates?

We use asynchronous updates via Slack and GitHub instead of face-to-face video call stand-ups because it allows:

- You to write your update and consume other's updates at your own pace.
- Others to opt-out of conversations they may not have stake in easily (topics worth discussing with the entire team can be brought up at the weekly team sync.)

We send updates twice a week because:

- Daily updates are too frequent, tedious to write out, tedious to consume, and give the impression that someone wants an hour-by-hour account of work (we do not).
- A single weekly update make it easy to forget what you did at the start of the week, forget to ask for help, and make it hard for others to offer help in a timely fashion.
- Two updates a week encourage posting updates and gathering feedback regularly, while still focusing on just the high-level key points of interest.

We want to respect autonomy and view updates as a tool to help remind team members to collaborate together, ask for help, and perform self-reflection about whether your current focus is right or not.
