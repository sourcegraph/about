---
title: 'Announcing Code Insights: analytics for engineering teams to understand and visualize their codebase over time'
authors:
  - name: Quinn Slack
    url: https://twitter.com/sqs
description: 'Devs, engineering managers, and leadership across all companies and industries are looking for a better understanding of their codebase. Code Insights allows you to create insights for anything you can search for in seconds.'
publishDate: 2022-03-10T12:00-00:00
tags: [blog]
slug: announcing-code-insights
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/code-insights-ga-blogs/code-insights-ga-announcement.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/code-insights-ga-blogs/code-insights-ga-announcement.png
---

![Announcing Code Insights](https://storage.googleapis.com/sourcegraph-assets/blog/code-insights-ga-blogs/code-insights-ga-announcement.png)

Devs, engineering managers, and leadership across all companies and industries are looking for a better understanding of their codebase. We're constantly hearing from our customers that they need better tools to do big-picture things like mitigate vulnerabilities, automate key workflows, and reduce repetitive work.

And to do that, they need to answer common questions like: "How's the progress of that migration to &lt;the new GraphQL library|faster tests|the new Terraform version|the new CI tool|AWS RDS|etc.>?"

Unfortunately, the common answer usually looks something like: “&lt;Feeling good!|Going well!|It's going.|Working on it.|Not sure, let me ping other teams.| _¯\_(ツ)_/¯ |\_etc.>" Not exactly helpful or specific.

Sourcegraph's mission has always been to make it so everyone can code, and that begins with making it easier for developers to do their jobs. Today we're shipping [Code Insights](/code-insights/), a new analytics product helping engineering teams be more data-driven in their decisions and communications.

Engineering leaders (and engineers) know that some of their most important work is painful and underappreciated because it feels never-ending and is tough to measure: tasks like migrating off of vulnerable or buggy patterns and keeping everyone on updated versions of infrastructure.

_If you're already using Sourcegraph, upgrade to 3.37 for a limited trial of Code Insights or reach out to your account team to purchase access to the full version. If you're new to Sourcegraph and want to learn more, get in touch to [schedule a demo](/contact/request-code-insights-demo/)._

## What is Code Insights?

Built on Sourcegraph's fast, comprehensive code search, Code Insights allows you to create insights in seconds for anything you can search for. For example, in a world with Code Insights, the answer to the migration question raised above looks like this: "53% done, Logan's team migrated almost 50 projects in the last month, all new projects are using the new way, and we still have 135 projects using the old way."

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/code-insights-ga-blogs/migration-to-new-graphql-ts-types.svg"
  alt="Migration to GraphQL TS types progress"
/>

And this is what the query is based on:

OLD type query:

`patternType:regexp case:yes \*\sas\sGQL`

NEW type query:

`patternType:regexp case:yes /graphql-operations'`

_**For a real-world example, check out this blog post from our Frontend Platform team about their [CSS Modules migration using codemods and Code Insights](/blog/migrating-to-css-modules-with-codemods-and-code-insights/).**_

How we're seeing organizations use Code Insights so far:

- _Track and finish major migrations and refactors_: know when microservice, platform, or language migrations will track to completion and celebrate progress.
- _Unlock dev productivity_: track which areas of the code are lagging on a migration, upgrade, or standard to surface possible follow-up by team or repository.
- _Get the full picture of an incident like log4j_: see how long the vulnerable code has been in a codebase and how quickly it's being removed.
- _Quantify and prioritize tech debt_: track specific code smells like deprecated version useage or linter overrides over time so teams can prioritize fixes to rising problems.
- _Give new teammates a better onboarding experience_: track if code is well documented—does it have readmes, are there CODEOWNERS or customer ownership annotations, are there a lot of TODOs?

What we've heard from organizations using Code Insights in Beta:

- A greater number of meaningful codebase improvements get started _and_ finished.
- Engineers are better recognized and rewarded for important progress that was previously hard to quantify.
- Teams are more motivated to finish projects—visualizing their progress with Code Insights makes that progress more tangible and easier to communicate to leadership and other teams.

## Why we had to build Code Insights

Eng teams and leaders are a sophisticated bunch, but the current toolbox is failing them. There's nothing out there with the visibility they need—because before you can even begin thinking about historical trends, you need a reliably exhaustive code search tool. So what they do today is try to source the information and visibility in a variety of hodgepodge, expensive ways that do not scale:

- Asking a million people to provide status reports (and getting answers like the above)
- Manually running brittle scripts that don't scale
- Building workaround solutions in-house is limited to specific areas and only work if you remember to set them up at the very start of an initiative

See? Lots of time, resources, and frustration, and the outcome just isn't great.

We started exploring Code Insights because our engineering teams faced the same problems. And it was an exciting extension of the Code Search functionality we'd already built: What if you could take anything you could search for and see how the result has changed over time? We know the truth is in the code, so the idea of unleashing this information for engineering teams and their leaders seemed very compelling.

Then, as we built from concept to prototype to Beta to General Availability today, we were consistently surprised by how eager our customers were to start using it. Some of them would even snoop around our GitHub and changelog drafts to find out what features would arrive in each release before we shared the updates. It turns out we weren't the only ones who wanted a tool to finally set KPIs on custom metrics based directly on the source of truth—the code—rather than manual spreadsheets or ad hoc updates.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/code-insights-ga-blogs/code-insights-dashboard.svg"
  alt="Code Insights dashboard"
/>

## Beyond code search

Code Insights is a core part of our growth this year. More than 1.275 million devs used Sourcegraph over the last 12 months, including many of the world's leading engineering teams, like 3/5 FAANG, Reddit, Uber, GE, PayPal, and Dropbox. Those teams first came to Sourcegraph for Code Search, which remains foundational to everything we do as we've expanded our product with Code Insights and [Batch Changes](https://about.sourcegraph.com/blog/introducing-batch-changes/).

As we look ahead in 2022, we're working on more ways to leverage search across Sourcegraph and give developers a more complete understanding of their codebase—so they can secure vulnerabilities, resolve incidents faster, automate key workflows, and ultimately do their best work.

### About the author

_Quinn Slack is the CEO and co-founder of Sourcegraph, the code intelligence platform for dev teams and making coding more accessible to more people. Prior to Sourcegraph, Quinn co-founded Blend Labs, an enterprise technology company dedicated to improving home lending and was an egineer at Palantir, where he created a technology platform to help two of the top five U.S. banks recover from the housing crisis. Quinn has a BS in Computer Science from Stanford, you can chat with him on Twitter [@sqs](https://twitter.com/sqs)._
