---
title: "RAG to Riches"
authors:
  - name: Steve Yegge
    url: https://handbook.sourcegraph.com/team/#steve-yegge
publishDate: 2023-12-15T10:00-07:00
description: 'Description goes here'
tags: [blog]
slug: 'RAG-to-riches'
published: true
heroImage: 'https://storage.googleapis.com/sourcegraph-assets/blog/hacktoberfest-2023-blog-og.jpg'
socialImage: 'https://storage.googleapis.com/sourcegraph-assets/blog/hacktoberfest-2023-blog-og.jpg'
---

I can’t believe how much has transpired in the AI world since my [last post](https://about.sourcegraph.com/blog/all-you-need-is-cody), a post in which I strategically deployed a large battalion of F-words in a hugely successful campaign to get someone else to write our marketing posts. I am happy to report that they immediately dropped everything they were doing and ran and hired an entire marketing team, who now come by almost every day to thank me for not posting, and then give me a suspicious look on the way out, as if I might run a sudden foul billboard ad campaign.

So instead of marketing today, we are doing news updates, in which I will be regaling you with tales of marvelous cherry-picked new developments in AI. Just tales of them, not the developments themselves, because that’s way more fun.

Near the end, we will be awarding a special limited-edition coveted prize to a certain select group of individuals, and if you’re in this group, you certainly earned it. Stay tuned.

_News Story 1:  AI Grows Up_

If you have spent more than roughly 257 nanoseconds online in the past 3 months, you have noticed that AI competition has become heated, from new companies saying they’re going to topple big companies with AI, to big companies saying they’ve been doing AI secretly all along and just weren’t telling anyone, to Nvidia buying all their employees solid gold full-size Wall Street bull statues as a little holiday thank-you gift.

And you will have noticed that around a bajillion startups have emerged with revealing and creative names, formed by taking whatever word they like best and then creatively tacking “AI” on the end, which adds a dash of daring with the “AI” part while cleverly capturing their clear differentiators with whatever word “AI” is tacked onto, such as “Irresponsible.”

Billionaires have begun to take notice, particularly those in the Vying for Most Annoying club. Musk/X and Zuck/Meta, both sounding like entries in an Old Spice deodorant line for tech incels, have each created their own LLMs to compete with the likes of GPT-4 and Claude. 

Although Elon’s proprietary LLM is still held up in making sure it helpfully tells advertisers to go have marital relations with themselves, Zuck’s LLaMA model series is open, free, powerful, and readily available, and in what might be a first for Big Tech, Zuck chose not to execute the employee who leaked it.

In spite of the fact that the economy is famously terrible all over the world, and everyone is claiming not to have any money, investors have still managed to raise roughly 2.3 quadrillion dollars to dump into AI startups. So now at dinner parties you’ll find yourself sitting next to an earnest-looking founder in ripped jeans telling you about their new startup, catnip.ai, which leverages the incredible power of fine-tuned large language models to keep your cat entertained while you’re at work, who just raised $470 million seed capital.

It’s more than just a fad; we’re in the craze phase, where putting "AI"  in your company’s name gets VCs to just blatantly throw money your way. Anyone at all can change their company’s name from GoingBankrupt to GoingBankrupt.AI and grab a cool $100M of extra funding from investors with the common sense of lasagna. I am personally appalled that so many companies are blatantly getting away with this obviously manipulative tactic.

So anyway, here at Sourcegraph AI, we’ve been paying close attention to the space, a space dominated by OpenAI, a company famous for being the leading provider of closed AI. The big news is that with competition from Anthropic and others starting to get serious, OpenAI recently decided to get serious right back, and in a strategic move aimed at inspiring confidence in their technical dominance, fired their CEO.

This resulted in approximately 23,342,971 news articles about how you should hide in your basement because they’d created Skynet, until a few days later when Sam Altman came back from his golfing trip, and it was discovered that the board had accidentally fired a deepfake of him, which the company claims is a perfectly natural and ordinary mistake to make if you are the co-inventor of LLMs and the chief scientist of the biggest AI company in the world.

Rounding out the saga, Real Sam pointed back and said, famously, “No, YOU are the one who is fired!” in the classic Uno Reverse strategy featured so often in children’s comic books, old-timey comedy skits, and Microsoft-backed Fortune 500 companies.

Ah, me. The technology may change, but drama is evergreen.

_News Story 2 – Bear Spray Engineers_

You have no doubt noticed that GPT has spawned an ecosystem of hundreds of makeshift AI assistants that swarm you like gnats. You cannot drive to work without hitting a few of them on your windshield. They helpfully buzz at you to try them, try them! Bzzzt! They all claim to automate every kind of daily drudgery in your life, from summarizing your Slack threads bzzzt, to summarizing your emails bzzzt, to summarizing your newsfeed bzzzt, to summarizing and discarding communications from your cousin Roman bzzzt. (“Summary: Wants to go bowling.”)

But one AI-assistant category that seems to have made real, tangible progress in spamming people is coding assistants. Developers everywhere will readily agree that coding assistants are hyped to the point where your IDE will helpfully prompt you to install one roughly every 37 seconds, and you would gladly pay the subscription fee just so it’ll stop asking. Bzzzt!

And yet strangely enough, only about 1-2% of all GitHub monthly active users pay for Copilot, the controversial coding assistant that declared it was more popular than Jesus, no sorry that was the Beatles, but whatever, we all know it gets a lot of hype. When you open VSCode, they have arranged the UI in such a way that it appears to be judging you with a frowny face if you are not using Copilot. But only 1-2% are using it. What are the other 98-99% of you doing?

Well of course you all know the answer, which is that you’re looking for a job. Almost every company is writhing in an AI-induced Innovator’s Dilemma, which made everyone’s jobs harder, and now there are tons of folks who are gunning to move. But the market is flooded with talent. And also for various reasons, probably related to Security and ML, every company out there is only hiring Security engineers and ML engineers. So almost nobody else _can_ move.

You know how I know all this? Because I keep having these sales conversations that go like this.

Me: Greetings, fellow non-sales person! I thought I’d start a friendly conversation totally unrelated to anyone selling anything, and then gently plot twist into the subject of my product Cody in a completely natural and non-sales-y way. Cody, you ask? Why, I use it every day and find it incredibly valuable for my work as an engineer who is not even remotely in sales. So, can I interest your team in a demo?

Them: Can I have a job?

It never fails. I am not making this up. It has happened, like, at least six or eight times in so many months. When people know you’re (a) hiring and (b) having fun, or even (c) not stealing printer supplies every week to make up for that promotion they gave to Carl, then they want in! 

So of course companies are picking up on this, and being choosy about who they hire. And now it’s hard for anyone to move.

Unless, of course, you are an ML engineer. 

For those not in the know, an ML engineer is like a regular engineer except they are driving a Ferrari. They are adept with modern machine learning infrastructure, designs, tools, practices, and deployments. If you are an ML engineer, then you have by this time already figured out that you need to carry bear spray around to fend off recruiters who appear out of nowhere and hurl heavy, dangerous wads of cash at you. What if one hit your head? I feel really bad for you if you are an ML engineer right now. Thinking about it gives me a sort of a queasy feeling in my stomach, kind of like envy, but of course totally not that.

It reminds me of when we were opening the first Google Korea engineering office in Seoul, back when we were young and naive. American companies often make the mistake of assuming everyone around the world embraces our valued cultural tradition of badmouthing our managers. In Korea, we found that in contrast to the West, they have a rich and vibrant hierarchical society that celebrates rank and status, and glorifies managers, which by the way is completely unrelated to our leadership team’s recent decision to hire only in Korea.

But way back then, Google didn’t know what to make of it all. Every qualified engineering leader candidate we interviewed in Seoul was more than happy to work for us, and confidently shared their preferences for the color and model of their company luxury car, the district in which they wished their company apartment to be located, and the wardrobe of their personal driver. Though this was evidently the norm in Seoul, Google wrestled with it for some time, because it felt like kind of a lot.

Meanwhile, you ML engineers reading this are saying, ha, ha! In Korea, they don’t even get a boat? Because ML engineers on the market get whateeeever they want. If you’re an ML engineer and you want a job, and you also want a boat, I imagine you just have to inform any of the shrubs in the landscaping outside your home, and a recruiter will spring out, drag you to the back of their car, and drive you directly to the marina to make you pick a boat and sign an offer. 

In fact you might have to fight off other recruiters as you are dragged to the car. I’ve heard that bear spray can be handy for this.

_News Story 3: AI Strategies Are Beginning to Emerge, and In Some Cases, Prolapse_

Everyone talks tough, but the fact is, most companies are in the very earliest stages of figuring out their AI strategy. Here at Sourcegraph AI we talk to just about every big brand-name fancy logo company you can think of, in every industry, and we’re having the same conversations over and over.

Companies everywhere in every industry have dutifully sorted themselves into several distinct profiles with respect to their AI strategy:

* The rarified few who turn their homework in ahead of time and do extra credit. I'm looking at you, CapOne.
* The ones whose homework is kind of on track, but who aren’t really sure how to bring it to the finish line. This is about 30% of all companies.
* The ones who, when we ask how their AI evaluation homework is going, pull a piece of paper out of their back pocket, unfold it, and see that it reads: “[do homework](https://www.youtube.com/watch?v=VMYqZKKdpuY&t=57s)”.

That last group is easily 50% of the Fortune 1000. I could name and shame, but we’d be here for a long time.

By “homework”, I of course mean figuring out your AI strategy. Because that is homework that every single company on earth needs to be doing right now. And yet curiously, many of you are handling AI planning with roughly the same amount of urgency that you would assign to cashing a refund check that you received in the mail for 17 cents. “Yeah,  yeah,” you say, “I’ll get round to it at some point.” Well if you don’t get to it, that might be your stock price pretty soon.

I can assure you that in your industry, whatever it is, there are at least one or two snotty straight-A students who are putting together five- and ten-year plans for their AI homework, and many are specifically well down the path of evaluating coding assistants for their developers. 

I can tell you what’s causing it. It’s the same for every company. It’s the Innovator’s Dilemma, the comically misnamed horror fun ride from Dr. Clay Christensen and Harvard Business School, which is more “torture device” than “dilemma”. I’ve got a separate blog post planned about my own experience with it. But it’s tearing companies up, and keeping them from responding to the new pressure from AI. 

So what we hear from the foot-draggers is, “We’re working on it, we just have to finish a reorg, so-and-so just left, we have a task force we’re trying to put together but things are really chaotic,” etc. They just can’t seem to get _organized_ around AI. It’s not jelling for some reason. 

For most of you, that reason is the Innovator’s Dilemma, and your company will need to develop a sense of life-and-death urgency to get through it. Don’t get left behind by your competitors who _are _getting huge speedups from AI in general, and definitely coding assistants specifically.

If you’re stuck, come talk to me. We’ve heard essentially every idea, request, and concern that a company could possibly bring up, and we can help.

I don’t think most of you realize how far behind you are.

Here is how a typical conversation goes when I start up a chat with a peer Engineering leader at another company about this space.

Me: Hello! I’m curious to meet your data scientists, hear about your AI journey so far, and explore how we might be able to work together as partners to bring your engineers to the next level with Cody – our amazing new coding assistant that uses our world-class search engine to help the LLM understand your whole code base – along with exploring how we might partner up to bridge the Cody platform to other AI-powered systems you’re building.

Them: Can I have a job?

_News Story 4:  Productivity Metrics are Smelling Gamey_

The newfound and unprecedented productivity boost from coding assistants has awakened an alarming new idea in many companies, which is that they think they need to measure it.

You can see where this is going. Many prospective customers ask us politely if Cody can be modified to have a detector to monitor how productive their engineers are, with metrics to detect when they fall below a certain threshold, at which time they will be strapped to a rocket and fired into space, with two months’ severance pay. And also whether Cody has enterprise admin controls in case they accidentally fire someone in orbit who only missed their productivity target because they were stuck in the restroom after the company taco event that Susan catered, and they need to restore that employee’s system access after they are yanked back to earth.

Naturally we would never, ever, _ever_ build a monstrous invention like that for under $1M ACV. So instead, discerning companies have converged and even fixated on what is now the most popular coding-assistant metric, Completion Acceptance Rate or CAR, which measures how many times you thought, “well, that code looks kinda right” and hit TAB to accept it, out of the total number of completion suggestions you’re shown. In other words, CAR is the percentage of completion suggestions from the coding assistant that people are accepting.

CAR happens to be a number that Cody is exceptionally good at, among its many other capabilities. For this reason we are often approached by well-meaning-but-also-not-so-much prospects who, inspired by the motto “Be Evil”, try to equate CAR with dev productivity in some sort of 1:1 conversion. Let’s call those prospects Beevils. We meet a lot of beevils in my line of work. We regularly have to explain to beevils – we now call this a beevilsplanation – that if the industry couldn’t quantify dev productivity before, then introducing a speedup like AI doesn’t suddenly make it quantifiable now..

I mean, CAR is a nice metric – it’s a simple proxy metric for response relevance that’s easy to measure and reason about – but using it to measure or even _compare_ developer productivity is like measuring how often an F1 driver hits the gas to estimate their race position. Not a perfect metaphor, but the same basic idea: CAR doesn’t measure or model outcomes.

So while CAR is a useful signal, one of many, for understanding your organization’s overall effectiveness gained from coding assistance, it’s not going to be a very effective tool for strapping people to rockets. I can just feel the waves of disappointment coming from important decision-maker beevils everywhere.

If your organization is struggling to figure out which metrics to use to evaluate AI, for instance to figure out how much to spend on it, or which technologies to go with, or which stuff to buy vs. build, then come talk to us. We’re pretty far down this path now and can probably help.

_News Story 5 – No Comment_

Only two more to go! This one ends with the awards ceremony, and then one last one on the way out, and then you can finally look up from the screen to stretch your neck and realize your plane left 2 hours ago.

My favorite recent AI discovery pertains to the tiny minority of us programmers who have been commenting our code all these years, and getting laughed at for it, and having to sit alone at the lunch table, and having people sticking “// Comment Me” stickers on our backs, and calling us Comment Kid, and all manner of other bullying that has been going for four thousand years, when early cavemen tried to carve comments onto the cave wall and they got stuck with spears.

I swear I have never understood the hate for comments. Oh no, I feel a rant coming. Nooooo! Run before it’s too late!

Too late. Rant mode engaged.

What the hell is wrong with all you people who refuse to put comments in your code? This has been a thing, like, forever. I remember a senior Amazon engineer telling me in 1999 that comments are a “slippery slope” and that they always get out of date… hence, you should never use them. 

This guy was on the kernel team, and his last name was the name of a common C standard library function that’s not a regular word, but since I don’t want to give him away, let’s call him Bill Strncpy. Ol’ Strcpy wanted to throw out the bathwater, the baby, the bath, the house, the car, and several of his older children over – remind me again since I can’t believe his reasoning? – “sometimes comments drift out of date”?

I mean yeah yeah sure don’t write comments that describe that code, since the implementation will indeed drift. But you should absolutely put in the Why! I mean, right? Well according to Mister Bill Strftime, all variants and variations of inline comments are “slippery”. He wouldn’t advise them. Argh!

And I can’t believe how many OSS repos out there look like they’ve been run through a comment stripper; I remember in the early days looking at OSS, after breaking out of my comfy Google cocoon as an insulated little caterpillar and heading bravely out into the world as a big ugly moth, I found myself wondering very seriously, was there some sort of weird cultural convention I’d never heard of, that required GitHub contributors to strip comments out of their code before uploading it, and wear weird masks and gather at full moons? It was baffling.

I can just hear the angry letters coming in from indignant people like Bill, uh, Putchar or whatever the hell we called him. “How dare you tell us to explain our thinking! Our thinking might drift out of date!” they will say, slowly trying to work it out. But there’s no getting through.

Until now.

Guess what _Bill_? I was right. You were wrong. It turns out… comments provide incredibly valuable context to help LLMs reason about your code! 

During a query, the LLM may only be looking at a very small hunk of code from a larger subsystem or scope, since you often have to cram many code hunks into the context window to craft the best context. Comments in those code hunks not only help the LLM reason about your code with broader and more accurate context, Cody can also use them upstream in the context assembly engine for augmenting similarity search, graph search and other indexes.

Comments make the whole system smarter. So basically, everyone who’s been commenting their code all these years? You are going to get better results from coding assistants.

Ha! Take that, Mister Memcpy! Well. He’s probably not reading this. He’s richer than Croesus now. But if he ever sees this, I’m sure it will cut deep.

Comment your code! Commenting code has finally won the war. Brook no arguments!

To recognize and celebrate this victory, if you are someone who has been commenting your code, feel free to take one of these badges. You have earned it.

<Figure
  style={{marginTop: "0px", marginBottom: "20px", width: "30%"}}
    src="https://storage.googleapis.com/sourcegraph-assets/blog/RAG-to-riches/m10r-badge.png"
    alt="M10r badge"
/><br/>

Astute readers will recall that m10r is short for _modeltrainer_. Your code commenting habit, which you have stuck to all these years even in the face of relentless mockery from people like Bill gmtime_64, is providing your AI assistant with valuable model training data for both fine-tuning and in-context learning.

And so, thusly, therefore, heretofore, hitherto and henceforth, THANK YOU on behalf of coding assistants everywhere for your service in helping out the AI, and welcome to the m10r club! You should take that sign off that’s taped to your back.

I guess I should wrap up, so I’ll finish with the last news item of the day, which is that Cody is now GA.

_News Story 6: Cody Grows Up and Goes GA. Already._

For our last story of the hour, I am pleased to report that Cody, Sourcegraph’s LLM-backed RAG-based AI coding assistant, is now Generally Available. Like, for you.

“Generally Available” is such a terrible term; it sounds like your system is now “generally up”, and you “generally think about SLAs” once in a while, and your “employees generally come to work”, and so on. It just sounds so weird. “Azure is now Generally Available!” Actually now that I say it out loud it feels right for some reason.

Anyway, Cody is GA! After a mere 9 months of frantic development… but atop Sourcegraph’s foundation of 10 years of code understanding infrastructure. So it’s a baby, but a great big one like in a Miyazaki film. You can use Cody in several clients including the flagship VSCode (GA), IntelliJ (Beta), other JetBrains IDEs (Experimental) and Neovim (Beta). And it has a free tier for you to just screw around with it. Bzzzzzt! One more gnat for your windshield.

Since this isn’t a marketing post, I won’t bore you with Cody’s capabilities. I mean, you can just [download](https://about.sourcegraph.com/cody) it and figure it out. Instead I’ll tell you what’s new with our little RAG-to-riches saga since last time you probably looked.

Cody has quickly grown from POC quality–some might even say POS quality–earlier this year into a polished and slick GA product. It’s a lot of fun, and it starts making you more productive as soon as you install it. The completion suggestions are fast and satisfyingly accurate, and the Cody chat experience is basically unparalleled, with the chat UI and context specification being dramatically improved. Cody’s overall performance and quality are competitive across the board, it scales up to Enterprise grade, and it offers great variety in choosing LLMs, context, hosting options, guardrails, and more.

Cody’s secret sauce and differentiator has always been Sourcegraph’s deep understanding of code bases, and Cody has tapped into that understanding to create the perfect RAG-based coding assistant, which by definition is the one that produces the best context for the LLM. 

That’s what RAG (retrieval-augmented generation) is all about. You augment the LLM’s generation by retrieving as much information as a human might need in order to perform some task, and feeding that to the LLM along with the task instructions. Cody’s RAG is a variant of a rec system, recommending relevant code and other context to the LLM for each task or query–a point made recently on [Latent Space](https://www.latent.space/p/bryan-bischof) by our friends there who recently invited Beyang and myself on for a podcast. Good recommenders need numerous models, domain knowledge bases, fast retrieval over large corpora, and other infrastructure that Sourcegraph had already largely built for code.

Producing the perfect context is a dark art today, but I think Cody is likely the furthest along here from what I can see. Cody’s Context has graduated from “hey we have vector embeddings” to “hey we have a whole squad of engines_.”_ The key to generating great context is to look at the problem from many different lenses, and each of Cody’s backend context providers is a different lens.

On the retrieval side, Cody has many code-understanding lenses: Among them, a high-speed IDE-like code graph, multiple high-performance code search indexes and engines, natural language search, and more, all acting in concert as specialized retrieval backends, both deterministic and model-backed.

Over on the context _fetching_ side, for getting info for Cody to slice and dice, Cody is beginning to incorporate multiple context sources beyond just your repos. This gives Cody lenses into metadata and documentation that’s not necessarily evident from the code itself, such as any really critically important information that the author of the code didn’t put into a COMMENT.

Ahem.

Once you have the architecture in place for dealing with a squad of context engines, as Cody has done, you can turn it into a whole army of them by introducing connectors. I won’t say anything about how we’re doing it yet because it’s not out yet, so that would be marketing, not news.

The Enterprise edition, in GA soon, works with multiple code hosts, supports multiple LLMs, and can scale up to the largest of code bases, and there is an early-access program available.

And of course all editions of Cody benefit from being able to take advantage of the fastest models at any given time. Who knows at this point if Gemini won’t become the highest-performing LLM for a while, or some other LLM? You don’t want your coding assistant to lock you into a particular set of models. Cody is designed to work with many models and won’t be left behind.

So that’s the news. Cody is GA, and ready for you to play with it. 

I’ve deleted about forty-six pages of text trying to explain succinctly why Cody’s context actually differentiates it from other coding assistants. But it’s like trying to explain why it’s nice to have a really smart programmer hanging around and helping you with whatever coding-related thing you’re doing.

If you are wondering what could possibly be the benefit of having a smart programmer hanging around and helping you – and if so, then I am sad that you have never had that experience – then you should get yourself a coding assistant. It’s rad.

Until next time! Hope everyone has a great holiday season. Lemme know what you think of Cody.

Bzzzt!
