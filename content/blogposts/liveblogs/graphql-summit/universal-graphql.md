---
title: 'Universal GraphQL'
authors:
  - name: James Baxley
publishDate: 2017-10-24T05:53-07:00
tags: [
  "graphql"
]
slug: universal-graphql
heroImage: https://images.ctfassets.net/le3mxztn6yoo/21r1Z7dBVW4Omgq4S0skmq/66acb4a4cf6bcc44c55d305261f9e002/Baxley-1.png
published: true
---


# About the speaker

[James Baxley](https://twitter.com/jbaxleyiii) is an Open Source Developer at Apollo.  He is currently the lead of the Apollo Client Project making GraphQL easy to use in all applications. He's also a part-time beekeeper.

## Apollo Client 2.0: Discovering Universal GraphQL in Practice

Apollo 2.0 is a "universal GraphQL" client. What is "universal GraphQL"? By the end of this talk, you'll understand what that means. There are four main features of the new Apollo client:
* Flexible network using Apollo Link (completely customizable network stack)
* Modular cache with Apollo cache (so you can target your use case)
* Faster runtime (5x faster)
* Smaller package (half the size of Apollo 1.0)





# Why GraphQL?

It comes down to describing your data.

## Describe your data

![Baxley-2](//images.contentful.com/le3mxztn6yoo/3k9NFqIK88o48OCKeK0Uwm/9825eb1ee1ab00510ef20b3f2e01e5e1/Baxley-2.png)

GraphQL is the language of your data. It's an adjustment from the REST mentality of "I want this general set of data" to describing exactly what data you want and having the server fulfill your request.

Using a descriptive language as the go-between for your client and server keeps things uniform and simple to reason about. No unnecessary fields, no unnecessary surplus.

## Static descriptions, dynamic execution

Using GraphQL built-in features such as arguments, fragments, and directives, you can create expressive and safe ways to query and update your data.

# A better picture of our data: where we are today

## JavaScript Client: Apollo Client
Apollo Client is the most popular GraphQL client for the web and React Native applications. It's designed for ease of use, but is powerful enough for production applications.

##  Native GraphQL: Apollo iOS/Android
With support for advanced type-generation based on schema knowledge, Apollo iOS and Apollo Android bring GraphQL to your native application with ease.

## Schema-based application: GraphQL Tools
GraphQL Tools allows you to create a GraphQL Server through describing the shape of your schema. It makes it easy to create a production-ready server in minutes.








# Exploring New Horizons

This is all well and good, but we realized, we began to think about what else could we do with GraphQL?


## GraphQL First Design

* Design for real people: instead of loading cat pictures or ipsum, use data from actual users as you design and build new features.
* Production-ready design components: ship your designs with real code using React and Apollo
* Mocking data. I.e., "fake it 'til you make it." Product cycles can be fast and hard for client and server teams to remain in sync. Using GraphQL Tools' schema mocking, you can mock the parts of your data as needed.






# GraphQL's Tomorrow

Our team universally uses GraphQL at this point. But what else can we do? What does tomorrow look like?

## Different data sources: increasing the reach of GraphQL

What if you could use different data sources? The spec is independent of what data sources you use. What if you could stream some results? What if you could manage all your application state (in lieu of something like Redux)? What if you could use existing REST endpoints (things you haven't gotten around to migrating to GraphQL)?

 ![Baxley-3](//images.contentful.com/le3mxztn6yoo/5qpeF3OTlKaiQeAM4Q0uCI/44e609a4148d939f10b6933b84ee62da/Baxley-3.png)

* **Streaming results**

You can stream your UI to browsers as well as your data to components as efficiently as possible via `defer` and `react` in Apollo.

* **Client state: access all of your data in one way**

With Apollo Client 2.0, you can store, update, and read your local application state with the same power and simplicity your team has come to love using GraphQL.

* **REST endpoints: start GraphQL with the data you have**

Make it easy to incrementally adopt GraphQL without adding a new backend. Apollo lets you do this with the `@rest` directive.

* **Anywhere data: directive driven, multiple environments**

With Apollo Client 2.0, you can use store, update, and read your local application state with GraphQL, so you don't have learn a new language. You render with React and you manage data as GraphQL with Apollo.

Using directives, we can define from where to resolve our data and how it should be represented across environments.





# Connecting the Dots: Creating the Components of Better Data

But there's still a gap between data and rendering. There's three ways you can connect those dots.

## Apollo Link

James thinks Apollo link is the most exciting part of Apollo 2.0.

### Creating a component-based request chain

Fetching remote data is the cornerstone of nearly every tool that developers use. From the time you run npm install, to monitoring your server logs, data is constantly moving from one place to the other. Apollo Link is a request primitive designed for the GraphQL age.

### Smart components with Apollo Link

Create components that manage the control flow of data request and reuse them everywhere.

## Schema stitching: using GraphQL with GraphQL

Piggybacking in GraphQL's introspection ability, you can create dynamic endpoints that are always up to date. You can mix and match API microservices and third parties to build the request shape your app needs. `

## Apollo Engine: unlock your GraphQL

Apollo Engine is a layer in your stack that sits between your client and your server to make your GraphQL app easier to understand and more performant.

# GraphQL Everywhere: Expanding the Definition of Client

## Reaching into the real world: IOT, P2P, OMG

As the availability of JavaScript runtimes grow, so does the ability to easily use GraphQL to power how you build your products. There's a crossbow that can be controlled via GraphQL. There's a golf ball with GraphQL and a hole-and-one mutation.

Some other possibilities include:
* Alexa skills built with GraphQL
* Creating phone to phone communications solely with GraphQL
* Building a GraphQL driven package manager

Apollo Client 2.0 is "one small step for GraphQL, one giant leap for data". When will it be available?... Now! He "live merges" the Apollo Client 2.0 pull request.
