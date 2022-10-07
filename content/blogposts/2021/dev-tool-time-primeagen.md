---
title: 'Thinking less to do more: Dev Tool Time with ThePrimeagen'
description: 'ThePrimeagen, Senior Software Engineer at Netflix and Twitch Partner tech streamer, shares how he reduces cognitive overhead with tmux, i3, and Neovim to write code more effectively.'
authors:
  - name: Scott Bailey
    url: https://handbook.sourcegraph.com/team#scott-bailey
publishDate: 2021-11-03T10:00-07:00
tags: [blog]
slug: dev-tool-time-theprimeagen
heroImage: https://sourcegraphstatic.com/blog/dev-tool-time/primeagen/linkedin.jpg
socialImage: https://sourcegraphstatic.com/blog/dev-tool-time/primeagen/linkedin.jpg
published: true
---

As a popular Twitch streamer and Vim enthusiast, ThePrimeagen is known for his fast-paced tmux and Neovim-focused workflow, shifting quickly between windows, buffers, and code chunks. When he joined us for [Dev Tool Time](https://info.sourcegraph.com/dev-tool-time) on October 27, 2021, he shared his approach to reducing cognitive overhead in his dev workflow and showed how his custom configurations make it easier to think less and do more.

You can watch the recording of this episode at the [bottom of this blog post](#Watch-the-recording), but first let’s check out ThePrimeagen’s desk setup:

## Hardware

![ThePrimeagen's current desk setup](https://sourcegraphstatic.com/blog/dev-tool-time/primeagen/hardware.jpg)

ThePrimeagen's desk setup is doubly determined by his work as a developer and his position as a streamer. While he prefers coding on a single, relatively normal-sized monitor, he has two on his desk. The [Acer Predator](https://www.acer.com/ac/en/US/content/predator-models/monitors) is his primary monitor, which is attached to his [System76](https://system76.com/) laptop running Ubuntu. The second monitor is hooked up to a Windows machine that runs his Twitch stream, since some of his hardware, such as the [Streamdeck](https://www.elgato.com/en/stream-deck) and [GoXLR](https://www.tc-helicon.com/product.html?modelCode=P0CQK), don't yet have Linux drivers. [Kinesis](https://kinesis-ergo.com/) keyboards, notably the [Advantage 2](https://kinesis-ergo.com/shop/advantage2/) take up a chunk of desk space.

As part of his drive to make typing more efficient, ThePrimeagen uses the Dvorak keyboard layout, which optimizes for alternating keypresses between two hands and focuses on the home row among other efficiencies.

## Configuration and cognitive overhead

ThePrimeagen is known for his Vim mastery, which he demonstrates on stream with speed and smoothness. His approach isn't driven purely by speed or efficiency, though. As much as possible, ThePrimeagen tries to reduce thinking about steps he shouldn't have to think about, such as which keybinding will take him to the window with his terminal (Mod+3) or to his always-open [GIMP](https://www.gimp.org/) window (Mod+6).

<Video 
  source={{webm: 'blog/dev-tool-time/primeagen/navigating', mp4: 'blog/dev-tool-time/primeagen/navigating'}} 
  loop={false}
  title="Watch ThePrimeagen demonstrate his setup for navigating windows consistently" 
  caption="Watch ThePrimeagen demonstrate his setup for navigating windows consistently"
  controls={true}
  autoPlay={false}
/>

By consistently organizing keybindings for actions, and building muscle memory, ThePrimeagen cuts down on the small pauses needed to figure out how to perform the next intended action. This approach carries through to his main text editor, [Neovim](https://neovim.io/), for which he, and his co-contributors, built [Harpoon](https://github.com/ThePrimeagen/harpoon), a plugin for file and terminal navigation.

Configuration is personal, though, and while ThePrimeagen's [dotfiles](https://github.com/ThePrimeagen/.dotfiles) are a source of inspiration for many, his own keybindings and preferences are optimized for him. Others might need to take different approaches, or fine-tune the same combination of core apps (i3, tmux, and Neovim) differently. Following ThePrimeagen's approach is about finding problematically complex aspects of your current setup, even if that complexity comes from seemingly ergonomic approaches like mnemonics, and simplifying in a way that works with your own mental model and habits.

<Video 
  source={{webm: 'blog/dev-tool-time/primeagen/thinking', mp4: 'blog/dev-tool-time/primeagen/thinking'}} 
  loop={false}
  title="Listen to ThePrimeagen discuss the importance of reducing complexity to reduce unnecessary thinking" 
  caption="Listen to ThePrimeagen discuss the importance of reducing complexity to reduce unnecessary thinking"
  controls={true}
  autoPlay={false}
/>

## `git worktree` so you don't have to `git stash`

Reducing cognitive overhead is as much about taking advantage of existing tools and workflows as it is extensive configuration. One of ThePrimagen's examples of this is his relatively recent switch to using Git worktrees, which allow you to concurrently checkout multiple branches of a repository. Rather than going through the steps of stashing changes, switching branches, and later on figuring out what to pop, worktrees are an interface to a simpler model of navigating branches.

<Video 
  source={{webm: 'blog/dev-tool-time/primeagen/worktree', mp4: 'blog/dev-tool-time/primeagen/worktree'}} 
  loop={false}
  title="Watch ThePrimeagen demonstrate one of his favorite Git features: worktrees" 
  caption="Watch ThePrimeagen demonstrate one of his favorite Git features: worktrees"
  controls={true}
  autoPlay={false}
/>

## Even milliseconds matter (to ThePrimeagen)

In his VimConf 2020 talk, ["Vim Speed and Excellence"](https://www.youtube.com/watch?v=tCktGgPQ3D0&list=PLcTu2VkAIIWzD2kicFNHN2c35XQCeZdsv), ThePrimeagen examines the ways that using particular commands in Vim can be faster or slower for himself and, by extension, for other individuals. It comes down to milliseconds of gain, but that's worth it for someone who is perpetually evolving a development environment for speed, efficiency, and unobtrusiveness. ThePrimeagen thinks a lot about his setup sometimes, so that the rest of the time, when he's using it, he doesn't really have to think about it at all. Instead, he just codes.

<Video 
  source={{webm: 'blog/dev-tool-time/primeagen/milliseconds', mp4: 'blog/dev-tool-time/primeagen/milliseconds'}} 
  loop={false}
  title="Listen to ThePrimeagen's deep dive on Vim keybindings and time" 
  caption="Listen to ThePrimeagen's deep dive on Vim keybindings and time"
  controls={true}
  autoPlay={false}
/>

## Show notes

- [AKG K712 headphones](https://www.akg.com/Headphones/Professional%20Headphones/K712PRO.html?dwvar_K712PRO_color=Black-GLOBAL-Current&cgid=Professional%20Headphones)
- [Acer Predator monitor](https://www.acer.com/ac/en/US/content/predator-models/monitors)
- [Ansible](https://www.ansible.com/)
- [Audio Technica microphones](https://www.audio-technica.com/en-us/microphones/wired)
- [Dvorak keyboard layout](https://en.wikipedia.org/wiki/Dvorak_keyboard_layout)
- [Elgato capture card](https://www.elgato.com/en/game-capture-4k60-s-plus)
- [GIMP](https://www.gimp.org/)
- [GNU Stow](https://www.gnu.org/software/stow/)
- [Git worktrees](https://git-scm.com/docs/git-worktree)
- [GoXLR](https://www.tc-helicon.com/product.html?modelCode=P0CQK)
- [Harpoon Neovim plugin](https://github.com/ThePrimeagen/harpoon)
- [I3 tiling window manager](https://i3wm.org/)
- [Kinesis Advantage keyboard](https://kinesis-ergo.com/shop/advantage2/)
- [Neovim](https://neovim.io/)
- [OBS](https://obsproject.com/)
- [Streamdeck](https://www.elgato.com/en/stream-deck)
- [System76 laptop](https://system76.com/)
- [Telescope Neovim plugin](https://github.com/nvim-telescope/telescope.nvim)
- [Tldr CLI tool](https://tldr.sh/)
- [Tmux](https://github.com/tmux/tmux)
- [Vim Speed and Excellence - the Primeagen's VimConf 2020 talk](https://www.youtube.com/watch?v=tCktGgPQ3D0&list=PLcTu2VkAIIWzD2kicFNHN2c35XQCeZdsv)

## Select videos from the Primeagen

- [Git's Best and Most Unknown Feature (worktree)](https://www.youtube.com/watch?v=2uEqYw-N8uE)
- [My workflow using Vim #1](https://www.youtube.com/watch?v=2WPC8rZQvQU)
- [My workflow using Vim #2](https://www.youtube.com/watch?v=0fOIp5PH648)

## Watch the recording

Check out the recording of the episode below, and be sure to [sign up for upcoming events](https://info.sourcegraph.com/dev-tool-time)!

<YouTube 
  title="Dev Tool Time with ThePrimeagen"
  id="GXxvxSlzJdI"
/>
