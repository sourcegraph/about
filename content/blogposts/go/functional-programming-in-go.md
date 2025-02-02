---
title: 'Functional Programming in Go'
authors:
  - name: Aaron Schlesinger
publishDate: 2017-07-14T23:04-07:00
tags: [
  "gophercon"
]
slug: functional-programming-in-go
heroImage: https://assets.ctfassets.net/le3mxztn6yoo/4ODIg0jhskgiuQ0SgmaMsm/addc509ab1dff98eb6864bcee1740aad/Selection_012.bmp
published: true
---


Liveblog by Renfred Harper ([@renfredxh](https://twitter.com/renfredxh))



**Editor's note: This talk makes frequent reference to this repository: https://github.com/go-functional/core**

Aaron Schlesinger ([@arschles](https://twitter.com/arschles)) is a Microsoft Azure Gopher. He leads or contributes to development on much of the Go codebase in the Kubernetes, and SIG-Service-Catalog platforms. He's also a former Scala-er, F# & Haskell Tinker-er, and programming psychologist. He talked at [GopherCon 2017](https://gophercon.com/speakers/21) about ways to apply functional-programming concepts to Go.

---

Having come from an background in functionally rooted languages such as Scala and F#, Aaron has seen the benefits of functional paradigms and wants to help the Go community be of aware of how to combine them- when appropriate -with the simplicity and speed of Go we've all come to love.

Aaron's talk covered a few functional paradigms with examples of how to practically apply them in Go. _Pure functions_ are helpful for encapsulating external state that would often be held in global variables, make isolated testing easier, and help prevent insidious concurrency issues. _Optionals_ can act as containers that encapsulate return values and prevent `nil` pointer panics.

To learn more about these functional terms and more, check out Aaron's [go-functional/core](https://github.com/go-functional/core) repository for extended definitions and examples.

## The future of functional Go

Is functional go the future? Right now it's unclear. Although features such as first-class functions, higher-order functions, and [closures](https://tour.golang.org/moretypes/25) give Go a strong functional starting point, Aaron noted that without generics the future of a truly functional Go is in question (although there are workaround such as code generation). First-class support could also mean major improvements over inefficient operations such as mapping over large slices. He wants to change this by opening a dialogue around functional Go and encouraging the community to try to apply functional concepts to their Go code where appropriate. With [Go 2 on the horizon](https://about.sourcegraph.com/go/the-future-of-go) now is the time to begin thinking considering how we want the ways we use Go to shape the language and vice versa.

Aaron encourages all in the Go community make contributions to his [go-functional/core](https://github.com/go-functional/core) library by asking questions, filing issues, or making improvements. By forming a functional community within Go, hopefully we can learn more about how to write better code and improve the language for all.
