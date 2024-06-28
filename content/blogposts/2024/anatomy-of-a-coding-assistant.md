---
title: "The anatomy of an AI coding assistant"
authors:
  - name: YK Sugi
    url: https://x.com/ykdojo
publishDate: 2024-06-18T10:00-01:00
description: "Discover how AI coding assistants like Sourcegraph Cody enhance developer productivity by leveraging context. Learn about features like autocomplete, chat, test generation, and code editing, and how they fetch relevant code snippets to provide accurate suggestions and edits."
tags: [blog]
slug: 'anatomy-of-a-coding-assistant'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/anatomy/1_pointer.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/anatomy/1_pointer.png
---

![Pointer clicking on code snippet](https://storage.googleapis.com/sourcegraph-assets/blog/anatomy/1_pointer.png)

Prefer watching a video overview of this topic and how we came to develop [Cody](https://sourcegraph.com/cody)?

If so, feel free to take a look at this video of ours:

<YouTube 
  title="Context is King - the Evolution of a Modern AI Coding Assistant"
  id="XaOqSAXNkaM"
/>

---

Have you ever wondered how an AI coding assistant works?

We’ve been working on our AI coding assistant, [Cody](https://sourcegraph.com/cody), for a while now, and over time we’ve learned that really, ***context is king***.

![Octopus with a crown labeled 'Context' and code snippets](https://storage.googleapis.com/sourcegraph-assets/blog/anatomy/2_octopus.png)

If you ask ChatGPT a coding question about your particular codebase, it won’t be able to answer it because it doesn’t know anything about your codebase.

![ChatGPT interface showing a conversation on converting text into embeddings in Sourcegraph's Cody. The response explains three steps: 1. Choose a language model capable of generating embeddings, such as OpenAI's GPT or Google's BERT. 2. Prepare your environment by installing necessary libraries like `transformers` or `sentence-transformers`. 3. Generate embeddings, with an example command to install the `sentence-transformers` library using pip: `pip install sentence-transformers`. The response is displayed in a dark theme interface with a copy code button for the installation command.](https://storage.googleapis.com/sourcegraph-assets/blog/anatomy/3_chatgpt.png)

Even if it happens to be open source, the answer you get might be outdated or not accurate enough.

![ChatGPT interface showing a conversation on converting text into embeddings in the Sourcegraph Cody repository. The response outlines three general approaches: 1. Using pre-trained models like BERT or other transformer-based models to convert text into embeddings, leveraging large datasets for high-quality embeddings. 2. Custom implementation for generating embeddings tailored to specific needs. 3. Utilizing common libraries like Hugging Face's `transformers` and `sentence-transformers` or other NLP frameworks to facilitate the process. The interface is displayed in a dark theme with navigation controls for the conversation.](https://storage.googleapis.com/sourcegraph-assets/blog/anatomy/4_chatgpt2.png)

So, by fetching the right parts of your codebase and giving them to your AI coding assistant, the underlying AI model is able to come up with much better answers.

![Chat interface showing a question to Cody about converting text into embeddings in the codebase. The response explains the process, involving a specific model and API, managed by the LocalEmbeddingsController class. It highlights model configuration using the openaiModelConfig object, which specifies details like model 'openai/text-embedding-ada-002', dimension 1536, provider 'openai', endpoint CODY_GATEWAY_PROD_ENDPOINT, and indexPath getIndexLibraryPath(''). The interface displays a dark theme with context items and code snippet formatting.](https://storage.googleapis.com/sourcegraph-assets/blog/anatomy/5_cody.png)

Over the past year or so, we’ve learned a lot about what works for fetching the right context for an AI coding assistant. In this post, I’m going to share some of those learnings and uncover how it works under the hood.

---

## An AI coding assistant - a product of products

The reality is, if you look at a coding assistant like [Sourcegraph Cody](https://sourcegraph.com/cody), it’s not a single product—it’s many products put together. You have autocomplete, which makes suggestions as you code that keep you in flow. Then there’s chat, which allows you to ask questions of and generate code that fits in your codebase. Cody also has a feature that automates quick inline code changes with natural language, and another one that generates unit tests.

![Screenshot showing a code editor with a TypeScript file 'CommandsController.ts' open. The code is highlighted, indicating that Cody is actively making in-line edits. The function 'execute' is visible, with comments explaining its purpose: executing a Cody command from user input and command arguments, handling prompt building, and context fetching for commands. The editor displays a dark theme, and Cody is working in the background as indicated by a status notification.](https://storage.googleapis.com/sourcegraph-assets/blog/anatomy/18_edits.png)

Each of these features works very differently from one another. The mental model of the user and the requirements are different for each. **For autocomplete, speed is key.** You want it to be very fast and accurate enough so that it doesn’t interrupt the programmer’s flow. On the other hand, **for chat, accuracy and the quality of the responses may be more important**.

![Graph showing the tradeoff between speed and accuracy for different coding assistant features. Autocomplete is positioned higher on the speed axis, indicating that it prioritizes quick responses. Chat, edit code, and test generation are positioned higher on the accuracy axis, indicating that these features prioritize providing precise and accurate results. The graph highlights the balance between speed and accuracy in the design of these features.](https://storage.googleapis.com/sourcegraph-assets/blog/anatomy/7_tradeoff.png)

When generating tests, there may be additional requirements. For example, if you’re looking at a file and want to add tests to it, you need to quickly detect if a test file for that file already exists. So, when we say “coding assistant,” it might sound simple, but it’s actually a product of products—multiple products put together to create a comprehensive experience.

In this post, we're going to take a look at how context fetching works for each particular feature - chat, autocomplete, generating tests, and editing code.

---

## How context fetching works for chat

![Chat interface in Visual Studio Code showing a question to Cody about how chat works in the codebase. The response details the implementation of chat functionality in the Cody extension using React components, TypeScript interfaces, and utility functions. It highlights the 'Chat.tsx' component, which handles rendering the chat interface, displaying the chat transcript, and managing user interactions. The 'Transcript' component is used to display chat messages, and the 'WelcomeMessage' component shows a welcome message when the chat is empty. The interface is displayed in a dark theme with context items listed.](https://storage.googleapis.com/sourcegraph-assets/blog/anatomy/8_chat.png)

Chat allows you to ask questions about your codebase and generate code that's tailored to work within your codebase. For this, we want a few things:

1. **Conversation history:** In a given chat session, we record previous messages as they may contain relevant context for the user's next request.
2. **Code search:** We fetch the most relevant code snippets related to the user's query from the codebase using search, similar to how a human dev might search for these code snippets.
3. **User control:** Users should have the ability to mention specific files and provide those directly to the model with an option to reference external sources like Slack threads or Notion documents to enrich the context further.

![Diagram showing how Cody's context fetching currently works. The process begins with conversation history and a user query. These inputs are processed through a system that includes indexed search or embeddings, and @ mentions. The combined context from these sources is then used to generate Cody's response. The diagram is depicted in a simple, hand-drawn style on a dark background.](https://storage.googleapis.com/sourcegraph-assets/blog/anatomy/9_context.png)

For code search, we use two techniques for surfacing relevant snippets:

1. **Keyword search:** We first perform a 'query understanding' step, which interprets the user's query and crafts a set of code searches to perform. This step pulls out important entities like file paths and symbols, as well as key terms and their variants. We use both traditional search techniques, and a lightweight LLM to process queries.

In particular, with [the June release](https://sourcegraph.com/blog/release/june-2024), we made several improvements: Enterprise context now rewrites queries, enabling us to handle longer and foreign-language questions. We also detect filenames and symbols in queries, addressing a class of "easy-looking" questions users expect us to get right.
    
![Diagram showing how indexed search works for Cody. The process starts with a user query, which is passed to an AI. The AI determines the keywords to search for, depicted by the phrase 'Given this user query, what keywords should be searched for?'. The AI responds with the keywords A, B, and C. These keywords are then used to generate search rankings. Based on the token limit, the most relevant results are sent back to Cody. The diagram is described as 'automated searching, then copy-pasting' and is illustrated in a simple, hand-drawn style on a dark background.](https://storage.googleapis.com/sourcegraph-assets/blog/anatomy/10_indexed.png)
    
2. **Embeddings:** Embeddings refer to the internal vector of numbers that LLMs use to represent text. When we set up embeddings, we first convert code snippets from various files into embeddings in an indexing step. At query time, we convert the user query to an embedding vector, too. Using these embeddings, we perform vector search to find the most relevant code snippets for the user query.
    1. To convert code snippets into embeddings, we use either OpenAI’s text-embedding-ada-002 model or Sourcegraph's own model called st-multi-qa-mpnet-base-dot-v1. The choice between these models is [determined by a feature flag](https://github.com/sourcegraph/cody/blob/ee47055967bdb3e65c8694cab726dd47d50c29ba/vscode/src/local-context/local-embeddings.ts#L31). The embeddings are [stored locally on your machine](https://github.com/sourcegraph/cody/blob/main/vscode/src/local-context/local-embeddings.ts#L55).
    
![Diagram showing how embeddings work. The process starts with a user query, which is converted to an embedding (a vector representation of a piece of text). Code chunks from various files, which have already been converted to embeddings, are then used. A vector search is performed to find the most relevant code snippets, which are sent back to Cody. The diagram notes that vector search is a way to find the most relevant pieces of text given another piece of text (e.g., user query), using embeddings. This approach is highlighted as a clever way to find relevant code snippets based on semantics/meanings instead of exact keyword match.](https://storage.googleapis.com/sourcegraph-assets/blog/anatomy/11_embeddings.png)

Currently, [we default to a mix of both](https://github.com/sourcegraph/cody/blob/0238df0eda7e6e9be03139a56a89e235b76be448/vscode/package.json#L967) with an option to use one or the other.

---

## Context sources outside of your codebase

In addition to automatic context fetching, we've found that providing a way for the user to manually include context is also helpful. We've done this by letting the user ask questions about specific files by @-mentioning them. More recently, we've realized that there is more context the user sometimes wants to include outside of the codebase, such as documentation, web pages, Slack threads, Linear issues, and Notion documents. We've created an open source protocol called [OpenCtx](https://openctx.org/) to make it super easy to bring in context from any source.

[![Tweet by Beyang introducing OpenCtx. The tweet reads: "Cody now has a mechanism for pulling in context from *outside* the codebase! Introducing OpenCtx, a protocol for providing relevant technical context to humans and AI. This builds on Sourcegraph's foundation as the world's best code search and connects our code graph to entities..." The tweet includes an image with the OpenCtx logo and a code snippet from a code editor. The tweet was posted at 10:59 AM on May 20, 2024, with 173 likes and a reply count.](https://storage.googleapis.com/sourcegraph-assets/blog/anatomy/20_tweet.png)](https://x.com/beyang/status/1792616243742244974)

---

## Context fetching for autocomplete

Autocomplete provides code suggestions as you code in your editor. For this feature, we want it to feel as instantaneous as possible because we don’t want to break the flow of the programmer. At the same time, we want to quickly find and identify which code snippets to include as part of the context to provide high-quality suggestions.

![Screenshot showing a code editor with an autocomplete feature active. The code editor is in dark theme, and the autocomplete dropdown is visible, suggesting code completions as the user types. The displayed code snippet is a function for providing inline completion items. The autocomplete feature is suggesting relevant code completions in real-time, illustrating how autocomplete enhances coding efficiency by providing quick and accurate suggestions.](https://storage.googleapis.com/sourcegraph-assets/blog/anatomy/13_autocomplete.png)

For this, we look at a few sources of information: the cursor position, the surrounding code, and [the code graph](https://sourcegraph.notion.site/How-do-we-use-the-code-graph-for-autocomplete-context-11145ad3e07049e8ab1add7ac3012f81) (a code graph is a representation of the relationships and structures within a codebase, mapping entities such as classes and methods to show how they are interconnected). We use the current cursor position within the code graph to determine if the user wants a single-line suggestion or a multi-line suggestion. Once we determine that, we add more context by looking through recent files and open tabs. Within those, we find code snippets related to the code you're currently writing.

![Diagram explaining context fetching for autocomplete. The process starts with the cursor position, surrounding code, and code graph. Heuristics determine whether a single-line or multiline suggestion is needed. Additional context is gathered from recent files, editor tabs, and similar code snippets. These context snippets are ranked and then used to generate autocomplete suggestions. An image of a code editor with a cursor icon highlights the practical application of autocomplete.](https://storage.googleapis.com/sourcegraph-assets/blog/anatomy/14_autocomplete2.png)

For autocomplete, we don't currently use embeddings. Instead, we consider all relevant chunks from the current file, surrounding file, and recently edited files. We compare each of these chunks to the current code being written using something called the [Jaccard similarity coefficient](https://en.wikipedia.org/wiki/Jaccard_index). This provides a very fast retrieval mechanism over this set of files, which is crucial for fitting into the latency budget that autocomplete requires. If you’re curious about this, you can check [this document](https://www.notion.so/How-we-find-similar-code-snippets-for-autocomplete-9eaf5ab9179a4e799952a7f12c94dd6d?pvs=21) for more information about it, and you can even dig into the source code because much of Cody is open source.

![Diagram explaining how similar code snippets are found. The process starts with the prefix (the code before the cursor). Step 1 is to identify relevant files from open tabs, recently edited files, and files in the same language. Step 2a involves using a sliding window approach to try different snippets, checking if each window is similar to the prefix. The comparison is done across multiple files. Step 2b uses Jaccard similarity to find similar snippets by first breaking the code down into a set of words (e.g., def, functionName, symbol, text1) and then counting how many words are common between two sets. The similarity is visualized with Venn diagrams, showing common words indicating similarity. An image of a cursor icon over code is included to illustrate the concept.](https://storage.googleapis.com/sourcegraph-assets/blog/anatomy/15_similar.png)

Once we create rankings of different code snippets from various sources this way, we combine them using what’s called Reciprocal Rank Fusion. For more details on this, you can [read this document](https://www.notion.so/How-we-combine-multiple-snippet-lists-d567d4b0a4c54197bc5df6e178749860?pvs=21).

Context fetching for autocomplete relies mostly on fast classical and compiler-based techniques, rather than LLMs, because we need something that performs very quickly and can be invoked at high volume. As long as the quality of the selected snippets is good enough, the LLM model can use that information to produce high-quality suggestions.

---

## Context fetching for test generation

This feature allows you to select a file and automatically generate tests for it. The requirements for this feature are vastly different from those for chat or autocomplete. For this, we want to be able to detect if there is already a test file for the chosen file. If it doesn’t exist, we want to generate that automatically. Whether you end up generating a new file or finding an existing test file for the chosen file, we want to be able to add relevant files for context.

![Screenshot showing two side-by-side code editor windows in Visual Studio Code, illustrating the process of test generation. The left window contains the TypeScript file 'AgentTextDocument.ts' where the 'AgentTextDocument' class is implemented. The right window shows the test file 'AgentTextDocument.test.ts', which includes multiple test cases for the 'AgentTextDocument' class. The test cases cover various scenarios such as empty documents, documents with only whitespace, documents with special characters, and documents with Unicode characters. The editor displays a dark theme, and a notification at the top right indicates that Cody is actively generating test cases.](https://storage.googleapis.com/sourcegraph-assets/blog/anatomy/16_test.png)

To achieve this, after creating or finding the test file, we find other test files to understand how tests are written in the given project. This significantly reduces AI hallucinations and ensures we use the appropriate methods and conventions. Without this context, test generation wouldn’t work as well because it might use outdated methods or methods not used in the given project.

![Diagram explaining how context fetching works for unit test generation. The process starts with a source file, such as 'src/components/Button.ts', and a user request to generate tests. The system checks if a test file already exists by looking for files like 'Button.test.ts', 'Button.spec.ts', 'test_Button.ts', and 'Button_test.ts' within the 'src/components' directory and the entire workspace. If a test file exists or a new one is created (e.g., 'Button.test.ts'), relevant files are added for context. These files include 'src/components/Button.ts', 'src/components/Button.test.ts', 'src/components/SideMenu.test.ts', and 'src/components/Modal.test.ts'. The diagram illustrates these steps in a simple, hand-drawn style.](https://storage.googleapis.com/sourcegraph-assets/blog/anatomy/17_test_context.png)

---

## Context fetching for editing code

This is a feature that lets you select a block of code and edit it using natural language instructions.

![Screenshot showing a code editor with a TypeScript file 'CommandsController.ts' open. The code is highlighted, indicating that Cody is actively making in-line edits. The function 'execute' is visible, with comments explaining its purpose: executing a Cody command from user input and command arguments, handling prompt building, and context fetching for commands. The editor displays a dark theme, and Cody is working in the background as indicated by a status notification.](https://storage.googleapis.com/sourcegraph-assets/blog/anatomy/18_edits.png)

For this, we automatically retrieve:

- Surrounding code, both before and after the cursor
- Diagnostic information like warnings and errors
- User-specified context from @-mentions

By including diagnostic information, we're able to provide more appropriate code edits to the selected range of code. With the code editing feature, we currently put greater emphasis on the users prompt and rely on the above context sources to generate high quality code output. In the future, we plan to incorporate code graph context here as well.

---

## A note on evals

Over time, we've developed many ways to evaluate different context-fetching methods as well as the underlying LLM models.

For example, we have:
- a set of ~90 queries we run against open source repos to test the efficacy of our chat system
- an internal leaderboard that automatically evaluates large language models' effectiveness at the features I mentioned above
- lots and lots of tests that hit our default models and assert various things like non-hallucination, LLMs staying in character, etc.

We've found that developing these testing frameworks is a crucial part of making sure we can keep making progress in our product quality.

---

## Further room for improvement

Even though creating and polishing a context fetching mechanism for each of these features has taken a lot of work, we must admit that there’s still a lot of room for improvement.

Some of the areas we’re still actively working are:

- Underlying LLM models, comparing different models and [fine-tuning](https://sourcegraph.com/blog/enhancing-code-completion-for-rust-in-cody) some of them
- A query rewriting strategy where we have AI rewrite user queries to fit our context-fetching system better
- A smarter way to determine what types of context need to be fetched for each query

Our long-term goal is to create an AI coding assistant that finds the right context for you in a smart way, not just from your codebase, but from any tool or reference source that a human software engineer would use in order to get the job done.

## Try Cody

Enjoyed learning about how [Cody](https://sourcegraph.com/cody) works? Give it a try and [let us know](https://x.com/sourcegraph) what you think!
