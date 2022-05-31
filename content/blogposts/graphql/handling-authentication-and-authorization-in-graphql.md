---
title: 'Handling Authentication and Authorization in GraphQL'
authors:
  - name: '@felixfbecker'
publishDate: 2017-10-26T00:00-07:00
tags: [
  "graphql"
]
slug: handling-authentication-and-authorization-in-graphql
heroImage: https://images.ctfassets.net/le3mxztn6yoo/2YBGlmUKd2YI20SKKaQk4U/96abd1cef08936f9fec31818980516a3/graphql.png
published: true
---


Ryan Chenkie ([@ryanchenkie](https://twitter.com/@ryanchenkie)) is a developer advocate at Auth0, a Google Developer Expert and teaches a lot about Angular and GraphQL.

## Phoenix

Phoenix is a tool built by Auth0 that allows new employees to get permissions to the GitHub org, npm org, etc. by asking the Phoenix bot on Slack.

## How to do authentication and authorization to GraphQL?

The usual response to this question from the GraphQL community is "However you want". The reason for that is that the GraphQL spec is not opnionated about auth.


API auth needs to answer a few questions:

- Is the requested data private?
- Does the request contain authentication/authorization information?
- Is that information valid?

## Typical auth in REST

Authentication in REST could look like this in an Express API:

We want something similar in GraphQL, but not like this:


## We need something that

* Isn't a catch-all
* Gives us info on the authenticated user
* Allows us to handle auth errors appropriately

First we need to verify authentication:

```js
const jwt = require('express-jwt');
  const jwtDecode = require('jwt-decode');

  const jwtMiddleware = jwt({ secret: 'some-strong-secret-key' });

  const getUserFromJwt = (req, res, next) => {
    const authHeader = req.headers.authorization;
    req.user = jwtDecode(authHeader);
    next();
  }

  app.use(jwtMiddleware);
  app.use(getUserFromJwt);
```

This example extracts a JWT from the request and attaches it to the request.

Now we can use the payload in our resolvers:
```js
const resolvers = {
    Query: {
      articlesByAuthor: (_, args, context) => {
        return model.getArticles(context.user.sub);
      }
    }
  }
```
We can also do authorization checks:
```js
 const resolvers = {
    Query: {
      articlesByAuthor: (_, args, context) => {
        const scope = context.user.scope;
        if (scope.includes('read:articles')) {
          return model.getArticles(context.user.id);
        }
      }
    }
  }
```


**This can get a bit repitive.** One option to avoid that is to wrap resolvers:

```js
const checkScopeAndResolve = (scope, expectedScope, controller) => {
    const hasScope = scope.includes(expectedScope);
    if (!expectedScopes.length || hasScope) {
      return controller.apply(this);
    }
  }

  const controller = model.getArticles(context.user.id);

  const resolvers = {
    Query: {
      articlesByAuthor: (_, args, context)
        => checkScopeAndResolve(
             context.user.scope,
             ['read:articles'],
             controller
          );
    }
  }
```


We can check the JWT in the wrapper:

```js
import { createError } from'apollo-errors';
  import jwt from'jsonwebtoken';

  const AuthorizationError = createError('AuthorizationError', {
    message: 'You are not authorized!'
  });

  const checkScopeAndResolve = (context, expectedScope, controller) => {
    const token = context.headers.authorization;
    try {
      const jwtPayload = jwt.verify(token.replace('Bearer ', ''), secretKey);
      const hasScope = jwtPayload.scope.includes(expectedScope);
      if (!expectedScopes.length || hasScope) {
        return controller.apply(this);
      }
    } catch (err) {
      thrownew AuthorizationError();
    }
  }
```

image


## Custom Directives

What if we want to limit access to specific fields? Custom directives give our queries more power:


```graphql
query Hero($episode: Episode, $withFriends: Boolean!) {
    hero(episode: $episode) {
      name
      friends @include(if: $withFriends) {
        name
      }
    }
  }
```

We can use custom directives on our server:

```js

  const typeDefs = `

    directive @isAuthenticated on QUERY | FIELD
    directive @hasScope(scope: [String]) on QUERY | FIELDtypeArticle {
      id: ID!
      author: String!
      reviewerComments: [ReviewerComment] @hasScope(scope: ["read:comments"])
    }typeQuery {
      allArticles: [Article] @isAuthenticated
    }
  `;
```

which are defined like this:

```js
const directiveResolvers = {
    isAuthenticated(result, source, args, context) {
      const token = context.headers.authorization;
      // ...
    },
    hasScope(result, source, args, context) {
      const token = context.headers.authorization;
      // ...
    }
  };

  const attachDirectives = schema => {
    forEachField(schema, field => {
      const directives = field.astNode.directives;
      directives.forEach(directive => {
        ...
      });
    });
  };
```

This is what https://github.com/chenkie/graphql-auth does for you.

With this pattern we get

* A clean API
* Possibility for per-field authorization checks
* Resolver-level authentication checks

## There are many ways to do auth in GraphQL

Everyone has its own opinion about how to do auth in GraphQL, for example some say that the API layer shouldn't have any concept of auth at all.

Try a few, see what works best, combine them if you want.
