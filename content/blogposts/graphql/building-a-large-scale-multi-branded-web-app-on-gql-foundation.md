---
title: 'Building a Large-Scale Multi-Branded Web App on GQL Foundation'
authors:
  - name: '@attfarhan'
publishDate: 2017-10-26T18:00+02:00
tags: [
  "graphql"
]
slug: building-a-large-scale-multi-branded-web-app-on-gql-foundation
heroImage: https://images.ctfassets.net/le3mxztn6yoo/2f5YYe3ySEoWSuY2Sws0c/dd9db03df580662234cd0e98c8ff77d9/Ugur-Tom-1.png
published: true
---

Ugur Korfali and Tom Suijkerbuijk are frontend engineers at KLM-Air France.

They are using GraphQL in a new application that's currently being developed, and has been rolled out in some smaller markets, and is slowly being rolled out in more regions. They started working on this project on July 2016.

Introducing AirFrance-KLM

Tom asks the audience “Who's heard of KLM?” and almost everyone raises their hand.  In fact, when he asks the room who's ever taken KLM, most of the room raises their hand, again. Not sure if he was expecting that.  Anyways, Tom presents us some facts about AirFrance-KLM:

* **95 million** people fly with AFKL every year
* **35%** book directly via the website (that's **33 million **people)
* average **36K** payments on a daily basis
* approximately **110K **people check-in using the website on a daily basis
* another **80 million** fly on codeshare flights (Delta, Xiamen Airlines etc.) annually
* about **1/2 million** customers look for a flight on a daily basis

Working on the BLueWeb Project

![Ugur-Tom-1](//images.contentful.com/le3mxztn6yoo/2f5YYe3ySEoWSuY2Sws0c/dd9db03df580662234cd0e98c8ff77d9/Ugur-Tom-1.png)

The BlueWeb project will replace both KLM.com (http://klm.com/) and AirFrance.com (http://airfrance.com/).  It's currently rolled out in some Middle East and Asia markets.  BlueWeb is one Angular application, with two different flavors (Air France and KLM), and multiple reusable components.  They are also  working on to creating one converged API.

The frontend stack looks like this:

![Ugur-Tom-3](//images.contentful.com/le3mxztn6yoo/mIBeW5vttI8YmMweG0o0m/408ad05668a303c997fb1ce77b8487c1/Ugur-Tom-3.png)

The client includes TypeScript, Sass, Angular, Angular CLI.  The server includes Node.JS and TypeScript, GraphQL, Docker and Apollo Engine.

## Architecture

Ugur (jokingly) asks the audience to memorize this complex image of the architecture:


He'll walk us through some of the architectural guidelines of BlueWeb.

Currently, there are 4 main business functions implemented.  These are search, check-in, check-out and profile.  Each of these are called “unique business components” (UBCs).

##  Architectural Guidelines

Each UBC client is an Angular module, which has a set of flows on a specific context.  For example, the check-out UBC is responsible for collecting customer data, allowing customers to choose their payment method, and so on.

Each UBC should have a separate server.  On the server, they are using TypeScript, GraphQL-Express, and GraphQL-tools.  Because each UBC has a separate server, this goes against the setup GraphQL recommends: there is no single, big schema, but a schema for each UBC.  Having separate servers is a requirement from the KLM architects, as they want them to be deployable on separate Docker containers to enable scaling each server to its expected load.  The search server expects more load than the checkout server, for example.  This is extremely important to because a flight system going down causes massive chaos.

![Ugur-Tom-2](//images.contentful.com/le3mxztn6yoo/4WDnxbMe1qYY0Y0M8YwOQA/b3bad446ee97ec55bce22818bba2145f/Ugur-Tom-2.png)

Each UBC client should get lazy loaded in a shell. There is a shell application, called Aviato-shell (yes, that Aviato from Silicon Valley), that includes share services and configurations, and is also responsible for lazy loading UBCs.  This shell application manages common dependencies used by the UBCs, and has the root routing config to manage lazy loading.  As mentioned, UBCs have their own GraphQL servers, but they wanted each UBC to  collect data from a converged API.  So the team tried merging all these APIs under a middleware layer.  The middleware would serve as a big, single schema.  However, this layer served as a single point of failure, and because a failure in one UBC would bring down every other UBC in this implementation, they ditched it.

So, they kept the APIs separate.  But what if a server needs  data from multiple APIs? Would you duplicate the related types and resolvers in the servers. They decided to separate types from the servers, and published each server's types and resolvers as npm packages. So, any server could use these fields, queries, and resolvers and use them to form their schemas.

## Timeline

Angular was a given, but painful to work with initially because it was a new framework for the team. There was a lot of prototyping done to get used to the functionality. Then, application state was needed, and a Rob Wormald presentation on NgRx convinced the team to add it to their stack.  Then, Tom and Ugur's colleague said they should try using this GraphQL thing, since it 1) ensures you get only the data you need, 2) reduces network traffic, and 3) allows you to know what type to expect.

After convincing the team, they started writing their types, and used Apollo Server to help with type creation.  However, NgRx and Apollo Server began to clash.  One major roadbump was multiple stores with NgRx, which lead to data synchronization issues. Uri Goldshtein told them to ditch NgRx, not to sync the stores, and that Apollo Client would be sufficient for their use case. So, they ripped out NgRx and used Apollo-Client for their app state.  While they were removing NgRx, their original inspiration for including NgRx in their stack, Rob Wormald, visited them and agreed that it was a good idea to rip out.  They realized they were using Apollo incorrectly all this while, to say the least.


Lessons learned

The result was a refactor.  This refactor included using RxJS, but this ended up surfacing an issue where a mutation caused Apollo to emit data twice.  This was happening because they were querying the field and its fragment at the same time. So, the lesson is not to request the same types in one query.

Roadmap

On the roadmap is to move Apollo Client into the Aviato-shell, so that there will be one big store and they'll be able to use cool things like schema stitching, and having multiple clients.

Also on the roadmap

* Implementing AOT
* Apollo Client 2.0
* Progressive web apps
    * This handles case of using the browser for your boarding pass, having terrible airport wfii and no data, and panicking right before your flight.
* Persisted queries
    * Saves bandwidth, and therefore money for customers in many countries where data is expensive.
