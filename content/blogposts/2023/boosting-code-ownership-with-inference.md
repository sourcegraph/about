---
title: Boosting code ownership with inference
authors:
  - name: Cezary Bartoszuk
    url: https://github.com/cbart
publishDate: 2023-06-28T10:00-07:00
description: 'You can now assign file and repository ownership directly from the Code Search interface. Sourcegraph also provides signals, such as recent contributors, to help you infer file ownership and save time.'
tags: [blog]
slug: 'boosting-code-ownership'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/5.1/boosting-code-ownership.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/5.1/boosting-code-ownership.png
---

Greetings, Code Searchers!

Exciting news is on the horizon. We're proud to announce the Beta launch of our newly enhanced code ownership feature, with the release of Sourcegraph 5.1. The new changes equip our customers with the tools to enhance their ownership dataset, helping them to leverage potent search and navigation functionalities more effectively.

In the previous iteration, we intersected the code graph with owners graph, offering functionality like filtering search results based on ownership with the `file:has.owner` predicate and transforming search results into owners using the `select:file.owners` search term. This enabled multiple use-cases across security, code health and project management.

## Closing the ownership data gap

For organizations to leverage ownership they need data. The owners graph needs to have coverage over the code graph, but building and maintaining ownership is a challenge. Sourcegraph now lets you assign ownership to files and repositories directly from the web interface, so the process of reaching full code ownership is far faster and easier.

To simplify this task, Sourcegraph displays recent contributors and viewers of your codebase. Think of it as your ownership compass, helping you make informed decisions on code owners and saving you time.

## How code ownership can improve your workflows
<br/>

### Case 1: Streamlined project management

Imagine a large-scale software development project with multiple teams. It can get complex, with many repositories and hundreds of impacted files. With Sourcegraph, project drivers can assign specific teams or individuals as owners of specific repositories or directories. This cuts down confusion, increases accountability, and boosts efficiency. Search features can be then used to distribute work more effectively.

### Case 2: Enhanced code review process

Figuring out who can lend the second pair of eyes on your code change can often be a challenge, especially if the code base that is being modified is foreign. Search can be leveraged here as well - owners of search results can be quickly determined with `select:file.owners`.

### Case 3: Fostering collaboration and knowledge sharing

If a developer comes across a piece of code they're not familiar with, Sourcegraph can identify the owner. This promotes collaboration, as developers can reach out to the right person directly to discuss improvements or ask questions.

Ownership inference signals can act as a dynamic knowledge base. It shows authors of recent changes and viewers, helping new joiners or external contributors understand who to consult for different parts of the codebase. It's about building a more connected, efficient, and inclusive coding community.

#### Case 4: Changelog breakdown

In 5.1, ownership filtering with `file:has.owner` supports commits as input. This means that a commit range can be broken down by the owner. This allows teams to manage their release changelog, streamlines auditing and release review.

## Closing thoughts

Code ownership in Sourcegraph can drive better code and more efficient processes, and we believe the improvements in 5.1 will make strong code ownership practices more approachable to teams.

So, gear up to explore and experiment with the power of ownership at your fingertips. We are eagerly waiting for your feedback to continue building tools that meet your needs.

To use the new code ownership features, you'll first need to upgrade your instance to version 5.1, then [see the docs to get started](https://docs.sourcegraph.com/own).
