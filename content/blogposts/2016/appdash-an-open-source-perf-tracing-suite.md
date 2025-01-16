---
title: 'Appdash, an open source perf tracing suite'
authors:
  - name: Quinn Slack
    url: https://twitter.com/sqs
publishDate: 2016-05-30T00:00-07:00
tags: [
  "blog"
]
slug: appdash-an-open-source-perf-tracing-suite
description: 'Every developer knows they should instrument their app to identify perf bottlenecks, but it's hard to actually get around to doing it.'
heroImage: https://images.ctfassets.net/le3mxztn6yoo/2cqIONdy7Ccumacy4eCC8W/bf4a730c417954a3c7a30394cd8ddd51/0_jXkIPsoJBjXY80cs.png
published: true
---



Every developer knows they should instrument their app to identify perf bottlenecks, but it's hard to actually get around to doing it — especially when you're focused on shipping the latest and greatest features of your site.

![0*jXkIPsoJBjXY80cs](//images.contentful.com/le3mxztn6yoo/2cqIONdy7Ccumacy4eCC8W/bf4a730c417954a3c7a30394cd8ddd51/0_jXkIPsoJBjXY80cs.png)

Today we're announcing [Appdash, an open source multi-language distributed performance and tracing suite](https://github.com/sourcegraph/appdash) that makes tracing the performance of web apps a breeze. Appdash is used to monitor [Sourcegraph](https://sourcegraph.com/), which semantically indexes and serves the code of over a million repositories. It is currently usable from applications written in Go and Python. We hope to add support for more languages in the future with help from the community. ([Submit an issue](https://github.com/sourcegraph/appdash/issues) if you'd like to add support for your language of choice!)

There are two primary parts to Appdash:

*   A Go library (also compatible with Python) that integrates with your web app to record performance and debug information.
*   A web-based UI that can run as part of your web app or as a standalone site (shown in the screenshot above).

This post will walk you through an example app that uses Appdash and cover exactly how you can integrate Appdash into your Go web app to start monitoring real-time perf today.

### Quickstart

If you don't already have Go, [install that first](https://golang.org/doc/install). Then install Appdash by running:

<pre name="27e2" id="27e2" className="graf graf--pre graf-after--p">go get -u sourcegraph.com/sourcegraph/appdash/...</pre>

This will also install the example web app in the Appdash repository that demonstrates the basic features of Appdash. Let's run that first:

<pre name="c9e1" id="c9e1" className="graf graf--pre graf-after--p">$ go get -u sourcegraph.com/sourcegraph/appdash/...
$ webapp
2015/04/27 20:40:56 Appdash web UI running on HTTP :8700
[negroni] listening on :8699</pre>

Now, point your browser at localhost:8699\. This loads the main page of the sample web app, which issues three API requests on the backend. You can view the trace of this page load by clicking on the link in the interface, which opens up the Appdash UI for the trace.

The best way to learn how to use something is by example. So let's take a look at the [source code for this example Go app](https://sourcegraph.com/github.com/sourcegraph/appdash/-/blob/examples/cmd/webapp/main.go). Note that this app uses [Negroni](https://github.com/codegangsta/negroni) and the [Gorilla Toolkit](http://www.gorillatoolkit.org/), but these are not requirements to use Appdash.

For our example purposes, the app has two routes:

*   /: The root route, which is visited by users inside their web browser.
*   /endpoint: an API endpoint.

The API endpoint code pauses for 200ms, to simulate slowness that in a real application might be due to hitting the database or some external service. When a user visits the root route (/), the backend makes three outbound API requests before responding to the user.

### Appdash data model

