---
title: "From Slow to SIMD: An Optimization Story"
authors:
  - name: Camden Cheek
    url: https://github.com/camdencheek
tags: [blog]
slug: 'slow-to-simd'
published: false
---

<style>
    .chart-container {
        display: grid;
        grid-template-columns: max-content auto;
        width: 80%;
        max-width: 800px;
        margin: 20px auto;
        overflow: hidden;
    }

    .bar-text {
        display: flex;
        margin: 10px;
        grid-column: 1;
    }

    .bar-text code {
        display: flex;
        grid-column: 1;
    }

    .bar-value {
        grid-column: 2;
        margin: 2px;
        background-color: lightgray;
    }

    .bar-value span {
        display: flex;
        margin: 8px;
        text-align: left;
    }
</style>

# From Slow to SIMD: An Optimization Story

So, there's this function. It's called a lot. More importantly, all those calls are on the critical path of a key user interaction.
Let's talk about making it fast.

TODO: add link to code for this blog post

<aside>
Spoiler: it's a dot product.
</aside>

## Some background (or [skip to the juicy stuff](#the-target))

At Sourcegraph, we're working on a Code AI tool named [Cody](https://sourcegraph.com/cody). In order for Cody to answer questions well, we need to give it (him?) enough [context](https://about.sourcegraph.com/blog/cheating-is-all-you-need) to work with. One of the [ways we do this](https://about.sourcegraph.com/whitepaper/cody-context-architecture.pdf) is by leveraging [embeddings](https://platform.openai.com/docs/guides/embeddings).

