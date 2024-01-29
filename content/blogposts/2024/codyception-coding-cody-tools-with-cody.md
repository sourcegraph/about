---
title: "Codyception: Coding Cody Tools With Cody For Coding With Cody"
authors:
  - name: Kynlo Akari
    url: https://twitter.com/Kynlos
  
publishDate: 2024-01-26T10:00-07:00
description: "This post with teach you how Custom Commands in Cody can simplify your coding process by automating repetitive tasks, saving time and effort. Kynlo guide you through how these commands make coding more efficient and manageable, transforming complex tasks into simple, one-click solutions."
tags: [blog]
slug: "codyception-coding-cody-tools-with-cody"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/codyception-coding-cody-tools-with-cody.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/codyception-coding-cody-tools-with-cody.png
---

<Alert type="secondary">This is a guest blog post from our community. <a href="https://discord.com/servers/sourcegraph-969688426372825169" target="_blank">Join our Discord</a> to meet the author and connect with other developers passionate about Code Search and AI!</Alert>

OK, I'll admit it took me longer than it should to write that title without messing up, but here we are, there that is, and here we go!

So, now that I've successfully confused half of you before I've even started, let's talk about Custom Commands with Cody.

---

## Friends, Coders, Netizens, lend me your snippets!


Alright, let's get down to why Custom Commands in programming are a big deal. These commands are like your personalized magic wand, allowing you to tailor actions exactly how you want them. In simpler terms, they're your time-saving superheroes, especially when dealing with repetitive tasks. Picture using Cody to add specific comments, edit code, incorporate features, or even translate entire files. To break it down further, it's like creating a button that does something, and you can hit that button as many times as you want without typing a thing again! Pretty handy, right? Now, let's chat about it in the context of our main dude, Cody.

What makes Cody shine is how effortlessly it helps you create and use these commands. This skill transforms your coding journey, making it smoother and more efficient. Cody becomes a trusty sidekick, skilled at handling intricate coding tasks with finesse.

Think of Custom Commands as the helpful guides of your coding journey, leading intricate steps with finesse. Let these commands be your supportive companions, ensuring a smooth and efficient coding experience.

Are you hungry for more details? Let's put away those cookbooks because we don't need recipes any more!

## **Evolving from Recipes to Commands** ##

Gone are the days of being limited to the Recipes tab and submitting pull requests. With Commands, you can effortlessly create and execute reusable prompts without opening the Chat sidebar. This improvement streamlines your workflow and eliminates the need for pull requests, making the process much smoother.

**An example command JSON that would sit comfortably in your cody.json file:**

```json
    "implement-code-analytics-tracking": { 
      "description": "implement-code-analytics-tracking",
      "prompt": "Implement code analytics and tracking features in the current project, providing insights into user behavior and system performance.",
      "context": {
        "codebase": true
      }
    }
```

This would then be called in your editor with a slash command: `/implement-code-analytics-tracking`


## Getting Started with Custom Commands

