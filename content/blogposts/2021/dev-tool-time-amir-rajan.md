---
title: 'Down the ergonomic rabbit hole: Dev Tool Time with Amir Rajan'
description: 'Amir Rajan, acclaimed indie game dev and co-creator of DragonRuby Game Toolkit, shares the many stages of his hardware setup over the years, and how he uses Emacs as a game dev.'
authors:
  - name: Scott Bailey
    url: https://handbook.sourcegraph.com/team#scott-bailey
publishDate: 2021-10-20T10:00-07:00
tags: [blog]
slug: dev-tool-time-amir-rajan
heroImage: https://sourcegraphstatic.com/blog/dev-tool-time/amir-rajan/amir-rajan.jpg
socialImage: https://sourcegraphstatic.com/blog/dev-tool-time/amir-rajan/amir-rajan.jpg
published: true
---

Wrist pain and fatigue were the start of indie gave developer [Amir Rajan's](https://twitter.com/amirrajan/) journey in ergonomic hardware setups. As a dev and the co-creator of DragonRuby Game Toolkit, Amir needed to find a way to write code week to week, for years to come. When Amir joined us for [Dev Tool Time](https://info.sourcegraph.com/dev-tool-time), he shared his setups over the years, the motivations between different pieces of hardware, and the software he uses to build games.

You can watch the recording of this episode at the [bottom of this blog post](#Watch-the-recording), but let's take a first step with Amir down the ergonomic rabbit hole.

## Developing ergonomics

A few years ago, Amir was hunched over his laptop. When he realized he needed to change his setup for his own health, he made a remarkable shift to get rid of his desk, set up stacked 38" monitors, and moved to the [Ergodox](https://ergodox-ez.com/) keyboard, which is a split, ortholinear keyboard.

<div style={{position: 'relative'}}>
    <blockquote className="twitter-tweet" style={{textAlign:'center'}} data-dnt="true" data-theme="light"><p lang="en" dir="ltr">Will be streaming on Twitch today using my new rig. Got eye tracking working so you'll see exactly where I'm looking when I code. <a href="https://t.co/Toc6h1XB7M">pic.twitter.com/Toc6h1XB7M</a></p>&mdash; Amir Rajan (@amirrajan) <a href="https://twitter.com/amirrajan/status/1008041824911536128?ref_src=twsrc%5Etfw">June 16, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
</div>

Over the next few years, he refined his hardware for comfort, work, and more efficient layouts. He built new keyboards, trying out different mechanical switches (check out the [show notes](#Show-notes) below for some of them), and developed muscle memory with a phonetic mapping for some keys and operators, set up with [QMK](https://qmk.fm/). He went back to a traditional desk, tried different task chairs, and fine-tuned their height to keep his knees and feet in the right places.

<Video 
  source={{webm: 'blog/dev-tool-time/amir-rajan/Setup_Evolution', mp4: 'blog/dev-tool-time/amir-rajan/Setup_Evolution'}} 
  loop={false}
  title="See Amir's setup over the years" 
  caption="See Amir's setup over the years"
  controls={true}
  autoPlay={false}
/>

Two significant monitor changes led to Amir's most recent iteration. He purchased one, then another, 49" curved, ultrawide monitor, which provided the screen real estate for the right number of correctly sized windows. Then, he replaced one of these with the Apple 32" Pro Display XDR monitor, solving his need to verify color levels and quality as he built games for different platforms and displays.

<div style={{position:'relative'}}>
    <blockquote className="twitter-tweet" style={{textAlign:'center'}} data-dnt="true"><p lang="en" dir="ltr">Iteration 16 of my dev setup: <a href="https://t.co/xwtMJE32hc">pic.twitter.com/xwtMJE32hc</a></p>&mdash; Amir Rajan (@amirrajan) <a href="https://twitter.com/amirrajan/status/1441174275386449921?ref_src=twsrc%5Etfw">September 23, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
</div>

Amir keeps an updated gist with links to his setups since 2018. Check them all out here: [Evolution of Amir's battle stage](https://gist.github.com/amirrajan/926cb51ee49a661abdfa6656662c07ca)!

## Developing ergonomically

Amir's hardware setup has developed over time to increase his efficiency and improve his workflows, even as it decreases the physical stress on his body. His software development environment has done much the same. Though Amir uses Vim and modal editing, he wanted a configuration language better than Vimscript. Emacs, with [`evil-mode`](https://github.com/emacs-evil/evil) for modal editing and keybindings, provides a profoundly moldable development environment. To keep it lightweight and responsive, and inheriting from his time with Vim, Amir uses Emacs in the terminal–[Alacritty](https://github.com/alacritty/alacritty), in his case.

DragonRuby Game Toolkit emerged from a desire for a game engine with a fast feedback loop. Ruby proved to be a powerful language and its dynamic character keeps open the possible futures of any game Amir works on. The foundation of a game–its programming language–needs to be flexible enough to not restrict it.

<Video 
  source={{webm: 'blog/dev-tool-time/amir-rajan/Why_Ruby', mp4: 'blog/dev-tool-time/amir-rajan/Why_Ruby'}} 
  loop={false}
  title="Hear Amir explain why he started writing games in Ruby" 
  caption="Hear Amir explain why he started writing games in Ruby"
  controls={true}
  autoPlay={false}
/>

## The ergonomic long-game

In designing and adapting for comfort, health, and efficiency, Amir isn't focused just on today, next week, or even next year.

> "Philosophically, the whole journey I'm taking is based on the idea that I'm going to be programming the rest of my life. Every iteration, every improvement I make, every dive into the bowels of Emacs comes at that upfront investment to learn and deal with these pains so that over time this environment becomes home to me."

<Video 
  source={{webm: 'blog/dev-tool-time/amir-rajan/Setup_ROI', mp4: 'blog/dev-tool-time/amir-rajan/Setup_ROI'}} 
  loop={false}
  title="Listen to Amir talk about the long-game of ergonomics" 
  caption="Listen to Amir talk about the long-game of ergonomics"
  controls={true}
  autoPlay={false}
/>

## Show notes

- [A Dark Room Android](https://play.google.com/store/apps/details?id=com.yourcompany.adarkroom&hl=en_US)
- [A Dark Room Nintendo Switch](https://www.nintendo.com/games/detail/a-dark-room-switch/)
- [A Dark Room iOS](https://apps.apple.com/us/app/a-dark-room/id736683061)
- [A Dark Room](https://adarkroom.doublespeakgames.com/)
- [Alacritty](https://github.com/alacritty/alacritty)
- [Apple Pro Display XDR 32" monitor](https://www.apple.com/pro-display-xdr/)
- [Bfo-9000 keyboard](https://keeb.io/products/bfo-9000-keyboard-customizable-full-size-split-ortholinear)
- [Bias lighting post on Coding Horror](https://blog.codinghorror.com/bias-lighting/)
- [Brad Victor - Inventing on Principle](https://www.youtube.com/watch?v=EGqwXt90ZqA)
- [CherryMX Speed Silver switches](https://www.cherrymx.de/en/cherry-mx/mx-original/mx-speed-silver.html)
- [Ctags](http://ctags.sourceforge.net/)
- [Dank Mono font](https://philpl.gumroad.com/l/dank-mono)
- [Dell 38" curved monitor](https://www.dell.com/en-us/work/shop/dell-ultrasharp-38-curved-usb-c-hub-monitor-u3821dw/apd/210-ayle/monitors-monitor-accessories)
- [Dell 49" UltraSharp curved monitor](https://www.dell.com/en-us/work/shop/dell-ultrasharp-49-curved-monitor-u4919dw/apd/210-arnw/monitors-monitor-accessories)
- [DragonRuby Game Toolkit](https://dragonruby.org/toolkit/game)
- [DragonRuby](https://dragonruby.org/)
- [Emacs](https://www.gnu.org/software/emacs/)
- [Ergodox keyboard](https://ergodox-ez.com/)
- [Evil for Emacs](https://github.com/emacs-evil/evil)
- [Evil-surround for Emacs](https://github.com/emacs-evil/evil-surround)
- [Havit low-profile keyboard](https://www.prohavit.com/products/hv-kb390l-low-profile-mechanical-keyboard?_pos=1&_sid=1898c765a&_ss=r)
- [Herman Miller chairs](https://www.hermanmiller.com/products/seating/)
- [Human scale chairs](https://www.humanscale.com/products/seating)
- [Kailh boxwhite switches](https://switches.mx/kailh-box-white)
- [Nyquist Keymap File](https://github.com/amirrajan/qmk_firmware/blob/b34da133fd0f4b26cd5ca2e62a7038dc53f750b6/keyboards/keebio/nyquist/keymaps/amirrajan/config.h)
- [Nyquist keyboard](https://keeb.io/collections/nyquist-keyboard-collection)
- [Odyssey G9 49" monitor](https://www.samsung.com/us/computing/monitors/gaming/49-odyssey-g9-gaming-monitor-lc49g97tssnxdc/)
- [QMK keyboard firmware](https://qmk.fm/)
- [ReMarkable 2 e-ink tablet](https://remarkable.com/store/remarkable-2)
- [Ruby](https://www.ruby-lang.org/en/)
- [Tmux](https://github.com/tmux/tmux)
- [Tobii EyeTracker](https://gaming.tobii.com/product/eye-tracker-5/)
- [Topre switches](https://deskthority.net/wiki/Topre_switch)
- [Zilent v2 switches](https://zealpc.net/products/zilent?variant=5894817710118)

## Watch the recording

Check out the recording of the episode below, and be sure to [sign up for upcoming events](https://info.sourcegraph.com/dev-tool-time)!

<YouTube 
    title="Dev Tool Time with Amir Rajan"
    id="au_rC39QyzM"
/>
