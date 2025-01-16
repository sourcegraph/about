---
title: Introducing Batch Changes
description: Learn how to automate and track large-scale code changes across all of your repositories and code hosts with Sourcegraph Batch Changes.
authors:
  - name: Sourcegraph
publishDate: 2021-03-24T10:00-07:00
tags: [blog, product, batch changes]
slug: introducing-batch-changes
published: true
---

As codebases grow older, bigger, and more complex, making codebase-wide changes becomes harder. Configuration files, boilerplate code, and code patterns are often re-used in dozens or even hundreds of repos. Changing them at the scale of the codebase requires a huge amount of work and coordination. But the ability to make large-scale change is needed to keep things clean, move fast and stay nimble, or respond to new practices.

For example, many platform teams find themselves maintaining old versions of internal components because they are reused in hundreds of repos, and it is hard to get the owner to upgrade because upgrading would require manual work. Over the years, small issues like this accumulate.

Making big or small codebase-wide changes requires a lot of manual work, and takes time. Changing something as simple as a few lines of boilerplate code in an organization could require days or weeks. It requires identifying all occurrences of the code pattern, sometimes across thousands of repositories. Then, once the repositories are identified, each repository owner has to make the change. All of this has to be tracked and coordinated across many teams, and more often than not, this is done in clumsy spreadsheets. This approach tends to be a waste of time and effort, and many non-urgent changes end up being postponed and accumulate over time. In the event that a critical security change has to be done, every hour that goes by increases risk.

For the [platform team at Workiva](http://about.sourcegraph.com/case-studies/workiva-automates-large-scale-code-changes/), the difference between manually updating dozens of repositories when a new library was released, versus automating it with a batch change, was an 80% reduction in the time it took to implement the change. “We fell into the habit of letting tech debt accumulate to the point where all of a sudden, we'd have to bring everything to a screeching halt and do nothing for a month or a sprint or even a quarter and clean up the tech debt in that certain area,” said Trent Grover, Director of Architecture at Workiva. “The easier the tooling, the faster we can release breaking changes.”

> _“The easier the tooling, the faster we can release breaking changes.”_ > _- Trent Grover, Director of Architecture, Workiva_

This is a difficult problem, and at Sourcegraph, we aim to change that. In the same way that Sourcegraph Universal Code Search enables you to quickly explore and understand all of your code, [Sourcegraph Batch Changes](https://about.sourcegraph.com/batch-changes) enables development teams to automate and more easily manage large-scale code changes. With Batch Changes, teams can keep their code up to date, fix critical security issues, and pay down technical debt across all their repositories, minus the manual work and spreadhseets.

> _“The ability to automate downstream changes that Sourcegraph Batch Changes provides is a key capability for reducing the hidden burden of updates pushed across teams and enabling us to increase our engineering velocity.”_ > _- Jared Hodge, Sr. Manager Developer Experience, Indeed_

## Batch Changes explained

Batch Changes offers a way to define and execute large-scale code changes across all repositories and code hosts. Batch Changes allows you to easily find the code you want to change, and write a declarative spec file describing how to change the code, and what changesets (a more generic term for pull requests and merge requests) should look like on the code hosts. Then, it provides a simple user interface to easily track your changesets and manage them until they get merged.

### How it works: declarative changes

When a change needs to be made, you can search for the occurrences of code to change, specify the change once—using any tool that can change code—and apply it everywhere. You can then preview what the change will look like across all of the repositories. This not only automates the process of first creating the change and then opening the changeset on the codehost, but it also brings more visibility on the status of a large scale change over time.

<div className="container my-4 video-embed embed-responsive embed-responsive-16by9">
    <iframe className="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/eOmiyXIWTCw?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=0&amp;rel=0" allowFullScreen="" allow="accelerometer; autoPlay; encrypted-media; gyroscope; picture-in-picture"frameBorder="0"></iframe>
</div>

1. **Search your code:** Find all occurrences of the code you want to change using Sourcegraph Universal Code Search.
2. **Programmatically define changes:** Create a declarative specification file to find all the code you need to modify and define steps to change the code. You can use any tool to change code, such as sed, Comby, or your own refactoring tool.
3. **Execute specifications:** Execute, preview, and apply changes anywhere via a CLI, which can run on your computer, CI or any other machine.
4. **Track your changes:** Track changeset lifecycle across all repositories and code hosts in a dashboard via the Sourcegraph UI.

Create your first batch change with up to 5 changesets in 10 minutes using our [Quickstart for Batch Changes guide](https://docs.sourcegraph.com/batch_changes/quickstart). You'll need a local Sourcegraph Enterprise instance, running the latest version ([Sourcegraph 3.26](https://docs.sourcegraph.com/admin/updates)), set up with a few repositories to get started.

To create more than 5 changesets, [contact us](http://about.sourcegraph.com/contact/request-batch-changes-demo) to add Batch Changes to your instance.

## Batch Changes in practice

Batch Changes can be used in a number of scenarios:

1. Modify container configurations by changing `Dockerfile`s.
2. Update an API and its callers or replace entire libraries.
3. Edit configuration files to make changes like altering CI steps, migrating versions, or changing base images.
4. Ship upgrades or breaking changes across all internal repositories.
5. Refactor code to replace insecure functions, or update vulnerable packages.

Batch Changes brings visibility and automation to codebase-wide changes. It removes the repetitive work of manually executing code change tools over many repositories and tracking progress in spreadsheets. With Batch Changes, large-scale code changes become much easier to manage, which promotes a healthier, more up-to-date codebase.

**Try it for yourself! Enterprise users can create batch changes with up to 5 changesets for free using our [Quickstart for Batch Changes guide](https://docs.sourcegraph.com/batch_changes/quickstart).**

**[Request a demo](http://about.sourcegraph.com/contact/request-batch-changes-demo) and learn more about adding Sourcegraph Batch Changes to your Sourcegraph instance.**
