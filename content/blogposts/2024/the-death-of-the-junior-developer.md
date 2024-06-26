---
title: "The Death of the Junior Developer"
authors:
  - name: Steve Yegge
    url: https://x.com/Steve_Yegge
publishDate: 2024-06-24T10:00-01:00
description: "LLMs are putting pressure on junior tech jobs. Learn how to stay ahead."
tags: [blog]
slug: 'the-death-of-the-junior-developer'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/death-of-the-junior-developer-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/death-of-the-junior-developer-hero.png
---

**Warning**: This blog post is somewhat speculative; the sky might not be falling. But my spidey-sense is definitely tingling. The way we are all doing our jobs in software is changing, potentially in big ways. So let's think of this as a thought exercise.

With that disclaimer, we're off!

I have been chatting with a bunch of both junior and senior developer-type folk at different companies lately. By cross-barfticulating these conversations I've picked up on an emerging new pattern, which is that like 80% of you are way smarter than me. My goodness. What have I been doing?

But also another pattern, which is that a lot of people picked a bad year to be a junior developer. A whole lot of people. I wouldn't want to be just getting started in the industry today.

Not just the computer industry. Any industry. It's a bad year to be a junior anything.

My wife Linh and I are huge horror-movie buffs. So, to reflect the somber theme of today's rant, I will use horror movie titles to introduce our sections.

Let's start by talking about what's happening to junior developers.


## The Purge (2013)

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/the-purge.png" alt="The Purge" style={{maxWidth: '200px'}} />


Our first story of the day is about a law firm and has nothing to do with programming. But it is indeed centrally relevant to the crisis that is just starting to loom ominously, as crises love to do. My buddy Gene Kim gave me permission to share this story about his friend who is a managing partner at a 50-person law firm.

In short, one might surmise that all hell is breaking loose at said law firm because of ChatGPT, with some wondering whether the entire structure of their firm, which has been stable for a very long time, might now be completely wrong. Their whole comp structure, pensions, succession planning, everything is going through an existential crisis due to a frigging chatbot.

The problem, you see, is that there could be a future where they don't need junior associates anymore. 

Increasingly, they need only senior associates, who (a) describe the tasks to be done; i.e., create the prompts, and (b) review the resulting work for accuracy and correctness. The high-end LLMs do so well with tasks normally fielded by junior associate lawyers, that there isn't much room left for the real junior associates on payroll.

The LLM can produce research, summaries, briefs, contracts, memos, pleadings, petitions – anything they need. All the documents it creates are "perfect"… with the catch that if someone senior doesn't double check its work before a judge sees it you might wind up in jail or something.

Catching the LLM in a hallucination, catching a junior associate in a mistake – pretty similar. Really just two options for generating the same output. Except one of those options is fast and tireless and essentially free. And the other one puked on the chocolate fountain at the holiday party.

Whew. You picked a bad year to be a junior associate lawyer, that's for damn sure. Sorry, graduating class of 2024. Sucks to be you.

## The Shining (1980)

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/the-shining.png" alt="The Shining" style={{maxWidth: '200px'}} />

Gene shared the law-firm story to illustrate how widespread this problem is. He suggests that the same chaos, which is undoubtedly unfolding across legal firms everywhere, could affect all writing and editorial jobs. You can imagine a world where demand for junior writers and editors starts to evaporate.

Market forces are nudging everyone towards having senior writers who are also good prompt engineers: An arrangement that meets all of their needs faster and cheaper than hiring junior humans.

Gene, as an accomplished and senior author, is delighted with his productivity gains with his LLM of choice, Claude Opus. He showed me a big writing project that he'd just finished, in which he had spent easily 45+ minutes crafting the prompt, refining it until he had a 7500-word narrative that could serve as a starting point for rewriting, editing, and adjustment. (In comparison, this blog post is about half that size.) And that draft was fantastic. I've read it and it's glorious.

On a good day, Gene can write 1,000 words per day. His estimate is that Claude did for him in 90 minutes what would normally have taken him ten days. It solves the "blank-page problem" and gets him to the 20-yard line, where the fun begins.

He estimates using an LLM as a writing tool gets him there 2-3x faster now, helping him meet his personal requirements and quality bar. 

