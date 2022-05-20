---
title: "GopherCon 2018 - The Go Programmer's Guide to Secure Connections"
authors:
  - name: Keegan Carruthers-Smith for the GopherCon Liveblog
publishDate: 2018-08-29T00:00-06:00
tags: [
  "gophercon"
]
slug: gophercon-2018-the-go-programmers-guide-to-secure-connections
description: 'A practical guide to what is happening under the covers when applications or
users need to identify themselves, or need a secure channel for
communications.'
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5Oj3acpp7yysQg04W2AW4A/a93d79c10ad903d3902f6b6d8707973a/mechanic-tire-2.jpg
published: true
---

Presenter: [Liz Rice](https://www.gophercon.com/agenda/speakers/279055)

Liveblogger: [Keegan Carruthers-Smith](https://github.com/keegancsmith)

Title graphic: [Amy Chen](https://twitter.com/TheAmyCode)

A practical guide to what is happening under the covers when applications or
users need to identify themselves, or need a secure channel for
communications.

![image](https://user-images.githubusercontent.com/1646931/44930101-1a79b300-ad12-11e8-81fd-de5f29c385f6.png)

## Summary

The motivation of the talk is to understand what is happening with these
certificates and keys, how they are used to setup these secure connections.

The talk aims to answer:
- How do I secure my connections?
- What do these error messages mean?
- What the hell are all these .crt, .key, .csr and .pem files.

TLS is used to identify and encrypt connections. The code for the tutorial is
at
[github.com/lizrice/secure-connections](https://github.com/lizrice/secure-connections).
It contains hooks into [tls.Config](https://godoc.org/crypto/tls#Config) to
help illustrate what the client and server do when establishing a TLS
connection. Additionally it illustrates how mutually authenticating TLS works
(mTLS).

---

## TLS

Establishing identity online is critical. For example when you online deposit
money into your bank account, you want to ensure you are talking to your
bank. Additionally the messages and amount of money you deposit should be
encrypted in case traffic is intercepted.

Note: You often see TLS and SSL mentioned. TLS is the newer name for the
protocol that used to be called SSL.

Go's TLS implementation exposes hooks into the TLS handshake:
![TLS Handshake](https://user-images.githubusercontent.com/187831/44808703-2d617b80-ab8a-11e8-9d8c-746004f49c6e.png)

Public/Private key encryption:
- *Public key* can be freely distributed and is used to *encrypt*.
- *Private key* must be kept private and is used to *decrypt*.

You can also use the private key to sign a message. The public key is then
used to verify the signature. You have message + signature.

In TLS you send your public key and identify yourself. The server does not
know who you are, so to establish identity it relies on a third-party it
trusts called a Certificate Authority (CA). The CA will sign your certificate,
which the server can verify.

## Certificate

A certificate is a X.509 certificate. X.509 is just the name of the standard. It contains:
- Subject Name
- Subject's public key
- Issuer (CA) name
- Validity

Subject is who you are trying to identify. The CA is someone who you both trust.

Your certs should use a Subject Alternative Name (SAN). Common Name was
deprecated in 2000! You can ignore in Go 1.11 with `GODEBUG` setting
`x509ignoreCN=1`.

## Creating keys and certificates

You use a trusted certificate authority. This is something like Let's
Encrypt. Trusted certificate authorities have certificates on your computer
and/or browser. Those certificates are used to validate certificates for
public-facing domains. It is not for internal components in a distributed
system.

If you want a signed certificate you create a Certificate Signing Request
 (CSR) and send it to the CA. For example you can create a CSR with `openssl`:

``` shell
openssl req -key private-key -new -out csr
```

The Certificate Authority then validates your identity. For example Lets
Encrypt has challenges like asking you to change a DNS setting to prove you
have control over what it will sign.

`openssl` doesn't easily support SANs. There are several alternatives:
`cfssl`, `mkcert`, `minica`. Minica's usecase is easy generation of key and
certs. Also it is only 300 lines of Go code, so if you want to create
certificates yourself progmatically you can just look at minica's source.

```shell
minica -domains liz-server
```

Will create keys, etc for the host `liz-server` in a new directory called
`liz-server`. You will need to add `liz-server` to your `/etc/hosts` to point
to localhost.

These keys are then used to demonstrate TLS in the example code at
[github.com/lizrice/secure-connections](https://github.com/lizrice/secure-connections). Try
it out yourself.

## Mutually-authenticated TLS (mTLS)

Normally the client only validates the identity of the server, but the server
doesn't validate the identity of the client. mTLS is adding the validation to
the TLS handshake. In the server-side `tls.Config` you set `ClientAuth:
tls.RequireAndVerifyClientCert`. You then need to create a certificate for the
client and get it signed by a CA the server trusts. `tls.Config` will need to
contain the CA's for client certificates `ClientCAs`.

Note: `tls.Config` is used by both clients and servers. Most fields are
shared, but some fields are specific to client and server. So take care to
read a fields documentation when using it.

## File Extensions

The file extension used is inconsistent.
- Information type: `.crt` for certificate, `.key` for private key...
- Or file format: `.pem`

PEM files are Base64-Encoded and they will contain a header saying if it is a key, certificate, etc. You can understand the contents of the file with `openssl`:

``` shell
openssl x509 -text -in cert.pem -noout
```


## Common Error Messages

- Connection Refused: Check you're connecting to the right port. Can be due to another reason, but more than likely a port issue.
- Certificate signed by unknown authority: You have received a certificate, but you don't trust it. Check if you should trust the CA who signed the certificate, and possibly and to your trusted CA pool.
- Remote Error: It's the other end complaining.
