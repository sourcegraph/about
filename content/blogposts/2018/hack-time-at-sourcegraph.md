---
title: 'Hack time at Sourcegraph'
authors:
  - name: Nick Snyder
    url: https://twitter.com/nickdsnyder
publishDate: 2018-08-07T09:00-07:00
tags: [
  "blog"
]
slug: hack-time-at-sourcegraph
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5aQ98mlQLKQcOOOwyMiwaa/3faf82d2a8255e62a050839a1b896f78/codecov-github2.png
published: true
---

One of my favorite things about Sourcegraph is the fact that we are a team of developers building a product for developers. This means that everyone on the team has product intuition and can participate in planning what we are going to work on for our next release. Normally we spend time reviewing customer feedback, metrics, and company goals to figure out what to work on next, but every once in a while we like to throw our regular process out the window and do something special...HACK TIME!

## Traditional hack time

Many organizations do traditional "hack days", "hackathons", or "20 percent time", but each of these approaches have limitations.

- Hack days become less special when they are regular. Not everyone can think of an interesting idea every month so participation is less than 100% and people use the time to catch up on their regularly planned work instead.
- The idea of "20% time" sounds nice in theory but is even harder to sustain because not everyone does it at the same time. You don’t want to be the one person on your team working on a hack project while everyone else is working on important bugs and features, so it becomes a race to the bottom: "0% time".
- Hackathons are oddly named since many are organized as unsustainable sprints (24 hours!), with the assumption that you will forego healthy eating and sleeping. No thank you.

Another problem with all of these approaches is that the limited amount of time constrains the kinds of ideas that you can work on.

## Our hack time

We wanted to unleash the full power and creativity of our team, so at the beginning of June we told everyone that they would have a full two weeks at the end of the month to work on anything that they wanted. There were no rules or guidelines about what to work on or who to work with, but each person was expected to present their work at the end in whatever format made sense (e.g. demo, slides, charts, etc.).

Everyone started to get excited thinking about what they were going to work on! Some people teamed up while others were very secretive until the final day of demos.

## Finished projects

At the end of the two weeks we gathered the team for everyone to share their work. Demos went smoothly because there was plenty of time to prepare and many projects pre-recorded videos. Most importantly, everyone was happy that they were able to work on something that they were passionate about, and the results showed it!

A few projects were so exciting that they transitioned into full projects and shipped in our 2.10 release:

- Geoffrey created [inline symbol search](/blog/sourcegraph-2-10#inline-symbol-typeahead-on-github).
- Isaac and Felix made [tooltips in our browser extensions better](/blog/sourcegraph-2-10#smoother-tooltips-everywhere).
- Geoffrey and I integrated mermaid.js into the Sourcegraph browser extensions so [Mermaid diagrams embedded in markdown are rendered when viewing them on GitHub](/blog/sourcegraph-2-10#experimental-mermaidjs-rendering-on-github).

Other projects focused on internal improvements:

- Felix improved our end-to-end testing strategy to help us deliver even more high quality releases in the future.
- Noemi and Seebs created a developer lingo guide for a non-developer audience.

## Continuing projects

There are even more promising and ambitious projects that we are continuing to work on.

One of these (experimental) projects is [Sourcegraph extension API](https://docs.sourcegraph.com/extensions). Sourcegraph extensions are like editor extensions, but they will work everywhere developers look at code (GitHub code files and PRs, other code hosts, Sourcegraph, multiple editors, etc.). This means important information can be available everywhere developers read or write code.

Chris, Farhan, and Quinn have already built a few working Sourcegraph extensions, including one that decorates code with coverage information provided by [Codecov](https://codecov.io/) when viewing code on Sourcegraph or on GitHub via [Sourcegraph for your browser](https://about.sourcegraph.com/product/browser).

Codecov Sourcegraph extension on GitHub:
![codecov-github](//images.ctfassets.net/le3mxztn6yoo/5aQ98mlQLKQcOOOwyMiwaa/3faf82d2a8255e62a050839a1b896f78/codecov-github2.png)

Codecov Sourcegraph extension on Sourcegraph:
![codecov-sourcegraph2](//images.ctfassets.net/le3mxztn6yoo/6H4l9b4tPyUqW2wiouA0Wq/6d6c7a4d32dd344c4c32b245c48f52f1/codecov-sourcegraph2.png)

We’ll share more about Sourcegraph extensions soon, and we are excited to see what kinds of extensions other developers will create.

## Conclusion

Given how successful this hack time was, we plan for our future hack times to maintain the following properties:

- **Substantial.** One or two weeks infrequently is much better than one or two days frequently.
- **Concurrent.** Everyone on the team should be hacking at the same time.
- **Unpredictable.** Existing work should not be "saved" for hack time; hack time is for working on new ideas.

If you are interested in building the next generation of developer tools with us, [let’s talk](https://about.sourcegraph.com/jobs/)!
