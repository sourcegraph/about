---
title: "Our vision for better code ownership"
authors:
  - name: Malo Marrec
    url: https://twitter.com/malomarrec
publishDate: 2023-03-13T10:00-07:00
description: "Code ownership today is broken. We're setting out to fix it."
slug: our-vision-for-code-ownership
tags: [blog]
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/sourcegraph-own-og.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/sourcegraph-own-og.png
---


A few months ago, we started exploring how Sourcegraph could help manage code ownership. For a few years, we'd been hearing from customers that having code ownership integrated within the code intelligence platform would solve many important problems and work hand in hand with Code Search, Batch Changes, and Code Insights. 

But we realized there is a lot more to the space and that code ownership tooling is kinda broken:

- Code ownership in practice is more than just the simplistic/rigid "each file is owned by 1 person." It involves knowing both who's accountable and who's knowledgeable. All of these can mean different things depending on the context, such as incident/security response, large-scale platform changes, capacity planning/staffing, and onboarding/understanding code.
- Code ownership data is hard to use beyond the code review workflows that code hosts provide.
- The tooling available today is insufficient even in the simple/rigid "each file is owned by 1 person" model, doesn't address more nuanced definitions of code ownership, and doesn't integrate deeply into core workflows such as incident response and security. Companies such as Yelp and many others have [built powerful internal tools](https://engineeringblog.yelp.com/2021/01/whose-code-is-it-anyway.html) to address the shortcomings of current tooling.

To paraphrase a customer, *”CODEOWNERS alone is a solution for small companies. There's no enterprise solution that works at scale.”*

### Why code ownership

What is code ownership, and why is it useful? Ownership is commonly defined as the one developer, or team of developers, who is responsible for a part of the codebase. 

When we dug deeper with customers, we realized that code ownership doesn't mean the same thing for everybody. It actually can refer to two distinct things:

- **Accountable party**: “If there's a problem, who shall I contact?”
- **Expert**: “Who knows about this code?”

Code ownership also has wildly different importance for different-sized organizations. In very small organizations with a dozen developers, expertise is trivial to solve because one can easily ask around or take a quick look at the commit history. Accountability is trivial because when there's a problem, it's all hands on deck to fix it.

In larger teams, answering those two questions becomes hard. 

The team grows all the time, and so does the codebase. Ownership needs to [grow with the company](https://betterprogramming.pub/the-underestimated-importance-of-clear-code-ownership-baed758e47b8). People join and leave or move around, so it's virtually impossible to mentally track who you can ask about parts of the code without a code ownership system. Looking at the commit history falls short because the committers might have left or moved, and the history tends to be noisy.

Tools like Sourcegraph help there because you can self-serve answers with Code Search! But that doesn't entirely replace finding someone you can ask about code, especially when onboarding, discovering a new system, or making abstraction or interface changes affecting many downstream teams. Studies have shown that code ownership [correlates with code quality](https://www.microsoft.com/en-us/research/publication/code-ownership-and-software-quality-a-replication-study/), substantiating the intuition that comprehensive code ownership coverage helps with keeping code quality high.

When there's a security vulnerability or an incident, finding who the first responders are is also a big bottleneck. A lot of the companies we talked to often have to resort to blasting large email announcements to find who needs to be involved in fixing things when the incident affects hundreds of repos and no clear owner is identified. This slows down remediation and often leads to resorting to the much-dreaded, always outdated spreadsheet to keep track of who needs to do what. Finally, in large teams, it's very likely someone's unavailable. Who's the next best person? Who can this be escalated to? Those questions are difficult to answer at scale: you can't just press a button and automatically escalate all the items that need attention.

Having a reliable, up-to-date code ownership system for accountable parties and experts answers those challenges. 

We break down use cases for code ownership into 4 themes:
- Incident response and security, and bringing down mean time to remediation
- Productivity, onboarding, and offboarding
- Platform changes
- Capacity planning and staffing
<br/>

### What's broken

Most companies we talked to were either dissatisfied with off-the-shelf tooling or built their own ownership systems over the years. 

Here's an overview of common problems:

- CODEOWNERS is not scalable and takes too much time to maintain, creating a ton of manual work whenever teams change. 
- There's no support for escalation or finding the next best owner.
- Ownership coverage is poor. Many repositories are orphaned, and when there's an incident, it takes manual work to find owners. Leadership wants to get to high ownership coverage for compliance reasons, and it's taking a lot of bandwidth.
- Ownership is not very well integrated into other systems, so it takes manual work or unreliable scripting to glue it all together.
Repo-level ownership is stored in one system, and file-level in CODEOWNERS in another (or not at all), because keeping an exhaustive index of code is costly. (That's good news because that's what Sourcegraph does best!)
- Companies with multiple code hosts don't have a horizontal source of truth for code ownership.
- Lastly, even when ownership data is available, it's not easy to explore and search. A common example of a question that's very hard to answer is “how can I view all the owners of code that use this function?”

We think there's a ton of potential to go a step further and build a radically better ownership system.

  
### Our vision for code ownership

We're introducing a new feature, Sourcegraph Own, that'll radically improve over state of the art. Own will be an evergreen, scalable, automatically updated code ownership source of truth that knows about accountability and expertise and deeply integrates into productivity, incident response, platform changes, and capacity planning workflows.

- **Evergreen coverage**. Own will provide 99% ownership coverage without maintenance work. We'll use machine learning to infer ownership from various signals (commits, team structure, service catalogs, PR review activity) automatically. Own will also support explicitly setting ownership as well.
- **Accountability vs expertise**. Own will be able to answer “Who knows about this code?" and “Who's accountable for this if there's an incident?”
- **High signal to noise**. Own will have great signal to noise.
Devs, teams, stakeholders. Own will know about developers and cross-functional teams that relate to (but don't own) the code, for example, to help with triaging issues.
- **Integrated**. Ownership data will be used to power critical workflows. Own will also know where to notify people and integrate with on-call, ticketing, email, and Slack through Sourcegraph's upcoming Notification Center.
- **Code, metadata, services**. Own will know about more than code and integrate with service catalogs so that Sourcegraph can provide a single pane of glass view into the stack.
- **Scalable and enterprise-ready**. Own will scale to hundreds of thousand of owners and integrate into the most common directory systems through SCIM.
<br/>
  
We're working hard to bring those workflows to life:

- **Incident response and security**. There's a security incident, you search for a vulnerable code pattern, and you raise a ticket or issue (e.g. in Jira) for all impacted repos. The ticket automatically gets assigned to the right owners. If needed, Sourcegraph's integration with on-call systems (e.g. PagerDuty), email, or Slack can notify all owners for immediate action. You can escalate to the next best owner in one click if no action is taken because the owner is out.
- **Platform changes**. You're updating API callsites across many repositories with a batch change and the PRs are too big. You can automatically break them down into smaller PRs by owner. If a PR doesn't get merged, Sourcegraph can automatically notify the next best owner.
- **Capacity planning and staffing**. A leader in your org wants to find a developer with knowledge of x, y and z repository or service. Own can give you the answer. A leader on your org wants to know if any developer is the only point of contact, and hence a single point of failure, for too many systems. Own can tell you that.
- **Productivity, onboarding, offboarding**. You're a newcomer and want to onboard to a codebase. Own gives you a list of folks to talk to and a list of relevant issues to start with or PRs to learn from.

Ultimately, we think that Own will be able to provide a powerful off-the-shelf alternative to the homegrown systems of many enterprise customers. But for customers that want to stick with their internal systems, great! Own can ingest existing ownership data and make it available in the Sourcegraph platform.

The first iteration of Sourcegraph Own will release as an experimental feature in Sourcegraph 5.0. [Join our next Starship event on March 23](http://about.sourcegraph.com/starship) to learn more and be the first to try it. Meanwhile, here's a [sneak peek](https://twitter.com/MaloMarrec/status/1629135017174609922).
