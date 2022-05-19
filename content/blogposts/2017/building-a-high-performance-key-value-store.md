---
title: 'Building a High Performance Key/Value Store'
authors:
  - name: Marty Schoch
publishDate: 2017-07-13T00:00-07:00
tags: [
  "gophercon"
]
slug: building-a-high-performance-key-value-store
heroImage: https://assets.ctfassets.net/le3mxztn6yoo/4ODIg0jhskgiuQ0SgmaMsm/addc509ab1dff98eb6864bcee1740aad/Selection_012.bmp
published: true
---

Liveblog by Matt King

Slides for this talk have been posted [here](https://speakerdeck.com/mschoch/value-store-in-go).

## About The Speaker

Marty Schoch is a Senior Software Engineer at [Couchbase](https://couchbase.com) and the lead developer at [Bleve](http://www.blevesearch.com/), an open source full-text search library for Go.

---

## Overview

Marty explores the internals of a high-performance key/value store in Go. He discusses the basic design used to store and retrieve data, as well as the techniques used to achieve high performance.

## Problem

Couchbase needed a high performance key/value datastore that was optimized for large datasets and therefore needs very good throughput. The datastore needed very good throughput without negatively impacting latency. Often times throughput and latency are at odds with each other so for them it was important to keep focused on that when defining the rest of their requirements. They also needed a way persist the data, but in a way that was decoupled from read and write. They also were willing to use all the system RAM.

## What is a key value store:

Keys and values are slices of bytes. On those bytes we have operations we can perform:

- Get
- Set
- Delete (values by key)

Many key value stores are ordered and offer an operation to iterate the key value pairs. Key value stores can perform atomic batch updates which allows the application to independently prepare and perform all the operations at once. It's a useful primitive to build higher level functionality. Isolated read snapshots are useful and these snapshots can be persisted to the disk so that the application doesn't have to start over if it doesn't need to. This is very useful for large datasets.

Before Marty and his team decided to build their own key value store they examined several options:

- Bolt
  - Go
  - B+tree
  - Great read performance
- RocksDB
  - C++
  - LSM (leveldb)
  - Better read/write perf balance
  - cgo
- GoLevelDB
  - Go
  - LSM (leveldb)
  - Unable to tune adequetly
- Badger
  - Go
  - WiscKey
  - Not available at the time. (Excited about and wants to see competitive in the space)

## Core Principles

1. Simplicity
   > "Use simple algorithms as well as simple data structures"
2. Explicit
   - They set out to build a key value store for a specific purpose, not a general solution.

## MOSS

The outcome was MOSS, Memory Oriented Sorted Segments. You can view the project on [Sourcegraph](https://sourcegraph.com/github.com/couchbase/moss) or clone it on [GitHub](https://github.com/couchbase/moss)

MOSS an approachable codebase. Although there are complex corners, it's simple because of the core principles followed. MOSS provides a simple, fast, persistable, ordered key-val collection implementation as a 100% golang library.

## Recap

MOSS is built and well suited for the problem they set out to solve. The process they followed was very impressive and is as follows:

1. Start with simple implementation
2. Benchmark
3. Analyze results
4. Iterate when needed and only add complexity later. You cannot add simplicity later on.

![Selection 012](//assets.contentful.com/le3mxztn6yoo/4ODIg0jhskgiuQ0SgmaMsm/addc509ab1dff98eb6864bcee1740aad/Selection_012.bmp)