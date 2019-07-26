---
title: "GopherCon 2019 - Optimizing Go Code without a blindfold"
description: "Making code faster is exciting, and benchmarks in Go make that easy to do! Not really. Optimizing a program can be complex and requires careful consideration to do so properly. This session will demonstrate techniques and tools which are a must for any performance aficionado."
author: Aman Mangal for the GopherCon 2019 Liveblog
publishDate: 2019-07-26T00:00-11:55
tags: [
  gophercon
]
slug: gophercon-2019-optimizing-go-code-without-a-blindfold
heroImage: https://about.sourcegraph.com/gophercon2019.png
published: true
---

Presenter: Daniel Martí

Liveblogger: [Aman Mangal](https://amanmangal.net/)

## Overview

Making code faster is exciting, and benchmarks in Go make that easy to do! Not really. Optimizing a program can be complex and requires careful consideration to do so properly. This session will demonstrate techniques and tools which are a must for any performance aficionado.

## Tools for Benchmarking: `benchstat`

Benchmarks can be noisy sometimes for multitude of reasons. How do we decide which
run of the benchmarks to choose from! The answer is **statistics**. Go tools allow us
to run the benchmarks multiple times using `-count` switch and compute statistics.

Let's try out an example benchmark from `encoding/json` package of Go standard library
available in `$GOROOT/src/encoding/json` -

```bash
$ go test -bench=CodeDecoder -count=8 > old.txt
$ benchstat old.txt
name            time/op
CodeDecoder-8    10.ms ± 3%

name            speed
CodeDecoder-8    192MB/s ± 3%
```

This runs the benchmark 8 times and writes the results to `old.txt`.
`benchstat` then aggregates the results and presents us with mean and variance.

`benchstat` also allows comparing old results of a benchmark with new results:

```
$ benchstat old.txt new.txt
old time/op     new time/op
13.5ms ± 1%     13.4ms ± 1%

delta (p=0.247, n=10+10)
```

Gotcha: Do not **search** for p-values.

## How to Reduce Noise

The benchmark above has 3% variance. Too much variance reduces confidence in the benchmark.
We need to reduce noise in our benchmark to acceptable limits (<1%). Here are a few things
we could try.

* Benchmarks demands **100%** of CPU but machine CPU usage sits already at **0-15%**.
  Closing resource hungry apps on the machine such as `chrome`, `vim`, `slack` can help
  reducing CPU usage to **0-4%**.

* Laptops can get incredibly hot and cannot continuously run at turbo speeds (overclocked speeds).
  Running benchmarks at lower CPU usage by using [`perflock`](https://github.com/aclements/perflock)
  can provide more consistent results (Only works for Linux). Here, `perflock` will cap the
  CPU usage to **70%** to ensure that benchmark has enough CPU to use as well as laptop/machine
  doesn't get overheated avoiding CPU throttling.

```
$ perflock -daemon &
$ perflock -governor=70% go test -...
```

* We should choose a *higher* value of `-count` if variance in the benchmark results is *high*.

## Compiler Tricks

### Inlining

Following command allows us to identify the functions that are not inlined during compilation.
We could then modify the function and reduce its complexity and ensure inlining to achieve
better performance.

```
go build -gcflags='-m -m' <package name> | grep 'function too complex'
```

### Escape Analysis

Allows you to identify the variables used in a function that are allocated on heap.
Heap memory allocation is more expensive compared to memory allocation on stack,
so it's worth looking into these variables.

```
go build -gcflags='-m -m' <package name> | grep 'escapes to heap'
```

### Bounds Check

Go compiler inserts conditions to check for bounds when a slice is indexed.
We can view these additional checks added by the compiler using the following command:

```
go build -gcflags=-d=ssa/check_bce/debug=1 <package name>
```

Compiler can also tell us why it decided to eliminate the checks for array bounds in the code:

```
go build -gcflags=-d=ssa/prove/debug=1 <package name>
go build -gcflags=-d=ssa/prove/debug=2 <package name>
```

### Gotcha: Unexpected Performance Improvements

Sometimes code runs faster without making any changes to this code. For example:

```
Author: Russ Cox <rsc@golang.org>

I cannot explain why BenchmarkSkipValue gets faster.
Maybe it is one of those code alignment things.
```

### Clear a Map

Go compiler compiles the following code into an efficient code.
See [here](https://golang.org/pkg/runtime/?m=all#mapclear) for more details.

```go
for k:= range m {
  delete(m, k)
}
```

### Counting Number of Runes in a String

Go compiler doesn't copy the string into a slice of rune. This code too is compiled
into an efficient code to ensure no copy of data.

```
n := len([]rune(str))
```

### Dump SSA

To dump the intermediate representation of the Go code, following commands can be used:

```go
package p

func HelloWorld() {
  println("hello world!")
}
```

```sh
$ GOSSAFUNC=HelloWorld go build
dumed SSA to ssa.html

$ chromium ssa.html
```

Find more information in `cmd/compile/README` and `cmd/compile/internal/ssa/README`.

## Demo

In the current `encoding/json` package (beofre Go 1.13), the code performs linear search
while looking for a struct field. A more efficient approach can use a Go map and find
the corresponding value field quickly.

For more details, check out https://go-review.googlesource.com/c/go/+/172918.
