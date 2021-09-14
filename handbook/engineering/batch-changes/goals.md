# Batch Changes direction

Batch Changes is a tool to dfind code that needs to be changed and change it at scale by running code. This page outlines the vision, strategy and goals of the Batch Changes team.

# Vision

#### 3 Year vision

> Developers can easily create changesets across many repositories and codehosts, and track them to completion.

#### 10 year vision

> Automated code changes are a common practice for all developers

## Mission

We allow developers to focus on changing their code, without having to do any plumbing. We help them drive changesets to completion without having to rely on spreadhseets and painful coordination. Later on, we want to make writing and running code that changes code easier to learn and use.

# 3 year strategy and themes

## Where we are now

Batch Changes has just proved market fit and is adopted by a dozen customers. We see early adoption across a diverse set of companies, from public technology companies to startups with a few dozens engineers.

Over the first year, we have discovered a repetable playbook: a platform engineering team, sometimes supported by a developer experience team, adopts Batch Changes to make large scale code changes. Most of the use cases are relatively simple code changes, such as updating configuration files across many repositories. Some are more complex, such as changing API call sites to ship a breaking change in an internal library. The common denominator is those changes would take a very long time to create and track to completion using a manual approach. Adopting Batch Changes allows the platform team to automate manual work and save time, as well as transition from a model in which they are asking their customer teams to do some work, to a more proactive where they can propose a change themselves and leave customer teams to review and merge.

We see three main learnings from the first year of Batch Changes:

- The key success metric for customers is the number of changesets opened by Batch Changes that eventually get merged. To be succesfull, we need to increase adoption, and the merge rate of changesets.
- We have discovered that importing, tracking and managing existing changesets that were not created by Batch Changes, is perceived as very useful by customers. However, importing changesets today is clumsy, so this workflow is not very frequently used. We need to improve it and validate the value of this use case. If successfull, it could create a low-friction, low-effort entrypoint into Batch Changes for new users and increase usage frequency and stickiness.
- Batch changes works great for teams with 1,000s repositories, but gets clumsy to use for companies with 10,000s repositories.

Here are the themes we want to focus on for the next 3 years:

### Enterprise scale

Batch Changes is succesfully adopted by very large companies, with 10,000s of repositories. While there is no technical limitation for Batch Changes to run at that scale, there are 2 practical limitations:

- Batch changes works great for teams with 1,000s repositories, but gets clumsy to use for companies with 10,000s repositories.
- The key success metric for customers is the number of changesets opened by Batch Changes that eventually get merged. To be succesfull, we need to increase adoption, and the merge rate of changesets.
- We have discovered that importing, tracking and managing existing changesets that were not created by Batch Changes, is perceived as very useful for customers. Importing changesets today is clumsy, so this workflow is not very frequently used. We need to improve it, and validate the value of this use case. If successfull, it could create a loew-friction, low-effort entrypoint into Batch Changes for new users and increase usage frequency and stickiness.

### Enterprise scale

Batch Changes is succesfully adopted by very large companies, with 10,000s of repositories. While there is no technical limitation for Batch Changes to run at that scale, there are 2 limitations in practice:

- creating changesesets locally takes too long to be practical for very large scale changes
- in companies with 10,000s of repositories, it is difficult for batch changes maintainers to understand what repositories they should target with a change, and to analyse progress of a batch change.

To drive enterprise success and stickiness, we need to:

- deliver a great experience in creating changesets at enterprise scale (10,000s reposiories), resulting in more users onboarding batch changes.
- allow users to find out where to create batch changes and and understand what to do to get changesets merged in batch changes with 1,000 of changesets. This will increase the number of changesets merged, our key success metric.

### Discovery and onboarding

### Adoption through low-effort usage patterns

### Cloud

### Automate common code changes

---

<!-- separate page -->

# Q3 2022 Direction

## Q3 2022

## Who are we focusing on?

## Why?

## Top customer issues

## Market update
