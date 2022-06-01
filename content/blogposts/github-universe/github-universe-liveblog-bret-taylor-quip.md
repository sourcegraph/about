---
title: 'A conversation with Bret Taylor, CEO of Quip, at GitHub Universe'
authors:
  - name: Beyang Liu
    url: https://twitter.com/beyang
publishDate: 2016-09-14T00:00-07:00
tags: [
  "github-universe"
]
slug: github-universe-liveblog-bret-taylor-quip
heroImage: https://images.ctfassets.net/le3mxztn6yoo/fRzqBIhmOkMWQakgKMcUM/6410e64b54f0002874c9f153dda056b6/1_v90JbRraqWznmWkkDKmLzg.jpeg
published: true
---



A concise recap of a “fireside chat” with Bret Taylor, co-creator of Google Maps, CTO of Friend Feed, CEO and co-founder of Quip.


Q: First computer?
A: Compact Portable, about the size of a suitcase. The lid flipped out of the keyboard. Had one game, which took up all disk space. Every time, he had to reinstall it, wait 2 hours, play the game, and his dad would then delete. It was some early Wing Commander predecessor.

Q: Current favorite programming language?
A: Definitely Python

Q: Thoughts on transition to Python 3?
A: Slower than expected. Just now at Quip converting to Python 3, mostly because of coroutines and async support. They give a stronger incentive to switch over.

Q: First project you stayed up all night working on?
A: Almost every software project I’ve worked on I’ve stayed up late, because, you know, programming. Google Maps made me stay up late the most. The first real game I made was on a TI-85, a small side-scrolling game.

Q: Talk about AJAX and Google Maps
A: At the time when Google Maps launched, “web apps” weren’t really a thing. Google, with Gmail and Google Suggest, pioneered some of the first highly interactive web apps. At the time, there weren’t any resources on the Internet for doing this. “JSON” didn’t exist. They did all the data transfer in XML and parsing it in the browser. It was painful and slow, but no one had yet had the insight to leverage JS objects as data transport. So we ended up rewriting the app 2 or 3 times when they discovered new web dev techniques. Uncovered a lot of browser bugs and had to hack around it. It’s really neat how web technologies have matured into modular, scalable things like GraphQL.

Q: What do you think of improvements to JavaScript over the years?
A: It’s great, but if I have one critique of the JS community, it’s that there’s a lot of innovation, but it’s also very trend-driven. You can date startups by the JS framework they use, almost down to the month. Looking forward to stabilizing best practices so we can stop rewriting front-ends frequently. Things like real modules and React are enabling code reuse a lot more.

Q: You were involved in the original Facebook mobile effort. What was that experience like?
A: Mobile impacted Facebook more than a lot of companies, because we’re so popular worldwide. Some parts of sub-Saharan Africa have never used Facebook on desktop. It was definitely a difficult process to get started on mobile. Essentially had to retrain workforce on new technologies — a lot of false starts. Awkward transition for about a year and a half. But one thing we did very well was that when identified the platform shift, we just powered through all the obstacles and today, Facebook’s mobile team is one of the best.

Q: Compare Google and Facebook given you’ve worked at both
A: Google and FB very different cultures. Google shaped by academic heritage. Original office layouts were similar to Stanford Gates CS building office layout. Very rich design document culture. Almost formal and academic. Facebook was founded our of a dorm room. Much more of a “move fast, break things” hacker culture. No one-size-fits-all rule. Facebook in early days plagued by a lot of bugs, but moved faster than Google in a lot of areas. When you choose your engineering processes, you’re choosing your culture and what kind of org you run. It’s a trade-off you have to make, not a right-or-wrong decision.

Q: Google vs FB development environments?
A: Facebook invests a ton of time in making dev environments set up? Both FB and Google have huge monolithic repositories. To do that at that scale requires really robust tooling — unit tests for millions of lines of code, dependency management. Having one giant repo means you can do huge refactors and make sure it work (would be much harder with many different repos with different processes). That plays to FB and Google’s tech advantages — the ability to make large codebase changes even at their current scale.

Q: At Quip, how did you decide on architecture?
A: We were very thoughtful about architecture. So many form factors and targets. Core engine is C++ , use React on front-end.

Q: Any tips on architecture?
A: It’s a two-horse race between iOS and Android. Don’t sacrifice engineering cost for user experience. User experience matters more than engineering productivity. It’s tempting to look for a one-size-fits-all solution for engineering productivity, but make sure you have a really smooth, native-feeling UX.

Q: Do you still write code at Quip?
A: Every single day.

Q: Developer tools?
A: I’m old school. Emacs in a terminal. I have a small .emacs, but I like being able to go to any computer and be productive, so I try not to customize too much.

Q: What languages at Quip?
A: We have a comical number of languages like a lot of companies. We like it when a team of 2 owns a specific part of the platform. It gives them a deep sense of ownership. Full stack culture. The spreadsheets team is 2 people and they write the whole thing, end-to-end. People love being full stack.

Q: Is it difficult finding full-stack engineers?
A: We look for people who want that sense of ownership. People find it really rewarding — they get to learn new technologies. They get to feel that they created and owned a piece of the product.

Q: If there’s an app or startup that you wish you created?
A: Wouldn’t phrase it that way, but one product I respect a lot is Slack. Our mission is very similar to Slack’s — moving people away from the workflow of email. I respect the product, brand, and culture.

![1*v90JbRraqWznmWkkDKmLzg](//images.contentful.com/le3mxztn6yoo/fRzqBIhmOkMWQakgKMcUM/6410e64b54f0002874c9f153dda056b6/1_v90JbRraqWznmWkkDKmLzg.jpeg)