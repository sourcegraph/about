# Security - How we manage our work

Our processes are in a period of change, so if in doubt, please reach out to us directly in Slack at [#security](https://sourcegraph.slack.com/archives/C1JH2BEHZ).

## Contents
  * [Principles](#principles)
  * [Process overview](#process-overview)
  * [How to work with us](#how-to-work-with-us)
  * [Other processes](#other-processes)

## Principles

1. [Goals](https://about.sourcegraph.com/company/goals/guidelines) are something we strive for, whilst tracking and communicating progress.
2. A work item is a piece of work (e.g., writing code, hiring a new teammate) that makes progress toward achieving a goal.
3. Releases may be made up of N workitems, that may impact Y goals. Whilst this is true, we communicate both internally and externally progress towards those goals.
4. Security by its various nature has public work items ([main repo](https://github.com/sourcegraph/sourcegraph) and private workitems ([security repo](https://github.com/sourcegraph/security-issues/)). Over time workitems should move from the private repository to the public repository once they can be made public. The ideal goal state is the lack of a private security repository.


## Process Overview

### Planning & Roadmap

1. We plan iterations and features prior to their execution, in a team planning session.
2. We set one or more goals for the iteration.
3. We write RFCs and solicit feedback ideally, prior to the start of an iteration, but especially with forethought in mind.
4. We hold weekly team syncs and [track them here](https://docs.google.com/document/d/1l-JyN-hol2G6YXNqPsJsIgN2z3aZEzOW4-Julu4xthI).
5. We report on our status and progress weekly in [tracking issues](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3Atracking+label%3Ateam%2Fsecurity), and radiate communication.

ProductBoard serves as our tool for oversight and higher level planning. 

In it, you can find:
  * [Our roadmap](https://sourcegraph.productboard.com/roadmap/2866503-fy2022-security) 
  * [A filtered view of all the things we (or others) would like us to do](https://sourcegraph.productboard.com/feature-board/2130270-security)
    * These are a wishlist, refer to the status and whether they have a quarter set in order to judge whether we have them in our sights

Work stays in ProductBoard until it qualifies from "we might do this" to "we are going to". At that point, things transition over into Jira for more detailed planning and execution.

### Execution

Jira is intended only for **planned** work.
  * Big work 
    * Stuff we're **going to do** makes it into here via ProductBoard, where it gets broken down, ordered, and prioritized against other commited stuff
  * Small items that don't fit with the strategic roadmap, but that need to be done soon
  * Bugs  

## How to work with us

We're always happy for teams to [request security code reviews](secure-code-review.md).

Please raise all support request into..........................

In the event you feel something is urgent, please also copy a link and a line or two of written explantion of the urgency into [#security](https://sourcegraph.slack.com/archives/C1JH2BEHZ) and tag `@security-support`.

We're happy to have you reach out to us on [#security](https://sourcegraph.slack.com/archives/C1JH2BEHZ) if you have any doubts, or for any reason feel like our process can't work for you in a particular case.

## Other processes

### Learning / retrospective

After the each release, we hold a [retrospective](https://about.sourcegraph.com/retrospectives). We try to understand the degree to which we achieved the goals we communicated at the beginning of the iteration. We identify what went well and what our opportunities for improvement. We actively choose one of the things we've learned, and target its improvement.

### Deploying infrastructure

Security develops infrastructure in the [Auxilliary project](https://console.cloud.google.com/home/dashboard?project=sourcegraph-server&_ga=2.42742757.1539584256.1606825468-757838940.1606655220). We work with the [Distribution team](https://about.sourcegraph.com/handbook/engineering/distribution) to deploy and test in dogfood, and promote to production. We are responsible for documentation and operating systems, and [Distribution](https://about.sourcegraph.com/handbook/engineering/distribution) helps make infrastructure production-ready based on our guidelines. Security acts as an input to Distribution.
