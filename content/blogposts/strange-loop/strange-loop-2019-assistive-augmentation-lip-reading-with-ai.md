---
title: "Strange Loop 2019 - Assistive Augmentation: Lip Reading with AI"
description: "In the US alone, approximately 3% of the population (10 million) are either deaf or have moderate to profound hearing loss. This is 3 times as many people than those in wheelchairs yet reasonable disability accommodations for the deaf or hearing impaired only require an ASL (American Sign Language) interpreter in certain circumstances such in official political, legal, education, law enforcement, and employment events and situations. The problem with this is that only a fraction of the functionally deaf (250-500 thousand) speak ASL (also called \"signers\") and situations that have accommodations are few and far in-between anyway so how can the hearing impaired engage with events like the rest of us and especially those that don't have interpreters such as meetups, conferences, and debates."
authors:
  - name: Mel Chua
    url: http://melchua.com
  - name: Ian Smith
publishDate: 2019-09-13T00:00-15:30
tags: [
  strange-loop
]
slug: strange-loop-2019-assistive-augmentation-lip-reading-with-ai
heroImage: https://about.sourcegraph.com/blog/strange-loop-thumbnail-square-v2.jpg
published: true
---

<div className="container p-0 liveblog-presenters d-flex w-100 text-center">
  <div className="row m-0 w-100">
      <p className=" mr-12 m-0 w-100">
        <span className="liveblog-presenters__name">Serg Masis</span>
        <a href="https://github.com/smasis001" target="_blank" title="GitHub"><i className="fa fa-github pr-2"></i></a>
        <a href="https://www.linkedin.com/in/smasis/" target="_blank" title="LinkedIn"><i className="fa fa-linkedin pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

In the US alone, approximately 3% of the population (10 million) are either deaf or have moderate to profound hearing loss. This is 3 times as many people than those in wheelchairs yet reasonable disability accommodations for the deaf or hearing impaired only require an ASL (American Sign Language) interpreter in certain circumstances such in official political, legal, education, law enforcement, and employment events and situations. The problem with this is that only a fraction of the functionally deaf (250-500 thousand) speak ASL (also called \"signers\") and situations that have accommodations are few and far in-between anyway so how can the hearing impaired engage with events like the rest of us and especially those that don't have interpreters such as meetups, conferences, and debates.

---

## Note

This talk was liveblogged by two Deaf attendees (and native lipreaders), Mel Chua and Ian Smith. Commentary is _in italics_ throughout.

## Speaker self-introduction

* Grad student at IIT
* Data scientist at Formlabs
* Web development background

## Problem framing

Speaker: "What if you couldn’t hear me well?" (_Deaf audience members, grinning: A completely hypothetical question, indeed!_)

Hearing loss is a more common problem than most people think. The ADA was passed in 1990, and it (theoretically - not in practice) prohibits discrimination / requires accommodation) for disabled people. However, it’s not always present. What happens with PA systems, theatrical events, etc? Hearing loss is an invisible disability. 3x as many people have hearing loss compared to those who use wheelchairs and canes. (_Note: one Deaf audience member is a wheelchair user and started to laugh good-naturedly at this point._)

