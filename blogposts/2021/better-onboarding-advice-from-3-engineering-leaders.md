---
title: 'Better onboarding: Here’s how the best engineering leaders do it'
author: Beyang Liu
authorUrl: 
description: 'Building robust software that runs at scale is a team effort. Here are 3 engineering leaders on how they use both human and automated processes to set their growing teams up for success.'
heroImage: /blog/better-onboarding-advice-from-engineering-leaders.gif
socialImage: https://sourcegraphstatic.com/blog/better-onboarding-tips-from-engineering-leaders-still.png
publishDate: 2021-05-27T18:00-07:00
tags: [blog]
slug: better-onboarding-advice-from-engineering-leaders
published: true
---

![Better onboarding video game graphic](/blog/better-onboarding-advice-from-engineering-leaders.gif)

_This is the second post in our Better Onboarding series. Check out the first, "[How to prevent codebase overwhelm](https://about.sourcegraph.com/blog/better-onboarding-how-to-prevent-codebase-overwhelm/)"_.

Growing a software engineering team poses unique challenges. You’re bringing people on board who weren't witness to the evolution of the codebase, or privy to the discussions and debates around critical design decisions. 
They aren't aware of why you added many of the features and logic—some hackier than the rest. 
They may not even be familiar with the general toolset that your team has come to rely on to work efficiently.

Great companies invest a great deal of effort into helping new engineers onboard to their codebases. 
In this post, we'll take a deep dive with engineering leaders from 3 highly reputed engineering organizations to understand how they structure their onboarding, and how they address specific challenges in order to support their new hires and help them ramp up as quickly as possible.

