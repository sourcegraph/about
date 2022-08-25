---
title: '5 key elements of successful monolith-to-microservices migrations'
description: "At Sourcegraph, we've helped enable some of the best engineering organizations in the world to perform major architectural migrations. In this post, we present five lessons, five elements of a successful monolith to microservices migration."
authors:
  - name: Beyang Liu
    url: https://twitter.com/beyang
publishDate: 2022-04-28T18:00+02:00
tags: [blog]
slug: monolith-microservices-migration
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/monolith-microservices/image5.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/monolith-microservices/image5.png
published: true
---

Ah, microservices.

In the grand Hegelian tradition of programmer dialectics—React vs. Angular, Emacs vs. Vim, Tabs vs. Spaces—the great debate of Microservices vs. Monoliths rages on.

Generally speaking, "doing microservices" at inception is premature abstraction. Therefore, most microservice architectures emerge through migrations from a monolithic architecture. This migration is often a make-or-break moment for a software organization. Migrate well and you'll unlock the ability to maintain velocity as your app serves more and more users. Migrate poorly and your entire engineering team could be stuck in stasis for months or years, bogged down in a never-ending slog that blocks critical features and hamstrings your ability to scale.

At Sourcegraph, we've had the privilege of working with some of the best engineering organizations in the world and have enabled major architectural migrations across many different industries. Here, we share a common template we've discovered after witnessing what works and what doesn't.

Here are five critical elements to a successful, large-scale architectural migration:

1. Designate a single owner and identify all the stakeholders
2. Define what success is and isn't
3. Alternate between big non-breaking changes and small breaking ones
4. Automate with the human in the loop
5. Track progress

### 1. Designate a single owner and identify all stakeholders

Identify a single team or person who will be responsible for driving the migration. A common choice is the leader of the developer experience team. This person must understand that the task at hand is not just a technical one, but one of stakeholder alignment and communication. They will be pushing changes that impact the work of many teams. It's important they are able and willing to help those teams understand the importance the change and enlist their cooperation in the effort.

Tactically, it's important for the owner to identify all the stakeholders whose input is necessary as early as possible. This will ensure those stakeholders will support the effort as something they helped define, instead of something that feels like it’s being imposed on them without their input. The stakeholders list should include all the owners of the code that will need to be modified. The "find-references" feature of your editor or code browser is your friend in this endeavor!

