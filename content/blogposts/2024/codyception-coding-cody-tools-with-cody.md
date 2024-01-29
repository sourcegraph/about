---
title: "Codyception: Coding Cody Tools With Cody For Coding With Cody"
authors:
  - name: Kynlo Akari
    url: https://twitter.com/Kynlos
  
publishDate: 2024-01-29T10:00-07:00
description: "This post with teach you how Custom Commands in Cody can simplify your coding process by automating repetitive tasks, saving you time and effort."
tags: [blog]
slug: "codyception-coding-cody-tools-with-cody"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/codyception-coding-cody-tools-with-cody-v4.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/codyception-coding-cody-tools-with-cody-v4.png
---

<Alert type="secondary">This is a guest blog post from our community. <a href="https://discord.com/servers/sourcegraph-969688426372825169" target="_blank">Join our Discord</a> to meet the author and connect with other developers passionate about Code Search and AI!</Alert>

OK, I'll admit it took me longer than it should to write that title without messing up, but here we are, there that is, and here we go!

So, now that I've successfully confused half of you before I've even started, let's talk about Custom Commands with Cody.

---

## Friends, Coders, Netizens, lend me your snippets!


To start with, let's talk about the significance of Custom Commands within the realm of programming and automation. Commands play an important role by giving you the ability to define specific actions for your needs, saving you time. Consider scenarios like utilizing Cody to insert specific types of comments, code editing, or even language translation for entire files. In even more simplistic terms, they let you make a button that does a thing, then you can click that button to do that thing an unlimited amount of times without having to type anything again!  Sound good? I bet it does...so let's talk about it in the context of our main man Cody.

The elegance of Cody lies in its seamless facilitation of the creation and integration of these commands. This capability transforms the coding landscape, rendering your journey notably more streamlined and efficient. Cody becomes a reliable companion, adept at executing nuanced coding tasks with dexterity.

In essence, Custom Commands serve as the virtuosos of your coding orchestra, orchestrating intricate symphonies with finesse. As you navigate the coding landscape, allow these commands to be your skilful conductors, ensuring a harmonious and efficient coding experience. 

Are you hungry for more details? Let's put away those cookbooks because we don't need recipes any more!

### Evolving from Recipes to Commands

Gone are the days of being limited to the Recipes tab and submitting pull requests. With Commands, you can effortlessly create and execute reusable prompts without opening the Chat sidebar. This improvement streamlines your workflow and eliminates the need for pull requests, making the process much smoother.

**An example command JSON that would sit comfortably in your cody.json file:**

```json
    "algorithm-analysis": {
      "description": "algorithm-analysis",
      "prompt": "Analyze and document the algorithms used in the code, detailing their efficiency and how they achieve their intended purpose.",
      "context": {
        "codebase": true,
        "selection": true,
        "currentFile": true
      }
```

This would then be called in your editor with a slash command: `/implement-code-analytics-tracking`


## Getting Started with Custom Commands

![](https://storage.googleapis.com/sourcegraph-assets/blog/codyception-coding-cody-tools-with-cody-001.png)

To make your life (and mine) easier with getting started with Custom Commands, I [created a handy little tool](https://cody.kynlo.co.uk) for you to use that will generate these commands (which are structured in JSON) based on what you need them to do!

![](https://storage.googleapis.com/sourcegraph-assets/blog/codyception-coding-cody-tools-with-cody-002.jpg)

Now, nobody is forcing you *hides the pool noodle* to use my little tool, and you are absolutely free to go create these manually!  There's [highly detailed documentation](https://sourcegraph.com/notebooks/Tm90ZWJvb2s6MzA1NQ==#custom-commands-194e6b3f-f682-475f-9c66-cfcc84d05c66) written by the amazing [beatrix](https://twitter.com/3eatrix), for those who want to dive even deeper into all of that beautiful behind-the-scenes code!


## Examples of Time-Saving Commands

![](https://storage.googleapis.com/sourcegraph-assets/blog/codyception-coding-cody-tools-with-cody-003.png)

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

## The cody.json File: Tailoring Commands to Your Needs ##

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

## How I created the commands for [Codyception](https://cody.kynlo.co.uk) with the help of Cody ##


Alright, buckle up for the extended saga of how I thrust Codyception into the coding cosmos. Picture this: innocently pondering the idea of Cody creating commands for me. It all started with a simple thought, "Hey, wouldn't it be cool?" But like any curious coder, I couldn't resist pushing the boundaries. "Hmm, is there a limit to these commands before something breaks?" I wondered. Little did I know, the quest for limits would propel me into a coding odyssey of epic proportions.

So, I let Cody off the leash, and the chaos ensued. It unleashed batches of commands with the fervor of a coding wizard on an espresso binge. Imagine giving a caffeinated robot control of your command center – that's the wild ride I signed up for. "Create more commands!" I hollered, and Cody obediently complied, blissfully ignorant of the impending command overload.

Fast forward, and I found myself submerged in a sea of around 700 commands. Yes, seven hundred! I might have gone a bit overboard, but who's counting when you're knee-deep in the intricate world of Codyception?

Releasing this chaotic creation to the coding community left me in awe of its absurdity. My coding sidekick evolved into an unexpectedly powerful command-generating juggernaut. Codyception surpassed my wildest expectations.

Now, nursing a headache from the mental gymnastics of crafting a blog title, I reflect on this coding rollercoaster. It's like trying to juggle code snippets on a unicycle – challenging yet oddly exhilarating.

Lesson learned: Unleashing Cody can lead to a coding adventure beyond reason. A little experimentation can spark an epic coding odyssey. A virtual coffee might be needed to recover from this rollercoaster, but hey, Codyception is out there, adding a dash of entertainment to coding.

Speaking of Cody, this madness was powered by the formidable GPT-4 Turbo, and the cost in token usage could have been terrifying if not for the prowess of Cody Pro. If you haven't upgraded, do it – you won't regret it!

Cody swiftly became my favorite AI Coding Assistant, thanks to the arsenal of available models, especially GPT-4 Turbo, and the stellar Cody Pro features. The fantastic team and vibrant community, especially on Discord, set Cody apart. Unmatched support and lightning-fast bug fixes and feature additions make Cody a coding gem.

I hope this glimpse into Cody and the enchantment of Custom Commands sparks your curiosity. Now that you're deep into this post, you're probably itching to try these methods and commands yourself!

Finally, why not join us on Discord and share some of your creations with us!

With that, I bid you farewell!

Until next time :)
