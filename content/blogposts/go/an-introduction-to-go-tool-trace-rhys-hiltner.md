---
title: 'An Introduction to go tool trace'
authors:
  - name: Rhys Hiltner
publishDate: 2017-07-13T00:00-07:00
tags: [
  "gophercon"
]
slug: an-introduction-to-go-tool-trace-rhys-hiltner
heroImage: https://images.ctfassets.net/le3mxztn6yoo/6ISMViZAA0QwgqcwQUO0Cw/e77570002073afff3245061060460893/Selection_029.png
published: true
---


Liveblog by Beyang Liu ([@beyang](https://twitter.com/beyang))

**Slides for this talk are available [here](https://speakerdeck.com/rhysh/an-introduction-to-go-tool-trace).**

[Rhys Hiltner](https://twitter.com/rhyshiltner), software engineer at Twitch, works on improving developer experience there. He is the author of critical parts of the Twitch chat server (which he wrote in Go) and works on controlling the latency introduced by the garbage collector.

Today he's giving an introduction to `go tool trace` and describing how you can use it to debug concurrent Go programs.

Go makes it easy to use concurrency with goroutines, which means we do more concurrency, which means we have more concurrency problems.

CPU and memory profiling are common in other languages, but Go's tracing tool is more unique to Go, because Go code is more often high concurrency. It hooks directly into the goroutine scheduling implementation. The UI should be familiar to anyone who has used the tracing tool in Chromium.



When you read the docs, using the Go execution tracer seems very simple:

```go
$ go doc runtime/trace
package trace // import "runtime/trace"

Go execution tracer. The tracer captures
a wide range of execution events ...

A trace can be analyzed later with
'go tool trace' command.
```

But then you end up with something like this:

![Selection 029](https://images.contentful.com/le3mxztn6yoo/6ISMViZAA0QwgqcwQUO0Cw/e77570002073afff3245061060460893/Selection_029.png)

The remainder of the talk will talk about how to decipher the tracing output and how you can use it effectively. To do that, we'll walk through 3 demos:

1. A timing-dependent bug
2. What the tracer doesn't show (it won't fix all your problems)
3. Investigating latency during GC

## A timing-dependent bug (race condition)

Here's how you test, build, and install Go binaries with the race detector enabled:
```go
go test -race
go build -race
go install -race
```

The race detector will detect race conditions and warn you when they occur:

```go
==================
WARNING: DATA RACE
Read at 0x00c420141500 by goroutine 27:
...
Previous write at 0x00c420141500 by
goroutine 26:
...
```

Note that the Go race detector detects data races, and that data races are NOT the same as logical races ("race conditions"). A data race is concurrent access to a single memory address by 2 or more threads where at least one access is a write. A logical race is a bug in a program due to the timing and ordering of events. You can have a data race that does not manifest itself in an observable error and you can have a logical race that does not include a data race.

### gRPC, HTTP/2, and flow control

This is a bug that involves gRPC and HTTP/2. We have a server serving client requests in parallel, and it does flow control to make sure the bits get sent to the right consumers.

Here's what the trace looks like when we encounter the bug:

![Selection 030](https://images.contentful.com/le3mxztn6yoo/C2SacK5pbUWKYcaMACi2u/8af6d55a2e5ba8bff2904447a5081bc5/Selection_030.png)

Note the long pauses.

This server would send very large and very slow responses to its clients. It was typical for clients to say "eh I don't need that data actually" and then  issue another request.

So to investigate, we run a command to create the trace output file. Then we pass that file to `go tool trace`. We get several options for visualizing the data:

![Selection 031](https://images.contentful.com/le3mxztn6yoo/5gxYB3kKJGOMsuEKEac8mc/166fc4256479128e7fc5716139be2aaf/Selection_031.png)

### Visualization 1: "View trace"

Note the 1 second pause. The fact that it pauses is surprising. We'd expect this server to be continuously serving client requests. But the 1 second length of the pause isn't surprising, because that's what the `context.WithTimeout` timeout is in the code.


![Selection 032](https://images.contentful.com/le3mxztn6yoo/UkxPBu9eKGkweeGEoKi0y/62ba78535740e596a842a60feec8197d/Selection_032.png)

We're going to click around a bunch in the tracing UI. If you do this yourself, consult the help screen:

![Selection 033](https://images.contentful.com/le3mxztn6yoo/1D2utrojmYq6IQ02YAmM40/e20c41222c4c8b7a8f626660ac9bcd6c/Selection_033.png)

Here's a quick overview of this view:


![Selection 092](https://images.contentful.com/le3mxztn6yoo/6n3UgaHcVas2qccGGom6aW/c8146baf53213160a652dd60ae9a181a/Selection_092.png)

### Visualization 2: "Sync blocking profile"

Let's use this visualization on our example:

![Selection 035](https://images.contentful.com/le3mxztn6yoo/3d6tMBYt8QkMO46QeGUeyu/eb799a82b5513a914af9b636e0a30e10/Selection_035.png)

![Selection 036](https://images.contentful.com/le3mxztn6yoo/1coke9T28wuoeWmaO0io0m/537e24a8fe2568cbf52d45b997ad82e5/Selection_036.png)

![Selection 037](https://images.contentful.com/le3mxztn6yoo/2YLaFW7KvmEe2EoyUiOggo/dcdf7e6ee3300cf15c906602ff3ab578/Selection_037.png)



### Visualization 3: "Goroutine analysis"

All the different types of goroutines running in the program during the trace period:

![Selection 038](https://images.contentful.com/le3mxztn6yoo/6fRbIJZ8CAMWguic0UCWas/1b521974a8c060e35c9e24664bed8085/Selection_038.png)

Click the top item, with 10000 goroutines, and we get here:


![Selection 039](https://images.contentful.com/le3mxztn6yoo/4OFTnOvSZq4iqOOseYuuig/6ab8692df5cc2bd19c3c90d593390c91/Selection_039.png)

The Sync block time corresponds to the 1 second pause we saw.

![Selection 040](https://images.contentful.com/le3mxztn6yoo/4i5gNOIoY0gGaIakWWEaiW/d6fc265596c4e4342eda5f8312683346/Selection_040.png)



What was the goroutine doing when it suddenly stopped? The Go execution tracer can lead us to the relevant code:

![Selection 041](https://images.contentful.com/le3mxztn6yoo/1DPVypYONG0WSQeqeMQYYa/6a56bbd4827b1e196e295d3a2ef35de9/Selection_041.png)

![Selection 042](https://images.contentful.com/le3mxztn6yoo/23en1HvMfKe08m68I8m8U6/cc55d4885a419d73b29fd4fbd2b79c73/Selection_042.png)

The body of that function is a giant select statement. The proceed channel is the only case that returns an actual non-error value.

```go
func wait(ctx context.Context, ...,
  proceed <-chan int) (int, error) {

  select {
  case <-ctx.Done():
   // ...
   case ...: // stream closed, etc
   case i := <-proceed:
     return i, nil
   }
}
```

`wait`'s called from here:

```go
t.sendQuotaPool.add(0)

tq, err := wait(s.ctx, ...,
  t.sendQuotaPool.acquire())

if err != nil && ... {
  t.sendQuotaPool.cancel()
  return
}

// calculate payload size ...
t.sendQuotaPool.add(tq-ps)
```




The quota pool looks like this:



```go
type quotaPool struct {
  c chan int // positive quota here
  mu sync.Mutex
  quota int  // zero or negative quota
}
```

When we create it, the integer channel has capacity 1. Might be empty or might contain a single integer. If the initial quota is positive, the value is sent to the channel, other wise the value is put into the `qb.quota` field.

```go
func newQuotaPool(q int) *quotaPool {
  qb := &quotaPool{
    c: make(chan int, 1),
  }
  if q > 0 {
    qb.c <- q
  } else {
    qb.quota = q
  }
  return qb
}
```



Acquire method is trivial:

```go
func (qb *quotaPool) acquire()
  <-chan int {
  return qb.c
}
```

The add method is interesting. Protected by a lock. Does arithmetic to figure out how much quota leftover. If quota left, attempts to send, then zeros out.

```go
func (qb *quotaPool) add(n int) {
  qb.mu.Lock(); defer qb.mu.Unlock()
  if qb.quota += n; qb.quota <= 0 {
  return
}
select {
  case qb.c <- qb.quota:
    qb.quota = 0
  default:
  }
}
```


cancel method pretty much breaks the invariant we might want to make by receiving on the channel. When this function returns, the channel is definitely empty.

```go
func (qb *quotaPool) cancel() {
  qb.mu.Lock(); defer qb.mu.Unlock()
  select {
  case n := <-qb.c:
    qb.quota += n
  default:
  }
}
```

Here's how execution of these methods might interleave across multiple goroutines:

![Selection 065](https://images.contentful.com/le3mxztn6yoo/pCLL9lrMg8kIOq4CEA84E/b8e31659320e5f17f84fa70189f08592/Selection_065.png)

or it might do this

![Selection 066](https://images.contentful.com/le3mxztn6yoo/52VIgkciH6MgKkI2m8gC4A/d9b30737dd4ba3dc8386e936f8c0def9/Selection_066.png)

or maybe this

![Selection 067](https://images.contentful.com/le3mxztn6yoo/2fqqws6VcceYGsK4AIoQ4E/26803797dd758ab883cda7648b637cf0/Selection_067.png)






Let's take a look at the goroutine that's about to stall. It overlaps completely with the goroutine above it. They overlap for 36 microseconds.

![Selection 043](https://images.contentful.com/le3mxztn6yoo/7xCss3I0neuUUC4IOa0AGw/d178a87cd30a5c17572e87179ad390be/Selection_043.png)

So it looks like it's doing this:

![Selection 068](https://images.contentful.com/le3mxztn6yoo/tpUaVpcxBQ0kUQgiCk2A6/5b6e7e8c683849b1946795ed77868c63/Selection_068.png)



So the cancel method appears to be the culprit here. So we delete it.


In addition, we need to modify the add function to always clear the channel, always calculate the total quota available, and if positive, always put value back on channel. So if any quota available, always ready to receive.

```go
func (qb *quotaPool) add(v int) {
  qb.mu.Lock(); defer qb.mu.Unlock()
  select {
  case n := <-qb.c:
    qb.quota += n
  default:
  }
  if qb.quota += v; qb.quota > 0 {
    qb.c <- qb.quota
    qb.quota = 0
  }
}
```






## The Go tracer is not a panacea

This is just one tool. If you want to know what a goroutine starts or stops or why it stops or starts, this tool answers that question. Other questions? You probably need a different tool.








There's three ways to get the tracing data.

1. Testing with -trace flag
2. Direct runtime/trace use
3. net/http/pprof handlers




















This is an execution trace from another program:


![Selection 044](https://images.contentful.com/le3mxztn6yoo/3F3FAQIbJYyoumgkie64Yi/10c6a0551c017c10975febef929eb11b/Selection_044.png)

![Selection 045](https://images.contentful.com/le3mxztn6yoo/5d0xohJB8s8ccmQkme2C6C/d9e17633ff3573d21bccb3cef75e3b5e/Selection_045.png)

Note:

1. suspicious gaps
2. heavy garbage collection
3. another type of goroutine that doesn't look like the others



`runtime.ReadMemStats` and large (40GB) heap leads to long pauses in Go 1.8 or earlier (fixed in Go 1.9).


What about the other goroutine?

![Selection 046](https://images.contentful.com/le3mxztn6yoo/4qLyMxQ3MA4ekE4SwYgMSm/5027c63c363c1e3872af17f99e2dac02/Selection_046.png)

![Selection 047](https://images.contentful.com/le3mxztn6yoo/6t8do3L83eYMQESwSsmIAm/e42230c4c93b15a14c13d32ed34a56f4/Selection_047.png)

Note these questions do not pertain to when the goroutine starts or stops, so the execution tracer is probably not the right tool to answer these questions. It might be helpful to add the capability to provide annotations to the tracer for additional context, but that's not currently a feature.








## The GC is still improving

Go's garbage collector has come a long way, but it's still improving.

Here's an execution trace from a server:

![Selection 048](https://images.contentful.com/le3mxztn6yoo/3Hy24tFtHiSUEg4g0Kgqcs/087ef2b6357ea68ed6fca66b28836d66/Selection_048.png)

Note the number of goroutines waiting to run increases (note the bump).

There's also patchiness in the client network requests. The clients don't magically know about the server's goroutine usage, so this seems suspicious.

And some behavior is different during GC, which is expected, but it would be nice if it were as close to non-GC behavior as possible.



A brief history of Go garbage collection timeline:
* Go 1: program fully stopped
* Go 1.1: GC uses parallel threads
* Go 1.4: precise collection (understood the difference between large integers and pointers)
* Go 1.5: global application pauses < 10ms
* Go 1.8: individual goroutine pauses < 100μs

![Selection 049](https://images.contentful.com/le3mxztn6yoo/5SOjEgRUwosCwGmaOA4QMY/c11f41dd8a275bd849824772002c40d6/Selection_049.png)

![Selection 050](https://images.contentful.com/le3mxztn6yoo/FgFCsIwIEwWG0MWK2cwoG/50311a63a3df028a9ff2220fe6f8ee4a/Selection_050.png)

![Selection 051](https://images.contentful.com/le3mxztn6yoo/3ffwibcVmMKQCaeKSSuuOW/a52d05000eb4e3ff348e748f487c9294/Selection_051.png)

![Selection 052](https://images.contentful.com/le3mxztn6yoo/1vtsqtlG3W8msakAc0YcUc/03cb42b43d47146aa07727659c9db16d/Selection_052.png)









### Stop the world pauses

Everything stops when the GC begins and ends its mark phase (garbage collector does bookkeeping here that requires user code to stop). Stopping everything takes time:

![Selection 053](https://images.contentful.com/le3mxztn6yoo/18fRvlKaG4Msuw02AS0MMe/0b83b93540af2a03b23e58b2fc6312d4/Selection_053.png)

Here, we have an issue, because a few straggler goroutines don't stop with the others. GC can only begin after all goroutines have stopped. In the 3.6ms gap between most goroutines stop and when the laggards stop, GC cannot proceed and there is no CPU utilization.





Why does this happen? Well, goroutines can stop when:
* ✓ allocating memory
* ✓ calling functions
* ✓ communicating
* ✗ crunching numbers in a loop

So if you're crunching numbers in a loop, your goroutine might chug on refusing to stop. You can observe this behavior if you use:

* encoding/base64
* encoding/json
* .../golang/protobuf/proto

It's measurable for 1MB values if you're looking for it (check code lines before "End Stack Trace"). Or just write your own tight loop to observe it:

```go
go func() {
  for i := 0; i < 1e9; i++ {
  }
}
```





The Go 1.10 compiler should have a general, permanent fix (golang.org/issue/10958). The workaround is available now.

![Selection 054](https://images.contentful.com/le3mxztn6yoo/3k9SDwShWoIsgwm0wMMcGE/864744c4bbfeea27dcfcaf55c807e03e/Selection_054.png)



### Other awkward pauses

There's a couple of other ways that GC can make your program have awkward pauses.

Recall that in a mark/sweep GC,
* "mark" finds in-use memory
* "sweep" reclaims the rest

The GC needs to make progress; it needs to know that it will collect garbage before we OOM. User code works against that. User code is forced to help out the GC.

Each of these goroutine lines has 2 rows. The top is user code, the bottom is GC:

![Selection 055](https://images.contentful.com/le3mxztn6yoo/6mondzjgQ0oWgk2WyOm046/1b672b0b8ff75321b0c1778792b81241/Selection_055.png)


Here's an assist that ran for 4.4ms:

![Selection 056](https://images.contentful.com/le3mxztn6yoo/59PzEvaVZKGuyYwCqU0EEO/c1d61a9b21f3e5887165ecfac05be0eb/Selection_056.png)


Other assists are slower:

![Selection 057](https://images.contentful.com/le3mxztn6yoo/44NQsrYsusUuqaKUUgKGuI/cffe74043c0a6a67fdb2bc79636cd231/Selection_057.png)

...but that goroutine probably allocated 10MB of memory, so it deserved what it got.


Most assists are well-deserved, but they start suddenly.

Sweeping requires assists too. So consider not allocating in critical paths as best you can.

## Recap

Check it out: `go tool trace`

How can `go tool trace help you?`

1. See time-dependent issues
2. Complements other profiles
3. Find latency improvements


## Q&A




Q: What's the overhead of all the profiling stuff?

A: Short answer: worth it. Longer answer: Generally low overhead. I ask people before making these types of requests to their code, but I don't think twice about tracing my own.

Q: Do you recommend running it all the time on production code?

A: I definitely recommend having it enabled, so you can make the HTTP request to fetch the data. But probably don't need to invoke the profiler every second.
