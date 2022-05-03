---
title: 'A dev's thoughts on developer productivity'
description: 'Developers are systems thinkers and yet, most measures of developer productivity are metrics-based, instead of systems-based. In this post, Sourcegraph co-founder and CTO Beyang Liu presents five charts that visualize what really matters for developer productivity.'
author: Beyang Liu
authorUrl: https://twitter.com/beyang
publishDate: 2022-06-28T18:00+02:00
tags: [blog]
slug: developer-productivity
heroImage: //images.ctfassets.net/le3mxztn6yoo/t4Qpcq5kA0AYM24Ws4mOk/4edf5502a936bbec90c262fa00355aed/sourcegraph-mark.png
socialImage:
published: true
---

It's interesting how few diagrams you use see in discussions about "developer productivity".

There are many acronyms (such as DORA), plenty of magic metrics, and long lists of supposed best practices. These may focus on one or two aspects of software development, but none tries to model the behavior of the system as a whole. That's a bit surprising, isn't it? Programmers are usually eager to call out the dangers of local optimization. And so much of what we do is building and modeling systems, which often involves drawing boxes and arrows that describe how those systems work. Why aren't we drawing any that describe how we, ourselves, work? \

I wouldn't call myself an expert in developer productivity. I'm just a developer who is perhaps a little wary of what the "experts" have had to say on the topic of how I supposedly work or should be working. But it's one thing to criticize, and another to offer a viable alternative. Such an alternative should start from first principles and direct observations. From that starting point, it should incorporate the wisdom of direct practitioners with strategies discovered from years working directly with code.

Here is an attempt to do that.

### I. Inner loop and outer loop

![alt_text](images/image1.png 'image_tooltip')

<figcaption>_Caption: Hi, I'm the SDLC. You may remember me from such developer marketing campaigns as Shift Left, DORA the DevOps Explorer, and Agile Waterfalls.</figcaption>

The common picture of the software development process is the SDLC. A mainstay of DevOps marketing campaigns, the SDLC does a good job of highlighting the many stages involved in bringing code to production. The SDLC, however—perhaps betraying its origins as a DevOps marketing device—leaves the most critical step in software development undefined: how the code, itself, is understood and written.

When I think of my own work as a developer, there isn't just one big loop, as pictured in the SDLC, but two nested loops:

- The outer loop maps roughly to the SDLC and happens at the level of sprints, projects, or releases.
- The inner one is the read-write-run loop that happens many times per day when you're in the thick of understanding code, writing code, running tests, and repeating until you're happy with the code.

![alt_text](images/image2.png 'image_tooltip')

You enter the inner loop whenever you get "close to the source" in the development process. This happens at multiple points in the outer loop, such as when you’re:

- Onboarding to the code you're about to change.
- Authoring a new feature or bug fix.
- Fixing a test that broke in CI.
- Reviewing a patch or responding to a review.
- Debugging what went wrong in a failed deployment.
- Remediating an incident in production.

It's important to talk about the inner loop. It's the heart of software creation. If we don't talk about it, then our leaders will treat it as if it doesn't matter.

### II. Flow state

