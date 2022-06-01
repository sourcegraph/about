---
title: "GopherCon 2019 - Design Command-Line Tools People Love"
description: "It is a joy to build command-line tools that are not only easy to learn, but that other developers are willing to maintain. Often a team's engineering efforts are spent on the backend, while the cli doesn't receive the same level of attention. This can result in hard-to-test tools and dumping maintenance of them to whoever most recently joined the team. Learn how to take full advantage of popular Go libraries, structure your Go code to improve reuse and testability, publish binaries, and of course design your commands to be user friendly."
authors:
  - name: Jennifer Davis for the GopherCon Liveblog
publishDate: 2019-07-25T00:00-14:55
tags: [
  gophercon
]
slug: gophercon-2019-design-command-line-tools-people-love
heroImage: https://about.sourcegraph.com/gophercon2019.png
published: true
---

Presenter: [Carolyn Van Slyck](https://carolynvanslyck.com/)

Liveblogger: [Jennifer Davis](https://jennifer.dev/)

## Overview

It is a joy to build command-line tools that are not only easy to learn, but that other developers are willing to maintain. Often a team's engineering efforts are spent on the backend, while the cli doesn't receive the same level of attention. This can result in hard-to-test tools and dumping maintenance of them to whoever most recently joined the team. Learn how to take full advantage of popular Go libraries, structure your Go code to improve reuse and testability, publish binaries, and of course design your commands to be user friendly.

---

## Summary

This talk pulls together Carolyn's experience with command-line development and runs through an example of creating an awesome CLI with emoticons (the pre-cursor of emojis). The problem she's trying to address is that often CLIs are just thrown together creating technical debt that haunts us and the humans who use our CLIs.

## Design Goals

* Predictable
* Task Oriented
* Friendly to both people and scripts
* High quality

At the high-level we want CLIs that are guessable and intuitive, somewhat predictable in use. They should be task-oriented solving a specific issue that might be composed of multiple steps but not require the individual to know how to do those steps. The commands and outputs should be friendly to the humans who have to use them and talk about them, and the systems that can be automated. Quality needs to be baked in from the start rather than handing off all the problems to junior developers to resolve after the CLIs are in use. 

## Carolyn's Experience

Carolyn has had a number of experiences that have informed and influenced this talk including:

* Docker Version Manager (dvm)
* dep
* Kubernetes Service Catalog
* porter

Porter was super informative as it was a brand new environment to apply all of the learning she had obtained from years of working on CLIs. 

## Command Design

Carolyn provides a number of design parameters when thinking about CLIs:

* Grammar aka Rules

Start with grammar. Speak the command out loud, does it sound like something you could explain to someone? When folks start using the command line, you are explaining to another person and you need to be able to talk through what they need to do. It has a subject, noun, and verbs. If we start from that perspective, we can set up the rules of how the command works. Early on noone is watching the development of the CLI so the preferences can be set. Once people start using, harder to change the grammar. 

* Understand Precedent

Except you can't just start from scratch without thinking about the precedent of how other commands. Within the eco-system folks have patterns. If you use different verbs, then it can be problematic to users (remember empathy to users!). Follow patterns that are set in eco-system, build on top of what they have learned and can adopt CLI with some understanding of what the verbs will do. 

These followed the precedent:
 * kubectl -> service catalog
 * node version manager -> docker version manager

Sometimes it makes sense to intentionally not follow the precedent though:
 * dep didn't follow glide's precedent

Intentional breaking from precedent if the commands don't work the same way. This helps alleviate user confusion when the outcomes are not the same. With dep they intentionally changed the verbs in use. 

Sometimes there is no precedent to follow, this is a lot of work! 
 * porter setting precedent

When there is no precedent, you're setting the precedent and tools will copy the patterns in use. 

## Design

Before emojis, we had emoticons. We want a command-line that helps us quickly get emoticons pasted into slack. 

### Sentence Readability

`emote add emoticon gopher --value ʕ •ᴥ•ʔ`

We want sentences that are easy to say. 

### Antipattern: positional arguments with order matters

`emote add repo funk https://x.com/funk.json`

versus

`emote add repo https://x.com/funk.json funk`

We may have multiple arguments to pass in to our command for example the name of the emoticon and then URL or URL and then name, kind of like symlink on Unix and remembering which thing comes first. This is a cognitive cost to our user! We can make this better. 

Instead:

`emote add repo funk --url https://x.com/funk.json `

If we use flags, we don't have to worry about order anymore. 

### Support Automation

With natural sounding commands, we handle human element. Next we need to be able to support system automation. Giving an --output command allows us to specify json to have machine readable content. 

### Default to human first output

Once you have the option to have multiple outputs, human output should be the primary. Sometimes this also means thinking about the presentation of the values of the content, for example dates. "2019-07-15T14:32:22Z" is not very readable. "10 days ago" is better. 

https://github.com/dustin/go-humanize go-humanize has functions to help make human readable output. 

### Implicit Resources in the Domain

Sometimes the binary name is a verb or a resource all on its own. 

$emote list 

list is an alias!

### Aliases provide compromise between brevity and discoverability


### Customize help output

Once you create aliases, helpful to customize the output of help. 

Instead of all the options and all the flags (the most common help output), give some guidance of what the user SHOULD be doing with this command.

https://carolynvanslyck.com/talk/go/cli/#/alias-helptext

We can group the set of resources that folks can work with, and then group the aliases or shortcuts for the commands.

### Task-oriented commands

We're not done, because we need to do more than just list the emote list. We need to print out the emoji for example. We want to get something done. We want to be able to print out the emoticon. 

### Domain versus Grammar

Combine commands to make tasks easier for people to use. 

Example of quality task command:

`travis encrypt MY_SECRET_ENV=super_secret --add env`

1. download
2. encrypt
3. insert

If they didn't do this, would require piping a bunch of commands together. Some people might figure this out but it's not easy to discover, and it will be copy pasted around rather than something that folks love to use. 

## Build a CLI
 
 High quality code is critical. Quality code embraces:

 * great user experience
 * robust
 * maintainable
 * testable
 * error messages. 

### spf13/cobra

Out of the box you get :
* CLI Framework / Main Entrypoint
* Command Routing
* Error Handling
* Help Text (Don't forget to customize!)
* Flag Parsing and Validation

If we want to create a shrug command, cobra will handle a lot of the setup. We know we need a destination to send the output, in this case we are going to send it to the clipboard so we can paste it in to wherever we want. 

We aren't done though. 

If it's in main, folks can't build on top of it. It's an anonymous fuction, and embedded in cobra so it's hard to test. Shrug is hard coded, so if we want to add new emoticons we have to add another cobra command. 

### Recommended Practice: Create an application package

Make a package outside of main, write a struct , single command that you support write a function. if i had a command called shrug add a function shurg. Take the CLI out of your CLI. 

https://carolynvanslyck.com/talk/go/cli/#/extract-app

Now we have more testable code. 

https://carolynvanslyck.com/talk/go/cli/#/buildshrug2

### Configuration

Start with a TOML file, we can add shrug and new emoticon tableflip. 
https://carolynvanslyck.com/talk/go/cli/#/config

With open source, folks want different configurations:

https://carolynvanslyck.com/talk/go/cli/#/config

* YAML
* JSON

People are going to want different things based on how their tools. So meet folks where they are at. Instead of demanding they use TOML, provide the capability. They'll be more likely to use the tool if we support all the configuration mechanisms through viper. 

### spf13/viper

* Single combined configuration from multiple sources
* Reads from flags, config files, remote key/value stores, environment variables
* Smart defaulting: can tell if it was defaulted or set by the user
* Supports config files of multiple formats: json, yaml, toml, and more

Viper will look for specific configuration files, and use the appropriate encoder and save it in the viper field and load it for use. 

Next change, remove the shrug emotion, but we now have a generic that can pull out specifics from the configuration file so we can do shrug and tableflip (or whatever!).

https://carolynvanslyck.com/talk/go/cli/#/app-with-viper


By refactoring the configuration mechanism, we can refactor the cobra code so that we have positional arguments and simplified code that allows for dynamic commands. 
https://carolynvanslyck.com/talk/go/cli/#/boilerplate2


### Recommended Practice: Keep viper isolated
This code is great, but something will haunt me. Anyone who is working on my application now will need to understand viper. This code is simple but in more complex examples will cause problems with folks not understanding how to work on the code. 

Create a configuration package and load all the viper into that. Then configuration is loaded once and read over and over again. 

Example:
https://carolynvanslyck.com/talk/go/cli/#/sting-of-the-viper

Refactored application:
https://carolynvanslyck.com/talk/go/cli/#/app-with-config-pkg

https://carolynvanslyck.com/talk/go/cli/#/bind-viper-flag

There are a lot more features to viper that isn't covered in this code, so don't invent your own. One feature that's great is having flags. For destination, BindPFlags.

Instead of one destination, this allow us to bind the destination to the configuration. 

## Testing

By isolating viper, can mock out viper and test the code! 

## Additional Resources

* [Slides](https://carolynvanslyck.com/talk/go/cli/#/)
* [Find Carolyn on Twitter](https://twitter.com/carolynvs)
* [Commands and Flags](https://github.com/spf13/cobra)
* [Configuration Management](https://github.com/spf13/viper)
* [File System Abstraction](https://github.com/spf13/afero)
* [Natural Language Units](https://github.com/dustin/go-humanize)
