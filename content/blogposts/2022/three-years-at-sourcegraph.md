---
title: 'How we analyzed hundreds of repositories to ensure they had open source licenses'
authors:
  - name: Joe Chen
    url: https://twitter.com/jc_unknwon
publishDate: 2022-07-27T10:00-07:00
description: 'Joe Chen is a Sourcegraph Software Engineer and the creator of Gogs, a painless self-hosted Git service. This is his story.”'
tags: [blog]
slug: 'three-years-at-sourcegraph'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/three-years-at-sourcegraph.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/three-years-at-sourcegraph.jpg
---

## My story with Sourcegraph

### An email from a random cool guy 

The story all started with an email, it was 2013, and I just started learning Go, wrote a website ([which has been archived](https://github.com/unknwon/gowalker) after running it for 9 years) to practice my knowledge, and someone named “sqs” shot me some lines around “Hey, the website you built looks cool, we at Sourcegraph are doing something similar, we should definitely chat.” Sorry that I’ve lost that email and couldn’t recall the content exactly.

I was in Boston, who (still) loves sitting in my little dark room, with minimal social life, and he’s on the other side of the states, so I didn’t really believe we would actually be able to meet in person.

Wait, what about the “cool guy” part? I judged based on Quinn’s profile image on GitHub. I think he used it for many years before the current one (yeah, no other CEO uses a tourist-like picture taken at night and put it on the profile).


### GopherCon 2014 

There were a lot of things that happened in 2014, one of them was the GopherCon 2014, the first ever GopherCon. Quinn emailed me that he and his co-founder Beyang were going to this conference, they also very kindly offered sponsorship for my ticket (PS: I never cashed the check, because they looked cool, and the name of the bank was also cool to me, “First Republic Bank”, think about a 21-year old young man first time received a check in his life, before had a Bank of America debit card, what a collection!)

![Gopher Check](https://storage.googleapis.com/sourcegraph-assets/blog/gophercon-check.png)

Apologies and clearly the “what a collection” part is an afterthought because I did not manage to keep it framed but it looks more original, doesn’t it? 😄

I had to ask for leave from my classes because the conference was on weekdays and my professor didn’t believe someone would sponsor my ticket but I didn’t care either, I was planning to go anyway.

This was the first time I attended a conference and I saw (because I was hesitant to talk first, which then the talk never happened most of the time 😂) lots of people (including Rob Pike, Russ Cox, Andrew, etc.) there that I can recognize from their online profiles (worthed all the cost I paid). In addition to Quinn and Beyang, I also had the only chance (so far, even after 8 years) to meet [Matt Holt](https://github.com/mholt) (the author of [Caddy web server](https://caddyserver.com/) and many other cool things) and [Brian Ketelsen](https://twitter.com/bketelsen) (one of the organizers of GopherCon) who gave me few extra Gophers swag to give away to my friends (this was really really heartwarming ❤️ I was going alone and knew no one prior to the conference).

No doubt Matt asked the famous question regarding my GitHub handle that if the typo was on purpose ("[unknwon](https://github.com/unknwon)" vs “unknown”), my consistent answer has always been, “no, I thought I spelled it correctly.”

Alright, this section is getting too noisy, finishing it up in two short stories:



1. Because I knew no one else, I was basically following Quinn and Beyang. Then there was a guy who spoke to us for about an hour or maybe less, and I literally couldn’t catch up to understand 99% of what he said. The only thing I could remember (or I could guess-stand) was something, something like serving ZIP files over HTTP protocol?
2. During the after party, we went to four bars for drinks and socializing, but because I don’t drink, I had about five or six bottles of water. 😒 Then there was a really nice guy, he couldn’t stand it anymore and bought me a coke in the last bar.


### The elevator story 

Funnily enough, I first heard different versions from different people and I really didn’t put a thought when the “story” happened.

After we met at the GopherCon, I decided to visit Sourcegraph office in San Francisco before I flew back to China for the summer vacation. In the building, there was an elevator I would rather believe was one century old, it did not have buttons I could push for certain floors rather a bunch of switches to manually control the direction and speed of the vehicle (yeah, a vehicle goes up and down…) 😳



<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image2.png "image_tooltip")


This is the closest one I could find to match my fading memory, but you get the point. Long story short, I’m pretty sure I did something wrong (no wonder there were elevator operators), and it stopped, I mean, stuck in the middle of nowhere.

I thought, “OK, not too bad, at least I have my backpack and laptop with me, just tell me your WiFi password and I’ll sit and do some coding.”


### At 3AM 

Fast forward to 2016, I had my summer internship at Sourcegraph in the SF office. Worked with some of today’s coworkers, and it was an enjoyable and amazing experience (though in hindsight I don’t think I accomplished as much as I could have), everyone was (and still is) trying to help each other and be really supportive, which ultimately made me want to join as a full-time employee after finishing my study of master’s degree.

I don’t know if Beyang still remembers what he said during the internship onboarding, “[…], you could even sleep at the office if you want”, which I did, once. First time disclosure.

Developers stay up late countless nights to write bugs, and that was an average late night. I was coding at the office because I had no other things to do and the Airbnb room didn’t have good desks and chairs as in the office. At 3AM, I thought there was a thief breaking into the office and was almost ready to hide.

Then I saw Quinn walk in.



<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image3.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image3.png "image_tooltip")


We neither talked nor made eye-contact. I think he was doing some thinking and walked straight to his desk and started coding (judging by his typing on the keyboard). In case you’re curious, we also have never discussed that night.

That’s the moment when I would have faith in a person and the company he is building, no? (Apart from people yelling at each other at the end of every meeting with “developers, developers, developers!” I’m not the type of person who would do this kind of yelling, but I like it.)


## Being part of hyper growth 


### First day 

1st July, 2019 was a memorable date, not because it was my first day, but because I locked out myself while taking my delivery and ended up shaking my body for two hours to stay warm until my landlord went off work to save my ass.

There were around 25 people on the team. As of today, we have grown more than 10 times the number of people within the company. We did not have any security engineer, no full-time sales representative, many successful product ideas yet to come ([Batch Changes](https://docs.sourcegraph.com/batch_changes), formerly Campaigns, formerly Automation, as well as [Code Insights](https://docs.sourcegraph.com/code_insights), [Notebooks](https://docs.sourcegraph.com/notebooks)). Our main site ([sourcegraph.com](https://sourcegraph.com/)) also went down during the very moment my manager (at the time) [Nick Snyder](https://twitter.com/nickdsnyder) was doing engineering onboarding with me due to an unexpected GCP Kubernetes cluster upgrade 😄 (PS: we couldn’t turn it off, as it was forced by GCP.)


### Technical side of things 

I wouldn’t fight back if someone claims our overall architecture of the system hasn’t changed much, we added some services, horizontally scaled some services, but nothing fundamentally changed (for good or bad), “[frontend](https://github.com/sourcegraph/sourcegraph/tree/main/cmd/frontend)” is still the backend.

Our major version is still 3, maybe 3.6 when I joined, but now 3.41. I still remember the days when all of us paused one week and just did manual testing for our monthly releases. How we ship releases has dramatically changed, it is still somewhat painful today, but lots of things have been automated thanks to our Delivery and formerly Distribution teams.

We still do RFCs, push code to GitHub, review through GitHub pull requests, using GitHub issues and projects for project management. The uses of these types of things have been quite stable, frankly speaking.

Maybe I forgot to mention something important while writing these lines because I’m just so used to things I do on a daily basis as an IC, but look at the scroll bar, you have a lot to read already, don’t mind these details.


### People, hiring and teams 

Our People team has always been the best (both when I was an intern and as a full-time employee), if not the bestest. They do care about people, not just procedures. There is an unimaginable number of things to be managed and sorted out on this hyper-speed train, and they do it frictionlessly.

I suck at interviewing, I mean, suck at reversing a red-black tree on a whiteboard, in fact I still don’t know how, if I have to do it now, I would just Google it. This does not discredit having more knowledge is better, it’s just that I deeply believe it is not about what you know, but how you know and why you know.

In the software industry, I feel truly lucky that one consistent way to work things out is by making mistakes and keeping on trying different approaches, especially knowing code I write in my life runs on physical machines not on papers, and solving real world problems with imperfect assumptions. Being good at hiring takes tons of guidance and practices, I haven’t had “enough” to be good at it yet.

With more people, more teams are formed to be dedicated to an area of focus. First we need a head of engineering, then we need engineering managers, then we need engineering directors, then we need engineering pro, max, ultra… No no no, every engineer gets a [16-inch MacBook Pro M1 Max with 64 GB RAM and 1 TB SSD](https://handbook.sourcegraph.com/benefits-pay-perks/benefits-perks/spending-company-money/#engineering-team-laptops).


### Priorities, priorities, priorities 

I haven’t changed my team since, but the team “changed” 5 times. From Core Services, to Cloud (I couldn’t recall what that was for), to Core Application, to Cloud SaaS, to IAM and Admin Experience, currently landing at IAM (as part of overall Admin Experience organization). For the record, I’m completely comfortable with changing team focus caused by a change of company strategy, it just isn’t ideal.

If I have to name one thing I learned or realized what’s the single most important thing in engineering in a for-profit company during the hyper growth, that is prioritization. We understand very well that we have limited resources, if we want to make progress towards our vision, we have to focus. If we think something else is important, it must be traded with existing priorities. The cost of context-switching and the brittleness of spreading thin are way much higher than most people think.

“The secret to accomplishing many things is to do one thing at a time.”


## Living up to our values 

Our seven company values are [documented in our handbook](https://handbook.sourcegraph.com/company-info-and-process/values/) (there were five the last time I did my 360 review a couple of months back but anyway). I’m not going to copy-paste their definitions and detailed explanations, just listing them out here for your references:



* Customer-first
* Work as a team
* High agency
* High quality through iteration
* Be welcoming and inclusive
* Open and transparent
* Continuously grow


### Role models 

Our values are (first of all) great for both their meanings and intentions, but documenting company values is not the end of the story, it’s just a starting point, people need to live with it unless the company goes extinct.

The leadership team needs to constantly and consistently emphasize, encourage, and most importantly demonstrate these values in every single action, decision and interaction to the rest of the company. Our leadership team is doing an amazing job in this regard and I can’t think of any better role models.

One extremely effective example in my opinion is that whenever and whoever takes PTO on the leadership team, the person broadcasts with clear encouragement to others, showing people PTO is a real thing at Sourcegraph, people should take time off at their own discretion. If people aren’t being mindful about taking PTO, it is unlikely they are going to meet the company policy for taking a [minimum of 30-day PTO](https://handbook.sourcegraph.com/benefits-pay-perks/benefits-perks/time-off/#paid-time-off-for-rest) in a calendar year. In addition to that, our managers constantly remind every teammate to aim for working smarter, more productive and higher quality, instead of working more hours to cover up things.

As Quinn used to say, “it’s a marathon not a sprint”, be sustainable.


### “Better to ask for forgiveness than permission” 

I learned this saying from my (previous) manager [Rafal Leszczynski](https://www.linkedin.com/in/rleszcz/), I think this is a key thing to remember for being able to act at a reasonable speed with high agency. You can’t just wait for things to happen, especially while being accountable.

Come up with a communication plan, pull in stakeholders, provide context, be clear about things to ask for, set expectations, and propose a deadline. Reaching consensus isn’t always possible or part of the goal, but “it’s important to make people feel heard” for their feedback.

Individuals and teams are making decisions all the time, but while moving fast, just be mindful about r[eversible and irreversible decisions](https://fs.blog/reversible-irreversible-decisions/#:~:text=Reversible%20decisions%20are%20doors%20that,the%20invested%20time%20and%20resources).). If something isn’t reversible or the cost is too high to be reversed, it doesn’t hurt to have a second thought before getting buy-ins from the leadership.


### Transparency and sense of safety 

Transparency unintuitively is one of the hardest things to achieve and maintain in an organization, and it is much easier said than done, especially true for a company with hyper growth (changes are happening at a very fast rate). Sometimes things move a bit slower in the short-term for the sake of transparency, but the benefit of being transparent pays off in the longer-term. Not because transparency itself, but because being transparent forces people to think about processes/decisions/changes more thoroughly, and document them very well for references.

There are many aspects of transparency, just to name a few notable ones:



* Communication transparency
* Policy transparency
* Process transparency
* Information transparency
* Pay transparency

You may think they are more or less the same thing, but I’m saying they are not. Let me explain.

Communication transparency is about being able to observe and/or participate in different channels of communications, whether explicitly invited or not. These types of observation and participation are also explicitly welcomed, making people feel engaged in topics they are interested in. The “invite-only” style of communication pushes people off and just stops caring over time.

Policy transparency is about being explicit about what is expected and what is not. Actions of policies can always be referenced from an authoritative source of truth, and that’s the handbook. This sets clear expectations and no “hidden punishment” is tolerated.

Process transparency is about expectations of when and what will happen, making people be prepared and informed, and take actions and make decisions accordingly.

Information transparency is about the rights to access any unrestricted information without any additional authorization. Handbook is an information treasure, anything you could know should be there. If not, just ask and there is no reason to be rejected without a justification. Information islands should not exist.

Pay transparency is about the company having competitive benefits, perks and compensation in the market to acquire and retain talents. Hiring is not free, and is in fact an expensive operation. Do not hold off compensation calibration and rewards without a good reason, it is guaranteed to cost more to the company even for hiring the exact same person back.

The sense of safety needs to be built upon transparency, in an environment where everyone knows where they are, how they are doing, and what they should be expecting, with little to zero surprises. It is not about being conservative and avoiding risks, but having the ability to disagree with others and debate the merit of ideas, without it being personal nor fear of being penalized for disagreeing with someone up the reporting chain. In such an environment, speaking up when in disagreement becomes everyone’s responsibility.

Just to remind you again that being transparent does not mean reaching consensus every single time.


### Values are iterable 

“The Only Constant in Life Is Change.”

While living up to the values, make sure their meanings and intentions are desired. [Values themselves are iterable](https://github.com/sourcegraph/handbook/pull/2506), as time changes, at different stages, under different circumstances, adjust wisely and accordingly.


## Software engineering at Sourcegraph 

This is a big topic, by no means I want nor can I write a book about this, but “there are a thousand Hamlets in the eyes of a thousand people.” I would be comfortable to claim that there are a thousand software engineering methodologies in the eyes of a thousand people, or in a thousand teams, or a thousand organizations.

Previously in 2019, I wrote a blog post in Chinese about “[what is it like to work remotely at Sourcegraph](https://unknwon.cn/2019/191116-sourcegraph-remote/)” but only talked about my feelings and observations, since I think I did not have enough experiences to form consolidated opinions.

What makes now different? 3 is a magical number.


### Organization hierarchy 

We just reorged (yet again within a year), our latest org chart is documented in our handhook. Within the Engineering department, we have multiple organizations each accompanied with one director and one group PM, then we have one or more teams within each organization consisting of one EM, one PM, one product designer and multiple ICs (Note: Not all teams are fully staffed, and we just get rid of the organization layer at the time of publish).

The product designer of my team (IAM) has been loaned to form a tiger team before the reorg, and we just lost our EM and one IC to form a new team under the Cloud department during this reorg, and our PM has stepped up to be the group PM of the Admin Experience organization. What a sad story! 😅 Is this the “darkest” moment I’ve experienced here? Not quite, there was a brief period of time that I was the only one left on the team.


### Project management 


#### The curse of GitHub 

GitHub has been our choice of code host since the very beginning, all of our repositories are stored in the [Sourcegraph](https://github.com/sourcegraph) organization, and all sources of truth of engineering tasks, customer issues, security reports are in the form of GitHub issues.

Admittedly, GitHub really sucks as a project management tool (at the time of writing), nothing about issues, labels, milestones, and code reviews have fundamentally improved over the last ten years. It is still miles away from its competitors in consideration of the [new GitHub project](https://docs.github.com/en/issues/trying-out-the-new-projects-experience/about-projects). That is exactly why teams (including IAM) had tried or investigated various other project management tools, including ZenHub, Linear, and of course, JIRA.

Unfortunately, we have abandoned using or consider using other tools for project management purpose for the time being in regards to three primary reasons:



1. Inconsistent sources of truth
2. Violates our value of transparency (either can’t see or comment without being invited to the project)
3. Cut costs

We are being pretty creative on GitHub issues, some teams use the concept of [tracking issues](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+label%3Atracking+) (due to lack of epic), some teams enable [in-house automations](https://github.com/sourcegraph/sourcegraph/pull/35453), some teams use the GitHub project, some teams use a flexible combination of some.


#### “Agile” 

When I first joined, our development cycles were coupled with our release cadence, meaning every development cycle is one-month long and starts/ends with a monthly release. At one point, one team started trialing two-week sprints, which effectively decouples development cycles from our releases, and to embrace more on our [Continuous Releasability Contract](https://handbook.sourcegraph.com/departments/engineering/dev/tools/continuous_releasability/) and alleviate tension for “squeezing in” changes in hurry.

“Branch cut is in 5 hours, push your changes now!”

“No, we don’t release half-baked features.”

We must be realistic about how much effort it takes to properly implement a feature or land a bug fix. It is almost guaranteed that the cost of pulling back a buggy feature, communicating to customers, working on another patch in a rush, and asking customers to upgrade is unbelievably higher than doing obvious things right before it is released to the public.

Every engineering team uses slightly different practices of Agile, whichever works the most effectively for them. Therefore, I can only speak about the team I’m at (IAM) regarding this topic.

Hmm, I think I’ll just hand over the [link to the IAM team in the handbook](https://handbook.sourcegraph.com/departments/engineering/dev/admin-exp/iam).

You’ll find things explicitly marked as missing, that is fine because we know what we need (vs. we don’t think that is important). The practice has always been being iterative, and continuously improving and growing.

One thing I want to call out is the “grooming” phase of issues, at when the acceptance criterias are defined. It is very important to get acceptance criterias correct because this is where the expectation is aligned, it informs what’s the just-right state of the task and prevents over-thinking, in other words, tells people when to stop.


#### Release 

We have been doing [monthly releases](https://handbook.sourcegraph.com/departments/engineering/dev/process/releases/) for many years as the vast majority of our customers are using on-premise installations, it hasn’t been a trivial work to facilitate by anyone or any team. The ownership of our release most recently fell under the [Release Guild](https://handbook.sourcegraph.com/departments/engineering/dev/process/releases/release_guild/) as a voluntary group of people, but as you may tell, the voluntary group doesn’t have commitments on engineering efforts, it means things aren’t getting improved in practical terms, as we are just loading “shits” to another truck, fingers crossed for things to get better by themselves.

The good news is, it has caught the leadership team’s attention (after giving feedback to the leadership) and I hope we will see more resources being allocated, since in my opinion release is on the critical path of delivering our developed values to the hands of our customers. It means nothing if the feature isn’t being appreciated by targeted users, no matter how great it is (in the eyes of ours).


### Communication 

Communication is hard, it needs to be clear in intentions, surrounded by contexts, and expressed with empathy.

Communication works exactly like [UDP](https://www.techtarget.com/searchnetworking/definition/UDP-User-Datagram-Protocol): The cost of sending out a message is cheap, messages are out of orders on the receiver end. There is absolutely no guarantee that the message receiver would give an acknowledgement, or have read the message, and especially true if the message only gets sent once.

In an all-remote company with teammates distributed from 30 countries and regions, across 16 different time zones, it is critical to our success in the sprint of being able to communicate efficiently, effectively, and very often asynchronously.

If the synchronous communication is already the hard mode, then asynchronous communication is the chaos mode. (If you ever played Wushuang Model Generals of the Three Kingdoms, you will see enemy soldiers you were able to cut off dozens at a time, now need crazy amounts of movements and multiple skill releases to just kill one. On the contrary, your character can easily get killed because there are always hundreds of them at a time.)

There are [many ways and various mediums](https://handbook.sourcegraph.com/company-info-and-process/communication/asynchronous-communication/) we use to combat the challenges of communication. It should be made crystal clear that asynchronous communication only makes existing communication problems more prominent, it is not the root cause of ineffective communication.

All of this is not saying every communication should be asynchronous. Choose the most effective approach, like anything else.


### Collaboration 


#### With product designers 

Figma is the de facto tool for presenting both low and high fidelity designs from our product designer to engineers, most of the time. Other times, Excalidraw is also used but at the time of writing, it is a disaster for collaboration due to the lack of commenting and notification system. For flow charts and group feedback, Miro is often used, but now there is also FigJam, and can be purchased independently from Figma and about 50% cheaper than Miro from what I can tell.


#### With other ICs 

Most of the time, people default to using [RFCs](https://handbook.sourcegraph.com/company-info-and-process/communication/rfcs/) (as one of many means) to communicate and collect feedback for changes that have more than a handful of stakeholders, though it is also important to document thinking at the time for referencing back in the future as historical context. It could be a Google Doc (default form), or a GitHub pull request, or a Miro board, or whatever that makes the communication clear and effective.

GitHub is where collaboration at code-level lives. We don’t fully follow Git flow but people tend to use branch prefixes with their initials or teams or area of ownership. For example, I use the prefix jc/ as my branch prefix most of the time, then append a short description of what the branch is about, like jc/bitbucket-cloud. We have few special branch prefixes that inform different CI behaviors, main-try-run/ triggers a full-blown CI run as if the commit was pushed to main, and backend-dry-run/ only triggers the backend integration test in CI. By default, we tend to run only absolute necessary tests on pull requests so we don’t make CI a bottleneck on shipping things.

Instead of using [code owners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners), we use [Codenotify](https://github.com/sourcegraph/codenotify). The former sends out review requests directly, and the latter only informs interested parties in a comment. [Why use Codenotify?](https://github.com/sourcegraph/codenotify#why-use-codenotify)

GitHub pull requests with a small number of conceptual changes are always encouraged. This could be a standalone post by itself but I want to express few important benefits I care the most:



1. Easier to review. Small and focused set of changes really gives reviewers a chance to follow along and think through.
2. Easier to get review approved. With more conceptual changes, there is more likely to have arguments or push backs, and more delays caused to ship other changes unnecessarily bundled within the same pull request.
3. Easier to revert. Bugs are everywhere.

I first learned [stacked pull requests](https://blog.logrocket.com/using-stacked-pull-requests-in-github) from [Rijnard van Tonder](https://twitter.com/rvtond), where when articulating a large set of changes, it is inevitable that some changes are dependent on some other changes. I’ve seen more people practicing this technique within Sourcegraph.

Well, then how to review pull requests that produce large diffs?



<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image4.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image4.png "image_tooltip")


I’m looking forward to trying out products like [Graphite](https://graphite.dev/) and [PLZ.REVIEW](https://www.plz.review/). I haven’t used them in any meaningful ways because:



* Graphite only has a dark theme, and it is killing my eyes.
* PLZ.REVIEW does not two-way sync with GitHub, hurts adoption really badly.


#### With leadership 

The leadership team answers questions that come from anonymous form submissions at every company meeting that happens biweekly. We also have a Slack channel called #exec-ama. I’ve heard how ineffective these approaches are from many people working at other companies but you’ll be surprised how direct and honest some of the questions, feedback and answers are at Sourcegraph.

Speak up your concerns, and push back with your proposals. I know this is easier said than done, but when you see other teammates, managers, directors and executives have arguments in public channels and threads, they are great examples and immense encouragement for anyone to be like that for the better outcome of all of us.


### Team building and career growth 

Team offsites with [company sponsored travel](https://handbook.sourcegraph.com/benefits-pay-perks/benefits-perks/travel/) are happening all the time in different teams, the last all-hands offsite was at San Diego for GopherCon 2019. I still remember that I mistakenly took Rijnard’s drink (sorry!!) for lunch, and it was [Eric Fritz](https://www.linkedin.com/in/eric-fritz-414a9411/)’s first day on this offsite (what a first day!).

We’ve also developed an [engineering career development framework](https://handbook.sourcegraph.com/departments/engineering/dev/career-development/framework/) and made up spaces for [early-career engineers](https://handbook.sourcegraph.com/departments/engineering/dev/hiring/early-career-engineers/).


## Remote working vs. work from home 

It is probably unobvious to realize remote working is a fundamentally different thing from working from home, they look very similar on the surface, but the running mechanisms aren’t the same in my opinion. If you are impatient to read my stories, jump right to the “Takeaways”.


### Revert relocation 

I spent my first five months working at our office in San Francisco, there were about five to six different combinations of people regularly at the office more than half of the time. I managed to ship everything through USPS from Boston to SF on June 30th, and took the flight in the evening.

I decided my onboarding would be more effective if I just went onsite, which was a correct move. Nothing really changed three years after my internship, the only store that operates 24/7 is still the seven-eleven. However, I do not like living in SF (vs. being a tourist or casual visiting). I don’t need a year to experience four seasons but just a day, extremely hot in the afternoon and extremely cold during the night. I thought it ought to have the fastest internet in the world, yet our office had internet cutoffs almost once every week, and it is generally not faster than what I had in Boston while on cellular network. It’s crowded, maybe less so compared to New York (the least place I want to be living in the US), but still. I heard DMV in CA was particularly awful, so I wasn’t incentivized at all to convert my Driver’s License and License’s plate, though I was supposed to and planning to.

Then, I reverted my relocation during Thanksgiving. Shipping everything back, forget about converting my Driver’s License and License’s plate.

That was the busiest two-week I’ve ever had in terms of taking flights. First, I flew back to Boston, then in three days, I flew back to SF for our annual party, then I flew back (again) to Boston after the annual party, then I flew back (again) to SF for a connecting flight to China.


### COVID-19 

Originally, I planned to stay about three months in China, then on the day of Chinese New Year, the pandemic was revealed and every city was essentially locked down. Before the pandemic hit really badly in the US, we [officially went from remote-first to all-remote](https://twitter.com/nickdsnyder/status/1230528851719028736). In hindsight, it was a smart move and I wasn’t surprised given we already had about half of engineers working remotely from EMEA.

Around the same time, lots of Chinese companies started encouraging people to work from home, but the overall sentiment from people and from what I observed is that, work from home is generally more stressful than not. Why? Because I think the way companies are operating is not ready for managing and more importantly communicating effectively through IMs. It is often clear the work is over after leaving the office, but there is no such boundary anymore. Managers are concerned that people aren’t working hard enough in the absence of physical presence, though I’m very doubtful that “working hard at office” is even true for people under those managers. At places where people are afraid of leaving the office before their managers, now need to be always online because managers have nothing else to do other than checking statuses frequently.


### Trust, transparency and fairness 

What I believe is the root cause of many companies having more stressful “work from home” scenarios is the lack of trust. To say it in another way, the obsession of micromanagement from their managers.

As a result, [DingTalk](https://www.dingtalk.com/en) is one famous example of anti-humanity software that got popular during this period, this is the masterpiece of the reinforcement of micromanagement. I feel sorry for people who are working at companies that are required to use it. It is toxic, period.

Remote working favors but doesn’t require asynchronous communication, they are decoupled. If all of the employees are working in the same time zone, there is probably much less benefit of communicating asynchronously. However, without a handbook, wiki or equivalent, there is really not much about transparency, and that is not going to build a sustainable remote working culture, and will eventually revert back to what I call “work from home”.

Remote working also strictly implies value other people’s time, respect everyone’s schedule, and always aiming to schedule meetings ahead and end meetings on time.

Some companies offer remote positions just because they can pay talents at the local market rate, and they don’t really care about how to improve communication, operation and productivity through remote working. We [don’t believe in location-dependent compensation](https://handbook.sourcegraph.com/benefits-pay-perks/pay-expenses/compensation/#location-independent) to stay competitive and attractive to best talents from anywhere you are.


### Work life balance 

The first question I get asked when people know that I work remotely is “when do you work?” Well, it depends who I am answering to.

If that’s my grandma, I’ll say “I work at night, because my boss is in the US.” It is somewhat hard to get people of her generation to understand how work could happen while being time-zonely disconnected.

If you’re looking for my advice, I’ll probably say helpless things like “whenever you feel the most productive.”

The truth is I’ve tried many types of schedules over the last three years, and each of them often matches the lifestyle I’ve been having at the time. Previously, I sometimes start working after dinner, sometimes split the schedule and make up time in my afternoons, sometimes just being crazy productive and working for 16 hours a day, then feeling like dead on the day after. You are also welcome to read my [boring methodology to be productive](https://unknwon.io/posts/211009_boring_methodology_to_be_productive/) for how I stay productive as an IC (in my terms).

The whole point here is that it is flexible, you may get more insprisions and insights from [these 7 interviews from our engineers](https://about.sourcegraph.com/blog/remote-work-calendar).

Of course, remote working isn’t for everyone, sometimes I also miss working at an office environment, that is why we also have [up to 500 USD per month for you to rent a coworking space](https://handbook.sourcegraph.com/benefits-pay-perks/benefits-perks/spending-company-money/#recurring-expenses).


### Takeaways 

In short, remote working is a different way of working from working at the office, where work from home is just a change of work location which happens to be not at the office.

Similar to communications, it should be made crystal clear that converting to remote working only makes existing working problems more prominent, it is not the root cause of ineffective working.

If you want to learn more about how to transform your company’s working style to remote working, I highly recommend the course [How to Manage a Remote Team](https://www.coursera.org/learn/remote-team-management) by GitLab.


## What’s sad and what’s wrong? 

It wouldn’t be so honest if I only talk about good things (as if they are the only things), which sadly and inevitably, are not true.

I used to be able to keep up on every single Slack channel, every single RFC, watch or participate in every single thing that happened within the company. Now I have to consciously control my involvement in many things to stay focused. Thankfully, every team sends out monthly updates to highlight things so I love reading each of them, and ask questions or give feedback when I have.

My network within the company hasn’t grown much because I have rare interactions with most of them. We do have donut chats enabled but as I mentioned in the beginning part of the post, I don’t do much socializing unless it’s related to a specific topic.

Constant changing of the team focus loses team momentum and breaks long-term ownership. MVPs are left behind.

One last thing I’d like to call out here is the language barrier for talents that previously do not speak English in professional settings. I feel sad about not being able to source good candidates.


## Personal growth 

I wouldn’t hesitate to admit it is a dream place to work at and to grow with the company. It is a precious opportunity to experience different stages of a company, which has been what I wanted before I started my professional career.

In addition to my continuous learning of professional skills, the experience of working at Sourcegraph has a significant influence on my thinking, lifestyle, values, who I want to become, how I would behave to others and how to better perform work as a team.

“If you want to go fast, go alone, if you want to go far, go together.”


## Beyond 3, 30, and 300 

In celebration and the coincidence of my three year anniversary, my age of 30, and 300-people mark of the company, I’m going to tell you a truth, I’m not yet 30 but rounded it up (by 1) to make the title look better.

(Aside: Wrong scripts!)

Sourcegraph is an inspiring place to work at with truly amazing, empathetic and thoughtful leadership and teammates. I’m looking forward to continuing making my contributions and greater impact in the foreseeable future, with many years to come.

It is a place where I perceive most people are willing to spend years for their career. Of course I have my very own reasons, for transparency, I give them away honestly:



* I have faith in the mission, to make it so “everyone can code”, and “being able to code will become a basic life skill like reading was centuries ago”.
* There is probably no better place where I am surrounded by talented people and being able to work with them pleasantly.
* I don’t like to move my base, and I feel really bad when people change their jobs for the sake of incompetent compensation. As a data point, I only voluntarily moved to a new home once during my 9-year stay in Boston (there is an involuntary move but that’s a story for another time).
* It’s very cumbersome and painful to switch jobs for people holding a work visa in the US. The lottery, the tax, the XYZ. Think about this ridiculous situation, I can legally work for a US company, pay tax to the IRS, but I can be declined to enter the US due to lack of visa. I’m also very lazy (for the entire 45 days between my graduation ceremony and my first day at Sourcegraph, I only went out for pickups, and other times only ordered deliveries, yeah, zero outdoor activities). Once again, I’m very grateful to our People team.

I can say these reasons publicly and fearlessly because I feel safe working at Sourcegraph, and I’m confident they will not be used as means to make the “company-side” superior when it comes to my work competency and fair compensation. (In case I’m wrong, save this section because I’m going to delete it ASAP.)

I’ll wrap up with an old joke.

“What do you do for a living?”

“Surfing”

“Surfing?” (You don’t look like a human who does surfing, do you?)

“Yes, surfing on the internet”

“…” (One person has left the chat group)

Thanks for reading this far, and have a nice day!


---

Special thanks to Beyang Liu, Lishi He, Yaohui Wang, and Tianzhou Liu for their proofreadings and thoughtful feedback!

For transparency: comments are not discouraged, but it is extremely likely that I will not reply.


---

_Thanks to the following people for helping with this post: Erik Seliger, Daniel Marques, Malo Marrec, Kalid Azad, Marcos Placona, Fabiana Castellanos, and Tammy Zhu._

#### About the author

Justin Dorfman is Sourcegraph’s Open Source Program Manager and is responsible for
fostering the adoption of code intelligence in the open source community. You can chat with Justin on Twitter [@jdorfman](https://twitter.com/jdorfman) or our community [Discord](https://discord.com/invite/vqsBW8m5Y8)

### More posts like this

- [Interact with Sourcegraph from the command line faster with Fig](https://about.sourcegraph.com/blog/why-fig-autocomplete-is-awesome)
- [No Secrets! Quickly find sensitive files in your GitHub repo](https://about.sourcegraph.com/blog/no-more-secrets)

<iframe height="0" frameborder="0">
    <img referrerpolicy="no-referrer-when-downgrade" src="https://static.scarf.sh/a.png?x-pxid=a18bf656-9e70-4ab1-b2a5-1440b6646e1f" />
</iframe>
