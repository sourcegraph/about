---
title: 'Simplicity is worth paying for: Dev Tool Time with Roger Peppé'
description: 'Roger Peppé, Software Engineer at InfluxData, shares his standing desk setup, and how the Acme text editor and mouse chording drive his coding workflow.'
authors:
  - name: Scott Bailey
    url: https://handbook.sourcegraph.com/team#scott-bailey
publishDate: 2021-11-17T10:00-07:00
tags: [blog]
slug: dev-tool-time-roger-peppe
heroImage: https://sourcegraphstatic.com/blog/dev-tool-time/roger-peppe/linkedin.png
socialImage: https://sourcegraphstatic.com/blog/dev-tool-time/roger-peppe/linkedin.png
published: true
---

Many devs, especially those who love Vim and Emacs, carefully fine-tune their editor, terminal, and even OS configurations so that their hands rarely leave the keyboard. Roger Peppé, Software Engineer at InfluxData, took a different path, driven by the simplicity and power of the [Acme text editor](http://acme.cat-v.org/) and mouse chording. When Rog joined us for [Dev Tool Time](https://info.sourcegraph.com/dev-tool-time) on November 10, 2021, he demonstrated a different model of text editing, which will seem at once familiar and strange.

You can watch the recording of this episode at the [bottom of this blog post](#Watch-the-recording), but first let's check out Rog's fully standing desk setup:

## Standing, rocking, clicking

Physical ergonomics guide much of Rog's desk setup, in part due to his shoulder pain. Working at a standing desk alleviates that pain, and over time, he's transitioned to working entirely standing at his [Fully Jarvis desk](https://www.fully.com/standing-desks/jarvis-adjustable-height-desk-bamboo.html), often rocking with the help of the [Tic Tock Stand Balance Board]() for comfort during longer hours standing. When he does sit, he has a [Varier Balans kneeling chair](https://varierchairs.com/kneeling-chairs/variable-balans/) that also encourages movement.

<Figure
  src="https://sourcegraphstatic.com/blog/dev-tool-time/roger-peppe/hardware_cropped.jpg"
  alt="Rog's current desk setup" 
/>

While Rog types on a highly-regarded [Realforce keyboard](https://www.realforce.co.jp/en/), his aversion to throwing away hardware has kept him using an aging 24" HP monitor with relatively low resolution, paired with a newer high-resolution monitor. He hooks all these up to a [7th Gen Lenovo Thinkpad Carbon X1](https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadx1/x1-carbon-gen-7/22tp2txx17g) running Ubuntu.

With Acme as his primary dev environment, though, Rog needs a three button mouse, and while he's tried the [Logitech MX Master mouse](https://www.logitech.com/en-us/products/mice/mx-master-3.html), he prefers older, sturdier versions from Logitech.

## Between familiarity and strangeness

The quality of mouse, and its reliability after heavy use, is important to Rog. Acme's interaction model is focused on mouse movements, clicks, and chords (combination clicks). While Vim, Emacs, and many other editors have focused on typing, key presses, and key chords for selections, movement around the editor, and actions, Acme presents a different model of engagement–one that is, in many ways, familiar. Need to move your cursor to text in another Acme window? Just click there. Want to select text? Just drag while holding a mouse button, the way you do in so many other applications. Acme coheres with common mouse interactions. Yet, Acme is also a bit strange. Clicking with the right button doesn't open a contextual menu; it performs a contextual search that can be used for actions like opening files, finding the next instance of a word, or running a regex search. Clicking with the center button, the click-wheel on Rog's mouse, executes selected text.

<Video 
  source={{webm: 'blog/dev-tool-time/roger-peppe/opening-files-right-click', mp4: 'blog/dev-tool-time/roger-peppe/opening-files-right-click'}} 
  loop={false}
  title="Opening files feels like magic." 
  caption="Opening files feels like magic."
  controls={true}
  autoPlay={false}
/>

As Rog shows, these patterns are remarkably powerful in Acme. In every window, there are sets of commands in what we might recognize as a menu or toolbars. Yet, in Acme, you can write text anywhere and that text is executable. When Rog needs a new command, he writes the script, in Go, the rc shell, or another language, and can execute it just by typing the command name and clicking. Imagine working in Google Docs, opening an edit menu, and clicking on the custom command you wrote. This is the strangeness and familiarity of Acme, which, originally part of the [Plan9 operating system](http://9p.io/plan9/), indicated a different way forward from our contemporary mainstream computing practices.

<Video 
  source={{webm: 'blog/dev-tool-time/roger-peppe/Regex-Demo', mp4: 'blog/dev-tool-time/roger-peppe/Regex-Demo'}} 
  loop={false}
  title="Watch Rog demonstrate structural regular expressions." 
  caption="Watch Rog demonstrate structural regular expressions."
  controls={true}
  autoPlay={false}
/>

## The simplicity of the Acme text editor

For Rog, the driving benefit of Acme is its simplicity. As he notes, in Acme, everything is text and text is powerful. Any text can be executable, and you can type text almost anywhere in Acme. You aren't constrained to toolbars or a single command line, or even the mental model of there being a narrow area of UI that's interactive and command-focused.

<Video 
  source={{webm: 'blog/dev-tool-time/roger-peppe/Text-is-powerful-longer', mp4: 'blog/dev-tool-time/roger-peppe/Text-is-powerful-longer'}} 
  loop={false}
  title="Listen to Rog talk about the power of text." 
  caption="Listen to Rog talk about the power of text."
  controls={true}
  autoPlay={false}
/>

You also don't have to memorize a plethora of keybindings to make you more efficient. While many people talk about keybindings being efficient, Rog finds his mouse is just as efficient and simpler to use. Three buttons are far fewer than the keys on a keyboard and the combinations (chords) are more limited.

> "People talk a lot about the keyboard being efficient, but I find ... the fact that I can just go anywhere and change things, without using the keyboard, really powerful."

There are trade-offs though, and Rog notes that there is a price to pay for simplicity. Acme doesn't support syntax highlighting, graphics, or any sort of rich text. When asked what he might change with a magic wand, Rog mentions that making Acme work coherently with rich text would be great. He doesn't need syntax highlighting or an LSP, but bold would be nice if it made sense.

Given his answer, we can go only guess that Acme feels like a gift that has continued to give to him year after year.

## Show notes

- [Acme port in Go](https://github.com/9fans/go)
- [Acme](http://acme.cat-v.org/)
- [Fully Jarvis sit-stand desk](https://www.fully.com/standing-desks/jarvis-adjustable-height-desk-bamboo.html)
- [Lenovo Thinkpad Carbon X1](https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadx1/x1-carbon-gen-7/22tp2txx17g)
- [Logitech MX Master mouse](https://www.logitech.com/en-us/products/mice/mx-master-3.html)
- [Logitech mice - Rog prefers the older, sturdier versions](https://www.logitech.com/en-us/products/mice.html)
- [Oberon operating system - predecessor of Plan9 and Acme](<https://en.wikipedia.org/wiki/Oberon_(operating_system)>)
- [Plan9 operating system](http://9p.io/plan9/)
- [rc shell](http://doc.cat-v.org/plan_9/4th_edition/papers/rc)
- [Realforce keyboards](https://www.realforce.co.jp/en/)
- [Think Tank Pixel Sunscreen 2](https://www.thinktankphoto.com/products/pixel-sunscreen-v2)
- [Tic Toc Stand Balance Board](https://www.fully.com/tic-toc-stand-balance-board.html)
- [Varier Balans kneeling chair](https://varierchairs.com/kneeling-chairs/variable-balans/)

## Watch the recording

Check out the recording of the episode below, and be sure to [sign up for upcoming events](https://info.sourcegraph.com/dev-tool-time)!

<YouTube 
  title="Dev Tool Time with Roger Peppé"
  id="EhsYGnEiRek"
/>
