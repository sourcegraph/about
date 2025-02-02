---
title: '“It's small things that, when combined, make your development experience that much more pleasant”: Dev Tool Time with Paul Jolly'
description: 'Paul Jolly, maintainer on the CUE project and co-creator of Play with Go, shares how a minimalist desk setup, combined with the sophisticated programming language CUE, creates a streamlined development environment.'
authors:
  - name: Nick Moore
    url: https://twitter.com/nickwritesit
publishDate: 2021-09-22T10:00-07:00
tags: [blog]
slug: dev-tool-time-paul-jolly
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/dev-tool-time/dev-tool-time-paul-jolly-hero.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/dev-tool-time/dev-tool-time-paul-jolly-hero.jpg
published: true
---

When Paul Jolly, maintainer on the CUE project and co-creator of Play with Go, joined us for Dev Tool Time on September 15, 2021, he toured us through a workflow that included an eight-year-old laptop, excluded a chair, and involved extensive use of CUE, an open source data validation language.

We split the recording of this episode into two parts: the first focuses on Paul's desk setup and basic development environment; the second focuses on CUE.

Check out the first recording below, and be sure to [sign up for upcoming events](https://info.sourcegraph.com/dev-tool-time)!

<YouTube id="IBHjKNnEM1Q" />

Let's check out Paul's desk:

![Paul's work desk](https://storage.googleapis.com/sourcegraph-assets/blog/dev-tool-time/dev-tool-time-paul-jolly-desk-big.jpeg)

## Hardware setup

Paul called his setup “very uninteresting.” His monitor, perched atop a thick dictionary, oversaw what he called a “standard home office setup.” Not pictured is his chair–because he doesn't have one. Thanks to a standing desk, Paul said, “I haven't had a seat in years.”

Paul's main computer is a late 2013 Macbook Pro that comes with–he's careful to note–real-life function keys: “No touchbar for me.” He also uses a thunderbolt display, an external Apple keyboard, a touchpad, and a basic Microsoft mouse.

In terms of hardware, Paul likes stability. The real magic, as we discovered later in the call, happens in CUE.

## Linux and VMware Fusion

Like Mitchell Hashimoto, [who we hosted in August](https://about.sourcegraph.com/blog/dev-tool-time-mitchell-hashimoto/), Paul does most of his development within Linux, which he runs within VMware Fusion. In terms of disk I/O, development within a VMware Fusion virtual machine, running on top of MacOS, is actually [faster than native Mac](https://www.google.com/url?q=https://github.com/golang/go/issues/28739&sa=D&source=editors&ust=1631903935728000&usg=AOvVaw3lB31d39lsuwMyfXtjHtph).

Paul runs Ubuntu 21.04, though notes he is “very taken” by Mitchell's [NixOS setup](https://about.sourcegraph.com/blog/dev-tool-time-mitchell-hashimoto/#NixOS). Instead of Nix snapshots, he uses VMware Fusion snapshots, which he acknowledges are coarser. Paul is also a heavy user of [AwesomeWM](https://awesomewm.org/), though said he might switch to [i3](https://i3wm.org/) one day.

## Xterm

Paul isn't fancy when it comes to his terminal, using what he describes as a “very plain terminal.” He focuses instead on speed, using plain [xterm](https://xtermjs.org/).

In terms of appearance, he uses a dark gray background theme (“I find it's much easier on the eyes,” he said).

## Vim

> “In 21 years of Vim, I've never even loaded Emacs.”

Paul uses Vim 8.2 and due to its speed and stability, has never felt the need to switch to anything else.

Paul uses a variety of plugins, and is a big fan of self-proclaimed Vim plugin artist [Tim Pope](https://github.com/tpope).

[Unimpaired](https://github.com/tpope/vim-unimpaired) is a particular favorite of Paul's, which comes with “sensible defaults” for the common types of Vim actions you might take. “This has now become muscle memory for me,” Paul said.

[Commentary](https://github.com/tpope/vim-commentary), which enables him to comment and un-comment things in a way that respects the language in use, is another favorite: “It's just small things like that, when combined, that make your development experience that much more pleasant.”

Paul took us through a Go-based project, showing off fzf and its ability to symbol search across his entire workspace, including the main module and all its dependencies.

Viewers could hear Paul's keyboard clicking rapidly as he moved from screen to screen and into and out of definitions. Keyboard shortcuts are his jam: “I'm not a mouse person at all.”

As he wrapped up his examples, Paul said that speed was his most important value: “The only real demands I have of my setup is that it's nice and fast.”

## CUE: A gentle introduction

Paul is a core contributor to the [CUE project](https://github.com/cuelang/cue) and his passion for it enchanted the audience. He spent the bulk of this episode showing us some of what it could do.

### What is CUE?

CUE, in Paul's words, “is an open source language for defining, generating and validating all kinds of data,” including configuration, APIs, database schemas, and code.

[Marcel van Lohuizen](https://twitter.com/mpvl_), an [ex-Googler](https://about.sourcegraph.com/blog/ex-googler-guide-dev-tools/), started CUE in 2018. Marcel, Paul said, has a deep background in configuration management, having been part of the [initial Borg team](https://kubernetes.io/blog/2015/04/borg-predecessor-to-kubernetes/) (Borg is a spiritual predecessor to Kubernetes).

CUE solves a number of pain points, such as dealing with white space in YAML or configuration templating. “If you ever find yourself fighting with white space in YAML,” Paul said, “that is an area that CUE can solve.” Essentially, CUE is trying to solve the problem of configurations at scale. Considering how often non-engineers are in charge of maintaining configuration, Paul explained, CUE is also designed to be approachable and accessible.

The end result is the ability to have a “unified view of your configuration across many different systems, as opposed to different configurations and different tooling for different parts of whatever your system may be.”

### What can CUE do?

In one example, Paul showed how, with CUE, you can have data and schema sitting alongside each other. CUE can translate between different formats and create a single source of truth that works nicely: “All of your tooling can then hang off that,” Paul said.

In another example, Paul used CUE to validate a YAML file to ensure it obeys the schema. Validation is powerful when you're trying to “move as early as possible into your configuration pipeline,” he explained. Instead of leaving configuration to the last minute or trying to quickly work it out when your configuration fails, CUE enables you to figure it out early.

In a third example, Paul used the [Sourcegraph deploy repo](https://github.com/sourcegraph/deploy-sourcegraph) to show a base directory of the YAML specification of all the Kubernetes objects. Paul noted the different services that form part of the Sourcegraph configuration, explaining how maintaining all the regularity between different services and objects can become a headache. Paul showed how you can use CUE to “view things as a unified configuration.” With CUE, Paul was able to remove boilerplate and move things that are common between configurations to the top.

By the end of his CUE tour, Paul said “We've barely scratched the surface.” He pointed viewers toward the [CUE repository](https://github.com/cuelang/cue) to learn more.

## Watch Paul explain CUE

Check out the recording of the CUE tour below, and be sure to [sign up for upcoming events](https://info.sourcegraph.com/dev-tool-time)!

<YouTube id="mU-lEszuht0" />
