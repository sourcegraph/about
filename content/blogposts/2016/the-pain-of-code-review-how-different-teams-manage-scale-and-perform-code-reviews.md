---
title: 'The pain of code review: how different teams manage, scale, and perform code reviews'
authors:
  - name: Quinn Slack
    url: https://twitter.com/sqs
publishDate: 2016-05-30T00:00-07:00
tags: [
  "blog"
]
slug: the-pain-of-code-review-how-different-teams-manage-scale-and-perform-code-reviews
heroImage: https://images.ctfassets.net/le3mxztn6yoo/mmCXczHbxYQgyUgy2mCsI/d456527519625a4993577de4efb72c8d/1_0lf5CXM0eXoh-d1syiDPMg.png
published: true
---



We invited ten developers from leading tech startups around the Bay Area to join us for an “off-the-record” dinner to discuss the practice of code review (and what we want in an ideal code review process). Below is a wrap-up of the salient points from our dinner. Given the off-the-record nature of this discussion, we have removed any mention of proprietary processes, repositories, or code examples.

**Update, 11/1/2016:** The [Sourcegraph browser extension](https://docs.sourcegraph.com/integration/browser_extension) now provides tooltips and go to definition on pull requests for all Go, TypeScript, and JavaScript repositories.

#### A list of the tools mentioned:

*   [CodeShip](https://codeship.com/)
*   [Phabricator Differential](http://phabricator.org/applications/differential/)
*   [CircleCI](https://circleci.com)
*   [GitHub](https://github.com/)
*   [Sourcegraph](https://sourcegraph.com/)
*   [Travis CI](https://travis-ci.com/)
*   [Godoc](https://godoc.org/)
*   [Slack](https://slack.com/)
*   [Pivotal Tracker](http://www.pivotaltracker.com/)

![](/blog-images/1*0lf5CXM0eXoh-d1syiDPMg.png

A typical code review UI (in a GitHub pull request).

### Code review is not a formal, clear process

Key takeaway: the code review process is still very labor-intensive and performed manually, even though tools for other parts of the development process (like continuous integration) are more automated.

Key insights:

*   Most attendees use GitHub as their primary repository host and for managing core parts of the VCS workflow (e.g., pull requests).
*   Many people also use GitHub for code review. But ex-Googlers prefer Gerrit, and ex-Facebookers prefer Phabricator.
*   Code reviewers looked primarily for general “code smell”, sloppy spacing, incorrect semicolon usage, and other visual cues. These signal sloppiness and that the code should be reviewed more scrupulously.
*   Most engineers assume tests have been run on the code before asking for a code review.

### Team size, tooling, and culture affects everything

Key takeaway: as engineering teams scale, the code review process gets more involved and less nimble due to the limitations of current code review tools.

Key insights:

*   Small teams (1–10) use pair-programming as a way of ensuring good quality code.
*   Medium teams (10–20) encounter bottlenecks with multiple repositories, communication of feedback, and waiting on code review from teammates. They experience challenges when onboarding new developers related to inconsistencies in code patterns and styles.
*   Larger teams (20–30+) tend to have a more formal process. Many consolidate code into one large repository. They have defined team roles for code review and reporting.

### The ideal code review tool

Key takeaway: the next evolution of code review tools should include more automated features that work at scale across different teams.

We asked each person to share what their “ideal code review tool” might look like. Here’s what we heard.

Key insights:

*   Linting: Almost all of the teams brought up the value of linting running automatically on pull requests, but none of the teams had set up a linting service.
*   Code and comment history: Have you ever commented on a pull request, only to lose the entire set of comments and code history after a force push? The ideal code review tool would give developers access to this archived history quickly and easily to help provide more context for future code reviews.
*   The social side of code review: Code review comments are one of the main emotional outlets of writing code. The frustration, the pain, and the excitement of pushing new code comes across in discussion comments. The ideal code review tool would recognize the human side of the process, so even the most banal pull request can be enjoyable.

### About the author

_Quinn Slack is the CEO and co-founder of Sourcegraph, the code intelligence platform for dev teams and making coding more accessible to more people. Prior to Sourcegraph, Quinn co-founded Blend Labs, an enterprise technology company dedicated to improving home lending and was an egineer at Palantir, where he created a technology platform to help two of the top five U.S. banks recover from the housing crisis. Quinn has a BS in Computer Science from Stanford, you can chat with him on Twitter [@sqs](https://twitter.com/sqs)._