![](http://cody.kynlo.co.uk/1.png)

To make your life (and mine) easier with getting started with Custom Commands, I [created a handy little tool](https://cody.kynlo.co.uk) for you to use that will generate these commands (which are structured in JSON) based on what you need them to do!

![](http://cody.kynlo.co.uk/codykyn.png)

Now, nobody is forcing you *hides the pool noodle* to use my little tool, and you are absolutely free to go create these manually!  There's [highly detailed documentation](https://sourcegraph.com/notebooks/Tm90ZWJvb2s6MzA1NQ==#custom-commands-194e6b3f-f682-475f-9c66-cfcc84d05c66) written by the amazing [beatrix](https://twitter.com/3eatrix), for those who want to dive even deeper into all of that beautiful behind-the-scenes code!


## Examples of Time-Saving Commands

![](http://cody.kynlo.co.uk/2.png)

```json
    "implement-code-localization-support": {
      "description": "implement-code-localization-support",
      "prompt": "Implement code localization support in the current project, enabling adaptation to different languages and cultural preferences.",
      "context": {
        "codebase": true
      }
    },
    "check-code-code-smells": {
      "description": "check-code-code-smells",
      "prompt": "Check and identify code smells in the current project, suggesting refactoring for improved code quality.",
      "context": {
        "codebase": true
      }
    },
    "evaluate-code-external-apis": {
      "description": "evaluate-code-external-apis",
      "prompt": "Evaluate and report on the usage and reliability of external APIs in the current project, suggesting updates or replacements.",
      "context": {
        "codebase": true
      }
    },
    "implement-code-database-indexing": {
      "description": "implement-code-database-indexing",
      "prompt": "Implement code database indexing strategies in the current project, optimizing data retrieval and query performance.",
      "context": {
        "codebase": true
      }
```

## The cody.json File: Tailoring Commands to Your Needs

Customizing commands is made easy with the `cody.json` file. Here's how you can leverage it:

### Project-Specific Commands:

Create `cody.json` in the `.vscode` directory of your project to make commands accessible only in that workspace. Cody will execute these custom commands when working on the project.

### Global commands:

Create a new `cody.json` file in the `.vscode` directory of your home directory for commands accessible across multiple projects. Cody will be able to execute these global custom commands in any workspace.

### Workspace vs. User Commands

Understanding the scope of your custom commands is essential:

- `cody.json` in a project's `.vscode` folder: Commands are available only in that workspace.
- `cody.json` in the home `.vscode` folder: Commands are available globally across all workspaces.

This flexibility allows you to organize project-specific commands separately from reusable commands accessible globally, enhancing your customization capabilities with Cody.

## Cody's custom commands syntax

### Running commands made simple
Executing commands is a breeze with these options:

- Type / in the chat box and select your desired command from the pop-up list.

- Use ctrl+shift+v (cmd+shift+v on macOS) anywhere in your document to open the Command Menu, and just like magic, you can select and run commands without the chat sidebar.

- Right-click on selected code to open the Cody context menu and choose a command.

- Search for >Cody: Commands Menu in your Command Palette to access the Command Menu.

## How I created the commands for [Codyception](https://cody.kynlo.co.uk) with the help of Cody


So, picture this: I'm just casually thinking about Cody helping me out with some commands. Started with a simple "Wouldn't that be cool?" But being the curious coder I am, I wondered, "How many commands can Cody handle before things get crazy or I break it?" Little did I know, this innocent thought would take me on a coding adventure.

I let Cody loose, and things got a bit chaotic. Like a coding wizard on an espresso kick, Cody started throwing out commands left and right. Imagine a hyper-caffeinated robot taking control of your command center – that's the rollercoaster I signed up for. "More commands!" I said, and Cody happily complied, not realizing the command overload on the horizon.

Fast forward, and I found myself surrounded by around 700 commands. Yeah, seven hundred! Might have gone a tad overboard, but who's counting when you're knee-deep in Codyception?

Sharing this with the coding community, I was amazed at how it all turned out. What started as a simple idea became a bit of a command-generating adventure.

Now, nursing a headache from thinking of a blog title, I'm reflecting on this coding journey. It's like juggling code snippets on a unicycle – challenging yet oddly satisfying.

Lesson learned: Letting Cody loose can lead to a coding adventure. A bit of experimentation can spark a journey. I might need a virtual coffee to recover, but hey, Codyception is out there, adding some coding fun.

Speaking of Cody, this was powered by GPT-4 Turbo. The token usage could've been a bit much if not for Cody Pro. Seriously, if you haven't upgraded, consider it!

Cody became my go-to AI Coding Assistant, thanks to the variety of models, especially GPT-4 Turbo, and the cool Cody Pro features. The team and the friendly Discord community make Cody stand out. Great support, quick bug fixes, and constant feature additions make Cody a coding gem.

Hope this peek into Cody and Custom Commands sparks your curiosity. Now that you're deep into this post, you might want to try these tricks and commands yourself!

Feel free to join us on Discord. Share your creations and let's nerd out together!

With that, I bid you farewell!

Until next time :)