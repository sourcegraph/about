---
title: "Measuring the impact of AI coding tools"
authors:
  - name: Raman Sharma
    url: https://x.com/rasharm_
publishDate: 2024-11-05T10:00-01:00
description: "There is little doubt of AI’s promise to transform software development, but how can engineering teams measure the ROI of these tools? We explore ways to answer this question through productivity metrics, business impact, and developer satisfaction."
tags: [blog]
slug: "measuring-the-impact-of-ai-coding-tools"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/measuring-the-impact-of-ai-coding-tools/measuring-impact-og.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/measuring-the-impact-of-ai-coding-tools/measuring-impact-og.png
--- 

Every software engineering team is looking at AI tools for coding. In a [Stack Overflow survey](https://survey.stackoverflow.co/2024/ai/#sentiment-and-usage), 76% of developers reported they are either using or planning to use AI tools for development. However, with the pace of change in this space, many are already disillusioned with the tools they adopted during the early hype. There is little doubt of AI’s promise to transform software development. But how can engineering teams measure the ROI of these tools in a way that aligns with their priorities? These are just some of the questions we are getting from folks who are considering AI coding tools. So, we want to share a few things we learned from our work with some of the [most sophisticated software engineering teams](https://sourcegraph.com/case-studies) in the world.

## Measuring the value of developer tools

Before measuring return on investment (ROI), we must think about what the said investment is supposed to accomplish. If the goal of any software development organization is to **efficiently** build and operate software that **delivers value,** then any tooling investment should help achieve this goal. Questions that need to be answered:

1. Does the tool help **increase developer productivity** - can your team do the same set of things faster?
2. Does the tool help **increase your impact** - can your team deliver incremental customer value by finding more leverage from the same effort?

Software engineering is, by design, an innovative pursuit. While convenient, thinking of developer workflows as factory operations is faulty. Whether software developers are happy using their tools and want to come back to them repeatedly is also an important factor in determining whether a tool has been successful in a given setup. Therefore, the third important question in determining the value of a tool is:

3. Does the tool help increase **developer satisfaction** - will your team feel happier with the tool than without it? For most engineering teams, “happiness” is directly related to productivity and impact, but we cannot discount the qualitative, non-measurable aspect of being delighted with a tool.

Any ROI measurement should encompass productivity, impact, *and* satisfaction.

## How does this change for AI developer tools?

Traditionally, much of the conversation around developer productivity has been in an area referred to as the outer loop of software development—the set of activities that are more about planning, building, integrating, deploying, monitoring, etc. Traditional productivity measurement methods like [DORA](https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment) (DevOps Research and Assessment) fall short due to this limited scope (focus mainly on deployment & operations efficiency, and not on coding). DORA can also lead to metrics manipulation and doesn’t account for the team makeup (size, skills, tenure) or project complexity.

The inner loop of software development - the part that deals with reading, understanding, and writing code - hasn’t traditionally received a ton of attention from developer productivity experts. This diagram from [a developer’s thoughts on developer productivity](https://sourcegraph.com/blog/developer-productivity-thoughts) is too good not to reproduce here:

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/measuring-the-impact-of-ai-coding-tools/dev-loops.png"
  alt="Developer inner and outer loops"
/>

Despite not having established methods to measure productivity of the inner loop, it is the area of software development that has seen the most transformation from the AI revolution. This is because LLMs are especially good at analyzing and understanding patterns within source code. Not covering the inner loop in measurement is definitely a miss.

Another popular framework, [SPACE](https://queue.acm.org/detail.cfm?id=3454124) (Satisfaction and well-being, Performance, Activity, Communication and collaboration, and Efficiency and flow), attempts to take a more “holistic approach” to developer productivity. However, too many of the metrics are qualitative and subjective, making it hard to measure and quantify impact consistently.

## Productivity: the measurable kind

Not all engineering teams have the same priorities or level of maturity, especially when it comes to the ability to measure things or the consistency and repeatability of processes. We have seen teams on all sides of the spectrum.

- There are organizations where software engineering is not just a function/discipline but a way of life. These organizations follow the ethos of hiring incredibly smart problem solvers as software engineers, and therefore, they will trust them and not burden them with assembly-line-like productivity metrics. Many of these companies happen to be some of the most successful software companies in the history of our planet.
- We also see organizations that believe that rigorous instrumentation and measurement are the only way to improve the software development process. Many of these companies are also world leaders in their areas and run amazing operations powered by their custom-built software.

However, from our direct work with many such customers, we have learned that most engineering teams want to be cognizant of the following productivity metrics:

1. Time saved
2. Output produced

Any of these metrics, when taken together with other inputs like the size of the team, average developer compensation, etc., can provide reasonable estimates of the corresponding monetary impact. However, this write-up doesn’t go into those details, understanding fully well that all engineering teams are different.

### Productivity measure #1: Time saved

The “time saved” metric is the easiest starting point for evaluating the ROI of AI coding assistants but also the most basic because it lacks the context of **your** business, teams, and workflows. Every AI coding assistant on the market has established their own flavor of time savings metric based on the tool’s usage. It is easy to estimate how much time a developer would have spent simply “typing” the code that was generated by the tool. That essentially is the time saved. You can also look at these savings at a more granular level based on the type of interaction that produced the code and analyze where the savings are coming from:

* Accepting auto-complete suggestions
* Applying chat responses
* Executing pre-built prompts

This time savings can easily be measured for an individual and, when aggregated across a team, can provide team-level savings as well.

This measurement is very basic because it has the potential to both underestimate and overestimate the amount of savings:

* Since it uses purely “code typing time” as the alternative to the AI coding assistant, it can massively underestimate the amount of time a developer would have had to spend just gathering context before writing code - reading docs, browsing code, coordinating with colleagues, etc. Many developers report that this “context gathering” is often the more time-consuming part of building software, and once this is done, the actual code writing is not that cumbersome.
* The AI coding assistant has no context about a developer’s actual intentions or what business problems they are trying to solve. Its measurements are based on observing the micro-task that the developer actually ended up performing. Whether that task was the one they should have been performing, to begin with, or whether the code produced will create more work is never known.

Regardless, it is a good starting point because it is easy to understand. The team at [1Password](https://sourcegraph.com/case-studies/1password-increases-productivity-in-a-distributed-codebase) found that using Sourcegraph saved every developer 7 hours per month.

    > Sometimes, if the right thing to do—like writing unit tests—is too hard, people won't do it. Cody's value is that it lets developers be their best selves while relieving the burden of repetitive tasks.

<div align="center">
  — James Griffin-Allwood, Staff Developer at 1Password
</div>

### Productivity measure #2: Output produced

The second set of metrics is related to the “output” produced. In this case, the output is code. How many lines of code were inserted into the editor? How much of the inserted code actually persisted? Just like the time savings metrics, even code output produced can be easily measured by user interaction types - autocompletes, chats, prompts, etc.- and is possible to measure both at an individual and team level.

These are useful metrics to think about and go one step further than just time savings. However, even here, there is potential for incorrect conclusions:

* Since the measurement here is just lines of code, without any knowledge of the business problem the code was meant to solve, this could mean teams start optimizing for output and not outcomes
* Similarly, a very intense session of Chat-Oriented Programming ([CHOP](https://sourcegraph.com/blog/chat-oriented-programming-in-action)) could produce very few lines of optimal code that provide a massive unlock for the business. However, going by this metric, it wouldn’t be seen as a successful output.

## Impact: harder to measure but tied to what truly matters

The next set of metrics are those aligned with the intended outcomes of the individual, team, or organization. How does an individual think of impact? What does success look like for them in their current project? Similarly, what is the intended outcome of a team project? By measuring the utility of a tool in the context of a business outcome (individual or team), its true value can be understood. While the actual "business outcome" could be different for different people, we have seen the following examples:

- Metrics-based outcomes (within project constraints of quality, schedule, and scope): 
    - \# of unit tests created
    - \# of incidents resolved
    - \# of new features implemented, etc
- Project outcomes:
    - Entire projects being delivered quickly
    - Increased test coverage for an entire codebase
    - Organization-level workflows made faster
    - Successful migration from one language version to another, one framework to another, etc

These are harder to measure because most organizations do not have the luxury of comparing how a project would go with or without a tool. A better approach is to choose a smaller representative project and run a tight pilot or A/B test with a small number of developers who can perform the type of tasks that they might perform in the actual project—both with and without the tool.

An underappreciated (but potentially revolutionary) aspect of using AI in coding is that it has unlocked many projects that in the past were considered too risky or too cumbersome to even take on. Legacy code, too many dependencies, lack of documentation, or lack of relevant skills in the current team have often dissuaded teams from taking on potentially impactful projects. Now, many such projects are not only being initiated but also successfully completed. Such code transformations can sometimes produce even more business impact than adding a new product feature because they provide the foundation for more people to be able to innovate in this codebase.

[Leidos](https://sourcegraph.com/case-studies/cody-leidos-maximizing-efficiency-heightened-security-ai-race) often takes on customer projects related to the modernization and migration of legacy code. For example, migrating from Oracle to PostgreSQL once took a full sprint, if not longer. Cody got them 80% to 90% of the way there within minutes.

    > I really can't express how blown away I am with Cody. I can't go back to... whatever it was like before. I use Cody every day, all day long. No matter what I write, Cody helps improve it and it goes way beyond coding in some specific language, you can make Cody explain things to you every step of the way. Really, this is it, the future of coding.

<div align="center">
  — Leidos Engineer
</div>

## What about developer satisfaction?

Almost all engineers and engineering leaders report that “developer satisfaction” is important to them.

* Are the developers actually using the tool and want to come back to it? 
* Do they **feel** like the tool is helping them be in the flow and do their job better?
* What % of their time are they spending on things that they find exciting and rewarding? 

Most developers believe a flow experience involves spending time coding (and not information gathering). In other words, the IDE is the flow zone. Engineers at [Qualtrics](https://sourcegraph.com/case-studies/qualtrics-speeds-up-unit-tests-and-code-understanding-with-cody) report having to leave their IDE to find information on the web 28% less often when using Cody, and they can understand code 25% faster.

    > One of the most daunting things as a junior engineer is working on a large, existing codebase. There is always a ton of domain knowledge about that code that's restricted to the people who wrote it, no matter how well it's documented. There are always nuances that only the code authors know. But if developers know how to prompt Cody, Cody can find context and explain the code to them.

<div align="center">
  — Brendan Doyle, Senior Software Engineer at Qualtrics
</div>

Developer satisfaction, often based on self-reported data, is qualitative. However, it is still useful to run internal surveys among the tool's actual users to keep track of developer sentiment, discover qualitative insights about actual use case scenarios, and identify training needs for your teams.

## Summary

Measuring the ROI of AI coding assistants is not trivial. You need to consider what your real business objectives are, whether the data gathering for ROI calculations is through the tool or your own custom measurements, and how mature your team operations are. However, given the promise of AI coding assistants, several smart engineering leaders are willing to dive deep and find out for themselves. If you happen to be one of them, we would love to hear from you and help you with your exploration. Please feel free to sign up for our [enterprise trial](https://sourcegraph.com/enterprise-trial-offer), in which our team of experts will guide you through the measurement process.