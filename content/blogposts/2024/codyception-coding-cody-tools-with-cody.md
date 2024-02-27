---
title: "Codyception: coding Cody tools with Cody for coding with Cody"
authors:
  - name: Kynlo Akari
    url: https://twitter.com/Kynlos
  
publishDate: 2024-01-30T10:00-07:00
description: "This post with teach you how Custom Commands in Cody can simplify your coding process by automating repetitive tasks, saving you time and effort."
tags: [blog, guest-post]
slug: "codyception-coding-cody-tools-with-cody"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/codyception-coding-cody-tools-with-cody-v4.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/codyception-coding-cody-tools-with-cody-v4.png
---

<Alert type="secondary">This is a guest blog post from our community. <a href="https://discord.com/servers/sourcegraph-969688426372825169" target="_blank">Join our Discord</a> to meet the author and connect with other developers passionate about Code Search and AI!</Alert>

---

## Friends, Coders, Netizens, lend me your snippets!


To start with, let's talk about the significance of Custom Commands within the realm of programming and automation. Commands play an important role by giving you the ability to define specific actions for your needs, saving you time. Consider scenarios like utilizing Cody to insert specific types of comments, code editing, or even language translation for entire files. In even more simplistic terms, they let you make a button that does a thing, then you can click that button to do that thing an unlimited amount of times without having to type anything again!  Sound good? I bet it does...so let's talk about it in the context of our main man Cody.

Cody makes it easy to create and integrate custom commands into your workflow.

In essence, Custom Commands serve as the virtuosos of your coding orchestra, ensuring a harmonious and efficient coding experience.


## Using Commands with Cody

With Commands, you can effortlessly create and execute reusable prompts without ever opening the Chat sidebar. This improvement streamlines your workflow and unlocks a new level of productivity.

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

This would then be called in your editor with a slash command: `/algorithm-analysis`


## Getting started with Custom Commands

![](https://storage.googleapis.com/sourcegraph-assets/blog/codyception-coding-cody-tools-with-cody-001.png)

You can [create Custom Commands](https://sourcegraph.com/docs/cody/capabilities/commands#custom-commands) directly in Visual Studio Code. But, to make your life easier with getting started with Custom Commands, I [created a handy little tool](https://cody.kynlo.co.uk) that you can use to generate custom commands!

![](https://storage.googleapis.com/sourcegraph-assets/blog/codyception-coding-cody-tools-with-cody-002.png)

Now, nobody is forcing you to use my little tool, and you are absolutely free to go create these manually!  There's [highly detailed documentation](https://sourcegraph.com/notebooks/Tm90ZWJvb2s6MzA1NQ==#custom-commands-194e6b3f-f682-475f-9c66-cfcc84d05c66) written by the amazing [beatrix](https://twitter.com/3eatrix), for those who want to dive even deeper into all of that beautiful behind-the-scenes code!


## Examples of time-saving commands

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

## The cody.json file: tailoring commands to your needs

Customizing commands is made easy with the `cody.json` file. Here's how you can leverage it:

### Project-specific commands

Create `cody.json` in the `.vscode` directory of your project to make commands accessible only in that workspace. Cody will have access to these custom commands when working on the project.

### Global commands

Create a new `cody.json` file in the `.vscode` directory of your home directory for commands accessible across multiple projects. Cody will have access to these global custom commands in any workspace.

### Workspace vs. user commands

Understanding the scope of your custom commands is essential:

- `cody.json` in a project's `.vscode` folder: Commands are available only in that workspace.
- `cody.json` in the home `.vscode` folder: Commands are available globally across all workspaces.

This flexibility allows you to organize project-specific commands separately from reusable commands which are accessible globally, enhancing your customization capabilities with Cody.

### Running commands made simple
Executing commands is a breeze with these options:

- Type / in the chat box and select your desired command from the pop-up list.

- Use ctrl+shift+v (cmd+shift+v on macOS) anywhere in your document to open the Command Menu, and just like magic, you can select and run commands without the chat sidebar.

- Right-click on selected code to open the Cody context menu and choose a command.

- Search for >Cody: Commands Menu in your Command Palette to access the Command Menu.

## Conclusion

Cody swiftly became my favorite AI Coding Assistant, thanks to the arsenal of available models, especially GPT-4 Turbo, and the stellar Cody Pro features. The fantastic team and vibrant community, especially on Discord, set Cody apart. Unmatched support and lightning-fast bug fixes and feature additions make Cody a coding gem.

I hope this glimpse into Cody and the enchantment of Custom Commands sparks your curiosity. Now that you're deep into this post, you're probably itching to try these methods and commands yourself! [Try Cody today](https://cody.dev) for yourself. 

Finally, why not [join us on Discord](https://discord.com/servers/sourcegraph-969688426372825169) and share some of your creations with us!

With that, I bid you farewell!
