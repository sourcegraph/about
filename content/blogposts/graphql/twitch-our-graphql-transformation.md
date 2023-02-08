---
title: 'Twitch: Our GraphQL Transformation'
authors:
  - name: '@attfarhan'
publishDate: 2017-10-26T00:00-07:00
tags: [
  "graphql"
]
slug: twitch-our-graphql-transformation
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5aBHbJqxp6SuEswAai6824/dea8b05cb1523963bc378df496683bcc/Ghita-1.png
published: true
---


Tony Ghita is an engineer at Twitch on the API platform team. He's been leading GraphQL API implementation efforts at Twitch for the past year or so.
You can find him on GitHub, Twitch, and Twitter as tonyghita. Tony says you can also check the Equifax dump for further information.

Tony begins with some very cute pictures of his puppy Finn, a great way to grab the audience's attention.

The audience gets a sneak peek at the newest Twitch web app, which is being rolled out to users at this moment.  By the end of tomorrow, 90% of users will be seeing this new web app, which has been completely re-written in the past 6 months, and is powered by a GraphQL API.  It's  written in TypeScript and React, uses Apollo Client to cache GraphQL requests.

Today, Tony is going to talk about how he's gotten Twitch on graphQL, and what he wishes he knew at the start.

Adding GraphQL to Twitch's API ecosystem required engineers at Twitch to make a hard paradigm shift.  For many developers, REST has been synonymous with APIs for their entire careers. Switching from REST to GraphQL forced them to start thinking in terms of data and relationships between data instead of endpoints. Adding a GraphQL API to the ecosystem was like adding a missing unit test.
The different perspective exposed opportunities for a more scalable architecture, and blew the minds of Twitch engineers.

Adopting GraphQL has guided a more standardized and flexible service ecosystem within Twitch.  The switch has pushed the team to reconsider past decisions on things like authorization and pagination, and has resulted in improved systems.

Tony hopes this story of how Twitch adopted GraphQL encourages others to begin their own journeys or continue on their journeys to adopt GraphQL.
At Twitch, there are 600 engineers, and the team has grown rapidly. The number of devs has doubled in the past year, so there are a lot of new faces.

Twitch's architecture looks something like this:

