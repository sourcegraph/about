# Goals

Our company goals are public:

- [New *continuously updated* goals starting as of FY20-Q3 (upcoming, not publicly visible yet, will be moved to handbook soon)](https://docs.google.com/document/d/1Z6avFUmnGW-ZC6zrktqqQd_g5mhBE96C_mTwXwFc1H4/edit#)
- Historical snapshots:
  - [FY20-Q2 (active)](2020_q2.md)
  - [FY20-Q1](2020_q1.md)
  - [CY19-Q4](2019_q4.md)
  - [CY19-Q3](2019_q3.md)

## Philosophy

We believe:

- "Plans are useless, but planning is essential."
- "No plan survives first contact with the customer."
- "A plan is only useful for determining the immediate next thing to do. Beyond that, you must be ready to abandon the plan in the face of new evidence."
- Discarding a goal that turns out to be wrong is better than following through on the wrong goal. People know this intellectually but disregard it in practice.
- Each problem we're solving has a different (and often unknown/unknowable) timeline and rate of progress.
- Only people with skin in the game can set useful goals.

## Goals are continuous, not quarterly

1. Goals are continuously updated, and each goal specifies its own time period. They are not (for example) quarterly.
   - No single update/review cadence (such as quarterly) makes sense for all goals.
1. Change your goal immediately if/when you discover it's the wrong goal.
   - Reflect on why you needed to change the goal (so you can learn), but don't keep working toward the wrong goal.

## Choosing goals

A goal's format is:

> **Goal title** \
> Description of the goal and how to evaluate whether we met the goal (with a link to an automatically updated metrics dashboard, if appropriate).

1. Each goal has a single person (not multiple people) who's ultimately responsible for it.
   - Many people can be working toward a goal, but there must be one person who's ultimately responsible.
1. No person can have more than 5 goals at once. (This number is arbitrary, but it feels right.) Fewer is better.
1. Pick goals where failure would be painful.
1. Pick goals where you can influence the outcome. Avoid using a lagging indicator as a goal.
1. For a new project, it can be hard to define the right goal and measurement. Do your best. (You can just list some metrics to track if you don't know what numeric target to set yet.) Then refine the goal as you learn more.
1. Set goals to be ambitious but achievable, so that they convey your aims and what you could achieve if things go well.
   - Goals are **not** the 99.99% likelihood outcome or the 1% moonshot outcome.
1. Goals are for communication and alignment (everyone knowing what's important, why, and how it'll get done), **not** for estimation, scheduling, or promising/committing.
   - Setting a goal for _X_ is not the same as _committing_ to shipping _X_ to customers. We are much more conservative in setting expectations with customers about firm ship dates than we are in setting goals.
   - Write your goals so they communicate effectively to an audience who understands that goals aren't promises. Don't write goals so cautiously that they are hard to understand. (For example, "Improve code intelligence support for Java" is a good goal, especially with well defined outcomes. But "Investigate feasibility of improvements to Java code intelligence" is probably bad.)
1. If a goal's success criteria can be reduced to a single quantitative metric, that's great. But don't try to force it. It's OK to rely on human judgment to judge the success of a goal.

### Sensitive information

Do not include any specific financial numbers, customer names, or any other sensitive information in the public goals. Instead, use placeholders (such as *N<sub>0</sub>*, *N<sub>1</sub>*, and so on) and link to the definitions in a Google Doc that is only visible to Sourcegraph team members.

## Progress updates

1. As you make progress toward a goal, add `Status: ...` with a brief description of the progress. If possible, link to a live dashboard tracking the progress.
1. When you make meaningful progress toward a goal, post in the #progress channel and include a link to the PR that updates the goal's status.

## Reflecting on goals

We've just switched from using OKRs (which have a quarterly cadence) to continuous goals. It's important that we regularly reflect on our goals even without the quarterly cadence. We're still figuring out the best way to do this. Relevant comment from a team member:

> [It will be important to have] some sort of regular reflection process or template that people write up to reflect on and report on progress. It could be a document they write every quarter that uses their goals commit log as a starting point and explains to themselves, their manager, and the rest of the team the evolution of their goals and accomplishments.

> I like this idea [of regular reflections] and I think it would be really cool to be able to go to a handbook page for a team and see "what did this team do last quarter/year?".

## Why not just use OKRs?

- Using OKRs implies a process where the goals are defined at the start of a time period and don't change until the start of the next time period. This makes people reluctant to change their goals when they are the wrong goals, which is a bad incentive. Realizing the goals are wrong and quickly changing them is way better than hitting the wrong goals.
- [We don't like jargon and acronyms](https://about.sourcegraph.com/handbook/communication/style_guide#jargon-and-acronyms), and "OKR" is both. Why say "objective" when you can say "goal"? Why say "key result" and not just "result"? Questions like these make people think that there's some special science behind OKRs, when really the hard part is the fundamentally hard problem of coming up with the right goals.
- There are so many ways to "do [OKRs](https://en.wikipedia.org/wiki/OKR)." Why name the overall goal-setting process after something that defines just a small part of the overall process?
