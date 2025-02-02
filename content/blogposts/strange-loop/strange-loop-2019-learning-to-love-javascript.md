---
title: "Strange Loop 2019 - Learning to Love JavaScript"
description: "JavaScript is an imperfect programming language. It's weakly-typed, scoping rules and type coercion can make difficult-to-diagnose bugs, and cross-browser compatibility sometimes feels like a pipe dream. But does it matter? In this talk, I'll argue that judging the merits of JavaScript solely as a programming language is missing the point, and to accurately weigh its place in the world, you must consider JavaScript beyond types, scope, and syntax. You'll walk away with a deeper appreciation for the feat of human cooperation that is the World Wide Web, and how JavaScript became one of the Web's most important threads."
authors:
  - name: Brian Sewell
    url: https://www.linkedin.com/in/brian-sewell-9973b796/
publishDate: 2019-09-13T00:00-11:20
tags: [
  strange-loop
]
slug: strange-loop-2019-learning-to-love-javascript
heroImage: https://about.sourcegraph.com/blog/strange-loop-thumbnail-square-v2.jpg
published: true
---

<div className="container p-0 liveblog-presenters d-flex w-100 text-center">
  <div className="row m-0 w-100">
      <p className=" mr-12 m-0 w-100">
        <span className="liveblog-presenters__name">Tara Vancil</span>
        <a href="https://twitter.com/taravancil" target="_blank" title="Twitter"><i className="fa fa-twitter pr-2"></i></a>
        <a href="https://github.com/taravancil" target="_blank" title="GitHub"><i className="fa fa-github pr-2"></i></a>
        <a href="https://taravancil.com" target="_blank" title="Speaker's site"><i className="fa fa-globe pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

JavaScript is an imperfect programming language. It's weakly-typed, scoping rules and type coercion can make difficult-to-diagnose bugs, and cross-browser compatibility sometimes feels like a pipe dream. But does it matter? In this talk, I'll argue that judging the merits of JavaScript solely as a programming language is missing the point, and to accurately weigh its place in the world, you must consider JavaScript beyond types, scope, and syntax. You'll walk away with a deeper appreciation for the feat of human cooperation that is the World Wide Web, and how JavaScript became one of the Web's most important threads.

---

## Speaker

Speaker: Tara Vancil

