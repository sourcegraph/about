---
title: 'OpenSSL 3.0.7'
description: OpenSSL 3.0.7 is available and it addresses two security vulnerabilities. Here's what you need to know.
authors:
  - name: Adam Harvey 
    url: https://twitter.com/lgnome 
publishDate: 2022-11-02T10:00-07:00
tags: [blog]
slug: openssl-307-vulnerabilities
heroImage: 
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/openssl-307-social.png
published: false 
---
# OpenSSL 3.0.7

The OpenSSL project [has released OpenSSL 3.0.7](https://www.openssl.org/blog/blog/2022/11/01/email-address-overflows/) in response to two related security vulnerabilities around parsing email addresses that use [Punycode](https://en.wikipedia.org/wiki/Punycode) to represent Internationalised Domain Names. These vulnerabilities are both buffer overflows, one of which has the potential — albeit unlikely — to be used for remote code execution.

The most likely path by which this can be exploited is by having OpenSSL parse a certificate, which allows an attacker to control the email addresses in the certificate.

OpenSSL 3.0.0 to 3.0.6 is affected. No prior OpenSSL version (including OpenSSL 1.1, which is probably still the most commonly used version) is vulnerable.

## tl;dr: What should Sourcegraph do about this?

I'll go into (significantly) more detail below on what this is and what we can do to help our customers, but I think the main takeaway here is that this is likely to be less meaningful from a marketing and support perspective than the Log4Shell vulnerability of last year was.

There are likely to be searches that customers can run over their repositories to start looking at places they might need to apply mitigations if they are unable to simply update base images. These are described in language-specific sections towards the end of the document.

The languages most likely to be affected are C, C++, Node.js, Python, and Rust, although just using one or more of those languages doesn't necessarily imply that anything is vulnerable.

I don't believe there's a meaningful batch change that we can craft that will mitigate this issue, since mitigation for most users will simply be updating their operating systems and container images.

In the longer term, this provides another example that our sales and CE teams can use to demonstrate the value of code search.


## Context: What is OpenSSL?

OpenSSL is the original — and still most commonly used — library implementing support for SSL/TLS. TLS is the security standard that underpins virtually all secure communication on the Internet, including HTTPS.

OpenSSL has historically had a fairly spotty security record, largely due to being under-resourced, being written in (fairly old school) C, and the problem domain just being pretty difficult in the first place. This has resulted in forks (such as LibreSSL and BoringSSL), and reimplementations of TLS (such as GnuTLS and rustls).

OpenSSL is, however, only rarely used directly by programmers. The vast majority of programmers write code in higher-level languages that wrap OpenSSL indirectly in their own libraries. This means that it's in a lot of unexpected places, but also that programmers have little control over the specific version of OpenSSL they're using, not to mention which parts of its API are utilised.


## How is this similar to Log4Shell?

Late last year, the popular Java logging library Log4j was revealed to be vulnerable to an issue called [Log4Shell](https://www.lunasec.io/docs/blog/log4j-zero-day/). This required a fire drill of upgrades by its users, many of which were non-trivial due to a tendency in the Java ecosystem to use older, unsupported versions of Log4Shell.

The specific vulnerability isn't especially similar, but the effect is pretty much the same — in the worst case scenario, attackers may be able to gain control of servers.


## How is this different from the famous Log4J issue?

Practically, this issue is likely to be less severe, although still significant.

The OpenSSL project believes that remote code execution is unlikely to be achieved in practice due to defence-in-depth measures available on most platforms. This doesn't prevent denial of service attacks, since servers using OpenSSL can still be crashed via the buffer overflow, but it's at least _slightly_ less bad.

The profile of OpenSSL users also differs somewhat from Log4j — most OpenSSL users are likely to be on the unaffected OpenSSL 1.1, and the OpenSSL project generally does a better job of maintaining support for multiple versions.

Log4j also botched their initial fixes quite badly, which resulted in more pain for Log4j users. It's not impossible that the fix in OpenSSL 3.0.7 will require further work, but it's conceptually simpler than the Log4j fix was, and my initial judgement is that it's likely to be correct and not require further work.

Finally, upgrading OpenSSL 3 is likely to be considerably easier in most cases. Most users will use libraries that dynamically link to OpenSSL, which means that upgrading the OpenSSL library installed on the operating system will generally fix the issue. No changes to API calls or the like are required.


## What can we do to help our customers mitigate this issue?


### Upgrades

The general advice for OpenSSL 3 users will be to upgrade to OpenSSL 3.0.7 as soon as possible.

For users who are only using OpenSSL transitively as a dynamic dependency (which will be most of them), this really means rebuilding container images and ensuring bare-metal servers are upgraded to the current version of OpenSSL. In general, most users will have processes in place for this already, and specific tools such as Renovate and Snyk will be able to provide insight into what needs to be done there that we shouldn't expend significant effort on trying to replicate.


### Other mitigations

OpenSSL recommends disabling TLS client authentication if it's not strictly necessary until an upgrade can be performed. [Per the FAQ](https://www.openssl.org/blog/blog/2022/11/01/email-address-overflows/):


_Q: Are there any mitigations until I can upgrade?_


_A: Users operating TLS servers may consider disabling TLS client authentication, if it is being used, until fixes are applied._

This is, of course, unhelpful for users who actually need client authentication, but it's possible some users have accidentally enabled client authentication when they don't actually require it. Some initial thoughts on possible code searches are below.

This may also affect users who have code that parses arbitrary server certificates. Detecting that is less a question of code search and is more a question of product knowledge.


#### The low level API, and C and C++ users

Client authentication is ultimately enabled by setting [the SSL_VERIFY_PEER option](https://www.openssl.org/docs/manmaster/man3/SSL_CTX_set_verify.html) when issuing or handling a TLS request. The problem is that this option is also used by clients for innocuous purposes, and there are no API differences between server and client mode — or, for that matter, vulnerable and non-vulnerable versions of OpenSSL — to craft a one-size-fits-all code search.

So, one option would be to simply search for `SSL_VERIFY_PEER`, and if the user knows that there are OpenSSL-using servers in their code base, this would likely be enough to be interesting.

There are a couple of possibilities for narrowing this down further:



* Servers generally also call `SSL_set_accept_state`, so while there's no guarantee this will happen in the same source file as the option is set, [a search like this](https://sourcegraph.com/search?q=context:global+%28lang:C+OR+lang:C%2B%2B%29+-file:.h%24+-f:openssl+SSL_set_verify.*SSL_VERIFY_PEER+AND+SSL_set_accept_state&patternType=regexp) would at least pinpoint a subset of possible problems.
* There are additional constants that can be added to SSL_VERIFY_PEER that _do_ indicate that a client certificate is being handled specifically, such as `SSL_VERIFY_FAIL_IF_NO_PEER_CERT`, `SSL_VERIFY_CLIENT_ONCE`, and `SSL_VERIFY_POST_HANDSHAKE`. Any of these appearing in search results would be strong signals that further investigation is required.

Neither of these deal with the question of figuring out if the user is using OpenSSL 3 specifically. That's going to require knowledge of how their project is built that we likely don't have. (Building C and C++ projects tends to be highly non-standardised.)


#### Node.js

Node.js version 16 and later use OpenSSL 3. Unlike many other ecosystems, Node.js tends to statically link in OpenSSL, which means that users will need to upgrade Node.js once new versions have been built and are available. (This hasn't happened yet, as at the time of writing.)

Users can check if they are parsing client certificates with a search like this: [https://sourcegraph.com/search?q=context:global+%28lang:JavaScript+OR+lang:TypeScript%29+requestCert%5Cs*:%5Cs*true&patternType=regexp](https://sourcegraph.com/search?q=context:global+%28lang:JavaScript+OR+lang:TypeScript%29+requestCert%5Cs*:%5Cs*true&patternType=regexp) 


#### Ruby

Ruby's OpenSSL gem still uses OpenSSL 1.1, so Ruby users (should) have nothing to worry about.


#### Python

All Python Docker images still ship with OpenSSL 1.1, and distro Pythons will generally link against the system OpenSSL, so upgrading the base image and/or distro should deal with this. No searches required.

However, the popular cryptography package does ship static OpenSSL libraries in many of its wheels, and versions 36.0.0 to 38.0.2 (inclusive) are vulnerable. (They are [about to release version 38.0.3](https://github.com/pyca/cryptography/issues/7758) with OpenSSL 3.0.7 bundled.) [This search](https://sourcegraph.com/search?q=context:global+%28f:requirements.*txt+cryptography%28%5Cs*%5B%3D%7E%5D%3D%5Cs*%2836%5C.%7C37%5C.%7C38%5C.0%5C.%5B0-2%5D%29%29%29+OR+%28f:poetry.lock+name%5Cs*%3D%5Cs*%22cryptography%22+AND+version%5Cs*%3D%5Cs*%22%2836%5C.%7C37%5C.%7C38%5C.0%5C.%5B0-2%5D%29%29&patternType=regexp) should cover most uses via pip, pipenv, and poetry:

```regex
(f:requirements.*txt cryptography(\s*[=~]=\s*(36\.|37\.|38\.0\.[0-2]))) OR (f:poetry.lock name\s*=\s*"cryptography" AND version\s*=\s*"(36\.|37\.|38\.0\.[0-2]))
```


#### PHP

Same general situation as Python. Users are unlikely to be affected, and if they are, a simple upgrade of the base image and rebuild should suffice.


#### Go

Go uses its own, completely independent SSL implementation. No action required.


#### Rust

Rust projects tend to use either OpenSSL or rustls to provide SSL/TLS functionality. Rustls users are unaffected.

Most OpenSSL users will use the openssl crate in its default mode, which links to the system OpenSSL, which means that a normal image/binary rebuild will work for them. However, it's possible to configure the openssl crate to use an embedded OpenSSL, in which case [this query](https://sourcegraph.com/search?q=context:global+f:Cargo.lock+openssl-src+AND+version%5Cs*%3D%5Cs*%22300%5C.%5B0-9%5C.%5D%2B%5C%2B3%5C.0%5C.%5B0-6%5D&patternType=regexp) should reveal projects that need to be updated:


```regex
f:Cargo.lock openssl-src AND version\s*=\s*"300\.[0-9\.]+\+3\.0\.[0-6]
```

## OpenSSL Checker

You can also use our bookmarklet-based OpenSSL Checker tool available at [https://sourcegraph-community.github.io/openssl-checker/](https://sourcegraph-community.github.io/openssl-checker/) to check if your own projects are affected.

![](https://storage.googleapis.com/sourcegraph-assets/blog/openssl-checker-demo.gif)
