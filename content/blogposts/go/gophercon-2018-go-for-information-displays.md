---
title: 'GopherCon 2018 - Go for Information Displays'
authors:
  - name: Alan Braithwaite for the GopherCon Liveblog
publishDate: 2018-08-28T00:00-06:00
tags: [
  "gophercon"
]
slug: gophercon-2018-go-for-information-displays
description: 'Go for "programming pictures" -- turning data into compelling displays and visualizations.'
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5nOlXCLdhSk6ESWEW8iC24/01978fdff3206c78ad8bee4c0cdfee87/mechanic-tire.jpg
published: true
---

Presenter: [Anthony Starks](https://www.gophercon.com/agenda/speakers/279039)

Liveblogger: [Alan Braithwaite](http://twitter.com/Caust1c)

Go for "programming pictures" -- turning data into compelling displays and visualizations.

## Summary

Go, while typically used primarily for systems programming, is an excellent language for visualization tools given it's rich image processing libraries.

In this talk, Anthony dives into useful tools and libraries for visualization in Go.  This talk is packed full of real-world examples which make even the most hardcore systems programmers want to pick up these tools and start visualizing.

https://github.com/ajstarks/go-info-displays


---

## Information Displays

![img_20180828_105734](https://user-images.githubusercontent.com/3791413/44738424-16e7f100-aab2-11e8-941d-9dbd3c146dd1.jpg)

Anthony introducing us with his definition of information displays:

"An interesting arrangement of text and graphics designed to convey a message"

Let the computers do the heavy lifting.  Something we can all relate to.

Computers provide:

- Precision
- Consistency
- Efficiency

"Information displays are made of only a few core elements and when you know these elements, you have the superpowers to create amazing visualizations."

## Packages and Tools

### [SVGo](https://github.com/ajstarks/svgo)

svggo with svgplay: a go playground for sketching SVG images.  This thing is crazy.  Barrier to entry destroyed!

It even works with APIs like flickr!  Anthony dives into tons of examples written in svgo.

Great example as a warriors fan:

<Figure 
  alt="Warriors meme" 
  src="https://user-images.githubusercontent.com/3791413/44738439-1ea79580-aab2-11e8-99d8-5239e1793826.png"
/>

### [OpenVG](https://github.com/ajstarks/openvg)

RaspberryPi Go SVG

![img_20180828_110526](https://user-images.githubusercontent.com/3791413/44739358-ca51e500-aab4-11e8-8341-6e84867aaa1b.jpg)

<Figure 
  alt="Weather display" 
  src="https://user-images.githubusercontent.com/3791413/44738524-734b1080-aab2-11e8-8bbf-b4081e7d4b30.png"
/>

Awesome weather display example.  Anthony goes through something he wrote: a magic mirror display.

### [Deck](https://github.com/ajstarks/deck)

A go package for awesome presentations.  Very simple tool, much more powerful than the standard go present tool.

"Don't keep a lot of things in your head"

<Figure 
  alt="Percentage based layout illustration" 
  src="https://user-images.githubusercontent.com/3791413/44738645-c3c26e00-aab2-11e8-963d-972bb70d038f.png"
/>

Deck can render to all sorts of destinations.  SVG, PDF, PNG, etc.  Styling is super easy.

Shell function DSL for creating easy displays.  Your presentations can be easily scripted!

## Lots of Pictures

Using core elements to make better real-world displays.  Lots of examples including Stocks, Airports, etc.

<Figure 
  alt="Flight Information diagram" 
  src="https://user-images.githubusercontent.com/3791413/44738838-58c56700-aab3-11e8-8645-2dc02e902a9b.png"
/>

Anthony is the perfect person to be creating these tools.  Creative, enthusiastic and curiousor.

<Figure 
  alt="Creative layout example" 
  src="https://user-images.githubusercontent.com/3791413/44738992-c40f3900-aab3-11e8-80ed-b135bb46774b.png"
/>

Charts in Deck: dchart.

<Figure 
  alt="dchart charts for deck" 
  src="https://user-images.githubusercontent.com/3791413/44738944-9fb35c80-aab3-11e8-9137-244810b08f27.png"
/>

Start simple -- Name value pairs.  Optimized and read by dchart to create a beautiful chart.


## Why Go?

The core tools provide excellent primitives and abstractions for high performance image processing.

Cgo integrates with existing tools.

The community is very enthusiastic about image processing.

RSC teasing Anthony on the mailing list before he open sourced SVGo.

<Figure 
  alt="Email from Russ Cox" 
  src="https://user-images.githubusercontent.com/3791413/44739094-16505a00-aab4-11e8-8f50-c8c18cecb12a.png"
/>

Take inspiration from *Pic*asso and *Tur*ing
