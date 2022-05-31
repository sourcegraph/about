---
title: 'Fallacies Of Distributed Gomputing'
authors:
  - name: Michael Hausenblas
publishDate: 2017-07-14T14:55-07:00
tags: [
  "gophercon"
]
slug: fallacies-of-distributed-gomputing
heroImage: https://images.ctfassets.net/le3mxztn6yoo/12WDBKdk9quUIYMm2OwumM/12159a4e2e6ac61be8752d93d2e49d60/screenshot-20_2017-07-14.png
published: true
---

There are any fallacies in distributed computing. This stuff will bite you sooner or later. For each fallacy, I address the problem with a general solution and a Go specific solution.

**1. The network is reliable**

**In general**: timeouts, error handling, retry logic.

**Go language &stdlib**:
- [time](https://golang.org/pkg/time/)
- [net/*](https://golang.org/pkg/net/)
- [context](https://golang.org/pkg/context/)
- context.WithTimeout, net.OpError, syscall.Errno

**Beyond stdlib**:
- [gobwas/ws](https://github.com/gobwas/ws)
- [gorilla/mux](https://github.com/gorilla/mux)

**2. Latency is zero**

**In general**: cancelation, partial results

**Go language & stdlib**:
- context.WithCancel
- encoding/json.Decoder.Decode(Stream)

**Beyond stdlib**:
- [golang.org/x/net/trace](https://godoc.org/golang.org/x/net/trace)

**3. Bandwidth is infinite**

**In general**: CDNs, protobuf rather than JSON

**Go**: golang/protobuf

**4. The network is secure**

**In general**: SSL/TLS, digital signatures, checksums

**For go**: crypto/tls, crypto/rsa, crypto/sha512, crypto/x509

**Beyond stdlib**:
- [golang.org/x/crypto/ssh](https://godoc.org/golang.org/x/crypto/ssh)
- [golang.org/x/oauth2/jwt](https://godoc.org/golang.org/x/oauth2/jwt)

**5. Topology doesn't change**

**In general**: DNS vs. IP addresses, TTL

**In Go**: be aware of the [pure Go resolver](https://golang.org/pkg/net/#hdr-Name_Resolution)

**6. There is one administrator**

**In general**: auditing, role-based access, immutability

**Go language & stdlib**:
- functional programming
- [Immutability on Go](https://www.reddit.com/r/golang/comments/2jrwq1/immutability_on_go/)

**Beyond stdlib**:
- [casbin/casbin](https://github.com/casbin/casbin) (authz lib/ACL, RBAC, ABAC)

**7. Transport cost is zero**

**In general**: cost of (un)marshalling

**In Go stdlib**:
- [encoding/*](https://golang.org/pkg/encoding/)
- performance of encoding/json.Marshal

**Beyond stdlib**:
- [gRPC](https://grpc.io/)

**8. The network is homogeneous**

**In general**: interoperability on all levels.

**In Go**: broad and well-tested stdlib

**Beyond stdlib**:
- [minio/minio-go](https://github.com/minio/minio-go)
- [google/go-github](https://github.com/google/go-github)
- [github.com/prometheus/client_golang/prometheus
](https://godoc.org/github.com/prometheus/client_golang/prometheus)
## Overview case studies

I'll be covering five open source distributed systems.

All stats taken on 2017-07-06:

![stats](//images.contentful.com/le3mxztn6yoo/7d5E6SFPFeaMOmuGySeYaq/e2e60807f755f5d0e27d8dd4d00e5a75/stats.png)

Used cloc to generate raw stats:

![cloc](//images.contentful.com/le3mxztn6yoo/56HMof0yRqeEqee8uCiWMM/b2987c271d67a1f63b72d55478a93951/cloc.png)

**Kubernetes**

Kubernetes.io is a container orchestration platform.
- Google initiated, opinionated, some 70% market share - Like the kernel for a cluster operating system - Initially was depending on Docker (now: CRI-O) - Bring your own SDN, minimal core + plugins

Fallacies covered:

- The network is reliable.

- The network is secure.

- Transport cost is zero.

Architecture overview:

![kub](//images.contentful.com/le3mxztn6yoo/1wWABohcmYMWiQqaiSKcAU/64c54ff08d97d2e8051420c22073cda0/kub.png)

**Consul**

Consul is a tool for service discovery and configuration

-   Not one thing but many things to many people
-   Can provide service discovery (microservices architecture)
-   Can be used as a key-value store
-   Uses Serf lib as [gossip](https://www.consul.io/docs/internals/gossip.html) protocol (manage membership/broadcast messages)

Fallacies covered:

- Topology doesn't change.

Architecture overview:

![consul](//images.contentful.com/le3mxztn6yoo/5yUL6Ct10QGKIywS4OSqcg/02ecb11c39a5cd2b1579a9f79ecd3c00/consul.png)

**etcd**

etcd is a distributed, reliable key-value store
- Distributed setup realized via [Raft](https://raft.github.io/)
- Benchmarked at 10,000 writes/sec - Exposes HTTP and gRPC interfaces - Automatic TLS with optional client cert authentication

Fallacies covered:
- The network is reliable.
- Bandwidth is infinite.
- Transport cost is zero.


**CockroachDB 23.4**

CockroachDB is a distributed SQL database
- Primary design goals: scalability, strong consistency, survivability
- Every node in the cluster can act as SQL gateway, mapping and executing SQL statements to key-value operations
- Uses [RocksDB](http://rocksdb.org) (variant of Google's LevelDB storage lib) for persistence

Fallacies covered:
- Latency is zero.
- The network is homogeneous.

Architecture overview:

![cockroachDB](//images.contentful.com/le3mxztn6yoo/4HJafRafhe8EmYe8E2cYEy/2479c0292d437f0ad77f37217656221f/cockroachDB.png)

**Minio**

Minio is an object storage server compatible with Amazon S3 APIs
-   Cloud-native/container-ready objects with up to 5TB in size
-   Storage API covers local storage as well as network storage
-   Uses [erasure code](https://docs.minio.io/docs/minio-erasure-code-quickstart-guide) algorithm to protect data
-   New: `gateway` for multi-cloud (Azure, GCS, S3) access

Fallacies covered:
- The network is reliable
- Transport cost is zero

Architecture overview:

![minio](//images.contentful.com/le3mxztn6yoo/38fEm2fQRaMy88M6mIkM0Y/755670b7ffb4af158f91f3bd92893b12/minio.png)

##Observations


Some observations from the code reviews carried out in order to prepare this talk:
- subjectively, the top three types of issues encountered were: **timeouts**, **DNS**, and
**resource exhaustion**
- go doc is awesome; high level of coverage; **right incentives** such as [godoc.org](https://godoc.org/)
- [Go best practices, six years in](http://peter.bourgon.org/go-best-practices-2016/) also applies (think: operations)
- make it possible to replicate test and build pipeline locally
- ... and also, slightly controversial: [Container Assisted Testing](https://medium.com/@mhausenblas/container-assisted-testing-b76ee74278b7)


##Conclusions

- Go is a great language for a team to build (complex) distributed systems
- Go scales: both in the

- Go is a great language for a team to build (complex) distributed systems
- Go scales: both in the human dimension and concerning machines
- Any chance that we're gravitating towards a common lib for 'distributed gomputing'?

**Take home message**: be aware of the 8 fallacies and how to avoid them!


**For complete slides**: http://go-talks.appspot.com/github.com/mhausenblas/fallacies-of-distributed-gomputing/main.slide.

Liveblog by Linda Xie ([@lindeexie](https://twtiter.com/lindeexie))

![screenshot-20 2017-07-14](//images.contentful.com/le3mxztn6yoo/12WDBKdk9quUIYMm2OwumM/12159a4e2e6ac61be8752d93d2e49d60/screenshot-20_2017-07-14.png)

[Michael Hausenblas](https://twitter.com/mhausenblas) is a developer advocate for OpenShift and Kubernetes Hat Red Hat. His background is in large-scale data processing and container orchestration. He also contributes to open source software, mainly using Go.