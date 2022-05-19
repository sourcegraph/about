---
title: "Strange Loop 2019 - The Idea Becomes a Machine That Makes the Art That..."
description: "Sol LeWitt was a prolific American artist credited with founding Conceptual Art and Minimalism. This talk is inspired by his series of participatory, conceptual art called, \"Wall Drawings\". The Wall Drawings are large-scale installations that grow from a set of simple written instructions by Sol LeWitt himself."
authors:
  - name: Alla Hoffman
    url: http://rsid.github.io/portfolio/
publishDate: 2019-09-13T00:00-13:30
tags: [
  strange-loop
]
slug: strange-loop-2019-the-idea-becomes-a-machine-that-makes-the-art-that
heroImage: https://about.sourcegraph.com/blog/strange-loop-thumbnail-square-v2.jpg
published: true
---

<div className="container p-0 liveblog-presenters d-flex w-100 text-center">
  <div className="row m-0 w-100">
      <p className=" mr-6 m-0">
        <span className="liveblog-presenters__name">Christine Stavridis</span>
        <a href="https://github.com/promptandpleasant" target="_blank" title="GitHub"><i className="fa fa-github pr-2"></i></a>
      </p>
  <p className=" mr-6 m-0">
        <span className="liveblog-presenters__name">Jonathan King</span>
        <a href="https://github.com/promptandpleasant" target="_blank" title="GitHub"><i className="fa fa-github pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

Sol LeWitt was a prolific American artist credited with founding Conceptual Art and Minimalism. This talk is inspired by his series of participatory, conceptual art called, \"Wall Drawings\". The Wall Drawings are large-scale installations that grow from a set of simple written instructions by Sol LeWitt himself.

---

## Preface

The speakers are Jonathon King, a software & systems automation for a lab automation company, and Christine Stavridis, a product designer, front end engineer, educator. They share a passion for conceptual art, and this project is about exposing hidden layers in art preservation. It started with a call for presentations at StrangeLoop, which gave them the kickstart they needed to start on a project together outside of work, engaging with Machine Learning, Art, & Philosophy.
When looking for topics, Sol LeWitt is the first person who came to mind.


## Sol LeWitt

Sol LeWitt was an artists who lived from 1928 - 2007. He was a founder of the minimalist and conceptual art movements. He was known in particular for his Wall Drawings, whose titles are actually the instructions for generating the drawing. LeWitt didn't usually execute the drawing himself; instead they were done by a large team of assistants.


## Wall Drawings And The Idea That Creates The Machine

Christine and Jonathon feel like these wall drawings are a perfect example of a wholly encapsulated system. They contain all the instructions needed to install themselves, and you can think of their titles as psuedocode for art. These simple instructions can create a beautiful array of generative works, where the interactions between the drafters and the physical wall it's installed on have meaningful affects on the piece. LeWitt had the idea that lines could be drawn by anyone anywhere, within the bounds of the instruction, and the idea was still true.

However, even though LeWitt felt like anyone could install these and they were authentic, but in order to sell them they needed a certificate. Certificates cannot be issued without either his consent or the consent of his estate.


## Making The Machine That Makes The Art

So Christine and Jonathon decided to try their hand at implementing Wall Drawing 797 using machine learning. Their first prototype used React, p5.js, and node.js. They intended to use Mechanical Turk to get a lot of human input for the model which would all be drawn on to make 1 wall drawing. However, the first one didn't work very well or aesthetically similar to LeWitt's Wall Drawings.

So for the next iteration, Jonathon and Christine used just their work as inputs, and it looked much better, though it took about 30 minutes to make each input drawing and they had to take lots of mental and physical breaks. Given that it was so intensive to produce each input for the model, they didn't feel like their initial multi-contributor vision was practical while still paying a decent wage, which was important to them. And, as it happened, it was in-keeping with LeWitt's philosophy!

>"I had the idea that if you can pass on the instructions from one person to another that they can draw a line ... [this idea] is still true. But although anyone can do the kinds of lines that are very precise, only a few people can do them very well". - Sol LeWitt

