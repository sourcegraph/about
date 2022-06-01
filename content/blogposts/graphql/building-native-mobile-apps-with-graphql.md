---
title: 'Building Native Mobile Apps with GraphQL'
authors:
  - name: '@attfarhan'
publishDate: 2017-10-26T00:00-07:00
tags: [
  "graphql"
]
slug: building-native-mobile-apps-with-graphql
heroImage: https://images.ctfassets.net/le3mxztn6yoo/sKqLEvbRNQwKWKUu4cuMy/f3cb4423436f5759da78e970d35ddcc1/Walraven-2.JPG
published: true
---


Martijn Walraven is an open source developer on the Apollo team.

The first ever app that used GraphQL is the Facebook mobile app, which has used GraphQL in production since 2012.  It is in the context of this mobile app that GrpahQL was developed and created.  The team at Facebook came up with GraphQL as a result of writing an API for mobile apps. So, it's no coincidence that GraphQL is a great match for mobile apps.

Today Martijn will tell us why mobile devs should be excited for GraphQL.

![Walraven-1](//images.contentful.com/le3mxztn6yoo/5jPwQ4jG36ww0Qc0ci4Y6q/fe44964175c36213871f5012729d8b0a/Walraven-1.png)

### What would an ideal API for mobile apps look like?

Martijn says that an ideal API for mobile apps is described by the following quote:

> “Let clients specify their own data needs against the capabilities exposed by the server”

This is the way to explain to a mobile dev why using GraphQL is good idea.

The first and most important benefit of GraphQL, which is especially important for mobile devs, is great performance. Using GraphQL means avoiding overfetching, sending requests data you don't actually need in your UI, and most importantly, avoiding extra round trips. This is especially important for mobile because mobile networks have high latency.  If you have to send one request to get some of your data and then send following requests to fetch additional data, it gets pretty slow.

It's not just about performance, though. GraphQL provides some additional benefits for mobile development:

### 1. Empowers and unblocks app developers

Mobile teams are usually completely separate from backend teams: they use different languages and have a different culture.  As a result, there's often a bit of conflict between mobile and backend developers.

From a mobile dev perspective, they want data for a particular flow as efficiently as possible, overfetching or making round trips. On the other hand, backend developers don't want to add version specific or custom endpoints for mobile.

GraphQL reduces this conflict because it allows backend devs to expose API capabilities without specific endpoints, while app developers can focus on creating a great UI and use GraphQL to conveniently define data requirements as they need.

### 2. Continuous evolution of a schema instead of a having to support multiple versions of your API

Mobile apps stay "in the wild" for a long time as they're rarely updated or upgraded for many reasons.

So, developers often have to deal with versions that are years out of date.  A RESTful API means either keeping up and supporting those different versions or dropping support for these older clients.

Using GraphQL, you can update the schemas and old apps will still work. The Facebook mobile app from 2012 still works against same endpoint it used 5 years ago.

## Adopting GraphQL doesn't require a rewrite of your mobile app

From the client perspective, a GraphQL request is just a simple HTTP request.  You can use any HTTP client or client library to make a request, and it simply treats the GraphQL API as an endpoint.  The difference is that it's defined on a client instead of server. The response can be treated just as a response from a REST API.

Martijn contributes to Apollo iOS and Android, which are being developed so that the advanced capabilities of iOS and android libraries can be used with GraphQL.

### 4. Static type safety from server to your UI.

GraphQL has great type system.  Often times, you you get JSON responses.  Dealing with JSON is a real pain from Swift or and other mobile languages. In GraphQL, the schema acts as a strongly typed and self-documenting contract between client and server.

Martijn shows us a demo in Xcode:
He shows us an example where every time there's a change made in a query, there's a compile time error.  This ensures that all data that's needed in the UI is actually there.  This works both ways.  If you try to fetch data that isn't part of the schema, you get a nice inline validation error.

For devs that use Apollo client, or Relay, you know about Normalized caching.
Normalized caching is a big benefit because it:
* breaks results up into individual objects.
* automatically keeps query results consistent if the cache is kept persistent
* loads new queries from the local cache if the data is already there

It's very suited for apps that are moving from the MVC architecture to one way data flow architectures.

There are a ton of contributors and users of Apollo iOS and Apollo Android.  Martijn encourages people to use and contribute to these clients.
