---
title: 'The Future of Go'
authors:
  - name: Russ Cox
publishDate: 2017-07-13T00:00-07:00
tags: [
  "gophercon"
]
slug: the-future-of-go
heroImage: https://images.ctfassets.net/le3mxztn6yoo/69VBxnKJEcgCCmAuMw6Q0y/110246d95c70fc4c90bf20ca20ab70f5/cox.jpg
published: true
---


Liveblog by Dmitri Shuralyov ([@shurcool](https://twitter.com/shurcool))

## Go history

On September 25, 2007, together with Rob Pike, they decided on the name. Go.

On November 10, 2009, Go was open sourced.

Go 1, the first stable release, was released on March 28, 2012.

Before Go 1, Go was broken every week. Programs had to be updated weekly to continue to work. This was blocking larger adoption. That was motivation for the Go 1 guarantee.

Since then, the language has been improved internally. The performance was improved, better tooling like the race detector was added.

## Go 2

Today, Russ asks for all our help in implementing Go 2.

Next up, this talk will cover the following aspects of Go 2:

- goals
- constraints
- limitations
- importance of writing about experiences of using Go
- how we'll deliver Go 2
- and how we (the community) can help

Go's largest goal is scale. We want to make programmers more effective managing:

- scale of their system and its deployment
- scale of codebase and its development

The goal for Go 2 is to fix the most important ways in which Go 1 fails to scale.

Go 2's largest constraint is existing usage.

There are 500k+ Go developers, millions of Go source files, 1+ billion of Go source lines.

Go 2 must bring all the developers along with it. Unlearning of certain practices must be done. So, it must be worth it to them.

Go 2 must also bring all the existing code, we must not fragment the ecosystem.

We'll have to figure out how to do that. Automated tooling like go fix will play a part.

What can we do? Maybe three major changes. Plus minor housekeeping changes. More details to be determined.

We can only do a few major changes. Doing more than that means that upgrading will be too difficult and creates the risk of people staying back. That means we'll have to choose the major changes very carefully.

## Process for developing Go

What is the process for developing Go? In early days, it was 5 of us working in adjacent offices. When a wrinkle arose, it was easy to gather everyone.

That informality doesn't scale to the global community today.

We're porting some of that into the mailing lists, but we might not have done a great job of describing the process formally. Here are the steps:

1. Use Go. (Accumulate experience.)
2. Identify and explain a problem.
3. Propose and discuss a solution.
4. Implement, evaluate, refine solution.
5. Ship production implementation.

We might want to not proceed and go back to a previous step. It's an iterative and reactive process.

Different people can work on different steps.

We explained some parts, but not the whole process.

Russ wants to explain step 2 today, since it wasn't covered before.

Step 2 is "identify and explain a problem." We the developers are good at this. We write tests, which define a problem so well that even a computer can understand it.

We're not as good at being sure that a problem is important, and worth solving.

On September 10, 2011, Russ reported an issue:

> **error.Value**
>
> A problem that we have in very low-level libs is that everything depends on "os" for os.Error, **so it's hard to do things that os itself can use (like time.Nano below). If not for os.Error, package os would not be depended on by nearly so many packages.** Computation-only packages like hash/* or strconv or strings or bytes would not not need to mention it, for example. I plan to explore defining a package error with an API of approximately:
```text
>     package error
>     type Value interface { String() error)}
>     func New(s string) Value
```

It was sufficient to describe the problem back then. But it took a lot more to explain to a larger audience at Gotham Go.

### Timing an event

    start := time.Now()       // 3:04:05.000
    event() end := time.Now() // 3:04:05.010
    elapsed := end.Sub(start) // 10 ms

Timing an event across a leap second causes the end result not to match reality. So elapsed time can end up being negative. A 10 millisecond event can be timed to take -990 ms.

    start := time.Now() // 11:59:59.995
    event()
    end := time.Now() // 11:59:59.005
                      // (really 11:59:60.005)
    elapsed := end.Sub(start) // -990 ms

Because of this problem, OSes implement a monotonic clock.

October 2015, a bug report requested the addition of a new API to access monotonic clocks.

Russ didn't think that it was worth adding new API at the time.

We waited. Waiting was a good way to help understand the significance of the problem.

Cloudflare had a significant outage as a result of the leap second. Cloudflare was exactly the kind of company that should be able to use Go successfully.

This meant that the problem was too important to be left unresolved. So fixed the underlying problem, and done so without adding a new API.

## Explaining gradual code repair

Another problem that comes up in large codebases is the inability to handle gradual code repair.

A proposal for aliases was created, which aimed to help with that issue.

We wanted to add aliases not because it was an elegant concept, but because it solved an important practical problem.

When we explained it, there were no concrete examples given. So the abstract example was hard for developers to understand and relate to.

In fall, we started over. We gave multiple concrete examples, showing how the problem arises everywhere, not just in Google. After people could see its significance, and we had productive discussions.

The outcome was that type aliases are added in Go 1.9.

To discuss major changes to Go in the community, we need to describe the problems well. Experience reports turn an abstract problem into a concrete one, and help understand its significance.

It's also a test case. Any potential solution can be tested against the problem and see if it resolves it well.

We don't currently have great examples of experience reports that show how absence of generics is a significant problem.

Every potential major change to Go should be motivated by experience reports, documenting how people are using Go today, and how it would affect them.

These reports are the raw material for the Go 2 process.

We need your help writing these experience reports.

Post them on your blog, Medium, a GitHub Gist, etc., and add a link to it to our new wiki page:

[https://golang.org/wiki/ExperienceReports](https://golang.org/wiki/ExperienceReports)

### Additional examples

There was a language change suggestion (in [https://golang.org/issues/6815](https://golang.org/issues/6815)) to be able to multiply 32-bit values and store the low, and high bits:

    var lo, hi, x, y uint32
    lo, hi = x * y

We came up with a solution, which we posted in the issue, but waited on adding it.

But now, a new package math/bits was added to help with that problem. It ended up being that a new library was a better solution than a language change.

When the Go race detector was added, it was originally something that was considered as a language change too, but it wasn't clear how to make that work well. Instead, a better solution ended up being additional tooling, in the form of the race detector as we know it today.

## Go 2 schedule

We want to reduce divergence between Go 1 and 2. We'll need time to land some changes. Russ expects we might to see that begin to land in a year or so, around Go 1.12. This is speculative.

We're not abandoning Go 1, we're bringing it as far as possible along and supporting it.

We need your help. Please help us in every step along the way. What we need today are experience reports. How is Go working well for you, and how Go is not working well. That's how we'll start talking about how we, the Go community, can change Go.

## Blog post

There was an official Go blog post covering this talk posted today. It goes in further detail on this topic, and you can read it at [https://blog.golang.org/toward-go2](https://blog.golang.org/toward-go2).

![cox](//images.contentful.com/le3mxztn6yoo/69VBxnKJEcgCCmAuMw6Q0y/110246d95c70fc4c90bf20ca20ab70f5/cox.jpg)