An [embedding](https://developers.google.com/machine-learning/crash-course/embeddings/video-lecture) is a vector representation of a chunk of text. They are constructed in such a way that semantically similar pieces of text have more similar vectors. When Cody needs more information to answer a query, we run a similarity search over the embeddings to fetch a set of related chunks of code and feed those results to Cody to improve the relevance of results.

The piece relevant to this blog post is that similarity metric, which is just a function that spits out a number that's higher if vectors are more similar. For similarity search, a common metric is [cosine similarity](https://en.wikipedia.org/wiki/Cosine_similarity). However, for normalized vectors (vectors with unit magnitude), cosine similarity yields an [equivalent ranking](https://milvus.io/docs/v1.1.1/metric.md) to the [dot product](https://en.wikipedia.org/wiki/Dot_product). We do not yet build an index over our embeddings, so to run a search, we need to calculate the dot product for every embedding in our data set and keep the top results. And since we cannot start execution of the LLM until we get the necessary context, optimizing this step is crucial.

## The target

This is a simple implementation of a function that calculates the dot product of two vectors. My goal is to outline the journey I took to optimize this function, and to share some tools I picked up along the way.

```go
func DotNaive(a, b []float32) float32 {
	sum := float32(0)
	for i := 0; i < len(a) && i < len(b); i++ {
		sum += a[i] * b[i]
	}
	return sum
}
```

Unless otherwise stated, all benchmarks are run on an Intel Xeon Platinum 8481C 2.70GHz CPU. This is a `c3-highcpu-44` GCE VM.

## Loop unrolling

Modern CPUs do this thing called [_instruction pipelining_](https://en.wikipedia.org/wiki/Instruction_pipelining) where it can run multiple instructions simultaneously if it finds no data dependencies between them. A data dependency just means that the input of one instruction depends on the output of another.

In our simple implementation, we have data dependencies between our loop iterations. A couple, in fact. Both `i` and `sum` have a read/write pair each iteration, meaning an iteration cannot start executing until the previous is finished.

A common method of squeezing more out of our CPUs in situations like this is known as [_loop unrolling_](https://en.wikipedia.org/wiki/Loop_unrolling). The basic idea is to rewrite our loop so more of our relatively-high-latency multiply instructions can execute simultaneously. Additionally, it amortizes the fixed loop costs (increment and compare) across multiple operations.

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

In our unrolled code, the dependencies between multiply instructions are removed, enabling the CPU to take more advantage of pipelining. This increases our throughput by TODO% compared to our naive implementation.

<div class="chart-container">
<div class="bar-text" style="grid-row: 1;"><code>DotNaive</code></div>
<div class="bar-value" style="grid-row: 1; width: 73%"><span>941489 vec/s</span></div>
<div class="bar-text" style="grid-row: 2;"><code>DotUnroll4</code></div>
<div class="bar-value" style="grid-row: 2; width: 100%;"><span>1293605 vec/s</span></div>
</div>

Note that we can actually improve this slightly more by twiddling with the number of iterations we unroll. On the benchmark machine, 8 seemed to be optimal, but on my laptop, 4 performs best. However, the improvement is quite platform dependent and fairly minimal, so for the rest of the post, I'll stick with an unroll depth of 4 for readability.

## Bounds-checking elimination

In order to keep out-of-bounds slice accesses from being [a security vulnerability](https://en.wikipedia.org/wiki/Heartbleed), the go compiler inserts checks before each read. You can check it out in the [generated assembly](https://go.godbolt.org/z/qT3M7nPGf) (look for `runtime.panic`).

The compiled code makes it look like we wrote somthing like this:

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

In a hot loop like this, even with modern branch prediction, the additional branches per iteration can add up to a pretty significant performance penalty. This is especially true in our case because the inserted jumps limit how much we can take advantage of pipelining.

To assess the impact of bounds checking, a trick I recently learned is to use the `-gcflags="-B"` option. It builds the binary without the bounds checks, allowing you to compare benchmarks with and without bounds checking. The comparison indicates that bounds checking reduces throughput by roughly TODO%.

That's small enough that it probably wouldn't even be worth poking at. However, running this locally on an M1 Macbook yields a difference of over 30%, so I'm still going to go through the exercise of removing these checks.

If we can convince the compiler that these reads can never be out of bounds, it won't insert these runtime checks. This technique is known as "bounds-checking elimination", and the same pattern can be applied to many different memory-safe compiled languages.

In theory, we should be able to do all checks once, outside the loop, and the compiler would be able to determine that all the slice indexing is safe. However, I couldn't find the right combination of checks to convince the compiler that what I'm doing is safe. I landed on a combination of asserting the lengths are equal and moving all the bounds checking to the top of the loop. This was enough to hit nearly the speed of the bounds-check-free version.

```go
func DotBCE(a, b []float32) float32 {
	if len(a) != len(b) {
		panic("slices must have equal lengths")
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

<div class="chart-container">
<div class="bar-text" style="grid-row: 1;"><code>DotNaive</code></div>
<div class="bar-value" style="grid-row: 1; width: 69%"><span>941489 vec/s</span></div>
<div class="bar-text" style="grid-row: 2;"><code>DotUnroll4</code></div>
<div class="bar-value" style="grid-row: 2; width: 94%;"><span>1293605 vec/s</span></div>
<div class="bar-text" style="grid-row: 3;"><code>DotBCE</code></div>
<div class="bar-value" style="grid-row: 3; width: 100%;"><span>1372632 vec/s</span></div>
</div>

Interestingly, the benchmark for this updated implementation shows a performance impact even greater than just using the `-B` flag! This one yields an 11% improvement compared to the 2.5% from `-B`. I actually don't have a good explanation for this. I'd love to hear if someone has an idea of why the difference is larger.

This technique translates well to many memory-safe compiled languages like [Rust](https://nnethercote.github.io/perf-book/bounds-checks.html).

<aside>

Exercise for the reader: why is it significant that we slice like `a[i:i+4:i+4]` rather than just `a[i:i+4]`?

</aside>

TODO: add discussion about `unsafe` package?

## Quantization

We've improved execution speed of our code pretty dramatically at this point, but there is another dimension of performance that is relevant here: memory usage.

(If you skipped the background section, this part might not make much sense.)

In our situation, we're searching over vectors with 1536 dimensions. With 4-byte elements, this comes out to 6KiB per vector, and we generate roughly a million vectors per GiB of code. That adds up.

When searching the vectors, they need to be held in RAM, which puts some serious memory pressure on our deployments. Moving the vectors out of memory would mean loading them from disk at search time, which is a no-go when performance is so critical.

There are [plenty of ways](https://en.wikipedia.org/wiki/Dimensionality_reduction) to compress vectors, but we'll be talking about [_integer quantization_](https://huggingface.co/docs/optimum/concept_guides/quantization), which is relatively simple, but effective. The idea is to reduce the precision of the 4-byte `float32` vector elements by converting them to 1-byte `int8`s.

I won't get into exactly _how_ we decide to do the translation between `float32` and `int8`, since that's a pretty [deep topic](https://huggingface.co/docs/optimum/concept_guides/quantization), but suffice it to say our function now looks like the following:

```go
func DotInt8(a, b []int8) int32 {
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

This change yields a 4x reduction in memory usage at the cost of some recall precision (which we carefully measured, but is irrelevant to this blog post).

Re-running the benchmarks shows we suffer a perf hit from this change. Taking a look at the generated assembly (with `go tool compile -S`), there are a bunch of new instructions to convert `int8` to `int32`, so I expect that's the source of the slowdown. We'll make up for that in the next section.

<div class="chart-container">
<div class="bar-text" style="grid-row: 1;"><code>DotNaive</code></div>
<div class="bar-value" style="grid-row: 1; width: 69%"><span>0.94M vec/s</span></div>
<div class="bar-text" style="grid-row: 2;"><code>DotUnroll4</code></div>
<div class="bar-value" style="grid-row: 2; width: 94%;"><span>1.29M vec/s</span></div>
<div class="bar-text" style="grid-row: 3;"><code>DotBCE</code></div>
<div class="bar-value" style="grid-row: 3; width: 100%;"><span>1.37M vec/s</span></div>
<div class="bar-text" style="grid-row: 4;"><code>DotInt8BCE</code></div>
<div class="bar-value" style="grid-row: 4; width: 90%;"><span>1.23M vec/s</span></div>
</div>

## SIMD

I always love an excuse to play with SIMD. And this problem seemed like the perfect nail for that hammer.

For those unfamiliar, SIMD stands for "Single Instruction Multiple Data". Just like it's says, it lets you run an operation over a bunch of pieces of data with a single instruction. This is exactly what we want for calculating a dot product.

We have a problem though. Go does not expose SIMD intrinsics like [C](https://www.intel.com/content/www/us/en/docs/intrinsics-guide/index.html) or [Rust](https://doc.rust-lang.org/beta/core/simd/index.html). We have two options here: write it in C and use Cgo, or write it by hand for Go's assembler. I try hard to avoid Cgo whenever possible for [many reasons that are not at all original](https://dave.cheney.net/2016/01/18/cgo-is-not-go), but one of those reasons is that Cgo imposes a performance penalty, and performance of this snippet is paramount. Also, getting my hands dirty with some assembly sounds fun, so that's what I'm going to do.

I want this routine to be reasonably portable, so I'm going to restrict myself to only AVX2 instructions, which are supported on most `x86_64` server CPUs these days. We can use [runtime feature detection](TODO) to fall back to a slower option in pure Go.

<details>

<summary>Full code for <code>DotAVX2</code></summary>

```asm
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

- `VPMOVSXBW`, which loads `int8`s into a vector `int16`s
- `VPMADDWD`, which multiplies two `int16` vectors element-wise, then adds together adjacent pairs to produce a vector of `int32`s
- `VPADDD`, which accumulates the resulting `int32` vector into our running sum

TODO: add links to the reference docs for the instructions

`VPMADDWD` is a real heavy lifter here. By combining the multiply and add steps into one, not only does it save instructions, it also helps us avoid overflow issues by simultaneously widening the result to an `int32`.

Let's see what this earned us.

<div class="chart-container">
<div class="bar-text" style="grid-row: 1;"><code>DotNaive</code></div>
<div class="bar-value" style="grid-row: 1; width: 11%"><span>0.94M vec/s</span></div>
<div class="bar-text" style="grid-row: 2;"><code>DotUnroll4</code></div>
<div class="bar-value" style="grid-row: 2; width: 15%;"><span>1.29M vec/s</span></div>
<div class="bar-text" style="grid-row: 3;"><code>DotBCE</code></div>
<div class="bar-value" style="grid-row: 3; width: 16%;"><span>1.37M vec/s</span></div>
<div class="bar-text" style="grid-row: 4;"><code>DotInt8BCE</code></div>
<div class="bar-value" style="grid-row: 4; width: 14%;"><span>1.23M vec/s</span></div>
<div class="bar-text" style="grid-row: 5;"><code>DotAVX2</code></div>
<div class="bar-value" style="grid-row: 5; width: 100%;"><span>7.07M vec/s</span></div>
</div>

Woah, that's a 530% increase in throughput from our previous best! SIMD for the win 🚀

Now, it wasn't all sunshine and rainbows. Hand-writing assembly in Go is weird. It uses a [custom assembler](https://go.dev/doc/asm), which means that its assembly language looks just-different-enough-to-be-confusing compared to the assembly snippets you usually find online. It has some weird quirks like [changing the order of instruction arguments](TODO) or [using different names for instructions](TODO). Some instructions don't even _have_ names in the go assembler and can only be used via their [binary encoding](TODO). Shameless plug: I found sourcegraph.com invaluable for finding examples of Go assembly to draw from.

That said, compared to Cgo, there are some nice benefits. Debugging still works well, the assembly can be stepped through, and registers can be inspected. There are no extra build steps (a C toolchain doesn't need to be set up). It's easy to set up a pure-Go fallback so cross-compilation still works. Common problems are caught by `go vet`.

## SIMD...but bigger

Previously, we limited ourselves to AVX2, but what if we _didn't_? The VNNI extension to AVX-512 added the [`VPDPBUSD`](https://www.felixcloutier.com/x86/vpdpbusd) instruction, which computes the dot product on `int8` vectors rather than `int16`s. This means we can process four times as many elements in a single instruction because we don't have to convert to `int16` first and our vector width doubles with AVX-512!

The only problem is that the instruction requires one vector to be signed bytes, and the other to be _unsigned_ bytes. Both of our vectors are signed. We can employ [a trick from Intel's developer guide](https://www.intel.com/content/www/us/en/docs/onednn/developer-guide-reference/2023-0/nuances-of-int8-computations.html#DOXID-DEV-GUIDE-INT8-COMPUTATIONS-1DG-I8-COMP-S12) to help us out. Basically, add 128 to one of our vectors to ensure it's in range of an unsigned integer, then keep track of how much overshoot we need to correct for at the end.

<details>
<summary>

Full code for <code>DotVNNI</code>

</summary>

```asm
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
    //
    // The idea for this comes from this doc:
    // https://www.intel.com/content/www/us/en/docs/onednn/developer-guide-reference/2023-0/nuances-of-int8-computations.html#DOXID-DEV-GUIDE-INT8-COMPUTATIONS-1DG-I8-COMP-S12

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

<div class="chart-container">
<div class="bar-text" style="grid-row: 1;"><code>DotNaive</code></div>
<div class="bar-value" style="grid-row: 1; width: 11%"><span>0.94M vec/s</span></div>
<div class="bar-text" style="grid-row: 2;"><code>DotUnroll4</code></div>
<div class="bar-value" style="grid-row: 2; width: 15%;"><span>1.29M vec/s</span></div>
<div class="bar-text" style="grid-row: 3;"><code>DotBCE</code></div>
<div class="bar-value" style="grid-row: 3; width: 16%;"><span>1.37M vec/s</span></div>
<div class="bar-text" style="grid-row: 4;"><code>DotInt8BCE</code></div>
<div class="bar-value" style="grid-row: 4; width: 14%;"><span>1.23M vec/s</span></div>
<div class="bar-text" style="grid-row: 5;"><code>DotAVX2</code></div>
<div class="bar-value" style="grid-row: 5; width: 81%;"><span>7.07M vec/s</span></div>
<div class="bar-text" style="grid-row: 6;"><code>DotVNNI</code></div>
<div class="bar-value" style="grid-row: 6; width: 100%;"><span>7.07M vec/s</span></div>
</div>

## Bonus material

- If you haven't used [benchstat](https://pkg.go.dev/golang.org/x/perf/cmd/benchstat), you should. It's great. Super simple statistical comparison of benchmark results.
- Don't miss the [compiler explorer](https://go.godbolt.org/z/qT3M7nPGf), which is an extremely useful tool for digging into compiler codegen.
- I got [nerd sniped](https://twitter.com/sluongng/status/1654066471230636033) into implementing [a version with ARM NEON](TODO), which made for an interesting comparison.
- If you haven't come across it, the [Agner Fog Instruction Tables](https://www.agner.org/optimize/) make for some great reference material for low-level optimizations.
- Probably the best solution to searching large numbers of vectors is to build an index. There are many vector databases (TODO: add links) that can do this, but they all come with new memory/storage/deployment tradeoffs. TODO: maybe add something about qdrant?
- TODO: GPU acceleration
