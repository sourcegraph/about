---
title: "How we built Batch Changes, explained in 5 pull requests"
author: Thorsten Ball
authorUrl: https://twitter.com/thorstenball
publishDate: 2021-04-16T18:00+02:00
tags: [blog]
slug: how-we-built-batch-changes
<!-- TODO: heroImage: /blog/TODO.jpg -->
<!-- TODO: socialImage: https://about.sourcegraph.com/blog/TODO.jpg -->
published: false

---

Straightforward is the last word I’d use to describe how we built Batch Changes.
Exciting, rewarding, surprising, iterative, customer-focused - one of those
maybe, but not straightfoward.

Why? The two name changes in 1.5 years of development - from Automation to
Campaigns to Batch Changes - give you a glimpse. The real story, though, the one
that makes me doubt whether we actually pulled this off, I think is best told by
five pull requests.

Not because these pull requests solve hard technical problems in two lines of
clever code or fix nasty bugs that held us back for months. It's because they
show how we avoided two big dangers of iteration-based product development:
local maximums and the sunken cost fallacy.

To give you some context for these terms, let me tell you how I see the premise
of iteration-based product development. It doesn't matter whether you call it
_Agile_, _Sprint, _Shape Up_ or something else, the idea is this: until you've
built the product, you don't _really_ know what it should look like or how to
best build it. You've never used it, so how would you know how it best works?
You also haven't built it (yet), so you don't have experience building it.
Chances that you can accurately predict how its development will go are low.

Acknowledging that you _don't_ plan the development of the product from start to
finish in every detail. You _don't_ nail down and define the hundreds of steps
it will take to go from 0 to fully-built and shipped and launched product.
Instead, working iteration-based, you define roughly where you want to go and
then take a single small step. Then you look around, get your bearings, correct
course if necessary, and take another step. Build something, ship it, learn,
build again.

I personally love working like this and think that in a lot of contexts in which
software is being developed (fast-moving startups, for example) it's the best way to
ship successful products.

