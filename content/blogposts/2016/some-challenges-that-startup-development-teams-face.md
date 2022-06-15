---
title: 'How tech startups test, organize, and review their code'
authors:
  - name: Beyang Liu
    url: https://twitter.com/beyang
publishDate: 2016-05-30T00:00-07:00
tags: [
  "blog"
]
slug: some-challenges-that-startup-development-teams-face
heroImage: https://images.ctfassets.net/le3mxztn6yoo/6NmfpJgoV2M4WGiUgkOSao/64a9a5624a47de19271c2f6ec87f59d1/1_QqyAGU4FbfAYLAlhC9FjSw.png
published: true
---



Building software is hard. We hosted a casual dinner here at the [Sourcegraph](https://sourcegraph.com) office in downtown San Francisco for ten developers from leading startup software teams. At the dinner, the teams shared a behind-the-scenes look at their processes (and frustrations): testing, deployment, and code reviews. Here’s what we heard.

### 1\. Reliable testing is a major challenge.

We started off the night by talking about testing. Having fast, reliable, and accurate tests that covered all the functionality of a product was something lots of teams struggle with.

More specifically, front-end testing was a theme that routinely came up as a major pain point throughout the evening. It was clear that front-end testing is still maturing, with most teams saying that they could either have fast tests or reliable and accurate tests, but not both. As one person put it, “if you want accurate tests, you need to use a browser engine, but we’ve also found that it makes tests slow and flaky, and flaky tests are like having no tests at all.” At [Sourcegraph](https://sourcegraph.com), we’ve found that unreliable tests lead to less discipline with checking tests before merging code, which means they get ignored.

So what can you do?

One team just recently started using [Jest](https://facebook.github.io/jest/), and it seems like a very efficient way of writing tests, but they’re still new to the framework. They tried Selenium, but they just couldn’t get the reliability they needed with it. There is no clear winner among front-end testing frameworks, and team leads are faced with experimenting with different frameworks to find what works best for their team.

The conversation then turned to the topic of more mature testing platforms. Lucky for those of us writing command line applications, a robust and reliable testing framework exists to fulfill the needs of one of the dev teams we invited: [Sharness](https://github.com/mlafeldt/sharness). Sharness is a testing framework for writing, running, and analyzing automated tests for command line programs. Sharness forces you to treat your program like a black box, and only tests the expected output for a set of inputs. This means you’re testing your program in the way your users will be using it. Sharness is based off of Git’s test suite, and is one of Git’s keys to reliability and resilience to regressions.

Other teams recommended [Robot Framework](http://robotframework.org/) and [Sauce Labs](https://saucelabs.com/) as good general testing frameworks. These each have their own tradeoffs, but they were overall recommended by this group.

After we finished talking about testing, we discussed different aspects of version control within the group, which leads us to our second insight from the night.

### 2\. There are fundamental problems with using multiple repositories (as opposed to a monorepo).

The biggest problem people had with Git (the most widely used version control system among our guests) was how to handle multiple repositories. Almost everyone at the table separated projects into different Git repositories when their companies were smaller, but faced a common challenge: **as companies get larger, they frequently move as many projects as possible into the same Git mono-repository.** Teams from larger companies found that the task of syncing work between projects became more and more of a headache as the projects and the number of engineers at their company grew.

Keeping all of your projects in the same repository has many downsides, though. We heard horror stories about how long basic Git operations take when Git is operating “at scale” on very large repositories. Facebook uses Mercurial, and they addressed this issue by [modifying it so that it would work on their large code base](https://code.facebook.com/posts/218678814984400/scaling-mercurial-at-facebook/).

Placing your projects in one repository also complicates development on company-sponsored free and open source projects. There's tension between making development as open possible and integrating an open source project with a company’s internal tools and processes. Some teams keep open source projects separate and see synching issues as a price they have to pay for a healthy open source community. Alternatively, some companies do open source development internally and push it out to the community, while others take a hybrid approach of the two styles. There are merits to each approach and it’s important to make the decision with the best interests of the company and its free/open source community in mind.

### 3\. Code review practices are fragmented and tooling is immature.

We discussed different processes for code review and were actually surprised to hear that teams used very different approaches. The two approaches discussed about were patch/trunk-based workflows and branch-based workflows for code review.

#### Patch- and trunk-based code review

Those of you who work on Go will be familiar with the patch or trunk model, which Gerrit uses. The patch model is where reviewers examine diffs, not branches. The trunk model is where contributors make small, frequent commits to the master branch, and each commit is code reviewed. Together, these work well at large companies like Google or Facebook because the sheer size of the codebase makes merging a nightmare, and is traditional to free and open source projects like the Linux kernel.

#### Branch-based code review (such as GitHub’s pull requests)

Other teams used the branch-based pull request workflow, where you make your changes on a forked repository, and then merge a large PR back into the main repository. This works well for smaller teams but some of the people we had over noted how it became harder to avoid “nightmare merge” scenarios as their team increased in size.

#### Code reviews are highly manual and error-prone

Code reviews were largely conducted manually and we heard from many dev team leads that this takes up the majority of their time. We also heard that code reviews were particularly painful for new hires who hadn’t learned the code patterns of the organization yet.

### Projects mentioned

#### Here are some of the projects and tools that were mentioned:

*   [Sharness](https://github.com/mlafeldt/sharness) — Command line application testing.
*   [Jest](https://facebook.github.io/jest/) — Front-end testing framework.
*   [Fig](http://www.fig.sh/install.html) — Tool for easily spinning up Docker containers for development.
*   [Gerrit](https://code.google.com/p/gerrit/) — Go’s code review service.
*   [Chef](https://www.chef.io/chef/) — Deployment automation.
*   [Zabbix](http://www.zabbix.com/) — Application monitoring tool.
*   [Atlassian Bamboo](https://www.atlassian.com/software/bamboo) — Atlassian’s continuous integration and build service.
*   [Robot Framework](http://robotframework.org/) — General testing framework.
*   [Sauce Labs](https://saucelabs.com/) — General testing framework.
*   [Sourcegraph](https://sourcegraph.com/) — A fast, semantic code search and cross-reference engine.
*   [Srclib](https://srclib.org/) — a polyglot code analysis library, built with hackability in mind.

![1*QqyAGU4FbfAYLAlhC9FjSw](//images.contentful.com/le3mxztn6yoo/6NmfpJgoV2M4WGiUgkOSao/64a9a5624a47de19271c2f6ec87f59d1/1_QqyAGU4FbfAYLAlhC9FjSw.png) Photo credit: <a href='https://flic.kr/p/7oemTB'>Derek Gavey</a>

#### About the author

_Beyang Liu is the CTO and co-founder of Sourcegraph. Beyang studied Computer Science at Stanford, where he published research in probabilistic graphical models and computer vision at the Stanford AI Lab. You can chat with Beyang on Twitter [@beyang](https://twitter.com/beyang) or our community [Discord](https://discord.com/invite/vqsBW8m5Y8)._