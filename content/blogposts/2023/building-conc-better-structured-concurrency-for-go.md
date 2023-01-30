---
title: 'Building Conc: better structured concurrency for go'
authors:
  - name: Camden Cheek
    url: https://twitter.com/camdendcheek
publishDate: 2023-01-30T10:00-07:00
description: 'We built and released conc, an open-source library which makes it easier and safer to write concurrent code in Go.'
tags: [blog]
slug: 'building-conc-better-structured-concurrency-for-go'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/conc-og-social.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/conc-og-social.png 
---

# Building Conc: better structured concurrency for go

Go was already designed to make concurrency easier than it is in other languages, but at Sourcegraph I still found myself running into the same problems when writing concurrent code.

In particular, it is difficult to write concurrent code that operates reasonably in the face of panics. We don't want the entire process to crash when a panic occurs in a spawned goroutine, and we want to avoid other problems that can be triggered by panics like deadlocks or leaked goroutines. Go does not provide an easy way to do this natively.

So I built [conc](https://github.com/sourcegraph/conc), a library that makes writing concurrent code more elegant and reduces the amount of boilerplate code. The code below shows how much boilerplate you can reduce when using `conc` instead of the Go standard library.

<table>
<tr>
<th><code>stdlib</code></th>
<th><code>conc</code></th>
</tr>
<tr>
<td>

```go
type propagatedPanic struct {
    val   any
    stack []byte
}

func main() {
    done := make(chan *propagatedPanic)
    go func() {
        defer func() {
            if v := recover(); v != nil {
                done <- &propagatedPanic{
                    val:   v,
                    stack: debug.Stack(),
                }
            } else {
                done <- nil
            }
        }()
        doSomethingThatMightPanic()
    }()
    if val := <-done; val != nil {
        panic(val)
    }
}
```
</td>
<td>

```go
func main() {
    var wg conc.WaitGroup
    wg.Go(doSomethingThatMightPanic)
    // panics with a nice stacktrace
    wg.Wait()
}
```
</td>
</tr>
</table>

## Some background: solving the same problem many times and building an internal library

I've often found myself writing similar code to handle common concurrency patterns and panics in Go. In many Sourcegraph projects, we rely heavily on concurrent Go code to efficiently search billions of lines of code, so after the Go 1.18 release in March 2022 [introduced Generics](https://go.dev/blog/why-generics), I realized that this could fix a lot of the frustrations I'd had before, and make a concurrency library a lot more succinct.

Previously when I'd written helper functions to better handle concurrency, I needed different functions for different data types. This meant writing separate functions for strings, Tasks, or any other data type that I was working with. Now that generics are available, it's easy to operate over whatever data types are present in a consistent way.

Around six months ago, I started working on an internal library to generalize how we use goroutines. Internally, we've used this library extensively already, but now I've cleaned up the code, documented everything, and released it as an open-source package for other developers and teams to use as well.

I found time to do the majority of this cleaning and documenting while I was trapped at an airport over the Christmas break due to the flight delays across the US in December. I wrote the [README](https://github.com/sourcegraph/conc), added and cleaned up the comments and docstrings, and added and moved the code to a public repository with an MIT license. I even had time to throw together a colorful logo to represent the splitting and re-joining of multiple processes before I finally got to board my plane.

![Conc logo](https://storage.googleapis.com/sourcegraph-assets/blog/upload_b3d7822a2033a3f8c2d98966767466c7.png)

## Diving into goroutines, concurrency, panics and scope

With Go, concurrency is already a first-class citizen, so it's generally a pretty low bar to add concurrent code to a Go project. But doing it _correctly_ is still often hard, and there are lots of mistakes I've seen (and made) in concurrent go code, such as:

* Not cleaning up resources correctly
* Causing deadlocks
* Crashing the entire program because of a panic in a single Goroutine

Sometimes you _want_ your entire program to crash if one Goroutine panics, but in many cases you don't. At Sourcegraph we use Goroutines to efficiently index massive amounts of source code, and we want to avoid re-doing work that we've already (successfully) completed, even if there's a partial failure.

### Better panic handling

This was the first challenge with using naked Goroutines. With Go's concurrency, you don't get any kind of scoping. Whenever you spawn a new Goroutine, it inherits the exact permissions and access as the Goroutine that spawned it. This makes it challenging to elegantly recover from a panicking Goroutine, and also difficult to log and diagnose some issues as the panic stacktrace ends too soon and doesn't include (often vital) information from the Goroutine that spawned it.

One way to deal with this using the standard Go library is by using a deferred function and manually passing the stacktrace around, as in the example included before.


```go
type caughtPanicError struct {
    val   any
    stack []byte
}

func (e *caughtPanicError) Error() string {
    return fmt.Sprintf(
        "panic: %q\n%s",
        e.val,
        string(e.stack)
    )
}

func main() {
    done := make(chan error)
    go func() {
        defer func() {
            if v := recover(); v != nil {
                done <- &caughtPanicError{
                    val: v,
                    stack: debug.Stack()
                }
            } else {
                done <- nil
            }
        }()
        doSomethingThatMightPanic()
    }()
    err := <-done
    if err != nil {
        panic(err)
    }
}
```

This adds 33 lines of boilerplate code for a one-line function.

Here, the main function starts a Goroutine that runs the function doSomethingThatMightPanic() which could potentially panic. We define a deferred function that will  execute when the Goroutine exits. The deferred function uses `recover()` to get the value of the panic if there is one and uses the `caughtPanicError` struct with the value of the panic and the stacktrace to send the details of the caughtPanicError if required.

This is essentially the boilerplate that `conc` wraps away for you, letting you write the following instead:

```go
func main() {
    var wg conc.WaitGroup
    wg.Go(doSomethingThatMightPanic)
    // panics with a nice stacktrace
    wg.Wait()
}
```

Because any panics and errors propagate up together, you can handle them gracefully using conc's provided `WaitGroup`.

### Simpler concurrent processing with `Pool` and `iter`

A common pattern in any kind of parallel processing is to do a bunch of stuff in parallel and then collect the results into a single data structure. For example, any time you need to make multiple network requests but don't want to be blocked by the total latency for all round trips, you can make all the network calls at once and then wait until the last one has completed.

When using Go's standard library, you'd usually create a `sync.WaitGroup` and a deferred function. This also requires a bunch of boilerplate code that `conc` makes unnecessary. As an illustrative example, consider a function that fetches the last name of a user over a network given a firstname.

```
package main

import (
    "context"
    "fmt"
    "io"
    "net/http"

    "github.com/sourcegraph/conc/iter"
    "github.com/sourcegraph/conc/pool"
)

func fetchLastName(ctx context.Context, firstName string) (string, error) {
    req, err := http.NewRequestWithContext(
        ctx,
        "GET",
        fmt.Sprintf("https://myexampleapp.com/users/%s/last_name", firstName),
        nil,
    )
    if err != nil {
        return "", err
    }

    resp, err := http.DefaultClient.Do(req)
    if err != nil {
        return "", err
    }
    b, err := io.ReadAll(resp.Body)
    return string(b), err
}
```

If we have a list of first names and we want to efficiently fetch the last name for each first name, we could do this using `conc`'s `pool` as follows.

```go
func fetchLastNames_pool(ctx context.Context, firstNames []string) ([]string, error) {
	p := pool.NewWithResults[string]().WithContext(ctx)
	for _, firstName := range firstNames {
		firstName := firstName
		p.Go(func(ctx context.Context) (string, error) {
			return fetchLastName(ctx, firstName)
		})
	}
	return p.Wait()
}
```

Or equivalently using `iter` :

```go
func fetchLastNames2(ctx context.Context, firstNames []string) ([]string, error) {
	return iter.MapErr(firstNames, func(firstName *string) (string, error) {
		return fetchLastName(ctx, *firstName)
	})
}
```

There are several other examples (along with the equivalent standard library code) in the [conc GitHub](https://github.com/sourcegraph/conc/) based around `conc`'s three main goals:

* [Making it harder to leak Goroutines](https://github.com/sourcegraph/conc/blob/main/README.md#goal-1-make-it-harder-to-leak-goroutines)
* [Handling panics gracefully](https://github.com/sourcegraph/conc/blob/main/README.md#goal-2-handle-panics-gracefully)
* [Making concurrent code easier to read](https://github.com/sourcegraph/conc/blob/main/README.md#goal-3-make-concurrent-code-easier-to-read)


## Using conc for parallel stream processing

Something else conc does taht is more specific to our usecase as Sourcegraph is parallel stream processing. While indexing large amounts of code, we often end up with multiple streams of results that we want to post-process. Each result in the stream requires at least one network request, for example to look up permission on a repository or to fetch the rest of a file for a specific query match.

For this we always want to:

* Do the network requests in parallel
* Show the results to the user as soon as possible
* Maintain the order of the stream (beacuse we've already ranked the results)

It's difficult to get all three of these right at the same time, so one of the goals I had while writing [Conc's Stream package](https://pkg.go.dev/github.com/sourcegraph/conc/stream#Stream) is to abstract away as much of the complexity for that workflow as possible.

Now I can write custom functions to handle multiple file streams at once using code simliar to the example below. This efficiently and safely gets the contents of each file from a list of file names.

```go
func streamFileContents(ctx context.Context, fileNames <-chan string, fileContents chan<- string) {
	s := stream.New()
	for fileName := range fileNames {
		fileName := fileName
		s.Go(func() stream.Callback {
			contents := fetchFileContents(ctx, fileName)
			return func() { fileContents <- contents }
		})
	}
	s.Wait()
}
```

## The goals of `conc`

Conc is hopefully already useful to anyone writing concurrent Go code who wants a better way to handle panics, avoid leaking Goroutines, or simply have more readable concurrent code. It's still a young project though and I expect it to evolve and improve over time. One thing I've had to think about is what I *don't* want it to be. 

My main goal with `conc` is that it should be hard to use incorrectly. Concurrent code is infamous for causing headaches and hard-to-identify bugs, and while many developers might feel like they are smart enough to avoid the problems associated with concurrent programming, in reality these bugs can burn anyone.

![Puppies parallel programming](https://storage.googleapis.com/sourcegraph-assets/blog/upload_ee1c4226c42ba701cde2324025599202.png)

This goal of "make it hard to use incorrectly" comes with tradeoffs. Specifically, it means some (potentially useful) features are unlikely to be added to conc because they would break this goal. Shortly after the library went public I got a request to [add channels to conc](https://github.com/sourcegraph/conc/issues/56) and while I can see how some advanced user of conc could get value from this, I'd rather keep to the "hard to misuse" goal wherever possible.

![GitHub issues conversation](https://storage.googleapis.com/sourcegraph-assets/blog/upload_e8c695bc11b8f2a62ceafaefa0d354dd.png)

## Challenges I faced while building conc

Conc is quite a small library, coming in at just under 2000 lines of Go code, but it took a lot of tweaking to get it to a point where I was happy to release it publicly.

![SCC conc statistics](https://storage.googleapis.com/sourcegraph-assets/blog/upload_622f8a97c46fe4a1742ac48e45a35c2d.png)

(Calculated using [scc](https://github.com/boyter/scc).)

### challenge #1: Keeping the API natural and unsurprising
To me, the API feels very natural now and most of the tweaks I did were to extend the goal of making it hard to use incorrectly. From my experience with other libraries, and looking at other concurrency implementations for inspiration, I found that nearly all of them suffer from at least one of the following problems.

* They feel **unnatural** to use 
* They contain many **foot guns** or they make it easy to do dangerous things without realizing
* They make it **hard to understand** what's actually happening under the hood
* They contain **surprising** implementation details that catch users off guard

Often I found that I had to reduce the feature set of Conc in order to keep it simple and safe. I've made some slight tweaks after getting some feedback from users that further these goals. 

For example, at Sourcegraph we generally use `GO_MAX_PROCS` to limit Goroutines to the number of core available. For us, that's often a sane default, but Go's scheduler can happily spawn 1000s of routines. For a majority of users, having this somewhat arbitrary limit was **surprising**, so by following the goal of "follow the principle of least surprise" it made sense to remove this.

### challenge #2: Discovering edge cases while handling panics

Panics aren't meant to be used as a way of exception handling, but while writing `conc` I needed to be able to catch and handle panics. One thing I learned about Go in spite of coding in it for years is that when you intercept a panic with a `nil` value, it will look like nothing actually went wrong.

For example, running hte following code will print "did not panic", even though a panic occurs.

```go
package main

func main() {
	defer func() {
		if r := recover(); r != nil {
			println("caught a panic!")
		} else {
			println("did not panic")
		}
	}()

	panic(nil)
}
```

## Releasing `conc` to the world

After I made the GitHub repository public, I posted about `conc` internally. I expected my coworkers to look over it and maybe give some comments or criticism, but it quickly got shared over [to Reddit](https://www.reddit.com/r/golang/comments/1022agb/conc_better_structured_concurrency_for_go/), where it received a bit of (mainly positive) attention. There's since been some discussion [on GitHub](https://github.com/sourcegraph/conc/issues?q=is%3Aissue+is%3Aclosed) and [on Hacker News](https://news.ycombinator.com/item?id=34344514) and I've made some small tweaks based on feedback.

It's been fun to watch `conc` spreading across GitHub as people discover it. Currently there are [423 matches](https://sourcegraph.com/search?q=context%3Aglobal+sourcegraph%2Fconc&patternType=standard&sm=1&groupBy=repo) for `sourcegraph/conc`. Many of these are automatic summaries of trending repositories or similar, but it's also made its way for example into [Kong](https://sourcegraph.com/github.com/Kong/kubernetes-ingress-controller/-/blob/internal/dataplane/kong_client.go) already.

If you're using or expecting to use `conc` in your own project, please continue the conversation. I'm keen to make `conc` the easiest and sanest way to manage concurrency in Go.

Internally now I'm working on simplifying parts of the Sourcegraph codebase to use `conc` instead of naked Goroutines or other workarounds to handle panics in concurrent code. 


