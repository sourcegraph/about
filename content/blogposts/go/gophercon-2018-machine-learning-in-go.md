---
title: 'GopherCon 2018 - Machine Learning in Go'
authors:
  - name: Steven Klassen for the GopherCon Liveblog
publishDate: 2018-08-28T00:00-06:00
tags: [
  "gophercon"
]
slug: gophercon-2018-machine-learning-in-go
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5nOlXCLdhSk6ESWEW8iC24/01978fdff3206c78ad8bee4c0cdfee87/mechanic-tire.jpg
published: true
---

Presenter: [Francesc Campoy Flores](https://www.gophercon.com/agenda/speakers/279063)

Liveblogger: [Steven Klassen](https://twitter.com/mrxinu)

We've all wondered how to use Machine Learning with Go, but what about turning the tables for once? What can Machine Learning do *for* Go? During this presentation, we will discover how different Machine Learning models can help us write better go by predicting from our next character to our next bug!

## Summary

Francesc Campoy has since left Google and now works at `source{d}` (prounounced "sourced"). While he's been there machine learning has been at the forefront of his work.

He breaks the discussion down into 4 challenge areas:

* Challenge 1: Data Retrieval
* Challenge 2: Data Analysis
* Challenge 3: Learning from Source Code
* Challenge 4: What Can We Build?

As he walked us through the steps above, other roadblocks were identified and changing tack allows Francesc and `source{d}` to introduce us to some pretty exciting things that are on the horizon (Rob Pike as a service, anyone?).

---

Consider the lines of code in each of these products:

* Adobe Photoshop - 128 thousand
* Windows 3.1 - 4-5 million
* Apache Open Office - 9 million
* Chrome - 18 million
* Windows XP - 45 million
...
* Ford Truck - 150 million
* Google - 1 _billion_

I don't know about you but the thought of driving something with 150 million opportunities to do it wrong is a harrowing thought. And for anyone who has had to do a code review for someone else can attest to, you don't quite catch everything no matter how many times you've gone through it.

There's a better way.

## Enter: Machine Learning

> The issue is that the tools haven't evolved with the products. - Francesc Campoy

The tools we use now are great for small-scale jobs like building dog houses and editing files (vim got a shout-out) but as the scale increases the tools have to improve. There's just no way to continue to develop at scale without some way of analyzing the code to determine that it's sane.

### On Go, Not With Go

The talk was about using machine learning ON Go code, not with Go code and Francesc offered (in a hushed tone) that it was actually written in Python. If you're interested in seeing Machine Learning done *with* Go he referred of course to the much-loved Just For Func series that he releases on YouTube as often as his schedule allows.

In particular the episodes below reference Machine Learning:

* [justforfunc #34: Plotting Data with gonum/plot (ML4G #1)](https://www.youtube.com/watch?v=ihP7lQivA6M)
* [justforfunc #38: Linear Regression with Gradient Descent (ML4G #2)](https://www.youtube.com/watch?v=ZPd_fKyrX48)

### Natural Language vs. Programming Language

The techniques used to understand humans and their writing can be used to understand code - it looks a lot like natural language. The difference being that if you generate something that's not quite right in natural language we call it art. If you do it with a programming language like Go we call it broken.

Training over the Go standard library, using [charRNN](https://github.com/karpathy/char-rnn) (given n characters, predict the next one) they were able to achieve a 61% accuracy on predictions.

![image](https://user-images.githubusercontent.com/6706/44750338-545c7680-aad2-11e8-8876-8f2e39c8c672.png)

> This is good, but it's not great. - Francesc Campoy

So given that predicting what will come next isn't as precise as it would need to be, what else can we build?

### This Doesn't Look Quite Right, Dave

How many times have you written code and made a mistake that would have been obvious if only the section of code that doesn't look quite right were highlighted? It turns out that this model of the predictable vs. predicted has some exciting applications.

> Imagine having Rob Pike as a service. - Francesc Campoy

With Machine Learning we could have just that. By analyzing all of the code reviews and pull
requests and deltas in our code bases and others it would be possible to highlight areas of our code that don't look quite right.

![image](https://user-images.githubusercontent.com/6706/44750565-fa0fe580-aad2-11e8-85f6-59d9ddfd01c6.png)

The algorithms might not be able to reliably tell you what should go there but they're pretty good at telling you what you've produced isn't like what other code bases have done. And so it might be a good idea to give it another look.

## Are Developers Going Away?

Francesc reassures us that developers will be _empowered_ instead of replaced by this kind of technology and highlights the following things to keep an eye on in the future:

* Automated Style Guide Enforcing
* Bug Prediction (!!!)
* _Automated_ Code Review
* Education

All it all it was a fantastic talk and one that I'm sure we'll be revisiting as these technologies come to fruition.
