---
title: 'Full-Stack Subscriptions'
authors:
  - name: '@felixfbecker'
publishDate: 2017-10-25T14:25-07:00
tags: [
  "graphql"
]
slug: full-stack-subscriptions
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
---


Robert Zhu ([@rbzhu](https://twitter.com/rbzhu) is a software engineer at Facebook, working on GraphQL. Before, Robert worked at companies like Microsoft and even founded his own company. This talk explains the What, Why and How of Subscriptions, how to build your own GraphQL subscriptions server and the differences to live queries.

# A song of data and mutations

The talk starts with a demo of GraphiQL exploring a Game of Thrones API:

![zhu-1](//images.contentful.com/le3mxztn6yoo/1zrqDjxmJOOQwsmWeW4GYI/f54aef534b1f2d134978ba26ca6fb6d1/zhu-1.png)

Executing this query returns a list of houses, their name, amount of banner men and signature words.

# What happened?

- we sent a request containing a document, got a response (JSON)
- GraphQL Language Specification (domain agnostic)
- Schema (domain specific)
- Express (Node.js HTTP server)
- GraphQL Server (GraphQL-js)
- GraphiQL

The request/response lifecycle of this operation is straight forward:

- Request: Client sends server a GraphQL Document
- Execute: Server parses, validates, and executes the document
- Response: Server sends response back to client

# What about writes?

Writes in GraphQL are called "mutations" and work with the same request/response lifecycle. They also always return a value.

# What about real-time data?

Given that we can mutate values, how can we build an application that displays real-time changes?
Enter GraphQL subscriptions, a third type of operation like `query` and `mutation`:

> If the operation is a subscription, the result is an event stream called the "Response Stream" where each event in the event stream is the result of executing the operation for each new event on an
underlying "Source Stream".
>
> Executing a subscription creates a persistent function on the server that maps an
underlying Source Stream to a returned Response Stream.

![zhu-2](//images.contentful.com/le3mxztn6yoo/4RYHLjDH048YqK8EKkYoyu/69bc4fcfd5d7f0c3fec76aba8f095ce5/zhu-2.gif)
Imagine we had a microservice architecture like this:

![zhu-3](//images.contentful.com/le3mxztn6yoo/5Y5fLKDrr204EWwkgUwWqa/766f0ea487107b3bb65305f005f2e4de/zhu-3.gif)


The different microservices are wired together through an event bus.

Now lets imagine we get a new requirement: We want to detect when a suspicious activity occurs.
So we add a new microservice: the ***Alarm*** microservice.
The Alarm microservice acts as a subscriber to the other microservices.
For example, whenever a login occurs, it can inspect that login event - triggering an alarm e.g. when a login fails repeatedly from an unusual location.

![zhu-4](//images.contentful.com/le3mxztn6yoo/2dEbbRIEZSmQWkaykkq6QQ/8a48a273cd3374599354d393e592d58f/zhu-4.gif)


On the GraphQL level, the GraphQL query causes the subscription service to derive the set of domain-specific events from the GraphQL document and subscribe to the event bus for these events. This forms a "source stream". Whenever an event arrives from this "source stream", the subscription service combines it with the document and executes the resulting query. The result is sent back to the client along the "response stream".

![zhu-5](//images.contentful.com/le3mxztn6yoo/5XIkSof4pamcowaioMwo84/0e68f7efae872bad244aaa1172edf4ca/zhu-5.gif)

The lifecycle after the subscription service stays very similar to the usual request/response lifecycle.

# Managing the subscription state

Subscriptions introduce a certain complexity to the stack:

- Who subscribed?
- What document/variables did they send?
- How do we send messages back to the client?
- What events does this set of document\/variables map to?
- Who is listening to what events?

The solution to this differ depending on the scale:

<TableWrapper>
|                           | Single Process                                    | Distributed               |
|---------------------------|---------------------------------------------------|---------------------------|
| Streaming Transport       | WebSockets, SSE, HTTP long polling, RSocket, MQTT | (same)                    |
| Connection Handling       | In process/Middleware                             | Gateway/Proxy             |
| Source Stream             | EventEmitter, .NET Events                         | Redis, Kafka, SQS, Pusher |
| Subscription Session Data | In-memory collection, file                        | Database, Cache           |
</TableWrapper>

# Subscriptions at Facebook

If you are using Facebook, you are using GraphQL subscriptions.
These Facebook features are powered by GraphQL Subscriptions:

- Live Likes
- Live Comments
- Typing Indicators
- Live Video Streaming Reactions
- Live Video Comments
- ...and many more

# Current State

Subscriptions are part of the official GraphQL specification. There is a [reference implementation in JavaScript](https://github.com/apollographql/graphql-subscriptions), Relay Modern support and a lot of community support from Apollo, Graph.cool, Scaphold and more.

# What about live queries?

The difference between Subscriptions and live queries is the difference between observing state and observing events.
An example for observing state is observing updates to a value that was 10 before and knowing it is now 11.
An example for observing an event is observing the event of _increments_ to the value, and knowing that the value that was 10 before was just incremented by 1.

## Benefits

<TableWrapper>
| Subscriptions             | Live Queries               |
|---------------------------|----------------------------|
| Know why data changed     | Convert any existing query |
| Fine control over publish | Simple fallback (polling)  |
|                           | No server-side changes     |
</TableWrapper>

## Costs

<TableWrapper>
| Subscriptions          | Live Queries          |
|------------------------|-----------------------|
| Streaming support      | Streaming support     |
| Reactive API/Language  | Reactive API/Language |
| Streaming/event system | Reactive data layer   |
| Domain-specific events |                       |
</TableWrapper>

# Resources

- [GraphQL](https://graphql.org)
- [Specification](https://facebook.github.io/graphql)
- [GitHub Portal](https://github.com/graphql)
- [Star Wars Demo API](https://graphql.org/swapi-graphql)
- [Apollo](https://apollodata.com)
- [Graph.cool (GraphQL backend)](https://graph.cool)
- [Scaphold (GraphQL backend](https://scaphold.io)
- [GQLS Tutorial](https://dev-blog.apollodata.com/tutorial-graphql-subscriptions-server-side-e51c32dc2951)
- [ReactConf GQLS Talk](https://www.youtube.com/watch?v=AYbVMNtO-ro)
