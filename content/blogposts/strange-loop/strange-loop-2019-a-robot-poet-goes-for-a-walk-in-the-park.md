---
title: "Strange Loop 2019 - A Robot Poet Goes for a Walk in the Park"
description: "Designing complex, dynamic systems that can produce interesting and aesthetically pleasing art is a very hard problem to solve, even when you're just talking about something as focused as a Twitter bot. What happens when you try to make procgen art that doesn't just exist on the Internet, but actually lives in and interacts with the real world?"
authors:
  - name: Pam Selle
    url: https://thewebivore.com/
publishDate: 2019-09-13T00:00-11:20
tags: [
  strange-loop
]
slug: strange-loop-2019-a-robot-poet-goes-for-a-walk-in-the-park
heroImage: https://about.sourcegraph.com/blog/strange-loop-thumbnail-square-v2.jpg
published: true
---

<div className="container p-0 liveblog-presenters d-flex w-100 text-center">
  <div className="row m-0 w-100">
      <p className=" mr-12 m-0 w-100">
        <span className="liveblog-presenters__name">Em Lazer-Walker</span>
        <a href="https://twitter.com/lazerwalker" title="Twitter"><i className="fa fa-twitter pr-2"></i></a>
        <a href="https://github.com/lazerwalker" title="GitHub"><i className="fa fa-github pr-2"></i></a>
        <a href="https://lazerwalker.com" title="Speaker's site"><i className="fa fa-globe pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

Designing complex, dynamic systems that can produce interesting and aesthetically pleasing art is a very hard problem to solve, even when you're just talking about something as focused as a Twitter bot. What happens when you try to make procgen art that doesn't just exist on the Internet, but actually lives in and interacts with the real world?

---

Em Lazer-Walker's talk is about an art piece, but about all the pieces that led to it, 
including immersive theater, game design, emergence, and more.

The piece that Lazer-Walker made is called ["Computational Flâneur"](https://lazerwalker.com/flaneur.html) 
and was made as part of the <a href="">Come Out and Play
Festival</a> in SF. It was unique in that it was interactive (unlike a Twitter bot) and used
non-traditional inputs to the data (GPS, accelerometer), and it was generative poetry while
you walked through Fort Mason Park.

Lazer-Walker went over the agenda for the talk:

1. Site-specific theatre - Immersive theater, narrative installation, and “joyful, emergent behaviors”
2. Actual act of generating art like this
3. Digital/Physical hybrids

To start the first section, she talks about the theater piece <a href="https://mckittrickhotel.com/sleep-no-more/">Sleep No More</a>, which I have heard of about haven't
seen as yet, which is a site-specific installation. It's super interesting and I encourage you to look into it
as a piece of theater that doesn't involve people staying in one place, or even being instructed to move in an exact way.

Lazer-Walker talks about how the magic in Sleep No More isn't in the theater, per se, but in how you feel
when you debrief about it afterwards, and "the unique and different moments" experienced.

This is when she spoke about emergence: we [programmers] tend to think of these things as small algorithms; and 
the interesting part of Sleep No More is the emergence isn't from something digital or planned, but from the
interaction of humans moving through physical space in their own way.

Lazer-Walker talks about another interesting piece,
<a href="https://soundcloud.com/incredibleworksofart/sets/janet-cardiff">Her Long Black Hair</a> by Janet Cardiff, which is
an audio experience through Central Park. This talk has already convinced me I need to take a trip to New York soon!

Now as to how things are made, Em talks about Char-RNN and very briefly about recurrent neural networks,
referencing [an article](http://karpathy.github.io/2015/05/21/rnn-effectiveness/) and how they can be superior to Markov chains
for generative text. She also mentioned other useful tools: [tracery.io](http://tracery.io), 
[cheapbotsdonequick.com](https://cheapbotsdonequick.com), and referenced Kate Compton's [So you want to build a generator](https://
galaxykate0.tumblr.com/post/139774965871/so-you-want-to-build-a-generator) article. She also mentioned (although not used in 
the project) [gpt-2](https://github.com/openai/gpt-2) as something useful and interesting to look into for training
a model quickly.

Finally, on Em's own project, some initial assumptions didn't turn out as expected.
She thought you would want to use _all_ the data available, but at a certain point, she said, 
“An algorithm that isn’t legible might as well be a random number generator” - that is, if someone 
interacting with the art doesn't have a chance of "getting it", it might as well be random (thus, useless effort).

So, she scoped down her focus. She also talked about the process of geofencing the area (difficult since she 
doesn't live in SF!) as well as how much she lucked out with regards to GPS accuracy in the park being really great.

She talked a little about her process, given that working in real-world spaces has a much more difficult feedback
loop than we might be used to in software.

![Software Testing is Fast! and real-world testing is not](/blog/strange-loop-2019/robot-walk.jpg)

Finally, she closed the talk with "Why Bother?" or briefly talking about the reasoning for this kind of piece -
Em believes that how we use our devices impacts our emotional relationship to them. I wish she'd talked more about this!
I also really wish she had shared some of the poetry from the project in the talk, but [you can check her
site for more information on the project](https://lazerwalker.com/flaneur.html).
