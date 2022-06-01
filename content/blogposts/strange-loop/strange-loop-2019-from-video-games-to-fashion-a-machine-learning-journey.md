---
title: "Strange Loop 2019 - From Video Games to Fashion: a Machine Learning Journey"
description: "Gaming is a rapidly growing industry. Players generate extremely rich datasets that record each and every in-game action, social interaction, ad view or purchase. Because of the constant and continued relationship between player and game, player behavioral data constitutes a unique source of information on human behavior: a simplified dynamic system that replicates real life. In this talk I will discuss the common challenges to both industries and the emergency of models that scale to really big datasets and manage to capture various kinds of consumer tastes and behaviors. Because of the importance of the temporal dimension, models based on CNN, LSTM or DeepAR play a crucial role to push back this new technological frontier. I will review how these techniques can be used to create customized events and provide personalized predictions."
authors:
  - name: Lisa Vogt
    url: https://twitter.com/lisavogtsf
publishDate: 2019-09-14T00:00-11:20
tags: [
  strange-loop
]
slug: strange-loop-2019-from-video-games-to-fashion-a-machine-learning-journey
heroImage: /blog/strange-loop-thumbnail-square-v2.jpg
published: true
---

<div className="container p-0 liveblog-presenters d-flex w-100 text-center">
  <div className="row m-0 w-100">
      <p className=" mr-12 m-0 w-100">
        <span className="liveblog-presenters__name">Africa Perianez</span>
        <a href="https://twitter.com/aperianez" target="_blank" title="Twitter"><i className="fa fa-twitter pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

Gaming is a rapidly growing industry. Players generate extremely rich datasets that record each and every in-game action, social interaction, ad view or purchase. Because of the constant and continued relationship between player and game, player behavioral data constitutes a unique source of information on human behavior: a simplified dynamic system that replicates real life. In this talk I will discuss the common challenges to both industries and the emergency of models that scale to really big datasets and manage to capture various kinds of consumer tastes and behaviors. Because of the importance of the temporal dimension, models based on CNN, LSTM or DeepAR play a crucial role to push back this new technological frontier. I will review how these techniques can be used to create customized events and provide personalized predictions.

---
![From Video Games to Fashion: a Machine Learning Journey, title slide](/blog/strange-loop-2019/strange-loop-perianez-title.jpg)

Dr. África Periáñez has traced a career from scientist to data scientist, including a stint as a CEO along the way, but her focus for the last few years has been probabilistic forecasting.  Having recently made a dramatic shift between industries--from video games to fashion--Periáñez noted that this was one of the most difficult talks for her to prepare. While she has continued in the practice of predictive forecasting, her work is now in a completely new context. Earlier in her career Periáñez worked with academia and atmospheric data sets at CERN and the German weather service. She then moved into the field of video games, where she spent 2015-2019 analyzing and predicting player behavior. 

![career shifts 2005-2019](/blog/strange-loop-2019/strange-loop-perianez-careers.jpg)

In the last year Periáñez has begun working at Inditex, AI for fashion. Inditex covers whole cycle of fashion, production, distribution, entailing the tracking of complex supply chains. Every piece of unsold clothes is an error of matching supply and demand, so improve their predictions, Inditex keeps track of every single item from production to sale.

### Man is a deterministic device thrown into a probabilistic Universe
![man is a deterministic device thrown into a probalistic Universe](/blog/strange-loop-2019/strange-loop-perianez-deterministic.jpg)

Periáñez quotes from Amos Tversky and Daniel Kahneman to situate her talk.  "People predict very little and explain everything.... People often work hard to obtain information they already have And avoid new knowledge. Man is a deterministic device thrown into a probabilistic Universe.... Everything that has already happened must have been inevitable." 

In other words, regardless of the successful advances of our models, humans are still the hardest problem in machine learning.

### Challenges
![Challenges of Fashion vs Video games](/blog/strange-loop-2019/strange-loop-perianez-challenges.jpg)

For fashion, the central forecasting challenge is Inventory Management. "Fashion products have a short-life-cycle with highly volatile demand uncertainty. This uncertainty leads to challenges in managing inventory, as matching supply and demand is always difficult in the fashion industry."

For video games, the central forecasting challenge is Event Optimization. "Video games evolve as players interact with the game, so being able to foresee player experience would help to ensure a successful game development.  Game developers need to evaluate beforehand the impact of in=game events. Simulation optimization of these events is crucial to increase player engagement and maximize monetization."

### Models Compared

While the specific predictions in video games and fashion differ--predicting player purchases of in-game items vs. consumer purchases of clothing items--they also have much in common, particularly in terms of the role of probalistic forecasting.

Periáñez gave an extensive breakdown of how two specific modeling systems--ARIMA and DeepAR--performed across her work. DeepAR is promising, a new product out of Amazon, but it is a third-party black box, which has some drawbacks.

![AR (Autoregressive)](/blog/strange-loop-2019/strange-loop-perianez-ar.jpg)
 
"In an autogregression model, we forecast the variable of interest using a linear combination of past values of the variable.  The term autoregression indicates that it is a regression of the variable against itself."

A classic model for forecasting is Autoregressive--such as the Autoregressive Integrated Moving Average (ARIMA). While this algorithm dates back to the Box and Jenkins work from 1976, it is still one of the most used methods for predicting the future based on the past. 

![Forecasting with ARIMA](/blog/strange-loop-2019/strange-loop-perianez-arima.jpg)

![Forecasting with DeepAR](/blog/strange-loop-2019/strange-loop-perianez-deepar.jpg) 

For a more thorough exploration of these models and how Periáñez and her team implemented them in various contexts, please watch the [video of this Strange Loop talk on YouTube](https://www.youtube.com/watch?v=YgMxzMvjIQc).

### Main Challenges in Summary

![Main Challenges](/blog/strange-loop-2019/strange-loop-perianez-main-challenges.jpg) 

The main challenges of Periáñez's recent work have been:

* Features can be non-trivial
* Data cleaning
* Performance tuning (OOM etc..)
* Spark testing and research models validation

Despite this, perhaps the greatest challenge she found was communication between Data Engineers and Data Scientists.  With competing priorities and complementary skill sets, the groups need to work hard to stay aligned.

### Conclusions

![Superforecasting](/blog/strange-loop-2019/strange-loop-perianez-quote-2.jpg) 

Quoting "Superforecasting: The Art and Science of Prediction," by Philip E. Tetlock and Dan Gardner: "The Point is now indisputable: when you have a well-validated statistical algorithm, *use it*."

We have an array of excellent tools at our disposal, and now we need to apply them appropriately. We must make sure we stay focused on shared goals throughout the process of bringing the power of machine learning and probabilistic forecasting to an industry, whether fashion, video games, or some other field.
