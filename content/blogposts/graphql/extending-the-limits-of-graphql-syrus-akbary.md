---
title: 'Extending the Limits of GraphQL - Syrus Akbary'
authors:
  - name: 'Eric Baer (@ebaerbaerbaer)'
publishDate: 2017-10-25T00:00-07:00
tags: [
  "graphql"
]
slug: extending-the-limits-of-graphql-syrus-akbary
heroImage: https://images.ctfassets.net/le3mxztn6yoo/54WEsX4ry8WKIM22sOI2KG/3953c4b0af55d2d681920fbac828679a/akbary-1.png
published: true
---


**About the Speaker**
Syrus Akbary (@syrusakbary) is a prolific contributor in the GraphQL community. He has written and maintained \~20 packages including Python's [graphene](https://github.com/graphql-python/graphene) server and the Django integration [graphene-django](https://github.com/graphql-python/graphene-django). I got the chance to hang out with him at the GraphQL, and you would be hard-pressed to find anybody more excited about GraphQL, and it's ecosystem.

## Graphene (Python) Today

Python Graphene was one of the first significant community projects to develop after the initial GraphQL announcement and is just a little over two years old now. Apart from the GraphQL-js reference implementation, it is the most starred GraphQL project on GitHub. Yes, that an imperfect metric, but it shows that there are a lot of people excited about what Graphene is doing.


![akbary-1](//images.contentful.com/le3mxztn6yoo/54WEsX4ry8WKIM22sOI2KG/3953c4b0af55d2d681920fbac828679a/akbary-1.png)

There are around 100 companies that are using Graphene in production, and by the looks of Syrus's graphs, it's growing like crazy - especially in the last ten or so months.


## Announcement: Graphene 2.0
Graphene's internals have been reworked almost a half dozen times now, Syrus has some real war stories he can tell about how he tried to make it faster while preserving the API surface. Now, a couple of years later, Syrus has a few new ideas that necessitate some breaking changes.

Graphene 2.0 Highlights
  * A Simplified codebase (easier to contribute - please contribute)
  * A cleaner resolver API
  * Subscriptions!

Graphene takes full advantage of Python3 APIs and uses async iterators and class definitions that make the demos of the day very impressive. In ~3 lines of code, you can spin up a WebSocket server and ~10 to hook into it.

## Announcement: [Graphene-JS](http://graphene-js.org/)

Graphene-JS takes the same resolver patterns and generally, the same library code and runs it in JavaScript. You may be curious why anybody would want to rewrite `express-graphql` or Apollo Server, and the answer lies in the reference implementation. Both of those projects are mostly just a thin wrapper around GraphQL-js which is designed first and foremost as a reference to the spec. Graphene-JS, on the other hand, is designed for performance and should be considerably faster in a lot of cases.

![akbary-2](//images.contentful.com/le3mxztn6yoo/RYyLfGUFGKowo8EK66KIQ/865d17ea83cbc2ee703213b7024a94cb/akbary-2.png)

Internals aside, the developer experience seems terrific. In particular, the pattern for writing interfaces and derived classes looks like it could cut down on a tremendous amount of code for a lot of projects. As icing on the cake, it looks like it might cut even more boilerplate by integrating directly with some ORMs like Sequelize.


## Announcement: [Quiver](http://graphql-quiver.com/)

The final announcement is Quiver which is an alternative query engine. Syrus looked at how template engines worked and realized that the fastest ones were pre-compiled the templates into optimized code. This performance gap is true across languages (Ruby, Python, JavaScript, etc.). Quiver allows developers to compile queries ahead of time to eliminate the framework overhead of compiling fragment spreads and generally building of a query. The result is a 2-3x perf improvement in JIT languages like V8, and it works in Python, Ruby, PHP, Python, JS.

![akbary-3](//images.contentful.com/le3mxztn6yoo/71Vuoi88ZUcY4Um0okiQw4/83f3cba890cf5e0470775e1d2be36d1c/akbary-3.png)
