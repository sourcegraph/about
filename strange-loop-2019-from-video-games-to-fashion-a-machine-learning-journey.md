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

From Video Games to Fashion: a Machine Learning Journey
 
One of the most difficult talks for her to prepare given her recent career background. 
 
Solving practically sequential forecasting problems
 
Joined the German weather service to work on big data predictions. Atmospheric dynamics very sensitive I initial conditions. Need to select the right amount of data (tons available) quickly. 
 
2014 to Japan to work with satellite data. Change. Move to other fields. 
 
Last four years working on predicting player behavior. Video games. 
 
This summer changed career to Inditex—AI for fashion. 
 
Video game data provides great amounts of player data to understand human behavior. Traditionally had not been properly using the data to solve player needs. 
 
Provided info in an operational manner, what they will like from behavior so far. 
 
Fashion
Cambridge Analutica discovered fashion and music preferences were valuable for predicting political affiliation
 
Inditex—covers whole cycle of fashion, production, distribution etc. Complex supply chains. 
 
Every piece of unsold clothes is an error of matching supply and demand. 
 
Full track of every item from production to sale. 
 
Slide
Balance art and science
Side
 
Working with game designers for four years—biggest challenge is working with humans. 
 
Often work hard to get knowledge you already have , but don’t want to see conflicting data. 
 
Slide
Challenges
 
Slide
Probabilistic forecasting
Key to both fields
 
Slide
Slide
2 graphs from Japanese rpg 
Sales and playtime. Want to balance
 
Slide
Auto régressive
Slide
Box and Jenkins models
1976
Still one of the most used methods for solving forecasting problems
Predict future based on the past 
 
Slide 
30 day forecast 
Aroma outperforms the rest
 
Slide
Forecasting horizon
 
Slide
Pretty optimistic about deepAR
Récurrent neural network able to learn from many time series
Able to do individual predictions for every time series—used on Amazon
 
Slide
Goal
Learns automatically
Slide
DeepAR
Slide
Model
Model conditional distribution of every time series. 
Slide
Output of the network is feedback for next step for the training set and the forecast
 
Slide
Compare deep ar and arima 
Slide
Arima works better but deep AR is much easier to start with less training data
 
Slide 
Harder to see indliencw
 
Slide
Forecasting with arima
Pros and cons
 
Slide
Forecasting with deep ar
 
Slide
Recommendationsysrems
Slide
Maximize retention
Want probabilité of next item purchased — all play styles
Both industries have challenge with time—time is important
Slide
Too many items
Clustering
Then apply ML model to predict what they will purchase next
Collaborative filter for every cluster
 
Slide
Dimensionalitu reduction
See what items are similar
Slide
Ensemble learning
Predict most likely clusters
Very randomized trees
Extremely efficient and not biased results
Slide
Collaborative feedback
Slide
Filtering
 
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
