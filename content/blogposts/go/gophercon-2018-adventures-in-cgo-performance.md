---
title: 'GopherCon 2018 - Adventures in Cgo Performance'
authors:
  - name: Keegan Carruthers-Smith for the GopherCon Liveblog
publishDate: 2018-08-29T00:00-06:00
tags: [
  "gophercon"
]
slug: gophercon-2018-adventures-in-cgo-performance
description: 'Covers hard-won knowledge about using cgo in performance sensitive code.'
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5Oj3acpp7yysQg04W2AW4A/a93d79c10ad903d3902f6b6d8707973a/mechanic-tire-2.jpg
published: true
---

Presenter: [Mr. Sean T. Allen](https://www.gophercon.com/agenda/speakers/279061)

Liveblogger: [Keegan Carruthers-Smith](https://github.com/keegancsmith)

Covers hard-won knowledge about using cgo in performance sensitive code
including: ways in which cgo makes interoperation with other languages
difficult, how you can work around common sources of performance and scaling
problems, and an issue with the Go runtime that can't be worked around.

## Summary

An abstract, slides and all links mentioned in the talk are at
[github.com/SeanTAllen/adventures-in-cgo-performance](https://github.com/SeanTAllen/adventures-in-cgo-performance).

The overhead of calling from Go into C has a high overhead (171ns/op). It is
even worse from C to Go (1-2ms). The talk covers techniques to mitigate the
impact, namely batching, "big old map", sharding and avoiding lock contention.

---

## Background

Sean has lots of experience in FFI over a very long time. For example he has
even written a bridge between Java < - > Perl. At Wallaroo Labs he needed to
call into Pony from cgo, and vice versa. Wallaroo users would write go and
call this API, which was expected to be very high performance. This lead Sean
down the road of cgo performance.

## CGO

Cgo allows you to call "C" from go. It also allows you to call go from
"C". The latter is not as commonly used. To Sean's eye, cgo is not really an
FFI. Technically it is, but he cgo has the follow drawbacks unlike previous FFI's he has used:
- cgo does not have minimal overhead.
- cgo does not make it straightforward to pass memory back and forth.

[Cgo is not go](https://dave.cheney.net/2016/01/18/cgo-is-not-go). There is an
awful lot of things that make go nice, like the toolchain allowing static
binaries, cross compiling, data race finding, etc. With cgo you get none of
that, hence cgo is not go.

Cgo performance: It's complicated. Here is a quick rundown of the cost of
calling a function. In C it is a few ns. C code from python, also single digit
ns. But C and go live in different universes, so a lot of work has to be done
to cross over. For example goroutines have growable stacks, and also has
additional housekeeping to pass control of the underlying thread. This is all
overhead. There is a great blog post by Cockroach Labs called [Cost of
complexity of
cgo](https://www.cockroachlabs.com/blog/the-cost-and-complexity-of-cgo/). It
contains some interesting timings:
- cgo  10,000,000 runs    avg 171ns/op
- go   2,000,000,000 runs avg 1.83ns/op

It is even worse the opposite direction. For calling Go from "C" he observed
the following timings: On an AWS machine 1-2MS/op. His 2014 Macbook Pro
5-6ms/op.

[runtime/proc.go line 1771](https://golang.org/src/runtime/proc.go#L1771)
contains a very interesting TODO. Essentially on every call go does a bunch of
computation which it could store, but it throws it away. It assumes that CGO
calls will be rare and that the cost of the computations is not that
bad. However, in his case it is common and given the runtime has changed so
much, the cost of throwing the data away is likely a lot worse than when the
comment was written.

## Recommendations

Batch your CGO calls. You should know this going into it, since it can
fundamentally affect your design. Additionally once you cross the boundary,
try to do as much on the other side as you can. So for go => "C" do as much as
you can in a single "C" call. Similarly for "C" => go do as much as you can in
a single go call. Even more so since the overhead is much higher.

Pointers into go controlled memory are not allowed to be held by "C" code. A
"copying" garbage collectors will move objects in memory as part of the GC
cycle. This means you can't hold onto a pointer and assume it will stay
pointing at a valid object. Go does not do this! However, go1.6 they decided
they may want to do this in the future, so added the rule for not allowing you
to do this.

But you can work around this if you really need to. The "Big old map". Keep an
index into a huge map maintained by go. As a bonus this also includes a
reference to the values in the map, so you don't have to worry about the GC
clearing out the objects if only the C code needs to reference them.

The problem with a big old map is you need to be thread safe, which means you
need a RWMutex to protect the map access. This leads to serious performance
problems due to lock contention as you scale up the number of cores.

So the next thing to do when you have problems with "big old map" contention,
is to add sharding. The new sync.Map structure uses the same idea. You create
N "big old maps", then given the key you just pick `key % N` for the map to
use. Picking the shard doesn't require a lock, so the lock contention moves to
each shard.

You still need a way to generate the keys for the map. The lock in our id
generator is a source of contention. You can use the `atomic` pkg to solve
this. eg `id := atomc.AddUint64(&stuff.id, 1)`. Even better is if you use
something intrinsic to the value for the key. If you do that though you need
to ensure your sharding function works psuedorandomnly with the ID values you
use.
