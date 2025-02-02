---
title: '“I don't like things that write code for me”: Dev Tool Time with Mitchell Hashimoto'
description: 'Mitchell Hashimoto, co-founder, CTO, and now individual contributor at HashiCorp, shares how reproducible environments with NixOS and an iPad fit into his developer workflow, and his sentiments about IDEs.'
authors:
  - name: Scott Bailey
    url: https://handbook.sourcegraph.com/team#scott-bailey
publishDate: 2021-08-25T10:00-07:00
tags: [blog]
slug: dev-tool-time-mitchell-hashimoto
heroImage: https://sourcegraphstatic.com/blog/dev-tool-time/dev-tool-time-mitchell-hashimoto-cover.jpg
socialImage: https://sourcegraphstatic.com/blog/dev-tool-time/dev-tool-time-mitchell-hashimoto-cover.jpg
published: true
---

When [Mitchell Hashimoto](https://twitter.com/mitchellh), co-founder, former CTO, and now engineer at HashiCorp, joined us for [Dev Tool Time](https://info.sourcegraph.com/dev-tool-time) on July 21, 2021, he showed how the simplest and most complex dev tools can fit into a developer workflow.

You can watch the recording of this episode at the [bottom of this blog post](#Watch-the-recording), but first let's check out Mitchell's desk:

![Mitchell's hardware setup](https://sourcegraphstatic.com/blog/dev-tool-time/dev-tool-time-mitchell-hashimoto-desk.jpeg)

## Hardware setup

Mitchell's main computer is an [Apple iMac](https://www.apple.com/imac/), with an ergonomic keyboard from Microsoft and an Anker mouse.

### Other computers:

In a stack on the left, he keeps three different MacBooks of different ages and specs:

- One older laptop used for testing
- An official HashiCorp laptop for use on the go
- A [MacBook Air](https://www.apple.com/macbook-air/) with Apple's M1 silicon for personal use and testing

Mitchell also has a stack of [Raspberry Pi](https://www.raspberrypi.org/) computers to the right of his iMac, which together run a HashiCorp stack.

## [iPad](https://www.apple.com/ipad-pro/) & [Apple Pencil 2](https://www.apple.com/apple-pencil/)

> “I just like this form-factor of carrying something in my hand.”

<Figure 
  src="https://sourcegraphstatic.com/blog/dev-tool-time/dev-tool-time-hashimoto-ipad.png"
  alt="iPad workflow on Mac"
/>

Mitchell uses his iPad and Apple Pencil for a mix of personal and professional work. As a hobbyist pilot, he plots and checks flight paths. As an engineer, he uses the iPad for reading and reviewing code and long-form documents, such as RFCs, and writing handwritten notes with the Apple Pencil and [Goodnotes](https://www.goodnotes.com/). Goodnotes makes it easy to move text around, and reorganize content visually. When he's ready for long-form typing or document creation, Mitchell transfers his notes to his computer with Goodnotes for MacOS and iCloud before drafting in Google Docs, GitHub, or the appropriate app. This setup frees Mitchell from his desk, letting him do code reviews outside.

## [NixOS](https://nixos.org/)

> “I think one thing that always scared me every single year was the MacOS release and like, what would that break?”

Operating system and other software updates regularly break development environments. Mitchell avoids this recurring problem using NixOS in a VM running with [VMware Fusion](https://www.vmware.com/products/fusion.html).

> “My biggest criticism about Nix is that their learning is like a sheer cliff. It's the hardest learning curve of probably in tech I've ever learned.”

Despite its difficult learning curve, NixOS makes the entire development environment reproducible and easy to change, knowing that you can always roll back to previous versions.

Within the NixOS VM, two other tools help Mitchell set and use packages and environment variables just for one session:

- [nix-shell](https://nixos.org/manual/nix/stable/#sec-nix-shell) enables a single-session shell with specific dependencies
- [direnv](https://direnv.net/) provides a consistent approach for setting and accessing environment variables based on directory

## [Neovim](https://neovim.io/)

> “I used to be an Emacs user ... and then I joined this other company and I was harassed on a daily basis about my Emacs use because I was the only Emacs user in the entire company ... I was the butt of every joke! I got so fed up with it I decided to use Vim for one month and I never switched back.”

Neovim provides Mitchell with the straightforward editor experience he wants, and he uses a minimal number of plugins. Two plugins or features of Neovim he uses are:

- [Neovim's LSP support](https://github.com/neovim/nvim-lspconfig) provides dignostic errors and other LSP features
- [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter) provides exceptional syntax highlighting

> “I just don't feel like I personally need an IDE experience ... I don't like things that write code for me; I want to do it myself.”

You can check out Mitchell's Vim config at [mitchell/vim-misc](https://github.com/mitchellh/vim-misc), and it's mostly agnostic between Neovim and Vim.

## Other tools

- [i3](https://i3wm.org/) for window management in the NixOS VM
- [Kitty](https://sw.kovidgoyal.net/kitty/) is Mitchell's preferred terminal inside the VM
- [Slate](https://github.com/jigish/slate) for window management on Mac, mainly used for basic corners and splits
- [Alfred](https://www.alfredapp.com/) for shortcuts and application launching

## Watch the recording

Check out the recording of the episode below, and be sure to [sign up for upcoming events](https://info.sourcegraph.com/dev-tool-time)!

<div className="container my-4 video-embed embed-responsive embed-responsive-16by9">
    <iframe className="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/LA8KF9Fs2sk?autoplay=0&amp;cc_load_policy=0&amp;start=93&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=0&amp;rel=0" allowFullScreen="" allow="accelerometer; autoPlay; encrypted-media; gyroscope; picture-in-picture" frameBorder="0"></iframe>
</div>
