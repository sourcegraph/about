---
title: 'Improving code display: A look at 17 developer workspaces'
authors:
  - name: Rob Rhyne
    url: https://handbook.sourcegraph.com/company/team#rob-rhyne
publishDate: 2021-03-16T18:00+02:00
tags: [blog, remote, design]
slug: workspaces-of-sourcegraph
heroImage: https://about.sourcegraph.com/blog/workspaces-of-sourcegraph-final-compressed.jpg
socialImage:  https://about.sourcegraph.com/blog/workspaces-of-sourcegraph-final-compressed.jpg
published: true
description: "We asked 17 Sourcegraph developers about their workspace preferences. Here's what we found."
---

![Workspaces of Sourcegraph graphic](/blog/workspaces-of-sourcegraph-final-compressed.jpg)

Developers read _a lot_. We read books, blog posts, documentation, but mostly, we read code. We read so much code, that many of us have become quite particular about how it is displayed.

Since searching and reading code are intrinsically related, the Sourcegraph design team began to study how we could improve the display of code in Sourcegraph. Our goal is to make reading code easier, so it makes sense that we would study the place developers can decide exactly how their code should look: their editors.

While our research is far from complete, we thought you might find a breakdown of the visual characteristics of where our team writes code of interest.

## Light/dark mode and contrast

Three-quarters of our engineers preferred a dark theme over a light theme. Curiously, the majority of our dark mode users chose a lower contrast between code and background than their light theme oriented peers. Background colors averaged 85% black and the primary code color to background contrast ratio averaged 9 to 1. This seems to contradict the dark themes offered by many other developer tools, where dark is often interpreted as near 100% black and text is often 100% white.

Conversely, all light mode users at Sourcegraph prefer the maximum contrast with 100% white backgrounds and a black primary code color.

