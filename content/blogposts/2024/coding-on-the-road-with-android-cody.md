---
title: "Coding on the road with Android and Cody"
authors:
  - name: Tino Wening
    url: https://twitter.com/PriNova75
  
publishDate: 2024-02-20T10:00-07:00
description: "An informal guide for digital nomads, showcasing how Termux and Cody turn your tablet into a beach-friendly coding hub. Ditch the laptop for a lightweight setup with Termux's Linux shell, Visual Studio Code's web interface, and Cody."
tags: [blog, guest-post]
slug: "coding-on-the-road-with-android-cody"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-on-the-road/coding-on-the-road-with-android-cody-og.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-on-the-road/coding-on-the-road-with-android-cody-og.png
---

<Alert type="secondary">This is a guest blog post from our community. <a href="https://discord.com/servers/sourcegraph-969688426372825169" target="_blank">Join our Discord</a> to meet the author and connect with other developers passionate about Code Search and AI!</Alert>

**Hey there, fellow Digital Nomads!** Craving that perfect blend of beachside cocktails and coding deadlines? Ever wished your hotel room came with a built-in IDE, not just a mini bar? Well, strap on your walking shoes and ditch the laptop, because we're about to unlock the secret to mobile coding freedom: [Termux](https://termux.dev/) and [Cody](/cody).

Think of Termux as your secret Swiss Army knife for Android. It's a Linux shell disguised as an app, giving you access to a whole ecosystem of developer tools, right on your tablet. No more lugging around heavy laptops, just whip out your trusty tablet and get coding under that palm tree. 

But wait, there's more! Termux isn't just a fancy terminal, it's your portal to a full-fledged coding environment. 

Enter Visual Studio Code (VS Code), the lightweight code editor that's like your coding bestie. Imagine VS Code, but shrunk down and living inside Termux, ready to party anywhere you go. Open it in any browser, on any device, and boom – instant coding paradise.

But the real magic spell comes with Cody. Think of Cody as the Obi-Wan Kenobi to your coding Luke Skywalker. Cody autocompletes your code, suggests solutions, and even refactors your messy bits like a coding Yoda. No more staring blankly at the screen, Cody's got your back (and your code's future).

<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-on-the-road/image1.jpg"
  alt="Cody as the Obi-Wan Kenobi "
  caption="Cody as the Obi-Wan Kenobi "
/>

With Termux, VS Code, and Cody, the world is your office, and every sunrise is a new coding adventure. Ready to level up your mobile coding game? Buckle up, let's dive into the nitty-gritty!

## Unleashing Your Inner Coding Nomad - Installing Termux, VS Code Web, and Cody

Alright, time to roll up our sleeves and get our hands dirty! We're about to transform your tablet into a coding powerhouse, and trust me, it's easier than wrangling a stubborn Wi-Fi hotspot.

First up, Termux. Ditch the Google Play Store, we're going rogue with f-droid, the independent app haven. Here's the link: [Termux (F-Droid)](https://f-droid.org/en/packages/com.termux/) Just tap, install, and boom – instant Linux playground!

Next up, VS Code Web. It's like magic, but without the capes and weird spells. Just a few quick commands in Termux, and voila – you'll have a web-based coding playground ready to rock.

Here's the quick and dirty guide for the installation wizards among you:

```bash
pkg install tur-repo
pkg update
pkg upgrade -y
pkg install -y \
  build-essential \
  binutils \
  pkg-config \
  python3 \
  nodejs-lts
node -v
pkg install code-server
```

Now, unleash the coding beast with one final command: `code-server .`

Open up your browser and navigate to [localhost:8080](http://127.0.0.1:8080) and **Boom!** You've officially got VS Code Web up and running, ready to code like there's no tomorrow even if you're coding on a beach in Bali. Visit the [coder docs](https://coder.com/docs/code-server/latest/termux#installation) for more information and issues.

Finally, the pièce de résistance: Cody, your AI coding sidekick. Download the extension from within VS Code Web extensions tab.


<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-on-the-road/image2.jpg"
  alt="Screenshot of my tablet with Termux on the left and VS Code with Cody on the right"
  caption="Screenshot of my tablet with Termux on the left and VS Code with Cody on the right"
/>

## Cody: Your AI-powered assistant for Android development

Remember that moment when Luke Skywalker first met Obi-Wan Kenobi? That "whoah, this coding life just got a whole lot cooler" feeling? Well, Cody's basically his coding equivalent – your AI sidekick who elevates your Android development game to Jedi-level. No more staring blankly at the screen, struggling with syntax or logic. Cody's got your back.

Whether you're building a simple game or a complex social media app, Cody is your secret weapon. 

Here's how Cody can help you build Android apps:

* **Android-specific suggestions:** Cody knows all the ins and outs, offering suggestions for activities, layouts, and even resource files.
* **Help with complex tasks:** Need to implement a custom view or handle complex logic? Cody's got your back, providing code snippets and examples to get you started.
* **Speed up your development:** Forget wasting time on boilerplate code or debugging simple errors. Cody takes care of those pesky details, letting you focus on the big picture.

The possibilities are endless, nomads! With Cody, you can build games, productivity apps, social media platforms – anything your nomadic heart desires. And you can do it all from the comfort of your hammock, beach towel, or even that questionable air mattress you found in a hostel in Laos.

With Cody by your side, you'll be coding Android apps like a pro, no matter where your nomadic adventures take you.


<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/cody-on-the-road/image3.jpg"
  alt="Codying on the beach"
  caption="Codying on the beach"
/>

## Bonus: Nomad coding hacks and fun facts

Alright digital nomads, we've unlocked the secrets of coding on the go with Termux, VS Code Web, and Cody. But the adventure doesn't stop there! This bonus chapter is your one-stop shop for optimizing your nomadic coding experience and uncovering some fun facts to fuel your wanderlust.

### Termux tweaks for the tech-savvy Nomad

* **Power up your shell:** Don't settle for the default bash shell! Install [zsh](https://www.zsh.org/) for a more customizable and powerful experience with plugins, themes, and autocompletion.
* **Keyboard ninja moves:** Master essential keyboard shortcuts for faster navigation and editing. Learn to copy, paste, and yank like a pro!
* **Remote access:** Manage your Termux environment from anywhere! Set up SSH access to remotely connect and tinker with your code from another device.

### Fun facts to fuel your Nomadic coding soul

* **Digital Nomad boom:** The number of digital nomads globally is expected to reach 1 billion by 2035! That's a whole lot of laptops on beaches (and hopefully, more Termux tablets!).
* **Fastest Wi-Fi:** South Korea holds the crown for the world's fastest average internet speeds. Get your coding fix in Seoul's bustling cafes or serene temples.
* **Digital Nomad visa paradise:** Estonia offers a special "digital nomad visa" for remote workers, making it a haven for location-independent coders. Imagine coding from a medieval town like Tallinn!

---

Cody can help you code faster, improve your productivity, and unlock new knowledge. Give [Cody](https://sourcegraph.com/cody) a try today!