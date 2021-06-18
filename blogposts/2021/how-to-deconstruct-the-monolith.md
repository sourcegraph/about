---
title: 'How to deconstruct the monolith'
author: Marcelo Oliveira
authorUrl: 
description: 'Breaking a monolith down into microservices can seem daunting. We rounded up the tools, patterns, and field-tested methods to guide your efforts towards a successful migration.'
heroImage: https://sourcegraphstatic.com/blog/deconstructing-the-monolith.gif
socialImage: https://sourcegraphstatic.com/blog/deconstructing-the-monolith.gif
publishDate: 2021-06-16T18:00-07:00
tags: [blog]
slug: how-to-deconstruct-the-monolith
published: true
---

![deconstructing the monolith gif](https://sourcegraphstatic.com/blog/deconstructing-the-monolith.gif)

[Monoliths](https://en.wikipedia.org/wiki/Monolithic_application) are the traditional way of building applications. A monolith starts as a small piece of software that grows over time with new features. Unfortunately, this all-in-one software approach makes it difficult to scale our applications. Even when we build a monolith as a well-organized structure, our application’s codebase can become so large that individual developers and teams don’t understand how it all fits together.

In contrast, [microservices](https://en.wikipedia.org/wiki/Microservices) make scalability possible by breaking the application into independent yet integrated components and services. In this architecture, a system can increase or decrease performance and cost by adjusting the resources allocated to the components. With microservices, we can handle the number of instances allocated to each service as needed automatically. This is done using a container orchestration system, such as [Kubernetes](https://kubernetes.io/).

In a distributed system, multiple teams can independently develop different features in separate services. When successfully implemented, a microservices development culture enables each team to be autonomous, requiring minimal coordination to work with other teams. As a result, it boasts improved code quality and long-term code ownership.

This is all great if you build your application with microservices from the outset, but what about existing monolithic applications? Let’s look at some steps you can take to deconstruct a monolith gradually and replace it with a microservices application.

## Step 1: Build alongside it

Modernizing an existing monolith isn't the same as completely replacing it by developing a new, equivalent application based on microservices. Developing a new application would introduce so many risks to the project that rollout would likely fail, causing stakeholders to push for a return to the original monolith.

Successful evolution from monolith to microservices requires building both alongside each other. But a development team should be wary of migrating old code right away. Migrating can be complicated and confusing, especially when the team lacks appropriate planning and guidance.

Instead, start by building new features as microservices. By starting small and building slowly, teams have time to establish expertise in distributed application development. In this period, developers can contribute ideas, make mistakes, and find efficient ways to do things. This time helps teams become prepared for challenging tasks in the future.

Examples of new features that would be suitable candidates to develop as microservices include:


*   A digital notebook that allows students to keep notes, comments, and bookmarks in a learning management system (LMS)
*   A gift card redemption service in an e-commerce application
*   A corporate subscription management service for a video streaming platform

If running in the cloud, consider building initial microservices using services such as [AWS Lambda](https://aws.amazon.com/lambda/), [Azure Functions](https://azure.microsoft.com/en-us/services/functions), or [Firebase Functions](https://firebase.google.com/products/functions). These products implement function as a service (FaaS), a type of serverless computing that allows applications to run in a cloud computing execution model without a need for server provisioning and management.

Cloud functions can ease development efforts in transitioning to microservices. With FaaS and serverless computing, we can run backend code without managing our server systems or applications—giving us time to adapt to the microservices approach. Meanwhile, operations teams can gradually build out and scale a microservice-friendly architecture.

## Step 2: Separate high-traffic services

Distributed systems pose challenges that we don’t have to worry about in a monolith architecture. For example, different backend services communicate with each other across a network. So, networking and observability become critical areas where most operational problems occur.

Developing distributed services requires different tools from developing monoliths. Debugging different processes is not an option. Identifying root causes while transactions run across multiple services is often a complicated and time-consuming task.

This is where distributed tracing comes in. While traditional tracing can deal with requests within a single-process monolith, distributed tracing can track a single request through multiple processes.


### Tracing tools

We can use tracing and analysis tools like [Jaeger](https://www.jaegertracing.io/), [Prometheus](https://prometheus.io/), [OpenTelemetry](https://opentelemetry.io/), and [Grafana](https://grafana.com/) to identify the parts of our monolith that see the most use and traffic. These are ideal points to start splitting code out of our monolith to scale each service separately.


1. **Jaeger** \
Created by Uber, Jaeger is an open-source system for tracing transactions between distributed services. Jaeger components include an agent that listens for transactions between services in the network and sends the trace to another component called the collector. Using Jaeger’s user interface, we can find traces, monitor trace duration, and discover which requests generated errors. Jaeger helps us troubleshoot distributed systems by monitoring, discovering performance issues, and performing root cause analyses.
2. **Prometheus** \
Developed by SoundCloud, Prometheus is an open-source service that works by scraping metrics from HTTP endpoints and building a time series database with the collected results. To help monitor your microservices, Prometheus generates real-time alerts based on the aggregate information whenever it matches user-defined triggers.
3. **OpenTelemetry** \
The open-source observability project OpenTelemetry integrates with Jaeger and Prometheus to capture telemetry automatically. It tracks app requests and observes and debugs our services. Using correlation, OpenTelemetry helps us find the save time in finding the root cause of our services’ problems.
4. **Grafana** \
    With so many tools generating numbers and logs, sometimes it’s hard to make sense of them. To help with this, you can use a tool like Grafana, an open-source visualization and analysis software that works as a frontend for other data sources, including Prometheus. It allows you to create charts and dashboards and share them with others.

## Step 3: Say goodbye to your monolith

Once we split high-traffic and high-load parts of a monolith into microservices, we should split the rest of our monolith along functional lines. For example, this includes authentication, notification, and logging. To help with this task, let’s look at two beneficial microservices patterns: the [strangler pattern](https://martinfowler.com/bliki/StranglerFigApplication.html) and the [branch by abstraction pattern](https://martinfowler.com/bliki/BranchByAbstraction.html).

### The strangler pattern 

The strangler pattern allows us to migrate from a monolithic application to microservices incrementally. It does this by extracting parts of a monolith functionality and introducing them in the new service.

Once we complete this process, the old monolith functionality is “strangled.” That is, we have made it obsolete and phased it out. We can sum this up in three steps:

1. Identifying requests that we can intercept and creating a proxy to pass those requests to the original endpoint and back to the monolith without breaking the functionality
2. Developing and migrating the monolith functionality to the new service
3. Configuring the proxy to route the requests to the new service instead of the old endpoint exposed by the monolith

As the strangler application grows and we replace more functionality with new services, the monolith shrinks over time.

As you can imagine, the strangler pattern is the recommended approach for functionalities already exposed as API endpoints by the monolith. For example, this includes REST and GraphQL APIs and SOAP web services. The benefit of this pattern comes from the fact that we can migrate functionalities without even touching the monolith’s code. But, the feasibility of the strangler pattern depends on the level of modularity presented by the monolith. It also depends on whether or not it exposes its functionalities with public endpoints.

### The branch by abstraction pattern

When we can’t easily intercept calls and create a proxy to reroute the requests, we can benefit from the branch by abstraction technique. It’s like a strategy design pattern applied to a more extensive scope.

Branch by abstraction requires us to modify the existing monolith’s code. It works by implementing the next few steps:

1. Identify the code within the monolith that composes the functionality. This means finding out classes, methods, and parameters without worrying about the actual implementation. Finding those functional lines in a vast monolith codebase is often an arduous task. To make the lives of your microservices developers easier, consider [universal code search](/get-started). It provides a search engine for code across all your repositories and branches, so you can find and filter algorithms, definitions, and references instantaneously.
2. Create the interfaces that compose the functionality’s abstraction. This means creating a new code that defines a new “contract” for classes, methods, and parameters discovered in the previous step. 
3. Refactor the old monolith’s code, ensuring it adheres to the interfaces defined by the new abstraction. Notice that this step doesn’t break or change the existing functionality in any way but decouples the identified functionality from the rest of the monolith. 
4. Implement the new service, ensuring the existing functionality behaves precisely as in the monolith.
5. Create feature flags that allow you to easily switch between the old monolith functionality and the new implementation based on the same abstraction.

Finally, once the new microservice abstraction of the functionality is stable, we must deprecate the old monolith’s functionality. Later, to avoid confusion, we’ll remove it entirely from our source code.

## In summary

Migrating from a monolithic architecture to microservices offers many benefits. These include scalability and the ability to assign many developer teams to build different services simultaneously.

Modernizing a monolithic application is a multi-team development effort. It takes planning and deliberate work to break a monolith into smaller parts. Our tour described how to leverage tools, patterns, and methods tested in the field to guide our efforts towards a safe and consistent microservices development. So, when it’s time to say goodbye to your monolith, you have the knowledge you need to prepare for a successful migration.

### About the author

_Marcelo Ricardo de Oliveira is a senior freelance software developer who lives with his lovely wife Luciana and his little buddy and stepson Kauê in Guarulhos, Brazil. He is the co-founder of the Brazilian TV Guide TV Map and currently works for Alura Cursos Online._
