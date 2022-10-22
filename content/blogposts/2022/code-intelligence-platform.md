---
title: "From code search to a code intelligence platform"
publishDate: 2022-09-27T10:00-07:00
description: "Sourcegraph is starting to go beyond just code search, which helps you find matching lines in code. We want to help you find answers in code, and we call this code intelligence."
tags: [blog]
slug: "code-search-to-code-intelligence"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/4.0/to-code-intelligence.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/4.0/to-code-intelligence.png
authors:
  - name: Quinn Slack
    url: https://slack.org

---

Code search helps you find *matching lines in code*. That helps, but it's often not enough, especially as your codebase gets more complex. You need to know who wrote that code, or the top usage patterns of a function, or which repositories use it, etc. Sourcegraph will increasingly help you find these kinds of *answers* in code&mdash;and in metadata from all your dev tools that know stuff about code.

We call this a code intelligence platform (motto: *"answers, not just matching lines"*), and you can see [Sourcegraph 4.0](/blog/release/4.0) taking the first steps toward that vision, beyond just code search.

Why is this important? Why now? Let's go back in time to 25 years ago...

#### The law of conservation of code complexity

When I started coding [~25 years ago](https://slack.org/why-i-love-code), coding was complex. Since then, dev tools have massively improved: editors, build tools, version control, testing, continuous deployment, new programming languages, debuggers, libraries, frameworks, linters, observability, etc. So, why is coding even more complex today than it was 25 years ago?

Because software is much better and does much more than 25 years ago. Improvements in dev tooling let us spend our "complexity budget" on building better and more useful software, instead of, say, toiling over C code in a primitive editor to format and send emails via SMTP (which sounds quaint but I guarantee you it consumed hundreds of human lifetime-equivalents).

Never in the history of software has a dev tool actually yielded a permanent reduction in total complexity. Never has a company said, "Now that we're using \{the cloud, continuous integration, continuous deployment, microservices, GitHub, ...\}, let's strive for greater simplicity instead of \{moving faster, increasing product quality, building more features, ...\}." (If you know of any such company, I know a ton of devs who would love to work there. I also predict that company will soon go out of business.)

We can give this an official-sounding name. The **law of conservation of code complexity** states (similar: [1](https://wiki.c2.com/?ConservationOfComplexity) [2](https://en.wikipedia.org/wiki/Law_of_conservation_of_complexity) [3](https://www.johndcook.com/blog/2009/09/16/conservation-of-complexity/)):

<blockquote style={{marginLeft: '1rem', marginBottom: '1.25rem', padding: '0.75rem', backgroundColor: '#f7f7f7'}}>
<p style={{marginBottom:0}}>If you reduce the complexity of your codebase (such as by improving dev tooling or refactoring code), you (or your boss) will be unable to resist the temptation to increase complexity by the same amount elsewhere, usually in the form of new features.</p>
</blockquote>

#### Better dev tools lead to better software

Does this mean that dev tools are worthless, since their benefits are immediately cancelled out? No! The opposite, in fact.

**Better dev tooling frees up time and brainpower so devs can build better software.** If we were stuck with today's dev tooling forever, then software progress would eventually come to a halt.

If you doubt this, then imagine building today's software with 25-year-old build tools, package managers, and frameworks. It wouldn't be possible. So, why would you think today's dev tools will suffice unchanged 25 years from now?

#### Dev tools must constantly improve just to keep pace with growing code complexity

The situation is even worse than it seems. Code complexity isn't in equilibrium. Devs are constantly introducing complexity into their codebase without first dutifully removing complexity elsewhere.

Code is much easier to write than to maintain, simplify, or decommission. This is becoming even more true as code becomes more interdependent.

As a result, codebases are growing quickly in complexity and size. Here are some data points to consider:

* The size of your `node_modules` tree over time (or `vendor`, etc.).
* The amount of time you've personally spent decommissioning systems vs. creating them. If it's not at least a 5-to-1 ratio, you're probably part of the problem&mdash;along with everyone else, no worries.
* We ran a [survey of devs](https://info.sourcegraph.com/hubfs/CTA%20assets/sourcegraph-big-code-survey-report.pdf) where 51% said their company's codebase had grown 100x over the last 10 years. The kind of person who's skeptical of that number (I'm with you, it does seem high) is probably the kind of person who agrees with the overall point. (Speak up if not!)

What allows this rapid increase in software complexity (and, I hope/believe in most cases, a corresponding increase in software quality and features)? Why doesn't the increasing complexity of the system prevent all progress? Because dev tools are getting better *very* quickly and cancelling out some of the complexity increase so that our human brains can still get by.

#### Don't take software progress for granted

Over the last 25 years, we've become accustomed to dev tools continually getting better. Without those massive improvements in dev tooling, software could not have improved so much over the last 25 years.

But continual progress isn't a given, for dev tools or software itself. No fundamental law of nature says that software gets better each year.

To maintain the rate of software progress, we're going to need a continuous drip of new dev tools on the order of Git, Docker, ubiquitous unit testing, VS Code, Chrome DevTools, Go, TypeScript, etc.

So, which new dev tools will clear the way for future software progress? It's instructive to look to the companies on the frontier of dev tooling to see what they're doing.

#### Companies on the frontier of dev tooling

In dev tools, unlike most fields, the best ideas come from big companies.

Google, Facebook, Amazon, Netflix, Stripe, and others have widespread early adoption and tight integration of all the obvious dev tooling (with team-by-team exceptions, of course). There are many examples where these companies were early adopters of dev tooling or practices that are now widespread:

* [Kubernetes](https://kubernetes.io/blog/2015/04/borg-predecessor-to-kubernetes/), [code review](https://storage.googleapis.com/pub-tools-public-publication-data/pdf/80735342aebcbfc8af4878373f842c25323cb985.pdf), and [many more examples from Google](/blog/ex-googler-guide-dev-tools).
* [React](https://reactjs.org/), continuous deployment, [GraphQL](https://graphql.org/), and [feature flags](https://launchdarkly.com/blog/secret-to-facebooks-hacker-engineering-culture/) from Facebook.
* [Amazon's push toward a service-oriented architecture](https://gist.github.com/chitchcock/1281611) that paved the way for AWS.
* [Netflix's early embrace of AWS.](https://netflixtechblog.com/four-reasons-we-choose-amazons-cloud-as-our-computing-platform-4aceb692afec)

Not every dev tool invented or adopted by these big companies is a winner. But when all of these companies are all adopting the same kind of new dev tool, and it addresses a problem that every other smaller company will soon face, then you should take notice. And that's what we saw happening with code search around the time we started Sourcegraph in 2013.

<blockquote style={{marginBottom: '1.25rem', padding: '0.75rem', backgroundColor: '#f7f7f7'}}>
<p style={{marginBottom:0}}>*DISCLAIMER([@sqs](https://slack.org)):* This is when I start to talk about [Sourcegraph](https://about.sourcegraph.com), code search, and code intelligence. You may consider me biased, because I'm the Sourcegraph CEO/cofounder. But my love for code search and intelligence tooling is genuine (otherwise, why would I have started Sourcegraph?).</p>
</blockquote>

#### From code search to code intelligence

Code search is now a mainstream dev tool. So many sophisticated tech companies have adopted code search: in addition to [Google](https://codesearchguide.org/story/google) and [Facebook](https://codesearchguide.org/story/facebook) as previously mentioned, Amazon, [Stripe](https://codesearchguide.org/story/stripe), and more. We're proud to have earned some amazing customers, including Uber, Lyft, Dropbox, Atlassian, [Yelp](https://codesearchguide.org/story/yelp), 4/5 of the FAANG companies, and 4 of the top 10 US banks. If a company or dev isn't yet using code search, they will soon.

For our customers, Sourcegraph is the one universal dev tool: the only tool used by all the devs and the only tool that indexes *all* of the code. Other tools in the dev workflow are fragmented: devs use different editors and languages, and often there are multiple code hosts.

Devs want a single place with all the information about code: code navigation (definitions and references), authorship, ownership, dependency graph, code scans, deployment status, observability (whether a line of code is throwing lots of errors), etc.

Devs want Sourcegraph to be this place, and to help them find answers instead of just the raw information. We often hear things like:

- "I'm trying to figure out the best way to call a function. Don't just show me a list of call sites. Show me how the code owners of that function themselves have recently been calling that function."
- "I need to debug an issue in code. Don't just let me navigate within the same project to understand it. Let me see what changed and why, and trace calls across projects and dependencies."
- "I need to see how my team's API is being used. Don't just show me a list of file locations. Show me which other teams are using it and the trend of usage over time, grouped by usage pattern."
- "I need to fix something across my entire codebase. Don't just help me find the spots that need fixing. Let me push up a quick fix to all affected repositories, tracks its progress, and monitor for regressions."

Code search isn't enough to answer these kinds of questions, because code search doesn't know all the other necessary information about code. Code search just helps you find matching lines in code, and that's not enough anymore as code complexity keeps growing quickly.

Remember how Google went from helping you find things *on* the web (matching web pages) to helping you learn things *from* the web (information and answers) by connecting data like news, videos, and maps back to web search? Today, you go to Google to answer complex questions and learn things, not to find things.

We're making the same kind of leap. We've spent 9 years building the underlying foundation of code search to be fast, secure, and scalable across ~10<sup>11</sup> lines of code for the world's most demanding software teams, and now we're hard at work making Sourcegraph even smarter.

Today, we're releasing [Sourcegraph 4.0](/blog/release/4.0), the first step toward Sourcegraph becoming a code intelligence platform.
	
We're also launching [Sourcegraph Cloud](/blog/enterprise-cloud): secure, scalable, dedicated Sourcegraph instances on the cloud. Sourcegraph Cloud is the best way to start using Sourcegraph on your organization's code. [Sign up now.](https://signup.sourcegraph.com/)
