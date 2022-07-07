---
title: '“I basically want my whole computing environment to be programmable”: Dev Tool Time with Thorsten Ball'
description: 'Thorsten Ball, software engineer at Sourcegraph, shares how he uses tmux as a window manager for the terminal, and goes to bat for Vim.'
authors:
  - name: Rebecca Dodd
    url: https://handbook.sourcegraph.com/team/#rebecca-dodd
publishDate: 2021-08-18T10:00-07:00
tags: [blog]
slug: dev-tool-time-thorsten-ball
heroImage: https://sourcegraphstatic.com/blog/dev-tool-time/dev-tool-time-thorsten-ball.jpg
socialImage: https://sourcegraphstatic.com/blog/dev-tool-time/dev-tool-time-thorsten-ball.jpg
published: true
---

Our very first guest for Dev Tool Time was [Thorsten Ball](https://handbook.sourcegraph.com/company/team#thorsten-ball), a software engineer here at Sourcegraph. Thorsten is on the [Batch Changes](https://handbook.sourcegraph.com/engineering/batch-changes) team and works in just two main applications throughout the day: a browser and the terminal, in which he uses tmux as a window manager.

You can watch the recording of this episode at the [bottom of this blog post](#Watch-the-recording), but first let’s check out Thorsten’s desk:

![Thorsten’s hardware setup](https://sourcegraphstatic.com/blog/dev-tool-time/thorsten_ball_desk_setup.jpg)

## Hardware setup

> “If somebody is thinking about whether they should buy an expensive chair or not, they should. It’s invaluable ... I’m embarrassed to say, but I guess it’s like 12 hours a day [I spend in this chair] and I don’t have any back pain or anything, I’m super comfortable.”

Thorsten’s combo of Steelcase [height-adjustable desk](https://www.steelcase.com/products/height-adjustable-desks/ology/) and [chair](https://www.steelcase.com/products/office-chairs/gesture/) keep him comfortable even on long days starting with personal programming, followed by work, and then gaming in the evening. He bought the [gaming mouse](https://www.razer.com/gaming-mice/razer-deathadder-v2/RZ01-03210100-R3U1) on a whim and highly recommends it: “It’s amazing how much it changes the feel of how you use a mouse.”

### Other hardware:

- MacBook Pro ’16, 2020, 64GB, 16 core
- Desktop computer under desk:
  - OS: Dual booting Windows/Linux, mainly used for gaming on Windows
  - CPU: AMD Ryzen 7 5800X, 8x 3.8GHz, 32MB L3 Cache
  - GPU: NVIDIA GeForce RTX 3070, 8GB
  - RAM: 64GB DDR4-3000 CL16, Corsair Vengeance LPX black
  - SSD1: 1TB Samsung 970 Evo Plus, M.2 PCIe
  - SSD2: 500GB Samsung 970 Evo Plus, M.2 PCIe
- [HP Z27 4k monitor](https://www.hp.com/us-en/shop/pdp/hp-z27-27-inch-4k-uhd-display-2tb68a4-191628968732-partner)
- [Shure BETA 87a microphone](https://www.shure.com/en-GB/products/microphones/beta_87a)
- [Focusrite Scarlett 2i2 USB audio interface](https://focusrite.com/en/usb-audio-interface/scarlett/scarlett-2i2)
  [Bose QuietComfort 35 Wireless noise-canceling headphones](https://www.bose.co.uk/en_gb/products/headphones/over_ear_headphones/quietcomfort-35-wireless-ii.html#v=qc35_ii_black)
- [DURGOD TAURUS k320 Mechanical Keyboard (Cherry MX switches) in brown](https://www.durgodkeyboard.com/product/durgod-k320-taurus-mechanical-keyboard-cherry-mx-switches-nkro-87-key-gaming-keyboard/)

## [Google Chrome](https://www.google.com/intl/en_uk/chrome/)

> “I have three pinned tabs in Chrome: my personal email, my other personal email, and my work email, and the rest of the tabs I close at the end of the day because I’m a good person.”

## [Kitty](https://sw.kovidgoyal.net/kitty/)

Thorsten’s terminal app of choice for the moment is Kitty, which he sets to non-native full-screen mode. This makes it _actually_ full screen, so you don’t see any other windows or distractions.

## [tmux](https://github.com/tmux/tmux/wiki)

In the terminal everything happens inside tmux. Thorsten has dedicated sessions for different projects. He spawns **a lot** of
windows and panes as he goes, often closing them after running a single
command.

He essentially uses tmux as a window manager, since (as mentioned above) Kitty is always in non-native full screen mode, where it covers _everything_.

Inside tmux Thorsten uses:

- zsh
- neovim (now also switched over to built-in LSP support)
- fzf
- z
- riprep

## [Vim](https://www.vim.org/) and [Neovim](https://neovim.io/)

This is Thorsten’s main editor thanks to our coworker [TJ](https://www.twitch.tv/teej_dv), a Neovim core contributor, who worked on bringing [built-in LSP support](https://github.com/neovim/nvim-lspconfig) to Neovim.

<Figure
  src="https://sourcegraphstatic.com/blog/dev-tool-time/dev-tool-time-thorsten-neovim-lsp.png"
  alt="Neovim LSP"
/>

> “Down here at the bottom there’s a small X and a 1 which means you know there’s one error in the file and you can jump to it from wherever you are in the file... that has been a source of joy in the past two weeks.”

Thorsten’s also a big fan of Vim’s modal editing:

> “Once you get used to it and you grok it, then you don’t want to miss it. Editing text becomes fun and enjoyable.”

## [Alfred](https://www.alfredapp.com/)

A sort of predecessor to Spotlight, Alfred is a tool Thorsten uses for shortcuts when searching with [Sourcegraph](https://sourcegraph.com/) and handy helpers.

## [GitHub](https://github.com/)

Our workflow at Sourcegraph is based on Git, so Thorsten uses the [GitHub CLI](https://github.com/cli/cli) to open PRs and view them.

## Other tools

These weren’t covered in the episode but are also key parts of Thorsten's stack:

- [Todoist](https://todoist.com/) as a todo app, on second screen
- [Fantastical](https://flexibits.com/fantastical) as a calendar, also second screen
- Sometimes [VS Code](https://code.visualstudio.com/), if he does TypeScript
- [Cleanshot X](https://cleanshot.com/)
- [Monodraw](https://monodraw.helftone.com/)

## Watch the recording

Check out the recording of the episode below, and be sure to [sign up for upcoming events](https://info.sourcegraph.com/dev-tool-time)!

<div className="container my-4 video-embed embed-responsive embed-responsive-16by9">
    <iframe className="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/ZaQLiHdybX4?autoplay=0&amp;cc_load_policy=0&amp;start=93&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=0&amp;rel=0" allowFullScreen="" allow="accelerometer; autoPlay; encrypted-media; gyroscope; picture-in-picture"frameBorder="0"></iframe>
</div>