[Limor Bergman](https://www.linkedin.com/in/limorbergman/) is a former Director of Engineering at Digital Ocean, where she led the organizations responsible for Droplets, Kubernetes, Kernel, Performance, Systems, and Orchestration. 
She's now Director of Mentorship at PowerToFly, where she helps women grow their careers.

[Ryan Djurovich](https://www.linkedin.com/in/ryandjurovich/) is a DevOps Manager at Xero, Australia's largest accounting software company. 
He leads the team responsible for developer infrastructure, experience, and tooling.

[Jean du Plessis](https://www.linkedin.com/in/jeandp/) is a Director of Engineering at Sourcegraph, where he leads the Developer Insights organization, which includes the frontend platform, extensibility, code insights, and API docs teams.

The 3 offered their thoughts on the process of onboarding new engineers to the team, revealing some strong parallels as well as some particular areas of emphasis and focus.

## Help new hires see the bigger picture with multi-tiered onboarding

Multi-tiered onboarding provides a layered, holistic view of the organization.

All 3 engineering leaders described a multi-tier onboarding process with steps common across the organization and ones specific to the new hire's immediate team. 
Some things should be standard across the organization: setting up and familiarizing oneself with shared collaboration tools (email, chat, issue tracker, code review, CI/CD) and understanding the "big picture" of what the company does and how the various organizations interact with each other. 
At Digital Ocean, department heads would give recurring presentations attended by every batch of new hires about how each department operated. 

Individual teams should also think about how to onboard new members to the things that are specific to the team, such as setting up the development environment that members of the team use, meeting and establishing relationships with teammates, and understanding what’s necessary to ship that first bug fix or feature enhancement.

## Share high-level context

High-level context is the hardest to transfer. It’s difficult to document, because grokking the overall architecture means understanding how the pieces fit together and knowing what the core assumptions and tension points are. Even if you do a reasonable job with the documentation, chances are it will fall out of date.
However, it's important to transfer such knowledge, including historical knowledge. Otherwise you can get into a position where no one is left on the team who feels confident making big changes, not just small, incremental ones. As Jean said in our conversation, context is king, so don't underestimate the importance of giving people the proper context, because it's better to spend more time upfront to enable people to move much more quickly down the road.

Having a source of truth that captures not just code changes, but high-level discussions about the motivation behind changes is important, because it preserves the "why" for new members of the team who may need to understand it at some point down the road. Jean shared: "This exact scenario played out for a new engineer recently. They love context and understanding the history behind decisions. 
Thankfully, Sourcegraph has this practice of putting [Requests for Comments (RFCs)](https://about.sourcegraph.com/handbook/communication/rfcs) together when we want to introduce any changes or make architectural decisions. 
We were able to refer to this document, which even predates my time, that gave context on these decisions. Because even the people who worked on it at the time eventually forget about it." 

Limor shared that putting new hires into an on-call rotation can also help them get oriented, because diagnosing and addressing outages will require them to understand the system end to end.
During on-call, when they're not resolving an issue, they should be updating the docs based on the last thing they just resolved. 

[Sourcegraph](https://sourcegraph.com/search) and [CodeTour](https://github.com/microsoft/codetour) are both useful tools that enable people to build up their own context in a codebase. 
This helps them acquire more context on their own and ask smarter questions of their teammates. 

## Avoid one-size-fits all onboarding

Good onboarding often requires tailoring the experience to a new hire's specific strengths, experience, and personality. 

> "I think as a new engineer onboarding, you're a little bit of an adventurer; you're going into uncharted territory. 
> What you want to do as a manager is allow them some freedom to explore because that process leads to learning and discovery, but you also want to set them up for success. 
> So you want to give them a map—that could be your architecture documents. You want to make sure they have the right gear, so that could be making sure they have the right software and a laptop and all of that. 
> And you would probably give them a satellite phone as well if they really get stuck out in the wilderness, so they can call for help. 
> That might be the team that is there to support them or an onboarding buddy who gives them guidance along the way. 
> Something that means they can call a friend if they really get stuck." – Jean

Standardization and automation should take place for the common things, mostly in the form of checklists and documentation, but it's also important to leave room for the "satellite phone" so a new hire can call in for help from a more experienced teammate. 
This is especially important in fast-moving companies, because the codebase always moves faster than docs and automation.

You don’t want to waste long-time engineers’ time answering questions that can be linked to a doc, but you must be careful not to reinforce a culture over time where people don't make themselves available to new hires when they *do* need facetime with an experienced human. 
Onboarding Slack channels can help reveal gaps in onboarding knowledge to everyone, but be wary of everyone spending time to address simple questions. 
Some new hires may also feel intimidated to ask questions to a wide forum. 

The engineering manager (EM) plays a crucial role here. Jean said one EM spent an hour daily with a new hire to answer high-level questions. This led to one of the fastest onboardings he has seen, where the new engineer was able to drive a significant change in their first month on the job.

COVID also made it much easier *not* to have 1-1 conversations with people, so EMs may want to explicitly schedule extra 1-1 time with new hires. Ryan puts this time on the calendar, but leaves people the option to cancel at their discretion:

> "Sometimes we set the expectation that we're going to meet every time. But at other times it's, 'Hey, this is us making our time available to you, but you choose if you want to have this or not.' 
> Some people have opted for a lot of sessions, and come with a list of questions, and that's how they prefer to learn. 
> Others prefer to find information asynchronously through Slack or Confluence or whatnot."

Experience level also affects how new hires onboard. Junior engineers likely need more guidance and also reassurance about what is a "normal pace" of onboarding. 
That's not to discount the benefit of reassurance for senior engineers, as well, but it's customary to expect a senior engineer starts directing their own onboarding after getting through the standard stuff.

## Offer emotional support

Even senior engineers can suffer from impostor syndrome. Nearly everyone feels intimidated when diving into a new large codebase. 
Finding the right balance between past experience and new territory is crucial, and organizations that value this should go out of their way to create a welcoming culture and environment.

For new hires, having a marker for "am I living up to expectations" in the first couple of weeks can ease their worries. 
It's often better to err on the side of having an easier onramp, due to all the pitfalls of onboarding. 
This also allows an EM to establish a baseline for how a new hire works and what they're capable of. 
If you overshoot, you'll be unsure if it's a performance issue or if the person just happened to fail due to unreasonably tough circumstances.

Remember, you hired someone because you thought they were excellent. So if they are struggling, you should figure out what might be throwing them off, or revisit your hiring processes if this is happening often. 
It's common for fast-growing startups to experience some churn and attrition, but if this is happening a lot, it's important for someone in the org to be asking these questions and sharing as much learning as they can while respecting individual privacy.

## Embrace continuous onboarding

> "I think most people look at onboarding in the same way we look at education: you go to school, you graduate, and you're done with learning. 
> But the reality is you should never be done with learning. And in the same way, when it comes to onboarding onto codebases and infrastructure and that kind of thing, you should never be done with learning there because those systems aren't in a consistent state; they're evolving over time as the business evolves." – Ryan

Onboarding isn't just something that happens when a developer joins a new company. Our job as developers entails continually diving into new areas of code and learning what makes things tick, so in some sense, we never stop onboarding. This is especially true when we switch teams or start a new project on a very unfamiliar part of the codebase. 
There are some things they already know and don't need to repeat—for example, they likely already have the dev environment set up and have the big picture of the overall company—but there is still a lot of context to acquire. 
Therefore, investing in good onboarding can be an investment in the overall velocity of development, because in some sense, devs are continuously onboarding to new domains of knowledge. 
Onboarding is part of the job description.

## Onboarding now and then

In talking to engineering leaders who have been in the industry for awhile, it becomes apparent that many things have become more complex about software development over time. Software systems are serving more users, dealing with greater volumes of data, and provide more integrations and pieces of functionality than ever before. The amount of code in the world is increasing, and so has the size of the average codebase.
It can sometimes be tempting to yearn for the way things were when codebases were smaller and less interconnected—before the advent of distributed systems, of big complex web applications, of software permeating every company. 
Tooling has gotten much better and more advanced over time, but it feels like it's just catching up with the challenges of developing software at scale. You can no longer just attach a debugger to a single process to figure out what's going on in production, and you can no longer rely on local search to cover all the code that makes up your application.

Having a robust onboarding process, that is both standard/automated and human/supportive is as important as ever. 
This is especially true when you consider how quickly the number of developers in the world is growing. 
If we truly want to create a world where the vast majority of people contribute to the code economy, we are going to do it one onboarding at a time.

A parting tip from Limor: "Don't be ashamed of admitting you don't know or understand something—just ask. 
Some new hires are more proactive go-getters: they ask, they try to reach out. Some people don’t have the confidence and they don’t ask. 
It's okay not to know! It's okay not to understand, especially when you're just starting out. Just go and ask and look for people who can help you."
