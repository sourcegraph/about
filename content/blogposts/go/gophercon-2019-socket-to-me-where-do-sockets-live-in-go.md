---
title: "GopherCon 2019 - Socket to me: Where do Sockets live in Go?"
description: "Have you ever used HTTP server functions surfaced by the net/http package? Or gone down a couple of network levels and used TCP and UDP Listeners? Sockets are the secret sauce underlying these networking tools in Go. While Go abstracts away sockets, there are circumstances where knowing about sockets and how to configure them is instrumental. This talk will explain the fundamentals of socket-level programming in Go, and how and where to use it."
authors:
  - name: Dawson Mortenson for the GopherCon 2019 Liveblog
publishDate: 2019-07-26T00:00-11:55
tags: [
  gophercon
]
slug: gophercon-2019-socket-to-me-where-do-sockets-live-in-go
heroImage: https://about.sourcegraph.com/gophercon2019.png
published: true
---

Presenter: Gabbi Fisher

Liveblogger: Dawson Mortenson

## Overview

Have you ever used HTTP server functions surfaced by the net/http package? Or gone down a couple of network levels and used TCP and UDP Listeners? Sockets are the secret sauce underlying these networking tools in Go. While Go abstracts away sockets, there are circumstances where knowing about sockets and how to configure them is instrumental. This talk will explain the fundamentals of socket-level programming in Go, and how and where to use it.

---

## Sockets? What're Those?

Sockets are a subset of file descriptors which are used to read and write from networks. Two primary types of sockets are stream and datagram sockets.

![Sockets](/gophercon-2019/gophercon-2019-sockets-what-are-those.png "Sockets? What're Those?")

##### Stream Sockets - TCP
TCP connections are used to guarantee delivery and maintain the order packets were sent in.
* Stateful, bi-directional connection
* Reliable, in-order delivery

Setting up a stream socket is akin to making a telephone call.

Server (Alice):
* _socket()_ -> Creates a listening socket, which is like getting a telephone.
* _bind()_ -> Binds an IP:port pair so that clients can locate the socket. Kind of like getting a SIM card with a unique number.
* _listen()_ -> Allows a socket to start receiving connections. i.e turning on the phone so it can accept calls.
* _accept()_ -> Blocks and waits for requests, waiting by the phone for a call.

Client (Bob):
* _socket()_ -> The client also needs to create a listening socket. The client needs a telephone in order to make a call.
* _connect()_ -> Establishes a connection to the server like making a phone call to another number.  

Now they can _write()_ and _read()_ back and forth like having a conversation over a phone.
Once the conversation is ended _close()_ will terminate the connection similar to hanging up the phone.

It took 8 syscalls to be able to handle a TCP connection. This can be tricky to setup in C, but Go does a lot of the heavy lifting for us.

In Go:

net.Listen() takes care of setting up the socket _socket()_, binding to the desired address _bind()_, and listens for incoming requests _listen()_. The net.Listen() function returns a net.TCPListener struct which contains the methods _accept()_ and _close()_ used to easily manage connections to a server.

![Stream Sockets](/gophercon-2019/gophercon-2019-stream-socket-diagram.png "Stream Sockets is like making a phone call")

##### Datastream Sockets - UDP
UDP, on the other hand, does NOT guarantee the delivery of packets OR the order in which the packets are delivered.
* Statelsss 
* No reliability guarantee, no ordered delivery

UDP is like sending a piece of mail through the post office.

Bob (Alice):
* _socket()_: Creates a listening socket, which is like getting mailbox.
* _bind()_: Binds an IP:port pair so that clients can locate the socket. Kind of like adding a house number to mailbox so that mail can be delivered to your address.

Client (Bob):
* _socket()_: The client also needs a mailbox to send and receive pieces of mail from.
* _sendto()_: Sends a packet to the specified address like putting an address on a piece a mail and placing it in the mailbox with the flag up.
* _recvfrom()_: Allows the receiving of mail.

This method of communication continues until it is no longer needed at which point the server and client issue a _close()_, which is a bit like nailing shut your mailbox so that it can no longer be used to send or receive mail.

In Go:

net.ListenPacket() encapsulates the _socket()_ and _bind()_ syscalls returning a net.UDPConn struct that is used to read from and write to the socket. The net.UDPConn implements the PacketConn interface which provides encapsulations for _recvfrom()_, _sendto()_, and _close()_ as ReadFrom(), WriteTo(), and close(), respectively. 

![Datastream Sockets](/gophercon-2019/gophercon-2019-datastream-diagram.png "Datastream communication is like communicating through postal mail")

# Practical Socket Applications
##### Different Sockets
An example of an application that needs to run multiple sockets on the same address is a DNS resolver. This is because DNS can be run over both TCP and UDP. 

5-tuple socket matching can be used to match traffic to the correct socket on a machine. The 5-tuple consists of the protocol, destination ip, destination port, source ip, and source port. 

Much like how a DSL internet connection and telephone are able to use the same line without colliding by using different frequencies to ensure that internet browsing and phone calls can occur simultaneously, concurrent UDP and TCP packets are on different frequencies and are able to reach their intended, distinct sockets.

##### Same Sockets
Cloudflare's Spectrum, a cloudflare proxy that allows customers to put TCP and UDP services behind cloudflare’s CDN, and Roughtime, a secure time protocol server, had a potential conflict if a customer wanted to run a UDP service on port 2002. Any attempts to create a UDP on port 2002 would fail due to the port collision. 

Socket behavior can be modified through socket options. One such option is SO_REUSEADDR, it enables the ability for multiple sockets to bind to and share the same address. This option fixed the port collision issues Spectrum and Roughtime were facing.

In Go:

net.ListenConfig() implements a ListenPacket() function, which takes the configurations in ListenConfig() and applies them to the socket ListenPacket() creates. The ListenConfig struct must have a Control() function specified, but we don't pass it directly to that Control() function. Instead, the socket option is specified in the syscall.RawConn argument of the ListenConfig Control() function.

The syscall.RawConn interface specifies another function named Control(). The argument to this Control() function will be the callback that sets the desired socket options.

![Passing Socket Options in Go](/gophercon-2019/gophercon-2019-passing-socket-options-in-go.png)

##### Gotchas
The syscall package is deprecated, but there are still parts of the go standard library that depend on it. The newer /x/sys package is good for encouraging Gophers to be explicit about which operating systems their socket code target, such as making OS-specific syscalls for setting socket options

##### Other Uses of Socket Options:
* LBLoad balancing between worker processes reading from a shared queue
* Running parallel ingress queues
* Implementing packet filtering via BPF 

## Takeaways
Sockets are super awesome and by digging a little deeper you can easily unlock the advanced networking capabilities of Sockets and their use in Go applications.

## External Resources
* [Cloudflare Blog](https://blog.cloudflare.com/)
* [The Linux Programming Interface by Michael Kerrisk](https://en.wikipedia.org/wiki/The_Linux_Programming_Interface)
* [manpage for socket()](http://man7.org/linux/man-pages/man7/socket.7.html)