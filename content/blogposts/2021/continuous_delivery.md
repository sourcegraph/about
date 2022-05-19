---
title: 'Continuous delivery: A cure for release anxiety?'
description: 'Engineers are anxious and continuous delivery promises to help. But how practicial is it, really? In this post, we explore the limitations of continuous delivery as well as the lessons we can learn from it.'
externalTitle: 'A continuous delivery mindset is the antidote to release anxiety'
externalDescription: 'Continuous delivery appears to be a solution to release anxiety but the reality is more complex. With a mindset change, however, even companies using on-prem business models can learn from continuous delivery.'
author: Nick Moore
authorUrl: https://twitter.com/nickwritesit
published: true
publishDate: 2021-11-08T10:00-07:00
tags: [blog]
slug: continuous-delivery-mindset
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-anxiety-images/Hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-anxiety-images/Hero.png
---

![Continuous delivery mindset graphic](https://storage.googleapis.com/sourcegraph-assets/blog/release-anxiety-images/Hero.png)

In [part one](https://about.sourcegraph.com/blog/release-anxiety/), we talked about release anxiety and the twin pressures that create it: the pressure to improve and the pressure to protect. By the end of the post, you likely had a solution in mind, or at least you thought you did: continuous deployment and/or delivery.

Continuous deployment is when engineering teams deploy code changes frequently via automated tools; continuous delivery, something a little different, is when engineering teams build software so that it's always in a releasable state.

Continuity is the dream: if deadlines cause anxiety, then why not get rid of deadlines? By releasing software continuously, you both ensure each code change can make it in and ensure each code change will have the time to get tested and inspected.

And yet, there are limitations.

### Pursuing scalable deployment

Continuous deployment is not a new idea. In a [2009 essay](http://timothyfitz.com/2009/02/08/continuous-deployment/)–in one of the first instances of the concept–Timothy Fitz introduced the idea with an all too recognizable narrative:

> _Alex has just written a refactoring of some website backend code. Since it was a small task, it’s committed and Alex moves on to the next feature._

> _When the code is deployed in production two weeks later it causes the entire site to go down. A one-character typo which was missed by automated tests caused a failure cascade reminiscent of the bad-old-days at twitter. It takes eight hours of downtime to isolate the problem, produce a one character fix, deploy it and bring production back up._

> _Alex curses luck, blames human infallibility, inevitable cost of software engineering and moves on to the next task._

> _This story is the day-to-day of most startups I know. It sucks. Alex has a problem and she doesn’t even know it. Her development practices are unsustainable. “Stupid mistakes” like the one she made happen more frequently as the product grows more complex and as the team gets larger. Alex needs to switch to a **scalable** solution._ (Emphasis added).

The purpose of continuous deployment, then, in Fitz’s definition and the current definition, is to make deployment scalable.

Fitz was perhaps more right than he realized. Traditional deployment practices have only gotten less practical and less scalable.

In our research (see the [Big code report](https://info.sourcegraph.com/emergence-of-big-code-2020-survey?_ga=2.117030534.1813537383.1623859682-2046487521.1621427028)), we found that 51% of respondents reported having more than 100 times the volume of code they had 10 years ago and 18% saying they have 500 times more code.

As Fitz pointed out 12 years ago, so-called “stupid mistakes [...] happen more frequently as the product grows more complex.” But they’re _not_ stupid mistakes, we need to point out; if something is inevitable and consistent, it’s not an individual mistake–it’s a flaw in the system.

That’s why Fitz proposed continuous deployment as a new system. If you’re deploying continuously, he writes, then you can fail fast. He writes that “the closer a failure is to the point where it was introduced, the more data you have to correct for that failure.”

If Alex had deployed as soon as she developed the change, the failure would have been less severe, the rollback faster, and the diagnosis easier to make. And in a puff of smoke, theoretically, goes release anxiety.

### True continuous deployment is impossible for all

The problem with continuous deployment is that it requires a SaaS environment. If you deploy your product as a cloud-based service, then you can push instantly available changes all day long.

But that’s not the reality for most companies. Despite the seeming dominance of SaaS, on-prem and self-hosted environments are not only still alive but thriving.

According to a [Replicated and Dimensional Research study](https://www.replicated.com/blog/on-prem-sales-and-demand-are-rising/): 92% of companies indicate on-premises software sales are growing. That’s right, not declining or stabilizing–_growing_. In fact, their research shows customer demand for on-premises software actually equals that for public cloud. Not only is on-premises growing, but according to their research, 91% of customers report being satisfied with their on-premises software.

This narrative violation isn’t the result of split camps, either. It’s not as though we have one camp using the public cloud and one camp sticking with on-prem. (Sourcegraph, alone, disproves this with our products being split among self-hosted and cloud environments).

The same Replicated and Dimensional Research report shows that over 50% of respondents’ revenue came from on-premises software deployments and that 54% reported that over half or more of all of their software sales were deployed on-premises.

In other words, take Twitter discourse with a grain of salt. SaaS might be a hotter topic, as the Google Trends screenshot below proves, but on-premises is very much still alive.

![Google Trends report on SaaS, on-prem, and self-hosted searches](https://storage.googleapis.com/sourcegraph-assets/blog/release-anxiety-images/Screen%20Shot%202021-10-14%20at%201.47.59%20PM.png)

And if on-premises is alive, then fully continuous deployment cannot be a universal solution.

### Continuous deployment is impractical for on-premises and self-hosted software

When you control the platform and the environment, as we do with Search (or as all SaaS products do), then you can ship to production multiple times a day. As much as your team might be prepared to ship that often to your self-hosted product, however, the strategy just isn’t practical.

Upgrading enterprise software isn’t like upgrading your laptop’s OS–it’s much more tedious and much more involved. Apple works in a closed ecosystem, whereas companies like Microsoft and Sourcegraph work in an open ecosystem. In an open ecosystem, people deploy their software in specific ways with specific configurations. We, unlike Apple, don’t control the environment our software runs in.

In an on-premises or self-hosted environment, continuous deployment would mean asking customers to pull and test a commit from an arbitrary point in time. The result would be different customers running many different variations of your product, making it hard to replicate versions in which customers might be encountering a bug (and hard to warn other customers about a particular version).

Your customers have, at times, an uncomfortable amount of agency. That release you’re particularly excited for? The one you rushed those changes into? Your customers might not actually upgrade to it for months. If you rushed in a bug along with a fix, that also means that bug might remain in their codebase long past your next release.

You’re on their schedule. Released does not equal fixed.

That doubly applies when you consider how many different customers have customized their deployments and environments. While you can make it somewhat easier by building those variations into your test matrix, as a general rule, the more variations and customizations a customer has, the harder the upgrade process will be.

Keep in mind that release anxiety doesn’t only apply to you–it applies to your customers. If your releases cause anxiety among your team–the people who know the product best–then the release and upgrade process probably causes anxiety amongst your customers, too. They might have to rely on your customer support team and otherwise take a lot of time to upgrade.

If it’s too costly, both in terms of anxiety and effort, they might think twice about upgrading to the next release. One solution to this is a [managed instance plan](https://docs.sourcegraph.com/admin/install/managed).

## A continuous delivery mindset: a solution all teams can embrace

So, does that mean we should let the limitations of an on-premises environment control how we release software? No. Here are three reasons, though we’re sure there are more:

- Only 16% of companies can deploy on-premises software in under a week (according to the previously cited Replicated and Dimensional Research study).
- A full 83% of companies need multiple people to install and manage their customer’s software (according to the same study).
- And, to bring it all home, release anxiety. A monthly, or even weekly, release schedule is eventful, stressful, and prone to the pressures (and their resulting mistakes) we cited above. That, and your engineers are just plain unhappy: unhappy with their work, unhappy with themselves, unhappy with their team, and unhappy with their company. At its worst, this can be a contributing factor to burnout and attrition.

There has to be a better way. And there is! At Sourcegraph, we’ve been honing what we call a continuous delivery _mindset_. We’re not the first to do this, but results from our experience indicate it’s a strategy worthy of more iteration and uptake.

### Principle 1: Main should always be releasable

Even if you can’t deploy continuously, you can still embrace the idea that code should always be in a secure and deployable state. Automated tests run in production-like environments can help assure you that a given code change and its environment will operate like they’re supposed to.

Main should always be releasable but that doesn’t mean every “releasable” PR is polished. Break feature work into multiple PRs that your team can then review and merge over days or weeks.

The goal is to deliver continuous pieces of improvement rather than big chunks of functionality. Regularly ask yourself: “Can this work be broken down into smaller pieces?” The smaller the iteration, the better.

At Sourcegraph, one way we make this easier is by using [feature flags](https://about.sourcegraph.com/podcast/ivar-egil-osthus/). Feature flags determine whether a piece of functionality is active or not. You can put work behind a feature flag that hides it until it’s ready for release. That way, it goes through your continuous integration pipeline that runs all your tests. You can continuously ship value without risking unnecessary exposure.

The name of the game is compactness: you want a short feedback loop and a small scope of work. If something goes wrong after you ship a small change, then it’s easier to diagnose and fix. If you only ship big chunks of code, which could contain hundreds of files, then repair will be harder.

We’ve had the privilege of being able to model this on Sourcegraph Cloud. We release continuously to Cloud, meaning the engineers working on the self-hosted version can see and use Cloud's tight feedback loop. They can get the benefits of continuous delivery before deploying those changes to the self-hosted version.

Not every company will be able to replicate this system–cloud services are costly after all, and your business model might not facilitate a cloud version. It’s worth considering, however, because engineers expect and benefit from a fast feedback loop.

If you can’t, you can at least build a dog food environment; we have one that’s a staging environment for Sourcegraph Cloud. We deploy to it constantly, and give engineers permission to let it be unstable and offer no guarantees for uptime. Our engineers basically have free reign over this environment and can test anything they want.

### Principle 2: Releases should be uneventful

A lot of release anxiety comes from the fact that release day is an event. Slack notifications are firing and PR reviews are flying–all with the tone of a harried parent juggling the elements of a Thanksgiving dinner before their in-laws arrive.

The goal is to forget about the release date. Continuously deliver value such that release day is (more or less) like any other day. That way, even if something small slips, you always have something to show your customers. This strategy is especially effective if you prioritize the features you most want to get into the next release early in the release cycle.

Your release schedule is your primary way to reinforce this principle.

Recognize that you’re not chained to a monthly release cadence. Continuous deployment might be impossible but weekly releases might be within your sights. The more often your releases, the less eventful they’ll be.

That said, weekly releases might still be too burdensome for your customers. The solution? Don’t tell them. Instead, cut and announce a public release every month and two weeks later, cut an informal release.

Some teams even go so far as to randomize the cut date. While the release date is regular for the sake of their customers, the cut date is announced to the team that week and the actual weekday is unknown until then. This creates a forcing function that actively blocks people from treating release day as an event. What, after all, is an event without a date?

A faster release schedule will also help you maintain your release infrastructure. If you’re only turning the infrastructure code and pipelines on once a quarter, or even once a month, you’re setting yourself up to run into issues. These problems are likely to compound the longer the gaps are between using the infrastructure to deliver a release.

One mental model through which you can look at this is one that both [GitLab](https://about.gitlab.com/blog/2015/12/07/why-we-shift-objectives-and-not-release-dates-at-gitlab/) and [Ubuntu](https://wiki.ubuntu.com/TimeBasedReleases) embrace: shift objectives, not due dates. GitLab co-founder Dmitriy Zaporozhets sums it up like this: “Release what you have and do it on a schedule.” Instead of cramming in changes or delaying releases so you can fit in those changes, delay changes to the next release.

Releases should be a true snapshot of your current work. Shift from “Will X be merged?” to “Is X merged?” As Jez Humble, SRE at Google, [tweeted](https://twitter.com/jezhumble/status/1448318922713821186?s=21), continuous delivery is not about “taking whatever crap you have in version control & shipping it into prod as fast as possible so you can test in prod” but is about “making it SAFE to ship your code into prod quickly.”

<blockquote className="twitter-tweet tw-align-center"><p lang="en" dir="ltr">It’s come to my attention that many people think continuous delivery/deployment is about taking whatever crap you have in version control &amp; shipping it into prod as fast as possible so you can test in prod<br />NO<br />CD is about making it SAFE to ship your code into prod quickly by:</p>&mdash; Jez Humble (@jezhumble) <a href="https://twitter.com/jezhumble/status/1448318922713821186?ref_src=twsrc%5Etfw">October 13, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

Your ultimate metric of success won’t be a poll of emotions among your teammates but will be how often your customers upgrade. An uneventful release for you is one that’s uneventful for your customers, too. If your customers are regularly upgrading and consistently keeping up with new releases, then you can trust you’ve reached a point where your releases are uneventful.

### Principle 3: Everything should be automated and tested

A key aspect of continuous deployment and delivery that’s just as available to on-prem and self-hosted environments as SaaS is automation and testing. Even if you release once a month, manual work should still be seen as a nuisance to reduce or eliminate. Without automation, you’re reliant on the heroics of individual engineers, which isn’t scalable.

The process of introducing automation is an investment with a high upfront cost and higher sum of returns. At Sourcegraph, in 2019, it took a person an entire week or two to handle a release; thanks to what was then called the Distribution team (and has since split into Delivery and Developer Experience), automation takes care of it in just a few hours.

Automation, however, has its limitations. As Fitz writes in his essay on continuous deployment, “no automated tests are as brutal, random, malicious, ignorant or aggressive as the sum of all your users will be.”

With that in mind, don’t push your software to all of your users in one fell swoop. Instead, use blue-green deployment, a progressive rollout, or canary instances.

- In [blue-green deployment](https://martinfowler.com/bliki/BlueGreenDeployment.html), you set up two identical production environments. If blue is live, then do your testing in the green environment. Once it’s working, make the switch and have all incoming requests head to the green environment.
- In a progressive rollout, you roll out a release to a smaller set of servers–say, five–and then look for errors. If there are no issues, roll out to ten. Look again. Gradually increase the exposure of a new feature to new people so that you can catch errors with a minimum amount of fallout.
- In a canary instance, you deploy to a replica of the production environment. If something is faulty in the code or the deployment, you’ll see it in the replica. Then, you can fix your code before rolling it out to production.

Automation gives you the confidence you need to build a continuous delivery mindset and in so doing, alleviate release anxiety.

## Embrace a continuous delivery mindset

Continuous deployment and delivery are hot topics, and Twitter feeds and Hacker News comment sections light up with discussions of the most cutting-edge startups deploying every day, every minute, every second. But the reality for most companies, and most engineers, is more complex.

In most cases, real-world engineering practices will always lag behind their ideal state. Back on Earth, we still have to deal with on-prem environments, upgrade cycles, and release anxiety. Reality can be harsh, and even disappointing, but that doesn't mean those on the frontier have nothing to teach us. Even if you can't pursue true continuous deployment and delivery, you can still apply ideas those working on the frontier helped forge.

Even if continuous deployment and delivery isn't within your grasp, a continuous delivery mindset is.

_With thanks to [Jean du Plessis](https://handbook.sourcegraph.com/company/team#jean-du-plessis-hehim), [Dax McDonald](https://handbook.sourcegraph.com/company/team#dax-mcdonald-hehim), [Joel Kwartler](https://handbook.sourcegraph.com/company/team#joel-kwartler-hehim), and [Adam Harvey](https://handbook.sourcegraph.com/company/team#adam-harvey-hehim) for contributing insights to this post._

## More posts like this

- [Monitoring is not enough: For high-performing development teams you need observability tools](https://about.sourcegraph.com/blog/role-of-observability-tools-high-performing-development-teams/)
- [Avoiding the pitfalls of iteration-based development, explained in 5 pull requests](https://about.sourcegraph.com/blog/avoiding-the-pitfalls-of-iteration-based-development/)
- [The Nine Circles of Dependency Hell (and a roadmap out)](https://about.sourcegraph.com/blog/nine-circles-of-dependency-hell/)
