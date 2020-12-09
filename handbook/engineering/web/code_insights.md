# Code insights

Code insights is the first feature in Sourcegraph that can tell you things about your code at a **high level**. Here's [the original RFC](https://docs.google.com/document/d/1EHzor6I1GhVVIpl70mH-c10b1tNEl_p1xRMJ9qHQfoc/edit) and a [demo](https://www.youtube.com/watch?v=XqeRb6Mc4Co) of a code insights prototype.

Sourcegraph is in the unique position to give these insights because we have universal code search: To know _anything_ about your code at a high level means you must know _everything_ about your code at a low level.

Code insights connects a lot of features that Sourcegraph already has and builds on top of them.
We go beyond single-step code intelligence and search to connect the full cycle of analyzing (code intelligence), monitoring (code insights), and actionably changing a codebase (campaigns).

Code insights will also allow to combine these Sourcegraph-created metrics with other third-party data sources.

Code insights is the first feature primarily built for non-search-based user personas.

## Vision

1. Expose the value of Sourcegraph's knowledge of your codebase to users at all levels of an organization.
1. Expose generalizable metrics that let our users measure and track their own goals, whether those are migrations, code smells, test coverage,  security needs, cross-collaboration, or other information about code.
1. Make these metrics scalable across thousands of repositories on a Sourcegraph instance.
1. Expose features that let our users build their own insights.
1. Expose features that let users drill down into insights by teams, repositories, or other sub-metrics.
1. Connect code insights to other Sourcegraph features – make a campaign to take action on a metric or set up code monitoring to notify you about changes to an insight.
1. Add plug-and-play integrations to Sourcegraph code insights that let users easily integrate third-party data into their insights.
1. Discover new, validated code metrics that engineering teams should track (and let teams track them).