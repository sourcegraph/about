---
title: "From Slow to SIMD: A Go Optimization Story"
publishDate: 2023-11-29T10:00-07:00
authors:
  - name: Camden Cheek
    url: https://github.com/camdencheek
tags: [blog]
slug: 'slow-to-simd'
published: true 
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/blog-from-slow-to-simd-og.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/blog-from-slow-to-simd-og.png

---

So, there's this function. It's called a lot. More importantly, all those calls are on the critical path of a key user
interaction. Let's talk about making it fast.

Spoiler: it's a dot product.

## Some background (or [skip to the juicy stuff](#the-target))

At Sourcegraph, we're working on a Code AI tool named [Cody](https://sourcegraph.com/cody). In order for Cody to answer
questions well, we need to give them enough [context](https://about.sourcegraph.com/blog/cheating-is-all-you-need) to
work with. One of the [ways we do this](https://about.sourcegraph.com/whitepaper/cody-context-architecture.pdf) is by
leveraging [embeddings](https://platform.openai.com/docs/guides/embeddings).

For our purposes, an [embedding](https://developers.google.com/machine-learning/crash-course/embeddings/video-lecture)
is a vector representation of a chunk of text. They are constructed in such a way that semantically similar pieces of
text have more similar vectors. When Cody needs more information to answer a query, we run a similarity search over the
embeddings to fetch a set of related chunks of code and feed those results to Cody to improve the relevance of results.

The piece relevant to this blog post is that similarity metric, which is the function that determines how similar two
vectors are. For similarity search, a common metric is [cosine
similarity](https://en.wikipedia.org/wiki/Cosine_similarity). However, for normalized vectors (vectors with unit
magnitude), the [dot product](https://en.wikipedia.org/wiki/Dot_product) yields a ranking that's [equivalent to cosine
similarity](https://developers.google.com/machine-learning/clustering/similarity/measuring-similarity). To run a search,
we calculate the dot product for every embedding in our data set and keep the top results. And since we cannot
start execution of the LLM until we get the necessary context, optimizing this step is crucial.

You might be thinking: why not just use an indexed vector DB? Outside of adding yet another piece of infra that we need
to manage, the construction of an index adds latency and increases resource requirements. Additionally, standard
nearest-neighbor indexes only provide approximate retrieval, which adds another layer of fuzziness compared to a more
easily explainable exhaustive search. Given that, we decided to invest a little in our hand-rolled solution to see how
far we could push it.

## The target

This is a simple Go implementation of a function that calculates the dot product of two vectors. My goal is to outline
the journey I took to optimize this function, and to share some tools I picked up along the way.

```go
func DotNaive(a, b []float32) float32 {
	sum := float32(0)
	for i := 0; i < len(a) && i < len(b); i++ {
		sum += a[i] * b[i]
	}
	return sum
}
```

Unless otherwise stated, all benchmarks are run on an Intel Xeon Platinum 8481C 2.70GHz CPU. This is a `c3-highcpu-44`
GCE VM. The code in this blog post can all be found in runnable form [here](https://github.com/camdencheek/simd_blog).

## Loop unrolling

Modern CPUs do this thing called [_instruction pipelining_](https://chadaustin.me/2009/02/latency-vs-throughput/) where
it can run multiple instructions simultaneously if it finds no data dependencies between them. A data dependency just
means that the input of one instruction depends on the output of another.

In our simple implementation, we have data dependencies between our loop iterations. A couple, in fact. Both `i` and
`sum` have a read/write pair each iteration, meaning an iteration cannot start executing until the previous is finished.

A common method of squeezing more out of our CPUs in situations like this is known as [_loop
unrolling_](https://en.wikipedia.org/wiki/Loop_unrolling). The basic idea is to rewrite our loop so more of our
relatively-high-latency multiply instructions can execute simultaneously. Additionally, it amortizes the fixed loop
costs (increment and compare) across multiple operations.


```go
func DotUnroll4(a, b []float32) float32 {
	sum := float32(0)
	for i := 0; i < len(a); i += 4 {
		s0 := a[i] * b[i]
		s1 := a[i+1] * b[i+1]
		s2 := a[i+2] * b[i+2]
		s3 := a[i+3] * b[i+3]
		sum += s0 + s1 + s2 + s3
	}
	return sum
}
```

In our unrolled code, the dependencies between multiply instructions are removed, enabling the CPU to take more
advantage of pipelining. This increases our throughput by 37% compared to our naive implementation.

<Chart
    rows={[
        {name: "DotNaive", value: 941900},
        {name: "DotUnroll4", value: 1286000},
    ]}
/>

Note that we can actually improve this slightly more by twiddling with the number of iterations we unroll. On the
benchmark machine, 8 seemed to be optimal, but on my laptop, 4 performs best. However, the improvement is quite platform
dependent and fairly minimal, so for the rest of the post, I'll stick with an unroll depth of 4 for readability.

## Bounds-checking elimination

In order to keep out-of-bounds slice accesses from being a security vulnerability (like the famous
[Heartbleed](https://en.wikipedia.org/wiki/Heartbleed) exploit), the go compiler inserts checks before each read. You
can check it out in the [generated assembly](https://go.godbolt.org/z/qT3M7nPGf) (look for `runtime.panic`).

The compiled code makes it look like we wrote something like this:

```go
func DotUnroll4(a, b []float32) float32 {
	sum := float32(0)
	for i := 0; i < len(a); i += 4 {
        if i >= cap(b) {
            panic("out of bounds")
        }
		s0 := a[i] * b[i]
        if i+1 >= cap(a) || i+1 >= cap(b) {
            panic("out of bounds")
        }
		s1 := a[i+1] * b[i+1]
        if i+2 >= cap(a) || i+2 >= cap(b) {
            panic("out of bounds")
        }
		s2 := a[i+2] * b[i+2]
        if i+3 >= cap(a) || >= cap(b) {
            panic("out of bounds")
        }
		s3 := a[i+3] * b[i+3]
		sum += s0 + s1 + s2 + s3
	}
	return sum
}
```

In a hot loop like this, even with modern branch prediction, the additional branches per iteration can add up to a
pretty significant performance penalty. This is especially true in our case because the inserted jumps limit how much we
can take advantage of pipelining.

If we can convince the compiler that these reads can never be out of bounds, it won't insert these runtime checks. This
technique is known as "bounds-checking elimination", and the same patterns can apply to [languages other than
Go](https://github.com/Shnatsel/bounds-check-cookbook/).

In theory, we should be able to do all checks once, outside the loop, and the compiler would be able to determine that
all the slice indexing is safe. However, I couldn't find the right combination of checks to convince the compiler that
what I'm doing is safe. I landed on a combination of asserting the lengths are equal and moving all the bounds checking
to the top of the loop. This was enough to hit nearly the speed of the bounds-check-free version.

```go
func DotBCE(a, b []float32) float32 {
	if len(a) != len(b) {
		panic("slices must have equal lengths")
	}

    if len(a)%4 != 0 {
		panic("slice length must be multiple of 4")
	}

	sum := float32(0)
	for i := 0; i < len(a); i += 4 {
		aTmp := a[i : i+4 : i+4]
		bTmp := b[i : i+4 : i+4]
		s0 := aTmp[0] * bTmp[0]
		s1 := aTmp[1] * bTmp[1]
		s2 := aTmp[2] * bTmp[2]
		s3 := aTmp[3] * bTmp[3]
		sum += s0 + s1 + s2 + s3
	}
	return sum
}
```

The minimizing of bounds checking nets a 9% improvement. Consistently non-zero, but nothing to write home about. 

<Chart
    rows={[
        {name: "DotNaive", value: 941900},
        {name: "DotUnroll4", value: 1286000},
        {name: "DotBCE", value: 1407000},
    ]}
/>

This technique translates well to many memory-safe compiled languages like 
[Rust](https://nnethercote.github.io/perf-book/bounds-checks.html).

Exercise for the reader: why is it significant that we slice like `a[i:i+4:i+4]` rather than just `a[i:i+4]`?

## Quantization

We've improved single-core search throughput by ~50% at this point, but now we've hit a new bottleneck: memory usage.
Our vectors are 1536 dimensions. With 4-byte elements, this comes out to 6KiB per vector, and we generate roughly a million
vectors per GiB of code. That adds up quickly. We had a few customers come to us with some massive monorepos, and we
wanted to reduce our memory usage so we can support those cases more cheaply.

One possible mitigation would be to move the vectors to disk, but loading them from disk at search time can add
[significant latency](https://colin-scott.github.io/personal_website/research/interactive_latency.html), especially on
slow disks. Instead, we chose to compress our vectors with `int8` quantization. 

There are [plenty of ways](https://en.wikipedia.org/wiki/Dimensionality_reduction) to compress vectors, but we'll be
talking about [_integer quantization_](https://huggingface.co/docs/optimum/concept_guides/quantization), which is
relatively simple, but effective. The idea is to reduce the precision of the 4-byte `float32` vector elements by
converting them to 1-byte `int8`s.

I won't get into exactly _how_ we decide to do the translation between `float32` and `int8`, since that's a pretty [deep
topic](https://huggingface.co/docs/optimum/concept_guides/quantization), but suffice it to say our function now looks
like the following:

```go
func DotInt8BCE(a, b []int8) int32 {
	if len(a) != len(b) {
		panic("slices must have equal lengths")
	}

	sum := int32(0)
	for i := 0; i < len(a); i += 4 {
		aTmp := a[i : i+4 : i+4]
		bTmp := b[i : i+4 : i+4]
		s0 := int32(aTmp[0]) * int32(bTmp[0])
		s1 := int32(aTmp[1]) * int32(bTmp[1])
		s2 := int32(aTmp[2]) * int32(bTmp[2])
		s3 := int32(aTmp[3]) * int32(bTmp[3])
		sum += s0 + s1 + s2 + s3
	}
	return sum
}
```

This change yields a 4x reduction in memory usage at the cost of some accuracy (which we carefully measured, but is
irrelevant to this blog post).

Unfortunately, re-running the benchmarks shows our search speed regressed a bit from the change. Taking a look at the
generated assembly (with `go tool compile -S`), there are some new instructions for converting `int8` to `int32`, which
might explain the difference. I didn't dig too deep though, since all our performance improvements up to this point
become irrelevant in the next section.

<Chart
    rows={[
        {name: "DotNaive", value: 941900},
        {name: "DotUnroll4", value: 1286000},
        {name: "DotBCE", value: 1407000},
        {name: "DotInt8BCE", value: 1240000},
    ]}
/>


## SIMD

I always love an excuse to play with SIMD. And this problem seemed like the perfect nail for that hammer.

For those unfamiliar, SIMD stands for "Single Instruction Multiple Data". Just like it's says, it lets you run an
operation over a bunch of pieces of data with a single instruction. As an example, to add two `int32` vectors
element-wise, we could add them together one by one with the `ADD` instruction and, or we can use the `VPADDD`
instruction to add 64 pairs at a time with the [same](https://uops.info/html-instr/ADD_01_R32_R32.html)
[latency](https://uops.info/html-instr/VPADDD_YMM_YMM_M256.html) (depending on the architecture).

We have a problem though. Go does not expose SIMD intrinsics like
[C](https://www.intel.com/content/www/us/en/docs/intrinsics-guide/index.html) or
[Rust](https://doc.rust-lang.org/beta/core/simd/index.html). We have two options here: write it in C and use Cgo, or
write it by hand for Go's assembler. I try hard to avoid Cgo whenever possible for [many reasons that are not at all
original](https://dave.cheney.net/2016/01/18/cgo-is-not-go), but one of those reasons is that Cgo imposes a performance
penalty, and performance of this snippet is paramount. Also, getting my hands dirty with some assembly sounds fun, so
that's what I'm going to do.

I want this routine to be reasonably portable, so I'm going to restrict myself to only AVX2 instructions, which are
supported on most `x86_64` server CPUs these days. We can use [runtime feature
detection](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@3ac2170c6523dd074835919a1804f197cf86e451/-/blob/internal/embeddings/dot_amd64.go?L17-21)
to fall back to a slower option in pure Go.

<details>

<summary>Full code for <code>DotAVX2</code></summary>

```
#include "textflag.h"

TEXT ·DotAVX2(SB), NOSPLIT, $0-52
	// Offsets based on slice header offsets.
	// To check, use `GOARCH=amd64 go vet`
	MOVQ a_base+0(FP), AX
	MOVQ b_base+24(FP), BX
	MOVQ a_len+8(FP), DX

	XORQ R8, R8 // return sum

	// Zero Y0, which will store 8 packed 32-bit sums
	VPXOR Y0, Y0, Y0

// In blockloop, we calculate the dot product 16 at a time
blockloop:
	CMPQ DX, $16
	JB reduce

	// Sign-extend 16 bytes into 16 int16s
	VPMOVSXBW (AX), Y1
	VPMOVSXBW (BX), Y2

	// Multiply words vertically to form doubleword intermediates,
	// then add adjacent doublewords.
	VPMADDWD Y1, Y2, Y1

	// Add results to the running sum
	VPADDD Y0, Y1, Y0

	ADDQ $16, AX
	ADDQ $16, BX
	SUBQ $16, DX
	JMP blockloop

reduce:
	// X0 is the low bits of Y0.
	// Extract the high bits into X1, fold in half, add, repeat.
	VEXTRACTI128 $1, Y0, X1
	VPADDD X0, X1, X0

	VPSRLDQ $8, X0, X1
	VPADDD X0, X1, X0

	VPSRLDQ $4, X0, X1
	VPADDD X0, X1, X0

	// Store the reduced sum
	VMOVD X0, R8

end:
	MOVL R8, ret+48(FP)
	VZEROALL
	RET
```

</details>

The core loop of the implementation depends on three main instructions:

- [`VPMOVSXBW`](https://www.felixcloutier.com/x86/pmovsx), which loads `int8`s into a vector `int16`s
- [`VPMADDWD`](https://www.felixcloutier.com/x86/pmaddwd), which multiplies two `int16` vectors element-wise, then adds
fuzzy stack. 
  together adjacent pairs to produce a vector of `int32`s
- [`VPADDD`](https://www.felixcloutier.com/x86/paddb:paddw:paddd:paddq), which accumulates the resulting `int32` vector
  into our running sum

`VPMADDWD` is a real heavy lifter here. By combining the multiply and add steps into one, not only does it save
instructions, it also helps us avoid overflow issues by simultaneously widening the result to an `int32`.

Let's see what this earned us.

<Chart
    rows={[
        {name: "DotNaive", value: 941900},
        {name: "DotUnroll4", value: 1286000},
        {name: "DotBCE", value: 1407000},
        {name: "DotInt8BCE", value: 1240000},
        {name: "DotAVX2", value: 7000000},
    ]}
/>

Woah, that's a 530% increase in throughput from our previous best! SIMD for the win 🚀

Now, it wasn't all sunshine and rainbows. Hand-writing assembly in Go is weird. It uses a [custom
assembler](https://go.dev/doc/asm), which means that its assembly language looks just-different-enough-to-be-confusing
compared to the assembly snippets you usually find online. It has some weird quirks like [changing the order of
instruction operands](https://www.quasilyte.dev/blog/post/go-asm-complementary-reference/#operands-order) or [using
different names for instructions](https://www.quasilyte.dev/blog/post/go-asm-complementary-reference/#mnemonics). Some
instructions don't even _have_ names in the go assembler and can only be used via their [binary
encoding](https://go.dev/doc/asm#unsupported_opcodes). Shameless plug: I found sourcegraph.com invaluable for finding
examples of Go assembly to draw from.

That said, compared to Cgo, there are some nice benefits. Debugging still works well, the assembly can be stepped
through, and registers can be inspected using `delve`. There are no extra build steps (a C toolchain doesn't need to be
set up). It's easy to set up a pure-Go fallback so cross-compilation still works. Common problems are caught by `go
vet`.

## SIMD...but bigger

Previously, we limited ourselves to AVX2, but what if we _didn't_? The VNNI extension to AVX-512 added the
[`VPDPBUSD`](https://www.felixcloutier.com/x86/vpdpbusd) instruction, which computes the dot product on `int8` vectors
rather than `int16`s. This means we can process four times as many elements in a single instruction because we don't
have to convert to `int16` first and our vector width doubles with AVX-512!

The only problem is that the instruction requires one vector to be signed bytes, and the other to be _unsigned_ bytes.
Both of our vectors are signed. We can employ [a trick from Intel's developer
guide](https://www.intel.com/content/www/us/en/docs/onednn/developer-guide-reference/2023-0/nuances-of-int8-computations.html#DOXID-DEV-GUIDE-INT8-COMPUTATIONS-1DG-I8-COMP-S12)
to help us out. Given two `int8` elements, <code>a<sub>n</sub></code> and <code>b<sub>n</sub></code>, we do the
element-wise calculation as <code>a<sub>n</sub>* (b<sub>n</sub> + 128) - a<sub>n</sub> * 128</code>. The
<code>a<sub>n</sub> * 128</code> term is the overshoot from adding 128 to bump <code>b<sub>n</sub></code> into `u8`
range. We keep track of that separately and subtract it at the end. Each of the operations in that expression can be
vectorized.

<details>
<summary>Full code for <code>DotVNNI</code></summary>

```
#include "textflag.h"

// DotVNNI calculates the dot product of two slices using AVX512 VNNI
// instructions The slices must be of equal length and that length must be a
// multiple of 64.
TEXT ·DotVNNI(SB), NOSPLIT, $0-52
	// Offsets based on slice header offsets.
	// To check, use `GOARCH=amd64 go vet`
	MOVQ a_base+0(FP), AX
	MOVQ b_base+24(FP), BX
	MOVQ a_len+8(FP), DX

    ADDQ AX, DX // end pointer

	// Zero our accumulators
	VPXORQ Z0, Z0, Z0 // positive
	VPXORQ Z1, Z1, Z1 // negative

	// Fill Z2 with 128
	MOVD $0x80808080, R9
	VPBROADCASTD R9, Z2

blockloop:
	CMPQ AX, DX
	JE reduce

	VMOVDQU8 (AX), Z3
	VMOVDQU8 (BX), Z4

	// The VPDPBUSD instruction calculates of the dot product 4 columns at a
	// time, accumulating into an i32 vector. The problem is it expects one
	// vector to be unsigned bytes and one to be signed bytes. To make this
	// work, we make one of our vectors unsigned by adding 128 to each element.
	// This causes us to overshoot, so we keep track of the amount we need
	// to compensate by so we can subtract it from the sum at the end.
	//
	// Effectively, we are calculating SUM((Z3 + 128) · Z4) - 128 * SUM(Z4).

	VPADDB Z3, Z2, Z3   // add 128 to Z3, making it unsigned
	VPDPBUSD Z4, Z3, Z0 // Z0 += Z3 dot Z4
	VPDPBUSD Z4, Z2, Z1 // Z1 += broadcast(128) dot Z4

	ADDQ $64, AX
	ADDQ $64, BX
	JMP blockloop

reduce:
    // Subtract the overshoot from our calculated dot product
	VPSUBD Z1, Z0, Z0 // Z0 -= Z1

    // Sum Z0 horizontally. There is no horizontal sum instruction, so instead
    // we sum the upper and lower halves of Z0, fold it in half again, and
    // repeat until we are down to 1 element that contains the final sum.
    VEXTRACTI64X4 $1, Z0, Y1
    VPADDD Y0, Y1, Y0

	VEXTRACTI128 $1, Y0, X1
	VPADDD X0, X1, X0

	VPSRLDQ $8, X0, X1
	VPADDD X0, X1, X0

	VPSRLDQ $4, X0, X1
	VPADDD X0, X1, X0

	// Store the reduced sum
	VMOVD X0, R8

end:
	MOVL R8, ret+48(FP)
	VZEROALL
	RET
```

</details>

This implementation yielded another 21% improvement. Not bad!

<Chart
    rows={[
        {name: "DotNaive", value: 941900},
        {name: "DotUnroll4", value: 1286000},
        {name: "DotBCE", value: 1407000},
        {name: "DotInt8BCE", value: 1240000},
        {name: "DotAVX2", value: 7000000},
        {name: "DotVNNI", value: 8765000},
    ]}
/>

# What's next?

Well, I'm pretty happy with an 9.3x increase in throughput and a 4x reduction in memory usage, so I'll probably leave it
here.

The real life answer here is probably "use an index". There is a ton of good work out there focused on making nearest
neighbor search fast, and there are plenty of batteries-included vector DBs that make it pretty easy to deploy. 

_However_, if you want some fun food for thought, a colleague of mine built a proof-of-concept [dot product on the
GPU](https://github.com/sourcegraph/sourcegraph/compare/main...nsc/embeddings-fun#diff-eed4a741ebe632c484dce236a3f4b1eee16e9a2bec6749003b3dbc41449c497c).

## Bonus material

- If you haven't used [benchstat](https://pkg.go.dev/golang.org/x/perf/cmd/benchstat), you should. It's great. Super
  simple statistical comparison of benchmark results.
- Don't miss the [compiler explorer](https://go.godbolt.org/z/qT3M7nPGf), which is an extremely useful tool for digging
  into compiler codegen.
- There's also that time I got [nerd sniped](https://twitter.com/sluongng/status/1654066471230636033) into implementing
  [a version with ARM NEON](https://github.com/camdencheek/simd_blog/blob/main/dot_arm64.s), which made for some
  interesting comparisons.
- If you haven't come across it, the [Agner Fog Instruction Tables](https://www.agner.org/optimize/) make for some great
  reference material for low-level optimizations. For this work, I used them to help grok differences instruction
  latencies and why some pipeline better than others.
