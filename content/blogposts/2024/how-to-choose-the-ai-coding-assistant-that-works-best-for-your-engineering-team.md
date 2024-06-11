---
title: "How to choose the AI coding assistant that works best for your engineering team?"
publishDate: 2024-06-11T10:00-07:00
authors:
  - name: Raman Sharma
    url: https://handbook.sourcegraph.com/team/#raman-sharma
description: "A list of key questions you should ask when evaluating AI coding assistants."
tags: [blog]
slug: "how-to-choose-the-ai-coding-assistant-that-works-best-for-your-engineering-team"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/non-devs/sourcegraph-non-devs.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/non-devs/sourcegraph-non-devs.png
---

You have either already chosen an AI coding assistant for your team or are in the process of evaluating one. If you don't belong to either of the above two groups, you will soon find yourself in the minority. Irrespective of which camp you are in, the rapid advancements in this space mean that you need to carefully evaluate how you choose an AI coding assistant - one that is not just right for your needs today but also sets you up for the future. Here, we list the key questions you should ask while evaluating an AI coding assistant.

## Does it work with your existing tools - IDEs, Code hosts?

When you introduce a new developer tool in your organization, you want it to work alongside all your other tools. You want to ensure that any learning curve or changes associated with adopting a new tool are amply made up for by the benefits you will receive. Your AI coding assistant should integrate with your favorite editors - VSCode, JetBrains, etc. The relevant functionality should also be available in a simple web-based interface where applicable. Additionally, it should work with your code regardless of where it lives—GitHub, GitLab, Bitbucket, etc.

## Does it support the programming languages and frameworks you use?

Each organization is different in terms of its choice of programming language(s) or frameworks, and its reasons for choosing also vary—history, skill, performance, preference, etc. You need a coding AI assistant that helps with your specific environment and produces the most relevant results for your language and framework choices.

## Does it support your specific use case scenarios?

Yes, understanding, writing, and fixing code are things most developers do daily. However, every engineering team usually also has their particular kind of toil - one that is unique to their business, their tech stack, their circumstances, etc. For one team, it may be the requirement to generate tons of unit tests. For another, it may be a massive migration project to move from one language/framework to another. For yet another, it might be onboarding new engineers to a large, complex, legacy codebase with little documentation. You want to ensure that your coding AI assistant does well not just on generic tasks but can also support your specific situation.

## Does it utilize your entire codebase to provide contextually relevant results?

When writing code, you need to carry a lot of context in your head - about the code's dependencies, how it fits within the overall architecture, how it will be used elsewhere, etc. The code that contains all of this context doesn't necessarily always live on your local development machine. In many cases, all this code is massive, and pulling it down onto your dev box is impractical. So, how can an AI coding assistant replicate the entire context that senior engineers rely on to work productively in a codebase? Obviously, it needs to work with code beyond the local machine - code that lives on remote code repositories like GitHub, GitLab, Bitbucket, or others. Many enterprises have massive codebases spread across multiple repos and sometimes multiple code hosts. You need an AI coding assistant that can handle all such requirements.

## Does it use non-code context to generate code that considers your broader requirements?

Code is the ultimate expression of logic, but there is a lot more context relevant to code, which isn't necessarily code itself. Before code becomes code, it is likely a feature specification doc, a bug report, a design artifact, an example in an API reference doc, or maybe just a chat with a coworker. Once code executes, it produces logs, trails, or any number of other artifacts.

Gathering this context from different tools—whether to write or review code—has to be one of the more laborious tasks in software development. You want an AI coding assistant that can gather relevant context from external sources like Confluence, Jira, Notion, Slack, Google Docs, Prometheus, or even random web pages.

## Does it allow you to take advantage of advancements in the fast-moving LLM space?

It would be an understatement to say that the LLM space is evolving fast. New models - both proprietary and open source - are released monthly. Many try to differentiate on specific parameters like speed, accuracy, etc. You want to choose a coding AI assistant that doesn't lock you into a particular model family and lets you reap the benefits of new models as they come to market. Your best bet is to evaluate the available models and pick those that best fit your needs. You may prefer to use an LLM for its speed when used with code autocomplete but prefer a different LLM for its reasoning capability in chat, and these preferences may change over time as new LLMs emerge. Keeping your options open would be a wise decision in this still-evolving market.

## Does it allow you to leverage your existing AI investments?