Where she works: [GLITCH](https://glitch.com/)

## Why are you here and what will you walk away with?

### Why are you here?

* Maybe you love JavaScript and want to affirm your love.
* Maybe you had some bad thoughts and want redemption.
* Maybe you're a JavaScript hater and are looking for QA.

### You'll walk away with:

* A deeper appreciation for the feat of human cooperation that is the WWW, and how JavaScript became one of the Web's most important threads.
* No opinions on testing, deploying, monitoring code
* No cool design patterns you can apply at your job next week.

## Who is Tara?

* Software engineer living in NYC
* Moved from TX to NYC this past sprint, most of her identity has been surviving NYC.
* Loves doing nails, it's the one hobby she's followed this summer.
* She's a software engineer:
  * Maintains: JavaScript, CSS, HTML, Node, etc.
  * Uses: slack, svg, bash
* She's proud to say her stack is the web. She could learn about infrastructure, but personally she loves the web and that it's a phenomal platform for bulding things on.
* She works for Glitch, which came out of Fog Creak which created trello and stack overflow
* Used to work on a two person team that built beakerbrowser.com.
  * Built with electron, built a browser because they wanted to run experiments.
    * The main experiment they ran was to add peer-to-peer protocol in the browser.
    * The were able to make it easier for folks to click one button and publish a website
    from the browser.
    * When she was learning to code on the web, she struggled to publish things she was building.
    * She had to learn deep things that newbie programmers don't need, which is why she is proud of her projects that enable people of all levels to publish their work.

### Glitch

* Glitch is a code editor in the browser that enables all people who build on the web.
* Glitch supports node.JavaScript and if you are creative and supportive you could probably get it to support other languages as well.

## What is the web?

* The web is the apex of human communication. There are a shared set of standards from getting things from one computer to another.
* Standard Definition: A standardized set of tools for transmitting and interacting with documents.
  * Tools: languages, protocols, etc.
* The web is massive, but we've all agreed to use the same tools.
* The web is humanity's shared language. -- IMPORTANT TAKE AWAY
* *This is an incredible feat of human cooperation, and enormous collective effort to build something that serves us all.

## Web Values:

1. The Web is open
  * Anyone can participate, no entry fee
  * If you speak the language, you can participate
  * Might not be easy, but is doable
2. The web is decentralized
  * While some goverments/corporations have a large amount of influence, none of them actually own it.
3. The web is shared
  * Because it doesn't belong to anyone, it belongs to all of us.
  * We have a shared responsibility to maintain it.

## Tara hopes we can all agree

1. JavaScript is an imperfect programming language. All programming languages are imperfect.
  * JavaScript maybe a bit more than the rest
2. The web is a miracle and we ought to preserve
3. It's not that serious. Debates about programming languages are all in good fun, but are secondary to what we build with them and who we build for.

### It doesn't make sense to judge JavaScript in a vacuum

* Judging the merits of JavaScript solely as a programming language is missing the point, and to accurately
* What matters is the web is the context where JavaScript operates. The web is a social space.
* Now that JavaScript is here, if we got rid of it web pages from 90's and earlier wont work.

## JavaScript success is in part due to it's flaws

* 67.8% of respondents to a Stack Overflow survey say they use JavaScript
* JavaScript is everywhere: Phones,Spreadsheets,Web,Fridges, etc.

## JavaScript was written in 10 days, it's going to have some problems

* No strong type support, null/string comparison, etc. are common complaints.
* We made a promise that we were going to make the Web work for a long time. But that doesn't mean we cannot fix the problems.
* JavaScript does have unusual constraints in that there are tons of different clients implementing
* JavaScript and choosing to deviate from the specifications.

### Experiment: What is instead of JavaScript the Web used Haskell?

1. Would the web be the same?
2. Would schools use it as an intro?
3. Would we have the same shared commitment?

Tara would like to argue no!

* People tend to be very negative to JavaScript in online forums, and take it out on those who chose to use JavaScript.
* As a professional, Tara knows how to workaround the shortcomings of JavaScript.
* Tim Berners Lee, 1998 Quote: Principle of Least Power
  * Pick the least powerful solution for the web that works
  * He was actually writing this about HTML, but it applies to JavaScript as well. By keeping the bar low, more people have the opportunity to join in.
* Jeff Atwood: Any app that can be written in JavaScript will be written in JavaScript.
* Please take a look at [TECH WORKERS COALITION](https://techworkerscoalition.org/)

## The web is a mess, but that is to be expected

* You've gotta have hopes:
* There are a lot of really talented people who are putting their efforts to making the world better.

### Examples

* BigInt: Soon to be available in JavaScript
  * arbitrary-precision integers in JavaScript
* Let's Encrypt:
  * A free, automated, transparent Certificate Authority, run for the public's benefit.
  * Free certificates = more HTTPS!
  * Joint effort to benefit the community, beyond the control of any one organization
  * Transparent: every cert issues or revoked is recorded
* All of the cool shit being built on the Web every single day.

### Project Highlights

* [spider-man-pics-4-cash](https://glitch.com/~spider-man-pics-4-cash)
* [fix-posture.glitch.me](https://fix-posture.glitch.me)
* [soul-patch-upside-down.glitch.me](http://soul-patch-upside-down.glitch.me/)
* [wikipedia-game.glitch.me](http://wikipedia-game.glitch.me/)

### Looking down on folks who decide to build web apps is not cool

Get involved: TC39 (the body that determines ECMAScript).

## One World, One Language -- chapter from book by Jenn Schiffer

JavaScript is precious, learn to love it or eat it's dust.

## Q&A

1. **What book would you recommend?**<br/>She learned from MDN, Moxilla Developers Network?<br/>
2. **What are your thoughts on [WASM](https://webassembly.org/)?**<br/>
Very excited about it because it cooperates with the web, doesn't change/break it.
