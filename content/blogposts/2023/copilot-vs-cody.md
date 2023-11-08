---
title: "Copilot vs. Cody: Why context matters for code AI"
authors:
  - name: Ado Kukic
    url: https://handbook.sourcegraph.com/team/#ado-kukic
publishDate: 2023-11-06T10:00-07:00
description: "Does your AI coding assistant really understand your code? We tested GitHub Copilot vs Cody on a production codebase to see the difference context makes."
tags: [blog]
slug: 'copilot-vs-cody-why-context-matters-for-code-ai'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/github-copilot-vs-cody-context-driven-development/copilot-vs-cody-blog.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/github-copilot-vs-cody-context-driven-development/copilot-vs-cody-blog.png
---

There has been a ton of hype around code AI tools like GitHub Copilot and [Cody](https://cody.dev), but how well do these tools actually deliver on real-world development tasks today?

In this post, we'll take Cody and Copilot for a spin on the code of an AI-powered video editing app. The code for this app is private, meaning it could not have been included in the training data for any of the LLMs in use for code generation today, which is also the case for much of the code under active development at companies today. We'll put the code AI assistants through various real-world scenarios and see if they make the developer's life easier or harder.

## Setup

For this blog post, we'll use a production-grade application to test how the two code AI assistants handle scenarios, from teaching me about a codebase to helping me set it up, add new functionality, debug, and more.

I will be using [Visual Studio Code](https://code.visualstudio.com/), and I have two versions installed locally: the latest stable version of Visual Studio Code and an Insiders version. On each of these versions, I have either [Cody](https://cody.dev) or Copilot installed as the only extension. I will be using the same prompts for each assistant and will provide thoughts and commentary on their output. The codebase we'll be using for these scenarios is for a web application called [Video Tap](https://videotap.com) that allows users to repurpose their long-form video-based content into various written and short-form video formats. Let's dive in!

## Scenario: Learning about a codebase

For our first scenario, let's place ourselves in the shoes of a new developer onboarding onto a codebase. Without a code AI assistant, the developer would likely first look at the `README.md` file to see if it gives a good overview or perhaps reach out to the maintainer of the codebase for a walkthrough.

In my personal experience, the `README.md` files of projects are often hit or miss. They may include an amazing overview and instructions, or they may be completely blank and everything in between. With a code AI assistant that supports chat functionality, we can ask it to tell us what a codebase does. Let's try it with Cody and Copilot to see which one does better.

Our query will be: **"What does this application do?"**

![Explain what a codebase does](https://storage.googleapis.com/sourcegraph-assets/blog/github-copilot-vs-cody-context-driven-development/explain-what-codebase-does.png)

Both Cody and Copilot were able to give us an answer to our query. Cody is on the left-hand side, and Copilot is on the right. Copilot told us about the different technologies used in the repository, while Cody told us the tech stack, APIs used, as well as the major features of the application.

**Cody also cites its sources**, and we can see in the above screenshot that Cody used 14 files from our codebase to get enough context to generate a detailed response. Copilot, on the other hand, does not provide visibility into how it came up with the answer.

I think we can give Cody the win in our first scenario. After round one, the score stands at:

Cody - 1

Copilot - 0

## Scenario: Setting up the development environment

Now that our developer knows a little bit about what the application does, the next logical thing for them to do is to figure out how to set up the local development environment so that they can run the application and make code changes themselves. Without a code AI assistant, the developer would again likely search for a `README.md` file or similar instructions on how to get set up. But with Cody and Copilot ready, we can ask them how to get this application running locally.

The query we'll pose is: **"How do I start this app up in development mode?"**

![Setup development environment](https://storage.googleapis.com/sourcegraph-assets/blog/github-copilot-vs-cody-context-driven-development/setup-dev-environment.png)

The difference in response quality here highlights the importance of having quality context for the code AI assistant.

Cody read 12 files to generate the response and walked us through installing the required JavaScript and PHP dependencies, setting up an `.env` file, creating a local database, running a database migration to set up the correct tables and seed data, and finally starting the server.

Copilot, on the other hand, initially told us to navigate to the project directory, but since we are already in the project directory, this step is unnecessary. Copilot then told us to install the dependencies and run the project. But there were some glaring issues. Without a proper `.env` file in the project directory, the app will not start. Not only that, but the `npm start` command, while common in Node and JavaScript projects, does not exist in this codebase. To start the local server, this codebase requires running the `npm run dev` command, which Cody correctly suggested.

![Codebase npm scripts](https://storage.googleapis.com/sourcegraph-assets/blog/github-copilot-vs-cody-context-driven-development/npm-scripts.png)

With Cody, if we followed the instructions, we would have our local environment up and running. In contrast, with Copilot, we would run into issues ranging from missing environment variables and missing database tables to our frontend not building at all. We have to give Cody the win here as well. Our score now stands at:

Cody - 2

Copilot - 0

## Scenario: Familiarize yourself with the code

Now that we know a bit about what the application does and have it running locally, let's ask our code AI assistants some questions about how the actual application functions. In this application, we'll be working a lot with video files, so let's ask about the current capabilities that exist. The first question we'll ask is: **"What are the properties on the video model?"**

![Explain feature of a codebase](https://storage.googleapis.com/sourcegraph-assets/blog/github-copilot-vs-cody-context-driven-development/explain-feature-of-codebase.png)

Cody finds the `Video` model and provides us with the various properties that are present on it. Copilot states that it does not have direct access to our codebase and therefore does not know what properties exist on the `Video` model. It does try to guess and assume some properties that may or may not exist.

Getting the properties of a model is neat, but not something to necessarily write home about. Let's try a trickier question. In this project, we spend a lot of time working with LLMs and one of the most important things is keeping track of costs. Let's ask our code AI assistants how we can calculate our costs for a video. The query will be: **"How do I calculate the OpenAI cost for a video?"**

![Explain calculating costs of OpenAI call](https://storage.googleapis.com/sourcegraph-assets/blog/github-copilot-vs-cody-context-driven-development/calculate-costs-explain.png)

Cody is able to find an existing function called `calculateOpenAICost()` and gives us a detailed explanation of what this function does, how it works, and where it's located if we want to learn more. Copilot on the other hand gives us some generic suggestions on how to calculate the cost of an OpenAI call, which we'll then have to dive deeper into and validate ourselves. With these two examples, I think we can give Cody the win here as well.

Cody - 3

Copilot - 0

## Scenario: Adding new functionality to our codebase

Now we get to the fun parts -- writing code. As developers, we are accustomed to having our IDE making it easier to write code through syntax highlighting, IntelliSense, and other enhancements that make it easier for us to focus on the hard parts. Code AI assistants can go a step further here in writing some or a lot of the code for us.

For our next scenario, we want to add a new [action](https://laravelactions.com/2.x/one-class-one-task.html) to our codebase that will allow us to trim a video. This will allow us to splice up longer videos into smaller more manageable files for further processing. The API that we are using to trim the video requires that we give it the trim start and end times in a [SMPTE timecode](https://en.wikipedia.org/wiki/SMPTE_timecode) format. In our codebase, we store all video durations in milliseconds. So what we need to do is to add a function to convert our start and end times from milliseconds to a valid SMPTE timecode format.

We can write this function ourselves or we can ask our code AI assistants to do it. Let's opt for the latter. Our query is: **"Write a function to convert milliseconds to a timecode format"**.

![Using code AI to create a new function](https://storage.googleapis.com/sourcegraph-assets/blog/github-copilot-vs-cody-context-driven-development/create-new-function.png)

Here Copilot generates a working function, but there's one problem--it's in the wrong language. Cody recognizes we're working in a PHP codebase and generates the code in PHP.

This is another perfect example of why context is so important. Cody inferred that since we have a `.php` file open, we probably want our implementation in PHP, whereas Copilot lacking the context gave us a general solution in a different language. If we were to insert the two functions into our file, the Cody `millisecondsToTimecode` function would work, but the Copilot `msToTimecode` would throw all sorts of errors. Cody wins here as well, but we'll give Copilot half a point because it did give us a working solution.

Cody - 4

Copilot - 0.5

## Scenario: Editing code in our codebase

We'll use the `millisecondsToTimecode` function that Cody gave us and continue adding functionality to our application. The timecode conversion function that both Cody and Copilot returned gives us a string in the format of "00:00:00" and while this is valid, we should also add the number of frames between a second. This will ensure that we trim the video at max precision. So the full format becomes hour:minute:second:frame.

To get the frame count, we'll need to know the frame rate at which the video was encoded and the remainder of milliseconds, if any, we have for our trim operation. Let's ask Cody and Copilot to update the existing function to accommodate our needs.

![Using code AI to edit functionality](https://storage.googleapis.com/sourcegraph-assets/blog/github-copilot-vs-cody-context-driven-development/edit-function-with-new-functionality.png)

For Cody, with my `TrimVideoAction.php` file open, I was able to say **"add the frame number to the timecode"** and Cody had enough context to understand that I was talking about the `millisecondsToTimecode()` function, and it gave me an updated function that also added the number of left-over frames if any.

For Copilot, I tried the same query, but Copilot could not understand that I wanted to update the `millisecondsToTimecode()` function, so eventually I had to ask the question and copy and paste the function into the chat window to get a working result. Copilot was able to understand my prompt and returned an updated `millisecondsToTimecode()` function that also returned the frame count. The one thing that I think Copilot did better was it made the frame rate a parameter. Videos typically have varying frame rates typically ranging from 24fps to 30fps, and the frame rate is something we store in the `Video` model as a value because each video is different, so this was a nice touch.

Cody also supports commands, and one of the most used commands is the `/edit` command, which allows us to highlight a piece of code and tell Cody to update it based on the prompt. I ran the `/edit` command and asked Cody to make the frame rate a parameter, and it was also able to achieve the task.

![Cody edit command in action](https://storage.googleapis.com/sourcegraph-assets/blog/github-copilot-vs-cody-context-driven-development/cody-edit-command.png)

![Edit command output](https://storage.googleapis.com/sourcegraph-assets/blog/github-copilot-vs-cody-context-driven-development/edit-output.png)

Since both Cody and Copilot did eventually give us the right answer, but we had to do some workarounds to make it happen, I will give each one half a point. The score now stands at:

Cody - 4.5

Copilot - 1

## Scenario: Autocomplete 

So far we've primarily used the chat features of Cody and Copilot to help us learn and write code. While having a natural language conversation is great, where code AI assistants really live or die is by their autocomplete functionality. Autocomplete allows the code AI assistant to provide helpful code completions to the developer as they are writing code in their IDE.

Going back to our codebase at hand and building on top of what we already have, let's see how helpful Cody and Copilot are when it comes to helping us autocomplete our code. Still working out of the `TrimVideoAction.php` file, let's continue building our action. Since we know we'll need the framerate of our video for the `millisecondsToTimecode()` function, let's get it and see if Cody and Copilot can complete the code for us. I'll start by declaring a variable called `$fps` and will let the code AI assistant do the rest.

![Cody vs Copilot autocomplete](https://storage.googleapis.com/sourcegraph-assets/blog/github-copilot-vs-cody-context-driven-development/copilot-vs-cody-autocomplete.png)

Cody gave us the suggested completion of `$video->avg_frame_rate` from the start. This was exactly the property we were looking for so I could just hit the tab button on my keyboard to accept the completion and move on.

Copilot on the other hand struggled. At first, it suggested a hard coded `30` as the suggestion. So I started typing `$video` to give it a hint that I'm going to be getting this value from the video object. Then Copilot suggested the completion of `->fps` which does not exist on the `$video` object. So if I were to accept this suggestion I would start seeing red squiggly lines telling me something is wrong. Only when I basically completed the line myself did Copilot provide the final part to complete my code.

This really highlights the importance of having the right context. With the right context, a code AI assistant can be a helpful ally, but with bad or the wrong context, it causes more trouble than it's worth. If you'd like to learn more about the lifecycle of a Cody code completion, check out [this in-depth blog post](https://about.sourcegraph.com/blog/the-lifecycle-of-a-code-ai-completion).

Moving forward, when I navigated to the next line, both Cody and Copilot gave me the next autocompletion to convert the `$beginInMilliseconds` value to a timecode format exactly the same.

![Cody and Copilot correct autocomplete suggestion](https://storage.googleapis.com/sourcegraph-assets/blog/github-copilot-vs-cody-context-driven-development/next-autocomplete.png)

Testing this code works and we're able to successfully convert our milliseconds to a timecode format that will allow our API to trim the video at the precise time we declare. For our final autocompletion test, let's see if our code AI assistant can help us with the next steps which will be to call the [AWS Elemental MediaConvert](https://aws.amazon.com/mediaconvert/) API to process the video trimming.

I will start us off by adding the comment `// Call AWS Elemental Media Convert API to trim video`, hitting enter, and observing what each code AI assistant does.

![Media Convert autocomplete](https://storage.googleapis.com/sourcegraph-assets/blog/github-copilot-vs-cody-context-driven-development/media-convert-autocomplete.png)

Since we make extensive use of the AWS Elemental MediaConvert API, Cody was able to find how we've invoked it in other actions and gave us helpful completions every step of the way. What really blew me away was the fact that it also found and suggested the required endpoint in our AWS client configuration for this API.

Copilot on the other hand struggled at every step of the way. From suggesting non-existing functions like `createMediaConvert()` to setting the wrong region for our codebase, the autocompletions were all unusable without me having to go in and fix every line of code manually. I have to give Cody the win here as well. The score now stands at:

Cody - 5.5

Copilot - 1

## Scenario: Finding and fixing issues

If you have been paying very close attention to the code we've been writing so far, you may have found a subtle issue. If you want to go try to find it yourself, scroll back up now.

The handle function for the `TrimVideoAction` accepts three parameters: a video that is of type Video, and two strings for the begin and end times in milliseconds. But our `millisecondsToTimecode` function takes in the milliseconds to be converted as an integer value. Since we are writing this app in PHP without strict typing enabled, the interpreter will cast our values and the code will run, but we're better programmers than that.

Let's ask Cody and Copilot to fix this issue for us and see how they do. With Cody, we can again use a command called `/edit` to give instructions on a highlighted piece of code. With Copilot I had to use the chat experience.

![Edit command functionality](https://storage.googleapis.com/sourcegraph-assets/blog/github-copilot-vs-cody-context-driven-development/edit-functionality.png)

Both Cody and Copilot were able to understand my instructions and offered a very similar fix. Cody suggested we use the `intval()` function to convert a string to an integer, while Copilot suggested a direct type cast to `int`. Both approaches work in this case. Cody also suggested that we convert the `$fps` variable that holds the framerate of the video to an integer as well since the `millisecondsToTimecode()` function is expecting it to be an integer as well.

One additional feature that Cody has for finding potential issues is a command called `/smell`. This command will take a look at a file or highlighted piece of code and provide further suggestions and improvements. This command can be very useful in finding subtle issues or edge cases that may not appear at an initial glance. Let's see if Cody can identify any code smells for us so far.

  ![Cody smell command suggestions](https://storage.googleapis.com/sourcegraph-assets/blog/github-copilot-vs-cody-context-driven-development/cody-smell-suggestions.png)

Cody gave us five suggestions for improving our code. The suggestions were to:

1.  Validate input parameters

2.  Use dependency injection for the AWS client

3.  Add logging and telemetry

4.  Extract the AWS logic into a separate service class

5.  And add caching for our AWS client

These are all really good and valid suggestions. Alongside each suggestion Cody also gave us the code to implement the suggestions. Since both Cody and Copilot were helpful here, we'll give each of them a point. The score now stands at:

Cody - 6.5

Copilot - 2

## Scenario: Generating tests for your code

Leveraging code AI assistants to write code is a very common use case, but for me, I love using code AI assistants to take care of the more mundane tasks. One such case that I often dislike doing, but needs to be done, is generating unit tests for my code. Both Cody and Copilot can help here. Cody and Copilot have built-in commands to generate tests. Let's see how well it does for the `millisecondsToTimecode()` function we added earlier in this blog post.

![Generating unit tests](https://storage.googleapis.com/sourcegraph-assets/blog/github-copilot-vs-cody-context-driven-development/generate-unit-tests.png)

Both Cody and Copilot do a good enough job at creating passing unit tests. While Cody added multiple test scenarios, Copilot did a better job with the function name as well as documenting the steps for the test. Both of the tests can pass so we'll give each code AI assistant a point.

Cody - 7.5

Copilot - 3

## Scenario: Documenting your code

Just like writing unit tests, writing documentation for our code is something that many developers don't necessarily love doing, but it needs to be done to make sure our code is maintainable. There is nothing worse than opening up a file that's been untouched for many years and it is lacking any sort of documentation. Code AI assistants can help in two ways here: explaining undocumented code in layman's terms and generating documentation for undocumented code so that the next brave souls that look at the code can have a better experience. Let's see how Cody and Copilot handle these two use cases.

Let's open up a random file that does not have any comments. I'll open up a file called `TrimClipAndSendToAWSS3.php`. Let's ask Cody and Copilot to explain what this code does. Both Cody and Copilot have an `/explain` command that we'll use.

![Explaining code](https://storage.googleapis.com/sourcegraph-assets/blog/github-copilot-vs-cody-context-driven-development/explain-command.png)

Both Cody and Copilot do a great job of explaining what the given code does. Copilot is a little bit more verbose and goes into great detail as to what each piece of code is doing, whereas Cody focuses on the unique bits related to the `handle` function where the implementation logic for this action is located.

Since both code AI assistants did pretty well, we'll give each of them a point. Let's see how they do in documenting the code for us. Both Cody and Copilot have a command to generate documentation, so we'll use these commands and evaluate the results.

![Documenting code](https://storage.googleapis.com/sourcegraph-assets/blog/github-copilot-vs-cody-context-driven-development/documenting-code.png)

Both Cody and Copilot successfully generated documentation directly in the editor. Cody was a bit more verbose this time, but the quality of both was acceptable. We'll give a point to each code AI assistant. With two points available in the documentation section and each assistant getting the two points, our score is now:

Cody - 9.5

Copilot - 5

## Conclusion

In this post, we put two popular code AI assistants, GitHub Copilot and Sourcegraph Cody, head to head to see which one offered a better experience to the developer. We used a real production-grade web application with tens of thousands of lines of code across thousands of files. We then crafted common scenarios that developers encounter every day and saw how the two code AI assistants were able to help. Cody came out as the clear winner, taking home 9.5 out of 10 points across ten different scenarios. Copilot managed to get 5 out of 10 points.

The biggest differentiator that made Cody stand out was its superior context. Understanding not only the user intent but the entire codebase and being able to search for relevant snippets of code before sending a request to an LLM helped Cody provide the right answer or code autocompletion the first time. Cody is the only AI coding assistant that knows your entire codebase and in this post we were able to show you why that matters. [Give Cody a try on your codebase today](https://cody.dev).