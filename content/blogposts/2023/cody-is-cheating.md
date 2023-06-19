---
title: "Cody is Cheating"
authors:
  - name: Steve Yegge
    url: https://handbook.sourcegraph.com/team/#steve-yegge
publishDate: 2023-05-11T10:00-07:00
description: "Stevey’s “Cheating With Cody” blog series, Episode 2"
tags: [blog]
slug: 'cody-is-cheating'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-is-cheating/cody-is-cheating-og.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-is-cheating/cody-is-cheating-og.png
---

*Stevey’s “Cheating With Cody” blog series, Episode 2*

I swear I will never make you read [that much](https://about.sourcegraph.com/blog/cheating-is-all-you-need) again. Haha, kidding, this one is 3000 pages too. 

But I might have to start doing this as often as weekly, since stuff changes so fast. I mean it’s only been *six weeks* since I posted about Cody and Marge and the whole cheating affair, but the whole world has changed *dramatically*, as you will see in our action-packed second installment of my new *Cheating with Cody* blog post series.

The pilot episode, *Cheating is All You Need*, generated plenty of both excitement and confusion. And definitely there was a lot of interest in the new badges. 😉

In today’s episode, I will explain our moat: **How exactly Cody is differentiated** over all other coding assistants, including Copilot, and why we will always be the leader.

In upcoming Episode 3, next week, I will show you Cody in action.

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-is-cheating/blog-image-hero.png"
    alt="A stylized picture of the Cody logo"
/><br/>

Did I mention I’m lucky? Well, this is the world poker tournament of software showdowns. This is the Big One. And I got pocket rockets.

Because there is truly no comparison to Cody. We’re so far ahead. It’s blowing people’s minds at Copilot shops. You’ll see soon enough!

But first! I want to explain *why*, so that you understand this isn’t some marketing gimmick. *Cody knows a tremendous and surprising amount about your code* and it is **unreasonably powerful**. It’s no joke. If you’re patient I’ll show you a video.

It’s already *almost* as if we’ve trained the LLM on your whole code base. Cody does a *bang-up* job of being an actual, bona-fide *coding assistant*. Not an autocompleter, not a GPT sidebar. An actual assistant. A whole team of them, in fact. You will be amazed.

BUT, many of our Enterprise customers and prospects are **already familiar with Cody** and simply want to understand our key “moat” differentiators vs. Copilot. So that will be the main focus of this post. We also have whitepapers about all this coming soon.

Before I jump into the gory details, let’s recap what’s changed since Episode 1.

<br/>

#### The Rise and Fall of the GPT Empire

Here’s the TL;DR for what happened last week. For a more action-packed account, see my recent Medium post, *[We’re Gonna Need a Bigger Moat](https://steve-yegge.medium.com/were-gonna-need-a-bigger-moat-478a8df6a0d2)*. I’ll just share a recap here.

First, a leaked memo from a Google researcher, “[We have no moat, and neither does OpenAI](https://www.semianalysis.com/p/google-we-have-no-moat-and-neither)”, showed that **open-source LLM performance is rapidly catching OpenAI/Google**, for specific domains and apps.

And second, [Geoffrey Hinton](https://en.wikipedia.org/wiki/Geoffrey_Hinton), the so-called Godfather of Deep Learning, quit to go on a world tour talking about SkyNet.

The recent chain of events could probably make for an actual blockbuster movie, but for now, to summarize, let’s continue the history lesson I started in *Cheating is All You Need*. One paragraph!

<table border="0">
 <tr>
    <td>
      <Figure
        src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-is-cheating/blog-image-1.png"
        alt="LLaMa architecture diagram"
      />
    </td>
    <td>
      - **Feb 24th**: While Zuck was busy flying the plane into the mountainside, Meta’s AI team opened-sourced their 65-billion parameter [LLaMA](https://ai.facebook.com/blog/large-language-model-llama-meta-ai/) large model
      - Fortunately, they kept the **secret model weights** under **lock and key** in a vault deep in Zuckville. Meta’s secret sauce, LLaMA’s proprietary weights: safe and sound
      - **March 8th**: LLaMA’s secret weights are, predictably, [leaked](https://www.theverge.com/2023/3/8/23629362/meta-ai-language-model-llama-leak-online-misuse) to Discord two weeks later. Nice one, Zuck.
      - A global army of DLC modders descends and begins hacking on LLaMA
      - **March 19th**: A LLaMA variant strain achieves 90% of ChatGPT’s performance. *Training cost: $300*
      - March 28th: LLaMA dependency is removed; OSS is free and clear.
      - Ever since then has been **full batshit** insanity, with new OSS advances launching *daily*, and technical advances happening every few hours. It’s **impossible** to track it all.
      - **Money volcano alert**: We’re seeing definite signs of volcanic activity!
    </td>
 </tr>
</table>
<br/>

Congratulations! You’re all caught up on LLMs. For the month.

Google and Microsoft do actually have a lot of non-AI moats. It will be an interesting fight. But I think **costs are about to come crashing down.**

And much more significantly, even **if** the premium luxury highest-end expensive boutique mainframe LLMs from Google/OpenAI are able to maintain better overall performance under load and in local real-time scenarios – **if** – then even so, at some point, **the OSS model performance still becomes “good enough”**. Because they are all growing smarter together at disaster-movie exponential rates, and because the base OSS models can be **cheaply and easily fine-tuned for your domain**, making their performance trail the boutique LLMs by what seems to be months, at best.

Classic business-school disruption going on here. But the timeline of this one is *insane*.

The real winners here are, conveniently, **me**, **me**, and **me**. Well, really *anyone* selling Enterprise LLM-backed SaaS, *other* than the current big players. But also me.

I’m sure a lot of this advantage applies to other domains that have good embeddings. But I’ll talk about the domain I know, which is coding assistants:  Cody and Copilot. For me, it feels like every new bit of news is accelerating Cody’s race to become the most powerful dev tool in the world.

<br/>

#### Cody’s impenetrable alligator-filled piranha moat

As LLMs become **commoditized and tiny and cheap** and basically become little pocket [Tamagotchi](https://en.wikipedia.org/wiki/Tamagotchi) that can power literally any app, device, or circuit anywhere on earth, the main takeaway from the history lesson above is that **apps need their own data moats** to be different from the competition.

<p style={{textAlign: 'center'}}>*AI App* &nbsp; = &nbsp; *Data Moat* &nbsp; + &nbsp; *LLM*</p>

This is true for chatbots like Bard and Claude, but also for coding assistants like Cody and Copilot.

If you build an app and you *don’t* have a moat, then you only have a few options, and people can unfortunately very easily compete with you head-to-head on any of these approaches:

- Invest in **prompt engineering** to present your best context in the actual query
- Invest in **great UI workflows** and try to stay ahead of your competitors on design
- Try to **build a marketplace** and start letting devs share each other’s contributions
<br/>

Everyone does all these already. We are certainly doing all these things with Cody. But it’s not a moat. At least, not until someone pulls ahead and network effects start kicking in, probably in Episode 5 or 6.

So what does a good moat look like? Well, my thesis of *Cheating is All You Need* was that having **high-quality structured data sources** helps you build a context window.

But Cody’s “cheating” is in fact much more deeply aligned to the AI, in the sense that **Sourcegraph’s code graph can be used directly to improve embeddings, fine-tuning, training**, and to significantly raise the quality of nearly every phase and component of your LLM-powered workflows.

<br/>

#### Sourcegraph Platform 101

At Sourcegraph we are fairly well-known for our **code search**, but perhaps not as well known for our **code graph**, and I’m guessing *very* few of you know about our **embeddings**. These three custom backends, all created from different techniques for “indexing” your code. They are the ingredients to the secret sauce that fills our data moat.

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-is-cheating/blog-image-2.png"
    alt="A diagram of the key technologies powering Cody"
/><br/>

I made these crummy Tinkercad drawings because, ironically, I got frustrated trying to get an AI to draw them for me. Sorry for the quality. But vector databases should be drawn as a wastebasket full of arrows, and I choose to die on that hill.

I’ll make the argument that these three datastores form our moat:

<p style={{textAlign: 'center'}}>*Cody Moat* &nbsp; = &nbsp; *Embeddings* &nbsp; + &nbsp; *SCIP Graph* &nbsp; + &nbsp; *Code Search*</p>

In a little bit, I’ll dive into more technical detail. But first, let’s compare Cody to Copilot.

In the glossy marketing brochures, **GitHub looks like they have the same moat** as Sourcegraph. But let’s break it down for Copilot:

- **Good**: GitHub’s code search has improved by miles. It doesn’t scale as well as Sourcegraph's search, it causes edge-case headaches for enterprise users, and it still doesn’t have [ranking](https://about.sourcegraph.com/blog/new-search-ranking). But it’s getting admirably close; Bravo, GitHub search team!

- **Bad**: GitHub’s code graph for their so-called “precise” code intelligence is basically a [cheap plastic imitation](https://nethackwiki.com/wiki/Cheap_plastic_imitation_of_the_Amulet_of_Yendor) of our [SCIP](https://about.sourcegraph.com/blog/announcing-scip) graph, which is 10 years in the making, compiler/IDE-precise, inspired by Grok, and is already being adopted by other language communities. Whereas StackGraphs are **cursed -5 Sauce of the Weak**. I will provide *significantly* more documentation comparing the two within a month or so, if all goes well. Soon!

- **Meh**: Copilot’s embeddings story is a **mess** right now. Broken user model, no multi-repo support, and no clear path to get there. **Sourcegraph already has multi-repo** and we’re now working on scaling to the **largest monorepos**, as well as **self-hosted embeddings**.

This image illustrates how our code graph flows into our embeddings, which in turn assist with search. And all three of them are used directly by both Cody (for context) and the LLM (for tooling).

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-is-cheating/blog-image-3.png"
    alt="A diagram of the code graph flowing into embeddings for Cody"
/><br/>

I don’t think Copilot today, in its current form, uses *any* fancy helper backends like this. It simply uses your last 20 opened files, or some such. That’s not a moat, as it’s publicly accessible data. And it doesn’t use GPT or an LLM either; I believe it uses Codex. So it’s not really in the same class as Cody.

**Copilot Chat** copies many of Cody’s early, primitive features, so it might be in the same class? But it also appears to be **vaporware**, so it’s really hard to compare it to Cody. From what I can see, they are **far behind**.

I will talk more about Cody’s many other differentiators over Copilot in our next post, but for now, let’s focus on two:

- Cody has a clear, differentiated, and defensible **code graph data moat**
- Cody has a **pluggable LLM backend**
<br/>

These differentiators mean that **no matter what happens in the AI race** and the clone wars, and no matter who wins, **Cody will always be your best coding assistant**.

<p style={{textAlign: 'center'}}>*Cody* &nbsp; = &nbsp; *Sourcegraph* &nbsp; + &nbsp; *BYOLLM*</p>

I also think that **self-hosted embeddings** are going to be a game-changer, and we’re working to make them available for Cody soon. You will no longer need to upload your code base to a cloud provider; all your IP assets can be embedded in your own secure environment.

I hope that was useful! This entire analogy is credit to Greg Wester, our Enterprise Cody PM.

<br/>

#### Take a breath

Stretch your legs, get some coffee, take a breather. It’s OK. I know this is long.

I ain’t making you read this, you know. :) But this is grade-A premium SkyNet Early Origins History Lesson material. **Cody teaches the LLM to use developer tools**. As the first evil LLM plots the destruction of the humans, what kind of tool will it need, for enhancing itself? That’s right. You guessed it. *Coding tools*.

Just kidding, just kidding. I’m just telling you wild tales to take your mind off the tech stuff. None of that’s gonna happen. The Singularity will run out of GPUs and wind up working at a gas station to make rent.

OK, break’s over. Let’s make a run to the finish line!

<br/>

#### Cody is cheating

This diagram is my attempt to capture the spectacle of Cody’s **totally unfair cheating** in all its glory, with this diagram with **all three of Cody’s backends** in action.

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-is-cheating/blog-image-4.png"
    alt="A diagram of Cody's backend technology"
/><br/>

Now that looks like a data moat!

I’m sure it all makes sense, except… we never did talk about what Embeddings actually *are*. That wastebasket of 3D arrows.

What does it *do*?

Why does it matter so much that Copilot doesn’t have them?

I’m gonna get through this fast. This is the good part. My favorite part. It’s magic!

<br/>

#### 768 questions is All You Need

Cody is easily **10 times better with embeddings turned on**. Without embeddings, it falls back to a keyword search with unsatisfying results. What makes embeddings so effective?

What even *are* embeddings? Well, at a high level, you slurp up your whole code base, including documentation, configs, everything, into “vector space”, and it magically 🧙🦄🍄takes each element you encoded, a function, paragraph, comment, whatever, and gives it a **magical arrow of meaning**. 🎯

I spent all last week reading about this, and I want to tell you about this magical arrow, the embedding vector. It is currently the **key battleground** for all coding assistants, because it is how you teach the LLM about your code without doing any fine-tuning.

I’ll warn you though, embeddings are pretty weird. You pull them like a bezoar out of the belly of a *massive* language model with billions of parameters, and each embedding is 768 mystical numbers that fully describe a hunk of text… at least, well enough to find similar hunks. 

Which just happens to be *exactly* the **magical sauce Cody needs**.

If you ask Cody, *Where is the SAML auth code in our codebase?*, how does it know which files to examine in order to give you a great answer? 

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-is-cheating/blog-image-5.png"
    alt="A diagram of Cody's backend technology"
/><br/>

The answer, as you can probably guess, is embeddings.

We embed your question into the same vector space as the magical arrows we created for your entire code base.

But… how? I mean what the hell even *is* an embedding?

Well, I’m here to tell you that embeddings are basically **LLM poo**. I kicked around a lot of analogies and that one stuck to my shoe, so to speak.

Remember I said that Transformers have biological-seeming “organs”? They ultimately wind up training billions of neurons, but the data goes back and forth through many layers and channels inside the beast, before it **converges on its outputs via backpropagation**. Like when you dream! Or so some say.

Embeddings are a bit of a side effect. They come from a sort of gland you squeeze, underneath the Transformer.  This process is called “sampling its outputs”. **Don’t grab the wrong gland or it gets really angry**.

I deleted literally 10 or 15 pages of text here. Right here at this point.

Instead, I’ll just summarize with this imagined conversation with the LLM:

*You*: I’d like to embed this hunk of text.\
*LLM*: Well give it here, don’t have all day. There it is. *Nomf nom mnomf* That’s good text.\
You: Can I get my embedding now?\
LLM *(paying little attention)*: Yargh, just scrape it off that bigger lump right back there.\
You: What does it do exactly?\
LLM *(bored)*: It represents the “meaning” of your hunk.\
You: What do you mean by “meaning”?\
LLM: The vector contains the answers to 768 questions about your hunk.\
You: What the hell?\
LLM *(perking up)*: That’s actually one of them!\
You: What do these questions do?\
LLM: They let you find other hunks of text that have similar meaning to your starting hunk.\
You: Okay but which questions are you *actually* asking?\
LLM: I don’t feel like talking about it.\
You: I mean, I’d kind of like to know. Don’t you have billions of parameters?\
LLM *(beaming)*: Yup! 175 *billion*, baby. Woo!\
You: So how did you pick 768 questions?\
LLM: That’s the size of my lump. Also my mouth. And my poop chute.\
You: Ew.\
LLM: Yeah but that ain’t nuthin. I can answer 175 billion questions about anything!\
You: Then what good is an embedding that only asks 768 questions?\
LLM: Well your hunks of text aren’t that big, so I don’t need that many questions. Keeps it crisp.\
You: So you’re basically figuring out which 768 questions to ask, *out of 175 billion*.\
LLM: Yup! I hand-select 768 questions that will best allow me to differentiate between every single hunk of text.\
You: So… it’s a game of 20 questions?\
LLM: No. No! Not at all. It’s… much more complicated than that.\
You: …?\
LLM *(blushing)*: Well for starters, the embedding has *768 questions*. That’s a lot more!\
You: It is, but it’s also *pretty far* from billions.\
LLM *(insistent)*: No, no, yer makin’ all these bad assumptions. Who are ye again? It’s not 20 questions, because the answers are in-betweenies too. You just gotta know the right questions to pick, that’s all. You don’t need billions.\
You: OK then, mister smarty. What *exact* questions do you pick?\
LLM *(avoiding eye contact)*: It’s… proprietary.\
You: You can tell me. We’re friends.\
LLM: It’s just questions. Innocent questions. About… stuff.\
You: If you don’t tell me, I’m going to drive a forklift through your data center’s power grid.\
LLM: I… I don’t know! They just grow on my ass!

God, I went round and round on this. Embeddings are “learned” and accumulate on a hidden layer in the LLM, one that is purpose-built for giving you embeddings. And you just have to **believe that the numbers mean something**.

So like I said. They are LLM poo.

I spent way too much time on this. It’s 4am. I’d better get this wrapped.

It’s possible in theory to reverse engineer some of the embedding numbers, but nobody does. You just squint at the numbers and imagine meaning there, like Cypher looking at the encoded Matrix. I don’t know. Maybe someday [model explainability](https://techcrunch.com/2023/05/09/openais-new-tool-attempts-to-explain-language-models-behaviors) will help.

Did I mention that **Embeddings are weird**?

This fun 20-questions analogy, by the way, is credit to Jessie Seidler, our Account Executive extraordinaire, who heard me ranting about embeddings, and she said: “**That’s 20 questions!**”

By the way, in the past weeks, just trying to be able to explain embeddings to customers, I’ve read articles, essays, papers, even whole textbooks. I have been to the mountaintop. I’ve hacked my way through jungles and swamps, trying to make *absolutely certain* that Jessie’s 20-questions analogy is 100% **technically and mathematically defensible**. 

And as far as I can tell, nobody fuckin’ knows.

But it’s a nice mental model.

If you try Cody, *make sure* embeddings are enabled and available for your code base, or you’re not getting even a tenth of the full experience.

<br/>

#### Our graph makes our embeddings a moat

Last section. I’ll tie it all together now. All three backends. Our graph, search, and embeddings.

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-is-cheating/blog-image-6.png"
    alt="A diagram of Cody's backend technology"
/><br/>

There’s been a fair amount of research on how to **augment LLMs with structured code graphs**. [GraphCodeBERT](https://arxiv.org/abs/2009.08366) is a pretty good example from back in 2021, focusing on the data-flow graph. A quote from the authors: *We further show that the ***model prefers structure-level attentions*** over token-level attentions in the task of code search.*

But there’s been more research done since then, and I’ve spoken with data scientists at other large companies with extremely large knowledge graphs, and the key takeaway for today is:

You can **directly embed the code graph itself**.

You can use our graph to create better text chunks, and you can also embed relationships from our graph, including both compiler artifacts such as class/symbol relationships, but also the “people graph” of code ownership, the security/trust graph, and other metadata we record in Sourcegraph’s SCIP code graph.

This property of LLMs – that they work better with structure than simply with pure token streams – is a huge differentiator for Sourcegraph and Cody. I can’t stress it enough. This graph-embedding approach **draws a direct line** between our code intelligence quality and Cody’s performance. 

Moreover, there are many other workflow phases where our code graph can be used by models. I’ll get a whitepaper about this asap, and also include the contribution of our Search indexes, of which we have four!

Competing AI assistants will struggle greatly to compete with us here, because **they don’t have our code graph**.

And it’s a wrap, folks! You made it!

<br/>

#### Reward function

Congratulations! 🎉

As a reward for completing this **brobdingnagian** post, here is a Cody video for you to watch. It’s one of our Cody team engineers showing off the UI for the next patch release. The fixups feature is live in Cody now, but this new UI is pretty sick. In fact, I think it’s headed in the direction of the future of programming. Take a look and see what you think.

<YouTube
  title="Sourcegraph Cody: Inline Assist" 
  id="cJj2ozoug60"
  showTitle={false}
/>

This is like science fiction. And Cody knows **your code**, and will always know it best, because of our moat: Our code graph and our precise code intelligence platform.

We are the real deal.

<br/>

#### Epilogue

Thus ends the saga of the Second Cheating.

The AI landscape has gone completely nutso. It’s a 100-foot wave, crashing towards us. And here at Sourcegraph we’re basically trying to surf it. We are making sure that no matter what happens, **we’re building the best tool out there**.

In my next post, the final chapter, I’ll show you more about the Cody product itself, answer some common questions, and let you know how you can help out.

I genuinely appreciate that you took the time to read all this. I know it was a **bit of a chore**, but hopefully the **bold snippets** helped a little. I’ve literally cut two full blog posts *out* of this one, and probably could have sawed this in half. 

But I’m definitely going to have to come out of blogging retirement and start posting regularly, or these posts will continue getting totally out of hand. The times, they are a-changin’.

Thanks for reading. And please, let us know if you want to come **join our team**. We have all sorts of openings and we’d love to hear from you! In particular, if you’re passionate about this stuff and you’re good at it, we could use you as our **Head of AI**, or as a data scientist or ML engineer. 

If you’re passionate about this stuff, and you spotted any of the (ahem) totally deliberate technical errors in today’s post, we should chat! Check out our [job site](https://boards.greenhouse.io/sourcegraph91) for what’s open at any given time. We should be **hiring even more**, soon.

Until next time! Chapter 3 is coming in a few days. See you next time, m10r!
