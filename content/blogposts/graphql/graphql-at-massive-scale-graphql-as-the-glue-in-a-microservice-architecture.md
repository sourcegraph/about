---
title: 'GraphQL at massive scale: GraphQL as the glue in a microservice architecture'
authors:
  - name: '@beyang'
publishDate: 2017-10-25T05:21-07:00
tags: [
  "graphql"
]
slug: graphql-at-massive-scale-graphql-as-the-glue-in-a-microservice-architecture
heroImage: https://images.ctfassets.net/le3mxztn6yoo/6t2OF30gV2U2WMIcQouceE/6c82ff3b7e356a00ac6d24dde625fbb9/jason-lengstorf-tokyo-footer.jpg
published: true
---


Jason Lengstorf (@jlengstorf) of IBM talks about how IBM uses GraphQL as the lingua franca of their microservices architecture.

Jason is a senior developer and frontend architect for IBM Cloud who has been doing web-related development for 15 years. He is obsessed with processes and efficiency. GraphQL is one of the most exciting things he has worked on in a long time.

He got excited about the potential of GraphQL very quickly, but received pushback from others initially. This is the story of how he shepherded adoption of GraphQL at IBM to the point where, today, it is deployed at massive scale.

Before we dive into that, let's take a quick detour into how IBM Cloud is built. Key facts:
* Node microservice architecture
* 30+ microservice teams
* Each microservice (or "plugin") is a separate codebase
* Teams control their own workflow and dev process

While this is great in a lot ways, it has its downsides:
* Things can change in 30+ ways at any given time
* Frontends need to pull data from potentially many microservices to serve user requests
* Internal documentation and architecture is often inconsistent
* Code conventions and standards can be very different between different microservices

Into this fray, GraphQL provides a number of key points of value that help bring a semblance of order:
* Changes are centralized in the GraphQL microservice
* Data access happens through a single endpoint
* There is a single source of truth for documentation that enforces consistency
* The GraphQL API boundary enforces a clear separation between underlying data sources and presentation layer

That being said, GraphQL also comes with some costs:
* Which team "owns" the GraphQL microservice and is responsible for maintaining code standards and enforcing conventions?
* How can teams continue to make independent changes to their own services without having to go through a central clearinghouse that can easily become a development bottleneck?
* Does this introduce a single point of failure where one bad commit can take down the whole system?
* How to deal with tracing given the extra API layer GraphQL introduces
* Can GraphQL scale to IBM's production needs?

Jason's team confronted these issues and boiled things down into 4 central questions. Could they:

1. Centralize their data layer, but let teams keep control?
1. Design an approach that _improves_ error handling rather than maintaining the bad status quo or make it even worse?
1. Make it so easy teams _want_ to switch?
1. Build a service that can handle IBM’s scale? (half a dozen data centers around the world with millions of unique visitors)

## Challenge 1: Centralize data, decentralize control

The ideal solution to this issue is for each team to maintain their own GraphQL schema, but aggregate those schemas into a central microservice. To accomplish this, they needed a standard format for sharing schemas. They called these "data sources."

They added a model layer and connector layer on top of the GraphQL schema and resolvers to abstract away the GraphQL syntax. Your model exposes a typical CRUD interface. They wrap that all in a common export which turns it into a plugin, and now you have a data source:

