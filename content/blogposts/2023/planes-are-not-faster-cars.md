---
title: Planes aren't faster cars
authors:
  - name: Chris Pine
    url: https://github.com/chrispine
publishDate: 2023-02-24T10:00-07:00
description: 'What’s exciting about time-saving improvements isn’t the time savings, it’s how they make the impossible become possible.'
tags: [blog]
slug: 'planes-are-not-faster-cars'
published: true
---

It’s hard for me to truly imagine life without cars. Even though I’ve spent most of my adult life in cities where I could get by without _owning_ a car, I still _used_ cars all the time: taxis, buses (basically just shared limousines, right?), Car2Go, Lyft, etc. How else could I get across town in a reasonable amount of time?

But even so, cars have their limits. They only go so fast. You have to drive them on roads. In particular, I can’t get from Portland to Paris in a car. That’s what airplanes are for.

Airplanes! What incredible time savers! They are about 10 times faster than a car, so now getting downtown will take 1/10th as long! Now, instead of driving an hour and a half to the coast, I can get there in under 10 minutes! Right?

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/blog-well-yes-but-no.jpeg"
  alt="Well yes, but actually no"
/>


For now let’s set aside the high setup/teardown time of flying (getting to the airport, security, boarding, why are you making me check this bag when it clearly fits in the overhead bin, deboarding, passport control, more security maybe, now I have to go to baggage claim because they made me check my bag, leaving the airport), but we’ll return to that.

The real value of an airplane is almost never about how much driving time will be saved. In some cases it might be; personally, this happens when the destination is about 8-12 hours away, places I _might_ actually drive to, but might choose to fly to instead. In those instances, flying saves time!

But the real value, the magical impossibility that flying makes possible, is in taking me to places _I would never drive to_ (or, if there’s an ocean in the way, cannot drive to). I’m _never_ going to drive from Portland to NYC. So this is the wrong model:


<table>
  <tr>
   <td>Drive to NYC</td>
   <td>Fly to NYC</td>
   <td>Time saved</td>
  </tr>
  <tr>
   <td>43 hours</td>
   <td>5 hours</td>
   <td>38 hours</td>
  </tr>
</table>


(I’m leaving out setup/teardown for flying, and also stopping for food/gas/sleep/etc while driving, but I already said this was the wrong model, so I don’t care how accurate it is.)

Instead, this is how to think about it:

<table>
  <tr>
   <td>Drive to NYC</td>
   <td>Fly to NYC</td>
   <td>Time saved</td>
  </tr>
  <tr>
   <td>NOPE</td>
   <td>5 hours</td>
   <td>???</td>
  </tr>
</table>


Infinity hours? Or zero? Arguably, flying actually _costs_ time compared to driving because I just wouldn’t drive that distance at all (so zero hours spent). But time saved is missing the point. The point is that _I actually went to NYC_.


> **If the time cost is so large that you’re never going to pay it, time-saving improvements are actually about making the effectively-impossible become possible.**

Now back to those setup/teardown costs I mentioned. Let’s set the dial back to my early career in the (cough) late 1900s. The only programming language I really knew was C/C++. But Ruby was just hitting North America, and for me it was love at first sight.

It was just so _easy!_ I could get the same thing done in roughly 1/10th the number of lines of code! (Yes, it ran 100x slower, but even 1900s computers were so fast that it often didn’t matter.) Very impressive time savings!

But that wasn’t the real magic. The real magic was that, without the setup cost of creating a new project (makefiles or project files, compiler settings, where is this going to live, etc), a whole new realm of _simple_ problems opened up!

In Ruby, you don’t even need to open your text editor if the program is small enough; just pass the code into the interpreter on the command line. Like I would literally _never_ write a C program to tell me what time it will be in a million seconds. In Ruby:


```
➤  ruby -e 'p Time.now; p Time.now + 1e6;'
2022-11-09 12:33:07.18994 -0800
2022-11-21 02:19:47.189964 -0800
```


I thought of a question I could answer with code, wrote the code, got the answer — in just a few _seconds_.

How much time did I save compared to writing this in C? It’s irrelevant: I would never have bothered writing something so trivial in C. The magic of Ruby wasn’t in the time saved. The magic was in the parts of my world that opened up. Suddenly, I could go from question-to-code-to-answer in just a few seconds!

Both for the very large things (travel to distant cities) and for the very small things (simple questions I have where the setup cost just wasn’t going to be worth it), the principle is the same:


> **If the time cost is so large that you’re never going to pay it, time-saving improvements are actually about making the effectively-impossible become possible.**

So now let’s talk about one of my favorite topics: making code changes at scale! (No surprise there, as I’m on the [Batch Changes](https://docs.sourcegraph.com/batch_changes) [team](https://handbook.sourcegraph.com/departments/engineering/teams/batch-changes/).) Before coming to Sourcegraph and joining Batch Changes, I was responsible for making a small change in about 40 repos owned by about 30 teams. This process took me _6 weeks!_ It was horrible, and I hated all of it.

If I’d had Batch Changes, I could have finished that task in days instead of weeks. Pretty good time savings, right?

(Come on, you know where this is going.)

The amount of time you save by using Batch Changes is not the interesting part of this. We even show you estimates of the amount of time saved by using Batch Changes. But much like the “???” above, it’s kind of glossing over the most important point: Batch Changes allows you to make changes to hundreds or thousands of repos! You aren’t actually saving time (that you would never have spent); you are _spending_ time in order to make the (previously) impossible become possible.

Literally _every_ time-saving device does this:

* Electric kettle boils water super fast? Yes, it saves time, but now I actually drink tea! The stove-top kettle just took too long.
* New bus line means I can get to that food-cart pod faster? Yes, but I never actually went to that food-cart pod before, because it was too hard to get to.
* Microwave oven cooks food faster? Yes, but we don’t make the same foods faster in a microwave; the much bigger deal is that it changed how we eat! (For better or for worse.)
* With our InstantPot, we can make wild rice in a reasonable amount of time. But how often did we used to make wild rice? Approximately literally never.

And these are just the most obvious food-related examples off the top of my head. (I may or may not be really hungry right now.) In every other (non-food-related domain), it’s the same:

> **What’s exciting about time-saving improvements isn’t the time savings, it’s how they make the impossible become possible.**
