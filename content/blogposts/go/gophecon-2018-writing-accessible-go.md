---
title: 'GopherCon 2018 - Writing Accessible Go'
authors:
  - name: William Kennedy for the GopherCon Liveblog
publishDate: 2018-08-29T00:00-06:00
tags: [
  "gophercon"
]
slug: gophecon-2018-writing-accessible-go
description: 'Julia spoke to the importance of writing code that was accessible to all developers. She shared the story of her disability and how it affects her ability to read and write code. She provided examples of how her vision is affected and the difficulties of the existing tooling she uses. Finally she provided suggestions to help make code more readable for everyone.'
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5Oj3acpp7yysQg04W2AW4A/a93d79c10ad903d3902f6b6d8707973a/mechanic-tire-2.jpg
published: true
---

Presenter: [Julia Ferraioli](https://www.gophercon.com/agenda/speakers/279050)

Liveblogger: [William Kennedy](https://twitter.com/goinggodotnet)

Title Graphic: [Amy Chen](https://twitter.com/TheAmyCode)

![image](https://user-images.githubusercontent.com/1646931/44930115-249bb180-ad12-11e8-821f-29bb8bb9fef7.png)


## Summary

Julia spoke to the importance of writing code that was accessible to all developers. She shared the story of her disability and how it affects her ability to read and write code. She provided examples of how her vision is affected and the difficulties of the existing tooling she uses. Finally she provided suggestions to help make code more readable for everyone.

---

## Introduction

Julia works on the Google open source team where she writes code for people who work on open source. She is also a stubborn person which means that she won’t settle and is constantly trying new things or looking for better ways to do things. At the same time, working to teach others to do the same.

## Her Disability

When her vision started to decline about two year ago, she experienced moments of not being able to see things clearly. There was no way to predict when it would happen or for how long. The odd thing about these intermittent episodes was not everything she saw was blurry, just spots in her vision were blurry. This meant when it happened, she needed to try to focus on the spots that were clear. But this really limited the area of things she could see.

Julia showed a simulation of these intermittent episodes by providing a picture that had clear and blurry spots on it.

She decided there needed to be a way to still be productive when this happened. So she tried a few things. She got a new high end monitor, bought fancy glasses and played with the accessibility tools in her operating system. Nothing really worked primarily because her brain was the problem, this is a biological nightmare.

## What Is A Disability

Julia is disabled and this is an uncomfortable thing to talk about. It’s important to understand what a disability is. The World Health Organization (WHO) defines a disability as:

_“complex phenomenon, reflecting the interaction between features of a person’s body and features of the society in which he or she lives.”_

The definition is describing the idea of a “gap” between the person with the disability and the society in which they live in. It might not be well know but 15% of the world's population lives with a disability.

## What Tools Are Available

To show how cumbersome and difficult it is to use the voice over accessibility feature of the operating system, Julia provided a 40 second demo, in this demo we could here the code being said by the computer. It was slow and tedious. Especially since new lines were being spoken. From this tools perspective, a new line was a line of code. Starting from package main, with two imports and a main function, after 37 seconds the voice was finally talking about the code inside the main function.

What we were listening to was also faster than normal and trust me, very annoying to listen to. What’s worse, is trying to debug code this way is very difficult. It could take a long time to identify you missed a comma or colon somewhere. In the end, the accessibility features she had access to was not enough to allow her to be effective reading and writing code.

## Hard-Earned Lessons

There are things that everyone can do that will make code easier to read for everyone. These suggestion do allow the voice overs to be more effective for those who need to use it.

**Group code blocks logically**
Less lines of code isn’t always more for readability. Sometimes doing less per line of code can help paint a better mental model of the logic.

**Keep names short**
For anyone who is listening to code being read this is especially important. It allows for easier listening and navigating through the code.

**Make names meaningful**
A variable based on a vector type should ignore what type it is. A variable named “total” is better than “tvec”. Not only is using “total” more meaningful but hearing the computer say “tvec” adds cognitive load to your ability to remember the logic.

**Use pronounceable names**
This goes with making names meaningful but it also adds another component. One day she kept hearing the computer say, “jeet-hu”. She kept playing that over and over again, “jeet-hu”. Eventually she realized the word being said was “github”. The idea here is to be careful with concatenating words that the computer will have a hard time pronouncing.

**Use new lines intentionally**
When voice is your guide, a newline is a line of code. The word “newline” will be spoken. It’s important to treat newlines like new paragraphs. Be clear when things are changing (use a newline) or not.

**Be Consistent**
A team needs to decide on styles early, have them documents and follow them. If you find a better way to do something and change the style, change as much of the code base as possible to reflect the change. If not, someone new will start to see the different styles and won’t have the context to understand why. Most important, enforce the styles and teach to them during code reviews.

## Curb Cut Effect

Why should anyone follow these guidelines Julia presented? You can’t have an attitude that since no one is disabled on your team, you don’t need to do this. The reality is you can’t always look at a person and know if they are disabled. There isn’t always an outward sign. This is a personal situation for the person, they may not want to talk about it.

Disabilities are not always “on” situations. In the case of Julia, it is very much an “on/off” situation. Some days she is very productive and other days she isn’t. In the end, these guidelines will benefit everyone, not just those who are disabled.

Cities began to put in curb cuts with the pads at different intersections to help disabled people move around the cities. What the cities found out is, this change helped everyone. When something built for one population helps others this is called the Curb Cut Effect.

Julia’s guidelines are really Code Curb Cuts, because they help everyone. Her guidelines:
* Helps the code to be more maintainable
* Helps with better onboarding
* Helps make things more inclusive for all developers

## Conclusion

Writing accessible Go is about three things. Working towards organizing code to be more logical with greater intent. Naming things that are more pronounceable. Being consistent with everything you do. Going back to refactor code when styles are changing to be consistent over longer periods of time,

* Organize code logical be intent
* Pronounceable names
* Be consistent

Here are links to learn more:

[Python code styles for blind developers](https://www.youtube.com/watch?v=bTAFl8P2DkE&feature=youtu.be&t=22m59s)
[EmacSpeak](https://github.com/tvraman/emacspeak)
[The tools of a blind programmer](https://www.parhamdoustdar.com/2016/04/03/tools-of-blind-programmer/)
[Curb Cuts](https://99percentinvisible.org/episde/curb-cuts/)
