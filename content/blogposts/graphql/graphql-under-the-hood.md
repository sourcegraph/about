---
title: 'GraphQL Under the Hood'
authors:
  - name: Jason Bahl
publishDate: 2017-10-26T00:00-07:00
tags: [
  "graphql"
]
slug: graphql-under-the-hood
heroImage: https://images.ctfassets.net/le3mxztn6yoo/3KrbaZSH5CiYWGQeOw0awY/39ee5be467c85c233be343be8205dcc2/Screen-Shot-2017-10-26-at-10.21.23-AM.png
published: true
---


### Intro

Eric Baer ([@ebaerbaerbaer](https://twitter.com/ebaerbaerbaer)) JavaScript consultant with [Formidable](https://formidable.com/) is taking us on an exploration of what GraphQL looks like under the hood.

## What is GraphQL?

In order to understand how GraphQL works, we need to first have an understanding of what GraphQL is.

GraphQL has a large, quick moving community, which is great, but because of the size of the ecosystem and how fast it's growing, sometimes it's hard to understand what exactly GraphQL is and what you need (or don't need) to use it.

So, what is GraphQL?

- A Type System
- Formal language for querying data
- Rules for validating a query against the Schema
- Rules for executing a query against the Schema

That's it!

## What you DON'T NEED to use GraphQL
You can use GraphQL without adding anything to your client. You can use `fetch()` or anything else that can make a request to a GraphQL server. You don't _need_ Apollo or Relay. Eric emphasizes that

- GraphQL IS NOT the GraphQL Ecosystem
- GraphQL IS NOT GraphQL Implementations

# GraphQL Under The Hood
A GraphQL request can be made in any way. It could come as a custom header, use protoBuf or even as a cookie!

The community has largely standardized on HTTP POST requests, but it's still up to the system to determine how to send GraphQL requests.

## A (typical) Query Lifecycle

- Receive Request
- Parse Query
- Validate Query
- Execute Query
- Return Result

### Parsing a GraphQL Query

Once the request is made, there's a request lifecycle.

The first thing that happens is Lexical Analysis. Much like a grade-schooler learning to de-construct a sentence and identify nouns, verbs and pronouns, GraphQL's Lexer identifies the pieces of the GraphQL query.

![Screen-Shot-2017-10-26-at-12.18.06-PM](//images.contentful.com/le3mxztn6yoo/sXCczgTkNEKocMCsEse0o/491b706216ac4edd3bb2210204dc5b9d/Screen-Shot-2017-10-26-at-12.18.06-PM.png)

### Validating the Query

Once the query has been parsed, it goes through a validation process to make sure the request is executable against the Schema.

This is a stage of the request that _can_ be skipped.

### Persisted Queries
Persisted Queries are pre-validated query strings stored on the server that can be executed by requesting a specific identifier connected to the intended query. Using persisted queries can reduce the upload time of requests, but can also allow for servers to bypass Lexing, Parsing and Validation and speed up execution as the queries are already known ahead of time.

While this might be right for some systems, Eric points out that this may not be the right option for everyone and may not even be possible in _some_ server implementations.

## Execution
First, GraphQL identifies all the operations. A GraphQL request can contain multiple operations.

![Screen-Shot-2017-10-26-at-12.28.52-PM](//images.contentful.com/le3mxztn6yoo/38kNY0UDGMK8w8YcKaQWyC/d0e655b8d6cb58111daafd5b9676ec97/Screen-Shot-2017-10-26-at-12.28.52-PM.png)

Then it moves on to resolve each operation.

![Screen-Shot-2017-10-26-at-12.29.16-PM](//images.contentful.com/le3mxztn6yoo/4LfCLJci92giqcoCukKkcu/e0ad7d436f5423ee990ee0890320cb6f/Screen-Shot-2017-10-26-at-12.29.16-PM.png)

At this point, the selection set is executed.

A GraphQL server, when preparing a field of a given scalar
type, must uphold the contract the scalar type describes,
either by coercing the value or producing an error.

![Screen-Shot-2017-10-26-at-12.30.40-PM](//images.contentful.com/le3mxztn6yoo/1szgGoNH6E0m8iAC4MImue/448f54c300a826bab7063aecfcf7c4e6/Screen-Shot-2017-10-26-at-12.30.40-PM.png)

If the field in the selection set is a Scalar, GraphQL will resolve the field, otherwise it recurses until it resolves to a Scalar.

![Screen-Shot-2017-10-26-at-12.32.15-PM](//images.contentful.com/le3mxztn6yoo/41OHxTa3NmWGo0cYYWQmwu/9b6efedbb893abe2f43cfd4f18960c78/Screen-Shot-2017-10-26-at-12.32.15-PM.png)

And finally, a field is resolved.

![Screen-Shot-2017-10-26-at-12.33.11-PM](//images.contentful.com/le3mxztn6yoo/1GTMp2Oow4EkQ6wUuAQgqC/e8484a15a56d575243e667d8ef5a37e7/Screen-Shot-2017-10-26-at-12.33.11-PM.png)

# Notes
- There's plenty of opportunity for innovation with how to further optimize GraphQL requests.
- Context is widely used to store things like user identification, but it's not part of the spec

# Resources
- A list of GraphQL code and resources: [https://github.com/chentsulin/awesome-graphql](https://github.com/chentsulin/awesome-graphql)
- The GraphQL Spec: [https://facebook.github.io/graphql](https://facebook.github.io/graphql)
- An excellent interactive tutorial: [https://www.howtographql.com/](https://www.howtographql.com/)
- GraphQL Demo Code: [https://github.com/baer/graphql-demo](https://github.com/baer/graphql-demo)
- GraphQL Demo Code in Launchpad: [https://launchpad.graphql.com/nnnwvmq07](https://launchpad.graphql.com/nnnwvmq07)
