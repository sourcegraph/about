---
title: 'GopherCon 2018 - Micro-optimizing Go Code'
authors:
  - name: Matthew Jaffee for the GopherCon Liveblog
publishDate: 2018-08-29T00:00-06:00
tags: [
  "gophercon"
]
slug: gophercon-2018-micro-optimizing-go-code
description: 'Everyone knows: if you need to go fast, bust out the assembly.'
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5Oj3acpp7yysQg04W2AW4A/a93d79c10ad903d3902f6b6d8707973a/mechanic-tire-2.jpg
published: true
---

Presenter: [George Tankersley](https://www.gophercon.com/agenda/speakers/279045)

Liveblogger: [Matt Jaffee](https://twitter.com/mattjaffee)

Everyone knows: if you need to go fast, bust out the assembly. But what if
there's better performance to be had just by writing Go more carefully?

## Summary

In this tutorial session, George will optimize a hash function in pure Go,
starting from a direct implementation of the RFC and going until he beats the
standard library. This will cover the whole process - starting with the naive
code and a set of tests, then progressing through some algorithmic improvements
and down the rabbit hole of program tuning. Along the way you'll see the
performance impact of API design, some microbenchmarking pitfalls, an
introduction to profiling, and a lot of practical tips for doing this kind of
optimization.

When the hash function runs out, George will draw further examples from the
standard libraries (mostly crypto!) and other high performance Go projects.


---
Code at: https://github.com/gtank/blake2s

George gets carried away with optimization - wanted to make Go version of a hash
function as fast as Rust/C++.

George is employed by Zcash - think Bitcoin with privacy.

## Blake2s

A Hash function is variable length input -> fixed length output

Blake2 is an awesome new hash function with some great features:
- Fast
- Immune to length extension attacks
- Parallelism
- tree hashing
- prefix-MAC personalization
- ...

<Figure 
  alt="Hash functions speed chart" 
  src="https://user-images.githubusercontent.com/926067/44808041-ceebcb80-ab90-11e8-886b-4e48e48c144f.png"
/>

but...

It's under-specified, and no one implements all of it.

"under-specified" is not a phrase you want to hear with regards to things like
crypto and hash functions.

<Figure 
  alt="Playing tennis with dynamite while riding bears" 
  src="https://user-images.githubusercontent.com/926067/44808007-a8c62b80-ab90-11e8-85ef-0705c2078f14.png"
/>

Zcash wanted to implement Blake2 independently in several languages to validate
it.

Blake2 Algorithm:

1. Initialize parameters
2. Split input data into fixed-size blocks
3. Scramble the bits around
4. Update internal state
5. Finalize & output

## Hash functions in Go

A fairly complex interface.

<Figure 
  alt="Hash functions in Go complexity" 
  src="https://user-images.githubusercontent.com/926067/44807986-93e99800-ab90-11e8-8d14-ff668380175e.png"
/>

Doesn't work for Blake2

## Benchmarking

- [go bench](https://dave.cheney.net/2013/06/30/how-to-write-benchmarks-in-go)
- benchstat
- pprof
and this...?
```bash
DATE=`date -u +'%s' | tr -d '\n'`; BRANCH=`git
rev-parse --abbrev-ref HEAD`; for i in {1..8}; do
go test -bench . >> benchmark-$BRANCH-$DATE; done
```

`testing.B` is how you write benchmarks in Go - you can put them right in your test files.

Each benchmark needs to loop from 0 to b.N - `go test -bench` determines N, you just have to make sure that whatever you're benchmarking runs N times.

```go
func benchmarkHashSize(b *testing.B, size int) {
  b.SetBytes(int64(size))
  sum := make([]byte, 32)
  b.ResetTimer()
  for i := 0; i < b.N; i++ {
    digest, _ := NewDigest(nil, nil, nil, 32)
    digest.Write(emptyBuf[:size])
    digest.Sum(sum[:0])
  }
}
```

Quite slow initially - no where near 1GB/s

## pprof

- can give you the "hottest" functions in your benchmark. ("top5" command)
- use the "web" command to get a graphical view of the hottest functions.
- try to find the lowest level function that you can control.


## The Inliner
We found a function that is pretty small and doesn't have side effects - this is
a good candidate for inlining.

Inlining is when the compiler copies the body of a function into the caller. It
avoids function call overhead, but increases binary size.

- compiler calculates a complexity score for a func to see if inlinable
- no manual control of inliner
- functions accrue cost for each node in their AST.
- extra cost for slices
- function calls are +2
- never inlines something with for/range/select or other nonlinear control
- never inlines certain runtime funcs and non-intrinsic assembly
- check out inl.go in the compiler source

Is it worth it? In this case making the function inline will give a 70% speed boost.

How do you know if a function will inline?
```bash
go test -gcflags="-m=2" 2>&1 | grep "too complex"
```

Manually inline these math/bits function calls!

Now our cost is 81 - one over the limit!

Had to change the API to remove an argument to get it under budget - pretty ugly hack!

Be careful - under inliner budget doesn't always mean faster - always benchmark.

What's next?

## pprof
Use "weblist" this time.
Gives a nice source view in the browser with line-by-line profiling data.

Search for a hot function from our "top5" pprof command.
We see 2 slice lookups that are taking over 1.5s of the total 6s.
Diving into that in the weblist view gives us an assembly breakdown.
Two JAE (jump) instructions to runtime.panicindex - this is bound checking!

"Safety is great... but we're trying to go fast."

Finding bounds checks:
```bash
go test -gcflags="-d=ssa/check_bce/debug=1"
```

You can do an early bounds check deep into the slice to avoid multiple bounds checks further on.

If that won't work:

- propagate constants
- unroll loops
- reuse previously allocated vars

This can make the code super ugly! a dozen lines becomes a few hundred. but...
80% throughput boost!

Still some bounds checks - one more technique:
Replace slices with arrays.

Going back to pprof:

We're seeing `mallocgc`, `makeslice`, and `memmove`. Allocations are expensive - initially, and because of garbage collection. Let's grep for `make` and see what we can get rid of.

The Go compiler contains "pattern matching" which can catch things like looping
over a slice and zeroing it out. It will replace the loop with a special low
level call like `memset`.

You can check the capacity of a slice with `cap()` which is often longer than its
length - you may be able to use existing allocated memory rather than making a
new slice.

We've eeked out another few percent!

## Diminishing Returns

There's more we can do:
- don't allocation intermediate variables
- unroll all loops
- manually inline things
- hunt down more bounds checks

But, probably not worth it to go much further.

Things start to depend heavily on the compiler version - you have to watch
carefully that new Go versions don't break your "optimizations".

You won't be competitive in assemply in pure Go - maybe use Rust?

<Figure
  alt="Rust Evangelism Strike Force graphic" 
  src="https://user-images.githubusercontent.com/926067/44808250-576a6c00-ab91-11e8-8eea-cd63ac21dbe7.png"
/>
