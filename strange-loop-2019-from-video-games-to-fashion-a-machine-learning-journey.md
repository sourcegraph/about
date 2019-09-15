---
title: "Strange Loop 2019 - From Video Games to Fashion: a Machine Learning Journey"
description: "Gaming is a rapidly growing industry. Players generate extremely rich datasets that record each and every in-game action, social interaction, ad view or purchase. Because of the constant and continued relationship between player and game, player behavioral data constitutes a unique source of information on human behavior: a simplified dynamic system that replicates real life. In this talk I will discuss the common challenges to both industries and the emergency of models that scale to really big datasets and manage to capture various kinds of consumer tastes and behaviors. Because of the importance of the temporal dimension, models based on CNN, LSTM or DeepAR play a crucial role to push back this new technological frontier. I will review how these techniques can be used to create customized events and provide personalized predictions."
author: Lisa Vogt
authorUrl: https://twitter.com/lisavogtsf
publishDate: 2019-09-14T00:00-11:20
tags: [
  strange-loop
]
slug: strange-loop-2019-from-video-games-to-fashion-a-machine-learning-journey
heroImage: /blog/strange-loop-thumbnail-square-v2.jpg
published: false
---

<div class="container p-0 liveblog-presenters">
  <div class="row m-0">
      <p class=" mr-12 m-0">
        <span class="liveblog-presenters__name">Africa Perianez</span>
        <a href="https://twitter.com/aperianez" target="_blank" title="Twitter"><i class="fa fa-twitter pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

Gaming is a rapidly growing industry. Players generate extremely rich datasets that record each and every in-game action, social interaction, ad view or purchase. Because of the constant and continued relationship between player and game, player behavioral data constitutes a unique source of information on human behavior: a simplified dynamic system that replicates real life. In this talk I will discuss the common challenges to both industries and the emergency of models that scale to really big datasets and manage to capture various kinds of consumer tastes and behaviors. Because of the importance of the temporal dimension, models based on CNN, LSTM or DeepAR play a crucial role to push back this new technological frontier. I will review how these techniques can be used to create customized events and provide personalized predictions.

---
![From Video Games to Fashion: a Machine Learning Journey, title slide](website/static/blog/strange-loop-2019/strange-loop-perianez-title.jpg)

Note: to get the most out of this talk, one would need a strong background in big data analysis, modeling and forecasting. For technical details, please keep an eye out for the slides to be published. This live blog will be geared toward big data newcomers.

As she opened the talk, Perianez noted this was one of the most difficult talks for her to prepare given her recent career shifts. Coming from big data work with CERN, the German weather service and Japanese satellite data, Perianez spent 2015-2019 applying her skills in the realm of video games--analyzing and predicting player behavior. However in the last year she has begun working at Inditex, AI for fashion, and this has brought new challenges to how she approaches data science and predictive forecasting.

![career shifts 2005-2019](website/static/blog/strange-loop-2019/strange-loop-perianez-careers.jpg)

Inditex covers whole cycle of fashion, production, distribution, entailing the tracking of complex supply chains. Every piece of unsold clothes is an error of matching supply and demand. To improve their predictions, Inditex keeps track of every single item from production to sale. 

![man is a deterministic device thrown into a probalistic Universe](website/static/blog/strange-loop-2019/strange-loop-perianez-deterministic)

Still, the greatest challenge is working with humans.
 
A classic model for forecasting is Autoregressive--such as the Autoregressive Integrated Moving Average (ARIMA). While this algorithm dates back to the Box and Jenkins work from 1976, it is still one of the most used methods for predicting the future based on the past. 

![Forecasting with ARIMA](website/static/blog/strange-loop-2019/strange-loop-perianez-arima.jpg)

![Forecasting with DeepAR](website/static/blog/strange-loop-2019/strange-loop-perianez-deepar.jpg)

While the specific predictions in video games and fashion differ--predicting player purchases of in-game items vs. consumer purchases of clothing items--they also have much in common, particularly in terms of the role of probalistic forecasting. Perianez gave an extensive breakdown of how two specific modeling systems--ARIMA and DeepAR--performed across her work. DeepAR is promising, a new product out of Amazon, but it is a third-party black box, which has some drawbacks.
 

Slide 
Production
Slide
Workflow
Dealing with every click, lots of data, done in spark
Slide 
Overall system
Cassandra db
Slide
Main challenges
Many challenges scalability
Most important communication between data engineers and data scientists 
Compromise tween goals
 
Slide
Book
Slide 
Thank you



<!-- Note on images
  Images (e.g. my_image.jpg) should be put in the `website/static/blog/strange-loop-2019` directory, with the path to the image in your post being `/blog/strange-loop-2019/my_image.jpg`. If you'd rather host the images somewhere else for ease of use, that's fine too.

  Please also try to keep your images to a reasonable size by:
    - Using JPEG compression, unless image is mostly solid color 
    - JPEG compression set between 60%-80%
    - Resizing the image to be no wider then 750px
    - If PNG, use a tool like ImageOptim (https://imageoptim.com/mac) to optimize the file size

  I suggest re-sizing and compressing all the images in one batch as a last step.
-->  
