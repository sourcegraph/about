---
title: "Strange Loop 2019 - Observability: Superpowers for Developers"
description: "Who wants to spend time dreaming about the ability to leap tall buildings with a single bound, when we can recast stories we live day to day as powers of our own... and improve our own lives in a practical way? When observability is folded into the development process itself, it represents the potential for a beautifully virtuous cycle: production stops being just where our development code runs into issues, and it becomes where part of our development process lives."
authors:
  - name: Rainya Mosher
    url: https://www.linkedin.com/in/rainyamosher/
publishDate: 2019-09-13T00:00-11:20
tags: [
  strange-loop
]
slug: strange-loop-2019-observability-superpowers-for-developers
heroImage: https://about.sourcegraph.com/blog/strange-loop-thumbnail-square-v2.jpg
published: true
---

<div className="container p-0 liveblog-presenters d-flex w-100 text-center">
  <div className="row m-0 w-100">
      <p className=" mr-12 m-0 w-100">
        <span className="liveblog-presenters__name">Christine Yen</span>
        <a href="https://twitter.com/cyen" target="_blank" title="Twitter"><i className="fa fa-twitter pr-2"></i></a>
        <a href="https://github.com/christineyen" target="_blank" title="GitHub"><i className="fa fa-github pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

Who wants to spend time dreaming about the ability to leap tall buildings with a single bound, when we can recast stories we live day to day as powers of our own... and improve our own lives in a practical way? When observability is folded into the development process itself, it represents the potential for a beautifully virtuous cycle: production stops being just where our development code runs into issues, and it becomes where part of our development process lives.

---

Christine Yen’s talk took inspiration from the Marvel Cinematic Universe (with a small dabble into DC Justice League towards the end to reference the broody Batman) to explain to both Devs and Ops the importance of shifting the production feedback loop all the way left into the _developer’s_ hands. With the right set of tools and some cultural willingness to change, Observability provides the entire team with quantitative data straight from the real world, making it the latest superpower for developers to harness in the ever-changing, software-focused world we work in. 
 
## Intro Sequence: Exposition

Christine is the co-founder of honeycomb.io, a company that practices what they preach. She started with a brief survey of the room to get a sense of who identifies as “ops” and who identifies as “developer”. She is firmly in the developer camp (and delights in it). 

As part of the exposition, her early career included glee at being a fast developer. WRITE-TEST-COMMIT! It was some time later she met her first Ops person and started to understand how her cycle of development actually included debugging truly impactful changes pushed to production, which the ops team had to deal with. 

