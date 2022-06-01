---
title: 'GopherCon 2018 - Going Serverless'
authors:
  - name: Ryan Blunden for the GopherCon Liveblog
    url: https://twitter.com/ryan_blunden
publishDate: 2018-08-29T00:00-06:00
tags: [
  "gophercon"
]
slug: gophercon-2018-going-serverless
description: 'In this talk, Kelsey demonstrated what a simple Serverless application looks like.'
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5Oj3acpp7yysQg04W2AW4A/a93d79c10ad903d3902f6b6d8707973a/mechanic-tire-2.jpg
published: true
---

Presenter: [Kelsey Hightower](https://www.gophercon.com/agenda/speakers/279053)

Liveblogger: [Ryan Blunden](https://twitter.com/ryan_blunden)

## Summary

In this talk, Kelsey demonstrated what a simple Serverless application looks like, highlighted some best practices and inspired Go developers who haven't experimented with Serverless yet to give it a try. While he doesn't suggest we all rewrite our existing applications in individual functions, for evented workflows, serverless does offer some compelling use-cases.

## What is Serverless?

Kelsey is comfortable with containers and Kubernetes as that's his world. Coming to Serverless from that world, it was an interesting experience.

What is "Serverless"? Pretty bad name as that describes a lot of stuff. Managed email, cloud blob storage, managed databases etc.

To set the context of Serverless for his talk, we're talking about a Go developer that wants to write functions that react to events and are hosted on a Cloud Function as a Service (FaaS) platform.

**ANNOUNCEMENT**: Native support for Google Cloud Functions in Go are in Alpha.

## Embrace the black box but increase observability

Some devs when coming to the Serverless world might say:

> I don't want to give up control to this black box.

But you've already yielded a lot of that control to your language of choice, your framework etc.

What's important is making observability a priority. So while the function hosting environment remains a black box, how our code is running is not. Tools like [Open Census](https://opencensus.io/) are essential.

## Defining Serverless

Kelsey breaks it down nicely.

**Functions**
Programming logic written to perform a specific task.

**Events**
A response to something that happens in the cloud. Can be a cloud trigger (file uploaded to blog storage), your own event, or a webhook that hits an API gateway that in turn, triggers a function.

**Managed services**
Pay per use; fully managed.

## What does it take to be production ready for serverless?

Let's see what [Stack Overflow says](https://stackoverflow.com/questions/52075778/what-does-a-production-ready-google-cloud-function-look-like).

It seems Kelsey is going to keep contributing to that question.

## How to you write Go serverless?

Not a comprehensive list:

 - Vendor all of your dependencies (Kelsey uses modules).
 - Lazy load config for the first time around (only do setup work once, functions can be re-used).
 - Be wary of your cold start time.
 - Test locally as much as possible without needing to hit cloud resources.
 - If using a database, set the max connections to 1 so you don't exhaust your db connections.

## Serverless Tools

**API Gateway**: Map an HTTP endpoint to a function call.
**Logging**: Feed your logs to a log aggregation service.
**Storage**: Your function can be deleted at any time so not persistent storage. Managed databases, blob storage etc.
**Tracing**: Kelsey used [Open Census](https://opencensus.io/) in his talk.

Tracing is vital as without it, it's almost impossible to debug issues.

Thanks to Kelsey for a great and entertaining talk!
