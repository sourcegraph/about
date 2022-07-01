---
title: 'GopherCon 2018 - Rethinking Classical Concurrency Patterns'
authors:
  - name: Dmitri Shuralyov
publishDate: 2018-09-04T00:00-07:00
tags: [
  "gophercon"
]
slug: gophercon-2018-rethinking-classical-concurrency-patterns
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5Oj3acpp7yysQg04W2AW4A/a93d79c10ad903d3902f6b6d8707973a/mechanic-tire-2.jpg
published: true
---

Presenter: [Bryan C. Mills](https://www.gophercon.com/agenda/speakers/279041)

Liveblogger: [Dmitri Shuralyov](https://dmitri.shuralyov.com/about)

In this talk, Bryan Mills from the Go team at Google invites us to rethink and reinvent some classical concurrency patterns in the context of Go.

## Summary

This talk will cover two principles related to the Go concurrency primitives (goroutines and channels), and apply them to some concurrency patterns:

1. Start goroutines when you have concurrent work.

2. Share by communicating.

Bryan came up with about 100 slides (with lots of Go code on them!) trying to understand the implications of those two principles, and he invites you to follow along.

---

#### Preface

"Rethinking Classical Concurrency Patterns" is arguably one of the most technical and information-dense talks of GopherCon 2018. It's 45 minutes and consists of 100 slides, the vast majority of which contain code snippets that start goroutines, send and receive from channels, signal condition variables, and so on.

As a result, it's not possible to cover the material fully in a liveblog. Fortunately, Bryan has promised to make the slides available afterwards, and they also contain Playground links in the notes. This liveblog serves to pique your interest in the talk by giving you a very high level outline of the material. I highly recommend you check out the slides with full details when they become available!

## Introduction

![1](https://user-images.githubusercontent.com/1924134/44950649-59dff680-ae1b-11e8-92ae-c2224dff0b18.jpg)

In this talk, Bryan Mills from the Go team at Google invites us to rethink and reinvent some classical concurrency patterns in the context of Go.

Bryan understands that to truly convince of the merits of an alternative pattern, it's important to start with an understanding of the traditional patterns; to explain their benefits and weaknesses first. It's not enough to only talk about the advantages of something new.

> “You cannot flip a brain from zero to one simply by praising the one. You must start at the zero, extoll its virtues, explore its faults, exhort your listeners to look beyond it. To weigh the zero against the one, the listener must have both in mind together. Only when they have freely chosen the one will they abandon the zero.”
> ― [The Codeless Code, Case 196: Fee](http://thecodelesscode.com/case/196)

This talk will cover two principles related to the Go concurrency primitives (goroutines and channels), and apply them to some concurrency patterns:

1. Start goroutines when you have concurrent work.

2. Share by communicating.

Bryan came up with about 100 slides (with lots of Go code on them!) trying to understand the implications of those two principles, and he invites you to follow along.

There are three general sections to this talk:

1. Examine the basic “asynchronous” patterns (Futures, Queues) which function as the concurrency primitives in some other languages.

2. Deep dive on Condition Variables.

3. Apply what we've learned to analyze the Worker Pool pattern.

## Asynchronous APIs

Rob Pike has said that “Concurrency is not Parallelism”. Concurrency is not Asynchronicity either.

In this talk, an asynchronous API is defined as one that returns to the calling function early.

An asynchronous program is not necessarily concurrent: a program could call an asynchronous function and then sit idle waiting for the results.

Some poorly-written asynchronous programs do exactly that: a sequential chain of calls that each return early, wait for a result, and then start the next call.

### Callbacks

Bryan briefly mentions asynchronous callbacks as something programmers from other certain languages sometimes try to use. But he notes that most Go programmers already know not to use them in Go, and moves on to talking about Futures and Producer–Consumer Queues.

Playground: https://play.golang.org/p/jlrZshjnJ9z

### Futures

Instead of returning the result, the function returns a proxy object that allows the caller to wait for the result.

May know “futures” by the name “async and await” in other languages.

In Go, usually implemented as a single-element buffered channel that receives a single value. Often starts a goroutine for computing that value.

Playground: https://play.golang.org/p/v_IGf8tU3UT

![2](https://user-images.githubusercontent.com/1924134/44950662-c1964180-ae1b-11e8-93d8-93536e8e2d19.jpg)

### Producer–Consumer Queues

A queue also returns a channel, but the channel receives any number of results and is typically unbuffered.

The caller is a range-loop rather than a receive operation.

Playground: https://play.golang.org/p/GpnC3KgwlT0

### Benefits and Weaknesses of Asynchronous APIs

Now that we know what an asynchronous API looks like, let's examine the reasons we might want to use them.

In some popular languages and frameworks, the UI and network logic happens on a single thread. If that thread blocks for long, UI will lag, or network will become less responsive.

Calls to async APIs don't block and can help.

Classical benefits are:

- Responsiveness: avoid blocking UI and network thread.
- Efficiency: reclaim stack frames.
- Concurrency: initiate concurrent work.

The first two benefits don't apply to Go.

The runtime manages goroutines. Runtime also resizes and reallocates stacks as needed. Today stacks start at 2 KB.

Sometimes reclaiming stack frames is an optimization, but not other times:

- Reference that escapes its frame must be allocated in the heap, and heap allocations are more expensive in terms of CPU, memory, and cache.
- Compiler can already prune out any stack allocations that it knows are unreachable.
- Benefit of this optimization depends on the specific call site.

Asynchronicity as an optimization is very subtle and needs benchmarks to prove its worth.

The final benefit of asynchronous APIs does apply in Go. When an async function returns, the caller can immediately make further calls to start other concurrent work. Concurrency can be especially important for network RPCs.

Unfortunately, that benefit comes at the cost that the caller-side API is less clear:

```Go
a := Fetch(ctx, "a")
b := Fetch(ctx, "b")
if err := […] {
    return err
}
consume(<-a, <-b)
```

- What happens if we return early?
- Will `Fetch` keep using resources?

```Go
for result := range Glob(ctx, "[ab]*") {
    if err := […] {
        return err
    }
}
```

- Will channels ever be closed?
- Will we leak goroutines?

These async APIs raise a lot of questions. To answer them, we'd have to dig through documentation or code; it's not very clear otherwise.

Can we have the same benefits with a different approach?

Let's go back to the drawing board.

- Start goroutines when **you** have concurrent work.
- Add concurrency on the **caller side** of the API.
- Make concurrency an **internal detail**.

#### Concurrency is not Asynchronicity

In Go, async and sync APIs are equivalent. It's easy to convert from one to another.

We don't need to pay the costs of async to get the benefits.

## Condition Variables

In the second large section of his talk, Bryan goes into a deep dive on Condition Variables. It's not viable to cover the topic in this liveblog fully, so consider the following as a brief outline, and look forward to the upcoming slides for full details.

Bryan goes over the history, basic setup and functionality of condition variables:

```Go
type Queue struct {
    mu        sync.Mutex
    items     []Item
    itemAdded sync.Cond
}

func NewQueue() *Queue {
    q := new(Queue)
    q.itemAdded.L = &q.mu
    return q
}

// ...
```

![4](https://user-images.githubusercontent.com/1924134/44950674-28b3f600-ae1c-11e8-854b-b3889b012a65.jpg)

![5](https://user-images.githubusercontent.com/1924134/44950685-73ce0900-ae1c-11e8-94ad-42f8232c025b.jpg)

He discusses some of the downsides, including:

- Spurious wake-ups: Broadcast may wake up too many waiters
- Forgotten signals: Pruning risks dropping necessary signals
- Starvation: if the waiters are not uniform, the pickier ones can starve
- Unresponsive cancellation: if the caller cancels, call will block until the next time the condition is signaled

Condition variables rely on communicating by sharing memory. On the other hand, the Go approach is to share by communicating.

#### Share by communicating

![6](https://user-images.githubusercontent.com/1924134/44950665-e68ab480-ae1b-11e8-8795-8a8cfaf97e89.jpg)

We start by looking at a concrete example and iterate from there:

```Go
type Pool struct {
    mu               sync.Mutex
    cond             sync.Cond
    numConns, limit  int
    idle             []net.Conn
}

func NewPool(limit int) *Pool {
    p := &Pool{limit: limit}
    p.cond.L = &p.mu
    return p
}

func (p *Pool) Release(c net.Conn) {
    p.mu.Lock()
    defer p.mu.Unlock()
    p.idle = append(p.idle, c)
    p.cond.Signal()
}

func (p *Pool) Hijack(c net.Conn) {
    p.mu.Lock()
    defer p.mu.Unlock()
    p.numConns--
    p.cond.Signal()
}

func (p *Pool) Acquire() (net.Conn, error) {
    p.mu.Lock()
    defer p.mu.Unlock()
    for len(p.idle) == 0 &&
        p.numConns >= p.limit {
        p.cond.Wait()
    }

    if len(p.idle) > 0 {
        c := p.idle[len(p.idle)-1]
        p.idle = p.idle[:len(p.idle)-1]
        return c, nil
    }

    c, err := dial()
    if err == nil {
        p.numConns++
    }
    return c, err
}
```

Now we can rethink:

- Share resources by communicating the resources.
- Resource limits are resources too.

Effective Go has a hint:

> A buffered channel can be used like a semaphore […].
> The capacity of the channel buffer limits the number of simultaneous calls to process.
> ― [Effective Go](https://golang.org/doc/effective_go.html)

A buffered channel can be used as a semaphore.

We'll have a channel for the limit tokens, and one for the idle-connection resources. A send on the semaphore channel will communicate that we have consumed a slot toward the limit, and the idle channel will communicate the actual connections as they are idled.

The code becomes:

```Go
type Pool struct {
    sem  chan token
    idle chan net.Conn
}
type token struct{}

func NewPool(limit int) *Pool {
    sem := make(chan token, limit)
    idle := make(chan net.Conn, limit)
    return &Pool{sem, idle}
}

func (p *Pool) Release(c net.Conn) {
    p.idle <- c
}

func (p *Pool) Hijack(c net.Conn) {
    <-p.sem
}
```

Channel operations combine synchronization, signaling, and data transfer.

Playground: https://play.golang.org/p/j_OmiKuyWo8

Bryan then comes back to the previously talked about queue example, and applies these ideas there:

- Queue
- Queue cancellation
- Condition variable: repeating transition
- Events can be data
- Events can be completions

![7](https://user-images.githubusercontent.com/1924134/44950691-a7a92e80-ae1c-11e8-9962-eb6b1fcc6406.jpg)

The pattern in this section is that when we “share by communicating”, we should communicate the things that we want to share, not just messages about them.

> "Share **a thing** by communicating **the thing**."

## Worker Pools

In the third large section, Bryan applies our previous lessons on the Worker Pool pattern.

The Worker Pool (aka “thread pool”) is a pattern that treats a set of goroutines as resources.

![8](https://user-images.githubusercontent.com/1924134/44950700-d6270980-ae1c-11e8-9e51-a49c660a83d9.jpg)

One of the problems are idle workers:

![idle](https://user-images.githubusercontent.com/1924134/44950657-adeadb00-ae1b-11e8-8298-cff39cb3317e.png)

This makes it hard to debug, because the useful information is spread between lots of idle workers that are not relevant.

```text
       2 kilobytes
     x N workers
     = ?
```

Goroutines are lightweight, not free.

Bryan proceeds to rethink this pattern to resolve this problem. This is very interesting and worth waiting for the slides to see in full detail. I won't be able to do it justice here.

The general idea is to treat limits as resources, and remember to communicate by sharing the thing (limit).

## Important Performance Note

Bryan adds one last note: in this talk he has focused on making the code clear and robust.

The patterns he recommended should all be reasonably efficient, but he can't promise that they provide optimal performance. He hasn't _benchmarked_ them.

If you do benchmarks, you may find that performance is better with one of the patterns he has cautioned against. You may take the downsides of those patterns into account and decide to use the patterns anyway. If you do, **please remember to document your reasoning, and check in the benchmarks that support it.** The Go language itself doesn't change much at the moment, but the implementation certainly does.

## Recap

Here's what we learned from the talk:

- Start goroutines when you have concurrent work to do immediately.

	- Don't contort the API to avoid blocking the caller.
	- Don't spool up idle workers that will just fill up your goroutine dumps.
	- It's easy to start goroutines when you need them, and easy to block when you don't.

- Share things by communicating those things.

	- Opaque signals about shared memory make it easy to send the signals to the wrong place, or miss them.
	- Instead, communicate where things need to go, and then communicate to send them there.

Look forward to Bryan's slides to see much of the code in context, and learn in depth on the topic!

![9](https://user-images.githubusercontent.com/1924134/44950711-08386b80-ae1d-11e8-8a66-5bebcf655570.jpg)
