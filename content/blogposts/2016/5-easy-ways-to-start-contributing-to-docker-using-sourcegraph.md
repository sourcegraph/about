---
title: '5 easy ways to start contributing to Docker using Sourcegraph'
authors:
  - name: Beyang Liu
    url: https://twitter.com/beyang
publishDate: 2016-05-30T00:00-07:00
tags: [
  "blog"
]
slug: 5-easy-ways-to-start-contributing-to-docker-using-sourcegraph
heroImage: https://images.ctfassets.net/le3mxztn6yoo/47OGxPo0EMqok4IyUumkkI/72e0297483475f7a13380d01ed357313/1_tBX0RwBYWxD1pPBRw6j8vQ.png
published: true
---



There are many benefits to contributing to a popular open source project like Docker:

*   You earn recognition for improving a project used by many people.
*   You get to collaborate with other amazingly smart people in the open source community.
*   You become a better programmer yourself through the process of understanding and improving an important system.

But getting started on a new codebase can be daunting. Docker has many, many lines of code. Fixing even the smallest issue can require reading through a lot of that code and understanding how the pieces all fit together.

But it's also not as difficult as you might think. You can follow [Docker's Contributor guide](http://docs.docker.com/project/who-written-for/) to get a development environment set up. Then follow these **5 simple steps to dive into a new codebase**. The skills you hone doing so will come in handy on every new project you encounter over the course of your programming life. So what are you waiting for? Here they are:

### Step 1: Start at func main()

Start with what you know, as the old saying goes. If you're like most Docker users, you probably mainly use the Docker CLI. So let's start with the entry point into that program: the [main function](https://sourcegraph.com/github.com/docker/docker@master/.GoPackage/github.com/docker/docker/docker/.def/docker.go/main).

For the remainder of this post, we'll use [Sourcegraph](https://sourcegraph.com/), which the Docker team uses to search and browse code on the web as you would in an intelligent IDE. To follow along, it may be easiest to [open a second browser window to Sourcegraph](https://sourcegraph.com/) and hop back and forth between that and this post.

On Sourcegraph, let's go to the main [func main()](https://sourcegraph.com/github.com/docker/docker/-/def/GoPackage/github.com/docker/docker/cmd/docker/-/docker.go/main) inside the [Docker repository](https://sourcegraph.com/github.com/docker/docker).

At the top of the main function, we see a lot of code related to setting up logging, reading command flags, and initializing defaults. At the bottom, we find a call to [client.NewDockerCli](https://sourcegraph.com/github.com/docker/docker/-/def/GoPackage/github.com/docker/docker/api/client/-/NewDockerCli), which seems to be responsible for creating the struct whose methods do all the actual work. Let's [issue a search query for NewDockerCli](https://sourcegraph.com/github.com/docker/docker?q=newdockercli).

### Step 2: Get to the core

In many applications and libraries, there's one or two key interfaces that describe the core functionality or essence. Let's try to get there from where we are now.

Clicking on the [NewDockerCli](https://sourcegraph.com/github.com/docker/docker/-/def/GoPackage/github.com/docker/docker/api/client/-/NewDockerCli) search result, we arrive at the definition of the function. Since what we're interested in is the struct that the function returns, [DockerCli](https://sourcegraph.com/github.com/docker/docker/-/def/GoPackage/github.com/docker/docker/api/client/-/DockerCli), let's click on the return type to jump to its definition.

Clicking on DockerCli brings us to [its definition](https://sourcegraph.com/github.com/docker/docker/-/def/GoPackage/github.com/docker/docker/api/client/-/DockerCli). Scrolling down through this file, we see its methods, getMethod, Cmd, Subcmd, and LoadConfigFile. Cmd looks noteworthy. It's the only method with a docstring and the docstring suggests that it's the core method for executing each Docker command.

### Step 3: Dive deep

Now that we've found [DockerCli](https://sourcegraph.com/github.com/docker/docker/-/def/GoPackage/github.com/docker/docker/api/client/-/DockerCli), the core “controller” of the Docker client, let's dive into how one of the specific Docker commands work. Let's zoom in on docker build.

Reading the implementation of [DockerCli's Command method](https://sourcegraph.com/github.com/docker/docker/-/def/GoPackage/github.com/docker/docker/api/client/-/DockerCli/Command), we see it looks up the subcommand to invoke the corresponding function.

So, in the case of “docker build”, it calls the [CmdBuild](https://sourcegraph.com/github.com/docker/docker/-/def/GoPackage/github.com/docker/docker/api/client/-/DockerCli/CmdBuild) method, which we can navigate to using Sourcegraph.

There's a lot going on here. At the top of the method, we see code dealing with a variety of input methods for the Dockerfile and configuration. Oftentimes, a good strategy for reading through a long method is to work backwards. Start at the bottom and look at what the method does at the very end. In many cases, that's the meat of the method and everything before is just setup for completing that core action.

Now that we've understood a single Docker client command through and through, you might be interested in diving deeper still and finding where the daemon receives the request and following it all the way down to its interaction with LXC and the kernel. That's certainly a valid route, but we leave that for now as an exercise to the reader. Instead, let's get a broader understanding of the key components of the client.

### Step 4: Look at usage examples

One way of better understanding a piece of code is to look at usage examples of how that code is used. Let's go back to the [CmdBuild](https://sourcegraph.com/github.com/docker/docker/-/def/GoPackage/github.com/docker/docker/api/client/-/DockerCli/CmdBuild) method and click on the call to the [addTrustedFlags](https://sourcegraph.com/github.com/docker/docker/-/def/GoPackage/github.com/docker/docker/api/client/-/addTrustedFlags) func.

![1*tBX0RwBYWxD1pPBRw6j8vQ](//images.contentful.com/le3mxztn6yoo/47OGxPo0EMqok4IyUumkkI/72e0297483475f7a13380d01ed357313/1_tBX0RwBYWxD1pPBRw6j8vQ.png)

In order to fully understand a piece of code, you need to understand both how it works and how it's used. Jumping to definition lets us understand the former by walking “forward” along the graph of code, while looking at usage examples covers the latter by walking “backward”.

Click on the “Used in 1 repository” text to go to the [detail page for addTrustedFlags](https://sourcegraph.com/github.com/docker/docker/-/info/GoPackage/github.com/docker/docker/api/client/-/addTrustedFlags). Here, you can see where it's being called:

![1*XO7sOqUxUnqjGCnGdACmKg](//images.contentful.com/le3mxztn6yoo/1tvwbX52duCkgI0i8QsEEe/4b6c9f0415bf8bb0a3e562d0fd144a7a/1_XO7sOqUxUnqjGCnGdACmKg.png)

Try this out for a few more functions and methods to understand how they're interconnected. If it's helpful, draw a picture of how various components of the application interact with one another.

### Step 5: Select an issue and start coding!

Now that you have a decent picture of the Docker codebase as a whole, take a look at the [issue tracker](https://github.com/docker/docker/issues) to see what needs working on, and reach out to members of the Docker community with questions you aren't able to answer yourself. Because you've taken the time to explore and understand the code, you'll be better equipped to ask smart questions and know where specific issues fit into the broader picture.

And if you feel up for it, take notes along the way, document your experience, and write it up as a blog post like this one. The Docker team would love to hear about your experience diving into their code.

### Contributing effectively

One of the misconceptions that often prevents people from getting involved in projects is being daunted by the task of jumping into a large, foreign codebase. We often assume, as programmers, that the hard work lies in _writing code_, but often, it's reading and understanding other people's code that is the critical first step. Recognizing that and approaching the task in a principled way, armed with good tools for doing so, will help you conquer the psychological barrier of diving into the code.

So make the leap and [check out Docker's source today](https://sourcegraph.com/github.com/docker/docker). A vibrant open source community and codebase awaits you!

### About the author

_Beyang Liu is the CTO and co-founder of Sourcegraph. Beyang studied Computer Science at Stanford, where he published research in probabilistic graphical models and computer vision at the Stanford AI Lab. You can chat with Beyang on Twitter [@beyang](https://twitter.com/beyang) or our community [Discord](https://discord.com/invite/vqsBW8m5Y8)._
