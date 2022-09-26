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

Code search helps you find *matching lines in code*. That helps, but it's often not enough, especially as your codebase gets more complex. Sometimes you need to know who wrote that code, or the top usage patterns of a function, or which repositories use it, etc. {/* I limited this to things Sourcegraph 4.0 does. There's a lot of awesome stuff we can do in the future, but I wanted to stay grounded in the present here. */}  Sourcegraph will increasingly help you find these kinds of *answers* in code&mdash;and in metadata from all your dev tools that know stuff about code.

We call this a code intelligence platform (motto: *"answers, not just matching lines"*), and you can see [Sourcegraph 4.0](/blog/sourcegraph-4.0) taking the first steps toward that vision, beyond just code search.

Why is this important? Why now? Let's go back in time to 25 years ago...

#### The law of conservation of code complexity

When I started coding [~25 years ago](https://slack.org/why-i-love-code), coding was complex. Since then, dev tools have massively improved: editors, build tools, version control, testing, continuous deployment, new programming languages, debuggers, libraries, frameworks, linters, observability, etc. {/* But they've improved less than you might think. Check out [The Joel Test](https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/) from 2000 and note how many companies today would fail it despite those being obvious best practices 22 years ago. */} So, why is coding even more complex today than it was 25 years ago?

Because software is much better and does much more than 25 years ago. {/* We can debate the degree to which this statement is true, and you can probably think of some counterexamples. But it's still true. Even if you, a cranky purist dev, would prefer using 25-year-old software, most people disagree with you. You'd be hard-pressed to find many willing users or customers for 25-year-old software today. */} Improvements in dev tooling let us spend our "complexity budget" on building better and more useful software, instead of, say, toiling over C code in a primitive editor to format and send emails via SMTP (which sounds quaint but I guarantee you it consumed hundreds of human lifetime-equivalents).

Never in the history of software has a dev tool actually yielded a permanent reduction in total complexity. Never has a company said, "Now that we're using \{the cloud, continuous integration, continuous deployment, microservices, GitHub, ...\}, let's strive for greater simplicity instead of \{moving faster, increasing product quality, building more features, ...\}." (If you know of any such company, I know a ton of devs who would love to work there. I also predict that company will soon go out of business.)

We can give this an official-sounding name. The **law of conservation of code complexity** states (similar: [1](https://wiki.c2.com/?ConservationOfComplexity) [2](https://en.wikipedia.org/wiki/Law_of_conservation_of_complexity) [3](https://www.johndcook.com/blog/2009/09/16/conservation-of-complexity/)):

<blockquote style={{marginLeft: '1rem', marginBottom: '1.25rem', padding: '0.75rem', backgroundColor: '#f7f7f7'}}>
<p style={{marginBottom:0}}>If you reduce the complexity of your codebase (such as by improving dev tooling or refactoring code), you (or your boss) will be unable to resist the temptation to increase complexity by the same amount elsewhere, usually in the form of new features.</p>
</blockquote>

{/* Some of those other linked posts about the law of conservation of complexity have a stricter and more pessimistic interpretation of it, that no dev tooling can ever decrease complexity. For example, if you switch from the hackiest build scripts ever to a Makefile, then you have not decreased complexity, only buried it in `make`. I disagree. I think you have actually eliminated complexity in your build process, but again, you'll be unable to resist the temptation to increase complexity by the same amount elsewhere. */}

#### Better dev tools lead to better software

Does this mean that dev tools are worthless, since their benefits are immediately cancelled out? No! The opposite, in fact.

**Better dev tooling frees up time and brainpower so devs can build better software.** If we were stuck with today's dev tooling forever, then software progress would eventually come to a halt.

{/* This feeling is a big part of [why I love coding](https://slack.org/why-i-love-code) and what motivates me at Sourcegraph! And it's a reason to appreciate dev tools creators everywhere, who are indirectly helping to make people's lives better. */}

If you doubt this, then imagine building today's software with 15-year-old build tools, package managers, and frameworks. It wouldn't be possible. So, why would you think today's dev tools will suffice unchanged 15 years from now? {/* Look, I'm not someone who loves using the new buzzword tech. I use Emacs, and we use Go and TypeScript (with React) here at Sourcegraph. But I find even all of those things have gotten significantly better in the last 2 years even. */}

#### Dev tools must constantly improve just to keep pace with growing code complexity

The situation is even worse than it seems. Code complexity isn't in equilibrium. Devs are constantly introducing complexity into their codebase without first dutifully removing complexity elsewhere.

Code is much easier to write than to maintain, simplify, or decommission. This is becoming even more true as code becomes more interdependent.

As a result, codebases are growing quickly in complexity and size. Here are some data points to consider:

* The size of your `node_modules` tree over time (or `vendor`, etc.).
* The amount of time you've personally spent decommissioning systems vs. creating them. If it's not at least a 5-to-1 ratio, you're probably part of the problem&mdash;along with everyone else, no worries.
* We ran a [survey of devs](https://info.sourcegraph.com/hubfs/CTA%20assets/sourcegraph-big-code-survey-report.pdf) where 51% said their company's codebase had grown 100x over the last 10 years. The kind of person who's skeptical of that number (I'm with you, it does seem high) is probably the kind of person who agrees with the overall point. (Speak up if not!)

{/* In theory, a bigger codebase isn't necessarily a more complex codebase. You can just tend to your little, perfectly encapsulated corner of the codebase. No matter how big the overall codebase got, your life stays the same. But we all know it never works out this way. */}

What allows this rapid increase in software complexity (and, I hope/believe in most cases, a corresponding increase in software quality and features)? Why doesn't the increasing complexity of the system prevent all progress? Because dev tools are getting better *very* quickly and cancelling out some of the complexity increase so that our human brains can still get by.

#### Don't take software progress for granted

Over the last 25 years, we've become accustomed to dev tools continually getting better. Without those massive improvements in dev tooling, software could not have improved so much over the last 25 years.

But continual progress isn't a given, for dev tools or software itself. No fundamental law of nature says that software gets better each year.

To maintain the rate of software progress, we're going to need a continuous drip of new dev tools on the order of Git, Docker, ubiquitous unit testing, VS Code, Chrome DevTools, Go, TypeScript, etc.

So, which new dev tools will clear the way for future software progress? It's instructive to look to the companies on the frontier of dev tooling to see what they're doing.

#### Companies on the frontier of dev tooling

In dev tools, unlike most fields, the best new stuff trickles down from big companies. {/* Other fields are different. Salesforce didn't innovate in CRM by looking at big companies' custom-built CRMs. Etc. Send me more good examples that you can think of. */}

Google, Facebook, Amazon, Netflix, Stripe, and others have widespread early adoption and tight integration of all the obvious dev tooling (with team-by-team exceptions, of course). There are many examples where these companies were early adopters of dev tooling or practices that are now widespread:

* [Kubernetes](https://kubernetes.io/blog/2015/04/borg-predecessor-to-kubernetes/), [code review](https://storage.googleapis.com/pub-tools-public-publication-data/pdf/80735342aebcbfc8af4878373f842c25323cb985.pdf), and [many more examples from Google](https://about.sourcegraph.com/blog/ex-googler-guide-dev-tools).
* [React](https://reactjs.org/), continuous deployment, [GraphQL](https://graphql.org/), and [feature flags](https://launchdarkly.com/blog/secret-to-facebooks-hacker-engineering-culture/) from Facebook.
* [Amazon's push toward a service-oriented architecture](https://gist.github.com/chitchcock/1281611) that paved the way for AWS.
* [Netflix's early embrace of AWS.](https://netflixtechblog.com/four-reasons-we-choose-amazons-cloud-as-our-computing-platform-4aceb692afec)

Not every dev tool invented or adopted by these big companies is a winner. But when all of these companies are all adopting the same kind of new dev tool, and it addresses a problem that every other smaller company will soon face, then you should take notice. And that's what we saw happening with code search around the time we started Sourcegraph in 2013.

<blockquote style={{marginBottom: '1.25rem', padding: '0.75rem', backgroundColor: '#f7f7f7'}}>
<p style={{marginBottom:0}}>*DISCLAIMER([@sqs](https://slack.org)):* This is when I start to talk about [Sourcegraph](https://about.sourcegraph.com), code search, and code intelligence. You may consider me biased, because I'm the Sourcegraph CEO/cofounder. But my love for code search and intelligence tooling is genuine (otherwise, why would I have started Sourcegraph?).</p>
</blockquote>

#### The state of code search around 2013

My cofounder and I had both felt the pain of working in big, complex codebases&mdash;and the value of a code search tool.

He interned at Google, which famously has a [massive monorepo](https://cacm.acm.org/magazines/2016/7/204032-why-google-stores-billions-of-lines-of-code-in-a-single-repository/fulltext) and an exceptionally good [internal Google CodeSearch tool](https://codesearchguide.org/story/google) to search and understand it.

I was hacking on [patches to cURL](https://sourcegraph.com/github.com/curl/curl/-/commit/59cf93ccdbaa5e866f9de6b2d9b1ae5cee84863f), GnuTLS, Chromium, Firefox, OpenSSL, and the Linux kernel. I used [OpenGrok](https://oracle.github.io/opengrok/), a fairly basic code search tool, to get familiar with those big codebases.

We also started hearing about [Facebook's internal code search tool](https://codesearchguide.org/story/facebook).

Code search tools made it possible, and even fun, to work in big, complex codebases. And we assumed that most companies in the future would have big, complex codebases. So, we started Sourcegraph in 2013 with the idea to build the code search tool that we'd love using, make it easy for devs to bring it into their company, and then get those companies to pay for it.

#### All the dev tools early adopters started adopting code search

It all went pretty much as planned. (Except that as with many startups, it initially took a few more years than we expected, but we stayed committed to code search.)

We felt validated when we saw so many sophisticated tech companies adopt code search: in addition to [Google](https://codesearchguide.org/story/google) and [Facebook](https://codesearchguide.org/story/facebook) as previously mentioned, Amazon, [Stripe](https://codesearchguide.org/story/stripe), and more. We're proud to have earned some amazing customers, including Uber, Lyft, Dropbox, Atlassian, [Yelp](https://codesearchguide.org/story/yelp), 4/5 of the FAANG companies, and 4 of the top 10 US banks.

#### Code search 


In 2013, we set out to tackle this complexity issue by building code search and making it available to every dev and company. Code search is helpful in reducing complexity, but it's not enough. It helps you find things *in* code (matching lines in files), but developers also need to learn things *about* code. Google went from helping you find things *on* the web (matching web pages) to helping you learn things *from* the web (information and answers) by connecting data like news, videos, and maps back to web search. Today, you go to Google to answer complex questions and learn things, not to find things. At Sourcegraph, we're doing the same for code with our code intelligence platform.

Today, we're releasing Sourcegraph 4.0. 4.0 is a big step for Sourcegraph and our customers as we shift from a code search tool into a code intelligence platform.

A code intelligence platform indexes and understands all of your organization's code, no matter where it's stored or what language it's in. With Sourcegraph, devs and engineering can learn *about* code and answer difficult questions about their codebase.

Our code intelligence platform will compute and store data beyond the code itself and make that data accessible. Sourcegraph already pulls in information on code history, repository metadata, and metrics derived from code via Code Insights. Here is what coding will look like with a code intelligence platform:

- Trying to figure out the best way to call a function? Code search shows you a semi-exhaustive list of call sites. Code intelligence is seeing how the code owners of that function themselves have recently been calling that function.
- Need to debug an issue in code? Code search helps you navigate within the same project to understand it. Code intelligence is seeing what changed and why, and tracing calls across projects and dependencies.
- Need to see how your team's API is being used? Code search shows you a list of file locations. Code intelligence shows which other teams are using it and the trend of usage over time.
- Want to fix or improve something across your entire codebase? Code search helps you find the spots that need fixing. Code intelligence pushes up a quick fix everywhere, tracks its progress, and monitors for regressions. Sourcegraph already does this with Batch Changes.

Sourcegraph 4.0 is the code intelligence platform for devs to unblock themselves and code better. We've spent 9 years building the underlying foundation of code search to be fast, secure, and scalable across ~10^11 lines of code for the world's most demanding software teams, from 4 of 5 FAANG companies and 4 of the top 10 U.S. banks, to companies launching satellites into space and the leaders in autonomous transportation. 

Sourcegraph 4.0 is available to all devs, and you can [upgrade to 4.0 now](https://docs.sourcegraph.com/admin/updates). For devs new to our code intelligence platform, the future is Sourcegraph Cloud. Cloud uses dedicated, single-tenant instances so every customer gets enterprise scalability and isolation. It also has a SOC 2 Type II report, so you can be assured of the security of your data. Sourcegraph Cloud comes with 4.0 out-of-the-box. [Start a 30-day trial of Sourcegraph Cloud today](https://signup.sourcegraph.com).