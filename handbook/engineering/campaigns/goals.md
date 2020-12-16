# Campaigns goals

The campaigns team is building the best solution available for creating and managing large scale changes. To do so we will focus on the following objectives:

## Grow adoption of campaigns 

We need to grow usage of campaigns to understand our customer use cases and inform our roadmap.

How do we do this:
  * Proactive customer outreach
  * Continual user validation
  * Strive to create a frictionless initial experience
  * Provide amazing support

Our success metrics:
  * Build a base of 10 customers who have created 80 campaigns and made 4000 changesets in 2020 Q4
  * [Looker dashboard with usage metrics](https://sourcegraph.looker.com/dashboards/136) (internal only)


## Design and build the most robust, yet easy to use solution for creating changesets across many repositories

Campaigns need to be easy to explain, easy to understand, easy to start using, and easy to explore. At the same time, it should be the most powerful tool available for making programatic changes to multiple repositories. 

How do we do this:
  * Clean conceptual model
  * Expressive syntax
  * Understand our customers environments and requirements
  * Strong alignment of features to developer objectives
  * Excellent docs, tutorials, demos/training
  * Best debugging experience

Our success metrics:
  * Reduction of feature requests over time

## Design and build the best solution for managing many changesets

Completing a large scale change in any organization requires coordination with and approval by, many people. Tooling is required for this process to not only be efficient, but at a certain scale, be _possible_. This includes making developers aware changesets exist, reminding them to merge changesets, or if possible, sidestepping this social dilemma entirely by enabling automatic merges. 

### Problems

* Company workflows often required issues/tickets to accompany changes to their code bases. Campaigns does natively support issue tracking systems. 
* It is currently too difficult to find changesets which cannot or have not been merged.
* Often owners do not prioritize merging changesets. It takes too long to nudge the owners of each changeset. 
* We do not currently support automerge.  Doing so would greatly reduce the manual effort required to merge changesets. 

### Milestones

* Support creating tickets/issues alongside or instead of code changes.
* Users can search, filter and sort changesets by check and review status, title, repository and branch.
* A campaign owner can nudge developers to merge changesets .
* Campaigns can leverage the automerge capabilities provided by their code host.

### Outcomes

* An increase in the average number of merged changesets is observed.
* A reduction in the average amount of time to close a campaign is observed.
* The nudge and automerge features are used by customers to reduce time to merge.
