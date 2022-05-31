---
title: 'Machine Learning and Go'
authors:
  - name: Francesc Campoy Flores (speaker)
publishDate: 2017-11-06T17:40+01:00
tags: [
  "dotGo"
]
slug: machine-learning-and-go
description: 'Can we solve ML problems in Go?'
heroImage: https://images.ctfassets.net/le3mxztn6yoo/7MLYQeQ1TGcumqgUmuY2mY/18d5fdda571bf8f5b6c3e6cc8dcabb89/Image_uploaded_from_iOS.jpg
published: true
---

[Francesc de Campoy Flores (@francesc)](https://twitter.com/francesc) is VP of Developer Relations at `source{d}`. Previously, he was a developer and advocate at Google for Go and Google Cloud. He also runs the popular video series [#justforfunc](https://github.com/campoy/justforfunc#justforfunc).

All the cool kids are doing machine learning, but they're doing it in Python. Can we change that? Can we solve ML problems in Go? What are the libraries out there? Is it fast enough? Follow Francesc on a trip that will take us from machine learning and matrix multiplication, through TensorFlow and Python, to finish with Go and cgo on the GPU.

Note: This post was live-blogged at [dotGo 2017](https://www.dotgo.eu/). Let us know on Twitter ([@sourcegraph](https://twitter.com/sourcegraph)) if we missed anything. All content is from the talk; any mistakes or misrepresentations are our fault, not the speaker's.

![Image uploaded from iOS](//images.contentful.com/le3mxztn6yoo/7MLYQeQ1TGcumqgUmuY2mY/18d5fdda571bf8f5b6c3e6cc8dcabb89/Image_uploaded_from_iOS.jpg)

---

Francesc is talking today about how to do machine learning in Go, and why not to do it.

He traced the recent history of AI. After Deep Blue beat Gary Kasparov at chess in 1996, people thought it'd take 100 years for computers to win at Go (the board game, not the programming language). Just 20 years later, in 2017, AlphaGo soundly beat the best humans. This happened much faster than we expected.

# Recognizing handwritten digits in Go

Francesc walked through writing a Go program to recognize handwritten digits in the [MNIST dataset](https://yann.lecun.com/exdb/mnist/).

To do this well in Go, we need to:

- Read images
- Multiply matrices
- Visualize datasets
- ...to do all of these things quickly

Many people look to [gonum](https://TODO) for this. It provides a lot of matrix and linear algebra functionality, but it's verbose and uses mutable data structures.

Francesc introduced his experimental matrix library [campoy/mat](https://github.com/campoy/mat), which provides immutable data structures and more readable usage patterns. Here's an example of a regression cost function written using campoy/mat:

```go
h := mat.Minus(mat.Product(X, theta), y)
return mat.Dot(h, h).Sum() / float64(2 * X.Rows())
```

## Performance

As you might expect, the native implementation of matrix multiplication is slow in Go. The initial example he showed took around 20sec for the second iteration.

One approach is to parallelize the computations. Francesc showed an example where each cell's computation was performed in its own goroutine. This cut the time for the second iteration down to 10s, but that's still much slower than when using numpy in Python.

Finally, Francesc showed off the performance of a more optimized implementation of matrix multiplication in Go. The iterations completed much more quickly. *Editor's note: Code samples will be posted here soon.*

## What's next?

Francesc looks forward to making it easier to use GPUs and TensorFlow from Go. We do, too!
