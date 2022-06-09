---
title: "GopherCon 2019 - Dynamically instrumenting Go programs"
description: "Ever wanted to ask arbitrary questions about your program while it is running with minimal impact on performance? In this talk, we go beyond static instrumentation and look at specific techniques for gathering information about your programs so that you can understand what your gophers are up to!"
authors:
  - name: Beyang Liu for the GopherCon 2019 Liveblog
    url: https://twitter.com/beyang
publishDate: 2019-07-26T00:00-14:00
tags: [
  gophercon
]
slug: gophercon-2019-dynamically-instrumenting-go-programs
heroImage: https://about.sourcegraph.com/gophercon2019.png
published: true
---

Presenter: [Jason Keene](https://twitter.com/jasonkeene)

## Overview

Ever wanted to ask arbitrary questions about your program while it is running with minimal impact on
performance? In this talk, we go beyond static instrumentation and look at specific techniques for
gathering information about your programs so that you can understand what your gophers are up to!

---

**The content of this talk is written up as a series of blog posts here:
https://wat.io/posts/instrumentation-and-go/.**


## Brief summary

The focus of this talk is dynamic instrumentation. Unlike static instrumentation, you don't have to
add it to your program in advance of building it.

Dynamic instrumentation incurs a small performance penalty, but with the benefit of reducing the
feedback cycle time since you don't have to rebuild the program to add/update the instrumentation.

We have three great options for dynamic instrumentation:
* delve
* bpftrace
* goBPF

### ptrace and debuggers

Debuggers use ptrace, which give the ability to suspend/continue execution, step through, and read/write memory.

Delve exposes a JSON-RPC API, so you can automate interactions with it to add dynamic instrumentation.

Depending on what the instruemntation is, the performance overhead may be small or
large. High-frequency breakpoints are expensive and can lead to orders of magnitude
slowdown. uprobes and BPF can help us out here with some kernel magic.

### uprobes and BPF

uprobes allow you to set breakpoints with minimal overhead by having the kernel set the
breakpoint. This requires much less overhead than ptrace.

How do you write these kernel handlers? You could write a kernel module or build a custom kernel, but neither of these are appealing.

BPF lets you write these kernel handlers and inject them into the kernel easily.

GCC is c ompiler for BPF programs written in C.

bpftrace  makes writing BPF programs very straightforward.

There is still some amount of overhead, but not nearly as much.

This is all great, but it would be much better if we could write these programs in Go... goBPF does exactly that.

### About the author

_Beyang Liu is the CTO and co-founder of Sourcegraph. Beyang studied Computer Science at Stanford, where he published research in probabilistic graphical models and computer vision at the Stanford AI Lab. You can chat with Beyang on Twitter [@beyang](https://twitter.com/beyang) or our community [Discord](https://discord.com/invite/vqsBW8m5Y8)._