Gene could not be happier, at least for himself, because in addition to being faster, he also feels working this way is more fun. All work and no play makes Jack a dull boy, right? He's a happy dude.

But he is terrified for his teenage kids.

## Invasion of the Body Snatchers (1956)

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/invasion-of-the-body-snatchers.png" style={{maxWidth: '200px'}} alt="Invasion of the Body Snatchers" />

*Anecdote: I watched the pod scene from the original black and white 50s version of this movie when I was about 8, and wow, that was traumatizingly scary. My wife has also been watching horror movies since she was about 4 (!) and we share a deep love of horror, probably because we're all messed up from childhood.*

We've just seen the same plot play out for the legal profession and writing/editing jobs, where LLMs are threatening to out-people the people. Let's watch the same movie again in some genres closer to home.

Just a few days ago our illustrious Head of AI, Rishabh Mehrotra, was showing me a classifier and multi-class prediction model that he had trained and deployed in a single day with ChatGPT. He said it would have been a 6-week University senior-level intern project a year ago. This is affecting data science too.

An old friend, great programmer and mathematician, who left AI for quantum computing for a few years, is back to programming. He confided – somewhat excitedly – that even though he does a lot of programming, he doesn't consider himself a programmer anymore.

He said he's more of a reviewer, or coach, or nanny, something like that. He makes ChatGPT do all the work and he just crafts prompts and reviews the output.

That resonated with me, since I, too, have been replaced by a bubble-bath plant pod human who pretends to be a programmer, but is in fact outsourcing almost all of it.

Naturally, when I say "make ChatGPT do all the work", there is plenty of coding we still do by hand. What I mean is that chat-first is the default, and writing by hand (with completions, naturally!) is our fallback plan. My quantum friend and I are both finding much less need for that fallback recently.

Since then I've found several other super amazing colleagues who have also adopted this coding strategy to accelerate themselves. And frankly it has been a bit of a relief to hear confirmation coming from so many great people that chat-first programming is indeed a New Thing.

## The Thing (1982)

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/the-thing.png" alt="The Thing" style={{maxWidth: '200px'}} />

Is it really new? Clearly this "New Thing" has already been around in other domains, since even the original ChatGPT was able to replace a lot of human labor.

But for coding, let's be serious here, chat coding has sucked. It would often be more effort to coax the LLM into a working solution than to write it yourself.

With the previous model generations, if you feed in an 800-line source code file and ask for substantial changes, even GPT4-Turbo (which many of you are using right now) will often run amok: Well-argued hallucinations, code that fails to parse, snarky "code left as an exercise" empty functions, designs leading you in circles going nowhere, unexpected refactorings, missing code, and all manner of other frustration.

You've probably tried it yourself. You know what I mean.

So chat programming has been sort of a bust. Nowadays most people equate AI coding assistants with code autocompletions. They think of chat as something you use when you're just starting out, maybe as a faster docs search. 

In fact, there is a widespread perception that chat is for junior developers, and becomes less useful as you gain experience.

And truth be told, this wasn't entirely inaccurate prior to mid-May. The models weren't quite there yet.

But for the past six weeks, things have been very, very different, and YOU my friend are missing out. That perception that chat is for juniors is now a flat-out misconception, one that I pray is stone dead in your heart by the end of this post.

## Chopping Mall (1986)

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/chopping-mall.png" alt="Choping Mall" style={{maxWidth: '200px'}} />


Chat-based programming, which I will preemptively label **Ch**at **O**riented **P**rogramming (CHOP) or just "chop", because I suspect I'll be to be saying it a lot, is a brand-spanking new phenomenon. Like, seriously, just over a month old. I first noticed it when GPT-4o came out, which was mid-May. 

You remember that big manufactured drama, right, about the new OpenAI "4o" GPT model supposedly having Scarlett Johansson's voice? That's the one. 

That model changed everything about programming overnight.

When GPT-4o dropped, it could suddenly edit 1000-line source files–a figure that encompasses 95+% of the source files in most repos worldwide–with tremendous precision and faithfulness to the original, leaving the untouched parts of the file 99.9% diff-perfect. Every once in a very rare while I see it drop a space character, or slightly mis-indent a line. But that's it.