Through continued partnership with Ops, Christine learned about taking responsibility for the changes she made, rather than giving the auto-response “it worked on my machine”. A February 2019 Medium post by Subbu Allamaraju at Expedia ([https://m.subbu.org/incidents-trends-from-the-trenches-e2f8497d52ed](https://m.subbu.org/incidents-trends-from-the-trenches-e2f8497d52ed)) helps show the reality that change in production lead to production incidents. Allamaraju analyzed incident data and provided the following insight: “Observation 1: Change is the most common trigger” (not root cause, actual trigger of an incident). A change could be any number of things: automated ci/cd releases, partially automated legacy deploys, manual changes, config updates, and/or experimental changes like A/B tests. 

> Observability: "What is my software doing, and why is it behaving that way?" ~ Christine Yen

If the the first wave in getting dev and ops to work better together was teaching Ops to develop, the second wave is to teach devs to own their code all the way into production. Observability as defined on Wikipedia is “understanding the behavior of a system based on knowledge of its external outputs.” As simple yet rigid monolith apps are replaced with flexible yet complex collections of services, Observability is the bridge to continue to blur the line between DEV and OPS to create positive software outcomes for everyone. 

## Character Development 

What is a standard(ish) software development process? 

1.	Design documents 
2.	Architecture review 
3.	Test-driven development 
4.	Integration tests
5.	Code review 
6.	Continuous integration 
7.	Continuous deployment 
8.	CELEBRATE! 
9.	Observe our code in production 

Items 3, 4, and 6 in the list above are generally agreed to be "testing" and lead to approaces like test-driven development. Tests form a feedback loop from non-prod back to the developer. Successful dev teams do lots of testing! Christine affirms that item 9 above, “observe our code in production”, can be seen as an extension of the testing process. Unlike the testing we can do in non-prod, observing our code in production provides exposure to eal world usage and situations we cannot predict with static non-prod testing. Try as we might to anticipate everything, once our code is in a production environment with users actually using it, unpredictable outcomes will happen.

_Note from Rainya: My favorite use of American pop-culture reference material in the whole presentation was when Christine used Meeko (the racoon from the animated film Pocahontas) to illustrate the "expected" outcome, and then Rocket (the racoon from Guardians of the Galaxy), for the "actual" outcome._

As a real world example of the value of including Observability in software development, @ceejbbot recently posted a thread about how her team  prioritized observability, leading to the direct quote “it no longer feels like a scary fucking conundrum” in regards to performance problems they were experiencing. ([https://threader.app/thread/1169408562855940097](https://threader.app/thread/1169408562855940097))

By folding Observability into the development process, we create a virtuous cycle that shortens the feedback loop from production to the developer. Adding “Observe” in the development cycle is more than a set of tools or a set of data. It is also about process and the culture of a team practicing looking through the code together. 

## Training Montage 

> “Having Thor’s hammer doesn’t make you Thor.” ~Christine Chen 

### Teach Prod Tools to Speak Dev

**Support natural dev vocabulary**

  -   Remove assumptions that don’t tie back to my area of expertise 
  -   Help developers understand how to reproduce the issue
  -   i.e. “latest deploy increased latency in the payments endpoint which significantly is affecting our biggest customer” 

**Support (custom) high-cardinality data**

  - Understanding the nouns that matter and also have high-cardinality data is important to being able to slice and dice what is happening 
  - i.e. “build_ID” matters day to day for a developer to understand change impact. Has it shipped? Where in the process is it? 

**Instrumentation should evolve alongside code**

  - Instrumentation is another form of expressing what code is doing 
  - Like docs and tests, it should be updated whenever changes are made
- All of this leads to being more comfortable understanding what is happening in production 

**Start with the familiar**

  -	Tracing is one of most friendly options for developers which describes workflows that feel familiar and is is not just for distributed systems (can help monoliths and single services, too)
  -	Tracing is like “Chrome dev tools for now-browser software!” that allows you to see what’s happening in the wild of production 
  -	Groups logs can form the basis for a trace

> "Tracing is what happens when logs grow up." ~Christine Yen

### Discovering New Powers

**Know WHAT code to write**

-	Users complain something is slow… what’s slow? For who? When?
-	You can connect a dev profiler and try to recreate, but with data streaming from production, you just go there for the answers on what code is acting up.
-	You can dig into what’s really happening, starting with a high level signal 
-	Zoom in, remove the noise, zoom in further, find an actual example, iterate on the resolution
-	Stop guessing at root causes! 

**Know HOW to write the code**

-	Understand what is “normal” for the system
-	You make a change in response to a ticket, but Will it work the you want? How many people will it impact? Will it do more than is needed, causing problems for other people
-	Instrumentation is like adding lightweight debug statements in production 
-	Allows us to understand in real time with flexibility
-	Is an edge case a true edge or is a normal behavior for the general user population we just didn’t anticipate? 
-	Yes, this overlaps into the domain of _product managers_ who figure out how users are most likely to behave. This is often qualitative data from customer discussions and intuition. Instrumentation gives quantitative data developers can use to confirm or counter the intuition of their product team. 

**Know if the code WORKS**

-	Complex systems have infinitely long lists of black swan failure options
-	Rather than figuring them all out and immortalizing them in pre-prod tests, can find out about new issues immediately and respond quickly to reproduce and resolve it (adding tests back in for future) 
-	“Test in production” to experiment and check hypotheses (of course test before production, too)
-	Geckoboard example/story: feature issue reduced to bit packing problem; rather than trying to dig and solve and make it perfect in non-prod, team came up with a couple different rapid implementations, pushed them all to production and flowed production traffic from the different options into an observability tool then threw it all away; they were quickly able to assess which one worked best and ship that one all the way to resolution; it was one day’s worth of work to discover a fix vs multiple days of trying to figure it out in preprod
-	Feature flags + observabily = yellow heart of love emoji
-	Use the flags to segment traffic and shove it into tooling; see top level metrics broken down by what functions are flagged “in” for a given day; answer the question “do our expectations for a feature match reality when flagged in?” before you turn it on for everyone

## Building a Super Hero Crew

- Build a shared brain by tapping into teammates’ knowledge via shared context and answer “why does this matter?” more quickly together 
- “Social” habits help in single player mode, too! All debugging is multi-player, even if the players are just the past, present, and future you 
- Look over your teammates’ shoulders and learn from their experience
- Support active and passive knowledge transfer 
- Active – post mortems and lesson learned 
- Passive – chatops and slack bots, too; instrumentation creates a papertrail to help teammates resolve issues on their own; share your work without effort; level up your skills on your own time as you work issues 
- Many people new to being on call observe that experienced triagers make “leaps of intuition akin to magic” but really, it’s just sufficiently advanced technology

## Broody Retrospective 

In the past, Devs cared about code in dev envs while Ops cared about production. 

Observability REDUCES THE BATTLES WE FIGHT, allowing us to skip the entire CGI battle sequence. It reduces the tension in release and reduces when we get woken up in the middle of the night. We can ship more reliably. We can think through expected vs actual outcomes, be resilient, and do what we love, avoiding burnout along the way. 

**For Operators**: think how you can share the great responsibility and (great power!)

**For Developers**: embrace observability; bring prod closer to dev; ground your code in the reality of production insight, not just intuition 

## Questions & Answers

**COMPLIANCE**: Production Write vs Read! Adding production to the dev process is reading of signals about how our code behaves, not writing or changing anything production. Other option is to rely on users to tell you when things go wrong. 

**LOW PRODUCTION TRAFFIC PRODUCTS**: Still meaningful for any setup; taking software you deeply understand and putting it into an environment you don’t deeply understand, observability can still help; feedback loops are necessary at every stage for ever product; exception trackers only work if the thing that you don’t understand throws an exception 

**WHAT ABOUT WHEN IT’S SEEN AS NICE TO HAVE**: Show them what you can do when you get there; it’s like tests -- you like tests right?!; work on speaking the language of devs who don’t want to slow down; counter perception that instrumentation is a big heavy lift and can be incremental that evolves with the code you’re shipping

**HOW CAN YOU CHECK IF YOU’RE DOING IT WELL?** Do you have outages or incidents where you don’t know the answer? If you have tools in place and still can’t figure out why something is busted, signal something isn’t right yet. Easy to have 5 tools do the same thing with none of them giving you an actual ANSWER! Seeing a graph, tells you something is off, but doesn’t give you the WHY behind it!

**IS UAT A WASTE OF TIME?** Christine didn’t know what UAT stood for, so guessing it isn't part of her world! Once defined as "user acceptance testing", her take was having end users testing it with their goals in mind can be useful, but still you need to ask if you will get coverage in a way that you care about. This sort of testing still relies on predicting what will matter in a world where you just cannot predict without gathering data. She does see a a trend towards moving away from staging environments as production observability increases.



