---
title: 'Encrypting the Internet with Go - Tutorial'
authors:
  - name: Filippo Valsorda
publishDate: 2017-07-13T00:00-07:00
tags: [
  "gophercon"
]
slug: encrypting-the-internet-with-go-tutorial
heroImage: https://images.ctfassets.net/le3mxztn6yoo/a3Y5rqBJPU6wg8S6egaUy/0b2dcdab51e21bbff9f9ee42f35bf8b1/filippo.JPG
published: true
---


Liveblog by Carlisia Pinto ([@carlisia](https://twitter.com/carlisia))

### Overview
Talk by Filippo Valsorda. Starting at the beginning of this year, a lot of your internet traffic probably is going through Go. That is because Cloudflare delivers content for a great number of websites, and they have have build their TLS 1.3 using Go's crypto/tls.

### TLS
Technically TLS is a transparent security protocol for data transfer over the internet and it stands for transport layer security. It works by encrypting the traffic being transmitted over the wire.

At its core, TLS is about a client and a server that want to communicate securely over the network. To do that, both sides need to agree on some key material to use to encrypt the rest of the traffic for that connection. Handshake is the name of the phase when this agreement happens. A handshake involves some public key cryptography and some data being shuffled between the client to the server, or from the server to the client.

TLS 1.2 has been the standard for almost a decade. But over this time, version 1.3 was being worked on. One of the most visible change of this new version was that in TLS 1.3 the handshake has been re-structured to shave off an entire handshake round trip. Not only that, but for connections that are from visitors who have recently visited a site and are resuming a previous connection, TLS 1.3 allows for a dramatic speed boost with zero round trip time resumption (0-RTT).

Filippo commented that the Go crypto/tls package is so good that cryptographers look at it to understand TLS. TLS implementation is not a trivial endeavor, but Go's crypto/tls package simplifies it to the point that you can serialize the state machine down to if statements.

Filippo goes over some Go code and shares some graphics to demonstrate the normal flow of data inside TLS:


![Initial Handshake](https://images.ctfassets.net/le3mxztn6yoo/2L81KoLRHye0Ok0W2WkSkI/86fed303c33da315f2e5e2984a0c3918/initial.png?h=250)

![Late Handshake](https://images.ctfassets.net/le3mxztn6yoo/1lMehT7PAYMWcem2WYeyKK/0b3c66d8daaf13efb1cad6b5a36899fd/late.png?h=250)

![Handshake complete](https://images.ctfassets.net/le3mxztn6yoo/gEslkpketMIM2cKoWsGMe/1562101a97adaf03f2c94a9db133992f/complete.png?h=250)

### Enter Cloudflare's 0-RTT
He then goes on to highlight aspects of Cloudflare's 0-RTT and how it differs from the normal TLS flow. Of note: 0-RTT data is disabled by default.

0-RTT data brings challenges in internals and also in API design, because it doesn't benefit from all the guarantees of TLS. For example, the server gets an answer immediately, it doesn't have to wait for confirmation from the client.

So for the 0-RTT API, there are two important things the server needs:

* To know what part of the data is 0-RTT
* To know when it’s safe to use the 0-RTT data

He goes over five possible options to handle these challenges using Go, explaining the downside of each:

![opt1](//images.contentful.com/le3mxztn6yoo/4iG86W6ybSMeC4eIWWQiUK/5f873528058a3af1feda8e0f3898c888/opt1.png)

![opt2](//images.contentful.com/le3mxztn6yoo/6Gx1kKANBCYUayQOWMUykm/07a0eeb7af06f5ffed300e884ad39b7c/opt2.png)

![opt3](//images.contentful.com/le3mxztn6yoo/68o0cQJzpugA2YyiEqokms/5e1814b75543a402b34bbf9268bb404b/opt3.png)

![opt4](//images.contentful.com/le3mxztn6yoo/62mKpqMuliMOCcmw6GG46A/64caa54a3d3b024b43195d5c879f1cc2/opt4.png)

![opt5](//images.contentful.com/le3mxztn6yoo/Cnq2quDkrYYwOi2UWgccQ/c8e102625699ac6c1b3e7f2cc758f11b/opt5.png)

### Other aspects of the API
- The 0-RTT API needs to be exposed to HTTP handler, because it needs access to the live ConnectionState and the ConfirmHandshake method. It uses context key information like ServerContextKey and LocalAddrContextKey.

- API design decisions and points out how important it is to keep details irrelevant to application developers out of the API interface.

- Need to be aware of order of operations to avoid blocking:

![block](//images.contentful.com/le3mxztn6yoo/2qpbBGDAkEMKm6ggq2i6qg/3d4495eec11b542c36763261db933d73/block.png)


 Currently there is an open CL to simplify this handshake flow. Comments or contributions are welcome:

 33776: [dev.tls] crypto/tls: simplify the Handshake locking - [https://go-review.googlesource.com/c/33776/](https://go-review.googlesource.com/c/33776/)

- Interoperability testing using a Docker container with all known libraries.

- Patches to the standard library:

![patch](//images.contentful.com/le3mxztn6yoo/1FqIL5akiECcQAQoUmgcuU/053ed2cd50ebee3461232b68967ce46f/patch.png)

![patch2](//images.contentful.com/le3mxztn6yoo/31XPDIPtYkEAWAoEWEy08c/95e3d8361d33dffb48fbcfd89d4f36c8/patch2.png)

![patch3](//images.contentful.com/le3mxztn6yoo/2WpKDEOyiQiuGe6QqG0oYu/6423149a4a952610038ea6c13555d297/patch3.png)

### crypto/tls in production

- Filippo talks about adapting the TLS stack to the needs of the complex edge like Cloudflare's.

- He talks about the `GetConfigForClient` callback, and the proposal to add fields to ClientHelloInfo - [https://github.com/golang/go/issues/17430](https://github.com/golang/go/issues/17430).

- Passing TLS connections to NGINX: if there's a file descriptor, pass the connection directly to Go. No OpenSSL is involved in the processing of the data:

![ssl](//images.contentful.com/le3mxztn6yoo/2kAXGVe5G46ioe06K46cWW/34a9e9a11d22fc1c36c66ce3731cbaa3/ssl.png)
![ssl2](//images.contentful.com/le3mxztn6yoo/42NTjE8NDqC2g2yEU64Mce/737bbc2e05d3780a42e515fa65538f56/ssl2.png)
![ssl3](//images.contentful.com/le3mxztn6yoo/5RnmhUxRvOYGmAigMUi0I/c0d5940bed6b5a7ee8da4c44b395a2a9/ssl3.png)

### Some pointers about net/http

Filippo goes into detail about these issues:

- Don't use http timeout. If you get one thing from this talk, it must be that you can't use default timeouts!
- Timeouts are server-wide, so you can’t change them based on path or authentication. This should be addressed in 1.10. Open proposal welcomes input: net/http: no way of manipulating timeouts in Handler - [https://github.com/golang/go/issues/16100](https://github.com/golang/go/issues/16100)
- Do not confuse keep-alives with http timeout.

## Take away

"We didn't’t break the Internet!"

This was a very detailed talk. Be sure not to miss watching the video of it when it comes out!

## About the speaker

[Filippo Valsorda](https://blog.filippo.io/) works on cryptography and systems engineering at Cloudflare. He's been the main developer of the pure-Go Cloudflare DNS server, and wrote its DNSSEC implementation. He's now working on TLS 1.3 for the Cloudflare edge and upstream. He often writes about Go on the company and personal blog, talks about security and programming, and builds Go tools like gvt, the Heartbleed test and the whoami SSH server.

Slides for this talk: https://speakerdeck.com/filosottile/encrypting-the-internet-with-go-at-gophercon-2017

Twitter: [@FiloSottile](https://twitter.com/FiloSottile)
![filippo](//images.contentful.com/le3mxztn6yoo/a3Y5rqBJPU6wg8S6egaUy/0b2dcdab51e21bbff9f9ee42f35bf8b1/filippo.JPG)
