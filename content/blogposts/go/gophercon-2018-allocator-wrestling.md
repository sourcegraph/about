---
title: 'GopherCon 2018 - Allocator Wrestling'
authors:
  - name: Beyang Liu for the GopherCon Liveblog
    url: https://twitter.com/beyang
publishDate: 2018-08-28T00:00-06:00
tags: [
  "gophercon"
]
slug: gophercon-2018-allocator-wrestling
description: 'A whirlwind tour of the Go memory allocator and garbage collector, with tools and tips on how to optimize.'
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5nOlXCLdhSk6ESWEW8iC24/01978fdff3206c78ad8bee4c0cdfee87/mechanic-tire.jpg
published: true
---

Presenter: [Eben Freeman](https://www.gophercon.com/agenda/speakers/279043)

Liveblogger: [Beyang Liu](https://twitter.com/beyang)

## Summary

A whirlwind tour of the Go memory allocator and garbage collector, with tools and tips on how to optimize.

* The allocator and garbage collector are pretty ingenious!
* Single allocations are fast but not free
* The garbage collector can stop individual goroutines, even though STW pauses are very short
* A combination of tools is essential to understand what's going on: benchmark with GC off
* use CPU profiler to find hot allocations
* use memory profiler to understand allocation count/bytes
* use execution tracer to understand GC pattern
* use escape analyzer to understand why allocations happen

---

Eben Freeman ([@\_emfree\_](https://twitter.com/_emfree_)), an engineer at Honeycomb, talks about pitfalls and optimizations related to the memory allocator in Go.

Go is a managed-memory language, which means most of the time you don't have to worry about manual memory management, because the runtime does a lot of work for you. However, dynamic memory allocation is not free, and a program's allocation patterns can substantially affect its performance. The performance implications, however, are not obvious from language syntax. This talk covers techniques and tools that you can use to detect and address allocator bottlenecks.

### A motivating example

The architecture of the storage / query service at Honeycomb:

![image](https://user-images.githubusercontent.com/1646931/44677781-0b35f500-a9f4-11e8-80ec-0171103c0690.png)

The design/performance goals are:
* subsecond / single-digit second query latency
* hundreds of millions / billions of rows per query
* flexible queries, on-the-fly schema changes

Using the techniques described in this talk, they were able to obtain speedups of up to 2.5x on some key benchmarks:

![image](https://user-images.githubusercontent.com/1646931/44685103-df246f00-aa07-11e8-99d1-4fe0a376c69d.png)

## Outline of this talk

1. Allocator internals: How do the allocator and garbage collector work?
1. Tools: Tools for understanding allocation patterns
1. What can we change? Strategies for improving memory efficiency

## Allocator internals

### Memory layout

Depending on their lifetimes, objects are allocated either on the goroutine's *stack* or on the *heap*. The Go compiler decides which objects go where, but the general rule is that objects that outlive their containing function calls need to go on the heap.

![image](https://user-images.githubusercontent.com/1646931/44678193-0cb3ed00-a9f5-11e8-9dba-4529535a0274.png)

So what actually is in the heap? How did it get there? And who's keeping track of it all?

To answer these questions, we should think about what design goals the authors of the heap memory allocator probably had in mind:
* Goal: Efficiently satisfy allocations of a given size, but avoid fragmentation
    * Solution: allocate like-sized objects in blocks
* Goal: Avoid locking in the common case
    * Solution: maintain per-CPU caches
* Goal: Efficiently reclaim freeable memory
    * Solution: use bitmaps for metadata, run GC concurrently
`
The heap is divided into two levels of structure: **arenas** and **spans**:

![image](https://user-images.githubusercontent.com/1646931/44678582-ee022600-a9f5-11e8-9165-e3ec3b2dd3c4.png)

A global `mheap` struct keeps track of both of them:
```go
type mheap struct {
  arenas [1 << 22]*heapArena       // Covering map of arena frames
  free []mSpanList                 // Lists of fully free spans
  central []mcentral               // Lists of in-use spans
  // plus much more
}
```

Arenas are coarse sections of the available address space (64MB on 64-bit archs). We allocate OS memory in units of arenas. For each arena, there's metadata in a heapArena struct:
```go
type mheap struct {
  arenas [1 << 22]*heapArena    // Covering map of arena frames
  // ...
}

type heapArena struct {
   // page-granularity map to spans
  spans [pagesPerArena]*mspan
  // pointer/scalar bitmap (2bits/word)
  bitmap [heapArenaBitmapBytes]byte
}
```

Most heap objects live in a span: a run of pages containing objects of a fixed size class:
![image](https://user-images.githubusercontent.com/1646931/44678675-29045980-a9f6-11e8-9168-3180e6d1927a.png)

```go
type span struct {
  startAddr  uintptr
  npages     uintptr
  spanclass  spanClass

  // allocated/free bitmap
  allocBits *gcBits
  // ...
}
```

There are ~70 different span size classes.

Each `P` has an `mcache` holding a span of each size class. Ideally, allocations can be satisfied directly out of the mcache (so they're fast). In Go, a `P` is a scheduling context. Generally there's one `P` per core and at most one goroutine running per `P` at a time:

![image](https://user-images.githubusercontent.com/1646931/44678716-4507fb00-a9f6-11e8-8cac-cd36b62017d6.png)

To allocate, we find the first free object in our cached mspan, then return its address:

![image](https://user-images.githubusercontent.com/1646931/44679087-34a45000-a9f7-11e8-968e-009f8632b2db.png)

Let's say we need 96 bytes. First we'd look in the mcache for the mspan with 96-byte objects. After allocation, the picture would look like this:

![image](https://user-images.githubusercontent.com/1646931/44679136-57366900-a9f7-11e8-92b9-be845e8fa153.png)

This design means that "most" memory allocations are fast and require no locking! There are just 3 quick steps:
1. Find a cached span with the right size (mcache.mspan[sizeClass])
1. Find the next free object in the span
1. If necessary, update the heap bitmap

So now we have covered 2 of our 3 design goals for the allocator: (1) Efficiently satisfy allocations of a given size, but avoid fragmentation, (2) Avoid locking in the common case. But what about (3) Efficiently reclaim memory? In other words, garbage collection?

### Garbage collection

We have to find and reclaim objects once they're no longer referenced.

Go uses a **tricolor concurrent mark-sweep** garbage collector, which sounds intimidating, but isn't. "Mark-sweep" means the garbage collector is divided into a mark phase, where objects are marked for collection, and a sweep phase, where memory is actually freed.

In a tricolor garbage collector, objects are marked white, grey, or black. Initially, all objects are white. We start by marking goroutine stacks and globals. When we reach an object, we mark it grey:

![image](https://user-images.githubusercontent.com/1646931/44679351-f8bdba80-a9f7-11e8-8b0e-dbe1f7f17724.png)

When an object's referents are all marked, we mark it black:

![image](https://user-images.githubusercontent.com/1646931/44679443-3b7f9280-a9f8-11e8-849a-5aec0b828b3d.png)

At the end, objects are either white or black:

![image](https://user-images.githubusercontent.com/1646931/44679461-45a19100-a9f8-11e8-81f1-8952fbfe5190.png)

White objects can then be swept and freed.

Simple, right? Well, it leaves some questions open:
* How do we know what an object's referents are?
* How do we actually mark an object?

Go uses bitmaps for such metadata.

#### Pointer identification

Say we have a struct type like:

```go
type Row struct {
  index int
  data []interface{}
}
```

In memory, that looks like:

![image](https://user-images.githubusercontent.com/1646931/44679558-90bba400-a9f8-11e8-89c6-9ad3ec1273e6.png)

How does the garbage collector know what other objects it points to? I.e., which of its fields are pointers?

Remember that this heap object is actually inside an **arena**. The arena's bitmap tells us which of its words are pointers:

![image](https://user-images.githubusercontent.com/1646931/44679578-a16c1a00-a9f8-11e8-9a42-31bd426f0bb4.png)

#### Mark state

Similarly, mark state is kept in a span's `gcMark` bits:

![image](https://user-images.githubusercontent.com/1646931/44679775-1a6b7180-a9f9-11e8-8522-9e2cde8c65ac.png)

Once we're done marking, unmarked bits correspond to free slots, so we can just swap that mark state into the alloc bits:

![image](https://user-images.githubusercontent.com/1646931/44679878-5bfc1c80-a9f9-11e8-8030-89a0fcde8762.png)

This means sweeping in Go is generally super fast (while marking adds more overhead and is what we have to be concerned about).

The garbage collector is concurrent... with a twist. If we're not careful with the implementation, the application can do sneaky stuff to thwart the garbage collector. For example, take the following code:

```go
type S struct {
  p *int
}

func f(s *S) *int {
  r := s.p
  s.p = nil
  return r
}
```

After the first line of the function executes, we could end up with a state like this:

![image](https://user-images.githubusercontent.com/1646931/44680059-eba1cb00-a9f9-11e8-968d-cdcfd2b36d5a.png)

And at the return statement, the GC state could look like this:

![image](https://user-images.githubusercontent.com/1646931/44680146-1b50d300-a9fa-11e8-80ec-8c526b2a8c31.png)

And then the return value would be a live pointer to memory that the garbage collector could free!

To prevent this from occurring, the compiler translates pointer writes into potential calls into the write barrier. Very roughly:

![image](https://user-images.githubusercontent.com/1646931/44680255-6ec32100-a9fa-11e8-9c0e-c915d5e89679.png)

There are many ingenious optimizations in the Go compiler that let this process happen concurrently, but we won't get into those here.

We can, however, begin to understand how marking might be a problem as far as processor overhead is concerned.

When GC is marking, the write barrier is turned on.

During marking 25% of `GOMAXPROCS` are dedicated to **background marking**. But additional goroutines can be forced into **mark assist**:

![image](https://user-images.githubusercontent.com/1646931/44680297-931efd80-a9fa-11e8-9521-406c3dc288e7.png)

Why the need for **mark assist**? A rapidly allocating goroutine can outrun the background markers. So when allocating during marking, a goroutine gets charged for each allocation. If it's in debt, it has to do mark work before continuing:

```go
func mallocgc(size uintptr, ...) unsafe.Pointer {
   // ...
   assistG.gcAssistBytes -= int64(size)
	if assistG.gcAssistBytes < 0 {
       // This goroutine is in debt. Assist the GC to
       // this before allocating. This must happen
       // before disabling preemption.
       gcAssistAlloc(assistG)
    }
    // ...
```

### Summary

We've learned quite a bit about the runtime:

* The runtime allocates data in spans to avoid fragmentation
* Per-CPU caches speed up allocation, but the allocator still has to do some bookkeeping
* GC is concurrent, but write barriers and mark assists can slow a program
* GC work is proportional to *scannable* heap (allocating a big buffer of scalars is much cheaper than allocating a big buffer of pointers, because you have to follow the pointers)


## Tools

It seems like dynamic memory allocation has some cost.
Does this mean that reducing allocations will always improve performance?
Well, it depends.
The builtin memory profiler can tell us where we're allocating, but can't answer the causal question, "Will reducing allocations make a difference?" To do that, we can use three other tools:
* crude experimenting
* sampling profiling with pprof
* go tool trace

### Crude experimenting

If you want to see how much overhead the allocator and garbage collector add, you can turn them off with the following runtime flags:
* `GOGC=off` : Disables garbage collector
* `GODEBUG=sbrk=1` : Replaces entire allocator with simple persistent allocator that gets big blocks from the OS and gives you successive slices of those as you allocate

![image](https://user-images.githubusercontent.com/1646931/44680546-3f60e400-a9fb-11e8-88dd-093c9346f3e0.png)

This might seem kind of stupid, but it's a cheap way to establish a rough estimate of possible speedup potential. Maybe 30% speedup isn't worthwhile -- or maybe it's a compelling opportunity!

Problems with this approach:
* not viable in production, need synthetic benchmarks
* not reliable for programs with large heaps: persistent allocator may not perform that well either for those

However, it is a worthwhile first check.

### Profiling

A pprof CPU profile can often show time spent in runtime.mallocgc.

Tips:
* Use the flamegraph viewer in the pprof web UI
* If pprof isn't enabled in your binary, you can use Linux `perf` too

![image](https://user-images.githubusercontent.com/1646931/44680673-b1392d80-a9fb-11e8-96b3-60079912fdee.png)
![image](https://user-images.githubusercontent.com/1646931/44680690-b7c7a500-a9fb-11e8-893f-ec9f03225681.png)

This gives us line-level attribution of where we're doing CPU-expensive allocations, and can help clue us into the underlying cause of GC/allocator overhead.


Problems with this approach:
* Program might not be CPU-bound
* Allocation might not be on critical path
* Time in background marking (gcBgMarkWorker) can mislead (time spent here doesn't necessarily mean you have net slowdown)



### go tool trace

The *execution tracer* might be the best tool at our disposal to understand the impact of allocating in granular detail.

The execution tracer captures very granular runtime events over a short time window:
```shell
curl localhost:6060/debug/pprof/trace?seconds=5 > trace.out
```
You can visualize the output in a web UI:
```go
go tool trace trace.out
```
...though it can be a little dense:
![image](https://user-images.githubusercontent.com/1646931/44680802-fd846d80-a9fb-11e8-95da-16cbe5739faf.png)

The top-level blue bar shows you at a top-level when GC is running, and the lower bars show what's happening internally.

Remember, top-level GC doesn't mean the program is blocked, but what happens *within GC* is interesting!

![image](https://user-images.githubusercontent.com/1646931/44680937-4fc58e80-a9fc-11e8-8705-a6a840072e56.png)

![image](https://user-images.githubusercontent.com/1646931/44680955-5ce27d80-a9fc-11e8-8dd3-165b13ea6871.png)

The minimum mutator utilization curve can also show you if a service is GC-bound at different quartiles. ("Mutator" here means "not GC".)


### Summary

Together, benchmarks with the allocator off, CPU profiles, and execution traces give us a sense of:
* whether allocation / GC are affecting performance
* which call sites are spending a lot of time allocating
* how throughput changes during GC.


## What can we change?

If we've concluded that allocations are a source of inefficiency, what can we do? A few of high-level strategies:
* Limit pointers
* Allocate in batches
* Try to recycle objects (e.g., `sync.Pool`)



#### What about just tuning GOGC?

* Absolutely helps with throughput. However...
* If we want to optimize for throughput, GOGC doesn't express the real goal: "use all available memory, but **no more**"
* Live heap size is generally but not always small
* High GGOC makes avoiding OOMs harder

Okay, now onto things we can change in code to improve allocation/GC behavior...

### Limit pointers

The Go compiler can be enticed to tell you why a variable is heap-allocated:
```go
go build -gcflags="-m -m"
```
but its output is a bit unwieldy.

https://github.com/loov/view-annotated-file helps digest it:
![image](https://user-images.githubusercontent.com/1646931/44684310-f8c4b700-aa05-11e8-8963-6dffa42c5257.png)

Sometimes, spurious heap allocations are easily avoided!

![image](https://user-images.githubusercontent.com/1646931/44684321-02e6b580-aa06-11e8-892a-f7214bcd6127.png)

![image](https://user-images.githubusercontent.com/1646931/44684378-3590ae00-aa06-11e8-9bda-a3c0dba5cfb4.png)

In addition to avoiding spurious allocations, avoiding structs with inner pointers helps the garbage collector:

![image](https://user-images.githubusercontent.com/1646931/44684432-4fca8c00-aa06-11e8-9258-0b1307d6d0e5.png)

^ Why this discrepancy? Because the sneaky `time.Time` struct conceals a nefarious pointer:

```go
type Time struct {
  wall uint64
  ext in64
  loc *Location
}
```



### Slab allocation

Even though the fast path in the allocator is very optimized, we still need to do some work on every allocation:
* prevent ourselves from being preempted
* check if we need to assist GC
* compute the next free slot in the mcache
* set heap bitmap bits
* etc.

That ends up being ~20ns per allocation, if you need a back-of-the-envelope. In some cases, we can amortize that overhead by doing fewer, bigger allocs:
```go
// Allocate individual interface{}s out of a big buffer
type SlicePool struct {
	bigBuf []interface{}
}

func (s *SlicePool) GetSlice(size int) []interface{} {
	if size >= len(s.bigBuf) {
		s.bigBuf = make([]interface{}, blockSize)
	}
	res := s.bigBuf[:size]
	s.bigBuf = s.bigBuf[size:]
	return res
}
```
The danger is that any live reference will keep the whole slab alive:

![image](https://user-images.githubusercontent.com/1646931/44684603-b94a9a80-aa06-11e8-9249-e2ad311f5587.png)

Also, these aren't safe for concurrent use. They're best for a few heavily-allocating goroutines.


### Recycling objects

Consider the following storage engine architecture:

![image](https://user-images.githubusercontent.com/1646931/44684697-f7e05500-aa06-11e8-9650-7364d17b5401.png)

This architecture
* is simple, easy to reason about
* maximizes available parallelism
* generates tons of garbage

Optimization: explicitly recycle allocated blocks of memory:

![image](https://user-images.githubusercontent.com/1646931/44684763-21997c00-aa07-11e8-9bd2-8ebbc58ef8cb.png)

```go
var buf RowBuffer
select {
  case buf = <-recycled:
  default:
    buf = NewRowBuffer()
}
```

A more sophisticated version would use `sync.Pool`, which
* maintains slices of recycled objects, sharded by CPU (with runtime support)
* allows lock-free get/put in the fast path
* caveat: cleared on every GC

**Danger:** must be very careful to zero or overwrite recycled memory.



## In review

Below is a chart of different benchmarks after successive rounds of optimization (your mileage may vary):

![image](https://user-images.githubusercontent.com/1646931/44685103-df246f00-aa07-11e8-99d1-4fe0a376c69d.png)

In summary,

* The allocator and garbage collector are pretty ingenious!
* Single allocations are fast but not free
* The garbage collector can stop individual goroutines, even though STW pauses are very short
* A combination of tools is essential to understand what's going on: benchmark with GC off
* use CPU profiler to find hot allocations
* use memory profiler to understand allocation count/bytes
* use execution tracer to understand GC pattern
* use escape analyzer to understand why allocations happen

## Acknowledgements and further reading

Special credit to Ian Wilkes and many others at Honeycomb: the true masterminds

Suggested further reading:

**Allocation efficiency in high-performance Go services**
Achille Roussel / Rick Branson
https://segment.com/blog/allocation-efficiency-in-high-performance-go-services/

**Go 1.5 concurrent garbage collector pacing**
Austin Clements
https://golang.org/s/go15gcpacing

**So You Wanna Go Fast**
Tyler Treat
https://bravenewgeek.com/so-you-wanna-go-fast/

### About the author

_Beyang Liu is the CTO and co-founder of Sourcegraph. Beyang studied Computer Science at Stanford, where he published research in probabilistic graphical models and computer vision at the Stanford AI Lab. You can chat with Beyang on Twitter [@beyang](https://twitter.com/beyang) or our community [Discord](https://discord.com/invite/vqsBW8m5Y8)._
