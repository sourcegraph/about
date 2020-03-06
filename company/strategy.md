# Sourcegraph master plan

Everything we do stems from our [purpose](#purpose), to help *everyone* build software. We'll accomplish that over the next 30 years by following our strategy:

- 30 years
  - [Purpose](#purpose)
  - [Mission](#mission)
  - [Values](#values)
  - [Big Code](#big-code)
- 3 years
  - [Principles](#principles)
  - [Assumptions](#assumptions)
- 1 year
  - [1-year vision](#1-year-vision)
  - [Product direction](#product-direction)
  - [OKRs](#okrs)

## Purpose

We want to make it so **everyone can code**. A world where everyone, not just ~0.1% of the world population, can code will see faster and more broadly beneficial technological progress.

### Background

For thousands of years after writing was invented, most people remained illiterate. Universal literacy seemed unlikely. Is it really possible that every human would be capable of reading and writing? How would literacy benefit the average person? As we now know, every human is capable of and benefits immensely from literacy.

More recently, around 1976, just 0.2% of the world's population used computers. Two tiny companies sought to make computing universal: Apple's vision then was to create a "bicycle for the mind" in the form of a computer, and Microsoft wanted to put a computer "on every desk and in every home". Though it seemed unlikely at the time, as we now know, everyone is capable of and benefits immensely from having a computer (or a phone).

Today, only about 0.1% of the world's population can code. That tiny group has built software that runs the modern world and improves the lives of billions of people. Think of the possibilities if everyone was able to code. All around the world, more people would be able to solve problems and improve their lives by building software. We don't know exactly what these billions of coders will create, but we know that this will bring faster and more broadly beneficial technological progress.

## Mission

To make it so [everyone can code](#purpose), we will create tools, networks, and incentives for coding at ever-larger scale.

## [Values](values.md)

Our [values](values.md) are the principles we want to uphold as we work toward our mission.

## Big Code

We're living in [the era of Big Code](https://thenewstack.io/universal-code-search-a-new-search-tech-for-the-era-of-big-code/): the amount, complexity, and value of code is growing quickly.

Tools and practices that were conceived before the era of Big Code will break down, leaving codebases that are huge but complex and brittle. Any change might shatter the whole thing. Developers become hesitant about making changes. Productivity slows, communication bottlenecks grow, deadlines are missed, and quality declines.

This is a new game. Companies that master this will thrive. Companies that don't will fail.

## Vision

### 1-year vision {#1-year-vision}

> Problem statement: In large and complex codebases ([Big Code](#big-code)), it's hard for developers to discover, understand, and fix code.

Sourcegraph is the one place to find and fix things across all code.

- Sourcegraph knows most everything that can be known about your code (code structure, Git metadata, build, code hosts, runtime metrics, code reviews, docs, issues, project management, etc.).
- It's easy to find and use this information on Sourcegraph itself and in your editor, code host, and code reviews.
- When you need to find something in or about your code (which happens many times per day), you usually start on Sourcegraph.
- To spread adoption of a new dev tool/practice or make a large-scale code change, you use Sourcegraph because you trust everyone uses it.

## Principles

- Sourcegraph is universal code search, not universal "everything" search. Any additional data types in our search need to be relevant to the software development workflow.
- We're a mass-market company and must maintain broad appeal. We want every developer, not just a specific niche audience, to use Sourcegraph.
  - Any given developer will only pick one code search tool to use. Any given company will standardize on a single code search tool. Therefore, to avoid fragmentation, Sourcegraph should be not only *much* better than the alternatives, but also *not worse* in any significant way.
  - We won't adopt polarizing public stances that would divide our audience.
- Our product should strive to be fundamentally privacy-respecting and secure. This means that users don't need to trust us to verify that their data is private and secure.
- Build on-ramps in our product to turn more people into frequent users, instead of building the product *for* infrequent users (which is a self-fulfilling prophecy).
- We eventually want to be a platform that ties together all of the tools developers use.
  - Other developer tools are partners, not competitors.
  - This entails designing more extensibility into our product (and documenting it more thoroughly) than what's needed today, in order to make it easy for other people to build on.
- Sourcegraph provides greater value the larger a software team. We are building not just for individual developers, but for development teams. We believe software development is increasingly a multiplayer game.

## Assumptions

- Sufficiently good code search will be useful to every developer many times per day (on average). It may take a while to convert any specific person into a frequent code search power user, but it will happen eventually.
- Code search that is *exclusively* for public/open-source code is not actually that useful because most people spend most of their time working on their organization's internal code.

## Pricing

- Trying Sourcegraph (to prove it works and is valuable) is free and (if you want) self-service.
- If your organization is getting value from Sourcegraph with a lot of users, our [pricing](https://about.sourcegraph.com/pricing) is designed so that we earn money from you. This lets us invest in improving our product.
- All users at a given customer are on the same pricing tier. This is simpler than having users at different tiers and encourages us to build things that are broadly valuable.

## [Product direction](../direction/index.md)

Our [product direction](../direction/index.md) describes what we plan to build to make this vision real.

## [OKRs (goals)](okrs/index.md) {#okrs}

Our [OKRs (goals)](okrs/index.md) describe what each of us is doing this quarter to work toward our mission.
