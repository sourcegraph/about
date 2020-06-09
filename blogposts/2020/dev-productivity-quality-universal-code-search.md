---
title: "Universal Code Search transforms developer productivity, quality, and codebase management"
author: Adam Herzog
publishDate: 2020-06-12T10:00-07:00
tags: [
  blog
]
slug: dev-productivity-quality
heroImage: https://about.sourcegraph.com/sourcegraph-mark.png
published: true
---

The way the world creates code has shifted. We’ve entered the era of Big Code.

Big Code is all about how code is growing in:
- Volume: Exponential increases in the amount of code.
- Variety: Way more complexity in the languages, tools, and processes for delivering software.
- Velocity: Accelerated delivery cycles that mean code is changing faster and being shipped virtually every day.
- Value: The reimagination of business models and practices through high-quality software.

This digital transformation has been great for everyone, leading to countless innovations that improve our lives. But it’s been hard on developers.

The problem is that in the face of this increased complexity, developers still need to efficiently write and make changes to their enterprise’s code to meet tight deadlines and stringent quality and security requirements.

Developers need the ability to traverse the complex universe of interdependent codebases — a plethora of different programming languages, code hosts, repositories, version control systems, services, and APIs — to find the code and other information they need to do their jobs in today’s collaborative, multi-dimensional development environment.

Traditional developer tools such as editors and IDEs were built for individual developers working on a sole repository, not for teams working with large codebases at scale, and thus are severely limited for search. GitHub, in its effort to broaden as a software development platform, is improving its code search capabilities, but a single code host inherently can’t be a universal, cross-repository solution.

Sub-optimal developer productivity in the era of Big Code is a losing proposition for any company. Development lags mean late releases, poor quality, security risks, frustrated teams, unhappy customers, and uncompetitive products.

Companies need to prioritize increasing the efficiency and quality of the core software development process itself.

#### Code search is the highest leverage activity for improving developer productivity and quality

Code Search is the most common specific activity performed by software developers. They do it every workday. They do it several times per day. In fact, the average number of times, according to academics and industry research, is 12 queries per day.[^1] 

Big Code changes how search must be done. Code search must now be universal – across different programming languages, code hosts, repositories, version control systems, services, and APIs – in order to be effective for software developers. 

Existing tools such as Grep, OpenGrok, and GitHub Search are not up to the challenge of searching Big Code . With the variety and volume of code growing hosted in different platforms, individual tool makers do not commit resources to search other tools’ code.

### Improve developer productivity

The Google study shows that each search activity takes “a few minutes.” Quick searches are often performed in an IDE across a small subset of repositories with code written in one programming language. The difficult searches are finding the needle in the distributed code haystack. 

