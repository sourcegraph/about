---
title: 'Three years at Sourcegraph as a software engineer'
authors:
  - name: Joe Chen
    url: https://twitter.com/jc_unknwon
publishDate: 2022-07-28T10:00-07:00
description: 'Joe Chen is a Sourcegraph Software Engineer and the creator of Gogs, a painless self-hosted Git service. This is his story.”'
tags: [blog]
slug: 'three-years-at-sourcegraph'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/three-years-at-sourcegraph.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/three-years-at-sourcegraph.jpg
---

![](https://storage.googleapis.com/sourcegraph-assets/blog/three-years-at-sourcegraph.jpg)

## My story at Sourcegraph

### An email from a random cool guy

This story starts with an email. It was 2013, and I’d started learning Go by making a website ([recently archived](https://github.com/unknwon/gowalker) after 9 years) to practice my skills, when [sqs](https://github.com/sqs) shot me a message: “Hey, that website you built looks cool, we’re doing something similar at Sourcegraph – we should definitely chat.” (Unfortunately, I’ve lost that email and don’t have the exact wording.)

At the time, I was living in Boston, sitting in my little dark room (which I still love doing), with a minimal social life, and he was on the other side of the country – I didn’t believe we’d actually be able to meet.

(Wait, what about the “cool guy” part? I based this on Quinn’s GitHub profile image at the time – no other CEO uses a fun, nighttime tourist-like picture as their official profile pic.)


### GopherCon 2014

A lot of things happened in 2014, including the first-ever GopherCon. Quinn emailed me that he and his co-founder Beyang were going to the conference, and kindly offered to sponsor my ticket. (PS: I never ended up cashing the check. Everything about it was cool, from the people to the official-sounding “First Republic Bank” – I was a 21-year old getting his first check, before even having a debit card! Now it’s a collector’s item.)

![Gopher Check](https://storage.googleapis.com/sourcegraph-assets/blog/gophercon-check.png)

Apologies – the “collector’s item” status isn’t quite accurate, because I didn’t keep it framed, but it looks more authentic now, doesn’t it? 😄

I had to ask for a leave from my classes because the conference was during the week. My professor didn’t believe that someone would sponsor my ticket, but it didn’t bother me, I was planning to go anyway.

This was my first conference and I saw lots of famous people (not “spoke”, because I hesitated to talk at first, and the moment passed 😂) including Rob Pike, Russ Cox, Andrew Gallant, and others that I knew from their online profiles. This alone was worth the conference ticket.

In addition to Quinn and Beyang, I met [Matt Holt](https://github.com/mholt) (author of [Caddy web server](https://caddyserver.com/) and much more) and [Brian Ketelsen](https://twitter.com/bketelsen) (a GopherCon organizer), who gave me extra Gopher swag for my friends. (This was truly heartwarming ❤️, as I was going alone and didn’t know anyone at the conference.)

Matt asked the now-famous question about whether my GitHub handle had a typo on purpose: “[unknwon](https://github.com/unknwon)” vs “unknown”. My answer has always been, “No, I thought I spelled it correctly.”

Alright, this section is getting too long, there’s more to say, so let’s finish with two short stories:

1. Because I didn’t know anyone, I was basically Quinn and Beyang around. There was a guy who spoke to us for about an hour, and I literally couldn’t understand 99% of what he said. The only thing I remembered (or guessed) was “something, something, serving ZIP files over HTTP”.

2. During the after party, we went to four bars, but because I don’t drink, I ended up having five or six bottles of water 😒. Then a really nice guy stepped in, he couldn’t stand it anymore, and he bought me a coke in the last bar.

### The elevator story

I heard different versions of this story from different people, and I didn’t put much thought into it when the “elevator story” happened.

After we met at GopherCon, I decided to visit the Sourcegraph office in San Francisco before flying back to China for summer vacation. The building had an elevator I’d believe was a century old. It didn’t have buttons to push for certain floors, instead it had a bunch of switches to manually control the direction and speed of the vehicle. (Yeah, it’s a vehicle that goes up and down…) 😳

![Elevator Control](https://storage.googleapis.com/sourcegraph-assets/blog/elevator-control.png)

This is the closest pic I could find to match my fading memory, but you get the point. Long story short, I'm pretty sure I did something wrong (no wonder there were once elevator operators) and the elevator stopped. I was stuck in the middle of nowhere.

I thought “OK, it’s not too bad, at least I have my backpack and laptop, I’ll just get the Wifi password and sit down and do some coding.”

### At 3AM

Fast forward to 2016. I was doing my summer internship with Sourcegraph back in their SF office. I met coworkers I’m still working with today, and it was an enjoyable and amazing experience (though in hindsight I don’t think I accomplished as much as I could have). Everyone was (and still is) trying to help each other, and the supportive environment made me want to join full-time after finishing my master’s degree.

I don’t know if Beyang still remembers what he said during the internship onboarding, “...you could even sleep at the office, if you want”. Which I did, once, full disclosure.

Developers stay up late on countless nights, writing both code and bugs, and that was an average late night. I was coding in the office because I had no other things to do, and the desk and chair in the Airbnb wasn’t as good as the office.

At 3AM, I thought I heard a thief breaking in, and I was almost ready to hide.

Then I saw Quinn walk in.

![WTH](https://storage.googleapis.com/sourcegraph-assets/blog/wth-joe-chen.png)

We didn’t talk or make eye-contact. I think he was deep in thought, and walked straight to his desk to start coding, judging by the typing rhythm on the keyboard. (And in case you’re curious, we’ve also never discussed that night.)

Moments like that give you faith in both the person and company he’s building, right? (Apart from people yelling [“developers, developers, developers”](https://www.youtube.com/watch?v=EMldOiiG1Ko&ab_channel=fb) at the end of every meeting. I’m not the type of person to do this type of thing, but I like it.)

## Being part of hyper growth

### The first day

July 1st, 2019 was memorable, not because it was my first day, but because I locked myself out while getting a delivery, and ended up shivering for two hours to stay warm until my landlord came off work to save my ass.

There were around 25 people on the team at the time. As of today, the company has grown to more than 10 times that amount. We didn’t have a security engineer or full-time sales representative, and many successful product ideas were yet to come, like [Batch Changes](https://docs.sourcegraph.com/batch_changes) (formerly Campaigns, formerly Automation), [Code Insights](https://docs.sourcegraph.com/code_insights) and [Notebooks](https://docs.sourcegraph.com/notebooks).

I remember our main site ([sourcegraph.com](https://sourcegraph.com/)) going down the very moment [Nick Snyder](https://twitter.com/nickdsnyder) (my manager at the time) was doing my engineering onboarding. It was because of an unexpected GCP Kubernetes cluster upgrade 😄(We couldn’t turn it off, as it was forced by GCP.)

### The technical side of things

I wouldn’t protest if someone claimed our system architecture hasn’t changed much from those first days. We added some services, horizontally scaled others, and for better or worse, the fundamental design is the same, with “[frontend](https://github.com/sourcegraph/sourcegraph/tree/main/cmd/frontend)” as the backend.

Our major version is still 3; it was around 3.6 when I joined, and is now up to  3.41. I still remember the days when we all paused for a week and just did manual testing for our monthly releases. How we ship releases has dramatically changed, and though it’s still somewhat painful today, we’ve automated lots of tasks thanks to our Delivery and Distribution teams.

We still do RFCs, push code to GitHub, review changes in GitHub pull requests, and use GitHub issues/projects for project management. Our use cases for these types of things have stayed pretty stable.

I may have forgotten to mention something important, because I’m so used to my daily tasks as an IC, but look at the scroll bar – you have a lot to read and won’t mind a few missing details.

### People, hiring and teams

Our People team has always been the best (both as an intern and a full-time employee), if not the bestest. They care about people as people, and not just procedures. There is an unimaginable number of things to be sorted out on this hyper-speed train, and they do it effortlessly.

I suck at interviewing – I mean, I suck at reversing a red-black tree on a whiteboard, in fact I still don’t know how, and if forced to do it now, I’d just Google it. This doesn’t discredit the idea that more knowledge is better, but I deeply believe it’s not _what_ you know, but _how_ you know and _why_ you know.

I feel truly lucky that in the software industry, a common way to work things out is by making mistakes and continuing to try new approaches, even knowing my code runs on physical machines not on paper, and is solving real-world problems with imperfect assumptions. Being good at hiring takes tons of guidance and practice, I haven’t had “enough” to be good at it yet.

With more people joining, more teams are being formed, dedicated to an area of focus. First we needed a head of engineering, then we needed engineering managers, then we needed engineering directors, then we needed engineering pro, max, ultra… No no no, every engineer gets a [16-inch MacBook Pro M1 Max with 64 GB RAM and 1 TB SSD](https://handbook.sourcegraph.com/benefits-pay-perks/benefits-perks/spending-company-money/#engineering-team-laptops).

### Priorities, priorities, priorities

I haven’t changed teams since I joined, but the team’s mission changed 5 times. From Core Services, to Cloud (I couldn’t recall what that was for), to Core Application, to Cloud SaaS, to IAM and Admin Experience, finally landing at IAM (part of the Admin Experience organization). For the record, I’m completely fine with changing the team focus because of a change in company strategy, it just isn’t ideal.

If I had to name the single most important thing around engineering in a hyper-growth, for-profit company, that would be prioritization. We understand very well that resources are limited, and if we want to make progress towards our vision, we need to focus. If we think something else is important, it’s a tradeoff against existing priorities. The costs of context switching and the brittleness of being spread too thin are much higher than people think.

A motto I like is “The secret to accomplishing many things is to do one thing at a time.”

## Living up to our values

Our seven company values are [documented in our handbook](https://handbook.sourcegraph.com/company-info-and-process/values/) (there were five the last time I did my 360 review a few months back, but anyway). I’m not going to copy-paste them with a detailed explanation, but here’s the list for your reference:

* Customer-first
* Work as a team
* High agency
* High quality through iteration
* Be welcoming and inclusive
* Open and transparent
* Continuously grow


### Role models

Our values are great for both their meanings and intentions, but documenting company values isn’t the end of the story, it’s just a starting point. People need to live with them.

The leadership team needs to constantly emphasize, encourage, and most importantly demonstrate these values in every action, decision and interaction with the rest of the company. Our leadership team is doing an amazing job in this regard, and I can’t think of better role models.

An extremely effective example is that whenever someone on the leadership team takes PTO, the person broadcasts it with clear encouragement to everyone else, showing them PTO is a real thing at Sourcegraph, and you should take time off at your own discretion. If people aren’t being reminded about taking PTO, it is unlikely they’re going to meet the company policy for taking a [minimum of 30-days PTO](https://handbook.sourcegraph.com/benefits-pay-perks/benefits-perks/time-off/#paid-time-off-for-rest) each year. In addition, our managers constantly remind everyone to aim for working smarter, being more productive, and creating higher-quality output, instead of just working more hours to make up for things.

As Quinn used to say, “It’s a marathon not a sprint”, and you need to be sustainable.

### “Better to ask for forgiveness than permission”

I first heard this saying from my (previous) manager [Rafal Leszczynski](https://www.linkedin.com/in/rleszcz/). I think it’s a key idea to remember to act at a reasonable speed with high agency. You can’t just wait for things to happen, especially while being accountable.

Come up with a communication plan, pull in stakeholders, provide context, be clear about the things to ask for, set expectations, and propose a deadline. Reaching consensus isn’t always possible, but it’s important to make people feel heard with their feedback.

Individuals and teams make decisions all the time. While moving fast, be mindful of [reversible and irreversible decisions](https://fs.blog/reversible-irreversible-decisions/#:~:text=Reversible%20decisions%20are%20doors%20that,the%20invested%20time%20and%20resources). If something isn’t reversible, or the cost is too high to reverse it, it doesn’t hurt to give it a second review before getting buy-in from leadership.

### Transparency and sense of safety

Organizational transparency is unintuitively one of the hardest things to achieve and maintain, and is much easier said and done, especially for a company in the hyper growth stage. Sometimes things move a bit slower in the short term for the sake of transparency, but the benefits pay off in the long term. Not because of transparency itself, but because it forces people to think about processes, decisions, and changes more thoroughly, and document them for future reference.

There are many types of transparency, and to name a few notable ones:

* Communication transparency
* Policy transparency
* Process transparency
* Information transparency
* Pay transparency

You may think they’re the same, more or less, but they aren’t. Let me explain.

Communication transparency is about observing or participating in different communication channels, whether explicitly invited or not. Also, observation and participation are explicitly welcomed, helping people feel engaged in the topics they’re interested in. An “invite-only” approach pushes people away, and they eventually stop wanting to participate.

Policy transparency is about being explicit about what is and is not expected of you. Policies can always be found in an authoritative source of truth, the handbook. This sets clear expectations and “hidden punishment” is not tolerated.

Process transparency is about expectations of what will happen by when, which helps people make well-informed actions and decisions.

Information transparency is about the right to access unrestricted information without additional authorization. The handbook is a treasure trove of information, and anything you need to know should be there. If not, just ask. There is no reason to be rejected without a justification, information islands shouldn’t exist.

Pay transparency is about the company having competitive compensation, perks, and benefits to acquire and retain talent. Hiring isn’t free, and is in fact quite expensive. Don’t hold off compensation calibration and rewards without good reason; it’s guaranteed to cost the company more, even if hiring the same exact person back.

A sense of safety is built upon transparency, in an environment where everyone knows how they’re doing and what they should expect, with few surprises. It’s not about being conservative and avoiding risks, but having the ability to disagree and debate ideas based on their merits, without it becoming personal or fearing being punished for disagreeing with someone up the reporting chain. In a transparent environment, speaking up when in disagreement becomes everyone’s responsibility.

Again, just a reminder: being transparent does not mean reaching a consensus for every decision.

### Values are iterable

“The only constant in life is change.”

While living up to the values, make sure they are what you really want. [Values are iterable](https://github.com/sourcegraph/handbook/pull/2506), and as time and circumstances change, adjust wisely and accordingly.

## Software engineering at Sourcegraph

This is a big topic, and I neither want nor can write a book about it, but “there are a thousand Hamlets in the eyes of a thousand people” (a single text has many interpretations). I’d claim there are a thousand software engineering methodologies in the eyes of a thousand people, or in a thousand teams, or in a thousand organizations.

Back in 2019, I wrote a blog post in Chinese about [what is it like to work remotely at Sourcegraph](https://unknwon.cn/2019/191116-sourcegraph-remote/), but only mentioned my feelings and observations, since I didn’t think I had enough experience to form consolidated opinions.

What makes it different now? 3 years of experience is the magic number.

### Organization hierarchy

We just reorged (yet again within a year), and our latest [org chart](https://handbook.sourcegraph.com/team/org_chart/) is documented in the handhook. In the Engineering department, we had multiple organizations with one director and one group PM, then we had teams consisting of one EM, one PM, one product designer and multiple ICs (Note: Not all teams are fully staffed.)

The product designer on my team (IAM) had been loaned to form a tiger team before the reorg. We had just lost our EM and one IC to form a new team under the Cloud department, and our PM had stepped up to be the group PM of the Admin Experience organization. What a sad story! 😅Is this the “darkest” moment I’ve experienced here? Not quite, there was a brief period where I was the only one left on the team.

### Project management

#### The curse of GitHub

GitHub has been our code host since the beginning, with repositories in the [Sourcegraph](https://github.com/sourcegraph) organization and sources of truth for engineering tasks, customer issues and security reports in GitHub issues.

Admittedly, GitHub really sucks as a project management tool (as of this writing), and nothing about issues, labels, milestones, and code reviews has fundamentally improved over the last ten years. It is still miles away from its competitors, even considering the [new GitHub project](https://docs.github.com/en/issues/trying-out-the-new-projects-experience/about-projects). That is exactly why our teams (including IAM) have investigated project management tools like ZenHub, Linear, and of course, JIRA.

Unfortunately, we have abandoned these other tools for three reasons:

1. Inconsistent sources of truth
2. Violating our value of transparency (e.g., can’t view or comment without being invited)
3. Cost

We’ve gotten pretty creative with GitHub issues: some teams use [tracking issues](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+label%3Atracking+) (due to the lack of epic), some enable [in-house automations](https://github.com/sourcegraph/sourcegraph/pull/35453), some use the GitHub project, and some use a combination.

#### “Agile”

When I first joined, our development cycle was coupled with our release cadence, so every dev cycle was a month long, starting and ending with a monthly release. At some point, one team started trialing two-week sprints, which decoupled dev cycles from our releases. They embraced our [Continuous Releasability Contract](https://handbook.sourcegraph.com/departments/engineering/dev/tools/continuous_releasability/) and alleviated the tension to “squeeze in” changes in a hurry.

“Branch cut is in 5 hours, push your changes now!”

“No, we don’t release half-baked features.”

We must be realistic about the effort it takes to properly implement a feature or land a bugfix. It’s almost guaranteed that the cost of pulling back a buggy feature, communicating to customers, rushing to make the next patch, and asking customers to upgrade is massively higher than doing things right before they are released to the public.

Every engineering team uses a slightly different version of Agile, whatever they have found works effectively. Therefore, I can only speak about my experiences with the team I’m on (IAM).

Hmm, I think I’ll just hand you the [section on the IAM team in the handbook](https://handbook.sourcegraph.com/departments/engineering/dev/admin-exp/iam).

You’ll find some items marked as missing, which is fine because we know what we need (vs. what we don’t think is that important). Our practice has always been iterative, continuously improving and growing.

I’d like to call out the “grooming” phase of issues, when the acceptance criteria are defined. It’s very important to get acceptance criteria correct, because this is where expectations are aligned, and it describes the “just right” state of the tasks. This prevents over-thinking by telling people when to stop working.

#### Release

We’ve had [monthly releases](https://handbook.sourcegraph.com/departments/engineering/dev/process/releases/) for many years. Since the vast majority of our customers use on-premise installations, it hasn’t been trivial to manage by anyone or any team. The ownership of our release most recently fell under the [Release Guild](https://handbook.sourcegraph.com/departments/engineering/dev/process/releases/release_guild/), a voluntary group. As you may guess, a voluntary group doesn’t have defined commitments for engineering efforts, which means things aren’t getting improved in a steady way. Sometimes we are just shoving stuff downstream, crossing our fingers that things will improve on their own.

The good news is, it has caught the attention of the leadership team (after giving feedback), and I hope we’ll see more resources being allocated, since I believe release is on the critical path of delivering value into the hands of our customers. It means nothing if a feature isn’t appreciated by the target user, no matter how great it is in our own eyes.

### Communication

Communication is hard: it needs to be clear, delivered in context, and expressed with empathy.

Communication works exactly like sending [UDP](https://www.techtarget.com/searchnetworking/definition/UDP-User-Datagram-Protocol) packets: the cost of sending a message is cheap, and messages can be received out of order by the recipient. There’s absolutely no guarantee that the recipient will give an acknowledgment of the message, or even read it at all (especially if the message is only sent once).

In a fully-remote company with teammates from 30 countries and regions, spanning 16 different time zones, our success depends on communicating efficiently, effectively, and very often asynchronously.

If synchronous communication is already hard mode, then asynchronous communication is chaos mode. (If you’ve ever played Wushuang Model Generals of the Three Kingdoms, you’ll see enemy soldiers that you once vanquished by the dozens, suddenly require a crazy amount of movement and skill to kill just a single one. And now your character can easily get killed because there are hundreds of them coming at a time.)

There are [many strategies](https://handbook.sourcegraph.com/company-info-and-process/communication/asynchronous-communication/) we use to combat the challenges of communication. It should be made crystal clear that asynchronous communication only makes existing communication problems more noticeable, and  is not the root cause of ineffective communication.

This isn’t to say that all communication should be asynchronous: choose the most effective approach for your situation, like anything else.

### Collaboration

#### With product designers

Figma is the de facto tool for sharing low- and high-fidelity designs from our product designer to engineers. Other times, Excalidraw is used, but currently it’s a disaster for collaboration due to the lack of a commenting and notification system. For flowcharts and group feedback, Miro is often used; recently there is FigJam (by Figma), which can be bought independently and is about 50% cheaper than Miro, from what I can tell.

#### With other ICs

Most of the time, people use [RFCs](https://handbook.sourcegraph.com/company-info-and-process/communication/rfcs/) to collect feedback for changes involving more than a handful of stakeholders, though it’s generally important to document the thinking process for historical context. This could be a Google Doc, GitHub pull request, or a Miro board – whatever makes communication clear and effective.

GitHub is where collaboration lives at the code level. We don’t fully follow Git flow, but people tend to use branch prefixes based on their initials, teams, or area of ownership. For example, I usually use the prefix jc/ as my branch prefix, then append a short description, such as jc/bitbucket-cloud. We have few special branch prefixes that control different CI behaviors: main-try-run/ triggers a full-blown CI run (as if the commit was pushed to main), and backend-dry-run/ only triggers the backend integration test. By default, pull requests only trigger the tests which are absolutely necessary, so we don’t make CI a bottleneck on shipping.

Instead of using [code owners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners), we use [Codenotify](https://github.com/sourcegraph/codenotify). The former sends out review requests directly, and the latter only informs interested parties in a comment. [Why use Codenotify?](https://github.com/sourcegraph/codenotify#why-use-codenotify)

Pull requests with a small number of conceptual changes are encouraged. This could be a standalone post, but I want to share a few key benefits:

1. They are easier to review. A small and focused set of changes really gives reviewers a chance to follow along and think through the code.

2. They are easier to get approved. The more conceptual changes, the more likely it is to have arguments or pushback, leading to delays for other changes needlessly bundled within the same pull request.

3. They are easier to revert. Bugs are everywhere.

I first learned about [stacked pull requests](https://blog.logrocket.com/using-stacked-pull-requests-in-github) from [Rijnard van Tonder](https://twitter.com/rvtond), which addresses the concern that when making a large set of changes, it’s inevitable that some changes are dependent on others. I’ve seen more and more people practicing this technique within Sourcegraph.

Well then, how do I review pull requests with large diffs?

![Review PR](https://storage.googleapis.com/sourcegraph-assets/blog/review-large-pr.png)

I’m looking forward to trying out products like [Graphite](https://graphite.dev/) and [PLZ.REVIEW](https://www.plz.review/). I haven’t used them in any meaningful ways because:

* Graphite only has a dark theme, and it’s killing my eyes.
* PLZ.REVIEW does not two-way sync with GitHub (which hurts adoption really badly).

#### With leadership

The leadership team answers questions that come from anonymous form submissions during every biweekly company meeting. We also have a Slack channel called #exec-ama. I’ve heard how ineffective these approaches are from people at other companies, but you’d be surprised how direct and honest the questions, feedback and answers are at Sourcegraph.

Speak up with your concerns, and push back with your proposals. I know this is easier said than done, but when you see other teammates, managers, directors and executives debating in public channels, it’s immensely encouraging that any of us can participate and improve the outcome for everyone.

### Team building and career growth

Team offsites with [company sponsored travel](https://handbook.sourcegraph.com/benefits-pay-perks/benefits-perks/travel/) happen all the time; the last all-hands offsite was in San Diego for GopherCon 2019. I still remember that I mistakenly took Rijnard’s drink during lunch (sorry!), and it was [Eric Fritz](https://www.linkedin.com/in/eric-fritz-414a9411/)’s first day on this offsite (what a first day!).

We’ve also developed an [engineering career development framework](https://handbook.sourcegraph.com/departments/engineering/dev/career-development/framework/) and made spaces for [early-career engineers](https://handbook.sourcegraph.com/departments/engineering/dev/hiring/early-career-engineers/).

## Remote working vs. work from home

It’s not obvious that remote work is fundamentally different from working from home: they look similar on the surface, but the mechanics are different. If you’re too impatient to read my stories, jump to the “Takeaways”.

### Revert relocation

I spent my first five months working from our office in San Francisco, and more than half the time there were five or six different groups of people. I managed to ship everything I owned through USPS from Boston to SF on June 30th, and took a flight that evening.

I decided my onboarding would be more effective if I went onsite, which was the right move. Nothing had really changed since my internship 3 years before; the nearby 7/11 was the only store open 24/7. 

I don’t really like living in SF compared to being a tourist, or stopping by for a casual visit. I don’t have to wait a year to experience all four seasons, just a day: it’s extremely hot in the afternoon, and extremely cold at night. I thought our office ought to have the fastest internet in the world, yet we had internet outages almost every week, and it wasn’t much faster than what I had in Boston on a cellular network.

SF is crowded, perhaps less than New York (the last place I want to be living in the US), but still. I heard the DMV in CA was particularly awful, so I wasn’t incentivized to transfer my driver’s license and license plate, though I was supposed to and planned on doing so.

Then, I moved back during Thanksgiving, undoing my relocation. I was shipping everything back – forget about transferring my driver’s license and license plate.

That was the busiest two weeks of my life in terms of flights. First, I flew back to Boston, then three days later, flew back to SF for our annual party, then flew back (again) to Boston, then I flew back (yet again) to SF on a connecting flight to China.

### COVID-19

I originally planned to stay in China for three months, but on the day of Chinese New Year, the pandemic happened and every city was locked down. Before the pandemic swept the US, we [officially went from remote-first to all-remote](https://twitter.com/nickdsnyder/status/1230528851719028736). In hindsight, it was a smart move, and I wasn’t surprised by the change, since half our engineers already worked remotely from EMEA.

Around the same time, many Chinese companies began encouraging people to work from home. However, the overall sentiment (and what I observed) was that working from home was generally more stressful than not.

Why? I think the way companies operate isn’t suited for managing, and more importantly communicating, through IMs. Also, it’s clear the work is over after leaving the office, but with work-from-home there’s no such boundary. Without a physical presence, managers become concerned that people aren’t working hard enough, though I’m doubtful that “working hard at the office” was even happening for people under those managers. At workplaces where people were afraid of leaving before their managers, they now had to stay online because the managers had nothing else to do, other than frequently checking people’s online status.

### Trust, transparency and fairness

I believe the root cause of stressful “work from home” scenarios is the lack of trust. Put another way, it comes from obsessive micromanagement.

[DingTalk](https://www.dingtalk.com/en) is a famous example of inhumane software that became popular during this period; it’s a masterpiece of micromanagement. I feel sorry for people who work at companies where it’s required: it’s toxic, period.

Remote working favors, but doesn’t require, asynchronous communication. If employees are in the same time zone, there’s probably less benefit to communicating asynchronously. However, without a handbook, wiki, or equivalent, there isn’t enough transparency, which makes it hard to build a remote culture, and things revert back to “work from home”.

Remote work also indicates that the company values everyone’s time, respects their schedules, and aims to schedule meetings ahead and end them on time.

Some companies offer remote work so they can pay people at the local market rate; they don’t really care about improving communication, operations, and productivity. We [don’t believe in location-dependent compensation](https://handbook.sourcegraph.com/benefits-pay-perks/pay-expenses/compensation/#location-independent), and to stay competitive you want to attract the best talent from anywhere.

### Work/life balance

The first question I’m asked when people learn I work remotely is “When do you work?” Well, it depends on who’s asking.

If it’s my grandma, I’ll say “I work at night, because my boss is in the US.” It’s somewhat hard to get people of her generation to understand how work can happen while being disconnected by time zones.

If you’re looking for my advice about when to work, I’ll probably say helpless things like “Whenever you feel the most productive.”

The truth is, I’ve tried many schedules over the last three years, usually matching the lifestyle I had at the time. Sometimes I started working after dinner, sometimes I split the schedule and made up time in the afternoon, sometimes I was crazy productive and worked for 16 hours a day, then felt dead the next day. You’re welcome to read my [boring methodology to be productive](https://unknwon.io/posts/211009_boring_methodology_to_be_productive/) for how I stay productive as an IC.

Of course, remote work isn’t for everyone, and sometimes I miss working from an office environment. That’s why we also offer [up to 500 USD per month for you to rent a coworking space](https://handbook.sourcegraph.com/benefits-pay-perks/benefits-perks/spending-company-money/#recurring-expenses).

### Takeaways

In short, remote work is a completely different style of work than working at the office, whereas “work from home” is just just a change of work location (e.g., you happen to not be at the office).

Similar to our communication discussion above, it should be made crystal clear that converting to remote work only makes existing workplace issues more prominent, and is not the root cause of an ineffective workplace.

To learn more about how to transition to remote work, I highly recommend the course [How to Manage a Remote Team](https://www.coursera.org/learn/remote-team-management) by GitLab.

## What’s sad and what’s wrong?

It wouldn’t be honest to only talk about good things (as if they were the only things happening), which sadly and inevitably, is not true.

I used to be able to keep up with every Slack channel and RFC, and watch or participate in everything that happened inside the company. Now I have to consciously control my involvement and stay focused. Thankfully, every team sends out monthly updates. I love reading them, and I ask questions and give feedback when I have them.

My network within the company hasn’t grown that much, because I have rare interactions with most of the others. We do have donut chats enabled, but as I mentioned earlier, I don’t do much socializing unless it's related to a specific topic.

Constant changing of the team’s focus makes us lose momentum and breaks long-term ownership. MVPs are left behind.

One last thing I’d like to call out is the language barrier for talent that doesn’t speak English in a professional setting. I feel sad about not being able to source good candidates.

## Personal growth

I won’t hesitate to admit Sourcegraph is a dream place to work and to grow. It’s a precious opportunity to experience different stages of a company, something I’ve wanted since before I started my professional career.

In addition to learning professional skills, the experience of working at Sourcegraph had a significant influence on my thinking, lifestyle, values, who I want to become, how I interact with others, and how to work better in a team.

“If you want to go fast, go alone, if you want to go far, go together.”

## Beyond 3, 30, and 300

In celebration of the coincidence of my three year anniversary, my age of 30, and the 300-people mark of the company, I’m going to tell you the truth: I’m not yet 30, and rounded it up (by 1) to make the title look better.

(Aside: Wrong scripts!)

Sourcegraph is an inspiring place to work, with truly amazing, empathetic and thoughtful leadership and teammates. I’m looking forward to continuing making contributions and having a greater impact for many years to come.

It’s a place where I see most people willing to spend years for their career. Of course, I have my own reasons for working, and for transparency, I give them away honestly:

* I have faith in the mission: making it so “everyone can code” and realizing “being able to code will become a basic life skill, like reading was centuries ago”.

* There’s probably no better place to be surrounded by talented people and working with them pleasantly.

* I don’t like to move my base, and I feel really bad when people change jobs for the sake of more compensation. As a data point, I only voluntarily moved to a new home once during my 9-year stay in Boston (there was an involuntary move, but that’s a story for another time).

* It’s very cumbersome and painful to switch jobs if you have a work visa in the US. The lottery, the tax, the XYZ. Think about this ridiculous situation: I can legally work for a US company, and pay tax to the IRS, but I can be declined to enter the US due to the lack of a visa. I’m also very lazy (for the entire 45 days between my graduation and my first day at Sourcegraph, I only went out for takeout food, and other times only ordered deliveries… yeah, zero outdoor activities). Once again, I’m very grateful to our People team.

I can say all this publicly and fearlessly because I feel safe working at Sourcegraph, and I’m confident they won’t be used to make the “company-side” perspective superior when it comes to my work competency and fair compensation discussions. (In case I’m wrong, save this section because I’m going to delete it ASAP.)

I’ll wrap up with an old joke.

“What do you do for a living?” <br />
“Surfing.” <br />
“Surfing?” (You don't look like a human who does surfing, do you?) <br />
“Yes, surfing the internet” <br />
“...” <br />
_(One person has left the chat group)_

Thanks for reading this far, have a nice day!

---

_Special thanks to Beyang Liu, Lishi He, Yaohui Wang, and Tianzhou Chen for their proofreadings and thoughtful feedback!_

#### About the author

Joe Chen is Software Engineer and maintainer of the open source project Gogs, a painless self-hosted Git service. You can chat with Joe on Twitter [@jc_unknwon](https://twitter.com/jc_unknwon) or our community [Discord](https://discord.com/invite/vqsBW8m5Y8)

### More posts like this

* [A dev's thoughts on developer productivity](https://about.sourcegraph.com/blog/developer-productivity-thoughts)
* [3 things to know before building a custom, in-house code search tool](https://about.sourcegraph.com/blog/things-to-know-before-building-a-code-search-tool)
