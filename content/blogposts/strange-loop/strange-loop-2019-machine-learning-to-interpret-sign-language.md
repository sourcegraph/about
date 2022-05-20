---
title: "Strange Loop 2019 - Machine learning to interpret sign language"
description: "Instead of just teaching Deaf people how to get along with the rest of the world and understand them, why don't we make an effort to understand them and their language via technology?! In this talk we will learn how to use machine learning to interpret sign language."
authors:
  - name: Mel Chua
    url: http://melchua.com/
publishDate: 2019-09-14T00:00-14:30
tags: [
  strange-loop
]
slug: strange-loop-2019-machine-learning-to-interpret-sign-language
heroImage: https://about.sourcegraph.com/blog/strange-loop-thumbnail-square-v2.jpg
published: true
---

<div className="container p-0 liveblog-presenters d-flex w-100 text-center">
  <div className="row m-0 w-100">
      <p className=" mr-12 m-0 w-100">
        <span className="liveblog-presenters__name">Shagufta Gurmukhdas</span>
        <a href="https://twitter.com/shaguftamethwan" target="_blank" title="Twitter"><i className="fa fa-twitter pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

Instead of just teaching Deaf people how to get along with the rest of the world and understand them, why don't we make an effort to understand them and their language via technology?! In this talk we will learn how to use machine learning to interpret sign language.

---

## The problem that exists

Gestures: composed of hand posture, motion, and position with respect to each other, body parts, objects, etc.

A bit about signed languages:

- Fingerspelling: written language spelled out
- Signed speech - signs for individual words, used in spoken language order
- Sign language - the language of the Deaf, different from spoken languages and variant per country rather than universal/worldwide

India has a shortage of sign language interpreters - only about 250 certified people in the entire country, for millions of d/Deaf people.

There are parallels between signed and spoken languages in terms of machine recognition. Both are full natural languages and have all the complexities of such. However, signed language research didn't start until the 1960's, so it is newer.

Signed languages have some aspects spoken languages don't have, such as facial expressions, signing speed as a modifier of verb meaning, and... well, three dimensions. You need to deal with lighting, differences in pose and camera angle, etc. Various attempts to solve this with multiple cameras, gloves, etc. have been tried. There have also been various attempts to develop annotation systems that transcribe signed languages and otherwise represent them in 2D writing.

## How technology can resolve it

Convolutional neural networks (CNNs) are a type of feed-forward neural network inspired by animal vision. As data flows from one layer to the next, it is progressively analyzed at higher and higher levels. Recurrent neural networks (RNN) resemble lists, and also cascade data forward. Exploding and vanishing gradients are an issue that RNNs amplify because they layer so many things atop each other. 

This project used a RNN model with Long Short Term Memory (LSTM) units. CNNs are used for spatial features, and RNNs for temporal ones.

_This was the end of the talk - the speaker offered to take questions outside or over Slack._