Reasonable accommodations for deaf and hard of hearing (DHH) people are not always provided proactively. Even if they were, DHH people often have issues with simple daily interactions, such as at the supermarket when the cashier says something. (_Deaf audience members: Actually, those simple daily interactions are predictable and easy to manage via lipreading if you choose to do that, or via non-auditory/speech means if you'd rather -- pointing, writing, etc. Those are actually the easiest kinds of interactions you can have._)

Misconceptions:

- All deaf people sign - nope!
- All deaf people read lips - they don’t; it’s very difficult. Even professionals are able to detect only 15% of the information via lipreading. (_Deaf linguist in the audience adds: There are various statistics about this out there! But it's a folk statistic, and lip reading varies by speaker, reader, environment, etc._)
- Hearing aids fix deafness - they don’t. (_Deaf audience members: We wholeheartedly agree with this, even if we use hearing aids, cochlear implants, etc. ourselves._)

## Assistive technologies

Some examples of other assistive technologies:
- Finger readers for the blind
- Augmented reality headsets - allow humans (for instance, surgeons) to perform very precise things that they would otherwise not have motor control to do. (_Deaf audience note: an interesting example here that isn’t necessarily made for “disabled people”! Look up the "curb cut effect._)
- Chewable pointers for quadriplegics

Assistive tech for DHH people:
- Captioning - usually not as good as the live captioning happening in this room! (_Deaf attendees: Shout-out to Strange Loop for just captioning talks - this is super helpful to be able to just GO TO TALKS!_)
- Smart caption glasses for movies, etc.
- Assisted listening systems for theatres, etc. (For people with moderate hearing loss, many of whom are elderly.)

Speaker: “We attempted to solve this problem using our own toolset.” (Which was machine learning.)

## Ideal characteristics of such a solution

- Accessible - inexpensive and easy to use
- Immersive - doesn’t distract too much from understanding and enjoyment
- Can separate multiple speakers, identify word emphasis, etc.
- Accurate and able to function in noise - for instance, if there was spontaneous laughter, it wouldn’t throw off the system.

(_Deaf audience: This list seems correct to us._)

Additionally, this would be implemented on readily available technology. The idea is to have an augmented reality app that would run on a phone -- point it at something, and you’d see the camera image with the captions overlaid. Being able to run this software off a regular phone/tablet would be advantageous; there wouldn’t be a need to purchase specialized hardware.

## About machine learning

In order to explain which specific technical domain this talk falls into, the speaker described three nested and increasingly specific domains. The broadest domain is artificial intelligence, which refers fairly generally to “things that enable machines to emulate human behavior.” A subset of that is machine learning, which uses statistical methods to enable machines to improve at what they do -- with the caution that it only learns from the data you give it. A subset of machine learning is deep learning, which can do more complex things than other kinds of machine learning.

## Why lip reading?

(_Deaf popcorn gallery: leans in closer_)

Speech recognition is not unisensory - it uses a lot more senses than just hearing. For speakers, there is haptic feedback where you can physically feel yourself speaking; for audience members, you can see the speaker as they talk and also have that visual channel, and so forth.

Combining both audio and visual data -- the sound and the visual (which isn’t affected by background noise) - might give us greater accuracy, especially in varying noise situations. (_Deaf attendees: Much like human lip readers do - neat!_)

Lipreading and speech recognition have some similar challenges. For instance, the words “meteor,” “meatier,” and “meat eater” sound - and look! - very similar on the lips.

## Long Short Term Memory (LSTM)

A tricky example to disambiguate:

- Example: Michael colored the bedroom wall with crayons
- Example: My call colored the bedroom wall with crayons

Michael and “my call” are homophones. They sound alike, and they look alike on the lips -- how would you distinguish them?

The answer is with what we call “long short term memory” (LSTM). Each section of the network learns from what has happened in the time preceding the data it’s currently processing -- but at the same time, it doesn’t remember that information forever. It uses a probabilistic method to figure out which parts to focus on and which ones to ignore.

## Training the system

In order to train this system, they used 500 hours of TED talks, of which 400 were selected and used for the training. They’re pretty diverse in terms of speaker gender and ethnicity and voice types and so forth, have clear audio and video (good lighting, etc.)

The first step was to get a visual data stream, which required isolating the lips on the video. They took the video and cropped it so that it would be centered on the mouth and scaled it so each image of a mouth consisted of the same number of pixels.

The audio stream also needed to be processed; they used an existing algorithm to select which features of the audio data to focus in on.

The machine learning model then had the video data (of the centered, scaled image of the mouth), the audio, and the transcript of the “correct” answer as a training dataset to work with. Each module in the system has a convolutional neural network (CNN) that runs through the data before it goes into the LSTM. And each module in the system has a (missed this term) that decides what data to continue paying attention to, and which data to discard before passing this on to the next step.

Their training results were in 11.5% character error rate and 17.6% word error rate, which is fairly impressive considering the small dataset. This project (which combined audio and video/lipreading data) performed favorably compared to a BBC project which relied on visual/lipreading data alone.

## Demo

A demo was shown (pre-recorded) with the presenter speaking, which was captured by the computer as “can you read my lips" - they noted that if a human captioner was doing it, they would catch the intonation and add punctuation: “Can you read my lips?” would be written out as a question, as would the exclamation of “Wow!” afterwards.

This was followed by a few demos from the dataset:

- Demo of TEDtalk clip of Angela Duckworth talking about “grit” -- the machine learning reads this accurately. The speaker is slow and clear, doesn’t use slang, and their lips are clearly visible.
- Demo of TEDtalk clip of James Veitch on spam -- the machine learning doesn’t catch most of it. There’s an accent, the speech speed varies, and the prediction off because the speaker is doing something unexpected.
- Demo of another speaker (that the livebloggers couldn't identify) talking about efficiency -- the machine learning catches it up until a new word (“anomalous”) pops up. The machine learning system thinks it said “a normal mouse,” since “anomalous” doesn’t occur enough times in the dataset for the system to learn it.
- Demo of another speaker, where the system catches “fortune 500” as “4 ton 500” -- the computer understands that it’s a number, but not what to do with it.
- Demo of another speaker, who is listing off points in a sequence (as in: 1) xyz, 2) abc)). The system catches the numbers and words accurately, but doesn’t indicate that they’re part of a list -- it can’t recognize that yet.

We’d need a larger training set with annotated data in order to improve this -- the presenter is looking for such datasets, if anyone knows of any!

## Q&A 

- Q: What did you use for the facial recognition?
- A: A piece of open source software from (name I missed) that ran in a JuPyter Notebook.

- Q: Are you trying to get punctuation, inflections, etc. into the model?
- A: Yes, I’m trying to. For instance, commas, “...”, question marks, etc. were tokenized in the hopes the system would find them, but it usually didn’t. In part this is because there isn’t a lip movement that corresponds to that particular symbol.

- Q: What’s the current program runtime?
- A: Maybe half a second?

- Q: What is the eventual goal of the project - for me to be able to sit in the audience and film you and have that get captioned? How far away would people be able to sit?
- A: Cameras are getting more and more high-resolution these days, so hopefully that will help - if you’re far, your phone might get audio data but not good video, but if you’re in the first few rows, this might work. But right now, if I tried to run this on my phone, it would probably lag and maybe crash. The idea is that you’d be able to run this offline, because for instance if someone goes to a meeting in a basement, you’d have connection issues.

- Q: I work for [telecom provider] and we’re trying to make our products more accessible, and one thing we’re investigating is being able to tell what a device’s connectivity is. The idea is that if you have connectivity, you can use it and offload your processing; if you don’t, your phone would switch to running locally.
- A: Yes -- so models would need to be updated, and you wouldn’t want to never have it connect to the internet to update. The ideal would be to have a hybrid solution.
