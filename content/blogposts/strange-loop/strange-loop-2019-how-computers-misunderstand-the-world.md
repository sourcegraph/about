---
title: "Strange Loop 2019 - How Computers Misunderstand the World"
description: "AI offers so many exciting possibilities for campuses, corporations, and communities. However, as we look to the future, we must keep in mind that technology has fundamental limits and AI is not a magic bullet that solves all social problems. In this talk, author and professor Meredith Broussard looks at the inner workings and outer limits of AI and argues why we should never assume that computers get everything right. Making a case against \"techno-chauvisnism\" - the belief that technology is always the superior solution - Broussard looks at why self-driving cars don't actually work and why a digital \"utopia\" will still harbor the social problems we experience today. She explores how understanding the limits of what we can do with technology allows us to make better choices about what we should do with technology to make the world better for everyone."
authors:
  - name: Rainya Mosher
    url: https://www.linkedin.com/in/rainyamosher/
publishDate: 2019-09-14T00:00-09:10
tags: [
  strange-loop
]
slug: strange-loop-2019-how-computers-misunderstand-the-world
heroImage: https://about.sourcegraph.com/blog/strange-loop-thumbnail-square-v2.jpg
published: true
---

<div className="container p-0 liveblog-presenters d-flex w-100 text-center">
  <div className="row m-0 w-100">
      <p className=" mr-12 m-0 w-100">
        <span className="liveblog-presenters__name">Meredith Broussard</span>
        <a href="https://twitter.com/merbroussard" target="_blank" title="Twitter"><i className="fa fa-twitter pr-2"></i></a>
        <a href="http://meredithbroussard.com/" target="_blank" title="Speaker's site"><i className="fa fa-globe pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

AI offers so many exciting possibilities for campuses, corporations, and communities. However, as we look to the future, we must keep in mind that technology has fundamental limits and AI is not a magic bullet that solves all social problems. In this talk, author and professor Meredith Broussard looks at the inner workings and outer limits of AI and argues why we should never assume that computers get everything right. Making a case against \"techno-chauvisnism\" - the belief that technology is always the superior solution - Broussard looks at why self-driving cars don't actually work and why a digital \"utopia\" will still harbor the social problems we experience today. She explores how understanding the limits of what we can do with technology allows us to make better choices about what we should do with technology to make the world better for everyone.

---

### Summary

In her StrangeLoop Conference 2019 keynote, Meredith Broussard, a data journalism professor at NYU and author of _Artificial Unintelligence: How Computers Misunderstand the World_, challenges our pre-conceived notions of what "AI" means. She introduces the concept of technochauvinism, the pervasive idea embedded in our collective culture that technology is superior to people. Instead of accepting this view, Meredith asks us to consider what we _should_ do with technology, not only what we _can_ do with technology. As we design tech as part of our everyday work and lives, her approach invites us to think of the world as it is, as it should be, and then ask how we can make it better. During the day two opening session, Meredith connected many topics, including:

- defining artificial intelligence
- applying machine learning to the Titanic dataset to draw parallels to modern scenarios
- highlighting the limits of data (yep, there are limits)
- explaining the origins of technochauvinism and bias in computer science
- providing concrete examples of how unconscious bias gets embedded into the technology we create
- giving a list of books and organizations to keep us well informed

Ultimately, Meredith presented how she pushes back on the AI fantasy Hollywood has spun and chooses to focus on making the _real_ world a better. As technologists, we are all able to do the same – sometimes even by creating technology!

See all books mentioned in the keynote and referenced in this post on Rainya's StrangeLoop Keynote shelf at [Goodreads][1].

## Defining AI

There is confusion among the general public about what Artificial Intelligence (AI) is and what it isn't. Hollywood-created images of advanced (menacing) synthetic beings are etched deeply into our subconscious and while wonderful, they are imaginary. This is not AI!

AI is a branch of computer science the way algebra is a branch of mathematics. There are many subfields in AI, such as natural language processing (NLP), but machine learning (ML) is currently the most popular subfield. This has led to _linguistic confusion_ where people say "I'm using AI for my business" when they are really talking about using ML.

How can we be better as scientists about what AI is and isn't?

On some level, the phrase"machine learning" evokes images of a tiny brain. ML is not the same as human learning. There are few uniform definitions. One might be "ML is computational statistics on steroids." A more complete definition is from Carnegie Melon's Tom M. Mitchell:

