---
title: '8 ways to implement better onboarding'
externalTitle: How to improve software engineer onboarding
description: 'Engineering leaders and engineers share their most effective approaches to help new hires onboard faster and build confidence.'
externalDescription: 'Worried you’re onboarding software engineers to an overwhelming codebase? Learn how to onboard better from leading engineers.'
authors:
  - name: Beyang Liu
    url: https://twitter.com/beyang
  - name: Patricia No
publishDate: 2022-03-09T18:00+02:00
tags: [blog, remote]
slug: better-onboarding-how-to-prevent-codebase-overwhelm
heroImage: /blog/better-onboarding-prevent-codebase-overwhelm.png
socialImage: https://sourcegraphstatic.com/better-onboarding-prevent-codebase-overwhelm.png
published: false
---

![Better onboarding video game graphic](/blog/better-onboarding-prevent-codebase-overwhelm.png)

A newly hired developer arrives, eager to get started on exploring the team’s codebase and systems–and to make a positive impact. If only it were that easy. Increasingly complex codebases make software engineering onboarding a jumbled gauntlet for developers and managers alike, but it doesn’t have to feel that way.

We spoke to engineering leaders and engineers to learn their secrets for successful, repeatable, and scalable onboarding.

## 1. Get every department involved

To implement an organization-wide, holistic onboarding process, you need to design a plan that involves every department—from HR and IT on up to the software org and individual teams. Everyone through the chain contributes to a great onboarding experience.

