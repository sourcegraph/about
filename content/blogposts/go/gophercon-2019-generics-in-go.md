---
title: "GopherCon 2019 - Generics in Go"
description: "Advantages and requirements for generics in Go."
authors:
  - name: Dimitrios Arethas for the GopherCon 2019 Liveblog
publishDate: 2019-07-26T00:00-09:40
tags: [
  gophercon
]
slug: gophercon-2019-generics-in-go
heroImage: https://about.sourcegraph.com/gophercon2019.png
published: true
---

Presenter: Ian Lance Taylor

Liveblogger: [Dimitrios Arethas](https://twitter.com/darethas)

## Overview

Advantages and requirements for generics in Go.

---

## Summary

In this talk, Ian outlined why the Go team feels like generics is a problem in need of tackling, what advantages they bring, and the requirements for what a generics implementation would be in Go.

## Why are generics needed in Go?

Go released Nov 10 2009. Less than 24 hours later, the first comment about generics came through.

In three years of Go surveys, lack of generics has always been listed
as one of the top 3 problems to fix in the language.

## What does it mean to add generics and why would we want it?

![Definition of Generics](/gophercon-2019/generics-defn.png)

The definition of Generic programming for use in this talk: Generic programming enables the representation of functions and data
structures in a generic form, with types factored out.

A simple example: reversing elements in a slice.

![Reversing a slice of ints](/gophercon-2019/generics-reverse-ints-example.png)

![Reversing a slice of strings](/gophercon-2019/generics-reverse-strings-example.png)

If you compare `ReverseInts` and `ReverseStrings`, the two
functions are exactly the same except for the type of the parameter.

What some people new to Go find surprising is that there is no way to
write a simple `Reverse` function that works for a slice of any type.

So how would you do this in Go?

## Ways to get generics in Go today

- Interface types
- Reflection and type assertion
- Code generation

Interface types are a form of generic types.
You can write a single function that works for different slice
types by using an interface type, and defining a method on the slice
types you want to pass in. That is how the standard library's
sort.Sort function works.

But this approach falls short. With interfaces you have to write the methods yourself. And the methods you write are the same for each slice type. We just moved and condensed the duplicate code, which isn't what we want from generics.

A different way to use interfaces for generics is to have the language itself define methods for some kind of types.

Another approach is to write a generic `Reverse` function using the reflect package but it is awkward to write and slow to run.

Or we could use code generation and write a generator that takes a type and generates a `Reverse` function. But this adds another step to every package needs reverse, complicates the build, and makes fixing bugs difficult because you would need to regenerate it everywhere.

All these approaches are awkward enough that I think most
people who have to reverse a slice in Go just write the function for
the specific slice type that they need.

There must be a better way.

![Definition of Generics](/gophercon-2019/generics-defn.png)

Back to our generics definition: The key thing is Generics factor out element types so we can write the reverse function once. This is what generics means for the purposes of this talk (the paraphrased Jazayeri definition in the slide). So for example, Ian doesn't mean templates in C++, which support quite a bit more than what is referenced.

![Example functions that could be generic](/gophercon-2019/generics-functions1.png)
![Example functions that could be generic](/gophercon-2019/generics-functions2.png)

Although the `Reverse` function was described in detail these are a list of other functions that could be written generically.

It's not just functions that could be written generically, but data structures. Go already has two generic data structures built into the language: Slices and Maps.

IF we could write generic types, we could define new generic data structures like sets, self-balancing trees, multimaps, concurrent hash maps, etc.

These data structures should all be like `Reverse`,` written once, put in a package and reused, with type checking at compile time.

So Generics can give us powerful building blocks to share code and build programs easily.

But every language change has a cost. With any change to the language, we need to talk about _maximizing the benefit and minimizing the cost._

In Go, we’ve aimed to reduce complexity through independent, orthogonal
language features that can be combined freely. We reduce complexity by
making the individual features simple, and we maximize the benefit of the
features by permitting their free combination. We want to do the same with generics.

## Guidelines for a generics design:

- **Minimize new concepts**
  - new syntax
  - new keywords and other names.
- **Complexity falls on writer of generic code, not user**

  - It should be possible to call generic functions in a natural way
  - Any errors in using a generic package should be reported in a way that is easy to understand and to fix.
  - easy to debug calls into generic code.

- **Writer and user can work independently**

  - Shouldn't worry about the other is doing, anymore than the caller of regular functions
  - Sounds obvious, but it isn't true of other generics implementations.

- **Short build times, fast execution times**

  - Generics tend to introduce a tradeoff between fast build and fast execution.
  - As much as possible, we want both.

- Preserve clarity and simplicity of Go.

The go team has been exploring this space for 10 years. Most of it is how to add generics that preserve clarity and simplicity.

**Most important message of this talk:**

> _Generics can bring a significant benefit to the language, but they are only worth doing if Go still feels like Go._

Ian then reviews last years contracts design and highlights the fact that some simplifications and feedback was taken into consideration for this year.

![Ordered Contract](/gophercon-2019/generics-ordered-contract.png)

On the slides is a link to actual implementations using the current draft [golang.org/cl/187317](https://golang.org/cl/187317) [rec: 22:24]

## Parting note during talk:

> Our goal is to arrive at a design that makes it possible to write the kinds of generic code I discused today without making the language too complex to use and without making it not feel like Go anymore.

## More on Generics in Go

Ian has written a [Why Generics](https://blog.golang.org/why-generics) post on the [Go Blog](https://golang.org/).