"We say that a machine learns with respect to a particular task T, performance metric P, and type of experience E, if the system reliably improves its performance P at task T, following experience E. Depending on how we specify T, P, and E, the learning task might also be called by names such as data mining, autonomous discovery, database updating, programming by example, etc." Original paper: [Discipline of Machine Learning][2]

THIS KIND OF LEARNING DOES _NOT_ IMPLY INTELLIGENCE! "Learning" as a word has multiple meanings that get confused in common conversations. Understanding this is a key piece to appropriately defining AI.

### Applying ML

Leveraging machine learning and the Titanic dataset, we can predict who lives and who dies in the Titanic disaster. The data – with columns that include passenger class, name, sex, age, ticket price, and other data points – can be used to build a model that will predict the binary value in the "survived" column.

For the Titanic data, there are inputs and an output and inside is some "stuff", very similar to the function machines many of us may have used in grade school. However, in ML, the "stuff"; is math! The model can be discussed in terms of "gears" and "stuff", but it can also be abstracted to a black box. With the Titanic data as an input, the model is trained on a subset of data with a known survivor value. Then the newly trained model is applied on a set of data where the survived value is not known and used to predict the binary outcome.

Why would we do something like this in the real world? As an example, if an insurance company sells policies for boat trips, it would be really great to have a model that predicts if someone would survive a boating accident. The insurance company wants to maximize revenue and charge a higher rate for people who are more likely to die (and have their policy paid out) compared to someone who is very likely to survive. This makes sense from a purely financial point of view.

However, this approach doesn't make sense socially. When looking at the Titanic data, the mathematical value that matters the most is _passenger class_. The data may make it seem the cost of the ticket is connected to the outcome. However, the real reason these passenger classes were more likely to die is second and third class passengers were locked in their corridors until the first class passengers got to the life boats… _which is horrific._ There is no way from the _data_ to understand the tragedy, this really terrible decision (to lock gates) leading to this horrific outcome for certain populations and not others. If an insurance decision was made based solely on this data, does it feel fair? No. It doesn't.

**There are limits to what we can do with data.** - Meredith Broussard

### Limits of Data

ML prediction is about quantitative understanding of the world. We can use qualitative understanding alongside it to improve our understanding, as in the story of Jack and Milton, first class friends on the Titanic. When the disaster struck, they both swung into action. They both were heroic. They both loaded people on the life boats and they both volunteered to stay as the life boats were rowing away. Realizing their only chance of survival was to jump into the ocean and swim to the life boats, Milton volunteered to go first. He jumped straight down from the edge of the ship and was lost to the ocean. Jack went second, said a prayer, and jumped as far out from the ship as he could. He managed to survive because he changed his approach to the jump from the ship. That was the only real difference – how they jumped from the ship. This is not a difference we can reflect in the  data or capture mathematically. It is a qualitative data point which really mattered to survival, even though it could not be captured quantitatively.

**Not everything that counts can be counted, and not everything that can be counted counts.** - Meredith Broussard

### Technochauvinism

Technochauvinism is the idea that technology is superior to people. Instead of accepting technochauvinism as "the way it is", argue instead, "What is the right tool for the task?" Sometimes it is a computer. Sometimes it is simpler, like a book in the hands of a child. One is not _better_ than the other. It is about what is appropriate to the situation.

How did our widespread cultural bias towards the superiority of technology come to be? What is really being said when we say computers are better than people is MATH is better than people. When something is done with a computer, it always comes down to MATH (after all computer == compute == computation). This can seem like magic, as any sufficiently advanced technology will seem, but it always comes down to math.

Who told us math is better than people? (photo of a number of mathematicians crucial to the creation of computer science as it exists today.) The discipline of computer science came from a small group of people: white, male, mathematicians, with ivy-league or Oxford educations. There is nothing wrong with being an ivy-league, white male, mathematician (Meredith interjects as an aside "Some of my best friends are white, male, ivy-league mathematicians" to a peel of laughter from the audience.) The problem with a small group of people doing the work is people embed their own bias in tech. Everyone has conscious and unconscious bias and while we are striving every day to be better people, we can't see our unconscious bias (it is unconscious!). Without diverse points of view, these unconscious biases get in embedded in the tech as it is created.

As of 2017, there were zero tenured women faculty members in the Harvard math department. This bias in favor of men in mathematics goes back centuries, couched in the idea that mathematics is "different" from everything else. While untrue, there is the notion of math being _so special_ mathematicians don't have to concern themselves with the petty social constructs other disciplines need to worry about. Since there is structural bias inside the field of mathematics, and computer science is descended from mathematics, it is reasonable that computer science as a discipline inherited mathematics' embedded biases.

