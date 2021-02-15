---
title: The workspaces of Sourcegraph
author: Rob Rhyne
authorUrl: https://twitter.com/robrhyne
publishDate: 2021-02-10T18:00+02:00
tags: [blog, remote, design]
slug: workspaces-of-sourcegraph
published: true
---

The Sourcegraph design team is exploring how to improve the display of code throughout the application. As part of this exploration, we are reviewing trends in typography, color schemes, and UI complexity in the places our engineers view code the most… their editors.  While our research is far from complete, we thought you might find a breakdown of the visual characteristics of where our team writes code of interest. 

## Light/dark mode and contrast
Three quarters of our engineers preferred a dark theme over a light theme.  Curiously, the majority of dark mode users chose a low contrast between code and background. Backgrounds colors averaged 85% black while the  primary code color to background contrast ratio was around 9 to 1. 

Conversely, all light mode users at Sourcegraph prefer the maximum contrast with 100% white backgrounds and a black primary code color. 

![Representative contrast](https://sourcegraphstatic.com/blog/workspaces-of-sourcegraph/workspace-contrast.png)

## Information density
There are clearly two camps… those who use an IDE (mainly VS Code) and terminal based editors such as neovim/vim/emacs users. Editor users had around 96% of editor screen real estate dedicated to code. IDE users had from 80 to 90% of their screens is dedicated to code or the terminal, with the rest occupied by file trees and other UI such as menus and tabs. 

## Fonts are commonly customized
Over half of our engineers customize their programing font.  Among these users, [FiraCode](https://github.com/tonsky/FiraCode) was the most popular choice (those [programming ligatures](https://github.com/tonsky/FiraCode#whats-in-the-box) are amazing) followed by  [JetBrains Mono](https://www.jetbrains.com/lp/mono/). Other fonts include  [MonoStroom](https://github.com/Strum355/MonoStroom) , [Cascadia Code](https://github.com/microsoft/cascadia-code)),  and [Hack](https://sourcefoundry.org/hack/).


# Some of our developer’s setups:

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
- Chrome: either for docs or the current feature i'm working on.
- IdeaVim: i'm still in denial that i'm not using Vim anymore, so i've remapped all of Goland's keybinds into vim-style leader key combinations 🙈
- Ultrawide monitor: they're mostly sold for gaming, but i really like using them for productivity, it gives all the benefits of a multi monitor setup without the desk clutter.
- Desktop organization: Using MacOS fullscreen tiling helps keep things focused, i use dedicated desktop spaces for different 'modes' eg working on code, team/company comms, and a dedicated desktop for nonsense like twitter.

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

I use a mixture of VS Code with more or less the recommended plugins and nothing else (sometimes in remote mode to a devbox in the cloud; sometimes locally), and neovim with airline (for a better statusbar) and coc (for LSP purposes) — I've tried the native support in neovim nightlies, but I hit too many rough edges. Everything is in light mode. Like Keegan, I'm also very keyboard driven.

I don't tend to layer much else into my editing experience: I use a separate terminal (kitty), rather than the builtin ones.

Outside of that, I tend to be very single window focused: I run everything in a separate fullscreen window on a separate workspace in Sway, and use hotkeys to switch between workspaces. (1 is always Firefox; 2 is kitty; 3 is personal chat; 4 is Slack; 5 is VSCode; 6- are used for ad hoc one offs.) Generally speaking I have as little chrome as possible: menu bars are usually disabled once I know hot keys, and I have sway configured to disable titlebars unless the workspace is split or the window is floating. Minimal distraction.

![Workspace 1 of Adam Harvey, Software Engineer](https://storage.googleapis.com/sourcegraph-assets/blog/workspaces-of-sourcegraph/aharvey.png)

## TJ Devries, Software Engineer

- Neovim in Kitty Terminal
- Use Kitty tabs to keep different workflows / setups separate
- Use a lot of neovim builtin terminal / other tools
- Also shown is using Telescope for fuzzy finding files / symbols
- Also shown is floating window for running tests in middle of screen to get quick feedback (i have some stuff setup to run test under cursor, etc.)
- I use JetBrains Mono as the font
- I use custom colorscheme I made awhile ago called gruvbuddy (it started a lot closer to gruvbox)

![Workspace 1 of TJ Devries, Software Engineer](https://storage.googleapis.com/sourcegraph-assets/blog/workspaces-of-sourcegraph/teej_simple_split.png)
![Workspace 2 of TJ Devries, Software Engineer](https://storage.googleapis.com/sourcegraph-assets/blog/workspaces-of-sourcegraph/teej_telescope.png)

## Stephen Gutekanst, Software Engineer

It's a disaster ("method to the madness"), but:

- I usually have open a browser, where the left half of my ~40 or so tabs are related to the PRs and other things I am working on, and the right half are tabs related to research (e.g. Sourcegraph tabs for looking at code I am working on) or things I am helping others on (reviewing RFCs, PRs, etc.)
- I do not use VS Code's terminal support, instead I have generally one terminal open with a tab for each of: the Sourcegraph dev server, git actions in different repositories, scripting I might be doing for a customer, etc.

In my editor I keep open every file (usually <60) that I have interacted with when working on my current project (in this case, the backend for Code Insights.) I do not ever open files that I am not constantly referencing, if I need to do a one-off search I use a Sourcegraph browser tab. On the far left tab I have a single scratch doc with random notes. I use the VS Code search feature to jump between code I am working on, with tricks like `) GoMethod(` to find Go methods. I have gopls (the Go langserver) disabled because I often find it taking too many resources and/or preventing me from saving Go files while it tries to run formatting operations.

![Workspace of Stephen Gutekanst](https://storage.googleapis.com/sourcegraph-assets/blog/workspaces-of-sourcegraph/stephen.png)

## Camden Cheek, Software Engineer

- Neovim / tmux in Alacritty
- Gruvbox dark mode
- [Hack](https://sourcefoundry.org/hack/) font
- Plugins/features highlights
  - Builtin Neovim LSP for code navigation/intel
  - FZF/ripgrep for global file/content search
  - Shortcuts to open my current location in Github/Sourcegraph
- Hammerspoon for custom keybindings and window management

![Workspace 1 of Camden Cheek, Software Engineer](https://storage.googleapis.com/sourcegraph-assets/blog/workspaces-of-sourcegraph/camden.png)

## Erik Seliger, Software Engineer

- VSCode
- Light and dark, depending on day time (but more light than dark)
- Standard theme
- Language servers and their refactoring tools
- Multi-cursors
- Editor integrated search a lot too

![Workspace 1 of Erik Seliger, Software Engineer](https://storage.googleapis.com/sourcegraph-assets/blog/workspaces-of-sourcegraph/erik.png)

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

- Neovim in Kitty, VS Code and Goland — I know, it's a mess, but every one of them has its strengths!
- Nord as dark mode, but I like light mode too (Tomorrow Light)

![Workspace of Tomás Senart, Software Engineer](https://storage.googleapis.com/sourcegraph-assets/blog/workspaces-of-sourcegraph/tsenart.png)

## Gonzalo Peci, Engineering Manager

- Editor: VSCode
- Mode: Dark is life
- Theme: Switching between a custom Monokai Pop (a saturated version of monokai) and Dracula
- Plugins/features: I'll just install as needed, but mostly LSPs, :emojisuggest:, TODO Highlight, colorize, .editorconfig., Fira Code but have been trying, Cascadia Code. Shoutout for Inconsolata before I moved to fonts with ligatures.
- Console: zsh + Starship Theme + fzf + bat = :heart:

![Workspace of Gonzalo Peci, Engineering Manager](https://storage.googleapis.com/sourcegraph-assets/blog/workspaces-of-sourcegraph/gonza.png)


## Thorsten Ball, Software Engineer

- Environment: tmux in a fullscreen Kitty window that covers everything
- Editor: Neovim (sometimes VS Code with Vim keybindings for TypeScript/Rust)
- Mode: 90% of the time it’s light with the Lucius colorscheme, 10% it’s dark with the VS Code dark colorscheme
- Font: JetBrains Mono
- Shell: zsh
- Vim configuration: https://github.com/mrnugget/vimconfig
- Dotfiles: https://github.com/mrnugget/dotfiles

I basically do everything either in tmux or in the browser. In tmux I spawn lots of windows/shells as I need them, but have different sessions for work, private recreational programming, and other things.  In the browser I always have 3 pinned tabs (for gmail accounts and other email account). I also use Alfred a lot (to search Sourcegraph for example).

![Workspace of Thorsten Ball, Software Engineer](https://storage.googleapis.com/sourcegraph-assets/blog/workspaces-of-sourcegraph/thorsten.png)


## TJ Kandala, Software Engineer

- Editor: VS Code
- Mode: Dark
- Theme: SynthWave 84
- Extensions: Bracket Pair Colorizer, GitLens, Sourcegraph
- Misc: Fira Code font, Tilix terminal emulator

![Workspace of TJ Kandala, Software Engineer](https://storage.googleapis.com/sourcegraph-assets/blog/workspaces-of-sourcegraph/tj.png)


# What does your editor look like? 

What editors, themes and fonts do you use? DM or tweet us at [@srcgraph](https://twitter.com/srcgraph) to share your thoughts and images. /Make sure to not include sensitive information in any screens you share!/
