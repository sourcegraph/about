---
title: 'Lightning Talks'
authors:
  - name: Speakers
publishDate: 2017-11-06T14:45+01:00
tags: [
  "dotGo"
]
slug: lightning-talks-1
heroImage: https://images.ctfassets.net/le3mxztn6yoo/40NFOZBGkgG6IyKoMgQIGg/c1626b318de4be28314cbdc989a01525/logo-dotgo-black-web.png
published: true
---

The lightning talks are the first round of lightning talks from many speakers.

Note: This post was live-blogged at [dotGo 2017](https://www.dotgo.eu/). Let us know on Twitter ([@sourcegraph](https://twitter.com/sourcegraph)) if we missed anything. All content is from the talk; any mistakes or misrepresentations are our fault, not the speaker's.

## Reducing Go programs

Daniel Marti

* Reducing go program means to simplify code without changing what it does.
* [go-fuzz](https://github.com/dvyukov/go-fuzz) is great at finding bugs via fuzzing.
* [gosmith](https://github.com/dvyukov/gosmith) works with syntax trees, not
  bytes. So is much more effective at finding bugs in Go compiler.
* It has found 50+ compiler bugs, 3+ spec changes
* However, it produces hard to understand output. An example is shown which a
  go program takes up a whole slide gets reduced to a few lines which still
  reproduces a compiler bug.
* gosmith is based on prior art:
  [csmith](https://github.com/csmith-project/csmith) which fuzzes c compilers.
* To solve hard to understand cases, the csmith-project also has
  [creduce](https://github.com/csmith-project/creduce) which
  simplifies/reduces c programs while still reproducing the c compiler bug.
* [mvdan.cc/goreduce](https://mvdan.cc/goreduce) is the go version. It works
  by trying:
  - remove a statement
  - inline a variable
  - zero a literal value
  - ...
* Some issues in Go toolchain is that Daniel had to write out the bytes and
  invoke the full compiler toolchain to see if the bug still reproduced. This
  means 100ms to make change, which is slow to automatically reduce.
* See mvdan.cc/goreduce to find out more and try out the tool.

## Handling slow requests in your Go web server

Jaime Silvela

* A common problem in HTTP servers is doing slow jobs. For example processing
  that takes minutes.
* To do this naively your users will run into issues like 504 gateway
  time-out.
* Usually what people do is introduce a Job Queue.
* Problem is this is a new bit of infrastructure to manage.
* Another problem is serialization and deserialization can be significant for
  large upload payloads.
* Solution 1 is queue with channels + worker pattern.
  - Identify jobs with ticket number, track progress in DB
  - goroutine listening, running and publishing results
  - Problems when you can get too much work to do
  - Solutions: time limit, channel buffered, more worker goroutines
* Solution 2 Just start goroutine
  - Shutdown is a problem due to potentially losing work, can use waitgroup.
  - Solution is simple and works well.
* Conclusion: You can handle slow requests entirely in your go server.


## Licenses

Fabio Rapposelli

* You are coding a lot and run `go get` a lot to get great packages to solve
  your problems.
* You are about to launch your product but then have to do legal review.
* The lawyers start vetting dependency packages with bad license.
* The issue here is license creep, you introduce a dependency without
  realising you can't use it due to the license.
* Fabio created a tool called: WWHRD - What would Henry Rollins Do. \m/
* https://github.com/frapposelli/wwhrd
* For use in CI, and compares against your list of allowed licenses. So your CI
  will fail before you can merge the dependency into master.


## DNA Sequencing using Go

Pascal Costanza

* DNA Sequencing has a software pipeline over the DNA fragments.
* ELPREP - High performance tool for preparing SAM files for variant calling
* Variant calling is a part of the DNA Sequencing pipeline.
* ELPREP is 10x faster.
* Common Lisp original implementation of ELPREP
  - Great for prototyping, but GC was an issue due to size of files to process
* Test suite: 13GB compressed input file
  - C++ 13:38 mins @ 227 GB RAM
  - Java 15:05 mins @ 293.4 GB RAM
  - Java 11:57 mins @ 358.1 GB RAM
  - Java 11:07 mins @ 477.3 GB RAM
  - Go 10:20 mins @ 233.7 GB RAM
* Go runs the fastest and required no fine tuning of the runtime!
* There is a paper [here](http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0132868)

## Embedding cpython in Go

Massimillano Pippi

* https://github.com/DataDog/datadog-agent embeds CPython into Go.
* The talk is a quick experience report.
* The important thing to know about using CPython is GIL, the Global Interpreter Lock.
* As an analogy if you think of an american airport line there can be parallel lines you can wait in, but usually there is one TSA agent.
* People are python threads, queues are the CPU, TSA agent is the GIL.
* To embed cpython in Go:
  * Tell cpython to handle GIL manually
  * Acquire GIL
  * Do work
  * Release GIL
* Complication: Goroutine runtime can switch the thread you are running on, but GIL tracks the thread that locks it.
* To stop that you can tell go to not move goroutine off the current thread.
