---
title: 'WordPress GraphQL: Bringing GraphQL to 28% of the Internet'
authors:
  - name: '@attfarhan'
publishDate: 2017-10-25T09:48-07:00
tags: [
  "graphql"
]
slug: wordpress-graphql-bringing-graphql-to-28-of-the-internet
heroImage: https://images.ctfassets.net/le3mxztn6yoo/24lcD7UxAMWwaIeiQSMawW/592f76a0667fafaa41ea2ffba416bc37/graphql2017laptop_Selection_001.png
published: true
---


Jason Bahl is a Senior WordPress Engineer at Digital First Media in Denver. He's been a WordPress developer for 9+ years and a GraphQL developer for about 1.5 years. He is the creator and maintainer of [WPGraphQL](https://github.com/wp-graphql/wp-graphql).

## Agenda
* Why WordPress + GraphQL?
  * For Digital First Media
  * Greater WordPress Community
* Quick WordPress Overview
* Installing and Using the WPGraphQL Plugin
* Things I've learned while building and maintaining the plugin

## Why WordPress and GraphQL (for Digital First Media)

Why did Digital First Media begin thinking of using GraphQL? Operating a huge number of independent websites proved to be an obstacle for using existing REST APIs.  The company has 106 distributed WordPress installs that operate independently, but need a uniform, efficient way to query data.  Content syndication and publishing across platforms and sites is a very common operation, but requires way too many requests to the REST API to read and write syndicated content.

![graphql2017laptop Selection 002](//images.contentful.com/le3mxztn6yoo/4ROm1T4LTGeEWAk8EkAO4y/9515fd02ec7d82ff0a31138429606246/graphql2017laptop_Selection_002.png)


## Frustrations with REST

Given the scale of their content and operations, developers at Digital First Media did not find that their REST API was an optimal solution.  Jason talks about several problems they encountered with REST.  First, he brought up that implicit requests are difficult for long-term code maintenance.  The data from a REST endpoint is only vaguely related to the endpoint name.  A “\/post” endpoint will return data that is somewhat related to a post, but is not very clear in what it returns. Over time, it becomes difficult to trace the original intent of implicit REST requests.  GraphQL, on the other hand, is explicit.  GraphQL queries are  very clear and readable in terms of what data is being requested and returned.

Constant over and under-fetching using individual REST endpoints is a related frustration.  At times, the developer only needs simple information, like the author, title, and content of a post, but would be returned 6,000 lines of JSON that would have to be parsed.  When it wasn't too much data being returned, it was too little. In these cases, multiple requests to several endpoints are required for small amounts of data.

Performance with the REST API also frustrated engineers.  Jason showed us a screenshot from just today that showed a request from the REST API for 10 posts that took 2.5 seconds.  Initially, in trying to switch to GraphQL, they simply tried wrapping the REST API with GraphQL, but found that wrapping a non performant REST API simply produced a non-performant GraphQL API.  So the solution is to move away from REST completely, and write and use a GraphQL server.

![Bahl-2](//images.contentful.com/le3mxztn6yoo/2rYbvTCR4k0yKi0KM4KsYK/f214b76a026c831e029e5801dc4ae71a/Bahl-2.png)

## Why WordPress + GraphQL? (Generally speaking)

Since Jason and team decided to build a GraphQL server for internal use, they thought that an open source solution to bring GraphQL to any WordPress site would benefit the wider internet.
WordPress powers 28% of the web, and has a stated goal to boost that percentage to 51%.  GraphQL wants to achieve ubiquity, so having WordPress sites using GraphQL is a catalyst for achieving this goal.  Both WordPress and GraphQL are open source and community-centric, and aim to solve general problems for the web, so it is natural that GraphQL and WordPress go hand in hand.

![Bahl-3](//images.contentful.com/le3mxztn6yoo/2Uzi2t3SykUuGEeMwGY0oq/ccdf74de67546ba279e10e2fe88ef67e/Bahl-3.png)

GraphQL is the missing piece in the WordPress stack, so Jason and team set out to create a way for any WordPress site to harness the power of GraphQL, and built [WPGraphQL](https://github.com/wp-graphql/wp-graphql).  WPGraphQL is a free, open source WordPress plugin that provides an extendable GraphQL schema and API for any WordPress site.

## A quick overview of WordPress

WordPress provides a dashboard for websites that includes a content editor, exposes content types and taxonomy terms, allows access to and customization of media libraries, users, comments, themes, and plugins.

Given this wide variety of data WordPress provides, a benefit of GraphQL is its treatment of this data as an actual graph.  Each node represents a different type of data, but each node has a relation to other parts of the data returned.

Jason gives a demo showing us how to extend WPGraphQL.  Since WordPress is easy to extend, WPGraphQL should be equally simple to extend.  He demonstrates adding custom post types, custom taxonomies, adding a field to a type, and using external data sources.  Using a “dad jokes” plugin, he shows off how WPGraphQL can extract data from external sources.  While GraphQL can provide your schema and resolvers, it doesn't have to provide your data.
## Adding the plugin to WordPress

![Bahl-4](//images.contentful.com/le3mxztn6yoo/5Cf4QkNcJyKuk2gAUGo6KQ/a37853167ca7945b082d501fa6e62a21/Bahl-4.png)

## The Journey

The project has come a long way from the initial commit in November 2016.  In May 2017, the first public extension was created, and today WPGraphQL is on v0.20 and has 15 contributors.

What's next for WPGraphQL? First, a stable release.  Following the stable release, potentially merging to [WordPress.org](http://WordPress.org) and WordPress core is in the roadmap, which will effectively bring GraphQL to 28% of the Internet.

Jason has learned a lot from building WPGraphQL. One major learning is that it is extremely difficult to build a schema when you don't know what the end product is.  A WordPress site can be anything — an online store, a personal blog, and so on — and building a schema to accommodate all of these possibilities is no easy task.  He's also found that the Relay Schema Spec has been fantastic.

To close, Jason expresses how amazing the GraphQL and WordPress communities are, and gives thanks to the many contributors that have helped along the way.