![GraphQLSummit Selection 029](//images.contentful.com/le3mxztn6yoo/3ncXOdypfq68qs82YuoE6I/70a5283ea6c52066b77ef390066a657c/GraphQLSummit_Selection_029.png)


Each data source is an independent GitHub repository, which means:
* Each team commits and deploys code independently (No bottlenecks)
* Each team owns their data source (No loss of control)
* Each team's code has individual test suites (No accidental borking)

All the different individual data source are then combined via the [GrAMPS Middleware](https://gramps-graphql.github.io/gramps-express/) library:


![GraphQLSummit Selection 030](//images.contentful.com/le3mxztn6yoo/7uGJmgr5hSwmqqSY62OQe/493612aad40d7d6e0f02342addbe522e/GraphQLSummit_Selection_030.png)

GrAMPS aggregates all these different data sources into a single service, combines them via schema stitching, and serves as a single source of truth for all data queries. Think, "Get your data off my lawn!"

This seems challenging, but actually the implementation is easy and fits into just a few lines. Let's walk through an example of converting an Apollo GraphQL Server to use the middleware. Let's say our server code looks like this:

```javascript
import Express from'express';
import bodyParser from'body-parser';
import { graphqlExpress } from'apollo-server-express';

import mySchema from'./schema';
import myDataAccess from'.\/data';

const app = new Express();
app.use(bodyParser.json());
app.use('/graphql',
  graphqlExpress({
    schema: mySchema,
    context: myDataAccess,
  }),
);
```

#### STEP 1: IMPORT THE MIDDLEWARE

```diff
  import Express from 'express';
  import bodyParser from 'body-parser';
  import { graphqlExpress } from 'apollo-server-express';
+ import { grampsExpress } from '@gramps/gramps-express';

  import mySchema from './schema';
  import myDataAccess from './data';

  const app = new Express();
  app.use(bodyParser.json());
  app.use('/graphql',
    graphqlExpress({
      schema: mySchema,
      context: myDataAccess,
    }),
  );
```

#### STEP 2: IMPORT THE DATA SOURCES

```diff
  import Express from 'express';
  import bodyParser from 'body-parser';
  import { graphqlExpress } from 'apollo-server-express';
  import { grampsExpress } from '@gramps/gramps-express';

- import mySchema from './schema';
- import myDataAccess from './data';
+ import schemaOne from '@gramps/data-source-one';
+ import schemaTwo from '@gramps/data-source-two';

  const app = new Express();
  app.use(bodyParser.json());
  app.use('/graphql',
    graphqlExpress({
      schema: mySchema,
      context: myDataAccess,
    }),
  );
```

#### STEP 3: COMBINE THE DATA SOURCES

```diff
  import Express from 'express';
  import bodyParser from 'body-parser';
  import { graphqlExpress } from 'apollo-server-express';
  import { grampsExpress } from '@gramps/gramps-express';

  import schemaOne from '@gramps/data-source-one';
  import schemaTwo from '@gramps/data-source-two';

  const app = new Express();
  app.use(bodyParser.json());
+ app.use(grampsExpress({ dataSources: [ schemaOne, schemaTwo ] }));
  app.use('/graphql',
    graphqlExpress({
      schema: mySchema,
      context: myDataAccess,
    }),
  );
```

#### STEP 4: USE THE NEW SCHEMA AND CONTEXT

```diff
  import Express from 'express';
  import bodyParser from 'body-parser';
  import { graphqlExpress } from 'apollo-server-express';
  import { grampsExpress } from '@gramps/gramps-express';

  import schemaOne from '@gramps/data-source-one';
  import schemaTwo from '@gramps/data-source-two';

  const app = new Express();
  app.use(bodyParser.json());
  app.use(grampsExpress({ dataSources: [ schemaOne, schemaTwo ] }));
  app.use('/graphql',
+   graphqlExpress(req => ({
+     schema: req.gramps.schema,
+     context: req.gramps.context,
+   })),
  );
```



## Challenge 2: Improve error handling

What makes an error helpful?

* Clear description of what went wrong
* Clarity about where the error occurred (Did GraphQL cause an issue or was the root cause in the underlying data fetcher?)
* Information to help with tracing bugs
* Unique IDs shared on the client and server side

In development, they print a lot of useful metadata in client-side error messages:

![GraphQLSummit Selection 031](//images.contentful.com/le3mxztn6yoo/1mJhXLXZqIaUmeWs8akQSO/67cedbdb7b9c107c76fb54f575cd4dfb/GraphQLSummit_Selection_031.png)


In production, however, you can't show some data. For example, the docs link might be behind your firewall or the target endpoint might not be public. As a result, in prod, client error messages tend to be a lot less useful.

*However*, because their client-side errors and their corresponding server-side errors share a common GUID, they can display the GUID in client logs and use that the look up the corresponding error in the server logs. The server-side error contain that additional context that can't be displayed client-side. Powerfully, this means:

* Support tickets can directly reference details in logs
* Errors are clear and come with documentation
* The source of a given error is immediately clear

Doing this with the GrAMPS library is easy (but you have to opt in; if you don't like it, you can use a completely different error formatting library):

```diff
  import Express from 'express';
  import bodyParser from 'body-parser';
  import { graphqlExpress } from 'apollo-server-express';
  import { grampsExpress } from '@gramps/gramps-express';

  import schemaOne from '@gramps/data-source-one';
  import schemaTwo from '@gramps/data-source-two';

  const app = new Express();
  app.use(bodyParser.json());
  app.use(grampsExpress({ dataSources: [ schemaOne, schemaTwo ] }));
  app.use('/graphql',
    graphqlExpress(req => ({
      schema: req.gramps.schema,
      context: req.gramps.context,
+     formatError: req.gramps.formatError,
    })),
  );
```

## Challenge #3: Make local development easy

Jason needed "to make the right thing the easy thing." Devs don't like change, especially change that is imposed upon them against their will. If Jason's team was to make GrAMPS (and GraphQL in general) successful inside IBM, they needed it to be dead simple for other teams to start using it.

They created a data source starter kit:
* Strong starting point for new data sources
* Step-by-step tutorial for building a new data source
* Unit test coverage starts at 100%
* Pre-configured for Travis CI and Code Climate

Check it out at https://github.com/gramps-graphql/data-source-base.

They also built a CLI for local development:

![GraphQLSummit Selection 032](//images.contentful.com/le3mxztn6yoo/1qp6B7bVzOgqOC0OWA0myK/3284935a9f926a861bac8c084034f38b/GraphQLSummit_Selection_032.png)

This worked well, but there was a snag: How could you run a local instance of the GraphQL microservice if the data source you're developing is already installed? Won't they collide?

The solution was to add an override for local data sources:

```bash
gramps --data-source-dir ./
```

This allows a dev to add a local override for a data source. Obviously, this might mislead some developers when they tried directly deploying their still locally dependent service, but they added multiple warnings to indicate when local data sources were being used.

## Challenge 4: Build for Global Scale

Actually, Apollo's Express server just worked at scale, so they didn't have to do much :)

All in all, development and deployment of the GraphQL microservice was extremely quick. They started development in May and it was in production in July. The main reason for this was they didn't ask for permission and just built it. He highly recommends this approach. It is far better than meetings.

Then the team had a realization:

> If everyone wrote their data sources using this format, the dev community could share GraphQl data sources as easily as we share npm packages.

So they decided to release it under the MIT License: [GrAMPS: GraphQL Apollo Microservice Pattern Server](https://github.com/gramps-graphql/gramps-express) ([npm package](https://www.npmjs.com/org/gramps)). Check it out now!

---
Check out the full slides to Jason's talk here: https://jlengstorf.github.io/presentations/graphql-microservices/slides/#/
