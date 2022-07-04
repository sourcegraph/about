---
title: 'Generating Better Machine Code with SSA'
authors:
  - name: Keith Randall
publishDate: 2017-07-13T00:00-07:00
tags: [
  "gophercon"
]
slug: generating-better-machine-code-with-ssa
heroImage: https://images.ctfassets.net/le3mxztn6yoo/3V5DUfYGA0q8yYQouKIWS6/4220ae048c5b0a2bb700119e68e7de64/keithrandall.jpg
published: true
---


Liveblog by Beyang Liu ([@beyang](https://twitter.com/beyang))

Keith Randall ([GitHub](https://github.com/randall77)) is a principal software engineer at Google and works on the Go compiler. Last year he gave a talk on high-frequency trading with Go. Previously, he was a research scientist at Compaq's System Research Center (SRC) and a student of the MIT Supercomputing Technologies Group.

![keithrandall](//images.contentful.com/le3mxztn6yoo/3V5DUfYGA0q8yYQouKIWS6/4220ae048c5b0a2bb700119e68e7de64/keithrandall.jpg)

Today, he's talking about generating better machine code with Single Static Assignment (SSA). SSA is a technique used by most modern compilers to optimize generated machine code.

## Go 1.5

The Go compiler was originally based on the Plan9 C compiler, which is old. This was modified to compile Go instead of C. Later it was autotranslated from C to Go.

In the era of Go 1.5, Keith began looking through Go-generated assembly code with the aim of making things faster. He noticed a number of instances where he thought the generated assembly was more verbose than it needed to be.

Consider the following assembly code generated from Go 1.5:
```go
MOVQ	AX, BX
SHLQ	$0x3, BX
MOVQ	BX, 0x10(SP)
CALL	runtime.memmove(SB)
```

Why is that first MOVQ there? Why not just:
```go
SHLQ	$0x3, AX
MOVQ	AX, 0x10(SP)
CALL	runtime.memmove(SB)
```

Another example: Why do an expensive multiply operation:

```go
IMULQ	$0x10, R8, R8
```
instead of a shift operation, which is cheap:

```go
SHLQ	$0x4, R8
```

Yet another example: Writing value to register only to move the value straight to another register:

```go
MOVQ	R8, 0x20(CX)
MOVQ	0x20(CX), R9
```

Why not just:
```go
MOVQ R8, 0x20(CX)MOVQ R8, R9
```






After finding all these examples of inefficiencies, Keith felt bold enough to proclaim, "I think it would be fairly easy to make the generated programs 20% smaller and 10% faster". He admits those numbers were largely made up.

This was in in February 2015. Keith wanted to move the Go compiler from a syntax-tree-based intermediate representation (IR) to a more modern SSA-based IR. With an SSA IR, he believed they could implement a lot of optimizations that are difficult to do in the current compiler.

In, Feb 2015, the SSA proposal mailed to golang-dev. Work subsequently began, and in Go 1.7 and Go 1.8, the work was shipped for compiling to amd64 and arm respectively. Here are the performance improvements:





### Go 1.7: amd64
![Selection 009](//images.contentful.com/le3mxztn6yoo/6I5oIq6DJYuCiQa2kIc4uO/6b62f50cfa940f2864681f5429bc442d/Selection_009.png)

### Go 1.8: arm
![Selection 010](//images.contentful.com/le3mxztn6yoo/1FoDw78jx2WM0sEOmSMC6g/2b18613e7cd7540cce651d9f1d9a3722/Selection_010.png)

There was better performance not only on the synthetic Go benchmarks (above), but also in the real world. Some benchmarks from the community:
- Big data workload - 15% improvement
- Convex hull - 14-24% improvement (from 1.5)
- Hash functions - 39% improvement
- Audio Processing (arm) - 48% improvement

### Does the compiler itself get slower or faster with SSA?

So obviously, we'd expect a speedup in programs that were compiled via the SSA IR. But generating the SSA IR is also more computationally expensive. The one program where both these things will affect the speed of the program is the compiler itself. Compiler speed is very important. So with SSA IR, does the compiler get faster or slower?

He asks the audience, "How many people think it gets faster? How many people think it gets slower?" A few more people think it gets faster.

Turns out, the arm compiler is 10% faster. The compiler has more work to do to output SSA IR, but the compiler is now compiled with the new compiler and so itself is more optimized. For arm, the speedup from the compiler binary being generated from SSA IR is larger than the slowdown from the additional computation that needs to be done to output the SSA IR.

The amd64 compiler, on the other hand, is 10% slower. The extra work required by the SSA passes isn't fully eliminated by the speedup we get from the compiling the compiler using SSA.

## So what is SSA?

A compiler translates a plaintext source file into an object file that contains assembly instructions:

![Selection 011](//images.contentful.com/le3mxztn6yoo/OX29Syxn0cOuU4mgokIgu/5ca0c5b60547eb3bf0e4e4e91ad3b363/Selection_011.png)


Internally, the compiler has multiple components that translate the source into successive intermediate representations before finally outputting assembly:

![Selection 012](//images.contentful.com/le3mxztn6yoo/4UnWMkJOByGq0gmIccUS8m/47a3ab391ab55652d6c2f67f9924d848/Selection_012.png)


All phases of the Go 1.5 compiler dealt in syntax trees as its internal representation, with the exception of the very last step, which emits assembly:

![Selection 013](//images.contentful.com/le3mxztn6yoo/3Z2xXVSag8swKk2OocYuaG/973665d8ea09a2fb35f5f120beb010d2/Selection_013.png)

For this code snippet,

```go
func f(a []int) {
  for i := 0; i < 10; i++ {
    a[i] = 0;
  }
}
```

here's what the syntax tree looks like:

![Selection 024](//images.contentful.com/le3mxztn6yoo/rhUR6bueSO6msq8WmgQ2y/00a30588b439bdbbdef06649238aa6b2/Selection_024.png)


Here are the phases of the Go 1.5 compiler, all of which deal in syntax trees:
* type checking
* closure analysis
* inlining
* escape analysis
* adding temporaries where needed
* introducing runtime calls
* code generation

In the Go 1.7 compiler, SSA replaces the old code generation phase of the compiler with successive SSA passes:

![Selection 014](//images.contentful.com/le3mxztn6yoo/5QH27rzwVawi6SeII2mkAw/c4a64e003488d6d8edde24872962511e/Selection_014.png)



So, what does "SSA" actually mean? SSA stands for "Single Static Assignment" and it means each variable in the program only has one assignment in the text of the program. Dynamically, you can have multiple assignments (e.g., an increment variable in a loop), but statically, there is only one assignment. Here's a simple conversion from original source to SSA form:

![Selection 015](//images.contentful.com/le3mxztn6yoo/65Zxz03oDSkOsCsygOawsU/1374acb8809464028555bf2924358b5b/Selection_015.png)


Sometimes, it's not as simple as the example above. Consider the case of an assignment within a conditional block. It's not clear how to translate this to SSA form. To solve this problem, we introduce a special notation, Φ:
![Selection 016](//images.contentful.com/le3mxztn6yoo/4kQNwvAT2EoSSEmYyKusKW/92e82db62011ce4e106d9ec0220781e2/Selection_016.png)


Here's the SSA representation embedded in a control flow graph:
![Selection 017](//images.contentful.com/le3mxztn6yoo/1vNkHirtDS822yQqYOMmqA/e74940ac9aba5bc842312ac8565d414d/Selection_017.png)


Here's just the control flow graph.
![Selection 018](//images.contentful.com/le3mxztn6yoo/3FOzzThLBC2wKCCWUWa6Ss/4534caa07ba72058759eb5dc881652e1/Selection_018.png)

The control flow graph represents flow of logic in your code much better than a syntax tree (which just represents syntax containment). The SSA control flow graph enables a bunch of optimization algorithms, including:

* Common Subexpression Elimination
* Dead Code Elimination
* Dead Store Elimination: get rid of `store` operations that are immediately overwritten
* Nil Check Elimination: can often statically prove some nil checks are unnecessary
* Bounds Check Elimination
* Register allocation
* Loop rotation
* Instruction scheduling
* and more!

Consider the case of common subexpression elimination. If you're dealing with a syntax tree, it's not clear whether we can eliminate a subexpression in this example:
![Selection 019](//images.contentful.com/le3mxztn6yoo/7tn099U7MAwCm6iQqG40qm/a3e10dcccb639b65e2e92cd72ecb0d87/Selection_019.png)


With SSA, however, it is clear. In fact, many optimizations can be reduced to simple (and not-so-simple) rewrite rules on the SSA form. Rules like:

```go
(Mul64 x (Const64 [2])) -> (Add64 x x)
```

Here's a rewrite rule that lowers machine-independent operations to machine-dependent operations:

```go
(Add64 x y) -> (ADDQ x y)
```

Rules can also be more complicated:

```go
(ORQ
    s1:(SHLQconst [j1] x1:(MOVBload [i1] {s} p mem))
    or:(ORQ
        s0:(SHLQconst [j0] x0:(MOVBload [i0] {s} p mem))
	y))
  && i1 == i0+1
  && j1 == j0+8
  && j0 % 16 == 0
  && x0.Uses == 1
  && x1.Uses == 1
  && s0.Uses == 1
  && s1.Uses == 1
  && or.Uses == 1
  && mergePoint(b,x0,x1) != nil
  && clobber(x0)
  && clobber(x1)
  && clobber(s0)
  && clobber(s1)
  && clobber(or)
  -> @mergePoint(b,x0,x1) (ORQ <v.Type> (SHLQconst <v.Type> [j0] (MOVWload [i0] {s} p mem)) y)
```
This rule takes two 8-bit loads and replaces it with one 16-bit load if it can. The bulk of it describes different cases where such a translation can occur.

Rewrite rules make incorporating optimizations into new ports easy. Rules for most optimizations (e.g., common subexpression elimination, nil check elimination, etc.) are the same across architectures. The only rules that need to change are really the opcode lowering rules. It took a year to write the first SSA backend for amd64. Subsequent backends for arm, arm64, mips, mips64, ppc64, s390x, x86 only took 3 months.

## The future

There's still potentially lots to do to improve the SSA implementation in the Go compiler:

* Alias analysis
  * Store-load forwarding
  * Better dead store removal
  * Devirtualization
* Better register allocation
* Better code layout
* Better instruction scheduling
* Lifting loop invariant code out of loops

They would like help creating better benchmarks against which to test. They are committed to only releasing optimizations that observably benefit real-world use cases.
