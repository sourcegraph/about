---
title: "TODO"
authors:
  - name: Eric Fritz
    url: https://eric-fritz.com
  - name: Cesar Jimenez
publishDate: 2023-06-30T10:00-07:00
description: "TODO"
tags: [blog]
slug: 'todo'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/all-you-need-is-cody/all-you-need-is-cody.png # TODO
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/all-you-need-is-cody/all-you-need-is-cody.png # TODO
---

TODO

## Content

TODO

## Examples (rename to ~use cases)

TODO

### Risperidone

**As it turns out, the greatest LLM anti-psychotic is giving it enough context in the first place.**

Cody, without tapping into the power of precise code intelligence, does a good job of understanding the semantic meaning of code - at least when it's visible to the underlying LLM. In the following example, we ask for a list of fields sent to an invocation of a function. Cody understands the the question entirely and gives a completely valid response, even correctly indicating that parameter we're discussing has the type `types.CodyCompletionRequestParameters`.

<a href="https://storage.googleapis.com/sourcegraph-assets/blog/scip-powered-cody/req-no-scip2.png" target="_blank">
    <Figure
        src="https://storage.googleapis.com/sourcegraph-assets/blog/scip-powered-cody/req-no-scip2.png"
        alt="'Stock Cody' hallucinating the fields of a struct."
        caption="'Stock Cody' hallucinating the fields of a struct." />
</a>

Unfortunately, the fields listed in Cody's response aren't correct. These types of hallucinations, when trusted because they appear correct at first glance, can be particularly frustrating after aiding in building an imprecise mental model of the code that later needs to be torn down and rebuilt.

The `CodyCompletionRequsetParameters` struct, in reality, contain the fields `Prompt`, `Messages`, `MaxTokensToSample`, `Temperature`, `StopSequences`, `TopK`, `TopP`, `Model` (embedded under a named struct), and `Fast`.

The fields `Repo`, `File`, `Line`, `Column`, and `Prefix` given by Cody have zero overlap with this type, although we do have other request and response structs with similar sets of fields. The `Model` field is only present because it could be syntactically derived (see line 54 in the above image). The assignment to `requestParams.Model` implies its existence on the type, hence its inclusion in the response. The `TODO` comment attached to the assignment gives a local indication of its purpose, hence its rephrasing in the response.

Why the discrepency? Well, 'Stock Cody' is powered by searching segments of your repository that has been embedded into a vector space for code _similar_ to the content of your question. And this works *really well* for questions pertaining to the 10,000ft view. _"How do we handle auth in service X?"_ is a question that is likely well-served by embeddings search. Code related to the implementation and handling of auth will likely make it into the LLM context window, and the high-nature level of the question enables fairly accurate responses to be generated from partial context.

In contrast, our question is asking for a _highly precise_ answer related to a specific piece of code. Searching the repository's embeddings for _similar_ code is not the context needed by the LLM to make the correct inferrences. For such implementation-specific questions, we need to be able to explore a different relationship within the code graph.

For the same question, we can generate a very good response from Cody by supplying additional code we find traversing the _definition_ edges of the semantically-indexed portion of the code graph. To start the search, we extract symbol names from the code that is currently in the view of the user, such as the current workspace, the user's text selection, open files, etc. These symbol names are translatted into a location in our SCIP-backed code graph. Then, particular edges are followed out to explore the graph. As we traverse the graph in this manner, we recall code that is semantically related to the code in question.

We've already seen Cody infer infer the type of the variable in question. Including the definition (hence the concrete field names) in the LLM context window provides enough information to effectively prevent the spew of probable-but-fallacious field names we got when it had no concrete examples in its working memory.

<a href="https://storage.googleapis.com/sourcegraph-assets/blog/scip-powered-cody/req-scip2.png" target="_blank">
    <Figure
        src="https://storage.googleapis.com/sourcegraph-assets/blog/scip-powered-cody/req-scip2.png"
        alt="SCIP-powered Cody giving a precise answer given appropriate context."
        caption="SCIP-powered Cody giving a precise answer given appropriate context." />
</a>

Note that we've stopped additional fields from being emitted, but we didn't happen to expand all of the fields that are present. Currently we're only performing single-edge traversals from the source, but plan to extend the search in the future. Including a second-order relationship included in this example may have prompted Cody to expand the fields present in the embedded struct `CompletionRequestParameters`.

### In the land of infinite possibilities...

**Generative AI gonna generate.**

Too many answers are valid when too little context is given to restrict the solution space. This is a special form of garbage-in, garbage-out. In the following example, we ask Cody to describe the output of a particular function when executed. We choose this particular example in which the input question has little to no similarity to the _internal implementation_ of the function to ensure embeddings search alone would not return all of the relevant context.

