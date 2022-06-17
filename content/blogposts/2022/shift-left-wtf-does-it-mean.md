---
title: “Shift left” - wtf does it mean?
description: Everyone's telling us to "shift left" these days, but what does that actually mean? What's being shifted? Who's doing the shifting? How far left should we shift it?
authors:
  - name: Beyang Liu
    url: https://twitter.com/beyang
publishDate: 2022-06-17T18:00+02:00
tags: [blog]
slug: shift-left-wtf-does-it-mean
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/shift-left.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/shift-left.png
published: true
---

![Shift left - wtf does it mean?](https://storage.googleapis.com/sourcegraph-assets/blog/shift-left.png)

Everyone's telling us to "shift left" these days, but what does that actually mean? What's being shifted? Who's doing the shifting? How far left should we shift it?

Here at Sourcegraph, we're not quite sure ourselves. But what we do know is that in most orgs, there are things you can do to enable devs to ship faster with greater reliability and security. And some of these things can also conceivably be described as "shifting left."

So if your organization has identified "shift left" as a strategic priority, read on! We'll cover five specific things you can do to make your engineering org better while satisfying the "shift left" agenda.

## A concrete definition

"Shift left" is often used in reference to specific testing and security practices, but it also encapsulates a general philosophy that might be best summarized as, "Do the most important things as early as possible." We assert that Shift Left The Good Parts is ultimately about reaching key points of validation faster, so that you can iterate more rapidly against feedback.

Those critical must-have points of validation vary with the project, but they generally fall into one of the following categories:
1. User value—are you building something the user actually wants?
2. Context—does it fit well into the broader system and take advantage of what that system provides?
3. Testing—does it actually do what you say it does correctly and reliably?
4. Security—does it preserve the privacy and integrity of the overall system?
5. Review—does it pass muster with the folks responsible for maintaining the system?

The importance of these validation areas can be highlighted by their failure modes, which are all too familiar:
1. The Over-Engineered Boondoggle that sucks up time and resources but is never used because it doesn't solve a real problem
2. The Reinvented Wheel, which takes longer to build and doesn't work all that well
3. The Big Launch that bugs out or falls over under production traffic
4. The Security Hole and the subsequent Emergency Fire Alarm Patch
5. The Back to the Drawing Board that must be rewritten after a major design flaw is caught only in final review

To prevent these failure scenarios, the naive inclination is to introduce a new gatekeeper—design review, testing and validation, code review, security review, etc. But the issue is that by the review stage in the development cycle, you've already used up a great deal of developer time. So while gatekeepers may save you from shipping a bad system, they can only get you to the point of not shipping a system at all, rather than shipping a system that works well for your customer.

The real solution is to "shift left" as many of these validation points as possible, which means empowering the developer driving the project to validate these points much earlier than the formal review step.

## User value

It seems like an obvious statement, but a surprising number of software projects make it very far along before validating that the deliverable actually delivers value to the end user. Shifting left the user validation means getting to an MVP as quickly as possible that can be shared with users, even in a hacky state, to solicit direct, high-fidelity feedback.

Time is of the essence. Discovering existing functions and functionality early on—and avoiding the temptation to reinvent the wheel—can save loads of time.

<figcaption>Discovering and reusing existing code can help you spin up a MVP ASAP, so you can quickly validate the user need with a rough sketch of the product.</figcaption>
<video className="blog-image" title="Code reuse" alt="Discovering and reusing existing code can help you spin up a MVP ASAP, so you can quickly validate the user need with a rough sketch of the product." loop autoPlay muted playsInline>
  <source src="https://storage.googleapis.com/sourcegraph-assets/blog/shift-left/01-code-reuse.webm" type="video/webm" data-cookieconsent="ignore"/>
</video>

In order to take full advantage of existing libraries, you need to be able to understand how to use them quickly. This applies to both open source and inner source. Shared libraries must not only be available, they must be accessible and understandable.

Investing in great documentation helps, but this is a hard change to make if your codebase isn't already well-documented. The best way to learn is by example. A single real usage example can be worth a thousand words of documentation.

<figcaption>Usage examples are critical to lowering the friction of code reuse. Validate the prototype first by using existing functions and components. You can always go back and build a better wheel if user feedback demands it.</figcaption>
<video className="blog-image" title="Find references" alt="Usage examples are critical to lowering the friction of code reuse. Validate the prototype first by using existing functions and components. You can always go back and build a better wheel if user feedback demands it." loop autoPlay muted playsInline>
  <source src="https://storage.googleapis.com/sourcegraph-assets/blog/shift-left/02-find-references.webm" type="video/webm" data-cookieconsent="ignore"/>
</video>


By stitching together existing components, you can spin up a basic, hacky version of a new feature or product 10x more quickly. Ideally, you don't even have to worry about spinning up a production environment before soliciting user feedback—tools like ngrok enable you to quickly and securely share your service running on your local machine to the feedback partners you'd like to reach around the world.

## Context

Most code is written in the context of an existing codebase. It is important to understand the existing code well, as it offers both constraints and opportunities:

- The constraints can be architectural or stylistic, some enforced by convention, others by iron laws of computer science.
  - Conventional constraints include code style, design patterns, linting rules, static checks, and test coverage.
  - Iron constraints are things like consistency guarantees provided by the database (and the invocation patterns that accompany accessing a system like this), performance characteristics, and the underlying datastructures and algorithms used to access and process data.
- The opportunities include reusing and hardening existing libraries and services, or learning useful design patterns and best practices from existing code in the codebase, perhaps written by a senior developer you admire or seek to emulate.

Context acquisition is one of the most time-consuming parts of the job—unless you're in a completely new codebase, you probably spend more time acquiring context than you do writing new code. It's like that old saying: "If I had an hour to chop down a tree, I'd spend the first 45 minutes sharpening my axe." So it goes with context. With the proper context, you can code at the speed of thought. Without the proper context, you'll find yourself pulled out of [flow](developer-productivity-thoughts#picture-2-reaching-flow-state) again and again when you need to go look something up or realize you wasted an hour writing something that already exists.

Acquiring context means understanding the structure and relationships in code. This becomes 10x easier when you have code navigation. Not having jump-to-def and xrefs is like trying to browse the web without hyperlinks.

<figcaption>Walking the forward and backward graph of code (defs and refs) is the bread-and-butter of building up a contextual mental model of how the code works.</figcaption>
<video className="blog-image" title="Definitions and references" alt="Walking the forward and backward graph of code (defs and refs) is the bread-and-butter of building up a contextual mental model of how the code works." loop autoPlay muted playsInline>
  <source src="https://storage.googleapis.com/sourcegraph-assets/blog/shift-left/03-defs-and-refs.webm" type="video/webm" data-cookieconsent="ignore"/>
</video>

<figcaption>Fast and accurate jump-to-definition that Just Works, even across dependency boundaries, is essential for chasing down context through the winding rabbitholes of code.</figcaption>
<video className="blog-image" title="Jump to definition" alt="Fast and accurate jump-to-definition that Just Works, even across dependency boundaries, is essential for chasing down context through the winding rabbitholes of code." loop autoPlay muted playsInline>
  <source src="https://storage.googleapis.com/sourcegraph-assets/blog/shift-left/04-jump-to-definition.webm" type="video/webm" data-cookieconsent="ignore"/>
</video>

Targeted pieces of documentation can help guide new devs to quickly acquire the essential aspects of an area of code. You'll ideally want to use a tool that integrates nicely with the source code and doesn't go stale with time.

<figcaption>Interactive docs that tie high-level descriptions with entrypoints into the source code conserves senior engineers' time while enabling other engineers to quickly onboard to new parts of the codebase.</figcaption>
<video className="blog-image" title="Interactive docs for engineering" alt="Interactive docs that tie high-level descriptions with entrypoints into the source code conserves senior engineers' time while enabling other engineers to quickly onboard to new parts of the codebase." loop autoPlay muted playsInline>
  <source src="https://storage.googleapis.com/sourcegraph-assets/blog/shift-left/05-notebooks.webm" type="video/webm" data-cookieconsent="ignore"/>
</video>

It may seem obvious to state that you should acquire the necessary context before investing a large amount of time writing code, but many projects waste the first weeks and months of their timeline because the engineers were too eager to start breaking ground and did not acquire a good sense of the lay of the land.

## Testing

Reading tests is a good way to understand the structure of the code. Unit tests provide examples of the canonical invocations of public APIs—they show you how you're supposed to use them. For this reason, reading unit tests is often more helpful than reading the documentation.

<figcaption>Discover unit tests by looking up references to a public API function.</figcaption>
<video className="blog-image" title="Reference lookup" alt="Discover unit tests by looking up references to a public API function." loop autoPlay muted playsInline>
  <source src="https://storage.googleapis.com/sourcegraph-assets/blog/shift-left/06-discover-unit-tests.webm" type="video/webm" data-cookieconsent="ignore"/>
</video>

It's also helpful to understand how well tested the current code is. Test coverage can be a proxy for general code quality, which is something you want to keep in mind. You may want to add tests beforehand, so you don't have to waste a bunch of time manually testing and debugging uncaught failure modes later.

<figcaption>Code coverage tools reveal gaps in test coverage.</figcaption>
<video className="blog-image" title="Reveal gaps in test coverage" alt="Code coverage tools reveal gaps in test coverage." loop autoPlay muted playsInline>
  <source src="https://storage.googleapis.com/sourcegraph-assets/blog/shift-left/07-test-coverage.webm" type="video/webm" data-cookieconsent="ignore"/>
</video>

If the desired functionality is clear and has been validated (see the earlier section about User Value), then writing tests first—before any other code—can help you be disciplined about defining a good API boundary. This is commonly called "Test-Driven Development."

Thorough unit tests are essential to ensuring the correctness and long-term robustness of the software. So if reliability is a key concern (and sometimes it isn't), don't wait until the very end of the cycle, when it's time for formal review, to add tests. If you do this, they'll likely be an afterthought.

## Security

Inside many organizations, the security team and the development team butt heads. Security is a major gatekeeper in the development cycle and a slow security review process can slow development velocity to a crawl. Simultaneously, the security team often uses scanning tools that surface a large number of potential vulnerabilities in the dependency tree, which it wants the dev team to address by updating the dependencies. This is more work for the dev team and often the alerts are noisy, so neither side ends up very happy.

"Shifting left" in security can be thought of in two parts.

The first is having a security review process that is clear, transparent, and ideally as automated as possible. This enables the developer to ensure their patch meets the security standards on their own, without having to go through costly, multi-person round-trip review cycles. You can use tools that automate code coverage, linting, and static checks. And you can implement a security testing suite that validates key aspects of your application security model.

The second is about shifting the security stance of the organization from reactive to proactive. Reactive means you wait for the next zero-day to emerge, which forces you to raise a fire-alarm that stops production on all the teams affected. This sort of scenario played out across virtually every major software organization when the Log4j vulnerability was released in late 2021. We wrote a [blog post](log4j-log4shell-0-day) to help organizations react and remediate quickly with automation.

<figcaption>Here is a 60 second video that shows how you could find, fix, and monitor patches to vulnerabilities using Sourcegraph. This uses Log4 as an example.</figcaption>
<div className="container my-4 video-embed embed-responsive embed-responsive-16by9">
    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/13OqKPXqZXo" allowFullScreen="" allow="accelerometer; autoPlay; encrypted-media; gyroscope; picture-in-picture"frameBorder="0"></iframe>
</div>

The benefit of this sort of automation is that it lets you preview the prospective change across all the different locations that have to change. Instead of having to manually open up pull requests to many different parts of the codebase, you can preview them before beginning review processes with many different teams. You also have the benefit of re-applying the patch should a new vulnerability emerge in a later version of the library, as happened with Log4j multiple times.

The better solution, however, is to catch the next Log4j within your organization before it becomes public knowledge. To do that, you must proactively monitor and assess the risk of your open-source dependency tree.

There are many security scanners that do this, but some can be quite noisy. We've heard good things about Snyk and Dependabot, but both of these mainly check your code against the same public database of [security vulnerabilities](https://cve.mitre.org/). You can also run recurring searches for anti-patterns indicative of vulnerable code blocks or dependencies:

<figcaption>Set up alerts for anti-patterns and vulnerable dependency versions in your codebase.</figcaption>
<video className="blog-image" title="Codebase alerts" alt="Set up alerts for anti-patterns and vulnerable dependency versions in your codebase." loop autoPlay muted playsInline>
  <source src="https://storage.googleapis.com/sourcegraph-assets/blog/shift-left/09-code-monitoring.webm" type="video/webm" data-cookieconsent="ignore"/>
</video>

<figcaption>Example of proactively monitoring dependencies</figcaption>
<figure>
<img src="https://storage.googleapis.com/sourcegraph-assets/blog/shift-left-1-log4j-response.png" alt="log4j incident response example of proactively monitoring dependencies" className="no-shadow" />
</figure>

<figcaption>Visually tracking overall code health</figcaption>
<figure>
<img src="https://storage.googleapis.com/sourcegraph-assets/blog/shift-left-2-repos.png" alt="Visually tracking overall code health across repos" className="no-shadow" />
</figure>

One advantage of the "simple" approach is you can tailor it more to specific codebases and anti-patterns. Rather than rely on the same set of publicly reported vulnerabilities, you can specify your own set of regular expressions and [Comby patterns](https://docs.sourcegraph.com/code_search/reference/structural#syntax-reference), and these can even be suggested opportunistically by your dev team.

## Code review

We've talked about "shifting left" many of the previous validation points *from* the review stage to a stage earlier in the dev process. But it's important to realize that code review itself is left of the even more final stages of deployment and production monitoring.

It's important that code reviews are thorough, but often the tools don't scale well to larger changesets. As the old adage goes, "make a 10-line change, you'll get 10 comments, but make a 1,000-line change and you'll get a LGTM rubber stamp."

Having precise code navigation capabilities in code review will help reviewers quickly spin up on the structure and content of the changeset and conduct a review that is both thorough *and* timely.

<figcaption>Use go-to-definition and find references to conduct code reviews that are both thorough and efficient.</figcaption>
<video className="blog-image" title="Find references in code reviews" alt="Use go-to-definition and find references to conduct code reviews that are both thorough and efficient." loop autoPlay muted playsInline>
  <source src="https://storage.googleapis.com/sourcegraph-assets/blog/shift-left/10-code-reviews.webm" type="video/webm" data-cookieconsent="ignore"/>
</video>

Another trick is to break up a large changeset into smaller changesets that don't change the behavior of the system until the very last one (e.g., using feature flags). These smaller changes can be more easily reviewed and validated.

Yet another trick is to request review early, when the code is still rough, but the broad strokes are there. If you're doing TDD for a well-defined problem, this might be pushing up the core unit tests and asking to validate the public interface being tested. If you're more prototyping, this might involve pushing up a very hacky implementation and asking for feedback on just the happy-path client-side user interaction.

## The power of tools

Ultimately, "shift left" is a philosophy that guides a set of specific cultural and process changes in the software development lifecycle. Both the general philosophy and the specific changes can be much assisted with the use of tools that enable the developer to take full charge of shipping a new feature or bug fix.

To learn more about dev tools that assist with shifting left and accelerating the dev cycle, check out the following posts:

- An ex-Googler's guide to dev tools
- A dev's thoughts on dev productivity

Or you can learn more about how Sourcegraph can serve as a dev tools hub for your organization to drive the cultural and process shifts that shifting left entails.

### About the author

_Beyang Liu is the CTO and co-founder of Sourcegraph. Beyang studied Computer Science at Stanford, where he published research in probabilistic graphical models and computer vision at the Stanford AI Lab. You can chat with Beyang on Twitter [@beyang](https://twitter.com/beyang) or our community [Discord](https://discord.com/invite/vqsBW8m5Y8)._
