---
title: "GopherCon 2019 - Controlling the go runtime"
description: "Sometimes we need to tell the go runtime what to do. This talk explains how to control the runtime, why we should, and describes two new ways to control it better."
authors:
  - name: Sue Spence for the GopherCon 2019 Liveblog
publishDate: 2019-07-25T00:00-11:55
tags: [
  gophercon
]
slug: gophercon-2019-controlling-the-go-runtime
heroImage: https://about.sourcegraph.com/gophercon2019.png
published: true
---

Presenter: Patrick Hawley

Liveblogger: [Sue Spence](https://twitter.com/virtualsue)

## Overview

Sometimes we need to tell the go runtime what to do. This talk explains how to control the runtime, why we should, and describes three new ways to control it better.

---

### What is the Go runtime?

It's a library used by Go programs while they are executing. It controls things like:
- the garbage collector, managing memory
- the goroutine scheduler 

![Presenter Patrick Hawley](/gophercon-2019/gophercon-2019-controlling-go-runtime-presenter.jpg)

It is a helpful assistant. It is a Go package (https://golang.org/pkg/runtime/). It is not an interpreter (e.g. Python, Ruby) or full runtime environment such as the Java virtual machine. It is useful for profiling and observing what happens during program execution.

Some functions that can be used to control the garbage collector:

- GC() - start garbage collection now (blocking operation)
- KeepAlive(obj) - obj is needed, at least until now
- SetFinalizer(obj, f) - call f when obj is no longer needed

Some functions that can be used to control the scheduler:

- GOMAXPROCS(n) - set max simultaneously executing CPU's 
- Goexit() - terminate the calling goroutine
- Gosched() - yield processor allowing other goroutines to run
- LockOSThread()/UnlockOSThread() - wire/unwire goroutine to current OS thread

Patrick asked if anyone had used any of these functions, and then showed a couple of graphics which represented a search of github for such usage. So we have quite likely indirectly used them.

Some more controls, in package runtime/debug:

- func FreeOSMemory()
- func SetMaxStack(int) int
- func SetGCPercent(int32) int32
- func SetPanicOnFault(bool) bool
- func SetMaxThreads(int) int

env vars: GOMAXPROCS (max executing operating system threads), GOGC (turn off garbage collector)

You can get indirect control of the runtime via context

`ctx, cancel := context.WithCancel(ctx)`

The above requests that all goroutines with ctx, stop. This is scheduler control

#### So ... Why Control the Runtime?

Performance reasons. Testing and benchmarks.

![Why Control the Runtime?](/gophercon-2019/gophercon-2019-controlling-go-runtime-slide1.jpg)

`go test -cpu 1,2,4`

Jaeger tracing uses runtime control to match container CPU quota changes.

We use Goexit() all the time via `t.Fatal("some test failed")`

Gosched() yields processor to allow other goroutines to run. This can be put in a tight loop to make sure the CPU isn't hogged.

LockOSThread()/UnlockOSThread()

Thread local state is used by some libs eg Cocoa, OpenGL, libSDL. 

GC() is useful for testing, improving performance. For example checking the performance of allocating a slice of integers vs a slice of pointers to int. There are garbage collection implications to handling of values vs pointers so runtime directives can be used to benchmark them.

KeepAlive() holds off garbage collection and there are certain situations where it can be used to stop premature cleanup of e.g. file descriptors.

SetFinalizer() as mentioned sets a function to be called when an obj is no longer needed and can be garbage collected. An example was shown which closes an os.File when it goes out of scope.

#### Other Uses For Go Runtime

Not just performance! Testing, Correctness, Profiling (see relevant slide)

So now that we are convinced that using the Go runtime is good!

#### New Ways to Control the Runtime

These are a thought experiment, they do NOT exist (yet)!

Proposals:

1) GoSchedNext() - instruct runtime what to run next. Not by goroutine ids, but goroutines of a certain type. Patrick used the analogy of a "color" to describe goroutines of a related type

![GoSchedNext Colors](/gophercon-2019/gophercon-2019-controlling-go-runtime-slide2.jpg)

2) GoAffinity() - requires or suggests that all goroutines of a certain "color" execute on the same CPU.  
Reasons:

  * avoid CPU L1/L2 cache misses
  * NUMA architecture
  * isolation, keeping code of a certain type separate from other types (e.g. math operations vs http)

3) GoCancel() - cancel all goroutines of a particular "color"

4) GoSend() - Communicate with goroutines of a particular "color"

#### Or, Better Not Go There?

a) We should never control the Go runtime directly  
b) Controlling the runtime is bad programming  
c) ids for Go routines?? Never! Color is just an alias for ids..
d) Let's just make the runtime better

#### But

a) Performance and testing are really necessary items that runtime helps with  
b) User space ought to be fair game for us to control. It's not the kernel, which is legitimately off-limits  
Let users have tools, empower them  
c) Use types, not tokens. Also, why not be open to ids?  
d) YES, make the runtime better. But also give programmers more options.

Main takeaway:

- Controlling the runtime is good!