<a href="https://storage.googleapis.com/sourcegraph-assets/blog/scip-powered-cody/cursor-no-scip.png" target="_blank">
    <Figure
        src="https://storage.googleapis.com/sourcegraph-assets/blog/scip-powered-cody/cursor-no-scip.png"
        alt="'Stock Cody' hallucinating the fields of a struct (again)."
        caption="'Stock Cody' hallucinating the fields of a struct (again)." />
</a>

Luckily, embeddings search alone often includes a lot of the critical context to make magical-seeming inferences. In this example, the _description_ of the cursor is correct after reading the related GraphQL schema file, as well as some other files in the same package which _by happenstance_ also make use the cursor object. This is why the `Phase` field is known to have the values `"local"` and `"remote"`. All of this is spot-on, although oddly the value `"done"` is not explicitly listed as a possible phase even though it visible in the source of the screenshot above.

The remainder of the response slips into a hallucination. While `RepositoryID` and `Commit` do not actually exist in the cursor, similar fields do exist on a sibling `RequestArgs` struct that's passed around many of the same code paths. This is likely a source of the confusion in the response. The three remaining fields `Definitions`, `References`, and `Prototypes` do not exist on the cursor, but they do make remarkable sense given the context of the code in which this cursor is being used. These fields could absolutely be a valid alternate design for an API in the same domain.

Generative AI is simply a machine that finishes a pattern. If sufficient examples are not available to narrow which pattern to follow, it seems that *anything* can come shooting out. An AI coding assistant that always response with the know-it-all answer of _"you could've designed it **this other way**"_ is not only unhelpful, but enraging to hear. Especially if you've previously fallen for AI refactor suggestions and _the other way_ is how it was originally written.

We'll sufficiently narrow down the pattern-space by supplying additional (and highly relevant) code, just as we did above. With enough context, answers will adapt themselves to the environment (as we'll see below) rather than making leaping inferrences about the environment to support its output (as we saw above).

<a href="https://storage.googleapis.com/sourcegraph-assets/blog/scip-powered-cody/cursor-scip.png" target="_blank">
    <Figure
        src="https://storage.googleapis.com/sourcegraph-assets/blog/scip-powered-cody/cursor-scip.png"
        alt="SCIP-powered Cody inferring the correct struct tags."
        caption="SCIP-powered Cody inferring the correct struct tags." />
</a>

The skeptical reader may have noticed a heavy similarity between the first two examples - both questions are basically using an AI layer to emulate a fairly simple jump to definition action. Asking these questions in natural language probably takes more time than hovering over the symbol to peek at its definition. These examples are _highly illustrative_ but also very myopic with respect to what's possible with this technique.

Continue reading to see that precise code intelligence isn't a one-trick-pony source of context.

### Deeplying understanding code

Cody should have the capability to detect bugs and suggest improvements given enough context to sufficiently understand the code its analyzing. Today, Cody will try its best to suggest improvements, but remains confidently ignorant of any context it wasn't explicitly fed.

In the following example, we admit to Cody that our implementation to roll a pair of dice _seems incorrect_, but do not give it specific details of the output or our expectations in an attempt to exercise its bug-finding ability.

<a href="https://storage.googleapis.com/sourcegraph-assets/blog/scip-powered-cody/dice-no-scip.png" target="_blank">
    <Figure
        src="https://storage.googleapis.com/sourcegraph-assets/blog/scip-powered-cody/dice-no-scip.png"
        alt="'Stock Cody' making completely resonable (yet unfortuantely wrong) assumptions about implementations."
        caption="'Stock Cody' making completely resonable (yet unfortuantely wrong) assumptions about implementations." />
</a>

Cody makes an assumption that `random.RandomInt(6)` would return a value in the range of `[0, 6)`, which is reasonable given the documented behavior of Go's builtin [`rand#Intn`](https://pkg.go.dev/math/rand#Intn), as well as many other language standard libraries that follow the same convention. Following this assumption, Cody proposes an alternative implementation that would actually address the _seemingly incorrect_ output.

What Cody (without SCIP) wasn't aware of was that our custom `random` package pulled an [xkcd#221](https://xkcd.com/221/) and simply returned the same value unconditionally. This makes Cody's assumption (and therefore all downstream inferences) wrong.

When we include the definition of the `RandomInt` function, Cody immediately focuses on the obvious bug, and proposes an alternative solution at the correct level of abstraction.

<a href="https://storage.googleapis.com/sourcegraph-assets/blog/scip-powered-cody/dice-scip.png" target="_blank">
    <Figure
        src="https://storage.googleapis.com/sourcegraph-assets/blog/scip-powered-cody/dice-scip.png"
        alt="SCIP-powered Cody checking behind every door due to extreme paranoia."
        caption="SCIP-powered Cody checking behind every door due to extreme paranoia." />
</a>

## What we're exploring

TODO

I, for one, would prefer our future AI overlords to be as intelligent as possible.
