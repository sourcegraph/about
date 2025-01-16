---
title: "Go's Work Stealing Scheduler"
authors:
  - name: Jaana B. Dogan (speaker)
publishDate: 2017-11-06T17:30+01:00
tags: [
  "dotGo"
]
slug: gos-work-stealing-scheduler
heroImage: https://images.ctfassets.net/le3mxztn6yoo/40NFOZBGkgG6IyKoMgQIGg/c1626b318de4be28314cbdc989a01525/logo-dotgo-black-web.png
published: true
---

Go scheduler's job is to distribute runnable goroutines over multiple worker OS threads that runs on one or more processors. With its work stealing strategy and spinning threads, it does a lot to minimize context switches and aim better CPU utilization. This talk will a dive into the runtime scheduler and all the additional flavors it implements to make your programs more performant.

--

Note: This post was live-blogged at [dotGo 2017](https://www.dotgo.eu/). Let us know on Twitter ([@sourcegraph](https://twitter.com/sourcegraph)) if we missed anything. All content is from the talk; any mistakes or misrepresentations are our fault, not the speaker's.

--

The runtime scheduler picks which goroutine to runs, which threads they run on
as well as which CPU's the threads run on. In Go we don't deal with the
processor or the threads, the runtime does it for us. We instead just deal
with goroutines. This talk is about how the runtime does the scheduling for
us.

The scheduler is called an M:N scheduler. M goroutines need to be scheduled on
to N OS threads that run on available processors. At anytime there are
multiples cores running a small pool of threads which are running goroutines.

The scheduler does its job via moving goroutines from a global runnable queue
onto an available thread. There is also not runnable goroutine queue for
goroutines that are not ready to run (I/O, etc). The objective of the
scheduler is to utilize the threads with runnable goroutines so the processor
do as much work as possible.

The scheduler runs into two big problems: Mutating the global run queue
requires holding a global lock. Go is also often used to write blocking I/O
heavy programs. The constant pre-emption of OS threads has significant
overhead. To mitigate the first problem the runtime switched to a model which
depends less on the global queue. They also avoid context switches by doing
spinning to prevent thread pre-emption.

As part of depending less on the global run queue the scheduler became a work
stealing scheduler:
* Work sharing: After creation of new threads, a process attempts to migrate
  some of them to the other processors.
* Work stealing: An underutilized processor actively looks for other process's
  threads and steal some.

For the stealing model each processor has a local queue. Rather than looking
at the global queue, it will rather try to steal from another processor's
queue. Most of the strategy can be read in the runtime.schedule function
[proc.go](https://sourcegraph.com/github.com/golang/go@go1.9/-/blob/src/runtime/proc.go#L15). The
main challenge of a general purpose scheduler is to improve perf both for high
throughput and I/O bounded programs.

More about spinning: The runtime prefers to burn some CPU cycles rather than
preemption of the thread. There are three states that a thread can be
spinning:
1. A thread is running but no goroutines, will search for runnable go
   routines.
2. Thread is spinning when it is not on a processor.
3. When readying a goroutine we will unpark a thread onto an idle processor.

Best way to understand the scheduling events is to use `go tool trace`. If
you look at your output of `go tool trace` and there is too much
whitespace/gaps that is where the processor is not utilized. So that means you
may be able to change your program to better utilize the available processors.

Learning more about the runtime internals gives you more confidence in the
schedular and what it does. This is useful since we all rely on the scheduler.
