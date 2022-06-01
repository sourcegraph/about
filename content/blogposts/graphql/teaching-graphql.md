---
title: 'Teaching GraphQL'
authors:
  - name: '@beyang'
publishDate: 2017-10-26T00:00-07:00
tags: [
  "graphql"
]
slug: teaching-graphql
heroImage: https://images.ctfassets.net/le3mxztn6yoo/7gb0ceRxw48gaiCaQkEQuq/baf62d502bd7b73c1ebd41859b970fa3/leanne_1.png
published: true
---


Leanne Shapton ([@leeshapton](https://twitter.com/leeshapton)) is a software developer at Shopify. Shopify released its public Storefront GraphQL API earlier this year. Leanne's job was to create sample React apps that demonstrated the capabilities of Shopify's new APIs.

This talk will cover a few things
* A model for learning new skills
* The difference between beginners and experts
* Tools for teaching GraphQL to beginners





## A model for learning new skills

The classic Dreyfus model of learning has 7 stages. Here is the same model simplified into 3 stages:

![leanne 7](//images.contentful.com/le3mxztn6yoo/2qLT8B5dWIAkUOKoqi0cgg/ebed5fc419efd63af6976cbfed69bdb3/leanne_7.png)


What's the difference between a beginner and competent practitioner? Knowledge and context.

Beginners lack context and often feel stuck, because they don't have enough of a mental model to do even the simplest tasks. That's why they often require step-by-step instructions.

As a competent practitioner, you have a good enough mental model to solve normal, everyday problems. Your model might not be completely correct, but it is good enough.

As you gain experience, your mental model becomes so complex that you may not explicitly recognize each individual component of the model. As an expert, you can intuitively solve very complex issues.

They say it takes about 10,000 hours to become an expert. Today, we're not concerned about becoming experts. Instead, we'll focus on becoming competent practitioners with GraphQL.

Context allows learners to remember and retrieve new information because their domain knowledge is organized in a schema.

Mental models are conceptual frameworks consisting of generalizations and assumptions which we use to understand the workings of things. In the words of statistician George Box, "All models are wrong, but some are useful."

In the remainder of this talk, we'll focus on building a mental model of GraphQL for beginners.

Here are the key ideas understood by almost all developers regarding APIs:

* Client-server basics
* CRUD operations
* HTTP methods
* RESTful APIs


Let's start here and add GraphQL concepts on top of these.


Here are the key ideas of RESTful APIs. Some ideas are familiar to almost all devs. Others are not well understood by all or perhaps taken for granted:
* (Familiar idea) Client-server architecture: Distributed model where a client requests data from a server - often over a network
* (Familiar idea) Uniform interface: all clients and servers interact with the API in the same way (e.x. multiple resource endpoints)
* (Unfamiliar idea) Layered system, Statelessness, and Cacheability

Key ideas of CRUD
* (Familiar idea) 4 operations: Create, Read, Update, Delete
* (Familiar idea) CRUD operations are defined on a resource
* (Unfamiliar idea) CRUD operations map to a HTTP method


Here's a common framework for a REST API:

 ![leanne 16](//images.contentful.com/le3mxztn6yoo/4OJzpZgXIcwEousm66cuAi/41780174f482debe63c32d872acfc6d6/leanne_16.png)

The RESTful APIs we're most familiar with group data by resource. Here's an example query with our REST API:

![leanne 17](//images.contentful.com/le3mxztn6yoo/6ykNcqplugOMg0qYYyCqgK/f3b8e1f4267b1720e82cca11ff7d762f/leanne_17.png)

## GraphQL for beginners

When Leanne asked developers at Shopify what they thought were the key ideas of GraphQL, there were some ideas they could explain well and others that they couldn't:
* (Familiar idea) Clients can dictate format of data in response - solves over-fetching
* (Unfamiliar idea) A query language for APIs
* (Unfamiliar idea) One endpoint that returns a data graph
* (Unfamiliar idea) A type system defines all queryable data


The foundation of the GraphQL mental model is the "graph" in GraphQL:

![leanne 20](//images.contentful.com/le3mxztn6yoo/2NZzdGNiOA40GK0MmqccqQ/7c532a73d9f0f56d5d588aa7047e5065/leanne_20.png)


In addition, there are the GraphQL object types and resolvers:

![leanne 21](//images.contentful.com/le3mxztn6yoo/1n1jyLVbywuCu2Yc84a822/b513a04e70bc3d9694cedeadf9a5c412/leanne_21.png)



When we add these concepts on top of our existing mental model, we see that GraphQL is just another interface:

![leanne 22](//images.contentful.com/le3mxztn6yoo/1Dkg3MQ7lWmC82WW88I84C/41b36ad066ff2d53a72867e5132119c8/leanne_22.png)

An example GraphQL query:

![leane 24](//images.contentful.com/le3mxztn6yoo/58UTfpmTFeEacMI6kgae02/6ddb1e7ab9520fcd2073361b41318253/leane_24.png)


So GraphQL fits well into the constraints we know from RESTful APIs:
* Client-server architecture
* Uniform interface
* Layered system
* Statelessness
* Cacheability




What's sometimes confusing for GraphQL beginners is that an HTTP POST request is used to query data from the server (with no mutation). That's because they assume the RESTful mapping between CRUD operations and HTTP methods. But in the world of GraphQL, we use POST simply because we need to have a request body to dictate what data we want served to the client.

Some "Aha" moments Leanne observed in developers in the process of learning GraphQL:

* GraphQL is a REST API and more: one endpoint, data graph and type system
* Nodes represent objects and relationships between these objects are described by edges
* There is no mapping between functions implemented on the server and HTTP methods
* Each object is backed by a resolver

Leanne has written up a [detailed blog post](https://medium.com/@leeshapton/mental-maps-for-teaching-graphql-to-beginners-9db9b85ac957) describing the concepts and mental models in the talk.
