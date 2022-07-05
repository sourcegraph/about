---
title: "Code ownership: Why we built a new tool for subscribing to file changes"
externalTitle: 'Code ownership: A new perspective'
authors:
  - name: Nick Snyder
    url: https://twitter.com/nickdsnyder
description: "We’re rethinking the way code ownership works at Sourcegraph and building a new tool that enables developers to subscribe to file changes in a Git repository."
externalDescription: "We’re rethinking the way code ownership works at Sourcegraph and building a new tool that enables developers to subscribe to file changes in a Git repository."
publishDate: 2020-10-05T10:00-07:00
tags: [blog]
slug: a-different-way-to-think-about-code-ownership
heroImage: https://sourcegraphstatic.com/blog/codenotify-survey-results.png
published: true
---

We’re [experimenting](https://github.com/sourcegraph/sourcegraph/pull/13838) with a new way to think about code ownership, and have built a new tool called [Codenotify](https://github.com/sourcegraph/codenotify). Codenotify enables developers to easily subscribe to file changes in a Git repository without creating the expectation that changes to those files are blocked on the subscriber’s review.

## Defining the code ownership problem

We host all of [our code on GitHub](https://github.com/sourcegraph/), so up until now we have been using a GitHub [CODEOWNERS](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/about-code-owners) file in each repository. When someone opens a pull request, GitHub will look at the CODEOWNERS file to determine which reviewers to automatically add.

As our team has grown over the past year, I started to observe patterns in code ownership problems that made me think that the way we assigned code reviewers was flawed.

- Pull requests that touched multiple files of different kinds and in multiple places would sometimes end up with a large list of automatically added reviews.
- Reviewers wouldn’t review all the changes they were notified about because it wasn’t clear if their personal review was relevant (for example: they may have gotten notified because they are on the team that owns the code, but aren’t the best reviewer for that particular change).
- Authors (especially newer teammates) were getting slowed down because it was not clear whether they needed to wait for all automatically added reviewers or not. This was exacerbated by the fact that some teammates used CODEOWNERS as a way to be notified of changes they cared about, even if they didn’t have the intention or ability to promptly review all those changes.

My diagnosis was that there were two problems:

1. The low signal to noise ratio of automatically assigned reviews was slowing the team down.
1. The design of CODEOWNERS (its name, its UI treatment, it automatically adding code reviewers) created a gatekeeper culture to code review that discouraged a [high agency](https://handbook.sourcegraph.com/company/values#high-agency) mindset.

## Validation

I had a hypothesis—that we needed something other than CODEOWNERS to create code ownership—but it needed validation. Was the team feeling the same pains and observing the same patterns as I was? Was continuing to use CODEOWNERS a viable solution moving forward?

To get the sentiment of the team, [I opened a pull request that proposed deleting CODEOWNERS with my reasons](https://github.com/sourcegraph/sourcegraph/pull/11718) and asked the entire team to submit anonymous feedback. Here were the results:

<Figure 
  src="https://sourcegraphstatic.com/blog/codenotify-survey-results.png" 
  alt="50% yes, 31% maybe, 19% no"
/>

In the free-form comments, responders provided extra context about their support, concerns, and suggestions for the proposal. Here are a few representative examples:

- "I've honestly not gotten any value out of CODEOWNERS files. I never look into them, I never trust the auto-add-as-reviewer feature in GitHub PRs."
- "Would this result in people who wrote more LOC being enlisted into more reviews?"
- "I use CODEOWNERS to get notified of PRs"
- "Replace with [OWNERS](https://chromium.googlesource.com/chromium/src/+/master/docs/code_reviews.md) (something people will actually update)"
- "I think removing CODEOWNERS makes it more difficult for new developers without historical context to determine who the right reviewers are."

It was clear we needed _something_, but CODEOWNERS didn’t do exactly what we needed and we didn’t have the ability to change its behavior.

## Exploring alternatives

There was enough evidence that a code ownership problem existed to justify exploring alternatives.

I found [Fullstory’s blog post about how they ran into similar problems with CODEOWNERS and ended up creating a bot](https://bionic.fullstory.com/taming-github-codeowners-with-bots/). I would have loved to experiment with using their bot, but unfortunately it was not open source.

A few of our teammates, including myself, worked at Google so we were familiar with the [OWNERS](https://chromium.googlesource.com/chromium/src/+/master/docs/code_reviews.md) format used internally and in the Chromium project. This would have been an improvement over CODEOWNERS because multiple files are easier to maintain than a single large file and [Chromium’s implementation explicitly attempts to minimize the number of reviewers](https://chromium.googlesource.com/chromium/tools/depot_tools/+/master/owners.py#607), but I was worried this would continue to create a gatekeeper culture around modifying code.

I wanted a solution that would:

1. Allow developers to subscribe to the code changes that they cared about without creating an expectation that they would review all those changes.
1. Allow authors to use their judgement and agency to intentionally select reviewers whose feedback they think would be valuable (for example: Who wrote the code being edited? Who reviewed the code being edited? Who provides valuable feedback in a timely manner?).
1. Be easy to understand and maintain in a large and constantly evolving codebase.

Neither CODEOWNERS nor OWNERs were designed with all these requirements in mind, so I started to think about what a new tool might look like, and I ended up with [Codenotify](https://github.com/sourcegraph/codenotify).

## Designing Codenotify

As the name implies, Codenotify is designed around the concept of notifications, not about establishing "ownership" of code or mandating "reviewers". Codenotify works on the command line and is codehost agnostic at its core, but it is also packaged as a GitHub Action so it is easy for repositories on GitHub, like ours, to adopt. The GitHub Action sends notifications to subscribers by mentioning them in a comment instead of adding them to the official "reviewers" or "assignees" lists on GitHub.

Notification rules are stored in [CODENOTIFY files](https://sourcegraph.com/github.com/sourcegraph/codenotify/-/blob/README.md#codenotify-files) in any directory. This makes rules more maintainable and less brittle to moving code because the CODENOTIFY files are adjacent to the files they have rules for.

Codenotify rules and files are familiar in syntax to CODEOWNERS, but simpler to understand because each rule is additive, not hierarchical. This means that you can understand how a single rule behaves without needing to consider any other rules (unlike OWNERS or CODEOWNERS).

<div style={{padding: '1em 2em', backgroundColor: 'lightblue', width: '40rem', marginRight: 'auto', marginLeft: 'auto'}}>
If you want to learn more about Codenotify or try it out for yourself, then the project's <a href="https://sourcegraph.com/github.com/sourcegraph/codenotify/-/blob/README.md">README</a> has everything you need to know!
</div>

## Starting our code ownership experiment

After I had a working prototype of Codenotify, it was time to actually experiment. Experimentation is a great way to discover unforeseen costs and benefits, and learn whether hypothetical problems are problems in practice.

[We deleted our CODEOWNERS file on September 16, 2020](https://github.com/sourcegraph/sourcegraph/pull/13838), and teammates have been [adding CODENOTIFY files](https://sourcegraph.com/search?q=r%3A%5Egithub.com%2Fsourcegraph%2F%28sourcegraph%7Cabout%29%24+f%3ACODENOTIFY+count%3A1000&patternType=literal) ever since.

At the end of October I will check in with the team to see how they are feeling about this code ownership experiment after having lived with the change for over a month. The exciting thing is that no matter what the outcome is, we will have learned something new.

## More posts like this

- [The Nine Circles of Dependency Hell (and a roadmap out)](https://about.sourcegraph.com/blog/nine-circles-of-dependency-hell/)
- [How we used universal code search to eliminate secrets from our codebase](https://about.sourcegraph.com/blog/eliminate-secrets-from-codebase-with-universal-code-search/)
- [How not to break a search engine or: What I learned about unglamorous engineering](https://about.sourcegraph.com/blog/how-not-to-break-a-search-engine-unglamorous-engineering/)
