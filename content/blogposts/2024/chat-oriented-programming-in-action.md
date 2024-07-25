---
title: "Chat-oriented programming (CHOP) in action"
publishDate: 2024-07-26T19:00-07:00
authors:
  - name: Ado Kukic
    url: https://twitter.com/adocomplete
tags: [blog]
slug: 'chat-oriented-programming-in-action'
published: true 
description: ""
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/announcing-the-llm-litmus-test/llm-litmus-test-og-image.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/announcing-the-llm-litmus-test/llm-litmus-test-og-image.png
---

What we now call "programming" was once called "high-level programming" in the era of Dijkstra and Fortran and mainframes were programmed mostly in low-level assembly. The dawn of "high-level" programming languages like C (which today many would consider "low-level") and then interpreted languages like Python and JavaScript changed the very foundation of what it meant to be a programmer.

With the advent of LLMs, it seems we are on the cusp of another foundational shift. The new way of programming is something that Steve Yegge has called [CHOP](https://sourcegraph.com/blog/the-death-of-the-junior-developer), or chat-oriented programming, and can be classified as *coding via iterative prompt refinement*. We are currently in an in-between state, where classical "line-smithing"-style coding is still highly relevant and important. But we've also noticed an emerging set of behaviors and patterns, in both our own experience and in talking with our customers, that seem to fall into this new paradigm. We'll cover some of these new behaviors and how they relate to the general areas of the software creation lifecycle.

I have been writing code professionally for over 15 years. I have seen many trends come and go, coding methodologies take off and be replaced, and coding paradigms evolve. In this post, I want to share my take on chat-oriented programming, compare and contrast it to how I wrote code in the past, and discuss how I use AI coding assistants like [Cody](https://sourcegraph.com/cody) to help me write, understand, and ship code faster.

## Chat-oriented programming (CHOP)

Before AI tools like ChatGPT and specialized coding assistants like Cody hit the scene, writing code required a familiar workflow that looked something like this:

-   **Understand the issue**: read the GitHub, Jira, or Linear issue, requirements doc, or other information to understand what change you need to make to a codebase.

-   **Understand the codebase**: set up your working environment, review the documentation, look through relevant files in the codebase, and familiarize yourself with the files you'll be working on.

-   **Research a solution**: there are times when you know exactly what you need to do and can jump into a file and make the changes, but more often than not you'll hit up Google or Stack Overflow to research libraries, docs, and discussions relevant to the issue at hand. You'll then piece together this information and make it actionable for the problem you are trying to solve.

-   **Write and test the code**: finally you get to actually write some code. Open up the relevant files and make edits or create new ones and implement the functionality. Test the functionality to make sure it behaves the way you expect it. Once the main functionality is in, write additional code to handle errors and edge cases, write unit tests, and integrate with the greater system.

-   **Code review**: make the PR and get it reviewed. At this stage, your manager or peer will review the code and make sure it aligns with the rest of the codebase conventions, functions as expected, and is high quality. At this stage, you may refactor the code based on feedback and finally you're ready to merge.

-   **Ship it**: once all the checks, both automated and manual, are good to go, squash and merge that PR, ship the feature and repeat the process for the next one.

In the chat-oriented programming era, this coding workflow is changing dramatically, both inside and outside the editor. One interesting thing about the above workflow is that only one of the six steps is inside the code editor, even though we often think of editors as the primary application for developing software.

Let's see how CHOP changes things both inside and outside the editor across various programming scenarios.

## Understanding a codebase

As a professional developer, you spend as much (if not more) time understanding the codebase, gathering relevant context, and understanding requirements as you do actually writing code. This is unavoidable, but with chat-oriented programming, it can happen much more effectively.

Understanding a new or even a familiar codebase without the assistance of a coding assistant is like wandering through a dense forest with only a tiny flashlight. You spend a ton of time reading documentation, which may or may not be up to date, tracing function calls, and adding in plenty of logging statements to understand how data flows through the system, and trying to piece together the big picture. A change that seems trivial to make on the surface can have a multitude of unintended side effects that will make you question your own sanity. Dev productivity tools like IDEs and [code search](https://sourcegraph.com/code-search) gave you a brighter lantern and a map you could consult, but you still had to explore different paths on your own, one at a time.

In the world of chat-oriented programming, understanding a codebase is more akin to having a robotic travel guide who can not only guide you through the forest, but highlight points of interest, explain the local fauna, and speed-run the trails to help you find the quickest path. To bring it back to coding, your AI coding assistant can summarize modules, explain obscure functions, and provide clear and concise answers to your questions. Instead of digging through a directory, you simply ask your questions in natural language, and the AI coding assistant goes and finds all the relevant files for that query, uses those files as context, and gives you a tailored answer then and there.

Let's see this in practice. Recently, Anthropic announced the release of [Claude 3.5 Sonnet](https://www.anthropic.com/news/claude-3-5-sonnet), a powerful new model that we wanted Cody users to have access to. Our engineering team had already done the work to integrate this model on the backend but our clients team was tasked with adding support for this model in the Cody VS Code extensions.

Pre-CHOP, my workflow would result in a ton of manual searching in the codebase to find where we define and add new models. Eventually, I would land on this page where we define our models: 

![Sourcegraph Code Search](https://storage.googleapis.com/sourcegraph-assets/blog/chop-in-action/code-search.png)

From here, I would need to dive deeper into the individual options and understand what ModelUsage.Chat meant or whether I should add the expandedContextWindow for the new model, and so on. I could spend hours navigating through the codebase and reaching out to my colleagues on Slack for further context before feeling confident enough to write a single line of code.

Let's see how we can accomplish this with Cody and chat-oriented programming. With the Cody extension installed in your IDE of choice, you can chat with your codebase. When you ask a question, Cody fetches the most relevant files and provides them as context alongside your query to your LLM of choice.

We can ask general questions like "what is this codebase about?" or "how do I set up my working environment for this codebase" and Cody will generally give you a really good answer. But this information can usually be found in the README.md file of a project. Let's ask something a little more complex - such as how would I add a new LLM model to our Cody VS Code extension.

![Cody Chat](https://storage.googleapis.com/sourcegraph-assets/blog/chop-in-action/ask-cody.png)

Now you may be asking yourself "how did Cody know all these things?" The answer is [context](https://sourcegraph.com/blog/anatomy-of-a-coding-assistant). Each time we ask Cody a question it looks through relevant code files and includes them with our query to the LLM. We can see which files and lines were used for context by clicking the Context dropdown.

![Cody Context](https://storage.googleapis.com/sourcegraph-assets/blog/chop-in-action/cody-context.png)

Any questions we have about our codebase we can just ask Cody and get personalized answers based on our codebase. We can easily ask follow-up questions to learn more. For example, I noticed that the usage property is an array that supports Chat and Edit, but I want to know what this actually means. I can just ask a follow-up question to find out:

![Cody Chat follow up questions](https://storage.googleapis.com/sourcegraph-assets/blog/chop-in-action/ask-cody-follow-up.png)

This comes in handy when we want to really develop a deep understanding of our codebase before making changes. Instead of reading the actual code or bothering our engineering counterparts, we can just ask Cody.

Within the chat-oriented programming paradigm, understanding of our codebase becomes as simple as asking questions. You can ask natural language questions in the same way that you would ask your team lead or teammate and get high-quality answers in seconds. In the pre-CHOP world, you would spend a ton of time looking at the code, Googling what each library does, and then building a mental model of how it all works. With CHOP, the hard work is done for you, you just have to ask the right questions.

### Sidebar: Chat with Open Source Repositories

Chatting with your codebase in your IDE is powerful, but what if you could chat with any open source repository in the world? You could learn how and where Next.js implements its file-based routing:

![](https://storage.googleapis.com/sourcegraph-assets/blog/chop-in-action/cody-web-nextjs.png)

How Eloquent ORM manages SQL relationships:

![](https://storage.googleapis.com/sourcegraph-assets/blog/chop-in-action/cody-web-laravel.png)

And anything else you desire. [Cody on the Web](https://sourcegraph.com/cody/chat) behaves much like the IDE extension but allows you to ask questions about any open source repository that Sourcegraph has indexed on its public search instance located at [https://sourcegraph.com/search](https://sourcegraph.com/search). Give it a try today.

## Writing Code

In the pre-CHOP era, writing code often felt like starting with a blank canvas and a vague idea of what you wanted to paint. You'd spend hours brainstorming, sketching out structures, and piecing together snippets of existing code, samples from Stack Overflow, or from your own memory.

With CHOP, writing code is more like having a collaborative painting session with a skilled artist. You commission a painting (your initial prompt), and the AI coding assistant fills in the details, suggests improvements, and even offers alternative approaches. You can ask for specific code snippets to be generated, refactors to existing code, or even generate entire functions by clearly stating what your desired end goal is.

Test-Driven Development (TDD) is a popular software development approach where test cases are created before code is written. Chat-oriented programming can greatly improve TDD by allowing developers to define both the test cases and implementation logic in natural language. Rather than focusing on line-by-line logic, developers can focus on the end result and let the AI coding assistant handle writing the code. The tests then act as a necessary "contract of correctness" for the AI-generated code.

Anthropic recently released Claude 3.5 Sonnet and with it a feature called [Artifiacts](https://www.anthropic.com/news/claude-3-5-sonnet) that can serve as a great introduction to chat-oriented programming. Cody handles CHOP in multiple ways. We saw in the previous section on understanding a codebase that the Cody chat box can generate snippets of code. Some developers may prefer this approach. Ask Cody a question in the chat box, review the output, and if they're happy with it, insert it into their code files.


<Video
  source={{
    mp4: 'blog/chop-in-action/chop-insert-code'
  }}
  loop={true}
  caption="Using Cody to insert code from Chat"
/>

But Cody has another way to do CHOP. With the Edit Code command (CMD+K) a developer can insert new code or edit existing code directly in the file they are working in. Let's go back to our sourcegraph/cody repo and add Claude 3.5 sonnet to our models list.

<Video
  source={{
    mp4: 'blog/chop-in-action/chop-cmd-k'
  }}
  loop={true}
  caption="Using Cody to insert and edit code"
/>

This type of CHOP workflow allows you to focus on the what instead of figuring out the how. You ask the AI coding assistant to complete tasks, it does it, you review the changes and accept them, or if the generated code isn't what you want, ask for a revision. In this case you are essentially acting as the code reviewer while the AI coding assistant is active as the programmer.

I am personally a huge fan of this approach to coding, and it has become my default way of writing code. It allows me to focus on the end result rather than the line-by-line implementation logic. With Cody's edit command, you can insert brand-new code or make edits to existing functions and files.

Chat-oriented programming is a powerful tool for experienced developers. That's not to say newer programmers cannot benefit from it, but in my experience, being familiar with the generated code helps a ton in understanding whether the generated code meets the requirements or needs further refinement. On the flip side, Cody can also help you become familiar with a codebase really quickly if you are new to it.

## Debugging code issues

If writing code is one side of the coin, debugging code is the other. No matter how skilled you are or how much thought you put into the code you write, the odds of getting it perfect from the get-go are slim. Debugging code can be a daunting task. Sometimes, the bug is super obvious, and other times, while it may be a single line of code that needs to be changed, finding it can take days. Debugging code often involves a ton of trial and error, logging statements all over the place, and patience.

In the traditional way of writing code, [rubber duck debugging](https://en.wikipedia.org/wiki/Rubber_duck_debugging) or rubberducking is a popular method of debugging your code in which you basically talk through the issue and explain your code to an inanimate object (usually a rubber duck). As you are explaining the code line-by-line you'll eventually find the snag in your logic and thus pinpoint where the issue lies. This method has worked for me many times but is not infallible.

With chat-oriented programming, the AI coding assistant is your rubber duck. Instead of being an inanimate object that only listens to your woes, it can provide valuable feedback. Cody is an expert on your codebase and can analyze error messages, suggest potential causes all the way down to the line number, and in many cases even generate the fix for you.

In the pre-CHOP era of coding when you would get a build or compile time error you would manually review the output, navigate to the troublesome line of code, and identify what the issue was. Some languages and frameworks, like Rust, for example, have really detailed error logs, while others leave a cryptic trail of breadcrumbs for you to piece together making debugging all that much harder.

With Cody, you can side-step a lot of the manual debugging by highlighting the output and asking Cody to explain what the issue is in plain English. Let's see it in action. Going back to our example of adding a new model, let's say I omitted the additional required properties for the model and then I tried to run the application. I would get the following error message: 

![VS Code error message](https://storage.googleapis.com/sourcegraph-assets/blog/chop-in-action/error-message.png)

Pre-CHOP, I would likely try to navigate the problematic file and try to debug it myself. If I couldn't find the solution, I'd copy and paste this error message into Google, find a StackOverflow discussion on a similar error, and retrace my steps to debug it. With CHOP, I can just ask Cody to explain the issue at hand to me. Once I have the explanation, I can ask follow-up questions to better understand the problem or even ask Cody to fix the issue for me.

<Video
  source={{
    mp4: 'blog/chop-in-action/chop-cody-fix'
  }}
  loop={true}
  caption="Using Cody to debug and fix code"
/>

## Maintaining a high-quality codebase

Maintaining large and complex codebases has always been a challenging task. It requires a constant investment in documentation, adherence to best practices and codebase guidelines, manual code reviews, and more. Sometimes following all the best practices is just not feasible. Tight deadlines mean that corners get cut and sometimes getting a working solution out the door is more important than having it be perfect. But if you are constantly cutting corners and only focusing on shipping, you are no doubt accumulating a ton of tech debt that will eventually need to be paid.

Pre-CHOP, developers often dedicated a portion of their development sprints to code clean-up and refactoring to make code more maintainable. Companies that don't invest in maintaining their codebases will eventually suffer the consequences of slower development cycles, more security issues, worsening performance, and more bugs.

With chat-oriented programming, you have a powerful tool that can help keep you on track and reduce tech debt, but it will not do all the work for you. You can use Cody to identify potential problems, suggest improvements, write unit tests, and refactor code to match your guidelines, but at the end of the day, the onus is on you to be vigilant in maintaining the codebase.

Let's see how we can accomplish this with Cody. In the example below, I will show how I can use the Find Code Smells command on a file to identify potential improvements. Even a great programmer like myself can improve ;).

![Cody Code Smells Command in action](https://storage.googleapis.com/sourcegraph-assets/blog/chop-in-action/cody-code-smells-command.png)

Overall, it's not bad, but there's definitely some room for improvement. Let's tackle issue number one. I will simply follow up in the Cody chat window and ask Cody how I can improve this code to tackle the highlighted issue.

![Cody code smell improvement suggestion](https://storage.googleapis.com/sourcegraph-assets/blog/chop-in-action/code-smell-improvement.png)

With this improvement, my codebase became that much more maintainable!

Once we've made the changes to our codebase, we'll want our manager or peers to review them. Writing git commit messages is another one of those tasks that needs to be done but is not the most exciting thing in the world to do. This makes it prime real estate for our AI coding assistant to take the reins. Cody can generate the git commit message for you and include all relevant changes automatically. See it in action below for the changes we made in this article.

<Video
  source={{
    mp4: 'blog/chop-in-action/chop-diff'
  }}
  loop={true}
  caption="Using Cody to generate commit messages"
/>

### Sidebar: Cody Code Guardrails

Since the LLMs used by Cody are trained using broad corpuses of data, it's rare but possible for Cody to return code that closely matches public code. OSS attribution guardrails is a new beta feature designed to reduce a team's exposure to introducing copyrighted code into their codebase.

Guardrails works by verifying code suggested by Cody against a large corpus of public code. Cody runs this verification check any time it generates a code snippet of 10 lines or more. This impacts code returned to the user in two ways:

Autocomplete: Any multi-line suggestion of 10 or more lines is verified against the public code corpus before being returned to the user. If there is a positive match against public code, that suggestion is not returned to the user.

Chat and commands: Any time Cody generates a snippet of 10 or more lines of code, it is verified by guardrails. The snippet is still returned to the user, but Cody also includes a note alongside the suggestion indicating whether the guardrails check was passed or failed.

You can see this latter functionality below:

<Video
  source={{
    mp4: 'blog/5.3/guardrails'
  }}
  loop={true}
  caption="Cody Guardrails"
/>

## Conclusion

In this post, we covered how developers can use chat-oriented programming (CHOP) to understand, write, debug, and maintain their codebase. CHOP as a programming methodology is still in its infancy, but this layer of abstraction is proving to be valuable for developers wanting to leverage AI in their workflow.

If you want to experience CHOP for yourself, give [Cody a try](https://sourcegraph.com/cody) today, connect with us on [Discord](https://discord.gg/sourcegraph-969688426372825169), or join the Sourcegraph [community](https://community.sourcegraph.com). Share how you're using CHOP and give us feedback on how we can improve the experience.