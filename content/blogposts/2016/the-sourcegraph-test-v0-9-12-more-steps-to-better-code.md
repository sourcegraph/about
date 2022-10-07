---
title: 'The Sourcegraph Test: 12 more steps to better code'
authors:
  - name: Quinn Slack
    url: https://twitter.com/sqs
publishDate: 2016-02-11T00:00-07:00
tags: [
  "blog"
]
slug: the-sourcegraph-test-v0-9-12-more-steps-to-better-code
heroImage: https://images.ctfassets.net/le3mxztn6yoo/4NjrERYveEGikIQwUsaeas/a76e07e3bbe32f55f51b49bbf9f87254/12-steps.jpg
published: true
---



Do you use the best tools money can buy? We ask ourselves that a lot at [Sourcegraph](https://sourcegraph.com). It’s one of the questions in [The Joel Test](http://www.joelonsoftware.com/articles/fog0000000043.html), Joel Spolsky’s classic 12-question benchmark of your team’s software engineering practices.

Since he published the test in 2000, the _“best tools money can buy”_ have dramatically improved. Code review, better editors/IDEs, GitHub, etc. But now you also demand more. It’s not crazy to be using 5 programming languages, multiple repositories, 2 package managers, 200 open source dependencies, several linters, a complex frontend build pipeline, etc.

So, we made **The Sourcegraph Test** to measure how well your tools help you manage the reality of modern development:

### The Sourcegraph Test

1.  Do you have jump-to-def in your primary language and editor?
2.  Does your jump-to-def work across repository boundaries?
3.  Do you have find-references in your primary language and editor?
4.  Do you have inline error messages and diagnostics in your primary language and editor?
5.  Do you have jump-to-def in your primary editor for _all_ of the languages you use?
6.  Does everyone else on your team satisfy the above 5 questions at least as well as you do?
7.  Can you search over all of your code and dependencies in one place?
8.  Do you receive and perform code reviews?
9.  Do you have jump-to-def and find-references in your code review tool?
10.  Do you have jump-to-def and find-references in your code host?
11.  Can you review and discuss code even after it has been merged?
12.  Does your code review process use any form of checklist (i.e., it’s not completely up to the discretion of the reviewer)?

Give yourself a **_yes_** (1 point each) or **_no_** (0 points) for each question. A score of 12 is perfect, and 9 is pretty good. Most teams are at 4 or 5.

### So what?

Until you’re running at 12/12 on The Sourcegraph Test (_and_ The Joel Test), you’re wasting a lot of precious development time on tasks that aren’t core to your business and product. Tracking down the source of a bug takes an extra 5 minutes here, figuring out the impact of a change in a code review takes 10 minutes more, refactoring a method name via plain-text search adds half an hour on top of that — small numbers, maybe, but they add up fast, and they get more costly as your team grows. Any team that’s wasting 20% of their day is falling behind competitors and is being drained of their creative energy to create amazing products.

At [Sourcegraph](http://sourcegraph.com), we think every developer — in every company, in every language, working on any kind of code — deserves to be 12/12\. See the [Sourcegraph master plan](https://handbook.sourcegraph.com/company/strategy) for how we’re working to make that possible.

[**Share your score on Twitter!** ➜](https://twitter.com/intent/tweet?text=My%20dev%20tools%20are%20at%20__%2F12%20on%20the%20%23sourcegraphtest%20https%3A%2F%2Ftext.sourcegraph.com%2Fthe-sourcegraph-test-12-more-steps-to-better-code-e5c281850c&source=webclient&via=sourcegraph&related=sourcegraph)

> Note: The Sourcegraph Test is v0.9 so we can incorporate any feedback before finalizing it. Did we miss anything? Tell us [**@sourcegraph**](https://twitter.com/sourcegraph)using the hashtag **#sourcegraphtest**.

### About the author

_Quinn Slack is the CEO and co-founder of Sourcegraph, the code intelligence platform for dev teams and making coding more accessible to more people. Prior to Sourcegraph, Quinn co-founded Blend Labs, an enterprise technology company dedicated to improving home lending and was an egineer at Palantir, where he created a technology platform to help two of the top five U.S. banks recover from the housing crisis. Quinn has a BS in Computer Science from Stanford, you can chat with him on Twitter [@sqs](https://twitter.com/sqs)._