In the era of Big Code, software developers need to be able to search across all the code they care about. Enabling developers to perform more nuanced queries (using [structural code search with Comby](https://about.sourcegraph.com/blog/going-beyond-regular-expressions-with-structural-code-search)) across more code, programming languages, repositories, and other technologies means finding the right answers faster.

<div style="padding-left: 2rem">
  
**“Sourcegraph improves my productivity and ability to write clean code by 2-3x."**
</div>
<div style="padding-left: 4rem">
  
**— Uber senior engineer**
</div>

Sourcegraph Universal Code Search reduces the amount of time searching, by retrieving better, faster, and more accurate first-time search results, across all code. This minimizes the need to refine queries, execute the search multiple times, and overcome wrong answers. There is a clear increase in productivity for every developer that uses Sourcegraph.


### Faster Incident Response

One of the most compelling use cases for Sourcegraph is accelerating incident response. When critical business applications are interrupted, businesses can directly lose revenue, or violate Service Level Agreements with their customers. Reducing the time required to restore service is critical.

The first action in responding to an incident is to identify the root cause. SREs (Site Reliability Engineers) use Sourcegraph Universal Code Search to quickly find the root source of errors and vulnerabilities that can result in web site crashes and business application unavailability.

With tight SLA response times, minutes saved with Sourcegraph matter. Because of Universal Code Search’s ability to search across all languages, repositories, and code hosts, SREs are able to perform the necessary queries to find the root source, instead of wasting valuable time trying to track down issues. With stringent time limits on the maximum incident response time allowed by SLAs, Sourcegraph is incredibly valuable for SREs to quickly identify the issue with a query searching across all of an enterprise’s code. For mission-critical business applications (like in Ecommerce and other industries), this time savings also minimizes losses in revenue due to downtime.

For DevOps and security teams, Universal Code Search can pinpoint the source of an error, identify code changes responsible for the incident, evaluate the performance of specific lines of code in production, and apply patches and upgrades. All of this is performed across all code, including all of the programming languages, code hosts, repositories, version control systems, services, and APIs are used by the company.

### Release Faster

Developers use Universal Code Search for many use cases: learning a new block of code, finding code that must be changed, better code reviews, and understanding what dependencies exist in the source code. One important benefit for developer teams is that Sourcegraph enables them to release better software faster, without sacrificing code quality or introducing new security risks.

As documented by industry and academic researchers, search is the most common developer task, ahead of even writing code. By reducing the time on search, and increasing the quality of search results, developers have more time to spend on actually developing new features, maintaining a codebase or fixing bugs. The business value comes not just from saving hours of developer time, but by delivering new releases to customers days or weeks faster. For innovative companies, beating your competitors to market with new features means winning market share.

<div style="padding-left: 2rem">
  
**“Seriously, Sourcegraph is the best tool we’ve invested in. It’s made me insanely more productive and efficient at writing code here. I’m able to understand and deeply dive through all of our microservices and get my work done really fast. This is absolutely incredible.”** 
</div>
<div style="padding-left: 4rem">
  
**— Lyft engineering manager** 

</div>

### Better insight into your codebase

For too many companies, their large codesets are just an enormous black box. Sourcegraph lets you understand what is changing, along with what libraries are and are not being used. Deprecating libraries has always been risky, as developers have never been sure that all dependencies have been accounted for. Sourcegraph Universal Code Search provides precise insights into your codebase that makes large code sets less brittle and allows faster changes.

### A data-driven approach to software refactoring

At a major hospitality company, Sourcegraph Universal Code Search is absolutely essential because its code is split across GitHub.com and GitHub Enterprise. Every developer uses it and relies on it.

There was a duplication of effort with 20 different implementations of a React data table. Developers used Sourcegraph to find all data table implementations and convinced those teams to use a new common one. They collected data from those teams on how long it took them to build their own data tables, which was about 10 to 20 hours each, and presented a report to the CTO using data pulled from Sourcegraph showing this new data table component saved 300 hours of work total. This quantitative argument led to the CTO creating an internal component library team – and it wouldn't have been possible without Sourcegraph.

Now that the component library team exists, they show their impact in the same way. For each component they offer, they count how many times it has been implemented, estimate how long it took, and show how the library team was able to replace those. This impact grows over time as more new teams use it.

### Universal Code Search for developer productivity and quality

With increasing volume, variety, velocity, and value of code, Big Code is changing how developers work. Traditional tools don't work for delivering software in this era with different programming languages, code hosts, repositories, version control systems, services, APIs, and other tools. Code search is a regular daily task for software developers that has become difficult, since it must be universal in order to be effective.

Highly productive engineering organizations make searching across massive codebases, comprehending unfamiliar code, and sharing institutional first-order concerns. To achieve this, engineering teams require a tool that provides Universal Code Search.

Sourcegraph Universal Code Search enables developers to explore and better understand all code, faster, with contextual code intelligence and large-scale code change management to improve developer productivity. [Request a demo or a call](https://about.sourcegraph.com/contact/request-demo/) to see how Sourcegraph Universal Code Search can transform developer productivity, quality, and codebase management at your organization. 

[^1]: This research was conducted by Google and the University of Iowa, and published in *Proceedings of the 10th Joint Meeting on Foundations of Software Engineering*, 2015. Full citation: Sadowski, C., Stolee, K., and Elbaum, S. "How developers search for code: A case study." *In Proceedings of the 10th Joint Meeting on Foundations of Software Engineering* (Bergamo, Italy, Aug. 30-Sept. 4). ACM Press, New York, 2015.
