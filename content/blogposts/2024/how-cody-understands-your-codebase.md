---
title: "How Cody understands your codebase"
publishDate: 2024-02-15T19:00-07:00
authors:
  - name: Alex Isken
    url:
  - name: Corey Hill
    url:
tags: [blog]
slug: 'how-cody-understands-your-codebase'
published: true
description: "Sourcegraph Cody uses several methods of context fetching to answer questions and provide code relevant to enterprise-scale codebases."
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/how-cody-understands-your-codebase/how-cody-understands-you-code-og.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/how-cody-understands-your-codebase/how-cody-understands-you-code-og.png

---

We often say that [Cody](https://sourcegraph.com/cody) uses a deep understanding of your codebase to help you write and understand code faster. Meanwhile, we’re frequently asked: How does Cody understand _my_ codebase? And what exactly does that mean?

In building Cody, we found that Large Language Models (LLMs), when applied to specific use cases, are only as good as the context they’re given. For Cody, those use cases are writing, understanding, and answering questions about code. Cody needs the context of a user’s codebase to do those things effectively. 

This blog unpacks why context matters and how we’ve built Cody Enterprise to use the right context to help you write and understand code. 

### Why does context matter?

When it comes to AI chat and asking questions of an LLM, you can think of questions loosely falling into two categories as they relate to context:

* General coding questions that _are not_ dependent on a user’s context
* Specific questions that _are_ dependent on a user’s existing code/context

General questions that aren’t context-dependent can be answered purely based on the LLM’s training data. LLMs are typically trained on a huge corpus of text, code, and other data and can answer questions by drawing information from that data.

For example, you might ask ChatGPT, “In what year was COBOL invented?” or “What food is the state of Wisconsin best known for?” ChatGPT can answer these questions easily. They aren’t dependent on any context that isn’t included in the query itself or any information the model hasn’t been exposed to.

Similarly, you might ask Cody all sorts of general knowledge coding questions, like: 

* “How do I build a Flask application?” 
* “Can you give me a hashing algorithm?”
* “What are some best practices to prevent SQL injection?”

Cody can answer all of these questions easily; all of the information required to answer them is incorporated in the underlying model’s training data, so no outside context is needed for Cody to provide an answer.

Context-dependent questions are trickier. For example, you can’t ask ChatGPT, “What color is my dog?” since ChatGPT has never seen your dog. You could ask ChatGPT to critique your resume, but only if you include that outside context, i.e., the actual content of your resume, alongside the question. Put simply, asking LLMs about things they’ve never seen before confuses them.

You might ask Cody, “What does this _piece of code_ do?”  For this question, you need to provide context for Cody to understand and answer the question entirely. For this relatively simple question, you could ask ChatGPT and paste in a snippet of your code as context, or you could highlight a piece of code in your editor and ask this question.

A more specific and challenging question is, _“How can I fix this error where the user object is null when accessing the 'username' field?”_ You probably can’t paste in a single snippet of code to answer this question, and even if you could, a good coding assistant shouldn’t require a developer to find all the authentication code themselves.

This is where context retrieval comes in. Instead of making you find the relevant pieces of code and paste them in alongside your query, Cody can search your codebase to retrieve the context that is relevant to your question (even if that context entails multiple files from around a codebase, including those that are not even open in your editor). 

In short, context and context retrieval take Cody from being able to answer only general questions to also being able to answer context-dependent questions, which are very common in a developer's day-to-day work. After all, most software development is just about building on top of existing context.

### Methods of using context: RAG vs fine-tuning

To use the context of your codebase, Cody uses a technique called RAG: Retrieval-Augmented Generation. RAG is a technique where an LLM generates a response using additional context that is included alongside a user request. In our case, Cody programmatically retrieves context when a user submits a request. Then, it uses RAG to submit that context alongside the user request to the underlying model.

We’re often asked about fine-tuning as a way to use context with AI, too. Fine-tuning is a method of extending a model with additional training data beyond the data used during its primary training cycle. Since models are fine-tuned with a point-in-time snapshot of data, they’re typically fine-tuned on information that doesn’t change quickly; otherwise, the fine-tuning quickly becomes outdated. This is especially important to consider for dynamic data sources like codebases. 

**RAG and fine-tuning are different tools for different jobs, so neither is strictly better than the other.** Fine-tuning is typically used to teach a model about a desired _form_, e.g., how users want the model to act. For example, developers might want a model to always return responses in a given format (e.g., preferring a given programming convention, like arrow functions) or to be exceptionally good at answering a style of question not seen in the original training data. RAG is more relevant for teaching a model about _content_, especially content that changes over time, like code, since fresh content is retrieved at the time of invocation.

Today, we use RAG to power Cody’s responses. It suits that purpose well because it can use up-to-date, relevant code that is retrieved at the time Cody is invoked. This doesn’t mean Cody will never use fine-tuning in the future, but for code retrieval specifically, we find RAG to be the more appropriate tool for the job.

### How context is used in a prompt

When a user queries Cody (either via a chat message or a command), the first thing that happens is Cody compiles a prompt. Cody takes the user’s input and molds it into a prompt designed to get the best response back from the LLM. The prompt can be divided into three parts:

* **Prefix**: An optional description of the desired output. Cody uses prefixes often, and one example is when a developer is triggering a command, which is a predefined task intended to return a specific output format. For instance, for the “Test” command, Cody is looking for an output in the format of a unit test and will use a prefix to define this.
* **User input**: The query provided by the user.
* **Context**: The additional information that Cody finds and retrieves to help the LLM provide a relevant answer.

For example, when a user triggers the “Explain” command in Cody, the resulting prompt that Cody generates to send to the LLM may look like this:

_Prefix:_
```
Explain the following Go code at a high level. Only include details that are essential to an overall understanding of what's happening in the code.
```

_User input:_
```
zoekt.QueryToZoektQuery(b.query, b.resultTypes, b.features, typ)
```

_Context:_
```
[Contents of sourcegraph/sourcegraph/internal/search/zoekt/query.go]
```

This full prompt, containing all three parts, is then sent to the LLM. The LLM works off of the information contained in the prompt along with the information contained in its baseline model. Any questions pertaining to the user’s codebase will only be answerable if the context (sent as part of the prompt) gives the LLM enough information to address the question.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/how-cody-understands-your-codebase/prompt-construction.png"
  alt="How Cody constructs a prompt"
/>

### How Cody finds context from your codebase

Knowing how critical context is to an LLM prompt, we still have an open question: how does Cody select the right context to send along to the LLM? We have diverse context sources available between the user’s IDE and code that is remotely stored on Sourcegraph (more on that in a second). For each of Cody’s features, we need to consider the most appropriate approach for both accuracy and speed.

### Chat and commands

For chat and commands, it’s important that Cody has access to broad context. In an ideal case, this means context that spans the entire surface area of a codebase that a user might want to ask a question about.

This is where Sourcegraph’s Code Intelligence Platform comes in. Sourcegraph’s underlying platform functions as an engine that _understands code_. Our customers have codebases ranging from ~100 repositories on a single code host (like Bitbucket or GitLab) to 100,000+ repositories living across a spectrum of code hosts. In all of these cases, Sourcegraph indexes and _understands_ all of this code.

We use this platform to power search experiences through our product [Code Search](https://sourcegraph.com/code-search). Code Search uses a high-performance search engine to help developers search and navigate broad codebases in one place.

Now, we’re using this same underlying platform to power Cody, and we’re able to pass information from the platform to Cody’s LLM as context for understanding your codebase.

When a user invokes Cody, they’re able to select repositories they’d like to pull context from (as of this post, users can select up to 10 repositories at a time). Cody will contact the Sourcegraph instance and run a search over the selected repositories.

The search request pre-processes the user query, splitting the text into tokens and applying a series of cleansing steps so that we are left with a standardized representation without any extraneous information.  That list of tokens is then processed by the Sourcegraph search engine, which scans the user-selected repositories and ranks file snippets (a snippet is a subset of the overall file) according to their relevance to the search query. 

To compute relevance, Cody incorporates an adapted form of the [BM25](https://en.wikipedia.org/wiki/Okapi_BM25) ranking function alongside other signals learned and tuned to the specific task at hand. Ranking the _right_ context at this phase is a critical piece of the process for users to get relevant answers from Cody, so we’re constantly tuning our approach to this ranking. Once snippets are ranked, the most relevant ones are sent back to the Cody client for use in the prompt context.  

On top of the file snippets returned by Sourcegraph search, Cody also has access to local context (the project that is open in the user’s IDE). Cody pulls snippets from open files in the IDE to add to the remotely retrieved context.

Cody then looks at the relevance of all the snippets provided by each context provider and creates a global ranking. From this global ranking, Cody takes the first _N_ snippets returned (_N_ being a function of the length of each snippet) and packages them into the ‘context’ of the prompt it is building. This context, alongside the prefix and user input, completes the full prompt that Cody will then send to the LLM. The LLM will then read and consider the full text of the context it receives when building a response to return to the user.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/how-cody-understands-your-codebase/cody-chat-dataflow.png"
  alt="Dataflow of a Cody chat message"
/>

### What about autocomplete?

Autocomplete, both inline and multi-line, uses different methods of context retrieval. Since autocomplete has to be extremely fast to be most useful (helpfully interjecting while users are typing), Cody uses algorithms that prioritize searching local context for autocomplete rather than running remote searches on an enterprise Sourcegraph instance.  Autocomplete also uses different LLMs, favoring options that are tuned for code completion tasks and for low latency.  

As a user is typing, Cody is constantly evaluating the intent of the actions a user is taking. Using a parsing library called [Tree-Sitter](https://tree-sitter.github.io/tree-sitter/), Cody can quickly identify what type of completion experience will fit best into the active workflow, e.g., filling in the body of a function, writing a docstring, or implementing a method call.  This identified intent helps Cody understand what context will best suit the task at hand.

Once intent is classified, Cody reaches out to various local context sources, including the contents of the active file, other open tabs, recently closed tabs, and more. Cody identifies similar or relevant sections of code from these context streams that are useful reference examples to guide the completion. Like context selection for chat, Cody then packages the most relevant snippets into a prompt and sends that to our completions-tuned LLM.  The response from the LLM is then parsed and rendered as ghost text ahead of the user’s cursor.  

Of course, this is an overly simplistic summary of completions, which is a space rich with ongoing research and development.  If you are interested in learning more, we encourage you to check out our [recent deep dive into the lifecycle of a completion](https://sourcegraph.com/blog/the-lifecycle-of-a-code-ai-completion).

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/how-cody-understands-your-codebase/cody-autocomplete-dataflow.png"
  alt="Dataflow of Cody autocomplete"
/>

### So what happened to embeddings?

Embeddings have been at the backbone of Cody’s retrieval stack since we launched the product in beta, and now that Cody Enterprise is generally available, we’re leaving them behind (for now). So why the change? 

First, as background, it’s important to understand embeddings at a high level. Succinctly, embeddings are a dense vector representation of high-dimensional data. We previously used an embedding model (text-embedding-ada-002 from OpenAI) to collapse tokens (source code) into a vector. We could then run a vector-based retrieval system for context. When a user queried Cody, the query would be converted into a vector, and that vector would be compared against the vectors representing the user’s codebase. This comparison would yield files and code snippets that we’d use as context for Cody.

While embeddings worked for retrieving context, they had some drawbacks for our purposes. Embeddings require all of your code to be represented in the vector space and to do this, we need to send source code to an OpenAI API for embedding. Then, those vectors need to be stored, maintained, and updated. This isn’t ideal for three reasons:

* Your code has to be sent to a 3rd party (OpenAI) for processing, and not everyone wants their code to be relayed in this way.
* The process of creating embeddings and keeping them up-to-date introduces complexity that Sourcegraph admins have to manage.
* As the size of a codebase increases, so does the respective vector database, and searching vector databases for codebases with >100,000 repositories is complex and resource-intensive. This complexity was limiting our ability to build our new multi-repository context feature.

We’re committed to Cody having the _best_ context of any coding assistant on the market, which pushed us to find a solution for these issues. We were able to replace embeddings for context retrieval with Sourcegraph’s native platform, as described in the preceding sections. This new solution doesn’t require sending code to an embedding processor, it requires zero additional config, and it scales to massive codebases.

Although we’re excited about the improvements coming from this change, we believe there are likely opportunities to leverage embeddings in some form in the future as we continue to improve context even further. This is an active area of research for us, and we are excited to share more in the future.

### The future of context

TL;DR, Cody Enterprise has two main ways of retrieving context today:

* For chat and commands, Cody uses a combination of local context + remote Sourcegraph search to find context from a user’s entire codebase.
* For autocomplete, Cody identifies a user’s intent and then pulls local context from the IDE to generate a response extremely quickly.

However, we’re constantly experimenting with new ways to improve Cody’s context retrieval in various dimensions:

* Making context retrieval faster
* Making context retrieval more accurate (e.g., finding the most relevant files to bring to the LLM)
* Bringing in new sources of context

It’s likely that the methods of context retrieval outlined in this post evolve over time just as they’ve evolved since we first announced Cody last year. In the future, we see an opportunity to expand Cody’s total domain of knowledge by bringing in entirely new sources of context like wikis, docs, and engineering tickets. More context will open up Cody to answer more, broader questions for users about parts of their work adjacent to their actual code. 

If you’d like to try Cody yourself, you can [sign up for free](https://sourcegraph.com/cody). You can also [contact us](https://sourcegraph.com/contact/request-info) to learn more about Cody Enterprise.
