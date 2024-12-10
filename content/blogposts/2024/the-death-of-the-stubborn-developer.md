---
title: "The death of the stubborn developer"
authors:
  - name: Steve Yegge
    url: https://x.com/Steve_Yegge
publishDate: 2024-12-10T10:00-01:00
description: "How stubborn developers are getting left behind by refusing to adopt chat-oriented programming (CHOP) as their primary development approach."
tags: [blog]
slug: 'the-death-of-the-stubborn-developer'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/death-of-the-junior-developer-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/death-of-the-junior-developer-hero.png
---

I wrote a blog post back in May called [The Death of the Junior Developer](https://sourcegraph.com/blog/the-death-of-the-junior-developer). It made people [mad](https://www.youtube.com/watch?v=_cgONVgHzRw&t=3s). My thesis has since been corroborated by a bunch of big companies, and it is also happening in other industries, not just software. It is a real, actual problem, despite being quite inconvenient for almost everyone involved.

My beehive-kicking post’s main premise is pretty simple and can be visualized in terms of two different kinds of task that arise on software projects.

As any old-salt Project Manager knows all too well, every nontrivial project implicitly has a task graph consisting of multiple tasks, complete with subtasks and dependencies.

Many of those graph nodes are leaf-node tasks, like “write an auth library” or “modernize these unit tests”. They tend to be fairly self-contained. We often give these leaf node tasks to junior developers because the scope is small.

The other kind are tasks that combine the leaf tasks in various ways, to deliver the actual project and all its subprojects. If you’re building a car, you can have all the individual parts 3D printed for you, which is more or less what LLMs are doing for code. But someone still needs to build the car.

Those higher-level, interior task-graph nodes often involve a lot of planning and coordination.

Here’s the rub: As of about May, LLMs can now execute most of the leaf tasks and even some higher-level interior tasks, even on large software projects. Which is great. But what’s left over for humans is primarily the more difficult planning and coordination nodes. Which are not the kind of task that you typically give junior developers.

So what the hell are junior developers supposed to work on, exactly? How do they level up now?

My CTA: they had better learn chat-oriented programming, “or else”.

That was my post, in a nutshell. Bit of an oversimplification, but close enough for today. It really caused a stir. But what I don’t think people fully grok is that even if the furor has waned, the problem itself is not over — it’s just starting.

In hindsight, *junior* is the wrong characterization. I’ve talked to a lot of people about the word “junior” here for software devs, and we all agree that it’s not the right term. There’s definitely a category of devs who are getting left behind, but it’s clearly much more nuanced than being all about junior devs.

Junior devs are deeply affected, though, and it’s a concern.

One problem is that the circuit that lets junior developers grow into senior developers is broken or at least damaged. I’m borrowing an apt analogy from [Dr. Matt Beane](https://www.linkedin.com/in/mattbeane/), who describes the [same phenomenon happening with junior surgeons](https://videos.itrevolution.com/watch/1023437609) due to the emergence of surgery robots. Very similar situation: The task graph leaf nodes are automated now, so we don’t need (as many) junior contributors.

However, some junior engineers pick this new stuff up and fly with it, basically upleveling themselves. And many senior engineers seem to be heading towards being left behind. So what is it, then?

I’ve recently talked to two polar-opposite companies — one where the juniors have adopted chop, but the seniors stubbornly refuse, saying it’s a gimmick. And another where the seniors have adopted chop, but the juniors refuse, the reason being that they think it will take their jobs. It’s craziness out there.

So coming up with the right characterization here is tricky. How can you specify in one swoop which devs are in the most trouble here?

We’ve managed to narrow it down to a single principle: *You are getting left behind if you do not adopt chat-based programming as your primary modality.*

There are a few legitimate reasons for not being able to use chop, but they are quickly evaporating as excuses.

So call it whatever you like, but to me, as time goes by, the holdouts are just looking stubborn.

But why am I specifically calling out chat-based programming? It’s because chatting with the LLM is how you get those task-graph leaf nodes 3D printed for you. It’s an integral part of the whole process.

So chatting is how programming is increasingly being conducted in the wild, as we speak. It’s not off-mark to say the job of “software engineer” is changing forever, and all coding, even updates, will eventually be done via chat. And remember, it’s chat with something that hallucinates wildly, so it’s not exactly the solid slam-dunk leap forward that we all wish it were. But it is such a boost that the economics are driving everyone that direction anyway.

In my blog post I called this phenomenon Chat-Oriented Programming, CHOP for short (or just chop). Chop isn’t just the future, it’s the present. And if you’re not using it, you’re starting to fall behind the ones who are.

I’m going to stop qualifying this assertion as my opinion, because at this point it is entering into well-established fact territory. Here at Sourcegraph we have many partners and customers who are sharing with us the results of their internal studies, across a range of coding assistants. This has given us perhaps broader perspective than many.

The broad conclusion is that switching to chop gives enterprise engineers a minimum boost of 30% in productivity across the board — even when the engineers are grumbling and think they are slower with it. That number is conservative, and some report higher. Moreover many of those studies were early days.

The baseline productivity boost should continue to grow everywhere as foundation models, tools, and the art of chop all mature. And it’s not capped at 100% (2x). It can easily go to 10x, 20x or more in some situations.

That, friends, is addictive. Random reinforcement for the win! Chop is fun for the adrenaline rush alone. Helps make up for the times you’re stomping around cursing at it.

So chop’s a thing. It’s happening already. Last I checked, I think ChatGPT was still the world’s most-used coding assistant, and it doesn’t do completions, only chop. Chop has a big following.

The only remaining room for differing opinions here is on how long chop will last. In my totally unproven but educated guess, it will be at least three years. In fact I think there’s a good chance it lasts up to ten years, given how long it took for assembly language to finally die.

That’s my opinion: We’re stuck with chop for years to come.

There is another camp of very smart people who have a different opinion from mine, and I want to represent them fairly. I’ll do my best. They don’t disagree that it exists today. But they lean towards thinking that chop will be short-lived, because it will be replaced with autonomous agents in various forms and flavors.

The basis for the disagreement is twofold, I think. First, chop is hard. You have to be a skilled computer user to make it work well. Not so much a skilled developer, as a skilled hacker, I guess. You need to type fast, read fast, use tools well, and have the chops (ahem) to sling large quantities of text and context around manually.

So a lot of people are worried that chop isn’t for the masses. And the masses have money, which of course makes it a question of some interest at the moment, here at the end of 2024.

Chat-oriented programming is hard, but many folks believe that autonomous agents are right around the corner, and that they will handle all that heavy lifting for you. You’ll just need to write short prompts and spot-check the results, with much less toil involved.

They believe these generic autonomous software agents will solve the problem of chop being too difficult and toilsome. In fact some people claim that agents can take over the task graph entirely, perhaps at least for small businesses, allowing non-technical CEOs to launch apps themselves without having to hire any pesky developers.

I think those people are smoking some serious crack. But many are well-funded, so they’re going to get a chance to give it the old college try, burning investor money like jet fuel along the way. Reminds me of the ride-hailing heyday. How long will the money hold out, I wonder?

People have been working in earnest on LLM-backed autonomous agents for at least 18 months, [Devin](https://www.cognition.ai/blog/introducing-devin) being the poster child rolled out in March to delirious fanfare, and from which we haven’t heard so much as a [fart](https://www.reddit.com/r/ArtificialInteligence/comments/1fsamr1/why_devin_is_out_of_news_or_i_am_unaware/) these past eight months. And I’ve heard tell of many more of these general-purpose agents allegedly in development. Somewhere. Supposedly.

Here’s the thing, though: Industry-changing new technologies, the ones that change how we code, always grow the same way: incrementally. They emerge small but capable — just barely good enough to justify using them. And then over time, and many public releases, they grow gradually into behemoths. At least, they do if they’re any good to begin with.

Examples: IDEs, high-level languages, web programming, cloud computing, mobile computing, CI/CD — these and more all grew exactly that way. Even LLMs are the result of thirty-plus years of publicly visible incremental improvements to neural nets.

So you’d expect all that to be happening for generic autonomous agents. Right?

Well, where is it, then? If I’ve missed something, let me know. But from what I can tell, nobody has launched anything usable yet to start iterating on.

At this point I suspect the investors who are still in the game are hoping for a big-bang breakthrough that will get it rolling all at once. Because a trickle at this point would be a disaster.

I mean… maybe? It *could* happen? I’m bearish myself.

But perhaps there could be some middle ground: something less ambitious than fully general autonomous software agents, but which might still be a big productivity multiplier that can handle much more of the task graph for you than plain old LLM chat. I mean, it’s plausible enough.

One person with an opinion here that I greatly respect is [Idan Gazit](https://www.linkedin.com/in/idangazit/), who is Senior Director of Research over at GitHub Next. He gave a fascinating talk at ETLS in Vegas this year. Idan isn’t a huge fan of chop. We had a big heart-to-heart over it and man that guy is cool.

I do empathize with his viewpoint. In essence, he’s an HCI guy at heart, so obviously he doesn’t want Copilot users to be screwing around with task-graph management and context wrangling. So he is [looking for an AI modality](https://videos.itrevolution.com/playlists/xJFr0BINogoP0eYzD1vR/watch/1002959470) that every developer can use, one that isn’t biased towards virtuosos.

Idan’s beef with chop, or his chop beef, so to speak, is fair enough: The LLM knows the answer, but it can’t actually do anything except inform you. You might say it’s about as agentic as, well, chopped beef. You, the programmer, must perform all the labor of chopping the context into your chat sessions, and then beefing the answers back into your code base.

Sorry, it’s late. This is like slapping both myself and you to keep me awake.

Let’s restart. You, the programmer, must perform all the labor of *fetching* context and *integrating* answers. That’s basically it. Chop involves a whole lot of fetching and integrating. Over and over, in a loop. If you are doing chat-first programming, that’s a big part of the job now.

Chop’s toil feels an awful lot like it should be handled by your tools; I think everyone can agree on that. With that in mind, Idan is searching for something more powerful than chat, something that any regular programmer today could use without really having to learn too much new stuff.

And that’s a big deal. If devs don’t have to learn as much, it would be great news. More programmers will use AI, and more devs will survive the transition to LLMs. I’m a fan. Copilot Workspace is GitHub’s first foray in this ambitious direction. I hope they are successful with it.

Idan rightly observes that everyone will copy whoever stumbles on the magic formula, whatever it winds up being. So we’re all in this together in a sense, trying to figure out what the hell programming will look like tomorrow.

Although I am rooting for them, I’m not banking on it myself. I’m assuming it’ll take years to create agents reliable enough to drop into a developer’s workflow and expect them to use it without any training or toil.

In the meantime, you can actually use chop today, in any coding assistant that supports chat, and get stuff done faster right away. That’s the good news.

The not so good news is that if you’re impatient, you *do* have to learn new stuff. Chop’s combination of intrinsic difficulty and newness creates its own knock-on problems. How do we teach it? How do you learn it? How do you interview for it? And of course, where are the metrics?

I’ve been talking to publishers, researchers, industry mavens, you name it. Everyone understands at some level that chat-oriented programming is the next big evolutionary phase for programming. The last one this big was the jump from assembly to high-level languages.

But nobody knows how to teach chop. There are no resources. It’s day zero. It’s happening before we know exactly how to do it! Sounds a lot like CI/CD back in the day, doesn’t it? Random hodgepodge of best practices told around campfires?

And for enterprises, nobody knows how to measure the impact of Code AI, a term which broadly includes all known approaches to using AI for accelerating software development, including chop as a big one.

How can you justify a big ongoing investment in Code AI for your company if you’re not sure whether it’s working?

As luck would have it, the legendary [Gene Kim](https://www.linkedin.com/in/realgenekim/) and I have been conspiring to brew up some help here. I’ve been working with Gene since we met at ETLS this summer, during which time I have come to admire him greatly. He’s the most unfailingly positive and encouraging person you will ever meet, and his enthusiasm is unfailingly catching and inspiring. Heck, I wouldn’t have got this post published today if Gene hadn’t been texting me PUBLISH IT!! all evening.

But more to the point, Gene has more than a few superpowers — including the coveted Boundless Energy DLC, which you don’t often find together with the Scarred Wisdom and Infinite Patience powers. Gene has ’em all.

Like me, Gene has also been fascinated with the effect chop is having on both his own productivity, and on the industry in general. To explore the teaching problem, he and I did a Zoom pair programming session that [yielded a ton of insights](https://x.com/RealGeneKim/status/1856146004724330862). It’s a pretty deep rabbit-hole if you want to see chop in action. In our session, Gene developed a new superpower using chop, one that makes him the fastest YT video excerpt tweeter on earth. A low-tier power? You betcha.

But he acquired it in under three hours. Take a look!

And to help with the impact measurement problem, Gene aims to do the same thing he did for Code AI that he did with CI/CD: [The DORA metrics](https://dora.dev/). Gene was one of the founding fathers of that industry-transforming initiative. And now, his ambition is to do the same for Code AI.

The idea is to define a set of rigorous industry-standard metrics to help companies know whether they’re doing the right things. These DORA-like metrics will take a group effort. Gene, among his other powers, shares one god-tier superpower with Vint Cerf, co-inventor of the internet, who is the only other person I’ve met with this power. Vint once told me, with great gravity: “My superpower is that I can convene people.” Gene also has a rare talent for gathering and rallying experts. And the team he’s assembling to solve this problem is world-class.

Even Idan’s on it. Naturally. We’re not messing around here.

But it’s all waaay too much for this post, which has already been growing like a weed. Alas. But one spoiler I’ll offer is that one of the most important metric-related dimensions we’ve unearthed is Optionality. Chop may not necessarily make you a lot faster at stuff you already know how to do well. But it makes you extraordinarily faster at things you’re not very good at — things that you’ve been putting off because you know it’s going to be more work than it’s worth.

Chop thus allows you to explore many options in parallel at each stage. For instance, you’re not limited to the programming languages you already know; you can make the LLM do it all in whatever languages you’d like to try out. Same for the database backend, and so on. If the contracts are largely the same, the LLM can quickly create multiple subsystems for that contract which you can compare directly.

This dramatically increases the scope of what you (and your company) are willing to tackle, which is huge for planning at all levels in the company. And it increases the trustworthiness of the results, because you have tried several options at each critical juncture.

We think it would be good to quantify and measure all this, and Gene is bringing in the top Optionality experts from other domains to help. Keep your eyes on his Twitter!

So. That’s my view of the landscape today. I’m not bought into general-purpose autonomous agents. I’m talking to a couple of companies working on *special-*purpose autonomous and semi-autonomous agents, which is an interesting idea. But it’s all early days and unproven. I’m wishing them well and not holding my breath.

I’m not trying to paint a rosy picture. Chop’s adoption will continue to be a bumpy ride for a while. I’ve learned a lot since May about its downsides. It is very different from regular programming, for instance because of hallucinations. People have different levels of tolerance for that level of ambiguity. You would think chop’s learning curve would be shrinking, but it appears to be growing.

It’s also outside many people’s comfort zone, or their idea of what a programmer’s job should be. You have to commit some serious time in order to switch, and then your job is pretty different. That’s a lot to ask of people.

And once you do adopt chop, you’ll find to your disappointment that its benefits are decidedly and uncomfortably nonuniform. Some people will see much larger benefit than others. There is a distinct bias favoring devs with particular skills. And you’ll get different results even from task to task. My buddy Dr. Eric Fritz, who went from skeptic to convert all on his own over the past year, has some [funny thoughts](https://eric-fritz.com/articles/my-ai-junior-dev-still-needs-an-adult-in-the-room/) on how to characterize these idiosyncrasies. Worth a look, I promise.

But the bottom line is that chop, although I’m claiming it’s inevitable, is unfortunately nowhere near as linear an accelerator as people might think. Despite its “proven” productivity boosts, chop has also “proven” to be a mean-spirited pain in the ass: unintuitive, uneven, unpredictable. It’s no wonder so many people are hoping it’s just a short transient phase.

My colleagues and I at Sourcegraph are firmly in the camp that believes that *you* are the agent who will wrangle the task graph, above the level of the leaf nodes. We believe the wrangler will be human, not a model. We are not sitting around to wait for the research on autonomous agents to conclude, for these all-purpose systems to be built, launched, tested.

Screw that. We just want to give ourselves (and you) the powers you need to make chop go faster.

What does that mean in practice? It means two things, and this is true of any coding assistant. First you make the inputs to the LLM faster, by speeding up context fetching and prompt reuse. Then you make processing the outputs faster, e.g. with a smart-apply button.

Of course the LLM’s plan often includes more kinds of integration, like running tools or inspecting logs, and until that integration matures, you handle it with manual toil. But having a coding assistant is a huge speedup. Despite their flaws and gaps, coding assistants can be a better experience than using raw Claude or Gemini/GPT, because they streamline a lot of the work with the LLM inputs and outputs. It all comes down to how well your coding assistant supports chat as a modality.

It’s safe to say there are oodles, perhaps giga-oodles of coding assistants out there, and as Idan rightly observed, they are converging to an extent by selectively copying one another. It has become like choosing a car, or an airline maybe. They’ve all got roughly the same feature set, but the configurable dials are all turned to different settings.

Examples: Some assistants lock you into a certain model; others give you choices. Some aim for zero-config turn-key bliss, where you don’t have to think about it to use it; others give you more control. Some focus more on individual users; others, mostly on enterprise. Some require you to use their IDE, while others live in your IDE as a plugin.

These are some pretty fundamental choices that mean a lot to many developers. Depending on your preferences and your company needs, you may find yourself gravitating towards, or being forced to use, a particular coding assistant. Keep in mind that while they may all do roughly the same thing, the way they *present* that functionality to you can be very different.

But I think it’s good to have so many options! And competition fosters innovation.

People often ask me “What’s one thing Coding Assistant X can do that others cannot?” I don’t think that’s the right question. If you view them more like car models, since they are arguably both as plentiful and as complex, then coding assistants can be as different a Hummer, a Lamborghini, and an e-bike. The right question is, “Which one is best for you?”

The most important thing to know is that they’re *all* really frigging cool, and if you use them for chop, you will start flying. Don’t think about code completions anymore. Those are only useful when the LLM isn’t writing your code — which should be exactly never, or at least headed in that direction. To the extent that you can get the LLM to do your work for you, *any* coding assistant supporting chat conversations will make you a better dev right away. Today.

And the converse is also true: If you’re not using chop, then you’re plodding. You’re like one of those crusty old assembly-language holdouts still using asm in 1990 because compiler-generated code wasn’t fast enough. Stubborn bastards, the lot of ’em. Sound familiar?

They were both right and wrong, since compiler-generated code was indeed not as trustworthy as handwritten code (sound familiar?)… at the time. Once it caught up, their doom was sealed, and their smugness, wiped.

Same will go for you, soon enough, if you find yourself still programming by writing code by hand when the shoe drops.

This has been a super tough pill for people to swallow. Pharmacists have told me that a lot of patients are confused about their suppository meds and try to eat them. I think that is such a beautiful metaphor here. Chop is unintuitive, biased towards hotshots, nonuniform in its productivity boosts, not yet well-supported by tools, and hard to measure. And you shouldn’t eat it.

Those are indeed tough bananas. But unless you want to gamble everything on autonomous agents magically not sucking in the near term, then you need to get on board with chop immediately. Because there’s a lot to learn, and most of it you need to learn by doing it.

That’s it for today! If you’re looking for a takeaway, it’s in the title.

My CTA this time, to bookend the year, is identical to the CTA in May: They had better learn chat-oriented programming, “or else.” Or else… their *beef* is *chopped*. If you follow me.

Man, it’s really late. I’m gonna call it.

Time for your team to take the plunge, and start trying to stop writing code.

That’s what LLMs are for.