Inside the inner loop is the golden state: [Flow](https://stackoverflow.blog/2018/09/10/developer-flow-state-and-its-impact-on-productivity/). Flow state is that state of focus and productivity that you attain when you're feeling inspired and motivated. It’s when you have "paged in" all the necessary context and can actually have fun. It's when you're _coding at the speed of thought_. The ideal path to Flow is represented in this first graph:

![alt_text](images/image3.png 'image_tooltip')

Reaching flow state accelerates the inner loop. But flow state takes uninterrupted time to reach. Mental context switches take you out of it. The most common complaint I hear from developers struggling to get things done is that there are too many interruptions. Many devs' day-to-day sadly looks more like this graph:

![alt_text](images/image4.png 'image_tooltip')

Flow-destroying interruptions can be internal or external.

- An external context switch is triggered by an external factor, like a scheduled meeting or an impromptu question from a teammate.
- An internal context switch is triggered by a necessary side quest, such as the need to understand how to use a library, the need to set up a tool, or the need to resolve a blocking issue.

I suspect that every programmer has experienced the 1st graph at some point in their lives, probably early enough to suck them into programming—that feeling of flow can be quite the gateway drug. But many get stuck in the second graph when they code professionally, and that is a great source of developer misery and lost productivity.

The above charts reveal a question we should ponder before proceeding: **What exactly is "productivity", the y-axis in our chart above?** Many developers can describe how it _feels_, but can we arrive at a more precise definition? Lines of code? Number of commits? Some synthetic metric derived from version control history? All these seem like poor measures of developer productivity.

Software development is at its core an innovative endeavor. Unlike the manufacture of physical things, the goal is not to produce something that has been produced before. The goal is to produce _new and useful_ knowledge. The atomic unit of innovation is iteration—the cycling of the inner loop.

The atomic unit of developer productivity ought then to be one iteration of the inner loop. The appropriate unit is not code quantity, but iteration frequency. We might call this unit of quantity **developer hertz**.

### III. Progress is a vector sum in codespace

In the physical world, velocity has two components: direction and speed. Analogously, developer velocity can also be broken down into a direction and a magnitude.

![alt_text](images/image5.png 'image_tooltip')

The speed component indicates how quickly you're cycling through the inner loop. The more you reach flow state, the faster you iterate, and the sooner you’re able to ship your new feature or patch.

The directional component reflects the technical direction taken—whether you use an ORM or embedded SQL, an open-source library or something built from scratch, a battle-tested framework or a newfangled one. Picking a good direction might provide a critical shortcut. Picking a bad direction might mean you have to retrace your steps later.

Great direction-setting means making the choices that get an end-to-end system up and running as quickly as possible. Getting a system set up quickly de-risks the overall project. Reaching a shippable state well before the appointed deadline means you can make further improvements in the time remaining. It's helpful to view the destination not as a single point, but as a zone of acceptable outcomes. Get into the acceptable zone first and then improve your position.

### IV. Team velocity is the low-variance sum of high-variance individuals

So far, our pictures have treated software development as a solo endeavor. But most software is made in teams. Teamwork leads to more robust and consistent progress. As the old adage says, "If you want to go fast, go alone. If you want to go far, go together."

Individual velocity tends to be choppy. There are inevitably days spent mostly onboarding to unfamiliar code or where external factors interrupt regularly scheduled programming. But individual bumps smooth out when you add them together.

![alt_text](images/image6.png 'image_tooltip')

If a team suffers from a sustained period of low productivity, it's worthwhile to ask what factor caused a correlated drop in productivity across all members of the team. Sometimes, there's a natural explanation—perhaps a new quarterly planning process took up an inordinate amount of time. And sometimes there is a more serious cause—morale issues, technical debt, or a lack of clear goals and priorities.

### V. Concurrency is not parallelism

It's generally believed that the productivity of a software team scales sub-linearly—and eventually decreases—with the size of the team. There are analogs here to parallel computing and [Amdahl's law](https://en.wikipedia.org/wiki/Amdahl%27s_law). If you double the number of CPUs on a machine, programs may get faster, but almost never twice as fast.

In computers, the factors that slow down parallelization are CPU context switching and how work is broken into independently processable chunks. In software teams, the primary factors are communication overhead, the dependency structure of the work, domain expertise, and the speed of context acquisition.

You can draw this out in a picture where you've broken down a project into different deliverables. The finished product is a pyramid of sorts, where the blocks at the bottom have to be lain before the ones on top:

![alt_text](images/image7.png 'image_tooltip')

The colors map to different areas of domain expertise. If you are a developer with expertise in multiple areas, you could build the entire project yourself. Or you could delegate the task to two other developers who each have expertise in a single area:

![alt_text](images/image8.png 'image_tooltip')

The two developers have the advantage that they can build separate blocks in parallel, but their parallelism is constrained by serial dependencies (some blocks must be laid before others), the friction of onboarding to unfamiliar parts of the code, and communication overhead.

It is wishful thinking that the project will be completed twice as fast by two developers as by one. Indeed, even net speedup is no guarantee. Here's an [anecdote from Netflix](https://hbr.org/2014/01/how-netflix-reinvented-hr) where reducing team size resulted in net productivity gain. But some amount of net speedup is well within reach if there is good division of labor and team rapport.

Each added person, however, increases the complexity of the coordination task and most teams see vastly diminishing returns with each additional person. This is why many organizations spend the big bucks to hire and retain the best developers. They also invest in tooling that enables greater individual productivity and helps with the coordination of software development at scale.

### If we don't talk about it, someone else will

Earlier, I said that if developers didn't talk about these elements of our productivity, then our organizations wouldn't realize they matter.

Even worse, however, is someone else coming along and convincing our organizations that other things matter more. We might find ourselves crammed into a framework that views software creation not as a journey of discovery through codespace, but as an unimaginative widget factory. Rather than value the inner loop, where all code is understood or created, we might be asked to fixate on the more mechanistic outer loop. What good is "change failure rate" if you can't even jump-to-def across your code? Rather than invest in quality tools that improve our lives as engineers, we might be compelled toward the classic Mythical Man Month fallacy that leads to more people, more code, and more problems.

It is to our benefit, and to the benefit of our industry and society at large, to advance mental models that reflect the reality of our work and honor its essential creativity.

In this post, I've sketched out some pictures that resonate with one developer—me. What about you? When you think about your own creative process and your team’s processes, what pictures come to mind? Let us know in the comments on Reddit or Twitter.

### More posts like this

- [5 key elements of successful monolith-to-microservices migrations](https://about.sourcegraph.com/blog/monolith-microservices-migration/)
- [An ex-Googler's guide to dev tools](https://about.sourcegraph.com/blog/ex-googler-guide-dev-tools/)
- [How we migrated entirely to CSS Modules using codemods and Sourcegraph Code Insights](https://about.sourcegraph.com/blog/migrating-to-css-modules-with-codemods-and-code-insights/)
