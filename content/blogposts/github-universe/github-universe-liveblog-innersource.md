---
title: 'InnerSource and reaping the benefits of open source behind your firewall, a discussion at GitHub Universe'
authors:
  - name: Beyang Liu
    url: https://twitter.com/beyang
publishDate: 2016-09-14T22:22-07:00
tags: [
  "github-universe"
]
slug: github-universe-liveblog-innersource
heroImage: https://images.ctfassets.net/le3mxztn6yoo/3fg8DZm2jCgma0GoK8M6kM/fcb7325505954579a80ae76b1f5d5798/1_OIAqPdJH9_SsxxfzTDu0SA.jpeg
published: true
---



Engineering leaders from Bloomberg, Walmart Labs, Line, HP, IBM, and GitHub talk about open source inside enterprise (or “inner source”). We paraphrase the key points here.

![1*OIAqPdJH9 SsxxfzTDu0SA](//images.contentful.com/le3mxztn6yoo/3fg8DZm2jCgma0GoK8M6kM/fcb7325505954579a80ae76b1f5d5798/1_OIAqPdJH9_SsxxfzTDu0SA.jpeg)

“InnerSource” is a new term for something that programmers have been doing for a long time. It’s about openness, transparency, and increased efficiency. It’s easy to describe, hard to do, but if done right it can be transformative for your company’s processes and culture.

Today, we hear from practitioners on the forefront of adopting InnerSource for many different industries.

*   Panna Pavangadkar of **Bloomberg**, Global Head of Engineering Development Experience
*   Yasuhiro Inami, iOS engineer of **Line**, one of the fastest growing social networks and messaging apps in Japan
*   Jeremy King, Senior VP, CTO of Global eCommerce **Walmart**
*   Joan Watson, Director of Engineering IT of **HP**
*   Jeff Jagoda, Senior Software Engineer of **IBM**
*   Moderated by Kakul Srivastava, VP Product Management of **GitHub**

Q: What’s your role at your company? What are the business reasons why inner sourcing is important? What’s the one thing you've learned about inner source that most people don’t know.

Panna: The focus of my her department is improving the developer experience and productivity. Their core product is the Bloomberg Terminal. Inner Source is not new to Bloomberg (they used to call it “collaboratively sourced”). Their competitive advantage is the ability to come up with new ideas and ship them quickly to consumers of the terminal. Three pillars to making inner source successful:

*   getting community excited, creating buzz within your organization
*   making it possible to contribute to features you’re not directly responsible for but see an opportunity to add value.
*   getting management buy-in on why this is important and getting the encouragement to push the boundaries

Yasuhiro: Line was started in 2011, 220 milllion MAU, recently listed on Tokyo and NYSE. Their mission is to connect communication and entertainment for their users. His background is web development and has been at Line for 5 years. He works on inner source during the week and hacks on open source during the weekend.

Jeremy: Walmart Labs is a global division with offices around the world. They’re responsible for all of Walmart eCommerce sites. They were given the mandate of rebooting Walmart’s entire technology division and basically started from the ground up. To do this, you want to create an “irresistible development environment” — best practices, modern tools, strong code review processes. They also focus on experiences that combine digital and physical experiences (e.g., scanning an item in store and paying for it). Inner source helps spread knowledge around, unlocking collaborative bottlenecks and eliminating territoriality around private code. Walmart Labs has been inner sourcing since the beginning.

Joan: HP is an active member of the Linux community. Open source has always been a “part of their DNA.” What’s changing now is the specific tools they’re using. She works across organizations and roles (engineers, data scientists, managers) to improve developer productivity. Inner source is an amazing competitive advantage for HP. They've built a “Google-like developer experience” inside their company. And it helps them accelerate time to market. One of the big challenges is a big culture shift that they’re working through, but the benefits justify the effort.

Jeff: IBM sees inner source as a way to improve efficiency and encourage the spread of shared knowledge across the company. The coding part is just the tip of the iceberg of the “social coding” shift. It also involves changes to project management, staffing, dependency management, relationship between security team and dev organization (training squad or quasi-regulatory agency?)

Q: Have you seen business results? Have you seen measurable ROI tied to the adoption of inner source?

Jeff: Tying to dollars is hard, but we’re measuring other metrics. Our most productive teams (on social metrics) are also the most productive teams and the best adopters of modern best practices like continuous delivery. Our policy and governance teams are also much quicker. Changes to official policy used to take 6 months; now you can have a pull request merged in a day.

Panna: Internally, Bloomberg created a scoresheet where we scan all our repositories with a Contributing.md and look at other stats (forks, help wanted issues). We’ve kind of gamified the experience to get people excited about sharing things. Another interesting case study was a recent Businessweek issue that was about code. The journalists on that issue used GitHub to collaborate on the articles, even though none of them were programmers.

Jeremy: It’s amazing how much higher quality the code that people open source is. That’s a thing that’s hard to measure exactly, but the improvement is obvious.

Q: What’s the single biggest challenge so far?

Jeremy: They had a guy quit because he became the only expert on an area of the code. He spent all his time reviewing and responding to issues and couldn’t code anymore

Yasuhiro: The firewall makes it more difficult to collaborate. If more things were open source, this Wouldn't be an issue.

Joan: there's a big culture shift required, especially for people accustomed to doing things a certain way.

Jeff: Tension between security risk and the productivity associated with greater sharing.

Q: Are there any dealbreakers for inner sourcing?

Joan: It would probably be security — if there was a security breach of some sort. We work closely with our security team and get feedback frequently on the architecture and general direction.

Q: Can you elaborate on how you’re dealing with security concerns?

Jeff: We’re investing in automation to flag patterns that might indicate security breaches or code leakage. There's still a long way to go in quantifying cost and risk (in some cases, it might be cheaper to just let someone steal code).

Jeremy: there's no going back. We just have to deal with it and learn more about encryption to make sure things are secure while they become more open.

Panna: Yeah, the ship has sailed. Her focus is on ensuring their developers understands how to collaborate effectively, across different geographic locations and cultures.

Jeff: IBM has learned from a couple of painful experiences to shift away from super strict compliance enforcement. If someone is doing something a certain way, there's probably a good reason for it, so now we try to understand and learn why someone is doing something that might go against our inner source policy and figure out if it’s helping or hurting our business.

Q: Final question: are there specific ways that make your inner sourcing approach unique due to the constraints of your specific industry?

Panna: Inner source helps people help themselves — you can submit a pull request without having to wait on someone’s answer to your question. This is especially important for us because of all the different components and pieces of information we have tie together.

Jeremy: I don’t think there's a lot of things specific to retail. A lot of the stuff we do translates to other industries. For example, we’re releasing an open source React framework soon called Electrode that should be useful for a wide range of web apps.
