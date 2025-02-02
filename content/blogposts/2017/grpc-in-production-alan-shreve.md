---
title: 'gRPC in Production'
authors:
  - name: Alan Shreve
publishDate: 2017-07-13T00:00-07:00
tags: [
  "gophercon"
]
slug: grpc-in-production-alan-shreve
heroImage: https://images.ctfassets.net/le3mxztn6yoo/46Fbuugk4o4oGasG0SW4My/3a033c1566a68bdd38f9b4cdf5045691/Selection_081.png
published: true
---


Liveblog by Beyang Liu ([@beyang](https://twitter.com/beyang))

[Alan Shreve](https://twitter.com/inconshreveable) is an hacker, entrepreneur and creator of ngrok.com. [ngrok](https://ngrok.com/) is the best way to connect expose services behind a NAT or firewall to the internet for demos, webhook development and IoT connectivity. Today, he's giving us a whirlwind tour of gRPC and how to use it in your production web service.

------

Q: How do Microservices talk to each other?

A: SOAP. Just kidding. Today, it's mostly HTTP + JSON.

> I will die happy if I never write another REST client library in my life.

It's a lot of repetitive boilerplate.

## Why do REST APIs suck?

* Streaming is difficult (nigh-impossible in some languages)
* Bi-directional streaming isn't possible at all
* Operations are difficult to model (e.g. ‘restart the machine')
* Inefficient (textual representations aren't optimal for networks)
* Your internal services aren't RESTful anyways, they're just HTTP endpoints
* Hard to get many resources in a single request (GraphQL)
* No formal (machine-readable) API contract
  * Corollary: writing client libraries requires humans
       * Corollary: humans are expensive and don't like writing client libraries




## So let's use gRPC to build a cache service

gRPC is a "high-performance open source universal RPC framework."

Let's build a caching service together using gRPC.


We don't define it in code. We actually define it in an Interface Definition Language (IDL), in this case, protobufs.


Here's our caching service (`app.proto`):

```go
syntax = "proto3";
package rpc;
service Cache {
  rpc Store(StoreReq) returns (StoreResp) {}
  rpc Get(GetReq) returns (GetResp) {}
}
message StoreReq {
  string key = 1;
  bytes val = 2;
}
message StoreResp {
}
message GetReq {
  string key = 1;
}
message GetResp {
  bytes val = 1;
}

```



Snap your fingers and now you have client libraries in 9 different languages: C++, Java (including Android), Python, Go, Ruby, C#, JavaScript, Objective-C, PHP.

But wait, there's more: you also have server stubs for that API in 7 languages: C++, Java, Python, Go, Ruby, C#, JavaScript.

We won't dive into the generated code itself, but let's see how we can use it.

## server.go

Let's look at `server.go`.

```go
func serverMain() {
    if err := runServer(); err != nil {
        fmt.Fprintf(os.Stderr, "Failed to run cache server: %s\n", err)
        os.Exit(1)
    }
}
func runServer() error {
    srv := grpc.NewServer()
    rpc.RegisterCacheServer(srv, &CacheService{})
    l, err := net.Listen("tcp", "localhost:5051")
    if err != nil {
        return err
    }
    // blocks until complete
    return srv.Serve(l)
}
type CacheService struct {
}
func (s *CacheService) Get(ctx context.Context, req *rpc.GetReq) (*rpc.GetResp, error) {
    return nil, fmt.Errorf("unimplemented")
}
func (s *CacheService) Store(ctx context.Context, req *rpc.StoreReq) (*rpc.StoreResp,
    error) {
    return nil, fmt.Errorf("unimplemented")
}


```







## client.go

```go
func clientMain() {
    if err := runClient(); err != nil {
        fmt.Fprintf(os.Stderr, "failed: %v\n", err)
        os.Exit(1)
    }
}
func runClient() error {
    // connnect
    conn, err := grpc.Dial("localhost:5051", grpc.WithInsecure())
    if err != nil {
        return fmt.Errorf("failed to dial server: %v", err)
    }
    cache := rpc.NewCacheClient(conn)
    // store
    _, err = cache.Store(context.Background(), &rpc.StoreReq{Key: "gopher", Val: []byte("con")})
    if err != nil {
        return fmt.Errorf("failed to store: %v", err)
    }
    // get
    resp, err := cache.Get(context.Background(), &rpc.GetReq{Key: "gopher"})
    if err != nil {
        return fmt.Errorf("failed to get: %v", err)
    }
    fmt.Printf("Got cached value %s\n", resp.Val)
    return nil
}

```





Note: don't have to write networking code or serialization code.


Wait...

> Is this just WSDL all over again?

## gRPC compared to SOAP/WSDL

* Inextricably tied to XML (grpc is pluggable)
* Very heavyweight service definition format: XML/XSD nightmare
* Unnecessarily complex, bloated with unnecessary features (Two-
phase commit?!)
* Inflexible and intolerant of forward-compatibility (unlike protobuf)
* Performance, streaming not solved . . .
* Machine-readable API contracts are actually a really great idea
* Clients were responsible for generating libraries instead of vendors

### gRPC compared to Swagger

* Solves the machine-readable contract problem, but none
of the other problems with HTTP/JSON (performance,
streaming, modeling)
* Swagger definitions are cumbersome and incredibly
verbose. Compared to writing grpc protobuf definitions,
they're a gigantic pain

### gRPC compared to Thrift

* Thrift actually a really great idea, very similar project goals
* Never achieved same ubiquity and ease of use. This is really hard. Requires all major language implementations to be:
  * well documented
  * reliable
  * highly performant
  * easy to install











### Implementing the methods

Let's fill in the stubs that gRPC generated for us:

```go
type CacheService struct {
    store map[string][]byte
}
func (s *CacheService) Get(ctx context.Context, req *rpc.GetReq) (*rpc.GetResp,
    error) {
    val := s.store[req.Key]
    return &rpc.GetResp{Val: val}, nil
}
func (s *CacheService) Store(ctx context.Context, req *rpc.StoreReq)
(*rpc.StoreResp, error) {
    s.store[req.Key] = req.Val
    return &rpc.StoreResp{}, nil
}
```



### gRPC errors

There's a number of error codes each corresponding to types of errors. It's kind of like HTTP errors, but no response body.

```go
func (s *CacheService) Get(ctx context.Context, req *rpc.GetReq) (*rpc.GetResp, error) {
    val, ok := s.store[req.Key]
    if !ok {
        return nil, status.Errorf(codes.NotFound, "Key not found %s",
            req.Key)
    }
    return &rpc.GetResp{Val: val}, nil
}
```



### Secure transport

There's a simple API for that. On the server:

```go
func runServer() error {
    tlsCreds, err := credentials.NewServerTLSFromFile("tls.crt", "tls.key")
    if err != nil {
        return err
    }
    srv := grpc.NewServer(grpc.Creds(tlsCreds))
    rpc.RegisterCacheServer(srv, &CacheService{make(map[string][]byte)})
    l, err := net.Listen("tcp", "localhost:5051")
    if err != nil {
        return err
    }
    return srv.Serve(l)
}
```

On the client:

```go
func runClient() error {
    // connect
    // InsecureSkipVerify only for this example
    tlsCreds := credentials.NewTLS(&tls.Config{InsecureSkipVerify: true})
    conn, err := grpc.Dial("localhost:5051", grpc.WithTransportCredentials(tlsCreds))
    if err != nil {
        return fmt.Errorf("failed to dial server: %v", err)
    }

```




### What's going on underneath the hood? How does it work?

protobuf serialized over HTTP/2:

* HTTP/2
* protobuf serialization (pluggable)
* Clients open one long-lived connection to a grpc server
  * A new HTTP/2 stream for each RPC call
  * Allows simultaneous in-flight RPC calls
* Allows client-side and server-side streaming



### Implementations

There are 3 implementations at the moment:


* Three high-performance event loop driven implementations
* C
  * Ruby, Python, node.js, PHP, C#, Objective-C, and C++ are all bindings to the “C
core”
  * PHP via PECL extension (apache or nginx/php-fpm)
* Java
  * Netty + BoringSSL via JNI
* Go
  * Pure Go implementation using Go stdlib crypto/tls package



### Where did gRPC come from?

* Originally pioneered by a team at Google
* Next generation version of an internal Google project
called ‘stubby'
* Now a F/OSS project with a completely open spec and
contributors from many companies
  * Development is still primarily executed by Google devs


### What if you have misbehaving clients

Let's try Multitenancy (associating client ID with each request):

```go
message StoreReq {
  string key = 1;
  bytes val = 2;
  string account_token = 3; // <-- woo!
}
```

`app.proto`:

```go
service Accounts {
  rpc GetByToken(GetByTokenReq) returns (GetByTokenResp) {}
}
message GetByTokenReq {
  string token = 1;
}
message GetByTokenResp {
  Account account = 1;
}
message Account {
  int64 max_cache_keys = 1;
}
```

`client.go`:

```go
func runClient() error {
    cache := rpc.NewCacheClient(conn)
    // store
    _, err = cache.Store(context.Background(), &rpc.StoreReq{
        AccountToken: "inconshreveable",
    Key:
        "gopher",
    Val:
        []byte("con"),
    })
    if err != nil {
        return fmt.Errorf("failed to store: %v", err)
    }
    // get
    resp, err := cache.Get(context.Background(), &rpc.GetReq{Key: "gopher"})
    if err != nil {
        return fmt.Errorf("failed to get: %v", err)
    }
}
```

`server.go`:

```go
type CacheService struct {
    accounts      rpc.AccountsClient
    store         map[string][]byte
    keysByAccount map[string]int64
}

func (s *CacheService) Store(ctx context.Context, req *rpc.StoreReq) (*rpc.StoreResp, error) {
    resp, err := s.accounts.GetByToken(context.Background(), &rpc.GetByTokenReq{
        Token: req.AccountToken,
    })
    if err != nil {
        return nil, err
    }
    if s.keysByAccount[req.AccountToken] >= resp.Account.MaxCacheKeys {
        return nil, status.Errorf(codes.FailedPrecondition, "Account %s exceeds max key limit %d", req.A$
    }
    if _, ok := s.store[req.Key]; !ok {
        s.keysByAccount[req.AccountToken] += 1
    }
    s.store[req.Key] = req.Val
    return &rpc.StoreResp{}, nil
}

```







### "It's too slow"

Now someone tells you your service is too slow. And here you realize you have no visibility. What do you do?

Option 1: add logging:

`client.go`:

```go
func runClient() error {
    // store
    start := time.Now() // <==
    _, err = cache.Store(context.Background(), &rpc.StoreReq{
        AccountToken: "inconshreveable",
    Key:
        "gopher",
    Val:
        []byte("con"),
    })
    log.Printf("cache.Store duration %s", time.Since(start))
    if err != nil {
        return fmt.Errorf("failed to store: %v", err)
    }
    // get
    start = time.Now()  // <==
    resp, err := cache.Get(context.Background(), &rpc.GetReq{Key: "gopher"})
    log.Printf("cache.Get duration %s", time.Since(start)) // <==
    if err != nil {
        return fmt.Errorf("failed to get: %v", err)
    }
}

```

`server.go`:

```go
func (s *CacheService) Store(ctx context.Context, req *rpc.StoreReq) (*rpc.StoreResp, error) {
    start := time.Now()
    resp, err := s.accounts.GetByToken(context.Background(), &rpc.GetByTokenReq{
        Token: req.AccountToken,
    })
    log.Printf("accounts.GetByToken duration %s", time.Since(start))
    if err != nil {
        return nil, err
    }
}

```









Note: this is a lot of boilerplate. Turns out gRPC has something for that: the client interceptor. Every time you make a remote call, the interceptor middleware will be invoked.


### Client interceptor

`interceptor.go`:

```go
func WithClientInterceptor() grpc.DialOption {
    return grpc.WithUnaryInterceptor(clientInterceptor)
}
func clientInterceptor(
    ctx context.Context,
    method string,
    req interface{},
    reply interface{},
    cc *grpc.ClientConn,
    invoker grpc.UnaryInvoker,
    opts ...grpc.CallOption,
) error {
    start := time.Now()
    err := invoker(ctx, method, req, reply, cc, opts...) // <==
    log.Printf("invoke remote method=%s duration=%s error=%v", method,
        time.Since(start), err)
    return err
}
```


`client.go`:

```go
func runClient() error {
    // connnect
    tlsCreds := credentials.NewTLS(&tls.Config{InsecureSkipVerify: true})
    conn, err := grpc.Dial("localhost:5051",
        grpc.WithTransportCredentials(tlsCreds),
        WithClientInterceptor()) // <==
    if err != nil {
        return fmt.Errorf("failed to dial server: %v", err)
    }
}

```

`server.go`:

```go
func runServer() error {
    // client for accounts service
    tlsCreds := credentials.NewTLS(&tls.Config{InsecureSkipVerify: true})
    conn, err := grpc.Dial("localhost:5052",
        grpc.WithTransportCredentials(tlsCreds),
        WithClientInterceptor()) // <==
    if err != nil {
        return fmt.Errorf("failed to dial accounts server: %v", err)
    }
    accounts := rpc.NewAccountsClient(conn)
}

```





### Server interceptor

On the server side, there's a *server interceptor*.


`interceptor.go`:

```go
func ServerInterceptor() grpc.ServerOption {
    return grpc.UnaryInterceptor(serverInterceptor)
}
func serverInterceptor(
    ctx context.Context,
    req interface{},
    info *grpc.UnaryServerInfo,
    handler grpc.UnaryHandler,
) (interface{}, error) {
    start := time.Now()
    resp, err := handler(ctx, req)
    log.Printf("invoke server method=%s duration=%s error=%v", info.FullMethod,
        time.Since(start), err)
    return resp, err
}

```


`server.go`:
```go
func runServer() error {
    // cache server
    tlsCreds, err = credentials.NewServerTLSFromFile("tls.crt", "tls.key")
    if err != nil {
        return err
    }
    srv := grpc.NewServer(grpc.Creds(tlsCreds), ServerInterceptor())
    rpc.RegisterCacheServer(srv, NewCacheService(accounts))
    l, err := net.Listen("tcp", "localhost:5051")
    if err != nil {
        return err
    }
    return srv.Serve(l)
}

```






### Adding timeouts


Server-side timeout:

`server.go`:

```go
func (s *CacheService) Store(ctx context.Context, req *rpc.StoreReq)
(*rpc.StoreResp, error) {
    accountsCtx, _ := context.WithTimeout(context.Background(), 2*time.Second)
    resp, err := s.accounts.GetByToken(accountsCtx, &rpc.GetByTokenReq{
        Token: req.AccountToken,
    })
    if err != nil {
        return nil, err
    }
    if s.keysByAccount[req.AccountToken] >= resp.Account.MaxCacheKeys {
        return nil, status.Errorf(codes.FailedPrecondition, "Account %s exceeds max
key limit %d", req.AccountToken, resp.Account.MaxCacheKeys)
    }
}
```





Now you look in the logs you and find you're still failing SLA. Some round-trips take 2.2 seconds (more than 2 seconds). Why? Your timeout only covers a portion of the full request/response roundtrip.



So let the client set its own timeout:

`client.go`:
```go
func runClient() error {
    // store
    ctx, _ := context.WithTimeout(context.Background(), time.Second)
    _, err = cache.Store(ctx, &rpc.StoreReq{
        AccountToken: "inconshreveable",
    Key:
        "gopher",
    Val:
        []byte("con"),
    })
    if err != nil {
        return fmt.Errorf("failed to store: %v", err)
    }
    // get
    ctx, _ = context.WithTimeout(context.Background(), 50*time.Millisecond)
    resp, err := cache.Get(ctx, &rpc.GetReq{Key: "gopher"})
    if err != nil {
        return fmt.Errorf("failed to get: %v", err)
    }
    fmt.Printf("Got cached value %s\n", resp.Val)
    return nil
}


```



How does that interact with the timeout you set previously on the server? Simple: "the context propagates through."

![Selection 081](//images.contentful.com/le3mxztn6yoo/46Fbuugk4o4oGasG0SW4My/3a033c1566a68bdd38f9b4cdf5045691/Selection_081.png)



### Dry run

Now let's say you want to call your service with a dry run flag. I want to run it without side effects. I want it to work on all mutable API.

This is simple with passing the right gRPC metadata (analogous to HTTP headers).

![Selection 082](//images.contentful.com/le3mxztn6yoo/1cu5lDbGRqwQgEeG4ME2SU/a35157ce995e8ce60f05d163a7f2b6c0/Selection_082.png)
![Selection 083](//images.contentful.com/le3mxztn6yoo/42rgrFoTK8KuSi4Uyeoks8/df479b68fed9b8eef3f082692ef78047/Selection_083.png)


### Networks fail

Let's add retry logic.

![Selection 084](//images.contentful.com/le3mxztn6yoo/l7PpLqfUxqK0SEAooMAMY/88cd119ef76c35c7b29a76f76e63ef2b/Selection_084.png)

Idempotent logic? We can have safe retries:

![Selection 085](//images.contentful.com/le3mxztn6yoo/40Rpe4eCtyocQwcu8OIm0Y/f624ef7253acf6785ac03bfe3746665d/Selection_085.png)



But now failed operations are slow. What's going on?

![Selection 086](//images.contentful.com/le3mxztn6yoo/4DAjgPxqooOeU4C8CwcqUW/3ecb0bb288bb189deaaf2e4c2954d203/Selection_086.png)

![Selection 087](//images.contentful.com/le3mxztn6yoo/4CSpptKb4QI8MI86KySMo0/470041f59ad0ce66c3e3c28f53ddb07e/Selection_087.png)




### Structured errors

In your response message, you add a new field that indicates whether it is possible to retry in the case of an error.

You really want a structured error, not just a code and string. You want a full object's worth of parameters.

Something like this:

```go
message Error {
  int64 code = 1;
  string message = 2;
  bool temporary = 3;
  int64 userErrorCode = 4;
}
```


Unfortunately, this gets a little messy... A lot of serialization and deserialization is required, since gRPC doesn't have response bodies.



This is one of the larger frustrations working with gRPC compared to HTTP.

### Another feature request: Cache dump

Let's say you now want to add the ability to dump the contents of your cache service.

![Selection 088](//images.contentful.com/le3mxztn6yoo/77KvmSQJ1ecosQC8uA6806/6eb5773b2e12faf421cf1f20c624a6ab/Selection_088.png)


Now you run into non-enough memory errors. What defensive measures can you add?


Set max number of concurrent streams (simultaneous HTTP/2 streams per client):


![Selection 089](//images.contentful.com/le3mxztn6yoo/5YljZmdcicicEcouGkOmiI/919124f6ceb6a8ccf04294f6436f3a20/Selection_089.png)



gRPC also lets you use an InTap handler, a piece of code just like the server interceptor, but happens a little bit earlier in request lifecycle.

![Selection 090](//images.contentful.com/le3mxztn6yoo/5T1mTVzab6maE4WIu02qOe/79018ce2d56ff7a4f3a6db4f552507b2/Selection_090.png)

But what if that doesn't solve all your memory issues?

### Streaming


`app.proto`:

```go
syntax = "proto3";
package rpc;
service Cache {
  rpc Store(StoreReq) returns (StoreResp) {}
  rpc Get(GetReq) returns (GetResp) {}
  rpc Dump(DumpReq) returns (stream DumpItem) {}
}
message DumpReq {
}
message DumpItem {
  string key = 1;
  bytes val = 2;
}

```

`server.go`:

```go
func (s *CacheService) Dump(req *rpc.DumpReq, stream rpc.Cache_DumpServer) error {
    for k, v := range s.store {
        stream.Send(&rpc.DumpItem{
            Key: k,
            Val: v,
        })
    }
    return nil
}

```

`client.go`:

```go
func runClient() error {
    // stream
    stream, err := cache.Dump(context.Background(), &rpc.DumpReq{})
    if err != nil {
        return fmt.Errorf("failed to dump: %v", err)
    }
    for {
        item, err := stream.Recv()
        if err == io.EOF {
            break
        }
        if err != nil {
            return fmt.Errorf("failed to stream item: %v", err)
        }
        fmt.Printf("Cache Entry: %s => %s\n", item.Key, item.Val)
    }
    return nil
}

```





### Load balancing

There's not enough time to go into detail, but one thing to note: The fact that you're establishing a single persistent connection means that every request you make goes to the same server.

So, you have to put the load-balancing logic in the client.

You can of course put this logic into a middleware server that does this for you, so the actual client doesn't have to worry about this. This is still pretty new, the spec is experimental.



### gRPC clients in other languages

Using your service from Python:

```py
import grpc
import rpc_pb2 as rpc

channel = grpc.insecure_channel('localhost:5051')
cache_svc = rpc.CacheStub(channel)
resp = cache_svc.Get(rpc.GetReq(
```






### gRPC downsides


* Load Balancing
* Structured error handling is unfortunate
* No support for browser JS
* Breaking API changes
* Poor documentation for some languages
* No standardization across languages



### Where is gRPC used in production?

* ngrok — all 20+ internal services communicate via gRPC
* Square — replacement for all of their internal RPC. one of
the very first adopters and contributors to gRPC.
* CoreOS — Production API for etcd v3 is entirely gRPC.
* Google — Production APIs for Google Cloud Services (e.g.
PubSub, Speech Rec)
* Netflix, Yik Yak, VSCO, Cockroach, + many more





### The future of gRPC

The future of gRPC is easy to track: look at the grpc/grpc-proposals repository and grpc-io mailing list.


* New languages (swift + haskell are currently experimental)
* Further stability, reliability, performance improvements
* Increasingly fine-grained APIs for customizing behavior (connection
management, channel tracing)
* Browser JS!
