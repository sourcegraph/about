---
title: 'Building a product, one user interview at a time'
authors:
  - name: Quinn Slack
    url: https://twitter.com/sqs
publishDate: 2016-05-30T14:45-07:00
tags: [
  "blog"
]
slug: building-a-product-one-user-interview-at-a-time
description: 'We'd like to open our doors and show how we improve Sourcegraph using user research — and share some things we've learned along the way.'
heroImage: https://images.ctfassets.net/le3mxztn6yoo/4ERYZHPMN2EiaoYY6OAMA8/9b474c0c40dce4975c2052ece22b73f3/0_flB7naFAbUKi1z8a.png
published: true
---



**From the very beginning at** [**Sourcegraph**](https://sourcegraph.com)**, it's been our goal to build a product so helpful that people could never go back to programming the old way.** Sourcegraph helps developers discover and understand code, and to address such a complex need requires us to deeply understand our users.

We'd like to open our doors and show how we improve [Sourcegraph](https://sourcegraph.com) using user research — and share some things we've learned along the way.

### The setup

User research is best when it mimics a familiar environment for your users. When designing research for a product that is dependent on space and context, like understanding how a parent uses a shopping cart at the grocery store, you might perform an ethnographic study by taking a trip with them to their local grocery store to better familiarize yourself with their life and the decisions they make before, during, and after the trip. But for programmers (who can code wherever there's enough space for a laptop), we just host our sessions here at our office in San Francisco. To do this, we prepare:

*   A testing laptop that runs a working prototype of Sourcegraph in a production environment and a second screen so everyone can see what the participant is doing in real time. An audio recording device (a smartphone is fine) is great for reviewing any feedback or dialogue later.
*   A quiet place (any office with a closed door is fine) to conduct the interview to limit distractions.
*   A cohort of users who actively use the product and are willing to give honest feedback, as well as a control group who has never used Sourcegraph before.
*   Sticky notes and/or a whiteboard for later analysis.

![0*flB7naFAbUKi1z8a](//images.contentful.com/le3mxztn6yoo/4ERYZHPMN2EiaoYY6OAMA8/9b474c0c40dce4975c2052ece22b73f3/0_flB7naFAbUKi1z8a.png)

The first iteration of our user research station.

#### Framing the research: what are you trying to solve for?

_Is your product a vitamin or a painkiller?_

This question is often used to identify the core value of a product and to understand the painpoints that a it addresses. It's a great question to ask before you start your user research to help narrow your focus.

The first thing you need to do is to define your core thesis — How does the product resonate with users? What kinds of problems does it solve? What product areas need messaging clarification or education? What hypotheses need to be tested? While you want to answer _every_ question you have about your product, the reality is that you will probably only have time to interrogate one or two fundamental hypotheses in the span of a 1-hour conversation. Large corporate research is often plagued by a large number of stakeholders with different business needs that dilute the project's focus and integrity, making it impossible to inform strategic decisions. If this happens to your team, you might as well have users take a Survey Monkey questionnaire for thin, broad insights.

#### Product refinement or rapid innovation?

Your users won't tell you how to build your product but with the right line of questioning, they can create a foundation of behavior to inform your product direction. As a developer, researcher, product manager, or combination of all three, your job is to package and prioritize your observations and to create solutions that anticipate future functional and emotional needs. As Henry Ford famously said, “If I had just listened to my customers I would have built a faster horse.” Our hypothesis was aimed at understanding the difference between how programmers currently search for code, and how they could potentially search for code and usage examples.

#### Testing a new way of thinking

For our research, we wanted to test a completely new user interface to allow our users to explore annotated source code and examples, similar to the way we explore Wikipedia articles and find related but new information through our own curiosity. Can people actually think of code like this? If not, how can we change the limitations around how we interact with open source code? And what kind of new behaviors would this create? We started thinking of more questions than could ever be answered and settled on 3 main hypotheses to test around one of the most overlooked and necessary parts of a product: user education.

With the page redesign, we focused on three questions for each section of our website:

1.  Messaging: Do users understand what Sourcegraph does? If so, how deep does their product knowledge go?
2.  User needs and behavior: What are the first actions a user takes on each of the three pages we show them?
3.  Next steps: What are quick fixes and what are more strategic, long term improvements we can prioritize?

![0*C0YDFBLNJ tREgSj](//images.contentful.com/le3mxztn6yoo/2aRrMbgbQM66ASaI4kiEaw/a0845d5a941553226a71fcb643914912/0_C0YDFBLNJ_tREgSj.png)

A user giving feedback at our old office.

### Recruiting your users

If you're new to user research, it may be a good exercise to interview people you already know. We started by reaching out to friends and colleagues who were familiar with Sourcegraph from the beginning. With a strong rapport already in place, it's a great time to test out your interviewing skills and find what questions create meaningful feedback.

In order to talk to users who had little to no experience with Sourcegraph, we reached out to qualified candidates over Twitter and started asking our friends to reach out to their friends and get feedback on Sourcegraph. If you don't have a large list of friends to draw from, you can always reach out to other programmers on Hacker News or other programmer-friendly sites, although expect to compensate them for $25–75/hr for their time.

### Discussion guide (~15 minutes)

Getting to know each other: when a user comes into our office, we start the interview by asking very simple, open-ended questions to outline their current workflow for writing code. We take note of what software they use, their opinions on different coding strategies, and what projects they're currently working on. We do this for two reasons: to help them feel comfortable in the interview and to create a baseline understanding of their workflow for later questioning.

### Revealing the new product features (~30–45 minutes)

After establishing a better understanding of a person's profile and workflow, start diving into your product. Learning to interview well takes time to master but here are some tips to help frame your questions.

Be wary of leading questions that elicit untrue responses. Leading questions might sound like “would you say that…” or “do you like this feature?” They imply an answer that's already been forecasted and don't allow for true exploration of a topic. Your job isn't to boost your ego but to understand the difference between what people do, and what they say they do.

Instead, try these open-ended prompts:

*   _Tell me about your process. What tools do you use to solve problems?_
*   _Can you think back through a day last week when you used some of these tools?_
*   _Do you remember anything that was helpful or frustrating?_
*   _Tell me about a time when you tried to do something and the product failed you._

### Wrap up (~5–10 minutes)

_How would you describe Sourcegraph to a non-programmer friend? To a programmer friend? What about to family members who aren't programmers?_

The wrap up questions are used to cover any additional topics or follow-up on any stories that sounded interesting during the interview. This is often a great time to read back through your notes and dive into topics that seemed tangential and became more important in retrospect.

### Developing insights

You've completed your research, started to see patterns in the questions, and you feel like a pro interviewer. But what now?

One of the hardest parts of research is framing the insights. It's easy to have a knee-jerk reaction to what users tell you during the interview process. Your goal at the end of this research should be to identify the consistent behavioral themes.

![0*WeoJcz19zALJSUsE](//images.contentful.com/le3mxztn6yoo/3425F3kYdOKQwwKqUYCgI6/cb544f55347e23ce2bd11427d12cc837/0_WeoJcz19zALJSUsE.png)

_The prototype of a new user experience, surrounded by user insights and opportunities._

### A frequent outcome: more, not fewer, questions

The outcome of user research that many people hope for is:

_research + insights = clear product vision_

But often looks more like this:

_research + insights = assumptions challenged, new questions raised_

The overturned assumptions and new questions are the fuel for the next cycle of your product development. User research won't give you the answers, but it will guide you to be sure you're attempting to answer the right questions.

### About the author

_Quinn Slack is the CEO and co-founder of Sourcegraph, the code intelligence platform for dev teams and making coding more accessible to more people. Prior to Sourcegraph, Quinn co-founded Blend Labs, an enterprise technology company dedicated to improving home lending and was an egineer at Palantir, where he created a technology platform to help two of the top five U.S. banks recover from the housing crisis. Quinn has a BS in Computer Science from Stanford, you can chat with him on Twitter [@sqs](https://twitter.com/sqs)._
