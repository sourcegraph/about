---
title: "How we’re thinking about the levels of code AI"
authors:
  - name: Quinn Slack
    url: https://handbook.sourcegraph.com/team/#quinn-slack
publishDate: 2023-10-04T10:00-07:00
description: "We've defined levels of code AI capabilities to provide clarity for developers on what's achievable now and coming next amidst the hype."
tags: [blog]
slug: 'levels-of-code-ai'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-october-2023/levels-of-code-ai-blog-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-october-2023/levels-of-code-ai-blog-hero.png
---

In the last year, code AI went from less than 1% of developers using it, to [around 92%](https://github.blog/2023-06-13-survey-reveals-ais-impact-on-the-developer-experience/) of developers using it. Code AI has changed how almost everybody codes, and its impact is only just beginning. But overall, there's too much hype about code AI, which has led some to dismiss code AI altogether.

To avoid this, and to communicate code AI's current and future state clearly, we've found it helpful to think in terms of "levels of code AI" as we've been building [Cody](https://cody.dev). This has made it easier for our own team and our users to understand what code AI can actually do today and what it'll be capable of in the future.

We've defined the levels to be sequential, so that achieving level N first requires achieving level N-1. For example, good AI code completion (level 1) is a prerequisite for AI creating larger code diffs (level 2). This helps us identify what capabilities and primitives to build first before we can conceivably tackle the harder problems. This property also makes it useful to consumers of code AI as a BS filter when evaluating exaggerated claims from vendors.

![Levels of code AI](https://storage.googleapis.com/sourcegraph-assets/blog/release-october-2023/levels-of-code-ai/levels-of-code-ai.png)

We took inspiration from the Society of Automotive Engineers' (SAE) [levels of driving automation](https://www.sae.org/blog/sae-j3016-update), which have helped cut through hype in the autonomous vehicle market.

![SAE levels of automation](https://storage.googleapis.com/sourcegraph-assets/blog/release-october-2023/levels-of-code-ai/sae-levels.png)

Source: [SAE International](https://www.sae.org/blog/sae-j3016-update)

Let's go through each level of code AI.

## Human-initiated code

Today, virtually all code written is human-initiated, where a human writes, debugs, documents, tests, and ships code. The first three levels of code AI are where the human developer is in control and initiates each invocation of code AI to directly help with the human's coding task.

### Level 0 - No AI assistance

At this base level, the developer writes all code manually without any AI assistance. The developer is responsible for all aspects of programming, including writing, structuring, testing, debugging, and maintaining a codebase. AI does not generate or modify any part of the codebase. All logic, planning, and implementation comes from the human developer. This level serves as the starting point before introducing any AI assistance into the development workflow.

In self-driving car terminology, this represents the SAE level 0 of driving automation, which is "No Automation." A vehicle operating at Level 0 is fully reliant on the human driver. The human driver performs all the tasks from acceleration to braking, steering, and everything in between.

Level 0 does include plenty of non-AI assistance, such as symbol name completion, hovers, definitions, references, implementations, auto-formatting, etc.

![Level 0](https://storage.googleapis.com/sourcegraph-assets/blog/release-october-2023/levels-of-code-ai/level-0.gif)

### Level 1 - Code completion

At this level, the developer begins to use AI that can generate single lines or entire blocks of code based on the surrounding code. For example, a developer might write the signature of the function, and the AI will infer the context and generate the implementation details for that function. At level 1, the code AI assistant's input is its training set (10^9-10^12 tokens of code and other text) and some limited context, often taken from recently viewed files in the editor.

Here's an example of Cody generating the implementation logic for a bubble sort algorithm in Javascript below. Based on the function name and the surrounding context around that function, Cody is able to infer that we wanted to implement a bubble sort algorithm for our `bubbleSort` function and provided us with the implementation details to do so. GitHub Copilot and other code AI assistants provide similar code completion functionality.

![Level 1](https://storage.googleapis.com/sourcegraph-assets/blog/release-october-2023/levels-of-code-ai/autocomplete-ghost-text.png)

The AI understands enough context to turn simple instructions into usable code. However, the developer still designs the overall program logic and control flow. AI code generation is limited to small code blocks like singular functions at level 1.

A level 1 code AI assistant speeds up common coding patterns but does not compose meaningful programs itself. The human developer still decides the structure and design of the program, writes substantial amounts of original and nuanced code, and validates that the code AI completions are accurate.

This is like SAE Level 1 (Driver Assistance), which includes basic cruise control and lane centering. At this level, vehicles still require the full attention of the human driver but offer simple automation features to make driving easier.

### Level 2 - Code creation 

At level 2, the code AI is able to write longer blocks of code, design and implement APIs, and fix existing code--all of which go far beyond filling in a few lines here and there. This requires a superior understanding of the codebase and related context compared to level 1, so that the AI-created code is more likely to be accurate and idiomatic. Because level 2 involves writing more code at once than level 1, level 2 is strictly harder than level 1 to achieve.

At level 2, the developer is still in control and is expected to review all of the code that the AI generates. The AI code creation operation is a single operation in response to human direction.

Here's an example where Cody performs a more complex code creation task based on human direction:

<Video 
  source={{
    mp4: 'blog/release-october-2023/levels-of-code-ai/cody-convert-string-to-object-id'
  }}
  loop={true}
  title="Level 2"
/>

Beyond code creation, one way to evaluate a code AI's depth of understanding is by asking it to explain code. While the code explanation is not necessarily used directly for code creation, you can often use it to gauge the tool's general reasoning capabilities about code and its comprehension of specific aspects of your codebase. Here's an example of using Cody to `/explain` some code:

<Video 
  source={{
    mp4: 'blog/release-october-2023/levels-of-code-ai/explain-cody'
  }}
  loop={true}
  title="Cody explains code"
/>

This is like SAE Level 2 (Partial Automation), which includes features like traffic-aware cruise control (TACC) and automatic lane changes. The human driver is still in control and can override anything the car does at any time, but the car is performing more complex actions in response to human direction on its own.

## AI-initiated coding

Code AI levels 1 and 2 are about human-initiated coding, where the AI coding assistant performs a single operation in response to human direction, and where the AI's output is (intended to be) reviewed by the human.

The next two levels, levels 3 and 4 of code AI, are where the code AI performs multiple steps (operations) to accomplish a human's higher-level intent. The human does not review the output of each step.

### Level 3 - Supervised automation

We call level 3 "supervised automation", where the human gives a high-level objective and the code AI performs multiple steps to accomplish it, with some capability to validate its work so it can iterate toward a solution. The objective is on the order of what you could give to a software engineering intern or junior developer with unbounded time and patience, such as fixing many kinds of bugs, adding new features, and integrating with other systems.

This is where the human starts to step back from writing code and instead focuses on higher-level design, specifications, and reviews. The code AI is responsible for determining which code (and docs) to add or update, writing the code and associated tests, and distilling it into an easily reviewable change. If needed, the code AI might ask the human for input along the way, such as to clarify the human's product requirements.

The human is not expected to review the output of each step as the code AI iterates toward a solution, but the human still should perform a high-level review of the final code output. When the human reviews the final code output, the level 3 code AI is able to interact and adjust the code in response to the human feedback.

Some coding objectives will probably be too complex to be accomplished by a level 3 code AI. We don't yet know how to specify the limits on task complexity in a useful way, but we think the 80-20 rule may apply here. That is to say, 80% of the issues in your issue tracker--the ones that are most straightforward, mechanical, or tedious--will be resolvable with level 3 code AI.

An example of what a level 3 code AI could accomplish by itself is adding a new user profile field to an application. It's likely the code AI would need to ask the human for clarity on the product requirements as it starts to implement the solution. Another example is resolving a bug observed in the production logs. A level 3 code AI ought to be able to root-cause simple bugs, propose a solution, add the appropriate unit tests, and submit a PR for review by a human.

This is like SAE Level 3 (Conditional Automation), where the vehicle itself takes on the primary role of driving, with the human driver being a fallback in case the vehicle cannot drive itself safely. The vehicle can perform most of the driving tasks including steering, acceleration, lane changes, and more, but it may encounter situations where it cannot adequately perform these tasks, so it gives control back to the human driver.

### Level 4 - Full automation

Level 4 is like level 3, except it can accomplish more complex tasks, and humans are no longer expected to review the final code output from the code AI. This is how a CEO or product manager would interact with a senior engineer, fully trusting them to produce a high-quality solution in code. It may also be useful for level 4 to include proactive monitoring of code to fix bugs and respond to user feedback.

This is like SAE Level 4 (High Automation), which entails cars performing virtually all driving tasks under most conditions. For example, Waymo and Cruise operate a fleet of fully automated self-driving taxis in cities where they have high-quality mapping data and can provide a safe driving experience for passengers without human drivers. A customer simply hails a car using a mobile app, provides a destination, and is driven by the vehicle to their final destination without any additional human input.

## Level 5: AI-led full autonomy

Levels 1-4 of code AI involve achieving goals a human has directly defined. And level 4 certainly contains enough complexity to take up lifetimes of research and development. Through the power of composition and abstraction, level 4 could achieve indefinitely long and sophisticated chains of execution. However, a human will still need to articulate a definite goal, like "I need an application that does XYZ" and success will be measured by how closely the AI accomplishes this goal.

But there is perhaps a level beyond this that involves AI setting its own goals to maximize a more fundamental reward function in a multi-agent, adversarial, and unbounded environment. Some analogues would be the way the human brain seeks dopamine or how companies seek profit---to revisit our self-driving analogy, the way transportation companies continually observe and refine their business, increasingly defined in code, to maximize the utility they deliver to their customers.

Level 5 certainly feels distant to us given the current state of code AI, but on the other hand, the rapid progress we've seen in just the past few years presents the exciting possibility that we could achieve it within our lifetimes. There will be many challenges to overcome along the way, including ones of alignment (in the general sense of the word), but we are optimistic it is within reach.

## Conclusion

![Levels of Code AI](https://storage.googleapis.com/sourcegraph-assets/blog/release-october-2023/levels-of-code-ai/levels-of-code-ai.png)

We expect to see code AI take on increasingly complex coding tasks with greater autonomy. Code AI's impact is real and growing, but there's also too much hype that causes confusion and loss of trust. Just as the autonomous driving industry came together to agree on a set of levels for self-driving cars to address that same problem, we've found it useful to define the levels of code AI as we've been building [Cody](https://cody.dev).

We hope other people find these levels of code AI useful as a tool for thought in understanding, evaluating, and building code AI, and monitoring its impact.

Tell us what you think about the code AI levels and help us improve them as a tool for thought!