![Using Sourcegraph to find locations in code that will need to change](https://storage.googleapis.com/sourcegraph-assets/blog/monolith-microservices/image6.gif)

<figcaption>Find all the locations in code that will need to change and identify the owners of those locations. Then, make a list or spreadsheet of owners whose approval you'll need.</figcaption>

### 2. Define success

Lay out a clear vision for what the end state of the migration looks like and tie this to the goals you want to achieve. A lot of big migrations drag on because the original objectives were not clearly defined. The migration may also be abandoned if it has dragged on and it remains unclear how far away the finish line is.

Defining the end state also helps you justify the bigger changes that are necessary to make a real difference. Avoid the inertia of incrementalism by picking a desired end state that reflects your true architectural goals. For example, if your goal is to modularize the major components of a monolith, some pretty big changes will be necessary and you're unlikely to reach your goal if you limit yourself to local, conservative changes.

Here is [a template](https://docs.google.com/document/d/13mVkvJWCIOaPizTOZtOp6EYuWQGqVaMVY1NXEfURo0E/edit) derived from a few examples of planning docs for large-scale migrations.

![Sample architecture diagram](https://storage.googleapis.com/sourcegraph-assets/blog/monolith-microservices/image5.png)

<figcaption>A sample architecture diagram showing the high-level change being implemented.</figcaption>
<br />

Share this document with the list of stakeholders you created in step 1. Feedback serves two purposes:

1. Feedback will improve the proposal by calling out difficulties one person alone couldn't foresee.
2. Feedback will strengthen stakeholder buy-in needed to follow through on changes across the codebase.

### 3. Alternate between big non-breaking and small breaking changes

Once you've decided on the end state, break things down into more manageable, intermediate milestones. In your roadmap, avoid making changes that are big, breaking, and irreversible. These kinds of changes can disrupt development or bring down prod for an extended period of time.

A common pattern is to alternate between big changes that preserve backcompat and small, atomic (and ideally reversible) ones that break it. Many efforts will cycle through the following steps:

1. Build the new service without changing the existing system.
2. Introduce a conditional switch between the old and new code paths. (This may involve introducing a new interface or feature toggle, or it might just be a simple `if` statement.)
3. Make the small, backcompat-breaking change. (For example, switch the interface implementation or flip the feature toggle.) Ideally, you've designed this so that it's easy to rollback if something goes wrong.
4. Clean up the old code that's no longer used.

This cycle may repeat once or dozens of times over the course of the migration. It's not uncommon for a full migration to take years from start to finish if the monolith is big and complex enough. If that's the case, you'll definitely want shorter-term, intermediate milestones that leave both dev and prod in a working state.

![Feature flags](https://storage.googleapis.com/sourcegraph-assets/blog/monolith-microservices/image1.png)

<figcaption>Feature flags are a common way to make breaking changes small and atomic.</figcaption>

### 4. Automate with a human in the loop

Steps 2 (add conditional switch) and 4 (clean up old code) from the migration cycle often involve making a simple refactor at a very large scale across the codebase. You'll want to automate these steps because it will otherwise become a tedious "death by a thousand patches."

First, try making the necessary change in one or two places manually to get a sense of what needs to be automated.

Then, scale that change across the entire codebase.

It's important the tool you use permits feedback and adjustments along the way, because there will invariably be edge cases you didn't foresee.

![Automating code changes](https://storage.googleapis.com/sourcegraph-assets/blog/monolith-microservices/image4.gif)

<figcaption>In a microservices migration, it’s common to need to make simple changes to numerous places in the code. Automation can help with an otherwise tedious process, but it’s important to keep the human in the loop because the changes can sometimes be subtly different or can require conversations with the teams that own the code being updated.</figcaption>
<br />

Here are the tools that we've seen used to shepherd such large-scale migrations:

- Ad hoc scripts that clone down the affected repositories and apply the change using a command-line code modification tool like sed, codemod, or Comby.
- In-house tools such as Google's [Rosie](https://cacm.acm.org/magazines/2016/7/204032-why-google-stores-billions-of-lines-of-code-in-a-single-repository/fulltext).
- Sourcegraph [Batch Changes](https://sourcegraph.com/batch-changes).

### 5. Track progress

Finally, track progress toward your end goal. Engineering leaders, developers working in the codebase, and stakeholders from Product, Sales, and other departments will want to know how the migration is progressing, especially if it’s blocking other product development efforts they care about.

You will want to track progress at two levels:

1. Progress of every intermediate milestone, each of which may involve many code reviews that all of the teams affected by the changeset must approve.
2. Progress toward the overall end goal, which may play out over the course of months or years. If you don’t clearly define this progress meter, you will waste a lot of time explaining and communicating progress to increasingly skeptical stakeholders.

![Burndown chart](https://storage.googleapis.com/sourcegraph-assets/blog/monolith-microservices/image3.gif)

<figcaption>One way to track the progress of a migration underway is through a burndown chart.</figcaption>

![Burndown chart with multiple milestones](https://storage.googleapis.com/sourcegraph-assets/blog/monolith-microservices/image2.gif)

<figcaption>A burndown chart tracks the progress of a single change campaign, but many microservices migrations will be broken down into multiple milestones. To track overall progress toward the target architecture, it can be helpful to plot the occurrence of patterns in the code that indicate the use of both the old and new architecture.</figcaption>

### It's not about the journey

When it comes to big refactors and migrations, it really is about defining your destination and getting there as quickly as possible—with buy-in from all stakeholders. The good news is that many organizations have already undertaken such migrations. These 5 elements for successful monolith-to-microservices migrations come from the collective experiences of some of the best engineering organizations we've worked with. There has clearly been [a lot of pain](https://twitter.com/beyang/status/1517569661650362368). Let's learn from it.

#### About the author

_Beyang Liu is the CTO and co-founder of Sourcegraph, the code intelligence platform for dev teams and making coding more accessible to more people. Prior to Sourcegraph, Beyang was a software engineer at Palantir Technologies, where he developed new data analysis software for Fortune 500 companies. Beyang studied Computer Science at Stanford, where he published research in probabilistic graphical models and computer vision at the Stanford AI Lab._

### More posts like this

- [An ex-Googler's guide to dev tools](https://about.sourcegraph.com/blog/ex-googler-guide-dev-tools/)
- [How we migrated entirely to CSS Modules using codemods and Sourcegraph Code Insights](https://about.sourcegraph.com/blog/migrating-to-css-modules-with-codemods-and-code-insights/)
- [Broken database migrations: How we finally fixed an embarrassing problem](https://about.sourcegraph.com/blog/introducing-migrator-service/)
