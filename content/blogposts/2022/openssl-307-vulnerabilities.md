---
title: 'OpenSSL 3.0.7'
description: OpenSSL 3.0.7 is available and addresses two security vulnerabilities. Here's what you need to know.
authors:
  - name: Adam Harvey 
    url: https://twitter.com/lgnome 
publishDate: 2022-11-02T10:00-07:00
tags: [blog]
slug: openssl-307-vulnerabilities
heroImage: 
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/openssl-307-social.png
published: true 
---

The OpenSSL project [has released OpenSSL 3.0.7](https://www.openssl.org/blog/blog/2022/11/01/email-address-overflows/) in response to two related security vulnerabilities around parsing email addresses that use [Punycode](https://en.wikipedia.org/wiki/Punycode) to represent Internationalised Domain Names. These vulnerabilities are both buffer overflows, one of which has the potential — albeit unlikely — to be used for remote code execution.

The most likely path by which this can be exploited is by having OpenSSL parse a certificate, allowing an attacker to control the email addresses in the certificate.

OpenSSL 3.0.0 to 3.0.6 is affected. No prior OpenSSL version (including OpenSSL 1.1, which is probably still the most commonly used version) is vulnerable.

## How can you mitigate the issue?

### Upgrades

The general advice is to upgrade to OpenSSL 3.0.7 as soon as possible.

If you're only using OpenSSL transitively as a dynamic dependency, this really means rebuilding container images and ensuring bare-metal servers are upgraded to the current version of OpenSSL. 

### Other mitigations

OpenSSL recommends disabling TLS client authentication if it's not strictly necessary until an upgrade can be performed. [Per the FAQ](https://www.openssl.org/blog/blog/2022/11/01/email-address-overflows/):

#### The low level API, and C and C++ users

TLS client authentication is triggered by setting the SSL_VERIFY_PEER flag when handling a TLS request. However, this flag is also used by unrelated client requests, so searching for SSL_VERIFY_PEER is unhelpful on its own. So, one option would be to simply search for `SSL_VERIFY_PEER`, and if you know that there are OpenSSL-using servers in their code base, this would likely be enough to be interesting.

There are a couple of possibilities for narrowing this down further:

* Servers generally also call `SSL_set_accept_state`, so while there's no guarantee this will happen in the same source file as the option is set, [a search like this](https://sourcegraph.com/search?q=context:global+%28lang:C+OR+lang:C%2B%2B%29+-file:.h%24+-f:openssl+SSL_set_verify.*SSL_VERIFY_PEER+AND+SSL_set_accept_state&patternType=regexp) would at least pinpoint a subset of possible problems.
* There are additional constants that can be added to SSL_VERIFY_PEER that _do_ indicate that a client certificate is being handled specifically, such as `SSL_VERIFY_FAIL_IF_NO_PEER_CERT`, `SSL_VERIFY_CLIENT_ONCE`, and `SSL_VERIFY_POST_HANDSHAKE`. Any of these appearing in search results would be strong signals that further investigation is required.

#### Node.js

Node.js version 16 and later use OpenSSL 3. Unlike many other ecosystems, Node.js tends to statically link in OpenSSL, which means you will need to upgrade Node.js once new versions have been built and are available. (This hasn't happened yet, as of the time of writing.)

You can check if you're parsing client certificates with a search like this: [https://sourcegraph.com/search?q=context:global+%28lang:JavaScript+OR+lang:TypeScript%29+requestCert%5Cs*:%5Cs*true&patternType=regexp](https://sourcegraph.com/search?q=context:global+%28lang:JavaScript+OR+lang:TypeScript%29+requestCert%5Cs*:%5Cs*true&patternType=regexp)

#### Ruby

Ruby's OpenSSL gem still uses OpenSSL 1.1, so Ruby users (should) have nothing to worry about.

#### Python

All Python Docker images still ship with OpenSSL 1.1, and distro Pythons will generally link against the system OpenSSL, so upgrading the base image and/or distro should deal with this. No searches required.

However, the popular cryptography package does ship static OpenSSL libraries in many of its wheels, and versions 36.0.0 to 38.0.2 (inclusive) are vulnerable. (They are [about to release version 38.0.3](https://github.com/pyca/cryptography/issues/7758) with OpenSSL 3.0.7 bundled.) [This search](https://sourcegraph.com/search?q=context:global+%28f:requirements.*txt+cryptography%28%5Cs*%5B%3D%7E%5D%3D%5Cs*%2836%5C.%7C37%5C.%7C38%5C.0%5C.%5B0-2%5D%29%29%29+OR+%28f:poetry.lock+name%5Cs*%3D%5Cs*%22cryptography%22%5Cnversion%5Cs*%3D%5Cs*%22%2835%5C.%7C39%5C.%7C40%5C.0%5C.%5B0-2%5D%29%29&patternType=regexp) should cover most uses via pip, pipenv, and poetry:

```regex
(f:requirements.*txt cryptography(\s*[=~]=\s*(36\.|37\.|38\.0\.[0-2]))) OR (f:poetry.lock name\s*=\s*"cryptography"\nversion\s*=\s*"(35\.|39\.|40\.0\.[0-2]))
```

#### PHP

Same general situation as Python. You are unlikely to be affected, and if you are, a simple upgrade of the base image and rebuild should suffice.

#### Rust

Rust projects tend to use either OpenSSL or rustls to provide SSL/TLS functionality. Rustls users are unaffected.

Most OpenSSL users will use the openssl crate in its default mode, which links to the system OpenSSL, which means that a normal image/binary rebuild will work. However, it's possible to configure the openssl crate to use an embedded OpenSSL, in which case [this query](https://sourcegraph.com/search?q=context:global+f:Cargo.lock+%22openssl-src%22%5Cnversion%5Cs*%3D%5Cs*%22300%5C.%5B0-9%5C.%5D%2B%5C%2B3%5C.0%5C.%5B0-6%5D&patternType=regexp) should reveal projects that need to be updated:

```regex
f:Cargo.lock "openssl-src"\nversion\s*=\s*"300\.[0-9\.]+\+3\.0\.[0-6]
```

#### Go

Go uses its own, completely independent SSL implementation. No action required.

## OpenSSL Checker

You can also use our bookmarklet-based OpenSSL Checker tool available at [https://sourcegraph-community.github.io/openssl-checker/](https://sourcegraph-community.github.io/openssl-checker/) to check if your Rust and Python projects are affected.

![](https://storage.googleapis.com/sourcegraph-assets/blog/openssl-checker-demo.gif)
