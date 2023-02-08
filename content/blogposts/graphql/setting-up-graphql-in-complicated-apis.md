---
title: 'Setting up GraphQL in complicated APIs'
authors:
  - name: '@beyang'
publishDate: 2017-10-25T00:00-07:00
tags: [
  "graphql"
]
slug: setting-up-graphql-in-complicated-apis
heroImage: https://images.ctfassets.net/le3mxztn6yoo/4Bs8BBBEdyCUaUQ0siGuAc/9e17b3c61c2d36b6ad2c51f67f0b0521/graphql2017laptop_Selection_003.png
published: true
---


Brian Douglas ([@bdougieYO](https://twitter.com/bdougieyo)) is a software engineer at Netlify.

Netlify uses the [JAMstack](https://jamstack.org/), a modern web architecture for high-performance, secure, scalable, developer-friendly apps. It requires client-side JavaScript for interactivity, reusable APIs, and statically built markup templates.

Today, Brian tells the story of how he sold the adoption of GraphQL to the rest of the engineering team at Netlify.

He didn't own the API code, but he wanted GraphQL at Netlify. There was some resistance from the owner of the API (a Go service) in adopting GraphQL. Brian needed an easy way to add GraphQL to the Netlify API without ruffling too many feathers.

Netlify is Rails + Go + Mongo, so it wasn't simple to add something to the API.

He initially tried GitHub's graphql-ruby Ruby gem. But that integrates with SQL, not Mongo, so that didn't work.

Then he tried node: express-graphql, apollo server, graphql-anywhere, graphql-code-generator. These succeeded in building a schema from Mongo, but the schema didn't work.

So then he tried a wrapper to wrap the existing REST API in a GraphQL interface. There are instructions for doing this in the GraphQL docs. And this worked!

By wrapping the API layer in a GraphQL interface, he could then sell GraphQL better to the team. As of September, he got the greenlight for a public GraphQL API.

If you have an existing legacy API and internal opposition to adopting GraphQL, try wrapping your existing API in a GraphQL layer.
