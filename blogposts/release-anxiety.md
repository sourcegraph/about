---
title: "Let's talk about release anxiety"
description: 'Engineers are caught in a vise between two pressures: the pressure to get code changes into the next release and to protect the release from bugs. The result? Release anxiety.'
externalTitle: 'Release anxiety: What it is and how to address it'
externalDescription: "Release anxiety plagues many engineers. Can you squeeze in this last code change? Will this last code change break production? Let's talk about ways to deal with the anxiety."
author: Nick Moore
authorUrl: https://twitter.com/nickwritesit
published: true
publishDate: 2021-11-04T10:00-07:00
tags: [blog]
slug: release-anxiety
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-anxiety-images/release-anxiety-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-anxiety-images/release-anxiety-hero.png
---

![Release anxiety graphic](https://storage.googleapis.com/sourcegraph-assets/blog/release-anxiety-images/release-anxiety-hero.png)

“Don’t release to prod on Fridays” is a saying that might as well be sticky-noted to every engineer’s monitor. It’s a joke that masks something pretty serious: engineers don’t feel confident in their ability to deploy and walk away from their desks.

The authors of _[The Phoenix Project](https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business/dp/1942788290/)_ compared this fear to the instinct animals have to avoid danger, writing that “everyone is moving their changes as far away from Friday as possible, like woodland creatures running away from a forest fire.”

But our workplaces should, ideally, never resemble forest fires. The result of impending fire is release anxiety–when engineers feel vigilant, nervous, and wary of upcoming releases and the release process in general.

Sourcegraph, at least in this way, is not unique. Our engineers get anxious, too (one of our engineers, [Adam Harvey](https://handbook.sourcegraph.com/company/team#adam-harvey-hehim), wrote an entire [RFC](https://handbook.sourcegraph.com/communication/rfcs) on the subject). Where we are unique, however, is our concurrent release strategies and our methods for handling them. For our [self-hosted product](https://about.sourcegraph.com/#get-started), we have a monthly release schedule; for our cloud product on [sourcegraph.com](https://sourcegraph.com/), we release continuously.

We experience the benefits and the drawbacks of both setups and the unique anxieties of each–lucky us! In this post, part one, we’ll explain the causes of release anxiety and in [part two](https://about.sourcegraph.com/blog/continuous-delivery-mindset/), we'll explain how to relieve release anxiety.

## The two-pronged cause of release anxiety

You can’t develop a treatment without a diagnosis. The primary cause of release anxiety is two-pronged, consisting of:

- **The pressure to improve**: The stress that comes from the desire and the business imperative to ensure new code changes will make it into the next release. If you don’t get a given code change in, then you will have to wait another release cycle before you can get any feedback on it.
- **The pressure to protect**: The stress that comes from the need to ensure the new release doesn’t introduce problems as a result of its new code changes. If you don’t safeguard your release, you might have to wait another release cycle before you can deploy a fix, or you might have to send out an impromptu, potentially embarrassing, patch release.

When release week comes, engineers often feel caught in a vise between these two pressures–feeling, on the one hand, that they should rush and feeling, on the other hand, that they should be wary and slow down. You can get caught between pressures–frozen. Thus, release anxiety.

And if you’ve felt more pressure lately than you used to, you’re not alone. According to our [Big code report](https://info.sourcegraph.com/emergence-of-big-code-2020-survey?_ga=2.117030534.1813537383.1623859682-2046487521.1621427028), 92% of participants reported that the pressure they feel to release code faster has increased in the past 10 years. And there’s no sign of this pressure decreasing.

### The pressure to improve

In software, especially if you’re in a startup environment, there’s a constant push to grow and show value. To stand still is to atrophy and/or risk disruption.

This pressure comes both from the external expectations of your market and your customers as well as internal expectations from your company’s leadership. Often, your ability to develop and submit code changes is one of your, or one of your team’s, OKRs, meaning your [career progression](https://about.sourcegraph.com/blog/software-engineer-career-ladder/) can become dependent, in part, on the release cycle.

Downstream, that push results in a pressure applied to every release. Release anxiety is likely to get out of hand if every release carries the weight of the product’s future. In one sense, this anxiety is neurotic–one release isn’t going to kill your company. In another sense, it’s all too real–an important customer may very well be on the other end of a release, waiting for the change they asked for.

For engineers working on our [Batch Changes](https://about.sourcegraph.com/batch-changes/) feature, feedback is only available after a monthly release because these features are only available in the self-hosted product.

If we don’t get a change into a release, that means it will be–at a minimum–two months before we can get feedback on something we worked on. Missing a release is a missed opportunity to close a feedback loop, blocking us from fully validating a new change. And two months is a minimum–with a self-hosted product, customers can wait as long as they want to actually upgrade (many only upgrade on a quarterly basis).

Meanwhile, [Search](https://sourcegraph.com/search) can push to its cloud deployment numerous times a day and instantly see how it performs. No, the Batch Changes team isn’t jealous, why do you ask?

Release anxiety builds up the closer you get to the cut date–the day your team cuts a branch that will become the stable branch for the release.

The closer the cut date, the more likely engineers are to take shortcuts to try to rush something in or make a last-minute change. The desire to fix something or finish something up is palpable.

Scope is hard to restrain. Problems are often amorphous and ambiguous–difficult to measure and predict. Last month, you might have thought, the release date felt far away and you felt you had plenty of time. Now, the cut date is nearly here and the fog around the problem you’re addressing is still thick.

This perceived need to rush, however, can cause bigger issues. These changes might not have undergone proper testing or had enough time for your team to prove them stable. The more code rushed in, the more likely there will be problems with a branch and the longer it will take to fix.

And yet, on the other end is a waiting customer. That customer might be in a bad state, too. Your new change could be just what you need to improve their frustratingly low NPS score. Pressure compounds if misaligned sales and marketing teams make promises to prospects and customers, respectively, too. Now, you risk failing external as well as internal promises.

All engineers–all professionals, really–know there’s a risk to rushing your work. And yet, the pressure to do so is intense–balanced only by a competing pressure, the pressure to protect.

### The pressure to protect

In engineering, deadlines often create a sense of impending doom–a sense that some chunk of code isn’t good enough or isn’t sufficient enough to face release. Opposite to the pressure to send the code out is the pressure to hold the code back.

While some engineers are rushing to make and submit changes, other engineers (often the same ones, on different days) are diving in front of changes, trying to protect the codebase.

Meanwhile, a metric rings in their heads: MTTR, or Mean Time To Recovery. MTTR measures how quickly you can roll back to a previous instance. The better your MTTR, the less your pressure will be to protect. MTTR, however, depends almost entirely on your tooling and how tedious the rollout and upgrade process is.

These engineers have experienced the moments where different chunks of code start interacting in new, unforeseen ways. When you tested that change 30 commits ago, it worked perfectly but now, 30 commits later, a new feature or a toggled feature flag means your change isn’t working as expected.

These engineers have seen code that worked perfectly on local environments fail to scale in customer environments. Their code works for ten users but in production, when users can number in the tens of thousands, scale reveals issues.

Release day can feel like the moment when potential becomes reality, and that can be as scary as it is exciting. If a major release goes really poorly, you’ll have to:

- Tell customers to not upgrade or downgrade.
- Build and release a patch.
- Notify your customer engineering and customer service teams so they can further communicate to your customers.
- Put out a public announcement.
- Delay normal development while you resolve the issue.

With these possibilities in mind, tension between those pushing for changes and those pushing for stability is almost inevitable. You’re all on the same team and yet, come release week, tensions arise. Sometimes, you’re not only dealing with individual release anxiety but conflict among different team members.

## To be anxious is to be human

The existentialist philosopher Søren Kiergaard argued that anxiety is a result of human nature, writing in _[The Concept of Anxiety](https://www.amazon.com/dp/B00BNY0RYG/)_ that you have to “[learn] to be anxious so as not to be ruined either by never having been in anxiety or by sinking into it. Whoever has learned to be anxious in the right way has learned the ultimate.”

Who knew a 19th century Danish philosopher had something to teach us about software development? But his point is right: don’t try to eliminate anxiety; learn to be anxious in the right way, to the right degree, about the right things.

Anxiety is a sign you care. And ideally, we all care about what we produce every day. Anxiety is healthy in the right proportions, and with the right mindset, tooling, and practices, we might even be able to ship to prod on Fridays.

In [part two](https://about.sourcegraph.com/blog/continuous-delivery-mindset/), we'll explore solutions to anxiety, including continuous deployment and delivery.

_With thanks to [Jean du Plessis](https://handbook.sourcegraph.com/company/team#jean-du-plessis-hehim), [Dax McDonald](https://handbook.sourcegraph.com/company/team#dax-mcdonald-hehim), [Joel Kwartler](https://handbook.sourcegraph.com/company/team#joel-kwartler-hehim), and [Adam Harvey](https://handbook.sourcegraph.com/company/team#adam-harvey-hehim) for contributing insights to this post._

## More posts like this

- [Monitoring is not enough: For high-performing development teams you need observability tools](https://about.sourcegraph.com/blog/role-of-observability-tools-high-performing-development-teams/)
- [Avoiding the pitfalls of iteration-based development, explained in 5 pull requests](https://about.sourcegraph.com/blog/avoiding-the-pitfalls-of-iteration-based-development/)
- [The Nine Circles of Dependency Hell (and a roadmap out)](https://about.sourcegraph.com/blog/nine-circles-of-dependency-hell/)
