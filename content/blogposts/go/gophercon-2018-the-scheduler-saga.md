---
title: 'GopherCon 2018 - The Scheduler Saga'
authors:
  - name: Keegan Carruthers-Smith for the GopherCon Liveblog
publishDate: 2018-08-28T00:00-06:00
tags: [
  "gophercon"
]
slug: gophercon-2018-the-scheduler-saga
description: 'The Go scheduler is the behind-the-scenes magical machine that powers Go programs. It efficiently runs goroutines, and also coordinates network IO and memory management. This talk will explore the inner workings of the scheduler machinery.'
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5nOlXCLdhSk6ESWEW8iC24/01978fdff3206c78ad8bee4c0cdfee87/mechanic-tire.jpg
published: true
---

Presenter: [Kavya Joshi](https://www.gophercon.com/agenda/speakers/279051)

Liveblogger: [Keegan Carruthers-Smith](https://github.com/keegancsmith)

The Go scheduler is the behind-the-scenes magical machine that powers Go programs. It efficiently runs goroutines, and also coordinates network IO and memory management. This talk will explore the inner workings of the scheduler machinery.

## Summary

The talk explains from first principles how to create a goroutine scheduler for Go. It uses the major ideas that are used by the actual Go scheduler. Go has a goroutine scheduler since goroutines are a light weight userspace thread, so Go can't just rely on creating many kernel threads. As such the scheduler explained achieves the following:

- use a small number of kernel threads (kernel threads are expensive to create)
- support high concurency (go programs should be able to create lots of goroutines)
- leverage parallelism. ie scale to N cores.

---

Highly recommend watching a video of the talk when available. There are lots of nice illustrations explaining the ideas below clearly.

```go
func main() {
	for _, u := range images {
		go process(i) // runs goroutines created
	}

	<-ch // pauses and resumes
}

func process(image) {
	go reportMetrics()
	complicatedAlgorithm(image)
	f, err := os.OpenFile() // blocking system calls, network io, runtime tasks garbage collection.
}
```

The above is an annotated program explaining where the go scheduler is invoked. Creating goroutines, waiting on channels and handling blocking system calls.

## Motivation

So why does go have a scheduler? Because go uses goroutines, which are a user-space thread, lighter-weight and cheaper than kernel threads. For example the initial goroutine stack is 2KB. The default kernel thread stack is 8kb. Goroutines also want to have faster creation, destruction, context switches than kernel threads. The scheduler needs to exist since the OS only knows how to schedule kernel threads onto CPU cores.

So the scheduler puts goroutines on threads which run on the CPU. IE it multiplexes goroutines onto threads.

## Idea I

First some non-ideas:
- Multiplex all goroutines on a single thread. no concurrency, no parallelism possible
- create and destroy a thread per-goroutine. defeats the purpose of goroutines, threads are expensive.

So what is a way to achieve this? A runqueue. A runqueue is a FIFO queue containing goroutines which need to be scheduled onto a thread to run. When we create a goroutine, we put it onto the runqueue. When a goroutine is waiting it is put onto the runqueue and another goroutine can start running on the thread (via popping from the runqueue).

We can't just have one thread, otherwise we won't get any concurrency in parallelism, so we need to decide when to create a thread. We can just create a thread whenever there are items on the runqueue and all the threads are busy. This achieves concurrency and parallelism.

So far we have a scheme to reduce thread creations. But problems
- multiple threads access the same runqueue -> so need a lock
- unbounded number of threads. eg t_main creating 1000 goroutines -> 1000 threads.

## Idea II

Limit the number of threads for running goroutines (`GOMAXPROCS`). We still won't limit the number of threads blocked by syscalls, but we still want to limit threads accessing the runqueue as before, keep threads around for reuse, and get goroutines to run from the runqueue.

What should the limit be? Too high = too much contention. Too low = not utilising all the CPU cores. The limit we should use is the number of CPU cores.

This solves the unbounded number of threads problem, but what about the contention on the runqueue? Kavya modified the go runtime to use the scheduler described so far. The results of running an existing benchmark for measuring scheduler performance is:

4-core: 4x slower than go scheduler
16-core: 31x longer than go scheduler.

So more makes the problem worse non-linearly. So this is not good enough. The crux is the shared runqueue.

## Idea 3

Distributed runqueues. Use N runqueues on an N-core machine. A thread claims a runqueue to run a goroutines. It inserts and removes goroutines from the runqueue it is associated with. As before, we reuse threads.

What happens now if our runqueue is empty for a thread? The thread will have no work to do, so it needs a way to find a goroutine to run. The technique used is called work-stealing. So when the local runqueue is empty, it picks another runqueue at random and steals half the runqueue. This organically balances work across threads.

## CPU Hogs

What happens if we have a goroutine that is not co-operative. IE it never does a call which allows the scheduler to take over.

We need a mechanism to pre-empt long running goroutines. The go scheduler implements preemption.  It runs a background thread called the sysmon, to detect long-running goroutines (> 10ms, with caveats) and unscehdules them when possible.

It puts these on a global runqueue. Go scheduler has a global runqueue which is a low priority runqueue, which threads sometimes check. It can be used for other purposes, but not detailed in the talk.

## Limitations

What are the limitations of the Go scheduler?

- FIFO runqueues -> no notion of goroutine priorities (unlike linux kernel)
- No strong preemption -> no strong fairness or latency guarantees. recent proposal to fix this.
- Is not aware of the system topology -> no real locality. There is an old NUMA-aware scheduler proposal. Also a suggestion to use LIFO queue so its more likely to have data in that CPU cores cache.