![Ghita-1](//images.contentful.com/le3mxztn6yoo/5aBHbJqxp6SuEswAai6824/dea8b05cb1523963bc378df496683bcc/Ghita-1.png)

Requests flow through the API gateway first.
Endpoints aggregate data from many backend services.  There are over 100 backend services -- it's "like a soup of services."  There's also a massive monolith, which has been shrinking as Twitch migrates away from it.

The API Gateway and backend services are written mostly in Golang, and Tony thinks the Gopher mascot is one of the best parts of Go.

The existing API was a well-worn JSON REST API, like most companies likely have. Tony will take us through a rough timeline of the steps they took to build a GraphQL API.

![Ghita-2](//images.contentful.com/le3mxztn6yoo/6EdFO8dnkkeQc4o6emYgCK/3656c46ff687d51e803c10b0f76f5b56/Ghita-2.png)


Twitch came to last year's GraphQL Summit with just a vague idea of what GraphQL was.
As they listened to the talks, they realized that GraphQL solved many of the issues the team was facing at the API gateway.  Twitch started at GraphQL Summit 2016, knowing next to nothing about GraphQL. And by tomorrow, Twitch is about to throw all API traffic to GraphQL, which is an awesome full-circle moment.

After letting the content of GraphQL Summit 2016 marinate, Tony and team decided to prototype a GraphQL API.
They hoped GraphQL could solve issues like versioning, and over-fetching data, and provide a good developer experience.

Initially, they thought that they'd  use GraphQL to make it easier for API gateway contributors to write REST endpoints. So, the best idea they had was to wrap the REST Endpoints in GraphQL. Citing Henry Ford's quote, Tony describes this as  "looking for a faster horse, rather than building a car."

This is what the first prototype looked like, a single type and query:

![Ghita-3](//images.contentful.com/le3mxztn6yoo/6MQTeYHs1qy0Uw68SM2WIm/780b4a6558c8fde2c07e17f538a55431/Ghita-3.png)

This simple prototype was enough to learn:
* how to resolve types and fields in a GraphQL API
* how to load data efficiently \(dataloader!\)
* and how to integrate our backend services with a GraphQL API

After learning a ton by implementing a single type and query,Tony thought a good next step was to implement enough types to load a logged-out version our the front page. He took a client-driven approach to figure out what data he'd want to get from the GraphQL API.

This would let us test more complex interactions between types \(like composition and pagination\) without worrying yet about authentication.

![Ghita-4](//images.contentful.com/le3mxztn6yoo/6qSIOloIfYaswY2GIQ2qMu/c0a58204baec1b4db31c347ec2a9f6bf/Ghita-4.png)


You can see that "Stream" and "Game" types were needed.

![Ghita-5](//images.contentful.com/le3mxztn6yoo/5lkdb6dIZ2AwMswosmUsCy/d7a951f9788be1cd80bc8cbb17f58ab7/Ghita-5.png)

Here we have
 * types that resolve other types
 * our first paginated queries
This gives you a good idea of how the data needs were weaseled out.

This step was enough to get familiarized with the intricacies of resolver type composition, and also pagination.
Type composition was straightforward, but when pagination was needed to be added into the schema they didn't know how to proceed.  The many backend services did pagination in so many different ways: offset limits, cursors, timestamps.
This is where they first really had to think about pagination as an all-encompassing idea that spanned the whole of an API.

This manifested in the REST API organically as teams working on different services wrote their own endpoints to expose their own data, resulting in an interface not straightforward for users.

They decided to standardize on cursor based pagination for efficiency and ease of use. They found the specification put out by Relay, and decided on it as the best way to do pagination. Check it out here: bit.ly\/gqlPage.

GraphQL allowed us to standardize the interface - it serves as a translation layer from clients to backend services. It became the best place to enforce consistency for pagination schemes while allowing services to adopt cursor-based pagination on their own time.  Thus, GraphQL allows for making safe assumptions on how things like pagination would work.  This worked out nicely for things other than pagination as well.

At this point, they were progressing well on the prototype, but didn't know how to do auth. However, they couldn't punt on it any longer.

The way the old API works is that we authenticate the request so it's known who is making the request. A single request from endpoints to the backend was made sending auth tokens if the user was authorized. The services then double check that all the expected authorization data is there.

![Ghita-6](//images.contentful.com/le3mxztn6yoo/337HB0tUNGUAOyCsOaWQau/12b6e110d853178a261d624cf9498251/Ghita-6.png)


This existing system didn't work out nicely with GraphQL. Any solution seemed inefficient and difficult to implement.

Tony and team talked to a bunch of folks and found Dan Schaefer and his team's advice to keep authorization logic out of the API layer.  According to Dan, it the API layer is not the right place for auth in GraphQL, and that the API layer should be kept thin. This approach greatly simplifies API development as you are simply passing data back and forth, and not dealing with auth.

 ![Ghita-7](//images.contentful.com/le3mxztn6yoo/6PoSez4oDeGgaqowwoewYs/76f15bc8df2a5a12e12426eabe6dab28/Ghita-7.png)

The challenge became convincing tens of teams that they have to consider auth business logic in their services, after spending time convincing teams to use the centralized auth logic.  It felt like the right thing to do, and Tony and team were convinced the end result would've been a huge improvement.

A key takeaway here is to keep it simple.  Make use of abstractions, gateways, and services layers if you have them, and consider building them if you don't.  A lot was learned from  [Dan Schafer's 2016 ReactEurope talk on GraphQL.](bit.ly\/gqlAuth\), which encourages keeping the API layer as thin as possible, and allow services to own their own business logic.

By now there was a great prototype. At this point, Tony was shopping around the prototype to teams, and was showing off pages that used tens of REST requests that now used single GraphQL requests. It went from Tony convincing people at Twitch to having over 50 contributors to the GraphQL API internally.


## What I wish I knew: scaling contributions

While the prototype was super effective there are things Tony wishes he knew.

### 1) Document good practices

It's impossible to give advice on what to do specific to your backend implementation, as all companies have tradeoffs to make that depend on the scale of operations and tech choices made in the past. Therefore, it's super important to write down practices that work for your company. Explain why you're taking the current approach so that the next developer that picks up the codebase, who may not be familiar with GraphQL, can easily understand what's going on and is not lost.

### 2) Iterate on a styleguide

When you find things that work for your data and schema, create a style guide. Iterate on the style guide as you find best practices for your GraphQL implementation.

### 3) Write linters

Take your style guidelines and codify them in the form of linters.
This will automate away mechanical feedback in pull requests, and help get new developers up to speed and get them contributing to GraphQL codebase.

### 4) Fight boilerplate

This may be more of a function of using Go on the backend.  In Tony's experience, a lot of boilerplate involved is involved to get some types  working in the API.

![Ghita-8](//images.contentful.com/le3mxztn6yoo/5iiF5xxXwkmmYmiksaacgK/cf813ba438d3b39139340b2b750f0f67/Ghita-8.png)

Go comes to the rescue here and makes it super easy to generate code.  Right now, at Twitch they're generating their resolver schema.  The last line in resolver methods is all they really write.  The dream is to have full schema-to-resolver code generation, and have it so teams do not code anything in the API layer.


### 5) Automate knowledge share

Be very aggressive in automating knowledge share. Tony brings in a wise quote: “If you want to go fast, go alone. If you want to go far, go together.”  While it was nice to iterate really fast on the API prototype since he was working alone, Tony is probably right when he says that he can't rewrite Twitch on his own.

If you want to check out the new version of Twitch, check out go.twitch.tv, which is still in beta, and compare it to to twitch.tv.