[Adam Harvey](https://handbook.sourcegraph.com/company/team#adam-harvey), a developer at Sourcegraph observes, “The philosophy is that we’re all on one team, which requires buy-in from everyone to put in the time and effort to support each other. Our new hires are told by the CEO that we’ll drop everything to [answer] any questions they have. This [policy] sets a strong signal across the company that it’s not just platitudes, but a priority.”

## 2. Make it safe to ask for help

You’ll want to set an open tone at the outset. Doing so from the very beginning of onboarding is key to creating a culture that makes it safe to ask for help. If you maintain that tone and open communication throughout a new developer’s ramp-up and tenure, you’ll be setting the tone for the team's culture. “Culture becomes important. You want the space to make mistakes when you’re coming into a new environment," Adam says. "You want a combination of psychological safety–knowing that your team won’t throw you under the bus–and technical safety, the guardrails to know that you won’t make a huge mistake for a customer.”

Notes [Marek Zaluski](https://handbook.sourcegraph.com/company/team#marek-zaluski), another software engineer at Sourcegraph, “The biggest challenge [for new devs] is getting familiar with what’s already there. The bigger [the codebase] is, the more difficult it is.”

When questions inevitably arise with a complex codebase, it helps to have a culture that welcomes questions. “Part of psychological safety is knowing that asking questions is encouraged,” adds Marek. “You can start to feel isolated if you’re worried about bothering your fellow engineers by asking questions that seem too simple.”

Our managers encourage developers to seek help sooner rather than later by setting a 15-minute timer while working on code. When those 15 minutes are up, the developer can quickly assess their progress and acknowledge code that’s presenting a challenge before overwhelm hits. If the developer hits a roadblock, the culture is designed to encourage them to consult a teammate to solve the problem. This helps the developer get back on track faster than if they were puzzling over something alone. This practice is encouraged long after the onboarding period ends, and is useful even for senior engineers.

Recalls Marek, “In the past, I’ve been in situations where I’m thrown into a new project and expected to figure it out. It’s stressful. The bigger the codebase, the more anxiety I have. It’s hard to even know where to start.”
Ultimately, to make onboarding work, you need to include cultural onboarding. If you do find a new developer struggling, help them find them their way–and then use what you learn from your interactions to revisit your onboarding procedures and culture and find ways to improve things for the next hire.

## 3. Establish regular check-ins

A big part of fostering a supportive environment is scheduling check-ins with your developers. Such scheduled meetings have the dual benefit of helping managers uncover areas that devs find troublesome, and helping developers work through the blockages that keep them from progressing with their code.

By keeping a consistent and open channel of communication and feedback, developers don’t have to expend energy wondering if they’re living up to expectations.

## 4. Have a single source of truth

As you scale up your engineering team, it becomes ever more important for everyone to be on the same page. Literally. You need to consolidate your resources to provide a single source of truth shared with the entire team–especially new hires.

A centralized system with clear documentation helps distribute knowledge equally. “Once you’re knowledgeable about a codebase, it’s difficult to put yourself in the shoes of a new developer–[who’s first figuring out] where to start, identifying interdependencies, connections and managing libraries,” says Marek.

The solution: Maintain and update a central resource to create a single source of truth. By consolidating your knowledge base, you’ll have everything a new developer needs to know in a single place–such as a handbook, a wiki, or a project management tool. That, in turn, lets developers swiftly learn, communicate, and execute against the team’s goals.

A consolidated resource also helps the entire engineering team navigate the complexity and volume of the org’s codebase, while reducing team anxiety over not knowing where to find everything. Sometimes being lost isn’t just a discovery problem, but a social one. If you asked a group of engineers which databases to use, you might get multiple answers. Once you have documentation that outlines when to use specific databases, everyone gets the answer from the same source.

Clear communications and standardized guidance together build a transparent and safe environment for new developers to find answers so they can fully participate and contribute.

## 5. Share high-level context

High-level context in the software engineering org represents the hardest knowledge to transfer. It’s difficult to document because understanding the overall architecture means understanding how the pieces fit together and knowing what the core assumptions and tension points are. Even if you do a reasonable job with the documentation, chances are the high-level context will fall out of date because of the rapid pace of changes.
However, it’s important to transfer such knowledge, including historical knowledge. Otherwise you can get into a position where no one is left on the team who feels confident making big changes.

Having a source of truth that captures both code changes and high-level discussions about the motivation behind changes is important because it preserves the “why.” This information will be useful for new members of the team who may need to understand the context at some point down the road.

“This exact scenario played out [once] for a new engineer, who loved context and understanding the history behind decisions,” recalls [Jean du Plessis](https://handbook.sourcegraph.com/team/#jean-du-plessis), a director of engineering at Sourcegraph. “We call these [Requests for Comments (RFCs)](https://handbook.sourcegraph.com/communication/rfcs) and put them together when we want to introduce any changes or make architectural decisions. This way we can refer to this document–which even predates my time–and [have the] context to these decisions. Even the people who worked on it at the time eventually forget about it.”

Another trick [Limor Bergman](https://www.linkedin.com/in/limorbergman/), former Director of Engineering at Digital Ocean and current Director of Mentorship at PowerToFly, uses is to have new hires update the docs as they experience things for themselves. For example, she suggests putting new hires into an on-call rotation to get them oriented, since diagnosing and addressing outages will require them to understand the system end to end. During this on-call period, when the developer is not resolving an issue, they should be updating the docs based on the last thing they just resolved.

## 6. Standardize resources and tools

Ensuring new developers are clear on what tools are available helps them familiarize themselves with a complex codebase and coding conventions more quickly. And it eliminates the need to start from scratch every time.

As Marek notes, “Sometimes when you’re reaching for a particular tool or library, you don’t even know if you have something in-house already or if you need to look externally. Code search makes it easier to look through your list of repositories to find what others have done.”

Introduce new hires to the tools and processes that are specific to the team. For example, demonstrate how to set up the team’s development environment, and introduce new hires to what needs to happen to ship that first bug fix or feature enhancement. Such info may not reside in a department-wide resource, even if it should. After all, the more information that is codified for all team members to see, the better it is for the entire team.

<Alert>
<span>Read about how robust, universal code search<a href = "/case-studies/convoy-improved-on-boarding"> enables developers at Convoy to onboard faster by quickly getting to know the repository structure, tracking down where code lives, and self-servicing during investigations</a>.</span>
</Alert>

## 7. Keep the bigger picture in sight

When a new developer comes on board, they’ll go through some of the same rituals as any other hire, including handling paperwork with HR and getting a computer with email and chat accounts from IT. The engineering team may handle the team-specific shared collaboration tools, including issue tracker, code review, and CI/CD.

All of those steps are important table-setters to jumpstart a new hire in the organization. But onboarding can extend beyond these basics through a multi-tiered process that provides a layered, holistic view of the business. By providing such a holistic view, new hires can better understand the big picture of what the company does and how the various organizations interact with each other to serve the needs and goals of the business. This way a new hire understands their role as a piece of the greater puzzle that it is the business.

<Alert>
<span>Keep reading: <a href = "/blog/ex-googler-guide-dev-tools">An ex-Googler’s guide to dev tools</a></span>
</Alert>

For example, Limor suggests having department heads give recurring presentations to new hires about how each department operates. This was a tactic employed during her time at Digital Ocean.

At Sourcegraph, the onboarding process includes a buddy system where we pair people who usually aren’t in the same department together. This helps managers gauge their fully remote team dynamic and how it fits with the rest of the company.

## 8. Customize your onboarding for each employee

Great software engineer onboarding takes the human element into account. This often requires tailoring the experience to a new hire’s specific strengths, experience, and personality.

“As a new engineer onboarding, you’re a little bit of an adventurer,” says Jean. “You’re going into uncharted territory. What you want to do as a manager is allow them some freedom to explore because that process leads to learning and discovery, but you also want to set them up for success.”

What might that look like? According to Jean, tailoring the experience incorporates elements of what we’ve outlined in points one through seven. “You want to give them a map—that could be your architecture documents. You want to make sure they have the right gear.” And, you’d want to be sure the developer knows that someone on the team has their back, such as “an onboarding buddy who gives them guidance along the way. So they can call a friend if they really get stuck.”

Standardization and automation should take place for the common things, mostly in the form of checklists and documentation. But it’s also important to leave room for a new hire to ask for tailored help from a more experienced teammate.

Some developers do better with written instructions, while others learn better when face-to-face, talking over video chat with an experienced human. Still others may feel intimidated to ask questions in a wide forum such as Slack, but they’ll thrive with more one-on-one time. The wide variance means managers need to pay attention to employees and tailor their approach accordingly.

The engineering manager’s initiative plays a crucial role in tailoring onboarding to the employee. Jean recalls one engineering manager who spent an hour daily with a new hire to answer high-level questions. This hands-on, open communication led to one of the fastest onboardings he has seen, where the new engineer was able to drive a significant change in their first month on the job.

Ryan Djurovich, a DevOps Manager at Xero, Australia’s largest accounting software company, takes a different tactic. He puts time on the calendar for a one-on-one, but leaves the option for individuals to cancel at their discretion. “Some people opt for a lot of sessions and come with a list of questions, and that’s how they prefer to learn. Others prefer to find information asynchronously through [services like] Slack or Confluence.”

Experience level also affects how new hires onboard. Junior engineers generally need more guidance and also reassurance about what is a “normal pace.” Typically senior engineers will direct their own onboarding after getting through the standard introductions. This makes it all the more important to tailor the process to each new hire so you set the right pace and level of guidance.

---

There's a lot more to successful developer onboarding than setting up a local dev environment. The value of cohesive onboarding practices becomes especially clear as an organization scales up its developer team, enabling your developers to get up to speed quickly while building confidence and knowledge around your codebase.

_This post was originally published in April 2020. It has been revised and updated as of March 9, 2022._

## About the author

_Beyang Liu is the CTO and co-founder of Sourcegraph. Beyang studied Computer Science at Stanford, where he published research in probabilistic graphical models and computer vision at the Stanford AI Lab. You can chat with Beyang on Twitter [@beyang](https://twitter.com/beyang) or our community [Discord](https://discord.com/invite/vqsBW8m5Y8)._

## More posts like this

- [How we built our software engineering career framework](https://about.sourcegraph.com/blog/software-engineer-career-ladder/)
- [Improving code display: A look at 17 developer workspaces](https://about.sourcegraph.com/blog/workspaces-of-sourcegraph/)
