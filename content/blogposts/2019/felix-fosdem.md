---
title: 'Advanced TypeScript tooling talk at FOSDEM 2019'
authors:
  - name: Felix Becker
    url: https://github.com/felixfbecker 
publishDate: 2019-03-29T05:59-06:00
tags: [
  blog
]
slug: advanced-typescript-tooling-talk-fosdem-2019
description: 'This presentation gives a tour and history of how TypeScript is able to provide the same great experience to many different clients through the tsserver and tsserver protocol, as well as how it influenced and fits into newer efforts like the Language Server Protocol.'
heroImage: https://user-images.githubusercontent.com/133014/55199644-f67f3280-5177-11e9-8aae-56238f6c80f0.jpg
published: true
---

<div className="container">
  <div style={{paddingTop: '56.25%', position: 'relative'}}>
    <iframe src="https://player.vimeo.com/video/327174558?color=0CB6F4&amp;title=0&amp;byline=0&amp;portrait=0&autoplay=1&loop=1" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>    
  </div>
</div>

<a href="https://vimeo.com/327174558" target="_blank" style={{textAlign: 'center'}}>
  View on Vimeo
</a>

Tooling has always been a focus for TypeScript and a large reason for its success. TypeScript code intelligence is available across many editors and even web-based tools, all provided by the same service TypeScript ships out-of-the-box with the compiler itself.

This presentation gives a tour and history of how TypeScript is able to provide the same great experience to many different clients through the tsserver and tsserver protocol, as well as how it influenced and fits into newer efforts like the Language Server Protocol.

I showed how it can be used to provide code intelligence features like jump-to-definition and find-references at cross-repository scale, using some of TypeScript's newest features like declaration maps and combining it with lesser-known interesting features of the JavaScript package management tooling.

At the end of this talk, you'll know how TypeScript tooling works under the hood and how it can be combined with other tools in the ecosystem to make developers more productive. The goal is to inspire innovation in the TypeScript tooling ecosystem by showing what is possible and how.

<div style={{textAlign: 'center'}}>
<a href="https://fosdem.org/2019/schedule/event/typescript_advanced_tooling/attachments/slides/3023/export/events/attachments/typescript_advanced_tooling/slides/3023/FOSDEM_2019_TypeScript_Tooling_Slides.pdf">Download slides from the FOSDEM website</a>.
</div>


You can find Felix online at [GitHub](https://github.com/felixfbecker) and [Twitter](https://twitter.com/felixfbecker).
