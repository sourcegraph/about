---
title: "Cody is Cheating"
authors:
  - name: Steve Yegge
    url: https://handbook.sourcegraph.com/team/#steve-yegge
publishDate: 2023-05-11T10:00-07:00
description: ""
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
    src="https://storage.googleapis.com/sourcegraph-assets/blog/blog-image-hero.png"
    alt="A stylized picture of the Cody logo"
/><br/>

Did I mention I’m lucky? Well, this is the world poker tournament of software showdowns. This is the Big One. And I got pocket rockets. True story: Yesterday, **Bill Gates flew out** to visit one of our huge customers, trying to woo them into choosing Copilot over Cody. He cast all of his magic spells. I’ve seen what he and Satya can do. They are magicians when it comes to vaporware and spin.

And then we showed that same customer a Cody demo, and haw, haw, HAW HAW HAAAa8 \*cough\* \*cough\* HAAAAAAaaaagh, I’m dying here. Of *course* they picked us. Bill was wasting his time. I’ve been waiting to do that to him for 35 years, and it felt *good*.

Because there is truly no comparison to Cody. We’re so far ahead. It’s blowing people’s minds at Copilot shops. You’ll see soon enough!

But first! I want to explain *why*, so that you understand this isn’t some marketing gimmick. *Cody knows a tremendous and surprising amount about your code* and it is **unreasonably powerful**. It’s no joke. If you’re patient I’ll show you a video.

It’s already *almost* as if we’ve trained the LLM on your whole code base. Cody does a *bang-up* job of being an actual, bona-fide *coding assistant*. Not an autocompleter, not a GPT sidebar. An actual assistant. A whole team of them, in fact. You will be amazed.

BUT, many of our Enterprise customers and prospects are **already familiar with Cody** and simply want to understand our key “moat” differentiators vs. Copilot. So that will be the main focus of this post. We also have whitepapers about all this coming soon.

Before I jump into the gory details, let’s recap what’s changed since Episode 1.

##### The Rise and Fall of the GPT Empire

Here’s the TL;DR for what happened last week. For a more action-packed account, see my recent Medium post, *[We’re Gonna Need a Bigger Moat](https://steve-yegge.medium.com/were-gonna-need-a-bigger-moat-478a8df6a0d2)*. I’ll just share a recap here.

First, a leaked memo from a Google researcher, “[We have no moat, and neither does OpenAI](https://www.semianalysis.com/p/google-we-have-no-moat-and-neither)”, showed that **open-source LLM performance is rapidly catching OpenAI/Google**, for specific domains and apps.

And second, [Geoffrey Hinton](https://en.wikipedia.org/wiki/Geoffrey_Hinton), the so-called Godfather of Deep Learning, quit to go on a world tour talking about SkyNet.

The recent chain of events could probably make for an actual blockbuster movie, but for now, to summarize, let’s continue the history lesson I started in *Cheating is All You Need*. One paragraph!

<table border="0">
 <tr>
    <td>
      <Figure
        src="https://storage.googleapis.com/sourcegraph-assets/blog/blog-image-1.png"
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

##### Cody’s impenetrable alligator-filled piranha moat

















<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/blog-image-2.png"
    alt="A diagram of the key technologies powering Cody"
/><br/>

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/blog-image-3.png"
    alt="A diagram of the code graph flowing into embeddings for Cody"
/><br/>

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/blog-image-4.png"
    alt="A diagram of Cody's backend technology"
/><br/>

<img
  style={{marginTop: "0px", marginBottom: "20px", width: "30%"}}
  src=""
  alt="Cody's moat equation"
/>
<br/>