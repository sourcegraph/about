---
title: "Can you hear me? No, but we read you—an experiment with video calls"
authors:
  - name: Quinn Keast
    url: https://twitter.com/quinnkeast
publishDate: 2020-10-29T00:00-07:00
tags: [blog]
slug: can-you-hear-me-no-but-we-read-you-an-experiment-with-video-calls
description: 'When our VP of Product suggested an idea to help the team build empathy and better understand the video call experience from the perspective of someone relying on captions, we jumped on it.'
heroImage: /blog/silent-team-call.jpg
published: true
canonical: https://fastcompany.com/90565930/im-deaf-and-this-is-what-happens-when-i-get-on-a-zoom-call
---

_This article originally appeared on [Fast Company](https://fastcompany.com/90565930/im-deaf-and-this-is-what-happens-when-i-get-on-a-zoom-call)._

At Sourcegraph, we’re all-remote. That means we write a lot—in emails, Google Docs, GitHub, and Slack. We work hard to cultivate a written-first culture.

And that works beautifully for me. Because, you see, I have a hearing problem. Or as I like to say, I’m deaf as a post.

While I can hear sound, [I can’t turn that sound into words](https://quinnkeast.com/readme#errata), and rely on lip reading for day-to-day conversations.

For me, a product designer, this approach to work is amazing. Long stretches of focus time and being able to decide when and how to best do my work. And for someone with hearing loss, this almost inherently creates a more inclusive environment.

Still, from time to time, we rely on synchronous methods of communication: team syncs to catch up on a more personal level and bring teams together, moderated user research, and facilitated collaborative activities and workshops. And more often than not, synchronous means video call.

Video calls have always been a challenge for me. Lip reading doesn’t work well over video, because lip reading relies on a whole lot more visual information than just the lips, and video calls don’t carry the full visual and _emotional_ bandwidth needed to read lips easily. So instead, I use a series of hacks or built-in tools to help me out by providing real-time speech-to-text.

These hacks and tools work well, but sometimes they’ll cut out or they’ll lag and fall behind. And then simple things like someone asking for my thoughts on something can create awkward moments of silence before I realize that someone said my name, because I was relying on a transcript that was five seconds behind.

Thankfully, I have a wonderful, supportive team, and this has never been a problem in my day-to-day work.

Our team has been growing quickly, expanding from just a single product manager to a team of eight product managers and designers ([we’re still growing!](https://boards.greenhouse.io/sourcegraph91)), and we’re always thinking of ways to connect and support each other as a team. So when our VP of Product suggested an idea to help the team build empathy and better understand the video call experience from the perspective of someone relying on captions, we jumped on it.

When we held our next product team sync, the whole team joined sans audio. We would all depend only on captions to follow the conversation.

<Blockquote
  headline="A quick caution"
  quote={
    <>
      <p className="tw-inline">Most exercises to simulate the experience of living with a disability aren’t effective—or even a good idea—because they can never truly simulate what it’s like to live day-by-day, and can leave folks with a mistaken idea of the experience.</p>
      <br /><br />
      <p className="tw-inline">But this idea was compelling because the unique nature of the hacky setup I’m using means that it’s not about <em>ability</em>, it’s about <em>technology</em>. It wasn’t about learning what it’s like to do video calls with a hearing problem: it was about learning what it’s like to rely on captions for video calls.</p>
    </>
  }
/>

## What we did

The team was committed. Our meeting document was stuffed with meaningful topics that we wanted to cover, and we expected to use the full hour set aside for our sync.

We ended up using two different video calling platforms and two different approaches to captioning.

The first attempt combined [Zoom](http://zoom.us/) and [Otter](https://otter.ai). Each person opened a browser window with the transcript, and located it somewhere on their screen so they could see the call along with the “captions.” This transcript didn’t include speaker names, so folks had to pay close attention to who was talking and map it to the transcript.

This worked well until it didn’t. Within five minutes, the transcript lagged a good 5-10 seconds behind the conversation. In my own day-to-day setup, I often use multiple speech-to-text tools simultaneously for this exact reason, so I suggested we jump over to [Google Meet](https://meet.google.com), which has captions built right in.

The team immediately spotted the tradeoffs: while Meet’s captions were built in, there’s no history, meaning each person had to dedicate their attention to the captions to make sure they didn’t miss anything. And there’s a few UI issues that create friction or interrupt the captions.

But fundamentally, it _worked_. Everyone was able to participate in the call, and we had our sync.

<Figure 
  src="/blog/silent-team-call.jpg" 
  alt="The team on the video call" 
/>

## Takeaways

The call was a startlingly effective team bonding experience. Everyone enjoyed and learned a lot from the experience of approaching the call with a different perceptual and technological context.

For me, it was fascinating to see how our interactions changed over the course of the call. Everyone became more expressive in physical space. The rhythm of conversation changed, from tentative, short sentences, to longer, well-thought-through blocks of thought. We discovered how difficult it was to go back and forth between speakers without the benefit of sound, and how important it was to give each other conversational space to join in. We discovered how hard it is to be heard.

We also realized that some of the things we planned to discuss could be better covered asynchronously in a written-first format. This helped us focus the sync on the topics that actually called for synchronous conversation.

As well, while the whole team enjoyed the experience, it was more draining—emotionally and mentally—for everyone, in part because of the constraints and demands placed on participants by the speech-to-text tools available to us today.

In the week following the sync, I learned that many members of the product team, as well as some members of the broader Sourcegraph team, were already making changes to how they approached video calls.

Some folks are defaulting to Meet over Zoom, because they know captions are built-in, making the call more inclusive for everyone by default.

Others shared that they’re trying to pause more, and be more conscious about how they phrase things to complete an idea in a whole sentence.

Even sentence structure has changed: others have started to say names at the beginning of a sentence, rather than at the end.

Most compelling of all, many members of the team are now using captions on calls themselves—not because they need them, but to keep an eye on how what they’re saying is being received by others on the call who might be relying on them.

<blockquote  className="border-left border-3 border-sky-blue px-4">
<p>Another member of our team shared a wonderful story of their own after reading this article:</p>
<p><em>Incidentally, we did something almost exactly like this on my previous team! I hired an excellent engineer who was hard of hearing, and we were using Meet for captioning. After some hiccups and realizing that we had left that engineer behind a couple of times, we all decided to turn on captioning and to pay attention to it.</em></p>
<p><em>It was great for giving us an idea of what our teammate was experiencing, but the most important thing was that it gave us a chance to correct ourselves when we “misspoke”—when the captioning said something other than what we'd intended. This way, we avoided putting the burden of deciphering onto the engineer who relied on the captions.</em></p>
</blockquote>

## Inclusive design at Sourcegraph

At Sourcegraph, we care deeply about creating an inclusive product for everyone. This exercise reinforced on a very personal level how “ability” falls on a spectrum, and in line with inclusive design principles, how designing for the extremes of a spectrum of ability can benefit everyone.

While my own hearing loss is permanent, someone dealing with situational challenges like a flat wireless earbud, or temporary challenges, like an ear infection, can benefit from speech-to-text during video calls just as much as I do.

Our team is working on universal code search for developers. Universal code search, to us, means creating inclusive experiences from the beginning, and always working to improve our baseline for accessibility.

<p style={{padding: '.75rem 1.25rem', marginTop: '2rem', backgroundColor: '#f2f4f8', borderRadius: '8px', lineHeight: '1.5'}}><strong>If we can do more to support how you   use Sourcegraph, <a href="https://airtable.com/shr2JxrSfqFcySukF?prefill_Source=Blog+post+about+silent+team+call" target="_blank">please get in touch</a>!</strong> We’d love to talk with you to learn how we can do better.</p>

<p className="text-center" style={{color: '#00B4F2', marginTop: '3rem', marginBottom: '1.5rem'}} aria-hidden="true">• • •</p>

**Bonus panel**

At Sourcegraph, it’s tradition for new team members to join all the weekly syncs to jump start getting to know their teammates and find out what’s going on. We had a new team member join us for this—but we’d forgotten to tell them what we were doing! When they joined a few minutes after we’d started—with normal audio—the captions were already running 5-10 seconds behind. They got to watch us all sitting around blankly until someone said something, only to continue to sit around blankly for another ten seconds before anyone reacted!

They rolled with it admirably until we caught ourselves and filled them in. And then they happily turned off their audio, opened the transcript, and joined in!