One other approach they tried was training a net on the instruction themselves for 250 of LeWitt's wall drawings. A few were pretty successful if you didn't look too close (new wall drawings number) Why did these instructions come out wonky? It turns out LeWitt didn't have a lot of variance in his titles, so it was hard to avoid over-training the models and completely replicating existing titles. Also, in a later period he got more simplistic (for instance naming one 'Splat') and there wasn't enough to learn from them. They considered if Markov Chains would work better here, but but it ultimately felt too far from LeWitt's thoughtful style.

Then they realized: they were just doing ML for ML's sake.


## But is it Art?

>"New materials are one of the great afflictions of contemporary art. Some artists confuse new materials with new ideas". -Sol LeWitt

What are the bounds of the power of machine learning? Where is it useful, and where is it weak? What other artists are using it in a meaningful way?

They went through some examples of artists using machine learning for art well. They included:

Sougwen Chung, who trained a neural net that she then paints with collaboratively.

Tom White, who  was trying to create GANs that could fool ImageNet.

![tom white art](/blog/strange-loop-2019/tomwhite.png)

Holly Herndon, who is working on training an AI baby on her and her partner's own voices. It's learning to sing and was recently credited on her new album.

Memo Akten, who says 'we see things not as they are but as we are' and has made an artificial neural network that looks out on the world and tries to make sense of what it sees based on what it's seen before.

So then they asked themselves, are we still doing this in honor of Sol? Or is it for ourselves? What would he want from it?

He always wanted his work to look contemporary, which is why he chose the colors and shapes he did, and he tested them time and again before making his instructions. This also means things need to be re-painted periodically, because they exist in physical space and get worn and damaged over time, while he wanted them to always be fresh. So there are many participants in his art and many assistants. They were with him from the start, and Jonathon and Christine learned that it's common in the art world for assistants to be better at certain technical details even than the artists. So their knowledge is something special to replicate and preserve.


## Artistic Preservation And Knowledge Transfer

>"Art is made by human beings not machines" - Sol LeWitt

So Jonathon and Christine decided to try and bring humans back into the process by trying to capture the technical knowledge of generations of LeWitt's draftspeople. They used p5/js and pix2pix to start looking instead at the washes in LeWitt's wall drawings. Washes are the texture in the background of painted lines in LeWitt's wallpaintings. His draftspeople used very particular brands of inks, diluted down precisely and applied evenly to the wall to get the desired effect. Christine and Jonathon chose to model this small simple problem to assist knowledge transfer between assistants.

In p5 you can quickly approximate this texture, but how do you capture the decision making process it took to get there? They looked at swatches of the wash and identified areas they felt needed more work to look correct, then used that information to train a neural net to critique the quality of the wash. This seemed like a good fit for machine learning in particular because an assistant could retrain the model as their taste matured to improve it's ability to tell if a wash is good or not.

With Christine and Jonathon's original Mechanical Turker model, they had imagined a monolithic model with tons of inputs from different mturkers creating a mega-model. But once they started thinking about individualized models like the one that had opinions about good washes, they felt like they had a better approach.

Many of LeWitt's assistants have special and unique knowledge, which fits in better with a 'many models' approach, where each model reflects its own knowledge and specialty. They took what they'd learned and created 2 networks trained on inputs that each of them generated separately. It only took 6 drawings from each of them to train the models, which was a lot less than they expected.

![christine and jonathon wall art](/blog/strange-loop-2019/christine+jonathonwall.png)

By doing this, they were able to make models that captured their unique styles and taste, and produced work that resembled human assistants collaborating. Not all the assistant-models worked well together however - but even that discordance reflects almost an artistic argument.


## Conclusion

So where do we go from here? Christine and Jonathan want to combine model and human outputs in the physical world, and to talk more to the assistants to find out how machine learning algorithms can help preserve LeWitt's work. They're also left with the question of how they validate that the models actually captured their aesthetic and intentions. And if that's even necessary! As they put it,

>"We wanted these models to capture advice from the past, but the thing about advice is you don't have to take it".
