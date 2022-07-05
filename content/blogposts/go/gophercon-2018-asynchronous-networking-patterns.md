---
title: 'GopherCon 2018 - Asynchronous Networking Patterns'
authors:
  - name: Nick Snyder for the GopherCon Liveblog
    url: https://twitter.com/nickdsnyder
publishDate: 2018-08-28T00:00-06:00
tags: [
  "gophercon"
]
slug: gophercon-2018-asynchronous-networking-patterns
description: 'Filippo Valsorda, a Cryptogopher on the Go Team at Google, demonstrates how to write a TCP network listener using package `net`.'
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5nOlXCLdhSk6ESWEW8iC24/01978fdff3206c78ad8bee4c0cdfee87/mechanic-tire.jpg
published: true
---

Presenter: [Filippo Valsorda](https://www.gophercon.com/agenda/speakers/279044)

Liveblogger: [Nick Snyder](https://twitter.com/nickdsnyder)

[Filippo Valsorda](https://www.gophercon.com/agenda/speakers/279044), a Cryptogopher on the Go Team at Google, demonstrates how to write a TCP network listener using package `net`.


## Summary

- [gvt](https://github.com/FiloSottile/gvt) is retired.
- You can build a network proxy using package [net](https://golang.org/pkg/net/) that is:
    - [About 100 lines of Go](https://github.com/FiloSottile/mostly-harmless/blob/master/talks/asyncnet/prepared.go).
    - As performant as [Nginx](https://www.nginx.com/) without the complexity of managing event loops.

---

## Threading servers

Servers that create one thread per request are simple to reason about but don't scale to a large number concurrent requests because each thread consumes operating system resources.

![image](https://user-images.githubusercontent.com/754768/44747088-743b6c80-aac9-11e8-86ac-60395bfde811.png)

## Event loop

Servers like [Nginx](https://www.nginx.com/) use an event loop. A pool of threads handle events such that the threads are never idle or block.

![image](https://user-images.githubusercontent.com/754768/44726656-7257b600-aa95-11e8-9bde-4d2c9fbf7c24.png)

When a thread needs to perform an operation that might block, it asks the operating system to not block and instead notify it later when the operation is done.

It is hard to write plugins for NGINX because you need to be careful to save state and not block.

## Goroutines

Like threads, Goroutines are simple to reason about because they make the CPU behave like an event loop except the Go scheduler effectively manages the event loop so you don't have to.

Unlike threads, Goroutines scale to many requests because they have small stacks and are cheap to schedule.

![image](https://user-images.githubusercontent.com/754768/44726681-83082c00-aa95-11e8-8972-d7639932e7dc.png)

## Net package

Package [net](https://golang.org/pkg/net/) exposes two important interfaces that are used when creating a network proxy:
- The [net.Conn](https://golang.org/pkg/net/#conn) interface is a generic stream-oriented network connection.
- The [net.Listener](https://golang.org/pkg/net/#listener) interface is a generic network listener for stream-oriented protocols. It exposes an Accept method that takes a new connection from the wire and blocks until a new connection arrives.

## Accepting connections

Here is a simple TCP server that listens on a port and accepts requests in a loop:

```go
l, err := net.Listen("tcp", "localhost:4242")
if err != nil {
    log.Fatal(err)
}

for {
    conn, err := l.Accept()
    if err != nil {
        log.Fatal(err)
    }
    // Make sure all work happens in a Goroutine.
    go serviceConn(conn)
}
```

A common mistake is to do a little bit of work synchronously in accept handler, but this will eventually cause problems in production.

For example, a malicious user can open a connection but not send anything. This can block the main loop and prevent it from accepting new connections.

The solution is to make sure that all work happens in a Goroutine.

## Timeouts

Goroutines are cheap, but other resources like file descriptors are scarce. To prevent your server from running out of these types of resources, it is important to enforce read timeouts on inbound connections.

```go
conn.SetDeadline(time.Now().Add(30 * time.Second))
```

## Building a simple proxy

![image](https://user-images.githubusercontent.com/754768/44726915-01fd6480-aa96-11e8-80e4-d1c7f1e69f5f.png)

This code proxies a connection to gophercon.com:

```go
func proxyConn(conn net.Conn) {
    defer conn.Close()
    upstream, err := net.Dial("tcp", "gophercon.com:443")
    if err != nil {
        log.Println(err)
        return
    }
    defer upstream.Close()
    go io.Copy(upstream, conn)       // Goroutine exits when connection is closed
    _, err = io.Copy(conn, upstream) // Uses splice from 1.11 so no data is copied into user space!
    log.Printf("Proxy connection finished with err = %v", err)
}
```

This is as fast a NGINX because it uses splice(2) under the hood to avoid copying data into/out of user space.

The magic happens when io.Copy detects that TCPConn implements io.ReaderFrom. When TCPConn's ReadFrom detects that it is reading from another TCPConn, it uses [splice](https://sourcegraph.com/github.com/golang/go@go1.11/-/blob/src/net/splice_linux.go#L30).

## Parsing TLS

TLS provides end-to-end encryption on your connection.

Server Name Indication (SNI) is how the client tells the server which host it is trying to connect to so that the server know which certificate to present.

What if we want to parse SNI and then proxy the connection? We need to make sure to proxy the part of the connection that we have already read.

<Figure
    alt="Proxy Diagram" 
    src="https://user-images.githubusercontent.com/754768/44727286-ed6d9c00-aa96-11e8-8a0e-3b0cc4dab189.png"
/>

The solution is to use a io.MultiReader that first reads the Client Hello that we already have in the buffer, and then reads from the rest of the connection.

Make a net.Conn wrapper.
```go
type prefixConn struct {
    io.Reader
    net.Conn // methods get promoted so we satisfy net.Conn
}
// need to be explicit since both io.Reader and net.Conn have a Read method.
func (c prefixConn) Read(b []byte) (int, error) {
    return c.Reader.Read(b)
}
```

Then use io.MultiReader.
```go
proxyConn(prefixConn{
    Reader: io.MultiReader(&buf, conn),
    Conn:   conn,
}, "gophercon.com:443")
```

## Serving TLS

tls.Conn is a net.Conn wrapper. It takes care of handshake and de/encryption without needing an extra goroutine or channel.

Making local certificates for dev is a pain, but the [mkcert](https://github.com/FiloSottile/mkcert) command makes it easy.

## Conclusion

You can build a network proxy using package [net](https://golang.org/pkg/net/) that is [about 100 lines of Go](https://github.com/FiloSottile/mostly-harmless/blob/master/talks/asyncnet/prepared.go), and is as performant as [Nginx](https://www.nginx.com/) without the complexity of managing event loops.
