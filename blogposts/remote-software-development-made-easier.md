---
title: "Remote software development made easier"
author: Sourcegraph
authorUrl: https://twitter.com/srcgraph
publishDate: 2020-03-22T17:59
tags: [blog]
slug: remote-software-development-made-easier
heroImage: /blog/remote-easier.jpg
published: true
---

Sourcegraph has been remote-friendly from the beginning — our two longest-tenured teammates have worked remotely since 2015 from Arizona and South Africa! We moved to remote-first in May of 2019 and completed our transition to all-remote with the ringing-in of 2020.

We have compiled some excellent tips and tricks from fellow [teammates](https://about.sourcegraph.com/company/team) on how to live your best distributed work life!

## Tips for working remotely

### Home office and desk setup

- **Separate work and home:** “Try working in a different space to where you relax/sleep.”
- **Ergonomics are crucial:** “Consider getting an ergonomically friendly chair and standing desk.”
- **Get a loud keyboard:** “You can use a loud keyboard, unlike in an office environment.”

### Schedule

- **Stick to your plan:** “When working from home, it’s VERY important to have a set schedule. You’ll also need the discipline to respect it, or you risk blurring the lines between work and life to an unhealthy degree.”
- **Triage:** “In the morning, catch up on Slack/GitHub. Stick to triaging (recording in org-mode Slack/issues to get back to), so you can review and respond to the smaller stuff instantly. Then, create a plan for the rest of the day.”
- **Timebox:** “Schedule your daily working hours (whether that's 9-5 or a variant) with flexibility to work a little earlier or later. Productivity thrives with timeboxes. 'One hour until lunch' or 'Two hours till the day is over' works much better than 'Let's start working on this and see how long it takes.'’”

### Communication

- **Care:** “Start by caring about your written communication. Well-written prose looks exactly like well-written clean code: like someone cares. Most importantly, it should be written for others to understand with no obvious typos and grammar mistakes. Always reread and edit what you write. Remember to ensure that what you want to communicate is clear and can be understood by someone who doesn't have all of the context and knowledge you had when writing. Extra points for removing unnecessary sentences and words.”
- **Mind the round trip time:** “People work in different time zones and might take a full working day or night for someone to respond to your messages. To avoid a multi-day back-and-forth, keep this round trip time — from you to the receiver and back — in mind. In practical terms: try to provide as much information as necessary for the other person to answer your request without the need for them to ask follow-up questions. Of course, that’s not always possible, but the goal should be to eliminate it as much as possible.”
- **Raise your voice:** “When you’re working remotely, your colleagues won’t bump into you on your way to the office kitchen or stop by at your desk to ask you how your day is going. Nobody is going to meet you by accident. You're not visible if you don't raise your voice. Actively communicate your progress, proactively ask for help, clearly document what you know, etc.”

## Benefits of using Sourcegraph when working remotely

There is no Sourcegraph office beyond an official mailbox – all of our developers, managers, and executives are remote. We understand what makes remote work successful. We believe what we have built with Sourcegraph will be invaluable to you. Your remote development experience, whether you’re a work-from-home expert or newbie, will grow stronger than ever.

Below are some ways Sourcegraph improves working together effectively on a remote team.

## Reduce communication needed when reviewing changes

When reviewing code, you need a deep understanding of what that code does. If you aren’t familiar with how it works, you may spend a lot of time asking the change author questions, which is time-consuming for both you and the author.

We built the Sourcegraph browser extension to help you more quickly navigate and understand code (among other things!). The Sourcegraph browser extension provides hover tooltips directly in GitHub, GitLab, Bitbucket, and many other code hosts when reviewing code. When doing code reviews, you can learn by example, finding references to and documentation for the code you are reviewing. This allows you to build a comprehensive understanding of how the code works and ensure your questions are specific to what the author has changed.

![Sourcegraph’s go to definition and find references hover tooltip on a code review](/blog/remotework-codereview.png)

<div class="blockquote case-studies__quote case-studies__quote--in-content">
    <p>
    Having Sourcegraph is an improvement for several reasons. It’s an easy way to share pointers to code and searches on code. When working remotely, I can't easily have someone look over my shoulder as I would in person. Screen sharing is possible (but with much higher-friction), and the results are harder to reproduce offline. Links to Sourcegraph are much more useful when trying to add in context for a Slack thread that blew up when I wasn't paying attention.

Sourcegraph is also a better way to explore unfamiliar code. It costs more to get someone's attention when asking a question (because of timezones, async channels), so when I do need to ask someone for help, I want to respect their time by doing due diligence first. Sourcegraph helps me explore the code more effectively on my own than I could with only local clones and GitHub search.</p><footer class="blockquote-footer">
Michael Fromberger, Software Engineer at Sourcegraph</footer></div>

## Find the right people

Writing code changes—especially for new employees—can be a daunting task because you need to understand large and complex systems. Sourcegraph streamlines the entire code browsing experience so that no matter where you are browsing code (on GitHub, GitLab, Bitbucket, etc.), you have code intelligence at your fingertips via documentation hovers, go to definition, and find references. This empowers you to find answers without having to seek out help. When you do need support, you can simply click to find the author of the code.

Sourcegraph’s powerful search engine lets you start by searching broadly for what you are working on, and then narrow it down with advanced filters, including full regex search. Once you’ve found the results you need, you can easily find who authored the code, and even search the repository’s entire git history to see if others have made similar changes in the past—allowing you to follow the paper trail of your code’s history.

![A commit history search with highlighted code authors in Sourcegraph](/blog/remotework-commithistory.png)

<div class="blockquote case-studies__quote case-studies__quote--in-content">
    <p>
    As a Product Manager, I care about everything--features, bug fixes, improvements--that go into the product. I use a saved search in Sourcegraph to be notified by email every time there is an update to our CHANGELOG. This lets me keep track of what and when features get in and makes sure I know who to talk to about that change if I have any questions. It also removes unnecessary communication cycles between the engineering team and me because rather than needing to interrupt each team member, or require them to reach out to me to find out what is going on, I am proactively informed.
    </p>
  <footer class="blockquote-footer">
  Christina Forney, Product Manager at Sourcegraph
  </footer>
</div>

## Write better documentation

We’ve found that Sourcegraph helps our engineers write better documentation. Once you have information at your fingertips and see where it’s missing (like when you are hovering over functions), you are more likely to improve the documentation of that code to make understanding it easier at a glance.

<div class="blockquote case-studies__quote case-studies__quote--in-content">
    <p>
    As we've grown, I've needed to hand off a lot of code ownership and processes to other people. This meant writing a lot of docs (in code and in Markdown files). Having code search makes me more likely and happier to write docs because I believe that people will be more likely to actually discover and read them. ”
    </p>
  <footer class="blockquote-footer">
  Quinn Slack, CEO of Sourcegraph
  </footer>
</div>

Sourcegraph’s search also makes it more likely that you will discover documentation that is stored inside your repositories but outside your code. This increases traffic to documentation and leads to people relying on it more, which in turn causes people to improve it. We have seen this extensively in the [Sourcegraph handbook](https://about.sourcegraph.com/handbook).

## Share code more easily

You’re staring at some code in your editor, struggling to understand how the code actually works. You decide it’s best to ask your coworker if she knows—but how do you share the code you’re looking at? Walk over to her desk? Navigate through the GitHub user interface to find the right file?

<div class="blockquote case-studies__quote case-studies__quote--in-content">
    <p>
    It’s nice to be able to share links to code with Sourcegraph. It’s important for remote work because your conversation partner often cannot look at your screen.
    </p>
  <footer class="blockquote-footer">
  Uwe Hoffmann, Software Engineer at Sourcegraph
  </footer>
</div>

With [Sourcegraph editor extensions](https://docs.sourcegraph.com/integration/editor), you can easily use a shortcut key to open your current selection on Sourcegraph. You can also use our [browser search engine shortcuts](https://docs.sourcegraph.com/integration/browser_search_engine) to quickly search across your entire organization’s code. Both allow you to instantly get a link to that code that you can share with a coworker.

![With Sourcegraph, you can share a direct link to the code you want to discuss](/blog/remotework-codelinksharing.png)

## Sourcegraph supports remote work environments in many ways. It:

- Empowers you to find answers to your own questions
- Reduces unnecessary communication and improves the efficiency of the communications you do need
- Makes it easier to find the right people to talk to
- Showcases code dependencies to ensure informed communication
- Enables link sharing to code, facilitating remote and asynchronous conversations

<div class="blockquote case-studies__quote case-studies__quote--in-content">
    <p>
    Any tool that empowers you to find the answer to your own question is good for remote work, and Sourcegraph is such a tool. The alternative is waiting for someone else to tell you the answer, which means you are blocked in the meantime, or you have to task-switch, which is costly.
    </p>
  <footer class="blockquote-footer">
  Nick Snyder, VP Engineering at Sourcegraph
  </footer>
</div>

**We’re excited to learn how Sourcegraph has made your remote work experience better and would love to hear from you on [Twitter](https://twitter.com/srcgraph)!**

**Learn more on how Sourcegraph Universal Code Search can improve your productivity and efficiency as a developer from our eBook: https://about.sourcegraph.com/resources/universal-code-search-ebook/**