From what I've seen, Google's Gemini and Anthropic's Claude 3 Opus have also cleared this hurdle. Which makes multi-model prompting a good bulwark against hallucinations, and a great way to select the best candidate for a design. Just feed your query to all of them and make ‘em fight it out. It's a common CHOP technique.

Briefly, CHOP is coding via iterative prompt refinement. Everyone's attempts to get it to do anything complex used to peter out after 4 to 5 iterations, and the models couldn't make progress. But now your iterations usually converge, which means you're reviewing and ultimately approving more and more LLM code, and writing less and less yourself.

So programming has leveled up into a problem of explaining your situation to the LLM – that is, slinging context, since you'll want to include a lot of information from different sources – and then merging the output back into your code base.

We'd better get a tool for this. Chop chop!

## Upgrade (2018)

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/upgrade.png" alt="Upgrade" style={{maxWidth: '200px'}} />

The big model upgrade was life-changing for people who have already been coding in raw ChatGPT, which is still the world's most-used and most popular AI coding assistant. ChatGPT coders have been using chop style for a year or more, but it has been only for the bravest, most patient, and dumbest of early adopters. Whereas now it's ready for everyone!

Of course, raw chat involves a lot of manual assembly of context in and shoveling responses out, and it can get tedious, so many programmers use coding assistants instead. (I mean, I guess business is good if you are the CTRL, C, or V keys on a keyboard. Or ⌘ if you are into that sort of thing.)

All AI coding assistants benefit from this upgrade, too. It has certainly been huge for our coding assistant Cody, which in my opinion has the best chat due to our automated context assembly engine, which saves you from having to explain your code base every time. Plus Cody Pro lets you use both GPT-4o and Claude (and others), so you can spot-check all your work with another LLM.

The model upgrade is arguably even more effective with our inline edits feature, which handles dropping the response directly into your code. No more shoveling code out of the chat window. Cody just changes your code in place, undoably and retryably. The models are getting smarter, but the integration with your workflow is getting tighter as well.

What's happening is a big deal. Programming this way is arguably on its way to being an order of magnitude speedup from completions-based programming. A 10x improvement might sound like an exaggeration. But we just saw examples from legal practice, publishing, and data science in the same ballpark, with 5-30x speedups for certain kinds of tasks, and estimates of at least 2-3x overall boost to productivity.

You can quibble over the numbers, but it's clear that programmers using CHOP with these new models are getting a turbo boost.

Why aren't you upgraded yet?

## The Mangler (1995)

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/the-mangler.png" alt="The Mangler" style={{maxWidth: '200px'}} />

*Trivia: My brother told me that movie was so scary that he had to leave the theater. Never saw it myself, but the short story was fun.*

We're going to do story #5 now, the very last story, and it's mine, and it's about programming, and the plot is different from the others. 

This is where we learn the hard way why chat programming is for senior devs. Please keep your hands and limbs inside the carriage during the ride.

The other day GPT-4o shocked me with one of its coding proposals, while I was chopping away with it at a project. It was such a shock that I laughed for minutes, practically unhinged. I am not often shocked, least of all by looking at the code for a working program.

I had presented a small design problem to GPT, asking for an evaluation of my options. It's great for that. Chat-oriented programming (CHOP) isn't just about coding. There are a lot of design discussions too. You do everything, even writing sometimes, with the LLM as a pair partner.

For some reason, this time ChatGPT launched full-bore into redesigning an entire subsystem of the framework I was stuck in, which had an issue I was trying to work around. I'm sure you have seen this wack behavior from LLMs before. The difference is, now they are very good at rewriting things, and sometimes they'll swing for the fences, consequences schmonsequences.

GPT-4o breezed quickly past most of the sane options before plowing straight into "let's rewrite it all" scorched-earth mode, clearly not having read [Joel Spolsky](https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/). It spewed out an unusually long answer, hundreds of lines of code and instructions, presenting thorough and persuasive reasoning supporting this approach.

And the rewrite would have worked! It was a very direct solution to my problem. So it wasn't "wrong" per se. There are rarely things in design that are truly wrong – like, wrong wrong – as there are exceptions to most rules.

There was only one teeny tiny issue with it, which is that it would have killed someone. 

Not on my project, hopefully! But if the model is currently spitting out similar suggestions to people working on software that controls giant saws in machine shops, someone's gonna die.