Coding is one of many things that your team does. You may have already invested in AI tools like ChatGPT, Claude, Gemini, etc., for purposes like content creation, general productivity, etc. Wouldn't it be great if your AI coding assistant could utilize your existing investment (through API keys, etc) so you don't have to pay twice for the underlying LLM? This functionality, sometimes called Bring-Your-Own-Key (BYOK), allows you to maximize the utilization of your AI spending while giving you an easy on-ramp to try out the developer experience of the coding assistant.

## Does it work in your preferred deployment setup?

If your AI coding assistant is going to work with any non-trivial amount of code, it will likely have to have an aspect of deployment. Where exactly it needs to be deployed usually depends on where your code lives, where you deploy your other software assets, your organization's security and privacy policies, etc. You might want to deploy it on your servers living in your own data center, self-host it in the cloud infrastructure you manage, or run it in a SaaS-style fully managed cloud. You want an AI coding assistant that doesn't force you into one specific deployment style but can support any of the above configurations.

Another important deployment consideration for AI coding assistants is how your code would interact with the underlying LLMs on which these assistants invariably rely. In the normal course, some chunks from your code are sent to the underlying LLM as context so the LLM can return relevant code as output. However, you may prefer to keep elements of your code from transferring over the public internet. In that case, look for an AI coding assistant that utilizes the private cloud connections with the underlying LLMs through managed cloud services like Amazon Bedrock, Azure OpenAI, or Google Vertex. This configuration gives you the peace of mind that your code is processed only by LLMs that run effectively within your private deployment boundary.  

## Does it protect you from intellectual property risks?

LLMs are trained on vast amounts of public information, including public code. Generating code using these LLMs may introduce the risk that newly-generated code closely matches other copyrighted code existing in the public domain, which in turn introduces legal risks such as copyleft.

To have trust in an AI coding assistant and the code it provides, you need to have confidence that the code it generates for you will not put you in legal jeopardy. Coding assistants can mitigate this risk in different ways:

-   Coding assistants can use models exclusively trained on permissively licensed code to avoid the risk of generating copyrighted code.

-   Coding assistants can flag or filter out generated code that is found to match public code.

-   Coding assistant vendors can provide contractual IP indemnification, holding the vendor responsible for covering damages from IP infringements.

You need an AI coding assistant that provides these layers of security to have peace of mind.  

## Does it protect against the risk of your data being leaked or exposed?

AI coding assistants access LLMs in various configurations. Many of these configurations rely on third-party provider endpoints. This means that your code is transmitted to the third-party provider and processed on their hardware, with a resulting output being sent back to you. The provider hardware is almost always multi-tenant and used to process requests from many different clients.

As a result, your code may be stored on the provider's hardware for an unknown amount of time without your permission or knowledge, which could expose your code in unexpected ways.

You need an AI coding assistant that protects your code and mitigates the risk that it is exposed. AI coding assistants can provide this using zero-retention guarantees for all of their LLM providers, meaning that code is deleted as soon as an output is successfully generated (and never retained for an extended period).

AI coding assistants can also provide this security at an even deeper level by preventing your most sensitive code from ever being sent to LLM providers or leaving your local environment. Consider a solution that allows you to choose which files are explicitly not allowed to be transmitted to underlying LLMs.

## Does it guarantee that it will not train using your code?

Since AI coding assistants often work through third-party model providers, it is possible that these providers will use code and data sent to them to train new models, which can be a significant privacy risk, given the sensitivity of your data.

You need an AI coding assistant that guarantees that your code will never be used by the vendor or third-party model providers it works with for model training.

## Conclusion

In conclusion, finding the right AI coding assistant comes down to three key factors: **context**, **choice**, and **security**. **Context** ensures it understands your entire codebase and uses all relevant information while providing code suggestions. **Choice** means it should integrate seamlessly with your tools, support your programming languages, and adapt to various setups while keeping up with AI advancements. **Security** involves strong data protection, legal safeguards, and guarantees that your code won't be used for training models. By focusing on these areas, you'll get an AI assistant that meets your needs now and in the future.\
If you've gotten this far and said to yourself, *"I wish there were an AI coding assistant that could do all this!"* You're in luck. Cody can. We would love to discuss how Cody fulfills your team's needs. Please [contact us](https://sourcegraph.com/contact/request-info), and we will get in touch shortly.