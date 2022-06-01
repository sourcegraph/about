---
title: 'GopherCon 2018 - gRPC reflection and grpcurl'
authors:
  - name: Alan Shreve for the GopherCon Liveblog
publishDate: 2018-08-29T00:00-06:00
tags: [
  "gophercon"
]
slug: gophercon-2018-grpc-reflection-and-grpcurl
description: 'grpcurl is a CLI tool that can provide a human-friendly CLI experience to dynamically invoke grpc services. Built on top of protobuf descriptors and grpc reflection, we created a set of packages to provide Go APIs to get access to rich protobuf descriptors and grpc reflection as well as packages to allow us to dynamically construct protobuf messages and dynamically invoke grpc services.'
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5Oj3acpp7yysQg04W2AW4A/a93d79c10ad903d3902f6b6d8707973a/mechanic-tire-2.jpg
published: true
---

Presenter: [Joshua Humphries](https://www.gophercon.com/agenda/speakers/279049)

Liveblogger: [Alan Shreve](https://inconshreveable.com)

grpcurl: Dynamic CLI interface for grpc services via protobuf descriptors and grpc reflection.

## Summary

grpcurl is a CLI tool that can provide a human-friendly CLI experience to dynamically invoke grpc services. Built on top of protobuf descriptors and grpc reflection, we created a set of packages to provide Go APIs to get access to rich protobuf descriptors and grpc reflection as well as packages to allow us to dynamically construct protobuf messages and dynamically invoke grpc services.

https://github.com/fullstorydev/grpcurl
https://github.com/jhump/protoreflect

---

## Overview
grpc and protobuf are becoming industry standard technologies for building services,
but interacting with them ad-hoc for human consumption like you do with `curl` for
http services is not as easy.

grpcurl is a tool and associated libraries opensourced by FullStory to solve this problem.
And we'll talk about the pieces and mechanisms in protobuf and grpc that make it possible
to create these libraries and the tool.

### A very quick overview of protobuf and grpc
#### grpc

  - specification for rpcs
  - canonical errors, cancellation, semantics,
  - code generation tools for each language that generate stubs
  - runtime libraries for each language implement the connection, transport protocol, serialization, plugins for load balancing/service discovery etc

#### Protocol Buffers
  - used with grpc
  - IDL (Interface definition language) that we can use to  declare the shape of data structures sent across the wire
  - can be serialized to binary, human readable text, JSON or other formats
  - `protoc` -> the compiler that ingests protobuf definitions and generates code for the message structures in different languages

## Backstory and Motivation

  - at FullStory we have an App Engine app, task queues, cloud data store
  - added search and other services
  - but the only way to talk to other services is by communicating out of app engine via `urlfetch` service, basically an http/1.1 proxy
  - developers wanted to use rpc to talk to these new services because RPC frameworks have an easier to use programming model and benefit from tooling:
    developers can ignore all the transport and serialization logic because the generated code and runtime libraries do the heavy lifting
  - FullStory built a bespoke rpc system on top of http/1.1 to work through urlfetch/appengine. this solution predates grpc
  - since then, we've migrated to k8s/grpc for as much as we can
  - now all new services run on k8s and use grpc but there's a small bridge piece to allow the app engine service to communicate to them via urlfetch

#### Motivation for grpcurl

  - at FullStory, there's an internal administration service called `commander`. It's a grpc service and there was a CLI tool that would just parse command line flags
    and then make grpc calls to the server.
  - that was great except that whenever there is a new grpc method added to the commander service then a developer would have to write a bunch of boilerplate code
    to expose that method in the CLI by creating flags and parsing them into a protobuf structure and displaying the result.
  - also means that everyone needs to update their CLI binary
  - question arose: "can we do it all dynamically? can we ask the server what operations it supports and how to invoke them?"
  - in Go, we can do this with `reflect` package, but with a remote service, it would seem like we don't have anything to reflect, but there are mechanisms in protobuf/grpc to reflect out their values

## Protobuf/GPRC reflection

### Proto Reflection
  - proto 'descriptors': language model for protocol buffer definitions
  - they're protobufs as well and this is actually what you use to write protoc plugins! (protobuf is described in protobuf)
  - normally the way we interact with protobuf messages is via a serialized go structure, but we want to work with *dynamic* messages, ones that we don't have a struct for. dynamic messages will need to support any kind of message
  - Java and C++ have extensive support for protobuf descriptors and dynamic messages, but not really in Go
  - go protoc generates descriptors in the generated code, but support is limited, not really intended for public usage
  - go protoc also has a global registry for types, Enums, extensions that we'll need later
  - there's currently work just starting on a v2 of the proto runtime for Go
  - I started to hack on these problems over a vacation: both descriptors and dynamic messages

#### Descriptors
  - take the limited descriptor that protoc generates for us and turn it into a much richer descriptor with better type/field information
  - gives us access to rich messages, Enums, extensions
  - created packages:
    - one to "upgrade" the limited descriptor into a rich one
    - protoparse - allows us to parse proto source code
    - another to allow programmatically *constructing* proto descriptors

#### Dynamic Messages
  - created a package for dynamic messages
  - implements `proto.Message` so it can be used in place of the structures generated by typical protoc go
  - but has a broad API for querying/mutating field values and doing serializing/deserializing
  - construct with a message descriptor

### GRPC reflection
  - okay we have dynamic protobufs but how do we do it with rpc?
  - whole purpose of this is so that a client can ask a server for all of its methods and type signature so we can auto-generate CLI calls to them
  - service reflection!

#### Reflection
  - there's a grpc reflection service, you can import it from grpc-go. (it's a streaming call, a little clunky to use)
  - you can enable it on any existing grpc service via an option when constructing your grpc server object
  - but what if we don't/can't use server reflection? still OK, we can do 'reflection' by passing in the source proto files of the server
  - created a gRPC reflection package
    - a client for the grpc reflection service
    - wraps around the native grpc reflection client implementation that makes it easier to use, caching, etc

#### Dynamic Stub
  - dynamic stubs: unlike the generated code which are all tailored to a particular rpc call
  - grpcdyanmic package:
    - has NewStub() that you wrap around a grpc.ClientConn to allow us to dynamically invoke methods on the server with a method per rpc type Unary/Unary, Unary/Stream, Stream/Unary, Stream/Stream,

## grpcurl
  - now we can tie it all together
  - command line tool that allows you to call methods on remote grpc services for humans: simple command line flags, JSON representation
  - there's a command line tool like this in the grpc repo but doesn't support streaming
  - not just a command line tool, but also a package that simplifies construction of other command line clients
  - grpcurl allows you to list services, find symbols, create descriptors from reflection or from sources
  - meat of the package is a single function that allows us to invoke any rpc method, signature a bit more complicated, `InvokeRpc`
  - use it to invoke methods but we can also use it to explore available methods
  - `grpcurl list`: show all services
  - `grpcurl list <Service>`: show all methods on the service
  - `grpcurl <Service>.<Method>`: invoke a method
  - use `-H` to supply header metadata (like curl)
  - `grpcurl describe <fully qualified service method>`: describes input/output types and rpc mode (unary vs streaming) of the method
  - `grpcurl describe <fully qualified Protobuf Message>`: prints out protobuf descriptor in JSON format
  - still clunky to call methods because we have to manually type out JSON object on the command line. how do we make it easier to construct the payload to send as arguments?  method template command line option on `describe` causes the command to dump an example payload we can modify
  - like curl, we specify `-d` to send input arguments OR `-d @` to provide via stdin
  - grpcurl supports streaming, including bidirectional!
  - streaming with `-d @` so that you can write via stdin; example with streaming chat
  - streaming calls aren't great for human use, but it's really great for scripting and tooling where you can pipe things into jq and then into grpcurl