But there's one huge problem with this approach: it's really easy to iterate
yourself into a corner. If all you do is take small steps you can miss the point
where you should take big leaps to someplace else entirely. You end up with [a
local maximum](https://elezea.com/2012/09/iphone-5-local-maximum/). On top of
that: even if you realise that you're stuck and _know_ that you must take a big
leap, it's hard to abandon the things you've built in many, many small
iterations. "So much work went into this! We can't simply delete it! Right?"
Right, it's the [sunken cost
fallacy](https://en.wikipedia.org/wiki/Sunk_cost#Fallacy_effect).

Back to the five pull requests and how we've managed to defy both of these dangers.

In September 2019 we started working on Batch Changes, except that back then it
was called _Automation_ and it was already implemented, kinda: [sqs](TODO) had
built an impressive prototype to show to customers and ask them whether they'd
use something like this. More than one said "yes, I would, and _exactly like
that_". "[Build one to throw away](https://wiki.c2.com/?PlanToThrowOneAway)" is
what they say - but do you? Do you really throw away a prototype that's more
than 10k lines of code and that customers pointed at and said "I want this"?

We did, with [this pull request][pr1], which is a placeholder for all of the
code we wrote in September and October 2019 to rebuild the functionality of the
prototype from scratch. Why did we do it? We thought that building the product
from the ground up, fully understanding and owning the code is more important to
the long-term success of the project and the team than merging a prototype to
get something out there as fast as possible.

Only a few months later, though, we were stuck. We realised that what we had
built and shipped as an alpha to customers just didn't work on a conceptual
level. In that version, campaigns (now called batch changes) were executed on
the Sourcegraph instance to produce changes in repositories, which was cool in a
a way but it also felt clunky, and slow, and adding a new type of campaign (to
produce a new type of change) required us to add new code. "Meh" is a good word
to use here.

So at this point we had thrown the prototype away, built the product from
scratch and had to realise that, well, _this isn't it_. So what did we do?

[We threw half of it away][pr2]. The trigger was this idea: what if we simply
don't produce changes on the server-side but instead accept _diffs_ through
the API and, as part of the Sourcegraph CLI, provide a tool to produce those
diffs wherever you can run the CLI with whatever Docker container you want?

The server-side would then only concern itself with diffs and how to publish
them on code hosts as pull and merge requests, how to sync them, how to track
them, how to rate limit their creation, etc. That means we wouldn't have to ship
a new release every time we came up with a new way to produce diffs. And our
customers that were most interested in making large-scale changes often had
custom tooling already. With the CLI producing diffs by running any Docker
container we could give them a place to plug it in — making it large-scale.

This radical change to how the product worked, was, in my opinion, maybe the
most important one made in the life of Batch Changes. The mental model and the
abstraction layers it introduced turned out to be incredibly well-fitting. They
allowed us to go faster and get a _valuable_ tool into the hands of our
customers even earlier.

So far, so good, right? Yes, except, you know, [naming is
hard](https://martinfowler.com/bliki/TwoHardThings.html) and while we could've
made the old name for the feature — _Automation_ — work we decided to rename it.
Take a look at [PR #3][p3] for the first of many in February 2020 that changed
"[Aa]utomation" to "[Cc]ampaigns" in our codebase.

What followed were months of fine-tuning, user testing, shipping, tweaking -
_iterating_. We added more features, fixed a lot of bugs, made things go faster.

But - and by now you should know where this is going - something felt _off_.
While it worked and we even had customers using it and saying they loved it, we
also noticed that our colleagues had problems using it, but often being relucant
to admit that they were confused with the workflow. Some of the questions we
got: why JSON (yes, we made users write JSON by hand)? Why can't I put
everything in that JSON file, why do I have to switch to the web UI? And what if
I want to update the changes?

I wouldn't say we were stuck - we were constantly shipping new features and
improvements. But we also realised that maybe we've exhausted one idea. Tweaking
wouldn't get us out of this, nor a sledgehammer. But maybe looking at it from a
different angle: what if we leave how diffs are produced alone, but instead
of making users say what should happen to produce a campaign, we switch to a
_declarative_ model and let them describe what the campaign should like in a
YAML file?

[This pull request](https://github.com/sourcegraph/sourcegraph/pull/10921) shows
how we asked "what if?": we wrote the documentation first (yes, README-driven
development) and showed it to teammates and colleagues. The time it took a
colleague to go from "ok, tell me what campaigns are" to "ohhh, I get it! nice"
was reduced tenfold. Very much to our relief, since the changes necessary to
make the documentation a reality were huge. We had to build a distributed,
_declarative_ system that manages hundreds and thousands of pull and merge
requests across different code hosts.

Once the idea was validated by a lot "this totally makes sense" from potential
users we got to work. Look at [this PR][pr4b], number 4b in this series if you
will, to see an example of what "declarative" means and how we reconcile the
current and the desired state (as described by a user) of a changeset. (Sidenote
for the curious: the code today is [even cooler][evencoolercode], take a look).

That brings us to the last of the five pull requests. 

Towards the end of last year we ripped the "beta" label off of Campaigns and
started to concentrate on getting more customers to use it: writing better (or
even any) documentation, improving the onboarding process, providing
troubleshooting help, fixing bugs and edge cases.

At the same time our fast growing product marketing team started working towards
making our product as a whole more consistent. One thing that stood out was the
name "Campaigns" that didn't fit next to the names of our other features and
always required a sentence or two of explanation ("Glad you asked. A campaign is
a ..."). The name Batch Changes, on the other hand, fared far better in surveys:
no one needed an explanation and nearly everyone understood what the feature is
roughly about.

But renaming what we built _again_? It would've been tempting to answer with
"customers are already using it, why bother?" or "we've recorded demo videos
with the old names!" or "there's so many screenshots we would need to change".
In all honesty, though, we had to admit: existing customers probably won't mind
as long as it's not a breaking change, some of our screenshots were outdated
already, and we've been meaning to record an up-to-date demo video again too.

So, [renaming we did][pr5] and followed it up with the first official,
non-alpha, non-beta, download-it-now-and-try-it launch of [Batch
Changes][launch].

Looking back over these five pull requests and at the past 1.5 years now I'm
still surprised. Working in iterations is all I did in my career so fake: 2 week
sprints, 4 weeks, Agile, Scrum, Shape Up, even - ugh - [SAFe][safe]. I know how
easy it is to say "but this is what we said we wanted to build" or "but we
invested all that time!". It's really easy and I'm still not quite sure how we
avoided falling into these traps. My best guess (and this _will_ sound cheesy)
is: commitment. Commitment to building an excellent product, commitment to
building something that provides value to customers, even if it means starting
from scratch when you realise you're in a dead end. 

Or let's turn this around: how hard was it to say in January last year, after a
team of engineers had spent months building it, that we need to rip out half of
it and change the flow completely? Really hard is my bet. But we did and that
still inspires and motivates me, because I'd rather build and ship something
that _is_ valuable and that _is_ good than to give customers something just
because we build it.

[pr1]: https://github.com/sourcegraph/sourcegraph/pull/5482
[pr2]: https://github.com/sourcegraph/sourcegraph/pull/8008
[pr3]: https://github.com/sourcegraph/about/pull/583
[pr4]: https://github.com/sourcegraph/sourcegraph/pull/11972
[pr4b]: https://github.com/sourcegraph/sourcegraph/pull/11972
[evencoolercode]: https://sourcegraph.com/github.com/sourcegraph/sourcegraph@e863448757e09850349b8a2bd7b1e540f6a6259a/-/blob/enterprise/internal/batches/reconciler/executor.go#L91-129
[pr5]: https://github.com/sourcegraph/about/pull/2745
[launch]: https://about.sourcegraph.com/blog/introducing-batch-changes/
[safe]: https://www.google.com/search?q=scaled+agile+framework&tbm=isch

<!---
Pull requests:

PR #1:
- 5 Sep 2019: [a8n: Implement campaigns in GraphQL API by tsenart](https://github.com/sourcegraph/sourcegraph/pull/5482)
PR #2:
- 26 Jan 2021: [a8n: support creating campaign plans from API only, not UI by sqs](https://github.com/sourcegraph/sourcegraph/pull/8008)
PR #3:
- 20 Feb 2021: [rename (in docs and settings): automation -> campaigns by sqs](https://github.com/sourcegraph/sourcegraph/pull/8507)
PR #4:
- 22 May 2020: [update docs for new campaign flow by sqs · Pull Request #10921 · sourcegraph/sourcegraph](https://github.com/sourcegraph/sourcegraph/pull/10921)
- 7 Jul 2020: [update campaigns docs to reflect new flow by sqs · Pull Request #11972 · sourcegraph/sourcegraph](https://github.com/sourcegraph/sourcegraph/pull/11972)
- 4 Aug 2020: [Implement ApplyCampaign and changeset reconciler by mrnugget · Pull Request #12435 · sourcegraph/sourcegraph](https://github.com/sourcegraph/sourcegraph/pull/12435)
PR #5:
- Rename batch changes
-->
