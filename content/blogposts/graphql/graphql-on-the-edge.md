---
title: 'GraphQL on the Edge'
authors:
  - name: Michael Fix
publishDate: 2017-10-26T00:00-07:00
tags: [
  "graphql"
]
slug: graphql-on-the-edge
heroImage: https://images.ctfassets.net/le3mxztn6yoo/2YBGlmUKd2YI20SKKaQk4U/96abd1cef08936f9fec31818980516a3/graphql.png
published: true
---


**Liveblog: GraphQL on the Edge**

Michael Fix, from Intuit.

tl;dr: Adding a GraphQL layer on top of everything else in your stack (on “the edge”) is a fantastic shield for your sensitive internal stuff. Writing queries that you expect to fail is a fun and easy way to do unit testing for your API and also for your security infra.

*Basic Principles:*

* The world uses your apps in an unpredictable manner

* GraphQL can be the shield around your application, allowing you to access but also protect the data: It affords normalization, sanitization (of inputs as well as outputs), and verification (of correctness on the way in and also out)

*Examples*: A phone number can come in a ton of formats, but you want to operate in the same way. A script tag may or may not be allowable. A `new Date(‘2017-10')` may need to be pre-processed. The type system can do this validation for you, so that your app can always get `+1 412 555 9911`.

Concept: GraphQL Normalized Types (GNT). Inspired by gin and tonics, simple, consistent, reliable, always there for you. The whole idea of the GNTs is to be able to reuse certain types across applications, companies, etc. It is a type library.

Examples: XSS Safe Type, Human Name Type, Email Address -- the world only needs one implementation of these GraphQL types, let alone your app.

Testing: `“Tests should ideally be written against the public APIs.” - Dan Abramov`. GraphQL on the Edge provides this, so testing against it is ideal, and also really super super easy. Run a query! The query can be a good one or a bad one, assert that the query succeeds or fails. No mocks, just literally test it. These tests (assertions on queries) work in every testing context one could want, from compile time to runtime. Testing can even be data-driven, in the sense that you separate the data you want to send from the mutation or query, because payloads can be decoupled from a testing infra so that a single test can test arbitrarily complex or simple systems. Fuzz testing also simple to support.

*Michael Fix is available for questions and comments about this presentation via the information that can be seen on the last slide of the presentation.*
