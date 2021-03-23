---
title: Introducing Batch Changes
description: Automate and track large-scale code changes across all of your repositories and code hosts.
author: Erica Lindberg
authorUrl: https://about.sourcegraph.com/company/team#erica-lindberg-she-her
publishDate: 2021-03-24T10:00-07:00
tags: [blog]
slug: the-blog-slug
heroImage: /blog/thumbnail-image.jpg
socialImage: Use to set large social image i.e.  https://about.sourcegraph.com/blog/sourcegraph-social-img.png
published: true
---

As code grows in volume and complexity and sprints get sprint-ier, good intentions to refactor old code and upgrade dependencies fall by the wayside. Maintaining and updating code becomes harder, tech debt mounts, and next thing you know you’re trying to maintain the homegrown tool you built to maintain your codebase. Meanwhile, you’re dealing with 100x more code compared to 10 years ago, and the pressure to deliver high quality, fast, and secure code is greater than ever. 

For example, many platform teams find themselves maintaining old versions of internal components because they are reused in hundreds of downstream repos, and it is hard to get the owner to upgrade. Upgrading is painful because it requires manual work from the repository owner, so it’s not likely to be done anytime soon. Over the years, small issues like this accumulate.

This could be a likely situation for just about any codebase. Now think, if changing code in a *single* repository is difficult, add multiple, hundreds, or even thousands of repositories across multiple code hosts and a day’s, week’s, or even month’s-long rabbit hole starts to take shape. Then, once the code is identified, each repository owner has to make the changes manually in their respective repositories—duplicating the effort and time required to make the change—and then the changes need to be tracked across all of those repositories. This is most often done in spreadsheets via manual labor. And, in the event of a critical security update, every hour that goes by increases risk. 

For the [platform team at Workiva](http://about.sourcegraph.com/case-studies/workiva-automates-large-scale-code-changes/), the difference between manually updating dozens of repositories when a new library was released, versus automating it with a batch change, was an 80% reduction in the time it took to implement the change. “We fell into the habit of letting tech debt accumulate to the point where all of a sudden, we’d have to bring everything to a screeching halt and do nothing for a month or a sprint or even a quarter and clean up the tech debt in that certain area,” said Trent Grover, Director of Architecture at Workiva. “The easier the tooling, the faster we can release breaking changes.” 

> *“The easier the tooling, the faster we can release breaking changes.”*

> *- Trent Grover, Director of Architecture, Workiva*

The anxiety over managing and updating code is real, and at Sourcegraph, we aim to change that. In the same way that Sourcegraph Universal Code Search enables you to quickly explore and understand all of your code, [Sourcegraph Batch Changes](https://about.sourcegraph.com/batch-changes) enables development teams to automate and more easily manage large-scale code changes. With Batch Changes, teams can keep their code up to date, fix critical security issues, and pay down technical debt across all their repositories, minus the stress and anxiety. 

> *“The ability to automate downstream changes that Sourcegraph Batch Changes provides is a key capability for reducing the hidden burden of updates pushed across teams and enabling us to increase our engineering velocity.”* 

> *- Jared Hodge, Sr. Manager Developer Experience, Indeed*

## Batch Changes explained
Batch Changes is an automated way to make large-scale code changes across all repositories and code hosts. Batch Changes allows you to easily find the code you want to change, write a declarative spec file describing what the changes should look like, and run a script of your choosing to create changesets on your code hosts. Then, it provides a simple user interface to easily track your pull or merge requests and to manage all of the changesets through checks and code reviews until each change is merged. Instead of managing changes manually with spreadsheets, Batch Changes automates the process of tracking changeset lifecycle status from the creation of a pull request to merged code.  

### How it works: Declarative changes, intuitive tracking
When a change needs to be made, you can search for the occurrences of code to change,  specify the change once—calling any tool that changes code—and apply it everywhere. This not only brings visibility to the magnitude and impact of the change, but automates the process of making the change. 

<div class="container my-4 video-embed embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/$eOmiyXIWTCw?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=0&amp;rel=0" allowfullscreen="" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" frameborder="0"></iframe>
</div>


1. **Search your code:** Find all occurrences of the code you want to change using Sourcegraph Universal Code Search.
2. **Programmatically define changes:** Create a declarative specification file to find all the code you need to modify, and preview the changes before creating the change within the code host.  You can use any code change tool such as sed, Comby or your own refactoring tool to generate the changes.
3. **Execute specifications:** Apply and run changes anywhere via a lightweight CLI. Execute changes via your machine, on the cloud, or in CI. 
4. **Track your changes:** Track changeset lifecycle statuses across all repositories and code hosts in a dashboard via the Sourcegraph UI. 
5. **Review changes:** See a changeset burndown chart for an at-a-glance view of each campaign, centralize the review process, and ensure that each pull request is successful with built-in CI and review tracking. 

Create your first batch change with up to 5 changesets in 10 minutes using our [Quickstart for Batch Changes guide](https://docs.sourcegraph.com/batch_changes/quickstart). You’ll need a local Sourcegraph Enterprise instance, running the latest version ([Sourcegraph 3.26](https://docs.sourcegraph.com/admin/updates)), set up with a few repositories to get started. 

To create more than 5 changesets, [contact us](http://about.sourcegraph.com/contact/request-batch-changes-demo) to add Batch Changes to your instance. 

## Batch Changes in practice
Batch Changes can be used in a number of scenarios:

1. Modify container configurations.  
2. Update an API and its function calls or replace libraries. 
3. Edit configuration files to make changes like altering CI steps, migrating versions, or changing base images.
4. Ship upgrades or breaking changes across all internal repositories. 
5. Refactor code to replace insecure functions, or update vulnerable packages.

Batch Changes brings visibility and automation to codebase-wide changes. It removes the repetitive work of manually executing code change tools over many repositories, and tracking progress in spreadsheets. With Batch Changes, large-scale code changes become much easier to manage which promotes a healthier, more up-to-date codebase. 

**Try it for yourself! Enterprise users can create batch changes with up to 5 changesets for free using our [Quickstart for Batch Changes guide](https://docs.sourcegraph.com/batch_changes/quickstart).**

**[Request a demo](http://about.sourcegraph.com/contact/request-batch-changes-demo) and learn more about adding Sourcegraph Batch Changes to your Sourcegraph instance.**
