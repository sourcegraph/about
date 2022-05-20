---
title: 'Building GraphQL-native Microservices'
authors:
  - name: '@ryanchenkie'
publishDate: 2017-10-25T00:00-07:00
tags: [
  "graphql"
]
slug: building-graphql-native-microservices
heroImage: https://images.ctfassets.net/le3mxztn6yoo/24qcvAlDhGUCYCsEYA4ooE/6ee1d9d9ca0feccb226777907f80bd20/Screen_Shot_2017-10-25_at_12.30.05_PM.png
published: true
---


## Who is Johannes
* Based in Berlin and San Francisco
* Background in Node, Rust, Swift, Go
* Built a VR company in the past

## GraphQL Open Source Tooling

Graphcool has a number of open source projects, including arguably the smallest GraphQL client out there, a CLI tool, and a GraphQL Playground which is a more feature-complete explorer for GraphQL.

![johannes-1](//images.contentful.com/le3mxztn6yoo/Tcscq3FBoOIiIG6gceosq/0d29545868e2f2b323f228c04cb557e2/johannes-1.png)

## The Power of GraphQL

Johannes found that Firebase, Parse, and other BaaS offerings were too limited. That's when he set out to offer a hosted backend for GraphQL. Part of the mission was to help people learn about the various libraries that are part of the GraphQL ecosystem, including Relay and Apollo.

The Graphcool team has more than 50k services handling more than 1,000 requests per second. The recent growth has been staggering.

 ![johannes-2](//images.contentful.com/le3mxztn6yoo/5H6tlkV13aeGiO4aO6Qgso/22a755815f37d707136125c3e5474bb3/johannes-2.png)

## Insights about GraphQL Servers

GraphQL is typically known as an API gateway technology and this has made it incredibly popular. This has shifted the community's thinking that they should approach server implementations on a GraphQL-first basis.

Things become even more powerful when you can take multiple GraphQL schemas and stitch them together. This kind of "schema stitching" unlocks a lot of powerful possibilities and is a very exciting area.

## GraphQL Servers from Scratch

Creating your own GraphQL server is done by creating schemas and resolvers. Pretty much every language and technology has an offering to make it possible to create GraphQL servers.

Although you can build a server in any technology, there are a lot of details that need to be implemented that are outside the scope and concern of the GraphQL spec. This includes items like filtering, pagination, authentication and authorization.

![johannes-3](//images.contentful.com/le3mxztn6yoo/3DS84KZshawUSg68K2Ikw/4592a9901a7c9b62f93bd3743020cfb9/johannes-3.png)

## Why Start Graphcool?

Graphcool started as a means to have better building blocks for creating GraphQL servers.

While it is easy to get started with Graphcool with a nice user interface, the team has received a lot of feedback from users that they would like to have a way to interact with it more programmatically. Users were also concerned with potential vendor lock-in.

As of today, Graphcool has been open sourced as a framework to meet these needs.

## Graphcool Framework Details

The Graphcool framework comes with everything you need to create GraphQL servers, including tools for handling authentication and authorization, pagination, filtering, and more.

The framework currently uses MySQL for storage with support for PostgreSQL on the way. The goal is to be totally technology-agnostic.

The Graphcool Framework architecture is simple at its core: you have a CRUD API with a database which you call into from your client. In addition, it comes with an event gateway so that you can use functions on AWS Lambda.

The architecture can be deployed on your own cloud or on-premise with Docker or Kubernetes.

![johannes-4](//images.contentful.com/le3mxztn6yoo/6iNXj0D4IMEwSAcw4sCwk2/221b9fa7e9be491e08551e4e541dac89/johannes-4.png)
