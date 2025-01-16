---
title: 'A Go Programmer's Guide to Syscalls'
authors:
  - name: Liz Rice
publishDate: 2017-07-13T00:00-07:00
tags: [
  "gophercon"
]
slug: a-go-guide-to-syscalls
heroImage: https://images.ctfassets.net/le3mxztn6yoo/4C6mXzqOmIcSgyQ8wawUIg/c4563c96f0b6e6f55605ae155ca22dee/IMG_4097.JPG.jpeg
published: true
---


Liveblog by Matt King

## Overview
Even if you've never used Go's syscall package - in fact even if you've only ever written “Hello, world” - you have definitely used syscalls. They provide the interface between your code and the operating system.

Liz goes under the hood to explore what syscalls are, how they work, and how some common Go code makes of use of them. She covers what people mean when they talk about `strace` and `ptrace`, and looks at what syscalls have to do with privileges and permissions. She does all of this through a live demo by writing [strace from scratch](https://github.com/lizrice/strace-from-scratch).


### What are syscalls?
Your application requests services from the kernel. Your user-space code really can't do very much by itself. Every time it wants to access things like hardware it needs to access the kernel. You need syscalls to access processes, files, devices, communications, and Time & date.

Even though you don't really think about these syscalls, you will need the help that syscalls give you from the kernel.


> "In computing, a system call is the programmatic way in which a computer program requests a service from the kernel of the operating system it is executed on. This may include hardware-related services (for example, accessing a hard disk drive), creation and execution of new processes, and communication with the integral kernel services such as process scheduling. System calls provide an essential interface between a process and the operating system."

### What happens when making a syscall?

* Set registers up with syscall ID and parameters
* Trap - transition to kernel - run syscall code
* Result returned in %rax (x86)

We have hardware specific versions in the syscall package so it can write the parameters into the correct registers. Syscalls are extremely portable.
Syscalls are what allows Linux to run on different hardware through an emulation layer.

It is not necessary to implement all the possible syscall functions and most commonly only a subset will be implemented. When Microsoft implemented the bash emulation they had an implementation for about 200 of 300 syscalls. Perhaps 100 of 300 are not used that often.

## Syscall Profiling

`strace` is built on `ptrace` to allow a user to trace all system calls made by another process. To view a summary of the system calls use: `strace -c`.

## Example
Using Liz's live coding example [strace from scratch](https://github.com/lizrice/strace-from-scratch) and `strace -c` we can identify which syscalls were called.

It is helpful to review the Linux man page to better understand `ptrace` and Liz's implementation of `strace`.

### From ptrace to man page
* A tracee first needs to be attached to the tracer
* Attachment and subsequent commands are per thread
* Ptrace commands are always sent to a specific tracee using a call of the form

```go
ptrace(PTRACE_food, pid, …)
```

>Where `pid` is the thread ID of the corresponding linux thread.

### Two stops for PTRACE_SYSCALL
* The tracee enters syscall-enter-stop just prior to entering any system call. The trace enters syscall-exit-stop when the system call is finished. These calls are indistinguishable from each other by the tracer.
* The tracer needs to keep track of the sequence of ptrace-stops
    * This is very important otherwise you will see duplicate messages. You can verify this by removing the [exit check](https://sourcegraph.com/github.com/lizrice/strace-from-scratch/blob/master/main.go#L38) in the example code.

## Syscalls and security

### Security profiles and containers
It is possible to use `syscalls` for nefarious purposes which makes following the least privilege principle important. [Least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege) is the concept and practice of restricting access rights for users, accounts, and computing processes to only those that are essential to perform its intended purpose. We can add security with `seccomp` by restricting which syscalls this process can call.


## Syscalls Recap

* Even if you're not using syscalls directly they are your interface into the kernel.
* They are portable and allow for running Linux on different hardware
* Limiting syscalls by following least privilege adds a layer of security


## About the speaker
[Liz Rice](http://www.lizrice.com/) is the technical evangelist at container security specialists Aqua Security. Prior to that she was CEO of Microscaling Systems and one of the developers of MicroBadger, the tool for managing container metadata. She has a wealth of software development, team, and product management experience from working on network protocols and distributed systems, and in digital technology sectors such as VOD, music, and VoIP. When not building startups and writing code, Liz loves riding bikes in places with better weather than her native London.

[@lizrice](https://twitter.com/lizrice)

![IMG 4097.JPG](//images.contentful.com/le3mxztn6yoo/4C6mXzqOmIcSgyQ8wawUIg/c4563c96f0b6e6f55605ae155ca22dee/IMG_4097.JPG.jpeg)