![Representative contrast](https://sourcegraphstatic.com/blog/workspaces-of-sourcegraph/workspace-contrast.png)
_Contrast representative of typical dark and light modes._

## Information density

There are clearly two camps: those who use an Integrated Developer Environment (IDE), which in this case is mainly VS Code, and terminal-based editors such as neovim/vim/emacs users. Editor users had around 96% of editor screen real estate dedicated to code. IDE users had from 80% to 90% of their screens dedicated to code or the terminal, with the rest occupied by file trees and other UIs such as menus and tabs.

## Fonts are commonly customized

Over half of our engineers customize their programing font. Among these users, [FiraCode](https://github.com/tonsky/FiraCode) was the most popular choice, followed by [JetBrains Mono](https://www.jetbrains.com/lp/mono/). Other fonts include [MonoStroom](https://github.com/Strum355/MonoStroom), [Cascadia Code](https://github.com/microsoft/cascadia-code), and [Hack](https://sourcefoundry.org/hack/).

Why customize your programming font? Glad you asked! Code, like no other language, can be dramatically altered by the slightest change. Programming fonts make it easier to distinguish characters and can render operators with [custom ligatures](https://github.com/tonsky/FiraCode#whats-in-the-box) to enhance readability. These traits can reduce errors and lead to better applications.

## What we learned

While these results are not statistically significant, one trend does stand out: developers will customize their environments to improve the readability of code. Keep scrolling to check out some of the setups Sourcegraphers have deployed to help them create universal code search.

**What editors, themes and fonts do you use? Tweet us at @sourcegraph to share your thoughts and images. Make sure to not include sensitive information in any screens you share!**

## Workspaces of Sourcegraph

As part of our research, we asked Sourcegraph engineers to share their set up. Here's a look at 17 individual setups in greater detail.

## Rob Rhyne, Product Designer

- Jetbrains (Webstorm, PHPstorm) (trying to switch to vs code)
- Dark mode
- Material theme, Atom one
- XDebug for php

![Workspace of Rob Rhyne, Product Designer](https://sourcegraphstatic.com/blog/workspaces-of-sourcegraph/rob_rhyne.png)

## Christina Forney, VP Product

- VSCode
- Dark mode
- Sourcegraph dark theme
- Sourcegraph for VSCode, markdownlint, Spell Right
- Desktop organization: Browser on the left with reference material, Sourcegraph, preview of what I'm working on. VSCode on the right on my primary screen. My laptop screen to the right of this has iTerm with split windows. Left pane for git flows, right pane for running whatever thing I'm working on (e.g. this blog post!)

![Primary screen workspace organization of Christina Forney, VP Product](https://sourcegraphstatic.com/blog/workspaces-of-sourcegraph/christina_forney1.png)
![Secondary screen workspace organization of Christina Forney, VP Product](https://sourcegraphstatic.com/blog/workspaces-of-sourcegraph/christina_forney2.png)

## Alex Russell-Saw, Software Engineer

- Goland
- [Dracula](https://draculatheme.com/) colour scheme
- Chrome: Either for docs or the current feature I'm working on.
- IdeaVim: I'm still in denial that I'm not using Vim anymore, so I've remapped all of Goland's keybinds into vim-style leader key combinations 🙈
- Ultrawide monitor: They're mostly sold for gaming, but I really like using them for productivity. It gives all the benefits of a multi monitor setup without the desk clutter.
- Desktop organization: Using MacOS fullscreen tiling helps keep things focused. I use dedicated desktop spaces for different 'modes'. For example, working on code, team/company communications, and a dedicated desktop for nonsense like twitter.

![Workspace of Alex Russell-Saw, Software Engineer](https://sourcegraphstatic.com/blog/workspaces-of-sourcegraph/alex_russell-saw.png)

## Keegan Carruthers-Smith, Software Engineer

- Emacs
- Light mode
- [Leuven](https://github.com/fniessen/emacs-leuven-theme) colour scheme
- Either in emacs, browser (Safari) or terminal (kitty). Mostly in emacs since I use it for work journal/issue tracking (org-mode), git (magit), email (notmuch) and code (gopls + lsp).
- My workflow is very keyboard driven. I rely heavily on shortcuts to interact with IDE features (via lsp), run tests, jump around files.

![Workspace of Keegan Carruthers-Smith, Software Engineer](https://sourcegraphstatic.com/blog/workspaces-of-sourcegraph/keegan_carruthers-smith.png)

## Noah Santschi-Cooney, Software Engineer

- VSCode for everything that's not Java/Kotlin.
- Dark mode (except for Slack and Chromium).
- [Atom One Dark](https://marketplace.visualstudio.com/items?itemName=akamud.vscode-theme-onedark) themes for VSCode, IntelliJ, i3/Rofi and Kitty terminal and [modified Adapta Nokto](https://github.com/Strum355/adapta-gtk-theme) for GTK applications.
- Dual monitor with 27" 1440p and 24" 1080p monitors.
- Custom spin of Inconsolata (named [MonoStroom](https://github.com/Strum355/MonoStroom)) as system-wide monospace font.
- Big time user of LSP features (find symbol, find refs/impls etc) and keyboard shortcuts where possible (with vimium for chromium).

![Workspace 1 of Noah Santschi-Cooney, Software Engineer](https://storage.googleapis.com/sourcegraph-assets/blog/workspaces-of-sourcegraph/noah-sc-1.png)
![Workspace 2 of Noah Santschi-Cooney, Software Engineer](https://storage.googleapis.com/sourcegraph-assets/blog/workspaces-of-sourcegraph/noah-sc-2.png)

## Eric Fritz, Software Engineer

- VSCode with [Fira Code](https://github.com/tonsky/FiraCode) and [Nord Extra Dark](https://marketplace.visualstudio.com/items?itemName=yamenarahman.nord-extra-dark), [Rainbow Brackets](https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets), and [Indent-Rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
- Dark mode
- 27" 5k iMac (3.2 GHz 8-core Intel Xeon W, 64GB RAM) and 2x Dell Ultrasharp U2718Q 27" 4K IPS monitors Portrait/Landscape/Portrait mode
- Ergodox EZ with Cherry MX Blue switches
- My [dotfiles](https://github.com/efritz/dotfiles)

![Combined workspace of Eric Fritz, Software Engineer](https://storage.googleapis.com/sourcegraph-assets/blog/workspaces-of-sourcegraph/efritz-combined.png)

## Adam Harvey, Software Engineer

I use a mixture of [Visual Studio Code](https://code.visualstudio.com/) with more or less the recommended language support plugins and nothing else (sometimes in remote mode to a devbox in the cloud, sometimes locally), and [Neovim](https://neovim.io/) with [airline](https://github.com/vim-airline/vim-airline) for a better statusbar and [coc.nvim](https://github.com/neoclide/coc.nvim) to get the same LSP magic as you get in VSCode. I've tried the [native LSP client](https://neovim.io/doc/user/lsp.html) in neovim nightlies, but I hit too many rough edges. I tend to keep my editors as just editors; I don't use builtin terminals or debugging capabilities.

Styling wise, everything is in light mode. I find it helps me focus, and I keep dark mode for late night phone usage when I should be sleeping. I use [Fira Code](https://github.com/tonsky/FiraCode) as a font because I love ligatures, even if I don't always love its serifs. Like Keegan, I'm also very keyboard driven.

In terms of general workflow, I tend to be very single window focused: I run everything in a separate fullscreen window on a separate workspace in [Sway](https://swaywm.org/) on [Arch Linux](https://archlinux.org/), and use hotkeys to switch between workspaces. (1 is always Firefox; 2 is kitty; 3 is personal chat; 4 is Slack; 5 is VSCode; 6+ are used for ad hoc one offs.) Generally speaking, I have as little chrome as possible, besides [Waybar](https://github.com/Alexays/Waybar). Menu bars are usually disabled once I know hot keys, and I have Sway configured to disable title bars unless the workspace has multiple tiled windows or the window is floating for minimal distraction.

![vim workspace of Adam Harvey, Software Engineer](https://storage.googleapis.com/sourcegraph-assets/blog/workspaces-of-sourcegraph/aharvey-1.png)
![VSCode workspace of Adam Harvey, Software Engineer](https://storage.googleapis.com/sourcegraph-assets/blog/workspaces-of-sourcegraph/aharvey-2.png)

## TJ Devries, Software Engineer

- Neovim in Kitty Terminal
- Use Kitty tabs to keep different workflows / setups separate
- Use a lot of neovim builtin terminal / other tools
- Also shown is using Telescope for fuzzy finding files / symbols
- Also shown is floating window for running tests in middle of screen to get quick feedback (I have some stuff setup to run test under cursor, etc.)
- I use JetBrains Mono as the font
- I use custom colorscheme I made awhile ago called gruvbuddy (it started a lot closer to gruvbox)

![Workspace 1 of TJ Devries, Software Engineer](https://storage.googleapis.com/sourcegraph-assets/blog/workspaces-of-sourcegraph/teej_simple_split.png)
![Workspace 2 of TJ Devries, Software Engineer](https://storage.googleapis.com/sourcegraph-assets/blog/workspaces-of-sourcegraph/teej_telescope.png)

## Stephen Gutekanst, Software Engineer

It's a disaster ("method to the madness"), but:

- I usually have open a browser, where the left half of my ~40 or so tabs are related to the PRs and other things I am working on, and the right half are tabs related to research (e.g. Sourcegraph tabs for looking at code I am working on) or things I am helping others on (reviewing RFCs, PRs, etc.)
- I do not use VS Code's terminal support, instead I have generally one terminal open with a tab for each of: the Sourcegraph dev server, git actions in different repositories, scripting I might be doing for a customer, etc.

In my editor I keep open every file (usually < 60) that I have interacted with when working on my current project. I do not ever open files that I am not constantly referencing, and if I need to do a one-off search I use a Sourcegraph browser tab. On the far left tab I have a single scratch doc with random notes. I use the VS Code search feature to jump between code I am working on, with tricks like `) GoMethod(` to find Go methods. I have gopls (the Go langserver) disabled because I often find it taking too many resources and/or preventing me from saving Go files while it tries to run formatting operations.

![Workspace of Stephen Gutekanst](https://storage.googleapis.com/sourcegraph-assets/blog/workspaces-of-sourcegraph/stepheng.png)

## Camden Cheek, Software Engineer

- Neovim / tmux in Alacritty
- Gruvbox dark mode
- [Hack](https://sourcefoundry.org/hack/) font
- Plugins/features highlights
  - Builtin Neovim LSP for code navigation/intel
  - FZF/ripgrep for global file/content search
  - Shortcuts to open my current location in GitHub/Sourcegraph
- Hammerspoon for custom keybindings and window management

![Workspace 1 of Camden Cheek, Software Engineer](https://storage.googleapis.com/sourcegraph-assets/blog/workspaces-of-sourcegraph/camden.png)

## Erik Seliger, Software Engineer

- VSCode
- Light and dark, depending on day time (but more light than dark)
- Standard theme
- Language servers and their refactoring tools
- Multi-cursors
- Editor integrated search a lot too

![Workspace 1 of Erik Seliger, Software Engineer](https://storage.googleapis.com/sourcegraph-assets/blog/workspaces-of-sourcegraph/eriks.png)

## Artem Ruts, Software Engineer

- VSCode to write lots of code:
  - Dark mode
  - Nord theme + Material icon theme + Fira Code
  - Plugins:
    - ESLint + Hadolint + Prettier + Shellformat + shell-check + code spell checker + XML Tools + YAML + Todo Tree + Sourcegraph
    - GO + GraphQL + Docker + Svelte + Reactjs code snippets + Debuggers for Chrome and FF (Some plugins are disabled and I may enable when I need them)
- Nano + syntax highlighting to write less code, tweak things remotely, break things with sudo

![Workspace 1 of Artem Ruts, Software Engineer](https://storage.googleapis.com/sourcegraph-assets/blog/workspaces-of-sourcegraph/artem.png)

## Tomás Senart, Software Engineer

- Neovim in Kitty, VS Code and Goland. I know, it's a mess, but every one of them has its strengths!
- Nord as dark mode, but I like light mode too (Tomorrow Light)

![Workspace of Tomás Senart, Software Engineer](https://storage.googleapis.com/sourcegraph-assets/blog/workspaces-of-sourcegraph/tsenart.png)

## Thorsten Ball, Software Engineer

- Environment: tmux in a fullscreen Kitty window that covers everything
- Editor: Neovim (sometimes VS Code with Vim keybindings for TypeScript/Rust)
- Mode: 90% of the time it’s light with the Lucius colorscheme, 10% it’s dark with the VS Code dark colorscheme
- Font: JetBrains Mono
- Shell: zsh
- Vim configuration: https://github.com/mrnugget/vimconfig
- Dotfiles: https://github.com/mrnugget/dotfiles

I basically do everything either in tmux or in the browser. In tmux I spawn lots of windows/shells as I need them, but have different sessions for work, private recreational programming, and other things. In the browser I always have 3 pinned tabs (for gmail accounts and other email account). I also use Alfred a lot (to search Sourcegraph for example).

![Workspace of Thorsten Ball, Software Engineer](https://storage.googleapis.com/sourcegraph-assets/blog/workspaces-of-sourcegraph/thorsten.png)

## TJ Kandala, Software Engineer

- Editor: VS Code
- Mode: Dark
- Theme: SynthWave 84
- Extensions: Bracket Pair Colorizer, GitLens, Sourcegraph
- Misc: Fira Code font, Tilix terminal emulator

![Workspace of TJ Kandala, Software Engineer](https://storage.googleapis.com/sourcegraph-assets/blog/workspaces-of-sourcegraph/tj.png)

## Quinn Keast, Product Designer

- Nova (Cobalt theme) and VSCode (Cobalt2)
- Typeface: Operator Mono
- Sourcegraph light theme
- Desktop organization: Browser and reference materials on the left, Figma or full-screen editors on the main display. Sometimes I use terminals in the IDE, and other times I use iTerm2.

I'm experimenting with the Nova editor alongside VSCode, which replaced Sublime Text 2. I don't have any standard window setup, shifting as I need for any given design, research, or programming need. I've been using the fantastic Operator Mono font with ligatures and italics for years.

![Primary screen workspace organization of Quinn Keast, Product Designer](https://sourcegraphstatic.com/blog/workspaces-of-sourcegraph/Quinn-Keast-1.png)
![Secondary screen workspace organization of Quinn Keast, Product Designer](https://sourcegraphstatic.com/blog/workspaces-of-sourcegraph/Quinn-Keast-2.png)

# What does your editor look like?

We want to see your setup too! Tweet it to us [@sourcegraph](https://twitter.com/sourcegraph).

### More posts like this

- ['I don't like things that write code for me': Dev Tool Time with Mitchell Hashimoto](/blog/dev-tool-time-mitchell-hashimoto/)
- ['I basically want my whole computing environment to be programmable': Dev Tool Time with Thorsten Ball](/blog/dev-tool-time-thorsten-ball/)
- ['I'm happy to represent the minimalist setup lifestyle': Dev Tool Time with Leah Culver](/blog/dev-tool-time-leah-culver/)