## Cabin in the Woods (2011)

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/cabin-in-the-woods.png" alt="Cabin in the Woods" style={{maxWidth: '200px'}} />

GPT's redesign was awful – but not when you looked directly at it. Up close it was downright cozy.

You had to pull back and look at the design in the broader context of its interactions with other subsystems, but also support, maintenance, upgrades, add-ons, and a bunch of other dimensions that are critically important to software design and engineering. With that wider lens, it was an Unbreakable-level train wreck waiting to happen.

But it was wearing a superb disguise. A less experienced dev would surely have fallen for it. I could feel the power and the attraction of the approach it was espousing, the force of the arguments backing it. The whole thing was appealingly packaged, technically correct, and laid out for you to just take it and run! (My pal Chris Smith says the word I'm looking for is "specious". So yeah, that.)

And it just hit me all at once how hilariously inappropriate and potentially dangerous this answer was. It was so impressive and so spooky. I laughed and laughed, like a little kid watching bubble bath plant monsters replacing all the people.

My senior colleagues have recently recounted similar chat scenarios in which a more junior dev would have been completely taken in, potentially losing days to weeks of work going the wrong direction.

Or worse.

Chat, it seems, is safer for senior programmers than it is for junior ones. And a lot of companies are going to interpret "safer" to mean "better."

Buckle up. Topsy-turvy times ahead.

## The Stand (2020)

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/the-stand.png" alt="The Stand" style={{maxWidth: '200px'}} />

A lot of companies ask me, how can we tell which parts were written by the AI and which parts by the programmer? Well, if chat-oriented programming becomes the dominant modality for programmers, then LLMs will be writing the vast majority of all source code worldwide. That's a gargantuan shift, and it might even shake up the traditional software engineering roles.

We've seen how this shift affected a law firm, a publisher, and engineering's sibling discipline of data science. Stock in junior contributors is down, and there is concern there could be a market crash.

That presents a very serious problem for new people in those fields. What do you do? How do you learn the ropes, not to mention find gainful employment? What are the ropes now? And what do the companies do when their senior people retire?

They could wind up like the COBOL world which is in a worldwide crunch, because there are no junior COBOL devs to replace the ones who retired. Ironically, these huge legacy companies will likely be rooting hardest for the LLMs to write all their code.

Things are changing fast. I'm an optimist, and I generally think, or at least hope, that as companies become more productive in the coming months and years, they simply get correspondingly more ambitious.

Everyone will need to get a lot more serious about testing and reviewing code. Senior devs could become full-time reviewers and junior devs shepherd the LLMs, maybe?

It doesn't necessarily have to end with a post-apocalyptic wasteland for recent CS grads.

## 28 Days Later (2002)

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/28-days-later.png" alt="28 Days Later" style={{maxWidth: '200px'}} />

I wrote this post a week ago and have been thinking hard about whether I believe the premise, which is that within a few years, the norm for source code will be that it is written and modified by LLMs via prompting. For all practical purposes, all source code will be written this way, with exceptions becoming ever rarer.

Not only do I believe it, I could even see it happening in 12-18 months at the current rate of LLM progress. I think the change will have a ton of fallout, only some of it foreseeable. And one casualty might well be junior devs, in the sense that they become less marketable and it could cause various kinds of crunches across the industry. 

We've already seen the big companies doing eng layoffs to make room for AI practitioners. Small companies may be faced with their own version of this decision: Why hire a junior developer to write mediocre code, when the LLM will do that for you ten times faster?

So yeah. I'm worried.

Briefly, what do I mean by "senior" here? Really just two things:

1. You know what you want before the AI writes it. You already have a vision for how you would write this by hand, or have it narrowed to a few reasonable options.
2. You can detect when it is giving you bad guidance.

If you know exactly where you are driving, and you know what bad roads look like, then turbochargers can be safe and will get you there faster. If you're not sure where you're driving, activating the turbochargers will get you somewhere fast.

## Leave the World Behind (2023)

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/leave-the-world-behind.png" alt="Leave the World Behind" style={{maxWidth: '200px'}} />

So. You've made it this far. Congrats!. What's going to happen? I don't know. Maybe we'll get really lucky. I mean, I'd be very happy to be wrong here.

But change is coming. There will be social and cultural upheaval in tech, just as is happening in the legal profession. It's already begun. The models are getting smarter and smarter with each passing month, which means they are going to be eating more and more jobs until they eat the world.

All I can tell you is this: Get there early. One time Googlers were complaining at TGIF that the parking garage was filling up by midmorning, and Larry Page jokingly suggested, "Maybe you should come earlier." At that moment he reeked of billionaire. But if you really wanted to park in the garage, you took his advice.

If you want to survive the change, you'd better show up prepared and stay on top of it.

The rest of this post is just some direct, simple, and timeless advice for junior and aspiring software engineers. I hope it can help get you through this awkward period where our industry collectively figures out what exactly the hell is going to happen.

## Final Destination (2000)

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/final-destination.png" alt="Final Destination" style={{maxWidth: '200px'}} />

Get good, fast. That's what you need to do. Get ahead of the slackers while our industry turns upside down, and you might be the one to survive.

You are competing with students from Waterloo, who have 2+ years of actual work experience by the time they graduate with a bachelor's in CS. You're also competing with the top 10% of all CS grads nationwide, who are, year after year, already effectively senior engineers, despite this being their first real job.

Here are some shotgun recommendations. Do with them as you see fit.

Gain experience anywhere and any way you can, before you even leave school. Get work experience, contribute to OSS, program on the side. Take your classes seriously. Learn more than is required for passing each class. Learn each subject thoroughly, and revisit them all as you go.

Don't over-index on programming language arcana. That's becoming a detail that machines handle for us. Focus on algorithms, data structures, software design and engineering, discrete math, operating systems, compilers, databases, networks. Focus on studying real systems. Find walkthroughs online and study them. And of course ML. Gobble up everything you can.

Understand how things are built. Make sure you know how every system in a computer works. Make sure you have an understanding of how every cloud service you depend on does its job. Read the docs, and then read the design docs. You won't have to write any of it by hand. But you need to develop a senior programmer's sensibilities around how these things fit together and interact, for good or ill.

Learn how to use frontier models to check other LLM models' work. Sign up for multiple services (e.g. Claude and ChatGPT) and send your important prompts to at least two big models. Have them evaluate each other's responses and study it all carefully. LLMs are better at reviewing and critiquing their own content than they are at producing it. So use a second LLM as your senior partner.

Another one of the key things that differentiates a senior developer from a junior one, in many contexts, is Operations experience. Read the[ O'Reilly/Google SRE book](https://www.oreilly.com/library/view/site-reliability-engineering/9781491929117/). Read it cover to cover. And find a good GitOps book, too; there seem to be quite a few to choose from. There may be no compression algorithm for experience, but fortunately a lot of that experience has been condensed and distilled. Go drink it up.

Lean hard on a coding assistant like Cody. Stay on the bleeding edge of features. A coding assistant is a powerful tool, like an IDE, and learning to master it will level you up as a programmer. CHOP involves a lot of manual context shoveling to craft your prompt. Cody does 90% of that shoveling for you, as well as copying the responses back into your code.

Most devs using chat still use raw ChatGPT for coding, even though it doesn't help you with context fetching or data shoveling. And it's great all by itself, though more manual work in prompt crafting. I have been using GPT directly in Emacs, with the excellent chatgpt-shell, because I'm still building Cody for Emacs so I can't use it yet. Raw GPT-4o is still great.

I used to tell people to master an IDE, and even better, also Emacs or Neovim. But I'm not sure anymore. That might become obsolete soon. Wait until the coding assistants can do it for you; it won't be long. Or even come help.

It doesn't matter what approach you take, as long as you start making heavy use of chat in programming. Because that, friendo, is how it works now. Like it or not. And you need to survive it. Good luck to you.

I will start a channel soon dedicated to showing the new way of programming, as I help build [Cody](https://sourcegraph.com/cody) using chop-style coding. I will use both ChatGPT directly and Cody, and they will help me build Cody. Stay tuned!

I'll also be giving a talk that touches on this and much more in August at the [Enterprise Technology Leadership Summit](https://itrevolution.com/product/enterprise-technology-leadership-summit-las-vegas-2024/) in Las Vegas. Hope to see you there.

P.S. Thanks to Chris Smith, Gene Kim, Dominic Cooney, and Anna Noak for their thorough reviews and great suggestions.