Appdash is heavily influenced by the [Dapper](http://research.google.com/pubs/pub36356.html) data model and has 4 main concepts:

*   [**Spans**](https://sourcegraph.com/sourcegraph.com/sourcegraph/appdash@master/.GoPackage/sourcegraph.com/sourcegraph/appdash/.def/SpanID): A span refers to an operation and all of its children. For example, an HTTP handler handles a request by calling other components in your system, which in turn make various API and DB calls. The HTTP handler's span includes all downstream operations and their descendents; likewise, each downstream operation is its own span and has its own descendents. In this way, appdash constructs a tree of all of the operations that occur during the handling of the HTTP request.
*   [**Event**](https://sourcegraph.com/sourcegraph.com/sourcegraph/appdash@master/.GoPackage/sourcegraph.com/sourcegraph/appdash/.def/Event): Your application records the various operations it performs (in the course of handling a request) as Events. Events can be arbitrary messages or metadata, or they can be structured event types defined by a Go type (such as an HTTP [ServerEvent](https://sourcegraph.com/sourcegraph.com/sourcegraph/appdash@master/.GoPackage/sourcegraph.com/sourcegraph/appdash/httptrace/.def/ServerEvent) or an [SQLEvent](https://sourcegraph.com/sourcegraph.com/sourcegraph/appdash@master/.GoPackage/sourcegraph.com/sourcegraph/appdash/sqltrace/.def/SQLEvent)).
*   [**Recorder**](https://sourcegraph.com/sourcegraph.com/sourcegraph/appdash@master/.GoPackage/sourcegraph.com/sourcegraph/appdash/.def/Recorder): Your application uses a Recorder to send events to a Collector (see below). Each Recorder is associated with a particular span in the tree of operations that are handling a particular request, and all events sent via a Recorder are automatically associated with that context.
*   [**Collector**](https://sourcegraph.com/sourcegraph.com/sourcegraph/appdash@master/.GoPackage/sourcegraph.com/sourcegraph/appdash/.def/Collector): A Collector receives Annotations (which are the encoded form of Events) sent by a Recorder. Typically, your application's Recorder talks to a local Collector (created with [NewRemoteCollector](https://sourcegraph.com/sourcegraph.com/sourcegraph/appdash@master/.GoPackage/sourcegraph.com/sourcegraph/appdash/.def/NewRemoteCollector). This local Collector forwards data to a remote appdash server (created with [NewServer](https://sourcegraph.com/sourcegraph.com/sourcegraph/appdash@master/.GoPackage/sourcegraph.com/sourcegraph/appdash/.def/NewServer) that combines traces from all of the services that compose your application. The appdash server in turn runs a Collector that listens on the network for this data, and it then stores what it receives.

Appdash supports storing data in different underlying **Stores**. The example code uses an [appdash.MemoryStore](https://sourcegraph.com/sourcegraph.com/sourcegraph/appdash@master/.GoPackage/sourcegraph.com/sourcegraph/appdash/.def/MemoryStore) wrapped in an [appdash.RecentStore](https://sourcegraph.com/sourcegraph.com/sourcegraph/appdash@master/.GoPackage/sourcegraph.com/sourcegraph/appdash/.def/RecentStore). This means that the data is stored in memory for 20 seconds before being evicted and discarded (which is useful for applications with storage limitations). You can also store data in a SQL database. It's easy to add support for other databases, as well. You just need to implement the [PersistentStore](https://sourcegraph.com/sourcegraph.com/sourcegraph/appdash@master/.GoPackage/sourcegraph.com/sourcegraph/appdash/.def/PersistentStore) interface.

### Integrating Appdash into your app

There are two ways to run the Appdash web UI. You can either use appdash serve on the command line or embed the UI directly into the application that is being monitored, in which case Appdash will run in-process and listen on a separate port. The [example app](https://sourcegraph.com/github.com/sourcegraph/appdash/-/blob/examples/cmd/webapp/main.go) does it the second way.

In a production environment, you could either use a centralized Appdash server or simply block the Appdash port from external access via your firewall. To embed the web UI into our app, we use the appdash/traceapp package.

To integrate Appdash into your app, you'll need to create a Collector to collect Annotations (the encoded form of Events) for a given Span provided by a Recorder. In the [example code](https://sourcegraph.com/github.com/sourcegraph/appdash/-/blob/examples/cmd/webapp/main.go), the collector runs in process, but it can also be a remote service run via appdash serve.

To create our local collector, we simply give it an appdash.Store.

### The httptrace Middleware

Lastly, we need to create and configure our appdash/httptrace.Middleware, which hooks into your web app's HTTP handler and pulls the necessary timing and meta-data information (e.g., HTTP headers, status codes, etc.) and generates Events for the Collector to consume.

The RouteName field is simply a function that returns the name of the URL route for a given HTTP request. In the case of the example app, we simply use the request's path (r.URL.Path). If you are using a routing library like Gorilla mux, you would probably assign it the name of the mux.Route. The route name will be displayed on the span in the web UI.

The SetContextSpan field lets you store a appdash.SpanID of an HTTP request. In our case, we simply use gorilla/context to associate it locally with the request for future use. We will explain below why you would want to know the span ID.

### The httptrace Transport

If your web app makes HTTP requests to other services (these can be external services or an internal API if it's run as a separate service), Appdash can keep track of a thread of execution _across HTTP boundaries_. This means if an application endpoint (that generates dynamic HTML) makes a call to an API endpoint over the course of its execution, Appdash will be able to associate the specific API request with the specific application request.

This is done by supplying a special http.Transport to the HTTP client that issues the request inside your app. To do this, wrap the existing http.Transport in an instance of appdash/httptrace.Transport. You can then use the http.Client as you would any other http.Client.

### Linking to the Trace

Let's say that a user of your application has reported to you that it's responding very slowly to their requests. With thousands of people using the service everyday, browsing through the list of all traces hoping to find the trace corresponding to their request is like trying to find a needle in a haystack.

Appdash solves this problem by giving you access to the appdash.SpanID for a given request in the SetContextSpan function for the httptrace.Middleware described above. Earlier, we used gorilla/context to associate the SpanID with the request. And we can render the span IDright into our very simple web page (perhaps in an HTML comment if you didn't want it to be visible to all users).

Now, a user who is experiencing performance issues with our site can directly give us the trace ID of a slow request. Alternatively, you could create an automated system to do this whenever a user reports an issue from a slow page.

### Start tracing today!

Appdash is completely open source. You can [view the source here](https://github.com/sourcegraph/appdash), along with the [source of the example web app that uses it](https://sourcegraph.com/github.com/sourcegraph/appdash/-/blob/examples/cmd/webapp/main.go).

Appdash is an incredibly versatile and easy-to-deploy performance and debug tracing suite for web applications. It supports Go and Python, and we'd love to add more languages with help from the community. It's being used today in production applications at Sourcegraph, and we hope you'll find it useful for your own web app.

So [check out the source](https://github.com/sourcegraph/appdash), or [file an issue or feature request](https://github.com/sourcegraph/appdash/issues). And while you're at it, [check out Sourcegraph](https://sourcegraph.com/), which is the best way to discover and understand code — and which was the first site to ever use Appdash.

### About the author

_Quinn Slack is the CEO and co-founder of Sourcegraph, the code intelligence platform for dev teams and making coding more accessible to more people. Prior to Sourcegraph, Quinn co-founded Blend Labs, an enterprise technology company dedicated to improving home lending and was an egineer at Palantir, where he created a technology platform to help two of the top five U.S. banks recover from the housing crisis. Quinn has a BS in Computer Science from Stanford, you can chat with him on Twitter [@sqs](https://twitter.com/sqs)._
