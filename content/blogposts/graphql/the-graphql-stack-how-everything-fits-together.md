---
title: 'The GraphQL Stack: How everything fits together'
authors:
  - name: '@beyang'
publishDate: 2017-10-26T00:00-07:00
tags: [
  "graphql"
]
slug: the-graphql-stack-how-everything-fits-together
heroImage: https://images.ctfassets.net/le3mxztn6yoo/1H9b2gUgdOIwmqUoYUskum/889f8713e476e6ded08560df6126d316/stubailo.jpg
published: true
---


Sashko (@stubailo) has been working on open source developer tools for the last 4 years, and most recently has been leading the open source projects from the Apollo team, after writing the very first versions of Apollo Client. Previously, he has worked on JavaScript build tooling and reactive data visualization.

Apollo is about make building great applications simpler and more staightforward, with GraphQL. They think GraphQL is one of the highest leverage ways to improve app developer experience.

Why GraphQL and why APIs?
- Best language for data requirements
- Universal schema for capabilities
- Huge ecosystem of tools


It's important to separate concerns, not technologies
* We went from separating HTML and JS to writing unified components
* GraphQL is a component-like approach to data.


GraphQL is all about providing the correct split of responsibilities across frontend and backend parts of your app.

Today's apps are complex:
* Multiple frontends for different platforms
* Multiple backends where data lives
* need fo team coordaintion across many different parts and teams

GraphQL and Apollo help coordinate this by living in the middle of all your frontends and backends. GraphQL enables a whole world of tools to live in between all the different moving parts of your app.

Yesterday, they announced Apollo Client 2.0. Even before the release, people in the community jmped on this release and built out integrations into Angular and Vue.js (in addition to the one for REact written by Apollo).

It's now easier to write a GraphQL server in any language (JS, Scala, Elixir, Python, Ruby, Java, Go).

The GraphQL duality:
* client sends detailed data reqs
* Server provides flexible, performant capabilities

The GraphQL Query is a unit of data fetching
1. Send all of the the requirements for a unit of your UI in ONE request
1. Server can analyze and optimize entire query at once
1. Reduce backend fetches by batching and caching per reuqest.

Some of the main questions we hear about Apollo
* How do I cache? #caching
* HOw do I understand what's going on? # transparency
* HOw do I seamlessly combine parts into a whole? #modularity

## Caching

Q: How many people feel like they should be caching their API?
Audience: Everyone raises their hand.

"Very relatable topic"

Their are tradeoffs with GraphQL and caching. Current approaches become harder to use but there are opportunities for new features and caching types.

Cons:
* HTTP caching often doesn't support POST rquestes, long keys
* Greater request diversity
* GraphQL is transport independent

Pros:
* Automatically fine-graine cache control
* Declare it alongside your schema and resolvers


In REST, a common way to do caching is to use a Cache-Control header and set "max-age".

Here's an idea for how to cache in GraphQL: Put your cache in your GraphQL Server. But:
* DataLoader not ideal for acching across requests
* don't want add complexity to graphql server

![adding-caching-idea-1](//images.contentful.com/le3mxztn6yoo/4lEtEh01Mc0wSYcssKOWgi/00dee413d5652a2a74404523faabd0e1/adding-caching-idea-1.JPG)


So caching doesn't belong inside your API server.

Either want to do it above or below. This suggests a new caching layer that supports GraphQL features like POST requests and fine-grained TTLs. This should keep the copmlexity of caching out of the API server.

He presents the idea of a GraphQL Gateway... Introducing Apollo Engine: the first-ever GraphQL-specific Gateway technology. If you used Apollo Optics, this is the next version of that.


![a-new-component-in-graphql-stack](//images.contentful.com/le3mxztn6yoo/4DqVxG9lHOmUYeSUc8KaYy/34ee411cdec61b5c4b57f96b692f5c61/a-new-component-in-graphql-stack.JPG)

The server provides cache-control data in responses. The Gateway reads these cache-control settings and implements the complicated caching logic for dealing with these settings. The Gateway and server are completely decoupled.


![graphql-result-caching](//images.contentful.com/le3mxztn6yoo/5AueU6nHVYU4s2EwYW6Wge/5db2daa549d7745b37e7bb905f038470/graphql-result-caching.JPG)

The gateway can then inform the client-side data store how to expire data. You can reuse the same cache controls on the client (since everything is GraphQL).

How to implement this? The GraphQL spec has a feature called *extensions* that lets you add additional data to a response without breaking clients that don't understand the additional data.

They have an open specification for GraphQL cache control: github.com/apollographql/apollo-cache-control. There's an initial JavaScript implementation of this spec that lets you specify cache-control info on your types, fields, and resolvers.

## Tracing and errors

Tracing and errors is all about getting information from your server. You want detailed information about what happened in a GraphQL query. You can't just track performance on a per endpoint basis.

GraphQL is the first API with fine-grained insights built in. You have to have the schema and query language to show what the performance cost of each part of the data that was fetched.

This makes the data more actionable. Not only can you track performance at the top level, but you can fix it on a fine-grained level. If a particular field is taking too long, you can omit it in your client request.

You can do performance analysis in the gateway, so you can correlate your caching logic with perf bottlenecks.

They have an open specification for GraphQL tracing: github.com/apollographql/apollo-tracing. It's a way to get performance data on a per-resolver level from any GraphQL server.

GraphQL enables development tool integration, because the schema exists up and down the stack. He presents a mockup of a new version of GraphiQL that includes a tracing window.


The GraphQL spec is robust enough to spawn thousands of companion tools for every imaginable platform.


## Schema stitching

Correct division of responsibilities. This time, we're talking about communication between the GraphQL API and the backend services.

It's a good idea to have exactly one GraphQL client and one GraphQL schema. Today, many folks have multiple GraphQL clients hitting multiple schemas (each tied to a different backend service). But he hopes in the future, schema stitching will address this issue.

See an example: launchpad.graphql.com/130rr3r49. Schema stitching combines data from two different schemas to get information about location AND weather.

Many ways of schema stitching from Abhi Aiyer at Workpop, Jason Lengstorm at IBM, and Apollo has its own way. Not sure which one will become the standard, but will be interesting to see.

He sees the ideal app architecture for GraphQL is one where the gateway does the schema stitching. This will be especially useful if you're in an enterprise scenario, where there's a lot of different independent teams (and thus independent schemas).

![stitching-across-teams](//images.contentful.com/le3mxztn6yoo/1K7eTzQVgUq4Au86KIwqGG/dbd8b466b56a764d2eb18fc5e2360479/stitching-across-teams.JPG)



## Conclusion

Back to the GraphQL duality:
* client sends detailed data requirements
* server schema provides flexible, perofmrant capabilities

This enabls a lot of the features that make GraphQL great. Caching, transparency, and modularity will be continuously improving. HE wants to live in a world where all cells in this table have a green checkmark:

![green-checkmarks](//images.contentful.com/le3mxztn6yoo/44ImuJBafSmGcYUs2sQKgI/acdaf3351a304bfc299c51d606f26f87/green-checkmarks.JPG)
