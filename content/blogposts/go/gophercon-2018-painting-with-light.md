---
title: 'GopherCon 2018 - Painting with Light'
authors:
  - name: Farhan Attamimi for the GopherCon Liveblog
publishDate: 2018-08-28T00:00-06:00
tags: [
  "gophercon"
]
slug: gophercon-2018-painting-with-light
description: 'This talk covers the history of path tracing, what basic path tracing is, and how to build a path tracer in Go. Specifically, it covers rendering images using path tracing in Go, explores tradeoffs between concurrency schemes for simulating the behavior of light in Go, and discusses how Go may fit into the future of graphics.'
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5nOlXCLdhSk6ESWEW8iC24/01978fdff3206c78ad8bee4c0cdfee87/mechanic-tire.jpg
published: true
---

Presenter: [Hunter Loftis](https://twitter.com/hunterloftis)

Liveblogger: [Farhan Attamimi](https://twitter.com/attfarhan)

## Summary

This talk covers the history of path tracing, what basic path tracing is, and how to build a path tracer in Go. Specifically, it covers rendering images using path tracing in Go, explores tradeoffs between concurrency schemes for simulating the behavior of light in Go, and discusses how Go may fit into the future of graphics.

## A brief history of path tracing

#### 1940s: The Manhattan Project & the Monte Carlo Integration

A group of American scientists working in secret developed the first atomic bomb in the 1940s. While the results of this research were horrific, the technical breakthroughs can't be denied. They solved many massive technical problems, and the largest the faced was the neutron diffusion problem. They had to predict how neutrons would move in a reaction in order to control an explosion, but the movement of neutrons has way too many variables and was not solvable by any existing model. Rather than using a model, they'd use statistical techniques to model the movement of a neutron. This resulted in the Monte Carlo Integration: using random starting points and paths for individual neutrons, they'd simulate how a neutron would move, and redo this thousands of times to figure out the path a neutron was most likely to take.

#### 1986: Kajiya's rendering equation

A CalTech student named James Kajiya tried developing better computer graphic renderings, and applied the Monte Carlo method to photons instead of neutrons, in order to simulate the movement of light. The conclusion is that if applied properly, the rendering would be indistinguishable from a photograph. He named the algorithm **path tracing**. But, this remained mostly academic because actually applying the algorithm would require tons of computing power, and one gigaflop of compute cost $44 million at the time.

#### 1995: Toy Story

Toy Story became the first fully computer-animated feature film in 1995. Every shot was created as a simulation in the computer. There were no actors or cameras involved.

Steve Jobs, running Pixar at the time, said there were more PhDs working on this film than any other in the past. The film cost $30 million, so people were skeptical whether it would be successful. Jobs said that making $100 million would be a huge success. It ended up making $300 million, showing that being able to render beautiful computer images was valuable.

Computing power was not yet cheap enough for the rendering equation. It still cost $46,000 for a gigaflop. There was still some reliance on artists manually placing lights around scenes to simulate where lights may appear.

#### 2006: Monster House

Monster House in 2006 was not as big a commercial success, but it was a huge technological breakthrough as it is the first film to use the rendering equation with the Monte Carlo method to generate images. The entire industry started looking into path tracing and the Monte Carlo integration after this. Compute was cheap enough at this point: it cost $57/gigaflop.

#### 2014: Big Hero 6

Big Hero 6 was rendered using Hyperion, the in-house Monte Carlo path tracer Disney had developed for 3 years in secret. It solved many of the problems in Monster House, such as brightness and graininess. Luckily, compute had become so cheap by this point, because this movie required tons of compute. It was rendered across 4 server farms, across 4600 total servers, and an average frame took 83 hours to render! However, the cost of compute was only $0.13/gigaflop at this point.

#### 2016: Deadpool and path tracing only

Deadpool's 2-minute-long intro scene involved no real cameras or real actors or props. Every single shot is completely computer generated, and every pixel is entirely rendered in a computer. People used to complain about too much CGI, but it turns out there's no less CGI, but we just can't notice it anymore.

There's no real actor in this image!:
![image](https://user-images.githubusercontent.com/16265452/44745351-b8783e00-aac4-11e8-82b1-4a5d19a4e4ba.png)

Compute became cheap enough that all studios could go with path-tracing, the absolute best option, to render images. A gigaflop of compute only cost $0.08 by 2016.

By this point, it became clear that path-tracing was king for computer graphics, and Pixar retired all its old rendering methods. Their renderer, called Renderman, now works with path-tracing only.

Amazingly, all the success of these movies can be traced back to the development of the atomic bomb in the 1940s.

## Hunter's experience with path-tracing

Hunter was introduced to Disney's Practical Guide to Path Tracing, which is an accessible guide to path tracing that set him on this path.

#### Path tracing basics

Imagine a real scene. The sun shoots a bunch of photons into the scene, bouncing off a bunch of surfaces, losing energy at each bounce, before reaching your eye. We can't simulate _all_ of the uncountable light rays coming out from the sun.

If there's a camera in the scene, some rays will bounce into the camera, and each ray would lose some energy for every surface it bounces off of before reaching the camera. 99.9999% of the sun's rays (the red rays in the picture) will not bounce into the camera and don't influence the image, so tracing these would be a huge waste of energy and time:

![image](https://user-images.githubusercontent.com/16265452/44745555-4a804680-aac5-11e8-90f2-13959726a075.png)

One nice thing about light rays is that they are reversible. What a path tracer does is it shoots light rays out from a camera into a scene, which bounce around the scene, until it hits something bright or gives them light. Tracing the path backwards into the camera results in a pixel.

It is so simple that looking up the algorithm on Wikipedia, and converting pseudo-code into Go, can give us this Go code:
![image](https://user-images.githubusercontent.com/16265452/44734244-a5ef0c00-aaa6-11e8-9da7-460282554138.png)

#### v0.0.1

So, Hunter implemented Pixar's renderer. The first rendering he made was a "sphere of light" (a white circle):
![image](https://user-images.githubusercontent.com/16265452/44734352-f2d2e280-aaa6-11e8-95e0-83f97132c744.png)

After failing to impress his wife with the sphere of light, he wanted to create more complex images.

Trying to create more sophisticated renderings, he ran into two obstacles that the Disney guide didn't prepare him for:

1. **Math**: most equations in relevant papers looked like this (note that this is "basic"):
   ![image](https://user-images.githubusercontent.com/16265452/44734508-52c98900-aaa7-11e8-8ed8-41dbd958d346.png)
2. **JavaScript**: Hunter was in charge of the NodeJS platform at Heroku, so he chose to use it for his tracer by default. However, a simple scene with a few spheres took 4 hours to render in JavaScript! Not understanding the math means relying on a feedback loop to verify correctness, and this feedback loop was far too long.

...that meant it was time to learn Go. Luckily Heroku loves Go and has a ton of Go developers at the company, so he had good resources to help him learn.

#### Demo

"Real-time" doesn't exist in path tracing, so Hunter starts a live demo at this point. We get this grainy image of a Toy Story-inspired pink Gopher:

![snapseed](https://user-images.githubusercontent.com/16265452/44746600-0cd0ed00-aac8-11e8-902f-623ab4d608bc.jpg)

One cool thing about the algorithm is that it's "embarrassingly parallel", so he scaled up to 10 workers. We'll revisit this at the end of the talk.

## How to build a path tracer

..."A physically-based path tracer in plain English with as little math as possible and just a touch of physics"

#### What is light?

Light is... a particle, a wave, exists on some spectrum, can be polarized, etc.

For the purposes of computer graphics, it has 3 important properties:

- Origin
- Direction
- Energy (usually represented by RGB)

![image](https://user-images.githubusercontent.com/16265452/44735209-08490c00-aaa9-11e8-8825-27c6b12ab5bc.png)

How computers represent light:
![image](https://user-images.githubusercontent.com/16265452/44735274-33cbf680-aaa9-11e8-8f7c-d4343ab00203.png)

#### What happens when light hits a surface?

This is one of the coolest things learned on this project. Light behaves similarly when interacting with wildly different materials.

Metals only reflect. Non-metals can do both. Once light refracts into a surface, it collides with other particles, loses energy, and scatters in new directions. Once refracted, the only difference in behavior is how far light continues moving into a surface before getting reflected out. When it moves through the material, it's being **transmitted**. When it gets reflected and scattered out, it is being **diffused**.

So, light is either:

- Reflected
- Diffused, or
- Transmitted

![image](https://user-images.githubusercontent.com/16265452/44736076-7bec1880-aaab-11e8-9003-5d6032bdfc3b.png)

How can we simulate these behaviors? We can use BRDFs and BDTFs

#### BRDFs and BDTFs

BRDFs stands for "Bidirectional Reflectance Distribution Function". BDTFs stands for "Bidirectional Transmittance Distribution Function". These are complex names for simple ideas.

These are pure functions that describes how much light is lost when it bounces off a material at a given angle. It takes in as inputs two angles: the angle it enters the material, and the angle it exits. It returns a number representing the RGB value. A key property is the function has to be bidirectional.

This simple BRDF renders a material simple to chalk. If m.Color were 0 it would render black chalk, if 1 it would render white chalk:
![image](https://user-images.githubusercontent.com/16265452/44736306-19474c80-aaac-11e8-90c9-03e89b8e35bc.png)

Thankfully, the physics has been done for us. BRDF and BDTFs have already been created and published by big companies and researchers. We can just take physicists' and computer scientists' work and just copy + paste it into our program with a bit of translation into Go.

So far, all the work we've done will only trace a single random path - and there are infinite possible paths.

That's where Monte Carlo integration comes back into the scene. The Monte Carlo integration can be simplified as:

- Sample a bunch of values **randomly**
- Add them all up and **average** them
- That's probably **close** to the real answer

Combining the path tracing algorithm and Monte Carlo integration yields an image like this:

![image](https://user-images.githubusercontent.com/16265452/44736745-39c3d680-aaad-11e8-8b9c-4bad240cae0c.png)

Leaving it running for longer will eventually get you an image close to the answer of the rendering equation, called convergence:
![image](https://user-images.githubusercontent.com/16265452/44736751-43e5d500-aaad-11e8-8102-e673f8e66d90.png)

Doing this in Go is about 15x faster than in JS. Something that takes 30mins to render in Go takes hours in JS.

#### How can we make more interesting images?

The beauty of this is that to make more complex images, we don't need to change the algorithm. We only have to give it new surfaces.
We can do things like render complex geometry, real materials, and put images in different scenarios using image-based lighting.

## Lightbulb moments with Go

Given this is the first project he did with Go, Hunter learned a ton about the language. Most of the learnings came from encountering something he never read before, or realizing he misinterpreted something he read once actually implementing.

**Using type defines**

A lot of function signatures in the path tracer looked like this:

```go
func (*m &Material) absorb(wi, wo Vector3) (bool, Vector3, Vector3)
```

There are a bunch of Vector3 types, or XYZ values, that represent things like RGB, when simulating light.

Often times, he'd realize that he wasn't sure what a given Vector3 being passed in was. It could be a direction, or energy and he wouldn't be able to tell the difference.
He'd unknowingly start telling Go to do things like:

> Direction = 2 meters up + a halogen light bulb

To help with this, he figured used type defines, which helped drastically by naming types appropriately.

He'd simply declare types like Direction explicitly:

```go
type Direction Vector3
```

Creating explicit types for Units, Direction, and Energy, which were all represented by Vector3s before helped find tons of bugs. It also helped performance a ton because he got rid of unnecessary work he was doing because of type confusion. He got rid of unnecessary conversions when he was unsure of the type, and similar issues.
Ultimately, he found ways to get help from the compiler.

The original function signature above would turn into something like this, which is much easier to read:

```go
func (m *Material) absorb (wi, wo Direction) (bool, Vector3, Energy)
```

**Safe concurrency doesn't lead to performant parallelism**
Watching talks about Go early on, there were a couple memorable quotes about concurrency that influenced the design of his path tracer:

- Parallelization can fall out from concurrent design
- Goroutines aren't free but they're very cheap

His initial implementation was slow, and involved 2 separate sectors: one section that did writes to change state only, and another that was purely Goroutines working on tracing paths. It made sense but was super slow, and found that increasing the buffer of paths that a Goroutine would try to trace actually made the work faster. Eventually, he found out that having Goroutines work independently, and then merging the images from each, was much faster.

## The Future

After this talk Hunter says we know as much as him about ray tracing.

2018 is the year of ray tracing. Every major player is getting into ray tracing. It's also gotten so cheap to have huge compute power, so we can render amazing images with commodity devices.

It's an exciting, emerging field:

- Research that hasn't been implemented yet
- "Embarrassingly parallel" algorithm
- Fun to hack on

Hunter would love your help! If you're at all interested in this, he'd love help on [pbr](https://github.com/hunterloftis/pbr). All images in this presentation were rendered with PBR.

Finally, let's check how's our demo is doing:
![image1](https://user-images.githubusercontent.com/16265452/44746575-ef9c1e80-aac7-11e8-94ed-57e2f60b6180.jpeg)

Slides and links:
http://bit.ly/scenic-painting
https://www.disneyanimation.com/technology/innovations/hyperion
http://www.cse.chalmers.se/edu/year/2013/course/TDA361/Pathtracing.pdf
http://blog.selfshadow.com/publications/s2015-shading-course/hoffman/s2015_pbs_physics_math_slides.pdf
https://www.cs.cmu.edu/afs/cs/academic/class/15462-f09/www/lec/lec8.pdf
https://www.atomicheritage.org/history/computing-and-manhattan-project
https://graphics.pixar.com/library/PathTracedMovies/paper.pdf
https://www.wired.com/1995/12/toy-story/
https://en.wikipedia.org/wiki/FLOPS#Cost_of_computing
