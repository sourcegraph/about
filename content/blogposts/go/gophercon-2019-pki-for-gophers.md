---
title: "GopherCon 2019 - PKI for Gophers"
description: "TLS is easy, PKI is hard. Learn about Go primitives for generating certificate hierarchies, instrumenting mTLS, hardware backed keys, and public infrastructure like Let's Encrypt and Certificate Transparency. Along the way we'll discuss roots of trust for automated issuance, nuances of revocation, and encourage you to roll your own PKI."
authors:
  - name: Stephen Gutekanst for the GopherCon 2019 Liveblog
    url: https://slimsag.com
publishDate: 2019-07-25T00:00-14:55
tags: [
  gophercon
]
slug: gophercon-2019-pki-for-gophers
heroImage: https://about.sourcegraph.com/gophercon2019.png
published: true
---

Presenter: Eric Chiang

Liveblogger: [Stephen Gutekanst](https://github.com/slimsag)

## Overview

TLS is easy, PKI is hard. Learn about Go primitives for generating certificate hierarchies, instrumenting mTLS, hardware backed keys, and public infrastructure like Let's Encrypt and Certificate Transparency. Along the way we'll discuss roots of trust for automated issuance, nuances of revocation, and encourage you to roll your own PKI.

[Eric Chiang](https://twitter.com/erchiang), a security engineer @ Google, gives a code-oriented introduction to PKI in Go in his Gophercon 2019 talk! These is a live blog captured during his talk.

- [View the slides](https://docs.google.com/presentation/d/16y-HTvL7ASzf9JspCBX0OVmhwUWVoLj9epzJfNMQRr8/preview?slide=id.p)
- [@erchiang on Twitter](https://twitter.com/erchiang) (email in slides above)

These notes should be viewed alongside the slides above as the talk is heavily code-oriented. You will want to refer to the slides while reading the notes below.

## Preamble

The percentage of HTTPS browser traffic is on the rise over the past two years, making up 80-95% of browsing time today. Everyone has a general feeling of this.

TLS is also the expectation for backend communication today. HTTPS is on the uptick, with the New York Times moving their systems to HTTPS and Google publishing reports on HTTPS usage data to back this claim up.

## Preamble: Security engineering today

The mentality around security engineering today is now a focus on securing internal infrastructure inside of your VPN and corporate network. Everything requires encryption, regardless of whether or not it is the frontend talking to the backend or a backend talking to other services.

### HTTPS in Go

Setting up HTTPS in Go requires setting up signatures, a public and private key (the private key is private and unshared, and the public key is shared with anyone able to have access to it). Documents are signed with the private key, and there is an example of this on slide 14.

ECDSA signing is used to sign hashes using a private key. Anyone with the public key can verify the hash came from the signer.

### What are certificates?

With HTTPS, we have certificates. These are signed documents with information and metadata in them that can be used to serve traffic and secure traffic. These have a public key inside of them, and only the person with the private key can serve traffic for the domain.

### Certificate authorities (CAs)

In order to remove the need for every certificate for every website having to be stored on your laptop, Certificate Authorities (CAs) are introduced. These serve certificates that just authorize the CA to sign a serving certificate so that it is transitively trusted. Instead of trusting every certificate on the web, we trust the authority and implicitly the certificates it has signed and stated to be valid.

### Building a CA in Go

On slide 14, Go code for creating an ECDSA X509 certificate using basic constraints. This demonstrates creating a certificate that can sign other certificates, like a CA. We self-sign the certificate, then marshal it, etc. until you get what is shown on slide 15.

Slides 18 and 19 demonstrate using the CAs private key we generated to sign the serving certificate of a server. Then we perform the same marshalling to get the same general thing shown previously on slide 15.

Our server simply creates an HTTP server as usual, but with a TLS config using the serving certificate we created and the CA signed.

On our client side, we must trust the CA. We do this by creating a serve pool, and providing root CAs for the serve pool. The client will authenticate with the serve pool to prevent eavesdropping and tampering.

### Server -> Client authentication

What if a server wants to authenticate a client? For example, a backend service or database that wants to authenticate the client is someone known.

In the same way that servers present certificates to their clients, clients too can present certificates to servers. This can be done using the same CA mode where the CA signs the client certificate and the server trusts the CA and thus the client certificate inherently.

Like in the more common client < - > CA interaction model, a server verifying its clients must also trust the CA, so we provide a serve pool which turns on `clientAuth` by setting it to `RequireAndVerifyClientCert` (which is the only value it should ever really be set to).

You have now created a mutually authenticated connection.

### TLS vs. PKI

TLS is easy, but Private Key Infrastructure (PKI) is hard. Go provides the good interfaces to set this up, though. In real systems, managing all of these systems and private keys is the _really_ hard part. It’s also the most important part to understand and do right.

### CSRs

In our prior examples, we just assumed we have access to all private keys which would never apply in the real world where a CA should never give out private keys. So we need a way to ask the CA instead to sign our certificate to indicate they approve of it. This is where Certificate Signing Requests (CSRs) come in.

In Go, you can create a certificate request to perform this. The CA will sign it, so you must pass the private key. We demonstrate this on slide 30.

### Certificate ownership

In a hypothetical scenario where two services are running in GCE, one running foo.com and bar.com, the CA has a problem knowing whether or not foo.com is **actually** foo.com or instead is bar.com pretending to be foo.com when a signing request comes from it.

In GCE, metadata exists to provide a JWT token (which we won’t go into too much detail here), essentially it is a signed document by GCE itself vouching that the request came from GCE itself including metadata like the instance name, etc. Thus, when a CSR is sent, the CA can verify the request came from the platform you claim to be running on. On the side of the CA, we parse the CSR and pull the JWT and get the instance ID. This allows the CA to make intelligent decisions about whether or not to approve the CSR.

### Certificate revocation lists

Revoking a certificate can be done via revocation lists. Essentially, this is a list of certificates the CA says are revoked and not to trust. In Go, the way a CA would do this is by creating a list of revoked certificates including the serial number and use the CA private key to create a Certificate Revocation List (CRL) of revoked certificates including the serial number and the CA private key is used to sign it so that clients can trust it. The CRL file is then distributed to clients, and since it was signed by the CAs private key, clients can now trust that the certificates listed in it are revoked.

### OCSP

CRLs are good for a smaller set of revocation lists, hundreds or thousands of certificates and they work great. In the open internet, of course, it doesn't necessarily scale. You can use OCSP instead to _ask_ the CA if certificates are still valid. The CA is required to respond saying it is a valid certificate for a small/short period of time. Now, there are a few problems with this design including that the CA may not be ready to handle the amount of traffic this introduces. But also, _from a privacy standpoint_, the CA would essentially know all the websites you visit due to requesting the CA validate the certificate which is obviously not good. OCSP stapling exists to prevent this.

On slide 49, we demonstrate in Go how `OCSPStable` in the `Certificate` exists to support OCSP stapling. In a CA, you use a `golang.org/x/net/crypto/ocsp` response type to create an OCSP response. `DialTLS` can then be used to pass a custom TLS config and do additional validation, such as by validating OCSP responses and bailing out otherwise.

### Server Name Identification

Rotating a CA is more complex than rotating client certificates. Cloud providers will terminate TLS for you using Server Name Identification (SNI). SNI solves the issue of a server fronting multiple servers being able to provide the right certificate. Imagine one server such as Cloudflare existing in front of many servers behind it, all using TLS. The server in front will want to provide the certificate of the server it is proxying traffic for, not the certificate of itself (when you visit a website, it should present the certificate of the website not e.g. Cloudflare in front).

Go can be very flexible about how you validate certificates, which is great. SNI itself, though, is a wild ride. The government of Kazakhstan actually uses SNI to block accessing websites, among other crazy things like asking people to install their CA certificate which is dangerous. Cloudflare is one of the companies with _encrypted SNI_ trying to solve this. For more details, look up Let’s Encrypt SNI challenge issues, domain fronting, and encrypted SNI which has no Go support currently.

### Certificate-based authorization

In the same way a client may want to authenticate servers, a client may want to treat clients differently based on access. For example, a green key accessing a database but an orange key having read-only access. On slide 58 we demonstrate a way you can do this based on which certificate was provided to perform authorization.

### Hardware keys
Hardware bound keys are a lot of fun, too. Hardware in your computer can be used to store private keys. Security keys do this. Hardware bound keys work by storing the private key in the hardware. From user-land, you cannot interact with it in any way. An API exposes a signing request to state “don’t give me the private key, but use the private key on this device to sign this” -- in the case of an attack the attacker must use the kernel API instead of being able to say you have no idea where the private key now is as a file if your system is compromised.

In Go, a `Certificate` has a `PrivateKey` field which can be used to implement conditional interfaces, such as providing it an `ECDSAKey` which will use an interface method to perform ECDSA.

But, the TL;DR here is to never assume private keys are in memory. It could potentially be in other key management systems, or even hardware, so just pass around private keys in all of your APIs directly.

### LetsEncrypt

LetsEncrypt is amazing, and Go has amazing integration with it. LetsEncrypt is a CA which sends challenges to domains to prove the server on the other end has control over the domain. Please, use LetsEncrypt!

`golang.org/x/crypto/acme/autocert` is a great Go package which allows you to just automatically get certificates that are trusted very easily. Slide 72 shows this. Note that the cache should be kept safe, perhaps in a bucket somewhere.

### Certificate transparency

Certificate transparency is a new and integral part of Chrome today. It tries to solve the issue of evil CAs issuing a bad certificate and it going unnoticed by everyone. A small CA issuing a certificate for Google.com -- or Facebook.com -- for example, would be a very bad situation. Certificate transparency solves this.

Certificate transparency is a log of every certificate issued by a CA, and every certificate ever issued _must_ appear here. It is a cryptographically proven log, ensuring its validity. It uses signed certificate timestamps for this.

Certificate transparency in Go is at github.com/google/certificate-transparency-go and can be used to dump certificates. This can be used to check your own certificates to see if someone else has access to a DNS record or private key and has issued certificates for your domain.

### Closing thoughts

PKI is a huge topic, and there is no clear definition of PKI. What I believe you should do:

- **Just use HTTPS!** -- stop using HTTP to allow your clients to hit backend services. You should be doing this work anyway, because production _needs_ HTTPS.
- Set up scripts that generate certificates, do not use HTTP.
- Most importantly, be safe out there all!



