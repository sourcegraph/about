---
title: "Strange Loop 2019 - How not to read the room: Creating wearables with ML"
description: "I'm an introvert. This can be a bit unfortunate, when you are a person that enjoys spending a lot of free time creating fashion things bedazzled with LEDs... only to rarely wear them out in public. In an effort to actually share my weird and wonderful creations with others, I decided to create a wearable project that would force me to be sociable in order for it to reveal its magic. In this talk, I'll share how I am using machine learning with javascript and tiny computers to make \"fashion\" that is responsive to the people around you and the attention you are (or aren't) receiving."
authors:
  - name: Lee Edwards
    url: https://ledwards.com
publishDate: 2019-09-13T00:00-13:30
tags: [
  strange-loop
]
slug: strange-loop-2019-how-not-to-read-the-room-creating-wearables-with-ml
heroImage: https://about.sourcegraph.com/blog/strange-loop-thumbnail-square-v2.jpg
published: true
---

<div className="container p-0 liveblog-presenters d-flex w-100 text-center">
  <div className="row m-0 w-100">
      <p className=" mr-12 m-0 w-100">
        <span className="liveblog-presenters__name">Stephanie Nemeth</span>
        <a href="https://twitter.com/stephaniecodes" target="_blank" title="Twitter"><i className="fa fa-twitter pr-2"></i></a>
        <a href="https://github.com/traumverloren" target="_blank" title="GitHub"><i className="fa fa-github pr-2"></i></a>
        <a href="https://stephanie.lol" target="_blank" title="Speaker's site"><i className="fa fa-globe pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

I'm an introvert. This can be a bit unfortunate, when you are a person that enjoys spending a lot of free time creating fashion things bedazzled with LEDs... only to rarely wear them out in public. In an effort to actually share my weird and wonderful creations with others, I decided to create a wearable project that would force me to be sociable in order for it to reveal its magic. In this talk, I'll share how I am using machine learning with javascript and tiny computers to make \"fashion\" that is responsive to the people around you and the attention you are (or aren't) receiving.

---

Stephanie Nemeth walks on stage with a homemade, hand-crafted necklace. Stephanie's necklace is loaded with tech.

