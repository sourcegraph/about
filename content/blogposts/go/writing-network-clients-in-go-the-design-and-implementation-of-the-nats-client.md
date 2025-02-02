---
title: 'Writing Network Clients in Go: The Design and Implementation of the NATS Client'
authors:
  - name: Waldemar Quevedo
publishDate: 2017-07-14T00:00-07:00
tags: [
  "gophercon"
]
slug: writing-network-clients-in-go-the-design-and-implementation-of-the-nats-client
heroImage: https://images.ctfassets.net/le3mxztn6yoo/6OiLu7yVkkie2um2EyCYoY/23be476b4f7c8b14b293a223e3bff599/waldemar.jpg
published: true
---


Liveblog by Carlisia Pinto ([@carlisia](https://twitter.com/carlisia))

## About the speaker

Waldemar [@wallyqs](https://twitter.com/wallyqs) is a Senior Software Engineer at Apcera, where he develops the Apcera Trusted Platform and is part of the NATS team. Previously, he formed part of the PaaS team at Rakuten in Tokyo which was one of the early adopters of CloudFoundry for production usage where he experienced operating NATS for the first time, and became a fan of its simplicity.


## About this talk


In this talk, Waldemar shares insights about the NATS project and its protocol, and the design and implementation of a Go client that follows the protocol for NATS.



NATS is a messaging system that is open source with the MIT license, sponsored by Apcera. Originally it was developed in Ruby in 2009, then rewritten into Go in 2012. NATS can be found on GitHub here: [https://github.com/nats-io](https://github.com/nats-io).



Usually NATS is used for:



* Building microservices control planes

  * Internal communication among components

* Service discovery

* Low latency request response

* RPC fire and forget pubsub



Waldemar points out that there are other solutions to solve these problems, but that what makes NATS interesting is its simple and lightweight design:



* It is a TCP/IP based system, where clients use an always established connection to the server and communicate using a very simple plain text protocol with few number of commands.



* It has a very easy to use API built on pure pubsub.



* The binary of the server is pretty small, just around 7MB. Takes few configuration options.



* And very importantly to note, it is a fire and forget system, it does not have any built-in persistence of messages. In terms of delivery guarantees, it provides at-most-once delivery guarantees.



Waldemar emphasizes that this mode of guarantee may sound like a limitation, but that if we go back to the basics to the ‘End-To-End Argument in System Design' under the section of delivery guarantees we can read that:



> lower lever subsystem may be actually wasting its effort providing a function which that must be by nature be implemented at the application level anyway” “For example in the case of a transport system, can easily return an acknowledgement to the sender for every message delivered to a recipient.



> But in practice this acknowledgement may only be useful as an optimization for doing congestion control, as knowing for sure that the message as delivered to the target host is not very important.



> What the application wants to know is whether or not the target host acted on the message…



![Alien](https://images.ctfassets.net/le3mxztn6yoo/30a7Kq972ogM0skiyuAcwG/2fda4f8195d05dc8d1bf274b02951d69/alien.png?h=250)

References:

* End-To-End Arguments In System Design (J.H. Saltzer, D.P. Reed and D.D. Clark) - [https://en.wikipedia.org/wiki/End-to-end_principle] and [https://web.mit.edu/Saltzer/www/publications/endtoend/endtoend.txt](https://web.mit.edu/Saltzer/www/publications/endtoend/endtoend.txt)

* Recommended Talk: "Design Philosophy in Networked Systems" by Justine Sherry (PWLConf'16) - \[https://www.youtube.com/watch?v=aR_UOSGEizE](https://www.youtube.com/watch?v=aR_UOSGEizE)


Waldemar spoke about another project, NATS streaming, which supports the at-least-once delivery features for NATS. It is a layer on top of NATS core, and enhances it with message redelivery features and persistence.

For the NATS project, in order to support at-least once delivery features, this is another project named NATS Streaming which was released last year.


[https://github.com/nats-io/nats-streaming-server](https://github.com/nats-io/nats-streaming-server)



The slides for the rest of Wally's talk can be found here: [https://www.slideshare.net/wallyqs/gophercon-2017-the-design-implementation-of-nats-client](https://www.slideshare.net/wallyqs/gophercon-2017-the-design-implementation-of-nats-client)
![waldemar](//images.contentful.com/le3mxztn6yoo/6OiLu7yVkkie2um2EyCYoY/23be476b4f7c8b14b293a223e3bff599/waldemar.jpg)