---
title: 'Understanding Channels'
authors:
  - name: Kavya Joshi
publishDate: 2017-07-14T00:00-07:00
tags: [
  "gophercon"
]
slug: understanding-channels-kavya-joshi
heroImage: https://images.ctfassets.net/le3mxztn6yoo/1bLhl0PavGUCa2OKSCm0GS/24def891d0798b5c216b3ac645ed3680/Selection_064.png
published: true
---


Liveblog by Jaana B. Dogan ([@rakyll](https://twitter.com/rakyll))

## About the speaker
[Kavya](https://twitter.com/kavya719) writes Go for a living at a start-up in San Francisco. She's primarily a backend/ systems developer, but has of late been dabbling in firmware too. Her favorite aspects of being a programmer are reasoning about systems at scale, and delving into the inner workings of sophisticated software. When not programming, she tends to spend her time on rock walls and mountain tops. Before moving to San Francisco to be an Adult, Kavya was at MIT where she got a Bachelor's and Master's in Computer Science.






## Summary
Channels provide a simple mechanism for goroutines to communicate, and a powerful construct to build sophisticated concurrency patterns. We will delve into the inner workings of channels and channel operations, including how they're supported by the runtime scheduler and memory management systems.

A fair number of us are using Go for concurrency features. Channels are not just  useful, they are interesting.

We can implement a simple task queue with just channels.


![Selection 064](//images.contentful.com/le3mxztn6yoo/1bLhl0PavGUCa2OKSCm0GS/24def891d0798b5c216b3ac645ed3680/Selection_064.png)



Channels are interesting because:
- Channels are goroutine safe
- Channels carry messages between goroutines
- FIFO semantics
- Channels cause blocking and unblocking

Even though we understand all these properties, you take a second to appreciate and you want to understand how it works.

This talk is about:
- Making channels (the hchan struct)
- Sends and receives (goroutine scheduling)
- Stepping back (design considerations)

## Making channels

First, you need to first create a channel to use it. make can create both buffered and unbuffered channels. This talk is primarily about buffered channels.

A buffered channel with a capacity of 3:
ch := make(chan Task, 3)


* Goroutine safe
* Stores up to capacity elements and provides FIFO semantics
* Sends values between goroutines
* Can cause block/unblock


![Selection 059](//images.contentful.com/le3mxztn6yoo/65EmHei252GgU8CoWUag0S/45204cd810750733d6dbbb9a3f60c1a6/Selection_059.png)

`make chan` allocates an hchan struct on the heap and initializes it and returns a pointer to it. This is why we can pass channels between functions.

## Using the channels

![Selection 060](//images.contentful.com/le3mxztn6yoo/6siFDT2yHKeUsGg2eUYMI2/e67e66e91e2cf6ffefbf122455e3b87d/Selection_060.png)


### How send and receive works?

* G1 is the sender and G2 is the worker.
* G1 comes along first and sends to the channel. The lock is acquired and the value is queued. Queuing is actually a memory copy.
* Then, G2 comes along and does the inverse. It acquires the lock and dequeues which also mem copies the value.
* Copying gives us the safeness, the channel is protected by mutex and nothing else is shared. Values are copied.


### How blocking/unblocking works?

Assume G1 keep sending and it takes a long time to process G2. When channel is full, G1’s execution is paused; how does pausing work?

* It happens at the runtime scheduler.
* Goroutines are user-space threads, created and managed by the Go runtime, not the OS. These are lightweight compared to OS threads w.r.t. research consumption and scheduling overhead.
* Go scheduler is a M:N scheduler: few OS threads and N goroutines; and scheduler is responsible to schedule the goroutines on limited number of OS threads.

### Pausing goroutines


![Selection 061](//images.contentful.com/le3mxztn6yoo/16s9byzycQoyCoyyC6OUKy/1d67eb5b8de87a2a14eaf47219573820/Selection_061.png)

When a goroutine needs to be paused, chan calls into the scheduler to park G1, what scheduler does is to change G1 from running to waiting. And schedule another goroutine on the OS thread.

* This is good for perf. We haven’t stopped the OS thread but scheduled another goroutine by context switching. This is not expensive.
* We need to resume the paused goroutine once the channel is not full anymore.


### Resuming goroutines

![Selection 062](//images.contentful.com/le3mxztn6yoo/xWHygqQaGGiuig06gIGo2/1589aeccf04225fa84b69bbd3a36fa14/Selection_062.png)


* Waiting goroutine struct has a pointer to the element it is waiting on.
* G1 created a sudog for itself, puts it in the channel’s wait queue. Sudog will be used to resume the G1 in the future.
* What G2 does when the channel is not full anymore is to pop off the sudog. G1 is set runnable again. The runtime schedules G1 again and G1 resumes.

(Also explains the case what happens when G2 needs to be parked and resumed again.)

### Direct send


![Selection 063](//images.contentful.com/le3mxztn6yoo/31ysUHAcYMSIYke6koU8Qq/d9b30737dd4ba3dc8386e936f8c0def9/Selection_063.png)

When G1 finally runs, it needs to acquire the lock. But the runtime is actually is so much smarter to make this less costly. Runtime can copy directly to the receiver stack. G1 writes directly to G2’s stack and doesn't have to acquire any locks.

On resuming, G2 does not need to acquire channel lock and manipulate the buffer. This also means one fewer memory copy.

### Unbuffered channels or select?

Not in the scope of this talk. The Go runtime is written is Go and you read the source code to learn.

## Stepping back…

Why are the channels implemented the way they are? Two main points:
Simplicity: queue with a lock preferred to lock-free implementation.
Performance: goroutine wake-up path is lockless and potentially fewer memory copies.

In the implementation of channels, there's an astute trade-off between simplicity and performance.
