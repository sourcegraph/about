---
title: 'Accessibility, observability, and sustainability: Dev Tool Time with Liz Fong-Jones'
description: 'Liz Fong-Jones, Principal Developer Advocate at Honeycomb and long-time Site Reliability Engineer (SRE), shares how nano, Honeycomb, and ARM processors fit together into a moveable, minimal workflow for development.'
authors:
  - name: Scott Bailey
    url: https://handbook.sourcegraph.com/team#scott-bailey
publishDate: 2021-09-16T10:00-07:00
tags: [blog]
slug: dev-tool-time-liz-fong-jones
heroImage: https://sourcegraphstatic.com/blog/dev-tool-time/dev-tool-time-fong-jones-cover.jpg
socialImage: https://sourcegraphstatic.com/blog/dev-tool-time/dev-tool-time-fong-jones-cover.jpg
published: true
---

When [Liz Fong-Jones](https://www.lizthegrey.com/), Principal Developer Advocate at Honeycomb and experienced Site Reliability Engineer (SRE), joined us for [Dev Tool Time](https://info.sourcegraph.com/dev-tool-time) on September 1, 2021, she shared how her setup and workflow bridge the current state of development and the future that’s already arriving.

You can watch the recording of this episode at the [bottom of this blog post](#Watch-the-recording), but first let’s check out Liz’s main desk setup:

## Hardware setup

Liz’s setup stresses ergonomics, and includes two monitors and a mechnical keyboard. On her desk are two computers: an AMD64 box and an ARM64 box with a 16 cores at 2.2GHz, 32 GB ram.

![Liz’s main work desk](https://sourcegraphstatic.com/blog/dev-tool-time/dev-tool-time-fong-jones-desk.jpg)

## Accessibility

Liz’s desk isn’t the only place she works, though. Despite an ergonomic setup, Liz’s chronic fatigue condition makes it difficult to work at the desk for long periods of time. As an advocate for disability visibility, Liz is open about working from bed as needed. To make this more effective, Liz works on a 2017 [Google Pixelbook](https://support.google.com/pixelbook/answer/7503982?hl=en), which is lightweight enough to be balanced with a pinky finger. When she needs to, she can SSH in to her desktops to access further computing resources.

![Liz’s reclined work setup](https://sourcegraphstatic.com/blog/dev-tool-time/dev-tool-time-fong-jones-bed-cropped.jpg)

Her approach to making work possible in different setups carries over to many of the development tools she uses.

> “I live and die by my terminal... I don’t use VS Code. I literally only use browser tabs and terminal.”

Liz aims to use tools that are accessible across devices with different levels of computer power, and regularly installed in most computing environments. For a text editor she uses [GNU nano](https://www.nano-editor.org/), which is installed everywhere, lightweight, and relatively easy to learn and use compared to other terminal editors like Vim and Emacs.

In her terminal, which runs [Bash](https://www.gnu.org/software/bash/), she uses [Powerline](https://powerline.readthedocs.io/en/latest/index.html) with the default config to manage complexity and add nice-to-have features, such as visiblity on current host and background jobs. Using this set of tools makes Liz’s setup easily accessible in new computing environments.

## Observability

Liz’s dev workflow follows a structure that might be familiar for many devs. She uses [Git](https://git-scm.com/) for version control, works on a local copy of a repo in her editor (GNU nano), and pushes to a remote that’s hooked up with [CircleCI](https://circleci.com/) to run a variety of actions. Differently from some devs, she doesn’t rely on her local editor to run formatting steps or lint code. Instead, CircleCI] takes care of these steps, along with deployment and other actions.

This automation goes hand in hand with Liz’s attention to [observability](https://www.honeycomb.io/what-is-observability/), which emphasizes the capacity to introspect a system and understand its internal state. Automated builds and infrastructure configuration, using tools such as [Chef](https://www.chef.io/) and [Terraform](https://www.terraform.io/), increase the transparency of the systems with which Liz regularly works. As part of her work for [Honeycomb](https://www.honeycomb.io/), Liz uses Honeycomb, and shifting into its interface to understand workflows, processes, and debug errors or failures is a key part of her workflow.

<Video 
  source={{webm: 'blog/dev-tool-time/dev-tool-time-fong-jones-observability', mp4: 'blog/dev-tool-time/dev-tool-time-fong-jones-observability'}} 
  loop={false}
  title="Watch Liz use Honeycomb as part of her dev workflow." 
  caption="Watch Liz use Honeycomb as part of her dev workflow."
  controls={true}
  autoPlay={false}
/>

## Sustainability

> “You heard it first at Dev Tool Time: 'The future is Linux on the desktop on top of ARM64.’”

One of Liz’s desktop machines has an ARM64 processor, and she notes that it runs on 25 watts, roughly a quarter of a comparable AMD64/Intel CPU. ARM64 processors are generally more energy efficient, very performant, and can be cheaper than alternatives. Honeycomb already runs part of its compute workflows on ARM64, despite the relative paucity of cloud providers. Liz’s own ARM64 desktop makes it easy to run native builds locally, while CircleCI’s support for ARM64 automates the process for other developers at Honeycomb.

The use of ARM64 is compelling, not just for the performance and cost. It’s also part of a future of computing that attends to the sustainability of our environment given the ever expanding role of computing in society. This concern for sustainability isn’t just business, but a commitment that shapes Liz’s own choices in hardware.

<Video 
  source={{webm: 'blog/dev-tool-time/dev-tool-time-fong-jones-arm64', mp4: 'blog/dev-tool-time/dev-tool-time-fong-jones-arm64'}} 
  loop={false}
  title="Hear Liz discuss the benefits and limitations of ARM64 in the current development ecosystem." 
  caption="Hear Liz discuss the benefits and limitations of ARM64 in the current development ecosystem."
  controls={true}
  autoPlay={false}
/>

## Show notes

- [ARM64](https://en.wikipedia.org/wiki/AArch64)
- [Bash](https://www.gnu.org/software/bash/)
- [Chef](https://www.chef.io/)
- [CircleCI](https://circleci.com/)
- [Git](https://git-scm.com/)
- [Honeycomb](https://www.honeycomb.io/)
- [Launchdarkly](https://launchdarkly.com/)
- [Powerline](https://powerline.readthedocs.io/en/latest/index.html)
- [Proton](https://github.com/ValveSoftware/Proton)
- [Terraform](https://www.terraform.io/)
- [Tilt](https://tilt.dev/)
- [Yubikey](https://www.yubico.com/)
- [gofmt](https://pkg.go.dev/cmd/gofmt)
- [nano](https://www.nano-editor.org/)
- [prettier](https://prettier.io/)

## Watch the recording

Check out the recording of the episode below, and be sure to [sign up for upcoming events](https://info.sourcegraph.com/dev-tool-time)!

<YouTube 
  title="Dev Tool Time with Liz Fong-Jones"
  id="QlR9jdj0sa4"
/>
