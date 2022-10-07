---
title: 'GraphQL at Twitter'
authors:
  - name: '@beyang'
publishDate: 2017-10-26T23:50-07:00
tags: [
  "graphql"
]
slug: graphql-at-twitter
heroImage: https://images.ctfassets.net/le3mxztn6yoo/6aI39UzzjiOYewEag2mGks/375f23bea8d04834da9b80b700168c72/tgvashworth.png
published: true
---


Tom Ashworth (@tgvashworth) is a software engineer on the core services team at Twitter.

Tom's going to give us a whirlwind tour of how GraphQL fits into the architecture at Twitter. We're going to cover:

* The Twitter GraphQL **API** and how it fits into Twitter's microservices architecture
* **Subscriptions** architecture
* Twitter's **schema** and plan for GraphQL in the long term

## API

Twitter started experimenting with GraphQL two years ago:
* Dec 2016 TweetDeck
* Feb 2017: Twitter Lite
* Sept 2017: Android & iOS

Twitter is famously a microservices company. There's a service for everything, and often multiple new services for every new feature. Tom counted the number of deployment configuration files in their monorepo and they numbered over 2000.

Here's a high level overview of the backend architecture at Twitter, pre-GraphQL:

<Figure 
  alt="Ashworth-5" 
  src="//images.contentful.com/le3mxztn6yoo/zlxYalUkJUMEKSgGwUqqG/2c14e2d8262b900e982366b43214584f/Screen_Shot_2017-11-10_at_11.02.16_AM.png" 
/>

At a high level, there are 2 types of services:
* HTTP services
* Thrift services

Thrift is a Remote Procedure Call system that's used extensively at Twitter, Facebook, and many other companies.

Each service exposes an asynchronous, typed interface, so communication between microservices already uses types. They aren't GraphQL types, but they are types.

And here is where the GraphQL API fits in as an HTTP and Thrift service:

<Figure 
  alt="Ashworth-8" 
  src="//images.contentful.com/le3mxztn6yoo/2S5EjqJXDqs00CEcecUqcc/172310b88eb6e327513c12ec321d132e/Screen_Shot_2017-11-10_at_10.53.55_AM.png" 
/>

GraphQL fits into this picture as an HTTP _and_ Thrift service alongside the others. It uses many data sources including existing HTTP endpoints and other Thrift services. Remember, communication between all Twitter's microservices is already typed using Thrift. The entire system sounds like it could be a GraphQL-native pattern. So, the GraphQL community isn't the first to find a service-to-service type system useful.

