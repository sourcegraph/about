---
title: 'What went wrong? Best Practices for Surfacing Error Messages in a GraphQL API'
authors:
  - name: '@attfarhan'
publishDate: 2017-10-26T00:00-07:00
tags: [
  "graphql"
]
slug: what-went-wrong-best-practices-for-surfacing-error-messages-in-a-graphql-api
heroImage: https://images.ctfassets.net/le3mxztn6yoo/2YBGlmUKd2YI20SKKaQk4U/96abd1cef08936f9fec31818980516a3/graphql.png
published: true
---


Dhruv Kapadia is a backend developer at Khan Academy, where their mission to provide a free, world-class education to anyone, anywhere.

Khan Academy started using GraphQL in production 9 months ago.  They had a large existing API but found GraphQL easy to adopt.

Today Dhruv will talk about how the team at Khan Academy has made some mistakes handling GraphQL errors and the lessons learned as a result.

Errors are inevitable  in any API, and there are many different types of errors.

## Some errors are not errors at all

Diving right in, one of the major lessons they've learned is that some errors should not be treated like errors.

He'll walk us through a simple example of a sign-up form that requires email validation, and explain how to handle errors in GraphQL, and why the first approach they took is not ideal.

This flow is simple enough: we create a mutation to add a user, and if successful we ask for the user's ID and email of the newly created user back.  On the server, if the user exists, throw an error.  Otherwise, create the user.

![Kapadia-1](//images.contentful.com/le3mxztn6yoo/5Sarv3gkJUcyIqceI8QKS2/1918c9b9e627d628a7ccb74b98da9916/Kapadia-1.png)

If we are unsuccessful, the response may look like this, where the value in createUser is null, and we can handle this in the UI:

![Kapadia-2](//images.contentful.com/le3mxztn6yoo/3YwhTmGJYAsUgemMyMEAAy/cbd65170e30504fbb6c9026e2bf191ef/Kapadia-2.png)

But what about adding another validation step, for example, adding password validation.  We could add another error to the errors list, and throw two errors.  But how do we know which error goes with which field? We could hard code this or add extra parameters to determine which field goes with which errors. This is a brittle approach that isn't scalable. It feels like you're standardizing and depending on the format and schema of an error.  We're also implicitly querying for any errors that might happen, which goes against the principles of GraphQL being explicit.

Rather than having errors be implicit, we can treat errors as just another type of data that we're querying for. We can treat the success of the mutation as a boolean:

![Kapadia-3](//images.contentful.com/le3mxztn6yoo/4szlHWb99C28gewC0620u6/357fb8e35ec60c25992c01c7d2d80bff/Kapadia-3.png)

We now get that error that has a field and a message, and we can query for the list of userErrors.

So this brings us to our first lesson:

**Build validation errors into your schema**.  Treat errors as data!

## Errors should be monitored

Internally, Khan Academy has a dashboard that keeps track of the number of requests that end up as 500 errors.  When they started deploying GraphQL, they missed issues that should've been detected.

This was a result of treating errors
as data rather than errors.  Traditionally, they'd deploy code that throws errors. The case of the email validation would've thrown an error.  However, using this new approach, failed email validations would have a status code of `200 OK` since an error is not thrown. So existing tools treated didn't detect these as errors.

So how do you track these errors? Just log an error when the error case occurs, and don't necessarily rely on the error code.

![Kapadia-4](//images.contentful.com/le3mxztn6yoo/3CuHBPr6vCOuiwCI4WiUSi/1cfe744008ab261f2af5277d3af43e38/Kapadia-4.png)

This is lesson 2: **Ensure errors are tracked**

## Errors should be actionable

Errors are good debugging tools.  Errors help especially when you're working on a new API.

Internally at Khan Academy, errors would usually give you a stack trace telling you what exactly went wrong.  When rolling out GraphQL, they'd just get a string of the error.  No stack traces led to confusion in what part of a query actually caused a problem.

The lesson here is simple: **provide as much information as possible to make errors actionable**

To conclude, here are the main takeaways:

* Some errors are data
* Ensure errors are being tracked
* Make errors actionable
