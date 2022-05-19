---
title: "GopherCon 2019 - How Uber 'Go'es"
description: "Maintaining a large codebase with maximum readability and minimal overhead is hard. This is the story of how Go went from a few enthusiastic Gophers to the most popular language for microservices at Uber. Learn where we failed, and how that led us to solutions that we think are pretty darn neat!"
authors:
  - name: Ian Molee for the GopherCon 2019 Liveblog
publishDate: 2019-07-25T00:00-09:50
tags: [
  gophercon
]
slug: gophercon-2019-how-uber-go-es
heroImage: https://about.sourcegraph.com/gophercon2019.png
published: true
---

Presenter: [Elena Morozova](https://twitter.com/lelenanam)

Liveblogger: [Ian Molee](https://twitter.com/ianfoo)

## Overview

Maintaining a large codebase with maximum readability and minimal
overhead is hard. This is the story of how Go went from a few
enthusiastic Gophers to the most popular language for microservices at
Uber. Learn where we failed, and how that led us to solutions that we
think are pretty darn neat!

---

## Go at Uber, and problems with its rapid growth

Uber started using Go around 2015. Immediate gains were clear, and the
use of Go exploded. Within a year, there were hundreds of Go services,
but there was no standardized way to create and deliver Go services.

When creating a new service, the same questions that had been answered many
times before in existing services had to be answered again. For example,
deciding how to structure the code, and deciding what libraries and
dependencies to use. The cost of context switching between working on one
service to working on another was high, since each service was implemented
arbitrarily and might be completely different from any other one. Delivering
global features was hampered by the amount of coordination required between
services and teams.

It was clear that the growth of Go at Uber brought unmanaged complexity with
it, that something needed to be done to provide a more consistent,
predictable, and efficient solution for developing and delivering services.

Uber identified three areas that would address the emergent complexity:

- Using dependency injection
- Standardizing code structure across services
- Switching from many code repositories to a monorepo

## Dependency injection

Services have standard types of dependencies, and these dependencies
themselves often require configuration. For example, every service needs
a logger. But which logger? And what sort of format or logging level
should it use? And how about the server that will handle requests? What
should the limits for maximum header size be? And how long should the
server wait before timing out?

Leaving individual services to make these decisions provided multiple ways
for implementors to diverge from any sort of standardized approach, and in
isolation this exactly what happens. To this end, Uber started using
dependency injection to provide a consistent baseline for services to build
upon.

A dependency injection (DI) container is configured with sensible defaults
outside of the individual services, and services call constructors defined in
the DI container to get their dependencies without having to worry about
implementation or configuration details. Using a DI container also makes it
easy to make changes to existing services, since it centralizes the
dependency graph and configuration: dependencies can be added to or changed
in dependent services by modifying the DI container, rather than all the
dependent services.

Uber created [Fx](https://github.com/uber-go/fx) to provide dependency
injection.

![Dependency
injection](/gophercon-2019/gophercon-2019-uber-dependency-injection.jpg "Uber
dependency injection")

## Standardizing code structure

Lack of consistently structured projects made switching between working on
different services a headache. For example, if an engineer were given the
task of making a REST service speak [gRPC](https://grpc.io), this would first
involve learning how the service is structured, identifying the places where
the changes need to be made, and determining what those changes should be. In
some cases, large portions of the service might need to be rewritten if parts
that needed updating were not cleanly encapsulated, like unmarshalling JSON
inside business logic.

In order to promote a consistent structure across services, Uber identified
the following areas to be cordoned off from business logic controllers:

- **Handlers** are responsible for receiving requests from clients and
  sending responses back to to clients. HTTP+JSON and gRPC are two kinds of
  transports, for example. By not allowing transport specific details to leak
  into the business logic, a service can plug in transports for any number of
  protocols and hand off processing to pure business logic that is not
  concerned with communicating with clients.
- **Repositories** abstract data storage behind a common interface,
  allowing services to persist data to and retrieve data from any number or
  type of storage backends.
- **Gateways** provide a standard mechanism for communicating with external
  services (e.g., payment, email).

With these concerns cordoned off, a service can focus primarily on the
business value that it should provide, and let standard implementations for
handlers, repositories, and gateways deal with specifics of moving data in
and out of the business logic.

In order to support this development model, Uber created a tool called Glue,
inspired by concepts outlined in _[Clean
Architecture](https://www.oreilly.com/library/view/clean-architecture-a/9780134494272/)_.
Glue is used to initialize new services with consistent code structure.

![Consistent code
structure](/gophercon-2019/gophercon-2019-uber-code-structure.jpg "Uber's
divisions of services into transports, controllers, repositories, and
gateways")

## Switching to a monorepo

Uber was initially using many repositories for its services. The boundaries
created by all the separately-maintained repos made coordination difficult,
and meant that there could be many versions of common libraries, spread
across all the separate repos. If a library needed to deliver a new feature,
or--more critically--a security update to its consumers, there was no
guaranteed way to propagate the change to dependent projects, ensuring that
projects actually brought in the latest code. (Shockingly, asking nicely on
Slack doesn't always work.)

Even if everyone updated their services, it meant there was lots of
duplicated work as hundreds of repositories needed to be updated individually
to use updated dependencies.

Uber created a monorepo to eliminate the problems of lagging updates and
duplicated work by putting all the code in a single repo. There's no
more concept of internal dependency versions: the latest version in the
repository is the dependency that is the only version that matters.
Every service is inherently updated by a single commit to the
dependency, because the dependency code is compiled into its consumers
right from the single repository, not a managed dependency.

![Before the monorepo](/gophercon-2019/gophercon-2019-uber-monorepo.jpg "Gopher
surrounded by fire saying 'this is fine' about deploying global features
before the monorepo")

## Takeaway

Through the changes described above, Uber greatly increased the consistency
of the developer experience for creating Go services, and this has directly
affected the efficiency of creating and maintaining Go services, allowing
them to scale to over a thousand Go services containing over 20 million
lines of Go code!

![Consistency is the key to
efficiency](/gophercon-2019/gophercon-2019-uber-consistency.jpg "Consistency is
the key to efficiency")