<TableWrapper>
| Hardware     | Software      |
| ------------ | ------------ |
| [Raspberry Pi](https://www.raspberrypi.org/) | [NodeJS](https://nodejs.org) |
| [Arduino](https://arduino.cc)      | [Tensorflow.js](https://www.tensorflow.org/js) |
| Camera       | C++           |
| LEDs         |               |
| Battery      |               |
</TableWrapper>

Stephanie is a web developer from Berlin working at Microsoft on web accessiblity. She started making wearbales a few years ago, and loves beautiful bright clothing, but once she started making wearable tech, she found she was somewhat uncomfortable with the attention her clothing was drawing. Rather than retreat into her shell, she decided to lean into the discomfort, and make wearable tech that would draw attention and force her to interact with people. Her first project was a fiber-optic outfit for a festival made out of a rave whip. No programming, no soldering.

When she wore it for the first time, people loved it, which she says gave her a self-esteem boost. "I like compliments." But she wished it could be more interactive, more "alive." For this first project, the dress was designed just to be worn, without the ability for anyone to respond to and interct with the technology.

![ML Necklace](/blog/strange-loop-2019/how-not-to-read-the-room-creating-wearables-with-ml-1.jpg)

The first interactive piece she built was [tiny.cc/haute-codeture](https://tiny.cc/haute-codeture) in NodeJS, with a React web app that allows anyone to change the colors. However, she learned that a webapp-based outfit had some drawbacks. It required tethering to her phone, which could be intermittent, and it was centered on other people, not her.

![Speech to image demo](https://github.com/traumverloren/speech-to-image-necklace/raw/master/demo.gif)

Next, Stephanie built a speech-to-image necklace. [tiny.cc/speech-to-image](https://tiny.cc/speech-to-image) - a Raspberry Pi with a touchscreen and a microphone, with a Node server that sends speech to [Google Cloud Speech-to-Text API](https://cloud.google.com/speech-to-text/) for speech-to-text and Google Image Search. This allows anyone in rannge of the microphone to say, for example, "I like turtles," and the necklace would play the [Turtle Kid meme](https://www.youtube.com/watch?v=CMNry4PE93Y). However, this still required Wi-Fi, which made it less practical for street festivals and other outdoor. Although she says she didn't realize it at the time, this was Stephanie's first foray into machine learning via the Google Speech-to-Text API.

![LED Umbrella](/blog/strange-loop-2019/how-not-to-read-the-room-creating-wearables-with-ml-2.jpg)

The main subject of Stephanie's talk is a necklace that was designed with the learnings of all these other projects. The idea behind the ML Necklace is to force her to be around people in order to not draw attention with blinking LEDs. It would increase her own discomfort unless she made herself be more social. The machine learning-based necklace uses computer vision to detect the number of people around her, and creates a bright light pattern when she's alone. Once she surrounds herself with people, the LEDs go dormant.

When Stephanie joined Microsoft, she was surroundned by very senior, experienced engineers of all kinds. She says she felt uncomfortable with her own skill-level (Blogger's note: [imposter syndrome is real](https://time.com/5312483/how-to-deal-with-impostor-syndrome/), even for people who are speaking in competitive conference slots about challenging and technical things they've built.) Coming from a non-traditional background, Stephanie had joined a Microsoft after a career switch. She found an internal machine learning study group, and joined, mainly to prove to herself that she could learn something hard, but in her own style of learning. Outside of the study group, she found a number of resources useful:

* [Machine Learning for Artists](https://ml4a.github.io) by Gene Hogan, NYU instructor, with example projects like face tracking to control Tetris.
* [The Coding Train](https://thecodingtrain.com) with Daniel Shiffman, a fun and light-hearted collection of video that cover a wide range of programming topics

Building the ML Necklace required a few tasks.

1. Image recognition in Node
2. Tensorflow on Raspberry Pi
3. LED necklace
4. Send data between Pi and Arduino-connected lights (without bluetooth or wifi.)
5. Program lights in C++ on Arduino

Using Tensorflow.js and [tiny-yolo (You Only Look Once)](https://pjreddie.com/darknet/yolo/), Stephanie built fast in-browser image detection - 800ms object detection - limited to people detection, but already trained an deployable. However, YOLO is intended for the browser, so the second task was to convert the model to be able to run on NodeJS on a Raspberry Pi, translating the library from browser-based Javascript to Node: [tfjs-node](https://github.com/tensorflow/tfjs-node), storing model files locally and runninger inference on the Pi. [tiny.cc/yolo-pi](https://tiny.cc/yolo-pi) However, these changes to tfjs to enable it to target the Pi locked her into an older tf (classic hardware problem!). YOLO-Pi was one of the first projects ever running Tensorflow on a Pi.

Next came the hardware build. As a maker, Stephanie is constantly buying random things. She already had a [BlinkyTile Kit](https://blinkinlabs.com/blinkytile/), but needed to use her own microcontroller in order to ship her custom code. An OSS project by Jason Coon helped control the Blinky LEDs through the FastLED library for Arduino. [github.com/jasoncoon/BlinkyTileFastLED](https://github.com/jasoncoon/BlinkyTileFastLED). Stephanie began soldering the wearable LEDs on a manequin to make sure the fit worked well.

However, communicating with serial ports between Pi and Arduino was harder than she expected.

She ran into "some really bad bugs." For example: power issues made the necklace lights look like unpleasant strobe lights. The root of the problem was using 5V lights with a 3.3V (supposedly, but apparently not, 5V tolerant) power supply. Switching boards to an Arduino-compatible [Adafruit Metro Mini](https://www.adafruit.com/product/2590) solved this problem. Stephanie described a number of these debugging problems as "learning things by luck."

Another fun bug she discovered - the microcontroller was crashing due to a memory leak. About every an hour, memory and swap got full. Through some running process debugging, she discovered her old text-speech necklace code was still on the Pi, running at boot, and had a previously undiscovered memory leak!

All of this code is available on: [tiny.cc/ml-necklace](https://tiny.cc/ml-necklace)

Her final hardware challenge was a bit more unexpected. Moving the harness from the manequin to her body, she found bad connections and shorting (soldering is hard!), and the fit wasn't exactly right. She had also hoped to fit all the electronics in a fanny pack, but needed to end up using a larger wearable bag. She also discovered a new user requirement - a way to turn off the lights completely when not in use. She added a long-press button to toggle on/off manually.

All-in-all, Stephanie described this project as a hard build - about 8 months, on and off. It was exhausting. She took several month-long breaks due to burnout, especially because of things like power issues.

But the end result is compelling! Audience members approaching Stephanie after the talk to ask questions served as a fantastic demo of how the neckalce performs in the real world.
