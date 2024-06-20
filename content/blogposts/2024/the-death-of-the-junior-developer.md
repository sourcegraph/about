---
title: "The Death of the Junior Developer"
authors:
  - name: Steve Yegge
    url: https://x.com/Steve_Yegge
publishDate: 2024-06-20T10:00-01:00
description: "LLMs are putting pressure on junior tech jobs. Learn how to stay ahead."
tags: [blog]
slug: 'the-death-of-the-junior-developer'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/death-of-the-junior-developer-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/death-of-the-junior-developer-hero.png
---

I have been chatting with a bunch of smart senior people lately. By cross-barfticulating these conversations I've picked up on an emerging new pattern, which is that 80% of you are way smarter than me. My goodness.

But also another pattern, which is that a lot of people picked a bad year to be a junior dev. A whole lot of people. It's frightening and I wouldn't want to be young today, just starting out in the industry.

Not just the computer industry. Any industry. It's a bad year to be a junior anything.

My wife and I are huge horror-movie buffs. So, to reflect the somber theme of today's deranged rant, I will use relevant horror movie titles to introduce our sections.

First, let's talk about what's happening to junior developers.

## The Purge (2013)

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/the-purge.png" alt="The Purge" style={{maxWidth: '200px'}} />


Let's start with our first story of the day, which is about a law firm and has nothing to do with programming. But it is indeed centrally relevant to the crisis happening right now. My buddy Gene Kim gave me permission to share this story about his friend who runs a 50-person law firm.

In short, all hell is breaking loose at said law firm because of ChatGPT. For starters, their clients are using it, and now everyone thinks they're a lawyer, which leads to all sorts of interesting new dialogs with clients who are spewing literal hallucinations. 

But more to the point, they're realizing that the entire structure of their firm, which has been stable for a very long time, is now completely wrong, and it's wrecking them. Their whole comp structure, pensions, succession planning, everything is going through an existential crisis due to a chatbot.

The problem, you see, is that they don't need junior associates anymore. 

Their needs for juniors have plummeted an order of magnitude because ChatGPT does such a good job of handling tasks normally fielded by junior associate lawyers. They only need senior associates to (a) describe the tasks; i.e., create the prompts, and (b) review the resulting work for factual accuracy. 

All the actual junior work is done by the LLM. And it's incredibly fast. And incredibly good… provided you have someone senior to catch it, whenever it writes thoroughly convincing things that turn out to be flat-out lies.

Catching the LLM in a hallucination is very similar to catching a junior associate in a mistake – both of those require a senior associate to monitor them, and give them guidance on how to course-correct. 

Well, if you have two options, and one of those options is fast and tireless and essentially free…

You picked a bad year to be a junior associate lawyer, that's for damn sure.

## The Shining (1980)

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/the-shining.png" alt="The Shining" style={{maxWidth: '200px'}} />


Gene shared the law-firm story to illustrate how widespread this problem is. He claims the same chaos, which is undoubtedly unfolding across legal firms everywhere, is also hitting all writing and editorial jobs. Demand for junior writers and editors is evaporating.

Everyone now just needs senior writers who are also good prompt engineers: An arrangement that meets all of their needs faster and cheaper than hiring junior humans.

Gene, as an accomplished and senior author, is delighted with his productivity gains with ChatGPT. He showed me a big writing project that he'd just finished, in which he had spent easily 45+ minutes crafting the prompt, refining it until the 7500-word narrative finally met all his requirements and his personal quality bar. I've read it and it's actually amazing.

He told me it would have taken him a week to write it by hand, and having read it, I'd have guessed 2-3 weeks. With ChatGPT he did it in a single day. It's astonishing when you see it. 

Gene could not be happier, at least for himself, because in addition to being faster, he also feels working this way is more fun. All work and no play makes Jack a dull boy, right? He is producing the same output, but with so much less manual labor. He's a happy dude.

