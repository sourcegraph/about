# Batch Changes direction

Batch Changes is a tool to find code that needs to be changed and change it at scale by running code. This page outlines the vision, strategy and goals of the Batch Changes team.

#### Quick links

- [Planning board](https://github.com/orgs/sourcegraph/projects/119)
- [Demo video](https://www.youtube.com/watch?v=eOmiyXIWTCw)
- [Batch Changes documentation](https://docs.sourcegraph.com/batch_changes)

# Vision

#### 1 Year vision

> Enterprise **developers** can easily create changesets across many repositories and codehosts, and track them to completion.

#### 3 Year vision

> Developers can easily create changesets across many repositories and codehosts, and track them to completion.

#### 10 year vision

> Automated code changes are a common practice for all developers

## Mission & Strategy

### Mission

We allow developers to focus on changing their code, without having to do any plumbing. We help them drive changesets to completion without having to rely on spreadhseets and painful coordination. Later on, we want to make writing and running code that changes code easier to learn and use.

### Strategy

To deliver our vision, we will:

- First, get adopted by the Sourcegraph customer base, including large enterprises. We will target customers with advanced practices and workflow, and collaborate with them to build a category-defining product that all other companies will use.
- Concurrently, spread usage (MAUs) within our customer, and make sure we deliver on our success metric (changesets merged)
- Then, create low-effort entrypoints into Batch Changes, and allow users unfamiliar with the practice of automating code changes to onboard with a smooth lerning curve. Make onboarding Batch Changes self-service for most users, to help our customers be successfull and prepare for launching on Cloud.
- Then, release Batch Changes on Sourcegraph Cloud, and test and learn how we can serve individuals and smaller teams
- Eventually, address the problem end to end by becoming the go-to place for code change tools and recipes.

# Guiding Principles

## Themes

To deliver the strategy, here are the themes we want to focus on for the next 3 years:

- [Enterprise scale](#enterprise-scale.md)
- [Discovery and onboarding](#discovery-and-onboarding.md)
- [Adoption through low-effort usage patterns](#adoption-through-low-effort-usage-patterns.md)
- [Cloud](cloud.md)
- [Automate common code changes](automate-common-code-changes.md)

### Enterprise scale

Batch Changes is succesfully adopted by very large companies, with 10,000s of repositories. While there is no technical limitation for Batch Changes to run at that scale, there are 2 limitations in practice:

- creating changesesets locally takes too long to be practical for very large scale changes
- in companies with 10,000s of repositories, it is difficult for batch changes maintainers to understand what repositories they should target with a change, and to analyse progress of a batch change.

To drive enterprise success and stickiness, we need to:

- deliver a great experience in creating changesets at enterprise scale (10,000s reposiories), resulting in more users onboarding batch changes.
- allow users to find out where to create batch changes and and understand what to do to get changesets merged in batch changes with 1,000 of changesets. This will increase the number of changesets merged, our key success metric.

### Discovery and onboarding

As we go to market, our install base of customers with Batch Changes enabled is growing. Often, a few teams have adopted Batch Changes in a given company, because they were the one feeling the need at the time. That team is frequently used to making large scale code changes and building automation, so adopting Batch Changes is easier to them and they later on turn into evangelists inside the company. In order to go beyong that beachhead user base within a company, we want to make Batch Changes more discoverable, and self-serve for new users, both as a way to drive adoption within customers and increase value and stickiness, but also to prepare for the self-service model of Batch Changes on Sourcegraph Cloud. We plan to:

- make Batch Changes more discoverable within Sourcegraph
- provide pathways from Search into Batch Changes
- make onboarding self-servive and provide easy ways to get started

### Adoption through low-effort usage patterns

The main use case for Batch Changes today is to automate creating changesets at scale, then tracking them to completion. This requires some time investment from users to get familiar with Batch Changes, and also to write the code required to automate code changes. This is great for the platform engineer persona or users that feel the urgency to adopt, but it does not allow for less committed users to discover Batch Changes and form habits.

We have heard from customers that tracking and managing changesets created _outside_ of batch changes is very valuable as it replaces manual tasks: track the status of changes across many teams, and make sure they get merged. We think there is an opportunity to offer a low-effort entrypoint into Batch Changes by allowing users to import changesets easily, and use the tracking and management functions.

We also think we can deliver our vision by offering a way to change code across repositories, without writing code, and directly form the Sourcegraph navigation UI.

We plan to drive usage (MAUs) by implementing low-effort, high-frequency use cases.

### Cloud

We plan to achieve feature parity on Sourcegraph Cloud, including Batch Changes. Today, the value of Batch Changes increases exponentially with the size of a customer's codebase and team but future efforts our [Adoption through low-effort usage patterns](#adoption-through-low-effort-usage-patterns) effort will change that. Improving [Discovery and onboarding](#discovery-and-onboarding) is a prerequisite for success on Sourcegraph Cloud.

### Automate common code changes

The most frequent question that our customers ask when onboarding Batch Changes is "how do I write code to change x". Writing code to change code is not trivial, and although there are existing tools, most of them fail short either in usability or in expressivity. Having a way to find or write code that automates the change they want is the first critical step in our customer's job to be done, and is a prerequisite for automation.
By solving that problem, we will:

- solve for our customer's job to be done (JTBD) end to end
- position ourselves to address competition specialized in one use case or language
- create defensibility by allowing users to share their code in a registry

This last step is on the critical path for achieving our 10 year vision, but might not be necessary to achieve our 3 year vision.

# Where we are now

Batch Changes has just proved market fit and is adopted by a dozen customers. We see early adoption across a diverse set of companies, from public technology companies to startups with a few dozens engineers ([Batch Changes dashboard](https://sourcegraph.looker.com/dashboards-next/174)).

Over the first year, we have discovered a repeatable playbook: a platform engineering team, sometimes supported by a developer experience team, adopts Batch Changes to make large scale code changes. Most of the use cases are relatively simple code changes, such as updating configuration files across many repositories. Some are more complex, such as changing API call sites to ship a breaking change in an internal library. The common denominator is those changes would take a very long time to create and track to completion using a manual approach. Adopting Batch Changes allows the platform team to automate manual work and save time, as well as transition from a model in which they are asking their customer teams to do some work, to a more proactive where they can propose a change themselves and leave customer teams to review and merge.

We have four main learnings from the first year of Batch Changes:

- The key success metric for customers is the number of changesets opened by Batch Changes that eventually get merged. To be succesfull, we need to increase adoption, and the merge rate of changesets.
- We have discovered that importing, tracking and managing existing changesets that were not created by Batch Changes, is perceived as very useful by customers. However, importing changesets today is clumsy, so this workflow is not very frequently used. We need to improve it and validate the value of this use case. If successfull, it could create a low-friction, low-effort entrypoint into Batch Changes for new users and increase usage frequency and stickiness.
- Batch changes works great for teams with 1,000s repositories, but gets clumsy to use for companies with 10,000s repositories.
- The job to be done (JTBD) for our customers is changing code at a large scale. To do so, they need to automate a code change, apply it, then track it to completion. Batch Changes today is adressing applying and tracking changes, but the first many customers ask is "how do I write code that makes change x". To solve for our customers JTBD, we will need to provide an answer to that question.

# What's next and why

## FY 20222 Q3 goals

## Top customer, support, sales and market issues

## What we're not working on

- **Windows support** ([#24849](https://github.com/sourcegraph/sourcegraph/issues/24849)):  Reliably supporting creating batch changes locally in a windows environment is a very large amount of work, that is incompatible with our plan of delivering server side Batch Changes as fast as possible. Windows support has blocked one [prospect](https://github.com/sourcegraph/customers/issues/3) and slowed down adoption at a [customer](https://github.com/sourcegraph/customers/issues/2), and will likely be important in the Banking and Gaming industry. We plan to address these customers with server side Batch Changes. Server side Batch Changes will bypass the need to run the CLI locally, and instead allow customers to compute the batch changes on the Sourcegraph instance.

- **Adding a permission model**: Batch Changes currently only supports the site-admin and user roles. While finer-grained permissions will likely be needed to reach broad adoption in large companies, we are prioritising on building a product that support [enterprise scale](#enterprise-scale) before adding to the permission model. When server side Batch Changes is in beta and the user experience at a very large scale allows for broad adoption, we can reconsider adding more complex permissions and controle over who uses Batch Changes.

- Education material about code change tools. Helping our customers find and select a code change tool that suits their needs is a very common ask, and something we think could drive adoption. We don’t have bandwidth for this this quarter though.