Twitter uses Scala, so they use the open source [Sangria](https://github.com/sangria-graphql/sangria) library.

Let's dive into some of the challenges of implementing GraphQL at Twitter. One challenge is monitoring. In HTTP services, errors are easy to detect in the HTTP error codes. However GraphQL is capable of partial successes. GraphQL requests almost always succeed with a 200 even if no data was returned.

So instead of HTTP error codes, they track the number of the exceptions per query. For each GraphQL query, they track the number of exceptions generated. This becomes their success rate measure, so dashboards and alerting revolves around this metric.

They also use GraphQL-specific defenses. Imagine a pathologically nested query (followers of followers of followers...):

```graphql
{
  user(rest_id: "12") {
    name
    followers {
      name
      followers {
        name
        followers {
          name
        }
      }
    }
  }
}
```

They have two defences: complexity and depth.

First, they measure query complexity. They assign a "score" (some point value) to each field, and calculate the total cost of a query. The total cost is the _complexity_ of a query, and is calculated before execution. They then limit queries to some maximum complexity, and reject queries that are too costly.

Twitter also uses _query depth_ measurement, which simply calculates the height of a query. For example, they could reject queries that goes further than 10 fields deep.

They don't allow arbitrary queries. All queries must be uploaded and stored ahead of time and exchanged for a unique key:

```graphql
POST /graphql/eyBuaWNlIHsgdHJ5IH0gfQ
```

These are called _stored operations_ or _persisted queries_. This protects against attackers exploring the GraphQL API or running introspection queries against it to find out what data is available or looking for vulnerabilities.

Lastly on the topic of the Twitter API, Tom will cover how they handle authentication in GraphQL.  The Twitter Frontend (TFE) is a layer between all internal twitter services and the outside world. It functions as a reverse proxy, API gateway, and router. It talks to the GraphQL API (in addition to the other HTTP API services):

<Figure 
  alt="Ashworth-10" 
  src="//images.contentful.com/le3mxztn6yoo/3E1d9dZVTisKC0igc6GYkc/524f4769a1870cb4b786e148f2feb65c/Screen_Shot_2017-11-10_at_10.55.07_AM.png" 
/>

Imagine a request to api.twitter.com that is authenticated using a cookie header. TFE is responsible for user authentication. Because validating a cookie is fairly involved, this is done in the TFE layer, and passes on a bundle of Twitter Identity Assertion headers to GraphQL.

<Figure
  alt="Ashworth-9" 
  src="//images.contentful.com/le3mxztn6yoo/mpuHunFbwGeYGguSeISeI/a822c118c1e8782897b53506e7eba45d/Screen_Shot_2017-11-10_at_10.55.13_AM.png" 
/>

The GraphQL API then passes the bundle through to the other services, so each service doesn't need to worry about authentication. The lower-level services are responsible for authorization (permissions) checks. Thus, the GraphQL API server does not need to concern itself with any authn or authz checks.

<Figure 
  alt="Ashworth-6" 
  src="//images.contentful.com/le3mxztn6yoo/2LHo8oNzYsaq4EsOkY6ciS/666a183e88f34aacab200af8d6490131/Screen_Shot_2017-11-10_at_10.55.43_AM.png" 
/>

## Subscriptions

<Figure 
  alt="Ashworth-7" 
  src="//images.contentful.com/le3mxztn6yoo/6pTptenLTUAIOo0Esq6yoA/f703a73fca4e5f76c2482213e63ac10b/Screen_Shot_2017-11-10_at_10.55.57_AM.png" 
/>

Tom will structure his discussion of subscriptions around Laney Kuenzel's description of GraphQL subscriptions: "Clients subscribe to an event with a GraphQL query and receive payloads."

Clients subscribe to an event occurring in the backend with a GraphQL query, and receive payloads. The payloads represent the result of running the query against the event.

Twitter's subscriptions system divides functionality in a similar way to the quote:
1. Event production
1. Query execution
1. Payload delivery

They've been deliberate in creating boundaries between each of the three parts to work on each component independently and hide some of the complexity of the implementation.

### "Clients subscribe to an event": event production

Twitter has an extensive pub/sub system called EventBus, with thousands of different events that flow through it. They wanted to give clients access to this stream of data with GraphQL subscriptions.

EventBus is a distributed queue system. Event producers are services that publish events to EventBus streams. Subscribers are services that subscribe to EventBus to receive events.

<Figure 
  alt="Ashworth-1" 
  src="//images.contentful.com/le3mxztn6yoo/5WTEFIVKEwYQImIE6W6g0A/31ef69d5907919e4a03d5b98faaa3a73/Screen_Shot_2017-11-07_at_5.57.07_PM.png" 
/>

To expose this data to GraphQL, they built a "Subscriptions" service that subscribes to EventBus streams. This Subscriptions service is separate from the GraphQL API.

### "...with a GraphQL query": query execution

Now that there's a service that picks up events from EventBus, the events need to be hooked up to queries. In their Subscriptions design, Twitter extended the GraphQL API to execute GraphQL queries against an event that is supplied as part of the request.

<Figure 
  alt="Ashworth-2" 
  src="//images.contentful.com/le3mxztn6yoo/366xlCgPQQM0o08EC8qIGc/d56c7d69c65915d2a8ca0eb10c41feb6/Screen_Shot_2017-11-07_at_6.07.20_PM.png" 
/>

This means that the API receives both a query and an event, and uses the event as the basis for the query execution. This is similar to a Thrift interface, so they are using GraphQL over both Thrift and HTTP.

This JSON bundle shows that the API will run the query against the event. This keeps the GraphQL API concerned only with executing GraphQL queries:
```json
{
  "query": "subscription { random_tweet { id } }",
  "event": {
    "type": "random_tweet",
    "tweet_id": "..."
  },
  "user": {
    "id": "12"
  }
}
```

So when an event arrives on an EventBus stream, the Subscriptions service calls out to the GraphQL API service for execution. At this point, the Subscription service picks up events from EventBus and execute them using the GraphQL API:

<Figure 
  alt="Ashworth-12" 
  src="//images.contentful.com/le3mxztn6yoo/kOMfIEN7Z628aukKk0goW/7cb84b27209a35ffff40b5de0e268b26/Screen_Shot_2017-11-10_at_11.09.51_AM.png" 
/>

### "...and receive payloads": payload delivery

Next, the resulting payloads need to be delivered. Streamed event delivery at scale is a hard problem, so the team at Twitter didn't try to reinvent the wheel. Instead, they decided to build event delivery for GraphQL subscriptions on top of an existing Twitter technology called Live Pipeline, a pub/sub system over a streaming HTTP connection. When you see typing indicators in your DMs or see the number of retweets live update, that's Live Pipeline at work.

<Figure 
  alt="Ashworth-13" 
  src="//images.contentful.com/le3mxztn6yoo/5y1uKSOAaAyYWSSgWoOOKU/9c9031b0e71b491165d0bdc5aad9c2a8/Screen_Shot_2017-11-10_at_11.11.18_AM.png" 
/>

In the live pipeline model, clients listen for events on a specific "topic". Event producers can push events onto a topic by publishing them to Live Pipeline. Then the event is delivered to all clients subscribed to the event's topic.

To deliver GraphQL subscription payloads, a unique Live Pipeline topic is used per GraphQL subscription. Combining a bunch of data about the subscription creates a unique topic, and the client is informed of the topic so they can subscribe to it using Live Pipeline.

When a client initiates a GraphQL subscription query, we return a status message containing a Live Pipeline topic as part of a GraphQL union Type field at the root of the subscription:

<Figure 
  alt="gql 25" 
  src="//images.contentful.com/le3mxztn6yoo/5O3ATi2oKcOSSEmAUeEGAq/c83f8b997625faf93baa2f65eeaeec91/gql_25.png" 
/>

The client subscribes to this topic and gets the result of the query.

<Figure 
  alt="Ashworth-14" 
  src="//images.contentful.com/le3mxztn6yoo/6Kgp3xMxckKSiAu8KEsQOI/2bcc907756bbb40b897ec8654c560dda/Screen_Shot_2017-11-10_at_11.11.51_AM.png" 
/>

Putting it all together:
* The client makes a subscription query to the GraphQL API
* The API contacts an event producer to notify that there's a new subscriber
* It then returns a Live Pipeline topic, which the client subscribes to
* Once the event producer starts making events, the Subscriptions service will pick those up and execute the original queries using the API
* After the API has executed the query, the payload is published to the client through Live Pipeline.

This is the general overview of Twitter's GraphQL subscriptions system. This system is built to deliver thousands of events per second to thousands of clients.

<Figure 
  alt="Ashworth-15" 
  src="//images.contentful.com/le3mxztn6yoo/3Q242XreY86UY2A8OkCyOW/f9ebf2baa6d2020547160e076eaf236e/Screen_Shot_2017-11-10_at_11.12.06_AM.png" 
/>

## Schema

Lastly, Tom will tell us about the vision for GraphQL at Twitter.

One of the main goals is to help teams at Twitter build great products and features more quickly and easily, and GraphQL helps push this forward by making new data easily available without anyone manually editing schema code.

Twitter uses Strato to power this. Before learning more about Strato, a caveat: Strato is a technology internal to Twitter and there are no plans to open source it.

Strato is a kind of virtual database. A virtual database, also called a federated database, brings together multiple data sources so they can be queried and mutated uniformly. This sounds a lot like GraphQL:

<Figure 
  alt="Ashworth-15" 
  src="//images.contentful.com/le3mxztn6yoo/3pF4Rbussgey2eAG6SUso4/89171b4bc6b439dfc9d747cd01f306a7/Screen_Shot_2017-11-10_at_12.56.33_PM.png" 
/>

Philosophically, GraphQL and Strato are very similar. Strato has many of the same benefits of GraphQL, but isn't focused specifically on building client applications.

Strato has existed at Twitter much longer than GraphQL, and is used to power the GraphQL API. It integrates tightly with Twitter's Thrift services, and in combination with the GraphQL API, gives them **end-to-end types from database to the client**.  It is similar in spirit to many of the other technologies presented at this conference that stitch together multiple data sources into a single source of truth. This approach is extremely powerful.

For example, The Strato team has made it possible to add data to the Strato Catalog with a simple config file, and made deploys automatic. This allows engineers to have much more power and flexibility by reducing coordination needed between teams. This is an example Strato column that would store the birthdays of Twitter users in a database. It's just a config:

<Figure 
  alt="Ashworth-3" 
  src="//images.contentful.com/le3mxztn6yoo/2bKiqAhmKooYoyg4amKCSU/8ed0a5520b0ad8f5e629916f1513a277/Screen_Shot_2017-11-10_at_12.43.30_PM.png"
/>

Twitter has built Strato-powered GraphQL, which allows data in the Strato Catalog to automatically appear in the GraphQL Schema with a simple config change:

<Figure 
  alt="Ashworth-4"
  src="//images.contentful.com/le3mxztn6yoo/1BbX69ORzWgWq08Iu0mmYY/7d76a4fc9975763af6150f9435e1427b/Screen_Shot_2017-11-10_at_12.43.22_PM.png"
/>

So, why does Tom find GraphQL exciting? While far from perfect, Tom finds GraphQL exciting because he sees it as an _enabling technology_, meaning it can "drive radical change in the capabilities of a user or culture." As a result, GraphQL expands the _adjacent possible_. Because it's so different to what we currently have, it opens up new avenues of exploration that weren't previously accessible.