But he is terrified for his teenage kids.

## Invasion of the Body Snatchers (1956)

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/invasion-of-the-body-snatchers.png" style={{maxWidth: '200px'}} alt="Invasion of the Body Snatchers" />


*Personal anecdote: I watched the pod scene from the original black and white 50s version of this movie when I was about 8, and wow, that was traumatizingly scary. My wife has also been watching horror movies since she was about 4 (!) and we share a deep love of horror, probably because we're all messed up from childhood.*

Our next programming story, number three of five if you're counting, is also not about programming, but about data science. This phenomenon is happening everywhere.

The story: I was chatting last week with our Head of AI, the amazing [Rishabh Mehrotra](https://x.com/erishabh), about the problem of dynamically routing [Cody](https://sourcegraph.com/cody) queries to different LLM backends based on their query characteristics. So we needed to train a classifier and a multi-class prediction model and do a bunch of evals.

He told me that a year ago, this would have been a six-week intern project. As in, a University senior-level data science student, working 6 weeks in a full-time paid internship, just to write this application. It involved a huge amount of tedious but precise work.

Rishabh then demoed the system we needed to me, then and there. He had done the whole thing in a single day with chat-based programming. The very day before, in fact. We had a working classifier and prediction model in prod.

Exciting, right?

Well sure, except… What exactly are interns supposed to do now? Their jobs have been snatched by AI. I'd recommend staying awake for the rest of this post. Or maybe forever.

## The Crazies (2010)

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/the-crazies.png" alt="The Crazies" style={{maxWidth: '200px'}} />


On to our fourth story, which is *finally* about programming… or at least, about how it doesn't seem to exist anymore.

Last week, I was hanging out with a very senior NLP-expert friend; dude is a brilliant programmer and mathematician who threw it all away to go work in quantum computing for five years, which is enough time to build like a quarter of one quantum computer. Given that he has about fifteen years to go before it's finished, he is back to doing a lot of coding again these days

He told me something that I think most professional programmers would be uncomfortable sharing: He says he's not exactly a programmer anymore. He thinks of himself as more of a code reviewer, an LLM nanny, a coding coach, something like that. He makes ChatGPT do all the work and he just crafts prompts and reviews the output.

That resonated with me, since that's how I've been programming for about the past month or so. But I had been wondering if I was being an idiot. Or crazy. Or maybe I was actually slower overall this way even though it felt faster. It's hard to tell when you're an addict; I don't want to stop programming this way. So I wondered if people might ridicule the kind of programmer I've turned into. I was glad to hear my friend has stumbled on it as well.

Since then I've discovered that several other super amazing senior colleagues have also adopted this coding strategy to accelerate themselves. It has honestly been a bit of a relief to hear confirmation coming from so many respectable people that chat-first programming is indeed a New Thing.

## The Thing (1982)

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/the-thing.png" alt="The Thing" style={{maxWidth: '200px'}} />


Is it really new? Clearly this "New Thing" has already been around in other domains, since even the original ChatGPT was able to replace a lot of human labor. 

But as far as coding goes, chat-based programming has been tedious and hit-or-miss. Most of the time, even up through mid-May (yes, six weeks ago), you would usually have to give up and finish coding it by hand. 

Even with GPT4-Turbo, which many of you may be using right now, chat-based programming often yields spectacularly unreliable results:  Well-argued hallucinations, code that fails to parse, designs leading you in circles going nowhere, unexpected refactorings, and all manner of other frustration.

You've probably tried it yourself. You know what I mean.

So chat programming has been sort of a bust, and nowadays most people equate AI coding assistants with code autocompletions. They think of chat as being something that only junior devs could find useful. It can provide junior devs with a faster version of searching docs or code, maybe, or act as a more experienced voice for vetting their ideas. 

People tend to think of chat as becoming more effective the more junior you are, and less effective as you gain experience as an engineer.

And truth be told, this was pretty accurate until mid-May. The models weren't quite there yet.

But for the past 5 to 6 weeks, things have been very, very different my friend, and YOU are missing out. You have no idea.

## Chopping Mall (1986)

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/chopping-mall.png" alt="Choping Mall" style={{maxWidth: '200px'}} />


Chat-based programming, which I'm going to preemptively label **Ch**at **O**riented **P**rogramming (CHOP) because I suspect I'll be to be saying it a lot, is a brand-spanking new phenomenon. Like, seriously, just over a month old. I first noticed it when GPT-4o came out, which was mid-May. 

Remember the big manufactured drama about the new OpenAI "4o" GPT model having Scarlett Johansson's voice? That's the one. That model changed everything about programming overnight.

With the model generations up through GPT4-Turbo and Claude 2.x, if you fed the model an 800-line source code file and asked it to make specific laser-like targeted fixes at different points in the file, the model would passive-aggressively remove comments it didn't like, randomly rename variables or refactor or even drop code, and generally just make a friggin' mess. 

But from the dawn of time through May of this year, that's all you had. Your only options were pretty mediocre. LLMs could write code reasonably well, but they were terrible at rewriting code, which is the bulk of what you do as a programmer day-to-day.

No wonder CHOP got a bad rap.

## Upgrade (2018)

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/upgrade.png" alt="Upgrade" style={{maxWidth: '200px'}} />


When the GPT-4o model dropped, it could suddenly edit 1000-line source files (a figure that encompasses 95+% of the source files in most repos worldwide) with tremendous precision and faithfulness to the original, leaving the untouched parts of the file 99.9% diff-perfect. Every once in a very rare while I see it drop a space character, or slightly mis-indent a line. But that's it. It's solid.

From what I've seen, Google's Gemini and Anthropic's Claude 3 Opus have also cleared this hurdle, making multi-model prompting a good defense against hallucinations, and a great way to select the best candidate for a design.

This most recent generation of frontier model upgrades was enormous for Cody on account of our inline edits feature. You can now select gigantic regions of your code, ask for an inline rewrite that spans many locations, and expect to get good, reliable results. Cody just changes your code in place.

The GPT-4o update was also huge for raw ChatGPT-chopping in the browser, and for other chat-capable coding assistants no doubt, all buoyed by this sudden leap forward in LLM coding abilities.

What's happening is a big deal. Programming this way is arguably an order of magnitude speedup once you get the hang of it. A 10x improvement might sound like an exaggeration. But we just saw examples from legal practice, publishing, and data science that involved speedups of 5x to 20x or higher.

You can quibble over the numbers, but it's clear that programmers using CHOP are getting a turbo boost.

Why aren't you upgraded yet?

## Child's Play (1988)

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/childs-play.png" alt="Child's Play" style={{maxWidth: '200px'}} />

Why isn't CHOP, this new chat-first, chat-centered programming technique taking off faster? 

Well, it's early days, for starters. It's only been a month. Chat coding sucked before that.

Plus there's the problem that most organizations have banned ChatGPT and its ilk (helloooo ilky Google, I just love calling you "ilk"). And given that developers do the bulk of their programming at work, many just haven't had a chance to figure this new technique out yet.

And of course there's the widespread misconception that chat is primarily for junior developers, with all the negative connotations you might associate with that idea. Basically, "It's training wheels, not intended for serious work, and eventually you will graduate from it."

I pray that particular misconception is stone dead in your heart by the end of this post.

But I think there's yet another cause afoot, which is that people's egos are getting in the way of adoption. I think we're still in that phase where you can still sound cool by dissing coding assistants, especially if you can work in some subtle "looks good on you though" snark.

The same phase happened when IDEs came out (hell, it even happened when compilers came out), and for a few years there were dwindling ranks of cranks who clung to their vim/emacs sessions like life preservers. 

But come on. Today in 2024, if you try to be the cool hipster by saying you conduct all your professional software development without ever using an IDE, people will just think you're a dumbass.

So this time around, can we just skip ahead to the inevitable stage when not using coding assistants makes you a dumbass?

## The Mangler (1995)

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/the-mangler.png" alt="The Mangler" style={{maxWidth: '200px'}} />


*Trivia: My brother told me that movie was so scary that he had to leave the theater. Never saw it myself, but the short story was fun.*

We're going to do story #5 now, the very last story, and it's mine, and it's about programming, and the plot is different from the others. 

This is where we learn the hard way why chat programming is for senior devs. Please keep your hands and limbs inside the railing during the ride.

The other day GPT-4o shocked me with one of its coding proposals, while I was chopping away with it at a project. It was such a shock that I laughed for minutes, practically unhinged. I am not often shocked.

I had presented a small design problem to GPT, asking for an evaluation of my options. It's really good at that. Chat-oriented programming (CHOP) isn't just about coding. There are a lot of design discussions too. You do everything, even email, with the LLM as a pair partner.

For some reason, this time it went full-bore into redesigning an entire subsystem of the framework I was stuck in, a subsystem that had been giving me trouble. I'm sure you have seen this wack behavior from LLMs before. The difference is, now they are very good at it.

GPT-4o breezed quickly past the sane options before launching straight into "let's rewrite it all" scorched-earth mode. It spewed out hundreds of lines of code and instructions, presenting thorough and persuasive reasoning supporting this approach. It clearly hasn't read that [Joel Spolsky essay](https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/).

And the rewrite would have worked! It was a very direct solution to my problem. So it wasn't "wrong" per se. There are rarely things in design that are truly wrong, as there are exceptions to most rules.

There was only one teeny tiny issue with it, which is that it would have killed someone. 

Not on my project, hopefully! But if the model is currently spitting out similar suggestions to people working on software that controls giant saws in machine shops, someone's gonna die.

## Cabin in the Woods (2011)

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/cabin-in-the-woods.png" alt="Cabin in the Woods" style={{maxWidth: '200px'}} />


GPT's redesign was *awful* – but not when you looked directly at it. Up close it was downright cozy.

You had to pull back and look at the design in the broader context of support, maintenance, upgrades, add-ons, and a bunch of other dimensions that are critically important to software design and engineering. With that wider lens, it was a bad train wreck waiting to happen.

But it was wearing a superb disguise. A less experienced dev would surely have fallen for it. I could feel the power and the attraction of the approach it was espousing, the force of the arguments backing it. The whole thing was appealingly packaged, technically correct, and laid out for you to just take it and run.

And it just hit me all at once how hilariously inappropriate and potentially dangerous this answer was. It was so impressive and so spooky. I laughed and laughed, like a little kid watching bubble bath plant monsters replacing all the people.

My senior colleagues have recently recounted similar chat scenarios in which a more junior dev would have been completely taken in, potentially losing days to weeks of work going the wrong direction.

Or worse.

Chat, it seems, is *safer* for senior programmers than it is for junior ones. And a lot of companies are going to interpret "safer" to mean "better."

## 28 Days Later (2002)

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/28-days-later.png" alt="28 Days Later" style={{maxWidth: '200px'}} />


A lot of companies ask me, how can we tell which parts were written by the AI and which parts by the programmer? Well, if chat-oriented programming becomes the dominant modality for programmers, then LLMs will be writing the vast majority of all source code worldwide. That's an economic shift, one dramatic enough to change all the roles in software engineering.

We've seen how this shift affected a law firm, a publisher, and engineering's sibling discipline of data science. It pushed companies away from junior contributors.

That presents a very serious problem for new people in those fields. What do you do? How do you learn the ropes, not to mention find gainful employment? And what do the companies do when their senior people retire? The economics here are absolutely perverse.

Things are changing fast. I'm an optimist, and I generally think, or at least hope, that as companies become more productive in the coming months, they simply get correspondingly more ambitious. Senior devs could become full-time reviewers and junior devs shepherd the LLMs, maybe. It doesn't necessarily have to end with a post-apocalyptic wasteland for recent CS grads.

So I don't know. Maybe we'll get really lucky. I mean, I'd be very happy to be wrong here.

But change **is** coming. There will be social and cultural upheaval in tech, just as is happening in the legal profession. It's already begun. The models are getting smarter and smarter with each passing month, which means they are going to be eating more and more jobs until they eat the world. 

All I can tell you is this: Get there early. One time Googlers were complaining at TGIF that the parking garage was filling up, and Larry Page jokingly suggested, "Maybe you should come earlier." At that moment he reeked of billionaire. But if you really wanted to park in the garage, you took his advice.

If you want to survive the change, you'd better show up prepared and stay on top of it.

The rest of this post is just some direct, simple, and timeless advice for junior and aspiring software engineers. I hope it can help get you through this awkward period where our industry collectively figures out what exactly the hell is going to happen.

## Final Destination (2000)

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/the-death-of-the-junior-developer/final-destination.png" alt="Final Destination" style={{maxWidth: '200px'}} />


Get good, fast. That's what you need to do. Get ahead of the slackers while our industry turns upside down, and you might be the one to survive.

You are competing with students from Waterloo, who have 2+ years of actual work experience by the time they graduate with a bachelor's in CS. You're also competing with the top 10% of all CS grads nationwide, who are, year after year, already effectively senior engineers, despite this being their first real job.

Here are some shotgun recommendations. Do with them as you see fit.

Be senior before you even leave school. Get work experience. Take your classes seriously. Learn more than is required for passing each class. Learn each subject thoroughly, and revisit them all as you go.

Don't over-index on programming language arcana. That's becoming a detail that machines handle for us. Focus on algorithms, data structures, software design and engineering, discrete math, operating systems, compilers, databases, networks. And ML. Lots of ML.

Understand how things are built. Make sure you know how every system in a computer works. Make sure you have an understanding of how every cloud service you depend on does its job. Read the docs, and then read the design docs. You won't have to write any of it by hand. But you need to develop a senior programmer's sensibilities around how these things fit together and interact, for good or ill.

Learn how to use frontier models to check each other's work. Sign up for multiple services (e.g. Claude 3 and ChatGPT) and send your important prompts to at least two big models. Have them evaluate each other's responses and study it all carefully. LLMs are better at reviewing and critiquing their own content than they are at producing it. So use a second LLM as your senior partner.

One of the key things that differentiates a senior developer from a junior one, in many contexts, is Operations experience. Read the O'Reilly/Google SRE book. Read it cover to cover. And the GitOps book, too. There may be no compression algorithm for experience, but fortunately a lot of that experience has been condensed and distilled. Go drink it up.

Lean hard on a coding assistant like Cody. Stay on the bleeding edge of features with the nightly build. It is a tool, like an IDE, and learning to master it will level you up as a programmer. CHOP involves a lot of manual context shoveling to craft your prompt. Cody does 90% of that shoveling for you, as well as copying the responses back into your code.

Most devs still use raw ChatGPT for coding, even though it doesn't help you with context fetching or data shoveling. And it's great all by itself, though more manual work in prompt crafting. I have been using GPT directly in Emacs lately, with the excellent chatgpt-shell, because I'm still building Cody for Emacs so I can't use it yet. Raw GPT-4o is still great.

It doesn't matter what approach you take, as long as you start making heavy use of chat in programming. Because that, friendo, is how it works now. Like it or not. And you need to survive it. Good luck to you.

I will start a channel soon dedicated to showing the new way of programming, as I help build Cody using chop-style coding. I will use both ChatGPT directly and [Cody](https://sourcegraph.com/cody), and they will help me build Cody. Stay tuned.