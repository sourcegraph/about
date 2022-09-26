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

When I started coding [~25 years ago](https://slack.org/why-i-love-code), coding was complex. Since then, dev tools have massively improved: editors, build tools, version control, testing, continuous deployment, new programming languages, libraries, frameworks, linters, observability, etc. {/* But they've improved less than you might think. Check out [The Joel Test](https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/) from 2000 and note how many companies today would fail it despite those being obvious best practices 22 years ago. */} So, why is coding even more complex today than it was 25 years ago?

Because software is much better and does much more than 25 years ago. {/* We can debate the degree to which this statement is true, and you can probably think of some counterexamples. But it's still true. Even if you, a cranky purist dev, would prefer using 25-year-old software, most people disagree with you. You'd be hard-pressed to find many willing users or customers for 25-year-old software today. */} Improvements in dev tooling let us spend our "complexity budget" on building better and more useful software, instead of, say, toiling over C code in a primitive editor to format and send emails via SMTP (which sounds quaint but I guarantee you it consumed hundreds of human lifetime-equivalents).

Never in the history of software has a dev tool actually yielded a permanent reduction in total complexity. Never has a company said, "Now that we're using \{the cloud, continuous integration, continuous deployment, microservices, GitHub, ...\}, let's strive for greater simplicity instead of \{moving faster, increasing product quality, building more features, ...\}." (If you know of any such company, I know a ton of devs who would love to work there. I also predict that company will soon go out of business.)

We can give this an official-sounding name. The **law of conservation of code complexity** states (similar: [1](https://wiki.c2.com/?ConservationOfComplexity) [2](https://en.wikipedia.org/wiki/Law_of_conservation_of_complexity) [3](https://www.johndcook.com/blog/2009/09/16/conservation-of-complexity/)):

<blockquote style={{marginLeft: '1rem', marginBottom: '1.25rem', padding: '0.75rem', backgroundColor: '#f7f7f7'}}>
<p style={{marginBottom:0}}>If you reduce the complexity of your codebase (such as by improving dev tooling or refactoring code), you (or your boss) will be unable to resist the temptation to increase complexity by the same amount elsewhere, usually in the form of new features.</p>
</blockquote>

{/* Some posts about the law of conservation of complexity have a stricter and more pessimistic interpretation of it, that no dev tooling can ever decrease complexity. For example, if you switch from the hackiest build scripts ever to a Makefile, then you have not decreased complexity, only buried it in `make`. I disagree. I think you have actually eliminated complexity in your build process, but again, you'll be unable to resist the temptation to increase complexity by the same amount elsewhere. */}

#### Better dev tools lead to better software

Does this mean that dev tools are worthless, since their benefits are immediately cancelled out? No! The opposite, in fact.

**Better dev tooling frees up time and brainpower so devs can build better software.** If we were stuck with today's dev tooling forever, then software progress would eventually come to a halt.

If you doubt this, then imagine building today's software with 15-year-old build tools, package managers, and frameworks. It wouldn't be possible. So, why would you think today's dev tools will suffice unchanged 15 years from now?

{/* This feeling is a big part of [why I love coding](https://slack.org/why-i-love-code) and what motivates me at Sourcegraph! And it's a reason to appreciate dev tools creators everywhere, who are indirectly helping to make people's lives better. */}

#### Dev tools need to constantly improve just to keep pace

The situation is even worse than it seems. Code complexity isn't in equilibrium. Devs add complexity to their codebase constantly, without first dutifully removing complexity elsewhere. Code is much easier to write than to maintain or decommission, and this is becoming even more true as code becomes more interdependent.

Also, codebases are growing quickly. Here are some data points to consider:

* The size of your `node_modules` tree over time (or `vendor`, etc.).
* The amount of time you've personally spent decommissioning systems vs. creating them. If it's not at least a 5-to-1 ratio, you're probably part of the problem&mdash;along with everyone else, no worries.
* We ran a [survey of devs](https://info.sourcegraph.com/hubfs/CTA%20assets/sourcegraph-big-code-survey-report.pdf) where 51% said their company's codebase had grown 100x over the last 10 years. The kind of person who's skeptical of that number (I'm with you, it does seem high) is probably the kind of person who agrees with the overall point. (Speak up if not!)

What allows this rapid increase in software complexity (and, overall, software quality and features)? **We've become accustomed to dev tools getting better rapidly,** which has cancelled out enough of the overall increase in complexity so that our human brains can still get by.

#### Don't take software progress for granted

But software progress isn't a given. No fundamental law of nature says that software gets better each year. Without massive improvements in dev tooling over the last 25 years, software could not have improved so much over that period. {/* Can you imagine working in your current codebase with tools even from 5-10 years ago? Even if you can, you'd probably be at least a little bit less effective, and your other team members even more so. Look, I'm not someone who loves using the new buzzword tech. I use Emacs, and we use Go and TypeScript (with React) here at Sourcegraph. But I find even all of those things have gotten significantly better in the last 2 years even. */}

#### Codebases are growing fast


#### Better libraries and encapsulation are the solution&mdash;and the problem

In theory, a bigger codebase isn't necessarily a more complex codebase. You can just tend to your little, perfectly encapsulated corner of the codebase. No matter how big the overall codebase got, your life stays the same.

There's certainly some truth to that. Today's dev tooling makes it easier than before to write and reuse high-quality, well-tested, well-encapsulated units of code.



But that just means you'll spend the "complexity budget" elsewhere.

Even so, the sheer volume of code and the leaky abstractions inherent in the overall cobble will cause total complexity to increase.

Why is this happening? It has always been true that code is easier to write than to maintain or decommission. It's actually becoming harder to decommission code now that software is more interconnected.

evidence: orgs that are pushing the frontier are already using it
how many ppl would have said we need a distributed VCS before git - 


#### Code search is like an ex

More than 10 years ago, my cofounder Beyang and I had both felt the pain of working in big, complex codebases. He interned at Google, which famously has a [massive monorepo](https://cacm.acm.org/magazines/2016/7/204032-why-google-stores-billions-of-lines-of-code-in-a-single-repository/fulltext) and exceptionally good tools to search and understand it. I hacked on patches to cURL, GnuTLS, Chromium, Firefox, OpenSSL, and the Linux kernel, and I used [OpenGrok](https://oracle.github.io/opengrok/) alongside Emacs to get familiar with those codebases. Code search tools made it possible, but still not easy, to understand these massive codebases.

Back then, not many devs used code search tools, which were hard to set up and not very good (except the internal [Google CodeSearch](https://codesearchguide.org/story/google)).

But we loved code search tools, and we started Sourcegraph because 

And that gets us to Sourcegraph. We built Sourcegraph to help ourselves, you, and every other dev deal with ever-increasing code complexity.

I'm especially worried about how the amount of code is increasing at a much faster rate than the number of developers. 


And that gets us to Sourcegraph, how can we help.

But as developers of software, we all feel the pain of code complexity: not being able to get in flow, encountering tech debt that turns a tiny fix into a multi-day ordeal, and all the wasted time just trying to understand big codebases.

On top of this, devs are more important than ever. We've gone from being viewed as cost centers to being seen as the center of product development, so the issue of complexity is a business problem just as much as a dev problem.

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