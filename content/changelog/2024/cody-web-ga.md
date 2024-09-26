---
title: "Cody Web is now generally available"

authors:
  - name: Kelvin Yap
    url: https://x.com/kelvinyap
    avatar: https://storage.googleapis.com/sourcegraph-assets/blog/kelvin_avatar.png

publishDate: 2024-09-04T22:29-02:00

description: "The core experience of using Cody is alongside your code in your IDE of choice, but there are often times when you want to interact with Cody via the web. It can be particularly helpful as part of a workflow where you’re performing a search via Code Search and need help from Cody, or if you’re on your mobile device and want to ask it a question. We’re happy to announce that Cody Web is now generally available and includes numerous improvements to make the web experience better and more consistent."

tags: [Enterprise, Cody, Cody Web]

version: [v5.7.0]
versionIcon: /assets/changelog/cody.svg

slug: 'cody-web-ga'

published: true

---

The core experience of using Cody is alongside your code in your IDE of choice, but there are often times when you want to interact with Cody via the web. It can be particularly helpful as part of a workflow where you’re performing a search via Code Search and need help from Cody, or if you’re on your mobile device and want to ask it a question. Many users have also been using Cody Web and its access to leading models from Anthropic and OpenAI to ask non-code related questions as well.

We’re happy to announce that Cody Web is now generally available and includes numerous improvements to make the web experience better and more consistent.

### Updated chat interface

<br />
The chat interface should feel familiar, with a consistent look and feel to Cody in your IDE. Under the hood Cody Web shares much of the same code with the IDE plugins, and you should see less lag between features being added to the web interface moving forward.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/changelog/cody-web-ga/cody-web-ui.png"
  alt="Cody Web has an updated chat interface"
/>
<br />

### @-mentions

<br />
Cody Web now supports @-mentions just like in VS Code and JetBrains. Previously Cody Web users were reliant on Cody automatically finding the right context with no way to help guide it, but now users have control over the context Cody is provided when generating a response.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/changelog/cody-web-ga/cody-web-mentions.png"
  alt="Cody Web now supports @-mentions for context"
/>
<br />

### Prompts and Prompt Library

<br />
Cody Web gains the new prompts and Prompt Library added to VS Code and now JetBrains as well. Users can edit and use prompts they’ve created themselves, as well as use prompts shared with their organization.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/changelog/cody-web-ga/cody-web-prompts.png"
  alt="Cody Web has prompts and a Prompt Library"
/>
<br />