### Bias Manifested

Unconscious bias manifests in technology in a variety of ways.

1. **Wide-spread harassment in computer science and mathematics**: news headlines and movements to speak out openly about the experiences many today still have
2. **Bias in word embedding**: critical to how Google figures out what you're looking for when you search occupations associated with he and she (photo of _extreme she_ and _extreme he_ occupations); these are the embeddings that feed the algorithms which increasingly make decisions on our behalf; biases at creation were not noticed because of unconscious bias 
3. **Bias in tech features and functions**: Environmentally racist soap dispenser ([YouTube video][3]) light skin man can get it to work; dark skin man can't get it to work; white paper towel works just fine; Meredith's take: "_I do not believe the people who made the dispenser tech sat down to make a racist soap dispenser. What I do believe is that the technology was developed by a bunch of people with light skin who said 'oh hey it works!' and then sent it out into the world and now people can't wash their hands._"
4. **Positive Asymmetry**: concep t of how we as humans like to focus more on what's happy than what iss problematic; it is a group dynamic and we need to recognize this type of behavior happens; while uncomfortable to do so, it is worth pushing past; if we don't push past the discomfort, we end up with Machine Bias
5. **Algorithms are NOT Neutral**: (photo with article heading with two petty theft arrests and future crime risks score mis-match between a white man and a black woman) unconscious bias is embedded into the "future crime" model through the training data used to create the model; facial recognition algorithms work better for light skin men vs darker skin women and regularly mis-gender/mis-identify women and dark skinned people; book reference: _ALGORITHMS OF OPPRESSION_
6. **Bias Magnified**: the unconscious bias in the soap dispenser is magnified in facial recognition; same tech in the soap dispensers and used in facial recognition are in self-driving cars; image recognition algorithms are really, really _fragile_; Are they going to recognize people with darker skin? What about people with disabilities?

### Better Informed

What do we do? Meredith: "First thing: BUY MY BOOK!" (lots of laughing from audience) It's not all doom and gloom. Start with understanding AI REALITY. 

**AI REALITY: It is a machine, it is doing math, it includes social bias, it is not going to deliver us from ourselves, and it is awesome.** ~ Meredith Broussard

We should not assume using tech is the same as making the world a better place.

- Differentiate between automation and AI (gif of mechanical finger touching a smartphone screen is automation, NOT AI)
- Be specific about what tech does and doesn't do (it isn't magic)
- Be aware of what's going on inside / behind the systems, such as when a company says they are using AI but actually have humans behind the systems to do the work when the AI fails; acknowledge there are humans doing human work and they deserve to be paid; book reference: _GHOST WORK_
- Read the Resistance (books to inform us [Goodreads][1] shelf):
  - Artificial Unintelligence
  - Weapons of Math Destruction
  - Black Software
  - Automating Inequality
  - Race After Technology
  - Brotopia
  - Behind the Screen
  - Algorithms of Oppression
  - Technically Wrong
  - Twitter and Tear Gas
  - Programmed Inequality
- Join the Resistance (organizations to make us aware):
  - The Center for Critical Race and Digital Studies (CR+DS)
  - Black in AI
  - Data for Black Lives
  - Data&Society
  - AINOW

### Pushing Back

When pushing back on technochauvinism, think about the difference between automated systems and human-in-the loop systems. In automated systems, a machine does everything. Human-in-the-loop is a different paradigm, where a human is an integral part of the process.

Technochauvinism is the fantasy of a fully automated system and a world along the lines of the _READY PLAYER ONE_, where you'll be in your room, everything will just happen for you, mediated by algorithms, and cyberspace will allow us to transcended the human condition. How can we design human-in-the-loop systems where we create systems with people as an integral part of the process? Rather than thinking about a fully autonomous self-driving car, how can technology enhance the existing system of drivers and public transportation to ease the burden of invisible work being done?

Leave the idea of Technochauvinism behind. When you are designing tech in your everyday lives, think of the world as it is, as it should be, and how we can get to a better world.

[1]: <https://www.goodreads.com/review/list/34907331-rainya-mosher?shelf=strangeloop2019-keynote-list> "Goodreads"
[2]: <https://drive.google.com/file/d/0B\_IUFuUrVtW\_b29vd3FpNnVkWVk/view> "Discipline of Machine Learning"
[3]: <https://youtu.be/YJjv\_OeiHmo> "YouTube video"
