---
title: "GopherCon 2019 - Tracking inter-process dependencies using static analysis"
description: "Using a service-oriented architecture instead of a monolithic architecture adds flexibility but also increases complexity. How will we keep track of which parts of our system depend on each other? To help solve this problem, I've been working on a project to analyze Go code (using Go!) to detect inter-process dependencies in our system. In this talk, I'll give a brief introduction to the static analysis libraries I used and share a few tips about how to use them effectively. I'll discuss obstacles I encountered along the way and my attempts to overcome them."
authors:
  - name: Beyang Liu for the GopherCon 2019 Liveblog
    url: https://twitter.com/beyang
publishDate: 2019-07-26T00:00-14:55
tags: [
  gophercon
]
slug: gophercon-2019-tracking-inter-process-dependencies-using-static-analysis
heroImage: https://about.sourcegraph.com/gophercon2019.png
published: true
---

Presenter: [Mike Seplowitz](https://twitter.com/mikesep)

Liveblogger: [Beyang Liu](https://twitter.com/beyang)

## Overview

Using a service-oriented architecture instead of a monolithic architecture adds flexibility but also
increases complexity. How will we keep track of which parts of our system depend on each other? To
help solve this problem, I've been working on a project to analyze Go code (using Go!) to detect
inter-process dependencies in our system. In this talk, I'll give a brief introduction to the static
analysis libraries I used and share a few tips about how to use them effectively. I'll discuss
obstacles I encountered along the way and my attempts to overcome them.

---

Mike works at Bloomberg on the Deployment Solutions team. Slides for this talk are online
[here](https://mikesep.dev/2019-07-26_gophercon_static_analysis_interprocess_dependencies.pdf).

Outline of this talk:

* Introduction
* Important questions
* Exploration
* Primer
* Attempt 1
* Attempt 2
* Takeaways

When Mike joined the Deployment Solutions team 2 years ago, they made the decision to start using Go
and also move to a microservices architecture. Their microservice only had a single endpoint, so
perhaps it was more a "nanoservice".

He embarked a project to accomplish the following:

1. Determine the dependencies of a single service
   * Highlight effects of a code change

2. See inter-service dependencies across the entire system
   * Visualize system graph
   * Detect cycles
   * Overlay traffic data on static graph

Here was his initial plan:

1. Find “interesting” function calls (that would indicate a dependency on an external service)
2. Call “destinations” = dependencies of the service
3. Service dependencies = edges of the system graph

### Important questions

What are some example "interesting" calls?

* Network: `net.Dial, net/http.Get, (*net/http.Client).Get`
* Higher level:
  ```text
  database/sql.OpenDB
  google.golang.org/grpc.Dial
  github.com/go-redis/redis.NewClient
  github.com/streadway/amqp.Dial (RabbitMQ)
  github.com/Shopify/sarama.NewAsyncProducer (Kafka)
  ```
* Processes: `(*os/exec.Cmd).Run, os/exec.FindProcess, os.Pipe`
* Filesystem: `os.Create, os.Open, os.Mkdir`

Who (which services) are we calling?

```bash
http.Get("https:#/myservice.example.com/path/to/resource")
http.Get(myserviceURL)
url #: os.Getenv("MYSERVICE_URL")
...
http.Get(url)
http.Get(app.Config.MyService.URL)
```

So which call do we "mark" (as indicating an external process dependency)?

You can have a direct call (super straightforward):

![image](https://user-images.githubusercontent.com/1646931/61969125-9f0a9b00-af8e-11e9-9d0f-8decc230cb60.png)

You can have a specific helper (i.e., 1 level removed):

![image](https://user-images.githubusercontent.com/1646931/61969150-ad58b700-af8e-11e9-9d95-641fe384525b.png)

You can also have generic helpers:

![image](https://user-images.githubusercontent.com/1646931/61969191-bba6d300-af8e-11e9-95b2-f30a9d7dca95.png)

So you are looking at the call chain:

![image](https://user-images.githubusercontent.com/1646931/61969382-45ef3700-af8f-11e9-9114-6096172f43bf.png)

The question is where in the call chain do you place the marker.

You can look at where the last place where the service URL appears. And you mark that with a comment:

![image](https://user-images.githubusercontent.com/1646931/61969401-4e477200-af8f-11e9-8c32-a570ec805778.png)

To take a more complex example, you want to look at the call graph and determine where to place the
markers. If you mark `func A` in the example below, you've covered all the ingoing paths to `func A`,
and you can disregard all outgoing paths, as well. Then you need to mark other functions that haven't yet been "covered":

![marked paths](https://user-images.githubusercontent.com/1646931/61969413-52738f80-af8f-11e9-88ce-0290d186fe0f.png)


Source diving... He did a quick search of GoDoc for "call graph" and found the following packages:

```text
golang.org/x/tools/go/callgraph
golang.org/x/tools/go/callgraph/cha
golang.org/x/tools/go/callgraph/rta
golang.org/x/tools/go/callgraph/static
```

Here are the key functions in each package, all of which take a `*ssa.Program` pointer:

![image](https://user-images.githubusercontent.com/1646931/61969596-c877f680-af8f-11e9-8a9b-37d40035bc0d.png)


A lot of packages in `golang.org/x/tools` that are prefixed with `analysis/`:

![image](https://user-images.githubusercontent.com/1646931/61969626-d7f73f80-af8f-11e9-88cc-506c8105c72e.png)

"The analysis package defines the interface between a modular static analysis and an analysis driver
program."

A "Pass" is running an Analyzer on a single package. There were a few such reusable passes:

analysis/passes/inspect -> `*inspector.Inspector`
analysis/passes/ctrlflow -> `*cfg.CFG (basically)`
analysis/passes/buildssa -> `*ssa.Package, []*ssa.Function`

The Plan: For each package Pass,
1. Grab the SSA result from the buildssa Pass.
2. Build the call graph using rta.Analyze.
3. Traverse the call graph, marking paths that lead to “interesting” calls.
4. Report unmarked paths as linter errors. 
5. Report destination markers as dependency data.



### Primer

This section is a quick primer on static analysis packages in the Go compiler and standard library.

Relevant packages:

```text
go/
  token
  ast
  parser
golang.org/x/tools/go/
  packages
  ssa
  callgraph
  analysis
```

Here's the rough control flow in the Go compiler:

![image](https://user-images.githubusercontent.com/1646931/61969635-dd548a00-af8f-11e9-985b-c7b0f36d8982.png)

Here's the data structure that represents locations in code:

![image](https://user-images.githubusercontent.com/1646931/61969639-de85b700-af8f-11e9-9f7e-033c691b317c.png)

ASTs and parsing:

![image](https://user-images.githubusercontent.com/1646931/61969738-17be2700-af90-11e9-9aa2-b82d5588423e.png)

Here's an example AST for a simple code snippet:

![image](https://user-images.githubusercontent.com/1646931/61969739-1987ea80-af90-11e9-99d0-f733a4ee4c0c.png)

Here are the key structures in the `go/ast` package:

![image](https://user-images.githubusercontent.com/1646931/61969740-1ab91780-af90-11e9-8d66-af5c27434910.png)

`go/parser` parses Go expressions and returns an AST.

![image](https://user-images.githubusercontent.com/1646931/61969743-1bea4480-af90-11e9-82c9-e532e490a1d2.png)

`golang.org/x/tools/go/packages` loads packages (this replaces the old `golang/x/tools/go/loader` package)

![image](https://user-images.githubusercontent.com/1646931/61969747-1d1b7180-af90-11e9-8315-ad554b3b6a32.png)

SSA is the intermediate code representation. A lot of analysis programs build the SSA representation
and then analyze that:

![ssa](https://user-images.githubusercontent.com/1646931/61969750-1e4c9e80-af90-11e9-9e08-6ddce468fc20.png)

The `callgraph` package constructs call graph data structures from SSA structures.

![callgraph](https://user-images.githubusercontent.com/1646931/61969758-20aef880-af90-11e9-920e-9dea619ab2dc.png)

When you're traversing a call graph, use recursion, and maps are useful to keep track of what you've
seen.

The analysis package defines the interface between a modular static analysis and an analysis driver
program:

![analysis](https://user-images.githubusercontent.com/1646931/61969762-2278bc00-af90-11e9-828e-403a094829fa.png)

You can store a "Fact"s for later use.


### Attempt #1

The plan: For each package Pass,
1. Grab the SSA result from the buildssa Pass.
2. Build the call graph using rta.Analyze.
3. Traverse the call graph, recording Facts to mark paths that lead to
“interesting” calls.
4. Report unmarked paths as linter errors.
5. Report destination markers as dependency data.

There were a few bumps:

If you don't declare Facts, you don't get some things:
* no dependency-ordered tree of analyzer passes [code]
* no syntax analysis of dependent packages [code 1 & 2]

`analysis/passes/buildssa` hiccups:
* not “modular” — each pass builds a new ssa.Program [code](https://github.com/golang/tools/blob/9b2cb0e5f602ea1985fa63f891f2a91e1162dfa8/go/analysis/passes/buildssa/buildssa.go#L39-L47)
* uses ssa.BuilderMode(0) [code](https://github.com/golang/tools/blob/9b2cb0e5f602ea1985fa63f891f2a91e1162dfa8/go/analysis/passes/buildssa/buildssa.go#L49-L51)

He hit a point of return: `singlecheck.Main()` calls `os.Exit`, so you can't report results after an invocation to that function.

He tried some workarounds:

1. `if pass.Pkg.Name #= "main" { ...`
  * But there were multiple packages named "main"!
2. Write to `stdout` or a file as you go (locked with `sync.Mutex`)
3. Run analysis driver in child process

But it was just not working well:

* Multiple passes, each with separate SSA program builds 
* ssa.BuilderMode may have been a confounding factor
* RTA limitations? Docs: "The resulting call graph is less precise than one produced by pointer analysis,
but the algorithm is much faster. For example, running the cmd/callgraph tool
on its own source takes ~2.1s for RTA and ~5.4s for points-to analysis."

### Attempt 2

Rebuild from the ground up:

1. Swap out Rapid Type Analysis (RTA) for Andersen's pointer analysis
2. Simple driver:
   ```text
   packages.Load
   ssautil.AllPackages and (*ssa.Program).Build)
   pointer.Analyze
   ```
3. Visualize the call graph

Did it work? Well... he got this:

![confused](https://user-images.githubusercontent.com/1646931/61969765-23a9e900-af90-11e9-9994-31b03a6a999a.png)

And this:

![4139 lines](https://user-images.githubusercontent.com/1646931/61969768-273d7000-af90-11e9-9988-34a45b347ef5.png)

It's a lot of stuff, but it's useful and interesting! He started going through this call graph. Some observations:

![opening files](https://user-images.githubusercontent.com/1646931/61969771-286e9d00-af90-11e9-849b-411d929fb3f2.png)

There were a few false positives, because call graph analyses don't precisely follow the actual
runtime execution path of the code:

![false positive](https://user-images.githubusercontent.com/1646931/61969774-299fca00-af90-11e9-93c0-b756c91c14f8.png)
![false positive 2](https://user-images.githubusercontent.com/1646931/61969776-2ad0f700-af90-11e9-8908-18b78fd32214.png)

It looks like `readSource` and `ParseFile` use a file, but the example shows we don't actually use a file.

Another class of false positive is what he calls the `(*sync.Once).Do` problem. `(*sync.Once).Do`
invokes a function exactly once. There are many functions that invoke `(*sync.Once).Do`:

![graph](https://user-images.githubusercontent.com/1646931/61969780-2c022400-af90-11e9-94f2-597f2c734af1.png)

In callgraph, there is a 1-1 mapping:

![callgraph](https://user-images.githubusercontent.com/1646931/61969783-2d335100-af90-11e9-8a5d-0fc35a27cebd.png)

So the previous call graph really looks like this:

![spider graph](https://user-images.githubusercontent.com/1646931/61969795-30c6d800-af90-11e9-9e97-fd2e91a2d094.png)

And because everything calls `os.Getenv`, you have a loop:

![loopback](https://user-images.githubusercontent.com/1646931/61969796-31f80500-af90-11e9-8411-fd869b5a9eab.png)

But if you special case handling of `(*sync.Once).Do`, you can rewrite the call graph to look like
what it should:

![skiplist](https://user-images.githubusercontent.com/1646931/61969799-33293200-af90-11e9-84ad-a00c5ae3d667.png)

Aside from a handful of these false positives, it works pretty well. The example below highlights
all marked functions in red.

![code1](https://user-images.githubusercontent.com/1646931/61969803-345a5f00-af90-11e9-94ff-cf1f8a67ce1a.png)
![code2](https://user-images.githubusercontent.com/1646931/61969805-358b8c00-af90-11e9-983d-4131f9b78292.png)


They ran it on real code:
* A team-owned microservice framework
* Command-line parser: github.com/jessevdk/go-flags

A couple more caveats:
* Rapid Type Analysis does not include edges for calls made via reflection
* Pointer analysis has the same limitation


### Takeaways

If you're going to do static analysis, consider the following:
* Call graphs can easy or tricky! And it can get tricky pretty quickly.
* Some documentation in the relevant packges is great. Other documentation leaves much to be desired.
* Start simple
* Talk to the community. He regrets not doing this sooner as it would've saved him time.

### About the author

_Beyang Liu is the CTO and co-founder of Sourcegraph. Beyang studied Computer Science at Stanford, where he published research in probabilistic graphical models and computer vision at the Stanford AI Lab. You can chat with Beyang on Twitter [@beyang](https://twitter.com/beyang) or our community [Discord](https://discord.com/invite/vqsBW8m5Y8)._
