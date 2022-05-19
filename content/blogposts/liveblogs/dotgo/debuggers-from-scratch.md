---
title: 'Debuggers from Scratch'
authors:
  - name: Liz Rice (speaker)
publishDate: 2017-11-06T18:00+01:00
tags: [
  "dotGo"
]
slug: debuggers-from-scratch
heroImage: https://images.ctfassets.net/le3mxztn6yoo/40NFOZBGkgG6IyKoMgQIGg/c1626b318de4be28314cbdc989a01525/logo-dotgo-black-web.png
published: true
description: 'dotGo 2017: Debuggers from Scratch'
---

I learned over time that it’s best to forget about how channels are structured and focus on how they behave. So now when it comes to channels, I think about one thing: signaling. A channel allows one goroutine to signal another goroutine about a particular event. Signaling is at the core of everything you should be doing with channels. Thinking of channels as a signaling mechanism will allow you to write better code with well defined and more precise behavior.

Note: This post was live-blogged at [dotGo 2017](https://www.dotgo.eu/). Let us know on Twitter ([@sourcegraph](https://twitter.com/sourcegraph)) if we missed anything. All content is from the talk; any mistakes or misrepresentations are our fault, not the speaker's.

Liz has the full code used in her talk and more at
[github.com/lizrice/debugger-from-scratch](https://github.com/lizrice/debugger-from-scratch).

### ptrace

The `ptrace()` system call provides a means by which one process (the
"tracer") may observe and control the execution of another process (the
"tracee"), and examine and change the tracee's memory and registers. It is
primarily used to implement breakpoint debugging and system call tracing.

Go exposes all the ptrace system calls in the syscall pkg. See the list
starting at [PtraceAttach](https://golang.org/pkg/syscall/#PtraceAttach) on
godoc.

To debug a program we need to understand a little bit about how your machine
code runs on your computer. The important part is you have a register on your
CPU called the Program Counter which is an index (or address) into your
machine code. As code runs the Program Counter increments or changes value if
you jump.

The other important thing debuggers use is the interrupt 3 instruction
(`0xCC`). They will modify the machine code replacing an instruction with
`0xCC` to pass control back to a debugger.

We also need to be able translate back and forth from machine code to source
code positions. We can use the [gosym](https://golang.org/pkg/debug/gosym/)
package. This gives as a symbol table of a binary. So for example we can call
`symTable.LookupFunc("main.main")` which returns a `Func` type. Then
`Func.Entry` is the position at the start of the function (so if the Program
Counter is at Entry, we are starting to execute `main.main`).

So we can use `filename, linem fs = symTable.PCToLine(fn.Entry)` to translate
a machine code position into source code position. To do the reverse, we can
use `symTable.LineToPC(filename, line)`.

Now that we know how to use the symTable, lets start the program and debug it.
So we use `exec.Command` as usual, but set `Ptrace: true` on the
`cmd.SysProcAttr`. Then once started we do `syscall.PtracePokeData(pid,
uintptr(pc), []byte{0xCC})` where `pid` is `cmd.Process.Pid` and `pc` is from
`symTable.LineToPC`. This literally overwrites the instruction! In the future
we would probably want to know the instruction before overwriting it.

Next we need to tell the process to continue and wait for it to hit a breakpoint. Then we want to know the registers since it will contain the PC, which we can use to lookup the filename with the symbol table:

```go
syscall.PtraceCont(pid, 0)
syscall.Wait4(pid, nil, 0, nil)
syscall.PtraceGetRegs(pid, &regs)
```

So when we hit the breakpoint `regs` will be populated with the registers. So
`regs.Rip` will then contain the address we stopped at. RIP is the name of the
instruction pointer register on x86.

Another interesting thing we can do is traverse the call stack to generate a
backtrace. When calling a function we put the current PC onto the stack. We
also put the current stack pointer onto the stack, so we can recover the old
position. Knowing this we can traverse the callstack, and since each stack
frame has the PC we can use the symtable to generate a stack trace with the
source filenames.
