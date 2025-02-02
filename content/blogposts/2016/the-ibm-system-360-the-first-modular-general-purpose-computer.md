---
title: 'What we can learn from the IBM System/360, the first modular, general-purpose computer'
authors:
  - name: Beyang Liu
    url: https://twitter.com/beyang
publishDate: 2016-08-26T00:00-07:00
tags: [
  "blog"
]
slug: the-ibm-system-360-the-first-modular-general-purpose-computer
heroImage: https://images.ctfassets.net/le3mxztn6yoo/3xizkAu6Gsu6ukwCCgUqSa/ab2af09166b2e09adfbcea9637293989/1_O8716r4hduFUkb6tjAOR5A.png
published: true
---



At [Sourcegraph](https://sourcegraph.com/), we believe building for the future requires learning the lessons of the past. This is the first in a series of blog posts that cover historical anecdotes about software engineering that have inspired us as we build [tools for the modern developer](https://sourcegraph.com/). We're sharing these, because we think they hold lessons that are still very relevant to writing software today.

### Tie-dye, lava lamps, and enterprise software

In the 2nd season of _Mad Men,_ Don Draper's “television expert” introduces the IBM System/360 to his boss. All work in the office stops. Everyone just stares at the giant calculator like it's an alien. The cameo marks the System/360 as something of a cultural icon of the 1960s enterprise IT world. But it was much more than that. It was a monumental feat of engineering that ushered in a new era of computing.

![1*O8716r4hduFUkb6tjAOR5A](//images.contentful.com/le3mxztn6yoo/3xizkAu6Gsu6ukwCCgUqSa/ab2af09166b2e09adfbcea9637293989/1_O8716r4hduFUkb6tjAOR5A.png)

Its longevity is a testament to the durability of its design principles. The IBM System/360 is the longest-lived computer architecture of all time — the software written for it in 1965 _is still running_ on some Z-series IBM mainframes today.

### The modular monolith

Until the System/360, the mainframe market was highly fragmented. Many parts, from hardware components to operating systems, were specific to a particular model and interoperability was low. IBM had dozens of independent, incompatible product lines, and it was collapsing under the cost of support and maintenance.

![1*UwWv Ci98coMURBipFsjRw](//images.contentful.com/le3mxztn6yoo/3Yqry4Ibeg0gqk6EOQUk8k/aba891147649365192ccb285db92866c/1_UwWv_Ci98coMURBipFsjRw.png)

An IBM engineer emphasizes the System/360's modularity and compatibility in this tech talk from the 1960s.

The System/360 introduced a new paradigm: a family of computers that spanned a wide range of performance characteristics, but all sharing a single architecture and running the same software. In fact, the name “360” came from the idea that a single computer could serve a full spectrum of customers.

The System/360 was also highly upgradable. Customers could swap out older modules for newer ones without replacing the entire system. The interfaces between these modules was well defined and documented. Over time, an ecosystem of third-party components emerged that was built on top of what might have been the first computing “platform”.

![](/blog-images/1*1VpEZgyMbToY40z4kSqC-w.png

One of the many third-party components built for the System/360

### Over budget, over time

The IBM System/360 was one of the most expensive technology projects of its time. Development costs topped $5B — half the cost of the atomic bomb and twice IBM's annual revenue at the time.

> Development costs topped $5B — half the cost of the atomic bomb

Like many other engineering efforts of the past and present, the System/360 ran over budget and time. And though there was a lot of innovation on the hardware side, it was the software development that ended up becoming a black hole of time and money.

The original 1964 budget for OS/360 was $25M, enough to fund a team of twelve “program designers” who led a team of sixty programmers in implementing 40 “functional segments” of code. By October 1965, the team had grown to 150 programmers and the expected shipping date had been delayed 6 months. By 1966, IBM had over 1,000 people working on the project. Between 1963 and 1966, more than 5,000 person-years were poured into the design, implementation, and documentation of OS/360\. Despite these resources, the project shipped over a year late — with bugs.

Despite the colossal cost overrun, the System/360 became a success. By 1971, the System/360's annual sales reached $8.3B. Soon after, IBM eliminated all of its other computer lines and cornered the mainframe market with 70% of the market. Two decades later, over half of IBM's revenue still came from System/360-related products. In addition to IBM's windfall, tens of thousands of non-IBM programmers found employment through the 1960s and 70s working on third-party modules for the system.

### What we can learn

There are many lessons that you can take from the story of the System/360\. Many of them are eloquently described in Frederick Brooks, Jr.'s seminal book _The Mythical Man-Month_ (Brooks was the development lead of OS/360). Here are a few that we've taken away [at Sourcegraph](https://sourcegraph.com).

1.  **Reinventing the wheel is expensive.** It means not only wasting effort building something that already exists — it also means maintaining and supporting the different versions over time. A lot of software systems today still seem closer in spirit to the pre-System/360 systems, though these are being replaced by systems that are more modular and reuse code that has already been written.
2.  **Modularity + understandable interfaces = software longevity.** Most software is short-lived, but define the right interfaces and help others build on top of them, and your code may last a lifetime.
3.  **Development cost is a company-killer.** The System/360 was a success because its sales over time exceeded the wildest expectations. But its cost estimate was off by over 2 orders of magnitude. Most software projects will not generate such windfall revenues but will have to deal with underestimates of time and cost. Products and services that help development teams become more efficient may save entire companies from financial ruin.

These lessons drive us in our mission to improve the current state of software development. We hope you'll find them valuable in your life as a programmer, as well.

Have another interesting computer history lesson to share? [Let us know!](https://twitter.com/sourcegraph)

_Editor's note: the original version of this article overstated the degree of speciation in the 1960s mainframe market. The language has been edited to clarify the transition between the pre- and post-System/360 world._

### About the author

_Beyang Liu is the CTO and co-founder of Sourcegraph. Beyang studied Computer Science at Stanford, where he published research in probabilistic graphical models and computer vision at the Stanford AI Lab. You can chat with Beyang on Twitter [@beyang](https://twitter.com/beyang) or our community [Discord](https://discord.com/invite/vqsBW8m5Y8)._